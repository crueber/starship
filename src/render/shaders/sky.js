// Full-screen Milky Way pass (real Gaia light map) + galaxy sprites.
import { GLSL_COMMON } from './common.js';

export const FULLSCREEN_VERT = /* glsl */ `
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

export const SKY_FRAG = /* glsl */ `
precision highp float;
${GLSL_COMMON}
varying vec2 vUv;
uniform sampler2D uMW;           // rgb = radiance in sunlit-white units, equirect, galactic coordinates (u: l/2pi+.5, v: .5-b/pi)
uniform mat3 uInvView;           // camera axes -> rest frame
uniform mat3 uToGal;             // rest frame (ICRS) -> galactic
uniform vec2 uTan;               // tan(fov/2) * (aspect, 1)
uniform vec3 uBeta;
uniform float uGamma;
uniform vec3 uWarpDir;
uniform float uWarpBeta;
uniform float uWarpGamma;
uniform float uExposure;
uniform float uGain;
uniform float uDetail;
uniform float uGrain;
uniform float uDust;
uniform float uMwScale;          // overall scale (includes the prescale of the map)
uniform sampler2D uModelSun;     // analytic model seen from the Sun
uniform sampler2D uModelShip;    // analytic model seen from the ship
uniform float uModelOn;
uniform float uBlue;
uniform float uZodi;
uniform float uBeam;
uniform vec2 uMWSize;
uniform float uBeamCap;      // comfort limit on the Doppler brightening of the diffuse sky
uniform vec3 uSunDirRest;
uniform float uZodiScale;
void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 vcam = normalize(vec3(ndc * uTan, -1.0));
  vec3 np = uInvView * vcam;
  float Dw = 1.0, Dr = 1.0;
  vec3 n1 = uWarpBeta > 0.0 ? deaberrate(np, uWarpDir * uWarpBeta, uWarpGamma, Dw) : np;
  vec3 n = deaberrate(n1, uBeta, uGamma, Dr);
  float D = Dw * Dr;
  vec3 g = uToGal * n;
  float lon = atan(g.y, g.x);
  float lat = asin(clamp(g.z, -1.0, 1.0));
  vec2 uv = vec2(lon / TAU + 0.5, 0.5 - lat / PI);
  vec3 L0 = texture2D(uMW, uv).rgb;
  // mild unsharp mask: the map is a smoothed sample of the Gaia star counts, so edges of dust lanes get a little crisper
  vec2 tx = vec2(1.0 / uMWSize.x, 1.0 / uMWSize.y) * 1.6;
  vec3 Lb = 0.25 * (texture2D(uMW, uv + vec2(tx.x, 0.0)).rgb + texture2D(uMW, uv - vec2(tx.x, 0.0)).rgb + texture2D(uMW, uv + vec2(0.0, tx.y)).rgb + texture2D(uMW, uv - vec2(0.0, tx.y)).rgb);
  vec3 L = max(L0 + (L0 - Lb) * 0.7, vec3(0.0)) * uMwScale;
  if (uModelOn > 0.5) {
    float ms = texture2D(uModelSun, uv).r, mh = texture2D(uModelShip, uv).r;
    L *= clamp(pow(mh / max(ms, 1e-5), 0.7), 0.15, 6.0);
  }

  // fine structure the 0.35-degree map cannot hold: filaments / dust texture and unresolved-star grain
  // (noise is hashed in the observer's own directions, not the rest frame: relativistic aberration would otherwise magnify it into huge blotches)
  float lowF = fbm(np * 120.0, 4);
  float hiF = fbm(np * 380.0, 3);
  float dens = clamp(log2(1.0 + L.g * uExposure * uGain * 40.0), 0.0, 6.0) / 6.0;
  float filament = (lowF - 0.5) * 0.12 + (hiF - 0.5) * 0.5;
  L *= exp(uDetail * filament * (0.15 + 0.4 * dens) * uDust);
  vec3 cell = floor(np * 650.0);
  float grain = hash13(cell) + hash13(cell + 17.0) - 1.0;
  L *= 1.0 + uGrain * grain * 0.55;

  // Doppler: surface brightness ~ D^3 (clamped), colour shifts toward blue ahead / red behind
  float bright = min(pow(clamp(D, 0.05, 20.0), uBeam), uBeamCap);
  vec3 tint = vec3(pow(D, -0.55 * uBlue), 1.0, pow(D, 0.55 * uBlue));
  L *= bright * tint;

  // zodiacal light (interplanetary dust): brightest toward the Sun and along the ecliptic plane
  if (uZodi > 0.0) {
    float cosE = dot(n, uSunDirRest);
    float elong = acos(clamp(cosE, -1.0, 1.0));
    // ~23 mag/arcsec^2 at 90 deg elongation, brightening steeply toward the Sun (gegenschein bump at 180 deg)
    float zl = 1.3e-9 * (1.0 + 60.0 / (1.0 + pow(elong / 0.35, 2.0)) + 0.6 * exp(-pow((elong - 3.14159) / 0.25, 2.0)));
    L += vec3(1.0, 0.93, 0.78) * zl * uZodi * uZodiScale;
  }
  vec3 outc = L * uExposure * uGain;
  gl_FragColor = vec4(min(outc, vec3(6.0e4)), 1.0);
}
`;

export const GALAXY_VERT = /* glsl */ `
${GLSL_COMMON}
#define aCorner position.xy
uniform mat3 uView;
uniform vec2 uRes;
uniform float uFocalPx;
uniform vec3 uBeta;
uniform float uGamma;
uniform vec3 uWarpDir;
uniform float uWarpBeta;
uniform float uWarpGamma;
uniform vec3 uDir;        // unit direction to the galaxy (rest frame)
uniform float uSizeRad;   // half-extent of the quad in radians
uniform float uPA;        // position angle (rad, east of north) – applied in the sky tangent plane
uniform vec3 uEast;
uniform vec3 uNorth;
varying vec2 vLocal;
varying float vD;
void main() {
  vec3 right = uEast, up = uNorth;
  vec3 p = normalize(uDir + (aCorner.x * right + aCorner.y * up) * uSizeRad);
  float D1; vec3 n1 = aberrate(p, uBeta, uGamma, D1);
  float D2 = 1.0; vec3 n2 = n1;
  if (uWarpBeta > 0.0) n2 = aberrate(n1, uWarpDir * uWarpBeta, uWarpGamma, D2);
  vD = D1 * D2;
  vec3 v = uView * n2;
  vLocal = aCorner;
  if (v.z > -1e-3) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }
  vec2 ndc = v.xy / -v.z * (uFocalPx / (0.5 * uRes.y));
  ndc.x *= uRes.y / uRes.x;
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`;

export const GALAXY_FRAG = /* glsl */ `
precision highp float;
varying vec2 vLocal;
varying float vD;
uniform float uPA;
uniform float uEll;
uniform float uRh;        // half-light radius in units of the quad half-extent
uniform vec3 uColor;
uniform float uPeak;      // peak radiance (already exposed)
uniform float uFloor;
void main() {
  float c = cos(uPA), s = sin(uPA);
  vec2 p = vec2(c * vLocal.x + s * vLocal.y, -s * vLocal.x + c * vLocal.y);   // x along the major axis
  p.y /= max(1.0 - uEll, 0.15);
  float r = length(p) / max(uRh, 1e-4);
  // Sersic n~1 disc / dSph-like exponential profile with a soft truncation
  float I = exp(-1.68 * r) * (1.0 - smoothstep(0.82, 1.0, length(vLocal)));
  gl_FragColor = vec4(uColor * (uPeak * I * pow(clamp(vD, 0.1, 10.0), 1.5) + uFloor * I), 1.0);
}
`;

// Analytic Milky Way model (thin disc + bulge, with a dust slab) ray-marched from a viewpoint in galactocentric kpc.
// It is only used as a RATIO between the view from the ship and the view from the Sun, applied to the real Gaia map.
export const MWMODEL_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform vec3 uOrigin;      // viewpoint, galactocentric kpc (x toward the Galactic centre from the Sun direction, Sun at (-R0, 0, z0))
uniform vec4 uDisc;        // hR, hz, bulge radius, bulge strength
uniform vec4 uDust;        // dust hR, hz, kappa0 (1/kpc), unused
const float PI = 3.14159265359;
float emis(vec3 p) {
  float R = length(p.xy), z = abs(p.z), r = length(p);
  float disc = exp(-R / uDisc.x) * exp(-z / uDisc.y) + 0.12 * exp(-R / (2.0 * uDisc.x)) * exp(-z / (3.0 * uDisc.y));   // thin + thick disc
  float bulge = uDisc.w * exp(-r / uDisc.z) / (0.4 + r * 0.8);
  return disc + bulge;
}
float kappa(vec3 p) { return uDust.z * exp(-length(p.xy) / uDust.x) * exp(-abs(p.z) / uDust.y); }
void main() {
  float l = (vUv.x - 0.5) * 2.0 * PI, b = (0.5 - vUv.y) * PI;   // matches the sky shader: u = l/2pi + .5, v = .5 - b/pi
  vec3 dir = vec3(cos(b) * cos(l), cos(b) * sin(l), sin(b));
  float s = 0.0, tau = 0.0, sum = 0.0, ds = 0.012;
  for (int i = 0; i < 96; i++) {
    vec3 p = uOrigin + dir * (s + 0.5 * ds);
    float k = kappa(p);
    sum += emis(p) * exp(-tau) * ds;
    tau += k * ds;
    s += ds; ds *= 1.075;
    if (s > 40.0) break;
  }
  gl_FragColor = vec4(sum, tau, 0.0, 1.0);
}
`;
