// Real Milky Way light map from Gaia DR3.
//
// We ask the Gaia archive (ADQL, async job) to sum G / BP / RP flux per HEALPix pixel for a uniform random subsample
// of the whole catalogue (random_index < N), excluding the bright stars that stars.bin already draws one by one.
// What remains is the diffuse "unresolved starlight" of the Milky Way as seen from the Sun, with its real bulge,
// dust lanes and colour gradients. Resampled to an equirectangular galactic-coordinate image and stored as 16-bit log values.
import fs from 'node:fs';
import path from 'node:path';
import { RAW, log, warn, head, reportMissing, flags, sleep, ROOT, getTextCached, problems } from './util.mjs';
import * as A from '../../shared/astro.js';

const GAIA_TOTAL_SOURCES = 1811709771;       // gaia_source rows in DR3
const G_ZEROPOINT = 25.6874;                 // DR3 G-band photometric zero point (e-/s → Vega mag)
const SR_PER_SQDEG = (Math.PI / 180) ** 2;

// ───── HEALPix (NESTED), enough to map a direction to a pixel index ─────
function spreadBits(v) {                     // interleave zeros between bits (Morton)
  let r = 0;
  for (let i = 0; i < 16; i++) r |= ((v >> i) & 1) << (2 * i);
  return r;
}
export function ang2pixNest(nside, theta, phi) {
  const z = Math.cos(theta), za = Math.abs(z);
  let tt = phi % (2 * Math.PI); if (tt < 0) tt += 2 * Math.PI; tt /= Math.PI / 2;
  let face, ix, iy;
  if (za <= 2 / 3) {
    const t1 = nside * (0.5 + tt), t2 = nside * z * 0.75;
    const jp = Math.floor(t1 - t2), jm = Math.floor(t1 + t2);
    const ifp = Math.floor(jp / nside), ifm = Math.floor(jm / nside);
    face = ifp === ifm ? (ifp | 4) : ifp < ifm ? ifp : ifm + 8;
    ix = jm & (nside - 1); iy = nside - (jp & (nside - 1)) - 1;
  } else {
    let ntt = Math.floor(tt); if (ntt >= 4) ntt = 3;
    const tp = tt - ntt, tmp = nside * Math.sqrt(3 * (1 - za));
    let jp = Math.floor(tp * tmp), jm = Math.floor((1 - tp) * tmp);
    jp = Math.min(jp, nside - 1); jm = Math.min(jm, nside - 1);
    if (z >= 0) { face = ntt; ix = nside - jm - 1; iy = nside - jp - 1; } else { face = ntt + 8; ix = jp; iy = jm; }
  }
  return face * nside * nside + spreadBits(ix) + (spreadBits(iy) << 1);
}

export async function buildSkymap(cfg) {
  head('MILKY WAY LIGHT MAP (Gaia DR3 flux sums)');
  const sc = cfg.skymap;
  if (!sc || !sc.enabled) { log('  skipped (build.skymap.enabled=false)'); return null; }
  const level = sc.healpixLevel, nside = 2 ** level, npix = 12 * nside * nside;
  // The archive reliably answers ~4 M-row aggregate queries synchronously (~30 s) but long async jobs time out, so the
  // random subsample is fetched in chunks of random_index ranges and merged. Each chunk is cached separately.
  const chunkRows = sc.chunkRows || 4000000;
  const fg = new Float64Array(npix), fbp = new Float64Array(npix), frp = new Float64Array(npix), cnt = new Float64Array(npix);
  let rows = 0, total = 0;
  const nChunks = Math.ceil(sc.sampleRows / chunkRows);
  for (let c = 0; c < nChunks; c++) {
    const lo = c * chunkRows, hi = Math.min(sc.sampleRows, lo + chunkRows);
    const adql = `SELECT GAIA_HEALPIX_INDEX(${level}, source_id) AS hp, COUNT(*) AS n, SUM(phot_g_mean_flux) AS fg, SUM(phot_bp_mean_flux) AS fbp, SUM(phot_rp_mean_flux) AS frp ` +
      `FROM gaiadr3.gaia_source WHERE random_index >= ${lo} AND random_index < ${hi} AND phot_g_mean_mag > ${sc.minGMag} GROUP BY hp`;
    const csv = path.join(RAW, 'skymap', `L${level}_G${sc.minGMag}_${lo}_${hi}.csv`);
    fs.mkdirSync(path.dirname(csv), { recursive: true });
    let text = null;
    for (let attempt = 0; attempt < 3 && !text; attempt++) {
      text = await getTextCached({ dataset: `Gaia DR3 HEALPix flux sums, chunk ${c + 1}/${nChunks}`, url: cfg.sources.gaiaTap,
        params: { REQUEST: 'doQuery', LANG: 'ADQL', FORMAT: 'csv', QUERY: adql }, dest: csv, minBytes: 1000,
        note: `Run this ADQL in the Gaia archive (https://gea.esac.esa.int/archive/ → ADQL, CSV) and save as ${path.relative(ROOT, csv)}:\n      ${adql}` });
      if (!text) { problems.pop(); if (!flags.offline) await sleep(4000); }
    }
    if (!text) {
      reportMissing({ dataset: `Gaia DR3 HEALPix flux sums, chunk ${c + 1}/${nChunks} (Milky Way light map)`, url: cfg.sources.gaiaTap, dest: csv, why: 'query failed 3 times or --offline with no cache',
        note: `Run this ADQL in the Gaia archive (https://gea.esac.esa.int/archive/ → ADQL, CSV) and save as ${path.relative(ROOT, csv)}:\n      ${adql}` });
      return null;
    }
    const lines = text.trim().split('\n');
    for (let i = 1; i < lines.length; i++) {
      const f = lines[i].split(',');
      const hp = +f[0]; if (!(hp >= 0 && hp < npix)) continue;
      if (cnt[hp] === 0) rows++;
      cnt[hp] += +f[1]; fg[hp] += +f[2] || 0; fbp[hp] += +f[3] || 0; frp[hp] += +f[4] || 0; total += +f[1];
    }
    log(`  chunk ${c + 1}/${nChunks} merged (${total.toLocaleString('en-US')} sources so far)`);
  }
  log(`  ${rows}/${npix} HEALPix pixels populated, ${total} sampled sources`);

  // ── self-check of the HEALPix implementation against a known Gaia source id
  {
    const sid = 5853498713190525696n;                         // Proxima Cen
    const want = Number(sid / (2n ** 35n * 4n ** BigInt(12 - level)));
    const v = A.raDecToVec(217.39232147200883, -62.67607511676666);
    const got = ang2pixNest(nside, Math.acos(v[2]), Math.atan2(v[1], v[0]));
    if (want !== got) throw new Error(`HEALPix self-check failed: expected ${want}, got ${got}`);
    log(`  HEALPix self-check OK (Proxima → pixel ${got})`);
  }

  // ── calibrate: pixel flux → surface brightness in "solar constants per steradian"
  const frac = total / GAIA_TOTAL_SOURCES * (1 + 0.0);         // sampled fraction of the (G > minGMag) population — approx: compare in code below
  // The random_index subsample is uniform over ALL sources, so scale by sampleRows / total sources.
  const sampleFrac = sc.sampleRows / GAIA_TOTAL_SOURCES;
  const pixSr = (4 * Math.PI) / npix;
  const SUN_MAG_V = -26.74;
  const toE = (flux) => {                                      // flux e-/s in sample → solar-constants per sr
    const fullFlux = flux / sampleFrac;
    const mag = G_ZEROPOINT - 2.5 * Math.log10(Math.max(fullFlux, 1e-3));
    return Math.pow(10, -0.4 * (mag - SUN_MAG_V)) / pixSr;
  };
  const W = sc.width, H = sc.height;
  const L = new Float32Array(W * H), C = new Float32Array(W * H);
  const base = new Float32Array(W * H), col = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    const b = (0.5 - (y + 0.5) / H) * Math.PI;                 // galactic latitude
    for (let x = 0; x < W; x++) {
      const l = ((x + 0.5) / W) * 2 * Math.PI - Math.PI;       // galactic longitude: -π..π, l=0 at centre of image
      const g = [Math.cos(b) * Math.cos(l), Math.cos(b) * Math.sin(l), Math.sin(b)];
      const v = A.galacticToIcrs(g);
      const hp = ang2pixNest(nside, Math.acos(Math.max(-1, Math.min(1, v[2]))), Math.atan2(v[1], v[0]));
      base[y * W + x] = fg[hp] > 0 ? toE(fg[hp]) : 0;
      col[y * W + x] = (fbp[hp] > 0 && frp[hp] > 0) ? Math.log10(fbp[hp] / frp[hp]) : NaN;
    }
  }
  // gentle blur (separable box ×2) to hide HEALPix pixel staircases; wrap in longitude
  const blur = (src, passes) => {
    let a = Float32Array.from(src), t = new Float32Array(a.length);
    const R = Math.max(1, Math.round(W / (2 * 360)));            // ≈0.5°
    for (let p = 0; p < passes; p++) {
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let s = 0, n = 0; for (let k = -R; k <= R; k++) { const v = a[y * W + ((x + k + W) % W)]; if (!Number.isNaN(v)) { s += v; n++; } } t[y * W + x] = n ? s / n : NaN; }
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let s = 0, n = 0; for (let k = -R; k <= R; k++) { const yy = Math.min(H - 1, Math.max(0, y + k)); const v = t[yy * W + x]; if (!Number.isNaN(v)) { s += v; n++; } } a[y * W + x] = n ? s / n : NaN; }
    }
    return a;
  };
  const lb = blur(base, 2), cb = blur(col, 2);
  let lo = Infinity, hi = -Infinity, clo = Infinity, chi = -Infinity, sum = 0;
  for (let i = 0; i < W * H; i++) {
    const v = Math.log10(Math.max(lb[i], 1e-14)); L[i] = v; lo = Math.min(lo, v); hi = Math.max(hi, v);
    const c = Number.isNaN(cb[i]) ? 0 : cb[i]; C[i] = c; clo = Math.min(clo, c); chi = Math.max(chi, c);
    sum += lb[i] * Math.cos((0.5 - (Math.floor(i / W) + 0.5) / H) * Math.PI);
  }
  // sanity: all-sky integrated brightness
  let totalE = 0; { const dOmega = (2 * Math.PI / W) * (Math.PI / H); for (let i = 0; i < W * H; i++) totalE += lb[i] * Math.cos((0.5 - (Math.floor(i / W) + 0.5) / H) * Math.PI) * dOmega; }
  const totalMag = -2.5 * Math.log10(totalE) + SUN_MAG_V;
  log(`  integrated unresolved light of the whole sky (G>${sc.minGMag}): V ≈ ${totalMag.toFixed(2)} mag  (expected roughly −5 … −6 for all starlight)`);
  log(`  surface brightness range: log10(E/sr) ${lo.toFixed(2)} … ${hi.toFixed(2)}; colour log10(BP/RP) ${clo.toFixed(2)} … ${chi.toFixed(2)}`);

  // ── pack: header + 2 channels of uint16 (log-quantised)
  const q = (arr, a, b) => { const out = new Uint16Array(arr.length); for (let i = 0; i < arr.length; i++) out[i] = Math.max(0, Math.min(65535, Math.round(((arr[i] - a) / (b - a)) * 65535))); return out; };
  const lq = q(L, lo, hi), cq = q(C, clo, chi);
  const head16 = Buffer.alloc(32); head16.write('MWM1', 0, 'ascii'); head16.writeUInt16LE(W, 4); head16.writeUInt16LE(H, 6);
  head16.writeFloatLE(lo, 8); head16.writeFloatLE(hi, 12); head16.writeFloatLE(clo, 16); head16.writeFloatLE(chi, 20); head16.writeFloatLE(totalMag, 24);
  const bin = Buffer.concat([head16, Buffer.from(lq.buffer), Buffer.from(cq.buffer)]);
  return {
    bin,
    stats: { width: W, height: H, healpixLevel: level, sampleRows: sc.sampleRows, sampledSources: total, populatedPixels: rows, integratedV: +totalMag.toFixed(2), logRange: [+lo.toFixed(2), +hi.toFixed(2)] },
  };
}
