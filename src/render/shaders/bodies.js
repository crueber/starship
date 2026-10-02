// Shaders for planets, moons, rings, atmospheres, star surfaces and distant point-sprites.
import { GLSL_COMMON } from './common.js';

// Relativistic + warp "view transform" applied to camera-relative positions (positions only; shapes follow).
const REL_VIEW = /* glsl */ `
uniform vec3 uBetaCam;
uniform float uGamma;
uniform vec3 uWDirCam;
uniform float uWBeta;
uniform float uWGamma;
vec3 relView(vec3 p) {
  float r = length(p);
  if (r < 1e-12) return p;
  vec3 n = p / r; float D;
  vec3 n1 = aberrate(n, uBetaCam, uGamma, D);
  if (uWBeta > 0.0) n1 = aberrate(n1, uWDirCam * uWBeta, uWGamma, D);
  return n1 * r;
}
`;

const GLSL_LOD = /* glsl */ `
// band-limited detail: octaves whose wavelength stays >= ~W pixels, cross-faded so nothing swims or sparkles as the camera zooms.
float lodDetailH(vec3 p, float px, float W, float H) {
  // octaves o (frequency 2^o per radian) from the map's own resolution (o=8) up to the finest one whose cells are still >= W pixels wide;
  // the finest fades in with the zoom, amplitude falls as 2^(-0.8 o): fractal relief, never finer than the screen can resolve
  float lod = min(log2(1.0 / (px * W)), 16.0), lf = floor(lod), ff = lod - lf;
  float n = 0.0;
  for (int i = 0; i < 6; i++) {
    float o = lf + 1.0 - float(i);
    if (o < 8.0) break;
    float w = (i == 0) ? ff : 1.0;
    if (o > 16.0) continue;
    n += w * exp2(-H * (o - 8.0)) * (vnoise(p * exp2(o) + o * 7.31) - 0.5);
  }
  return n * 3.0;
}
float lodDetail(vec3 p, float px, float W) { return lodDetailH(p, px, W, 0.8); }
`;
const LOGDEPTH_V = '#include <common>\n#include <logdepthbuf_pars_vertex>';
const LOGDEPTH_F = '#include <common>\n#include <logdepthbuf_pars_fragment>';

// ───────────────────────────── planet surface ─────────────────────────────
export const PLANET_VERT = /* glsl */ `
${GLSL_COMMON}
${REL_VIEW}
${LOGDEPTH_V}
varying vec3 vObj;
varying vec3 vWorldRel;     // camera-relative position, world axes (unaberrated)
void main() {
  vObj = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);        // camera-relative (camera sits at the origin)
  vWorldRel = wp.xyz;
  vec4 mv = viewMatrix * wp;
  mv.xyz = relView(mv.xyz);
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}
`;

export const PLANET_FRAG = /* glsl */ `
precision highp float;
${GLSL_COMMON}
${GLSL_LOD}
${LOGDEPTH_F}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform mat3 uBodyRot;          // object -> world axes
uniform vec3 uCenterRel;        // body centre, camera-relative (world axes)
uniform float uRadius;          // km
uniform float uExposure;
uniform float uFade;
uniform int uType;              // 0 texture, 1 proc
uniform int uStyle;             // procedural style id
uniform sampler2D tDay;
uniform sampler2D tNight;
uniform sampler2D tCloud;
uniform sampler2D tRing;
uniform float uHasNight;
uniform float uHasCloud;
uniform vec3 uCol[4];
uniform vec4 uP;                // crater, bump, ice, seed
uniform vec4 uP2;               // bands, turb, spot, stripe
uniform vec4 uP3;               // ocean, cloud, lava, spec
uniform float uOcean;           // texture ocean mask enabled
uniform float uGas;
uniform float uAirless;         // 1 = Lommel-Seeliger regolith scattering
uniform float uAtmo;            // 0..1 terminator softening by atmosphere
uniform float uNightGain;
uniform vec3 uLightDir[2];      // unit, world axes
uniform vec3 uLightE[2];        // irradiance (solar constants) * star colour
uniform float uLightAng[2];     // angular radius of the star disc at this body
uniform vec3 uAmbient;          // planetshine / starlight (solar constants)
uniform vec4 uOcc[3];           // occluder centre relative to THIS body centre (km, world axes) + radius km
uniform float uOccCount;
uniform vec4 uRingInfo;         // inner r (km), outer r (km), shadow strength, enabled
uniform vec3 uPole;
uniform float uDetail;
uniform float uSeed;
uniform float uSelfLum;         // emissive floor (lava glow etc)
uniform float uTexel;           // angular size of one texel of the colour map (rad)

// ───── procedural helpers ─────
vec3 gCg = vec3(0.0);       // analytic relief gradient (tangent slope, dimensionless) from all craters at this fragment: no screen-space derivatives, so no pixel noise at any zoom
float cellCraters(vec3 p, float scale, float seed, float depth, out float fresh, out vec3 grad) {
  vec3 q = p * scale;
  vec3 ip = floor(q);
  float h = 0.0; fresh = 0.0; grad = vec3(0.0);
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) for (int k = -1; k <= 1; k++) {
    vec3 c = ip + vec3(float(i), float(j), float(k));
    float hh = hash13(c + seed);
    if (hh > 0.62) continue;                         // not every cell holds a crater
    vec3 off = vec3(hash13(c + seed + 3.1), hash13(c + seed + 7.7), hash13(c + seed + 11.3));
    float rad = mix(0.12, 0.46, hash13(c + seed + 5.5));
    vec3 d = q - (c + off);
    float dl = max(length(d), 1e-6);
    float x = dl / rad;
    if (x < 1.9) {
      float bowl = -(1.0 - x * x) * step(x, 1.0);
      float rim = exp(-pow((x - 1.0) / 0.22, 2.0)) * 0.55;
      float ej = exp(-pow(max(x - 1.0, 0.0) / 0.9, 2.0));
      h += (bowl * 0.9 + rim) * depth * rad;
      grad += (0.9 * 2.0 * x * step(x, 1.0) + rim * (-2.0 * (x - 1.0) / 0.0484)) * depth * (d / dl);
      fresh = max(fresh, ej * step(0.8, hash13(c + seed + 9.9)));
    }
  }
  return h;
}
float craterField(vec3 p, float density, out float fresh, float gw) {
  float f0, f1, f2; vec3 g0, g1, g2;
  float h = cellCraters(p, 4.0, uSeed, 0.9, f0, g0) * 1.2 + cellCraters(p, 11.0, uSeed + 5.0, 0.7, f1, g1) + cellCraters(p, 29.0, uSeed + 9.0, 0.5, f2, g2) * 0.8;
  fresh = max(f0, max(f1, f2));
  gCg += (g0 * 1.2 + g1 + g2 * 0.8) * density * gw;
  return h * density;
}
// Close-range craters: octaves of sharp single-cell craters from just below the colour map's own resolution down to the finest the screen can resolve.
// Each octave fades in as its craters grow past a few pixels (never aliased); height is in radians so the bump slope stays physical.
vec2 fineCraters(vec3 p, float px, float dens, out vec3 grad) {
  float hsum = 0.0, asum = 0.0; grad = vec3(0.0);
  for (int o = 0; o < 8; o++) {
    float freq = exp2(9.0 + float(o));
    float radPxMax = 0.15 / (freq * px);
    if (radPxMax < 4.0) break;                                 // this octave (and all finer ones) is below one resolvable pixel
    vec3 q = p * freq, c = floor(q);
    float seedo = uSeed + float(o) * 17.0;
    float hh = hash13(c + seedo);
    if (hh > 0.55 * dens) continue;
    vec3 off = 0.3 + 0.4 * vec3(hash13(c + seedo + 3.1), hash13(c + seedo + 7.7), hash13(c + seedo + 11.3));
    float rad = mix(0.05, 0.15, hash13(c + seedo + 5.5));
    vec3 dv = q - (c + off); float dl = max(length(dv), 1e-6);
    float x = dl / rad;
    float vis = smoothstep(4.0, 14.0, rad / (freq * px));
    if (x < 1.9 && vis > 0.0) {
      float bowl = -(1.0 - x * x) * step(x, 1.0);
      float rim = exp(-pow((x - 1.0) / 0.2, 2.0)) * 0.6;
      float ej = exp(-pow(max(x - 1.0, 0.0) / 0.8, 2.0));
      float young = step(0.85, hash13(c + seedo + 9.9));
      hsum += vis * (bowl * 0.8 + rim) * 0.5 * rad / freq;
      grad += vis * 0.5 * (0.8 * 2.0 * x * step(x, 1.0) + rim * (-2.0 * (x - 1.0) / 0.04)) * (dv / dl);
      asum += vis * (young * ej * 0.35 + bowl * 0.1 + rim * 0.12);
    }
  }
  return vec2(hsum, asum);
}
// returns albedo; writes height (for bump) and specular mask
vec3 procSurface(vec3 p, int style, out float height, out float spec, out float emit) {
  height = 0.0; spec = 0.0; emit = 0.0;
  float lat = asin(clamp(p.y, -1.0, 1.0));
  float sd = uSeed;
  vec3 c0 = uCol[0], c1 = uCol[1], c2 = uCol[2], c3 = uCol[3];
  float crater = uP.x, ice = uP.z;
  vec3 col;
  if (style == 3) {                                    // gas giant / sub-Neptune
    float warp = fbm(p * 3.0 + sd, 4) * uP2.y * 2.0;
    float y = p.y * 5.5 + warp * 0.6 + 0.35 * sin(p.y * 17.0 + warp * 2.0) * uP2.x;
    float b = 0.5 + 0.5 * sin(y * 6.2831 * 0.55 + sd);
    float b2 = fbm(vec3(p.x * 6.0, p.y * 22.0 + sd, p.z * 6.0) + warp, 4);
    float mixv = clamp(mix(0.5, b, uP2.x) + (b2 - 0.5) * uP2.y * 0.9, 0.0, 1.0);
    col = mix(c0, c1, mixv);
    col = mix(col, c2, smoothstep(0.62, 0.9, b2) * 0.45 * uP2.x);
    col = mix(col, c3, smoothstep(0.7, 1.0, fbm(p * vec3(8.0, 36.0, 8.0) + sd * 3.0, 3)) * 0.35 * uP2.x);
    // storms (anticyclonic ovals)
    if (uP2.z > 0.0) {
      vec3 sp = normalize(vec3(cos(sd * 2.3), sin(sd * 1.7) * 0.35, sin(sd * 2.3)));
      float lon = atan(p.z, p.x), slon = atan(sp.z, sp.x);
      float dl = atan(sin(lon - slon), cos(lon - slon));
      float dist2 = pow(dl / 0.22, 2.0) + pow((lat - asin(sp.y)) / 0.1, 2.0);
      col = mix(col, c3 * 1.15 + 0.05, exp(-dist2) * uP2.z * 0.85);
    }
    height = 0.0; return col;
  }
  if (style == 4) {                                    // ocean-continent world
    float land = fbm(p * 2.7 + sd, 6) + 0.35 * fbm(p * 9.0 + sd * 2.0, 4);
    float sea = mix(0.62, 0.38, uP3.x);
    float isLand = smoothstep(sea - 0.01, sea + 0.012, land);
    float elev = clamp((land - sea) * 3.2, 0.0, 1.0);
    vec3 landc = mix(c1, c2, smoothstep(0.1, 0.9, fbm(p * 5.0 + sd * 4.0, 4)));
    landc = mix(landc, c3, smoothstep(0.6, 1.0, elev));
    vec3 sea0 = mix(c0 * 1.8, c0, smoothstep(sea - 0.14, sea, land));
    col = mix(sea0, landc, isLand);
    float capLat = mix(1.45, 0.95, clamp(ice, 0.0, 1.0));
    float cap = smoothstep(capLat - 0.12 + (fbm(p * 6.0, 3) - 0.5) * 0.25, capLat + 0.05, abs(lat));
    col = mix(col, c3, cap);
    spec = (1.0 - isLand) * (1.0 - cap) * uP3.w;
    height = isLand * elev * 0.3;
    // clouds in the albedo for procedural oceans
    float cl = smoothstep(1.0 - uP3.y * 0.62, 1.0, fbm(p * 3.6 + vec3(sd * 3.0, 0.0, sd) + 7.0 * fbm(p * 1.4, 3), 6));
    col = mix(col, vec3(1.0), cl * 0.92); spec *= 1.0 - cl;
    return col;
  }
  if (style == 5) {                                    // lava world
    float cr = ridged(p * 4.0 + sd, 6);
    float crack = smoothstep(0.55, 0.85, cr);
    col = mix(c0, c1, fbm(p * 8.0, 5));
    emit = crack * 1.0 * uP3.z;
    col = mix(col, c2, crack * 0.8);
    height = fbm(p * 10.0, 5) * 0.3;
    return col;
  }
  if (style == 6) {                                    // Titan-like featureless haze
    float b = fbm(vec3(p.x * 2.0, p.y * 9.0, p.z * 2.0) + sd, 4);
    col = mix(c0, c1, b * 0.9); height = 0.0; return col;
  }
  float fresh = 0.0;
  float cr = craterField(p, crater, fresh, 0.9);
  float base = fbm(p * 3.2 + sd, 6);
  float fine = fbm(p * 24.0 + sd, 4);
  height = (base - 0.5) * 0.5 + (fine - 0.5) * 0.18;
  col = mix(c0, c1, smoothstep(0.25, 0.8, base));
  col *= 0.88 + 0.24 * fine;
  if (style == 8) {                                    // Europa: bright ice shell crossed by long reddish-brown fractures
    float cr1 = ridged(p * 2.4 + vec3(sd), 5), cr2 = ridged(p * 7.0 + vec3(sd * 2.0), 4);
    float l1 = smoothstep(0.62, 0.82, cr1), l2 = smoothstep(0.66, 0.86, cr2) * 0.7;
    float tint = smoothstep(0.35, 0.7, fbm(p * 3.0 + sd, 4));
    col = mix(c1, c0, 0.35 * fbm(p * 12.0, 3));
    col = mix(col, c3, tint * 0.35);
    col = mix(col, c2, clamp(l1 + l2, 0.0, 1.0) * 0.85);
    height = (l1 + l2) * 0.05 + (fine - 0.5) * 0.04;
    return col;
  }
  if (style == 2 || style == 0 || style == 9) {        // ice-like: bright, with cracks (linea)
    float cracks = ridged(p * 3.0 + vec3(sd), 5);
    float lines = smoothstep(0.58, 0.8, cracks);
    col = mix(col, c2, 0.35 * ice);
    col = mix(col, c3, lines * uP2.w * 0.9);
    height += lines * 0.1 * uP2.w;
  }
  if (style == 7) {                                    // Io: pale sulfur / SO2 plains, orange-red deposits, dark irregular paterae with coloured halos
    float s1 = fbm(p * 5.0 + sd, 5), s2 = fbm(p * 14.0 + sd * 3.0, 4);
    vec3 yellow = c0, pale = c1, orange = c2, black = c3;
    col = mix(yellow, pale, smoothstep(0.3, 0.75, s1));
    col = mix(col, vec3(0.86, 0.84, 0.78) * 0.72, smoothstep(0.62, 0.85, fbm(p * 8.0 + sd * 7.0, 4)) * 0.75);                 // white SO2 frost
    col = mix(col, orange, smoothstep(0.6, 0.85, s2) * 0.8);
    col = mix(col, orange * vec3(0.8, 0.6, 0.5), smoothstep(0.85, 1.25, abs(lat)) * 0.55);                                      // reddish polar deposits
    vec3 wq = p + (vec3(fbm(p * 9.0 + sd, 3), fbm(p * 9.0 + sd + 4.1, 3), fbm(p * 9.0 + sd + 8.2, 3)) - 0.5) * 0.22;           // wobble the cells: irregular, not round
    vec3 cc = floor(wq * 11.0); vec3 fc = fract(wq * 11.0) - 0.5;
    float pick = step(0.88, hash13(cc + sd)), sz = 0.18 + 0.3 * hash13(cc + sd + 3.7);
    float dd = length(fc);
    float dark = pick * (1.0 - smoothstep(sz * 0.55, sz, dd));
    float halo = pick * smoothstep(sz, sz * 1.1, dd) * (1.0 - smoothstep(sz * 1.1, sz * 2.4, dd));                          // red/orange apron around the vent
    col = mix(col, mix(orange, pale, 0.25), halo * 0.75);
    col = mix(col, black, clamp(dark * 1.4, 0.0, 0.95) * uP2.z);
    emit = 0.0;                                         // hot spots are invisible against sunlit sulfur; the old emissive term blew the calderas out to white
    height = (s1 - 0.5) * 0.15; return col;
  }
  if (style == 10) {                                   // Iapetus two-tone
    float lon = atan(p.z, p.x);
    float edge = 0.5 + 0.5 * sin(lon - 1.2) + (fbm(p * 5.0 + sd, 4) - 0.5) * 0.9;
    col = mix(c2, c0, smoothstep(0.35, 0.62, edge));
    col *= 0.9 + 0.2 * fine; return col;
  }
  if (style == 11) {                                   // Pluto
    float lon = atan(p.z, p.x);
    float heart = exp(-(pow((lon - 2.9) / 0.75, 2.0) + pow((lat - 0.12) / 0.5, 2.0)));
    float dark = (1.0 - smoothstep(0.3, 0.55, abs(lat) + (fbm(p * 4.0 + sd, 4) - 0.5) * 0.7));
    col = mix(c1, c3, dark * smoothstep(0.35, 0.65, fbm(p * 3.0 + sd * 2.0, 5)));
    col = mix(col, c2, heart * 0.85 + smoothstep(0.9, 1.4, abs(lat)) * 0.5);
    col *= 0.9 + 0.2 * fine; height = 0.0; gCg *= 0.3333; return col;
  }
  if (style == 12) {                                   // Triton
    col = mix(c0, c1, smoothstep(0.3, 0.7, base));
    col = mix(col, c2, smoothstep(0.1, 1.3, -lat) * 0.6);
    float streaks = smoothstep(0.7, 0.9, fbm(vec3(p.x * 40.0, p.y * 4.0, p.z * 40.0) + sd, 3));
    col = mix(col, c3, streaks * 0.35 * step(0.0, -lat + 0.3)); return col;
  }
  if (style == 13) {                                   // Charon
    col = mix(c0, c1, smoothstep(0.3, 0.75, base)) * (0.9 + 0.2 * fine);
    col = mix(col, c2, smoothstep(0.85, 1.3, lat + (base - 0.5) * 0.4) * 0.9); return col;
  }
  if (style == 14) {                                   // Ganymede: dark old terrain + bright grooved terrain
    float t = smoothstep(0.45, 0.62, fbm(p * 2.2 + sd, 5));
    float grooves = 0.5 + 0.5 * sin((fbm(p * 5.0 + sd, 4) * 60.0));
    col = mix(c0, c1, t);
    col = mix(col, c2, t * grooves * 0.35 * uP2.w * 2.0);
    col = mix(col, c2, fresh * 0.6); return col;
  }
  col = mix(col, c2, clamp(fresh * 0.35, 0.0, 1.0));   // fresh ejecta rays / bright craters
  col = mix(col, c3, smoothstep(0.7, 1.0, cr * 0.5 + 0.5) * 0.0);
  if (ice > 0.0 && style != 2) col = mix(col, c2, ice * 0.5 * smoothstep(0.55, 1.2, abs(lat) + (fine - 0.5) * 0.3));
  return col;
}

// (lodDetail lives in GLSL_LOD, shared with the cloud shell)
float lodDetail_unused(vec3 p, float px, float W) {
  float lod = log2(1.0 / (px * W)), lf = floor(lod), ff = lod - lf;
  float n = (1.0 - ff) * exp2(0.55 * (ff)) * (vnoise(p * exp2(lf)) - 0.5);
  n += exp2(0.55 * (ff - 1.0)) * (vnoise(p * exp2(lf + 1.0) + 7.3) - 0.5);
  n += ff * exp2(0.55 * (ff - 2.0)) * (vnoise(p * exp2(lf + 2.0) + 13.1) - 0.5);
  return n * 2.0;
}

// ───── analytic eclipse by spherical occluders ─────
float discOverlap(float ra, float rb, float d) {   // fraction of disc A (radius ra) covered by disc B (radius rb), centres d apart
  if (d >= ra + rb) return 0.0;
  if (d <= abs(rb - ra)) return rb >= ra ? 1.0 : (rb * rb) / (ra * ra);
  float a = acos(clamp((d * d + ra * ra - rb * rb) / (2.0 * d * ra), -1.0, 1.0));
  float b = acos(clamp((d * d + rb * rb - ra * ra) / (2.0 * d * rb), -1.0, 1.0));
  float area = ra * ra * (a - sin(2.0 * a) * 0.5) + rb * rb * (b - sin(2.0 * b) * 0.5);
  return clamp(area / (PI * ra * ra), 0.0, 1.0);
}
float occlusion(vec3 P, vec3 L, float angS) {          // P relative to body centre (km)
  float vis = 1.0;
  for (int i = 0; i < 3; i++) {
    if (float(i) >= uOccCount) break;
    vec3 o = uOcc[i].xyz - P;
    float tc = dot(o, L);
    if (tc <= 0.0) continue;
    float s = length(o - tc * L);
    float angO = uOcc[i].w / tc;
    vis *= 1.0 - discOverlap(angS, angO, s / tc);
  }
  return vis;
}
float ringAlpha(float r) {
  float u = (r - uRingInfo.x) / (uRingInfo.y - uRingInfo.x);
  if (u < 0.0 || u > 1.0) return 0.0;
  return texture2D(tRing, vec2(u, 0.5)).a;
}

vec3 sampleTex(sampler2D t, vec2 uv, vec2 uvA, vec2 uvB) {
  // pick the derivative set without the longitude wrap discontinuity
  vec2 dA = fwidth(uvA), dB = fwidth(uvB);
  vec2 d1 = dFdx(uvA), d2 = dFdy(uvA);
  if (dot(dB, dB) < dot(dA, dA)) { d1 = dFdx(uvB); d2 = dFdy(uvB); }
  return textureGrad(t, uv, d1, d2).rgb;
}

void main() {
  vec3 p = normalize(vObj);
  float lat = asin(clamp(p.y, -1.0, 1.0));
  float lon = atan(-p.z, p.x);
  vec2 uv = vec2(lon / TAU + 0.5, lat / PI + 0.5);
  vec2 uvB = vec2(fract(lon / TAU + 1.0), uv.y);
  vec3 albedo; float height = 0.0, spec = 0.0, emit = 0.0;
  float oceanMask = 0.0;
  if (uType == 0) {
    albedo = sampleTex(tDay, uv, uv, uvB);
    albedo = pow(albedo, vec3(2.2));                                  // textures are sRGB
    if (uOcean > 0.5) {
      float mx = max(albedo.r, albedo.g);
      oceanMask = 1.0 - smoothstep(0.0, 0.04, mx - albedo.b * 0.95);
      oceanMask *= 1.0 - smoothstep(0.55, 0.8, dot(albedo, vec3(0.333)));     // not ice
      spec = oceanMask * uP3.w;
    }
    height = 0.0;      // relief comes only from procedural craters / band-limited detail: bump from the colour map itself speckles (8-bit steps) and pits gas-giant cloud tops
    if (uP.x > 0.0) { float fr; craterField(p, uP.x, fr, uDetail); }
  } else {
    albedo = pow(clamp(procSurface(p, uStyle, height, spec, emit), 0.0, 1.0), vec3(2.2));      // palettes are authored in sRGB
  }
  // extra fine relief where the map is magnified beyond its resolution: band-limited octaves, no per-pixel noise
  float px = max(length(fwidth(p)), 1e-7);
  if (uType == 0) {
    float gate = smoothstep(1.3, 5.0, uTexel / px) * uDetail;
    if (gate > 0.01) {
      float n1 = lodDetail(p, px, 9.0), n2 = lodDetail(p + 3.7, px, 24.0);
      albedo *= clamp(1.0 + gate * (0.22 * n1 + 0.12 * n2) * (uAirless > 0.5 ? 1.0 : 0.8), 0.6, 1.5);
      height += gate * (0.7 * lodDetailH(p, px, 9.0, 1.0) + 0.4 * lodDetailH(p + 3.7, px, 24.0, 1.0)) * 0.004;      // slope-consistent relief (amplitude ∝ wavelength)
    }
  }

  if (uP.x > 0.0) {
    vec3 fg; vec2 fc = fineCraters(p, px, clamp(uP.x * 1.6, 0.25, 1.0), fg);
    gCg += fg; albedo *= clamp(1.0 + fc.y, 0.5, 1.7);
  }

  // ── normal: screen-space bump from the smooth procedural height field, plus the analytic crater slopes (exact at any zoom)
  vec3 N = normalize(uBodyRot * p);
  float bump = uP.y * uDetail;
  vec3 pn = p;
  if (bump > 0.001) {
    vec2 dHr = vec2(dFdx(height), dFdy(height));
    vec2 dH = clamp(dHr / max(px, 1e-7) * bump * 0.4, vec2(-0.45), vec2(0.45));
    vec3 sx = normalize(dFdx(p)), sy = normalize(dFdy(p));
    vec3 R1 = cross(sy, p), R2 = cross(p, sx);
    float fDet = dot(sx, R1);
    vec3 grad = sign(fDet) * (dH.x * R1 + dH.y * R2);
    float facing = smoothstep(0.1, 0.45, abs(fDet));                     // grazing view: screen derivatives degenerate, fall back to the smooth normal
    pn = normalize(abs(fDet) * p - grad * facing);
    vec3 gt = gCg - p * dot(gCg, p); float gl = length(gt);
    if (gl > 1e-7) pn = normalize(pn - gt / gl * min(gl * bump * 0.4, 0.7));
    N = normalize(uBodyRot * pn);
    // near the terminator the bump is blended back to the smooth geometric normal
    float nd0 = dot(normalize(uBodyRot * p), uLightDir[0]);
    N = normalize(mix(normalize(uBodyRot * p), N, smoothstep(0.0, 0.22, nd0)));
  }
  vec3 V = normalize(-vWorldRel);
  vec3 Ng = normalize(uBodyRot * p);           // geometric normal (terminator, atmosphere wrap)
  N = normalize(N + V * max(0.12 - dot(N, V), 0.0));       // a bumped normal must not turn away from the viewer (black limb speckle)

  vec3 radiance = vec3(0.0);
  vec3 Pk = Ng * uRadius;
  for (int li = 0; li < 2; li++) {
    vec3 E = uLightE[li];
    if (E.r + E.g + E.b <= 0.0) continue;
    vec3 L = uLightDir[li];
    float ndl = dot(N, L), ndg = dot(Ng, L);
    float wrap = uAtmo * 0.12;
    float lit = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
    // geometric self-shadowing: don't light faces tilted away from the light by bump alone
    lit *= smoothstep(-0.03, 0.06, ndg + wrap * 0.5);
    float ndv = max(dot(N, V), 0.001);
    float refl = lit;
    if (uAirless > 0.5) { float ls = lit / (lit + ndv) * 2.0; refl = mix(lit, ls * min(lit * 4.0, 1.0), 0.75); }
    float shadow = occlusion(Pk, L, uLightAng[li]);
    if (uRingInfo.w > 0.5 && uRingInfo.z > 0.0) {
      float dl = dot(L, uPole);
      if (abs(dl) > 1e-3) {
        float t = -dot(Pk, uPole) / dl;
        if (t > 0.0) { float ra = ringAlpha(length(Pk + L * t)); shadow *= 1.0 - ra * uRingInfo.z; }
      }
    }
    vec3 diffuse = albedo * refl * E;
    // specular glint (oceans, ice)
    vec3 H = normalize(L + V);
    float sp = pow(max(dot(N, H), 0.0), 90.0) * spec * lit;
    radiance += (diffuse + sp * E * 0.9) * shadow;
  }
  // earthshine / starlight on the unlit side
  radiance += albedo * uAmbient * 0.9;
  // night-side lights
  if (uHasNight > 0.5) {
    float day = 0.0;
    for (int li = 0; li < 2; li++) day = max(day, dot(Ng, uLightDir[li]) * (uLightE[li].r + uLightE[li].g + uLightE[li].b > 0.0 ? 1.0 : 0.0));
    vec3 nl = pow(sampleTex(tNight, uv, uv, uvB), vec3(2.2));
    radiance += nl * uNightGain * (1.0 - smoothstep(-0.12, 0.08, day));
  }
  radiance += albedo * emit * 40.0 * uSelfLum + vec3(1.0, 0.35, 0.08) * emit * uSelfLum * 6.0;
  vec3 outc = radiance * uExposure * uFade;
  gl_FragColor = vec4(min(outc, vec3(6.0e4)), 1.0);
  #include <logdepthbuf_fragment>
}
`;

// ───────────────────────────── cloud shell ─────────────────────────────
export const CLOUD_FRAG = /* glsl */ `
precision highp float;
${GLSL_COMMON}
${GLSL_LOD}
${LOGDEPTH_F}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform mat3 uBodyRot;
uniform float uExposure;
uniform float uFade;
uniform sampler2D tCloud;
uniform vec3 uLightDir[2];
uniform vec3 uLightE[2];
uniform vec3 uAmbient;
uniform float uRadius;
uniform vec4 uOcc[3];
uniform float uOccCount;
uniform float uLightAng[2];
uniform float uOpacity;
vec2 dd(vec2 a, vec2 b) { return dot(a, a) < dot(b, b) ? a : b; }
void main() {
  vec3 p = normalize(vObj);
  float lat = asin(clamp(p.y, -1.0, 1.0)), lon = atan(-p.z, p.x);
  vec2 uv = vec2(lon / TAU + 0.5, lat / PI + 0.5), uvB = vec2(fract(lon / TAU + 1.0), uv.y);
  vec2 dA = fwidth(uv), dB = fwidth(uvB);
  vec2 d1 = dFdx(uv), d2 = dFdy(uv);
  if (dot(dB, dB) < dot(dA, dA)) { d1 = dFdx(uvB); d2 = dFdy(uvB); }
  vec4 t = textureGrad(tCloud, uv, d1, d2);
  float a0 = clamp(dot(t.rgb, vec3(0.3333)) * 1.25 - 0.04, 0.0, 1.0);
  float px = max(length(fwidth(p)), 1e-7);
  float zoom = smoothstep(1.3, 5.0, 0.00307 / px);                      // magnified beyond the 2k map: add procedural wisps so texels do not show
  float wisp = 0.5 + lodDetail(p + 1.3, px, 16.0) * 0.3 + lodDetail(p, px, 40.0) * 0.18;
  a0 = clamp(mix(a0, a0 * (0.4 + 1.2 * wisp) + (wisp - 0.55) * 0.2 * a0, zoom), 0.0, 1.0);
  float a = smoothstep(0.02, 0.98, a0) * uOpacity;
  vec3 N = normalize(uBodyRot * p);
  vec3 rad = vec3(0.0);
  for (int i = 0; i < 2; i++) {
    vec3 E = uLightE[i]; if (E.r + E.g + E.b <= 0.0) continue;
    float ndl = dot(N, uLightDir[i]);
    float lit = clamp((ndl + 0.1) / 1.1, 0.0, 1.0);
    rad += vec3(0.92, 0.93, 0.95) * lit * E;
  }
  rad += vec3(0.9) * uAmbient * 0.9;
  gl_FragColor = vec4(min(rad * uExposure * uFade, vec3(6.0e4)) * a, a);
  #include <logdepthbuf_fragment>
}
`;

// ───────────────────────────── atmosphere shell ─────────────────────────────
export const ATMO_FRAG = /* glsl */ `
precision highp float;
${GLSL_COMMON}
${LOGDEPTH_F}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform vec3 uCenterRel;         // km, camera-relative, world axes
uniform float uRadius;           // planet radius, km
uniform float uTop;              // atmosphere top radius, km
uniform vec3 uBetaR;             // Rayleigh coefficients (1/km, RGB)
uniform float uBetaM;
uniform float uHr, uHm, uG;
uniform vec3 uTint;
uniform float uStrength;
uniform float uExposure, uFade;
uniform vec3 uLightDir[2];
uniform vec3 uLightE[2];
uniform vec3 uAmbient;
uniform float uSteps;

bool sphere(vec3 o, vec3 d, vec3 c, float r, out float t0, out float t1) {
  vec3 oc = o - c; float b = dot(oc, d); float cc = dot(oc, oc) - r * r; float h = b * b - cc;
  if (h < 0.0) return false;
  h = sqrt(h); t0 = -b - h; t1 = -b + h; return true;
}
void main() {
  vec3 o = vec3(0.0);                                  // camera
  vec3 d = normalize(vWorldRel);
  float a0, a1;
  if (!sphere(o, d, uCenterRel, uTop, a0, a1)) discard;
  float g0, g1;
  bool hitsPlanet = sphere(o, d, uCenterRel, uRadius, g0, g1) && g1 > 0.0;
  float tStart = max(a0, 0.0);
  float tEnd = a1;
  if (hitsPlanet && g0 > 0.0) tEnd = min(tEnd, g0);
  if (tEnd <= tStart) discard;
  float len = tEnd - tStart;
  const int NS = 14;
  float ds = len / float(NS);
  vec3 sumR = vec3(0.0), sumM = vec3(0.0);
  float odR = 0.0, odM = 0.0;
  vec3 scatter = vec3(0.0);
  vec3 tau0 = vec3(0.0);
  for (int li = 0; li < 2; li++) {
    vec3 E = uLightE[li]; if (E.r + E.g + E.b <= 0.0) continue;
    vec3 L = uLightDir[li];
    float cosT = dot(d, L);
    float pR = 3.0 / (16.0 * PI) * (1.0 + cosT * cosT);
    float g = uG; float pM = 3.0 / (8.0 * PI) * ((1.0 - g * g) * (1.0 + cosT * cosT)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosT, 1.5));
    float odRv = 0.0, odMv = 0.0;
    vec3 accR = vec3(0.0), accM = vec3(0.0);
    for (int i = 0; i < NS; i++) {
      float t = tStart + (float(i) + 0.5) * ds;
      vec3 pos = o + d * t - uCenterRel;
      float h = length(pos) - uRadius;
      float dR = exp(-max(h, 0.0) / uHr), dM = exp(-max(h, 0.0) / uHm);
      odRv += dR * ds; odMv += dM * ds;
      // optical depth towards the light (4 samples)
      float tl0, tl1; sphere(pos, L, vec3(0.0), uTop, tl0, tl1);
      float pg0, pg1; bool blocked = sphere(pos, L, vec3(0.0), uRadius * 0.999, pg0, pg1) && pg1 > 0.0 && pg0 > 0.0;
      if (blocked) continue;
      float dl = tl1 / 4.0, odRl = 0.0, odMl = 0.0;
      for (int j = 0; j < 4; j++) {
        vec3 q = pos + L * (float(j) + 0.5) * dl; float hh = length(q) - uRadius;
        odRl += exp(-max(hh, 0.0) / uHr) * dl; odMl += exp(-max(hh, 0.0) / uHm) * dl;
      }
      vec3 tr = exp(-(uBetaR * (odRv + odRl) + vec3(uBetaM * 1.1) * (odMv + odMl)));
      accR += dR * tr * ds; accM += dM * tr * ds;
    }
    scatter += PI * E * uTint * (accR * uBetaR * pR + accM * uBetaM * pM) * uStrength;
    odR = odRv; odM = odMv;
  }
  // a little ambient glow so the night limb is not perfectly black next to a lit planet
  vec3 trans = exp(-(uBetaR * odR + vec3(uBetaM * 1.1) * odM));
  float T = dot(trans, vec3(0.3333));
  scatter += PI * uAmbient * uTint * (1.0 - T) * 0.15;
  vec3 col = scatter * uExposure * uFade;
  gl_FragColor = vec4(min(col, vec3(6.0e4)), mix(1.0, T, uFade));
  #include <logdepthbuf_fragment>
}
`;

// ───────────────────────────── rings ─────────────────────────────
export const RING_VERT = /* glsl */ `
${GLSL_COMMON}
${REL_VIEW}
${LOGDEPTH_V}
varying vec3 vObj;
varying vec3 vWorldRel;
void main() {
  vObj = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldRel = wp.xyz;
  vec4 mv = viewMatrix * wp;
  mv.xyz = relView(mv.xyz);
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}
`;
export const RING_FRAG = /* glsl */ `
precision highp float;
${GLSL_COMMON}
${LOGDEPTH_F}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform mat3 uBodyRot;
uniform vec3 uCenterRel;
uniform float uPlanetR;
uniform float uInner, uOuter;       // km
uniform float uExposure, uFade;
uniform vec3 uLightDir[2];
uniform vec3 uLightE[2];
uniform float uLightAng[2];
uniform vec3 uAmbient;
uniform sampler2D tRing;
uniform float uHasTex;
uniform vec3 uTint;
uniform vec4 uBands[6];             // procedural: r0, r1, tau, 0
uniform float uBandCount;
uniform vec3 uPole;
uniform float uSeed;
float profile(float r) {
  if (uHasTex > 0.5) {
    float u = (r - uInner) / (uOuter - uInner);
    return clamp(texture2D(tRing, vec2(u, 0.5)).a, 0.0, 1.0);
  }
  float a = 0.0;
  for (int i = 0; i < 6; i++) {
    if (float(i) >= uBandCount) break;
    float r0 = uBands[i].x, r1 = uBands[i].y;
    float m = smoothstep(r0, r0 + (r1 - r0) * 0.06, r) * (1.0 - smoothstep(r1 - (r1 - r0) * 0.06, r1, r));
    float n = 0.65 + 0.35 * sin(r * 0.002 / (uPlanetR / 60000.0) + hash11(uSeed + float(i)) * 40.0) * sin(r * 0.00071 + float(i) * 3.0);
    a = max(a, m * (1.0 - exp(-uBands[i].z * 2.2)) * n);
  }
  return a;
}
void main() {
  vec3 pl = vObj;                                       // ring plane coordinates, km (object space; z = pole)
  float r = length(pl.xy);
  float a = profile(r);
  if (a < 0.003) discard;
  vec3 colBase = uHasTex > 0.5 ? texture2D(tRing, vec2((r - uInner) / (uOuter - uInner), 0.5)).rgb : uTint;
  colBase = min(pow(colBase, vec3(2.2)) * (uHasTex > 0.5 ? 2.2 : 1.0), vec3(0.95));      // the map is a presentation colour map; real ring particles are as bright as the cloud tops (albedo 0.5–0.8)
  vec3 Nw = normalize(uBodyRot * vec3(0.0, 0.0, 1.0));
  vec3 V = normalize(-vWorldRel);
  vec3 Pw = uBodyRot * pl;                              // position relative to planet centre, world axes
  vec3 rad = vec3(0.0);
  for (int i = 0; i < 2; i++) {
    vec3 E = uLightE[i]; if (E.r + E.g + E.b <= 0.0) continue;
    vec3 L = uLightDir[i];
    // planet shadow cast onto the ring
    float tc = dot(-Pw, L);
    float vis = 1.0;
    if (tc > 0.0) {
      float s = length(-Pw - tc * L);
      float angP = uPlanetR / tc, angS = uLightAng[i];
      float sep = s / tc;
      vis = smoothstep(angP - angS, angP + angS, sep);
    }
    float cl = dot(L, Nw), cv = dot(V, Nw);
    bool sameSide = cl * cv > 0.0;
    // thin, mostly-translucent slab of ice: reflected light on the lit face, forward scattering when the sun is behind the rings
    float refl = (0.38 + 0.62 * abs(cl)) * (sameSide ? 1.0 : 0.0) * 0.95;      // a layer of tumbling particles still shines at low sun (mutual shadowing is weak, opposition surge): not a flat Lambert sheet
    float fwd = (!sameSide) ? pow(max(dot(-L, V), 0.0), 6.0) * 0.55 * (1.0 - exp(-a * 3.0)) + 0.0 : 0.0;
    // translucency: unlit-side transmitted light grows where the ring is thin
    float trans = (!sameSide) ? max(abs(cl), 0.08) * pow(1.0 - a, 1.2) * 0.6 : 0.0;
    rad += colBase * E * (refl + fwd + trans) * vis;
  }
  rad += colBase * uAmbient * 0.6;
  // Saturn-light on the rings is negligible; fade near-edge-on rings to avoid sparkle
  float edge = smoothstep(0.0, 0.02, abs(dot(V, Nw)));
  gl_FragColor = vec4(min(rad * uExposure * uFade, vec3(6.0e4)) * a * edge, a * edge);
  #include <logdepthbuf_fragment>
}
`;

// ───────────────────────────── star surface ─────────────────────────────
export const STARSURF_FRAG = /* glsl */ `
precision highp float;
${GLSL_COMMON}
${LOGDEPTH_F}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform mat3 uBodyRot;
uniform vec3 uColor;
uniform float uRadiance;      // surface radiance, sunlit-white units
uniform float uExposure;
uniform float uFade;
uniform float uLimb;          // limb-darkening coefficient
uniform float uHasTex;
uniform sampler2D tSun;
uniform float uSeed;
uniform float uSpots;
void main() {
  vec3 p = normalize(vObj);
  vec3 V = normalize(-vWorldRel);
  vec3 N = normalize(uBodyRot * p);
  float mu = clamp(dot(N, V), 0.0, 1.0);
  float limb = (1.0 - uLimb * (1.0 - mu)) / (1.0 - uLimb / 3.0);
  float lat = asin(clamp(p.y, -1.0, 1.0)), lon = atan(-p.z, p.x);
  vec2 uv = vec2(lon / TAU + 0.5, lat / PI + 0.5);
  float tex = 1.0;
  if (uHasTex > 0.5) {
    vec3 t = texture2D(tSun, uv).rgb;
    float l = dot(t, vec3(0.3, 0.55, 0.15));
    tex = mix(1.0, clamp(l * 1.6, 0.35, 1.25), 0.55);
  } else {
    float gran = fbm(p * 60.0 + uSeed, 4);
    float sp = smoothstep(0.62, 0.78, fbm(p * 5.0 + uSeed * 3.0, 4)) * uSpots;
    tex = (0.92 + 0.16 * gran) * (1.0 - 0.6 * sp);
  }
  // the limb of a real star is a hot-gas haze; keep the edge soft
  float edge = smoothstep(0.0, 0.07, mu);
  vec3 c = uColor * uRadiance * limb * tex;
  gl_FragColor = vec4(min(c * uExposure * uFade, vec3(6.0e4)) * edge, 1.0);
  #include <logdepthbuf_fragment>
}
`;

// ───────────────────────────── point sprites (stars of the current system, distant planets) ─────────────────────────────
export const SPRITE_VERT = /* glsl */ `
${GLSL_COMMON}
${REL_VIEW}
attribute vec4 aPosE;        // camera-relative position (km, world axes), irradiance E (solar constants) – xyz in km
attribute vec4 aColor;       // rgb colour (luminance 1), a = core fade (0 = resolved disc replaces the core)
uniform mat3 uView;
uniform vec2 uRes;
uniform float uFocalPx;
uniform float uExposure;
uniform float uSigma;
uniform float uHalo;
uniform float uBrightness;
uniform float uHaloAmt;
uniform float uHaloW;
varying vec2 vUV;
varying vec3 vColor;
varying float vAmp;
varying float vCore;
varying float vHalo;
varying float vHW;
varying float vR;
void main() {
  vec3 pc = uView * aPosE.xyz;                // camera axes
  float r = length(pc);
  vec3 n = pc / r; float D;
  vec3 n1 = aberrate(n, uBetaCam, uGamma, D);
  float D2 = 1.0; vec3 n2 = n1;
  if (uWBeta > 0.0) n2 = aberrate(n1, uWDirCam * uWBeta, uWGamma, D2);
  if (n2.z > -1e-3) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }
  float E = aPosE.w * D * D * mix(1.0, D2 * D2, 0.0);
  float sig = uSigma;
  float peak = uBrightness * E * uFocalPx * uFocalPx / (2.0 * sig * sig) * uExposure;
  if (peak < 0.0012) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }
  vec2 ndc = n2.xy / -n2.z * (uFocalPx / (0.5 * uRes.y)); ndc.x *= uRes.y / uRes.x;
  float rCore = sig * sqrt(2.0 * log(max(peak / 0.0015, 1.0001)));
  float rHalo = uHaloW * sqrt(max(pow(max(peak * uHaloAmt * uHalo / 0.0015, 1.0), 0.6667) - 1.0, 0.0));
  float R = clamp(max(rCore, rHalo), 1.6, 120.0);
  vec2 q = position.xy;
  vUV = q * R; vR = R;
  vColor = aColor.rgb; vAmp = peak; vCore = aColor.a; vHalo = uHalo * uHaloAmt; vHW = uHaloW;
  gl_Position = vec4(ndc + q * R * vec2(2.0 / uRes.x, 2.0 / uRes.y), 0.0, 1.0);
}
`;
export const SPRITE_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUV; varying vec3 vColor; varying float vAmp; varying float vCore; varying float vHalo; varying float vHW; varying float vR;
uniform float uSigma;
void main() {
  float r2 = dot(vUV, vUV);
  float win = 1.0 - smoothstep(0.55, 1.0, sqrt(r2) / vR);        // quad edge never clips the glow
  float core = exp(-0.5 * r2 / (uSigma * uSigma));
  float halo = vHalo * pow(1.0 + r2 / (vHW * vHW), -1.5);
  gl_FragColor = vec4(min(vColor * vAmp * (core + halo) * win * vCore, vec3(6.0e4)), 1.0);
}
`;
