import fs from 'node:fs'; import vm from 'node:vm';
import { decode } from '../src/data/loader.js'; import { Universe } from '../src/universe/universe.js'; import { Sim } from '../src/sim/sim.js';
globalThis.performance ??= { now: () => Date.now() };
const R = new URL('../data/', import.meta.url).pathname;
const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(new URL('../config.js', import.meta.url), 'utf8'), sb);
const cfg = sb.window.SIM_CONFIG; cfg.sim.startWithTour = false;
const D = { starsBytes: new Uint8Array(fs.readFileSync(R + 'stars.bin')), names: JSON.parse(fs.readFileSync(R + 'names.json')), galaxies: JSON.parse(fs.readFileSync(R + 'galaxies.json')), exoplanets: JSON.parse(fs.readFileSync(R + 'exoplanets.json')), ephemeris: JSON.parse(fs.readFileSync(R + 'ephemeris.json')), manifest: {}, milkywayBytes: null };
const uni = new Universe(decode(D), cfg);
const S = new Sim(uni, cfg); S.startTour = false; S.mode = 'free';
for (const nm of ['mars', 'jupiter']) {
  S.setCourseBody(uni.solar.get(nm)); let g = 0;
  while (S.course && g++ < 100000) {
    S.update(1 / 60);
    if (nm === 'jupiter' && g < 3000) {
      const mars = uni.solar.get('mars'), bp = mars.positionAt(S.jd), p = S.sysPos(), d = Math.hypot(p[0] - bp[0], p[1] - bp[1], p[2] - bp[2]), rs = mars.safeRadiusKm(cfg);
      if (d < rs * 0.995) console.log('g', g, 'd', d.toFixed(1), 'rs', rs.toFixed(1), 'ref', S.ref && S.ref.name, 'K', S.timeUsed, 'orbit', !!S.orbit, 'aligned', S.course.alignedOnce, 'clearing', S._clearing, 'speed', S.speed);
    }
  }
}
