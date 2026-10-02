// Default-on and remembered choice. Needs internet. Usage: node dev/visitors-auto.mjs
import puppeteer from 'puppeteer-core'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const b = await puppeteer.launch({ executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', headless: true, args: ['--use-angle=metal', '--enable-gpu', '--no-sandbox', '--allow-file-access-from-files', '--window-size=1100,700'] });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const p = await b.newPage(); await p.setViewport({ width: 1100, height: 700 });
await p.evaluateOnNewDocument(() => { Object.defineProperty(navigator, 'webdriver', { get: () => false }); if (sessionStorage.getItem('fakeOffline')) Object.defineProperty(navigator, 'onLine', { get: () => false, configurable: true }); });     // behave like a person's browser; headless Chrome does not flip navigator.onLine itself
const url = 'file://' + root + '/index.html?notour=1';
const st = () => p.evaluate('({state:__sim.visitors.state,want:__sim.visitors.want,pref:localStorage.getItem("starship.visitors"),msg:(__sim.sim.messages||[]).map(m=>m.text||m.msg||"").join("|").slice(0,80)})');
const load = async () => { await p.goto(url); await p.waitForFunction('window.__ready===true'); await sleep(1500); };
let fails = 0; const check = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fails++; };
await load(); let s = await st(); console.log('first visit', JSON.stringify(s));
check(s.state === 'on' || s.state === 'joining', 'first visit joins by default'); check(s.pref === 'on', 'and remembers it');
await p.evaluate('__sim.ui.toggleVisitors()'); await p.evaluate('document.getElementById("vis-leave").click()'); await sleep(500);
s = await st(); check(s.state === 'off' && s.pref === 'off', 'LEAVE turns it off and remembers: ' + JSON.stringify(s));
await load(); s = await st(); check(s.state === 'off' && s.want === false, 'next visit stays off: ' + JSON.stringify(s));
await p.evaluate('__sim.ui.toggleVisitors()'); await p.evaluate('document.getElementById("vis-join").click()'); await sleep(1500);
s = await st(); check(s.state === 'on' && s.pref === 'on', 'JOIN turns it on and remembers: ' + JSON.stringify(s));
await load(); s = await st(); check(s.state === 'on' || s.state === 'joining', 'next visit joins again');
// no network: stays off, then joins when the network comes back
await p.evaluate('localStorage.removeItem("starship.visitors"); sessionStorage.setItem("fakeOffline","1")'); await load();
s = await st(); check(s.state === 'off', 'offline: does not try to join: ' + JSON.stringify(s));
await p.evaluate('sessionStorage.removeItem("fakeOffline"); Object.defineProperty(navigator,"onLine",{get:()=>true}); window.dispatchEvent(new Event("online"))'); await sleep(3000); s = await st(); check(s.state === 'on' || s.state === 'joining', 'back online: joins: ' + JSON.stringify(s));
await b.close(); process.exit(fails ? 1 : 0);
