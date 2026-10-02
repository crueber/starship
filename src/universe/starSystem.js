// Builds a System for any star group: confirmed planets from the NASA Exoplanet Archive where they exist,
// otherwise a seeded, FICTIONAL procedural system.
import { Body, System } from './bodies.js';
import { KeplerOrbit } from './orbit.js';
import { mulberry32, hash2, hashString, clamp, perpendicular, cross, norm, rotateAbout, TAU } from '../core/math.js';
import { KM_PER_AU, KM_PER_PC, AU_PER_PC, DEG, LC, J2000, bolometricCorrection } from '../../shared/astro.js';
import { habitableZone, equilibriumTemp, blackbodyRGB, heliopauseKm } from './starTraits.js';
import { radiusFromMass, massFromRadius, classify, appearance, GM_EARTH, R_EARTH } from './planetFactory.js';
import { generateArchitecture, generateMoons } from './procgen.js';

const GM_SUN = 132712440041.94;
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const LETTERS = 'bcdefghijklmnop';

function seedFor(cat, i, cfg) {
  const hip = cat.d.hip[i];
  const key = hip ? `HIP${hip}` : `P${Math.round(cat.pos[i * 3] * 100)},${Math.round(cat.pos[i * 3 + 1] * 100)},${Math.round(cat.pos[i * 3 + 2] * 100)}`;
  return hash2(cfg.sim.seed >>> 0, hashString(key));
}

function planeRotation(rng) {
  // random unit normal for the system's invariable plane → rotation matrix (columns x,y,z) as row-major 9-array
  const u = rng.range(-1, 1), ph = rng.range(0, TAU), s = Math.sqrt(1 - u * u);
  const z = [s * Math.cos(ph), s * Math.sin(ph), u];
  const x = perpendicular(z), y = cross(z, x);
  return [x[0], y[0], z[0], x[1], y[1], z[1], x[2], y[2], z[2]];
}

function makeStarBody(cat, i, offsetKm, cfg, host, isPrimary) {
  const tr = cat.traits(i);
  let { teff, lumSun, radiusKm, massSun } = tr;
  let note = '';
  if (host && (host.teff || host.rad || host.mass)) {
    if (host.teff) teff = host.teff;
    if (host.rad) radiusKm = host.rad * 695700;
    if (host.mass) massSun = host.mass;
    if (host.logL != null) lumSun = Math.pow(10, host.logL); else if (host.rad && host.teff) lumSun = host.rad * host.rad * Math.pow(host.teff / 5772, 4);
    note = ' (stellar parameters from NASA Exoplanet Archive)';
  }
  const rng = mulberry32(hash2(seedFor(cat, i, cfg), 77));
  const info = cat.info(i);
  // visual-band luminosity (what lights the planets in the rendered, V-band world)
  let absMagV = cat.d.absMag[i];
  if (host && (host.teff || host.rad)) absMagV = 4.74 - 2.5 * Math.log10(lumSun) - bolometricCorrection(teff);
  const lumV = Math.pow(10, -0.4 * (absMagV - 4.83));
  const surfaceRadiance = Math.pow(10, -0.4 * (absMagV + 26.74)) * Math.pow(3.0856775814913673e13 * 10 / radiusKm, 2);
  return new Body({
    id: `star-${i}`, name: cat.name(i), kind: 'star', radiusKm, gm: massSun * GM_SUN, teff, lumSun, massSun, lc: tr.lc, letter: tr.letter,
    color: blackbodyRGB(teff), fixed: offsetKm, catalogIndex: i, absMagV, lumV, surfaceRadiance, limb: teff > 6500 ? 0.45 : teff > 4500 ? 0.6 : 0.7,
    pole: norm([rng.range(-1, 1), rng.range(-1, 1), rng.range(-1, 1)]), spin: { w0: rng.range(0, 360), rateDegDay: 360 / rng.range(3, 30) },
    look: { kind: 'star' }, info: `${cat.spectralText(i)} · ${Math.round(teff)} K · ${lumSun >= 100 ? lumSun.toFixed(0) : lumSun >= 1 ? lumSun.toFixed(1) : lumSun.toPrecision(2)} L☉${note}`,
    source: 'catalogue', designation: cat.designation(i), isPrimary,
  });
}

function spinFor(rng, cls, locked) {
  if (locked) return { sync: true };
  const per = cls === 'gas' || cls === 'ice' ? rng.range(8, 20) : rng.range(8, 60);
  return { w0: rng.range(0, 360), rateDegDay: (360 / per) * 24 * (rng() < 0.93 ? 1 : -1) };
}
function poleFor(rng, orbitNormal, maxTiltDeg) {
  const tilt = rng.range(0, maxTiltDeg) * DEG;
  const axis = perpendicular(orbitNormal);
  const rotated = rotateAbout(orbitNormal, axis, tilt);
  return rotateAbout(rotated, orbitNormal, rng.range(0, TAU));
}

export function buildStarSystem(cat, group, cfg) {
  const primaryIdx = group.primary;
  const c0 = cat.posOf(primaryIdx);
  const sys = new System({ id: `star:${group.key}`, name: group.name, kind: 'procedural', originPc: c0, starIndices: group.members.slice(), catalogKey: group.key });
  const stars = [];
  group.members.forEach((i, k) => {
    const p = cat.posOf(i);
    const off = [(p[0] - c0[0]) * KM_PER_PC, (p[1] - c0[1]) * KM_PER_PC, (p[2] - c0[2]) * KM_PER_PC];
    const b = makeStarBody(cat, i, off, cfg, cat.host(i), k === 0);
    sys.add(b); stars.push(b);
  });
  if (stars.length > 1) stars.forEach((b, k) => { b.name = `${group.name} ${String.fromCharCode(65 + k)}`; });

  const primaryTr = stars[0];
  sys.heliopauseKm = cat.heliopauseKm(primaryIdx);
  // heliopause of a multiple system: wind momenta add roughly in quadrature
  if (stars.length > 1) {
    let sq = 0; for (const b of stars) { const h = heliopauseKm({ lumSun: b.lumSun, radiusSun: b.radiusKm / 695700, teff: b.teff, letter: b.letter, lc: b.lc }, cfg, b.name); sq += h * h; }
    sys.heliopauseKm = Math.sqrt(sq);
  }
  const hz = habitableZone(primaryTr.lumSun, primaryTr.teff);
  sys.hz = hz; sys.frostAu = cfg.procgen.frostLineAuAtSolarLum * Math.sqrt(primaryTr.lumSun);
  sys.hasKnownPlanets = false; sys.hasFictionalPlanets = false;

  let anyKnown = false;
  stars.forEach((star, k) => {
    const i = star.catalogIndex;
    const host = cat.host(i);
    // companion limits for stable circumstellar orbits: ~1/3 of the separation to the nearest companion
    let aMaxAu = 500;
    for (const o of stars) if (o !== star) { const d = Math.hypot(o.fixed[0] - star.fixed[0], o.fixed[1] - star.fixed[1], o.fixed[2] - star.fixed[2]) / KM_PER_AU; aMaxAu = Math.min(aMaxAu, d / 3); }
    const seed = seedFor(cat, i, cfg);
    if (host && host.planets.length) { addKnownPlanets(sys, star, host, seed, cfg, group.name); anyKnown = true; }
    else if (cfg.procgen.enabled) addProceduralPlanets(sys, star, seed, cfg, aMaxAu, stars.length > 1 ? String.fromCharCode(65 + k) : '', group.name);
  });
  sys.hasKnownPlanets = anyKnown;
  sys.kind = anyKnown ? 'known' : 'procedural';
  sys.fictional = !anyKnown;
  const rank = { star: 0, planet: 1, dwarf: 2, moon: 3, belt: 4 };
  return sys;
}

// ───────────────────────── known planets ─────────────────────────
function addKnownPlanets(sys, star, host, seed, cfg, sysName) {
  const planetRng = mulberry32(hash2(seed, 31));
  const plane = planeRotation(planetRng);
  const list = host.planets.slice().sort((a, b) => (a.a ?? a.per ?? 1e9) - (b.a ?? b.per ?? 1e9));
  for (const p of list) {
    const est = [];
    const M = star.massSun;
    let aAu = p.a;
    if (!aAu && p.per) { aAu = Math.cbrt((GM_SUN * M * Math.pow(p.per * 86400, 2)) / (4 * Math.PI * Math.PI)) / KM_PER_AU; est.push('a from period'); }
    if (!aAu) { aAu = 0.1; est.push('a unknown (placeholder)'); }
    let mE = p.m, rE = p.r;
    if (!mE && rE) { mE = massFromRadius(rE); est.push('mass'); }
    if (!rE && mE) { rE = radiusFromMass(mE); est.push('radius'); }
    if (!mE && !rE) { mE = 5; rE = radiusFromMass(5); est.push('mass'); est.push('radius'); }
    let e = p.e; if (e == null) { e = 0; est.push('e'); }
    const rng = mulberry32(hash2(seed, hashString(p.name)));
    const cls = classify(mE, rE);
    const L = star.lumSun;
    const teq = p.teq || equilibriumTemp(L, aAu, 0.3);
    const hz = habitableZone(L, star.teff);
    const look = appearance(cls, { teq, mE, rE, inHz: aAu >= hz.inner * 0.97 && aAu <= hz.outer * 1.03, aAu, seed: hash2(seed, hashString(p.name)), ringChance: 0.08 });
    const nDeg = ((Math.sqrt((GM_SUN * M) / Math.pow(aAu * KM_PER_AU, 3)) * 86400) / DEG);
    const inc = rng.range(0, 2.5);   // archive inclinations are relative to the sky plane and the node is unknown, so mutual tilts are seeded
    const periodDays = TAU / (nDeg * DEG) ;
    const locked = periodDays < 25;
    const orbit = new KeplerOrbit({ a: aAu * KM_PER_AU, e, inc: Math.min(inc, 8), node: rng.range(0, 360), argp: p.w ?? rng.range(0, 360), M0: rng.range(0, 360), epochJD: J2000, nDegPerDay: nDeg, plane });
    const orbitNormal = norm(cross([plane[0], plane[3], plane[6]], [plane[1], plane[4], plane[7]]));
    const body = new Body({
      id: `planet-${p.name.replace(/\s+/g, '-')}`, name: p.name, kind: cls === 'dwarf' ? 'dwarf' : 'planet', parent: star, orbit, radiusKm: rE * R_EARTH, gm: mE * GM_EARTH, albedo: 0.3,
      pole: locked ? [plane[2], plane[5], plane[8]] : poleFor(rng, [plane[2], plane[5], plane[8]], 35), spin: spinFor(rng, cls, locked), synchronous: locked,
      look: look.look, atmosphere: look.atmosphere, rings: look.rings ? look.rings.map((r) => ({ r0: r.r0 * rE * R_EARTH, r1: r.r1 * rE * R_EARTH, tau: r.tau })) : null,
      fictional: false, source: 'NASA Exoplanet Archive',
      meta: { cls, mE, rE, teq, aAu, e, periodDays, method: p.meth, year: p.yr, est, label: look.label, confirmed: true },
      info: `CONFIRMED planet · ${p.meth || 'detected'}${p.yr ? ', ' + p.yr : ''} · ${look.label} (appearance is an artist's rendering — the archive has no imagery)` + (est.length ? ` · estimated: ${est.join(', ')}` : ''),
    });
    sys.add(body);
    if (look.rings) body.rings = look.rings.map((r) => ({ r0: r.r0 * body.radiusKm, r1: r.r1 * body.radiusKm, tau: r.tau }));
  }
}

// ───────────────────────── procedural (fictional) planets ─────────────────────────
function addProceduralPlanets(sys, star, seed, cfg, aMaxAu, suffix, sysName) {
  const pg = cfg.procgen;
  const rng = mulberry32(hash2(seed, 11));
  const tr = { lumSun: star.lumSun, massSun: star.massSun, teff: star.teff, radiusKm: star.radiusKm, letter: star.letter, lc: star.lc };
  const arch = generateArchitecture(tr, rng, pg, aMaxAu);
  const plane = planeRotation(rng);
  const hz = arch.hz;
  const baseName = suffix ? `${sysName} ${suffix}` : sysName;
  arch.planets.forEach((pl, idx) => {
    const name = `${baseName} ${LETTERS[idx] || 'z' + idx}`;
    const prng = mulberry32(hash2(seed, 1000 + idx));
    const mE = pl.mE, rE = radiusFromMass(mE);
    const e = Math.min(0.55, Math.abs(prng.normal()) * pg.eccentricitySigma * (arch.compact ? 0.5 : 1));
    const teq = equilibriumTemp(tr.lumSun, pl.a, 0.3);
    const look = appearance(pl.cls, { teq, mE, rE, inHz: pl.a >= hz.inner * 0.97 && pl.a <= hz.outer * 1.03, aAu: pl.a, seed: hash2(seed, 5000 + idx), ringChance: pg.ringChanceGiant });
    const nDeg = (Math.sqrt((GM_SUN * tr.massSun) / Math.pow(pl.a * KM_PER_AU, 3)) * 86400) / DEG;
    const periodDays = 360 / nDeg;
    const locked = periodDays < 20 || (tr.letter === 'M' && periodDays < 60);
    const orbit = new KeplerOrbit({ a: pl.a * KM_PER_AU, e, inc: Math.abs(prng.normal()) * pg.inclinationSigmaDeg, node: prng.range(0, 360), argp: prng.range(0, 360), M0: prng.range(0, 360), epochJD: J2000, nDegPerDay: nDeg, plane });
    const kind = pl.cls === 'dwarf' ? 'dwarf' : 'planet';
    const planetPole = locked ? [plane[2], plane[5], plane[8]] : poleFor(prng, [plane[2], plane[5], plane[8]], pl.cls === 'gas' ? 30 : 45);
    const body = new Body({
      id: `${star.id}-p${idx}`, name, kind, parent: star, orbit, radiusKm: rE * R_EARTH, gm: mE * GM_EARTH, albedo: 0.3,
      pole: planetPole, spin: spinFor(prng, pl.cls, locked), synchronous: locked,
      look: look.look, atmosphere: look.atmosphere, rings: look.rings ? look.rings.map((r) => ({ r0: r.r0 * rE * R_EARTH, r1: r.r1 * rE * R_EARTH, tau: r.tau })) : null,
      fictional: true, source: 'procedural (FICTIONAL)',
      meta: { cls: pl.cls, mE, rE, teq, aAu: pl.a, e, periodDays, label: look.label, confirmed: false, inHz: pl.a >= hz.inner && pl.a <= hz.outer },
      info: `FICTIONAL planet — procedurally generated · ${look.label}`,
    });
    sys.add(body);
    // moons
    const hill = body.hillKm;
    const moons = generateMoons({ cls: pl.cls, mE, a: pl.a }, prng, pg, arch.frostAu, body.radiusKm, body.gm, hill);
    moons.forEach((m, mi) => {
      const mp = mulberry32(hash2(seed, 90000 + idx * 31 + mi));
      const mcls = m.iced ? 'ice-moon' : 'rock-moon';
      const nM = (Math.sqrt(body.gm / (m.aKm ** 3)) * 86400) / DEG;
      const palette = m.volcanic
        ? { kind: 'proc', style: 'io', colors: [[0.9, 0.8, 0.35], [0.98, 0.92, 0.55], [0.85, 0.38, 0.16], [0.16, 0.13, 0.12]], p: { crater: 0, bump: 0.25, spot: 0.9 } }
        : m.iced
          ? { kind: 'proc', style: mp() < 0.5 ? 'ice' : 'europa', colors: [[0.82 + mp() * 0.15, 0.82 + mp() * 0.14, 0.84 + mp() * 0.12], [0.94, 0.95, 0.96], [0.62, 0.5, 0.42], [0.55, 0.58, 0.64]], p: { crater: mp(), bump: 0.5, ice: 1, stripe: mp() * 0.8 } }
          : { kind: 'proc', style: 'rock', colors: [[0.36 + mp() * 0.1, 0.33 + mp() * 0.08, 0.3], [0.5 + mp() * 0.1, 0.47, 0.42], [0.66, 0.62, 0.58], [0.2, 0.19, 0.18]], p: { crater: 0.6 + mp() * 0.4, bump: 0.8 } };
      const mb = new Body({
        id: `${body.id}-m${mi}`, name: `${name} ${ROMAN[mi] || mi + 1}`, kind: 'moon', parent: body,
        orbit: new KeplerOrbit({ a: m.aKm, e: Math.abs(mp.normal()) * 0.01, inc: Math.abs(mp.normal()) * 2, node: mp.range(0, 360), argp: mp.range(0, 360), M0: mp.range(0, 360), epochJD: J2000, nDegPerDay: nM, plane: orbitPlaneAround(body.pole) }),
        radiusKm: m.rKm, gm: m.gm, albedo: m.iced ? 0.6 : 0.12, pole: body.pole, spin: { sync: true }, synchronous: true,
        look: palette, fictional: true, source: 'procedural (FICTIONAL)', meta: { cls: mcls, label: m.volcanic ? 'volcanic moon' : m.iced ? 'icy moon' : 'rocky moon' },
        info: `FICTIONAL moon — procedurally generated (${m.volcanic ? 'volcanic' : m.iced ? 'icy' : 'rocky'})`,
      });
      sys.add(mb);
    });
  });
  arch.belts.forEach((bl, bi) => {
    const dust = bl.kind === 'asteroid';
    const width = bl.outer - bl.inner;
    sys.add(new Body({
      id: `${star.id}-belt${bi}`, name: `${baseName} ${dust ? 'asteroid belt' : 'outer debris belt'}`, kind: 'belt', parent: star, radiusKm: 1, fictional: true, source: 'procedural (FICTIONAL)',
      belt: { innerAu: bl.inner, outerAu: bl.outer, peakAu: bl.peak, thicknessAu: width * (dust ? 0.12 : 0.2), count: dust ? 22000 : 16000, tint: dust ? [0.62, 0.56, 0.5] : [0.56, 0.58, 0.62], note: 'procedural, FICTIONAL' },
      plane, info: 'FICTIONAL belt — procedurally generated',
    }));
  });
  star.systemPlane = plane;
}

function orbitPlaneAround(pole) {
  const z = norm(pole), x = perpendicular(z), y = cross(z, x);
  return [x[0], y[0], z[0], x[1], y[1], z[1], x[2], y[2], z[2]];
}
