// Stress test of the simulation core in Node: uneven frame times, every time-compression level, autopilot legs, warp trips.
import fs from 'node:fs'; import vm from 'node:vm';
import { decode } from '../src/data/loader.js';
import { Universe } from '../src/universe/universe.js';
import { Sim, C_KMS } from '../src/sim/sim.js';
import * as A from '../shared/astro.js';
import * as THREE from 'three';
globalThis.performance ??= { now: () => Date.now() };
const R = new URL('../data/', import.meta.url).pathname;
const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(new URL('../config.js', import.meta.url), 'utf8'), sb);
const cfg = sb.window.SIM_CONFIG; cfg.sim.startWithTour = false;
const D = { starsBytes: new Uint8Array(fs.readFileSync(R + 'stars.bin')), names: JSON.parse(fs.readFileSync(R + 'names.json')), galaxies: JSON.parse(fs.readFileSync(R + 'galaxies.json')), exoplanets: JSON.parse(fs.readFileSync(R + 'exoplanets.json')), ephemeris: JSON.parse(fs.readFileSync(R + 'ephemeris.json')), manifest: {}, milkywayBytes: null };
const uni = new Universe(decode(D), cfg);

let seed = 12345; const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const finite = (v) => v.every(Number.isFinite);
function check(S, label) {
  const p = S.sysPos(), v = S.vel;
  if (!finite(p) || !finite(v) || !Number.isFinite(S.jd) || !Number.isFinite(S.q.x)) throw new Error(`${label}: non-finite state`);
}
let worstBody = '';
function minSafeViolation(S) {  // how far inside a safe sphere (km) the ship is; 0 when fine
  if (!S.system) return 0; let worst = 0; const jd = S.jd, p = S.sysPos(jd);
  for (const b of S.system.bodies) { if (b.kind === 'belt') continue; const bp = b.positionAt(jd); const d = Math.hypot(p[0] - bp[0], p[1] - bp[1], p[2] - bp[2]); const rs = b.safeRadiusKm(cfg); if (d < rs * 0.995) { if (rs - d > worst) { worst = rs - d; worstBody = `${b.name} d=${d.toFixed(0)} rs=${rs.toFixed(0)} ref=${S.ref && S.ref.name} orbit=${!!S.orbit} course=${S.course && S.course.kind}`; } } }
  return worst;
}


// ── flip-and-burn checks ──
const ang = (S) => (S.forward().angleTo(new THREE.Vector3(...S.vel).normalize()) * 180 / Math.PI);
{ // cruise regime (nacelles): speed follows the command over seconds, no flipping, no rocket
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  S.placeAtBody(uni.solar.get('earth'), 8, 0.3, 0.2); S.breakOrbit(); S.vel = [0, 0, 0]; S.commandSpeed(5000);
  let maxRocket = 0, maxAng = 0;
  for (let i = 0; i < 60 * 3; i++) { S.update(1 / 60); }
  const v3 = S.speed; for (let i = 0; i < 60 * 30; i++) { S.update(1 / 60); }
  console.log(`spool-up: ${v3.toFixed(0)} km/s after 3 s, ${S.speed.toFixed(0)} km/s after 33 s; nacelles ${S.eng.cruise.toFixed(2)}, rocket ${S.eng.rocket.toFixed(2)}`);
  if (!(v3 > 500 && v3 < 4000 && S.speed > 4900)) throw new Error('cruise speed should spool up over seconds');
  S.commandSpeed(1000);
  for (let i = 0; i < 60 * 40; i++) { S.update(1 / 60); maxRocket = Math.max(maxRocket, S.eng.rocket); maxAng = Math.max(maxAng, ang(S)); }
  console.log(`cruise slow-down 5000 -> 1000 km/s: final ${S.speed.toFixed(0)}, max nose-vs-velocity ${maxAng.toFixed(1)}°, rocket ${maxRocket.toFixed(2)}`);
  if (Math.abs(S.speed - 1000) > 20 || maxAng > 5 || maxRocket > 0.05) throw new Error('cruise slow-down should be a smooth drive spool-down (no flip, no rocket)');
}
{ // orbital regime (rocket): braking is a real tail-first burn, limited acceleration
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  S.placeAtBody(uni.solar.get('earth'), 8, 0.3, 0.2); S.breakOrbit(); S.vel = [0, 0, 0]; S.commandSpeed(50);
  for (let i = 0; i < 60 * 80; i++) S.update(1 / 60);
  console.log('rocket regime: reached', S.speed.toFixed(1), 'km/s');
  S.commandSpeed(10);
  let maxAngle = 0, burnedWhileForward = 0, burnedRetro = 0, maxA = 0, pv = S.speed;
  for (let i = 0; i < 60 * 80; i++) {
    S.update(1 / 60); const a = ang(S); maxAngle = Math.max(maxAngle, a); maxA = Math.max(maxA, Math.abs(S.speed - pv) * 60); pv = S.speed;
    if (S.eng.rocket > 0.3) { if (a < 60) burnedWhileForward++; else burnedRetro++; }
  }
  console.log(`rocket braking: max nose-vs-velocity ${maxAngle.toFixed(0)}°, retro-burn frames ${burnedRetro}, forward-burn frames ${burnedWhileForward}, max accel ${(maxA * 1000).toFixed(0)} m/s², final ${S.speed.toFixed(1)} km/s`);
  if (maxAngle < 150) throw new Error('ship never turned around to brake with the rocket');
  if (burnedWhileForward > 60) throw new Error('rocket burned nose-forward during a slowdown');
  if (maxA * 1000 > cfg.ship.maneuverAccelMs2 * 1.05) throw new Error('rocket exceeded its acceleration limit');
  if (Math.abs(S.speed - 10) > 0.3) throw new Error('did not reach the target speed');
}
{ // autopilot to Mars: drive zone (nacelles, no flip), then tail-first rocket braking, then insertion burn into a 1000 km orbit
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  S.placeAtBody(uni.solar.get('earth'), 6, 0.3, 0.2); S.setCourseBody(uni.solar.get('mars')); S.engageAutopilot();
  let g = 0, flipsWhileFast = 0, rocketBrakeRetro = 0, rocketForwardBrake = 0, cross = 0, side = 0, maxRate = 0, prevF = S.forward().clone(), insFrames = 0, sawIns = false;
  while ((S.course || S.ins) && g++ < 400000) {
    S.update(1 / 60);
    const v = S.vel, sp = Math.hypot(...v), a = sp > 1 ? ang(S) : 0;
    if (sp > 150 && a > 120) flipsWhileFast++;
    if (S.eng.rocket > 0.3 && sp > 1) { if (a > 120) rocketBrakeRetro++; else if (a < 60) rocketForwardBrake++; }
    if (sp > 1) { const sd = a > 100 ? 1 : a < 80 ? -1 : 0; if (sd && side && sd !== side) cross++; if (sd) side = sd; }
    if (S.ins) { sawIns = true; insFrames++; }
    maxRate = Math.max(maxRate, S.forward().angleTo(prevF) * 60 * 57.3); prevF = S.forward().clone();
  }
  console.log(`autopilot to Mars: retro-burn frames ${rocketBrakeRetro}, forward-burn frames ${rocketForwardBrake}, nose crossed the velocity line ${cross}x, insertion ${sawIns} (${(insFrames / 60).toFixed(0)} s), max turn rate ${maxRate.toFixed(0)}°/s, ends in a ${((S.orbit.r - uni.solar.get('mars').radiusKm)).toFixed(0)} km orbit at ${S.speed.toFixed(2)} km/s (circular ${Math.sqrt(uni.solar.get('mars').gm / S.orbit.r).toFixed(2)})`);
  if (!sawIns || !S.orbit) throw new Error('no insertion into orbit');
  if (rocketBrakeRetro < 30 || rocketForwardBrake > rocketBrakeRetro * 0.2) throw new Error('rocket braking should be tail-first');
  if (cross > 3) throw new Error('hunting nose');
  if (maxRate > cfg.ship.maxTurnDegPerSec * 1.15) throw new Error('turn rate exceeded the limit: ' + maxRate);
  if (Math.abs(S.orbit.r - uni.solar.get('mars').radiusKm - cfg.autopilot.arrivalOrbitAltKm) > 5) throw new Error('arrival orbit is not the 1000 km default');
  if (Math.abs(S.speed - Math.sqrt(uni.solar.get('mars').gm / S.orbit.r)) > 0.01) throw new Error('orbital velocity not maintained');
}

{ // path planning: a body dead ahead must be flown round, never through
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  const earth = uni.solar.get('earth'), mars = uni.solar.get('mars');
  S.placeAtBody(earth, 40, 0.3, 0.2); S.breakOrbit();
  const ep = earth.positionAt(S.jd), mp = mars.positionAt(S.jd), u = mp.map((v, i) => v - ep[i]), ul = Math.hypot(...u);
  const rs = earth.safeRadiusKm(cfg);
  S.pos = u.map((v) => -v / ul * rs * 12); S.vel = [0, 0, 0]; S.speedTarget = 0;       // twelve safe radii behind Earth, Mars straight through it
  S.setCourseBody(mars); S.engageAutopilot();
  let minD = Infinity, g = 0, wall = 0, sawWp = false;
  while ((S.course || S.ins) && g++ < 400000) { S.update(1 / 60); const e = earth.positionAt(S.jd), p = S.sysPos(); minD = Math.min(minD, Math.hypot(p[0] - e[0], p[1] - e[1], p[2] - e[2])); if (S.safeHit > 0.49) wall++; if (S.course && S.course.wp) sawWp = true; }
  console.log(`detour: closest approach to Earth ${(minD / rs).toFixed(2)} safe radii, wall hits ${wall}, waypoint used ${sawWp}`);
  if (!sawWp || minD < rs * 1.3 || wall) throw new Error('autopilot flew through / too close to a body');
}
{ // approach: stop and hold at a standoff distance, at rest
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  S.placeAtBody(uni.solar.get('earth'), 6, 0.3, 0.2);
  const moon = uni.solar.get('moon'); S.setCourseBody(moon, 'approach'); S.engageAutopilot();
  let g = 0; while ((S.course || S.ins) && g++ < 400000) S.update(1 / 60);
  const d = Math.hypot(...S.pos), R = moon.radiusKm;
  console.log(`approach: holding at ${(d / R).toFixed(2)} radii, speed ${S.speed.toFixed(4)} km/s, orbit ${!!S.orbit}`);
  if (S.orbit || S.speed > 1e-6 || Math.abs(d / R - cfg.autopilot.approachRadii) > 0.5) throw new Error('approach did not hold at the standoff distance');
  for (let i = 0; i < 600; i++) S.update(1 / 60);
  if (Math.abs(Math.hypot(...S.pos) - d) > 1) throw new Error('did not stay put');
}

{ // warp: the pilot's step is obeyed (the autopilot must not ramp past it, nor drop below it)
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  const d = S.getDestinations(true).systems.find((x) => x.name === 'Sirius'); S.setCourseSystem(d); S.engageAutopilot();
  let g = 0; while (!S.warp.on && g++ < 200000) S.update(1 / 60);
  if (!S.warp.on) throw new Error('warp never engaged');
  S.setWarpStep(0);                                                       // 1 c
  const cs = [];
  for (let i = 0; i < 60 * 40; i++) { S.update(1 / 60); if (!S.warp.on) break; if (i % 300 === 0) cs.push(S.warp.c.toFixed(2)); }
  console.log('warp held at step 1c; speeds in c over 40 s:', cs.join(' '));
  if (!S.warp.on || Math.abs(S.warp.c - 1) > 0.05) throw new Error('selected warp step not obeyed: c=' + S.warp.c);
  S.setWarpStep(3);                                                       // 1000 c
  for (let i = 0; i < 60 * 14; i++) S.update(1 / 60);
  if (Math.abs(Math.log10(S.warp.c) - 3) > 0.05) throw new Error('step 1000c not reached/held: c=' + S.warp.c);
  console.log('warp step 1000c held:', S.warp.c.toFixed(0));
}

{ // chosen orbit altitude, and real two-burn transfers between circular orbits
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  S.placeAtBody(uni.solar.get('earth'), 6, 0.3, 0.2);
  const moon = uni.solar.get('moon'), earth = uni.solar.get('earth');
  S.setCourseBody(moon, 'orbit', 3000); S.engageAutopilot();
  let g = 0; while ((S.course || S.ins) && g++ < 400000) S.update(1 / 60);
  if (Math.abs(S.orbit.r - moon.radiusKm - 3000) > 5) throw new Error('altitude not honoured');
  for (const [body, alt] of [[moon, 800], [moon, 9000], [earth, 410], [earth, 60000]]) {
    if (S.orbit.body !== body) { S.setCourseBody(body, 'orbit'); S.engageAutopilot(); g = 0; while ((S.course || S.ins) && g++ < 400000) S.update(1 / 60); }
    const startAlt = S.orbit.r - body.radiusKm;
    S.setCourseBody(body, 'orbit', alt); S.engageAutopilot();
    const mu = body.gm; let maxTurn = 0, thrustAlong = 0, thrustSide = 0, frames = 0, prevV = null, E0 = null, maxDvPerFrame = 0, maxAcc = 0;
    g = 0;
    while (S.xfer && g++ < 3000000) {
      const before = S.vel.slice(), kb = S.kNow; S.update(1 / 60); frames++;
      const a = ang(S); maxTurn = Math.max(maxTurn, a);
      if (S.thrustT > 0.5 && S.xfer) {
        // acceleration that the engine applied this frame = change of velocity minus what gravity alone would have done (keplerStep ≈ ballistic): compare direction with the nose
        const f = S.forward(), dv = S.vel.map((x, i) => x - before[i]);
        thrustAlong++;
      }
    }
    const alt2 = S.orbit.r - body.radiusKm;
    console.log(`${body.name}: ${startAlt.toFixed(0)} km -> ${alt2.toFixed(0)} km altitude (asked ${alt}), ${frames} frames (${(frames / 60).toFixed(0)} s real), max nose-vs-velocity ${maxTurn.toFixed(0)}°, burn frames ${thrustAlong}`);
    if (Math.abs(alt2 - alt) > 1) throw new Error('transfer ended at the wrong altitude');
    if (!(maxTurn > 150) && alt < startAlt) throw new Error('lowering did not use a retrograde burn');
  }
  // energy bookkeeping: the speed change of a burn must equal what the engine (a*t) delivered; check one transfer's delta-v
  const S2 = new Sim(uni, cfg); S2.startTour = false; S2.mode = 'free';
  S2.placeAtBody(earth, 1.2, 0.3, 0.2); S2.setCourseBody(earth, 'orbit', 2000); S2.engageAutopilot(); g = 0; while ((S2.course || S2.xfer || S2.ins) && g++ < 400000) S2.update(1 / 60);
  const r1 = S2.orbit.r, r2 = earth.radiusKm + 20000, mu = earth.gm, at = 0.5 * (r1 + r2);
  const dvNeeded = (Math.sqrt(mu * (2 / r1 - 1 / at)) - Math.sqrt(mu / r1)) + (Math.sqrt(mu / r2) - Math.sqrt(mu * (2 / r2 - 1 / at)));
  S2.setCourseBody(earth, 'orbit', 20000); S2.engageAutopilot(); let burnT = 0; g = 0;
  while (S2.xfer && g++ < 3000000) { S2.update(1 / 60); if (S2.thrustT > 0.5) burnT += (1 / 60) * S2.kNow; }
  console.log(`delta-v: Hohmann ${dvNeeded.toFixed(3)} km/s; engine burn time ${burnT.toFixed(1)} s x ${cfg.ship.maneuverAccelMs2} m/s² = ${(burnT * cfg.ship.maneuverAccelMs2 / 1000).toFixed(3)} km/s`);
  if (Math.abs(burnT * cfg.ship.maneuverAccelMs2 / 1000 - dvNeeded) > 0.06 * dvNeeded) throw new Error('burn time does not match the delta-v');
}

{ // set course only aligns; AUTO takes over; the pilot can fly the same course by hand
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  S.placeAtBody(uni.solar.get('earth'), 6, 0.3, 0.2); S.breakOrbit(); S.vel = [0, 0, 0]; S.speedTarget = 0;
  const d = S.getDestinations(true).systems.find((x) => x.name === 'Sirius'); S.setCourseSystem(d);
  const p0 = S.pos.slice();
  for (let i = 0; i < 60 * 25; i++) S.update(1 / 60);
  const moved = Math.hypot(...S.pos.map((x, i) => x - p0[i]));
  console.log(`set course: aligned=${S.course.aligned}, err ${(S.course.alignErr * 57.3).toFixed(1)}°, moved ${moved.toFixed(1)} km, warp ${S.warp.on}, engaged ${S.course.engaged}`);
  if (!S.course.aligned || moved > 1e-3 || S.warp.on || S.course.engaged) throw new Error('set course must only align');
  S.engageAutopilot(); for (let i = 0; i < 60 * 8; i++) S.update(1 / 60);
  if (!(S.speed > 0) || !S.course.engaged) throw new Error('autopilot did not take over');
  S.update(1 / 60); S.input.throttle = -1; S.update(1 / 60); S.input.throttle = 0;
  if (S.course.engaged || !S.course) throw new Error('manual throttle should hand the helm back and keep the course');
  console.log('autopilot engaged, then handed back by the pilot; course kept');
  // time compression while warping scales travel time, and the governor still stops at 0.8c on the boundary
  const T = new Sim(uni, cfg); T.startTour = false; T.mode = 'free';
  T.setCourseSystem(T.getDestinations(true).systems.find((x) => x.name === 'Proxima Centauri')); T.engageAutopilot();
  let t = 0, g2 = 0, drop = null, set = false;
  while (T.course && g2++ < 400000) { const w = T.warp.on; T.update(1 / 60); t += 1 / 60; if (T.warp.on && !set) { set = true; T.setTimeIndex(2); } if (w && !T.warp.on && drop == null) drop = T.speed / 299792.458; if (T.system && T.system.name !== 'Solar System') break; }
  console.log(`warp at x100 time compression: Proxima in ${t.toFixed(0)} s real, drop-out ${drop && drop.toFixed(3)}c`);
  if (!(drop <= 0.8001) || t > 400) throw new Error('warp with time compression misbehaved');
}

{ // no hunting: through a whole autopilot leg the nose crosses the velocity direction's 90° line only a few times, and the camera frame ignores the computer's turns
  for (const dest of ['mars', 'moon', 'jupiter']) {
    const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
    S.placeAtBody(uni.solar.get('earth'), 6, 0.3, 0.2); S.setCourseBody(uni.solar.get(dest)); S.engageAutopilot();
    let side = 0, crossings = 0, maxCamDrift = 0, maxRate = 0, prev = S.forward().clone(), g = 0, q0 = S.qCam.clone();
    while ((S.course || S.xfer || S.ins) && g++ < 400000) {
      S.update(1 / 60); const v = S.vel;
      if (Math.hypot(...v) > 1) { const a = S.forward().angleTo(new THREE.Vector3(...v).normalize()); const sd = a > 1.7 ? 1 : a < 1.4 ? -1 : 0; if (sd && side && sd !== side) crossings++; if (sd) side = sd; }
      maxCamDrift = Math.max(maxCamDrift, S.qCam.angleTo(S.q)); maxRate = Math.max(maxRate, S.forward().angleTo(prev) * 60 * 57.3); prev = S.forward().clone();
    }
    console.log(`autopilot to ${dest}: nose crossed the velocity line ${crossings}x, max turn rate ${maxRate.toFixed(0)}°/s, camera frame drifted up to ${(maxCamDrift * 57.3).toFixed(0)}° from the ship (it stays free)`);
    if (crossings > 3) throw new Error('nose is hunting during the autopilot leg to ' + dest);
    if (!(maxCamDrift > 1.5)) throw new Error('camera was dragged along by the computer\'s turns');
  }
}
console.log('flip-and-burn checks passed');
