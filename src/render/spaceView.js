// Everything at planetary / stellar scale: bodies, atmospheres, rings, star discs, belts, orbit lines and distant sprites.
// All positions are computed in double precision (km, system frame) and handed to the GPU camera-relative.
import * as THREE from 'three';
import { PLANET_VERT, PLANET_FRAG, CLOUD_FRAG, ATMO_FRAG, RING_VERT, RING_FRAG, STARSURF_FRAG, SPRITE_VERT, SPRITE_FRAG } from './shaders/bodies.js';
import { blankTexture } from './textures.js';
import { mulberry32, hash2, hashString, TAU, cross, norm, dot, len, sub, clamp, smoothstep } from '../core/math.js';
import { KM_PER_AU, DEG } from '../../shared/astro.js';
import { discOverlap } from './exposure.js';

const STYLE_ID = { rock: 1, ice: 2, gas: 3, ocean: 4, lava: 5, haze: 6, io: 7, europa: 8, ganymede: 14, iapetus: 10, pluto: 11, triton: 12, charon: 13 };
const MEAN_COLOR = { earth: [0.2, 0.35, 0.7], moon: [0.5, 0.5, 0.5], mars: [0.7, 0.4, 0.25], venus: [0.9, 0.8, 0.55], mercury: [0.5, 0.48, 0.46], jupiter: [0.85, 0.75, 0.6], saturn: [0.9, 0.82, 0.62], uranus: [0.6, 0.85, 0.9], neptune: [0.35, 0.5, 0.9], titan: [0.8, 0.55, 0.25], io: [0.9, 0.8, 0.4] };
const _m4 = new THREE.Matrix4(), _v = new THREE.Vector3();

function sunColor(b) { return b.color || [1, 0.96, 0.9]; }

export class SpaceView {
  constructor(gfx, cfg, textures, catalog) {
    this.gfx = gfx; this.cfg = cfg; this.tex = textures; this.cat = catalog;
    this.scene = new THREE.Scene();
    this.sphereGeo = new THREE.SphereGeometry(1, 144, 96);
    this.blank = blankTexture();
    this.items = []; this.system = null;
    this.labels = [];
    this.spriteCap = 512;
    this._buildSprites();
    this.sharedRel = {
      uBetaCam: { value: new THREE.Vector3() }, uGamma: { value: 1 }, uWDirCam: { value: new THREE.Vector3(0, 0, -1) }, uWBeta: { value: 0 }, uWGamma: { value: 1 },
    };
    this.fadeEdge = { lo: cfg.visuals.planets.resolveMinPx, hi: cfg.visuals.planets.resolveMaxPx };
  }

  _buildSprites() {
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3)); geo.setIndex([0, 1, 2, 0, 2, 3]);
    this.spritePos = new Float32Array(this.spriteCap * 4); this.spriteCol = new Float32Array(this.spriteCap * 4);
    this.spritePosAttr = new THREE.InstancedBufferAttribute(this.spritePos, 4); this.spriteColAttr = new THREE.InstancedBufferAttribute(this.spriteCol, 4);
    this.spritePosAttr.setUsage(THREE.DynamicDrawUsage); this.spriteColAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aPosE', this.spritePosAttr); geo.setAttribute('aColor', this.spriteColAttr);
    geo.instanceCount = 0;
    this.spriteGeo = geo;
    const gu = this.gfx.starUniforms;
    this.spriteMat = new THREE.ShaderMaterial({
      vertexShader: SPRITE_VERT, fragmentShader: SPRITE_FRAG, transparent: true, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
      uniforms: { uView: gu.uView, uRes: gu.uRes, uFocalPx: gu.uFocalPx, uExposure: { value: 1 }, uSigma: gu.uSigma, uHalo: gu.uHalo, uHaloAmt: gu.uHaloAmt, uHaloW: gu.uHaloW, uBrightness: gu.uBrightness,
        uBetaCam: { value: new THREE.Vector3() }, uGamma: gu.uGamma, uWDirCam: { value: new THREE.Vector3(0, 0, -1) }, uWBeta: gu.uWarpBeta, uWGamma: gu.uWarpGamma },
    });
    this.spriteMesh = new THREE.Mesh(geo, this.spriteMat); this.spriteMesh.frustumCulled = false; this.spriteMesh.renderOrder = 100;
    this.scene.add(this.spriteMesh);
  }

  clear() {
    for (const it of this.items) {
      for (const o of it.objs) { this.scene.remove(o); if (o.geometry && o.geometry !== this.sphereGeo) o.geometry.dispose(); if (o.material) o.material.dispose(); }
    }
    this.items = []; this.orbitLines = []; this.system = null;
  }

  setSystem(system) {
    this.clear();
    this.system = system;
    const gfx = this.gfx;
    for (const b of system.bodies) {
      const it = { body: b, objs: [], star: b.kind === 'star' };
      if (b.kind === 'belt') this._makeBelt(it, b);
      else if (b.kind === 'star') this._makeStar(it, b);
      else this._makeBody(it, b);
      for (const o of it.objs) this.scene.add(o);
      this.items.push(it);
    }
    // neighbours that can cast eclipse shadows onto each body
    for (const it of this.items) {
      const b = it.body; if (b.kind === 'star' || b.kind === 'belt') continue;
      const cand = [];
      if (b.parent && b.parent.kind !== 'star') cand.push(b.parent);
      if (b.parent) for (const s of b.parent.children) if (s !== b && s.kind !== 'belt') cand.push(s);
      for (const c of b.children) if (c.kind !== 'belt') cand.push(c);
      it.occluders = cand;
    }
    this._buildOrbitLines(system);
  }

  // ───────────── construction ─────────────
  _bodyMat(b) {
    const look = b.look || { kind: 'proc', style: 'rock', colors: [[0.4, 0.4, 0.4], [0.5, 0.5, 0.5], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]], p: {} };
    const T = this.tex;
    const p = look.p || {};
    const cols = (look.colors || [[0.5, 0.5, 0.5], [0.6, 0.6, 0.6], [0.8, 0.8, 0.8], [0.3, 0.3, 0.3]]).map((c) => new THREE.Vector3(c[0], c[1], c[2]));
    const isTex = look.kind === 'tex' && T[look.tex];
    const day = isTex ? T[look.tex] : this.blank;
    const style = STYLE_ID[look.style] || 1;
    const seed = (p.seed ?? ((hashString(b.id) % 1000) / 7.3));
    const U = {
      uBodyRot: { value: new THREE.Matrix3() }, uCenterRel: { value: new THREE.Vector3() }, uRadius: { value: b.radiusKm }, uExposure: { value: 1 }, uFade: { value: 1 },
      uType: { value: isTex ? 0 : 1 }, uStyle: { value: style }, tDay: { value: day }, tNight: { value: look.night && T[look.night] ? T[look.night] : this.blank },
      tCloud: { value: look.clouds && T[look.clouds] ? T[look.clouds] : this.blank }, tRing: { value: this.blank },
      uHasNight: { value: look.night && T[look.night] ? 1 : 0 }, uHasCloud: { value: look.clouds && T[look.clouds] ? 1 : 0 },
      uCol: { value: cols.concat(Array(4).fill(new THREE.Vector3(0.5, 0.5, 0.5))).slice(0, 4) },
      uP: { value: new THREE.Vector4(p.crater ?? look.crater ?? 0, (p.bump ?? look.bump ?? 0.4) * this.cfg.visuals.planets.detailBump, p.ice ?? 0, seed) },
      uP2: { value: new THREE.Vector4(p.bands ?? 0.5, p.turb ?? 0.5, p.spot ?? 0, p.stripe ?? 0) },
      uP3: { value: new THREE.Vector4(p.ocean ?? 0.5, p.cloud ?? 0.5, p.lava ?? 0, p.spec ?? look.spec ?? 0) },
      uOcean: { value: look.ocean ? 1 : 0 }, uGas: { value: look.gas ? 1 : 0 },
      uAirless: { value: (!b.atmosphere && look.kind !== 'star' && !look.gas && look.style !== 'gas') ? 1 : 0 }, uAtmo: { value: b.atmosphere ? 1 : 0 },
      uNightGain: { value: this.cfg.visuals.planets.nightLightGain },
      uLightDir: { value: [new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 0, 0)] }, uLightE: { value: [new THREE.Vector3(), new THREE.Vector3()] }, uLightAng: { value: [0.005, 0.005] },
      uAmbient: { value: new THREE.Vector3() },
      uOcc: { value: [new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4()] }, uOccCount: { value: 0 },
      uRingInfo: { value: new THREE.Vector4(0, 1, 0, 0) }, uPole: { value: new THREE.Vector3(0, 0, 1) },
      uDetail: { value: 1 }, uSeed: { value: seed }, uSelfLum: { value: 1 }, uTexel: { value: isTex && day.image ? (Math.PI * 2) / Math.max(day.image.width, 1) : 0.003 },
      ...this.sharedRel,
    };
    return new THREE.ShaderMaterial({ vertexShader: PLANET_VERT, fragmentShader: PLANET_FRAG, uniforms: U });
  }

  _makeBody(it, b) {
    const mat = this._bodyMat(b);
    const mesh = new THREE.Mesh(this.sphereGeo, mat);
    mesh.matrixAutoUpdate = false; mesh.frustumCulled = false; mesh.renderOrder = 10;
    it.mesh = mesh; it.mat = mat; it.objs.push(mesh);
    const look = b.look || {};
    // clouds
    if (look.clouds && this.tex[look.clouds]) {
      const cm = new THREE.ShaderMaterial({
        vertexShader: PLANET_VERT, fragmentShader: CLOUD_FRAG, transparent: true, depthWrite: false,
        uniforms: { uBodyRot: mat.uniforms.uBodyRot, uExposure: mat.uniforms.uExposure, uFade: mat.uniforms.uFade, tCloud: { value: this.tex[look.clouds] }, uLightDir: mat.uniforms.uLightDir, uLightE: mat.uniforms.uLightE,
          uAmbient: mat.uniforms.uAmbient, uRadius: mat.uniforms.uRadius, uOcc: mat.uniforms.uOcc, uOccCount: mat.uniforms.uOccCount, uLightAng: mat.uniforms.uLightAng, uOpacity: { value: this.cfg.visuals.planets.clouds }, ...this.sharedRel },
        blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      });
      const cmesh = new THREE.Mesh(this.sphereGeo, cm); cmesh.matrixAutoUpdate = false; cmesh.frustumCulled = false; cmesh.renderOrder = 11;
      it.cloudMesh = cmesh; it.objs.push(cmesh);
    }
    // atmosphere
    if (b.atmosphere) {
      const a = b.atmosphere;
      const am = new THREE.ShaderMaterial({
        vertexShader: PLANET_VERT, fragmentShader: ATMO_FRAG, transparent: true, depthWrite: false, side: THREE.FrontSide,
        blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.SrcAlphaFactor,
        uniforms: {
          uCenterRel: mat.uniforms.uCenterRel, uRadius: { value: b.radiusKm }, uTop: { value: b.radiusKm + a.topKm }, uBetaR: { value: new THREE.Vector3(...a.rayleigh) }, uBetaM: { value: a.mie },
          uHr: { value: a.hKm }, uHm: { value: a.mieH ?? a.hKm * 0.2 }, uG: { value: a.mieG ?? 0.7 }, uTint: { value: new THREE.Vector3(...(a.tint || [1, 1, 1])) }, uStrength: { value: a.strength ?? 1 },
          uExposure: mat.uniforms.uExposure, uFade: mat.uniforms.uFade, uLightDir: mat.uniforms.uLightDir, uLightE: mat.uniforms.uLightE, uAmbient: mat.uniforms.uAmbient, uSteps: { value: 14 }, ...this.sharedRel,
        },
      });
      const amesh = new THREE.Mesh(this.sphereGeo, am); amesh.matrixAutoUpdate = false; amesh.frustumCulled = false; amesh.renderOrder = 12;
      it.atmoMesh = amesh; it.atmoMat = am; it.objs.push(amesh);
    }
    // rings
    if (b.rings && b.rings.length) {
      const r0 = Math.min(...b.rings.map((r) => r.r0)), r1 = Math.max(...b.rings.map((r) => r.r1));
      const useTex = look.ring && this.tex[look.ring];
      const geo = ringGeometry(useTex ? 74500 : r0, useTex ? 140220 : r1, 256, 3);
      const bands = b.rings.slice(0, 6).map((r) => new THREE.Vector4(r.r0, r.r1, r.tau, 0)); while (bands.length < 6) bands.push(new THREE.Vector4());
      const sat = (b.id === 'saturn');
      const rm = new THREE.ShaderMaterial({
        vertexShader: RING_VERT, fragmentShader: RING_FRAG, transparent: true, depthWrite: false, side: THREE.DoubleSide,
        blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
        uniforms: {
          uBodyRot: { value: new THREE.Matrix3() }, uCenterRel: mat.uniforms.uCenterRel, uPlanetR: { value: b.radiusKm }, uInner: { value: useTex ? 74500 : r0 }, uOuter: { value: useTex ? 140220 : r1 },
          uExposure: mat.uniforms.uExposure, uFade: mat.uniforms.uFade, uLightDir: mat.uniforms.uLightDir, uLightE: mat.uniforms.uLightE, uLightAng: mat.uniforms.uLightAng, uAmbient: mat.uniforms.uAmbient,
          tRing: { value: useTex ? this.tex[look.ring] : this.blank }, uHasTex: { value: useTex ? 1 : 0 }, uTint: { value: new THREE.Vector3(0.78, 0.72, 0.62) },
          uBands: { value: bands }, uBandCount: { value: b.rings.length }, uPole: { value: new THREE.Vector3(0, 0, 1) }, uSeed: { value: (hashString(b.id) % 100) }, ...this.sharedRel,
        },
      });
      const rmesh = new THREE.Mesh(geo, rm); rmesh.matrixAutoUpdate = false; rmesh.frustumCulled = false; rmesh.renderOrder = 13;
      it.ringMesh = rmesh; it.ringMat = rm; it.objs.push(rmesh);
      mat.uniforms.tRing.value = useTex ? this.tex[look.ring] : this.blank;
      mat.uniforms.uRingInfo.value.set(useTex ? 74500 : r0, useTex ? 140220 : r1, this.cfg.visuals.planets.ringShadows * (useTex ? 0.95 : 0.0), useTex ? 1 : 0);
    }
  }

  _makeStar(it, b) {
    const hasTex = b.id === 'sun' && this.tex.sun;
    const mat = new THREE.ShaderMaterial({
      vertexShader: PLANET_VERT, fragmentShader: STARSURF_FRAG,
      uniforms: { uBodyRot: { value: new THREE.Matrix3() }, uColor: { value: new THREE.Vector3(...sunColor(b)) }, uRadiance: { value: b.surfaceRadiance }, uExposure: { value: 1 }, uFade: { value: 1 },
        uLimb: { value: b.limb ?? 0.6 }, uHasTex: { value: hasTex ? 1 : 0 }, tSun: { value: hasTex ? this.tex.sun : this.blank }, uSeed: { value: hashString(b.id) % 100 }, uSpots: { value: b.teff < 5200 ? 1 : 0.5 }, ...this.sharedRel },
    });
    const mesh = new THREE.Mesh(this.sphereGeo, mat); mesh.matrixAutoUpdate = false; mesh.frustumCulled = false; mesh.renderOrder = 10;
    it.mesh = mesh; it.mat = mat; it.objs.push(mesh);
  }

  _makeBelt(it, b) {
    const bl = b.belt, rng = mulberry32(hash2(hashString(b.id), 4242));
    const n = bl.count, pos = new Float32Array(n * 3), size = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const r = bl.peakAu + (rng.normal() * 0.5) * (bl.outerAu - bl.innerAu) * 0.5;
      const rr = clamp(r, bl.innerAu, bl.outerAu) * KM_PER_AU;
      const th = rng() * TAU, h = rng.normal() * bl.thicknessAu * KM_PER_AU * 0.5;
      pos[i * 3] = Math.cos(th) * rr; pos[i * 3 + 1] = Math.sin(th) * rr; pos[i * 3 + 2] = h; size[i] = 0.4 + rng() * 0.6;
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
      uniforms: { uExposure: { value: 1 }, uE: { value: 1 }, uTint: { value: new THREE.Vector3(...bl.tint) }, uGain: { value: 1 } },
      vertexShader: `#include <common>
        attribute float aSize; uniform float uExposure; uniform float uE; uniform float uGain; varying float vA;
        #include <logdepthbuf_pars_vertex>
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float d = max(-mv.z, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp((1.2 + 5.0e5 / d) * (0.7 + 0.6 * aSize), 1.0, 4.5);
          // Real asteroids are far too small and dark to see; belts are drawn as a faint particle band with an explicit visibility gain (visuals.belts.gain)
          vA = uGain * uE * uExposure * 0.012 * (0.5 + aSize) / (1.0 + d / 1.2e8);
          #include <logdepthbuf_vertex>
        }`,
      fragmentShader: `precision highp float;
        #include <common>
        uniform vec3 uTint; varying float vA;
        #include <logdepthbuf_pars_fragment>
        void main(){
          #include <logdepthbuf_fragment>
          vec2 c = gl_PointCoord - 0.5; float f = exp(-dot(c, c) * 14.0);
          gl_FragColor = vec4(min(uTint * vA * f, vec3(8.0)), 1.0); }`,
    });
    const pts = new THREE.Points(geo, mat); pts.frustumCulled = false; pts.matrixAutoUpdate = false; pts.renderOrder = 5;
    it.points = pts; it.mat = mat; it.objs.push(pts);
  }

  _buildOrbitLines(system) {
    this.orbitLines = [];
    const seg = 256;
    for (const b of system.bodies) {
      if (!b.orbit || b.kind === 'belt' || b.kind === 'star' || !b.parent || !b.orbit.periodSec || !isFinite(b.orbit.periodSec)) continue;
      const pts = new Float32Array((seg + 1) * 3);
      const per = b.orbit.periodSec / 86400;
      const jd0 = 2461000;
      const tmp = [0, 0, 0];
      for (let i = 0; i <= seg; i++) {
        // sample the orbit by mean anomaly: use the orbit object at times spread across one period relative to the parent
        b.orbit.positionAt(jd0 + (per * i) / seg, tmp);
        pts[i * 3] = tmp[0]; pts[i * 3 + 1] = tmp[1]; pts[i * 3 + 2] = tmp[2];
      }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
      const col = b.kind === 'moon' ? [0.45, 0.55, 0.7] : b.kind === 'dwarf' ? [0.55, 0.5, 0.5] : [0.5, 0.65, 0.5];
      const mat = new THREE.LineBasicMaterial({ color: new THREE.Color(...col), transparent: true, opacity: 0.0, depthWrite: false, blending: THREE.AdditiveBlending });
      const line = new THREE.Line(geo, mat); line.frustumCulled = false; line.matrixAutoUpdate = false; line.renderOrder = 4;
      this.scene.add(line);
      this.orbitLines.push({ body: b, line, mat, baseOpacity: this.cfg.visuals.orbitLines.opacity });
    }
  }

  // ───────────── per frame ─────────────
  /**
   * F: { camSys:[x,y,z] km, jd, view: THREE.Matrix3 (rest→camera), betaCam:THREE.Vector3, gamma, exposure, warp:{dirCam,beta,gamma}, focalPx, showOrbits }
   * Returns info for the caller: { hide:[catalogIndices of stars drawn here], exposureContext, labels }
   */
  update(F) {
    const sys = this.system; if (!sys) return { hide: [], labels: [] };
    const cam = F.camSys, jd = F.jd, focal = F.focalPx, R = this.cfg.visuals;
    this.sharedRel.uBetaCam.value.copy(F.betaCam); this.sharedRel.uGamma.value = F.gamma;
    this.spriteMat.uniforms.uBetaCam.value.copy(F.betaCam); this.spriteMat.uniforms.uExposure.value = F.exposure;
    const w = F.warp || {};
    this.sharedRel.uWDirCam.value.copy(w.dirCam || new THREE.Vector3(0, 0, -1)); this.sharedRel.uWBeta.value = w.beta || 0; this.sharedRel.uWGamma.value = w.gamma || 1;
    this.spriteMat.uniforms.uWDirCam.value.copy(this.sharedRel.uWDirCam.value);
    const hide = [];
    const labels = [];
    let ns = 0;
    const sp = this.spritePos, sc = this.spriteCol;
    const bodyInfoRef = { v: null };
    const occl = (src, rel, dist, angR) => {                     // fraction of a sprite source still visible past nearer bodies
      let vis = 1;
      for (const it2 of this.items) {
        const b2 = it2.body; if (b2 === src || b2.kind === 'belt') continue;
        const i2 = bodyInfoRef.v.get(b2); if (i2.dist >= dist) continue;
        const angB = b2.radiusKm / i2.dist; if (angB * focal < 0.3) continue;
        const cosd = (rel[0] * i2.rel[0] + rel[1] * i2.rel[1] + rel[2] * i2.rel[2]) / (dist * i2.dist);
        const sep = Math.acos(clamp(cosd, -1, 1));
        if (sep > angR + angB) continue;
        vis *= 1 - discOverlap(angR, angB, sep);
        if (vis <= 0) return 0;
      }
      return vis;
    };
    const addSprite = (rel, E, col, coreFade) => {
      if (ns >= this.spriteCap) return;
      sp[ns * 4] = rel[0]; sp[ns * 4 + 1] = rel[1]; sp[ns * 4 + 2] = rel[2]; sp[ns * 4 + 3] = E;
      sc[ns * 4] = col[0]; sc[ns * 4 + 1] = col[1]; sc[ns * 4 + 2] = col[2]; sc[ns * 4 + 3] = coreFade; ns++;
    };

    // gather lights per body position
    const stars = sys.stars;
    const starPos = stars.map((s) => s.positionAt(jd));
    const rel = [0, 0, 0];
    const bodyInfo = new Map();
    for (const it of this.items) {
      const b = it.body, p = b.positionAt(jd);
      rel[0] = p[0] - cam[0]; rel[1] = p[1] - cam[1]; rel[2] = p[2] - cam[2];
      const dist = Math.hypot(rel[0], rel[1], rel[2]);
      bodyInfo.set(b, { p, rel: [rel[0], rel[1], rel[2]], dist });
    }
    bodyInfoRef.v = bodyInfo;
    for (const it of this.items) {
      const b = it.body, info = bodyInfo.get(b);
      const { rel: r, dist, p } = info;
      const angPx = (b.radiusKm / Math.max(dist, 1e-3)) * focal;
      it.angPx = angPx; it.dist = dist;

      if (b.kind === 'belt') { this._updateBelt(it, b, r, p, jd, F); continue; }

      // lights at this body
      let lights = [];
      for (let si = 0; si < stars.length; si++) {
        const s = stars[si]; if (s === b) continue;
        const sp_ = starPos[si];
        const dx = sp_[0] - p[0], dy = sp_[1] - p[1], dz = sp_[2] - p[2];
        const d = Math.hypot(dx, dy, dz) || 1;
        const au = d / KM_PER_AU;
        lights.push({ s, dir: [dx / d, dy / d, dz / d], E: s.lumV / (au * au), ang: Math.min(0.3, s.radiusKm / d), d });
      }
      lights.sort((a, b2) => b2.E - a.E);
      it.lights = lights;

      if (b.kind === 'star') {
        // star disc + point sprite; hide in the catalogue layer
        if (b.catalogIndex !== undefined) hide.push(b.catalogIndex);
        else if (this.cat && this.cat.sunIndex !== undefined && b.id === 'sun') hide.push(this.cat.sunIndex);
        const fade = smoothstep(this.fadeEdge.lo, this.fadeEdge.hi, angPx);
        const E = b.lumV / Math.pow(Math.max(dist, 1) / KM_PER_AU, 2) * occl(b, r, dist, b.radiusKm / Math.max(dist, 1));
        addSprite(r, E, b.color, 1 - fade);
        it.mesh.visible = angPx > this.fadeEdge.lo && this._inFront(F, r, b.radiusKm);
        if (it.mesh.visible) {
          this._setMatrix(it.mesh, b, jd, r, 1, true);
          const u = it.mat.uniforms; u.uExposure.value = F.exposure; u.uFade.value = fade;
          u.uBodyRot.value.setFromMatrix4(it.mesh.matrix.clone().setPosition(0, 0, 0)).multiplyScalar(1 / b.radiusKm);
          this._normRot(u.uBodyRot.value);
        }
        if (R.labels.enabled) labels.push({ body: b, rel: r, dist, angPx, kind: 'star' });
        continue;
      }

      // planet / moon / dwarf
      const fade = smoothstep(this.fadeEdge.lo, this.fadeEdge.hi, angPx);
      const vis = angPx > this.fadeEdge.lo && this._inFront(F, r, b.radiusKm * 1.2);
      // reflected-light sprite
      {
        let Einc = 0; for (const L of lights) Einc += L.E;
        if (lights.length) {
          const cosA = clamp((lights[0].dir[0] * -r[0] + lights[0].dir[1] * -r[1] + lights[0].dir[2] * -r[2]) / Math.max(dist, 1e-3), -1, 1);
          const alpha = Math.acos(cosA);
          const phase = (Math.sin(alpha) + (Math.PI - alpha) * Math.cos(alpha)) / Math.PI;
          const geo = b.albedo ?? 0.3;
          const E = geo * Math.pow(b.radiusKm / Math.max(dist, 1), 2) * phase * Einc * (2 / 3) * 1.5 * occl(b, r, dist, b.radiusKm / Math.max(dist, 1));
          const mc = b.meanColor || (b.meanColor = this._meanColor(b));
          addSprite(r, E, mc, 1 - fade);
        }
      }
      it.mesh.visible = vis;
      if (vis) this._updateBodyMesh(it, b, jd, r, dist, p, F, fade, bodyInfo);
      if (it.cloudMesh) it.cloudMesh.visible = vis;
      if (it.atmoMesh) it.atmoMesh.visible = vis;
      if (it.ringMesh) it.ringMesh.visible = vis || (b.rings && angPx * 2.6 > 0.7);
      if (it.ringMesh && it.ringMesh.visible) this._updateRing(it, b, jd, r, F, fade);
      if (R.labels.enabled) labels.push({ body: b, rel: r, dist, angPx, kind: b.kind });
    }
    this.spriteGeo.instanceCount = ns;
    this.spritePosAttr.needsUpdate = true; this.spriteColAttr.needsUpdate = true;
    this._updateOrbitLines(F, bodyInfo, jd);
    return { hide, labels, bodyInfo };
  }

  _inFront(F, rel, radius) {
    // coarse visibility: is any part of the sphere within ~1.6x the view cone?
    const v = _v.set(rel[0], rel[1], rel[2]).applyMatrix3(F.view);
    const d = v.length();
    if (d < radius * 1.0) return true;
    return v.z < radius * 0.5 + 0 && (-v.z > 0 || d < radius * 4);
  }

  _meanColor(b) {
    if (MEAN_COLOR[b.id]) return MEAN_COLOR[b.id];
    const c = b.look && b.look.colors; if (c && c[1]) return [c[1][0], c[1][1], c[1][2]];
    return [0.7, 0.7, 0.7];
  }

  _normRot(m3) { /* mesh matrix holds scale; divide columns to a pure rotation */
    const e = m3.elements;
    for (let c = 0; c < 3; c++) { const l = Math.hypot(e[c * 3], e[c * 3 + 1], e[c * 3 + 2]) || 1; e[c * 3] /= l; e[c * 3 + 1] /= l; e[c * 3 + 2] /= l; }
  }

  /** place a sphere mesh: matrix columns = (x_body, pole, -y_body) * radius, translation = camera-relative centre */
  _setMatrix(mesh, b, jd, rel, scale, isStar = false) {
    const ax = b.axesAt(jd);
    const R = b.radiusKm * scale;
    const m = mesh.matrix;
    m.set(
      ax.x[0] * R, ax.z[0] * R, -ax.y[0] * R, rel[0],
      ax.x[1] * R, ax.z[1] * R, -ax.y[1] * R, rel[1],
      ax.x[2] * R, ax.z[2] * R, -ax.y[2] * R, rel[2],
      0, 0, 0, 1);
    mesh.matrixWorld.copy(m);
    return ax;
  }

  _updateBodyMesh(it, b, jd, rel, dist, p, F, fade, bodyInfo) {
    const u = it.mat.uniforms;
    // high time compression: rate-limit visible spin so fast rotators do not strobe
    this._applySpinLimit(b, jd, F);
    const ax = this._setMatrix(it.mesh, b, jd, rel, 1);
    u.uBodyRot.value.set(ax.x[0], ax.z[0], -ax.y[0], ax.x[1], ax.z[1], -ax.y[1], ax.x[2], ax.z[2], -ax.y[2]);
    u.uCenterRel.value.set(rel[0], rel[1], rel[2]);
    u.uExposure.value = F.exposure; u.uFade.value = fade;
    u.uPole.value.set(ax.z[0], ax.z[1], ax.z[2]);
    u.uDetail.value = this.cfg.visuals.planets.detailBump; u.uNightGain.value = this.cfg.visuals.planets.nightLightGain;
    // lights
    const L = it.lights;
    for (let i = 0; i < 2; i++) {
      const l = L[i];
      if (l) {
        u.uLightDir.value[i].set(l.dir[0], l.dir[1], l.dir[2]);
        const c = l.s.color;
        u.uLightE.value[i].set(c[0] * l.E, c[1] * l.E, c[2] * l.E);
        u.uLightAng.value[i] = Math.max(l.ang, 1e-5);
      } else u.uLightE.value[i].set(0, 0, 0);
    }
    // ambient: planetshine from the parent body + faint starlight floor
    let amb = 2e-9;
    if (b.parent && b.parent.kind !== 'star' && L[0]) {
      const pinfo = bodyInfo.get(b.parent), mine = bodyInfo.get(b);
      const dd = Math.hypot(pinfo.p[0] - mine.p[0], pinfo.p[1] - mine.p[1], pinfo.p[2] - mine.p[2]);
      const toP = [(pinfo.p[0] - mine.p[0]) / dd, (pinfo.p[1] - mine.p[1]) / dd, (pinfo.p[2] - mine.p[2]) / dd];
      const phase = 0.5 * (1 + (toP[0] * -L[0].dir[0] * -1 + toP[1] * -L[0].dir[1] * -1 + toP[2] * -L[0].dir[2] * -1) * 0 + (toP[0] * L[0].dir[0] + toP[1] * L[0].dir[1] + toP[2] * L[0].dir[2]) * -1 * -1);
      amb += (b.parent.albedo ?? 0.3) * Math.pow(b.parent.radiusKm / dd, 2) * L[0].E * 0.5 * Math.max(0.02, phase * 0.9);
    }
    u.uAmbient.value.set(amb, amb, amb);
    // occluders (eclipse shadows)
    let n = 0;
    for (const o of it.occluders || []) {
      if (n >= 3) break;
      const oi = bodyInfo.get(o); if (!oi) continue;
      const mine = bodyInfo.get(b);
      const ox = oi.p[0] - mine.p[0], oy = oi.p[1] - mine.p[1], oz = oi.p[2] - mine.p[2];
      const od = Math.hypot(ox, oy, oz);
      if (od > 60 * Math.max(b.radiusKm, o.radiusKm) + 1e6) { if (b.parent === o || o.parent === b) { /* keep close relatives */ } else continue; }
      u.uOcc.value[n].set(ox, oy, oz, o.radiusKm); n++;
    }
    u.uOccCount.value = n;
    if (it.cloudMesh) {
      const cs = 1 + 14 / b.radiusKm * 1.0 + 0.0016;
      this._setMatrix(it.cloudMesh, b, jd, rel, cs);
    }
    if (it.atmoMesh) {
      const a = b.atmosphere, top = (b.radiusKm + a.topKm) / b.radiusKm * 1.002;
      this._setMatrix(it.atmoMesh, b, jd, rel, top);
      it.atmoMat.side = dist < b.radiusKm + a.topKm ? THREE.BackSide : THREE.FrontSide;
      it.atmoMat.uniforms.uStrength.value = (a.strength ?? 1) * this.cfg.visuals.planets.atmosphere;
    }
  }

  _applySpinLimit(b, jd, F) {
    // Real rotation at low time compression; at high compression keep the visible spin readable (<~0.6 rev/s)
    if (!b.spin || b.spin.sync) { b.spinOverride = undefined; return; }
    const exact = b.spinAngle ? ((b.spin.w0 + b.spin.rateDegDay * (jd - 2451545.0)) * DEG) : 0;
    const revPerRealSec = Math.abs(b.spin.rateDegDay / 360) * F.timeScale / 86400 * 86400 / 86400 * 1;       // rev per real second = rev/day * (sim days per real s)
    const simDaysPerSec = F.timeScale / 86400;
    const rps = Math.abs(b.spin.rateDegDay / 360) * simDaysPerSec;
    void revPerRealSec;
    const limit = 0.45;
    if (rps <= limit) { b.spinOverride = undefined; b._spinFree = null; return; }
    if (b._spinFree == null) b._spinFree = exact;
    b._spinFree += Math.sign(b.spin.rateDegDay) * limit * TAU * (F.dtReal || 0.016);
    b.spinOverride = b._spinFree;
  }

  _updateRing(it, b, jd, rel, F, fade) {
    const ax = b.axesAt(jd);
    const m = it.ringMesh.matrix;
    m.set(ax.x[0], ax.y[0], ax.z[0], rel[0], ax.x[1], ax.y[1], ax.z[1], rel[1], ax.x[2], ax.y[2], ax.z[2], rel[2], 0, 0, 0, 1);
    it.ringMesh.matrixWorld.copy(m);
    const u = it.ringMat.uniforms;
    u.uBodyRot.value.set(ax.x[0], ax.y[0], ax.z[0], ax.x[1], ax.y[1], ax.z[1], ax.x[2], ax.y[2], ax.z[2]);
    u.uExposure.value = F.exposure; u.uFade.value = 1;
    u.uPole.value.set(ax.z[0], ax.z[1], ax.z[2]);
    const L = it.lights || [];
    for (let i = 0; i < 2; i++) {
      const l = L[i];
      if (l) { u.uLightDir.value[i].set(l.dir[0], l.dir[1], l.dir[2]); const c = l.s.color; u.uLightE.value[i].set(c[0] * l.E, c[1] * l.E, c[2] * l.E); u.uLightAng.value[i] = Math.max(l.ang, 1e-5); }
      else u.uLightE.value[i].set(0, 0, 0);
    }
    u.uAmbient.value.set(2e-9, 2e-9, 2e-9);
  }

  _updateBelt(it, b, rel, p, jd, F) {
    // belt particles live in the parent star's frame, in the system plane (if any)
    const pl = b.plane;
    const m = it.points.matrix;
    if (pl) m.set(pl[0], pl[1], pl[2], rel[0], pl[3], pl[4], pl[5], rel[1], pl[6], pl[7], pl[8], rel[2], 0, 0, 0, 1);
    else {
      // Solar System belts lie in the ecliptic plane (rotated into ICRS)
      const c = Math.cos(23.43928 * DEG), s = Math.sin(23.43928 * DEG);
      m.set(1, 0, 0, rel[0], 0, c, -s, rel[1], 0, s, c, rel[2], 0, 0, 0, 1);
    }
    it.points.matrixWorld.copy(m);
    const u = it.mat.uniforms; u.uExposure.value = F.exposure; u.uGain.value = this.cfg.visuals.belts.gain;
    const par = b.parent, pp = par ? par.positionAt(jd) : [0, 0, 0];
    const au = Math.max(b.belt.peakAu, 0.05);
    u.uE.value = (par && par.lumV ? par.lumV : 1) / (au * au);
    it.points.visible = true;
  }

  _updateOrbitLines(F, bodyInfo, jd) {
    const on = this.cfg.visuals.orbitLines.enabled && F.showOrbits !== false;
    for (const ol of this.orbitLines || []) {
      const b = ol.body, bi = bodyInfo.get(b.parent), self = bodyInfo.get(b);
      if (!on || !bi || !self) { ol.line.visible = false; continue; }
      ol.line.visible = true;
      const m = ol.line.matrix; m.identity(); m.setPosition(bi.rel[0], bi.rel[1], bi.rel[2]);
      ol.line.matrixWorld.copy(m);
      // fade out when the viewer is close to the orbit (it fills the screen) or when the orbit is a tiny speck on screen
      const a = b.orbit.a || 1;
      const camDist = bi.dist;
      const apparent = (a / Math.max(camDist, 1)) * F.focalPx;           // px radius of the orbit
      const near = smoothstep(0.03, 0.35, self.dist / a);                // fade when the viewer is next to the orbiting body (the line would pass through the view)
      const far = smoothstep(4, 40, apparent);
      ol.mat.opacity = ol.baseOpacity * near * far * 0.5;
      ol.line.visible = ol.mat.opacity > 0.004;
    }
  }

  render(renderer, camera) { renderer.render(this.scene, camera); }
}

function ringGeometry(r0, r1, seg, rad) {
  const pos = [], idx = [];
  for (let j = 0; j <= rad; j++) {
    const r = r0 + (r1 - r0) * (j / rad);
    for (let i = 0; i <= seg; i++) { const a = (i / seg) * TAU; pos.push(Math.cos(a) * r, Math.sin(a) * r, 0); }
  }
  for (let j = 0; j < rad; j++) for (let i = 0; i < seg; i++) {
    const a = j * (seg + 1) + i, b = a + 1, c = a + seg + 1, d = c + 1; idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); return g;
}
