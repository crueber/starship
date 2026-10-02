// Network-free checks of the visitors feature: callsigns, message validation, and geometry.
import { rollCallsign, sanitize, relativeKm, CALLSIGN_COUNT } from '../src/net/visitorsCore.js';
import { KM_PER_PC } from '../shared/astro.js';
const assert = (c, m) => { if (!c) throw new Error('FAILED: ' + m); };

const seen = new Set(); for (let i = 0; i < 2000; i++) seen.add(rollCallsign());
console.log('sample callsigns:', [...seen].slice(0, 6).join(' | '), `(${seen.size} distinct in 2000 rolls, ${CALLSIGN_COUNT.toLocaleString('en-US')} possible)`);
assert(seen.size > 1900, 'callsigns should rarely collide');
assert([...seen].every((c) => /^[A-Za-z]{3} [A-Za-z' ]+ [A-Z]{2,3}-\d{4,5}(-[A-E])?$/.test(c)), 'callsign format');

const good = { ver: 1, name: 'ISV Calliope NCC-4471', sys: 'sol', ref: 'earth', sysName: 'Solar System', pos: [7000, 0, 0], abs: [0, 0, 0], vel: [1, 2, 3], quat: [0, 0, 0, 1], eng: [0.5, 0, 0] };
assert(sanitize(good), 'a good message passes');
for (const [what, bad] of [['no version', { ...good, ver: 2 }], ['NaN position', { ...good, pos: [NaN, 0, 0] }], ['huge position', { ...good, abs: [1e9, 0, 0] }], ['short name', { ...good, name: 'x' }], ['bad quat', { ...good, quat: [5, 0, 0, 1] }], ['array', []], ['null', null], ['string', 'hi'], ['missing vel', { ...good, vel: undefined }]])
  assert(sanitize(bad) === null, 'rejects ' + what);
const nasty = sanitize({ ...good, name: '<img src=x onerror=alert(1)> ISV Evil NCC-1' + 'x'.repeat(200) });
assert(nasty && !/[<>=]/.test(nasty.name) && nasty.name.length <= 40, 'markup and length are stripped from names: ' + nasty.name);
assert(sanitize({ ...good, eng: [9, -3, NaN] }).eng.join() === '1,0,0', 'engine levels clamped');

// geometry: same system, ship 1000 km above Earth, I am 2000 km above Earth on the same side
const ctx = { sysId: 'sol', mySysPos: [1.5e8 + 2000, 0, 0], myPc: [0, 0, 0], refPos: (id) => (id === 'earth' ? [1.5e8, 0, 0] : null) };
const m = sanitize({ ...good, pos: [1000, 0, 0], vel: [0, 7, 0] });
let r = relativeKm(m, 0, ctx); assert(Math.abs(r[0] + 1000) < 1e-6 && Math.abs(r[1]) < 1e-6, 'same-system placement ' + r);
r = relativeKm(m, 2, ctx); assert(Math.abs(r[1] - 14) < 1e-6, 'dead reckoning 2 s at 7 km/s');
ctx.refPos = (id) => (id === 'earth' ? [1.5e8, 5e7, 0] : null);                    // my date is different: Earth is elsewhere, the ship follows it
r = relativeKm(m, 0, { ...ctx, mySysPos: [1.5e8, 5e7, 0] }); assert(Math.abs(r[0] - 1000) < 1e-6 && Math.abs(r[1]) < 1e-6, 'follows the body to MY date');
// different system: absolute position
const far = sanitize({ ...good, sys: 'star:77', ref: '', pos: [10, 0, 0], abs: [1.3, 0, 0], vel: [0, 0, 0] });
r = relativeKm(far, 0, { ...ctx, myPc: [0, 0, 0] }); assert(Math.abs(r[0] - 1.3 * KM_PER_PC) < 1e6, 'cross-system placement');
// interstellar sender: velocity is pc/s
const warp = sanitize({ ...good, sys: '', ref: '', pos: null, abs: [0, 0, 0], vel: [1e-9, 0, 0] });
r = relativeKm(warp, 3, { ...ctx, myPc: [0, 0, 0] }); assert(Math.abs(r[0] - 3e-9 * KM_PER_PC) < 1e-3, 'interstellar dead reckoning');
console.log('visitors core checks passed');
