// Star names: IAU Catalog of Star Names + SIMBAD aliases for nearby stars + guaranteed overrides from config.
import fs from 'node:fs';
import path from 'node:path';
import { RAW, ensureFile, parseCSV, log, warn, head, reportMissing, flags } from './util.mjs';
import * as A from '../../shared/astro.js';

const GREEK = { alf: 'α', bet: 'β', gam: 'γ', del: 'δ', eps: 'ε', zet: 'ζ', eta: 'η', tet: 'θ', iot: 'ι', kap: 'κ', lam: 'λ', mu: 'μ', nu: 'ν', ksi: 'ξ', omi: 'ο', pi: 'π', rho: 'ρ', sig: 'σ', tau: 'τ', ups: 'υ', phi: 'φ', chi: 'χ', psi: 'ψ', ome: 'ω' };
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';

function tidy(s) { return s.replace(/\s+/g, ' ').trim(); }

/** Pick the best human-friendly name from a SIMBAD identifier list. Returns {name, rank} or null. */
export function pickName(ids) {
  let best = null;
  const consider = (name, rank) => { if (!best || rank < best.rank || (rank === best.rank && name.length > best.name.length && rank === 1)) best = { name, rank }; };
  for (const raw of ids) {
    const id = tidy(raw);
    let m;
    if ((m = /^NAME (.+)$/.exec(id))) { if (!/^(Gaia|HIP|Cl |\*)/.test(m[1])) consider(m[1], 1); continue; }
    if ((m = /^\* ([a-z]{2,3})\.?(\d{0,2}) ([A-Za-z]{3})(?: ([A-Z]{1,2}[a-z]?\d?))?$/.exec(id)) && GREEK[m[1]]) {
      const sup = m[2] ? [...String(parseInt(m[2], 10))].map((d) => SUP[+d]).join('') : '';
      consider(`${GREEK[m[1]]}${sup} ${m[3]}${m[4] ? ' ' + m[4] : ''}`, 2); continue;
    }
    if ((m = /^\* (\d{1,3}) ([A-Za-z]{3})(?: ([A-Z]{1,2}\d?))?$/.exec(id))) { consider(`${m[1]} ${m[2]}${m[3] ? ' ' + m[3] : ''}`, 3); continue; }
    if ((m = /^(Wolf|Ross|Kapteyn|Groombridge|Lacaille|Luyten|Struve|Kruger|Barnard|Teegarden|Lalande|Van Maanen|Innes|Gliese) (\d+.*)$/i.exec(id))) { consider(`${m[1]} ${m[2]}`, 4); continue; }
    if ((m = /^LAL (\d+)$/.exec(id))) { consider(`Lalande ${m[1]}`, 4); continue; }
    if ((m = /^GJ (\d+(?: ?[ABC])?)$/.exec(id))) { consider(`GJ ${m[1]}`, 5); continue; }
    if ((m = /^LHS (\d+)$/.exec(id))) { consider(`LHS ${m[1]}`, 6); continue; }
    if ((m = /^HD (\d+)$/.exec(id))) { consider(`HD ${m[1]}`, 8); continue; }
  }
  return best;
}

export async function buildNames(cfg, stars) {
  head('NAMES');
  const nc = cfg.names;
  const byHip = new Map(); stars.forEach((s, i) => { if (s.hip) byHip.set(s.hip, i); });
  const byGaia = new Map(); stars.forEach((s, i) => { if (s.gaia) byGaia.set(String(s.gaia), i); });
  const stats = { iau: 0, simbad: 0, overrides: 0, simbadStatus: 'disabled', iauStatus: 'ok' };

  // The Sun
  const sunIdx = stars.findIndex((s) => s.src === 'sun'); if (sunIdx >= 0) stars[sunIdx].name = 'Sun';

  // 1) IAU Catalog of Star Names
  const iauPath = path.join(RAW, 'IAU-CSN.txt');
  const iauOk = await ensureFile({ dataset: 'IAU Catalog of Star Names (optional)', url: cfg.sources.iauNames, dest: iauPath, required: false, minBytes: 5000,
    note: 'Optional. Without it only SIMBAD / catalogue designations are used for names.' });
  if (iauOk) {
    for (const line of fs.readFileSync(iauPath, 'utf8').split('\n')) {
      if (!line || line[0] === '#' || line[0] === '$') continue;
      const m = /\s(\d+|_)\s+(\d+|_)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+\d{4}-\d{2}-\d{2}/.exec(line);
      if (!m || m[1] === '_') continue;
      const name = line.slice(18, 36).trim() || line.slice(0, 18).trim();
      const idx = byHip.get(parseInt(m[1], 10));
      if (idx !== undefined && !stars[idx].name) { stars[idx].name = name; stars[idx].nameSrc = 'IAU'; stats.iau++; }
    }
    log(`  IAU proper names matched: ${stats.iau}`);
  } else stats.iauStatus = 'MISSING';

  // 2) SIMBAD aliases for nearby stars
  if (nc.simbad) {
    const maxPc = nc.simbadRadiusLy * A.PC_PER_LY;
    const cand = [];
    stars.forEach((s, i) => { if (s.dist <= maxPc && s.src !== 'sun') cand.push(i); });
    log(`  SIMBAD lookup for ${cand.length} stars within ${nc.simbadRadiusLy} ly`);
    const cachePath = path.join(RAW, `simbad_names_${nc.simbadRadiusLy}ly.json`);
    let table = {};
    if (fs.existsSync(cachePath) && !flags.refresh) table = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    else if (!flags.offline) {
      const BATCH = 60;
      try {
        for (let b = 0; b < cand.length; b += BATCH) {
          const slice = cand.slice(b, b + BATCH);
          const idList = []; const back = new Map();
          for (const i of slice) {
            const s = stars[i];
            if (s.hip) { idList.push(`HIP ${s.hip}`); back.set(`HIP ${s.hip}`, i); }
            if (s.gaia) { idList.push(`Gaia DR3 ${s.gaia}`); back.set(`Gaia DR3 ${s.gaia}`, i); }
          }
          const q = `SELECT i1.id AS q, i2.id AS alt FROM ident AS i1 JOIN ident AS i2 USING(oidref) WHERE i1.id IN (${idList.map((x) => `'${x}'`).join(',')})`;
          const res = await fetch(cfg.sources.simbadTap, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ request: 'doQuery', lang: 'adql', format: 'csv', query: q }), signal: AbortSignal.timeout(120000) });
          if (!res.ok) throw new Error(`SIMBAD HTTP ${res.status}`);
          const rows = parseCSV(await res.text());
          for (const r of rows) { const i = back.get(r.q); if (i === undefined) continue; (table[i] ||= []).push(r.alt); }
          log(`    SIMBAD batch ${b / BATCH + 1}/${Math.ceil(cand.length / BATCH)}: ${rows.length} identifiers`);
        }
        fs.writeFileSync(cachePath, JSON.stringify(table));
      } catch (e) {
        warn(`SIMBAD lookup failed (${e.message}); nearby stars fall back to catalogue designations.`);
        reportMissing({ dataset: 'SIMBAD identifier lookup (optional)', url: cfg.sources.simbadTap, dest: cachePath, why: String(e.message), required: false,
          note: 'Optional: nearby stars will be labelled HIP/Gaia numbers instead of common names.' });
        stats.simbadStatus = 'MISSING';
      }
    }
    if (stats.simbadStatus !== 'MISSING') {
      stats.simbadStatus = 'ok';
      for (const [i, ids] of Object.entries(table)) {
        const s = stars[+i]; const pick = pickName(ids);
        if (pick) { s.alias = pick.name; s.aliasRank = pick.rank; }
        // keep the GJ number around as secondary label
        const gj = ids.map(tidy).find((x) => /^GJ \d+/.test(x)); if (gj) s.gj = gj;
        if (!s.name && pick) { s.name = pick.name; s.nameSrc = 'SIMBAD'; stats.simbad++; }
      }
      log(`  SIMBAD names applied: ${stats.simbad}`);
    }
  }

  // 3) overrides from config (with sanity check on distance)
  for (const o of nc.overrides || []) {
    const idx = o.hip ? byHip.get(o.hip) : byGaia.get(String(o.gaia));
    if (idx === undefined) { warn(`override ${o.hip ? 'HIP ' + o.hip : 'Gaia ' + o.gaia} (${o.name}) is not in the catalogue`); continue; }
    const s = stars[idx]; const dly = s.dist * A.LY_PER_PC;
    if (o.distLy && Math.abs(dly - o.distLy) / o.distLy > 0.15) warn(`override ${o.hip ? 'HIP ' + o.hip : 'Gaia ' + o.gaia} "${o.name}" is ${dly.toFixed(2)} ly away, expected ~${o.distLy} ly — check the HIP number!`);
    s.name = o.name; s.nameSrc = 'config'; if (o.system) s.systemName = o.system; stats.overrides++;
  }

  // designations + output entries
  const labelPc = nc.labelRadiusLy * A.PC_PER_LY;
  const entries = [];
  stars.forEach((s, i) => {
    s.desig = s.src === 'sun' ? 'Sol' : s.hip ? `HIP ${s.hip}` : `Gaia DR3 ${s.gaia}`;
    if (s.name || s.dist <= labelPc) {
      entries.push([i, s.name || null, s.desig, s.sp || null, s.systemName || null, s.gj || null, s.hip && s.gaia ? String(s.gaia) : (s.gaia ? null : null)]);
    }
  });
  log(`  ${entries.length} label entries written (${stars.filter((s) => s.name).length} named)`);
  return { entries, stats };
}
