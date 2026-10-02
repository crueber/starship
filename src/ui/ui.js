// Compact, monochrome HUD + navigation + settings + keyboard / mouse input.
import * as THREE from 'three';
import { CSS } from './ui.css.js';
import { fmtDistance, fmtSpeed, fmtDuration, clamp } from '../core/math.js';
import { dateFromJD, KM_PER_LY, KM_PER_PC, KM_PER_AU } from '../../shared/astro.js';
import { C_KMS } from '../sim/sim.js';

const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

export class UI {
  constructor(sim, cfg, gfx, canvas) {
    this.sim = sim; this.cfg = cfg; this.gfx = gfx; this.canvas = canvas;
    this.root = document.getElementById('ui');
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    this.keys = new Set(); this.selected = null; this.labelsEnabled = cfg.visuals.labels.enabled; this.hidden = false;
    this._build(); this._bindInput();
    this.fpsAvg = 60; this._lastNav = 0;
  }

  // ───────────────────────── layout ─────────────────────────
  _build() {
    const R = this.root, sim = this.sim, cfg = this.cfg;
    this.tl = el('div', 'tl panel'); this.tl.style.padding = '7px 11px';
    this.tl.innerHTML = '<div class="loc" id="h-loc"></div><div class="sub" id="h-sub"></div><div class="sub" id="h-sub2"></div>';
    this.tr = el('div', 'tr');
    this.chips = {};
    for (const k of ['TOUR', 'FREE', 'AUTO', 'WARP']) { const c = el('div', 'chip', k); this.chips[k] = c; this.tr.appendChild(c); }
    this.chips.AUTO.style.cursor = 'pointer'; this.chips.AUTO.title = 'autopilot (cruise control) for the set course — click or press P'; this.chips.AUTO.onclick = () => sim.engageAutopilot();
    this.banner = el('div', 'banner panel'); this.banner.textContent = 'fictional system · procedurally generated';
    this.toast = el('div', 'toast');
    this.speedP = el('div', 'speed panel', `<div class="big" id="h-speed">0 m/s</div><div class="bar"><i id="h-bar" style="width:0%"></i></div>
      <div class="row"><span>velocity</span><b id="h-kms"></b></div><div class="row"><span>γ / β</span><b id="h-gam"></b></div><div class="row"><span>frame</span><b id="h-frame"></b></div><div class="row"><span id="h-near-l">nearest</span><b id="h-near"></b></div><div class="row"><span>engine</span><b id="h-eng"></b></div><div class="row"><span>trip clock</span><b id="h-trip"></b></div>`);
    this.courseP = el('div', 'course panel', ''); this.courseP.style.display = 'none';
    this.ctl = el('div', 'ctl panel');
    // time compression
    const gT = el('div', 'grp'); gT.appendChild(el('span', 'lab', 'time'));
    this.timeBtns = [];
    cfg.time.steps.forEach((s, i) => { const b = el('button', '', s >= 1e6 ? (s / 1e6) + 'M' : s >= 1e3 ? (s / 1e3) + 'k' : String(s)); b.title = `time ×${s} (key ${i + 1})`; b.onclick = () => sim.setTimeIndex(i); gT.appendChild(b); this.timeBtns.push(b); });
    this.autoT = el('button', '', 'A'); this.autoT.title = 'automatic time compression for autopilot legs (key 0)'; this.autoT.onclick = () => sim.setTimeAuto(!sim.timeAuto); gT.appendChild(this.autoT);
    // drive slider: ROCKET (orbital, km/s) · NACELLES white (cruise, % of c) · NACELLES blue (warp)
    const gD = el('div', 'drive');
    gD.innerHTML = `<div class="dh"><span class="lab">drive</span><b id="drv-txt"></b></div>
      <div class="trk" id="drv-trk"><i class="seg o"></i><i class="seg c"></i><i class="seg w"></i><i class="cmd" id="drv-cmd"></i><i class="act" id="drv-act"></i><i class="thumb" id="drv-thumb"></i></div>
      <div class="lbls"><span style="left:0">stop</span><span id="drv-l1"></span><span id="drv-l3"></span><span id="drv-l4"></span></div>
      <div class="legend"><span class="o">ROCKET · km/s</span><span class="c">NACELLES · % c</span><span class="w">WARP · c</span></div>`;
    this._setupDrive(gD);
    // tools
    const gX = el('div', 'grp');
    this.btnTour = el('button', '', 'TOUR'); this.btnTour.onclick = () => (sim.tour ? sim.stopTour() : sim.beginTour());
    this.btnNav = el('button', '', 'NAV'); this.btnNav.onclick = () => this.toggleNav();
    this.btnStop = el('button', '', 'HOLD'); this.btnStop.title = 'cancel autopilot / stop (X)'; this.btnStop.onclick = () => this.stopAll();
    this.btnSet = el('button', '', '⚙'); this.btnSet.title = 'settings (,)'; this.btnSet.onclick = () => this.toggleSettings();
    this.btnFull = el('button', '', '⛶'); this.btnFull.title = 'full screen on / off (Z)'; this.btnFull.onclick = () => this.toggleFullscreen();
    this.btnHelp = el('button', '', '?'); this.btnHelp.onclick = () => this.help.classList.toggle('open');
    for (const b of [this.btnTour, this.btnNav, this.btnStop, this.btnSet, this.btnFull, this.btnHelp]) gX.appendChild(b);
    this.ctl.append(gD, gT, gX);
    // nav panel
    this.nav = el('div', 'nav panel', '<h4><span>Navigation</span><span id="nav-x" style="cursor:pointer">×</span></h4><div class="srch"><input id="nav-q" type="text" placeholder="search systems (2+ characters)" autocomplete="off" spellcheck="false"></div><div class="list" id="nav-list"></div><div class="foot" id="nav-foot">select a destination</div>');
    // settings
    this.setP = el('div', 'set panel', '<h4><span>Settings</span><span id="set-x" style="cursor:pointer">×</span></h4><div class="body" id="set-body"></div>');
    this.help = el('div', 'help panel', `<h4>Controls</h4><div class="cols">
      <div><kbd>W</kbd><kbd>S</kbd> throttle up / down</div><div><kbd>X</kbd> cut throttle · cancel autopilot</div>
      <div><kbd>A</kbd><kbd>D</kbd> yaw · <kbd>R</kbd><kbd>F</kbd> pitch · <kbd>Q</kbd><kbd>E</kbd> roll</div><div>mouse: <b>drag</b> orbit camera · <b>wheel</b> zoom</div>
      <div><kbd>right-drag</kbd> / <kbd>Shift</kbd>+drag steer ship</div><div><kbd>C</kbd> recentre camera · <kbd>V</kbd> first-person</div>
      <div><kbd>=</kbd><kbd>-</kbd> / wheel on the drive slider: step through rocket → nacelle → warp speeds</div><div><kbd>G</kbd> engage / drop warp · <kbd>]</kbd><kbd>[</kbd> warp step</div><div><kbd>1</kbd>–<kbd>8</kbd> time compression · <kbd>0</kbd> auto</div>
      <div><kbd>N</kbd> navigation · <kbd>Enter</kbd> set course</div><div><kbd>T</kbd> tour on / off · <kbd>,</kbd> settings</div>
      <div><kbd>O</kbd> orbit lines · <kbd>L</kbd> labels</div><div><kbd>Z</kbd> full screen · <kbd>H</kbd> hide interface · <kbd>?</kbd> this help</div></div>
      <div style="margin-top:8px;color:#8a8a8a">Speed limit inside a heliopause is ${cfg.ship.maxSublightC} c. Beyond it the warp drive steps 1 c → ${cfg.warp.steps[cfg.warp.steps.length - 1].toLocaleString('en-US')} c and the ship brakes itself to sub-light at the next heliopause. Nothing can be landed on; every body has a safe-orbit wall.</div>`);
    this.labelLayer = el('div'); this.labelLayer.style.cssText = 'position:absolute;inset:0;pointer-events:none';
    this.well = el('div', 'well panel', '<canvas width="760" height="64"></canvas>'); this.wellCv = this.well.querySelector('canvas');
    this.selP = el('div', 'selp panel', ''); this.selKey = null;
    this.markSel = el('div', 'mark', '<div class="box"></div><div class="arr"></div><div class="tx"></div>'); this.markHome = el('div', 'mark home', '<div class="arr"></div><div class="tx"></div>');
    this.labelLayer.append(this.markSel, this.markHome);
    this.hint = el('div', 'hint', cfg.ui.keyHints ? 'drag = look around · right-drag = steer · W/S throttle · N navigation · ? help' : '');
    this.fps = el('div', 'fps', '');
    R.append(this.labelLayer, this.well, this.selP, this.tl, this.tr, this.banner, this.toast, this.speedP, this.courseP, this.ctl, this.nav, this.setP, this.help, this.hint, this.fps);
    this.nav.querySelector('#nav-x').onclick = () => this.nav.classList.remove('open');
    this.setP.querySelector('#set-x').onclick = () => this.setP.classList.remove('open');
    this._buildSettings();
    this.lbls = []; this.$ = (id) => document.getElementById(id);
    this.navList = this.$('nav-list'); this.navFoot = this.$('nav-foot'); this.navQ = this.$('nav-q');
    this.navQ.addEventListener('input', () => this.renderNav(true));
    this.navQ.addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (this.navQ.value) { this.navQ.value = ''; this.renderNav(true); } else { this.navQ.blur(); this.nav.classList.remove('open'); } e.stopPropagation(); } else if (e.key === 'Enter') { const first = this.navList.querySelector('.item:not(.dim)'); if (first && !this.selected) first.click(); else this.commitSelection(e.shiftKey ? 'approach' : 'orbit'); } });
    setTimeout(() => { if (this.hint) this.hint.style.opacity = '0'; }, 22000);
    this.hint.style.transition = 'opacity 2s';
  }

  toggleNav() { this.nav.classList.toggle('open'); if (this.nav.classList.contains('open')) { this.renderNav(true); setTimeout(() => this.navQ.focus(), 0); } }
  toggleFullscreen() {
    const d = document, el0 = d.documentElement;
    if (d.fullscreenElement || d.webkitFullscreenElement) (d.exitFullscreen || d.webkitExitFullscreen).call(d);
    else { const f = el0.requestFullscreen || el0.webkitRequestFullscreen; if (f) { const r = f.call(el0); if (r && r.catch) r.catch(() => this.sim.say('Full screen was refused by the browser', 3)); } else this.sim.say('Full screen is not available in this browser', 3); }
  }
  toggleSettings() { this.setP.classList.toggle('open'); }
  stopAll() { const s = this.sim; if (s.tour) s.stopTour(); if (s.course) s.cancelCourse('Autopilot disengaged'); if (s.warp.on) s.disengageWarp(); s.speedTarget = 0; }

  // ───────────────────────── settings ─────────────────────────
  _buildSettings() {
    const body = this.setP.querySelector('#set-body'), cfg = this.cfg;
    let saved = {}; try { saved = JSON.parse(localStorage.getItem('starship.settings') || '{}'); } catch {}
    const get = (path) => path.split('.').reduce((o, k) => o?.[k], cfg);
    const set = (path, v) => { const ks = path.split('.'); const last = ks.pop(); ks.reduce((o, k) => o[k], cfg)[last] = v; saved[path] = v; try { localStorage.setItem('starship.settings', JSON.stringify(saved)); } catch {} };
    for (const [p, v] of Object.entries(saved)) { try { set(p, v); } catch {} }
    const sec = (t) => body.appendChild(el('div', 'sec', t));
    const slider = (label, path, min, max, step, fmt = (v) => v) => {
      const row = el('label', '', `<span>${label}</span>`); const inp = el('input'); inp.type = 'range'; inp.min = min; inp.max = max; inp.step = step; inp.value = get(path);
      const val = el('span', 'v', fmt(+inp.value)); inp.oninput = () => { set(path, +inp.value); val.textContent = fmt(+inp.value); }; row.append(inp, val); body.appendChild(row);
    };
    const toggle = (label, path, after) => {
      const row = el('label', '', `<span>${label}</span>`); const inp = el('input'); inp.type = 'checkbox'; inp.checked = !!get(path); inp.onchange = () => { set(path, inp.checked); after && after(inp.checked); }; row.appendChild(inp); body.appendChild(row);
    };
    sec('picture');
    slider('exposure (EV)', 'visuals.exposure.compensationEv', -3, 3, 0.1, (v) => v.toFixed(1));
    slider('visual intensity', 'visuals.intensity', 0, 2, 0.05, (v) => v.toFixed(2));
    slider('bloom', 'visuals.bloom.strength', 0, 0.3, 0.005, (v) => v.toFixed(3));
    slider('film grain', 'visuals.tonemap.filmGrain', 0, 0.05, 0.002, (v) => v.toFixed(3));
    slider('field of view', 'camera.fovDeg', 30, 90, 1, (v) => v + '°');
    slider('render scale', 'visuals.renderScale', 0.5, 1.5, 0.05, (v) => v.toFixed(2));
    sec('sky');
    slider('star brightness', 'visuals.stars.brightness', 0.2, 4, 0.05, (v) => v.toFixed(2));
    slider('star halo', 'visuals.stars.haloStrength', 0, 3, 0.1, (v) => v.toFixed(1));
    slider('star colour', 'visuals.stars.colorSaturation', 0, 2, 0.05, (v) => v.toFixed(2));
    slider('milky way gain', 'visuals.milkyWay.gain', 0, 30, 0.5, (v) => v.toFixed(1));
    slider('dust / detail', 'visuals.milkyWay.detail', 0, 2, 0.05, (v) => v.toFixed(2));
    slider('galaxies gain', 'visuals.galaxies.gain', 0, 10, 0.1, (v) => v.toFixed(1));
    slider('galaxy smudge floor', 'visuals.galaxies.visibilityFloor', 0, 0.1, 0.002, (v) => v.toFixed(3));
    sec('worlds');
    slider('surface relief', 'visuals.planets.detailBump', 0, 2, 0.05, (v) => v.toFixed(2));
    slider('atmospheres', 'visuals.planets.atmosphere', 0, 2, 0.05, (v) => v.toFixed(2));
    slider('clouds', 'visuals.planets.clouds', 0, 1, 0.05, (v) => v.toFixed(2));
    toggle('orbit lines', 'visuals.orbitLines.enabled'); toggle('labels', 'visuals.labels.enabled', (v) => (this.labelsEnabled = v));
    toggle('ship shadows', 'visuals.ship.shadows');
    sec('flight');
    slider('speed limit (c)', 'ship.maxSublightC', 0.1, 0.95, 0.01, (v) => v.toFixed(2));
    slider('turn rate (°/s)', 'ship.turnRateDegPerSec', 10, 120, 1, (v) => v);
    slider('warp bubble opacity', 'warp.visual.bubbleOpacity', 0, 2, 0.05, (v) => v.toFixed(2));
    slider('warp star bunching', 'warp.visual.aberrationScale', 0, 1.2, 0.05, (v) => v.toFixed(2));
    slider('warp streaks', 'warp.visual.streakScale', 0, 3, 0.1, (v) => v.toFixed(1));
    slider('warp lensing', 'warp.visual.lensStrength', 0, 2, 0.05, (v) => v.toFixed(2));
    const note = el('div', 'sec', 'everything else: config.js'); body.appendChild(note);
    const reset = el('button', '', 'reset saved settings'); reset.style.marginTop = '8px'; reset.onclick = () => { try { localStorage.removeItem('starship.settings'); } catch {} location.reload(); }; body.appendChild(reset);
    const copy = el('button', '', 'copy settings JSON'); copy.style.margin = '8px 0 0 6px'; copy.onclick = () => navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(saved, null, 2)); body.appendChild(copy);
  }

  // ───────────────────────── input ─────────────────────────
  _bindInput() {
    const sim = this.sim, cv = this.canvas, inp = sim.input;
    window.addEventListener('keydown', (e) => {
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      const k = e.key.toLowerCase(); this.keys.add(k);
      if (k === 'z' && !e.ctrlKey && !e.metaKey) this.toggleFullscreen();
      else if (k === 'h') { this.hidden = !this.hidden; this.root.style.display = this.hidden ? 'none' : ''; }
      else if (k === 'n') this.toggleNav();
      else if (k === ',') this.toggleSettings();
      else if (k === '?' || k === '/') this.help.classList.toggle('open');
      else if (k === 'escape') { this.help.classList.remove('open'); this.nav.classList.remove('open'); this.setP.classList.remove('open'); }
      else if (k === 't') (sim.tour ? sim.stopTour() : sim.beginTour());
      else if (k === 'g') (sim.warp.on ? sim.disengageWarp() : sim.setWarpStep(0));
      else if (k === ']' || k === 'pageup') sim.stepWarp(1);
      else if (k === '[' || k === 'pagedown') sim.stepWarp(-1);
      else if (k === 'x') this.stopAll();
      else if (k === 'p') sim.engageAutopilot();
      else if (k === '=' || k === '+') this.stepDrive(1);
      else if (k === '-' || k === '_') this.stepDrive(-1);
      else if (k === 'o') this.cfg.visuals.orbitLines.enabled = !this.cfg.visuals.orbitLines.enabled;
      else if (k === 'l') { this.labelsEnabled = !this.labelsEnabled; this.cfg.visuals.labels.enabled = this.labelsEnabled; }
      else if (k === 'c') { sim.recenterCamera(); sim.cam.yawT = 0; sim.cam.pitchT = 0.28; sim.cam.distT = this.cfg.ship.lengthM * this.cfg.camera.chaseDistanceLengths; }
      else if (k === 'v') { sim.cam.distT = sim.cam.distT < 4 ? this.cfg.ship.lengthM * this.cfg.camera.chaseDistanceLengths : 0; sim.cam.yawT = 0; sim.cam.pitchT = 0.0; }
      else if (k === 'enter') this.commitSelection(e.shiftKey ? 'approach' : 'orbit');
      else if (/^[1-8]$/.test(k)) sim.setTimeIndex(+k - 1);
      else if (k === '0') sim.setTimeAuto(!sim.timeAuto);
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'tab'].includes(k)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    window.addEventListener('blur', () => this.keys.clear());
    // mouse: left-drag orbit camera, right-drag (or shift) steer
    let drag = null;
    cv.addEventListener('contextmenu', (e) => e.preventDefault());
    cv.addEventListener('pointerdown', (e) => { cv.setPointerCapture(e.pointerId); drag = { x: e.clientX, y: e.clientY, mode: (e.button === 2 || e.shiftKey) ? 'steer' : 'orbit' }; });
    const endDrag = () => { drag = null; };
    cv.addEventListener('pointerup', endDrag); cv.addEventListener('pointercancel', endDrag); cv.addEventListener('lostpointercapture', endDrag); window.addEventListener('blur', endDrag);
    cv.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY;
      if (drag.mode === 'orbit') {
        sim.cam.holdUntil = performance.now() + 6000;
        sim.cam.yawT -= dx * this.cfg.camera.orbitSensitivity * (Math.cos(sim.cam.pitchT) >= 0 ? 1 : -1); sim.cam.pitchT += dy * this.cfg.camera.orbitSensitivity;       // unlimited: over the top and round again
        if (sim.tour) sim.cam.drift = false;
      } else {
        if (sim.mode === 'tour') sim.stopTour();
        const s = this.cfg.camera.steerSensitivity;
        const dq = new THREE.Quaternion().setFromEuler(new THREE.Euler(-dy * s, -dx * s, 0, 'YXZ'));
        sim.rotateShip(dq);
      }
    });
    cv.addEventListener('wheel', (e) => {
      e.preventDefault();
      const L = this.cfg.ship.lengthM, f = Math.pow(this.cfg.camera.zoomSpeed, Math.sign(e.deltaY) * Math.min(3, Math.abs(e.deltaY) / 100 + 0.4));
      if (sim.mode === 'tour' && sim.tour) {            // the tour director owns the camera: the wheel scales its distance instead
        sim.tour.zoomMul = clamp((sim.tour.zoomMul || 1) * f, 0.05, this.cfg.camera.maxDistanceLengths / 2.6);
        return;
      }
      let d = sim.cam.distT; d = d < 1 && e.deltaY < 0 ? 0 : Math.max(d, 0.6) * f;
      sim.cam.distT = clamp(d, this.cfg.camera.minDistanceLengths * L, this.cfg.camera.maxDistanceLengths * L);
      if (e.deltaY > 0 && sim.cam.distT < 0.6 && d > 0) sim.cam.distT = 0.6 * f;
    }, { passive: false });
    cv.addEventListener('dblclick', () => { sim.recenterCamera(); sim.cam.yawT = 0; sim.cam.pitchT = 0.28; });
    // keep the picture matched to the window: window drags, full screen on / off, display changes
    let rz = 0; const refit = () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => { if (Math.abs(this.gfx.cssW - window.innerWidth) > 0 || Math.abs(this.gfx.cssH - window.innerHeight) > 0) this.gfx.resize(); }); };
    window.addEventListener('resize', refit); document.addEventListener('fullscreenchange', () => { refit(); setTimeout(refit, 150); setTimeout(refit, 600); });
    if (window.ResizeObserver) new ResizeObserver(refit).observe(document.documentElement);
  }

  pollKeys() {
    const k = this.keys, i = this.sim.input;
    i.throttle = (k.has('w') ? 1 : 0) - (k.has('s') ? 1 : 0);
    i.yaw = (k.has('a') || k.has('arrowleft') ? 1 : 0) - (k.has('d') || k.has('arrowright') ? 1 : 0);
    i.pitch = (k.has('r') || k.has('arrowup') ? 1 : 0) - (k.has('f') || k.has('arrowdown') ? 1 : 0);
    i.roll = (k.has('q') ? 1 : 0) - (k.has('e') ? 1 : 0);
    i.brake = false;
  }

  // ───────────────────────── drive slider ─────────────────────────
  /** slider geometry: [0, ORB] rocket (0 → orbitalMaxKmS, log above a stop notch), [ORB, CRU] cruise (orbitalMax → 0.8 c, log), [CRU, 1] warp (one notch per step) */
  _driveMap() {
    const sh = this.cfg.ship, W = this.cfg.warp.steps, ORB = 0.28, CRU = 0.66, vo = sh.orbitalMaxKmS, vmax = sh.maxSublightC * C_KMS, v0 = 0.05;
    return {
      ORB, CRU,
      toU: (kms, warpStep) => {
        if (warpStep != null && warpStep >= 0) return CRU + (1 - CRU) * (0.04 + 0.92 * warpStep / (W.length - 1));
        if (kms < vo) return kms < v0 ? 0 : ORB * (0.05 + 0.95 * Math.log(kms / v0) / Math.log(vo / v0));
        return ORB + (CRU - ORB) * Math.log(Math.min(kms, vmax) / vo) / Math.log(vmax / vo);
      },
      fromU: (u) => {
        u = clamp(u, 0, 1);
        if (u < ORB) { const t = u / ORB; return { kms: t < 0.05 ? 0 : v0 * Math.pow(vo / v0, (t - 0.05) / 0.95) }; }
        if (u < CRU) return { kms: vo * Math.pow(vmax / vo, (u - ORB) / (CRU - ORB)) };
        const t = (u - CRU) / (1 - CRU); return { warp: clamp(Math.round((t - 0.04) / 0.92 * (W.length - 1)), 0, W.length - 1) };
      },
    };
  }
  _setupDrive(root) {
    const sim = this.sim, M = this._driveMap(), trk = root.querySelector('#drv-trk'), self = this;
    this.drv = { root, M, trk, txt: root.querySelector('#drv-txt'), thumb: root.querySelector('#drv-thumb'), cmd: root.querySelector('#drv-cmd'), act: root.querySelector('#drv-act') };
    const segs = trk.querySelectorAll('.seg'); segs[0].style.cssText = `left:0;width:${M.ORB * 100}%`; segs[1].style.cssText = `left:${M.ORB * 100}%;width:${(M.CRU - M.ORB) * 100}%`; segs[2].style.cssText = `left:${M.CRU * 100}%;width:${(1 - M.CRU) * 100}%`;
    const put = (id, u, txt) => { const e = root.querySelector(id); e.style.left = (u * 100) + '%'; e.textContent = txt; };
    put('#drv-l1', M.ORB, '100 km/s'); put('#drv-l3', M.CRU, '80 % c'); put('#drv-l4', 0.99, '10⁶ c');
    const apply = (clientX) => {
      const r = trk.getBoundingClientRect(), u = clamp((clientX - r.left) / r.width, 0, 1), c = M.fromU(u);
      if (c.warp != null) { if (sim.warp.on && sim.warp.step === c.warp) return; sim.setWarpStep(c.warp); } else { if (sim.warp.on && sim.warp.dropping) return; sim.commandSpeed(c.kms); }
    };
    let down = false;
    trk.addEventListener('pointerdown', (e) => { down = true; trk.setPointerCapture(e.pointerId); apply(e.clientX); e.stopPropagation(); });
    trk.addEventListener('pointermove', (e) => { if (down) apply(e.clientX); });
    const up = () => { down = false; }; trk.addEventListener('pointerup', up); trk.addEventListener('pointercancel', up);
    trk.addEventListener('wheel', (e) => { e.preventDefault(); this.stepDrive(e.deltaY < 0 ? 1 : -1); }, { passive: false });
    void self;
  }
  /** notches for the + / - keys and the mouse wheel on the slider: stop, a few orbital speeds, cruise speeds, then the warp steps */
  _driveList() {
    const P = this.cfg.ship.speedPresets, out = [{ kms: 0 }];
    for (const v of P.orbital) out.push({ kms: v }); for (const v of P.cruise) out.push({ kms: v * C_KMS });
    this.cfg.warp.steps.forEach((_, i) => out.push({ warp: i })); return out;
  }
  stepDrive(d) {
    const sim = this.sim, L = this._driveList(); let cur = -1;
    if (sim.warp.on && !sim.warp.dropping) cur = L.findIndex((x) => x.warp === sim.warp.step);
    else { const t = sim.speedTarget; let best = 1e30; L.forEach((x, i) => { if (x.kms != null) { const e = Math.abs(Math.log((x.kms + 0.02) / (t + 0.02))); if (e < best) { best = e; cur = i; } } }); }
    const n = clamp(cur + d, 0, L.length - 1), c = L[n];
    if (c.warp != null) sim.setWarpStep(c.warp); else sim.commandSpeed(c.kms);
  }
  updateDrive(h) {
    const D = this.drv, sim = this.sim, M = D.M, e = sim.eng;
    const warping = sim.warp.on && !sim.warp.dropping, ws = warping ? sim.warp.step : -1;
    const cmdKms = sim.speedTarget;
    const uCmd = warping ? M.toU(0, ws) : M.toU(cmdKms), uAct = sim.warp.on ? M.toU(0, Math.max(sim.warp.step, 0)) : M.toU(Math.max(sim.speed, 0));
    D.thumb.style.left = (uCmd * 100) + '%'; D.act.style.left = (uAct * 100) + '%';
    const warp = sim.warp.on, drv = !warp && Math.max(sim.speed, sim.speedTarget) >= this.cfg.ship.orbitalMaxKmS;
    const col = warping ? '#6aa8ff' : drv ? '#f0f0f4' : '#ff9a4a';
    D.thumb.style.borderColor = col; D.thumb.style.boxShadow = `0 0 8px ${col}`; D.act.style.background = col;
    const name = warping ? 'WARP' : drv ? 'NACELLES' : 'ROCKET';
    const val = warping ? `${this.cfg.warp.steps[ws].toLocaleString('en-US')} c` : cmdKms < 0.05 ? 'stop' : cmdKms >= C_KMS * 0.001 ? `${(cmdKms / C_KMS * 100).toFixed(cmdKms / C_KMS < 0.1 ? 2 : 1)} % c` : cmdKms >= 1 ? `${cmdKms.toFixed(cmdKms < 10 ? 1 : 0)} km/s` : `${(cmdKms * 1000).toFixed(0)} m/s`;
    D.txt.innerHTML = `<span style="color:${col}">${name}</span> · ${val}`;
    // power glow of the three engines in the legend
    const lg = D.root.querySelectorAll('.legend span'); lg[0].style.opacity = 0.35 + 0.65 * (e.rocket); lg[1].style.opacity = 0.35 + 0.65 * (e.cruise); lg[2].style.opacity = 0.35 + 0.65 * (e.warp);
    void h;
  }

  select(sel) { this.selected = sel; this.selKey = null; this.altSel = null; this.altBody = null; if (this.nav.classList.contains('open')) this.renderNav(true); }
  commitSelection(mode = 'orbit') {
    const s = this.selected; if (!s) return;
    if (s.type === 'body') this.sim.setCourseBody(s.body, mode, this.altSel != null && this.altBody === s.body ? this.altSel : null); else if (s.type === 'system') this.sim.setCourseSystem(s.dest);
    this.renderNav(true);
  }

  // ───────────────────────── nav list ─────────────────────────
  renderNav(force = false) {
    if (!this.nav.classList.contains('open')) return;
    const now = performance.now(); if (!force && now - this._lastNav < 700) return; this._lastNav = now;
    const sim = this.sim, d = sim.getDestinations(force);
    const list = this.navList; list.innerHTML = '';
    const add = (cls, text) => list.appendChild(el('div', cls, text));
    const sel = this.selected;
    const q = (this.navQ.value || '').trim(), searching = q.length >= 2, ql = q.toLowerCase();
    if (q.length === 1) add('sec', 'type at least 2 characters to search');
    if (sim.system) {
      add('sec', `in ${sim.system.name}${sim.system.fictional ? ' · fictional' : ''}`);
      // stars, then planets / dwarf planets by orbital distance, each followed by its moons
      const byBody = new Map(d.bodies.map((x) => [x.body, x]));
      const roots = d.bodies.filter((x) => x.kind === 'star').concat(d.bodies.filter((x) => x.kind === 'planet' || x.kind === 'dwarf').sort((a, b) => (a.body.orbit?.a ?? 0) - (b.body.orbit?.a ?? 0)));
      const ordered = [];
      for (const r of roots) { ordered.push(r); const ms = d.bodies.filter((x) => x.body.parent === r.body && x.kind === 'moon').sort((a, b) => (a.body.orbit?.a ?? 0) - (b.body.orbit?.a ?? 0)); ordered.push(...ms); }
      void byBody;
      for (const b of ordered) {
        if (searching && !b.name.toLowerCase().includes(ql)) continue;
        const row = el('div', 'item' + (sel && sel.body === b.body ? ' sel' : ''));
        const indent = b.kind === 'moon' ? '&nbsp;&nbsp;↳ ' : '';
        row.innerHTML = `<span class="n">${indent}${b.name}${b.body.fictional ? '<span class="tag f">F</span>' : ''}</span><span class="m">${fmtDistance(b.dist)}</span>`;
        row.onclick = () => { this.select({ type: 'body', body: b.body }); };
        row.ondblclick = () => { this.selected = { type: 'body', body: b.body }; this.commitSelection(); };
        list.appendChild(row);
      }
    }
    const systems = searching ? sim.searchSystems(q) : d.systems;
    add('sec', searching ? `systems matching “${q}”` : `star systems within ${this.cfg.destinations.radiusLy} ly`);
    if (!systems.length) add('item', `<span class="n" style="color:#777">${searching ? 'no match' : 'none in range'}</span>`);
    for (const s of systems) {
      const row = el('div', 'item' + (s.outOfRange ? ' dim' : '') + (sel && sel.dest && sel.dest.group.key === s.group.key ? ' sel' : ''));
      row.innerHTML = `<span class="n">${s.name}${s.known ? '<span class="tag">planets</span>' : '<span class="tag f">F</span>'}</span><span class="m">${s.distLy.toFixed(2)} ly${s.outOfRange ? ' ·&nbsp;far' : ''}</span>`;
      row.onclick = () => { this.select({ type: 'system', dest: s }); };
      row.ondblclick = () => { this.selected = { type: 'system', dest: s }; this.commitSelection(); };
      list.appendChild(row);
    }
    this.showFoot();
  }
  showFoot() {
    const s = this.selected, f = this.navFoot;
    if (!s) { f.innerHTML = 'click to inspect · double-click or <b>Enter</b> to set course<br><span style="color:#666">F = fictional (procedurally generated)</span>'; return; }
    if (s.type === 'body') {
      const b = s.body, cfg = this.cfg;
      const alt = b.safeRadiusKm(cfg) - b.radiusKm;
      f.innerHTML = `<b>${b.name}</b> · ${b.kind}${b.fictional ? ' · <b>FICTIONAL</b>' : ''}<br>radius ${fmtDistance(b.radiusKm)} · g ${(b.gravityMs2 || 0).toFixed(2)} m/s² · safe orbit ${fmtDistance(alt)} up<br><span style="color:#888">${b.info || ''}</span><br><span class="bb"><button id="goA" style="margin-top:5px">APPROACH</button> <button id="go" style="margin-top:5px">ORBIT</button></span>`;
    } else {
      const d = s.dest;
      f.innerHTML = `<b>${d.name}</b> · ${d.distLy.toFixed(2)} ly · ${d.stars} star${d.stars > 1 ? 's' : ''}<br>${d.known ? 'confirmed planets (NASA Exoplanet Archive)' : '<b>no confirmed planets</b> — a procedurally generated <b>FICTIONAL</b> system will be shown'}<br><button id="go" style="margin-top:5px">SET COURSE</button>`;
    }
    const go = f.querySelector('#go'); if (go) go.onclick = () => this.commitSelection('orbit');
    const goA = f.querySelector('#goA'); if (goA) goA.onclick = () => this.commitSelection('approach');
  }

  // ───────────────────────── gravity-well / heliopause gauge ─────────────────────────
  /** nearest catalogue star to the ship (cached ~0.4 s) when outside every heliopause */
  _nearestStar(pc) {
    const now = performance.now(); if (this._ns && now - this._nsT < 400) return this._ns; this._nsT = now;
    const cat = this.sim.cat; let best = null;
    for (let r = 0.5; r <= 64 && !best; r *= 2) { let bd = Infinity; for (const i of cat.within(pc, r)) { const d = Math.hypot(cat.pos[i * 3] - pc[0], cat.pos[i * 3 + 1] - pc[1], cat.pos[i * 3 + 2] - pc[2]); if (d < bd) { bd = d; best = i; } } }
    if (best == null) { this._ns = null; return null; }
    const tr = cat.traits(best), dPc = Math.hypot(cat.pos[best * 3] - pc[0], cat.pos[best * 3 + 1] - pc[1], cat.pos[best * 3 + 2] - pc[2]);
    this._ns = { name: cat.isSun(best) ? 'Sol' : cat.name(best), distKm: dPc * KM_PER_PC, hpKm: this.sim.uni.heliopauseOfStar(best), gm: tr.gm, radiusKm: tr.radiusKm };
    return this._ns;
  }
  updateWell() {
    const sim = this.sim, cv = this.wellCv, g = cv.getContext('2d'), W = 420, H = 76, dpr = Math.min(2, window.devicePixelRatio || 1);
    if (cv.width !== W * dpr) { cv.width = W * dpr; cv.height = H * dpr; }
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    let name, dStar, hp, gm, rStar, outside = false, planets = [];
    if (sim.system) {
      const sys = sim.system, sp = sim.sysPos(); let best = null;
      for (const st of sys.stars) { const p = st.positionAt(sim.jd), d = Math.hypot(sp[0] - p[0], sp[1] - p[1], sp[2] - p[2]); if (!best || d < best.d) best = { st, d }; }
      name = sys.name.replace(/ system$/i, '') === 'Solar System' ? 'Sol' : best.st.name; dStar = best.d; hp = sys.heliopauseKm; gm = best.st.gm; rStar = best.st.radiusKm;
      outside = Math.hypot(sp[0], sp[1], sp[2]) > hp;
      planets = sys.bodies.filter((b) => (b.kind === 'planet' || b.kind === 'dwarf') && b.semiMajorKm).map((b) => ({ n: b.name, a: b.semiMajorKm }));
    } else {
      const ns = this._nearestStar(sim.shipPc()); if (!ns) { this.well.style.display = 'none'; return; }
      name = ns.name; dStar = ns.distKm; hp = ns.hpKm; gm = ns.gm; rStar = ns.radiusKm; outside = true;
    }
    this.well.style.display = this.hidden ? 'none' : 'block';
    const lo = Math.log10(Math.max(rStar, 1)), hi = Math.log10(hp), pad = 14, x0 = pad, x1 = W - pad, by = 28;
    const X = (km) => x0 + (x1 - x0) * clamp((Math.log10(Math.max(km, 1)) - lo) / (hi - lo), 0, 1);
    g.clearRect(0, 0, W, H);
    // the well: deep (bright) at the star, shallow (dark) at the heliopause
    const gr = g.createLinearGradient(x0, 0, x1, 0); gr.addColorStop(0, 'rgba(235,235,235,0.95)'); gr.addColorStop(0.35, 'rgba(180,180,180,0.5)'); gr.addColorStop(1, 'rgba(120,120,120,0.10)');
    g.fillStyle = gr; g.fillRect(x0, by - 5, x1 - x0, 10);
    g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 1; g.strokeRect(x0 + 0.5, by - 5.5, x1 - x0, 11);
    g.font = '10px ui-monospace, Menlo, monospace'; g.textBaseline = 'alphabetic';
    // decade ticks (AU)
    g.fillStyle = 'rgba(255,255,255,0.45)';
    for (let e = Math.ceil(Math.log10(rStar / KM_PER_AU)); e <= Math.floor(Math.log10(hp / KM_PER_AU)); e++) { const x = X(Math.pow(10, e) * KM_PER_AU); g.fillRect(Math.round(x), by + 5, 1, 4); if (e >= 0) g.fillText(e === 0 ? '1 AU' : Math.pow(10, e) + '', x - 4 * String(Math.pow(10, e)).length, by + 19); }
    // planets
    const showNames = planets.length <= 10; g.fillStyle = '#fff';
    for (const p of planets) { const x = X(p.a); g.fillRect(Math.round(x), by - 9, 1, 4); if (showNames) { g.fillStyle = 'rgba(255,255,255,0.75)'; g.fillText(p.n.slice(0, 2), x - 6, by - 12); g.fillStyle = '#fff'; } }
    // heliopause end
    g.fillStyle = '#fff'; g.fillRect(x1 - 1, by - 10, 2, 20); g.textAlign = 'right'; g.fillText('HELIOPAUSE ' + (hp / KM_PER_AU >= 1000 ? Math.round(hp / KM_PER_AU).toLocaleString('en-US') : (hp / KM_PER_AU).toFixed(hp / KM_PER_AU < 10 ? 1 : 0)) + ' AU', x1, by - 15); g.textAlign = 'left';
    // ship
    const sx = X(dStar); g.fillStyle = '#fff'; g.beginPath();
    if (outside && dStar > hp) { g.moveTo(x1 + 10, by); g.lineTo(x1 + 2, by - 5); g.lineTo(x1 + 2, by + 5); } else { g.moveTo(sx, by - 6); g.lineTo(sx - 5, by - 14); g.lineTo(sx + 5, by - 14); }
    g.closePath(); g.fill();
    // readout
    const d = dStar, vesc = Math.sqrt(2 * gm / d), acc = gm / (d * d) * 1000;                  // m/s²
    const fmtA = (a) => (a >= 1 ? a.toFixed(2) + ' m/s²' : a >= 1e-3 ? (a * 1e3).toFixed(2) + ' mm/s²' : (a * 1e6 >= 0.1 ? (a * 1e6).toFixed(1) + ' µm/s²' : '<0.1 µm/s²'));
    const fmtD = (km) => (km >= KM_PER_LY * 0.1 ? (km / KM_PER_LY).toFixed(2) + ' ly' : km >= KM_PER_AU * 0.01 ? (km / KM_PER_AU).toFixed(km / KM_PER_AU < 10 ? 2 : 0) + ' AU' : fmtDistance(km));
    const toHp = hp - d;
    const l1 = `${name.toUpperCase()} · ${fmtD(d)} · escape ${fmtSpeed(vesc)} · g ${fmtA(acc)}`;
    const l2 = d > hp ? `outside the heliopause by ${fmtD(d - hp)}` : `${Math.max(0, 100 * (1 - toHp / hp)).toFixed(d / hp < 0.01 ? 2 : 1)} % of the way to the heliopause · ${fmtD(toHp)} to go`;
    g.fillStyle = '#d8d8d8'; g.fillText(l1, x0, H - 20); g.fillStyle = 'rgba(200,200,200,0.7)'; g.fillText(l2, x0, H - 6);
  }

  // ───────────────────────── per frame ─────────────────────────
  update(dtReal, extra) {
    this.pollKeys();
    const sim = this.sim, h = sim.hud(), $ = this.$;
    this.fpsAvg += (1 / Math.max(dtReal, 1e-3) - this.fpsAvg) * 0.05;
    $('h-loc').textContent = h.where;
    const dt = dateFromJD(h.jd);
    $('h-sub').textContent = `${dt.toISOString().replace('T', ' ').slice(0, 19)} UTC  ·  time ×${h.K >= 100 ? Math.round(h.K).toLocaleString('en-US') : h.K.toFixed(h.K < 10 ? 1 : 0)}${sim.timeAuto && sim.course && !h.warp ? ' (auto)' : ''}`;
    $('h-sub2').textContent = sim.ref ? `frame: ${sim.ref.name} · ${sim.ref.kind}` : sim.system ? `frame: ${sim.system.name}` : 'frame: interstellar';
    this.updateWell();
    this.banner.style.display = h.fictional ? 'block' : 'none';
    this.banner.textContent = h.fictional ? 'fictional system · procedurally generated · no confirmed planets' : '';
    // chips
    this.chips.TOUR.className = 'chip' + (sim.mode === 'tour' ? ' on' : ''); this.chips.FREE.className = 'chip' + (sim.mode === 'free' ? ' on' : '');
    this.chips.AUTO.className = 'chip' + (h.engaged ? ' on' : (sim.course ? ' warn' : '')); this.chips.WARP.className = 'chip' + (h.warp ? ' on' : (sim.warp.form > 0 ? ' warn' : ''));
    // speed
    $('h-speed').textContent = h.warp ? (h.c >= 100 ? Math.round(h.c).toLocaleString('en-US') + ' c' : h.c.toFixed(h.c < 10 ? 2 : 1) + ' c') : (h.c >= 0.01 ? h.c.toFixed(h.c < 0.1 ? 4 : 3) + ' c' : fmtSpeed(h.speed));
    $('h-kms').textContent = h.warp ? 'FTL ' + (h.c * C_KMS).toExponential(2) + ' km/s' : fmtSpeed(h.speed);
    const beta = Math.min(h.c, 0.9999);
    $('h-gam').textContent = h.warp ? 'bubble · n/a' : `${h.gamma.toFixed(3)} / ${beta.toFixed(3)}`;
    $('h-frame').textContent = sim.ref ? sim.ref.name : sim.system ? 'star' : 'rest';
    $('h-trip').textContent = fmtDuration(h.trip);
    { // what the engine is doing: pushing forward, turning tail-first to brake, burning against the motion, or coasting
      const f = sim.forward(), vl = Math.hypot(...sim.vel), th = sim.thrust;
      const against = vl > 1e-6 && (f.x * sim.vel[0] + f.y * sim.vel[1] + f.z * sim.vel[2]) / vl < -0.5;
      const drive = !h.warp && Math.max(sim.speed, sim.speedTarget) >= this.cfg.ship.orbitalMaxKmS;
      $('h-eng').textContent = h.warp ? `warp field ${Math.round(sim.eng.warp * 100)} %` : sim.ins ? 'orbit insertion burn' : drive ? `nacelles ${Math.round(sim.eng.cruise * 100)} %` : th > 0.08 ? (against ? 'rocket · retro burn' : 'rocket · burn') : sim.flipping ? 'turning to brake' : 'coasting';
    }
    // nearest thing: altitude over the closest body in a system, or distance to the nearest star in interstellar space
    if (!this._nearT || performance.now() - this._nearT > 250) {
      this._nearT = performance.now();
      let txt = '—', lab = 'nearest';
      if (sim.system) {
        const sp = sim.sysPos(); let best = null, bd = Infinity;
        for (const b of sim.system.bodies) { if (b.kind === 'belt') continue; const bp = b.positionAt(sim.jd); const d = Math.hypot(sp[0] - bp[0], sp[1] - bp[1], sp[2] - bp[2]) - b.radiusKm; if (d < bd) { bd = d; best = b; } }
        if (best) { lab = best.name; txt = (bd < 0 ? '0 km' : fmtDistance(bd)) + ' alt'; }
      } else {
        const pc = sim.shipPc(); let bi = -1, bd = Infinity; const idx = sim.cat.within(pc, 6);
        for (const i of idx) { const d = Math.hypot(sim.cat.pos[i * 3] - pc[0], sim.cat.pos[i * 3 + 1] - pc[1], sim.cat.pos[i * 3 + 2] - pc[2]); if (d < bd) { bd = d; bi = i; } }
        if (bi >= 0) { lab = sim.cat.name(bi); txt = (bd * 3.2616).toFixed(bd * 3.26 < 1 ? 3 : 2) + ' ly'; }
      }
      this._nearTxt = [lab, txt];
    }
    if (this._nearTxt) { $('h-near-l').textContent = this._nearTxt[0]; $('h-near').textContent = this._nearTxt[1]; }
    const vmaxLog = Math.log10(this.cfg.ship.maxSublightC * C_KMS), vminLog = Math.log10(this.cfg.ship.speedFloorKmS);
    const frac = h.warp ? clamp(Math.log10(Math.max(h.c, 0.05) / this.cfg.ship.maxSublightC) / Math.log10(this.cfg.warp.steps[this.cfg.warp.steps.length - 1] / this.cfg.ship.maxSublightC), 0, 1) : clamp((Math.log10(Math.max(h.speed, 1e-9)) - vminLog) / (vmaxLog - vminLog), 0, 1);
    $('h-bar').style.width = (frac * 100) + '%';
    // course
    let return_ = false; void return_;
    if (sim.course) {
      const eta = sim.eta();
      this.courseP.style.display = 'block';
      const C = sim.course;
      const dist = C.kind === 'body' ? fmtDistance(h.targetDist ?? 0) : `${((h.targetDist ?? 0) / KM_PER_LY).toFixed(2)} ly`;
      const phase = C.kind === 'system' ? ({ align: 'aligning', depart: 'sub-light to heliopause', warp: sim.warp.on ? (sim.warp.dropping || sim.warp.capC < sim.warp.c * 1.02 ? 'braking for arrival' : 'warp cruise') : 'engaging' })[C.phase] : (C.remaining < (C.radius || 1) * 2 ? 'final approach' : 'transit');
      if (!C.engaged) {
        const ae = (C.alignErr ?? 0) * 180 / Math.PI;
        this.courseP.innerHTML = `<div class="t">→ ${C.label} · manual</div><div class="d"><span>distance <b>${dist}</b></span><span>${C.aligned ? '<b>on course</b>' : 'aligning · ' + ae.toFixed(0) + '° off'}</span></div><div class="d"><span>press <b>AUTO</b> (P) for cruise control</span><span><u id="cc-x" style="cursor:pointer">clear</u></span></div>`;
        const x = this.courseP.querySelector('#cc-x'); if (x) x.onclick = () => sim.cancelCourse('Course cleared');
        return_ = true;
      } else
      this.courseP.innerHTML = `<div class="t">→ ${C.label}${sim.tour ? ' · tour' : ''}</div><div class="d"><span>distance <b>${dist}</b></span><span>ETA <b>${isFinite(eta) ? fmtDuration(eta) : '—'}</b></span><span>elapsed <b>${fmtDuration(h.trip)}</b></span></div><div class="d"><span>${phase}</span><span>${sim.timeAuto && !h.warp ? 'auto time' : ''}</span></div>`;
    } else if (sim.tour) {
      const stop = sim.tour.stops[sim.tour.idx];
      this.courseP.style.display = 'block'; this.courseP.innerHTML = `<div class="t">cinematic tour · ${stop ? stop.note : ''}</div><div class="d"><span>press <b>T</b> or move the controls to take the helm</span></div>`;
    } else this.courseP.style.display = 'none';
    // buttons
    const autoK = sim.timeAuto || (!h.warp && Math.abs(h.K - sim.timeScale) > 0.02 * sim.timeScale);      // tour / autopilot set the rate themselves
    const cfgSteps = this.cfg.time.steps;
    this.timeBtns.forEach((b, i) => b.classList.toggle('on', !autoK && i === sim.timeIndex)); this.timeBtns.forEach((b, i) => b.classList.toggle('dim', h.warp && cfgSteps[i] > this.cfg.warp.maxTimeCompression)); this.autoT.classList.toggle('on', autoK);
    this.updateDrive(h);
    this.btnTour.classList.toggle('on', !!sim.tour);
    // toasts
    this.toast.innerHTML = sim.messages.map((m) => `<div>${m.msg}</div>`).join('');
    this.fps.textContent = `${Math.round(this.fpsAvg)} fps · ${this.gfx.W}×${this.gfx.H}${extra && extra.scale < 0.99 ? ' · scale ' + extra.scale.toFixed(2) : ''}`;
    this.renderNav();
  }

  /** project a camera-frame offset (km, rest frame) to the screen; edge-clamped with a direction angle when off-screen or behind */
  _project(rel, view, fovDeg) {
    const W = this.gfx.cssW, H = this.gfx.cssH, f = 0.5 * H / Math.tan(0.5 * fovDeg * Math.PI / 180);
    const v = new THREE.Vector3(rel[0], rel[1], rel[2]).applyMatrix3(view);
    const behind = v.z >= -1e-9;
    let x = W / 2 + (v.x / Math.max(-v.z, 1e-9)) * f, y = H / 2 - (v.y / Math.max(-v.z, 1e-9)) * f;
    const m = 34, top = m + 26, bot = H - 118, on = !behind && x > m && x < W - m && y > top && y < bot;
    if (on) return { x, y, on: true, ang: 0 };
    let dx = v.x, dy = -v.y; if (behind && Math.hypot(dx, dy) < 1e-6) dx = 1;
    const l = Math.hypot(dx, dy) || 1; dx /= l; dy /= l;                                   // screen direction toward the object
    const cx = W / 2, cy = (top + bot) / 2, hx = (W - 2 * m) / 2, hy = (bot - top) / 2;
    const k = Math.min(Math.abs(dx) > 1e-6 ? hx / Math.abs(dx) : 1e9, Math.abs(dy) > 1e-6 ? hy / Math.abs(dy) : 1e9);
    return { x: cx + dx * k, y: cy + dy * k, on: false, ang: Math.atan2(dy, dx) * 180 / Math.PI };
  }
  _placeMark(mk, p, text, withBox) {
    mk.style.display = 'block'; mk.style.transform = `translate(${Math.round(p.x)}px,${Math.round(p.y)}px)`;
    const box = mk.querySelector('.box'), arr = mk.querySelector('.arr'), tx = mk.querySelector('.tx');
    if (box) box.style.display = p.on && withBox ? 'block' : 'none';
    arr.style.display = p.on ? 'none' : 'block'; if (!p.on) arr.style.transform = `rotate(${p.ang}deg)`; arr.textContent = '➤';
    tx.textContent = text;
    tx.style.left = p.on ? '22px' : (Math.cos(p.ang * Math.PI / 180) > 0.2 ? '-' + (tx.textContent.length * 6.4 + 16) + 'px' : '14px');
  }
  /** orbit-altitude control: log slider from the safe-orbit altitude to 40 radii, plus a typed value (km; "m", "km", "AU" suffixes allowed) */
  _altControl(b) {
    const sl = this.selP.querySelector('#sp-r'), tx = this.selP.querySelector('#sp-n');
    const lo = Math.max(b.safeRadiusKm(this.cfg) - b.radiusKm, 1), hi = Math.max(b.radiusKm * 40, lo * 4), lg = Math.log(hi / lo);
    const cur = () => (this.altSel != null && this.altBody === b ? this.altSel : lo);
    const show = () => { sl.value = String(Math.round(1000 * Math.log(Math.max(cur(), lo) / lo) / lg)); tx.value = this.altSel != null && this.altBody === b ? fmtDistance(cur()) : fmtDistance(lo) + ' (safe)'; };
    const set = (km) => { this.altSel = clamp(km, lo, hi * 4); this.altBody = b; show(); };
    sl.oninput = () => set(lo * Math.exp(lg * (+sl.value) / 1000));
    tx.onfocus = () => { tx.select(); };
    tx.onchange = () => {
      const m = /^\s*([0-9.]+(?:e[0-9]+)?)\s*(m|km|au|mm|M km)?\s*$/i.exec(tx.value.replace(/,/g, '')); if (!m) { show(); return; }
      const unit = (m[2] || 'km').toLowerCase(), v = parseFloat(m[1]);
      set(unit === 'm' ? v / 1000 : unit === 'au' ? v * 149597870.7 : unit === 'mm' || unit === 'm km' ? v * 1e6 : v);
    };
    show();
  }
  /** the selected object's on-screen indicator + panel, and the home marker (Earth inside the Solar System, Sol everywhere else) */
  updateMarkers(view, fovDeg) {
    const sim = this.sim, uni = sim.uni;
    if (this.hidden) { this.markSel.style.display = 'none'; this.markHome.style.display = 'none'; this.selP.style.display = 'none'; return; }
    // home
    let rel = null, name = '';
    if (sim.system && sim.system === uni.solar) { const e = uni.solar.get('earth'); if (e && sim.ref !== e) { const bp = e.positionAt(sim.jd), sp = sim.sysPos(); rel = [bp[0] - sp[0], bp[1] - sp[1], bp[2] - sp[2]]; name = 'EARTH'; } }
    else { const pc = sim.shipPc(); rel = [-pc[0] * KM_PER_PC, -pc[1] * KM_PER_PC, -pc[2] * KM_PER_PC]; name = 'SOL'; }
    const selIsHome = this.selected && this.selected.type === 'body' && this.selected.body.name.toUpperCase() === name;
    if (rel && !selIsHome) {
      const d = Math.hypot(rel[0], rel[1], rel[2]);
      if (d < 1e5 && name === 'SOL') this.markHome.style.display = 'none';
      else this._placeMark(this.markHome, this._project(rel, view, fovDeg), `${name} · ${fmtDistance(d)}`, false);
    } else this.markHome.style.display = 'none';
    // selection
    const s = this.selected; let valid = false;
    if (s && s.type === 'body' && s.body.system === sim.system && sim.system) {
      valid = true; const b = s.body, bp = b.positionAt(sim.jd), sp = sim.sysPos(), r = [bp[0] - sp[0], bp[1] - sp[1], bp[2] - sp[2]], d = Math.hypot(r[0], r[1], r[2]);
      this._placeMark(this.markSel, this._project(r, view, fovDeg), `${b.name.toUpperCase()}${b.fictional ? ' (F)' : ''} · ${fmtDistance(Math.max(d - b.radiusKm, 0))}`, true);
      this._selDist = d;
    } else if (s && s.type === 'system') {
      valid = true; const c = s.dest.group.centre, pc = sim.shipPc(), r = [(c[0] - pc[0]) * KM_PER_PC, (c[1] - pc[1]) * KM_PER_PC, (c[2] - pc[2]) * KM_PER_PC], d = Math.hypot(r[0], r[1], r[2]);
      this._placeMark(this.markSel, this._project(r, view, fovDeg), `${s.dest.name.toUpperCase()} · ${(d / KM_PER_LY).toFixed(2)} ly`, true);
    }
    if (!valid) { this.markSel.style.display = 'none'; this.selP.style.display = 'none'; if (s) this.selected = null; this.selKey = null; return; }
    // panel (rebuilt only when the selection changes)
    const key = s.type + ':' + (s.type === 'body' ? s.body.name : s.dest.name);
    if (this.selKey !== key) {
      this.selKey = key; this.selP.style.display = 'block';
      if (s.type === 'body') {
        const b = s.body;
        this.selP.innerHTML = `<h5><b>${b.name}</b><span id="sp-x">✕</span></h5><div class="m">${b.kind}${b.fictional ? ' · <b>FICTIONAL</b>' : ''} · radius ${fmtDistance(b.radiusKm)}<br><span id="sp-d"></span></div><div class="alt"><span>altitude</span><input id="sp-r" type="range" min="0" max="1000" step="1"><input id="sp-n" type="text" inputmode="decimal" spellcheck="false" title="altitude in km (or add m / km / AU)"></div><div class="b"><button id="sp-a" title="fly there and hold position at this altitude (Shift+Enter); untouched = ${this.cfg.autopilot.approachRadii} radii out">APPROACH</button><button id="sp-o" title="fly there and settle into the safe low orbit (Enter)">ORBIT</button></div>`;
        this._altControl(b);
        this.selP.querySelector('#sp-a').onclick = () => this.commitSelection('approach');
        this.selP.querySelector('#sp-o').onclick = () => this.commitSelection('orbit');
      } else {
        const d = s.dest;
        this.selP.innerHTML = `<h5><b>${d.name}</b><span id="sp-x">✕</span></h5><div class="m">${d.stars} star${d.stars > 1 ? 's' : ''} · ${d.known ? 'confirmed planets' : '<b>FICTIONAL</b> planets'}<br><span id="sp-d"></span></div><div class="b"><button id="sp-o">SET COURSE</button></div>`;
        this.selP.querySelector('#sp-o').onclick = () => this.commitSelection('orbit');
      }
      this.selP.querySelector('#sp-x').onclick = () => { this.selected = null; this.selKey = null; if (this.nav.classList.contains('open')) this.renderNav(true); };
    }
    const dEl = this.selP.querySelector('#sp-d');
    if (dEl) { const c = sim.course; const going = c && ((s.type === 'body' && c.kind === 'body' && c.body === s.body) || (s.type === 'system' && c.kind === 'system' && c.name === s.dest.name)); dEl.textContent = (s.type === 'body' ? 'distance ' + fmtDistance(Math.max((this._selDist || 0) - s.body.radiusKm, 0)) : '') + (going ? ' · underway' : ''); }
  }

  /** place labels for visible bodies. info.labels: [{body, rel, dist, angPx, kind}] */
  updateLabels(info, view, fovDeg, aspect) {
    if (!this.labelsEnabled || this.hidden) { for (const l of this.lbls) l.e.style.display = 'none'; return; }
    const W = this.gfx.cssW, H = this.gfx.cssH, f = 0.5 * H / Math.tan(0.5 * fovDeg * Math.PI / 180);
    const cand = [];
    const v = new THREE.Vector3();
    for (const L of info.labels || []) {
      v.set(L.rel[0], L.rel[1], L.rel[2]).applyMatrix3(view);
      if (v.z >= -1e-6) continue;
      const x = W / 2 + (v.x / -v.z) * f, y = H / 2 - (v.y / -v.z) * f;
      if (x < -20 || x > W + 20 || y < -20 || y > H + 20) continue;
      const priority = L.kind === 'star' ? 3 : L.kind === 'planet' ? 2 : L.kind === 'dwarf' ? 1.5 : L.kind === 'galaxy' ? 2.5 : 1;
      // hide moons unless near their parent's screen position
      let score = priority * 1e3 + Math.min(L.angPx, 300) - L.dist * 1e-9;
      if (L.kind === 'moon' && L.angPx < 3 && (L.body.parent && info.bodyInfo.get(L.body.parent).angPx < 12)) continue;
      if (L.kind === 'galaxy' && L.dirOnly && !this.cfg.visuals.galaxies.labels) continue;
      cand.push({ x, y, L, score });
    }
    cand.sort((a, b) => b.score - a.score);
    const max = this.cfg.visuals.labels.maxLabels;
    const placed = [];
    let n = 0;
    for (const c of cand) {
      if (n >= max) break;
      if (placed.some((p) => Math.abs(p.x - c.x) < 90 && Math.abs(p.y - c.y) < 18)) continue;
      placed.push(c); n++;
    }
    while (this.lbls.length < placed.length) { const e = el('div', 'lbl'); const rec = { e }; e.onclick = () => { if (rec.body && rec.body.system === this.sim.system && rec.body.positionAt) this.select({ type: 'body', body: rec.body }); }; this.labelLayer.appendChild(e); this.lbls.push(rec); }
    this.lbls.forEach((l, i) => {
      const p = placed[i];
      if (!p) { l.e.style.display = 'none'; return; }
      const b = p.L.body, selected = this.selected && this.selected.body === b; l.body = b;
      l.e.style.display = 'block'; l.e.style.transform = `translate(${Math.round(p.x + 9)}px,${Math.round(p.y - 7)}px)`;
      l.e.className = 'lbl' + (selected ? ' sel' : '');
      const key = b.name + (b.fictional ? '·F' : '');
      if (l.key !== key + (p.L.dist < 1e7 ? 'n' : 'f')) { l.key = key + (p.L.dist < 1e7 ? 'n' : 'f'); l.e.innerHTML = `<i style="position:absolute;left:-12px;top:5px"></i>${b.name}${b.fictional ? ' <span class="s">fictional</span>' : ''}`; }
    });
  }
}
