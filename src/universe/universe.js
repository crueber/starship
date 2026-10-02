// The universe: catalogue + lazily-built star systems + queries used by navigation and the warp governor.
import { Catalog } from './catalog.js';
import { buildSolarSystem } from './solarSystem.js';
import { buildStarSystem } from './starSystem.js';
import { KM_PER_PC, KM_PER_AU, LY_PER_PC, PC_PER_LY, AU_PER_PC } from '../../shared/astro.js';

export class Universe {
  constructor(data, cfg) {
    this.data = data; this.cfg = cfg;
    this.cat = new Catalog(data, cfg);
    this.systems = new Map();
    this.solar = buildSolarSystem(this.cat, data.ephemeris, cfg);
    this.solar.heliopauseKm = this.cat.heliopauseKm(this.cat.sunIndex);
    this.solar.heliopauseKm = cfg.heliopause.sunAu * KM_PER_AU;
    this.solar.catalogKey = this.cat.sunIndex; this.solar.starIndices = [this.cat.sunIndex];
    this.systems.set(this.cat.sunIndex, this.solar);
    this._hpCache = new Map();
  }

  /** System for a catalogue group (as returned by cat.systemsNear). Built on first use. */
  systemForGroup(group) {
    if (group.members.includes(this.cat.sunIndex)) return this.solar;
    let s = this.systems.get(group.key);
    if (!s) { s = buildStarSystem(this.cat, group, this.cfg); this.systems.set(group.key, s); }
    return s;
  }

  /** Destination list for a position (pc): systems within the configured radius. */
  destinationsNear(pc, radiusLy) {
    const d = this.cfg.destinations;
    const groups = this.cat.systemsNear(pc, (radiusLy ?? d.radiusLy) * PC_PER_LY, d.groupAu);
    return groups.map((g) => ({ group: g, name: g.name, distLy: g.distPc * LY_PER_PC, known: g.members.some((i) => this.cat.hasKnownPlanets(i)), stars: g.members.length }));
  }

  heliopauseOfStar(i) {
    let h = this._hpCache.get(i);
    if (h === undefined) { h = i === this.cat.sunIndex ? this.cfg.heliopause.sunAu * KM_PER_AU : this.cat.heliopauseKm(i); this._hpCache.set(i, h); }
    return h;
  }

  /** The heliopause (km) of the *system* a star belongs to – multiple systems use the quadrature sum, handled in buildStarSystem; here a quick estimate. */
  starsNearPc(pc, radiusPc) { return this.cat.within(pc, radiusPc); }

  /**
   * First heliopause boundary crossed by a ray from pcOrigin (pc) along unit dir.
   * Returns { distKm, star, radiusKm } for the nearest sphere entered ahead, or null. Also reports if the origin is already inside one.
   */
  nextBoundary(pc, dir, lookKm, skipSystemKey) {
    const lookPc = lookKm / KM_PER_PC + 0.25;
    const idx = this.cat.within(pc, lookPc + 0.2);
    let best = null, inside = null;
    for (const i of idx) {
      // use the host of the system group: a quick per-star radius, grouped binaries have a larger common radius – approximate with the max of members
      const R = this.heliopauseOfStar(i) / KM_PER_PC;
      const cx = this.cat.pos[i * 3] - pc[0], cy = this.cat.pos[i * 3 + 1] - pc[1], cz = this.cat.pos[i * 3 + 2] - pc[2];
      const cc = cx * cx + cy * cy + cz * cz;
      if (cc < R * R) { if (!inside || cc < inside.cc) inside = { star: i, cc, radiusKm: R * KM_PER_PC }; continue; }
      const tca = cx * dir[0] + cy * dir[1] + cz * dir[2];
      if (tca <= 0) continue;
      const d2 = cc - tca * tca;
      if (d2 >= R * R) continue;
      const t = (tca - Math.sqrt(R * R - d2)) * KM_PER_PC;
      if (!best || t < best.distKm) best = { distKm: t, star: i, radiusKm: R * KM_PER_PC };
    }
    return { ahead: best, inside };
  }
}
