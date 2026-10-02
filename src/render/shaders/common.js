// Shared GLSL snippets.
export const GLSL_COMMON = /* glsl */ `
const float PI = 3.14159265359;
const float TAU = 6.28318530718;

// ── special relativity ─────────────────────────────────────────────────────────────
// n: unit vector from observer to source in the rest frame; beta: observer velocity / c (rest frame).
// returns the apparent direction in the observer frame; D = Doppler factor (observed/emitted frequency)
vec3 aberrate(vec3 n, vec3 beta, float gamma, out float D) {
  float b = length(beta);
  if (b < 1e-7) { D = 1.0; return n; }
  vec3 bh = beta / b;
  float c = dot(n, bh);
  D = gamma * (1.0 + b * c);
  return (n + ((gamma - 1.0) * c + gamma * b) * bh) / D;
}
// inverse: observer-frame direction np -> rest-frame direction; D = observed/emitted frequency for that ray
vec3 deaberrate(vec3 np, vec3 beta, float gamma, out float D) {
  float b = length(beta);
  if (b < 1e-7) { D = 1.0; return np; }
  vec3 bh = beta / b;
  float c = dot(np, bh);
  float den = gamma * (1.0 - b * c);
  D = 1.0 / den;
  return (np + ((gamma - 1.0) * c - gamma * b) * bh) / den;
}

// ── photometry ─────────────────────────────────────────────────────────────────────
// Apparent V magnitude -> irradiance in units of the solar constant at 1 AU (m = -26.74)
float magToIrradiance(float m) { return exp2(-0.4 * (m + 26.74) * 3.321928095); }

float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 hash32(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yzz) * p3.zyx); }
float hash13(vec3 p3) { p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }

// 3D value noise & fbm (cheap, directional-artifact free enough for planets/sky)
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i), n100 = hash13(i + vec3(1,0,0)), n010 = hash13(i + vec3(0,1,0)), n110 = hash13(i + vec3(1,1,0));
  float n001 = hash13(i + vec3(0,0,1)), n101 = hash13(i + vec3(1,0,1)), n011 = hash13(i + vec3(0,1,1)), n111 = hash13(i + vec3(1,1,1));
  return mix(mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y), mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
}
float fbm(vec3 p, int oct) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 8; i++) { if (i >= oct) break; s += a * vnoise(p); p = p * 2.03 + vec3(11.7, 3.1, 7.3); a *= 0.5; }
  return s;
}
float ridged(vec3 p, int oct) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 8; i++) { if (i >= oct) break; float n = 1.0 - abs(vnoise(p) * 2.0 - 1.0); s += a * n * n; p = p * 2.07 + vec3(5.3, 1.7, 9.1); a *= 0.5; }
  return s;
}
`;

export const GLSL_LOGDEPTH_VERT = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_vertex>
`;
export const GLSL_LOGDEPTH_FRAG = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_fragment>
`;
