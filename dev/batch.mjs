// Multi-shot screenshot batch in one browser session: node dev/batch.mjs shots.json   (array of {name, eval, wait, w, h})
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const spec = JSON.parse(fs.readFileSync(path.resolve(process.argv[2]), 'utf8'));
const dir = path.join(root, 'shots'); fs.mkdirSync(dir, { recursive: true });
const W = spec.w || 1600, H = spec.h || 900;
const browser = await puppeteer.launch({ executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: true,
  args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--no-sandbox', '--allow-file-access-from-files', `--window-size=${W},${H}`] });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
const logs = [];
page.on('console', (m) => { const t = m.text(); if (!/useProgram|glslVersion/.test(t)) logs.push(`[${m.type()}] ${t}`); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message));
await page.goto('file://' + path.join(root, 'index.html') + (spec.q ? '?' + spec.q : ''), { waitUntil: 'load', timeout: 120000 });
await page.waitForFunction('window.__ready === true', { timeout: 120000 });
for (const s of spec.shots) {
  if (s.eval) { try { const r = await page.evaluate(s.eval); if (r !== undefined && r !== null && s.print) logs.push(`[${s.name}] ` + JSON.stringify(r)); } catch (e) { logs.push(`[eval-error ${s.name}] ` + e.message); } }
  await new Promise((r) => setTimeout(r, s.wait ?? 1200));
  if (s.hideui) await page.evaluate('document.getElementById("ui")&&(document.getElementById("ui").style.display="none")');
  await page.screenshot({ path: path.join(dir, s.name + '.png') });
  console.log('saved', s.name);
}
const seen = new Set(); for (const l of logs) { const k = l.slice(0, 200); if (!seen.has(k)) { seen.add(k); console.log(l.slice(0, 1200)); } }
await browser.close();
