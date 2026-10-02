// The Solar System from the downloaded JPL data.
import { Body, System, poleFromRaDec } from './bodies.js';
import { KeplerOrbit, JplMeanOrbit, FixedOrbit } from './orbit.js';
import { DEG, KM_PER_AU } from '../../shared/astro.js';
import { SOLAR_LOOK } from './solarLook.js';

export function buildSolarSystem(cat, eph, cfg) {
  const sys = new System({ id: 'sol', name: 'Solar System', kind: 'solar', fictional: false, originPc: [0, 0, 0], starIndices: [cat.sunIndex] });
  const byId = new Map();
  for (const b of eph.bodies) {
    const look = SOLAR_LOOK[b.id] || {};
    const common = {
      id: b.id, name: b.name, kind: b.kind, radiusKm: b.R, gm: b.GM, albedo: b.albedo ?? look.albedo ?? 0.3, pole: poleFromRaDec(b.pole[0], b.pole[1]),
      look: look.look || null, atmosphere: look.atmosphere || null, rings: b.rings ? b.rings.map((r) => ({ r0: r.r0, r1: r.r1, tau: r.tau, name: r.name })) : null,
      info: look.info || '', source: 'NASA/JPL', dataSrc: b.src,
    };
    if (b.rings) common.rings = b.rings.map((r) => ({ r0: r.r0, r1: r.r1, tau: r.tau, name: r.name }));
    if (b.id === 'sun') {
      const sun = new Body({ ...common, kind: 'star', teff: 5772, lumSun: 1, lumV: 1, absMagV: 4.83, massSun: 1, letter: 'G', lc: 0, color: [1.04, 0.98, 0.9], fixed: [0, 0, 0], traits: null, spin: spinFrom(b), limb: 0.6,
        surfaceRadiance: Math.pow(10, -0.4 * (4.83 + 26.74)) * Math.pow(3.0856775814913673e13 * 10 / b.R, 2) });
      sys.add(sun); byId.set('sun', sun); continue;
    }
    const parent = b.parent === 'sun' ? byId.get('sun') : byId.get(b.parent);
    if (!parent) { console.warn('missing parent for', b.id); continue; }
    let orbit;
    if (b.orbit.type === 'jpl-mean') orbit = new JplMeanOrbit(eph.elements, b.orbit.key);
    else orbit = new KeplerOrbit({ a: b.orbit.a, e: b.orbit.e, inc: b.orbit.i, node: b.orbit.node, argp: b.orbit.argp, M0: b.orbit.M, epochJD: b.orbit.epochJD, nDegPerDay: b.orbit.nDegPerDay, frame: 'ecliptic' });
    const body = new Body({ ...common, parent, orbit, spin: b.synchronous ? { sync: true } : spinFrom(b), synchronous: !!b.synchronous });
    sys.add(body); byId.set(b.id, body);
  }
  // order planets first for stable listings
  const rank = { star: 0, planet: 1, dwarf: 2, moon: 3 };
  sys.bodies.sort((a, b) => rank[a.kind] - rank[b.kind] || (a.orbit?.a ?? 0) - (b.orbit?.a ?? 0));
  // representative belts (not catalogued asteroids)
  sys.add(new Body({ id: 'asteroid-belt', name: 'Main asteroid belt', kind: 'belt', parent: byId.get('sun'), radiusKm: 1, belt: { innerAu: 2.1, outerAu: 3.3, peakAu: 2.7, thicknessAu: 0.35, count: 26000, tint: [0.62, 0.56, 0.5], note: 'representative particles, not individual catalogued asteroids' }, info: 'Representative belt' }));
  sys.add(new Body({ id: 'kuiper-belt', name: 'Kuiper belt', kind: 'belt', parent: byId.get('sun'), radiusKm: 1, belt: { innerAu: 38, outerAu: 52, peakAu: 43, thicknessAu: 5, count: 18000, tint: [0.55, 0.5, 0.48], note: 'representative particles, not individual catalogued objects' }, info: 'Representative belt' }));
  const sun = byId.get('sun');
  sun.lumSun = 1; sun.massSun = 1; sun.traitsLike = { teff: 5772, lumSun: 1, radiusKm: sun.radiusKm, letter: 'G', massSun: 1, lc: 0 };
  sys.hz = { inner: 0.95, outer: 1.67 }; sys.frostAu = 2.7;
  return sys;
}

function spinFrom(b) {
  if (b.w) return { w0: b.w[0], rateDegDay: b.w[1] };
  const per = b.rotH ? b.rotH : 24;
  return { w0: 0, rateDegDay: (360 / Math.abs(per)) * 24 * Math.sign(per) };
}
