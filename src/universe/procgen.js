// Procedural planetary systems for stars with no confirmed planets. Deterministic (seeded). Every body is flagged fictional.
import { mulberry32, hash2, hashString, clamp, TAU, perpendicular, cross, norm, rotateAbout } from '../core/math.js';
import { KM_PER_AU, LC, DEG } from '../../shared/astro.js';
import { habitableZone, equilibriumTemp } from './starTraits.js';
import { radiusFromMass, classify, appearance, GM_EARTH, R_EARTH, GM_JUPITER } from './planetFactory.js';

const G = 6.6743e-20;      // km³ kg⁻¹ s⁻²
const MJ_IN_ME = 317.83;

/** Pick the planet class for an orbit at x = a / frostLine. */
function pickClass(x, rng, tr, pg, compact) {
  const giantScale = tr.letter === 'M' ? 0.12 : tr.letter === 'K' ? 0.6 : 1;
  const isWD = tr.lc === LC.WD;
  const w = [];
  if (x < 0.5) { w.push(['rocky', 0.62], ['subneptune', compact ? 0.38 : 0.26]); if (!compact && (tr.letter === 'G' || tr.letter === 'F') && x > 0.04) w.push(['gas', 0.03]); }
  else if (x < 1.6) { w.push(['rocky', 0.34], ['subneptune', 0.28], ['gas', 0.3 * pg.gasGiantChanceBeyondFrost * giantScale], ['ice', 0.12]); }
  else { w.push(['gas', pg.gasGiantChanceBeyondFrost * giantScale], ['ice', pg.iceGiantChance * (tr.letter === 'M' ? 0.7 : 1)], ['dwarf', 0.22], ['subneptune', 0.1], ['rocky', 0.08]); }
  void isWD;
  return rng.weighted(w);
}
function sampleMass(cls, rng, a, tr) {
  switch (cls) {
    case 'rocky': return rng() < 0.28 ? rng.logUniform(1.4, 7) : rng.logUniform(0.05, 1.6);
    case 'subneptune': return rng.logUniform(4.5, 18);
    case 'ice': return rng.logUniform(12, 36);
    case 'gas': return rng.logUniform(0.18, 4.5) * MJ_IN_ME;
    case 'dwarf': return rng.logUniform(0.0004, 0.018);
    default: return 1;
  }
}

/** mutual Hill radius spacing check: is orbit a2 far enough beyond a1 for the given masses (Earth masses) around a star of M solar masses? */
function hillSep(a1, a2, m1, m2, Msun) {
  const mu = (m1 + m2) * 3.0035e-6 / Msun;                     // Earth masses → solar masses
  const rH = Math.cbrt(mu / 3) * 0.5 * (a1 + a2);
  return (a2 - a1) / rH;
}

/**
 * Generate planets, belts for one host star.
 * @returns {{planets: object[], belts: object[], hz: {inner,outer}, frostAu: number}}
 */
export function generateArchitecture(tr, rng, pg, aMaxAu) {
  const L = tr.lumSun, M = tr.massSun, Rau = tr.radiusKm / KM_PER_AU;
  const frost = pg.frostLineAuAtSolarLum * Math.sqrt(L);
  const hz = habitableZone(L, tr.teff);
  const giant = tr.lc === LC.III || tr.lc === LC.II || tr.lc === LC.I;
  const wd = tr.lc === LC.WD;
  const aIn = Math.max(0.011, 0.034 * Math.sqrt(L) * 0.8, 3.5 * Rau);
  let aOut = Math.min(aMaxAu, 38 * Math.pow(Math.max(M, 0.08), 0.75) + 1.5);
  if (giant) aOut = Math.min(aOut, aMaxAu);
  const compact = tr.letter === 'M' ? rng() < pg.mDwarfCompactProbability : rng() < 0.25;
  let N;
  if (wd) N = rng.int(0, 2);
  else if (giant) N = rng.int(0, 3);
  else if (tr.letter === 'O' || tr.letter === 'B') N = rng.int(0, 3);
  else if (tr.letter === 'M') N = compact ? rng.int(3, 7) : rng.int(1, 4);
  else N = rng.int(pg.planetCount.min, pg.planetCount.max);
  const minA = giant || wd ? Math.max(aIn, 1.5 + 0.8 * Rau) : aIn;

  const planets = [];
  let a = compact ? minA * rng.range(1.15, 2.4) : rng.logUniform(minA * 1.4, Math.max(minA * 4, Math.min(1.2 * hz.inner, aOut * 0.3)));
  a = Math.max(a, minA);
  for (let k = 0; k < N; k++) {
    if (a > aOut) break;
    const cls = pickClass(a / frost, rng, tr, pg, compact);
    const mE = sampleMass(cls, rng, a, tr);
    if (planets.length) {
      const prev = planets[planets.length - 1];
      let guard = 0;
      while (hillSep(prev.a, a, prev.mE, mE, M) < pg.spacing.hillSpacingMin && guard++ < 200) a *= 1.06;
      if (a > aOut) break;
    }
    planets.push({ a, cls, mE });
    const periodRatio = compact ? rng.range(1.25, 2.0) : rng.range(pg.spacing.periodRatioMin, pg.spacing.periodRatioMax);
    a *= Math.pow(periodRatio, 2 / 3) * (cls === 'gas' ? rng.range(1.15, 1.6) : 1);
  }

  // belts
  const belts = [];
  const firstGiant = planets.find((p) => p.cls === 'gas' && p.a > 0.8 * frost);
  if (firstGiant && rng() < pg.beltChance && !compact) {
    const c = firstGiant.a / rng.range(2.3, 3.1);
    const lo = c * 0.82, hi = c * 1.28;
    for (let i = planets.length - 1; i >= 0; i--) if (planets[i].a > lo * 0.92 && planets[i].a < hi * 1.08) planets.splice(i, 1);
    if (c > aIn * 2 && c < frost * 1.3) belts.push({ kind: 'asteroid', inner: lo, outer: hi, peak: c });
  }
  const last = planets[planets.length - 1];
  if (last && rng() < pg.kuiperBeltChance && last.a * 1.7 < aMaxAu) {
    const c = last.a * rng.range(1.7, 2.6);
    if (c < aMaxAu) belts.push({ kind: 'kuiper', inner: c * 0.78, outer: c * 1.3, peak: c });
  }
  // if no planets found in the habitable zone, don't force one: believable systems have empty HZs too.
  return { planets, belts, hz, frostAu: frost, compact };
}

/** Moons of a planet. Returns descriptors { aKm, rKm, density, rock/ice } sorted by distance. */
export function generateMoons(planet, rng, pg, starFrostAu, rKm, gmKm, hillKm) {
  const out = [];
  let count = 0;
  if (planet.cls === 'gas' || planet.cls === 'ice') count = rng.int(pg.moonsPerGiant[0], pg.moonsPerGiant[1]);
  else if (planet.cls === 'rocky' && rng() < pg.moonChanceTerrestrial && planet.mE > 0.2) count = 1;
  if (!count) return out;
  let aKm = rKm * (planet.cls === 'rocky' ? rng.range(12, 60) : rng.range(3.0, 7));
  const iced = planet.a > starFrostAu * 0.8;
  for (let i = 0; i < count; i++) {
    if (aKm > hillKm * 0.33) break;
    const maxR = planet.cls === 'rocky' ? rKm * 0.3 : 2800;
    const r = clamp(rng.logUniform(120, maxR), 80, maxR);
    const rho = iced ? rng.range(1.1, 2.4) : rng.range(2.8, 3.6);        // g/cm³
    const massKg = (4 / 3) * Math.PI * Math.pow(r * 1e3, 3) * rho * 1e3;
    out.push({ aKm, rKm: r, gm: G * massKg, rho, iced, volcanic: !iced && planet.cls !== 'rocky' && i === 0 && rng() < 0.4 });
    aKm *= rng.range(1.45, 2.3);
  }
  return out;
}

export { G, MJ_IN_ME };
