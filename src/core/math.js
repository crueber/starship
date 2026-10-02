// Small double-precision vector helpers on plain arrays [x,y,z] (JS numbers are doubles, which is what we need for astronomy).
export const TAU = Math.PI * 2;
export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const smootherstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * t * (t * (t * 6 - 15) + 10); };
export const mod = (a, n) => ((a % n) + n) % n;

export const v3 = (x = 0, y = 0, z = 0) => [x, y, z];
export const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const len = (a) => Math.hypot(a[0], a[1], a[2]);
export const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
export const madd = (a, b, s) => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
export const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
export const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

/** Any unit vector perpendicular to n. */
export function perpendicular(n) {
  const a = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  return norm(cross(n, a));
}

/** Rotate v about unit axis k by angle (Rodrigues). */
export function rotateAbout(v, k, ang) {
  const c = Math.cos(ang), s = Math.sin(ang), d = dot(k, v) * (1 - c), x = cross(k, v);
  return [v[0] * c + x[0] * s + k[0] * d, v[1] * c + x[1] * s + k[1] * d, v[2] * c + x[2] * s + k[2] * d];
}

// 3x3 matrices as row-major arrays of 9
export const mat3Mul = (A, B) => {
  const r = new Array(9);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) r[i * 3 + j] = A[i * 3] * B[j] + A[i * 3 + 1] * B[3 + j] + A[i * 3 + 2] * B[6 + j];
  return r;
};
export const mat3Vec = (M, v) => [M[0] * v[0] + M[1] * v[1] + M[2] * v[2], M[3] * v[0] + M[4] * v[1] + M[5] * v[2], M[6] * v[0] + M[7] * v[1] + M[8] * v[2]];
export const rotX = (a) => { const c = Math.cos(a), s = Math.sin(a); return [1, 0, 0, 0, c, -s, 0, s, c]; };
export const rotZ = (a) => { const c = Math.cos(a), s = Math.sin(a); return [c, -s, 0, s, c, 0, 0, 0, 1]; };

// ───── deterministic PRNG & hashing (procedural content must look the same on every visit) ─────
export function hashString(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return h >>> 0;
}
export function hash2(a, b) {
  let h = (a ^ 0x9e3779b9) >>> 0;
  h = Math.imul(h ^ (b + 0x7f4a7c15), 0x85ebca6b) >>> 0;
  h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35) >>> 0; h ^= h >>> 16;
  return h >>> 0;
}
export function mulberry32(seed) {
  let a = seed >>> 0;
  const rng = () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  rng.range = (lo, hi) => lo + (hi - lo) * rng();
  rng.int = (lo, hi) => Math.floor(lo + (hi - lo + 1) * rng());
  rng.pick = (arr) => arr[Math.floor(rng() * arr.length)];
  rng.chance = (p) => rng() < p;
  rng.normal = () => { let u = 0, v = 0; while (u === 0) u = rng(); v = rng(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v); };
  rng.logUniform = (lo, hi) => Math.exp(Math.log(lo) + (Math.log(hi) - Math.log(lo)) * rng());
  rng.weighted = (items) => { // [[value, weight], …]
    let tot = 0; for (const [, w] of items) tot += w;
    let r = rng() * tot; for (const [v, w] of items) { r -= w; if (r <= 0) return v; }
    return items[items.length - 1][0];
  };
  return rng;
}

export function fmtDistance(km) {
  const a = Math.abs(km);
  if (a < 1) return `${(km * 1000).toFixed(a < 0.01 ? 1 : 0)} m`;
  if (a < 1e5) return `${km.toFixed(a < 100 ? 1 : 0)} km`;
  if (a < 1.4959787e8 * 0.2) return `${(km / 1e6).toFixed(2)} M km`;
  if (a < 9.4607e12 * 0.1) return `${(km / 1.4959787e8).toFixed(a / 1.4959787e8 < 10 ? 2 : 1)} AU`;
  return `${(km / 9.4607304725808e12).toFixed(a / 9.46e12 < 10 ? 3 : 2)} ly`;
}
export function fmtSpeed(kms) {
  const C = 299792.458, a = Math.abs(kms);
  if (a < 1e-2) return `${(kms * 1000).toFixed(1)} m/s`;
  if (a < 1000) return `${kms.toFixed(a < 10 ? 2 : 1)} km/s`;
  if (a / C < 1) return `${Math.round(kms).toLocaleString('en-US')} km/s`;
  return `${(a / C).toLocaleString('en-US', { maximumFractionDigits: a / C < 10 ? 2 : 0 })} c`;
}
export function fmtDuration(sec) {
  if (!isFinite(sec)) return '—';
  const s = Math.abs(sec);
  if (s < 90) return `${s.toFixed(0)} s`;
  if (s < 5400) return `${Math.floor(s / 60)} m ${String(Math.floor(s % 60)).padStart(2, '0')} s`;
  if (s < 172800) return `${Math.floor(s / 3600)} h ${String(Math.floor((s % 3600) / 60)).padStart(2, '0')} m`;
  if (s < 86400 * 400) return `${(s / 86400).toFixed(1)} d`;
  return `${(s / 31557600).toFixed(2)} y`;
}
