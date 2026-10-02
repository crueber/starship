// Scenario runner: node dev/flow.mjs scenario.json
// scenario: { q, steps:[ {eval, until:"js expr", timeout:s, poll:s, shot:"name", log:"js expr"} ] }
import puppeteer from 'puppeteer-core';
import path from 'node:path'; import fs from 'node:fs'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const spec = JSON.parse(fs.readFileSync(path.resolve(process.argv[2]), 'utf8'));
const W = spec.w || 1600, H = spec.h || 900;
const browser = await puppeteer.launch({ executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--no-sandbox', '--allow-file-access-from-files', `--window-size=${W},${H}`] });
const page = await browser.newPage(); await page.setViewport({ width: W, height: H });
const logs = []; page.on('console', (m) => { const t = m.text(); if (!/useProgram|glslVersion/.test(t)) logs.push(`[${m.type()}] ${t}`); }); page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message));
await page.goto('file://' + path.join(root, 'index.html') + (spec.q ? '?' + spec.q : ''), { waitUntil: 'load', timeout: 120000 });
await page.waitForFunction('window.__ready === true', { timeout: 120000 });
const t0 = Date.now();
for (const st of spec.steps) {
  if (st.eval) { try { const r = await page.evaluate(st.eval); if (st.print) console.log('  eval →', JSON.stringify(r)); } catch (e) { console.log('  eval error', e.message); } }
  if (st.wait) await new Promise((r) => setTimeout(r, st.wait * 1000));
  if (st.until) {
    const timeout = (st.timeout || 60) * 1000, poll = (st.poll || 2) * 1000, start = Date.now();
    for (;;) {
      const [done, info] = await page.evaluate(`[!!(${st.until}), ${st.log || 'null'}]`);
      if (st.log) console.log(`  t=${((Date.now() - t0) / 1000).toFixed(0)}s`, JSON.stringify(info));
      if (done) break;
      if (Date.now() - start > timeout) { console.log('  TIMEOUT waiting for', st.until); break; }
      if (st.shotEvery && Math.floor((Date.now() - start) / (st.shotEvery * 1000)) > (st._n || 0)) { st._n = (st._n || 0) + 1; await page.screenshot({ path: path.join(root, 'shots', `${st.shot}_${st._n}.png`) }); }
      await new Promise((r) => setTimeout(r, poll));
    }
  }
  if (st.shot && !st.shotEvery) { await new Promise((r) => setTimeout(r, st.shotDelay ?? 400)); await page.screenshot({ path: path.join(root, 'shots', st.shot + '.png') }); console.log('  shot', st.shot); }
}
const seen = new Set(); for (const l of logs) { const k = l.slice(0, 160); if (!seen.has(k)) { seen.add(k); console.log(l.slice(0, 700)); } }
await browser.close();
