// Physical properties derived from the catalogue triple (absolute V magnitude, Teff, luminosity class).
import * as A from '../../shared/astro.js';

/** Blackbody colour as linear sRGB, normalised to luminance Y = 1 (brightness comes from magnitude, colour only sets the ratios). */
export function blackbodyRGB(T) {
  // CIE 1931 colour matching functions, multi-lobe Gaussian fit (Wyman, Sloan, Shirley 2013)
  const g = (x, mu, s1, s2) => { const t = (x - mu) / (x < mu ? s1 : s2); return Math.exp(-0.5 * t * t); };
  let X = 0, Y = 0, Z = 0;
  const h = 6.62607015e-34, c = 2.99792458e8, k = 1.380649e-23;
  for (let nm = 380; nm <= 780; nm += 5) {
    const x = 1.056 * g(nm, 599.8, 37.9, 31.0) + 0.362 * g(nm, 442.0, 16.0, 26.7) - 0.065 * g(nm, 501.1, 20.4, 26.2);
    const y = 0.821 * g(nm, 568.8, 46.9, 40.5) + 0.286 * g(nm, 530.9, 16.3, 31.1);
    const z = 1.217 * g(nm, 437.0, 11.8, 36.0) + 0.681 * g(nm, 459.0, 26.0, 13.8);
    const l = nm * 1e-9;
    const B = 1 / (l ** 5 * (Math.exp((h * c) / (l * k * T)) - 1));
    X += x * B; Y += y * B; Z += z * B;
  }
  X /= Y; Z /= Y; Y = 1;
  let r = 3.2406 * X - 1.5372 * Y - 0.4986 * Z, gg = -0.9689 * X + 1.8758 * Y + 0.0415 * Z, b = 0.0557 * X - 0.2040 * Y + 1.0570 * Z;
  r = Math.max(r, 0); gg = Math.max(gg, 0); b = Math.max(b, 0);
  // renormalise to luminance 1 after gamut clipping
  const lum = 0.2126 * r + 0.7152 * gg + 0.0722 * b;
  return [r / lum, gg / lum, b / lum];
}

export function spectralLetter(T, lc) {
  if (lc === A.LC.WD) return 'D';
  return T >= 30000 ? 'O' : T >= 10000 ? 'B' : T >= 7500 ? 'A' : T >= 6000 ? 'F' : T >= 5200 ? 'G' : T >= 3900 ? 'K' : 'M';
}

/** All derived physical properties of a catalogue star. */
export function starTraits(absMag, teff, lc) {
  const L = A.luminosityFromMv(absMag, teff);
  let R = A.radiusFromLT(L, teff);
  if (lc === A.LC.WD) R = 0.0125 * Math.pow(0.6 / 0.6, -1 / 3);           // ~Earth-sized
  R = Math.max(R, 0.005);
  const mass = A.massFromLuminosity(L, lc);
  const letter = spectralLetter(teff, lc);
  return { lumSun: L, radiusSun: R, radiusKm: R * 695700, massSun: mass, gm: mass * 132712440041.94, teff, letter, lc, absMag, color: blackbodyRGB(teff) };
}

/**
 * Heliopause (astropause) radius in km.
 * Ram-pressure balance with a (roughly uniform) interstellar medium gives R ∝ sqrt(Mdot * v_wind). We scale from the Sun's
 * measured 121 AU using an estimated mass-loss rate per spectral/luminosity class. Anything in cfg.heliopause.knownAu wins.
 */
export function heliopauseKm(tr, cfg, name) {
  const h = cfg.heliopause;
  if (name && h.knownAu && h.knownAu[name] != null) return h.knownAu[name] * A.KM_PER_AU;
  const ws = h.windScale;
  let mdot, v = h.windSpeedKmS.default;
  const Rr = tr.radiusSun;
  if (tr.lc === A.LC.WD) mdot = ws.whiteDwarf;
  else if (tr.lc === A.LC.I) { mdot = ws.supergiant * Math.pow(Math.max(tr.lumSun, 1) / 1e4, 0.9); v = h.windSpeedKmS.giant * 3; }
  else if (tr.lc === A.LC.III || tr.lc === A.LC.II) { mdot = ws.giant * Math.pow(Math.max(tr.lumSun, 1) / 100, 0.6) * (Rr / 10) ** 0.5; v = h.windSpeedKmS.giant; }
  else if (tr.letter === 'O' || tr.letter === 'B') { mdot = ws[tr.letter] * Math.pow(Math.max(tr.lumSun, 1) / 1e3, tr.letter === 'O' ? 1.7 : 1.4); v = h.windSpeedKmS.hot; }
  else if (tr.letter === 'A') { mdot = ws.A * Rr * Rr; v = h.windSpeedKmS.hot * 0.4; }
  else mdot = (ws[tr.letter] ?? 1) * Rr * Rr;                         // late-type dwarfs: mass loss per unit surface ~ constant
  const ratio = Math.sqrt(Math.max(mdot, 1e-9) * (v / h.windSpeedKmS.default));
  const au = Math.min(h.maxAu, Math.max(h.minAu, h.sunAu * ratio));
  return au * A.KM_PER_AU;
}

/** Equilibrium temperature of a planet (K) for given luminosity (Lsun), distance (AU), Bond albedo. */
export function equilibriumTemp(lumSun, au, albedo = 0.3) { return 278.5 * Math.pow(lumSun, 0.25) / Math.sqrt(au) * Math.pow(1 - albedo, 0.25); }

/** Kopparapu et al. (2013) conservative habitable zone edges in AU (valid ~2600–7200 K). */
export function habitableZone(lumSun, teff) {
  const T = Math.min(7200, Math.max(2600, teff)) - 5780;
  const S = (a, b, c, d, e) => a + b * T + c * T * T + d * T ** 3 + e * T ** 4;
  const sIn = S(1.0512, 1.3242e-4, 1.5418e-8, -7.9895e-12, -1.8328e-15);     // runaway greenhouse
  const sOut = S(0.3438, 5.8942e-5, 1.6558e-9, -3.0045e-12, -5.2983e-16);    // maximum greenhouse
  return { inner: Math.sqrt(lumSun / sIn), outer: Math.sqrt(lumSun / sOut) };
}
