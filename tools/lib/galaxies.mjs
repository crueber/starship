// Nearby galaxies: McConnachie (2012) "The Observed Properties of Dwarf Galaxies in and around the Local Group" via VizieR J/AJ/144/4.
import path from 'node:path';
import { RAW, getTextCached, parseVizierTSV, num, log, warn, head } from './util.mjs';
import * as A from '../../shared/astro.js';

async function simbadDims(cfg, names) {
  // angular dimensions (arcmin diameters) and position angle for galaxies the catalogue has no size for
  const out = {};
  try {
    const ids = [...new Set(names.flatMap((n) => [n, `NAME ${n}`]))].map((x) => `'${x.replace(/'/g, "''")}'`).join(',');
    const q = `SELECT i.id, b.galdim_majaxis, b.galdim_minaxis, b.galdim_angle FROM ident AS i JOIN basic AS b ON i.oidref=b.oid WHERE i.id IN (${ids})`;
    const res = await fetch(cfg.sources.simbadTap, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ request: 'doQuery', lang: 'adql', format: 'csv', query: q }), signal: AbortSignal.timeout(60000) });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text();
    for (const line of text.trim().split('\n').slice(1)) {
      const f = line.replace(/"/g, '').split(',');
      const nm = f[0].replace(/^NAME /, ''); const maj = parseFloat(f[1]), mn = parseFloat(f[2]), pa = parseFloat(f[3]);
      if (maj > 0) out[nm] = { maj, min: mn > 0 ? mn : maj, pa: Number.isFinite(pa) ? pa : null };
    }
  } catch (e) { warn(`SIMBAD size lookup failed (${e.message}); sizes will be derived from magnitudes only`); }
  return out;
}

export async function buildGalaxies(cfg) {
  head('GALAXIES');
  const dest = path.join(RAW, 'mcconnachie2012_J_AJ_144_4.tsv');
  const text = await getTextCached({
    dataset: 'Nearby galaxies — McConnachie 2012 (VizieR J/AJ/144/4/catalog)', url: cfg.sources.vizier,
    params: { '-source': 'J/AJ/144/4/catalog', '-out.max': 'unlimited', '-out.add': '_RAJ,_DEJ' }, dest, minBytes: 5000,
    note: 'Open https://vizier.cds.unistra.fr/viz-bin/VizieR-3?-source=J/AJ/144/4/catalog , tick "_RAJ,_DEJ" in the extra columns, set max rows to unlimited, output format "tab-separated-values", and save as ' + path.relative(path.join(RAW, '..', '..'), dest),
  });
  if (!text) return null;
  const rows = parseVizierTSV(text);
  const all = [];
  for (const r of rows) {
    const name = r.Name; const d = num(r.D);
    if (!name || d === null || name === 'The Galaxy') continue;
    const ra = num(r._RAJ2000), dec = num(r._DEJ2000);
    if (ra === null || dec === null) continue;
    all.push({
      name, type: r.MType || null, ra, dec, dKpc: d,
      vmag: num(r.Vmag), absMag: num(r.VMag), rhArcmin: num(r.R1), muV: num(r.muV), pa: num(r.PA), ell: num(r.Ell), group: r.SubG || null, assoc: r.n_Name || null,
    });
  }
  all.sort((a, b) => a.dKpc - b.dKpc);
  log(`  catalogue has ${all.length} galaxies with a distance`);
  const chosen = all.slice(0, cfg.galaxies.count);
  for (const want of cfg.galaxies.include || []) {
    const g = all.find((x) => x.name.toLowerCase().includes(want.toLowerCase()));
    if (g && !chosen.includes(g)) chosen.push(g); else if (!g) warn(`galaxy "${want}" not found in catalogue`);
  }
  // fill sizes the catalogue lacks: SIMBAD angular dimensions first, else derive from total magnitude + central surface brightness
  const missing = chosen.filter((g) => g.rhArcmin === null || g.ell === null);
  const sim = missing.length ? await simbadDims(cfg, missing.map((g) => g.name).concat(['LMC', 'SMC'])) : {};
  for (const g of chosen) {
    g.sizeSource = 'McConnachie 2012';
    if (g.rhArcmin === null || g.ell === null || g.pa === null) {
      const d = sim[g.name] || (g.name === 'LMC' && sim.LMC) || (g.name === 'SMC' && sim.SMC) || null;
      if (d) {
        if (g.rhArcmin === null) g.rhArcmin = +(d.maj * 0.5 * 0.45).toFixed(2);      // half-light radius ≈ 0.45 of the visible semi-major axis
        if (g.ell === null) g.ell = +(1 - d.min / d.maj).toFixed(3);
        if (g.pa === null && d.pa !== null) g.pa = d.pa;
        g.sizeSource = 'SIMBAD galdim (' + (g.rhArcmin ? 'diameter ' + d.maj.toFixed(0) + '\u2032)' : '');
      } else if (g.rhArcmin === null && g.vmag !== null && g.muV !== null) {
        const E = Math.pow(10, -0.4 * (g.vmag + 26.74)), SR = Math.pow(1 / 206264.806, 2);
        const I0 = Math.pow(10, -0.4 * (g.muV + 26.74)) / SR;                     // E per sr at the centre
        const eps = g.ell ?? 0.3;
        const rs = Math.sqrt(E / (2 * Math.PI * I0 * (1 - eps)));                   // exponential scale length (rad): L = 2π I0 rs² (1−ε)
        g.rhArcmin = +(1.68 * rs * 206264.806 / 60).toFixed(1);
        g.sizeSource = 'derived from V and central surface brightness (exponential profile)';
      }
    }
    if (g.ell === null) g.ell = 0.2;
    const v = A.raDecToVec(g.ra, g.dec); const dpc = g.dKpc * 1000;
    g.x = +(v[0] * dpc).toFixed(1); g.y = +(v[1] * dpc).toFixed(1); g.z = +(v[2] * dpc).toFixed(1);
    if (g.vmag === null && g.absMag !== null) g.vmag = +(g.absMag + 5 * Math.log10(dpc / 10)).toFixed(2);
  }
  log('  selected: ' + chosen.map((g) => `${g.name} (${(g.dKpc * 3.2616).toFixed(0)} kly)`).join(', '));
  return { json: { galaxies: chosen }, stats: { catalogue: all.length, selected: chosen.length, nearestKly: +(chosen[0].dKpc * 3.2616).toFixed(1), farthestKly: +(chosen[chosen.length - 1].dKpc * 3.2616).toFixed(1) } };
}
