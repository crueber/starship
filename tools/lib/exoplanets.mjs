// NASA Exoplanet Archive (pscomppars) → exoplanets.json, matched to stars in stars.bin.
import path from 'node:path';
import { RAW, getTextCached, parseCSV, num, log, warn, head } from './util.mjs';
import * as A from '../../shared/astro.js';

const COLS = ['pl_name', 'hostname', 'hip_name', 'hd_name', 'gaia_dr3_id', 'sy_dist', 'ra', 'dec', 'sy_pnum', 'sy_snum', 'pl_letter', 'pl_orbper', 'pl_orbsmax', 'pl_orbeccen', 'pl_orbincl',
  'pl_orblper', 'pl_rade', 'pl_bmasse', 'pl_eqt', 'pl_insol', 'discoverymethod', 'disc_year', 'st_teff', 'st_rad', 'st_mass', 'st_lum', 'st_spectype', 'sy_vmag'];

export async function buildExoplanets(cfg, stars, epoch) {
  head('KNOWN EXOPLANETS');
  const dest = path.join(RAW, 'nasa_exoplanet_archive_pscomppars.csv');
  const text = await getTextCached({
    dataset: 'NASA Exoplanet Archive (pscomppars)', url: cfg.sources.exoTap,
    params: { query: `select ${COLS.join(',')} from pscomppars`, format: 'csv' }, dest, minBytes: 100000,
    note: 'Download from https://exoplanetarchive.ipac.caltech.edu/ → "Planetary Systems Composite Parameters" → Download Table (CSV) with at least these columns:\n      ' + COLS.join(', ') + `\n      Save as ${path.relative(path.join(RAW, '..', '..'), dest)}`,
  });
  if (!text) return null;
  if (!text.startsWith('pl_name') && !text.includes('pl_name')) { warn('Exoplanet Archive response did not look like CSV: ' + text.slice(0, 200)); return null; }
  const rows = parseCSV(text);
  log(`  archive rows (confirmed planets): ${rows.length}`);

  const byHip = new Map(), byGaia = new Map();
  stars.forEach((s, i) => { if (s.hip) byHip.set(s.hip, i); if (s.gaia) byGaia.set(String(s.gaia), i); });
  // For position matching, keep unit vectors of every star at J2000 (propagate by proper motion from catalogue epoch).
  const n = stars.length, ux = new Float32Array(n), uy = new Float32Array(n), uz = new Float32Array(n);
  stars.forEach((s, i) => {
    if (s.src === 'sun') { ux[i] = uy[i] = uz[i] = NaN; return; }
    const dt = 2000.0 - s.epoch, cd = Math.cos(s.dec * A.DEG);
    const v = A.raDecToVec(s.ra + (s.pmra * dt) / 3.6e6 / Math.max(cd, 1e-6), s.dec + (s.pmde * dt) / 3.6e6);
    ux[i] = v[0]; uy[i] = v[1]; uz[i] = v[2];
  });

  const hosts = new Map();       // hostname → host record
  const stat = { rows: rows.length, matchedHip: 0, matchedGaia: 0, matchedPos: 0, unmatched: 0 };
  const hostMatch = new Map();   // hostname → star index | -1

  function matchHost(r) {
    if (hostMatch.has(r.hostname)) return hostMatch.get(r.hostname);
    let idx = -1, how = '';
    const hipM = /HIP\s*(\d+)/.exec(r.hip_name || '');
    if (hipM && byHip.has(+hipM[1])) { idx = byHip.get(+hipM[1]); how = 'hip'; }
    if (idx < 0) { const g = /Gaia DR3\s*(\d+)/.exec(r.gaia_dr3_id || ''); if (g && byGaia.has(g[1])) { idx = byGaia.get(g[1]); how = 'gaia'; } }
    if (idx < 0) {
      const ra = num(r.ra), dec = num(r.dec), dist = num(r.sy_dist);
      if (ra !== null && dec !== null) {
        const v = A.raDecToVec(ra, dec); const tol = Math.cos(40 / 3600 * A.DEG);   // 40 arcsec
        let best = -1, bestDot = tol;
        for (let i = 0; i < n; i++) {
          const dot = ux[i] * v[0] + uy[i] * v[1] + uz[i] * v[2];
          if (dot > bestDot) {
            const sd = stars[i].dist;
            if (dist === null || Math.abs(sd - dist) <= Math.max(0.25 * dist, 1.5)) { bestDot = dot; best = i; }
          }
        }
        if (best >= 0) { idx = best; how = 'pos'; }
      }
    }
    hostMatch.set(r.hostname, idx);
    if (idx >= 0) stat[how === 'hip' ? 'matchedHip' : how === 'gaia' ? 'matchedGaia' : 'matchedPos']++;
    return idx;
  }

  let kept = 0;
  for (const r of rows) {
    const idx = matchHost(r);
    if (idx < 0 && cfg.exoplanets.keep !== 'all') continue;
    let h = hosts.get(r.hostname);
    if (!h) {
      h = { star: idx, name: r.hostname, teff: num(r.st_teff), rad: num(r.st_rad), mass: num(r.st_mass), logL: num(r.st_lum), spec: r.st_spectype || null, vmag: num(r.sy_vmag), distPc: num(r.sy_dist), planets: [] };
      if (idx < 0) { h.ra = num(r.ra); h.dec = num(r.dec); }
      hosts.set(r.hostname, h);
    }
    h.planets.push({
      name: r.pl_name, l: r.pl_letter, per: num(r.pl_orbper), a: num(r.pl_orbsmax), e: num(r.pl_orbeccen), inc: num(r.pl_orbincl), w: num(r.pl_orblper),
      r: num(r.pl_rade), m: num(r.pl_bmasse), teq: num(r.pl_eqt), ins: num(r.pl_insol), meth: r.discoverymethod, yr: num(r.disc_year),
    });
    kept++;
  }
  const list = [...hosts.values()];
  for (const h of list) if (h.star >= 0) stars[h.star].flags |= 16;      // HAS_PLANETS
  // unmatched hosts (all planets) for the report
  const allHosts = new Set(rows.map((r) => r.hostname));
  stat.hostsTotal = allHosts.size;
  stat.hostsMatched = [...allHosts].filter((h) => hostMatch.get(h) >= 0).length;
  stat.planetsKept = kept;
  stat.planetsTotal = rows.length;
  stat.hostsKept = list.length;
  stat.unmatched = stat.hostsTotal - stat.hostsMatched;
  log(`  hosts: ${stat.hostsTotal} total, ${stat.hostsMatched} matched to the star catalogue (HIP ${stat.matchedHip}, Gaia ${stat.matchedGaia}, position ${stat.matchedPos})`);
  log(`  planets kept: ${kept} of ${rows.length} (${list.length} host stars). Unmatched hosts are mostly faint Kepler/TESS stars outside the catalogue.`);
  return { json: { epoch, hosts: list }, stats: stat };
}
