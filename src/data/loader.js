// Loads the pre-built data files. NEVER touches the network unless the page is served over http(s) and the bundled script is absent
// (then it reads the same files from ./data/ on the same origin).
import { STAR_STRIDE } from '../../tools/lib/stars-format.js';

function b64ToBytes(b64) {
  const bin = atob(b64); const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export async function loadData() {
  let D = window.__SIMDATA;
  let source = 'bundle';
  if (!D) {
    if (location.protocol === 'file:') throw new Error('data/data-bundle.js is missing. Run: node tools/build-data.mjs');
    source = 'files';
    const get = async (n, type) => { const r = await fetch(`data/${n}`); if (!r.ok) throw new Error(`data/${n}: HTTP ${r.status}`); return type === 'bin' ? new Uint8Array(await r.arrayBuffer()) : r.json(); };
    D = { manifest: await get('manifest.json'), names: await get('names.json'), galaxies: await get('galaxies.json'), exoplanets: await get('exoplanets.json'), ephemeris: await get('ephemeris.json') };
    D.starsBytes = await get('stars.bin', 'bin');
    try { D.milkywayBytes = await get('milkyway.bin', 'bin'); } catch { D.milkywayBytes = null; }
  } else {
    D.starsBytes = b64ToBytes(D.stars);
    D.milkywayBytes = D.milkyway ? b64ToBytes(D.milkyway) : null;
  }
  return decode(D, source);
}

export function decode(D, source = 'node') {
  const bytes = D.starsBytes;
  const n = Math.floor(bytes.length / STAR_STRIDE);
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const pos = new Float64Array(n * 3), absMag = new Float32Array(n), teff = new Float32Array(n), flags = new Uint8Array(n), lc = new Uint8Array(n), hip = new Uint32Array(n);
  for (let i = 0; i < n; i++) {
    const o = i * STAR_STRIDE;
    pos[i * 3] = dv.getFloat32(o, true); pos[i * 3 + 1] = dv.getFloat32(o + 4, true); pos[i * 3 + 2] = dv.getFloat32(o + 8, true);
    absMag[i] = dv.getInt16(o + 12, true) / 1000; teff[i] = dv.getUint16(o + 14, true);
    flags[i] = dv.getUint8(o + 16); lc[i] = dv.getUint8(o + 17); hip[i] = dv.getUint32(o + 20, true);
  }
  // Milky Way light map
  let milkyWay = null;
  if (D.milkywayBytes) {
    const b = D.milkywayBytes, h = new DataView(b.buffer, b.byteOffset, 32);
    const W = h.getUint16(4, true), H = h.getUint16(6, true);
    const lq = new Uint16Array(b.buffer.slice(b.byteOffset + 32, b.byteOffset + 32 + W * H * 2));
    const cq = new Uint16Array(b.buffer.slice(b.byteOffset + 32 + W * H * 2, b.byteOffset + 32 + W * H * 4));
    milkyWay = { width: W, height: H, logMin: h.getFloat32(8, true), logMax: h.getFloat32(12, true), colMin: h.getFloat32(16, true), colMax: h.getFloat32(20, true), integratedV: h.getFloat32(24, true), lum: lq, col: cq };
  }
  const names = new Map();
  for (const e of D.names.entries) names.set(e[0], { name: e[1], desig: e[2], sp: e[3], system: e[4], gj: e[5] });
  const hosts = new Map();
  for (const h of D.exoplanets.hosts) if (h.star >= 0) hosts.set(h.star, h);
  return { n, pos, absMag, teff, flags, lc, hip, names, hosts, galaxies: D.galaxies.galaxies, ephemeris: D.ephemeris, manifest: D.manifest, milkyWay, source };
}
