// "Visitors": other people flying right now, shown as ships. Strictly opt-in and peer to peer (WebRTC through the Trystero library). Nothing happens until join() is called.
// Matchmaking uses public Nostr relays only to introduce browsers to each other; positions then travel directly between browsers.
import { rollCallsign, sanitize, buildMessage, relativeKm } from './visitorsCore.js';

export class Visitors {
  constructor(sim, cfg) {
    this.sim = sim; this.cfg = cfg; this.C = cfg.visitors;
    this.state = 'off';            // 'off' | 'joining' | 'on' | 'error'
    this.error = '';
    this.callsign = rollCallsign();
    this.peers = new Map();        // peerId -> { m, t0, err:[km], errT, prevRel }
    this.view = [];                // visible visitors this frame, nearest first
    this.models = [];              // those close enough to draw as ships
    this._sendT = 0; this._prev = null; this._rerollAt = 0; this._room = null; this._ship = null; this._joinedAt = 0;
  }
  get count() { return this.peers.size; }
  get rerollWait() { return Math.max(0, (this._rerollAt - performance.now()) / 1000); }

  async join() {
    if (this.state === 'on' || this.state === 'joining') return;
    this.state = 'joining'; this.error = '';
    try {
      const mod = await import('trystero/nostr');
      this._mod = mod;
      const room = mod.joinRoom({ appId: this.C.appId, relayConfig: this.C.relays && this.C.relays.length ? { urls: this.C.relays } : { redundancy: 4 } }, this.C.room);
      const ship = room.makeAction('ship');
      this._room = room; this._ship = ship;
      ship.onMessage = (data, meta) => this._receive(data, meta && meta.peerId !== undefined ? meta.peerId : meta);
      room.onPeerJoin = (peerId) => { this._sendTo(peerId); };
      room.onPeerLeave = (peerId) => { this.peers.delete(peerId); };
      this.state = 'on'; this._joinedAt = performance.now(); this._prev = null; this._sendT = 0;
    } catch (e) {
      this.state = 'error'; this.error = 'Could not start peer-to-peer: ' + (e && e.message ? e.message : e);
    }
  }
  leave() {
    try { if (this._room) this._room.leave(); } catch (e) { /* already gone */ }
    this._room = null; this._ship = null; this.peers.clear(); this.view = []; this.models = []; this.state = 'off'; this.error = '';
  }
  /** a fresh random callsign, at most once every cfg.visitors.rerollSec */
  reroll() {
    const now = performance.now(); if (now < this._rerollAt) return false;
    this._rerollAt = now + this.C.rerollSec * 1000; this.callsign = rollCallsign(); this._sendT = 0; return true;
  }

  _sendTo(peerId) { if (!this._ship) return; try { this._ship.send(this._message(), { target: peerId }); } catch (e) { /* peer gone */ } }
  _message() { const now = performance.now(), m = buildMessage(this.sim, this.callsign, this._prev, now); this._prev = { t: now, sys: m.sys, ref: m.ref, pos: m.pos, abs: m.abs }; return m; }
  _receive(data, peerId) {
    if (this.peers.size >= this.C.maxPeers && !this.peers.has(peerId)) return;
    const m = sanitize(data); if (!m) return;
    const now = performance.now(), old = this.peers.get(peerId);
    // smoothing: the jump between where we had predicted the ship to be and where it says it is melts away over a fraction of a second
    let err = [0, 0, 0];
    if (old && m.sys && old.m.sys === m.sys && old.m.ref === m.ref && m.pos) {
      const dt = Math.min((now - old.t0) / 1000, this.C.maxExtrapolateSec), decay = Math.exp(-(now - old.errT) / 400);
      err = [0, 1, 2].map((i) => old.m.pos[i] + old.m.vel[i] * dt + old.err[i] * decay - m.pos[i]);
    }
    this.peers.set(peerId, { m, t0: now, err, errT: now });
  }

  /** call once per frame */
  update(dt) {
    if (this.state !== 'on') { this.view = []; this.models = []; return; }
    const sim = this.sim, now = performance.now();
    this._sendT -= dt;
    if (this._sendT <= 0 && this._ship) { this._sendT = 1 / this.C.sendHz; try { this._ship.send(this._message()); } catch (e) { /* ignore */ } }
    // no relay reachable after a few seconds: say so (the signalling relays are the only third parties involved)
    if (!this._relayChecked && now - this._joinedAt > 7000) {
      this._relayChecked = true;
      try { const socks = this._mod.getRelaySockets ? Object.values(this._mod.getRelaySockets()) : []; if (socks.length && !socks.some((s) => s && s.readyState === 1)) { this.state = 'error'; this.error = 'Could not reach the matchmaking relays (offline, or blocked by a firewall).'; return; } } catch (e) { /* unknown: carry on */ }
    }
    const sys = sim.system, ctx = { sysId: sys ? sys.id : '', mySysPos: sys ? sim.sysPos() : [0, 0, 0], myPc: sim.shipPc(), refPos: (id) => { const b = sys ? sys.get(id) : null; return b ? b.positionAt(sim.jd) : null; } };
    const out = [];
    for (const [id, p] of this.peers) {
      if (now - p.t0 > this.C.staleSec * 1000) { this.peers.delete(id); continue; }
      const dtp = Math.min((now - p.t0) / 1000, this.C.maxExtrapolateSec), decay = Math.exp(-(now - p.errT) / 400);
      const rel = relativeKm(p.m, dtp, ctx, p.err.map((x) => x * decay));
      out.push({ id, name: p.m.name, sysName: p.m.sysName || (p.m.sys ? '' : 'interstellar space'), sameSystem: !!p.m.sys && p.m.sys === ctx.sysId, relKm: rel, distKm: Math.hypot(rel[0], rel[1], rel[2]), eng: p.m.eng, quat: p.m.quat });
    }
    out.sort((a, b) => a.distKm - b.distKm);
    this.view = out;
    this.models = out.filter((v) => v.distKm * 1000 < this.C.modelRangeM).slice(0, this.C.maxModels);
  }
}
