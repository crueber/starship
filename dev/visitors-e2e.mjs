// Two real browser pages meet over the public Nostr relays and must see each other. Needs internet. Usage: node dev/visitors-e2e.mjs
import puppeteer from 'puppeteer-core'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const launch = () => puppeteer.launch({ executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--no-sandbox', '--allow-file-access-from-files', '--window-size=1100,700'] });
const browsers = [];       // one browser per visitor, so each page keeps animating (a background tab does not)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const room = 'e2e-' + Math.random().toString(36).slice(2, 8);
async function open(tag) {
  const b = await launch(); browsers.push(b); const p = await b.newPage(); await p.setViewport({ width: 1100, height: 700 });
  const reqs = []; p.on('request', (r) => reqs.push(r.url())); p.on('console', (m) => { if (/error|fail/i.test(m.text()) && !/WebGL|GPU|useProgram/i.test(m.text())) console.log(`[${tag}]`, m.text().slice(0, 160)); });
  await p.goto('file://' + root + '/index.html?notour=1'); await p.waitForFunction('window.__ready===true');
  await p.evaluate(`window.SIM_CONFIG.visitors.room=${JSON.stringify(room)}`);
  return { p, reqs };
}
const A = await open('A'), B = await open('B');
console.log('network requests before joining: A', A.reqs.filter((u) => !/^(file|data|blob):/.test(u)).length, 'B', B.reqs.filter((u) => !/^(file|data|blob):/.test(u)).length);
// both near Earth, B 3 km behind A, so the 3-D model path is exercised too
await A.p.evaluate(`(()=>{const S=__sim.sim,u=__sim.uni;S.placeAtBody(u.solar.get('earth'),3,0.5,0.2);S.setTimeIndex(0);return 1})()`);
await B.p.evaluate(`(()=>{const S=__sim.sim,u=__sim.uni;S.placeAtBody(u.solar.get('earth'),3,0.5,0.2);S.theta=0;S.orbit.theta=0.00002;S.setTimeIndex(0);return 1})()`);
await A.p.evaluate('__sim.visitors.join()'); await B.p.evaluate('__sim.visitors.join()');
const t0 = Date.now(); let seen = false;
for (let i = 0; i < 60; i++) {
  await sleep(1000);
  const [a, bb] = await Promise.all([A.p, B.p].map((p) => p.evaluate('({state:__sim.visitors.state,n:__sim.visitors.view.length,names:__sim.visitors.view.map(v=>v.name+" "+Math.round(v.distKm)+"km"),me:__sim.visitors.callsign,err:__sim.visitors.error})')));
  if (i % 5 === 0) console.log(`t=${i}s A:`, JSON.stringify(a), ' B:', JSON.stringify(bb));
  if (a.n >= 1 && bb.n >= 1) { console.log(`MET after ${((Date.now() - t0) / 1000).toFixed(1)} s: A sees ${a.names}, B sees ${bb.names}`); seen = true; break; }
}
if (seen) {
  await sleep(4000);
  await A.p.evaluate('document.getElementById("ui").style.display=""'); await sleep(1500);
  await A.p.evaluate(`(()=>{const c=__sim.sim.cam;c.yaw=c.yawT=0;c.pitch=c.pitchT=0;c.dist=c.distT=0;const V=__sim.sim.forward().constructor,v=__sim.visitors.view[0].relKm,d=new V(v[0],v[1],v[2]).normalize();__sim.sim.qCam.setFromUnitVectors(new V(0,0,-1),d);return 1})()`); await sleep(1500); await sleep(800); await A.p.screenshot({ path: '/tmp/vis_A.png' });
  const mm = await A.p.evaluate('({models:__sim.visitors.models.length,view:__sim.visitors.view.map(v=>[v.name,Math.round(v.distKm*1000)+" m"])})'); console.log('A near-ship models', JSON.stringify(mm));
  // leaving removes the ship
  await B.p.evaluate('__sim.visitors.leave()'); await sleep(4000);
  console.log('after B leaves, A sees', await A.p.evaluate('__sim.visitors.view.length'), 'visitors');
}
for (const b of browsers) await b.close(); process.exit(seen ? 0 : 2);
