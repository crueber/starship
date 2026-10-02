// Solar-system data: JPL planetary mean elements + JPL Horizons (moons, physical data) + JPL SBDB (dwarf planets).
import fs from 'node:fs';
import path from 'node:path';
import { RAW, ensureFile, getTextCached, parseVizierTSV, num, log, warn, head, reportMissing, flags, sleep } from './util.mjs';
import * as A from '../../shared/astro.js';

// ─────────────────────────────────────────────────────────────────────────────────────────────
// Hand-entered reference values. These are NOT downloaded; they are standard published constants
// (IAU WGCCRE 2015 pole/rotation, NASA planetary fact sheets for geometric albedos) that the
// JPL pages used above do not provide in a uniform machine-readable form. They are listed
// verbatim in manifest.json under "curated" so nothing here is hidden.
// pole = [RA, Dec] of the north rotation pole (ICRF, deg); rotH = sidereal rotation period in hours (negative = retrograde)
// w = [W0 deg, rate deg/day]: IAU prime-meridian angle at J2000 and its rate (sign = direction of rotation)
// ─────────────────────────────────────────────────────────────────────────────────────────────
export const CURATED = {
  sun:     { pole: [286.13, 63.87],   rotH: 609.12,    albedo: null, w: [84.176, 14.1844] },
  mercury: { pole: [281.0103, 61.4155], rotH: 1407.6, w: [329.5469, 6.1385025],  albedo: 0.142, R: 2439.4, GM: 22031.868 },
  venus:   { pole: [272.76, 67.16],   rotH: -5832.44, w: [160.20, -1.4813688],  albedo: 0.689, R: 6051.8, GM: 324858.592 },
  earth:   { pole: [0.0, 90.0],       rotH: 23.9344696, w: [190.147, 360.9856235], albedo: 0.434, R: 6371.0, GM: 398600.435436 },
  mars:    { pole: [317.681, 52.886], rotH: 24.6229, w: [176.630, 350.89198226],  albedo: 0.170, R: 3389.5, GM: 42828.375 },
  jupiter: { pole: [268.057, 64.495], rotH: 9.9250, w: [284.95, 870.5366420],   albedo: 0.538, R: 69911, GM: 126686531.9 },
  saturn:  { pole: [40.589, 83.537],  rotH: 10.656, w: [38.90, 810.7939024],    albedo: 0.499, R: 58232, GM: 37931206.2 },
  uranus:  { pole: [257.311, -15.175], rotH: -17.24, w: [203.81, -501.1600928], albedo: 0.488, R: 25362, GM: 5793951.3 },
  neptune: { pole: [299.36, 43.46],   rotH: 16.11, w: [249.978, 541.1397757],   albedo: 0.442, R: 24622, GM: 6835099.5 },
  pluto:   { pole: [132.993, -6.163], rotH: -153.2935, w: [302.695, 56.3625225], albedo: 0.52, R: 1188.3, GM: 869.6 },
  ceres:   { pole: [291.4, 66.8],     rotH: 9.074, w: [170.65, 952.1532],      albedo: 0.09, R: 469.7, GM: 62.6284 },
  haumea:  { pole: [0, 90],           rotH: 3.915,     albedo: 0.51, R: 780, GM: 267.0 },
  makemake: { pole: [0, 90],          rotH: 22.83,     albedo: 0.81, R: 715, GM: 207.0 },
  eris:    { pole: [0, 90],           rotH: 25.9,      albedo: 0.96, R: 1163, GM: 1108.0 },
};
// Geometric albedos (NASA fact sheets / JPL satellite pages) for moons, since Horizons doesn't list them uniformly.
const MOON_ALBEDO = { moon: 0.12, phobos: 0.07, deimos: 0.07, io: 0.63, europa: 0.67, ganymede: 0.43, callisto: 0.17, mimas: 0.96, enceladus: 1.38, tethys: 1.23, dione: 1.0, rhea: 0.95, titan: 0.22,
  iapetus: 0.30, miranda: 0.32, ariel: 0.39, umbriel: 0.21, titania: 0.27, oberon: 0.23, triton: 0.76, proteus: 0.10, charon: 0.35 };
// Saturn's ring system, km from planet centre (Cassini-era published values).
const RINGS = {
  saturn: [{ name: 'D', r0: 66900, r1: 74510, tau: 0.02 }, { name: 'C', r0: 74658, r1: 92000, tau: 0.12 }, { name: 'B', r0: 92000, r1: 117580, tau: 1.2 },
    { name: 'Cassini Division', r0: 117580, r1: 122170, tau: 0.08 }, { name: 'A', r0: 122170, r1: 136775, tau: 0.5 }, { name: 'F', r0: 140100, r1: 140260, tau: 0.3 }],
  jupiter: [{ name: 'Main', r0: 122500, r1: 129000, tau: 0.00001 }],
  uranus: [{ name: 'Main rings', r0: 41837, r1: 51149, tau: 0.02 }],
  neptune: [{ name: 'Adams/Le Verrier/Galle', r0: 41900, r1: 63000, tau: 0.01 }],
};

const PLANETS = [
  { id: 'mercury', name: 'Mercury', hz: 199 }, { id: 'venus', name: 'Venus', hz: 299 }, { id: 'earth', name: 'Earth', hz: 399 }, { id: 'mars', name: 'Mars', hz: 499 },
  { id: 'jupiter', name: 'Jupiter', hz: 599 }, { id: 'saturn', name: 'Saturn', hz: 699 }, { id: 'uranus', name: 'Uranus', hz: 799 }, { id: 'neptune', name: 'Neptune', hz: 899 },
];
const MOON_NAMES = { 301: 'Moon', 401: 'Phobos', 402: 'Deimos', 501: 'Io', 502: 'Europa', 503: 'Ganymede', 504: 'Callisto', 601: 'Mimas', 602: 'Enceladus', 603: 'Tethys', 604: 'Dione',
  605: 'Rhea', 606: 'Titan', 608: 'Iapetus', 701: 'Ariel', 702: 'Umbriel', 703: 'Titania', 704: 'Oberon', 705: 'Miranda', 801: 'Triton', 808: 'Proteus', 901: 'Charon' };
const PARENT_HZ = { Earth: 399, Mars: 499, Jupiter: 599, Saturn: 699, Uranus: 799, Neptune: 899, Pluto: 999 };
const DWARF_NAMES = { 1: 'Ceres', 134340: 'Pluto', 136108: 'Haumea', 136472: 'Makemake', 136199: 'Eris' };

// ───────── JPL "Approximate Positions of the Planets" tables ─────────
function parseElementTables(html) {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&dagger;/g, '');
  const rowsOf = (title) => {
    const i = text.indexOf(title); if (i < 0) return null;
    let end = text.indexOf('Table', i + 20); if (end < 0 || end - i > 4000) end = i + 4000;
    const seg = text.slice(i, end).split('\n').map((l) => l.trim()).filter(Boolean);
    const out = {}; let cur = null;
    for (const l of seg) {
      const m = /^(Mercury|Venus|EM Bary|Mars|Jupiter|Saturn|Uranus|Neptune)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)/.exec(l);
      if (m) { cur = m[1] === 'EM Bary' ? 'Earth' : m[1]; out[cur] = { vals: m.slice(2, 8).map(Number) }; continue; }
      const r = /^(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)$/.exec(l);
      if (r && cur && !out[cur].rates) out[cur].rates = r.slice(1, 7).map(Number);
    }
    return out;
  };
  const toObj = (rows) => rows && Object.fromEntries(Object.entries(rows).map(([k, v]) => [k, { a: [v.vals[0], v.rates[0]], e: [v.vals[1], v.rates[1]], I: [v.vals[2], v.rates[2]], L: [v.vals[3], v.rates[3]], varpi: [v.vals[4], v.rates[4]], Omega: [v.vals[5], v.rates[5]] }]));
  const t1 = toObj(rowsOf('Table 1'));
  const t2 = toObj(rowsOf('Table 2a \n'));
  // table 2b: Jupiter..Neptune b c s f
  const t2b = {};
  const i2b = text.lastIndexOf('Table 2b');
  if (i2b >= 0) for (const l of text.slice(i2b, i2b + 1500).split('\n')) {
    const m = /^\s*(Jupiter|Saturn|Uranus|Neptune)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)/.exec(l);
    if (m) t2b[m[1]] = { b: +m[2], c: +m[3], s: +m[4], f: +m[5] };
  }
  return { table1: t1, table2a: t2, table2b: t2b };
}

// ───────── Horizons ─────────
async function horizons(cfg, key, params) {
  const dest = path.join(RAW, 'horizons', `${key}.json`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const text = await getTextCached({ dataset: `JPL Horizons ${key}`, url: cfg.sources.horizons, params: { format: 'json', ...params }, dest, minBytes: 200,
    note: `Open ${cfg.sources.horizons}?${new URLSearchParams({ format: 'json', ...params })} in a browser and save the response as ${path.relative(path.join(RAW, '..', '..'), dest)}` });
  if (!flags.offline) await sleep(150);
  if (!text) return null;
  try { const j = JSON.parse(text); if (!j.result) throw new Error(j.error || 'no result'); return j.result; } catch (e) { warn(`Horizons ${key}: ${e.message}`); fs.rmSync(dest, { force: true }); return null; }
}

function parseElementsBlock(res) {
  const soe = res.indexOf('$$SOE'); if (soe < 0) return null;
  const blk = res.slice(soe, res.indexOf('$$EOE'));
  const g = (re) => { const m = re.exec(blk); return m ? parseFloat(m[1]) : null; };
  const jd = /^\$\$SOE\s+([\d.]+)/.exec(blk);
  const el = { epochJD: jd ? parseFloat(jd[1]) : null, e: g(/EC=\s*([-\d.E+]+)/), i: g(/IN=\s*([-\d.E+]+)/), node: g(/OM=\s*([-\d.E+]+)/), argp: g(/\bW\s*=\s*([-\d.E+]+)/),
    M: g(/MA=\s*([-\d.E+]+)/), nDegPerSec: g(/\bN\s*=\s*([-\d.E+]+)/), a: g(/\bA\s*=\s*([-\d.E+]+)/), periodSec: g(/PR=\s*([-\d.E+]+)/) };
  if (Object.values(el).some((v) => v === null || Number.isNaN(v))) return null;
  el.nDegPerDay = el.nDegPerSec * 86400;
  delete el.nDegPerSec;
  return el;
}

function parsePhysical(res) {
  const out = {};
  const head = res.slice(0, res.indexOf('Ephemeris /') > 0 ? res.indexOf('Ephemeris /') : 4000);
  let m;
  if ((m = /Vol\.?\s*mean\s*radius[^=]*=\s*([\d.]+)/i.exec(head)) || (m = /Mean\s*radius[^=]*=\s*([\d.]+)/i.exec(head))) out.R = parseFloat(m[1]);
  if ((m = /\bGM[,\s]*\(?km\^?3\/s\^?2\)?\s*=\s*([\d.]+)/i.exec(head))) out.GM = parseFloat(m[1]);
  if ((m = /Geometric\s*albedo\s*=\s*([\d.]+)/i.exec(head))) out.albedo = parseFloat(m[1]);
  if ((m = /Obliquity to orbit[^=]*=\s*([\d.]+)/i.exec(head))) out.obliquity = parseFloat(m[1]);
  return out;
}

// ───────── JPL satellite physical parameters table ─────────
function parseSatPhys(html) {
  const rows = {};
  // the JPL page leaves many <td> unclosed, so split on the opening tags instead of matching pairs
  for (const tr of html.split(/<tr[^>]*>/i)) {
    const cells = tr.split(/<td[^>]*>/i).slice(1).map((c) => c.replace(/<\/?[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim());
    if (cells.length >= 10 && /^\d{3}$/.test(cells[2])) rows[cells[2]] = { planet: cells[0], name: cells[1], GM: num(cells[3]), R: num(cells[6]), density: num(cells[9]) };
  }
  return rows;
}

export async function buildEphemeris(cfg, epochDate) {
  head('EPHEMERIDES & PHYSICAL DATA');
  const ec = cfg.ephemeris;
  const epochJD = A.jdFromDate(epochDate);
  const startISO = epochDate.toISOString().slice(0, 10);
  const stopISO = new Date(epochDate.getTime() + 86400000).toISOString().slice(0, 10);
  const manifestSources = [];
  let missing = false;

  // 1) planetary mean elements
  const elPath = path.join(RAW, 'jpl_approx_positions.html');
  const elOk = await ensureFile({ dataset: 'JPL approximate planetary positions (Keplerian elements + rates)', url: cfg.sources.jplElements, dest: elPath, minBytes: 20000,
    note: 'Save the page (View Source → raw HTML) as data/raw/jpl_approx_positions.html' });
  let tables = null;
  if (elOk) {
    tables = parseElementTables(fs.readFileSync(elPath, 'utf8'));
    const n1 = tables.table1 ? Object.keys(tables.table1).length : 0;
    log(`  planetary element tables: Table1 ${n1}/8 planets, Table2a ${tables.table2a ? Object.keys(tables.table2a).length : 0}/8, Table2b ${Object.keys(tables.table2b).length}/4`);
    if (n1 !== 8) { warn('could not parse all 8 planets from the JPL page'); missing = true; }
  } else missing = true;

  // 2) satellite physical parameters
  const satPath = path.join(RAW, 'jpl_sat_phys.html');
  const satOk = await ensureFile({ dataset: 'JPL planetary satellite physical parameters', url: cfg.sources.jplSatPhys, dest: satPath, minBytes: 20000,
    note: 'Save the page as data/raw/jpl_sat_phys.html' });
  const satPhys = satOk ? parseSatPhys(fs.readFileSync(satPath, 'utf8')) : {};
  log(`  satellite physical-parameter rows parsed: ${Object.keys(satPhys).length}`);

  const bodies = [];
  const sources = {};

  // Sun
  {
    const res = await horizons(cfg, 'sun_phys', { COMMAND: "'10'", OBJ_DATA: "'YES'", MAKE_EPHEM: "'NO'" });
    const p = res ? parsePhysical(res) : {};
    bodies.push({ id: 'sun', name: 'Sun', kind: 'star', parent: null, R: p.R ?? 695700, GM: p.GM ?? 132712440041.94, teff: 5772, lumSun: 1, pole: CURATED.sun.pole, rotH: CURATED.sun.rotH, w: CURATED.sun.w,
      src: { R: p.R ? 'horizons' : 'curated', GM: p.GM ? 'horizons' : 'curated' } });
    if (!res) missing = true;
  }

  // Planets: physical from Horizons; orbit from the JPL tables
  for (const pl of PLANETS) {
    const res = await horizons(cfg, `${pl.id}_phys`, { COMMAND: `'${pl.hz}'`, OBJ_DATA: "'YES'", MAKE_EPHEM: "'NO'" });
    const p = res ? parsePhysical(res) : {};
    const cur = CURATED[pl.id];
    // Horizons gives the volumetric mean radius; for gas giants the planet "surface" is the 1-bar level – use mean radius for rendering, 1-bar equatorial where available
    bodies.push({
      id: pl.id, name: pl.name, kind: 'planet', parent: 'sun', horizonsId: pl.hz, R: p.R ?? cur.R, GM: p.GM ?? cur.GM, albedo: p.albedo ?? cur.albedo,
      obliquity: p.obliquity ?? null, pole: cur.pole, rotH: cur.rotH, w: cur.w, rings: RINGS[pl.id] || null,
      orbit: tables && tables.table1 ? { type: 'jpl-mean', key: pl.id === 'earth' ? 'Earth' : pl.name } : null,
      src: { R: p.R ? 'horizons' : 'curated', GM: p.GM ? 'horizons' : 'curated', albedo: p.albedo ? 'horizons' : 'curated' },
    });
    if (!res) missing = true;
  }

  // Pluto + other dwarf planets from SBDB
  for (const num_ of ec.dwarfPlanets) {
    const nm = DWARF_NAMES[num_] || `Asteroid ${num_}`; const id = nm.toLowerCase();
    const dest = path.join(RAW, 'sbdb', `${num_}.json`); fs.mkdirSync(path.dirname(dest), { recursive: true });
    const text = await getTextCached({ dataset: `JPL SBDB ${nm}`, url: cfg.sources.sbdb, params: { sstr: String(num_), 'phys-par': '1', 'full-prec': '1' }, dest, minBytes: 300,
      note: `Open ${cfg.sources.sbdb}?sstr=${num_}&phys-par=1&full-prec=1 and save the JSON as ${path.relative(path.join(RAW, '..', '..'), dest)}` });
    if (!text) { missing = true; continue; }
    const j = JSON.parse(text);
    const el = Object.fromEntries((j.orbit?.elements || []).map((e) => [e.name, parseFloat(e.value)]));
    const phys = Object.fromEntries((j.phys_par || []).map((e) => [e.name, e.value]));
    const cur = CURATED[id] || {};
    const diameter = phys.diameter ? parseFloat(phys.diameter) : null;
    bodies.push({
      id, name: nm, kind: 'dwarf', parent: 'sun', R: diameter ? diameter / 2 : cur.R, GM: phys.GM ? parseFloat(phys.GM) : cur.GM, albedo: phys.albedo ? parseFloat(phys.albedo) : cur.albedo,
      pole: cur.pole || [0, 90], rotH: phys.rot_per ? parseFloat(phys.rot_per) : cur.rotH, w: cur.w || null,
      orbit: { type: 'osculating', epochJD: parseFloat(j.orbit.epoch), a: el.a * A.KM_PER_AU, e: el.e, i: el.i, node: el.om, argp: el.w, M: el.ma, nDegPerDay: el.n, frame: 'ecliptic-J2000' },
      src: { R: diameter ? 'SBDB' : 'curated', GM: phys.GM ? 'SBDB' : 'curated', orbit: 'SBDB' },
    });
  }

  // Moons from Horizons osculating elements
  for (const [parentName, ids] of Object.entries(ec.moons)) {
    const parentId = parentName.toLowerCase();
    for (const hz of ids) {
      const name = MOON_NAMES[hz] || `Moon ${hz}`;
      const res = await horizons(cfg, `moon_${hz}`, {
        COMMAND: `'${hz}'`, OBJ_DATA: "'NO'", MAKE_EPHEM: "'YES'", EPHEM_TYPE: "'ELEMENTS'", CENTER: `'500@${PARENT_HZ[parentName]}'`,
        START_TIME: `'${startISO}'`, STOP_TIME: `'${stopISO}'`, STEP_SIZE: "'1d'", OUT_UNITS: "'KM-S'", REF_PLANE: "'ECLIPTIC'",
      });
      if (!res) { missing = true; continue; }
      const el = parseElementsBlock(res);
      if (!el) { warn(`could not parse Horizons elements for ${name}`); missing = true; continue; }
      const phys = satPhys[String(hz)] || {};
      const parent = parentId === 'pluto' ? CURATED.pluto : CURATED[parentId];
      bodies.push({
        id: name.toLowerCase(), name, kind: 'moon', parent: parentId, horizonsId: hz, R: phys.R ?? null, GM: phys.GM ?? null, density: phys.density ?? null, albedo: MOON_ALBEDO[name.toLowerCase()] ?? null,
        pole: parent.pole, rotH: null /* synchronous: runtime sets rotation = orbital period */, synchronous: true,
        orbit: { type: 'osculating', ...el, frame: 'ecliptic-J2000' },
        src: { R: phys.R ? 'JPL sat phys' : 'MISSING', GM: phys.GM ? 'JPL sat phys' : 'MISSING', orbit: 'horizons' },
      });
      if (!phys.R || !phys.GM) { warn(`${name}: radius/GM missing from JPL satellite table`); missing = true; }
    }
  }

  log(`  bodies: ${bodies.length} (${bodies.filter((b) => b.kind === 'planet').length} planets, ${bodies.filter((b) => b.kind === 'dwarf').length} dwarf planets, ${bodies.filter((b) => b.kind === 'moon').length} moons)`);
  const stats = {
    bodies: bodies.length, planets: bodies.filter((b) => b.kind === 'planet').length, dwarfPlanets: bodies.filter((b) => b.kind === 'dwarf').length, moons: bodies.filter((b) => b.kind === 'moon').length,
    epochJD, epoch: startISO, complete: !missing,
  };
  return { json: { epochJD, epoch: startISO, elements: tables, bodies, curated: CURATED, moonAlbedo: MOON_ALBEDO }, stats };
}
