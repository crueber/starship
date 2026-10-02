// The simulation: time, ship dynamics, frames of reference, warp drive, autopilot, tour.
// Design rules that keep it stable at every time compression and frame time:
//  * the ship lives in the frame of the dominant body (planet / moon / star) so it co-moves with it analytically;
//  * the autopilot moves the ship by closed-form integration of its guidance law (exact for any step size);
//  * collisions are swept segment-vs-sphere tests; the safe-orbit sphere around every body is a hard wall;
//  * real time is clipped (maxFrameDt) and consumed in fixed physics steps.
import * as THREE from 'three';
import { clamp, smoothstep, lerp, len, sub, add, scale, dot, cross, norm, madd, perpendicular, fmtDistance, TAU } from '../core/math.js';
import { KM_PER_AU, KM_PER_PC, KM_PER_LY, PC_PER_LY, LY_PER_PC, jdFromDate, J2000 } from '../../shared/astro.js';

export const C_KMS = 299792.458;
const V3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);

export class Sim {
  constructor(uni, cfg) {
    this.uni = uni; this.cfg = cfg; this.cat = uni.cat;
    const st = cfg.sim.startTime;
    this.jd = st === 'now' || !st ? jdFromDate(new Date()) : jdFromDate(new Date(st));
    this.timeIndex = cfg.time.initialStep; this.timeScale = cfg.time.steps[this.timeIndex]; this.timeEff = this.timeScale; this.timeAuto = cfg.time.auto.enabled;
    this.system = uni.solar; this.ref = null; this.anchorPc = [0, 0, 0];
    this.pos = [0, 0, 0]; this.vel = [0, 0, 0];
    this.q = new THREE.Quaternion(); this.angVel = new THREE.Vector3();
    this.qCam = new THREE.Quaternion(); this.camRecentre = 0;      // the camera's own orientation: free-floating, it follows only the pilot's steering, never the flight computer's turns
    this._attRate = 0; this.gimbal = { x: 0, y: 0 }; this._attErr = null; this._dtFrame = 1 / 60;
    this.speedTarget = 0;              // km/s (sub-light throttle)
    this.speed = 0;                    // km/s relative to ref
    this.warp = { on: false, c: 0, step: 0, form: 0, pulse: 0, flash: 0, capC: Infinity, capWhy: '', dropping: false, rampTimer: 0 };
    this.mode = 'free';                // 'tour' | 'free' | 'auto'
    this.orbit = null;
    this.course = null;
    this.trip = { elapsed: 0, start: null, label: '' };
    this.input = { throttle: 0, yaw: 0, pitch: 0, roll: 0, brake: false };
    this.messages = []; this.msgTimer = 0;
    this.lastSafeBody = null; this.safeHit = 0;
    this.frameCount = 0;
    this.tour = null;
    this._destCache = null; this._destT = -1;
    this.eng = { rocket: 0, cruise: 0, warp: 0 }; this.ins = null;
    this.xfer = null; this.thrust = 0; this.thrustT = 0; this.flipping = false; this.intentDir = null;          // engine output, and the flight computer's turn-around state
    this.cam = { yaw: 0.0, pitch: 0.28, dist: cfg.ship.lengthM * cfg.camera.chaseDistanceLengths, up: cfg.ship.lengthM * 0.1, yawT: 0, pitchT: 0.28, distT: cfg.ship.lengthM * cfg.camera.chaseDistanceLengths, drift: false };
    this.autoCamRecenter = 0;
    this.startTour = cfg.sim.startWithTour;
    this.placeAtBody(uni.solar.get('earth'), 5.5, 0.9, 0.3);          // start in Earth orbit (the tour, if enabled, starts here too)
  }

  // ───────────────────────── frames ─────────────────────────
  say(msg, secs = 4) { this.messages.push({ msg, t: secs }); if (this.messages.length > 4) this.messages.shift(); }
  refPos(jd = this.jd) { return this.ref ? this.ref.positionAt(jd) : [0, 0, 0]; }
  refVel(jd = this.jd) { return this.ref ? this.ref.velocityAt(jd) : [0, 0, 0]; }
  /** ship position in the system frame (or relative to the anchor when interstellar), km */
  sysPos(jd = this.jd) { const r = this.refPos(jd); return [r[0] + this.pos[0], r[1] + this.pos[1], r[2] + this.pos[2]]; }
  sysVel(jd = this.jd) { const r = this.refVel(jd); return [r[0] + this.vel[0], r[1] + this.vel[1], r[2] + this.vel[2]]; }
  shipPc(jd = this.jd) {
    const p = this.sysPos(jd);
    const o = this.system ? this.system.originPc : this.anchorPc;
    return [o[0] + p[0] / KM_PER_PC, o[1] + p[1] / KM_PER_PC, o[2] + p[2] / KM_PER_PC];
  }
  forward() { return new THREE.Vector3(0, 0, -1).applyQuaternion(this.q); }
  up() { return new THREE.Vector3(0, 1, 0).applyQuaternion(this.q); }
  right() { return new THREE.Vector3(1, 0, 0).applyQuaternion(this.q); }

  setRef(newRef, jd = this.jd) {
    if (newRef === this.ref) return;
    const abs = this.sysPos(jd), av = this.sysVel(jd);
    this.ref = newRef;
    const rp = this.refPos(jd), rv = this.refVel(jd);
    this.pos = [abs[0] - rp[0], abs[1] - rp[1], abs[2] - rp[2]];
    this.vel = [av[0] - rv[0], av[1] - rv[1], av[2] - rv[2]];
  }

  /** put the ship into a circular orbit about `body` at radius r (km) in the plane spanned by ex/ey (unit vectors) */
  enterOrbit(body, r, ex, ey, theta = 0, retro = false) {
    this.setRef(body);
    const omega = Math.sqrt(Math.max(body.gm, 1e-6) / (r * r * r)) * (retro ? -1 : 1);
    this.orbit = { body, r, ex, ey, theta, omega };
    this._applyOrbit(0);
  }
  _applyOrbit(dtSim) {
    const o = this.orbit;
    o.theta += o.omega * dtSim;
    this._applyOrbitState();
  }
  _applyOrbitState() {
    const o = this.orbit;
    const c = Math.cos(o.theta), s = Math.sin(o.theta);
    this.pos = [o.r * (c * o.ex[0] + s * o.ey[0]), o.r * (c * o.ex[1] + s * o.ey[1]), o.r * (c * o.ex[2] + s * o.ey[2])];
    const v = o.r * o.omega;
    this.vel = [v * (-s * o.ex[0] + c * o.ey[0]), v * (-s * o.ex[1] + c * o.ey[1]), v * (-s * o.ex[2] + c * o.ey[2])];
  }
  breakOrbit() { if (this.orbit) { this.orbit = null; this.speedTarget = len(this.vel); } }

  placeAtBody(body, radii, az = 0.6, el = 0.25) {
    const r = Math.max(body.safeRadiusKm(this.cfg), body.radiusKm * radii);
    const ex = norm([Math.cos(az) * Math.cos(el), Math.sin(az) * Math.cos(el), Math.sin(el)]);
    let ey = norm(cross(body.pole, ex)); if (!isFinite(ey[0]) || len(ey) < 1e-6) ey = perpendicular(ex);
    this.system = body.system; this.enterOrbit(body, r, ex, ey, 0);
    const v = V3(this.vel).normalize();
    this._lookAlong(v, Infinity, new THREE.Vector3(0, 0, 1));
  }
  /** turn the nose toward `dir` by at most `maxAngle` radians (Infinity = snap). Roll is kept as level as possible about the ecliptic pole. */
  _lookAlong(dir, maxAngle = Infinity, upHint) {
    const f = dir.clone().normalize(); if (f.lengthSq() < 0.5) return;
    let u = upHint ? upHint.clone() : this.up().clone();
    if (Math.abs(u.dot(f)) > 0.98) u = new THREE.Vector3(0, 0, 1);
    if (Math.abs(u.dot(f)) > 0.98) u = new THREE.Vector3(0, 1, 0);
    const m = new THREE.Matrix4().lookAt(new THREE.Vector3(0, 0, 0), f.clone(), u);       // lookAt: -Z toward target
    const qt = new THREE.Quaternion().setFromRotationMatrix(m);
    if (maxAngle === Infinity) { this.q.copy(qt); this.qCam.copy(qt); this._attRate = 0; return; }
    // very smooth slew: the commanded turn rate is proportional to the remaining error (so the approach is exponential, never overshooting)
    // and the actual rate follows it through a lag (so every turn starts and stops gently)
    const S = this.cfg.ship, dt = Math.max(this._dtFrame, 1e-4), err = this.q.angleTo(qt);
    if (err < 1e-4) { this._attRate *= Math.exp(-dt / 0.2); return; }
    const wMax = Math.min(maxAngle / dt, S.maxTurnDegPerSec * Math.PI / 180);
    const wCmd = Math.min(wMax, S.attitudeGain * err * 1.0 + 0.0008);
    this._attRate += (wCmd - this._attRate) * (1 - Math.exp(-dt / S.attitudeLagSec));
    const step = Math.min(err, Math.max(this._attRate, 0) * dt);
    // the main engine gimbals to produce this turn (visual): the axis of the remaining rotation in the ship's own frame
    const rel = this.q.clone().invert().multiply(qt); if (rel.w < 0) { rel.x = -rel.x; rel.y = -rel.y; rel.z = -rel.z; rel.w = -rel.w; }
    const sn = Math.sqrt(Math.max(1 - rel.w * rel.w, 1e-12));
    this._attErr = { ax: rel.x / sn, ay: rel.y / sn, mag: Math.min(err, 0.35) };
    this.q.rotateTowards(qt, step);
  }
  /** pilot-commanded rotation (keys / right-drag): the camera rides with the ship for these */
  rotateShip(dq) {
    const old = this.q.clone(); this.q.multiply(dq).normalize();
    const dWorld = this.q.clone().multiply(old.invert());
    this.qCam.premultiply(dWorld).normalize();
  }
  recenterCamera() { this.camRecentre = 1.2; }

  /** point the chase camera at the given world direction (plus offsets), e.g. to sit on the sunlit side of the ship */
  camToward(dirWorld, dyaw = 0, dpitch = 0, dist, instant = true) {
    const inv = this.qCam.clone().invert();
    const l = V3(dirWorld).normalize().applyQuaternion(inv);
    let yaw = Math.atan2(l.x, l.z) + dyaw; const pitch = Math.asin(clamp(l.y, -1, 1)) + dpitch;
    if (!instant) { // take the short way round
      let d = yaw - this.cam.yawT; d = Math.atan2(Math.sin(d), Math.cos(d)); yaw = this.cam.yawT + d;
      this.cam.yawT = yaw; this.cam.pitchT = pitch; if (dist != null) this.cam.distT = dist;
    } else { this.cam.yaw = this.cam.yawT = yaw; this.cam.pitch = this.cam.pitchT = pitch; if (dist != null) this.cam.dist = this.cam.distT = dist; }
  }
  /** cinematic camera director for the tour: keep the visited body behind the ship, sunlit side if possible, with a slow drift */
  _tourCamera(dt) {
    const T = this.tour; if (!T || this.mode !== 'tour') return;
    const stop = T.stops[T.idx]; const body = this.uni.solar.get(stop.body); if (!body) return;
    const bp = body.positionAt(this.jd), sp = this.sysPos();
    const toBody = norm([bp[0] - sp[0], bp[1] - sp[1], bp[2] - sp[2]]);
    T.camT = (T.camT || 0) + dt;
    const L = this.cfg.ship.lengthM;
    const zm = T.zoomMul || 1, hold = performance.now() < (this.cam.holdUntil || 0);          // the viewer's wheel zoom persists; a manual orbit pauses the director for a few seconds
    if (T.phase === 'dwell') {
      const sun = this.system.stars[0].positionAt(this.jd), toSun = norm([sun[0] - sp[0], sun[1] - sp[1], sun[2] - sp[2]]);
      // camera on the far side of the ship from the body, nudged toward the sun so the ship is lit
      const away = norm(add(scale(toBody, -1), scale(toSun, 0.12)));
      const drift = T.camT * this.cfg.tour.cameraDriftDegPerSec * Math.PI / 180;
      const D = L * (2.7 + 0.5 * Math.sin(drift * 0.5)) * zm;
      if (hold) this.cam.distT = D;
      else this.camToward(away, 0.2 * Math.sin(drift * 0.9) + 0.08, 0.1 + 0.04 * Math.sin(drift * 0.6), D, false);
    } else {
      // while travelling: classic chase view with a gentle sway
      const sway = T.camT * 0.35;
      if (!hold) { this.cam.yawT = 0.35 * Math.sin(sway); this.cam.pitchT = 0.3 + 0.06 * Math.sin(sway * 0.7); }
      this.cam.distT = L * 2.6 * zm;
    }
  }

  // ───────────────────────── time compression ─────────────────────────
  /** time compression actually applied: between stars it is limited so apparent speed stays within time.interstellarMaxC (no skipping over heliopauses, no out-running the warp pacing) */
  _capK(K) {
    if (this.system) return K;
    const cap = this.cfg.time.interstellarMaxC; if (!(cap > 0)) return K;
    const v = Math.max(this.speed, 1);
    return Math.max(1, Math.min(K, cap * C_KMS / v));
  }
  get kNow() { return this.warp.on ? this._warpK() : this.ins ? this.ins.k : this.xfer ? this.xfer.k : this._capK(this.timeAuto && this.course ? this.timeEff : this.timeScale); }
  setTimeIndex(i) { this.timeIndex = clamp(i, 0, this.cfg.time.steps.length - 1); this.timeScale = this.cfg.time.steps[this.timeIndex]; this.timeAuto = false; }
  setTimeAuto(on) { this.timeAuto = on; }

  // ───────────────────────── destinations ─────────────────────────
  getDestinations(force = false) {
    const now = performance.now();
    if (!force && this._destCache && now - this._destT < this.cfg.destinations.refreshSec * 1000) return this._destCache;
    const out = { bodies: [], systems: [] };
    if (this.system) {
      for (const b of this.system.bodies) {
        if (b.kind === 'belt') continue;
        const bp = b.positionAt(this.jd), sp = this.sysPos();
        out.bodies.push({ body: b, name: b.name, kind: b.kind, dist: Math.hypot(bp[0] - sp[0], bp[1] - sp[1], bp[2] - sp[2]), parent: b.parent });
      }
    }
    const pc = this.shipPc();
    const list = this.uni.destinationsNear(pc, this.cfg.destinations.radiusLy);
    for (const d of list) {
      if (this.system && d.group.members.some((i) => this.system.starIndices && this.system.starIndices.includes(i))) continue;   // current system
      out.systems.push(d);
    }
    out.systems = out.systems.slice(0, this.cfg.destinations.maxListed);
    this._destCache = out; this._destT = now;
    return out;
  }

  /** star systems matching a text query (min. 2 characters), nearest first; `outOfRange` marks those beyond the course-setting radius */
  searchSystems(q, limit = 14) {
    if (!q || q.trim().length < 2) return [];
    const cat = this.cat, pc = this.shipPc(), R = this.cfg.destinations.radiusLy, seen = new Set(), out = [];
    for (const i of cat.search(q)) {
      const g = cat.systemOf(i, this.cfg.destinations.groupAu); if (!g || seen.has(g.key)) continue; seen.add(g.key);
      if (this.system && this.system.starIndices && g.members.some((m) => this.system.starIndices.includes(m))) continue;       // the system we are in
      const c = g.centre, distLy = Math.hypot(c[0] - pc[0], c[1] - pc[1], c[2] - pc[2]) * LY_PER_PC;
      out.push({ group: g, name: g.name, distLy, known: g.members.some((m) => cat.hasKnownPlanets(m)), stars: g.members.length, outOfRange: distLy > R });
    }
    out.sort((a, b) => a.distLy - b.distLy);
    return out.slice(0, limit);
  }

  // ───────────────────────── commands ─────────────────────────
  /** hand the helm to the autopilot (cruise control) for the current course, or take it back */
  engageAutopilot() {
    const C = this.course; if (!C) { this.say('No course set'); return; }
    if (C.engaged) { this.disengageAutopilot(); return; }
    this.stopTour(); this.course = C;
    C.engaged = true; C.userStep = false; this.mode = 'auto'; this.timeAuto = this.cfg.time.auto.enabled;
    this.xfer = null; if (C.kind === 'body' || C.phase === 'align') this.breakOrbit();
    this.say('Autopilot engaged');
  }
  disengageAutopilot(msg = 'Autopilot disengaged — manual control') {
    const C = this.course; if (C) C.engaged = false;
    if (this.mode === 'auto') this.mode = 'free';
    this.timeAuto = false; this.speedTarget = this.warp.on ? this.speedTarget : len(this.vel);
    if (msg) this.say(msg);
  }
  cancelCourse(msg) {
    this.course = null; if (this.mode === 'auto') this.mode = 'free';
    if (msg) this.say(msg);
  }
  stopTour() {
    if (!this.tour) return;
    this.tour = null; if (this.mode === 'tour') this.mode = 'free'; this.course = null; this.timeAuto = false;
    this.timeIndex = 0; this.timeScale = this.cfg.time.steps[0]; this.timeEff = this.timeScale;          // hand over in real time
    this.cam.yawT = this.cam.yaw; this.say('Tour ended — you have the helm');
  }
  /** compression for a tour dwell: one orbit of the stop takes about cfg.tour.orbitSeconds of wall-clock time */
  _dwellScale(stop) {
    if (typeof stop.timeScale === 'number') return stop.timeScale;
    const o = this.orbit; if (!o) return 60;
    const period = 2 * Math.PI * Math.sqrt(Math.pow(o.r, 3) / Math.max(o.body.gm, 1e-6));
    return clamp(period / this.cfg.tour.orbitSeconds, 1, this.cfg.time.steps[this.cfg.time.steps.length - 1]);
  }
  beginTour() {
    const stops = this.cfg.tour.stops.filter((s) => this.uni.solar.get(s.body));
    if (!stops.length) return;
    if (this.system !== this.uni.solar) { this.say('The tour runs in the Solar System'); return; }
    this.cancelCourse();
    this.tour = { idx: -1, phase: 'dwell', timer: 0, stops };
    this.mode = 'tour'; this.timeAuto = true;
    this._tourNext(true);
  }
  _tourNext(first = false) {
    const T = this.tour; T.idx = (T.idx + 1) % T.stops.length;
    const stop = T.stops[T.idx];
    const body = this.uni.solar.get(stop.body);
    if (first && stop.legSeconds === 0) {
      this.warp.on = false; this.warp.c = 0; this.warp.form = 0;
      this.placeAtBody(body, stop.distance, 0.9, 0.3);
      T.phase = 'dwell'; T.timer = stop.dwell; this.timeScale = this._dwellScale(stop); this.timeEff = this.timeScale; this.timeAuto = false; this.mode = 'tour';
      return;
    }
    T.phase = 'travel';
    this.course = { kind: 'body', body, radius: Math.max(body.safeRadiusKm(this.cfg), body.radiusKm * stop.distance), targetSeconds: stop.legSeconds, tour: true, engaged: true, label: body.name };
    this.timeAuto = true; this.mode = 'tour';
    this.trip = { elapsed: 0, label: body.name };
  }
  /** mode 'orbit': fly to the safe low orbit; 'approach': stop and hold position at a standoff distance (autopilot.approachRadii body radii) */
  setCourseBody(body, mode = 'orbit', altKm = null) {
    if (!body || body.system !== this.system) return;
    this.stopTour();
    const safe = body.safeRadiusKm(this.cfg);
    let radius = mode === 'approach' ? Math.max(safe * 1.5, body.radiusKm * this.cfg.autopilot.approachRadii) : Math.max(safe, body.radiusKm + this.cfg.autopilot.arrivalOrbitAltKm);
    if (altKm != null && isFinite(altKm)) radius = Math.max(safe, body.radiusKm + altKm);               // the pilot's chosen altitude (never below the safe-orbit wall)
    if (this.xfer && mode === 'orbit') { this.say('Orbit change already under way — wait for the burn to finish (or press W/S/X to abort)', 4); return; }
    // already circling this body: a real two-burn (Hohmann) transfer flown with the engine, under the body's gravity
    if (this.orbit && this.orbit.body === body && mode === 'orbit') {
      const soi = body.soiKm; if (isFinite(soi)) radius = Math.min(radius, soi * 0.9);
      this.course = null; if (this.mode === 'auto') this.mode = 'free';
      if (Math.abs(radius - this.orbit.r) < 2e-3 * radius) { this.say('Already in that orbit'); return; }
      this._startTransfer(body, radius);
      return;
    }
    this.xfer = null;
    this.course = { kind: 'body', body, mode, radius, targetSeconds: this.cfg.time.auto.targetSeconds, label: body.name, engaged: false };
    this.trip = { elapsed: 0, label: body.name };
    this.say(`Course set: ${body.name}${mode === 'approach' ? ' (approach)' : ''} — aligning; press AUTO to engage the autopilot`, 4);
  }
  setCourseSystem(dest) {
    if (dest.outOfRange) { this.say(`${dest.name} is ${dest.distLy.toFixed(1)} ly away — courses reach ${this.cfg.destinations.radiusLy} ly (warp closer first)`, 4); return; }
    this.stopTour();
    const sys = this.uni.systemForGroup(dest.group);        // built now so arrival never hitches
    this.course = { kind: 'system', group: dest.group, system: sys, name: dest.name, targetPc: dest.group.centre, phase: 'align', label: dest.name, hpKm: this.uni.heliopauseOfStar(dest.group.primary), engaged: false };
    this.trip = { elapsed: 0, label: dest.name };
    this.say(`Course set: ${dest.name} — ${dest.distLy.toFixed(2)} ly — aligning; press AUTO to engage the autopilot`, 4);
  }

  // ───────────────────────── warp helpers ─────────────────────────
  get subKms() { return this.cfg.ship.maxSublightC * C_KMS; }
  canEngageWarp() {
    const pc = this.shipPc();
    const nb = this.uni.nextBoundary(pc, [this.forward().x, this.forward().y, this.forward().z], 1e9);
    if (nb.inside) return { ok: false, why: `inside the heliopause of ${this.cat.name(nb.inside.star)}` };
    if (this.system) {
      const d = len(this.sysPos());
      if (d < this.system.heliopauseKm * this.cfg.warp.minEngageClearanceFraction) return { ok: false, why: 'inside the heliopause — sub-light only' };
    }
    return { ok: true };
  }
  engageWarp(step = 0) {
    if (this.warp.on) return;
    const c = this.canEngageWarp();
    if (!c.ok) { this.say(`Warp unavailable: ${c.why}`); return; }
    this.breakOrbit();
    this.leaveSystemFrame();
    const w = this.warp; w.on = true; w.step = clamp(step, 0, this.cfg.warp.steps.length - 1); w.c = Math.max(this.speed / C_KMS, 0.02); w.dropping = false; w.rampTimer = 0; w.engagedAt = this.jd;
    this.say('Warp field forming');
  }
  disengageWarp() { if (this.warp.on) {
    if (this.course && this.course.engaged && this.course.kind === 'system') this.disengageAutopilot('Autopilot disengaged — warp dropped by the pilot'); this.warp.dropping = true; this.warp.step = -1; this.say('Dropping out of warp'); } }
  /** sub-light speed presets: regime 'orbital' (km/s values) or 'cruise' (fractions of c). The ship's flight computer then accelerates / brakes to the chosen speed with the engine */
  setSpeed(regime, i) {
    const P = this.cfg.ship.speedPresets[regime]; if (!P) return;
    this.commandSpeed(P[clamp(i, 0, P.length - 1)] * (regime === 'cruise' ? C_KMS : 1));
    this.speedPreset = { regime, i: clamp(i, 0, P.length - 1) };
  }
  /** the speed slider / keys: command a sub-light speed in km/s. Below the orbital limit the rocket delivers it; above, the nacelle drive spools to it over a few seconds. */
  commandSpeed(kms) {
    if (this.mode === 'tour') this.stopTour();
    if (this.course && this.course.engaged) this.disengageAutopilot('Autopilot disengaged — speed set manually');
    this.ins = null; this.xfer = null;
    this.speedPreset = null;
    if (this.warp.on) { this.pendingSpeed = kms; this.disengageWarp(); return; }
    if (this.orbit) this.breakOrbit();
    this.speedTarget = clamp(kms, 0, this.cfg.ship.maxSublightC * C_KMS); this.intentDir = this.forward().clone();
  }
  /** 'orbital' below ship.orbitalMaxKmS, otherwise 'cruise' */
  speedRegime() { return Math.max(this.speed, this.speedTarget) < this.cfg.ship.orbitalMaxKmS ? 'orbital' : 'cruise'; }
  /** the pilot picks a warp step: it is obeyed exactly (an autopilot that was ramping up stops ramping and holds this step) */
  setWarpStep(i) {
    if (!this.warp.on) { this.engageWarp(i); if (this.course) this.course.userStep = true; return; }
    this.warp.dropping = false; this.warp.step = clamp(i, 0, this.cfg.warp.steps.length - 1);
    if (this.course) this.course.userStep = true;
  }
  stepWarp(d) { if (!this.warp.on) { if (d > 0) this.setWarpStep(0); return; } this.setWarpStep(this.warp.step + d); }

  /** Leave the system frame: keep absolute position as an offset from the system origin */
  leaveSystemFrame() {
    if (!this.system) return;
    const p = this.sysPos(), v = this.sysVel();
    this.anchorPc = this.system.originPc.slice();
    this.ref = null; this.pos = p; this.vel = v; this.leftSystem = this.system; this.system = null;
  }
  enterSystem(sys) {
    const p = this.sysPos(), v = this.sysVel();             // relative to the anchor (interstellar)
    const dpc = [this.anchorPc[0] - sys.originPc[0], this.anchorPc[1] - sys.originPc[1], this.anchorPc[2] - sys.originPc[2]];
    this.pos = [dpc[0] * KM_PER_PC + p[0], dpc[1] * KM_PER_PC + p[1], dpc[2] * KM_PER_PC + p[2]];
    this.vel = v; this.ref = null; this.system = sys; this.anchorPc = sys.originPc.slice();
    this.say(`Entering ${/system$/i.test(sys.name) ? 'the ' + sys.name : 'the ' + sys.name + ' system'}`);
    this._destCache = null;
  }

  /** governor: maximum warp speed (in c) so that the ship can shed it before the next heliopause along the heading */
  governor() {
    const k = Math.LN10 / this.cfg.warp.decelSecPerDecade;           // 1/s
    const pc = this.shipPc();
    const f = this.forward();
    const topKms = this.cfg.warp.steps[this.cfg.warp.steps.length - 1] * C_KMS;
    const look = topKms / k * 1.6 + 2e12;
    const nb = this.uni.nextBoundary(pc, [f.x, f.y, f.z], look);
    if (nb.inside) return { capC: 0, why: 'heliopause', x: 0, star: nb.inside.star };
    if (nb.ahead) {
      const x = Math.max(nb.ahead.distKm - this.cfg.warp.arrivalMarginAu * KM_PER_AU, 0);
      return { capC: (this.subKms + k * x) / C_KMS, why: 'heliopause', x, star: nb.ahead.star, hpKm: nb.ahead.radiusKm };
    }
    return { capC: Infinity, why: '', x: Infinity };
  }

  // ───────────────────────── main step ─────────────────────────
  update(dtReal) {
    const dt = Math.min(dtReal, this.cfg.sim.maxFrameDt);
    const step = this.cfg.sim.physicsStep;
    let acc = dt, n = 0;
    while (acc > 1e-9 && n < this.cfg.sim.maxSubsteps) { const h = Math.min(step, acc); this._step(h); acc -= h; n++; }
    this.frameCount++;
    for (const m of this.messages) m.t -= dt; this.messages = this.messages.filter((m) => m.t > 0);
    this.warp.pulse = Math.max(0, this.warp.pulse - dt * 0.9);
    this.warp.flash = Math.max(0, this.warp.flash - dt * 1.4);
  }

  _step(dt) {
    const cfg = this.cfg, S = cfg.ship;
    this._dtFrame = dt; this._attErr = null;
    if (this.startTour) { this.startTour = false; this.beginTour(); }
    // ── user input: steering / throttle (taking over from tour)
    const inp = this.input;
    const userSteer = Math.abs(inp.yaw) + Math.abs(inp.pitch) + Math.abs(inp.roll) > 0.001;
    const userThrottle = Math.abs(inp.throttle) > 0.001 || inp.brake;
    if ((userSteer || userThrottle) && this.mode === 'tour') this.stopTour();
    if (userThrottle && this.course && this.course.engaged && !this.warp.on && (this.course.kind === 'body' || this.course.phase !== 'warp')) this.disengageAutopilot('Autopilot disengaged — manual control');

    // steering (angular velocity smoothing)
    const rate = S.turnRateDegPerSec * Math.PI / 180;
    const target = new THREE.Vector3(inp.pitch, inp.yaw, inp.roll).multiplyScalar(rate);
    this.angVel.lerp(target, 1 - Math.exp(-dt / Math.max(0.03, S.steerSmoothing)));
    if (this.mode !== 'auto' || userSteer) {
      const dq = new THREE.Quaternion().setFromEuler(new THREE.Euler(this.angVel.x * dt, this.angVel.y * dt, this.angVel.z * dt, 'YXZ'));
      this.rotateShip(dq);
    }

    // ── time scale
    const warping = this.warp.on;
    let K = warping ? this._warpK() : this.timeScale;

    // ── autopilot / tour logic decides targets
    this.thrustT = 0;                                         // engine output requested this frame (0..1); the paths below raise it when they really push
    if (this.course) this._autopilot(dt);
    if (this.mode === 'tour' && this.tour && this.tour.phase === 'dwell') {
      this.tour.timer -= dt; this.timeAuto = false; K = warping ? this._warpK() : this.timeScale;
      if (this.tour.timer <= 0) this._tourNext();
    }
    if (this.timeAuto && this.course && !warping) K = this.timeEff; else if (!warping) this.timeEff = this.timeScale;
    if (!warping) K = this.ins ? this.ins.k : this.xfer ? this.xfer.k : this._capK(K);
    const dtSim = dt * K;
    this.timeUsed = K;

    // ── motion
    if (this.warp.on) this._warpMulti(dtSim);
    else this._sublightStep(dt, dtSim, userThrottle);

    this.jd += dtSim / 86400;
    this.trip.elapsed += dtSim;

    this._frameManagement();
    this._wallOfSafeOrbits();
    this._tourCamera(dt);
    // keep the speed readout consistent
    this.speed = this.warp.on ? this.warp.c * C_KMS : len(this.vel);
    this.thrust += (this.thrustT - this.thrust) * (1 - Math.exp(-dt / 0.18));
    { // which engine is working: ROCKET (orbital regime), NACELLES white (cruise drive), NACELLES blue (warp)
      const E = this.eng, drive = !this.warp.on && !this.ins && Math.max(this.speed, this.speedTarget) >= S.orbitalMaxKmS;
      const fr = clamp(Math.log10(Math.max(this.speed, 1) / S.orbitalMaxKmS) / Math.log10((S.maxSublightC * C_KMS) / S.orbitalMaxKmS), 0, 1);
      const T = { rocket: (!this.warp.on && !drive) ? this.thrust : 0, cruise: drive ? 0.22 + 0.78 * fr : 0, warp: this.warp.on ? 0.3 + 0.7 * clamp(Math.log10(Math.max(this.warp.c, 1)) / Math.log10(this.cfg.warp.steps[this.cfg.warp.steps.length - 1]), 0, 1) : 0 };
      for (const k of ['rocket', 'cruise', 'warp']) E[k] += (T[k] - E[k]) * (1 - Math.exp(-dt / (T[k] > E[k] ? 1.6 : 2.4)));
    }
    { // engine gimbal: a few degrees toward the turn the flight computer is making, easing back to centre when it is not
      const gm = (this.cfg.ship.gimbalMaxDeg || 6) * Math.PI / 180, e = this._attErr, k = 1 - Math.exp(-dt / 0.25);
      const tx = e ? -e.ax * clamp(Math.abs(e.mag) / 0.2, 0, 1) * gm : 0, ty = e ? -e.ay * clamp(Math.abs(e.mag) / 0.2, 0, 1) * gm : 0;
      this.gimbal.x += (tx - this.gimbal.x) * k; this.gimbal.y += (ty - this.gimbal.y) * k;
      if (!e) this._attRate *= Math.exp(-dt / 0.15);
    }
    if (this.camRecentre > 0) { this.camRecentre -= dt; this.qCam.slerp(this.q, 1 - Math.exp(-dt / 0.35)); if (this.camRecentre <= 0) this.qCam.copy(this.q); }
    // camera easing
    const cm = this.cam, ez = 1 - Math.exp(-dt / Math.max(this.cfg.camera.smoothingSec, 0.01));
    // the orbit angles are unbounded (the pilot can spin the view round and over the top): keep the targets within half a turn of the current value so the camera takes the short way
    cm.yawT -= TAU * Math.round((cm.yawT - cm.yaw) / TAU); cm.pitchT -= TAU * Math.round((cm.pitchT - cm.pitch) / TAU);
    cm.yaw += (cm.yawT - cm.yaw) * ez; cm.pitch += (cm.pitchT - cm.pitch) * ez; cm.dist += (cm.distT - cm.dist) * ez;
  }


  // ───────────────────────── orbit transfer (real thrust, real gravity) ─────────────────────────
  _startTransfer(body, goalR) {
    const o = this.orbit, mu = body.gm;
    const raising = goalR > o.r, r1 = o.r;
    const at = 0.5 * (r1 + goalR), vEll1 = Math.sqrt(mu * (2 / r1 - 1 / at)), vEll2 = Math.sqrt(mu * (2 / goalR - 1 / at)), vc2 = Math.sqrt(mu / goalR);
    const a = this.cfg.ship.maneuverAccelMs2 * 1e-3;
    this.xfer = { body, mu, goalR, raising, phase: 'turn1', vt1: vEll1, dv2: Math.abs(vc2 - vEll2), a, k: 1, aps: raising ? 'apo' : 'peri', eta: 0 };
    this.orbit = null; this.setRef(body);                                      // from now on the state (pos, vel) is integrated, not on rails
    this.say(`Orbit change: ${raising ? 'raising' : 'lowering'} to ${fmtDistance(goalR - body.radiusKm)} — ${raising ? 'prograde' : 'retrograde'} burn, coast, circularise`);
  }
  _xferStep(dt, dtSim) {
    const X = this.xfer, mu = X.mu, sgn = X.raising ? 1 : -1, steer = Math.abs(this.input.yaw) + Math.abs(this.input.pitch) > 0.01;
    let r = this.pos, v = this.vel;
    const vh = norm(v), burnDir = V3(vh).multiplyScalar(sgn);
    const lead = X.dv2 / (2 * X.a);
    // attitude (all phases): burns want the engine on the burn axis, the coast holds the direction of travel
    const wantRetroSide = (X.phase === 'turn1' || X.phase === 'burn1' || X.phase === 'turn2' || X.phase === 'burn2');
    const dir = wantRetroSide ? burnDir : V3(vh);
    const flipRate = this.cfg.ship.flipRateDegPerSec * Math.PI / 180;
    if (!steer) this._lookAlong(dir, flipRate * dt, this.up());
    const aligned = this.forward().dot(dir) > 0.985;
    const f = this.forward();
    let remaining = dtSim, guard = 0; this.thrustT = 0;
    const kick = (h, dvMax) => {                                              // engine: acceleration along the NOSE only
      const dv = Math.min(X.a * h, dvMax); v = [v[0] + f.x * dv, v[1] + f.y * dv, v[2] + f.z * dv]; return dv;
    };
    while (remaining > 1e-9 && guard++ < 400) {
      if (X.phase === 'turn1') { if (aligned) X.phase = 'burn1'; else { [r, v] = keplerStep(mu, r, v, remaining); remaining = 0; break; } }
      if (X.phase === 'burn1' || X.phase === 'burn2') {
        const target = X.phase === 'burn1' ? X.vt1 : Math.sqrt(mu / len(r));
        const speed = len(v), rem = X.raising ? target - speed : speed - target;
        if (rem <= 2e-4 * target) {                                           // burn complete (0.02 % of the target speed ≈ a few m/s)
          if (X.phase === 'burn1') { X.phase = 'coast'; continue; }
          this._finishTransfer(r, v); return;
        }
        const h = Math.min(remaining, 0.5);
        if (aligned) {
          const dvw = Math.min(X.a * h, rem);                                 // thrust is along the NOSE (which points along ±velocity for this burn); never overshoot the target speed
          const v1 = [v[0] + f.x * dvw * 0.5, v[1] + f.y * dvw * 0.5, v[2] + f.z * dvw * 0.5];
          const [r2, v2] = keplerStep(mu, r, v1, h);
          r = r2; v = [v2[0] + f.x * dvw * 0.5, v2[1] + f.y * dvw * 0.5, v2[2] + f.z * dvw * 0.5];
          this.thrustT = 1;
        } else [r, v] = keplerStep(mu, r, v, h);
        remaining -= h; continue;
      }
      if (X.phase === 'coast' || X.phase === 'turn2') {
        const tTo = timeToApsis(mu, r, v, X.aps); X.eta = tTo;
        const tStop = X.phase === 'coast' ? tTo - lead - 10 : tTo - lead;      // coast: switch to the turn-around 10 s (real, K = 1) before the burn must start
        if (tStop <= 1e-6) {
          if (X.phase === 'coast') { X.phase = 'turn2'; continue; }
          if (aligned) { X.phase = 'burn2'; continue; }
          [r, v] = keplerStep(mu, r, v, Math.min(remaining, 0.25)); remaining -= Math.min(remaining, 0.25); continue;      // not yet pointing the right way: wait
        }
        const h = Math.min(remaining, tStop); [r, v] = keplerStep(mu, r, v, h); remaining -= h; continue;
      }
      break;
    }
    this.pos = r; this.vel = v; this.speed = len(v); this.speedTarget = this.speed;
    // time compression for the next frame
    if (X.phase === 'burn1' || X.phase === 'burn2') X.k = clamp(this.timeScale, 1, 100);
    else if (X.phase === 'turn1' || X.phase === 'turn2') X.k = 1;
    else {                                                                   // coast: budget about 14 real seconds, finishing the time left in the last 2 s
      X.coastReal = (X.coastReal || 0) + dt;
      X.k = clamp((timeToApsis(mu, r, v, X.aps) - lead - 10) / Math.max(14 - X.coastReal, 2), 1, this.cfg.time.steps[this.cfg.time.steps.length - 1]);
    }
  }

  // ───────────────────────── orbit insertion ─────────────────────────
  /** From rest at the target radius: the engine (along the nose, 1000 m/s²) accelerates the ship tangentially up to the circular speed. The radius is held (the small outward component that balances
   *  gravity net of the centrifugal term is implicit), so the ship simply spins up its orbital velocity; the nose swings onto the direction of travel first and the burn waits for it. */
  _insertStep(dt, dtSim) {
    const I = this.ins, o = this.orbit, B = I.body, mu = B.gm, a = I.a, steer = Math.abs(this.input.yaw) + Math.abs(this.input.pitch) > 0.01;
    const c = Math.cos(o.theta), sn = Math.sin(o.theta), tdir = [-sn * o.ex[0] + c * o.ey[0], -sn * o.ex[1] + c * o.ey[1], -sn * o.ex[2] + c * o.ey[2]];
    const vc = Math.sqrt(mu / o.r), want = V3(tdir);
    if (!steer) this._lookAlong(want, S_TURN(this.cfg, dt, this.forward().angleTo(want)));
    const align = this.forward().dot(want);
    let remaining = dtSim, guard = 0, thrusting = false;
    while (remaining > 1e-9 && guard++ < 400) {
      const h = Math.min(remaining, 0.25); remaining -= h;
      if (align > 0.985 && I.vt < vc) { I.vt = Math.min(vc, I.vt + a * align * h); thrusting = true; }
      o.omega = I.vt / o.r; o.theta += o.omega * h;
      if (I.vt >= vc * 0.99999) break;
    }
    this._applyOrbitState();
    if (thrusting) this.thrustT = 1;
    I.k = align > 0.985 ? clamp((vc / a) / 8, 1, 30) : 1;                 // the burn is shown in real time (compressed only if it would take more than ~8 s)
    this.speed = len(this.vel); this.speedTarget = this.speed;
    if (I.vt >= vc * 0.99999) { o.omega = Math.sqrt(mu / (o.r * o.r * o.r)); this.ins = null; this.say(`In orbit: ${B.name}, ${fmtDistance(o.r - B.radiusKm)} altitude`); this._tourOrDone(I.C); }
  }

  _finishTransfer(r, v) {
    const X = this.xfer, body = X.body, R = len(r), rh = scale(r, 1 / R), vt = sub(v, scale(rh, dot(v, rh))), ey = norm(vt);
    this.xfer = null;
    this.enterOrbit(body, X.goalR, rh, ey, 0);                               // the residual (finite-burn) error is a few metres to km: snap to the exact circle
    this.say(`In orbit: ${body.name}, ${fmtDistance(X.goalR - body.radiusKm)} altitude`);
  }

  // ───────────────────────── sub-light motion ─────────────────────────
  _sublightStep(dt, dtSim, userThrottle) {
    const S = this.cfg.ship;
    if (this.ins && (this.input.throttle > 0.001 || this.input.brake)) { this.ins = null; this.breakOrbit(); this._tourOrDone(null); this.say('Orbit insertion aborted'); }
    if (this.xfer) {
      if (this.input.throttle > 0.001 || this.input.brake) { this.xfer = null; this.speedTarget = len(this.vel); this.say('Orbit change aborted'); }
      else { this._xferStep(dt, dtSim); return; }
    }
    if (this.orbit && this.ins) { this._insertStep(dt, dtSim); return; }
    if (this.orbit) {
      if (this.input.throttle > 0.001) { this.breakOrbit(); }
      else {
        this._applyOrbit(dtSim);
        // face along the velocity unless the user is steering
        if (!(Math.abs(this.input.yaw) + Math.abs(this.input.pitch) > 0.01) && !(this.course && !this.course.engaged)) this._lookAlong(V3(this.vel).normalize(), S.flipRateDegPerSec * Math.PI / 180 * dt, this.up());
        return;
      }
    }
    if (this.course && this.course.autopilotMoved) { this.course.autopilotMoved = false; return; }   // autopilot already integrated the position
    // manual flight: throttle sets a target speed on a log scale
    const inp = this.input;
    const vmax = S.maxSublightC * C_KMS, vmin = S.speedFloorKmS;
    if (inp.throttle !== 0) {
      this.speedPreset = null; this.intentDir = this.forward().clone();                       // the pilot pushes the throttle: burn toward where the nose points

      let v = this.speedTarget; if (v < vmin) v = inp.throttle > 0 ? vmin : 0;
      if (v > 0) v *= Math.pow(10, inp.throttle * S.throttleDecadesPerSec * dt);
      if (v < vmin) v = 0;
      this.speedTarget = Math.min(vmax, v);
    }
    if (inp.brake) this.speedTarget = Math.max(0, this.speedTarget * Math.exp(-dt * 3));
    if (this.speedTarget < vmin * 0.9) this.speedTarget = 0;
    // Newtonian flight computer: the engine only pushes along the ship's own axis. The throttle commands a speed along the intended direction;
    // the computer fires the engine for the difference, and to shed speed it first turns the ship tail-first (retrograde), then burns.
    const f = this.forward(), vv = V3(this.vel), v = vv.length();
    const autoOwns = !!(this.course && this.course.engaged);                      // an active course (e.g. aligning for departure) owns attitude: the manual flight computer only coasts
    const vhat = v > 1e-9 ? vv.clone().divideScalar(v) : f.clone();
    const steering = Math.abs(inp.yaw) + Math.abs(inp.pitch) + Math.abs(inp.roll) > 0.01;
    // the intended direction follows the nose whenever the pilot turned it (keys or mouse); turns made by the flight computer itself never change the intent
    const pilotTurned = !this._noseSaved || f.angleTo(this._noseSaved) > 3e-4;
    if (pilotTurned || !this.intentDir || v < vmin * 0.5) this.intentDir = f.clone();
    const E = this.intentDir.clone().multiplyScalar(this.speedTarget).sub(vv), eLen = E.length();
    const ref = Math.max(v, this.speedTarget, vmin);
    if (this.burning) { if (eLen < 0.003 * ref) this.burning = false; } else if (eLen > 0.012 * ref) this.burning = true;      // hysteresis: a 1 % speed error is not worth turning the ship around for
    const tol = this.burning ? 0 : Infinity;
    const flipRate = S.flipRateDegPerSec * Math.PI / 180;
    let thrust = 0;
    const driveReg = Math.max(v, this.speedTarget) >= S.orbitalMaxKmS;
    if (autoOwns) { this.burning = false; this.flipping = false; }
    else if (driveReg) {
      // trans-planetary cruise: the nacelle drive, not the rocket. The speed follows the command over seconds (spooling up / down) and the direction follows the nose;
      // it is a drive state, not a coasting velocity (no flipping, no retro burns)
      const spool = this.speedTarget < v ? S.driveSpoolSec * 0.45 : S.driveSpoolSec, kd = 1 - Math.exp(-dt / spool), tv = f.clone().multiplyScalar(this.speedTarget);        // winding down is quicker than spooling up
      vv.add(tv.sub(vv).multiplyScalar(kd));
      this.burning = false; this.flipping = false; this.intentDir = f.clone();
    } else if (eLen > tol || this.burning) {
      const Ed = E.clone().divideScalar(eLen), align = f.dot(Ed);
      const braking = E.dot(vhat) < -0.5 * eLen;                           // the commanded change mostly opposes the motion: a retrograde burn
      if (!steering && (align < 0.3 || this.flipping || braking)) {
        this.flipping = true; this._lookAlong(Ed, flipRate * dt, this.up());           // wrong end to the burn: turn around first, then keep the engine on the burn vector
        if (align > 0.97 && !braking) this.flipping = false;
      }
      const along = Math.max(E.dot(f), 0);
      if (along > 0 && (this.flipping ? align > 0.93 : (align > 0.3 || steering))) {
        const cap = S.maneuverAccelMs2 * 1e-3 * dtSim, dv = Math.min(along, cap);        // rocket: limited to maneuverAccelMs2 no matter how the clock is compressed
        vv.addScaledVector(f, dv); thrust = clamp(dv / Math.max(cap, 1e-12), 0, 1);
      }
    } else {
      this.flipping = false;
      // burn finished: if we are still tail-first, turn back to face the direction of travel
      if (!steering && !(this.course && !this.course.engaged) && v > vmin * 2 && f.dot(vhat) < 0.9995) this._lookAlong(vhat, flipRate * dt, this.up());
    }
    if (this.speedTarget === 0 && v < vmin * 0.9) vv.set(0, 0, 0);
    this.thrustT = Math.max(this.thrustT, thrust);
    this._noseSaved = this.forward().clone();
    this.vel = [vv.x, vv.y, vv.z];
    const sp = len(this.vel); if (sp > vmax) { const sc = vmax / sp; this.vel = this.vel.map((x) => x * sc); }
    this._prev = { jd: this.jd, abs: this.sysPos() };
    this.pos = [this.pos[0] + this.vel[0] * dtSim, this.pos[1] + this.vel[1] * dtSim, this.pos[2] + this.vel[2] * dtSim];
  }

  // ───────────────────────── warp motion ─────────────────────────
  /** time compression while warping: limited so the governor (which brakes at the heliopause) stays accurate; travel time scales with it, the warp visuals do not */
  _warpK() { return clamp(this.timeScale, 1, this.cfg.warp.maxTimeCompression); }
  _warpMulti(dtSim) {
    const n = Math.min(80, Math.max(1, Math.ceil(dtSim / 0.08))), ds = dtSim / n;       // ≤ 0.08 s of simulated time per sub-step
    for (let i = 0; i < n && this.warp.on; i++) this._warpStep(ds);
  }
  _warpStep(dt) {
    const w = this.warp, W = this.cfg.warp;
    const g = this.governor();
    w.capC = g.capC; w.capWhy = g.why; w.govX = g.x;
    const subC = this.cfg.ship.maxSublightC;
    let targetC = w.step < 0 ? subC : W.steps[w.step];
    if (g.capC < targetC) targetC = Math.max(g.capC, subC);
    // autopilot ramps the step up while the governor allows
    if (this.course && this.course.kind === 'system' && !w.dropping && this.course.phase === 'warp' && this.course.engaged && !this.course.userStep) {
      w.rampTimer += dt;
      if (w.step < W.steps.length - 1 && w.rampTimer > W.secondsPerStep && w.c >= W.steps[w.step] * 0.97) { w.step++; w.rampTimer = 0; }
      targetC = Math.min(W.steps[w.step], Math.max(g.capC, subC));
      targetC = Math.max(targetC, subC);
    }
    let lv = Math.log10(Math.max(w.c, 1e-3)), lt = Math.log10(Math.max(targetC, 1e-3));
    if (lt > lv) lv = Math.min(lt, lv + dt / W.rampSecPerDecade);
    else lv = Math.max(lt, lv - dt / W.decelSecPerDecade);
    // the governor curve is followed exactly (never overshoot the braking envelope)
    if (isFinite(g.capC)) lv = Math.min(lv, Math.log10(Math.max(g.capC, subC)));
    w.c = Math.pow(10, lv);
    // move
    const f = this.forward();
    const v = w.c * C_KMS;
    this.vel = [f.x * v, f.y * v, f.z * v];
    this.pos = [this.pos[0] + this.vel[0] * dt, this.pos[1] + this.vel[1] * dt, this.pos[2] + this.vel[2] * dt];
    // bubble state follows speed
    const prevForm = w.form;
    w.form = smoothstep(W.bubbleStartC, W.bubbleFullC, w.c);
    if (prevForm > 0.3 && w.form <= 0.3 && !w._collapsed) { w.pulse = 1; w.flash = 1; w._collapsed = true; }
    if (w.form > 0.5) w._collapsed = false;
    // drop to sub-light when the speed is back at the limit and nothing asks for more
    const wantsMore = !w.dropping && w.step >= 0 && W.steps[w.step] > subC * 1.001 && g.capC > subC * 1.02;
    if (w.c <= subC * 1.0005 && !wantsMore) this._dropToSublight();
    // arriving inside a heliopause with warp still on: hard stop
    if (g.why === 'heliopause' && g.capC <= 0) this._dropToSublight();
  }
  _dropToSublight() {
    const w = this.warp, f = this.forward(), v = this.subKms;
    w.on = false; w.c = 0; w.form = 0; w.dropping = false; w._collapsed = false; w.pulse = 1; w.flash = 1; w.step = 0;
    this.vel = [f.x * v, f.y * v, f.z * v]; this.speed = v;
    this.speedTarget = (this.course && this.course.engaged) ? v : 0;                       // a pilot's drop-out means slow down: the drive spools the speed back to a stop (the autopilot manages its own speed)
    if (this.pendingSpeed != null) { this.speedTarget = clamp(this.pendingSpeed, 0, v); this.pendingSpeed = null; }
    this.say('Warp field collapsed — sub-light');
  }

  // ───────────────────────── autopilot ─────────────────────────
  /** unengaged course: turn the nose onto the course and report whether we are lined up */
  _courseAlign(dt, C) {
    if (this.warp.on) return;
    const sp = this.sysPos(); let dir;
    if (C.kind === 'body') { if (C.body.system !== this.system) return; const bp = C.body.positionAt(this.jd); dir = [bp[0] - sp[0], bp[1] - sp[1], bp[2] - sp[2]]; }
    else { const pc = this.shipPc(); dir = [C.targetPc[0] - pc[0], C.targetPc[1] - pc[1], C.targetPc[2] - pc[2]]; C.distKm = len(dir) * KM_PER_PC; }
    const want = V3(norm(dir)), ang = this.forward().angleTo(want);
    C.aligned = ang < 0.035; C.alignErr = ang;
    const steer = Math.abs(this.input.yaw) + Math.abs(this.input.pitch) + Math.abs(this.input.roll) > 0.01;
    if (!steer && !this.flipping && !this.xfer) { this._lookAlong(want, S_TURN(this.cfg, dt, ang)); this._noseSaved = this.forward().clone(); }      // a turn made by the computer: the velocity keeps its direction until the pilot burns
  }
  _autopilot(dt) {
    const C = this.course, A = this.cfg.autopilot, S = this.cfg.ship;
    if (!C.engaged) { this._courseAlign(dt, C); return; }                   // course set but the pilot is flying: only keep the ship pointed along it
    const cruise = A.cruiseFraction * S.maxSublightC * C_KMS;
    const tau = A.accelTimeSec;
    const dtSim = dt * this.kNow;
    if (C.kind === 'body') this._autoBody(C, dt, dtSim, cruise, A.brakeSeconds);
    else if (C.kind === 'system') this._autoSystem(C, dt, dtSim, cruise, tau);
  }

  /**
   * Departure clearance: if the ship sits close to a body (low orbit) and the course would run into it, first climb straight away from it
   * to a safe distance. Returns true while the manoeuvre is in progress (the caller must not move the ship this tick).
   */
  /**
   * Path planning: the straight line `from`→`to` (system frame, km) must not cut the safety sphere of any body except `skip`.
   * Returns a waypoint {body, off} (a point beside the first offending body, moving with it) or null when the way is clear.
   */
  _pathWaypoint(from, to, skip) {
    const sys = this.system; if (!sys) return null;
    const jd = this.jd, seg = sub(to, from), L2 = dot(seg, seg); if (L2 < 1) return null;
    const margin = this.cfg.autopilot.pathClearance;
    let best = null;
    for (const b of sys.bodies) {
      if (b.kind === 'belt' || b === skip) continue;
      const bp = b.positionAt(jd), rs = b.safeRadiusKm(this.cfg), clear = rs * margin;
      if (len(sub(from, bp)) < clear * 1.05) continue;                        // already hugging it: the local avoidance handles that
      const t = clamp(dot(sub(bp, from), seg) / L2, 0, 1), closest = madd(from, seg, t), side = sub(closest, bp), d = len(side);
      if (d >= clear || t <= 1e-4) continue;
      if (!best || t < best.t) {
        let n = d > 1e-6 * clear ? scale(side, 1 / d) : norm(cross(seg, [0, 0, 1]));
        if (!isFinite(n[0]) || len(n) < 0.5) n = perpendicular(norm(seg));
        best = { t, body: b, off: scale(n, clear * 1.25) };
      }
    }
    return best ? { body: best.body, off: best.off } : null;
  }
  /** one step of flying to a waypoint beside a body (pass-through at cruise speed, never faster than the braking law toward the final goal) */
  _flyWaypoint(C, wp, dt, goal, dStop, cruise, tau, xm) {
    const jd = this.jd, sp = this.sysPos(jd), P = add(this.pathBodyPos(wp.body, jd), wp.off);
    const to = sub(P, sp), dist = len(to); if (dist < 1) return false;
    const dir = scale(to, 1 / dist);
    const dts = dt * this.kNow;
    const xGoal = Math.max(len(sub(goal, sp)) - dStop, 0);
    const vLaw = (xGoal + xm) / tau;
    const vMax = this.speed + (cruise / this.cfg.autopilot.accelTimeSec) * dts + 1e-3;
    const v = Math.min(cruise, vLaw, Math.max(vMax, cruise * 1e-3));
    const move = Math.min(v * dts, dist);
    const absNew = madd(sp, dir, move), refNew = this.ref ? this.ref.positionAt(jd + dts / 86400) : [0, 0, 0];
    this.pos = sub(absNew, refNew);
    const refV = this.ref ? this.ref.velocityAt(jd) : [0, 0, 0];
    this.vel = sub(scale(dir, move / Math.max(dts, 1e-9)), refV);
    this.speedTarget = len(this.vel);
    this._lookAlong(V3(dir), S_TURN(this.cfg, dt, this.forward().angleTo(V3(dir))));
    this.thrustT = v > this.speed * 1.002 ? 1 : 0;
    C.autopilotMoved = true;
    return move < dist - 1e-6 * dist;
  }
  pathBodyPos(b, jd) { return b.positionAt(jd); }

  _autoClear(dt, dirTarget, cruise, skipBody = null) {
    const sys = this.system; if (!sys) return false;
    const jd = this.jd, sp = this.sysPos(jd);
    let near = null, nearF = 2.3, rvec = null;
    for (const b of sys.bodies) {
      if (b.kind === 'belt' || b === skipBody) continue;
      const bp = b.positionAt(jd), r = [sp[0] - bp[0], sp[1] - bp[1], sp[2] - bp[2]], d = len(r), rs = b.safeRadiusKm(this.cfg);
      if (d / rs < nearF) { nearF = d / rs; near = b; rvec = r; }
    }
    if (!near) { this._clearing = false; return false; }
    const rh = norm(rvec), rs = near.safeRadiusKm(this.cfg), d = len(rvec);
    const c = dot(dirTarget, rh);                                            // >0: the course already leads away from the body
    // would the straight course pass inside 1.4 safe radii of this body?
    const miss = c >= 0 ? Infinity : d * Math.sqrt(Math.max(1 - c * c, 0));
    const blocked = (c < 0 && miss < rs * 1.4) || d < rs * 1.12;            // also climb out first when leaving a low orbit: the body itself moves under a ship that is still slow
    if (!blocked && !(this._clearing && d < rs * 1.15)) { this._clearing = false; return false; }
    this._clearing = true;
    // climb away, curving toward the side of the target so the ship goes round the body rather than through it
    const tang = norm(sub(dirTarget, scale(rh, c)));
    const mv = isFinite(tang[0]) && len(sub(dirTarget, scale(rh, c))) > 1e-6 ? norm(add(rh, scale(tang, 0.9))) : rh;
    const v = Math.min(cruise, Math.max(rs / 6, 1));
    const wantD = Math.max(rs * 1.5, d);
    this.timeEff = Math.max(this.timeEff || 1, 1);
    this.timeEff = Math.exp(Math.log(this.timeEff) + (Math.log(clamp(rs * 2 / v / 3.5, 1, 400)) - Math.log(this.timeEff)) * 0.2);
    const dts = dt * this.kNow;
    const move = v * dts;
    this.pos = [this.pos[0] + mv[0] * move, this.pos[1] + mv[1] * move, this.pos[2] + mv[2] * move];
    void wantD;
    this.vel = [mv[0] * v, mv[1] * v, mv[2] * v];
    this.speed = v; this.speedTarget = v; this.thrustT = 1;
    this._lookAlong(V3(mv), S_TURN(this.cfg, dt, this.forward().angleTo(V3(mv))));
    if (this.course) this.course.autopilotMoved = true;
    return true;
  }

  /** radial-approach guidance in the target body's frame, integrated in closed form */
  _autoBody(C, dt, dtSim, cruise, tau) {
    const B = C.body;
    if (B.system !== this.system) { this.cancelCourse('Course cancelled'); return; }
    this.breakOrbit();
    const Bp = B.positionAt(this.jd), sp = this.sysPos();
    let r = [sp[0] - Bp[0], sp[1] - Bp[1], sp[2] - Bp[2]];
    let d = len(r); const rh = d > 1e-6 ? scale(r, 1 / d) : [1, 0, 0];
    if (this._autoClear(dt, rh.map((v) => -v), cruise, B)) return;
    const dStop = C.radius;
    // do not fly through anything: detour round a body that sits on the straight line to the goal
    if (!C.wp || performance.now() - (C.wpT || 0) > 400) {
      C.wpT = performance.now();
      if (!C.wp) C.wp = this._pathWaypoint(sp, Bp, B);
    }
    if (C.wp) {
      const xm0 = Math.max(dStop * 0.03, 1);
      if (this._flyWaypoint(C, C.wp, dt, Bp, dStop, cruise, tau, xm0)) return;
      C.wp = null; C.wpT = 0;
    }
    let x = d - dStop;
    const S = this.cfg.ship, A = this.cfg.autopilot, Vo = S.orbitalMaxKmS, aB = S.maneuverAccelMs2 * 1e-3;
    // Guidance: DRIVE zone — braking law v = (x + xm)/tau (nacelles spool down, no flip); ROCKET zone (below the orbital speed limit) — braking profile the rocket can actually deliver.
    const xm = Math.max(dStop * 0.03, 1), xh = Vo * tau - xm;                    // xh: distance at which the drive law reaches the orbital speed limit
    const vDrive = (xx) => (xx + xm) / tau, vRock = (xx) => 0.9 * Math.sqrt(2 * aB * Math.max(xx, 0));
    const db = Math.max(cruise * tau - xm, 0);
    C.realElapsed = (C.realElapsed || 0) + dt;
    this._autoTime(x, db, cruise, tau, C, dStop, B, xm, xh);
    const dts = dt * this.kNow;
    const heading = V3(rh).negate();
    const f = this.forward(), ang = f.angleTo(heading);
    // tail-first for the rocket braking: begin the (slow) flip early enough that it is finished by the time the speed reaches the rocket zone
    if (!C.retro && C.alignedOnce && x < xh + Vo * tau * (A.flipLeadFactor ?? 4)) C.retro = true;
    const retro = !!C.retro;
    const look = retro ? heading.clone().negate() : heading;
    this._lookAlong(look, S_TURN(this.cfg, dt, f.angleTo(look)));
    const aligned = ang < 0.35 || C.alignedOnce;
    if (aligned) C.alignedOnce = true;
    if (!aligned && x > 0) { C.autopilotMoved = true; return; }
    // advance along the line to the goal
    let xNew = x, vAvg = 0, rocketBraking = false;
    if (x > 0) {
      let t = dts;
      if (x > db) {                                                              // constant-speed cruise (drive)
        const tc = (x - db) / cruise;
        if (t <= tc) { xNew = x - cruise * t; t = 0; } else { t -= tc; xNew = db; }
      }
      if (t > 0 && xNew > xh) {                                                  // exponential braking with the drive, exact for any step
        const t1 = tau * Math.log((xNew + xm) / (xh + xm));
        if (t <= t1) { xNew = (xNew + xm) * Math.exp(-t / tau) - xm; t = 0; } else { xNew = xh; t -= t1; }
      }
      if (t > 0) {                                                               // rocket zone: numeric, small sub-steps
        rocketBraking = true;
        let guard = 0;
        while (t > 1e-9 && guard++ < 400) { const h = Math.min(t, 0.25), v = Math.min(vDrive(xNew), vRock(xNew)); xNew = Math.max(xNew - v * h, 0); t -= h; if (xNew <= 0) break; }
      }
      xNew = Math.max(xNew, 0);
      vAvg = (x - xNew) / Math.max(dts, 1e-9);
    }
    // soft start: limit acceleration from the current speed
    const vMax = this.speed + (cruise / A.accelTimeSec) * dts;
    if (vAvg > vMax && x > db) { xNew = x - vMax * dts; vAvg = vMax; }
    const dNew = dStop + xNew;
    const rNew = scale(rh, dNew);
    const BpNew = B.positionAt(this.jd + dts / 86400);
    const absNew = [BpNew[0] + rNew[0], BpNew[1] + rNew[1], BpNew[2] + rNew[2]];
    const refNew = this.ref ? this.ref.positionAt(this.jd + dts / 86400) : [0, 0, 0];
    this.pos = [absNew[0] - refNew[0], absNew[1] - refNew[1], absNew[2] - refNew[2]];
    const u = scale(rh, -vAvg);
    const Bv = B.velocityAt(this.jd);
    const refV = this.ref ? this.ref.velocityAt(this.jd) : [0, 0, 0];
    this.vel = [u[0] + Bv[0] - refV[0], u[1] + Bv[1] - refV[1], u[2] + Bv[2] - refV[2]];
    // engine output: the rocket fires only in the orbital regime (speeding up, or braking with the engine really pointing against the motion); the drive zone is the nacelles' job
    const rocketRegime = Math.max(this.speed, vAvg) < Vo;
    if (rocketRegime) { if (vAvg > this.speed * 1.002 + 1e-9) this.thrustT = ang < 0.5 ? 1 : 0; else if (rocketBraking && f.dot(heading) < -0.85) this.thrustT = 0.9; }
    this.speedTarget = vAvg;
    C.autopilotMoved = true;
    C.remaining = xNew; C.dTarget = dNew; C.xh = xh;
    if (xNew <= 0.2) this._arriveAtBody(C, B, rh, dNew, vAvg);
  }
  _arriveAtBody(C, B, rh, d, vIn = 0) {
    if (C.mode === 'approach') {                 // hold position at the standoff distance, at rest relative to the body
      this.setRef(B);
      this.orbit = null; this.vel = [0, 0, 0]; this.speedTarget = 0; this.speed = 0;
      this.pos = scale(rh, d);
      this.say(`Holding ${fmtDistance(d - B.radiusKm)} above ${B.name}`);
      this.course = null; this.mode = 'free'; this.timeAuto = false;
      if (this.tour) { this._tourOrDone(C); }
      return;
    }
    // pick an orbital plane that contains the approach direction and a tangent toward the body's equator-ish plane
    let ey = norm(cross(B.pole, rh));
    if (!isFinite(ey[0]) || len(ey) < 0.2) ey = perpendicular(rh);
    const tilt = 0.35;                                                           // tilt the plane modestly so views are not always equatorial
    const ey2 = norm(add(scale(ey, Math.cos(tilt)), scale(norm(cross(rh, ey)), Math.sin(tilt))));
    // arrival at rest: the insertion burn spins the orbit up to the circular speed
    this.setRef(B);
    this.orbit = { body: B, r: d, ex: rh, ey: ey2, theta: 0, omega: 0 }; this._applyOrbitState();
    this.ins = { body: B, vt: 0, a: this.cfg.ship.maneuverAccelMs2 * 1e-3, k: 1, C };
    this.course = null; this.mode = 'free'; this.timeAuto = false;
    this.say(`Arrived — inserting into orbit around ${B.name}`);
  }
  _tourOrDone(C) {
    this.course = null;
    if (this.tour) {
      const stop = this.tour.stops[this.tour.idx];
      this.tour.phase = 'dwell'; this.tour.timer = stop.dwell; this.timeScale = this._dwellScale(stop); this.timeAuto = false; this.timeEff = this.timeScale;
      this.mode = 'tour';
    } else { this.mode = 'free'; this.timeAuto = false; }
  }

  _autoTime(x, db, cruise, tau, C, dStop, B, xm = 1, xh = 0) {
    if (!this.timeAuto) { return; }
    const T = this.cfg.time, steps = T.steps, Kmax = steps[steps.length - 1];
    const target = Math.max(C.targetSeconds || T.auto.targetSeconds, 3);
    // remaining simulated time of the leg under the guidance law
    const tRem = Math.max(x - db, 0) / cruise + tau * Math.log(1 + Math.min(x, db) / Math.max(xm, 1)) + 0;
    const budget = Math.max(target - (C.realElapsed || 0), Math.min(6, target * 0.3));        // wall-clock seconds left for this leg
    let Kt = tRem / budget;
    if (C.tour) Kt = Math.max(Kt, 1);
    const Rb = B ? B.radiusKm : 1;
    if (B && x < T.auto.approachDistanceRadii * Rb) Kt = Math.min(Kt, steps[T.auto.approachStep]);
    // final approach (the slow tail-first flip and the rocket braking happen in real seconds): the clock is held down
    if (x < xh + this.cfg.ship.orbitalMaxKmS * tau * ((this.cfg.autopilot.flipLeadFactor ?? 4) + 1)) Kt = Math.min(Kt, this.cfg.autopilot.finalApproachK);
    Kt = clamp(Kt, 1, Kmax);
    this.timeEff = Math.exp(Math.log(this.timeEff || 1) + (Math.log(Kt) - Math.log(this.timeEff || 1)) * 0.15);
  }

  /** interstellar course: align → sub-light run to the heliopause → warp → (governor brakes) → sub-light arrival → approach the star */
  _autoSystem(C, dt, dtSim, cruise, tau) {
    const S = this.cfg.ship, A = this.cfg.autopilot;
    // arrived inside the destination system?
    if (this.system && this.system === C.system) {
      if (A.continueToStar) {
        const star = C.system.stars[0];
        this.course = { kind: 'body', body: star, radius: star.safeRadiusKm(this.cfg), targetSeconds: this.cfg.time.auto.targetSeconds, label: star.name, engaged: true };
        this.say(`Arrived at ${C.name} — approaching ${star.name}`);
      } else { this.course = null; this.mode = 'free'; this.say(`Arrived at ${C.name}`); }
      return;
    }
    const pc = this.shipPc();
    const tgt = C.targetPc;
    const dir = norm([tgt[0] - pc[0], tgt[1] - pc[1], tgt[2] - pc[2]]);
    const distKm = Math.hypot(tgt[0] - pc[0], tgt[1] - pc[1], tgt[2] - pc[2]) * KM_PER_PC;
    C.distKm = distKm;
    const wantDir = V3(dir);
    const f = this.forward();
    const ang = f.angleTo(wantDir);
    if (!this.warp.on || this.warp.c < 3) this._lookAlong(wantDir, S_TURN(this.cfg, dt, ang));
    else this._lookAlong(wantDir, 0.35 * dt);

    if (C.phase === 'align') {
      this.breakOrbit();
      this.timeEff = Math.max(1, this.timeEff);
      if (ang < 0.09) { C.phase = this.system ? 'depart' : 'warp'; C.departT = 0; }
      this.vel = this.vel.map((v) => v * Math.exp(-dt * 0.1)); C.autopilotMoved = false;
      return;
    }
    if (C.phase === 'depart') {
      if (this._autoClear(dt, dir, cruise)) return;
      // accelerate along the line of sight to the heliopause, then hand over to the warp drive
      const sp = this.sysPos();
      const dB = this.system.heliopauseKm - len(sp);
      this._autoTimeDepart(dB, cruise);
      const dts = dt * this.kNow;
      const aMax = cruise / A.accelTimeSec;
      let v = Math.min(cruise, this.speed + aMax * dts);
      if (this.speed < 1e-3) v = Math.min(cruise, aMax * dts);
      const move = Math.min(v * dts, Math.max(dB, 0) + 1);
      const vv = v;                          // the speed carried across the boundary is the cruise speed, not the length of a clipped last step
      this.vel = [dir[0] * vv, dir[1] * vv, dir[2] * vv];
      // velocity is relative to ref; subtract ref velocity so the absolute heading follows dir
      const rv = this.refVel(); this.vel = [this.vel[0] - rv[0] * 0, this.vel[1] - rv[1] * 0, this.vel[2] - rv[2] * 0];
      this.pos = [this.pos[0] + dir[0] * move, this.pos[1] + dir[1] * move, this.pos[2] + dir[2] * move];
      this.speed = vv; this.speedTarget = vv; C.autopilotMoved = true;
      if (vv < cruise * 0.999 && ang < 0.5) this.thrustT = 1;
      return;
    }
    if (C.phase === 'warp') {
      if (!this.warp.on && !this.system) { this.engageWarp(0); this.warp.step = 0; }
      if (this.warp.on) { this.warp.step = Math.max(this.warp.step, 0); }
      C.autopilotMoved = false;
    }
  }
  _autoTimeDepart(dB, cruise) {
    if (!this.timeAuto) return;
    const T = this.cfg.time, Kmax = T.steps[T.steps.length - 1], C = this.course;
    C.departReal = (C.departReal || 0) + 1 / 60;
    const tRem = Math.max(dB, 0) / cruise + this.cfg.autopilot.accelTimeSec * 2;
    const target = Math.max(T.auto.targetSeconds * 0.55, 6);
    const budget = Math.max(target - C.departReal, 2.5);
    const Kt = clamp(tRem / budget, 1, Kmax);
    this.timeEff = Math.exp(Math.log(this.timeEff || 1) + (Math.log(Kt) - Math.log(this.timeEff || 1)) * 0.2);
  }

  // ───────────────────────── reference frames & transitions ─────────────────────────
  _frameManagement() {
    const jd = this.jd;
    if (this.system) {
      // leave the system?
      const d = len(this.sysPos(jd));
      if (d > this.system.heliopauseKm * 1.0 && !(this.course && this.course.engaged && this.course.kind === 'body')) {
        const was = this.system;
        this.leaveSystemFrame();
        this.say(`Leaving ${/system$/i.test(was.name) ? 'the ' : 'the '}${was.name}${/system$/i.test(was.name) ? '' : ' system'} — heliopause crossed`);
        this._destCache = null;
        if (this.course && this.course.kind === 'system' && this.course.phase === 'depart') { this.course.phase = 'warp'; }
        return;
      }
      // dominant body → reference frame
      if (!this.xfer && !this.ins) this._chooseRef(jd);
    } else {
      // entering a heliopause?
      const pc = this.shipPc(jd);
      const idx = this.cat.within(pc, this.cfg.heliopause.maxAu * 1.05 * KM_PER_AU / KM_PER_PC);      // no heliopause can be larger than heliopause.maxAu
      let best = null;
      for (const i of idx) {
        const h = this.uni.heliopauseOfStar(i) / KM_PER_PC;
        const dx = this.cat.pos[i * 3] - pc[0], dy = this.cat.pos[i * 3 + 1] - pc[1], dz = this.cat.pos[i * 3 + 2] - pc[2];
        const dd = Math.hypot(dx, dy, dz);
        if (dd < h && (!best || dd / h < best.f)) best = { i, f: dd / h };
      }
      if (best) {
        const group = this.cat.systemOf(best.i, this.cfg.destinations.groupAu);
        const sys = this.uni.systemForGroup(group);
        if (this.warp.on) this._dropToSublight();
        this.enterSystem(sys);
        this._chooseRef(jd, true);
      }
    }
  }
  _chooseRef(jd, force = false) {
    const sys = this.system; if (!sys) return;
    const sp = this.sysPos(jd);
    let best = null, bestSoi = Infinity;
    for (const b of sys.bodies) {
      if (b.kind === 'belt' || b.kind === 'star') continue;
      const soi = b.soiKm; if (!isFinite(soi)) continue;
      const bp = b.positionAt(jd);
      const d = Math.hypot(sp[0] - bp[0], sp[1] - bp[1], sp[2] - bp[2]);
      const lim = soi * (this.ref === b ? 1.08 : 1.0);
      if (d < lim && soi < bestSoi) { best = b; bestSoi = soi; }
    }
    // inside a star's own frame when no planet dominates: nearest star
    if (!best) {
      // for multi-star systems use the closest star as the frame (circumstellar), else the primary
      let ns = sys.stars[0], nd = Infinity;
      for (const s of sys.stars) { const q = s.positionAt(jd); const d = Math.hypot(sp[0] - q[0], sp[1] - q[1], sp[2] - q[2]); if (d < nd) { nd = d; ns = s; } }
      best = sys.stars.length > 1 ? ns : null;
    }
    if (best !== this.ref) this.setRef(best, jd);
  }

  /** hard wall at each body's safe low orbit: swept test so no speed or time step can tunnel through */
  _wallOfSafeOrbits() {
    const sys = this.system; if (!sys || this.orbit || this.xfer || this.ins) return;
    const jd = this.jd, jd0 = this._prev ? this._prev.jd : jd;
    const a1 = this.sysPos(jd);
    const a0 = this._prev ? this._prev.abs : a1;
    const v = this.sysVel(jd);
    for (const b of sys.bodies) {
      if (b.kind === 'belt') continue;
      const rs = b.safeRadiusKm(this.cfg);
      const bp1 = b.positionAt(jd);
      const r1 = [a1[0] - bp1[0], a1[1] - bp1[1], a1[2] - bp1[2]];
      const d1 = len(r1);
      if (d1 > rs * 3 && (!this._prev || len(sub(a0, a1)) < d1 * 0.2)) { continue; }
      const bp0 = b.positionAt(jd0);
      const r0 = [a0[0] - bp0[0], a0[1] - bp0[1], a0[2] - bp0[2]];
      // closest approach of the relative segment r0→r1 to the origin
      const seg = sub(r1, r0), sl2 = dot(seg, seg);
      let tmin = 1, hit = d1 < rs;
      if (sl2 > 0) {
        const tc = clamp(-dot(r0, seg) / sl2, 0, 1);
        const pc = madd(r0, seg, tc);
        if (len(pc) < rs) { hit = true; tmin = tc; }
      }
      if (!hit) continue;
      // push the ship out along the direction of the closest point of the swept segment
      let dirv = tmin < 1 && sl2 > 0 ? norm(madd(r0, seg, tmin)) : norm(r1);
      if (!isFinite(dirv[0])) dirv = [1, 0, 0];
      const newRel = scale(dirv, rs * 1.0005);
      const bpNow = bp1;
      const abs = [bpNow[0] + newRel[0], bpNow[1] + newRel[1], bpNow[2] + newRel[2]];
      const rp = this.refPos(jd);
      this.pos = [abs[0] - rp[0], abs[1] - rp[1], abs[2] - rp[2]];
      // remove the inward velocity (relative to the body)
      const bv = b.velocityAt(jd), vrel = [v[0] - bv[0], v[1] - bv[1], v[2] - bv[2]];
      const vr = dot(vrel, dirv);
      if (vr < 0) { const rv = this.refVel(jd); const fix = [vrel[0] - dirv[0] * vr + bv[0] - rv[0], vrel[1] - dirv[1] * vr + bv[1] - rv[1], vrel[2] - dirv[2] * vr + bv[2] - rv[2]]; this.vel = fix; }
      this.speedTarget = Math.min(this.speedTarget, len(this.vel));
      if (this.lastSafeBody !== b || this.safeHit <= 0) this.say(`Safe-orbit limit: ${b.name} (${fmtDistance(rs - b.radiusKm)} altitude)`, 3);
      this.lastSafeBody = b; this.safeHit = 0.5;
      // if flying manually, drop into a stable orbit instead of grinding along the wall
      if (this.cfg.ship.orbitHold.enabled && !this.course && len(vrel) < 20) { /* leave to the user */ }
    }
    this.safeHit = Math.max(0, this.safeHit - 1 / 60);
    this._prev = { jd, abs: this.sysPos(jd) };
  }

  // ───────────────────────── readouts ─────────────────────────
  /** velocity of the ship in the local rest frame (c units), world axes — drives aberration / Doppler */
  betaVector() {
    if (this.warp.on) return [0, 0, 0];
    const v = this.system ? this.sysVel() : this.vel;
    return [v[0] / C_KMS, v[1] / C_KMS, v[2] / C_KMS];
  }
  /** visual β for the aberration shaders; during warp it grows artistically from 0.8 to maxBeta */
  visualBeta() {
    const w = this.warp, W = this.cfg.warp, maxB = W.visual.maxBeta ?? 0.97;
    if (!w.on) return this.betaVector();
    const f = this.forward();
    const sub = this.cfg.ship.maxSublightC;
    const g = Math.pow(clamp(Math.log10(w.c / sub) / Math.log10(W.steps[W.steps.length - 1] / sub), 0, 1), 0.55);
    const b = (sub + (maxB - sub) * g) * W.visual.aberrationScale;
    return [f.x * b, f.y * b, f.z * b];
  }
  gammaOf(beta) { const b2 = beta[0] * beta[0] + beta[1] * beta[1] + beta[2] * beta[2]; return 1 / Math.sqrt(Math.max(1 - b2, 1e-6)); }

  hud() {
    const sys = this.system, w = this.warp;
    const out = { warp: w.on, speed: this.speed, c: this.speed / C_KMS, K: this.kNow, jd: this.jd, mode: this.mode };
    out.where = sys ? (this.ref ? `${sys.name} · ${this.ref.name}` : sys.name) : 'Interstellar space';
    out.system = sys ? sys.name : null;
    out.engaged = !!(this.course && this.course.engaged);
    out.fictional = sys ? sys.fictional : false;
    out.gamma = this.gammaOf(this.betaVector());
    if (this.course) {
      const C = this.course;
      if (C.kind === 'body') { const B = C.body, bp = B.positionAt(this.jd), sp = this.sysPos(); out.target = B.name; out.targetDist = Math.hypot(sp[0] - bp[0], sp[1] - bp[1], sp[2] - bp[2]); out.targetKind = 'body'; }
      else if (C.kind === 'system') { out.target = C.name; out.targetDist = C.distKm ?? 0; out.targetKind = 'system'; out.phase = C.phase; }
    }
    out.trip = this.trip.elapsed;
    return out;
  }

  eta() {
    const C = this.course; if (!C) return NaN;
    const K = this.warp.on ? this._warpK() : this.timeEff;
    if (C.kind === 'body') {
      const cruise = this.cfg.autopilot.cruiseFraction * this.cfg.ship.maxSublightC * C_KMS, tau = this.cfg.autopilot.accelTimeSec;
      const x = C.remaining ?? NaN; if (!isFinite(x)) return NaN;
      return (Math.max(x - cruise * tau, 0) / cruise + tau * Math.log(1 + Math.min(x, cruise * tau) / Math.max(C.radius * 0.02, 1))) / K;
    }
    if (C.kind === 'system') {
      const d = (C.distKm ?? 0) - (C.hpKm ?? 0);
      const w = this.warp;
      const v = w.on ? Math.max(w.c * C_KMS, 1) : this.cfg.warp.steps[this.cfg.warp.steps.length - 1] * C_KMS * 0.8;
      return Math.max(d, 0) / v + 12;
    }
    return NaN;
  }
}

// turn-rate helper: fraction of the remaining rotation to apply this tick, as an angle in radians

// ───────────── two-body helpers (km, s) ─────────────
function stumpff(z) {
  if (z > 1e-8) { const q = Math.sqrt(z); return [(1 - Math.cos(q)) / z, (q - Math.sin(q)) / (q * q * q)]; }
  if (z < -1e-8) { const q = Math.sqrt(-z); return [(Math.cosh(q) - 1) / -z, (Math.sinh(q) - q) / (q * q * q)]; }
  return [0.5, 1 / 6];
}
/** propagate a two-body state (position r0, velocity v0, gravitational parameter mu) forward by dt (universal variables, exact for any dt) */
function keplerStep(mu, r0, v0, dt) {
  const R0 = len(r0), V0 = len(v0), vr0 = dot(r0, v0) / R0, sm = Math.sqrt(mu), alpha = 2 / R0 - V0 * V0 / mu;
  if (alpha > 1e-14) { const T = 2 * Math.PI / (sm * Math.pow(alpha, 1.5)); dt -= T * Math.trunc(dt / T); }
  let chi = sm * Math.abs(alpha) * dt, C = 0.5, S = 1 / 6;
  for (let i = 0; i < 60; i++) {
    const z = alpha * chi * chi; [C, S] = stumpff(z);
    const F = R0 * vr0 / sm * chi * chi * C + (1 - alpha * R0) * chi * chi * chi * S + R0 * chi - sm * dt;
    const dF = R0 * vr0 / sm * chi * (1 - z * S) + (1 - alpha * R0) * chi * chi * C + R0;
    const dc = F / dF; chi -= dc; if (Math.abs(dc) < 1e-9 * Math.max(1, Math.abs(chi))) break;
  }
  const z = alpha * chi * chi; [C, S] = stumpff(z);
  const f = 1 - chi * chi / R0 * C, g = dt - chi * chi * chi / sm * S;
  const r = [f * r0[0] + g * v0[0], f * r0[1] + g * v0[1], f * r0[2] + g * v0[2]], R = len(r);
  const fd = sm / (R * R0) * (z * S - 1) * chi, gd = 1 - chi * chi / R * C;
  return [r, [fd * r0[0] + gd * v0[0], fd * r0[1] + gd * v0[1], fd * r0[2] + gd * v0[2]]];
}
/** seconds until the next apoapsis ('apo') or periapsis ('peri') of the osculating ellipse */
function timeToApsis(mu, r, v, which) {
  const R = len(r), V2 = dot(v, v), alpha = 2 / R - V2 / mu; if (alpha <= 0) return Infinity;
  const a = 1 / alpha, h = len(cross(r, v)), e = Math.sqrt(Math.max(0, 1 - h * h * alpha / mu)), n = Math.sqrt(mu / (a * a * a)), T = 2 * Math.PI / n;
  if (e < 1e-6) return 0.5 * T;
  const vr = dot(r, v) / R, E0 = Math.acos(clamp((1 - R / a) / e, -1, 1)), E = vr >= 0 ? E0 : 2 * Math.PI - E0, M = E - e * Math.sin(E);
  let t = ((which === 'apo' ? Math.PI : 2 * Math.PI) - M) / n; t -= T * Math.floor(t / T); return t;
}

function S_TURN(cfg, dt, ang) {
  const maxRate = Math.max(Math.PI / Math.max(cfg.autopilot.turnSeconds, 0.5), 0.2);
  const k = Math.min(1, ang / Math.max(ang, 1e-6));
  return Math.min(ang, maxRate * dt * (0.4 + 0.6 * Math.min(1, ang / 0.5)));
}
