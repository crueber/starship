// The near scene: ship model, its lighting, the chase camera and the warp bubble (metre units, separate depth range).
import * as THREE from 'three';
import { buildShip } from './shipModel.js';
import { clamp, smoothstep } from '../core/math.js';

const BUBBLE_VERT = /* glsl */ `
varying vec3 vN; varying vec3 vP; varying vec3 vView;
void main() {
  vP = position; vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}`;
const BUBBLE_FRAG = /* glsl */ `
precision highp float;
varying vec3 vN; varying vec3 vP; varying vec3 vView;
uniform float uForm;        // 0..1 bubble strength
uniform float uTime;
uniform float uSpeed;       // 0..1 log speed
uniform float uPulse;       // collapse / formation shock 0..1
uniform float uOpacity;
uniform vec3 uForwardView;  // ship forward in view space
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y); }
float fbm2(vec2 p){ float a=0.5,s=0.0; for(int i=0;i<4;i++){ s+=a*noise(p); p*=2.1; a*=0.5;} return s; }
// hexagonal tiling distance
float hexEdge(vec2 p){
  const vec2 s = vec2(1.0, 1.7320508);
  vec4 hC = floor(vec4(p, p - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
  vec4 h = vec4(p - hC.xy * s, p - (hC.zw + 0.5) * s);
  vec2 q = dot(h.xy,h.xy) < dot(h.zw,h.zw) ? h.xy : h.zw;
  q = abs(q); return max(dot(q, s * 0.5), q.x);
}
void main() {
  vec3 n = normalize(vN); vec3 v = normalize(vView);
  float fres = pow(1.0 - abs(dot(n, v)), 2.4);
  // position along the ship axis: +1 ahead (-Z in model space), -1 behind
  float z = -vP.z / 70.0;
  vec3 pn = normalize(vP);
  float rxy = length(pn.xz);
  // the field is a flat lens (wide in the ship's X/Y plane, thin along the axis): ripples travel outward across it, quickening with speed
  float rings = 0.5 + 0.5 * sin(rxy * 16.0 - uTime * (2.5 + 9.0 * uSpeed));
  rings = pow(rings, 6.0) * smoothstep(0.1, 0.5, abs(pn.y));
  // hexagonal lattice on the two broad faces (planar mapping: no pole pinch), drifting slowly
  float cells = hexEdge(pn.xz * 9.0 + vec2(uTime * (0.25 + 0.5 * uSpeed), 0.0) + noise(pn.xz * 3.0 + uTime * 0.3) * 0.4);
  float lattice = smoothstep(0.43, 0.5, cells) * (0.35 + 0.65 * fbm2(pn.xz * 5.0 + uTime * 0.5)) * smoothstep(0.12, 0.55, abs(pn.y));
  float shimmer = fbm2(pn.xz * 6.0 + vec2(uTime * 0.5, -uTime * 0.7 * (1.0 + uSpeed)));
  // blue-white leading wall → amber trailing wall (Doppler of the compressed / stretched space)
  vec3 front = vec3(0.55, 0.82, 1.35), back = vec3(1.2, 0.5, 0.18);
  vec3 col = mix(back, front, smoothstep(-0.7, 0.7, pn.z * -1.0));
  float rim = smoothstep(0.15, 1.0, fres);
  float wall = rim * 1.15 + lattice * (0.05 + 0.5 * rim) + rings * 0.12 * rim + shimmer * 0.05 * (0.3 + rim);
  wall += uPulse * (0.35 + 1.2 * rim);
  float a = wall * uForm * uOpacity;
  gl_FragColor = vec4(col * a * 0.9, 1.0);
}`;


// Warp flow: streaks of starlight / spacetime streaming past the lens, parting around it. Gives the unmistakable sense of motion that a static sky cannot.
const FLOW_VERT = /* glsl */ `
attribute vec4 aP; attribute vec2 aC;
uniform float uTime, uFlow, uLen, uSpan, uBub, uWidth, uAmp;
uniform vec2 uRes;
varying vec3 vCol; varying float vA; varying float vEdge; varying float vSide;
vec3 place(float zc, float rr, float th, float off) {
  float z = (zc - 0.5) * uSpan - off;
  float g = exp(-z * z / (2.0 * pow(1.25 * uBub, 2.0)));
  float c = cos(th), s = sin(th);
  float rho = 1.0 / sqrt(c * c / 1.0 + s * s / 0.07);                      // the obstacle is a flat lens in the ship's X/Z plane (thin in Y): the stream parts around that ellipse
  float r = sqrt(rr * rr + pow(uBub * 1.08 * g * rho, 2.0));
  return vec3(r * c, r * s, z);
}
void main() {
  float jit = 0.55 + 0.9 * aP.w;
  float zc = fract(aP.z + uTime * uFlow * jit / uSpan);
  float rr = 45.0 + 1800.0 * pow(aP.y, 1.7);
  vec3 ph = place(zc, rr, aP.x, 0.0), pt = place(zc, rr, aP.x, uLen * jit);
  mat4 mvp = projectionMatrix * modelViewMatrix;
  vec4 ch = mvp * vec4(ph, 1.0), ct = mvp * vec4(pt, 1.0);
  float ok = (ch.w > 8.0 && ct.w > 8.0) ? 1.0 : 0.0;
  vec2 sh = ch.xy / max(ch.w, 1e-3), st = ct.xy / max(ct.w, 1e-3);
  vec2 d = (sh - st) * uRes * 0.5; float l = length(d);
  vec2 dir = l > 1e-3 ? d / l : vec2(1.0, 0.0), n = vec2(-dir.y, dir.x);
  vec4 c = aC.x > 0.5 ? ch : ct;
  c.xy += n * aC.y * uWidth * 2.0 / uRes * c.w;
  gl_Position = c;
  float fadeSpan = smoothstep(0.0, 0.12, zc) * (1.0 - smoothstep(0.86, 1.0, zc));
  float tAft = smoothstep(-uSpan * 0.18, uSpan * 0.18, ph.z);                                  // ahead of the lens: blue-white, behind: amber
  vCol = mix(vec3(0.55, 0.8, 1.35), vec3(1.25, 0.55, 0.22), tAft) * (0.45 + 0.8 * aP.w);
  vA = ok * fadeSpan * smoothstep(10.0, 70.0, max(ch.w, 0.0)) * uAmp / (1.0 + rr / 700.0);
  vEdge = aC.x; vSide = aC.y;
}`;
const FLOW_FRAG = /* glsl */ `
precision highp float;
varying vec3 vCol; varying float vA; varying float vEdge; varying float vSide;
void main() {
  float e = clamp(vEdge, 0.0, 1.0);
  float a = vA * e * e * (1.0 - min(vSide * vSide, 1.0));
  gl_FragColor = vec4(vCol * a, 1.0);
}`;

export class ShipView {
  constructor(gfx, cfg) {
    this.gfx = gfx; this.cfg = cfg;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(cfg.camera.fovDeg, 1, 0.15, 6000);
    this.ship = buildShip(cfg);
    this.scene.add(this.ship.root);
    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = !!cfg.visuals.ship.shadows;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera; sc.left = -45; sc.right = 45; sc.top = 45; sc.bottom = -45; sc.near = 1; sc.far = 400;
    this.sun.shadow.bias = -0.0004; this.sun.shadow.normalBias = 0.15;
    this.scene.add(this.sun); this.scene.add(this.sun.target);
    this.fill = new THREE.DirectionalLight(0xaabbff, 0); this.scene.add(this.fill);
    this.amb = new THREE.AmbientLight(0xffffff, 0.0); this.scene.add(this.amb);
    this._buildEnv();
    // warp bubble
    this.bubbleMat = new THREE.ShaderMaterial({
      vertexShader: BUBBLE_VERT, fragmentShader: BUBBLE_FRAG, transparent: true, depthWrite: false, side: THREE.FrontSide,
      blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
      uniforms: { uForm: { value: 0 }, uTime: { value: 0 }, uSpeed: { value: 0 }, uPulse: { value: 0 }, uOpacity: { value: 1 }, uForwardView: { value: new THREE.Vector3(0, 0, -1) } },
    });
    this.bubble = new THREE.Mesh(new THREE.SphereGeometry(70, 96, 64), this.bubbleMat);
    this.bubble.scale.set(1.9, 0.5, 1.7); this.bubble.renderOrder = 50; this.bubble.visible = false; this.bubble.frustumCulled = false;
    this.scene.add(this.bubble);
    // warp flow streaks
    {
      const N = 650, pos = new Float32Array(N * 4 * 3), aP = new Float32Array(N * 4 * 4), aC = new Float32Array(N * 4 * 2), idx = new Uint32Array(N * 6);
      let sd = 12345; const rnd = () => ((sd = (sd * 1664525 + 1013904223) >>> 0) / 4294967296);
      for (let i = 0; i < N; i++) {
        const th = rnd() * Math.PI * 2, ry = rnd(), zp = rnd(), w = rnd();
        for (let k = 0; k < 4; k++) { const o = i * 4 + k; aP.set([th, ry, zp, w], o * 4); aC.set([k < 2 ? 0 : 1, k % 2 ? 1 : -1], o * 2); }
        idx.set([i * 4, i * 4 + 1, i * 4 + 2, i * 4 + 1, i * 4 + 3, i * 4 + 2], i * 6);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aP', new THREE.BufferAttribute(aP, 4)); g.setAttribute('aC', new THREE.BufferAttribute(aC, 2)); g.setIndex(new THREE.BufferAttribute(idx, 1));
      this.flowMat = new THREE.ShaderMaterial({
        vertexShader: FLOW_VERT, fragmentShader: FLOW_FRAG, transparent: true, depthWrite: false, depthTest: true, side: THREE.DoubleSide,
        blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
        uniforms: { uTime: { value: 0 }, uFlow: { value: 0 }, uLen: { value: 0 }, uSpan: { value: 3600 }, uBub: { value: 120 }, uWidth: { value: 1.6 }, uAmp: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } },
      });
      this.flow = new THREE.Mesh(g, this.flowMat); this.flow.frustumCulled = false; this.flow.renderOrder = 40; this.flow.visible = false;
      this.scene.add(this.flow);
    }
    this.t = 0;
  }

  _buildEnv() {
    const r = this.gfx.renderer;
    const pm = new THREE.PMREMGenerator(r);
    const envScene = new THREE.Scene();
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `precision highp float; varying vec3 vD;
        void main(){ float d = vD.y;                       // +Y = toward the nearest big body (reflected light)
          float g = smoothstep(-0.15, 1.0, d);
          vec3 c = vec3(0.0) + vec3(1.0, 1.0, 1.0) * pow(g, 1.4);
          // faint cool floor so the far side is not pure black
          c += vec3(0.02, 0.025, 0.035);
          gl_FragColor = vec4(c, 1.0); }`,
    });
    envScene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 32, 16), m));
    this.envRT = pm.fromScene(envScene, 0.04);
    this.scene.environment = this.envRT.texture;
    pm.dispose();
  }

  /**
   * S: { quat (ship→world), sunDir (unit, world), sunE (irradiance×colour as THREE.Color-ish [r,g,b]), exposure, bodyDir (unit world, toward nearest big body) , bodyShine (irradiance), 
   *      cam: {yaw, pitch, dist}, time, throttle, warp:{form, speed01, pulse}, aspect, fov }
   * Returns the camera world-orientation quaternion and the camera offset (metres, world axes) so the far scene can follow.
   */
  update(S) {
    this.t += S.dt || 0;
    const ship = this.ship.root; ship.quaternion.copy(S.quat);
    ship.visible = S.cam.dist > this.cfg.ship.lengthM * this.cfg.camera.hideShipBelowLengths;          // first person: the camera sits inside the hull, so draw the cockpit view clear of our own geometry
    // chase camera: orbit direction expressed in ship frame
    const { yaw, pitch, dist, up } = S.cam;
    const cp = Math.cos(pitch), dir = new THREE.Vector3(Math.sin(yaw) * cp, Math.sin(pitch), Math.cos(yaw) * cp);
    // look at the ship from `dir` with the ship's own "up" as the horizon: no roll drift, no 180° ambiguity, and the view can swing over the poles without sticking
    // (past the pole the up vector flips with cos(pitch), which keeps the motion continuous)
    const fwdS = dir.clone().negate(), upS = new THREE.Vector3(0, cp >= 0 ? 1 : -1, 0);
    const rightS = new THREE.Vector3().crossVectors(fwdS, upS);
    if (rightS.lengthSq() < 1e-8) rightS.set(Math.cos(yaw), 0, -Math.sin(yaw)); rightS.normalize();
    const upC = new THREE.Vector3().crossVectors(rightS, fwdS);
    const qOrbit = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(rightS, upC, fwdS.clone().negate()));
    const offsetShip = dir.clone().multiplyScalar(dist).add(new THREE.Vector3(0, up, 0));
    // free-floating camera: it keeps its own orientation, and only rides with the ship when you are inside it (first person)
    const wShip = 1 - smoothstep(this.cfg.ship.lengthM * 0.15, this.cfg.ship.lengthM * 1.0, dist);
    const frame = (S.camFrame || S.quat).clone().slerp(S.quat, wShip);
    const camQuat = frame.clone().multiply(qOrbit);
    const offsetWorld = offsetShip.clone().applyQuaternion(frame);
    this.camera.position.copy(offsetWorld); this.camera.quaternion.copy(camQuat);
    this.camera.near = Math.max(0.15, (dist - 60) * 0.1); this.camera.far = dist + 4500;            // zoomed far out the ship is still drawn, with depth precision scaled to its distance
    this.camera.fov = S.fov; this.camera.aspect = S.aspect; this.camera.updateProjectionMatrix(); this.camera.updateMatrixWorld(true);

    // lighting. Radiance of a white Lambert surface = E (solar constants) in our units, three expects intensity = pi * E * exposure
    const ex = S.exposure, PI = Math.PI;
    const sc = S.sunE;                                    // [r,g,b] irradiance
    const vis = S.sunVisible ?? 1;
    this.sun.color.setRGB(1, 1, 1);
    this.sun.intensity = PI * ex * 1.0 * Math.max(sc[0] * 0.2126 + sc[1] * 0.7152 + sc[2] * 0.0722, 0) * vis;
    this.sun.color.setRGB(sc[0] / (sc[1] || 1), 1, sc[2] / (sc[1] || 1)); this.sun.color.multiplyScalar(1);
    const sd = new THREE.Vector3().fromArray(S.sunDir);
    this.sun.position.copy(sd).multiplyScalar(200); this.sun.target.position.set(0, 0, 0);
    this.sun.visible = vis > 0.001;
    this.sun.castShadow = !!this.cfg.visuals.ship.shadows;
    // environment: reflected planet light + a small floor
    const shine = S.bodyShine || 0;
    this.scene.environmentIntensity = PI * ex * (shine * 1.0 + 4e-9 * 0 + 0.0) + 0.0;
    const bd = new THREE.Vector3().fromArray(S.bodyDir || [0, 1, 0]);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), bd);
    this.scene.environmentRotation = new THREE.Euler().setFromQuaternion(q);
    // starlight fill (never fully black so the ship stays readable in the dark; a few % like a real camera's veiling light)
    this.amb.intensity = PI * ex * (S.ambientE || 0) + 0.015 * (1 - Math.min(1, S.warp.form)) * (this.cfg.visuals.ship.shadowFill ?? 1);
    this._updateOthers(S);
    this.ship.update(S.dt || 0, this.t, { gimbal: S.gimbal, engines: S.engines, speed01: S.warp.speed01, throttle: S.throttle, warp: S.warp.form, engineOn: true });

    // warp bubble
    const wf = S.warp.form;
    this.bubble.visible = wf > 0.002 || S.warp.pulse > 0.01;
    if (this.bubble.visible) {
      const u = this.bubbleMat.uniforms;
      u.uForm.value = wf; u.uTime.value = this.t; u.uSpeed.value = S.warp.speed01; u.uPulse.value = S.warp.pulse; u.uOpacity.value = this.cfg.warp.visual.bubbleOpacity;
      const grow = 0.35 + 0.65 * smoothstep(0, 0.6, wf);
      this.bubble.scale.set(1.9 * grow, 0.5 * grow, 1.7 * grow * (1 + 0.12 * S.warp.speed01));
      this.bubble.quaternion.copy(S.quat);
    }
    // flow streaks follow the speed: slow drift at 1 c, a roaring stream at the top step
    {
      const s01 = S.warp.speed01, amp = wf * (0.7 - 0.4 * s01) * this.cfg.warp.visual.streakScale;
      this.flow.visible = amp > 0.004;
      if (this.flow.visible) {
        const u = this.flowMat.uniforms;
        u.uTime.value = this.t; u.uFlow.value = 350 + 9000 * Math.pow(s01, 1.2); u.uLen.value = 40 + 900 * s01; u.uAmp.value = 0.22 * amp; u.uBub.value = 133 * (0.35 + 0.65 * smoothstep(0, 0.6, wf));
        u.uRes.value.set(this.gfx.W, this.gfx.H); u.uWidth.value = Math.max(1.2, 1.8 * this.gfx.W / 1600);
        this.flow.quaternion.copy(S.quat);
      }
    }
    return { camQuat, offsetWorld };
  }

  /** other visitors close enough to be drawn as ships: S.others = [{ relKm:[x,y,z], quat:[x,y,z,w], eng:[rocket,cruise,warp] }] (relative to this ship, world axes) */
  _updateOthers(S) {
    const list = S.others || [], pool = this.others || (this.others = []);
    while (pool.length < Math.min(list.length, this.cfg.visitors.maxModels)) { const m = buildShip(this.cfg); m.root.visible = false; this.scene.add(m.root); pool.push(m); }
    pool.forEach((m, i) => {
      const o = list[i]; m.root.visible = !!o; if (!o) return;
      m.root.position.set(o.relKm[0] * 1000, o.relKm[1] * 1000, o.relKm[2] * 1000); m.root.quaternion.set(o.quat[0], o.quat[1], o.quat[2], o.quat[3]).normalize();
      m.update(S.dt || 0, this.t, { engines: { rocket: o.eng[0], cruise: o.eng[1], warp: o.eng[2] }, speed01: o.eng[2], throttle: o.eng[0], warp: 0, gimbal: { x: 0, y: 0 } });
    });
  }

  render(renderer) {
    renderer.render(this.scene, this.camera);
  }
}
