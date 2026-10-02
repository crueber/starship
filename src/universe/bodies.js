// Bodies and systems. Positions are km in the system frame (ICRS-aligned axes, origin = system reference point), time is Julian date.
import { TAU, cross, norm, dot, rotateAbout, perpendicular, len } from '../core/math.js';
import { DEG, KM_PER_AU } from '../../shared/astro.js';

const G_EARTH_MS2 = 9.80665;

export class Body {
  constructor(o) {
    Object.assign(this, { children: [], pole: [0, 0, 1], albedo: 0.3, fictional: false, rings: null, atmosphere: null, look: null, info: '' }, o);
    this._jd = NaN; this._p = [0, 0, 0]; this._vjd = NaN; this._v = [0, 0, 0]; this._tmp = [0, 0, 0];
    if (o.parent) o.parent.children.push(this);
    this.gravityMs2 = this.gm ? (this.gm * 1e9) / (this.radiusKm * 1e3) ** 2 : 0;       // m/s²
    this._spinAng = null;
  }
  get isStar() { return this.kind === 'star'; }

  /** position in the system frame (km). The returned array is cached – do not mutate. */
  positionAt(jd) {
    if (this._jd === jd) return this._p;
    const p = this._p;
    if (this.orbit) {
      this.orbit.positionAt(jd, p);
      if (this.parent) { const q = this.parent.positionAt(jd); p[0] += q[0]; p[1] += q[1]; p[2] += q[2]; }
    } else if (this.fixed) { p[0] = this.fixed[0]; p[1] = this.fixed[1]; p[2] = this.fixed[2]; }
    else { p[0] = p[1] = p[2] = 0; }
    this._jd = jd;
    return p;
  }
  /** velocity in the system frame (km/s), by analytic orbit + parent chain. */
  velocityAt(jd) {
    if (this._vjd === jd) return this._v;
    const v = this._v;
    if (this.orbit) {
      this.orbit.velocityAt(jd, v);
      if (this.parent) { const q = this.parent.velocityAt(jd); v[0] += q[0]; v[1] += q[1]; v[2] += q[2]; }
    } else { v[0] = v[1] = v[2] = 0; }
    this._vjd = jd;
    return v;
  }
  /** position relative to the parent (km). */
  localAt(jd, out = [0, 0, 0]) { if (this.orbit) this.orbit.positionAt(jd, out); else { out[0] = out[1] = out[2] = 0; } return out; }

  /** distance of the semi-major axis from the parent (km) */
  get semiMajorKm() { return this.orbit && this.orbit.a ? this.orbit.a : 0; }

  /** Sphere of influence radius (km) — region where this body dominates the ship's reference frame. */
  get soiKm() {
    if (this._soi !== undefined) return this._soi;
    let s = Infinity;
    if (this.parent && this.parent.gm && this.gm && this.semiMajorKm) s = this.semiMajorKm * Math.pow(this.gm / this.parent.gm, 0.4);
    if (this.kind === 'star') s = Infinity;
    this._soi = s; return s;
  }
  /** Hill radius (km) for stability checks */
  get hillKm() { return this.parent && this.parent.gm && this.semiMajorKm ? this.semiMajorKm * Math.cbrt(this.gm / (3 * this.parent.gm)) : Infinity; }

  /** Closest approach allowed to the centre of this body (km): a low safe orbit scaled by surface gravity. */
  safeRadiusKm(cfg) {
    if (this._safe !== undefined) return this._safe;
    const so = cfg.ship.safeOrbit;
    let r;
    if (this.kind === 'star') r = this.radiusKm * Math.max(so.starMinRadii, 1 + so.baseFraction);
    else {
      const g = this.gravityMs2 / G_EARTH_MS2;
      const alt = Math.max(so.minAltitudeKm, this.radiusKm * (so.baseFraction + so.gravityLogFactor * Math.log(1 + g)));
      r = this.radiusKm + alt;
      if (this.rings) { const outer = Math.max(...this.rings.map((x) => x.r1)); r = Math.max(r, this.radiusKm * 1.0 + alt); void outer; }
    }
    this._safe = r; return r;
  }

  /** Body-fixed axes in the system frame at jd: x = prime meridian, z = pole, y = east. */
  axesAt(jd) {
    const z = this.pole;
    let x;
    if (this.spin && this.spin.sync && this.parent) {
      const rel = this.localAt(jd, this._tmp);
      const r = norm(rel);
      const px = dot(r, z);
      x = norm([-(r[0] - z[0] * px), -(r[1] - z[1] * px), -(r[2] - z[2] * px)]);
      if (!isFinite(x[0])) x = perpendicular(z);
    } else {
      // IAU convention: prime meridian measured from the ascending node of the body equator on the ICRF equator
      let node = [-z[1], z[0], 0]; const nl = Math.hypot(node[0], node[1]);
      node = nl > 1e-9 ? [node[0] / nl, node[1] / nl, 0] : [1, 0, 0];
      // IAU defines the node of the equator at RA = alpha0 + 90°, i.e. (−sin a0, cos a0, 0) = pole-RA based; with z=(cos d cos a, cos d sin a, sin d) the node is (−sin a, cos a, 0)
      const W = this.spinAngle(jd);
      x = rotateAbout(node, z, W);
    }
    const y = cross(z, x);
    return { x, y, z };
  }
  /** rotation angle W (rad) of the prime meridian; high time compression is rate-limited by the caller via `spinOverride`. */
  spinAngle(jd) {
    if (this.spinOverride !== undefined) return this.spinOverride;
    const s = this.spin; if (!s) return 0;
    return (s.w0 + s.rateDegDay * (jd - 2451545.0)) * DEG;
  }
}

export class System {
  constructor(o) {
    Object.assign(this, { bodies: [], byId: new Map(), stars: [], belts: [], fictional: false, kind: 'procedural' }, o);
  }
  add(b) { b.system = this; this.bodies.push(b); this.byId.set(b.id, b); if (b.kind === 'star') this.stars.push(b); if (b.kind === 'belt') this.belts.push(b); return b; }
  get(id) { return this.byId.get(id) || null; }
  get primary() { return this.stars[0]; }
  /** bodies that can be a navigation target (not belts) */
  get targets() { return this.bodies.filter((b) => b.kind !== 'belt'); }
  /** Luminosity-weighted star positions for lighting at a point (km, system frame). Returns [{star, dir, dist, irradiance}] (irradiance in solar constants at 1 AU). */
  lightSources(p, jd) {
    const out = [];
    for (const s of this.stars) {
      const sp = s.positionAt(jd);
      const dx = sp[0] - p[0], dy = sp[1] - p[1], dz = sp[2] - p[2];
      const d = Math.hypot(dx, dy, dz) || 1;
      const au = d / KM_PER_AU;
      out.push({ star: s, dir: [dx / d, dy / d, dz / d], dist: d, irradiance: s.lumSun / (au * au) });
    }
    return out;
  }
}

export function poleFromRaDec(raDeg, decDeg) {
  const a = raDeg * DEG, d = decDeg * DEG;
  return [Math.cos(d) * Math.cos(a), Math.cos(d) * Math.sin(a), Math.sin(d)];
}
