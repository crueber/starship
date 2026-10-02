// Star catalogue stage: Hipparcos (brightest N) ∪ Gaia DR3 (everything inside the near radius).
import fs from 'node:fs';
import path from 'node:path';
import { RAW, ensureFile, getTextCached, parseCSV, num, log, warn, head, reportMissing, flags } from './util.mjs';
import * as A from '../../shared/astro.js';

// stars.bin per-record flag bits (also documented in manifest.json)
export const F = {
  DIST_ESTIMATED: 1,      // distance is a spectro-photometric estimate (parallax too noisy)
  GAIA: 2,                // astrometry from Gaia DR3
  COLOR_FROM_PHOT: 4,     // temperature from B-V / BP-RP, not from a spectral type
  SPTYPE_DERIVED: 8,      // no spectral type in the source; class inferred from colour + luminosity
  HAS_PLANETS: 16,        // at least one confirmed planet (set by the exoplanet stage)
  SUN: 32,
  TEFF_DEFAULTED: 64,     // no colour at all in the source: 5500 K assumed (counted in the manifest)
};

export const STAR_STRIDE = 24;   // bytes per record: f32 x,y,z | i16 Mv*1000 | u16 Teff | u8 flags | u8 lumClass | u16 reserved | u32 hip

function decimalYear(date) {
  const y = date.getUTCFullYear();
  const start = Date.UTC(y, 0, 1), end = Date.UTC(y + 1, 0, 1);
  return y + (date.getTime() - start) / (end - start);
}

function parseHipparcos(text) {
  const rows = [];
  let bad = 0;
  let i = 0;
  while (i < text.length) {
    let j = text.indexOf('\n', i);
    if (j < 0) j = text.length;
    const line = text.slice(i, j); i = j + 1;
    if (line.length < 100) continue;
    const f = line.split('|');
    if (f.length < 77) { bad++; continue; }
    const hip = num(f[1]);
    const ra = num(f[8]), dec = num(f[9]);
    if (hip === null || ra === null || dec === null) { bad++; continue; }
    const vmag = num(f[5]), hp = num(f[44]);
    const bt = num(f[32]), vt = num(f[34]);
    const mag = vmag ?? hp ?? num(f[34]);
    if (mag === null) { bad++; continue; }
    rows.push({
      hip, ra, dec, plx: num(f[11]), pmra: num(f[12]) ?? 0, pmde: num(f[13]) ?? 0, eplx: num(f[16]),
      vmag: mag, bv: num(f[37]) ?? (bt !== null && vt !== null ? 0.850 * (bt - vt) : null), sp: (f[76] || '').trim(), hd: num(f[71]),
      epoch: 1991.25, src: 'hip',
    });
  }
  return { rows, bad };
}

/** Parallax-derived, estimated, or defaulted distance + Teff + Mv for one star. Mutates s. */
function derive(s, sc) {
  const [dMin, dMax] = sc.photometricDistanceClampPc;
  let flags = 0;
  const snrMin = s.src === 'gaia' ? 0 : sc.hipMinParallaxSNR;
  const goodPlx = s.plx > 0 && (s.src === 'gaia' || (s.eplx > 0 && s.plx / s.eplx >= snrMin));

  // ── effective temperature (first pass, class unknown → assume class from spectral type text or V)
  const parsed = A.parseSpectralType(s.sp);
  let T = null, lc = parsed ? parsed.lc : A.LC.UNK;
  let fromSpec = false;
  const firstLC = lc === A.LC.UNK ? undefined : lc;
  if (parsed) { T = A.teffFromSpectral(parsed, firstLC); fromSpec = true; }
  if (T === null) {
    if (s.bpRp !== null && s.bpRp !== undefined) T = A.teffFromBpRp(s.bpRp);
    else if (s.bv !== null && s.bv !== undefined) T = A.teffFromBV(s.bv);
    if (T !== null) flags |= F.COLOR_FROM_PHOT;
    if (!s.sp) flags |= F.SPTYPE_DERIVED;
  }
  if (T === null) { T = 5500; flags |= F.TEFF_DEFAULTED | F.COLOR_FROM_PHOT; }

  // ── distance & absolute magnitude
  let dpc, Mv;
  if (goodPlx) {
    dpc = 1000 / s.plx;
    Mv = s.vmag + 5 - 5 * Math.log10(dpc);
    // class inference when the source gives none: compare with the dwarf sequence
    if (lc === A.LC.UNK) {
      const dwarf = A.mvFromTeff(T, A.LC.V);
      const diff = dwarf - Mv;            // positive = brighter than a dwarf of this temperature
      lc = diff > 2.2 ? A.LC.III : diff > 0.9 ? A.LC.IV : A.LC.V;
      if (fromSpec && lc !== A.LC.V) T = A.teffFromSpectral(parsed, lc);
    }
  } else {
    flags |= F.DIST_ESTIMATED;
    if (lc === A.LC.UNK) lc = T > 8000 ? A.LC.V : T < 5800 ? A.LC.III : A.LC.IV;
    if (fromSpec && parsed.lc === A.LC.UNK) T = A.teffFromSpectral(parsed, lc);
    const mvTyp = parsed && parsed.wd ? 11 : A.mvFromTeff(T, lc);
    dpc = Math.min(dMax, Math.max(dMin, Math.pow(10, (s.vmag - mvTyp + 5) / 5)));
    Mv = s.vmag + 5 - 5 * Math.log10(dpc);
  }
  // white dwarfs: far fainter than any main-sequence star of the same colour (e.g. Sirius B)
  if (lc !== A.LC.WD && T > 5500 && Mv - A.mvFromTeff(T, A.LC.V) > 5.5) { lc = A.LC.WD; flags |= F.SPTYPE_DERIVED; }
  s.dpc = dpc; s.Mv = Mv; s.teff = Math.round(T); s.flags = flags | (s.src === 'gaia' ? F.GAIA : 0) | (s.gaiaAstrometry ? F.GAIA : 0); s.lc = lc;
}

function positionAt(s, epoch) {
  // linear proper motion from the catalogue epoch to the target epoch; position relative to the Sun, ICRS (pc)
  const dt = epoch - s.epoch;
  const cosd = Math.cos(s.dec * A.DEG);
  const ra = s.ra + (s.pmra * dt) / 3.6e6 / Math.max(cosd, 1e-6);
  const dec = s.dec + (s.pmde * dt) / 3.6e6;
  const v = A.raDecToVec(ra, dec);
  return { x: v[0] * s.dpc, y: v[1] * s.dpc, z: v[2] * s.dpc, ra, dec };
}


// ───── cross-match helpers ─────
function unitAt(s, epoch) {
  const dt = epoch - s.epoch, cd = Math.cos(s.dec * A.DEG);
  return A.raDecToVec(s.ra + (s.pmra * dt) / 3.6e6 / Math.max(cd, 1e-6), s.dec + (s.pmde * dt) / 3.6e6);
}
class Grid {
  constructor(cell) { this.cell = cell; this.map = new Map(); }
  key(x, y, z) { return `${Math.floor(x / this.cell)},${Math.floor(y / this.cell)},${Math.floor(z / this.cell)}`; }
  add(v, item) { const k = this.key(v[0], v[1], v[2]); let a = this.map.get(k); if (!a) this.map.set(k, (a = [])); a.push(item); }
  near(v, fn) {
    const c = this.cell, [x, y, z] = v;
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
      const a = this.map.get(this.key(x + dx * c, y + dy * c, z + dz * c)); if (a) for (const it of a) fn(it);
    }
  }
}
const ARCSEC = Math.PI / 180 / 3600;

/**
 * Binary/multiple distance harmonisation: components of a close visual pair (< maxSepArcsec) whose parallaxes agree
 * within errors are physically at the same distance; independent noisy parallaxes would otherwise put them thousands of AU
 * apart along the line of sight. All members get the inverse-variance-weighted mean parallax.
 */
function harmoniseBinaries(stars, nearPlx, maxSepArcsec = 30) {
  const cand = stars.filter((s) => s.plx > 0.5 * nearPlx && (s.src === 'gaia' || s.gaiaAstrometry || (s.eplx > 0 && s.plx / s.eplx >= 10)));
  const grid = new Grid(maxSepArcsec * ARCSEC * 2);
  const vecs = new Map();
  for (const s of cand) { const v = unitAt(s, 2016.0); vecs.set(s, v); grid.add(v, s); }
  const parent = new Map(cand.map((s) => [s, s]));
  const find = (a) => { while (parent.get(a) !== a) { parent.set(a, parent.get(parent.get(a))); a = parent.get(a); } return a; };
  const cosMax = Math.cos(maxSepArcsec * ARCSEC);
  for (const s of cand) {
    const v = vecs.get(s);
    grid.near(v, (t) => {
      if (t === s) return;
      const w = vecs.get(t);
      if (v[0] * w[0] + v[1] * w[1] + v[2] * w[2] < cosMax) return;
      const es = s.eplx > 0 ? s.eplx : 0.5, et = t.eplx > 0 ? t.eplx : 0.5;
      const dp = Math.abs(s.plx - t.plx), mean = 0.5 * (s.plx + t.plx);
      if (dp <= Math.min(Math.max(2.5 * Math.hypot(es, et), 0.04 * mean), 0.10 * mean)) parent.set(find(s), find(t));
    });
  }
  const groups = new Map();
  for (const s of cand) { const r = find(s); let g = groups.get(r); if (!g) groups.set(r, (g = [])); g.push(s); }
  let nGroups = 0, nStars = 0, maxShiftLy = 0;
  for (const g of groups.values()) {
    if (g.length < 2) continue;
    let sw = 0, sp = 0;
    for (const s of g) { const e = s.eplx > 0 ? s.eplx : 0.5; const w = 1 / (e * e); sw += w; sp += w * s.plx; }
    const mean = sp / sw, err = Math.sqrt(1 / sw);
    for (const s of g) { maxShiftLy = Math.max(maxShiftLy, Math.abs(1000 / s.plx - 1000 / mean) * A.LY_PER_PC); s.plx = mean; s.eplx = err; s.harmonised = true; }
    nGroups++; nStars += g.length;
  }
  return { nGroups, nStars, maxShiftLy };
}

export async function buildStars(cfg, epochDate, manifest) {
  head('STARS');
  const sc = cfg.stars;
  const epoch = decimalYear(epochDate);
  const nearPlx = 1000 / (sc.nearRadiusLy * A.PC_PER_LY);       // mas
  log(`  near radius ${sc.nearRadiusLy} ly → parallax ≥ ${nearPlx.toFixed(3)} mas; epoch ${epoch.toFixed(2)}`);

  // ── Hipparcos ──
  const hipPath = path.join(RAW, 'hip_main.dat');
  const hipOk = await ensureFile({ dataset: 'Hipparcos main catalogue (I/239)', url: cfg.sources.hipparcos, dest: hipPath, minBytes: 40e6,
    note: 'Save the file exactly as data/raw/hip_main.dat (≈51 MB, plain text with "|" separators).' });
  if (!hipOk) return null;
  const { rows: hipRows, bad } = parseHipparcos(fs.readFileSync(hipPath, 'latin1'));
  log(`  Hipparcos: ${hipRows.length} usable rows (${bad} skipped)`);
  if (hipRows.length < 100000) warn('Hipparcos row count is lower than expected (catalogue has 118,218 entries). File may be truncated.');

  const byHip = new Map(hipRows.map((r) => [r.hip, r]));
  const chosen = new Map();         // key → star

  // brightest N
  let pool = hipRows;
  if (sc.brightMaxMagnitude !== null && sc.brightMaxMagnitude !== undefined) pool = pool.filter((r) => r.vmag <= sc.brightMaxMagnitude);
  const sorted = pool.slice().sort((a, b) => a.vmag - b.vmag);
  const bright = sorted.slice(0, sc.brightCount);
  for (const r of bright) chosen.set('H' + r.hip, r);
  const faintest = bright.length ? bright[bright.length - 1].vmag : NaN;
  log(`  brightest ${bright.length} Hipparcos stars: V ≤ ${faintest.toFixed(2)}`);

  // near Hipparcos
  let nearHip = 0;
  for (const r of hipRows) {
    if (r.plx !== null && r.plx >= nearPlx && r.eplx > 0 && r.plx / r.eplx >= sc.hipNearMinSNR && !chosen.has('H' + r.hip)) { chosen.set('H' + r.hip, r); nearHip++; }
  }
  log(`  + ${nearHip} nearby Hipparcos stars outside the bright set`);

  // ── Gaia DR3 nearby sample ──
  let gaiaCount = 0, gaiaReplaced = 0, gaiaNew = 0, gaiaStatus = 'disabled', dedup = 0;
  // grid of plausible Hipparcos counterparts (positions at Gaia epoch) for position cross-matching
  const hipGrid = new Grid(6 * ARCSEC * 2), hipVec = new Map();
  for (const r of hipRows) if (r.plx !== null && r.plx > 0.5 * nearPlx) { const v = unitAt(r, 2016.0); hipVec.set(r, v); hipGrid.add(v, r); }
  if (sc.gaia.enabled) {
    const adql = `SELECT g.source_id, g.ra, g.dec, g.parallax, g.parallax_error, g.pmra, g.pmdec, g.phot_g_mean_mag, g.bp_rp, g.ruwe, g.radial_velocity, h.original_ext_source_id AS hip ` +
      `FROM gaiadr3.gaia_source AS g LEFT OUTER JOIN gaiadr3.hipparcos2_best_neighbour AS h ON g.source_id = h.source_id ` +
      `WHERE g.parallax >= ${nearPlx.toFixed(4)} AND g.parallax_over_error >= ${sc.gaia.minParallaxOverError}` +
      (sc.gaia.maxRuwe ? ` AND g.ruwe <= ${sc.gaia.maxRuwe}` : '') + ` ORDER BY g.parallax DESC`;
    const tag = `${nearPlx.toFixed(2)}_${sc.gaia.minParallaxOverError}_${sc.gaia.maxRuwe ?? 'x'}`;
    const csvPath = path.join(RAW, `gaia_dr3_near_${tag}.csv`);
    const text = await getTextCached({
      dataset: 'Gaia DR3 nearby-star sample (ESA TAP)', url: cfg.sources.gaiaTap,
      params: { REQUEST: 'doQuery', LANG: 'ADQL', FORMAT: 'csv', QUERY: adql }, dest: csvPath, minBytes: 1000,
      note: `Run this ADQL at https://gea.esac.esa.int/archive/ (Advanced/ADQL form), export as CSV and save as ${path.relative(path.join(RAW, '..', '..'), csvPath)}:\n      ${adql}`,
    });
    if (text) {
      const rows = parseCSV(text);
      gaiaCount = rows.length;
      for (const g of rows) {
        const plx = num(g.parallax), ra = num(g.ra), dec = num(g.dec);
        if (plx === null || ra === null || dec === null) continue;
        const hip = num(g.hip);
        const gmag = num(g.phot_g_mean_mag), bprp = num(g.bp_rp);
        let base = hip && byHip.get(hip);
        if (!base && gmag !== null) {
          // Gaia source with no Hipparcos best-neighbour link: it may still be a Hipparcos star (e.g. eps Eri) – match by position
          const v = A.raDecToVec(ra, dec); const cosMax = Math.cos(3 * ARCSEC);
          let best = null, bestDot = cosMax; const Vg = vFromGsafe(gmag, bprp);
          hipGrid.near(v, (h) => {
            const w = hipVec.get(h); const dot = v[0] * w[0] + v[1] * w[1] + v[2] * w[2];
            if (dot > bestDot && Math.abs(h.vmag - Vg) < 1.0 && Math.abs(h.plx - plx) <= Math.max(5 * (h.eplx || 1), 0.08 * plx)) { bestDot = dot; best = h; }
          });
          if (best) { base = best; dedup++; }
        }
        if (base) {
          // keep Hipparcos photometry + spectral type, take Gaia's far better astrometry
          const s = chosen.get('H' + base.hip) || base;
          s.ra = ra; s.dec = dec; s.plx = plx; s.eplx = num(g.parallax_error); s.pmra = num(g.pmra) ?? s.pmra; s.pmde = num(g.pmdec) ?? s.pmde;
          s.epoch = 2016.0; s.gaiaAstrometry = true; s.gaia = g.source_id; s.bpRp = bprp;
          chosen.set('H' + base.hip, s);
          gaiaReplaced++;
        } else {
          if (gmag === null) continue;
          const V = vFromGsafe(gmag, bprp);
          chosen.set('G' + g.source_id, {
            gaia: g.source_id, hip: null, ra, dec, plx, eplx: num(g.parallax_error), pmra: num(g.pmra) ?? 0, pmde: num(g.pmdec) ?? 0,
            vmag: V, bv: null, bpRp: bprp, sp: '', epoch: 2016.0, src: 'gaia',
          });
          gaiaNew++;
        }
      }
      gaiaStatus = 'ok';
      log(`  Gaia: ${gaiaCount} sources inside radius → ${gaiaNew} new stars, ${gaiaReplaced} upgraded Hipparcos astrometry (${dedup} of them matched by position, not by Gaia's own HIP link)`);
    } else {
      gaiaStatus = 'MISSING';
      warn('Gaia nearby sample unavailable: the "every star within 100 ly" requirement is NOT fully met (Hipparcos misses faint red dwarfs).');
    }
  }

  // ── harmonise distances of binary components ──
  const har = harmoniseBinaries([...chosen.values()], nearPlx);
  log(`  binary harmonisation: ${har.nStars} stars in ${har.nGroups} close groups share one parallax (largest distance shift ${har.maxShiftLy.toFixed(3)} ly)`);

  // ── derive physical quantities & position ──
  const out = [];
  for (const s of chosen.values()) {
    if (s.src === 'hip' && s.gaiaAstrometry) s.src = 'hip'; // photometry from Hipparcos
    derive(s, sc);
    const p = positionAt(s, epoch);
    s.x = p.x; s.y = p.y; s.z = p.z; s.raE = p.ra; s.decE = p.dec;
    s.dist = Math.hypot(s.x, s.y, s.z);
    out.push(s);
  }
  // The Sun
  out.push({ hip: null, gaia: null, name: 'Sun', sp: 'G2V', x: 0, y: 0, z: 0, dist: 0, Mv: 4.83, teff: 5772, flags: F.SUN, lc: A.LC.V, vmag: -26.74, src: 'sun', epoch });
  out.sort((a, b) => a.dist - b.dist);

  // the near-radius contract
  const nearLimitPc = sc.nearRadiusLy * A.PC_PER_LY;
  const within = out.filter((s) => s.dist <= nearLimitPc).length;

  const stats = {
    total: out.length, withinRadius: within, hipparcosBright: bright.length, hipparcosNearExtra: nearHip, gaiaSample: gaiaCount, gaiaNew, gaiaUpgraded: gaiaReplaced, gaiaDedupByPosition: dedup, binaryGroupsHarmonised: har.nGroups, binaryStarsHarmonised: har.nStars, gaiaStatus,
    distEstimated: out.filter((s) => s.flags & F.DIST_ESTIMATED).length,
    colourFromPhotometry: out.filter((s) => s.flags & F.COLOR_FROM_PHOT).length,
    teffDefaulted: out.filter((s) => s.flags & F.TEFF_DEFAULTED).length,
    faintestBrightV: Number(faintest.toFixed(2)),
  };
  log(`  total ${out.length} stars (${within} within ${sc.nearRadiusLy} ly); ${stats.distEstimated} with estimated distance; ${stats.teffDefaulted} with defaulted colour`);
  return { stars: out, stats, epoch };
}

function vFromGsafe(g, bprp) {
  if (bprp === null || bprp === undefined) return g + 1.0;   // no colour → typical faint red dwarf offset (flagged via COLOR_FROM_PHOT/TEFF_DEFAULTED)
  return A.vFromG(g, bprp);
}

export function encodeStars(stars) {
  const buf = Buffer.alloc(stars.length * STAR_STRIDE);
  stars.forEach((s, i) => {
    const o = i * STAR_STRIDE;
    buf.writeFloatLE(s.x, o); buf.writeFloatLE(s.y, o + 4); buf.writeFloatLE(s.z, o + 8);
    buf.writeInt16LE(Math.max(-32000, Math.min(32000, Math.round(s.Mv * 1000))), o + 12);
    buf.writeUInt16LE(Math.max(1000, Math.min(65000, s.teff)), o + 14);
    buf.writeUInt8(s.flags & 255, o + 16);
    buf.writeUInt8(s.lc & 255, o + 17);
    buf.writeUInt16LE(0, o + 18);
    buf.writeUInt32LE(s.hip || 0, o + 20);
  });
  return buf;
}
