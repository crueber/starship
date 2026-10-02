// Post-processing: dual-filter bloom (energy-preserving), filmic tone mapping, film response.
import { GLSL_COMMON } from './common.js';

export const POST_VERT = /* glsl */ `
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

// Karis-averaged 13-tap downsample (first level) / plain 13-tap downsample
export const DOWN_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uTexel;     // 1 / source size
uniform float uKaris;
uniform float uCap;
vec3 s(vec2 o) { vec3 c = texture2D(tSrc, vUv + o * uTexel).rgb; return (isnan(c.r + c.g + c.b) || isinf(c.r + c.g + c.b)) ? vec3(0.0) : clamp(c, vec3(0.0), vec3(uCap)); }
float kw(vec3 c) { return 1.0 / (1.0 + dot(c, vec3(0.2126, 0.7152, 0.0722))); }
void main() {
  vec3 a = s(vec2(-2,  2)), b = s(vec2(0,  2)), c = s(vec2(2,  2));
  vec3 d = s(vec2(-2,  0)), e = s(vec2(0,  0)), f = s(vec2(2,  0));
  vec3 g = s(vec2(-2, -2)), h = s(vec2(0, -2)), i = s(vec2(2, -2));
  vec3 j = s(vec2(-1,  1)), k = s(vec2(1,  1)), l = s(vec2(-1, -1)), m = s(vec2(1, -1));
  vec3 r;
  if (uKaris > 0.5) {
    vec3 g0 = (a + b + d + e) * 0.25, g1 = (b + c + e + f) * 0.25, g2 = (d + e + g + h) * 0.25, g3 = (e + f + h + i) * 0.25, g4 = (j + k + l + m) * 0.25;
    r = g0 * 0.125 * kw(g0) + g1 * 0.125 * kw(g1) + g2 * 0.125 * kw(g2) + g3 * 0.125 * kw(g3) + g4 * 0.5 * kw(g4);
    r /= (0.125 * (kw(g0) + kw(g1) + kw(g2) + kw(g3)) + 0.5 * kw(g4));
  } else {
    r = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  }
  gl_FragColor = vec4(r, 1.0);
}
`;

export const UP_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;      // lower (smaller) level
uniform sampler2D tAdd;      // this level's own downsampled image
uniform vec2 uTexel;         // 1 / size of tSrc
uniform float uRadius;
uniform float uMix;
void main() {
  vec2 t = uTexel * uRadius;
  vec3 c = texture2D(tSrc, vUv + vec2(-t.x,  t.y)).rgb * 1.0 + texture2D(tSrc, vUv + vec2(0.0,  t.y)).rgb * 2.0 + texture2D(tSrc, vUv + vec2( t.x,  t.y)).rgb * 1.0
         + texture2D(tSrc, vUv + vec2(-t.x, 0.0)).rgb * 2.0 + texture2D(tSrc, vUv).rgb * 4.0 + texture2D(tSrc, vUv + vec2( t.x, 0.0)).rgb * 2.0
         + texture2D(tSrc, vUv + vec2(-t.x, -t.y)).rgb * 1.0 + texture2D(tSrc, vUv + vec2(0.0, -t.y)).rgb * 2.0 + texture2D(tSrc, vUv + vec2( t.x, -t.y)).rgb * 1.0;
  c /= 16.0;
  gl_FragColor = vec4(texture2D(tAdd, vUv).rgb * (1.0 - uMix) + c * uMix, 1.0);
}
`;

export const COMPOSITE_FRAG = /* glsl */ `
precision highp float;
${GLSL_COMMON}
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uBloom;
uniform float uSaturation;
uniform float uContrast;
uniform float uGrain;
uniform float uVignette;
uniform float uCA;
uniform float uTime;
uniform vec2 uRes;
uniform float uFlash;      // warp collapse flash
uniform vec3 uFlashColor;
uniform vec2 uFlashPos;

// ACES filmic (Narkowicz) – keeps highlights from clipping to flat white too abruptly
vec3 aces(vec3 x) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
vec3 srgb(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }

void main() {
  vec2 uv = vUv;
  vec2 cc = uv - 0.5;
  float r2 = dot(cc, cc);
  // lateral chromatic aberration (barely perceptible, like a real lens)
  vec2 off = cc * uCA * (1.0 + 2.0 * r2);
  vec3 col;
  col.r = texture2D(tScene, uv + off).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - off).b;
  if (isnan(col.r + col.g + col.b) || isinf(col.r + col.g + col.b)) col = vec3(0.0);
  col = clamp(col, vec3(0.0), vec3(6.0e4));
  vec3 bl = texture2D(tBloom, uv).rgb;
  if (isnan(bl.r + bl.g + bl.b) || isinf(bl.r + bl.g + bl.b)) bl = vec3(0.0);
  col = col * (1.0 - 0.5 * uBloom) + bl * uBloom;
  if (uFlash > 0.0) {
    float fr = length((uv - uFlashPos) * vec2(uRes.x / uRes.y, 1.0));
    col += uFlashColor * uFlash * exp(-fr * fr * 7.0) * 3.0;
  }
  col *= 1.0 - uVignette * smoothstep(0.1, 0.8, r2 * 2.0);
  vec3 t = aces(col);
  float lum = dot(t, vec3(0.2126, 0.7152, 0.0722));
  t = mix(vec3(lum), t, uSaturation);
  t = (t - 0.18) * uContrast + 0.18;
  t = max(t, 0.0);
  vec3 o = srgb(t);
  // film grain + dithering (tiny, avoids banding in the dark sky)
  float n = hash12(gl_FragCoord.xy + fract(uTime) * 91.7) - 0.5;
  float n2 = hash12(gl_FragCoord.xy * 1.37 + 17.0 + fract(uTime * 1.3) * 53.1) - 0.5;
  o += (n + n2) * (uGrain * (0.4 + 0.6 * (1.0 - lum)) + 1.0 / 255.0);
  gl_FragColor = vec4(o, 1.0);
}
`;

// Warp-bubble gravitational lens: radial remap around the ship's screen position (space compression ahead/behind the bubble wall)
export const LENS_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uCenter;      // ship position in uv
uniform float uRadius;     // bubble wall radius, in units of screen height
uniform float uStrength;   // 0..1 formation
uniform float uAspect;
uniform float uTime;
uniform float uFlow;
void main() {
  vec2 p = (vUv - uCenter) * vec2(uAspect, 1.0);
  float r = length(p);
  float w = uRadius * 0.34;
  float x = (r - uRadius) / w;
  // refraction profile: strong gradient at the wall, mild inside (flat space) and a long tail outside
  float prof = exp(-x * x) * (-x) * 1.2 + 0.35 * exp(-max(x, 0.0) * 0.9) * smoothstep(-6.0, 0.0, x);
  float shift = uStrength * uRadius * 0.55 * prof;
  float ripple = 1.0 + 0.018 * uStrength * sin(atan(p.y, p.x) * 9.0 + uTime * 1.7) * exp(-x * x);
  vec2 dir = r > 1e-5 ? p / r : vec2(0.0);
  vec2 q = (p - dir * shift * ripple) / vec2(uAspect, 1.0) + uCenter;
  // chromatic split proportional to the lens shift
  vec2 d = dir * shift * 0.003 / vec2(uAspect, 1.0);
  vec3 c;
  c.r = texture2D(tSrc, q + d).r;
  c.g = texture2D(tSrc, q).g;
  c.b = texture2D(tSrc, q - d).b;
  gl_FragColor = vec4(c, 1.0);
}
`;

export const COPY_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).rgb, 1.0); }
`;
