// Shared helpers for the data build: config loading, cached downloads, tiny CSV/TSV parsers, logging.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const RAW = path.join(ROOT, 'data', 'raw');
export const OUT = path.join(ROOT, 'data');
fs.mkdirSync(RAW, { recursive: true });

export const flags = {
  refresh: process.argv.includes('--refresh'),      // re-download even if cached
  offline: process.argv.includes('--offline'),      // never touch the network; use data/raw only
  allowPartial: process.argv.includes('--allow-partial'),
  skipTextures: process.argv.includes('--skip-textures'),
};

export function loadConfig() {
  const code = fs.readFileSync(path.join(ROOT, 'config.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: 'config.js' });
  if (!sandbox.window.SIM_CONFIG) throw new Error('config.js did not define window.SIM_CONFIG');
  return sandbox.window.SIM_CONFIG;
}

// ───────── logging ─────────
const t0 = Date.now();
export const log = (...a) => console.log(`[${((Date.now() - t0) / 1000).toFixed(1).padStart(5)}s]`, ...a);
export const warn = (...a) => console.warn('  ⚠ ', ...a);
export const head = (s) => console.log(`\n━━ ${s} ${'━'.repeat(Math.max(2, 70 - s.length))}`);

// ───────── missing-source bookkeeping ─────────
// Every dataset that cannot be fetched is recorded here with the exact manual-download instruction.
export const problems = [];
export function reportMissing({ dataset, url, dest, why, required = true, note = '' }) {
  problems.push({ dataset, url, dest: path.relative(ROOT, dest), why, required, note });
}

// ───────── downloads ─────────
const UA = 'starship-sim-data-build/1.0 (offline planetarium; contact: local user)';

async function fetchTo(url, dest, { headers = {}, timeoutMs = 600000, init = {}, label } = {}) {
  const tmp = dest + '.part';
  const res = await fetch(url, { headers: { 'User-Agent': UA, ...headers }, signal: AbortSignal.timeout(timeoutMs), redirect: 'follow', ...init });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const total = Number(res.headers.get('content-length')) || 0;
  let got = 0, lastPct = -1;
  const src = Readable.fromWeb(res.body);
  src.on('data', (c) => {
    got += c.length;
    if (total > 4e6) {
      const pct = Math.floor((got / total) * 10) * 10;
      if (pct !== lastPct) { lastPct = pct; log(`    ${label || path.basename(dest)}: ${pct}% (${(got / 1e6).toFixed(1)} MB)`); }
    }
  });
  await pipeline(src, fs.createWriteStream(tmp));
  fs.renameSync(tmp, dest);
  return got;
}

/**
 * Make sure `dest` exists locally, downloading `url` if needed.
 * Returns true if the file is available. On failure records a problem (with manual instructions) and returns false.
 */
export async function ensureFile({ dataset, url, dest, required = true, minBytes = 1, note = '', fetchOpts = {} }) {
  const have = fs.existsSync(dest) && fs.statSync(dest).size >= minBytes;
  if (have && !flags.refresh) { log(`  cached  ${path.relative(ROOT, dest)} (${(fs.statSync(dest).size / 1e6).toFixed(2)} MB)`); return true; }
  if (flags.offline) {
    if (have) return true;
    reportMissing({ dataset, url, dest, why: '--offline given and no cached copy', required, note });
    return false;
  }
  try {
    log(`  fetch   ${url}`);
    const n = await fetchTo(url, dest, fetchOpts);
    if (n < minBytes) throw new Error(`only ${n} bytes received`);
    log(`  saved   ${path.relative(ROOT, dest)} (${(n / 1e6).toFixed(2)} MB)`);
    return true;
  } catch (e) {
    try { fs.rmSync(dest + '.part', { force: true }); } catch {}
    if (have) { warn(`download failed (${e.message}); using cached copy of ${path.basename(dest)}`); return true; }
    reportMissing({ dataset, url, dest, why: String(e.message || e), required, note });
    return false;
  }
}

/** GET with query params, cached as text. Returns text or null (and records a problem). */
export async function getTextCached({ dataset, url, params, dest, required = true, minBytes = 1, note = '', method = 'GET' }) {
  const full = params ? `${url}${url.includes('?') ? '&' : '?'}${new URLSearchParams(params)}` : url;
  const ok = await ensureFile({ dataset, url: full, dest, required, minBytes, note });
  return ok ? fs.readFileSync(dest, 'utf8') : null;
}

// ───────── parsing ─────────
export function parseCSV(text) {
  // RFC4180-ish; handles quoted fields with commas / doubled quotes / newlines.
  const rows = []; let row = [], cur = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQ) {
      if (ch === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else inQ = false; } else cur += ch;
    } else if (ch === '"') inQ = true;
    else if (ch === ',') { row.push(cur); cur = ''; }
    else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
    else if (ch !== '\r') cur += ch;
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  if (!rows.length) return [];
  const hdr = rows[0];
  return rows.slice(1).filter((r) => r.length === hdr.length).map((r) => Object.fromEntries(hdr.map((h, i) => [h, r[i]])));
}

export function parseVizierTSV(text) {
  const lines = text.split('\n').filter((l) => l.length && !l.startsWith('#'));
  const hdr = lines[0].split('\t').map((s) => s.trim());
  // lines[1] = units, lines[2] = dashes
  return lines.slice(3).map((l) => {
    const f = l.split('\t');
    return Object.fromEntries(hdr.map((h, i) => [h, (f[i] ?? '').trim()]));
  });
}

export const num = (s) => { if (s === undefined || s === null) return null; const t = String(s).trim(); if (t === '') return null; const v = Number(t); return Number.isFinite(v) ? v : null; };

export function fmtBytes(n) { return n >= 1e6 ? (n / 1e6).toFixed(2) + ' MB' : (n / 1e3).toFixed(1) + ' kB'; }
export function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
