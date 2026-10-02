// Keplerian orbits. All positions in km, velocities in km/s, angles in radians internally. Frames are ICRS-aligned.
import { TAU, rotX, rotZ, mat3Mul, mat3Vec, mod } from '../core/math.js';
import { eclipticToIcrs, DEG, KM_PER_AU, J2000 } from '../../shared/astro.js';

/** Solve Kepler's equation M = E - e sin E (Newton, robust start). */
export function solveKepler(M, e) {
  M = mod(M + Math.PI, TAU) - Math.PI;
  let E = e < 0.8 ? M + e * Math.sin(M) : Math.PI * Math.sign(M || 1);
  for (let i = 0; i < 30; i++) {
    const f = E - e * Math.sin(E) - M, d = 1 - e * Math.cos(E);
    const dE = f / d; E -= dE;
    if (Math.abs(dE) < 1e-13) break;
  }
  return E;
}

/**
 * Generic two-body orbit about the parent's centre.
 * elements: a[km], e, inc/node/argp/M0 [deg], epochJD, nDegPerDay (mean motion), frame 'ecliptic' | 'icrs'
 */
export class KeplerOrbit {
  constructor(el) {
    this.a = el.a; this.e = el.e;
    this.inc = el.inc * DEG; this.node = el.node * DEG; this.argp = el.argp * DEG;
    this.M0 = el.M0 * DEG; this.epochJD = el.epochJD;
    this.n = (el.nDegPerDay * DEG) / 86400;            // rad/s
    this.frame = el.frame || 'icrs';
    // perifocal → inertial rotation
    this.R = mat3Mul(rotZ(this.node), mat3Mul(rotX(this.inc), rotZ(this.argp)));
    if (el.plane) this.R = mat3Mul(el.plane, this.R);                 // optional extra rotation: orbital plane frame → ICRS (procedural systems)
    this.periodSec = TAU / Math.abs(this.n);
    this.retro = this.n < 0;
  }
  /** position [km] relative to the parent at JD. */
  positionAt(jd, out) {
    const M = this.M0 + this.n * (jd - this.epochJD) * 86400;
    const E = solveKepler(M, this.e), cE = Math.cos(E), sE = Math.sin(E);
    const b = this.a * Math.sqrt(1 - this.e * this.e);
    let p = mat3Vec(this.R, [this.a * (cE - this.e), b * sE, 0]);
    if (this.frame === 'ecliptic') p = eclipticToIcrs(p);
    out[0] = p[0]; out[1] = p[1]; out[2] = p[2];
    return out;
  }
  velocityAt(jd, out) {
    const M = this.M0 + this.n * (jd - this.epochJD) * 86400;
    const E = solveKepler(M, this.e), cE = Math.cos(E), sE = Math.sin(E);
    const k = this.n / (1 - this.e * cE), b = this.a * Math.sqrt(1 - this.e * this.e);
    let v = mat3Vec(this.R, [-this.a * sE * k, b * cE * k, 0]);
    if (this.frame === 'ecliptic') v = eclipticToIcrs(v);
    out[0] = v[0]; out[1] = v[1]; out[2] = v[2];
    return out;
  }
}

/** JPL "Approximate Positions of the Planets": mean Keplerian elements + rates (valid 1800–2050, extended 3000BC–3000AD). Heliocentric, J2000 ecliptic. */
export class JplMeanOrbit {
  constructor(tables, key) {
    this.t1 = tables.table1[key]; this.t2 = tables.table2a && tables.table2a[key]; this.t2b = tables.table2b && tables.table2b[key];
    this.key = key;
    this.periodSec = 0;
    this.a = this.t1.a[0] * KM_PER_AU;        // semi-major axis at J2000 (for SOI / Hill estimates)
    this._setPeriod();
  }
  _setPeriod() { this.periodSec = ((36525 * 360) / Math.abs(this.t1.L[1])) * 86400; }   // L rate is deg per Julian century
  _elements(jd) {
    const T = (jd - J2000) / 36525;
    const inRange = jd > 2378496.5 && jd < 2469807.5;        // 1800 AD – 2050 AD
    const t = inRange || !this.t2 ? this.t1 : this.t2;
    const v = (k) => t[k][0] + t[k][1] * T;
    let M = v('L') - v('varpi');
    if (!inRange && this.t2b) { const { b, c, s, f } = this.t2b; M += b * T * T + c * Math.cos(f * DEG * T) + s * Math.sin(f * DEG * T); }
    return { a: v('a') * KM_PER_AU, e: v('e'), I: v('I') * DEG, Om: v('Omega') * DEG, w: (v('varpi') - v('Omega')) * DEG, M: M * DEG };
  }
  positionAt(jd, out) {
    const el = this._elements(jd);
    const E = solveKepler(el.M, el.e), x = el.a * (Math.cos(E) - el.e), y = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);
    const R = mat3Mul(rotZ(el.Om), mat3Mul(rotX(el.I), rotZ(el.w)));
    const p = eclipticToIcrs(mat3Vec(R, [x, y, 0]));
    out[0] = p[0]; out[1] = p[1]; out[2] = p[2];
    return out;
  }
  velocityAt(jd, out) {
    const h = 1 / 24, a = [0, 0, 0], b = [0, 0, 0];
    this.positionAt(jd - h, a); this.positionAt(jd + h, b);
    const dt = 2 * h * 86400;
    out[0] = (b[0] - a[0]) / dt; out[1] = (b[1] - a[1]) / dt; out[2] = (b[2] - a[2]) / dt;
    return out;
  }
}

/** A fixed offset (used for member stars of a multiple system – catalogue snapshot). */
export class FixedOrbit {
  constructor(p) { this.p = p; this.periodSec = Infinity; }
  positionAt(jd, out) { out[0] = this.p[0]; out[1] = this.p[1]; out[2] = this.p[2]; return out; }
  velocityAt(jd, out) { out[0] = out[1] = out[2] = 0; return out; }
}
