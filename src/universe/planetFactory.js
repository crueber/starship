// Turns physical parameters (mass, radius, temperature…) into a renderable planet: class, appearance, atmosphere, rings.
import { mulberry32, hash2, clamp } from '../core/math.js';
import { equilibriumTemp } from './starTraits.js';

export const GM_EARTH = 398600.435436;       // km³/s²
export const R_EARTH = 6371.0;
export const GM_JUPITER = 126686531.9;
export const R_JUPITER = 69911;

const rgb = (r, g, b) => [r / 255, g / 255, b / 255];

/** Chen & Kipping (2017)-style mass–radius relation, Earth units, with a Jupiter-radius plateau. */
export function radiusFromMass(mE) {
  if (mE < 2.04) return Math.pow(mE, 0.279);
  const nep = 0.808 * Math.pow(mE, 0.589);
  const jov = 11.2 * Math.pow(mE / 318, -0.04);
  return Math.min(nep, jov);
}
export function massFromRadius(rE) {
  if (rE < 1.2) return Math.pow(rE, 1 / 0.279);
  if (rE < 8) return Math.pow(rE / 0.808, 1 / 0.589);
  return 318 * Math.pow(Math.max(rE, 8) / 11.2, 1.5);        // radius barely constrains giant masses; a gentle heuristic
}

export function classify(mE, rE) {
  if (rE >= 8 || mE >= 100) return 'gas';
  if (rE >= 3.2 || mE >= 17) return 'ice';              // ice giant / Neptune-like
  if (rE >= 1.7 || mE >= 5.5) return 'subneptune';      // mini-Neptune / super-Earth with thick envelope
  if (mE < 0.02) return 'dwarf';
  return 'rocky';
}

const PALETTES = {
  desert: [rgb(176, 138, 96), rgb(210, 178, 128), rgb(236, 214, 170), rgb(120, 88, 62)],
  rust: [rgb(150, 82, 52), rgb(190, 112, 72), rgb(224, 160, 116), rgb(96, 52, 36)],
  grey: [rgb(104, 100, 96), rgb(140, 136, 130), rgb(176, 172, 166), rgb(66, 64, 62)],
  basalt: [rgb(58, 52, 50), rgb(86, 78, 74), rgb(124, 112, 104), rgb(32, 28, 28)],
  olive: [rgb(98, 96, 62), rgb(132, 126, 84), rgb(170, 160, 112), rgb(64, 62, 40)],
  violet: [rgb(92, 78, 96), rgb(126, 108, 130), rgb(166, 148, 168), rgb(58, 48, 62)],
  ice: [rgb(206, 220, 232), rgb(236, 244, 250), rgb(255, 255, 255), rgb(150, 176, 204)],
  lava: [rgb(38, 28, 26), rgb(66, 44, 38), rgb(150, 56, 20), rgb(255, 140, 40)],
  venus: [rgb(210, 170, 110), rgb(232, 204, 150), rgb(246, 232, 190), rgb(180, 130, 80)],
};

/**
 * Appearance for a planet of the given class. `ctx` = { teq, mE, rE, inHz, aAu, seed, hasMoons }.
 * Returns { look, atmosphere, rings, label } – a deterministic function of the seed.
 */
export function appearance(cls, ctx) {
  const rng = mulberry32(hash2(ctx.seed, 0x5eed));
  const out = { look: null, atmosphere: null, rings: null, label: '' };
  const teq = ctx.teq;
  const seedF = rng() * 100;

  if (cls === 'gas' || cls === 'ice') {
    let colors, label, tint, bands, turb, hz = false;
    if (cls === 'gas') {
      if (teq > 1500) { colors = [rgb(40, 30, 40), rgb(110, 50, 70), rgb(190, 80, 60), rgb(30, 22, 34)]; label = 'ultra-hot gas giant'; tint = [1, 0.5, 0.4]; bands = 0.25; turb = 0.5; }
      else if (teq > 900) { colors = [rgb(30, 34, 52), rgb(52, 62, 96), rgb(86, 100, 150), rgb(20, 24, 36)]; label = 'hot gas giant'; tint = [0.5, 0.65, 1]; bands = 0.3; turb = 0.45; }
      else if (teq > 400) { colors = rgb3(rng, [[182, 150, 120], [222, 196, 160], [140, 110, 90], [244, 232, 210]]); label = 'warm gas giant'; tint = [0.9, 0.9, 1]; bands = 0.6; turb = 0.6; }
      else if (teq > 160) { colors = rng() < 0.5 ? [rgb(176, 130, 96), rgb(222, 190, 150), rgb(120, 86, 66), rgb(242, 228, 206)] : [rgb(190, 160, 120), rgb(226, 204, 164), rgb(150, 122, 92), rgb(246, 238, 216)]; label = 'cool gas giant'; tint = [1, 0.95, 0.85]; bands = 0.85; turb = 0.7; }
      else { colors = [rgb(196, 176, 136), rgb(224, 208, 170), rgb(168, 148, 116), rgb(240, 232, 208)]; label = 'cold gas giant'; tint = [1, 0.93, 0.78]; bands = 0.55; turb = 0.4; }
    } else {
      colors = teq > 400 ? [rgb(70, 110, 170), rgb(100, 150, 205), rgb(150, 190, 230), rgb(50, 80, 130)] : rng() < 0.5 ? [rgb(120, 190, 205), rgb(160, 218, 228), rgb(196, 238, 244), rgb(90, 150, 170)] : [rgb(50, 80, 190), rgb(70, 110, 215), rgb(120, 156, 235), rgb(36, 56, 140)];
      label = 'ice giant'; tint = [0.7, 0.85, 1]; bands = 0.18; turb = 0.35;
    }
    out.look = { kind: 'proc', style: 'gas', colors, p: { bands, turb, spot: rng() < 0.5 ? 0.8 : 0.2, seed: seedF } };
    out.atmosphere = { hKm: 24 + rng() * 40, topKm: 300, rayleigh: [Math.max(2e-3, 6e-3 * (1.1 - tint[0] * 0.6)), 4.5e-3, 6.5e-3 * (0.5 + tint[2] * 0.7)], mie: 0.5e-3, mieG: 0.5, mieH: 25, tint, strength: 1.0 };
    out.label = label;
    const ringChance = ctx.ringChance ?? 0.18;
    if (rng() < ringChance && teq < 900) out.rings = makeRings(rng, cls);
    return out;
  }

  // solid worlds
  const hot = teq > 700, warm = teq > 330, temperate = teq > 235, cold = teq > 120;
  const thick = ctx.mE > 3.5 || (ctx.mE > 0.55 && rng() < 0.4);
  if (cls === 'subneptune') {
    const colors = hot ? [rgb(120, 90, 80), rgb(170, 130, 110), rgb(210, 180, 160), rgb(80, 60, 56)] : rng() < 0.5 ? [rgb(170, 190, 200), rgb(200, 216, 224), rgb(226, 236, 240), rgb(130, 154, 168)] : [rgb(190, 176, 150), rgb(220, 206, 180), rgb(238, 228, 206), rgb(150, 136, 112)];
    out.look = { kind: 'proc', style: 'gas', colors, p: { bands: 0.12, turb: 0.3, spot: 0.1, seed: seedF } };
    out.atmosphere = { hKm: 30, topKm: 220, rayleigh: [2.5e-3, 4.5e-3, 8e-3], mie: 1.0e-3, mieG: 0.5, mieH: 20, tint: [0.9, 0.95, 1], strength: 1.0 };
    out.label = hot ? 'hot sub-Neptune' : 'sub-Neptune / mini-Neptune';
    return out;
  }
  if (cls === 'dwarf') {
    out.look = { kind: 'proc', style: rng() < 0.5 ? 'rock' : 'ice', colors: shift(PALETTES[cold ? (rng() < 0.5 ? 'ice' : 'rust') : 'grey'], rng), p: { crater: 0.4 + rng() * 0.4, bump: 0.5, ice: cold ? 0.8 : 0.1 } };
    out.label = cold ? 'icy dwarf planet' : 'rocky dwarf planet';
    return out;
  }
  // rocky planets
  if (hot && teq > 1200) {
    out.look = { kind: 'proc', style: 'lava', colors: PALETTES.lava, p: { crater: 0.1, bump: 0.5, lava: 1.0, seed: seedF } };
    out.label = 'molten lava world';
    if (thick) out.atmosphere = { hKm: 12, topKm: 60, rayleigh: [3e-3, 3e-3, 4e-3], mie: 0.01, mieG: 0.6, mieH: 10, tint: [1, 0.55, 0.3], strength: 0.6 };
    return out;
  }
  if (ctx.inHz && ctx.mE > 0.4 && ctx.mE < 4 && rng() < 0.62) {
    // Earth-like candidate (fictional/estimated): oceans, continents, clouds, air
    const ocean = 0.45 + rng() * 0.4;
    out.look = { kind: 'proc', style: 'ocean', colors: [rgb(18, 52, 110), rgb(54, 110, 66), rgb(160, 138, 96), rgb(240, 244, 248)], p: { ocean, cloud: 0.45 + rng() * 0.3, ice: 0.25 + rng() * 0.4, bump: 0.15, seed: seedF, spec: 0.6 } };
    out.atmosphere = { hKm: 8.5, topKm: 100, rayleigh: [5.8e-3, 13.5e-3, 33.1e-3], mie: 3.0e-3, mieG: 0.76, mieH: 1.8, tint: [1, 1, 1], strength: 1 };
    out.label = 'temperate ocean-continent world';
    return out;
  }
  let pal;
  if (hot) pal = rng() < 0.6 ? 'basalt' : 'venus';
  else if (warm) pal = rng() < 0.5 ? 'venus' : 'desert';
  else if (temperate) pal = 'desert';
  else if (cold) pal = rng() < 0.55 ? 'rust' : 'grey';
  else pal = 'ice';
  if (!hot && !cold && rng() < 0.3) pal = ['olive', 'violet', 'grey', 'rust'][Math.floor(rng() * 4)];
  const colors = shift(PALETTES[pal], rng);
  const venusLike = thick && warm && ctx.mE > 0.5 && (pal === 'venus' || rng() < 0.4);
  if (venusLike) {
    out.look = { kind: 'proc', style: 'gas', colors: PALETTES.venus, p: { bands: 0.1, turb: 0.5, spot: 0, seed: seedF } };
    out.atmosphere = { hKm: 15, topKm: 70, rayleigh: [1e-3, 1.8e-3, 3.5e-3], mie: 0.06, mieG: 0.4, mieH: 12, tint: [1, 0.92, 0.72], strength: 1.5, opaque: true };
    out.label = 'cloud-wrapped greenhouse world';
    return out;
  }
  out.look = { kind: 'proc', style: pal === 'ice' ? 'ice' : 'rock', colors, p: { crater: thick ? 0.35 : 0.8, bump: thick ? 0.5 : 0.8, ice: pal === 'ice' ? 0.9 : cold ? 0.35 : 0, seed: seedF } };
  if (thick && ctx.mE > 0.25) {
    const dens = clamp(ctx.mE / 1.5, 0.15, 1.6);
    out.atmosphere = { hKm: 9, topKm: 90, rayleigh: [5.8e-3 * dens, 13.5e-3 * dens, 33.1e-3 * dens], mie: 2e-3 * dens, mieG: 0.7, mieH: 3, tint: pal === 'rust' ? [1, 0.75, 0.55] : [1, 1, 1], strength: 0.8 };
  }
  out.label = ({ desert: 'arid desert world', rust: 'cold rust-red world', grey: 'airless rocky world', basalt: 'scorched basalt world', olive: 'olive-grey rocky world', violet: 'violet-grey rocky world', ice: 'frozen ice world', venus: 'hot dry world' })[pal] + (out.atmosphere ? ' with atmosphere' : '');
  return out;
}

function rgb3(rng, base) { return base.map(([r, g, b]) => rgb(clamp(r + (rng() - 0.5) * 36, 0, 255), clamp(g + (rng() - 0.5) * 30, 0, 255), clamp(b + (rng() - 0.5) * 30, 0, 255))); }
function shift(pal, rng) { const k = 0.9 + rng() * 0.2, dr = (rng() - 0.5) * 0.06, db = (rng() - 0.5) * 0.06; return pal.map(([r, g, b]) => [clamp(r * k + dr, 0, 1), clamp(g * k, 0, 1), clamp(b * k + db, 0, 1)]); }

function makeRings(rng, cls) {
  const inner = 1.35 + rng() * 0.5, outer = inner + 0.35 + rng() * 0.9;
  const dusty = rng() < 0.4;
  return [
    { r0: inner, r1: inner + (outer - inner) * 0.35, tau: 0.15 + rng() * 0.2, relative: true },
    { r0: inner + (outer - inner) * 0.4, r1: outer, tau: dusty ? 0.1 : 0.6 + rng() * 0.5, relative: true },
  ];
}

export { PALETTES, equilibriumTemp };
