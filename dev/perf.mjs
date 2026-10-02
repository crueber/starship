// Unthrottled frame-rate measurement (no vsync) in several representative scenes. node dev/perf.mjs [w h]
import puppeteer from 'puppeteer-core'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const W = +process.argv[2] || 1920, H = +process.argv[3] || 1080;
const browser = await puppeteer.launch({ executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--no-sandbox', '--allow-file-access-from-files', '--disable-frame-rate-limit', '--disable-gpu-vsync', `--window-size=${W},${H}`] });
const page = await browser.newPage(); await page.setViewport({ width: W, height: H });
await page.goto('file://' + path.join(root, 'index.html') + '?notour=1', { waitUntil: 'load' }); await page.waitForFunction('window.__ready === true');
await page.evaluate(() => { __sim.cfg.visuals.adaptiveResolution.enabled = false; });
const measure = async (name, setup) => {
  if (setup) await page.evaluate(setup);
  await new Promise((r) => setTimeout(r, 1500));
  const r = await page.evaluate(() => new Promise((res) => { const f0 = __sim.frames, t0 = performance.now(); setTimeout(() => res({ frames: __sim.frames - f0, ms: performance.now() - t0 }), 4000); }));
  console.log(`${name.padEnd(34)} ${(r.frames / r.ms * 1000).toFixed(0).padStart(5)} fps  (${(r.ms / r.frames).toFixed(2)} ms/frame)  @ ${W}x${H}`);
};
await measure('Earth orbit, chase cam', "(()=>{const S=__sim.sim,u=__sim.uni;S.placeAtBody(u.solar.get('earth'),2.2,0.7,0.35);S.camToward(__sim.ctx?__sim.ctx.sunDir:[1,0,0],0.7,0.3,170);return 1})()");
await measure('Jupiter, planet fills the view', "(()=>{const S=__sim.sim,u=__sim.uni;S.placeAtBody(u.solar.get('jupiter'),1.5,0.7,0.35);__sim.devCam={body:'jupiter',r:1.8,az:30,el:10};return 1})()");
await measure('Saturn + rings close', "(()=>{const S=__sim.sim,u=__sim.uni;S.placeAtBody(u.solar.get('saturn'),2.5,0.7,0.35);__sim.devCam={body:'saturn',r:3.2,az:140,el:25};return 1})()");
await measure('Earth close (atmosphere+clouds)', "(()=>{const S=__sim.sim,u=__sim.uni;S.placeAtBody(u.solar.get('earth'),1.5,0.7,0.35);__sim.devCam={body:'earth',r:1.3,az:70,el:10};return 1})()");
await measure('deep space, Milky Way + stars', "(()=>{__sim.devCam=null;__sim.deepSpace([0.25,0.72,-0.2],0.3);return 1})()");
await measure('warp bubble (1e6 c)', "(()=>{__sim.testWarp(6,[0.3,0.9,0.2]);return 1})()");
await browser.close();
