// "ISV Meridian": a procedural interplanetary / interstellar ship. Units: metres. Forward = -Z, up = +Y, starboard = +X.
import * as THREE from 'three';
import { mulberry32 } from '../core/math.js';

function hullTexture(seed, size = 1024) {
  const rng = mulberry32(seed);
  const c = document.createElement('canvas'); c.width = size; c.height = size / 2;
  const g = c.getContext('2d');
  g.fillStyle = '#b9bcc0'; g.fillRect(0, 0, c.width, c.height);
  // panels: irregular grid with tonal variation
  const cols = 28, rows = 8;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const w = c.width / cols, h = c.height / rows;
    const t = 0.82 + rng() * 0.2;
    const v = Math.round(190 * t); g.fillStyle = `rgb(${v},${v + 2},${v + 5})`;
    g.fillRect(i * w + 1, j * h + 1, w - 2, h - 2);
    if (rng() < 0.12) { g.fillStyle = `rgba(40,44,52,${0.15 + rng() * 0.25})`; g.fillRect(i * w + 3, j * h + 3, w * (0.3 + rng() * 0.6), h * (0.3 + rng() * 0.6)); }
    if (rng() < 0.08) { g.fillStyle = 'rgba(20,20,24,0.55)'; g.fillRect(i * w + w * 0.2, j * h + h * 0.4, w * 0.6, 2); }
  }
  // fine seams
  g.strokeStyle = 'rgba(30,32,38,0.55)'; g.lineWidth = 1;
  for (let i = 0; i <= cols; i++) { g.beginPath(); g.moveTo(i * c.width / cols, 0); g.lineTo(i * c.width / cols, c.height); g.stroke(); }
  for (let j = 0; j <= rows; j++) { g.beginPath(); g.moveTo(0, j * c.height / rows); g.lineTo(c.width, j * c.height / rows); g.stroke(); }
  // accent livery bands & registry
  g.fillStyle = '#d2672b'; g.fillRect(0, c.height * 0.18, c.width, 7);
  g.fillStyle = '#1f2a3a'; g.fillRect(0, c.height * 0.58, c.width, 4);
  g.fillStyle = 'rgba(25,28,34,0.9)'; g.font = 'bold 28px Menlo, monospace';
  g.fillText('MERIDIAN  ISV-0471', c.width * 0.18, c.height * 0.5);
  g.fillText('MERIDIAN  ISV-0471', c.width * 0.68, c.height * 0.5);
  // weathering / micrometeoroid pitting
  for (let k = 0; k < 2200; k++) { g.fillStyle = `rgba(20,20,24,${0.05 + rng() * 0.15})`; g.fillRect(rng() * c.width, rng() * c.height, 1 + rng() * 2, 1 + rng() * 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  // bump from luminance
  const b = document.createElement('canvas'); b.width = c.width; b.height = c.height;
  const bg = b.getContext('2d'); bg.drawImage(c, 0, 0);
  const bt = new THREE.CanvasTexture(b); bt.wrapS = bt.wrapT = THREE.RepeatWrapping;
  return { map: t, bump: bt };
}

function panelTexture(kind) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 512; const g = c.getContext('2d');
  if (kind === 'radiator') {
    g.fillStyle = '#d9dadc'; g.fillRect(0, 0, 512, 512);
    g.strokeStyle = '#7e8288'; g.lineWidth = 2;
    for (let i = 0; i <= 16; i++) { g.beginPath(); g.moveTo(i * 32, 0); g.lineTo(i * 32, 512); g.stroke(); g.beginPath(); g.moveTo(0, i * 32); g.lineTo(512, i * 32); g.stroke(); }
    g.fillStyle = 'rgba(40,42,48,0.18)'; for (let i = 0; i < 16; i += 2) g.fillRect(0, i * 32, 512, 32);
  } else {
    g.fillStyle = '#0c1424'; g.fillRect(0, 0, 512, 512);
    g.strokeStyle = '#2f4d86'; g.lineWidth = 2;
    for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, 512); g.stroke(); }
    for (let j = 0; j <= 16; j++) { g.beginPath(); g.moveTo(0, j * 32); g.lineTo(512, j * 32); g.stroke(); }
    g.fillStyle = 'rgba(70,120,200,0.12)'; for (let i = 0; i < 8; i++) for (let j = 0; j < 16; j++) if ((i + j) % 2) g.fillRect(i * 64 + 2, j * 32 + 2, 60, 28);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

function lathe(profile, seg = 64) {
  const pts = profile.map(([r, z]) => new THREE.Vector2(r, z));
  const geo = new THREE.LatheGeometry(pts, seg);
  geo.rotateX(Math.PI / 2);          // lathe axis was Y; make it Z (nose toward -Z handled by profile sign)
  geo.computeVertexNormals();
  return geo;
}

export function buildShip(cfg) {
  const root = new THREE.Group();
  const hull = hullTexture(471);
  const rad = panelTexture('radiator'), pv = panelTexture('pv');
  const metal = (color, rough = 0.5, met = 0.7) => new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: met });
  const hullMat = new THREE.MeshStandardMaterial({ map: hull.map, bumpMap: hull.bump, bumpScale: 1.4, roughness: 0.52, metalness: 0.55 });
  hullMat.map.repeat.set(2, 3);
  const darkMat = metal(0x20242c, 0.6, 0.6);
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc9a24a, roughness: 0.32, metalness: 0.95 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x0a1018, roughness: 0.08, metalness: 0.2, emissive: 0xffd9a0, emissiveIntensity: 0.0 });

  // ── main hull: nose at -Z. Lathe profile in (radius, z)
  const prof = [[0.01, -37.5], [0.7, -36.6], [1.7, -34.4], [2.7, -30.8], [3.4, -26.5], [3.85, -20.5], [4.1, -12], [4.2, -2], [4.2, 8], [4.0, 14], [3.6, 19.5], [3.1, 23.5], [3.0, 25.5]];
  const hullGeo = lathe(prof.map(([r, z]) => [r, z]), 72);
  const hullMesh = new THREE.Mesh(hullGeo, hullMat); hullMesh.castShadow = hullMesh.receiveShadow = true; root.add(hullMesh);

  // bridge / command module (forward dorsal)
  const bridge = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), hullMat);
  bridge.scale.set(2.6, 1.7, 6.6); bridge.position.set(0, 3.5, -24.5); bridge.castShadow = bridge.receiveShadow = true; root.add(bridge);
  // viewport strip
  const win = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.55, 3.6), glassMat); win.position.set(0, 4.6, -27.6); win.rotation.x = 0.28; root.add(win);

  // ── engine section
  const engBody = new THREE.Mesh(new THREE.CylinderGeometry(3.15, 3.35, 5.6, 40), darkMat); engBody.rotation.x = Math.PI / 2; engBody.position.set(0, 0, 28.0); engBody.castShadow = true; root.add(engBody);
  const bellProf = [[2.1, 30.6], [2.6, 31.8], [3.3, 33.8], [3.8, 36.2], [3.8, 36.5], [3.55, 36.5], [3.1, 34.2], [2.4, 32.0], [1.8, 30.8]];
  const bell = new THREE.Mesh(lathe(bellProf, 48), new THREE.MeshStandardMaterial({ color: 0x3a3d44, roughness: 0.35, metalness: 0.9, side: THREE.DoubleSide })); bell.castShadow = true; root.add(bell);
  // radial gradient used for the nozzle glow discs and the halo sprite (white-hot centre, blue skirt)
  const gradTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,250,235,1)'); gr.addColorStop(0.18, 'rgba(255,214,140,0.95)'); gr.addColorStop(0.38, 'rgba(255,150,60,0.5)'); gr.addColorStop(0.68, 'rgba(255,100,30,0.14)'); gr.addColorStop(1, 'rgba(255,80,20,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const additive = { map: gradTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false };
  const glowMat = new THREE.MeshBasicMaterial({ ...additive, opacity: 0.9, side: THREE.DoubleSide });
  // glowing exit plane of the bell (seen straight on from behind) and a hot throat deeper inside
  const engineGlow = new THREE.Mesh(new THREE.CircleGeometry(3.45, 40), glowMat); engineGlow.position.set(0, 0, 36.3); engineGlow.rotation.y = Math.PI; root.add(engineGlow);
  const throatMat = new THREE.MeshBasicMaterial({ ...additive, opacity: 0.9, side: THREE.DoubleSide });
  const throat = new THREE.Mesh(new THREE.CircleGeometry(2.0, 32), throatMat); throat.position.set(0, 0, 31.4); throat.rotation.y = Math.PI; root.add(throat);
  // soft halo that always faces the camera, so the burn reads from any side (bloom does the rest)
  const haloMat = new THREE.SpriteMaterial({ ...additive, opacity: 0.0, color: 0xffb070 });
  const halo = new THREE.Sprite(haloMat); halo.position.set(0, 0, 37.5); halo.scale.set(13, 13, 1); root.add(halo);
  // gold radiation shield ring behind the crew section
  const shield = new THREE.Mesh(new THREE.CylinderGeometry(4.35, 4.35, 0.5, 48), goldMat); shield.rotation.x = Math.PI / 2; shield.position.set(0, 0, 11.5); shield.castShadow = true; root.add(shield);
  const shield2 = shield.clone(); shield2.position.z = 12.4; shield2.scale.set(0.96, 1, 0.96); root.add(shield2);

  // ── cargo / tank spine bands (greebles)
  const rng = mulberry32(99);
  for (let i = 0; i < 38; i++) {
    const w = 0.5 + rng() * 1.6, h = 0.2 + rng() * 0.4, d = 0.8 + rng() * 2.6;
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), rng() < 0.2 ? darkMat : hullMat);
    const a = rng() * Math.PI * 2, z = -18 + rng() * 34;
    const rr = (z < -12 ? 3.9 : 4.2) + h * 0.3;
    b.position.set(Math.cos(a) * rr, Math.sin(a) * rr, z); b.rotation.z = a - Math.PI / 2; b.castShadow = b.receiveShadow = true; root.add(b);
  }
  // antenna mast + dish
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 5.5, 8), darkMat); mast.position.set(0.9, 6.0, -3); root.add(mast);
  const dish = new THREE.Mesh(new THREE.SphereGeometry(1.5, 24, 12, 0, Math.PI * 2, 0, Math.PI / 3), metal(0xdddddd, 0.3, 0.9)); dish.position.set(0.9, 8.9, -3); dish.rotation.x = -0.5; dish.castShadow = true; root.add(dish);
  const mast2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 7, 6), darkMat); mast2.position.set(-1.3, 6.4, 9); root.add(mast2);

  // ── radiator wings (port & starboard), swept slightly aft
  const radMat = new THREE.MeshStandardMaterial({ map: rad, roughness: 0.55, metalness: 0.3, side: THREE.DoubleSide });
  const wings = [];
  for (const s of [-1, 1]) {
    const pylon = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.35, 1.6), hullMat); pylon.position.set(s * 6.6, 0.4, 1); pylon.castShadow = true; root.add(pylon);
    const wing = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.12, 15), radMat); wing.position.set(s * 14.4, 0.4, 3.2); wing.rotation.y = s * -0.08; wing.castShadow = wing.receiveShadow = true; root.add(wing); wings.push(wing);
    const edge = new THREE.Mesh(new THREE.BoxGeometry(11.7, 0.22, 0.3), goldMat); edge.position.set(s * 14.4, 0.4, -4.4); root.add(edge);
  }
  // ── warp nacelles with coil rings
  const coilMats = [], shells = [];
  const nacelles = new THREE.Group();
  for (const s of [-1, 1]) {
    const strut = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.5, 1.2), darkMat); strut.position.set(s * 6.4, -2.2, 8); strut.rotation.z = s * -0.18; root.add(strut);
    const nac = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.0, 29, 24), hullMat); nac.rotation.x = Math.PI / 2; nac.position.set(s * 9.2, -3.3, 8); nac.castShadow = nac.receiveShadow = true; root.add(nac);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(1.15, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), hullMat); cap.rotation.x = -Math.PI / 2; cap.position.set(s * 9.2, -3.3, -6.5); cap.castShadow = true; root.add(cap);
    for (let k = 0; k < 8; k++) {
      const m = new THREE.MeshStandardMaterial({ color: 0x0a1624, emissive: 0x4aa8ff, emissiveIntensity: 0.0, roughness: 0.3, metalness: 0.4 });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.26, 0.14, 10, 28), m); ring.position.set(s * 9.2, -3.3, -3.5 + k * 2.9); root.add(ring); coilMats.push(m);
    }
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.95, 1.5, 24), darkMat); tail.rotation.x = -Math.PI / 2; tail.position.set(s * 9.2, -3.3, 23.4); root.add(tail);
    const shellMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(1.52, 1.32, 29.5, 28, 1, true), shellMat); shell.rotation.x = Math.PI / 2; shell.position.set(s * 9.2, -3.3, 8); root.add(shell); shells.push(shellMat);
    const capGlow = new THREE.Mesh(new THREE.SphereGeometry(1.3, 16, 10), shellMat.clone()); capGlow.position.set(s * 9.2, -3.3, -6.6); root.add(capGlow); shells.push(capGlow.material);
    const warpGlowSprite = new THREE.Mesh(new THREE.CircleGeometry(0.9, 20), new THREE.MeshBasicMaterial({ color: 0x66bbff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); warpGlowSprite.position.set(s * 9.2, -3.3, 24.3); warpGlowSprite.rotation.y = Math.PI; root.add(warpGlowSprite); nacelles.add(warpGlowSprite);
  }
  // RCS quads
  for (const z of [-30, 20]) for (const a of [0, 1, 2, 3]) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.9), darkMat); const ang = a * Math.PI / 2 + Math.PI / 4; const rr = z < 0 ? 3.0 : 3.55;
    b.position.set(Math.cos(ang) * rr, Math.sin(ang) * rr, z); b.rotation.z = ang - Math.PI / 2; root.add(b);
  }
  // ── navigation lights
  const lights = [];
  const lightDefs = [[-18.8, 0.7, 5.0, 0xff2a2a, 'port'], [18.8, 0.7, 5.0, 0x2aff55, 'stbd'], [0, 3.9, 24.2, 0xffffff, 'tail'], [0, -4.4, -22, 0xffffff, 'strobe']];
  for (const [x, y, z, col, kind] of lightDefs) {
    const m = new THREE.MeshBasicMaterial({ color: col, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), m); s.position.set(x, y, z); root.add(s); lights.push({ mesh: s, kind, mat: m });
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ color: col, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false, map: haloTexture() }));
    halo.scale.set(3.0, 3.0, 1); halo.position.copy(s.position); root.add(halo); lights[lights.length - 1].halo = halo;
  }

  // ── engine plume (additive, shader-driven)
  const plumeMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uPower: { value: 0 }, uTime: { value: 0 }, uColor: { value: new THREE.Color(1.0, 0.5, 0.14) } },
    vertexShader: 'varying vec2 vUv; varying vec3 vP; void main(){ vUv=uv; vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader: `precision highp float; varying vec2 vUv; varying vec3 vP; uniform float uPower; uniform float uTime; uniform vec3 uColor;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
      void main(){ float t = vUv.y;   // 0 at nozzle, 1 at tip
        float core = pow(1.0 - t, 1.5);
        float tur = n(vec2(vUv.x*8.0, t*6.0 - uTime*11.0))*0.6 + n(vec2(vUv.x*16.0, t*12.0 - uTime*17.0))*0.4;
        float edge = 1.0 - abs(vUv.x*2.0-1.0);
        // standard chemical-rocket flame: white-hot core, yellow, orange skirt, with a few shock diamonds along the axis
        float diamonds = 0.78 + 0.22 * cos(t * 38.0 - uTime * 2.0) * smoothstep(0.0, 0.25, t) * (1.0 - t);
        float a = core * (0.5 + 0.7*tur) * smoothstep(0.0, 0.55, edge) * uPower * diamonds;
        vec3 hot = vec3(1.0, 0.97, 0.88), mid = vec3(1.0, 0.72, 0.28), cool = uColor;
        float h = smoothstep(0.35, 1.0, edge) * (1.0 - t * 0.7);
        vec3 c = mix(mix(cool, mid, smoothstep(0.1, 0.6, edge + 0.2 - t * 0.5)), hot, h * h) * a;
        gl_FragColor = vec4(c*1.0, 1.0); }`,
  });
  const plume = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 3.2, 1, 32, 1, true), plumeMat);
  plume.geometry.translate(0, 0.5, 0); plume.rotation.x = Math.PI / 2; plume.position.set(0, 0, 36.2); plume.frustumCulled = false; root.add(plume);
  // CylinderGeometry uv.y runs bottom→top; translate so that y=0 is nozzle and the tip is +Z after rotation – keep uv.y=0 at the nozzle
  plume.userData.baseLen = 1;

  // gimbal: the bell, its glows and the exhaust tilt together about the throat
  const gimbal = new THREE.Group(); const PIV = 30.6; gimbal.position.set(0, 0, PIV);
  for (const o of [bell, engineGlow, throat, halo, plume]) { o.position.z -= PIV; gimbal.add(o); }
  root.add(gimbal);
  root.traverse((o) => { if (o.isMesh && o.material && o.material.isMeshStandardMaterial) { o.castShadow = o.castShadow || false; } });

  const api = {
    root, hullMat, coilMats, engineGlow, plume, plumeMat, lights, nacelles,
    update(dt, t, s) {
      // s: { throttle (0..1), warp (0..1), engineOn }
      if (s.gimbal) { gimbal.rotation.x += (s.gimbal.x - gimbal.rotation.x) * 1; gimbal.rotation.y += (s.gimbal.y - gimbal.rotation.y) * 1; }
      plumeMat.uniforms.uTime.value = t;
      // ROCKET (orbital regime): standard rocket exhaust at the bell
      const p = clamp01(s.engines ? s.engines.rocket : s.throttle);
      plumeMat.uniforms.uPower.value = p * cfg.visuals.ship.engineGlow;
      const len = 4 + 26 * Math.pow(p, 0.8);
      plume.scale.set(0.8 + 0.4 * p, len, 0.8 + 0.4 * p);
      plume.visible = p > 0.02;
      glowMat.opacity = p > 0.02 ? 0.2 + 0.75 * p : 0; throatMat.opacity = p > 0.02 ? 0.3 + 0.7 * p : 0; haloMat.opacity = p > 0.02 ? (0.08 + 0.34 * p) * cfg.visuals.ship.engineGlow : 0;
      halo.scale.setScalar(10 + 8 * p);
      // NACELLES: soft white while cruising (grows with the drive), soft blue thrum while warping (depends on the requested speed)
      const c = clamp01(s.engines ? s.engines.cruise : 0), w = clamp01(s.engines ? s.engines.warp : s.warp), sp = s.speed01 || 0;
      const mixBlue = w / (c + w + 1e-6), thrum = w > 0.01 ? 0.78 + 0.22 * Math.sin(t * (2.2 + 6.0 * sp) * Math.PI * 2 * 0.5) : 1;
      const level = (c * 0.8 + w * thrum);
      const colR = 1.0 + (0.30 - 1.0) * mixBlue, colG = 0.97 + (0.60 - 0.97) * mixBlue, colB = 0.92 + (1.0 - 0.92) * mixBlue;
      for (const m of coilMats) { m.emissive.setRGB(colR, colG, colB); m.emissiveIntensity = 0.04 + 3.2 * level; }
      for (const m of shells) { m.color.setRGB(colR, colG, colB); m.opacity = 0.34 * level * level + 0.06 * level; }
      for (const m of nacelles.children) { m.material.color.setRGB(colR, colG, colB); m.material.opacity = 0.85 * level; }
      for (const l of lights) {
        let on = 1;
        if (l.kind === 'strobe') on = (Math.floor(t * 1.1) % 2 === 0 && (t * 1.1) % 1 < 0.12) ? 1 : 0;
        else if (l.kind === 'tail') on = (t % 1.6) < 0.8 ? 0.9 : 0.25;
        l.mat.opacity = on * (cfg.visuals.ship.lights ? 1 : 0); l.halo.material.opacity = on * 0.55 * (cfg.visuals.ship.lights ? 1 : 0);
      }
      glassMat.emissiveIntensity = 0.0;
    },
  };
  return api;
}

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
let _halo;
function haloTexture() {
  if (_halo) return _halo;
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  _halo = new THREE.CanvasTexture(c); return _halo;
}
