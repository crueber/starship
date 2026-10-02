// The star catalogue at runtime: names, spatial queries, grouping stars into systems.
import { starTraits, heliopauseKm } from './starTraits.js';
import { AU_PER_PC, LY_PER_PC, PC_PER_LY, LC } from '../../shared/astro.js';

const CELL = 4;      // pc

export class Catalog {
  constructor(data, cfg) {
    this.d = data; this.cfg = cfg; this.n = data.n;
    this.pos = data.pos;
    this.grid = new Map();
    for (let i = 0; i < this.n; i++) {
      const k = this._key(Math.floor(this.pos[i * 3] / CELL), Math.floor(this.pos[i * 3 + 1] / CELL), Math.floor(this.pos[i * 3 + 2] / CELL));
      let a = this.grid.get(k); if (!a) this.grid.set(k, (a = [])); a.push(i);
    }
    this._traits = new Map();
    this.sunIndex = 0;
    for (let i = 0; i < Math.min(this.n, 4); i++) if (data.flags[i] & 32) this.sunIndex = i;
  }
  _key(x, y, z) { return `${x},${y},${z}`; }

  /** indices of stars within radius (pc) of point p (pc, doubles) */
  within(p, radiusPc, out = []) {
    const r = Math.ceil(radiusPc / CELL), cx = Math.floor(p[0] / CELL), cy = Math.floor(p[1] / CELL), cz = Math.floor(p[2] / CELL), r2 = radiusPc * radiusPc;
    for (let dx = -r; dx <= r; dx++) for (let dy = -r; dy <= r; dy++) for (let dz = -r; dz <= r; dz++) {
      const cell = this.grid.get(this._key(cx + dx, cy + dy, cz + dz)); if (!cell) continue;
      for (const i of cell) {
        const x = this.pos[i * 3] - p[0], y = this.pos[i * 3 + 1] - p[1], z = this.pos[i * 3 + 2] - p[2];
        if (x * x + y * y + z * z <= r2) out.push(i);
      }
    }
    return out;
  }

  posOf(i) { return [this.pos[i * 3], this.pos[i * 3 + 1], this.pos[i * 3 + 2]]; }
  distFromSun(i) { return Math.hypot(this.pos[i * 3], this.pos[i * 3 + 1], this.pos[i * 3 + 2]); }

  traits(i) {
    let t = this._traits.get(i);
    if (!t) { t = starTraits(this.d.absMag[i], this.d.teff[i], this.d.lc[i]); this._traits.set(i, t); }
    return t;
  }
  info(i) { return this.d.names.get(i) || null; }
  isSun(i) { return (this.d.flags[i] & 32) !== 0; }
  hasKnownPlanets(i) { return this.d.hosts.has(i); }
  host(i) { return this.d.hosts.get(i) || null; }

  /** stars whose name / designation / system name / Gliese number contains q (case-insensitive), or whose HIP number starts with q's digits */
  search(q, limit = 60) {
    q = q.toLowerCase().trim(); if (q.length < 2) return [];
    if (!this._sIdx) { this._sIdx = []; for (const [i, n] of this.d.names) this._sIdx.push([i, [n.name, n.desig, n.system, n.gj != null ? 'gj ' + n.gj : ''].filter(Boolean).join('|').toLowerCase()]); }
    const out = []; const seen = new Set();
    for (const [i, h] of this._sIdx) if (h.includes(q)) { out.push(i); seen.add(i); }
    if (/^(hip\s*)?\d+$/.test(q) || 'sol'.startsWith(q) || 'sun'.startsWith(q)) {
      const num = (q.match(/\d+/) || [''])[0];
      for (let i = 0; i < this.n && out.length < limit * 4; i++) {
        if (seen.has(i)) continue;
        if ((num && this.d.hip[i] && String(this.d.hip[i]).startsWith(num)) || (this.isSun(i) && ('sol'.startsWith(q) || 'sun'.startsWith(q)))) out.push(i);
      }
    }
    return out;
  }

  designation(i) {
    if (this.isSun(i)) return 'Sol';
    const inf = this.info(i); if (inf && inf.desig) return inf.desig;
    return this.d.hip[i] ? `HIP ${this.d.hip[i]}` : `Star #${i}`;
  }
  /** display name of an individual star */
  name(i) {
    if (this.isSun(i)) return 'Sun';
    const inf = this.info(i); if (inf && inf.name) return inf.name;
    return this.designation(i);
  }
  apparentMag(i, camPc) {
    const x = this.pos[i * 3] - camPc[0], y = this.pos[i * 3 + 1] - camPc[1], z = this.pos[i * 3 + 2] - camPc[2];
    const d = Math.max(Math.hypot(x, y, z), 1e-7);
    return this.d.absMag[i] + 5 * Math.log10(d / 10);
  }
  spectralText(i) {
    const inf = this.info(i);
    if (inf && inf.sp) { const m = /^(sd|d)?[OBAFGKM]\d?(\.\d)?\s?(Ia\+|Iab|Ia|Ib|III|II|IV|V|VI|I)?[a-z]*/.exec(inf.sp); if (m && m[0].length >= 2 && !/\.\.\./.test(m[0])) return m[0]; }
    const t = this.traits(i); return t.letter + (t.lc === LC.III ? ' giant' : t.lc === LC.I ? ' supergiant' : t.lc === LC.WD ? ' white dwarf' : ' dwarf');
  }

  /**
   * Group stars into systems. Stars closer than groupAu to each other are one system.
   * Returns [{key, members:[idx…] (brightest first), primary, name, distPc, centre:[pc]}], limited to those within radiusPc of p.
   */
  systemsNear(p, radiusPc, groupAu) {
    const pad = (groupAu * 3) / AU_PER_PC;
    const idx = this.within(p, radiusPc + pad);
    const link = groupAu / AU_PER_PC, link2 = link * link;
    const parent = new Map(idx.map((i) => [i, i]));
    const find = (a) => { while (parent.get(a) !== a) { parent.set(a, parent.get(parent.get(a))); a = parent.get(a); } return a; };
    for (let a = 0; a < idx.length; a++) {
      const i = idx[a];
      for (let b = a + 1; b < idx.length; b++) {
        const j = idx[b];
        const x = this.pos[i * 3] - this.pos[j * 3], y = this.pos[i * 3 + 1] - this.pos[j * 3 + 1], z = this.pos[i * 3 + 2] - this.pos[j * 3 + 2];
        if (x * x + y * y + z * z < link2) parent.set(find(i), find(j));
      }
    }
    const groups = new Map();
    for (const i of idx) { const r = find(i); let g = groups.get(r); if (!g) groups.set(r, (g = [])); g.push(i); }
    const out = [];
    for (const g of groups.values()) {
      g.sort((a, b) => this.traits(b).lumSun - this.traits(a).lumSun || a - b);
      const primary = g[0];
      const c = this.posOf(primary);
      const d = Math.hypot(c[0] - p[0], c[1] - p[1], c[2] - p[2]);
      if (d > radiusPc) continue;
      out.push({ key: Math.min(...g), members: g, primary, name: this.systemName(g), distPc: d, centre: c });
    }
    out.sort((a, b) => a.distPc - b.distPc);
    return out;
  }
  systemName(members) {
    for (const i of members) { const inf = this.info(i); if (inf && inf.system) return inf.system; }
    const p = members[0];
    let n = this.name(p);
    if (members.length > 1) n = n.replace(/\s+[AB]$/, '');
    return n;
  }
  /** Find the system (member group) containing star i, using the same grouping rule. */
  systemOf(i, groupAu) {
    const c = this.posOf(i);
    const list = this.systemsNear(c, (groupAu * 2) / AU_PER_PC + 1e-6, groupAu);
    return list.find((s) => s.members.includes(i)) || { key: i, members: [i], primary: i, name: this.name(i), distPc: 0, centre: c };
  }
  heliopauseKm(i) { const t = this.traits(i); return heliopauseKm(t, this.cfg, this.name(i)); }
}

export { LY_PER_PC, PC_PER_LY };
