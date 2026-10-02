import * as THREE from 'three';
import { loadData } from './data/loader.js';
import { Universe } from './universe/universe.js';
import { Gfx } from './render/gfx.js';
import { SpaceView } from './render/spaceView.js';
import { ShipView } from './render/shipView.js';
import { loadTextures } from './render/textures.js';
import { systemIrradiance, keyLight, exposureFromContext, adaptGain } from './render/exposure.js';
import { Sim, C_KMS } from './sim/sim.js';
import { UI } from './ui/ui.js';
import { Visitors } from './net/visitors.js';
import { blackbodyRGB } from './universe/starTraits.js';
import { KM_PER_PC, KM_PER_AU, DEG } from '../shared/astro.js';
import { smoothstep, clamp } from './core/math.js';

export async function boot() {
  const cfg = window.SIM_CONFIG;
  const params = new URLSearchParams(location.search);
  if (params.has('notour')) cfg.sim.startWithTour = false;
  // saved settings overlay (settings panel writes them)
  try { const saved = JSON.parse(localStorage.getItem('starship.settings') || '{}'); for (const [p, v] of Object.entries(saved)) { const ks = p.split('.'); const last = ks.pop(); ks.reduce((o, k) => o?.[k], cfg)[last] = v; } } catch {}

  const setMsg = (t, f) => { const m = document.getElementById('boot-msg'); if (m) m.textContent = t; const b = document.getElementById('boot-bar'); if (b && f != null) b.style.width = (f * 100) + '%'; };
  const tick = () => new Promise((r) => setTimeout(r, 16));
  setMsg('reading star catalogue…', 0.08); await tick();
  const data = await loadData();
  setMsg(`${data.n.toLocaleString('en-US')} stars · ${data.galaxies.length} galaxies · ${data.hosts.size} planet hosts`, 0.3); await tick();
  const uni = new Universe(data, cfg);
  const canvas = document.getElementById('view');
  const gfx = new Gfx(canvas, cfg, data);
  setMsg('decoding planet maps…', 0.5); await tick();
  const textures = await loadTextures(gfx.renderer);
  setMsg('building the ship…', 0.8); await tick();
  const space = new SpaceView(gfx, cfg, textures, uni.cat);
  const shipView = new ShipView(gfx, cfg);
  const sim = new Sim(uni, cfg);
  const visitors = new Visitors(sim, cfg);
  const ui = new UI(sim, cfg, gfx, canvas, visitors);
  setMsg('ready', 1); await tick();
  visitors.autoStart();

  let curSystem = null, userScale = cfg.visuals.renderScale;
  let gainCur = null, last = performance.now(), fpsT = 0, lowT = 0, highT = 0, okT = 0, fpsEma = 60, lastUp = 0, lastDown = 0, raiseWait = 3, prevWarp = false, probe = null, noDownUntil = 0;
  const api = window.__sim = { cfg, data, uni, gfx, space, shipView, sim, ui, visitors, textures, frames: 0, F: null, info: null, freeze: false };
  api.testWarp = (stepIdx, dirWorld) => {            // dev helper: drop into interstellar space and engage warp at a given step
    sim.cancelCourse(); sim.stopTour && sim.stopTour();
    sim.system = null; sim.ref = null; sim.anchorPc = [0, 0, 0]; sim.pos = [4e10, 2e10, 1e10]; sim.vel = [0, 0, 0];
    if (dirWorld) sim._lookAlong(new THREE.Vector3(...dirWorld), Infinity, new THREE.Vector3(0, 0, 1));
    sim.warp.on = true; sim.warp.step = stepIdx; sim.warp.c = cfg.warp.steps[stepIdx]; sim.warp.form = 1; sim.mode = 'free'; sim.warp.dropping = false;
  };
  api.deepSpace = (dir = [0.3, 0.9, 0.1], betaC = 0, anchorPc = [0, 0, 0], posKm = [6e10, 2e10, 1e10]) => {      // dev helper: float in interstellar space at a given speed
    sim.cancelCourse(); sim.stopTour && sim.stopTour(); sim.warp.on = false; sim.warp.form = 0;
    sim.system = null; sim.ref = null; sim.anchorPc = anchorPc.slice(); sim.pos = posKm.slice(); sim.orbit = null;
    sim._lookAlong(new THREE.Vector3(...dir), Infinity, new THREE.Vector3(0, 0, 1));
    const f = sim.forward(), v = betaC * C_KMS; sim.speedTarget = v; sim.vel = [f.x * v, f.y * v, f.z * v]; sim.mode = 'free';
  };
  api.probeHDR = () => {          // dev helper: statistics of the HDR scene buffer (NaN / Inf / brightest value / lit pixels)
    const g = gfx, r = g.renderer, W = g.W, H = g.H, buf = new Uint16Array(4 * W * H);
    r.readRenderTargetPixels(g.sceneRT, 0, 0, W, H, buf);
    const f = (h) => { const e = (h >> 10) & 31, m = h & 1023; return e === 0 ? Math.pow(2, -14) * (m / 1024) : e === 31 ? (m ? NaN : Infinity) : Math.pow(2, e - 15) * (1 + m / 1024); };
    let nan = 0, inf = 0, lit = 0, mx = 0; for (let i = 0; i < buf.length; i += 4) { const v = f(buf[i]); if (Number.isNaN(v)) nan++; else if (v === Infinity) inf++; else { if (v > 0.002) lit++; if (v > mx) mx = v; } }
    return { nan, inf, lit, max: +mx.toFixed(3), total: W * H };
  };
  const startupT = performance.now();

  const frame = (now) => {
    const dtReal = Math.min(0.1, (now - last) / 1000); last = now;
    if (!api.freeze) { ui.pollKeys(); sim.update(dtReal); }
    if (sim.system !== curSystem) { curSystem = sim.system; if (curSystem) space.setSystem(curSystem); else space.clear(); }
    const jd = sim.jd;

    // ── exposure from the illumination around the ship (a camera metering the scene)
    const c = sim.cam;
    const shipSys = sim.sysPos(jd);
    let ctx = lightingFor(sim, uni, jd, shipSys);
    if (api.devCam && sim.system) { const dcb = sim.system.get(api.devCam.body) || sim.system.bodies.find((b) => b.id === api.devCam.body || b.name === api.devCam.body); if (dcb) ctx = lightingFor(sim, uni, jd, dcb.positionAt(jd)); }
    const target = api.devGain || exposureFromContext(ctx.contextE, cfg);
    gainCur = adaptGain(gainCur, target, dtReal, cfg.visuals.exposure.adaptSeconds);

    // ── camera pose from ship + orbiting chase camera
    visitors.update(dtReal);
    const sv = shipView.update({
      others: visitors.models,
      quat: sim.q, camFrame: sim.qCam, gimbal: sim.gimbal, engines: sim.eng, dt: dtReal, cam: { yaw: c.yaw, pitch: c.pitch, dist: Math.max(c.dist, 0.0), up: c.dist < 3 ? 0 : c.up * Math.min(1, c.dist / 40) }, fov: cfg.camera.fovDeg, aspect: gfx.W / gfx.H,
      ...ctx, exposure: gainCur, throttle: throttle01(sim, cfg), warp: { form: sim.warp.form, speed01: speed01(sim, cfg), pulse: sim.warp.pulse },
    });
    let camQuat = sv.camQuat, offKm = sv.offsetWorld.clone().multiplyScalar(1e-3);
    let camSys = [shipSys[0] + offKm.x, shipSys[1] + offKm.y, shipSys[2] + offKm.z];
    const dc = api.devCam;        // visual-QA camera: hover around a body (az measured from the star direction); hides the ship
    if (dc && sim.system) {
      const body = sim.system.get(dc.body) || sim.system.bodies.find((b) => b.id === dc.body || b.name === dc.body);
      if (body) {
        const bp = body.positionAt(jd), star = (body.parent && body.parent.kind === 'star' ? body.parent : sim.system.stars[0]).positionAt(jd);
        let sd = new THREE.Vector3(star[0] - bp[0], star[1] - bp[1], star[2] - bp[2]); sd = sd.lengthSq() < 1 ? new THREE.Vector3(1, 0, 0) : sd.normalize();
        const up0 = new THREE.Vector3(0, 0, 1), side = new THREE.Vector3().crossVectors(sd, up0).normalize(), nrm = new THREE.Vector3().crossVectors(side, sd).normalize();
        const az = dc.az * DEG, el = dc.el * DEG;
        const dir = sd.clone().multiplyScalar(Math.cos(az) * Math.cos(el)).add(side.clone().multiplyScalar(Math.sin(az) * Math.cos(el))).add(nrm.clone().multiplyScalar(Math.sin(el)));
        const dist = body.radiusKm * dc.r;
        camSys = [bp[0] + dir.x * dist, bp[1] + dir.y * dist, bp[2] + dir.z * dist];
        const fwd = dir.clone().negate(), right = new THREE.Vector3().crossVectors(fwd, up0).normalize(), upv = new THREE.Vector3().crossVectors(right, fwd);
        camQuat = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, upv, fwd.clone().negate()));
        if (dc.look) camQuat.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(dc.look[1] * DEG, dc.look[0] * DEG, 0)));
        shipView.ship.root.visible = false; shipView.bubble.visible = false;
      }
    }
    const origin = sim.system ? sim.system.originPc : sim.anchorPc;
    const camPc = [origin[0] + camSys[0] / KM_PER_PC, origin[1] + camSys[1] / KM_PER_PC, origin[2] + camSys[2] / KM_PER_PC];

    // ── relativistic parameters
    const beta = sim.visualBeta(), b2 = beta[0] ** 2 + beta[1] ** 2 + beta[2] ** 2, gamma = 1 / Math.sqrt(Math.max(1 - b2, 1e-6));
    const view = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(camQuat)).transpose();
    const betaCam = new THREE.Vector3(beta[0], beta[1], beta[2]).applyMatrix3(view);
    const fwd = sim.forward();
    const w = sim.warp, wv = cfg.warp.visual;
    const sp01 = speed01(sim, cfg);
    // warp bubble on screen
    const lensInfo = warpLens(shipView, gfx, w, sp01);
    const F = {
      camPc, camSys, jd, quat: camQuat, view, beta, gamma, betaCam, exposure: gainCur, fov: cfg.camera.fovDeg, dt: dtReal, dtReal, timeScale: sim.timeUsed || 1, focalPx: gfx.focalPx,
      mwScale: 1, zodi: sim.system && sim.system === uni.solar ? 1 : 0, zodiScale: 1, sunDir: ctx.sunDirRest, hide: [], showOrbits: true,
      warp: { dir: [fwd.x, fwd.y, fwd.z], beta: 0, gamma: 1, streak: w.on ? w.form * (0.3 + 0.7 * sp01) : 0, dim: 0, lens: w.form > 0.01 ? w.form : 0, center: lensInfo.center, radius: lensInfo.radius, flash: w.flash, dirCam: new THREE.Vector3(0, 0, -1) },
    };
    gfx.camera.fov = cfg.camera.fovDeg; gfx.camera.updateProjectionMatrix(); F.focalPx = gfx.focalPx;
    let info = { hide: [], labels: [], bodyInfo: new Map() };
    if (curSystem) info = space.update(F);
    F.hide = info.hide;
    if (cfg.visuals.galaxies.labels && cfg.visuals.galaxies.enabled && cfg.visuals.labels.enabled) {            // name tags for the distant galaxies (they are faint: this is how you find them)
      info.labels = (info.labels || []).slice();
      for (const m of gfx.galaxies) { const g = m.userData.g, d = m.material.uniforms.uDir.value; info.labels.push({ body: { name: `${g.name} · ${(g.dKpc * 3.2616).toFixed(0)} kly`, fictional: false, parent: null }, rel: [d.x * 1e9, d.y * 1e9, d.z * 1e9], dist: 1e18, angPx: 3, kind: 'galaxy', dirOnly: true }); }
    }
    api.F = F; api.info = info; api.ctx = ctx;
    if (cfg.visuals.renderScale !== userScale) { userScale = cfg.visuals.renderScale; gfx.setRenderScale(userScale); }

    gfx.render(F, {
      space: curSystem ? (r, cam) => space.render(r, cam) : null,
      near: (r) => shipView.render(r),
    });
    if (!api.freeze) ui.update(dtReal, { scale: gfx.renderScale });
    ui.updateLabels(info, view, cfg.camera.fovDeg, gfx.W / gfx.H);
    ui.updateMarkers(view, cfg.camera.fovDeg); ui.updateVisitors(view, cfg.camera.fovDeg);
    api.frames++;

    // ── adaptive resolution (keep ~60 fps on modest GPUs). It must also come BACK: a 60 Hz display never reports more than ~60 fps, so recovery is triggered by "fast enough", not by "faster than the target".
    const ar = cfg.visuals.adaptiveResolution;
    if (ar.enabled && performance.now() - startupT > 4000) {
      const now = performance.now(), fps = 1 / Math.max(dtReal, 1e-3);
      fpsEma += (fps - fpsEma) * 0.08;
      if (fpsEma < ar.targetFps - 6) { lowT += dtReal; okT = 0; } else if (fpsEma >= ar.targetFps - 4) { okT += dtReal; lowT = 0; } else { lowT = okT = 0; }
      // if a step down did not buy any frame rate, resolution is not the bottleneck (CPU, vsync, a slow display): undo it and stop trying for a while
      if (probe && now - probe.t > 2500) { if (fpsEma < probe.fps * 1.08 && gfx.renderScale < probe.prev) { gfx.setRenderScale(probe.prev); noDownUntil = now + 120000; } probe = null; }
      if (lowT > 1.5 && gfx.renderScale > ar.min && now > noDownUntil) {
        probe = { t: now, fps: fpsEma, prev: gfx.renderScale };
        gfx.setRenderScale(Math.max(ar.min, gfx.renderScale - 0.1)); lowT = 0;
        if (now - lastUp < 6000) raiseWait = Math.min(raiseWait * 2, 90);            // we raised it and it was too much: wait longer before trying again
        lastDown = now;
      }
      if (okT > raiseWait && gfx.renderScale < userScale - 0.01 && now - lastDown > 3000) { gfx.setRenderScale(Math.min(userScale, gfx.renderScale + 0.1)); okT = 0; lastUp = now; }
      if (now - lastDown > 40000) raiseWait = 3;
      // leaving warp is the biggest load change there is: go straight back to full resolution (the loop above steps down again if the machine cannot hold it)
      const wf = sim.warp.form > 0.01 || sim.warp.on;
      if (prevWarp && !wf && gfx.renderScale < userScale) { gfx.setRenderScale(userScale); fpsEma = ar.targetFps; lowT = 0; raiseWait = 3; }
      prevWarp = wf;
    }
    requestAnimationFrame(frame);
  };
  document.getElementById('boot').style.display = 'none';
  window.__ready = true;
  requestAnimationFrame(frame);
}

function speed01(sim, cfg) {
  const w = sim.warp; if (!w.on) return 0;
  const top = cfg.warp.steps[cfg.warp.steps.length - 1];
  return clamp(Math.log10(Math.max(w.c, 0.8) / 0.8) / Math.log10(top / 0.8), 0, 1);
}
function throttle01(sim, cfg) {
  if (sim.warp.on) return 0.55;
  return clamp(sim.thrust, 0, 1) * 0.9;          // engine output: only while the engine is really pushing (speeding up, or burning retrograde to slow down)
}

// lighting + exposure context for the ship at its current place
function lightingFor(sim, uni, jd, shipSys) {
  const cat = uni.cat;
  let sunDir = [1, 0, 0], sunE = [0, 0, 0], contextE = 3e-9, shine = 0, bodyDir = [0, 1, 0], vis = 1, sunDirRest = [1, 0, 0];
  if (sim.system) {
    const k = keyLight(sim.system, shipSys, jd);
    const irr = systemIrradiance(sim.system, shipSys, jd);
    if (k) { sunDir = k.dir; sunDirRest = k.dir; sunE = [k.color[0] * k.E, k.color[1] * k.E, k.color[2] * k.E]; vis = k.vis; }
    shine = irr.shine; contextE = irr.direct + irr.shine + 3e-9;
    // nearest big body for planetshine direction
    let best = null, bd = Infinity;
    for (const b of sim.system.bodies) {
      if (b.kind === 'star' || b.kind === 'belt') continue;
      const p = b.positionAt(jd); const d = Math.hypot(p[0] - shipSys[0], p[1] - shipSys[1], p[2] - shipSys[2]);
      const f = d / b.radiusKm; if (f < bd) { bd = f; best = [(p[0] - shipSys[0]) / d, (p[1] - shipSys[1]) / d, (p[2] - shipSys[2]) / d]; }
    }
    if (best && bd < 40) bodyDir = best;
  } else {
    // interstellar: nearby stars as the key light
    const pc = sim.shipPc(jd);
    const idx = cat.within(pc, 12);
    let bestE = 0, total = 0;
    for (const i of idx) {
      const m = cat.apparentMag(i, pc); const E = Math.pow(10, -0.4 * (m + 26.74)); total += E;
      if (E > bestE) { bestE = E; const d = [cat.pos[i * 3] - pc[0], cat.pos[i * 3 + 1] - pc[1], cat.pos[i * 3 + 2] - pc[2]]; const l = Math.hypot(...d) || 1; sunDir = [d[0] / l, d[1] / l, d[2] / l]; sunDirRest = sunDir; const col = blackbodyRGB(cat.d.teff[i]); sunE = [col[0] * E, col[1] * E, col[2] * E]; }
    }
    contextE = total + 3e-9;
  }
  return { sunDir, sunE, sunVisible: vis, bodyDir, bodyShine: shine, ambientE: 2e-9, contextE, sunDirRest };
}

// project the bubble centre/radius to screen for the lens pass
function warpLens(shipView, gfx, w, sp01) {
  if (!(w.form > 0.01)) return { center: [0.5, 0.5], radius: 0.2 };
  const cam = shipView.camera;
  const v = new THREE.Vector3(0, 0, 0).applyMatrix4(cam.matrixWorldInverse);
  const dist = Math.max(v.length(), 1);
  const f = 0.5 / Math.tan(0.5 * cam.fov * DEG);                       // in units of screen height
  let cx = 0.5, cy = 0.5;
  if (v.z < -0.01) { cx = 0.5 + (v.x / -v.z) * f / cam.aspect; cy = 0.5 + (v.y / -v.z) * f; }
  const R = 120 * (0.35 + 0.65 * smoothstep(0, 0.6, w.form));          // lateral radius of the flat bubble (metres)
  const r = Math.min(R / Math.max(dist, R * 1.02), 0.99);
  const radius = Math.min(Math.tan(Math.asin(r)) * f, 1.5);
  return { center: [cx, cy], radius };
}
