// Headless screenshot harness: node dev/shot.mjs --out shots/x.png [--eval "js"] [--wait ms] [--w 1600 --h 900] [--hideui] [--logs]
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const get = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const out = path.resolve(root, get('out', 'shots/shot.png'));
const W = +get('w', 1600), H = +get('h', 900), wait = +get('wait', 1500);
const evalCode = get('eval', '');
const evals = args.map((a, i) => (a === '--eval' ? args[i + 1] : null)).filter(Boolean);
fs.mkdirSync(path.dirname(out), { recursive: true });
const browser = await puppeteer.launch({ executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: true,
  args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--no-sandbox', '--allow-file-access-from-files', `--window-size=${W},${H}`] });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: +get('dpr', 1) });
const logs = [];
page.on('console', (m) => { const t = m.text(); logs.push(`[${m.type()}] ${t}`); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message));
const url = 'file://' + path.join(root, 'index.html') + (get('q', '') ? '?' + get('q') : '');
await page.goto(url, { waitUntil: 'load', timeout: 120000 });
try { await page.waitForFunction('window.__ready === true', { timeout: 120000 }); } catch (e) { logs.push('[harness] timeout waiting for __ready'); }
for (const code of evals) {
  try { const r = await page.evaluate(code); if (r !== undefined) logs.push('[eval] ' + JSON.stringify(r)); } catch (e) { logs.push('[eval-error] ' + e.message); }
  await new Promise((r) => setTimeout(r, 400));
}
await new Promise((r) => setTimeout(r, wait));
if (args.includes('--hideui')) await page.evaluate('document.getElementById("ui") && (document.getElementById("ui").style.display="none")');
await page.screenshot({ path: out });
const fps = await page.evaluate('window.__sim && window.__sim.frames !== undefined ? window.__sim.frames : -1');
if (args.includes('--logs') || logs.some((l) => /error/i.test(l))) console.log(logs.join('\n'));
console.log('saved', out, 'frames', fps);
await browser.close();
