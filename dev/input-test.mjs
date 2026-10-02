import puppeteer from 'puppeteer-core'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const browser = await puppeteer.launch({ executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--no-sandbox', '--allow-file-access-from-files', '--window-size=1280,720'] });
const page = await browser.newPage(); await page.setViewport({ width: 1280, height: 720 });
const logs = []; page.on('pageerror', (e) => logs.push('pageerror ' + e.message)); page.on('console', (m) => { if (m.type() === 'error') logs.push('console.error ' + m.text().slice(0, 200)); });
await page.goto('file://' + path.join(root, 'index.html'), { waitUntil: 'load' }); await page.waitForFunction('window.__ready === true');
const st = () => page.evaluate(() => { const S = __sim.sim; const f = S.forward(); return { mode: S.mode, tour: !!S.tour, speed: +S.speed.toFixed(3), tgt: +S.speedTarget.toFixed(3), fwd: [f.x, f.y, f.z].map((v) => +v.toFixed(3)), cam: { yaw: +S.cam.yaw.toFixed(3), pitch: +S.cam.pitch.toFixed(3), dist: +S.cam.dist.toFixed(1) }, warp: S.warp.on, K: S.timeScale }; });
console.log('start (tour)        ', JSON.stringify(await st()));
// 1) pressing W takes the helm from the tour and raises throttle
await page.keyboard.down('w'); await new Promise((r) => setTimeout(r, 2500)); await page.keyboard.up('w');
console.log('after holding W 2.5s', JSON.stringify(await st()));
// 2) mouse-drag orbit must not change the ship heading
const before = await st();
await page.mouse.move(640, 360); await page.mouse.down(); await page.mouse.move(900, 300, { steps: 12 }); await page.mouse.move(400, 500, { steps: 12 }); await page.mouse.up();
await new Promise((r) => setTimeout(r, 800));
const after = await st();
const dHead = Math.hypot(...before.fwd.map((v, i) => v - after.fwd[i]));
console.log('after orbit-drag    ', JSON.stringify(after), ' heading change:', dHead.toFixed(4), dHead < 0.02 ? 'OK (heading unchanged)' : 'HEADING CHANGED');
// 3) wheel zoom into first-person and look around
await page.mouse.move(640, 360); for (let i = 0; i < 25; i++) await page.mouse.wheel({ deltaY: -120 });
await new Promise((r) => setTimeout(r, 600)); console.log('after wheel zoom-in ', JSON.stringify(await st()));
// 4) yaw with A and check heading rotates
await page.keyboard.down('a'); await new Promise((r) => setTimeout(r, 1200)); await page.keyboard.up('a');
const yawed = await st(); console.log('after holding A     ', JSON.stringify(yawed), ' heading change vs before:', Math.hypot(...before.fwd.map((v, i) => v - yawed.fwd[i])).toFixed(3));
// 5) X cuts the throttle; T toggles tour
await page.keyboard.press('x'); await new Promise((r) => setTimeout(r, 2500)); console.log('after X             ', JSON.stringify(await st()));
// 6) time-compression key and nav key
await page.keyboard.press('4'); await new Promise((r) => setTimeout(r, 300)); console.log('after key 4         ', (await st()).K);
await page.keyboard.press('n'); await new Promise((r) => setTimeout(r, 500)); console.log('nav open?', await page.evaluate(() => document.querySelector('.nav').classList.contains('open')));
console.log(logs.length ? logs.join('\n') : 'no console errors');
await browser.close();
