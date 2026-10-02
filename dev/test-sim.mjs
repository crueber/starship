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

// ── 1. free flight at every compression level with ugly frame times, flying straight at planets
for (const K of cfg.time.steps) {
  const S = new Sim(uni, cfg); S.mode = 'free'; S.startTour = false;
  const earth = uni.solar.get('earth'), mars = uni.solar.get('mars');
  S.placeAtBody(earth, 5, 0.3, 0.2); S.breakOrbit(); S.setTimeIndex(cfg.time.steps.indexOf(K));
  S.speedTarget = 0.5 * C_KMS * 0.8;                       // 0.4c
  const bp = mars.positionAt(S.jd), sp = S.sysPos();
  S._lookAlong(new THREE.Vector3(bp[0] - sp[0], bp[1] - sp[1], bp[2] - sp[2]), Infinity);
  let worst = 0, frames = 0, simTime = 0;
  for (let i = 0; i < 4000; i++) {
    const dt = rnd() < 0.02 ? 0.1 + rnd() * 5 : rnd() < 0.3 ? 0.001 + rnd() * 0.03 : 1 / 60 + (rnd() - 0.5) * 0.02;   // hitches, tiny frames, jitter
    const j0 = S.jd; S.update(dt); simTime += (S.jd - j0) * 86400; frames++;
    check(S, `K=${K} frame ${i}`);
    worst = Math.max(worst, minSafeViolation(S));
  }
  console.log(`free flight  K=${String(K).padStart(8)}  frames ${frames}  simulated ${(simTime / 86400).toFixed(1).padStart(10)} d  max safe-orbit violation ${worst.toExponential(2)} km  speed ${(S.speed / C_KMS).toFixed(3)}c  ref ${S.ref ? S.ref.name : S.system ? S.system.name : 'interstellar'}`);
  if (worst > 1) throw new Error('safe orbit violated');
}

// ── 2. autopilot legs between random bodies with random dt; must arrive in orbit, not violate walls
{
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  const names = ['earth', 'moon', 'mars', 'jupiter', 'io', 'saturn', 'titan', 'uranus', 'neptune', 'pluto', 'venus', 'mercury', 'ceres', 'sun', 'europa', 'eris'];
  let legs = 0, simSecTotal = 0, realTotal = 0;
  for (const nm of names) {
    const b = uni.solar.get(nm); S.setCourseBody(b); S.engageAutopilot();
    let real = 0, guard = 0, worst = 0, wallHits = 0;
    while ((S.course || S.xfer || S.ins) && guard++ < 400000) {
      const dt = rnd() < 0.03 ? 0.1 : 1 / 60 * (0.3 + rnd() * 1.7); real += Math.min(dt, 0.1);
      S.update(dt); check(S, nm); worst = Math.max(worst, minSafeViolation(S)); if (S.safeHit > 0.49) wallHits++;
    }
    const ok = !S.course && S.orbit && S.orbit.body === b;
    console.log(`autopilot → ${nm.padEnd(8)} ${ok ? 'in orbit' : 'FAILED'}  wall time ${real.toFixed(1).padStart(6)} s  trip ${(S.trip.elapsed / 3600).toFixed(2).padStart(9)} h  wall-hits ${wallHits}  safe-violation ${worst.toExponential(1)} ${worst > 0 ? worstBody : ''}  alt ${(Math.hypot(...S.pos) - b.radiusKm).toFixed(0)} km`);
    if (!ok || worst > 1 || wallHits > 0) throw new Error('autopilot failed for ' + nm + ' (wall hits ' + wallHits + ')');
    legs++; realTotal += real;
  }
}

// ── 3. interstellar legs with random dt
{
  const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
  for (const target of ['Proxima Centauri', 'Sirius', "Barnard's Star", 'Alpha Centauri']) {
    const d = S.getDestinations(true).systems.find((x) => x.name === target); if (!d) { console.log('no dest', target); continue; }
    S.setCourseSystem(d); S.engageAutopilot(); let real = 0, guard = 0, maxCapViol = 0, arrived = false, dropSpeed = null, prevSys = S.system;
    while (S.course && guard++ < 400000) {
      const dt = rnd() < 0.02 ? 0.1 : 1 / 60 * (0.4 + rnd() * 1.6); real += Math.min(dt, 0.1);
      const wasWarp = S.warp.on; S.update(dt); check(S, target);
      if (wasWarp && !S.warp.on && dropSpeed === null) dropSpeed = S.speed / C_KMS;
      if (S.course && S.course.kind === 'body') arrived = true;
      if (arrived && S.system && S.system.name !== 'Solar System') { break; }
    }
    const sys = S.system ? S.system.name : 'interstellar';
    console.log(`interstellar → ${target.padEnd(18)} now in "${sys}"  drop-out speed ${dropSpeed && dropSpeed.toFixed(3)}c  wall time ${real.toFixed(0)} s  (${(d.distLy).toFixed(2)} ly)`);
    if (sys === 'Solar System' || sys === 'interstellar' || real > 900) throw new Error('interstellar leg to ' + target + ' did not arrive');
    // go home: teleport back to the Sun for the next test
    S.course = null; S.warp.on = false; S.system = uni.solar; S.ref = null; S.pos = [1.5e8, 0, 0]; S.vel = [0, 0, 0]; S.anchorPc = [0, 0, 0];
  }
}
console.log('all simulation stress tests passed');
