// Shared astrophysics helpers (used by tools/build-data.mjs and bundled into the simulator).
// Pure functions, no DOM / Node APIs.
//
// Calibrations are approximations of the standard dwarf / giant / supergiant sequences
// (Pecaut & Mamajek 2013 "EEM" table for dwarfs; Allen / Straižys-style tables for evolved stars).
// They are used for: colour (temperature) from spectral type, and for photometric distance
// estimates when a Hipparcos parallax is too noisy. Every use is flagged in stars.bin.

export const DEG = Math.PI / 180;
export const PC_PER_LY = 1 / 3.261563777;
export const LY_PER_PC = 3.261563777;
export const KM_PER_PC = 3.0856775814913673e13;
export const KM_PER_LY = 9.4607304725808e12;
export const KM_PER_AU = 149597870.7;
export const C_KMS = 299792.458;
export const AU_PER_PC = 206264.80624709636;

export const LC = { V: 0, IV: 1, III: 2, II: 3, I: 4, WD: 5, UNK: 6 };

// ───── spectral-type → effective temperature (index = classIndex*10 + subtype, O=0 … M=6) ─────
const IDX = { O: 0, B: 1, A: 2, F: 3, G: 4, K: 5, M: 6 };
const T_V = [[3, 44900], [5, 41400], [6, 38300], [7, 36500], [9, 33000], [10, 31400], [11, 26000], [12, 20600], [13, 17000], [15, 15700], [16, 14500], [17, 14000], [18, 12300], [19, 10700],
  [20, 9700], [21, 9300], [22, 8800], [23, 8600], [25, 8080], [27, 7800], [30, 7220], [32, 6810], [35, 6510], [36, 6340], [38, 6170],
  [40, 5920], [42, 5770], [45, 5660], [48, 5490], [50, 5280], [51, 5170], [52, 5040], [53, 4830], [54, 4600], [55, 4410], [56, 4230], [57, 4070],
  [60, 3850], [61, 3660], [62, 3560], [63, 3430], [64, 3210], [65, 3060], [66, 2810], [67, 2680], [68, 2570], [69, 2380]];
const T_III = [[3, 42000], [5, 39000], [9, 32000], [10, 29500], [12, 20500], [15, 15000], [18, 12000], [20, 10000], [25, 8200], [30, 7200], [35, 6400], [40, 5900], [45, 5150], [48, 4950],
  [50, 4800], [51, 4660], [52, 4500], [53, 4300], [54, 4100], [55, 3950], [60, 3800], [61, 3700], [62, 3600], [63, 3500], [64, 3400], [65, 3250], [66, 3100], [68, 2900]];
const T_I = [[5, 40000], [9, 30000], [10, 25000], [15, 14000], [20, 9700], [25, 8300], [30, 7200], [35, 6600], [40, 5600], [45, 5000], [50, 4500], [55, 3900], [60, 3750], [62, 3600], [65, 3300], [68, 3000]];

// ───── Teff → absolute V magnitude, per luminosity class ─────
const MV_V = [[2380, 19.0], [2570, 17.6], [2680, 16.4], [2810, 15.1], [3060, 13.8], [3210, 12.5], [3430, 11.0], [3560, 10.2], [3660, 9.5], [3850, 8.9], [4070, 8.2], [4410, 7.4], [4830, 6.8],
  [5040, 6.4], [5280, 5.8], [5490, 5.4], [5660, 5.1], [5770, 4.82], [5920, 4.3], [6170, 3.9], [6510, 3.2], [7220, 2.5], [8080, 1.9], [8600, 1.6], [9700, 1.1], [10700, 0.7], [12300, -0.2],
  [15700, -1.2], [17000, -1.6], [20600, -2.4], [26000, -3.0], [31400, -4.0], [33000, -4.5], [41400, -5.7], [44900, -6.0]];
const MV_III = [[2900, 0.4], [3100, 0.0], [3250, -0.3], [3400, -0.5], [3600, -0.6], [3800, -0.5], [3950, -0.4], [4100, -0.2], [4300, 0.1], [4500, 0.4], [4800, 0.7], [4950, 0.8], [5150, 0.9],
  [5900, 1.0], [6400, 1.3], [7200, 0.9], [8200, 0.3], [10000, -0.5], [12000, -1.2], [15000, -2.3], [20500, -3.0], [29500, -4.0], [39000, -5.0]];
const MV_I = [[3000, -6.0], [3300, -6.5], [3600, -6.0], [3900, -5.5], [4500, -5.2], [5600, -5.5], [7200, -6.0], [9700, -6.3], [14000, -6.5], [25000, -6.5], [30000, -6.7], [40000, -6.8]];

// ───── Teff → bolometric correction in V (BC_V) ─────
const BC = [[2400, -6.6], [2600, -4.9], [3000, -3.2], [3500, -1.9], [4000, -0.95], [4500, -0.55], [5000, -0.30], [5500, -0.13], [5772, -0.07], [6000, -0.05], [6500, -0.01], [7000, 0.01],
  [8000, -0.05], [9000, -0.2], [10000, -0.4], [15000, -1.5], [20000, -2.1], [30000, -3.0], [40000, -3.9], [50000, -4.6]];

// ───── BP-RP → Teff (Gaia, dwarfs; anchors derived from the same Mamajek sequence) ─────
const BPRP_T = [[-0.30, 18000], [-0.05, 11000], [0.0, 9700], [0.26, 8080], [0.43, 7220], [0.60, 6510], [0.75, 5920], [0.82, 5772], [0.87, 5660], [0.98, 5280], [1.12, 5040], [1.35, 4410],
  [1.70, 4070], [1.90, 3850], [2.10, 3660], [2.40, 3560], [2.75, 3430], [3.20, 3210], [3.70, 3060], [4.20, 2810], [4.50, 2680], [4.70, 2570], [5.5, 2300]];

function interp(table, x) {
  if (x <= table[0][0]) return table[0][1];
  const n = table.length;
  if (x >= table[n - 1][0]) return table[n - 1][1];
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (table[m][0] <= x) lo = m; else hi = m; }
  const [x0, y0] = table[lo], [x1, y1] = table[hi];
  return y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);
}

/** Log-interpolated Teff (temperatures vary smoothly in log). */
function interpLogT(table, idx) {
  const lt = table.map(([i, t]) => [i, Math.log(t)]);
  return Math.exp(interp(lt, idx));
}

/**
 * Parse a Hipparcos-style spectral type string: "K3V", "G8III", "M1.5IIIe", "A0Va", "O9.5Ib", "DA2", "B9", "F5IV-V" …
 * Returns { cls, sub, lc (LC.*), idx, wd, carbon } or null when nothing usable.
 */
export function parseSpectralType(raw) {
  if (!raw) return null;
  let s = String(raw).trim().replace(/^\(|\)$/g, '');
  if (!s) return null;
  // white dwarfs: DA2, DB3, DC, DQ…  Teff ≈ 50400 / subtype
  if (/^D[ABOQZCXP]/.test(s)) {
    const m = /(\d+(?:\.\d+)?)/.exec(s);
    const n = m ? parseFloat(m[1]) : 8; // unknown subtype: assume cool-ish
    return { wd: true, lc: LC.WD, teff: Math.min(40000, 50400 / Math.max(n, 1.2)), raw: s };
  }
  if (/^(C|R|N)[-\d]|^S\d|^C$|^S$/.test(s)) return { carbon: true, lc: LC.III, teff: 3100, raw: s }; // carbon / S stars: deep red giants
  s = s.replace(/^(sd|d|g|k)(?=[OBAFGKM])/, '');
  const m = /^([OBAFGKM])\s*(\d+(?:\.\d+)?)?/.exec(s);
  if (!m) return null;
  const cls = m[1];
  const sub = m[2] !== undefined ? parseFloat(m[2]) : 5;
  const rest = s.slice(m[0].length);
  let lc = LC.UNK;
  const lm = /^[^IV]*?(Ia\+|Iab|Ia|Ib|III|II|IV|VI|V|I)/.exec(rest);
  if (lm) {
    const t = lm[1];
    lc = t === 'V' || t === 'VI' ? LC.V : t === 'IV' ? LC.IV : t === 'III' ? LC.III : t === 'II' ? LC.II : LC.I;
  }
  return { cls, sub, lc, idx: IDX[cls] * 10 + Math.min(sub, 9.9), raw: s };
}

/** Effective temperature for a parsed spectral type. lcOverride lets the caller pick a class. */
export function teffFromSpectral(p, lcOverride) {
  if (!p) return null;
  if (p.teff) return p.teff;
  const lc = lcOverride ?? (p.lc === LC.UNK ? LC.V : p.lc);
  if (lc === LC.III || lc === LC.II) return interpLogT(T_III, p.idx);
  if (lc === LC.I) return interpLogT(T_I, p.idx);
  if (lc === LC.IV) return Math.exp(0.5 * Math.log(interpLogT(T_V, p.idx)) + 0.5 * Math.log(interpLogT(T_III, p.idx)));
  return interpLogT(T_V, p.idx);
}

/** Typical absolute V magnitude for a temperature + luminosity class. */
export function mvFromTeff(T, lc = LC.V) {
  if (lc === LC.III || lc === LC.II) return interp(MV_III, T);
  if (lc === LC.I) return interp(MV_I, T);
  if (lc === LC.IV) return 0.5 * (interp(MV_V, T) + interp(MV_III, T));
  return interp(MV_V, T);
}

/** Ballesteros (2012) B-V → Teff. */
export function teffFromBV(bv) {
  const b = Math.max(-0.4, Math.min(2.2, bv));
  return 4600 * (1 / (0.92 * b + 1.7) + 1 / (0.92 * b + 0.62));
}

export function teffFromBpRp(c) { return Math.exp(interp(BPRP_T.map(([x, t]) => [x, Math.log(t)]), c)); }

/** Gaia G → Johnson V using Riello+2021 (valid to BP-RP 2.75, extended linearly beyond). */
export function vFromG(G, c) {
  const cc = Math.min(c, 2.75);
  let gMinusV = -0.02704 + 0.01424 * cc - 0.2156 * cc * cc + 0.01426 * cc ** 3;
  if (c > 2.75) gMinusV += -0.848 * (c - 2.75);
  if (c < -0.5) gMinusV = -0.02704 + 0.01424 * -0.5 - 0.2156 * 0.25 + 0.01426 * -0.125;
  return G - gMinusV;
}

export function bolometricCorrection(T) { return interp(BC, T); }

/** Luminosity (L_sun) from absolute V mag and Teff. */
export function luminosityFromMv(Mv, T) {
  const Mbol = Mv + bolometricCorrection(T);
  return Math.pow(10, -0.4 * (Mbol - 4.74));
}

/** Stellar radius in R_sun from L (L_sun) and Teff. */
export function radiusFromLT(L, T) { return Math.sqrt(L) / Math.pow(T / 5772, 2); }

/** Rough stellar mass (M_sun) from luminosity, main-sequence mass–luminosity relation. */
export function massFromLuminosity(L, lc = LC.V) {
  if (lc === LC.WD) return 0.6;
  if (lc === LC.III || lc === LC.II) return Math.min(5, Math.max(0.8, 1.3 + 0.1 * Math.log10(Math.max(L, 1))));
  if (lc === LC.I) return Math.min(25, Math.max(5, 6 * Math.pow(Math.max(L, 1) / 1e4, 0.25)));
  if (L < 0.033) return Math.pow(L / 0.23, 1 / 2.3);
  if (L < 16) return Math.pow(L, 1 / 4);
  if (L < 1.4 * Math.pow(2, 3.5) * 1000) return Math.pow(L / 1.4, 1 / 3.5);
  return Math.pow(L / 3200, 1 / 1.1) * 20;
}

// ───── coordinates ─────
/** Unit vector (ICRS equatorial, x→RA 0 Dec 0, z→north celestial pole) from RA/Dec degrees. */
export function raDecToVec(raDeg, decDeg) {
  const a = raDeg * DEG, d = decDeg * DEG, cd = Math.cos(d);
  return [cd * Math.cos(a), cd * Math.sin(a), Math.sin(d)];
}

// ICRS → Galactic rotation matrix (rows give galactic x,y,z axes expressed in ICRS).
export const ICRS_TO_GAL = [
  [-0.0548755604162154, -0.8734370902348850, -0.4838350155487132],
  [+0.4941094278755837, -0.4448296299600112, +0.7469822444972189],
  [-0.8676661490190047, -0.1980763734312015, +0.4559837761750669],
];
export function icrsToGalactic(v) {
  const M = ICRS_TO_GAL;
  return [M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2], M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2], M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2]];
}
export function galacticToIcrs(v) {
  const M = ICRS_TO_GAL;
  return [M[0][0] * v[0] + M[1][0] * v[1] + M[2][0] * v[2], M[0][1] * v[0] + M[1][1] * v[1] + M[2][1] * v[2], M[0][2] * v[0] + M[1][2] * v[1] + M[2][2] * v[2]];
}

/** J2000 obliquity of the ecliptic. */
export const OBLIQUITY = 23.43928 * DEG;
export function eclipticToIcrs(v) {
  const c = Math.cos(OBLIQUITY), s = Math.sin(OBLIQUITY);
  return [v[0], c * v[1] - s * v[2], s * v[1] + c * v[2]];
}

// Julian date helpers
export function jdFromDate(d) { return d.getTime() / 86400000 + 2440587.5; }
export function dateFromJD(jd) { return new Date((jd - 2440587.5) * 86400000); }
export const J2000 = 2451545.0;
