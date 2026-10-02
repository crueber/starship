export const CSS = `
:root{--fg:#d4d4d4;--dim:#8a8a8a;--faint:#5a5a5a;--line:rgba(255,255,255,.16);--bg:rgba(8,8,8,.62)}
#ui{position:fixed;inset:0;pointer-events:none;font:11px/1.35 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--fg);user-select:none}
#ui *{box-sizing:border-box}
.panel{background:var(--bg);border:1px solid var(--line);backdrop-filter:blur(6px);pointer-events:auto}
.tl{position:absolute;left:14px;top:12px;max-width:46vw}
.tl .loc{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#eee}
.tl .sub{color:var(--dim);margin-top:2px}
.tr{position:absolute;right:14px;top:12px;display:flex;gap:6px;align-items:center}
.chip{padding:2px 7px;border:1px solid var(--line);color:var(--dim);letter-spacing:.1em;font-size:10px;background:var(--bg)}
.chip.on{color:#111;background:#ddd;border-color:#ddd}
.chip.warn{color:#ddd;border-color:#999}
.speed{position:absolute;left:14px;bottom:14px;min-width:230px;padding:8px 11px}
.speed .big{font-size:22px;letter-spacing:.04em;color:#f0f0f0}
.speed .row{display:flex;justify-content:space-between;gap:14px;color:var(--dim)}
.speed .row b{color:var(--fg);font-weight:400}
.bar{height:3px;background:rgba(255,255,255,.12);margin:5px 0 3px;position:relative}.bar i{position:absolute;left:0;top:0;bottom:0;background:#cfcfcf}
.course{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);padding:7px 12px;min-width:340px;text-align:center}
.course .t{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#eee}
.course .d{display:flex;justify-content:space-between;gap:16px;color:var(--dim);margin-top:3px}.course .d b{color:var(--fg);font-weight:400}
.ctl{position:absolute;right:14px;bottom:14px;padding:7px 9px;display:flex;flex-direction:column;gap:6px;align-items:flex-end}
.ctl .grp{display:flex;gap:3px;align-items:center}
.ctl button.dim{opacity:.35}
.ctl .drive{width:330px;display:flex;flex-direction:column;gap:3px;align-self:stretch}
.drive .dh{display:flex;justify-content:space-between;align-items:baseline}.drive .dh b{font-weight:400;letter-spacing:.1em;font-size:11px}
.drive .trk{position:relative;height:18px;cursor:pointer;touch-action:none}
.drive .seg{position:absolute;top:6px;height:6px;border-radius:3px}
.drive .seg.o{background:linear-gradient(90deg,#3a1d0a,#ff7a1f 55%,#ffd27a)}
.drive .seg.c{background:linear-gradient(90deg,#34343a,#9c9ca6 45%,#fbfbff)}
.drive .seg.w{background:linear-gradient(90deg,#14243f,#2f6fe0 45%,#8cc4ff)}
.drive .thumb{position:absolute;top:1px;width:13px;height:16px;margin-left:-7px;border:2px solid #fff;border-radius:4px;background:#050505;box-sizing:border-box;transition:left .12s}
.drive .act{position:absolute;top:2px;width:3px;height:14px;margin-left:-1px;border-radius:1px;opacity:.9}
.drive .lbls{position:relative;height:11px;font-size:8px;color:var(--faint);letter-spacing:.06em}.drive .lbls span{position:absolute;transform:translateX(-50%);white-space:nowrap}.drive .lbls span:first-child{transform:none}
.drive .legend{display:flex;justify-content:space-between;font-size:8px;letter-spacing:.1em}.drive .legend .o{color:#ff9a4a}.drive .legend .c{color:#e8e8f0}.drive .legend .w{color:#6aa8ff}
.ctl .lab2{letter-spacing:.1em;font-size:9px;min-width:58px}.ctl .spd{display:inline-flex;gap:3px;align-items:center}
.ctl .lab{color:var(--faint);letter-spacing:.12em;font-size:9px;margin-right:5px;text-transform:uppercase}
button,.btn{font:inherit;color:var(--fg);background:rgba(255,255,255,.04);border:1px solid var(--line);padding:2px 6px;cursor:pointer;letter-spacing:.04em;min-width:24px}
button:hover{background:rgba(255,255,255,.16)}button.on{background:#ddd;color:#111;border-color:#ddd}button:disabled{opacity:.35;cursor:default}
.nav{position:absolute;left:14px;top:96px;bottom:176px;width:300px;display:none;flex-direction:column}
.nav.open{display:flex}.nav h4,.set h4{margin:0;padding:8px 10px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;color:#eee}
.nav .list{overflow:auto;flex:1}.nav .sec{padding:6px 10px 2px;color:var(--faint);letter-spacing:.14em;font-size:9px;text-transform:uppercase}
.nav .item{display:flex;justify-content:space-between;gap:8px;padding:4px 10px;cursor:pointer;border-left:2px solid transparent}
.nav .srch{padding:6px 10px;border-bottom:1px solid var(--line)}.nav .srch input{width:100%;box-sizing:border-box;background:transparent;border:1px solid var(--line);color:#eee;font:inherit;padding:4px 7px;letter-spacing:.06em;outline:none}.nav .srch input:focus{border-color:#aaa}
.nav .item.dim{opacity:.55}
.nav .item:hover{background:rgba(255,255,255,.08)}.nav .item.sel{border-left-color:#ddd;background:rgba(255,255,255,.06)}
.nav .item .n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nav .item .m{color:var(--dim);white-space:nowrap}
.tag{font-size:9px;border:1px solid var(--line);padding:0 4px;margin-left:5px;color:var(--dim)}.tag.f{border-color:#aaa;color:#ddd}
.nav .foot{padding:8px 10px;border-top:1px solid var(--line);color:var(--dim);min-height:64px}.nav .foot b{color:#eee;font-weight:400}
.set{position:absolute;right:14px;top:50px;bottom:140px;width:300px;display:none;flex-direction:column}.set.open{display:flex}
.set .body{overflow:auto;padding:6px 10px 10px}.set label{display:flex;justify-content:space-between;gap:8px;align-items:center;margin-top:7px;color:var(--dim)}
.set label span:first-child{flex:1}.set input[type=range]{width:104px;accent-color:#ccc;height:3px}.set .v{width:42px;text-align:right;color:var(--fg)}
.set .sec{margin-top:10px;color:var(--faint);letter-spacing:.14em;font-size:9px;text-transform:uppercase}
.toast{position:absolute;left:50%;top:14px;transform:translateX(-50%);display:flex;flex-direction:column;gap:3px;align-items:center}
.toast div{padding:3px 10px;background:var(--bg);border:1px solid var(--line);color:#eee}
.well{position:absolute;left:50%;top:8px;transform:translateX(-50%);padding:3px 6px;pointer-events:none}.well canvas{display:block;width:420px;height:76px}
@media(max-width:1000px){.well{display:none!important}}
.banner{position:absolute;left:50%;top:84px;transform:translateX(-50%);padding:3px 12px;border:1px solid #aaa;letter-spacing:.14em;color:#ddd;background:var(--bg);display:none;text-transform:uppercase;font-size:10px}
.help{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:14px 18px;display:none;max-width:560px;line-height:1.7}.help.open{display:block}
.help h4{margin:0 0 6px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;color:#eee}.help kbd{border:1px solid var(--line);padding:0 5px;color:#eee;margin-right:4px}
.help .cols{display:grid;grid-template-columns:1fr 1fr;gap:2px 22px}
.lbl{position:absolute;pointer-events:none;color:#cfcfcf;font-size:10px;letter-spacing:.08em;white-space:nowrap;text-shadow:0 0 4px #000,0 0 2px #000}
.lbl i{display:block;width:5px;height:5px;border:1px solid #ccc;border-radius:50%;margin:0 0 1px -3px}
.lbl{pointer-events:auto;cursor:pointer}.lbl:hover{color:#fff}
.lbl.sel{color:#fff}
.mark{position:absolute;left:0;top:0;pointer-events:none;color:#e8e8e8;font-size:10px;letter-spacing:.1em;white-space:nowrap;text-shadow:0 0 4px #000,0 0 2px #000;display:none}
.mark .box{position:absolute;left:-15px;top:-15px;width:30px;height:30px;border:1px solid #fff;opacity:.9}
.mark .box:before,.mark .box:after{content:'';position:absolute;background:#000;}
.mark .box:before{left:7px;right:7px;top:-2px;height:5px}.mark .box:after{top:7px;bottom:7px;left:-2px;width:5px}
.mark .tx{position:absolute;left:22px;top:-6px}
.mark .arr{position:absolute;left:-8px;top:-8px;width:16px;height:16px;text-align:center;line-height:16px;font-size:14px}
.mark.home .tx{color:#bbb}
.selp{position:absolute;right:12px;top:62px;width:216px;padding:9px 11px;display:none}
.selp h5{margin:0 0 3px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:#fff;font-size:11px;display:flex;justify-content:space-between}
.selp h5 span{cursor:pointer;color:#999}.selp .m{color:#999;font-size:10px;line-height:1.5}
.selp .alt{display:flex;align-items:center;gap:6px;margin-top:7px;color:#999;font-size:10px}.selp .alt input[type=range]{flex:1;min-width:0;accent-color:#ddd}.selp .alt input[type=text]{width:78px;background:transparent;border:1px solid var(--line);color:#eee;font:inherit;font-size:10px;padding:2px 4px;outline:none}
.selp .b{display:flex;gap:6px;margin-top:7px}.selp button{flex:1}
.lbl .s{color:#999;display:block;font-size:9px}
.hint{position:absolute;left:50%;bottom:62px;transform:translateX(-50%);color:var(--faint);letter-spacing:.1em;font-size:10px}
.fps{position:absolute;right:14px;top:40px;color:var(--faint);font-size:9px}
@media(max-width:900px){.course{min-width:0;width:92vw;bottom:96px}.ctl{bottom:150px}.speed{bottom:14px}}
`;
