// Exposure is set from the illumination around the ship (a camera metering the scene), not from image feedback:
//   gain = key / E_context, clamped, where E_context is the irradiance (in solar constants) on a sunlit surface at the ship.
// Sunlit scenes get gain ~1 (stars vanish, as in real photographs); in a planet's shadow or deep space the gain climbs towards maxGain.
import { KM_PER_AU, KM_PER_PC } from '../../shared/astro.js';
import { smoothstep, clamp } from '../core/math.js';

export function discOverlap(ra, rb, d) {
  if (d >= ra + rb) return 0;
  if (d <= Math.abs(rb - ra)) return rb >= ra ? 1 : (rb * rb) / (ra * ra);
  const a = Math.acos(clamp((d * d + ra * ra - rb * rb) / (2 * d * ra), -1, 1)), b = Math.acos(clamp((d * d + rb * rb - ra * ra) / (2 * d * rb), -1, 1));
  return clamp((ra * ra * (a - Math.sin(2 * a) * 0.5) + rb * rb * (b - Math.sin(2 * b) * 0.5)) / (Math.PI * ra * ra), 0, 1);
}

/** Irradiance at point p (km, system frame) from the system's stars, including eclipses by its bodies, plus planetshine. */
export function systemIrradiance(system, p, jd) {
  let direct = 0, shine = 0;
  const stars = system.stars;
  const sp = stars.map((s) => s.positionAt(jd));
  stars.forEach((s, si) => {
    const dx = sp[si][0] - p[0], dy = sp[si][1] - p[1], dz = sp[si][2] - p[2];
    const d = Math.hypot(dx, dy, dz) || 1, au = d / KM_PER_AU;
    let E = s.lumV / (au * au);
    const dir = [dx / d, dy / d, dz / d], angS = s.radiusKm / d;
    let vis = 1;
    for (const b of system.bodies) {
      if (b.kind === 'star' || b.kind === 'belt') continue;
      const bp = b.positionAt(jd);
      const ox = bp[0] - p[0], oy = bp[1] - p[1], oz = bp[2] - p[2];
      const tc = ox * dir[0] + oy * dir[1] + oz * dir[2];
      if (tc <= 0) continue;
      const od = Math.hypot(ox, oy, oz);
      if (b.radiusKm / od < 2e-4) continue;
      const sx = ox - tc * dir[0], sy = oy - tc * dir[1], sz = oz - tc * dir[2];
      const sep = Math.hypot(sx, sy, sz) / tc, angO = b.radiusKm / tc;
      vis *= 1 - discOverlap(angS, angO, sep);
    }
    direct += E * vis;
    // planetshine: light reflected by bodies that are themselves lit by this star
    for (const b of system.bodies) {
      if (b.kind === 'star' || b.kind === 'belt') continue;
      const bp = b.positionAt(jd);
      const ox = bp[0] - p[0], oy = bp[1] - p[1], oz = bp[2] - p[2];
      const od = Math.hypot(ox, oy, oz); if (od < 1) continue;
      const sdx = sp[si][0] - bp[0], sdy = sp[si][1] - bp[1], sdz = sp[si][2] - bp[2];
      const sdd = Math.hypot(sdx, sdy, sdz), sau = sdd / KM_PER_AU;
      const cosA = -(ox * sdx + oy * sdy + oz * sdz) / (od * sdd);        // phase: 1 = full
      const alpha = Math.acos(clamp(cosA, -1, 1));
      const phase = (Math.sin(alpha) + (Math.PI - alpha) * Math.cos(alpha)) / Math.PI;
      const ang2 = Math.pow(b.radiusKm / od, 2);
      shine += (b.albedo ?? 0.3) * ang2 * phase * (s.lumV / (sau * sau)) * (od < b.radiusKm * 1.001 ? 0 : 1) * 0.9;
    }
  });
  return { direct, shine };
}

export function exposureFromContext(E, cfg) {
  const ex = cfg.visuals.exposure;
  const ev = Math.pow(2, ex.compensationEv);
  const gain = clamp((ex.key ?? 0.9) / Math.max(E, 1e-12), ex.minGain, ex.maxGain) * ev;
  return gain;
}

/** smooth the gain in log space (eye / sensor adaptation) */
export function adaptGain(cur, target, dt, tau) {
  if (!isFinite(cur) || cur <= 0) return target;
  const a = 1 - Math.exp(-dt / Math.max(tau, 0.05));
  return Math.exp(Math.log(cur) + (Math.log(target) - Math.log(cur)) * a);
}

/** The dominant star at point p: direction, irradiance (after eclipses), colour. Used for the ship's key light. */
export function keyLight(system, p, jd) {
  let best = null;
  for (const s of system.stars) {
    const sp = s.positionAt(jd);
    const dx = sp[0] - p[0], dy = sp[1] - p[1], dz = sp[2] - p[2];
    const d = Math.hypot(dx, dy, dz) || 1, au = d / KM_PER_AU, E0 = s.lumV / (au * au);
    const dir = [dx / d, dy / d, dz / d], angS = s.radiusKm / d;
    let vis = 1;
    for (const b of system.bodies) {
      if (b.kind === 'star' || b.kind === 'belt') continue;
      const bp = b.positionAt(jd);
      const ox = bp[0] - p[0], oy = bp[1] - p[1], oz = bp[2] - p[2];
      const tc = ox * dir[0] + oy * dir[1] + oz * dir[2]; if (tc <= 0) continue;
      const od = Math.hypot(ox, oy, oz); if (b.radiusKm / od < 2e-4) continue;
      const sep = Math.hypot(ox - tc * dir[0], oy - tc * dir[1], oz - tc * dir[2]) / tc;
      vis *= 1 - discOverlap(angS, b.radiusKm / tc, sep);
    }
    if (!best || E0 * vis > best.E) best = { star: s, dir, E: E0 * vis, E0, vis, color: s.color || [1, 1, 1] };
  }
  return best;
}
