// Pure, network-free parts of the "visitors" feature: callsigns, message validation, and where another ship is relative to ours.
import { KM_PER_PC } from '../../shared/astro.js';

// ───────────────────────── callsigns ─────────────────────────
// A registry in the style of a fleet list: "ISV Calliope NCC-4471". Random per session, not editable; re-rolling is rate-limited by the UI.
const PREFIX = ['ISV', 'ISV', 'ISV', 'CSV', 'ESV', 'RSV', 'UES'];
const REGISTRY = ['NCC', 'NCC', 'NCC', 'NAR', 'NX', 'NSV'];
const NAMES = ['Aurora', 'Calliope', 'Meridian', 'Odyssey', 'Resolute', 'Endeavour', 'Perseverance', 'Horizon', 'Tycho', 'Sagan', 'Kepler', 'Halley', 'Hypatia', 'Magellan', 'Vesper',
  'Lodestar', 'Wayfarer', 'Corvus', 'Cassini', 'Armstrong', 'Challenger', 'Pathfinder', 'Voyager', 'Zenith', 'Cormorant', 'Albatross', 'Kestrel', 'Ptolemy', 'Copernicus', 'Galileo',
  'Newton', 'Curie', 'Ibn Battuta', 'Zheng He', 'Shackleton', 'Amundsen', 'Nansen', 'Franklin', 'Cook', 'Drake', 'Hudson', 'Tasman', 'Vespucci', 'Orion', 'Lyra', 'Cygnus', 'Pegasus',
  'Andromeda', 'Carina', 'Vela', 'Argo', 'Centaur', 'Perseus', 'Cepheus', 'Bellerophon', 'Artemis', 'Ariadne', 'Atlas', 'Hyperion', 'Helios', 'Pioneer', 'Surveyor', 'Mariner',
  'Discoverer', 'Intrepid', 'Valiant', 'Steadfast', 'Tenacity', 'Clarity', 'Fortitude', 'Providence', 'Constance', 'Verity', 'Harmony', 'Concord', 'Sojourner', 'Wanderer', 'Nomad',
  'Drifter', 'Migrant', 'Haven', 'Beacon', 'Sentinel', 'Lantern', 'Compass', 'Sextant', 'Astrolabe', 'Orrery', 'Gnomon', 'Equinox', 'Solstice', 'Zephyr', 'Mistral', 'Tramontane'];

/** @param {() => number} rng a function returning [0,1) */
export function rollCallsign(rng = Math.random) {
  const pick = (a) => a[Math.floor(rng() * a.length)];
  const digits = rng() < 0.7 ? 1000 + Math.floor(rng() * 9000) : 10000 + Math.floor(rng() * 90000);
  const suffix = rng() < 0.12 ? '-' + pick(['A', 'B', 'C', 'D', 'E']) : '';
  return `${pick(PREFIX)} ${pick(NAMES)} ${pick(REGISTRY)}-${digits}${suffix}`;
}
export const CALLSIGN_COUNT = PREFIX.length * NAMES.length * REGISTRY.length * 9000;

// ───────────────────────── messages ─────────────────────────
// What a ship broadcasts (about twice a second). Positions travel in two forms so every receiver can place it exactly, whatever its own time compression is:
//   sys/ref/pos : inside a star system, relative to the body the ship is bound to (km), so the planet's position at the RECEIVER's date is used
//   abs         : galactic position in parsecs, for ships in other systems or in interstellar space
//   vel         : the ship's measured velocity in its frame in km (or pc) per REAL second, for dead reckoning between messages
const finite3 = (a, lim) => Array.isArray(a) && a.length === 3 && a.every((x) => typeof x === 'number' && Number.isFinite(x) && Math.abs(x) < lim);
const cleanText = (s, n) => (typeof s === 'string' ? s.replace(/[^\p{L}\p{N} ·.\-']/gu, '').slice(0, n) : '');

/** returns a trusted copy of an incoming message, or null */
export function sanitize(m) {
  if (!m || typeof m !== 'object' || m.ver !== 1) return null;
  const name = cleanText(m.name, 40); if (name.length < 3) return null;
  if (!finite3(m.abs, 1e5) || !finite3(m.vel, 1e12)) return null;
  if (!Array.isArray(m.quat) || m.quat.length !== 4 || !m.quat.every((x) => typeof x === 'number' && Number.isFinite(x) && Math.abs(x) <= 1.0001)) return null;
  const sys = cleanText(m.sys, 40), ref = cleanText(m.ref, 40);
  let pos = null; if (sys) { if (!finite3(m.pos, 1e12)) return null; pos = m.pos.slice(); }
  const eng = Array.isArray(m.eng) && m.eng.length === 3 ? m.eng.map((x) => (typeof x === 'number' && Number.isFinite(x) ? Math.min(1, Math.max(0, x)) : 0)) : [0, 0, 0];
  return { ver: 1, name, sys, ref, sysName: cleanText(m.sysName, 40), pos, abs: m.abs.slice(), vel: m.vel.slice(), quat: m.quat.slice(), eng };
}

/** a ship's broadcast, built from the simulation */
export function buildMessage(sim, name, prev, nowMs) {
  const sys = sim.system, abs = sim.shipPc();
  const msg = { ver: 1, name, sys: sys ? sys.id : '', ref: sim.ref ? sim.ref.id : '', sysName: sys ? sys.name : '', pos: sys ? sim.pos.slice() : null, abs, vel: [0, 0, 0], quat: sim.q.toArray(), eng: [sim.eng.rocket, sim.eng.cruise, sim.eng.warp].map((x) => +x.toFixed(2)) };
  // measured velocity: how far the ship really moved per real second since the last message (right through orbit-rate limits, warp and time compression)
  if (prev && prev.sys === msg.sys && prev.ref === msg.ref && nowMs > prev.t) {
    const dt = (nowMs - prev.t) / 1000;
    msg.vel = sys ? msg.pos.map((x, i) => (x - prev.pos[i]) / dt) : msg.abs.map((x, i) => (x - prev.abs[i]) / dt);
  }
  return msg;
}

// ───────────────────────── geometry ─────────────────────────
/**
 * Where another ship is relative to ours, in km along the world axes.
 * ctx: { sysId, mySysPos:[km], myPc:[pc], refPos(id)->[km]|null (position of a body in MY system at MY date) }
 * dt: seconds since the message arrived (capped by the caller); err: smoothing offset in the message's own frame (km), decays on its own
 */
export function relativeKm(m, dt, ctx, err) {
  const ex = err || [0, 0, 0];
  if (m.sys && m.sys === ctx.sysId) {
    const rp = m.ref ? ctx.refPos(m.ref) : [0, 0, 0];
    if (rp) return [0, 1, 2].map((i) => rp[i] + m.pos[i] + m.vel[i] * dt + ex[i] - ctx.mySysPos[i]);
  }
  // other system or open space: the absolute galactic position (velocity is in km/s for in-system senders, pc/s for interstellar ones)
  const v = m.sys ? m.vel.map((x) => x / KM_PER_PC) : m.vel;
  return [0, 1, 2].map((i) => (m.abs[i] + v[i] * dt - ctx.myPc[i]) * KM_PER_PC);
}
