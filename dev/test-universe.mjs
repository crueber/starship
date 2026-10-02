// Node-side sanity test of the universe layer (no WebGL).
import fs from 'node:fs';
import vm from 'node:vm';
import { decode } from '../src/data/loader.js';
import { Catalog } from '../src/universe/catalog.js';
import { buildSolarSystem } from '../src/universe/solarSystem.js';
import { buildStarSystem } from '../src/universe/starSystem.js';
import * as A from '../shared/astro.js';
import { fmtDistance } from '../src/core/math.js';

const R = new URL('../data/', import.meta.url).pathname;
const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(new URL('../config.js', import.meta.url), 'utf8'), sb);
const cfg = sb.window.SIM_CONFIG;
const D = {
  starsBytes: new Uint8Array(fs.readFileSync(R + 'stars.bin')), names: JSON.parse(fs.readFileSync(R + 'names.json')), galaxies: JSON.parse(fs.readFileSync(R + 'galaxies.json')),
  exoplanets: JSON.parse(fs.readFileSync(R + 'exoplanets.json')), ephemeris: JSON.parse(fs.readFileSync(R + 'ephemeris.json')), manifest: JSON.parse(fs.readFileSync(R + 'manifest.json')),
  milkywayBytes: fs.existsSync(R + 'milkyway.bin') ? new Uint8Array(fs.readFileSync(R + 'milkyway.bin')) : null,
};
const data = decode(D);
const cat = new Catalog(data, cfg);
console.log('stars', cat.n, 'sun index', cat.sunIndex, 'milkyway', !!data.milkyWay);

// destinations from Sun
const sysList = cat.systemsNear([0, 0, 0], cfg.destinations.radiusLy * A.PC_PER_LY, cfg.destinations.groupAu);
console.log(`\nSystems within ${cfg.destinations.radiusLy} ly of the Sun: ${sysList.length}`);
for (const s of sysList) console.log(' ', (s.distPc * A.LY_PER_PC).toFixed(2).padStart(6), 'ly', s.name.padEnd(22), s.members.map((i) => cat.name(i)).join(' + '), cat.hasKnownPlanets(s.primary) ? '[known planets]' : '');

// Solar system sanity
const sol = buildSolarSystem(cat, data.ephemeris, cfg);
const jd = A.jdFromDate(new Date());
const au = (v) => Math.hypot(...v) / A.KM_PER_AU;
console.log('\nJD', jd.toFixed(3));
for (const id of ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'eris', 'ceres']) { const b = sol.get(id); console.log(' ', id.padEnd(8), 'r =', au(b.positionAt(jd)).toFixed(3), 'AU  v =', Math.hypot(...b.velocityAt(jd)).toFixed(2), 'km/s  SOI', fmtDistance(b.soiKm), ' safe', fmtDistance(b.safeRadiusKm(cfg)), ' g', b.gravityMs2.toFixed(2)); }
const moon = sol.get('moon'), earth = sol.get('earth');
const md = Math.hypot(...moon.localAt(jd)); console.log('Moon distance from Earth', md.toFixed(0), 'km (expect 356k–407k)');
const io = sol.get('io'); console.log('Io distance from Jupiter', Math.hypot(...io.localAt(jd)).toFixed(0), 'km (expect 421,700)');
const sun = sol.get('sun'); console.log('Sun safe radius', fmtDistance(sun.safeRadiusKm(cfg)));
// Earth angle check: Earth's heliocentric ecliptic longitude on Oct 1 ≈ 8.5° → ecliptic coordinates (rotate ICRS back)
{ const e = earth.positionAt(jd); const c = Math.cos(A.OBLIQUITY), s = Math.sin(A.OBLIQUITY); const ey = c * e[1] + s * e[2]; const lon = Math.atan2(ey, e[0]) / A.DEG; console.log('Earth heliocentric ecliptic longitude', ((lon + 360) % 360).toFixed(1), '° (on 1 Oct ≈ 8°)'); }

// Build some systems
function show(sys) {
  console.log(`\n=== ${sys.name} [${sys.kind}${sys.fictional ? ', FICTIONAL' : ''}] stars=${sys.stars.length} heliopause=${(sys.heliopauseKm / A.KM_PER_AU).toFixed(1)} AU  HZ ${sys.hz.inner.toFixed(3)}–${sys.hz.outer.toFixed(3)} AU  frost ${sys.frostAu.toFixed(2)} AU`);
  for (const b of sys.bodies) {
    if (b.kind === 'star') console.log(`  ★ ${b.name.padEnd(24)} ${b.info}  R=${(b.radiusKm / 695700).toFixed(2)} R☉  ${b.fixed ? 'offset ' + (Math.hypot(...b.fixed) / A.KM_PER_AU).toFixed(1) + ' AU' : ''}`);
    else if (b.kind === 'belt') console.log(`  ░ ${b.name.padEnd(30)} ${b.belt.innerAu.toFixed(2)}–${b.belt.outerAu.toFixed(2)} AU`);
    else if (b.kind !== 'moon') console.log(`  ● ${b.name.padEnd(28)} a=${(b.orbit.a / A.KM_PER_AU).toFixed(3).padStart(8)} AU e=${b.orbit.e.toFixed(2)}  R=${(b.radiusKm / 6371).toFixed(2)} R⊕ ${b.meta ? 'M=' + b.meta.mE.toFixed(2) + ' Teq=' + Math.round(b.meta.teq) + 'K ' + b.meta.label + (b.meta.inHz ? ' [HZ]' : '') : ''} moons=${b.children.length}`);
  }
}
const names = ['Proxima Centauri', 'Alpha Centauri', "Barnard's Star", 'Sirius', 'Wolf 359', 'τ Cet', 'Epsilon Eridani'];
for (const nm of names) {
  const g = sysList.concat(cat.systemsNear([0, 0, 0], 14 * A.PC_PER_LY, cfg.destinations.groupAu)).find((s) => s.name === nm || s.name.includes(nm));
  if (!g) { console.log('\n(no system named', nm, ')'); continue; }
  show(buildStarSystem(cat, g, cfg));
}
