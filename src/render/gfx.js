// Core renderer: HDR pipeline, sky + stars + galaxies, lens + bloom + tone-mapping.
import * as THREE from 'three';
import { STAR_VERT, STAR_FRAG } from './shaders/starfield.js';
import { FULLSCREEN_VERT, SKY_FRAG, GALAXY_VERT, GALAXY_FRAG, MWMODEL_FRAG } from './shaders/sky.js';
import { POST_VERT, DOWN_FRAG, UP_FRAG, COMPOSITE_FRAG, LENS_FRAG, COPY_FRAG } from './shaders/post.js';
import { blackbodyRGB } from '../universe/starTraits.js';
import { ICRS_TO_GAL, DEG } from '../../shared/astro.js';

const LN_TMIN = Math.log(1000), LN_TMAX = Math.log(60000);

export class Gfx {
  constructor(canvas, cfg, data) {
    this.cfg = cfg; this.data = data; this.canvas = canvas;
    const gl2 = canvas.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'high-performance', stencil: false, depth: true, preserveDrawingBuffer: true });
    if (!gl2) throw new Error('WebGL2 is required.');
    this.renderer = new THREE.WebGLRenderer({ canvas, context: gl2, antialias: false, logarithmicDepthBuffer: true });
    this.renderer.autoClear = false;
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.shadowMap.enabled = !!cfg.visuals.ship.shadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.maxTex = this.renderer.capabilities.maxTextureSize;
    this.renderScale = cfg.visuals.renderScale;

    this.fsGeo = new THREE.BufferGeometry();
    this.fsGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    this.fsMesh = new THREE.Mesh(this.fsGeo, null); this.fsMesh.frustumCulled = false;
    this.fsScene = new THREE.Scene(); this.fsScene.add(this.fsMesh);
    this.fsCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.skyScene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(cfg.camera.fovDeg, 1, cfg.camera.near, cfg.camera.far);
    this.time = 0;
    this._buildColorLUT();
    this._buildStars();
    this._buildSky();
    this._buildMwModel();
    this._buildGalaxies();
    this._buildPost();
    this.resize();
  }

  // ───────────── resources ─────────────
  _buildColorLUT() {
    const N = 256, data = new Uint16Array(N * 4);
    for (let i = 0; i < N; i++) {
      const T = Math.exp(LN_TMIN + (i / (N - 1)) * (LN_TMAX - LN_TMIN));
      const c = blackbodyRGB(T);
      data[i * 4] = THREE.DataUtils.toHalfFloat(c[0]); data[i * 4 + 1] = THREE.DataUtils.toHalfFloat(c[1]); data[i * 4 + 2] = THREE.DataUtils.toHalfFloat(c[2]); data[i * 4 + 3] = THREE.DataUtils.toHalfFloat(1);
    }
    const t = new THREE.DataTexture(data, N, 1, THREE.RGBAFormat, THREE.HalfFloatType);
    t.minFilter = t.magFilter = THREE.LinearFilter; t.needsUpdate = true; t.generateMipmaps = false;
    this.colorLUT = t;
  }

  _buildStars() {
    const d = this.data, n = d.n;
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3));
    geo.setIndex([0, 1, 2, 0, 2, 3]);
    const pos = new Float32Array(n * 3), phys = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = d.pos[i * 3]; pos[i * 3 + 1] = d.pos[i * 3 + 1]; pos[i * 3 + 2] = d.pos[i * 3 + 2];
      phys[i * 2] = d.absMag[i]; phys[i * 2 + 1] = Math.log(d.teff[i]);
    }
    geo.setAttribute('aPos', new THREE.InstancedBufferAttribute(pos, 3));
    geo.setAttribute('aPhys', new THREE.InstancedBufferAttribute(phys, 2));
    geo.instanceCount = n;
    this.starUniforms = {
      uCamHi: { value: new THREE.Vector3() }, uCamLo: { value: new THREE.Vector3() }, uView: { value: new THREE.Matrix3() }, uRes: { value: new THREE.Vector2(1, 1) },
      uFocalPx: { value: 1000 }, uBeta: { value: new THREE.Vector3() }, uGamma: { value: 1 }, uExposure: { value: 1 }, uMagLimit: { value: 10 }, uBrightness: { value: 1 },
      uSigma: { value: 0.62 }, uHalo: { value: 1 }, uHaloAmt: { value: 0.0004 }, uHaloW: { value: 4 }, uSat: { value: 1 }, uBlue: { value: 1 }, uColorLUT: { value: this.colorLUT }, uLnTmin: { value: LN_TMIN }, uLnTmax: { value: LN_TMAX },
      uWarpDir: { value: new THREE.Vector3(0, 0, -1) }, uWarpBeta: { value: 0 }, uWarpGamma: { value: 1 }, uStreak: { value: 0 }, uWarpDim: { value: 0 }, uBeam: { value: 2 }, uHide: { value: new Array(8).fill(-1) },
    };
    this.starMat = new THREE.ShaderMaterial({
      vertexShader: STAR_VERT, fragmentShader: STAR_FRAG, uniforms: this.starUniforms, transparent: true, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    });
    this.starMesh = new THREE.Mesh(geo, this.starMat); this.starMesh.frustumCulled = false; this.starMesh.renderOrder = 1;
    this.skyScene.add(this.starMesh);
  }

  _buildSky() {
    const mw = this.data.milkyWay, mw0 = mw;
    let tex;
    if (mw) {
      const { width: W, height: H } = mw;
      const arr = new Uint16Array(W * H * 4);
      // colour index: log10(BP/RP); centre on the sky-area-weighted median so the average light is neutral
      const cols = []; for (let i = 0; i < W * H; i += 7) cols.push(mw.col[i]); cols.sort((a, b) => a - b);
      const medQ = cols[cols.length >> 1];
      const toCol = (q) => mw.colMin + (q / 65535) * (mw.colMax - mw.colMin);
      const c0 = toCol(medQ);
      const A = this.cfg.visuals.milkyWay.colorSensitivity ?? 2.4;
      for (let i = 0; i < W * H; i++) {
        const logE = mw.logMin + (mw.lum[i] / 65535) * (mw.logMax - mw.logMin);
        const L = Math.PI * Math.pow(10, logE) * 1e6;                 // 1e6 prescale keeps values in half-float range; removed by uMwScale
        const t = (toCol(mw.col[i]) - c0) * A;
        let r = Math.exp(-0.5 * t), b = Math.exp(0.5 * t), g = 1;
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b; r /= lum; g /= lum; b /= lum;
        arr[i * 4] = THREE.DataUtils.toHalfFloat(L * r); arr[i * 4 + 1] = THREE.DataUtils.toHalfFloat(L * g); arr[i * 4 + 2] = THREE.DataUtils.toHalfFloat(L * b); arr[i * 4 + 3] = THREE.DataUtils.toHalfFloat(1);
      }
      tex = new THREE.DataTexture(arr, W, H, THREE.RGBAFormat, THREE.HalfFloatType);
      tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping; tex.minFilter = tex.magFilter = THREE.LinearFilter; tex.generateMipmaps = false; tex.needsUpdate = true;
      this.mwInfo = { integratedV: mw.integratedV };
    } else {
      tex = new THREE.DataTexture(new Uint16Array([0, 0, 0, 15360]), 1, 1, THREE.RGBAFormat, THREE.HalfFloatType); tex.needsUpdate = true;
      console.warn('milkyway.bin not found – run: node tools/build-data.mjs --only=skymap');
    }
    const toGal = new THREE.Matrix3(); toGal.set(...ICRS_TO_GAL.flat());
    this.skyUniforms = {
      uMW: { value: tex }, uMWSize: { value: new THREE.Vector2(mw0 ? mw0.width : 1024, mw0 ? mw0.height : 512) }, uInvView: { value: new THREE.Matrix3() }, uToGal: { value: toGal }, uTan: { value: new THREE.Vector2(1, 1) }, uBeta: { value: new THREE.Vector3() }, uGamma: { value: 1 },
      uWarpDir: { value: new THREE.Vector3(0, 0, -1) }, uWarpBeta: { value: 0 }, uWarpGamma: { value: 1 }, uExposure: { value: 1 }, uGain: { value: 1 }, uDetail: { value: 1 }, uGrain: { value: 0.5 },
      uDust: { value: 1 }, uBeamCap: { value: 8 }, uMwScale: { value: 1e-6 }, uBlue: { value: 1 }, uModelSun: { value: null }, uModelShip: { value: null }, uModelOn: { value: 0 }, uZodi: { value: 0 }, uBeam: { value: 3 }, uSunDirRest: { value: new THREE.Vector3(1, 0, 0) }, uZodiScale: { value: 1 },
    };
    this.skyMat = new THREE.ShaderMaterial({ vertexShader: FULLSCREEN_VERT, fragmentShader: SKY_FRAG, uniforms: this.skyUniforms, depthTest: false, depthWrite: false });
    this.skyMesh = new THREE.Mesh(this.fsGeo, this.skyMat); this.skyMesh.frustumCulled = false; this.skyMesh.renderOrder = 0;
    this.skyScene.add(this.skyMesh);
  }

  _buildMwModel() {
    const gm = this.cfg.galaxyModel;
    this.mwModel = { rtSun: this._rt(256, 128), rtShip: this._rt(256, 128), last: null };
    this.mwModelMat = new THREE.ShaderMaterial({
      vertexShader: FULLSCREEN_VERT, fragmentShader: MWMODEL_FRAG, depthTest: false, depthWrite: false,
      uniforms: { uOrigin: { value: new THREE.Vector3() }, uDisc: { value: new THREE.Vector4(gm.diskScaleLengthKpc, gm.diskScaleHeightPc / 1000, gm.bulgeRadiusKpc, 14) }, uDust: { value: new THREE.Vector4(gm.dustScaleLengthKpc, gm.dustScaleHeightPc / 1000, 10, 0) } },
    });
    this.mwModelMesh = new THREE.Mesh(this.fsGeo, this.mwModelMat);
    this._renderMwModel(this.mwModel.rtSun, [0, 0, 0]);                 // the Sun's view (once)
    this._renderMwModel(this.mwModel.rtShip, [0, 0, 0]);
    this.skyUniforms.uModelSun.value = this.mwModel.rtSun.texture; this.skyUniforms.uModelShip.value = this.mwModel.rtShip.texture;
  }
  /** pcIcrs: viewpoint relative to the Sun (ICRS pc). Rendered into rt as the analytic model's line-of-sight emission. */
  _renderMwModel(rt, pcIcrs) {
    const gm = this.cfg.galaxyModel, M = ICRS_TO_GAL;
    const gx = M[0][0] * pcIcrs[0] + M[0][1] * pcIcrs[1] + M[0][2] * pcIcrs[2], gy = M[1][0] * pcIcrs[0] + M[1][1] * pcIcrs[1] + M[1][2] * pcIcrs[2], gz = M[2][0] * pcIcrs[0] + M[2][1] * pcIcrs[1] + M[2][2] * pcIcrs[2];
    this.mwModelMat.uniforms.uOrigin.value.set(gx / 1000 - gm.sunRadiusKpc, gy / 1000, gz / 1000 + gm.sunHeightPc / 1000);
    this.fsMesh.material = this.mwModelMat;
    this.renderer.setRenderTarget(rt); this.renderer.render(this.fsScene, this.fsCam);
  }
  updateMwModel(camPc) {
    const gm = this.cfg.galaxyModel, d = Math.hypot(camPc[0], camPc[1], camPc[2]);
    this.skyUniforms.uModelOn.value = d > 20 ? 1 : 0;          // within ~20 pc of the Sun the Gaia map is already the right view
    if (d <= 20) return;
    const l = this.mwModel.last;
    if (l && Math.hypot(camPc[0] - l[0], camPc[1] - l[1], camPc[2] - l[2]) < gm.refreshDistancePc) return;
    this._renderMwModel(this.mwModel.rtShip, camPc); this.mwModel.last = camPc.slice();
  }

  _buildGalaxies() {
    this.galaxies = [];
    const quad = new THREE.BufferGeometry();
    quad.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3)); quad.setIndex([0, 1, 2, 0, 2, 3]);
    for (const g of this.data.galaxies) {
      const len = Math.hypot(g.x, g.y, g.z) || 1;
      const dir = new THREE.Vector3(g.x / len, g.y / len, g.z / len);
      // tangent basis: east = increasing RA, north = increasing Dec
      const ra = g.ra * DEG, dec = g.dec * DEG;
      const east = new THREE.Vector3(-Math.sin(ra), Math.cos(ra), 0);
      const north = new THREE.Vector3(-Math.sin(dec) * Math.cos(ra), -Math.sin(dec) * Math.sin(ra), Math.cos(dec));
      const rhRad = Math.max((g.rhArcmin || 3) / 60 * DEG, 1e-4);
      const sizeRad = Math.min(Math.max(rhRad * 5, 0.006), 0.7);
      const mat = new THREE.ShaderMaterial({
        vertexShader: GALAXY_VERT, fragmentShader: GALAXY_FRAG, transparent: true, depthTest: false, depthWrite: false,
        blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
        uniforms: {
          uView: this.starUniforms.uView, uRes: this.starUniforms.uRes, uFocalPx: this.starUniforms.uFocalPx, uBeta: this.starUniforms.uBeta, uGamma: this.starUniforms.uGamma,
          uWarpDir: this.starUniforms.uWarpDir, uWarpBeta: this.starUniforms.uWarpBeta, uWarpGamma: this.starUniforms.uWarpGamma,
          uDir: { value: dir }, uSizeRad: { value: sizeRad }, uPA: { value: 0 }, uEast: { value: east }, uNorth: { value: north },
          uEll: { value: g.ell ?? 0.2 }, uRh: { value: rhRad / sizeRad }, uColor: { value: new THREE.Vector3(1, 0.96, 0.9) }, uPeak: { value: 0 }, uFloor: { value: 0 },
        },
      });
      // total flux from V magnitude → central surface brightness of an exponential profile (see docs/ARCHITECTURE)
      const V = g.vmag ?? 14;
      const E = Math.pow(10, -0.4 * (V + 26.74));                       // solar constants
      const rScale = rhRad / 1.68;                                      // exponential scale length (rad)
      const I0 = E / (2 * Math.PI * rScale * rScale * Math.max(1 - (g.ell ?? 0.2), 0.15));   // E per sr at the centre
      const mesh = new THREE.Mesh(quad, mat); mesh.frustumCulled = false; mesh.renderOrder = 0.5; mesh.userData = { g, I0, rhRad };
      // position angle: east of north → rotate the profile in the (east, north) tangent plane
      mat.uniforms.uPA.value = (g.pa ?? 0) * DEG;
      this.skyScene.add(mesh); this.galaxies.push(mesh);
    }
  }

  _buildPost() {
    const mk = (frag, uniforms) => new THREE.ShaderMaterial({ vertexShader: POST_VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false });
    this.mats = {
      down: mk(DOWN_FRAG, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uKaris: { value: 0 }, uCap: { value: 6e4 } }),
      up: mk(UP_FRAG, { tSrc: { value: null }, tAdd: { value: null }, uTexel: { value: new THREE.Vector2() }, uRadius: { value: 1 }, uMix: { value: 0.5 } }),
      composite: mk(COMPOSITE_FRAG, { tScene: { value: null }, tBloom: { value: null }, uBloom: { value: 0.06 }, uSaturation: { value: 1.05 }, uContrast: { value: 1 }, uGrain: { value: 0.01 }, uVignette: { value: 0.2 },
        uCA: { value: 0.0007 }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2() }, uFlash: { value: 0 }, uFlashColor: { value: new THREE.Vector3(0.6, 0.8, 1) }, uFlashPos: { value: new THREE.Vector2(0.5, 0.5) } }),
      lens: mk(LENS_FRAG, { tSrc: { value: null }, uCenter: { value: new THREE.Vector2(0.5, 0.5) }, uRadius: { value: 0.2 }, uStrength: { value: 0 }, uAspect: { value: 1 }, uTime: { value: 0 }, uFlow: { value: 0 } }),
      copy: mk(COPY_FRAG, { tSrc: { value: null } }),
    };
  }

  _rt(w, h, samples = 0, depth = false) {
    const rt = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: depth, stencilBuffer: false, samples, generateMipmaps: false });
    rt.texture.colorSpace = THREE.LinearSRGBColorSpace;
    return rt;
  }

  resize(cssW = window.innerWidth, cssH = window.innerHeight) {          // the canvas fills the window by CSS (100 %); its size is read from the window, never from its own previous inline size
    const dpr = Math.min(window.devicePixelRatio || 1, this.cfg.visuals.maxPixelRatio);
    const sc = this.renderScale;
    const W = Math.max(2, Math.floor(cssW * dpr * sc)), H = Math.max(2, Math.floor(cssH * dpr * sc));
    this.W = W; this.H = H; this.cssW = cssW; this.cssH = cssH;
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(Math.floor(cssW * dpr), Math.floor(cssH * dpr), false);
    this.outW = Math.floor(cssW * dpr); this.outH = Math.floor(cssH * dpr);
    const samples = Math.min(this.cfg.visuals.antialias, this.renderer.capabilities.maxSamples);
    for (const k of ['sceneRT', 'lensRT']) if (this[k]) this[k].dispose();
    this.sceneRT = this._rt(W, H, samples, true);
    this.lensRT = this._rt(W, H, samples, true);
    this.camera.aspect = W / H; this.camera.updateProjectionMatrix();
    // bloom chain
    if (this.bloomRTs) for (const r of this.bloomRTs) { r.down.dispose(); r.up.dispose(); }
    this.bloomRTs = [];
    let bw = Math.max(2, W >> 1), bh = Math.max(2, H >> 1);
    const levels = this.cfg.visuals.bloom.levels;
    for (let i = 0; i < levels; i++) { this.bloomRTs.push({ w: bw, h: bh, down: this._rt(bw, bh), up: this._rt(bw, bh) }); bw = Math.max(2, bw >> 1); bh = Math.max(2, bh >> 1); }
    this.starUniforms.uRes.value.set(W, H);
    this.mats.composite.uniforms.uRes.value.set(W, H);
    this.mats.lens.uniforms.uAspect.value = W / H;
  }

  setRenderScale(s) { if (Math.abs(s - this.renderScale) > 0.01) { this.renderScale = s; this.resize(this.cssW, this.cssH); } }

  get focalPx() { return 0.5 * this.H / Math.tan(0.5 * this.camera.fov * DEG); }

  quad(mat, target, clear = false) {
    this.fsMesh.material = mat;
    this.renderer.setRenderTarget(target);
    if (clear) this.renderer.clear();
    this.renderer.render(this.fsScene, this.fsCam);
  }

  // ───────────── per-frame ─────────────
  /**
   * F: { camPc:[x,y,z], quat (THREE.Quaternion camera→rest), beta:[x,y,z], gamma, exposure, warp:{dir,beta,gamma,streak,dim,lens,center,radius,form,flash}, zodi... }
   */
  prepare(F) {
    const v = this.cfg.visuals, su = this.starUniforms, ky = this.skyUniforms;
    this.time += F.dt || 0;
    this.updateMwModel(F.camPc);
    this.camera.fov = F.fov ?? this.cfg.camera.fovDeg; this.camera.updateProjectionMatrix();
    this.camera.position.set(0, 0, 0); this.camera.quaternion.copy(F.quat); this.camera.updateMatrixWorld(true);
    const hi = (x) => Math.fround(x);
    su.uCamHi.value.set(hi(F.camPc[0]), hi(F.camPc[1]), hi(F.camPc[2]));
    su.uCamLo.value.set(F.camPc[0] - hi(F.camPc[0]), F.camPc[1] - hi(F.camPc[1]), F.camPc[2] - hi(F.camPc[2]));
    const R = new THREE.Matrix4().makeRotationFromQuaternion(F.quat);
    const inv = new THREE.Matrix3().setFromMatrix4(R);
    const view = inv.clone().transpose();
    su.uView.value.copy(view); ky.uInvView.value.copy(inv);
    su.uFocalPx.value = this.focalPx;
    su.uBeta.value.fromArray(F.beta); su.uGamma.value = F.gamma;
    su.uExposure.value = Math.max(F.exposure, this.cfg.visuals.stars.minGain || 0);
    su.uBrightness.value = v.stars.brightness; su.uSigma.value = v.stars.psfSigmaPx; su.uHalo.value = v.stars.haloStrength; su.uHaloAmt.value = v.stars.haloFraction; su.uHaloW.value = v.stars.haloWidthPx; su.uSat.value = v.stars.colorSaturation;
    su.uMagLimit.value = v.stars.magnitudeLimit; su.uBlue.value = this.cfg.warp.visual.blueshiftScale * 1.0;
    const w = F.warp || {};
    su.uWarpDir.value.fromArray(w.dir || [0, 0, -1]); su.uWarpBeta.value = w.beta || 0; su.uWarpGamma.value = w.gamma || 1; su.uStreak.value = (w.streak || 0) * this.cfg.warp.visual.streakScale; su.uWarpDim.value = w.dim || 0;
    for (let i = 0; i < 8; i++) su.uHide.value[i] = F.hide && F.hide[i] != null ? F.hide[i] : -1;
    // sky
    const th = Math.tan(0.5 * this.camera.fov * DEG);
    ky.uTan.value.set(th * this.camera.aspect, th);
    ky.uBeta.value.fromArray(F.beta); ky.uGamma.value = F.gamma;
    ky.uWarpDir.value.fromArray(w.dir || [0, 0, -1]); ky.uWarpBeta.value = w.beta || 0; ky.uWarpGamma.value = w.gamma || 1;
    ky.uExposure.value = F.exposure; ky.uGain.value = v.milkyWay.enabled ? v.milkyWay.gain : 0;
    ky.uDetail.value = v.milkyWay.detail; ky.uGrain.value = v.milkyWay.grain; ky.uDust.value = v.milkyWay.dustContrast; ky.uBlue.value = this.cfg.warp.visual.blueshiftScale;
    ky.uMwScale.value = 1e-6 * (F.mwScale ?? 1);
    const w2 = F.warp || {}; const warping = (w2.lens || 0) > 0.01;
    su.uBeam.value = warping ? this.cfg.warp.visual.beaming : 2.0; ky.uBeam.value = warping ? this.cfg.warp.visual.beaming * 0.9 : 3.0;
    ky.uBeamCap.value = this.cfg.visuals.relativity?.skyGainCap ?? 3;
    ky.uZodi.value = F.zodi || 0; if (F.sunDir) ky.uSunDirRest.value.fromArray(F.sunDir); ky.uZodiScale.value = F.zodiScale ?? 1;
    // galaxies
    for (const m of this.galaxies) {
      const { I0, rhRad, g } = m.userData, u = m.material.uniforms;
      // brightness follows the Milky Way's gain (so relative brightness is physical); the floor keeps ultra-faint dwarfs perceptible in dark sky
      const gx = Math.max(F.exposure, v.stars.minGain || 0) * (v.milkyWay.enabled ? v.milkyWay.gain : 1) * v.galaxies.gain;
      const peakRad = Math.PI * I0 * gx;
      const darkness = Math.min(1, Math.max(0, (Math.max(F.exposure, 1) - 2e3) / 4e5));
      u.uPeak.value = Math.max(peakRad, v.galaxies.visibilityFloor * darkness);
      u.uFloor.value = 0;
      u.uColor.value.set(1, 0.96, 0.9);
      m.visible = v.galaxies.enabled;
    }
  }

  /** Render background (sky + stars + `space` scene) then optional lens, then `near` scene, then post → screen. */
  render(F, hooks = {}) {
    const r = this.renderer, v = this.cfg.visuals;
    this.prepare(F);
    r.setRenderTarget(this.sceneRT);
    r.setClearColor(0x000000, 1); r.clear(true, true, true);
    r.render(this.skyScene, this.camera);
    if (hooks.space) hooks.space(r, this.camera);           // planets, suns, belts (log depth)
    let finalRT = this.sceneRT;
    const w = F.warp || {};
    if (w.lens > 0.001) {
      const lm = this.mats.lens.uniforms;
      lm.tSrc.value = this.sceneRT.texture; lm.uStrength.value = w.lens * this.cfg.warp.visual.lensStrength; lm.uCenter.value.set(w.center[0], w.center[1]); lm.uRadius.value = w.radius; lm.uTime.value = this.time;
      this.quad(this.mats.lens, this.lensRT, true);
      finalRT = this.lensRT;
    }
    if (hooks.near) { r.setRenderTarget(finalRT); r.clearDepth(); hooks.near(r); }

    // bloom
    const b = this.bloomRTs, bs = v.bloom;
    let src = finalRT.texture;
    for (let i = 0; i < b.length; i++) {
      const m = this.mats.down.uniforms;
      m.tSrc.value = src; m.uKaris.value = i === 0 ? 1 : 0; m.uCap.value = i === 0 ? (v.bloom.inputCap || 14) : 6e4;
      m.uTexel.value.set(1 / (i === 0 ? this.W : b[i - 1].w), 1 / (i === 0 ? this.H : b[i - 1].h));
      this.quad(this.mats.down, b[i].down); src = b[i].down.texture;
    }
    let up = b[b.length - 1].down.texture;
    for (let i = b.length - 2; i >= 0; i--) {
      const m = this.mats.up.uniforms;
      m.tSrc.value = up; m.tAdd.value = b[i].down.texture; m.uTexel.value.set(1 / b[i + 1].w, 1 / b[i + 1].h); m.uRadius.value = bs.radius; m.uMix.value = 0.55;
      this.quad(this.mats.up, b[i].up); up = b[i].up.texture;
    }
    const cm = this.mats.composite.uniforms, tm = v.tonemap;
    cm.tScene.value = finalRT.texture; cm.tBloom.value = up;
    cm.uBloom.value = bs.strength * v.intensity; cm.uSaturation.value = tm.saturation; cm.uContrast.value = tm.contrast; cm.uGrain.value = tm.filmGrain; cm.uVignette.value = tm.vignette; cm.uCA.value = tm.chromaticAberration;
    cm.uTime.value = this.time; cm.uFlash.value = (w.flash || 0) * this.cfg.warp.visual.flashScale; if (w.center) cm.uFlashPos.value.set(w.center[0], w.center[1]);
    r.setViewport(0, 0, this.outW, this.outH);
    this.quad(this.mats.composite, null);
  }
}
