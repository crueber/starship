// Instanced star sprites: magnitude → radiance, blackbody colour LUT, relativistic aberration / Doppler, warp bunching & streaks.
import { GLSL_COMMON } from './common.js';

export const STAR_VERT = /* glsl */ `
${GLSL_COMMON}
attribute vec3 aPos;      // star position (pc, float32 – exact copy of the catalogue value)
attribute vec2 aPhys;     // x = absolute V magnitude, y = ln(Teff)
#define aCorner position.xy   // quad corner (-1..1)

uniform vec3 uCamHi;      // camera position in pc, split in two floats for ~1e-7 relative precision of (star - camera)
uniform vec3 uCamLo;
uniform mat3 uView;       // rest-frame -> camera axes
uniform vec2 uRes;
uniform float uFocalPx;
uniform vec3 uBeta;
uniform float uGamma;
uniform float uExposure;
uniform float uMagLimit;
uniform float uBrightness;
uniform float uSigma;
uniform float uHalo;
uniform float uHaloAmt;
uniform float uHaloW;
uniform float uSat;
uniform float uBlue;      // temperature shift strength for Doppler
uniform sampler2D uColorLUT;
uniform float uLnTmin;
uniform float uLnTmax;
// warp
uniform vec3 uWarpDir;    // unit heading (rest frame)
uniform float uWarpBeta;  // effective artistic beta (0 = off)
uniform float uWarpGamma;
uniform float uStreak;
uniform float uWarpDim;
uniform float uBeam;
uniform int uHide[8];

varying vec2 vUV;         // pixels, relative to star centre
varying vec3 vColor;
varying float vAmp;
varying vec2 vAxis;       // streak direction in px
varying float vSigmaMajor;
varying float vSigma;
varying float vHalo;
varying float vHW;
varying float vR;

void main() {
  for (int i = 0; i < 8; i++) if (uHide[i] == gl_InstanceID) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }
  vec3 d = (aPos - uCamHi) - uCamLo;
  float dist = max(length(d), 1e-6);
  vec3 n = d / dist;

  // special relativity (ship velocity through the sky)
  float D1;
  vec3 n1 = aberrate(n, uBeta, uGamma, D1);
  // artistic warp-bubble aberration, applied on top
  float D2 = 1.0;
  vec3 n2 = n1;
  if (uWarpBeta > 0.0) n2 = aberrate(n1, uWarpDir * uWarpBeta, uWarpGamma, D2);
  float D = D1 * D2;

  float m = aPhys.x + 5.0 * log2(dist * 0.1) * 0.30102999566;
  // beaming: flux scales as D^2 (energy flux of a moving source seen by a moving observer)
  float E = magToIrradiance(m) * pow(clamp(D1, 0.02, 30.0), uBeam) * mix(1.0, D2 * D2, uWarpDim);
  float lnT = aPhys.y + log(D) * uBlue;
  vec3 col = texture2D(uColorLUT, vec2(clamp((lnT - uLnTmin) / (uLnTmax - uLnTmin), 0.0, 1.0), 0.5)).rgb;
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(lum), col, uSat);

  vec3 v = uView * n2;
  if (v.z > -1e-3) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }

  float sig = uSigma;
  // peak radiance of the PSF core (units: sunlit white diffuse surface = 1); see docs in renderer.js
  float peak = uBrightness * E * uFocalPx * uFocalPx / (2.0 * sig * sig) * uExposure;
  // faint-star cull
  if (peak < 0.0012) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }

  vec2 ndc = v.xy / -v.z * (uFocalPx / (0.5 * uRes.y));
  ndc.x *= uRes.y / uRes.x;
  if (abs(ndc.x) > 1.15 || abs(ndc.y) > 1.15) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }

  // sprite extent: Gaussian core + Moffat halo, and an optional radial streak (warp)
  float rCore = sig * sqrt(2.0 * log(max(peak / 0.0015, 1.0001)));
  float rHalo = uHalo > 0.0 ? uHaloW * sqrt(max(pow(max(peak * uHaloAmt * uHalo / 0.0015, 1.0), 0.6667) - 1.0, 0.0)) : 0.0;
  float R = clamp(max(rCore, min(rHalo, 90.0)), 1.6, 90.0);

  vec2 axis = vec2(1.0, 0.0);
  float stretch = 0.0;
  if (uStreak > 0.0) {
    // radial streak away from the heading point (screen space)
    vec3 hv = uView * uWarpDir;
    vec2 hndc = hv.z < 0.0 ? hv.xy / -hv.z * (uFocalPx / (0.5 * uRes.y)) : normalize(hv.xy + 1e-6) * 10.0;
    hndc.x *= uRes.y / uRes.x;
    vec2 rad = (ndc - hndc) * 0.5 * vec2(uRes.x, uRes.y);
    float rl = length(rad);
    axis = rl > 1e-3 ? rad / rl : vec2(1.0, 0.0);
    // streak length grows with distance from the heading point and with how much the map stretches here (1/D2 away from the bunched front)
    float mag = clamp(1.0 / D - 1.0, 0.0, 6.0);
    stretch = uStreak * (rl * 0.05 + 16.0 * mag);
    stretch = min(stretch, 260.0);
  }
  if (stretch > 0.5) R = min(R, 14.0);                                    // a streak is a thin line: no giant halo (a very bright star such as the Sun would smear into a thick ribbon)
  float sigMajor = sqrt(sig * sig + stretch * stretch * 0.33);
  float aspect = sigMajor / sig;
  vec2 q = aCorner;
  float ext = R * mix(1.0, aspect, step(0.5, stretch));
  vec2 offPx = vec2(q.x * ext, q.y * R);
  // rotate along the streak axis (when stretched)
  if (stretch > 0.5) offPx = axis * (q.x * ext) + vec2(-axis.y, axis.x) * (q.y * R);

  vUV = (stretch > 0.5) ? vec2(q.x * ext, q.y * R) : offPx;
  vAxis = axis;
  vSigmaMajor = sigMajor;
  vSigma = sig;
  vHalo = uHalo * uHaloAmt; vHW = uHaloW; vR = ext;
  vAmp = peak * (sig / sigMajor);
  if (stretch > 0.5) vAmp = 6.0 * vAmp / (6.0 + vAmp);                      // soft limit for streaked stars
  vColor = col;
  vec2 ndcOff = (stretch > 0.5 ? offPx : offPx) * vec2(2.0 / uRes.x, 2.0 / uRes.y);
  gl_Position = vec4(ndc + ndcOff, 0.0, 1.0);
}
`;

export const STAR_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUV;
varying vec3 vColor;
varying float vAmp;
varying vec2 vAxis;
varying float vSigmaMajor;
varying float vSigma;
varying float vHalo;
varying float vHW;
varying float vR;
void main() {
  // vUV is in the (u = along streak, v = across) frame already
  float u = vUV.x, v = vUV.y;
  float core = exp(-0.5 * (u * u / (vSigmaMajor * vSigmaMajor) + v * v / (vSigma * vSigma)));
  float r2 = u * u + v * v;
  // wide veiling halo (scattering in optics): Moffat, ~0.04% of the peak amplitude per unit
  float halo = vHalo * pow(1.0 + r2 / (vHW * vHW), -1.5);
  float win = 1.0 - smoothstep(0.55, 1.0, length(vUV) / max(vR, 1.0));
  float I = vAmp * (core + halo) * win;
  gl_FragColor = vec4(min(vColor * I, vec3(6.0e4)), 1.0);
}
`;
