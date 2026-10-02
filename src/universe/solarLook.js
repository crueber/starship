// Appearance descriptors for Solar System bodies. Real global maps are used where a real map was downloaded (tex:…);
// every other surface is a procedural shader, and says so in `note` (shown in the HUD).
const rgb = (r, g, b) => [r / 255, g / 255, b / 255];

// atmosphere: scale height (km), thickness (km), Rayleigh β at the surface (1/km, per RGB), Mie β (1/km), Mie anisotropy g, haze tint, density multiplier
const EARTHLIKE = { hKm: 8.5, topKm: 100, rayleigh: [5.8e-3, 13.5e-3, 33.1e-3], mie: 3.0e-3, mieG: 0.76, mieH: 1.8, tint: [1, 1, 1], strength: 1 };

export const SOLAR_LOOK = {
  sun: { look: { kind: 'star', tex: 'sun' }, info: 'G2V star · 5772 K' },
  mercury: { look: { kind: 'tex', tex: 'mercury', bump: 0.35, crater: 0.9, spec: 0.05 }, info: 'Real global map (Solar System Scope / NASA)' },
  venus: { look: { kind: 'tex', tex: 'venus_atmosphere', bump: 0.0, spec: 0.0 },
    atmosphere: { hKm: 15, topKm: 70, rayleigh: [1.0e-3, 1.8e-3, 3.5e-3], mie: 0.06, mieG: 0.4, mieH: 12, tint: [1.0, 0.92, 0.72], strength: 1.6, opaque: true }, info: 'Cloud-top map; the surface is hidden under ~70 km of cloud' },
  earth: { look: { kind: 'tex', tex: 'earth_daymap', night: 'earth_nightmap', clouds: 'earth_clouds', ocean: true, bump: 0.15, spec: 0.55 },
    atmosphere: { ...EARTHLIKE }, info: 'Real global maps; day/night follows the actual date' },
  moon: { look: { kind: 'tex', tex: 'moon', bump: 0.45, crater: 1.0, spec: 0.0 }, info: 'Real global map' },
  mars: { look: { kind: 'tex', tex: 'mars', bump: 0.35, crater: 0.6, spec: 0.0 },
    atmosphere: { hKm: 11, topKm: 80, rayleigh: [2.0e-5, 4.0e-5, 9.0e-5], mie: 1.4e-4, mieG: 0.7, mieH: 11, tint: [1.0, 0.72, 0.5], strength: 1.0 }, info: 'Real global map' },
  jupiter: { look: { kind: 'tex', tex: 'jupiter', gas: true, spec: 0 },
    atmosphere: { hKm: 27, topKm: 280, rayleigh: [2.6e-3, 4.8e-3, 9.5e-3], mie: 0.5e-3, mieG: 0.5, mieH: 25, tint: [1.0, 0.95, 0.85], strength: 0.9 }, info: 'Real global map' },
  saturn: { look: { kind: 'tex', tex: 'saturn', gas: true, spec: 0, ring: 'saturn_ring_alpha' },
    atmosphere: { hKm: 60, topKm: 500, rayleigh: [2.0e-3, 3.8e-3, 7.5e-3], mie: 0.4e-3, mieG: 0.5, mieH: 50, tint: [1.0, 0.92, 0.75], strength: 0.9 }, info: 'Real global map; rings from published boundaries + Cassini-era profile' },
  uranus: { look: { kind: 'tex', tex: 'uranus', gas: true, spec: 0 },
    atmosphere: { hKm: 27, topKm: 300, rayleigh: [5e-3, 3.2e-3, 2.0e-3], mie: 0.5e-3, mieG: 0.5, mieH: 25, tint: [0.7, 0.95, 1.0], strength: 1.0 }, info: 'Real global map' },
  neptune: { look: { kind: 'tex', tex: 'neptune', gas: true, spec: 0 },
    atmosphere: { hKm: 20, topKm: 280, rayleigh: [2.5e-3, 3.8e-3, 6.0e-3], mie: 0.5e-3, mieG: 0.5, mieH: 20, tint: [0.55, 0.75, 1.0], strength: 1.2 }, info: 'Real global map' },

  // dwarf planets – procedural (no global map was downloaded)
  ceres: { look: { kind: 'proc', style: 'rock', colors: [rgb(92, 88, 84), rgb(124, 120, 114), rgb(190, 188, 182), rgb(60, 58, 56)], p: { crater: 0.9, bump: 0.7, spot: 0.15 } }, info: 'Procedural surface (no global map)' },
  pluto: { look: { kind: 'proc', style: 'pluto', colors: [rgb(150, 104, 76), rgb(205, 170, 140), rgb(240, 228, 215), rgb(92, 60, 46)], p: { crater: 0.3, bump: 0.35, ice: 0.5 } },
    atmosphere: { hKm: 50, topKm: 250, rayleigh: [3e-6, 5e-6, 1.2e-5], mie: 4e-5, mieG: 0.8, mieH: 50, tint: [0.7, 0.8, 1.0], strength: 1 }, info: 'Procedural surface in Pluto-like colours (no global map)' },
  haumea: { look: { kind: 'proc', style: 'ice', colors: [rgb(200, 205, 210), rgb(235, 238, 240), rgb(120, 90, 80), rgb(170, 175, 185)], p: { crater: 0.2, bump: 0.2, ice: 0.9 } }, info: 'Procedural surface' },
  makemake: { look: { kind: 'proc', style: 'rock', colors: [rgb(160, 90, 62), rgb(196, 130, 96), rgb(226, 190, 160), rgb(110, 60, 44)], p: { crater: 0.15, bump: 0.25, ice: 0.3 } }, info: 'Procedural surface' },
  eris: { look: { kind: 'proc', style: 'ice', colors: [rgb(225, 228, 232), rgb(246, 247, 248), rgb(200, 195, 190), rgb(180, 186, 195)], p: { crater: 0.1, bump: 0.1, ice: 1.0 } }, info: 'Procedural surface' },

  // moons – procedural
  phobos: { look: { kind: 'proc', style: 'rock', colors: [rgb(78, 72, 68), rgb(104, 96, 90), rgb(130, 120, 112), rgb(50, 46, 44)], p: { crater: 1.0, bump: 1.0 } }, info: 'Procedural surface' },
  deimos: { look: { kind: 'proc', style: 'rock', colors: [rgb(92, 84, 76), rgb(120, 110, 100), rgb(146, 136, 124), rgb(64, 58, 52)], p: { crater: 0.6, bump: 0.8 } }, info: 'Procedural surface' },
  io: { look: { kind: 'proc', style: 'io', colors: [rgb(196, 180, 112), rgb(226, 216, 168), rgb(184, 98, 50), rgb(36, 32, 30)], p: { crater: 0.0, bump: 0.25, spot: 0.9 } }, info: 'Procedural surface in Io colours (sulfur plains, dark calderas)' },
  europa: { look: { kind: 'proc', style: 'europa', colors: [rgb(226, 220, 205), rgb(246, 244, 238), rgb(150, 100, 72), rgb(196, 180, 150)], p: { crater: 0.03, bump: 0.12, ice: 1.0, stripe: 0.9 } }, info: 'Procedural surface (ice shell with reddish linea)' },
  ganymede: { look: { kind: 'proc', style: 'ganymede', colors: [rgb(104, 94, 84), rgb(150, 142, 132), rgb(210, 208, 202), rgb(70, 64, 58)], p: { crater: 0.7, bump: 0.55, ice: 0.6, stripe: 0.4 } }, info: 'Procedural surface (dark ancient terrain + bright grooved terrain)' },
  callisto: { look: { kind: 'proc', style: 'rock', colors: [rgb(70, 60, 52), rgb(98, 86, 74), rgb(190, 188, 184), rgb(44, 38, 34)], p: { crater: 1.0, bump: 0.8, ice: 0.15 } }, info: 'Procedural surface (saturated cratering)' },
  mimas: { look: { kind: 'proc', style: 'ice', colors: [rgb(150, 152, 154), rgb(182, 184, 186), rgb(208, 210, 212), rgb(110, 112, 114)], p: { crater: 1.0, bump: 0.8, bigCrater: 1 } }, info: 'Procedural surface (with a Herschel-like giant crater)' },
  enceladus: { look: { kind: 'proc', style: 'ice', colors: [rgb(238, 242, 246), rgb(252, 253, 254), rgb(214, 224, 236), rgb(190, 205, 222)], p: { crater: 0.25, bump: 0.2, ice: 1.0, stripe: 0.6 } }, info: 'Procedural surface (very bright ice)' },
  tethys: { look: { kind: 'proc', style: 'ice', colors: [rgb(190, 192, 194), rgb(220, 222, 224), rgb(238, 240, 242), rgb(150, 152, 154)], p: { crater: 0.8, bump: 0.6 } }, info: 'Procedural surface' },
  dione: { look: { kind: 'proc', style: 'ice', colors: [rgb(184, 186, 188), rgb(214, 216, 218), rgb(236, 238, 240), rgb(140, 142, 144)], p: { crater: 0.7, bump: 0.55, stripe: 0.3 } }, info: 'Procedural surface' },
  rhea: { look: { kind: 'proc', style: 'ice', colors: [rgb(176, 178, 180), rgb(206, 208, 210), rgb(230, 232, 234), rgb(130, 132, 134)], p: { crater: 0.95, bump: 0.7 } }, info: 'Procedural surface' },
  iapetus: { look: { kind: 'proc', style: 'iapetus', colors: [rgb(38, 30, 26), rgb(70, 60, 54), rgb(226, 226, 224), rgb(190, 190, 188)], p: { crater: 0.8, bump: 0.6 } }, info: 'Procedural surface (two-tone: dark leading hemisphere)' },
  titan: { look: { kind: 'proc', style: 'haze', colors: [rgb(196, 128, 52), rgb(220, 160, 78), rgb(168, 100, 40), rgb(120, 70, 30)], p: { bump: 0, bands: 0.15 } },
    atmosphere: { hKm: 40, topKm: 400, rayleigh: [3e-3, 6e-3, 14e-3], mie: 4.0e-2, mieG: 0.55, mieH: 45, tint: [1.0, 0.62, 0.22], strength: 1.5, opaque: true }, info: 'Thick orange haze (surface not visible), procedural shading' },
  miranda: { look: { kind: 'proc', style: 'ice', colors: [rgb(150, 150, 152), rgb(180, 180, 182), rgb(206, 206, 208), rgb(104, 104, 106)], p: { crater: 0.6, bump: 0.9, stripe: 0.5 } }, info: 'Procedural surface' },
  ariel: { look: { kind: 'proc', style: 'ice', colors: [rgb(160, 160, 160), rgb(190, 190, 190), rgb(214, 214, 214), rgb(120, 120, 120)], p: { crater: 0.5, bump: 0.6, stripe: 0.5 } }, info: 'Procedural surface' },
  umbriel: { look: { kind: 'proc', style: 'rock', colors: [rgb(78, 78, 80), rgb(98, 98, 100), rgb(150, 150, 152), rgb(54, 54, 56)], p: { crater: 0.9, bump: 0.6 } }, info: 'Procedural surface' },
  titania: { look: { kind: 'proc', style: 'ice', colors: [rgb(128, 120, 112), rgb(158, 150, 142), rgb(190, 184, 176), rgb(92, 86, 80)], p: { crater: 0.7, bump: 0.6, stripe: 0.25 } }, info: 'Procedural surface' },
  oberon: { look: { kind: 'proc', style: 'rock', colors: [rgb(112, 102, 96), rgb(140, 130, 122), rgb(186, 178, 170), rgb(78, 70, 66)], p: { crater: 0.9, bump: 0.7 } }, info: 'Procedural surface' },
  triton: { look: { kind: 'proc', style: 'triton', colors: [rgb(214, 186, 170), rgb(238, 220, 206), rgb(246, 238, 232), rgb(150, 118, 104)], p: { crater: 0.1, bump: 0.3, ice: 0.7 } },
    atmosphere: { hKm: 8, topKm: 800, rayleigh: [1e-6, 2e-6, 5e-6], mie: 3e-6, mieG: 0.8, mieH: 10, tint: [0.8, 0.85, 1.0], strength: 0.6 }, info: 'Procedural surface (pink-cream nitrogen frost)' },
  proteus: { look: { kind: 'proc', style: 'rock', colors: [rgb(70, 68, 66), rgb(92, 90, 88), rgb(120, 118, 114), rgb(46, 44, 42)], p: { crater: 1.0, bump: 0.9 } }, info: 'Procedural surface' },
  charon: { look: { kind: 'proc', style: 'charon', colors: [rgb(150, 146, 142), rgb(184, 180, 176), rgb(120, 70, 56), rgb(210, 208, 204)], p: { crater: 0.4, bump: 0.4 } }, info: 'Procedural surface (grey with a reddish polar cap)' },
};
