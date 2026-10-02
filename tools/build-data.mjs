#!/usr/bin/env node
/*
 * STARSHIP SIMULATOR — data build.
 *
 *   node tools/build-data.mjs                run everything (downloads are cached in data/raw/)
 *   node tools/build-data.mjs --only=stars   stars (+names, +known planets), galaxies, ephemeris, textures
 *   node tools/build-data.mjs --refresh      ignore cached downloads
 *   node tools/build-data.mjs --offline      use only data/raw/ (no network at all)
 *   node tools/build-data.mjs --allow-partial  write whatever could be built even if a source is unreachable
 *   node tools/build-data.mjs --skip-textures
 *
 * Reads ../config.js (the same file the simulator uses), downloads each source, trims it to the configured
 * limits and writes compact files into data/. The simulator itself never touches the network.
 * If a source cannot be reached the script says so plainly, prints exactly what to download by hand and where
 * to put it, and exits non-zero. It never substitutes invented data.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT, RAW, OUT, flags, loadConfig, log, warn, head, problems, fmtBytes } from './lib/util.mjs';
import { buildStars, encodeStars, STAR_STRIDE, F } from './lib/stars.mjs';
import { buildNames } from './lib/names.mjs';
import { buildExoplanets } from './lib/exoplanets.mjs';
import { buildGalaxies } from './lib/galaxies.mjs';
import { buildEphemeris, CURATED } from './lib/ephemeris.mjs';
import { buildTextures } from './lib/textures.mjs';
import { buildSkymap } from './lib/skymap.mjs';
import * as A from '../shared/astro.js';

const onlyArg = process.argv.find((a) => a.startsWith('--only='));
const only = onlyArg ? onlyArg.slice(7).split(',') : null;
const want = (k) => !only || only.includes(k);

const cfgAll = loadConfig();
const cfg = cfgAll.build;
const manifestPath = path.join(OUT, 'manifest.json');
const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : { datasets: {}, files: {} };
manifest.builtAt = new Date().toISOString();
manifest.builder = { script: 'tools/build-data.mjs', node: process.version, command: process.argv.slice(2).join(' ') };
manifest.configSnapshot = cfg;
manifest.datasets ||= {}; manifest.files ||= {}; manifest.counts ||= {};

const epochDate = cfg.epoch === 'auto' ? new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate())) : new Date(cfg.epoch);
manifest.epoch = epochDate.toISOString().slice(0, 10);

function sha(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }
function writeOut(name, data) {
  const p = path.join(OUT, name); fs.writeFileSync(p, data);
  manifest.files[name] = { bytes: fs.statSync(p).size, sha256: sha(p) };
  return manifest.files[name].bytes;
}
const jsonCompact = (o) => JSON.stringify(o);

let starsRes = null;

// ═════════════════════════════ stars (+ names, + exoplanets) ═════════════════════════════
if (want('stars')) {
  starsRes = await buildStars(cfg, epochDate, manifest);
  if (starsRes) {
    const { stars, stats } = starsRes;
    const names = await buildNames(cfg, stars);
    const exo = await buildExoplanets(cfg, stars, manifest.epoch);       // also sets HAS_PLANETS flags
    writeOut('stars.bin', encodeStars(stars));
    writeOut('names.json', jsonCompact({ version: 1, stride: STAR_STRIDE, entries: names.entries }));
    manifest.counts.stars = stats.total;
    manifest.counts.starsWithinNearRadius = stats.withinRadius;
    manifest.counts.starsNamed = stars.filter((s) => s.name).length;
    manifest.datasets.stars = {
      description: 'Star catalogue: Sun + Hipparcos brightest N + every star inside the near radius (Gaia DR3 fills what Hipparcos lacks)',
      recordLayout: `${STAR_STRIDE} bytes little-endian: f32 x,y,z [pc, ICRS equatorial, relative to Sun, at epoch] | i16 absMag_V*1000 | u16 Teff[K] | u8 flags | u8 lumClass | u16 reserved | u32 HIP`,
      flagBits: Object.fromEntries(Object.entries(F).map(([k, v]) => [k, v])),
      lumClass: A.LC,
      sources: [
        { name: 'Hipparcos Catalogue (ESA 1997), CDS I/239 hip_main.dat', url: cfg.sources.hipparcos, version: 'ESA SP-1200, epoch J1991.25', sha256: sha(path.join(RAW, 'hip_main.dat')), license: 'public (ESA/CDS)' },
        stats.gaiaStatus === 'ok'
          ? { name: 'Gaia DR3 gaia_source (+ hipparcos2_best_neighbour), ESA Gaia Archive TAP', url: cfg.sources.gaiaTap, version: 'Gaia DR3, epoch J2016.0', queriedAt: manifest.builtAt, rows: stats.gaiaSample, license: 'CC BY-SA 3.0 IGO (ESA/Gaia/DPAC)' }
          : { name: 'Gaia DR3', status: stats.gaiaStatus },
        { name: 'IAU Catalog of Star Names (WGSN)', url: cfg.sources.iauNames, status: names.stats.iauStatus, matched: names.stats.iau },
        { name: 'SIMBAD identifier lookup (CDS)', url: cfg.sources.simbadTap, status: names.stats.simbadStatus, matched: names.stats.simbad },
      ],
      method: 'Positions propagated linearly by proper motion to the build epoch. Distance = 1/parallax where the Hipparcos parallax S/N ≥ hipMinParallaxSNR, else a spectro-photometric estimate (flag bit 1). Temperature from the spectral type (calibrated dwarf/giant/supergiant sequences), else from B-V (Hipparcos) or BP-RP (Gaia) (flag bit 4). Absolute V magnitude from V and distance (no extinction correction).',
      stats,
    };
    if (exo) {
      writeOut('exoplanets.json', jsonCompact(exo.json));
      manifest.counts.knownPlanets = exo.stats.planetsKept;
      manifest.counts.knownPlanetHosts = exo.stats.hostsKept;
      manifest.counts.knownPlanetsInArchive = exo.stats.planetsTotal;
      manifest.datasets.exoplanets = {
        description: 'Confirmed planets whose host star is present in stars.bin',
        sources: [{ name: 'NASA Exoplanet Archive, table pscomppars (Planetary Systems Composite Parameters)', url: cfg.sources.exoTap, retrievedAt: manifest.builtAt, rows: exo.stats.planetsTotal, license: 'NASA/IPAC, public' }],
        stats: exo.stats,
      };
    }
    // flags changed by exoplanets → rewrite stars.bin
    writeOut('stars.bin', encodeStars(stars));
  }
}

// ═════════════════════════════ galaxies ═════════════════════════════
if (want('galaxies')) {
  const g = await buildGalaxies(cfg);
  if (g) {
    writeOut('galaxies.json', jsonCompact(g.json));
    manifest.counts.galaxies = g.json.galaxies.length;
    manifest.datasets.galaxies = {
      description: 'Nearest galaxies (distance-sorted) with sky position, distance and photometry for rendering',
      sources: [{ name: 'McConnachie (2012), AJ 144, 4 — "The Observed Properties of Dwarf Galaxies in and around the Local Group", VizieR J/AJ/144/4/catalog', url: cfg.sources.vizier, version: 'VizieR V7.6 extraction ' + manifest.builtAt.slice(0, 10), license: 'CDS / AAS' }],
      stats: g.stats,
      note: 'The nearest 10 are dominated by faint dwarf satellites; only the Magellanic Clouds (and, subtly, the Sagittarius/Canis Major dwarfs) are visible to the eye. Raise build.galaxies.count or use build.galaxies.include for Andromeda etc.',
    };
  }
}

// ═════════════════════════════ ephemeris ═════════════════════════════
if (want('ephemeris')) {
  const e = await buildEphemeris(cfg, epochDate);
  if (e) {
    writeOut('ephemeris.json', jsonCompact(e.json));
    manifest.counts.solarSystemBodies = e.stats.bodies;
    manifest.datasets.ephemeris = {
      description: 'Sun, 8 planets, dwarf planets and major moons: orbital elements and physical constants',
      sources: [
        { name: 'JPL Solar System Dynamics — Approximate Positions of the Planets (Standish & Williams), Tables 1, 2a, 2b', url: cfg.sources.jplElements, retrievedAt: manifest.builtAt },
        { name: 'JPL Horizons API — moon osculating elements (ecliptic J2000) and planet/Sun physical data', url: cfg.sources.horizons, retrievedAt: manifest.builtAt, epoch: manifest.epoch },
        { name: 'JPL Small-Body Database API — dwarf planet orbits and physical parameters', url: cfg.sources.sbdb, retrievedAt: manifest.builtAt },
        { name: 'JPL Planetary Satellite Physical Parameters (GM, mean radius)', url: cfg.sources.jplSatPhys, retrievedAt: manifest.builtAt },
      ],
      curated: 'Rotation periods / pole directions (IAU WGCCRE 2015), geometric albedos (NASA fact sheets) and ring boundaries are hand-entered constants listed in tools/lib/ephemeris.mjs (CURATED, MOON_ALBEDO, RINGS); each body records which of R/GM/albedo came from a download (src) and which from the curated table.',
      stats: e.stats,
    };
  }
}

// ═════════════════════════════ milky way light map ═════════════════════════════
if (want('skymap')) {
  const m = await buildSkymap(cfg);
  if (m) {
    writeOut('milkyway.bin', m.bin);
    manifest.datasets.skymap = {
      description: 'All-sky map of the unresolved Milky Way starlight (G > minGMag), equirectangular in galactic coordinates, log-quantised uint16: [brightness, log10(BP/RP) colour]',
      sources: [{ name: 'Gaia DR3 gaia_source, per-HEALPix sums of phot_g/bp/rp_mean_flux over a uniform random subsample (random_index)', url: cfg.sources.gaiaTap, version: 'Gaia DR3', queriedAt: manifest.builtAt, license: 'CC BY-SA 3.0 IGO (ESA/Gaia/DPAC)' }],
      stats: m.stats,
      note: 'Seen from the Sun. The simulator modulates it with a 3-D galaxy model when the ship moves far from the Sun. Gaia under-counts the most crowded bulge fields, so the Galactic centre glow is a lower bound.',
    };
  }
}

// ═════════════════════════════ textures ═════════════════════════════
if (want('textures')) {
  const t = await buildTextures(cfg);
  if (t && t.stats && !t.stats.skipped) {
    manifest.datasets.textures = {
      description: 'Planet surface maps packed as data URIs in assets/textures.js (so the page works from file://)',
      sources: [{ name: 'Solar System Scope textures', url: 'https://www.solarsystemscope.com/textures/', license: 'CC BY 4.0 — © Solar System Scope, based on NASA elevation and imagery data' }],
      stats: t.stats,
      note: 'Bodies without a real global map (most moons, dwarf planets, exoplanets, procedural planets) use procedural surface shaders and are labelled as such in the simulator.',
    };
    if (fs.existsSync(path.join(ROOT, 'assets', 'textures.js'))) manifest.files['../assets/textures.js'] = { bytes: fs.statSync(path.join(ROOT, 'assets', 'textures.js')).size };
  }
}

// ═════════════════════════════ bundle for file:// ═════════════════════════════
// Browsers refuse fetch()/XHR for file:// URLs, so the same data is also emitted as a plain <script> (base64) that works when
// index.html is simply double-clicked. The loader prefers it and falls back to fetching data/*.bin|json over http(s).
{
  head('BUNDLE');
  const have = (n) => fs.existsSync(path.join(OUT, n));
  const need = ['stars.bin', 'names.json', 'galaxies.json', 'exoplanets.json', 'ephemeris.json'];
  const missingFiles = need.filter((n) => !have(n));
  if (missingFiles.length) warn(`bundle skipped: missing ${missingFiles.join(', ')}`);
  else {
    manifest.complete = problems.filter((p) => p.required).length === 0;
    const b = {
      manifest: manifest,
      stars: fs.readFileSync(path.join(OUT, 'stars.bin')).toString('base64'),
      names: JSON.parse(fs.readFileSync(path.join(OUT, 'names.json'), 'utf8')),
      galaxies: JSON.parse(fs.readFileSync(path.join(OUT, 'galaxies.json'), 'utf8')),
      exoplanets: JSON.parse(fs.readFileSync(path.join(OUT, 'exoplanets.json'), 'utf8')),
      ephemeris: JSON.parse(fs.readFileSync(path.join(OUT, 'ephemeris.json'), 'utf8')),
      milkyway: have('milkyway.bin') ? fs.readFileSync(path.join(OUT, 'milkyway.bin')).toString('base64') : null,
    };
    fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
    b.manifest = manifest;
    const bytes = writeOutRaw('data-bundle.js', `// generated by tools/build-data.mjs — identical content to the other files in data/, packaged for file:// use\nwindow.__SIMDATA = ${JSON.stringify(b)};\n`);
    log(`  data-bundle.js ${fmtBytes(bytes)}`);
  }
}
function writeOutRaw(name, data) { const p = path.join(OUT, name); fs.writeFileSync(p, data); return fs.statSync(p).size; }

// ═════════════════════════════ manifest + report ═════════════════════════════
manifest.problems = problems;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

head('RESULT');
const c = manifest.counts;
const row = (k, v) => console.log(`  ${k.padEnd(34)} ${String(v).padStart(10)}`);
if (c.stars !== undefined) {
  row('Stars (total)', c.stars);
  row('  within near radius', c.starsWithinNearRadius);
  row('  with a proper name', c.starsNamed);
  const st = manifest.datasets.stars.stats;
  row('  distance estimated (noisy plx)', st.distEstimated);
  row('  colour from photometry', st.colourFromPhotometry);
}
if (c.galaxies !== undefined) row('Galaxies', c.galaxies);
if (c.knownPlanets !== undefined) { row('Known exoplanets (in catalogue)', c.knownPlanets); row('  host stars', c.knownPlanetHosts); row('  (archive total)', c.knownPlanetsInArchive); }
if (c.solarSystemBodies !== undefined) row('Solar-system bodies', c.solarSystemBodies);
if (manifest.datasets.skymap) row('Milky Way map (px)', manifest.datasets.skymap.stats.width + '×' + manifest.datasets.skymap.stats.height);
console.log('\n  Output files:');
for (const f of fs.readdirSync(OUT).filter((f) => fs.statSync(path.join(OUT, f)).isFile()).sort()) console.log(`    data/${f.padEnd(22)} ${fmtBytes(fs.statSync(path.join(OUT, f)).size).padStart(10)}`);
if (fs.existsSync(path.join(ROOT, 'assets', 'textures.js'))) console.log(`    assets/${'textures.js'.padEnd(20)} ${fmtBytes(fs.statSync(path.join(ROOT, 'assets', 'textures.js')).size).padStart(10)}`);

const hard = problems.filter((p) => p.required);
const soft = problems.filter((p) => !p.required);
if (soft.length) { console.log('\n  Optional sources that were unavailable (build continued):'); for (const p of soft) console.log(`    - ${p.dataset}: ${p.why}`); }
if (hard.length) {
  console.log('\n══════════════════════════ ACTION REQUIRED ══════════════════════════');
  console.log('The following REQUIRED data could not be obtained. Nothing was invented in its place.\n');
  for (const p of hard) {
    console.log(`  ✗ ${p.dataset}\n      reason: ${p.why}\n      url:    ${p.url}\n      put it: ${p.dest}${p.note ? '\n      note:   ' + p.note : ''}\n`);
  }
  console.log('Then re-run:  node tools/build-data.mjs --offline');
  process.exit(flags.allowPartial ? 0 : 2);
}
console.log('\nBuild complete.');
