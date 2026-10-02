(()=>{var pu=Object.defineProperty;var Gm=(i,e,t)=>e in i?pu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Gt=(i,e)=>()=>(i&&(e=i(i=0)),e);var Wm=(i,e)=>{for(var t in e)pu(i,t,{get:e[t],enumerable:!0})};var Wt=(i,e,t)=>Gm(i,typeof e!="symbol"?e+"":e,t);var Mh,Xi,Wr,up,dp,g_,Gn,ip,Cn,v_,y_,fp,pp,mp,sp,lr,wh,x_,qr,ke,Da,__,gp,rp,op,yh,xh,vp,ap,Vr,yp,ka,b_,xp,wi,Ki,ps,Gr,M_,ms,La,Si,w_,lp,S_,E_,T_,_p,_h,bh,Sh,Eh,bp,Mp,wp,A_,Sp,Ep,Tp,Ap,R_,C_,P_,Rp,Cp,Pp,Th,I_,cp,hp,L_,Ip=Gt(()=>{Mh=Object.freeze,Xi=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Wr=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,up=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,dp=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,g_=Mh({p:Xi,n:Wr,h:1n,a:0n,b:7n,Gx:up,Gy:dp}),Gn=32,ip=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,Cn=(i,e,t="")=>{if(ip(i)&&(e===void 0||i.length===e))return i;let n=ip(i),s=e!==void 0?` of length ${e}`:"",r=n?`length=${i.length}`:`type=${typeof i}`,o=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw n?new RangeError(o):new TypeError(o)},v_=i=>Uint8Array.from(i),y_=(i,e,t)=>v_(Cn(i,t,e)),fp=(i,e)=>i.toString(16).padStart(e,"0"),pp=i=>{let e="";for(let t of Cn(i))e+=fp(t,2);return e},mp=i=>{let e="hex invalid";if(typeof i!="string")throw new TypeError(e);if(i.length%2||!/^[\da-f]*$/i.test(i))throw new RangeError(e);let t=new Uint8Array(i.length/2);for(let n=0,s=0;n<t.length;n++,s+=2){let r=i.charCodeAt(s),o=i.charCodeAt(s+1);t[n]=((r&15)+(r>>6)*9)*16+(o&15)+(o>>6)*9}return t},sp=()=>{let i=globalThis?.crypto?.subtle;if(i)return i;throw new Error("crypto.subtle must be defined, consider polyfill")},lr=(...i)=>{let e=0;for(let s of i)e+=Cn(s).length;let t=new Uint8Array(e),n=0;for(let s of i)t.set(s,n),n+=s.length;return t},wh=(i=Gn)=>{let e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(i))},x_=BigInt,qr=(i,e,t,n="bad number: out of range")=>{if(typeof i!="bigint")throw new TypeError(n);if(e<=i&&i<t)return i;throw new RangeError(n)},ke=(i,e=Xi)=>(i%=e)>=0n?i:e+i,Da=i=>ke(i,Wr),__=(i,e)=>{if(i===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=ke(i,e),n=e,s=0n,r=1n;for(;t!==0n;){let a=n/t,l=n-t*a,c=s-r*a;n=t,t=l,s=r,r=c}if(n!==1n)throw new Error("invert: does not exist");return ke(s,e)},gp=i=>{let e=S_[i];if(typeof e!="function")throw new Error("hashes."+i+" not set");return e},rp=(i,e,t)=>Cn(gp(i)(e,t),Gn,"digest"),op=async(i,e,t)=>Cn(await gp(i)(e,t),Gn,"digest"),yh=i=>{if(i instanceof Ki)return i;throw new TypeError("Point expected")},xh="bad point: not on curve",vp=i=>ke(ke(i*i)*i+7n),ap=i=>qr(i,0n,Xi),Vr=i=>qr(i,1n,Xi),yp=i=>qr(i,1n,Wr),ka=i=>!(i&1n),b_=i=>Uint8Array.of(ka(i)?2:3),xp=i=>{let e=vp(Vr(i)),t=1n;for(let n=e,s=(Xi+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*n%Xi),n=n*n%Xi;if(ke(t*t)!==e)throw new Error("sqrt invalid");return new Ki(i,ka(t)?t:ke(-t),1n)},wi=class wi{constructor(e,t,n){Wt(this,"X");Wt(this,"Y");Wt(this,"Z");this.X=ap(e),this.Y=Vr(t),this.Z=ap(n),Mh(this)}static CURVE(){return g_}static fromAffine(e){let{x:t,y:n}=e;return t===0n&&n===0n?Gr:new wi(t,n,1n)}static fromBytes(e){Cn(e);let t=e.length,n=e[0],s=La(e,1,33);try{if(t===33&&(n===2||n===3)){let r=xp(s);return n===3?r.negate():r}if(t===65&&n===4)return new wi(s,La(e,33,65),1n).assertValidity()}catch{throw new Error(xh)}throw new Error(xh)}static fromHex(e){return wi.fromBytes(mp(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=yh(e);return ke(t*a)===ke(r*s)&&ke(n*a)===ke(o*s)}is0(){return this.Z===0n}negate(){return new wi(this.X,ke(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:n,Z:s}=this,{X:r,Y:o,Z:a}=yh(e),l=0n,c=7n,d=0n,h=0n,u=0n,f=ke(c*3n),p=ke(t*r),v=ke(n*o),m=ke(s*a),g=ke(t+n),y=ke(r+o);g=ke(g*y),y=ke(p+v),g=ke(g-y),y=ke(t+s);let _=ke(r+a);return y=ke(y*_),_=ke(p+m),y=ke(y-_),_=ke(n+s),d=ke(o+a),_=ke(_*d),d=ke(v+m),_=ke(_-d),u=ke(l*y),d=ke(f*m),u=ke(d+u),d=ke(v-u),u=ke(v+u),h=ke(d*u),v=ke(p+p),v=ke(v+p),m=ke(l*m),y=ke(f*y),v=ke(v+m),m=ke(p-m),m=ke(l*m),y=ke(y+m),p=ke(v*y),h=ke(h+p),p=ke(_*y),d=ke(g*d),d=ke(d-p),p=ke(g*v),u=ke(_*u),u=ke(u+p),new wi(d,h,u)}subtract(e){return this.add(yh(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Gr;if(yp(e),e===1n)return this;if(this.equals(ps))return L_(e).p;let n=Gr,s=ps,r=this;for(let o=0;t?o<256:e>0n;o++)e&1n?n=n.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:n}=this;if(n===0n)return{x:0n,y:0n};if(n===1n)return{x:e,y:t};let s=__(n,Xi);if(ke(n*s)!==1n)throw new Error("inverse invalid");return{x:ke(e*s),y:ke(t*s)}}assertValidity(){let{x:e,y:t}=this.toAffine();if(Vr(e),Vr(t),ke(t*t)!==vp(e))throw new Error(xh);return this}toBytes(e=!0){let{x:t,y:n}=this.assertValidity().toAffine(),s=Si(t);return e?lr(b_(n),s):lr(Uint8Array.of(4),s,Si(n))}toHex(e){return pp(this.toBytes(e))}};Wt(wi,"BASE"),Wt(wi,"ZERO");Ki=wi,ps=new Ki(up,dp,1n),Gr=new Ki(0n,1n,0n);Ki.BASE=ps;Ki.ZERO=Gr;M_=(i,e,t)=>ps.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),ms=i=>x_("0x"+(pp(i)||"0")),La=(i,e,t)=>ms(i.subarray(e,t)),Si=i=>mp(fp(qr(i,0n,2n**256n),Gn*2)),w_=i=>{let e=ms(Cn(i,Gn,"secret key"));return qr(e,1n,Wr,"invalid secret key: outside of range")},lp="SHA-256",S_={hmacSha256Async:async(i,e)=>{let t=sp(),n=await t.importKey("raw",i,{name:"HMAC",hash:lp},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",n,e))},hmacSha256:void 0,sha256Async:async i=>new Uint8Array(await sp().digest(lp,i)),sha256:void 0},E_=i=>{if(i=i===void 0?wh(48):i,Cn(i),i.length<48||i.length>1024)throw new RangeError("expected 48-1024b");let e=ke(ms(i),Wr-1n);return Si(e+1n)},T_=i=>e=>{let t=E_(e);return{secretKey:t,publicKey:i(t)}},_p=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),_h=(i,...e)=>{let t=rp("sha256",_p(i));return rp("sha256",lr(t,t,...e))},bh=(i,...e)=>op("sha256Async",_p(i)).then(t=>op("sha256Async",lr(t,t,...e))),Sh=i=>{let e=w_(i),t=ps.multiply(e),{x:n,y:s}=t.assertValidity().toAffine(),r=ka(s)?e:Da(-e),o=Si(n);return{d:r,px:o}},Eh=i=>Da(ms(i)),bp=(...i)=>Eh(_h("challenge",...i)),Mp=async(...i)=>Eh(await bh("challenge",...i)),wp=i=>Sh(i).px,A_=T_(wp),Sp=(i,e,t)=>{let n=y_(i,"message"),{px:s,d:r}=Sh(e);return{m:n,px:s,d:r,a:Cn(t,Gn)}},Ep=i=>{let e=Eh(i);if(e===0n)throw new Error("sign failed: k is zero");let{px:t,d:n}=Sh(Si(e));return{rx:t,k:n}},Tp=(i,e,t,n)=>lr(e,Si(Da(i+t*n))),Ap="invalid signature produced",R_=(i,e,t=wh(Gn))=>{let{m:n,px:s,d:r,a:o}=Sp(i,e,t),a=Si(r^ms(_h("aux",o))),{rx:l,k:c}=Ep(_h("nonce",a,s,n)),d=Tp(c,l,bp(l,s,n),r);if(!Cp(d,n,s))throw new Error(Ap);return d},C_=async(i,e,t=wh(Gn))=>{let{m:n,px:s,d:r,a:o}=Sp(i,e,t),a=Si(r^ms(await bh("aux",o))),{rx:l,k:c}=Ep(await bh("nonce",a,s,n)),d=Tp(c,l,await Mp(l,s,n),r);if(!await Pp(d,n,s))throw new Error(Ap);return d},P_=(i,e)=>i instanceof Promise?i.then(e):e(i),Rp=(i,e,t,n)=>{let s=Cn(i,64,"signature"),r=Cn(e,void 0,"message"),o=Cn(t,Gn,"publicKey"),a,l,c,d;try{let h=ms(o);a=xp(h),l=Vr(La(s,0,Gn)),c=yp(La(s,Gn,64)),d=lr(Si(l),o,r)}catch{return!1}return P_(n(d),h=>{try{let{x:u,y:f}=M_(a,c,Da(-h)).toAffine();return!(!ka(f)||u!==l)}catch{return!1}})},Cp=(i,e,t)=>Rp(i,e,t,bp),Pp=async(i,e,t)=>Rp(i,e,t,Mp),Th=Mh({keygen:A_,getPublicKey:wp,sign:R_,verify:Cp,signAsync:C_,verifyAsync:Pp}),I_=()=>{let i=[],e=ps,t=e;for(let n=0;n<33;n++){t=e,i.push(t);for(let s=1;s<128;s++)t=t.add(e),i.push(t);e=t.double()}return i},hp=(i,e)=>{let t=e.negate();return i?t:e},L_=i=>{let e=cp||(cp=I_()),t=Gr,n=ps;for(let s=0;s<33;s++){let r=Number(i&255n);i>>=8n,r>128&&(r-=256,i+=1n);let o=s*128,a=o+Math.abs(r)-1,l=s%2!==0,c=r<0;r===0?n=n.add(hp(l,e[o])):t=t.add(hp(c,e[a]))}if(i!==0n)throw new Error("invalid wnaf");return{p:t,f:n}}});var Ah,D_,k_,Ft,$i,U_,Pn,Vt,fn,Ch,Wn,Ph,nn,Ei,Pt,Ua,tt,nt,Ti,In,F_,N_,Ln,qn,Ai,gs,O_,Ih,Nt,Xn,Fa,Lp,Dp,Xr,Kr,Rh,Na,Oa,Lh,Dh,kp,pn=Gt(()=>{({floor:Ah,min:D_,sin:k_}=Math),Ft="Trystero",$i=(i,e)=>Array(i).fill(void 0).map(e),U_="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Pn=i=>$i(i,()=>U_[Ah(Math.random()*62)]??"").join(""),Vt=Pn(20),fn=Promise.all.bind(Promise),Ch=typeof window<"u",{entries:Wn,fromEntries:Ph,keys:nn,values:Ei}=Object,Pt=()=>{},Ua="candidate",tt=i=>(i!==null&&clearTimeout(i),null),nt=i=>new Error(`${Ft}: ${i}`),Ti=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:Nt(i??e),In=(i,e)=>i instanceof Error?i:nt(Ti(i,e)),F_=new TextEncoder,N_=new TextDecoder,Ln=i=>F_.encode(i),qn=i=>N_.decode(i),Ai=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),gs=(...i)=>i.join("@"),O_=(i,e)=>{let t=[...i],n=()=>{let r=k_(e++)*1e4;return r-Ah(r)},s=t.length;for(;s;){let r=Ah(n()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},Ih=(i,e,t,n=!1)=>i.relayConfig?.urls||(n?O_(e,Fa(i.appId)):e).slice(0,i.relayConfig?.redundancy??t),Nt=JSON.stringify,Xn=i=>{try{return JSON.parse(i)}catch{throw nt(`failed to parse JSON: ${i}`)}},Fa=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,Lp=3333,Dp=6e4,Xr={},Kr=null,Rh=null,Na=()=>{Kr||(Kr=new Promise(i=>{Rh=i}).finally(()=>{Rh=null,Kr=null}))},Oa=()=>{Rh?.()},Lh=(i,e,t)=>{let n={},s=!1,r=!1,o,a=Pt;n.isClosed=!1,n.ready=new Promise(c=>a=c);let l=()=>{if(n.isClosed)return;o=void 0,r=!1;let c=new WebSocket(i);c.onclose=()=>{if(n.isClosed||r)return;if(r=!0,Kr){Kr.then(l);return}let d=Xr[i]??(Xr[i]=Lp);if(d>=Dp){n.isClosed=!0;return}o=setTimeout(l,Math.random()*d),Xr[i]=D_(d*2,Dp)},c.onmessage=d=>e(String(d.data)),n.socket=c,n.url=c.url,c.onopen=()=>{let d=s;s=!0,a(n),Xr[i]=Lp,d&&t?.()},n.send=d=>{c.readyState===1&&c.send(d)}};return n.close=()=>{n.isClosed=!0,o!==void 0&&(clearTimeout(o),o=void 0),n.socket.close()},l(),n},Dh=i=>{let e={},t=new WeakMap,n=o=>{let a=t.get(o);if(!a)throw nt("relay bookkeeping missing registration for relay client");return a},s=()=>{let o={},a=l=>o[l]??(o[l]={});return{forKey:a,forRelay:l=>a(n(l))}},r=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{let l=e[o];return l||r(o,a())},keyOf:n,scoped:s,getSockets:()=>Ph(Wn(e).flatMap(([o,a])=>{let l=i(a);return l?[[o,l]]:[]}))}},kp=()=>{if(Ch){let i=new AbortController;return addEventListener("online",Oa,{signal:i.signal}),addEventListener("offline",Na,{signal:i.signal}),()=>i.abort()}return Pt}});var Uh,kh,B_,z_,vs,Yi,Up,Fp,Np,Op,Bp,zp,$r=Gt(()=>{pn();Uh="AES-GCM",kh={},B_=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),z_=i=>{let e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},vs=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,Ln(e))),Yi=async i=>kh[i]??(kh[i]=Array.from(await vs("SHA-1",i)).map(e=>e.toString(36)).join("")),Up=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Ln(`${i}:${e}:${t}`)),{name:Uh},!1,["encrypt","decrypt"]),Fp=async(i,e)=>Ai(await vs("SHA-256",`${Ft}:${i}:${e}`)),Np="$",Op=",",Bp=async(i,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(Op)+Np+B_(await crypto.subtle.encrypt({name:Uh,iv:t},await i,Ln(e)))},zp=async(i,e)=>{let[t,n]=e.split(Np);return qn(await crypto.subtle.decrypt({name:Uh,iv:new Uint8Array(t?.split(Op).map(Number)??[])},await i,z_(n??"")))}});var Yr,H_,V_,Hp,Fh=Gt(()=>{pn();Yr=57333,H_=18e4,V_=20,Hp=class{constructor(i){Wt(this,"makeOffer");Wt(this,"pool",[]);Wt(this,"pooled",new Set);Wt(this,"leased",new Map);Wt(this,"recycling",new Set);Wt(this,"cleanupTimer",null);Wt(this,"active",!1);this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),$i(V_,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},Yr)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){let e=[];for(;e.length<i&&this.pool.length>0;){let t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){let e=this.leased.get(i);e&&(tt(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:Pt,close:Pt,error:Pt}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){let e=this.leased.get(i);e&&(tt(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},H_))}checkout(i,e,t){let n=this.shift(i),s=Math.max(0,i-n.length);s>0&&n.push(...$i(s,this.makeOffer));let r=async(o,a=!1)=>{try{let l=await t(o);return e?(this.lease(o),{peer:o,offer:l,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:l}}catch(l){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return r(this.makeOffer(),!0);throw l}};return fn(n.map(o=>r(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{tt(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}}});var Nh,Vp,G_,Gp,Oh=Gt(()=>{pn();$r();Nh=nt("incorrect password for overlapping room"),Vp=(i,e,t)=>{let n=o=>vs("SHA-256",`${o}:${i}:${e}:${t}`).then(Ai),s=async(o,a,l)=>{if(!i)return;if(l){let d=Pn(36);await o({__trystero_pw:"challenge",c:d});let{data:h}=await a();if(!h||typeof h!="object"||h.__trystero_pw!=="response"||typeof h.h!="string")throw Nh;let u=await n(d);if(h.h!==u)throw Nh;return}let{data:c}=await a();if(!c||typeof c!="object"||c.__trystero_pw!=="challenge"||typeof c.c!="string")throw Nh;await o({__trystero_pw:"response",h:await n(c.c)})};return{run:s,compose:o=>i||o?async(a,l,c,d)=>{await s(l,c,d),await o?.(a,l,c,d)}:void 0}},G_=i=>{let e=Ti(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Gp=({onPeerHandshake:i,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:n,sendHandshakeReady:s,onActivate:r,onFailure:o})=>{let a={},l=(h,u)=>{let f=a[h];!f||u&&f.peer!==u||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=tt(f.handshakeTimer),r(h,f.peer))},c=(h,u,f)=>{let p=a[h];if(!p||p.peer!==u)return;let v=G_(f);e?.(h,v),o(h,u,nt(v))},d=(h,u)=>{let f=a[h];!f||f.peer!==u||f.isActive||(f.didLocalHandshakePass=!0,s("",h).catch(p=>c(h,u,nt(`failed sending handshake readiness: ${Ti(p,"unknown send failure")}`))),l(h,u))};return{addPeer:(h,u)=>{a[h]={peer:u,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(h,u)=>{let f=a[h];f&&(f.handshakeTimer=tt(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(p=>p.reject(u)),delete a[h])},canReceiveFromPeer:(h,u)=>{let f=a[h];return!!(f&&(f.isActive||u))},start:(h,u)=>{let f=a[h];if(!f||f.peer!==u)return;f.handshakeTimer=setTimeout(()=>c(h,u,nt(`handshake timed out after ${t}ms`)),t);let p=async(g,y)=>{await n(g,h,y)},v=()=>new Promise((g,y)=>{let _=a[h];if(!_||_.peer!==u){y(nt("peer disconnected during handshake"));return}let x=_.pendingHandshakePayloads.shift();if(x){g(x);return}_.handshakeWaiters.push({resolve:g,reject:M=>y(M)})}),m=Vt<h;Promise.resolve(i?.(h,p,v,m)).then(()=>d(h,u)).catch(g=>c(h,u,In(g,"handshake failed")))},receiveHandshakeData:(h,u,f)=>{let p=a[u];if(!p||p.isActive)return;let v=f===void 0?{data:h}:{data:h,metadata:f},m=p.handshakeWaiters.shift();if(m){m.resolve(v);return}p.pendingHandshakePayloads.push(v)},receiveHandshakeReady:h=>{let u=a[h];!u||u.isActive||(u.didReceiveRemoteReady=!0,l(h))}}}});var W_,q_,Wp,X_,Zr,K_,$_,qp,Bh,Y_,Xp=Gt(()=>{pn();W_=15e3,q_=5e3,Wp="icegatheringstatechange",X_="iceconnectionstatechange",Zr="offer",K_="answer",$_=/out of range/i,qp=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),Bh=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{let o=new(n??RTCPeerConnection)({iceServers:Y_.concat(s??[]),...t}),a={},l=[],c=[],d=e!==!1,h=[],u=[],f=!1,p=!1,v=null,m=null,g=!1,y=()=>m=tt(m),_=()=>{g||(g=!0,y(),a.close?.())},x=O=>{a.signal?a.signal(O):l.push(O)},M=O=>{let J=a.signal;a.signal=fe=>{J?.(fe),O(fe)},l.length>0&&l.splice(0).forEach(fe=>a.signal?.(fe))},E=O=>r?qp(O):O,A=O=>{if(!r||typeof O.candidate!="string")return O;let J=qp(O.candidate);return J===O.candidate?O:{...O,candidate:J}},R=O=>({type:O.localDescription?.type??Zr,sdp:E(O.localDescription?.sdp??"")}),w=()=>{let O=o.remoteDescription?.sdp;return O?O.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},b=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,L=O=>{if(!o.remoteDescription)return!1;let J=b();if(typeof O.sdpMLineIndex=="number"&&J>0&&O.sdpMLineIndex>=J)return!1;let fe=w();return!(fe&&O.usernameFragment&&O.usernameFragment!==fe)},B=async O=>{try{return await o.addIceCandidate(O),!0}catch(J){if(J instanceof Error&&$_.test(J.message)&&typeof O.sdpMLineIndex=="number")return!1;throw J}},F=async()=>{if(!o.remoteDescription||h.length===0)return;let O=h.splice(0),J=[];for(let fe of O){if(!L(fe)){J.push(fe);continue}await B(fe)||J.push(fe)}J.length>0&&h.push(...J)},S=async O=>{if(L(O)){await B(O)||h.push(O);return}h.push(O)},D=O=>{O.binaryType="arraybuffer",O.bufferedAmountLowThreshold=65535,O.onmessage=J=>{let fe=J.data;a.data?a.data(fe):c.push(fe)},O.onopen=()=>a.connect?.(),O.onclose=_,O.onerror=({error:J})=>a.error?.(In(J,"data channel error"))},P=async O=>{let J=null;try{await Promise.race([new Promise(fe=>{let X=()=>{O.iceGatheringState==="complete"&&(O.removeEventListener(Wp,X),fe())};O.addEventListener(Wp,X),X()}),new Promise(fe=>{J=setTimeout(fe,W_)})])}finally{tt(J)}return R(O)},N=async()=>{let O=d?R(o):await P(o);return x(O),O};i?(v=o.createDataChannel("data"),D(v)):o.ondatachannel=({channel:O})=>{v=O,D(O)};let k=async(O=!1)=>{if(o.connectionState!=="closed")try{return f=!0,O&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===Zr&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(O?await o.createOffer({iceRestart:!0}):void 0),await N()}catch(J){a.error?.(In(J,"failed to create local offer"))}finally{f=!1}};o.onnegotiationneeded=async()=>k(!1),o.onicecandidate=({candidate:O})=>{if(!d||!O)return;let J=A(typeof O.toJSON=="function"?O.toJSON():{candidate:O.candidate,sdpMid:O.sdpMid,sdpMLineIndex:O.sdpMLineIndex,usernameFragment:O.usernameFragment});x({type:Ua,sdp:JSON.stringify(J)})};let q=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){_();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){y();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&_()},q_));return}};o.onconnectionstatechange=q,o.addEventListener(X_,q),o.ontrack=O=>{let J=O.streams[0];if(J){if(!a.track&&!a.stream){u.push({track:O.track,stream:J});return}a.track?.(O.track,J),a.stream?.(J)}},o.onremovestream=O=>a.stream?.(O.stream);let Z=i?new Promise(O=>M(J=>{J.type===Zr&&O(J)})):Promise.resolve();return i&&queueMicrotask(()=>{!f&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:o,get channel(){return v},get isDead(){return o.connectionState==="closed"},getOffer:async(O=!1)=>{if(i)return O?k(!0):o.localDescription?.type===Zr?d?R(o):P(o):Z},async signal(O){if(O.type==="candidate"){try{let J=JSON.parse(O.sdp);J&&typeof J=="object"&&await S(A(J))}catch(J){a.error?.(In(J,"failed to parse remote candidate"))}return}if(!(v?.readyState==="open"&&!O.sdp?.includes("a=rtpmap")))try{let J={...O,sdp:E(O.sdp)};if(O.type===Zr){if(f||o.signalingState!=="stable"&&!p){if(i)return;await fn([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(J)])}else await o.setRemoteDescription(J);return await F(),await o.setLocalDescription(),await N()}if(O.type===K_){p=!0;try{await o.setRemoteDescription(J),await F()}finally{p=!1}}}catch(J){a.error?.(In(J,"failed to apply remote signal"))}},sendData:O=>v?.send(O),destroy:()=>{y(),v?.close(),o.close(),f=!1,p=!1,_()},setHandlers:O=>{let{signal:J,...fe}=O;Object.assign(a,fe),a.data&&c.length>0&&c.splice(0).forEach(X=>a.data?.(X)),J&&M(J),(a.track||a.stream)&&u.length>0&&u.splice(0).forEach(({track:X,stream:ne})=>{a.track?.(X,ne),a.stream?.(ne)})},offerPromise:Z,addStream:O=>O.getTracks().forEach(J=>o.addTrack(J,O)),removeStream:O=>o.getSenders().filter(J=>J.track&&O.getTracks().includes(J.track)).forEach(J=>o.removeTrack(J)),addTrack:(O,J)=>o.addTrack(O,J),removeTrack:O=>{let J=o.getSenders().find(fe=>fe.track===O);J&&o.removeTrack(J)},replaceTrack:(O,J)=>{let fe=o.getSenders().find(X=>X.track===O);if(fe)return fe.replaceTrack(J)}}},Y_=[...$i(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i}))});var Z_,zh,J_,Hh,Kp,Vh,Ba,ys,Jr,j_,$p,Yp,Zp,Q_,eb,tb,Jp,jp=Gt(()=>{pn();Z_=Object.getPrototypeOf(Uint8Array),zh=32,J_=0,Hh=32,Kp=34,Vh=35,Ba=36,ys=16*2**10-Ba,Jr=255,j_=65535,$p="bufferedamountlow",Yp="close",Zp="error",Q_=1e4,eb=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),tb=(i,e=Q_)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,s=null,r=l=>{n||(n=!0,i.removeEventListener($p,o),i.removeEventListener(Yp,a),i.removeEventListener(Zp,a),tt(s),t(l))},o=()=>r(!0),a=()=>r(!1);if(i.addEventListener($p,o),i.addEventListener(Yp,a),i.addEventListener(Zp,a),s=setTimeout(()=>r(!1),e),i.readyState!=="open"){r(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&r(!0)}),Jp=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:n})=>{let s={},r={},o={},a={},l=(h,u,{includePending:f=!1}={})=>(h?Array.isArray(h)?h:[h]:e(f)).flatMap(p=>{let v=i(p,f);return v?[Promise.resolve(u(p,v))]:(console.warn(`${Ft}: no peer with id ${p} found`),[])});return{makeInternalAction:(h,u={})=>{let f=r[h];if(s[h]&&f){let y=s[h].options;if(y.sendToPending!==!!u.sendToPending||y.receiveWhilePending!==!!u.receiveWhilePending)throw nt(`action type "${h}" cannot be redefined`);return f}if(!h)throw nt("action type argument is required");let p=Ln(h);if(p.byteLength>zh)throw nt(`action type string "${h}" (${p.byteLength}b) exceeds byte limit (${zh}). Hint: choose a shorter name.`);let v={sendToPending:!!u.sendToPending,receiveWhilePending:!!u.receiveWhilePending},m=new Uint8Array(zh);m.set(p);let g=0;return s[h]={onComplete:Pt,onProgress:Pt,setOnComplete:y=>{s[h].onComplete=y;let _=a[h];_?.length&&(delete a[h],_.forEach(({payload:x,peerId:M,metadata:E})=>y(x,M,E)))},setOnProgress:y=>{s[h].onProgress=y},send:async(y,_,x,M,E)=>{n(E);let A=typeof y;if(A==="undefined")throw nt("action data cannot be undefined");let R=A!=="string",w=y instanceof Blob,b=w||y instanceof ArrayBuffer||y instanceof Z_,L=x!==void 0,B=b?eb(w?await y.arrayBuffer():y):Ln(R?Nt(y):y),F=L?Ln(Nt(x)):null,S=Math.ceil(B.byteLength/ys)+(L?1:0)||1,D=$i(S,(P,N)=>{let k=N===S-1,q=!!(L&&N===0),Z=new Uint8Array(Ba+(q?F?.byteLength??0:k?B.byteLength-ys*(S-(L?2:1)):ys));return Z.set(m),Z.set([g>>8,g&Jr],Hh),Z.set([Number(k)|Number(q)<<1|Number(b)<<2|Number(R)<<3],Kp),Z.set([Math.round((N+1)/S*Jr)],Vh),Z.set(L?q?F??new Uint8Array:B.subarray((N-1)*ys,N*ys):B.subarray(N*ys,(N+1)*ys),Ba),Z});return g=g+1&j_,await fn(l(_,async(P,N)=>{let{channel:k}=N,q=0;for(;q<S;){n(E);let Z=D[q];if(!Z)break;if(k&&k.bufferedAmount>k.bufferedAmountLowThreshold){let fe=await tb(k);if(n(E),!fe)break}let O=i(P,v.sendToPending);if(!O||O!==N)break;N.sendData(Z),q++;let J=Z[Vh]??Jr;M?.(J/Jr,P,x)}},{includePending:v.sendToPending})),[]},options:v},r[h]={send:s[h].send,onMessage:s[h].setOnComplete,onProgress:s[h].setOnProgress}},handleData:(h,u)=>{var L,B;let f=new Uint8Array(u),p=qn(f.subarray(J_,Hh)).replaceAll("\0",""),v=s[p];if(!t(h,!!v?.options.receiveWhilePending))return;let m=(f[Hh]??0)<<8|(f[33]??0),g=f[Kp]??0,y=f[Vh]??0,_=f.subarray(Ba),x=!!(g&1),M=!!(g&2),E=!!(g&4),A=!!(g&8);o[h]??(o[h]={}),(L=o[h])[p]??(L[p]={});let R=(B=o[h][p])[m]??(B[m]={chunks:[]});if(M?R.meta=Xn(qn(_)):R.chunks.push(_),v?.onProgress(y/Jr,h,R.meta),!x)return;let w=new Uint8Array(R.chunks.reduce((F,S)=>F+S.byteLength,0));R.chunks.reduce((F,S)=>(w.set(S,F),F+S.byteLength),0),delete o[h][p][m];let b=E?w:A?Xn(qn(w)):qn(w);if(v){v.onComplete(b,h,R.meta);return}(a[p]??(a[p]=[])).push({payload:b,peerId:h,...R.meta===void 0?{}:{metadata:R.meta}})},clearPeer:h=>{delete o[h]}}}});var nb,cr,Gh,Qp,ib,za,em,tm=Gt(()=>{pn();jp();nb=500,cr=(i,e)=>{let t=nt(e);return t.kind=i,t.name=i==="aborted"?"AbortError":t.name,t},Gh=i=>{if(i?.aborted)throw cr("aborted","operation aborted")},Qp=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...Object.hasOwn(i,"m")?{m:i.m}:{}}:null,ib=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...typeof i.e=="string"?{e:i.e}:{}}:null,za=(i,e)=>e===void 0?i:{...i,metadata:e},em=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t})=>{let n={},s={},r=Jp({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Gh}),o=r.makeInternalAction,a=r.handleData,l=f=>{let p=s[f];p&&(tt(p.timer),p.signal&&p.abortHandler&&p.signal.removeEventListener("abort",p.abortHandler),delete s[f])},c=(f,p)=>{Wn(s).forEach(([v,m])=>{m.peerId===f&&(l(v),m.reject(p))})},d=(f,p)=>{r.clearPeer(f),c(f,cr("disconnected",Ti(p,"peer disconnected")))},h=o("@_response");return h.onMessage((f,p,v)=>{let m=ib(v);if(!m)return;let g=s[m.r];if(!(!g||g.peerId!==p)){if(l(m.r),m.e!==void 0){g.reject(cr("rejected",m.e));return}g.resolve(f)}}),{makeAction:(f,p)=>{if(p&&"onRequest"in p&&p.kind!=="request")throw nt('request actions must use kind: "request"');let v=p?.kind??"message",m=o(f),g=n[f];if(g){if(g.kind!==v)throw nt(`action type "${f}" cannot be redefined`);return g.action}let y={kind:v,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:p?.onReceiveProgress??null},_=(S,D)=>S?(P,N)=>S(P,za({peerId:N},D)):void 0,x=S=>{y.onReceiveProgress=S},M=(S,D,P)=>{let N=y.kind==="request"?Qp(P):null;y.onReceiveProgress?.(S,za({peerId:D},N?N.m:P))};if(m.onProgress(M),v==="message"){let S=p?.onMessage??null,D=()=>{if(!S)return;let N=S;y.pendingMessages.splice(0).forEach(({payload:k,peerId:q,metadata:Z})=>{Promise.resolve().then(()=>N(k,za({peerId:q},Z))).catch(O=>console.error(`${Ft} action handler error:`,O))})},P={send:async(N,k={})=>{await m.send(N,k.target,k.metadata,_(k.onProgress,k.metadata),k.signal)},get onMessage(){return S},set onMessage(N){S=N,D()},get onReceiveProgress(){return y.onReceiveProgress},set onReceiveProgress(N){x(N)}};return m.onMessage((N,k,q)=>{if(!S){y.pendingMessages.push(q===void 0?{payload:N,peerId:k}:{payload:N,peerId:k,metadata:q});return}let Z=S;Promise.resolve().then(()=>Z(N,za({peerId:k},q))).catch(O=>console.error(`${Ft} action handler error:`,O))}),y.action=P,n[f]=y,D(),P}let E=p?.onRequest??null,A=S=>{tt(S.timer);let D=y.pendingRequests.indexOf(S);D>-1&&y.pendingRequests.splice(D,1)},R=(S,D,P)=>{h.send(null,S,{r:D,e:Ti(P,"request failed")})},w=(S,D)=>{A(S),Promise.resolve().then(()=>D(S.payload,{peerId:S.peerId,...S.metadata===void 0?{}:{metadata:S.metadata},signal:S.controller.signal})).then(async P=>{if(P===void 0)throw nt("request handler returned undefined");await h.send(P,S.peerId,{r:S.requestId})}).catch(P=>R(S.peerId,S.requestId,P)).finally(()=>S.controller.abort())},b=()=>{E&&y.pendingRequests.slice().forEach(S=>w(S,E))},L=(S,D,P,N)=>{if(E){let q={payload:S,peerId:D,...P===void 0?{}:{metadata:P},requestId:N,controller:new AbortController,timer:null};w(q,E);return}let k={payload:S,peerId:D,...P===void 0?{}:{metadata:P},requestId:N,controller:new AbortController,timer:setTimeout(()=>{A(k),k.controller.abort(),R(D,N,"request handler unavailable")},nb)};y.pendingRequests.push(k)},B=async(S,D)=>{let{target:P,metadata:N,onProgress:k,signal:q,timeoutMs:Z}=D;if(Gh(q),!i(P,!1))throw cr("disconnected",`no active peer with id ${P}`);let O=Pn(20),J=new Promise((fe,X)=>{let ne={peerId:P,resolve:fe,reject:X,timer:null,...q===void 0?{}:{signal:q}},ge=()=>{l(O),X(cr("aborted","operation aborted"))};q&&(ne.abortHandler=ge,q.addEventListener("abort",ge,{once:!0})),s[O]=ne}).catch(fe=>{throw fe});try{await m.send(S,P,N===void 0?{r:O}:{r:O,m:N},_(k,N),q);let fe=s[O];return fe&&Z!==void 0&&(fe.timer=setTimeout(()=>{l(O),fe.reject(cr("timeout","request timed out"))},Z)),await J}catch(fe){throw l(O),fe}},F={request:B,requestMany:async(S,D)=>(Gh(D.signal),await fn(D.targets.map(async P=>{try{let N={peerId:P,status:"fulfilled",value:await B(S,{target:P,...D.metadata===void 0?{}:{metadata:D.metadata},...D.timeoutMs===void 0?{}:{timeoutMs:D.timeoutMs},...D.onProgress===void 0?{}:{onProgress:D.onProgress},...D.signal===void 0?{}:{signal:D.signal}})};return D.onResult?.(N),N}catch(N){let k=In(N,"request failed");if(k.kind==="aborted"||!k.kind)throw k;let q=k.kind==="timeout"?{peerId:P,status:"timeout"}:k.kind==="disconnected"?{peerId:P,status:"disconnected"}:{peerId:P,status:"rejected",error:k};return D.onResult?.(q),q}}))),get onRequest(){return E},set onRequest(S){E=S,b()},get onReceiveProgress(){return y.onReceiveProgress},set onReceiveProgress(S){x(S)}};return m.onMessage((S,D,P)=>{let N=Qp(P);N&&L(S,D,N.m,N.r)}),y.action=F,n[f]=y,b(),F},makeInternalAction:o,handleData:a,clearPeer:d}}});var nm,im,Wh,sm,qh=Gt(()=>{pn();nm=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.k=="string"?{key:i.k,...typeof i.s=="string"?{streamId:i.s}:{},...typeof i.t=="string"?{trackId:i.t}:{},...Object.hasOwn(i,"m")?{metadata:i.m}:{}}:null,im=i=>e=>{let t=i.get(e);return t||(t=Pn(20),i.set(e,t)),t},Wh=()=>{let i=new WeakMap,e=new WeakMap,t=new Map,n=new Map,s=new Map,r=new Map;return{getStreamKey:im(i),getTrackKey:im(e),rememberRemoteStream:(o,a,l)=>{t.set(o,a),l&&n.set(l,a)},getRemoteStream:(o,a)=>t.get(o)??(a?n.get(a):void 0),rememberRemoteTrack:(o,a,l,c,d)=>{let h={track:a,stream:l};s.set(o,h),c&&r.set(c,h),d&&n.set(d,l)},getRemoteTrack:(o,a)=>s.get(o)??(a?r.get(a):void 0),clearRemote:()=>{t.clear(),n.clear(),s.clear(),r.clear()}}},sm=({iterate:i,isActive:e,getSharedMediaPeer:t})=>{let n={},s={},r=Wh(),o={onPeerStream:null,onPeerTrack:null},a=(d,h,u,f)=>{e(d)&&(t(d)?.__trysteroMedia?.rememberRemoteStream(h,u,typeof u.id=="string"?u.id:void 0),o.onPeerStream?.(u,d,f))},l=(d,h,u,f,p)=>{e(d)&&(t(d)?.__trysteroMedia?.rememberRemoteTrack(h,u,f,typeof u.id=="string"?u.id:void 0,typeof f.id=="string"?f.id:void 0),o.onPeerTrack?.(u,f,d,p))},c=(d,h,u,f,p,v={})=>{let m={k:h,...v,...u===void 0?{}:{m:u}};return i(d,async(g,y)=>{await f(m,g),p(y)})};return{addStream:(d,h,u)=>c(h.target,r.getStreamKey(d),h.metadata,u,f=>f.addStream(d),{s:d.id}),removeStream:(d,h)=>{i(h,(u,f)=>f.removeStream(d))},addTrack:(d,h,u,f)=>c(u.target,r.getTrackKey(d),u.metadata,f,p=>p.addTrack(d,h),{s:h.id,t:d.id}),removeTrack:(d,h)=>{i(h,(u,f)=>f.removeTrack(d))},replaceTrack:(d,h,u,f)=>c(u.target,r.getTrackKey(h),u.metadata,f,p=>p.replaceTrack(d,h),{t:d.id}),receiveStreamMeta:(d,h)=>{if(!e(h))return;let u=nm(d);if(!u)return;let f=t(h)?.__trysteroMedia?.getRemoteStream(u.key,u.streamId);if(f){a(h,u.key,f,u.metadata);return}(n[h]??(n[h]=[])).push(u)},receiveTrackMeta:(d,h)=>{if(!e(h))return;let u=nm(d);if(!u)return;let f=t(h)?.__trysteroMedia?.getRemoteTrack(u.key,u.trackId);if(f){l(h,u.key,f.track,f.stream,u.metadata);return}(s[h]??(s[h]=[])).push(u)},receiveRemoteStream:(d,h)=>{if(!e(d))return;let u=n[d]?.shift();u&&a(d,u.key,h,u.metadata)},receiveRemoteTrack:(d,h,u)=>{if(!e(d))return;let f=s[d]?.shift();f&&l(d,f.key,h,u,f.metadata)},clearPeer:d=>{delete n[d],delete s[d]},get onPeerStream(){return o.onPeerStream},set onPeerStream(d){o.onPeerStream=d},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(d){o.onPeerTrack=d}}}});var rm,sb,Zi,jr,om,rb,am,lm=Gt(()=>{pn();Oh();tm();qh();rm="beforeunload",sb=1e4,Zi=i=>"@_"+i,jr=new Set,om=()=>jr.forEach(i=>i()),rb=i=>(jr.add(i),jr.size===1&&addEventListener(rm,om),()=>{jr.delete(i),jr.size||removeEventListener(rm,om)}),am=(i,e,t,{onPeerHandshake:n,onHandshakeError:s,handshakeTimeoutMs:r=sb,isPassive:o=!1}={})=>{let a={},l={},c={},d={onPeerJoin:null,onPeerLeave:null},h=Pt,u=null,f=(S,D,{includePending:P=!1}={})=>(S?Array.isArray(S)?S:[S]:nn(P?a:l)).flatMap(N=>{let k=P?a[N]:l[N];return k?[Promise.resolve(D(N,k))]:(console.warn(`${Ft}: no peer with id ${N} found`),[])}),p=sm({iterate:(S,D)=>f(S,(P,N)=>D(P,N)),isActive:S=>!!l[S],getSharedMediaPeer:S=>a[S]??null}),v=em({getPeer:(S,D)=>(D?a:l)[S],getPeerIds:S=>nn(S?a:l),canReceiveFromPeer:(S,D)=>!!u?.canReceiveFromPeer(S,D)}),m=v.makeInternalAction,g=v.handleData,y=v.makeAction,_=(S,D=nt("peer disconnected"))=>{let P=In(D,"peer disconnected");u?.clearPeer(S,P),delete a[S],delete l[S],v.clearPeer(S,P),c[S]?.splice(0).forEach(N=>N.reject(P)),delete c[S],p.clearPeer(S)},x=(S,D,P)=>{let N=a[S];if(!N||D&&N!==D)return;let k=!!l[S];_(S,P),N.destroy(),k&&d.onPeerLeave?.(S),e(S)},M=async()=>{await L.send(""),await new Promise(S=>setTimeout(S,99)),Wn(a).forEach(([S,D])=>{D.destroy(),_(S,nt("room left"))}),h(),t()},E=m(Zi("ping")),A=m(Zi("pong")),R=m(Zi("signal")),w=m(Zi("stream")),b=m(Zi("track")),L=m(Zi("leave"),{sendToPending:!0,receiveWhilePending:!0}),B=m(Zi("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),F=m(Zi("hsready"),{sendToPending:!0,receiveWhilePending:!0});return u=Gp({...n===void 0?{}:{onPeerHandshake:n},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:B.send,sendHandshakeReady:F.send,onActivate:(S,D)=>{l[S]=D,d.onPeerJoin?.(S)},onFailure:(S,D,P)=>x(S,D,P)}),E.onMessage((S,D)=>A.send("",D)),A.onMessage((S,D)=>{let P=c[D];P?.shift()?.resolve(),P&&!P.length&&delete c[D]}),R.onMessage((S,D)=>{l[D]&&a[D]?.signal(S)}),w.onMessage((S,D)=>p.receiveStreamMeta(S,D)),b.onMessage((S,D)=>p.receiveTrackMeta(S,D)),L.onMessage((S,D)=>x(D,void 0,nt("peer left room"))),B.onMessage((S,D,P)=>u?.receiveHandshakeData(S,D,P)),F.onMessage((S,D)=>u?.receiveHandshakeReady(D)),i((S,D)=>{let P=a[D];if(P){if(P===S)return;P.destroy(),_(D,nt("peer replaced"))}a[D]=S,u?.addPeer(D,S),S.setHandlers({data:N=>g(D,N),stream:N=>p.receiveRemoteStream(D,N),track:(N,k)=>p.receiveRemoteTrack(D,N,k),signal:N=>{l[D]&&R.send(N,D)},close:()=>x(D,S,nt("peer disconnected")),error:N=>{console.error(`${Ft} peer error:`,N),x(D,S,N)}}),u?.start(D,S)}),Ch&&(h=rb(()=>M().catch(Pt))),{makeAction:y,leave:M,ping:async S=>{if(!l[S])throw nt(`no active peer with id ${S}`);let D=Date.now();return await new Promise((P,N)=>{let k=c[S]??(c[S]=[]),q=()=>{let O=c[S];if(!O)return;let J=O.indexOf(Z);J>-1&&O.splice(J,1),O.length||delete c[S]},Z={resolve:()=>{q(),P()},reject:O=>{q(),N(O)}};k.push(Z),E.send("",S).catch(O=>Z.reject(In(O,"peer disconnected")))}),Date.now()-D},isPassive:()=>o,getPeers:()=>Ph(Wn(l).map(([S,D])=>[S,D.connection])),addStream:(S,D={})=>p.addStream(S,D,w.send),removeStream:(S,D={})=>{p.removeStream(S,D.target)},addTrack:(S,D,P={})=>p.addTrack(S,D,P,b.send),removeTrack:(S,D={})=>{p.removeTrack(S,D.target)},replaceTrack:(S,D,P={})=>p.replaceTrack(S,D,P,b.send),get onPeerJoin(){return d.onPeerJoin},set onPeerJoin(S){d.onPeerJoin=S,S&&nn(l).forEach(D=>S(D))},get onPeerLeave(){return d.onPeerLeave},set onPeerLeave(S){d.onPeerLeave=S},get onPeerStream(){return p.onPeerStream},set onPeerStream(S){p.onPeerStream=S},get onPeerTrack(){return p.onPeerTrack},set onPeerTrack(S){p.onPeerTrack=S}}}});var hm,um,cm,ob,ab,dm,fm,pm,Xh=Gt(()=>{pn();qh();hm=1,um=2,cm=(i,e)=>{let t=Ln(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=hm,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},ob=(i,e)=>{let t=Ln(i),n=new Uint8Array(4+t.byteLength);return n[0]=um,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},ab=i=>{let e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===hm){let s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:qn(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==um||e.byteLength<4)return null;let t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:qn(e.subarray(4,n)),isPresent:e[1]===1}},dm=i=>{let{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},fm=i=>{if(dm(i))return"stale";let{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"},pm=class{constructor(){Wt(this,"byApp",{});Wt(this,"roomPresenceHandlers",{})}getMap(i){var e;return(e=this.byApp)[i]??(e[i]={})}get(i,e){return this.byApp[i]?.[e]}isPeerStale(i){return dm(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(ob(e,t))}clear(i,e,{destroyPeer:t}){let n=this.byApp[i],s=n?.[e];if(!s||s.isClosing)return;s.idleTimer=tt(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();let r=Ei(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete n[e],r.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),nn(n).length===0&&delete this.byApp[i]}register(i,e,t,n){let s=this.getMap(i),r=s[e];if(r){if(r.idleTimer=tt(r.idleTimer),r.peer===t)return r;this.clear(i,e,{destroyPeer:!0})}let o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Wh(),idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${Ft} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,l)=>this.dispatchTrack(o,a,l)}),s[e]=o,o}bind(i,e,t,{onDetach:n}){let s=t.bindings[i];if(s)return t.idleTimer=tt(t.idleTimer),{proxy:s.proxy,isNew:!1};let r={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Pt,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===i&&(t.controlRoomId=nn(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:l=>t.peer.getOffer(l),signal:l=>t.peer.signal(l),sendData:l=>{if(!r.roomToken){r.pendingSendData.push(l);return}t.peer.sendData(cm(r.roomToken,l))},destroy:()=>o(),setHandlers:l=>{let{signal:c,...d}=l;Object.assign(r.handlers,d),c&&(r.handlers.signal=c),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:l=>{let c=t.streamOwners.get(l)??new Set,d=c.size===0;c.add(i),t.streamOwners.set(l,c),d&&t.peer.addStream(l)},removeStream:l=>{let c=t.streamOwners.get(l);c&&(c.delete(i),c.size===0&&(t.streamOwners.delete(l),t.peer.removeStream(l)))},addTrack:(l,c)=>{let d=t.trackOwners.get(l)??{stream:c,rooms:new Set},h=d.rooms.size===0;return d.stream=c,d.rooms.add(i),t.trackOwners.set(l,d),h?t.peer.addTrack(l,c):t.peer.connection.getSenders().find(u=>u.track===l)??t.peer.addTrack(l,c)},removeTrack:l=>{let c=t.trackOwners.get(l);c&&(c.rooms.delete(i),c.rooms.size===0&&(t.trackOwners.delete(l),t.peer.removeTrack(l)))},replaceTrack:(l,c)=>{let d=t.trackOwners.get(l);if(d){t.trackOwners.delete(l);let h=t.trackOwners.get(c)??{stream:d.stream,rooms:new Set};d.rooms.forEach(u=>h.rooms.add(u)),t.trackOwners.set(c,h)}return t.peer.replaceTrack(l,c)},__trysteroMedia:t.media};return r.proxy=a,r.detach=o,t.bindings[i]=r,t.controlRoomId??(t.controlRoomId=i),t.idleTimer=tt(t.idleTimer),e.then(l=>{if(t.isClosing||t.bindings[i]!==r)return;r.roomToken=l,t.bindingsByToken[l]=r;let c=t.pendingDataByToken.get(l);c?.length&&(r.pendingData.push(...c),t.pendingDataByToken.delete(l)),r.pendingSendData.splice(0).forEach(d=>t.peer.sendData(cm(l,d))),this.flushBindingQueues(r)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||nn(i.bindings).length>0||(i.idleTimer=tt(i.idleTimer),i.idleTimer=setTimeout(()=>{let e=this.byApp[i.appId]?.[i.peerId];!e||nn(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){let t=i.bindings[i.controlRoomId];if(t?.handlers.signal)return t}let e=Ei(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){let{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{e.track?.(t,n),e.stream?.(n)})}dispatchData(i,e){let t=ab(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[i.appId]?.(i.peerId,t.roomToken,t.isPresent);return}let n=i.bindingsByToken[t.roomToken];if(!n){let s=i.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),i.pendingDataByToken.set(t.roomToken,s);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){this.getSignalBinding(i)?.handlers.signal?.(e)}dispatchTrack(i,e,t){Ei(i.bindings).forEach(n=>{if(n.handlers.track||n.handlers.stream){n.handlers.track?.(e,t),n.handlers.stream?.(t);return}n.pendingTracks.push({track:e,stream:t})})}}});var lb,cb,hb,ub,Kh,Va,db,fb,Qr,pb,gm,mb,gb,vb,Wa,hr,En,Ha,Ga,$h,mm,yb,ur,xb,_b,vm,bb,Mb,wb,Sb,Eb,Tb,ym,xm=Gt(()=>{pn();$r();Fh();Xh();lb=23333,cb=12,hb=7533,ub=23333,Kh="__legacy__",Va="offer-placeholder",db=["offer","answer","candidate"],fb=i=>{if(typeof i=="string")try{let e=Xn(i);return e&&typeof e=="object"?e:null}catch{return null}return i&&typeof i=="object"?i:null},Qr=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,pb=i=>db.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),gm=(i,e,t,n,s,r)=>{i.toCipher(e).then(o=>{i.isLeaving()||!r()||n(t,Nt(s(o.sdp)))})},mb=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),gb=i=>[...i.turnConfig??[],...i.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),vb=(i,e)=>`could not connect to peer ${i} after exchanging SDP; ${gb(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Wa=(i,e,t)=>{i.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,i.onJoinError?.({error:vb(t,i.config),appId:i.appId,peerId:t,roomId:i.roomId}))},hr=(i,e)=>i[e]??(i[e]=mb()),En=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},Ha=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=tt(i.answeringExpiryTimer),i.answeringPeer=null,i.answerSent=!1,En(i))},Ga=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,En(i))},$h=(i,e)=>{i.offerRelayTimers[e]=tt(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,En(i))},mm=(i,e)=>{i?.offerRelays[e]===Va&&$h(i,e)},yb=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},ur=(i,e)=>{let t=i.offerAnswered;i.offerExpiryTimer=tt(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,s)=>$h(i,s)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||yb(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,i.connectionErrorReported=!1,En(i)},xb=(i,e,t,n)=>{tt(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let s=i.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==n||(s.answerSent&&Wa(i,s,t),n.destroy(),Ha(s,n),i.checkDeactivate())},ub)},_b=async(i,e,t)=>{let n=t?[t,Kh]:[Kh];for(let s of n){let r=i.pendingCandidates[s];if(r?.length){delete i.pendingCandidates[s];for(let o of r)await e.signal(o)}}},vm=(i,e,t,n=Yr)=>{tt(e.offerExpiryTimer);let s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let r=i.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&Wa(i,r,t),ur(r,i.offerPool),i.checkDeactivate())},n)},bb=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{let s=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!s)throw nt("failed to allocate offer peer");let{peer:r,offer:o}=s;e.offerPeer=r,e.offerId=Pn(cb),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],En(e);let a=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&Wa(i,e,t),ur(e,i.offerPool)),i.disconnectPeer(r,t),i.checkDeactivate()};return r.setHandlers({connect:()=>i.connectPeer(r,t,n),signal:l=>{e.offerPeer===r&&(e.offerSignalBacklog.push(l),e.offerSignalRelays.forEach(c=>c?.(l)))},close:a,error:a}),vm(i,e,t),{peer:r,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),Mb=async(i,e,t,n,s)=>{if(n){i.attachSharedPeerToRoom(t,n);return}let r=i.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){mm(r,e);return}if(r.offerRelays[e]!==Va)return;let[o,a]=await fn([Yi(gs(i.rootTopicPlaintext,t)),bb(i,r,t,e)]);if(i.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Va){mm(r,e);return}r.offerRelayTimers[e]=tt(r.offerRelayTimers[e]),r.offerRelays[e]=!0,En(r),r.offerRelayTimers[e]=setTimeout(()=>Tb(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let l=!1;r.offerSignalRelays[e]=c=>{l&&(i.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||c.type!=="candidate"||gm(i,c,o,s,d=>({peerId:Vt,offerId:a.offerId,candidate:d,...i.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},s(o,Nt({peerId:Vt,offerId:a.offerId,offer:a.offer,...i.isPassive?{passive:!0}:{}})),l=!0,r.offerSignalBacklog.forEach(c=>r.offerSignalRelays[e]?.(c))},wb=async(i,e,t,n,s,r,o)=>{let a=hr(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;let l=!!(a.offerPeer||a.offerRelays.some(Boolean));if((l||r)&&Vt<t)return;l&&ur(a,i.offerPool);let c=i.initPeer(!1,i.config);a.answeringPeer=c,a.answerSent=!1,a.connectionErrorReported=!1,xb(i,a,t,c),En(a);let d=()=>{a.answeringPeer===c&&!a.connectedPeer&&a.answerSent&&Wa(i,a,t),Ha(a,c),i.disconnectPeer(c,t),i.checkDeactivate()};c.setHandlers({connect:()=>i.connectPeer(c,t,e),close:d,error:d});let h;try{h=await i.toPlain({type:"offer",sdp:n})}catch{Ha(a,c),i.onJoinError?.({error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(c.isDead){Ha(a,c);return}let u=await Yi(gs(i.rootTopicPlaintext,t));i.isLeaving()||(c.setHandlers({signal:f=>{i.isLeaving()||a.answeringPeer!==c||c.isDead||f.type!=="answer"&&f.type!=="candidate"||gm(i,f,u,o,p=>{let v={peerId:Vt};return f.type==="answer"?(a.answerSent=!0,v.answer=p):v.candidate=p,s&&(v.offerId=s),i.isPassive&&(v.passive=!0),v},()=>a.answeringPeer===c&&!c.isDead)}}),await c.signal(h),await _b(a,c,s))},Sb=async(i,e,t,n,s)=>{var h;let r;try{r=await i.toPlain({type:Ua,sdp:t})}catch{return}let o=hr(i.peerStates,e),a=n&&o?.offerPeer&&o.offerId===n?o.offerPeer:null,l=o?.answeringPeer??null,c=!n&&o?.offerPeer?o.offerPeer:null,d=s&&!s.isDead?s:a??l??c;if(!d||d.isDead){let u=n??Kh;((h=o.pendingCandidates)[u]??(h[u]=[])).push(r);return}d.signal(r)},Eb=async(i,e,t,n,s,r)=>{let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{i.onJoinError?.({error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(r)i.offerPool.claimLeased(r),r.setHandlers({connect:()=>i.connectPeer(r,t,e),close:()=>i.disconnectPeer(r,t)}),r.signal(o);else{let a=i.peerStates[t];if(!a||!a.offerPeer||a.offerAnswered||s&&a.offerId&&s!==a.offerId||a.offerPeer.isDead)return;a.offerAnswered=!0,vm(i,a,t,lb),a.offerPeer.signal(o)}},Tb=(i,e,t)=>{let n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&($h(n,t),i.checkDeactivate())},ym=i=>e=>async(t,n,s)=>{if(i.isLeaving())return;let r=fb(n);if(!r||pb(r))return;let o=Qr(r,"peerId")??"",a=Qr(r,"offer"),l=Qr(r,"answer"),c=Qr(r,"candidate"),d=Qr(r,"offerId"),h=r.peer,u=r.hasOutgoingOffer===!0,f=r.passive===!0;if(!o||o===Vt)return;let[p,v]=await fn([i.rootTopicP,i.selfTopicP]);if(i.isLeaving()||t!==p&&t!==v||i.isPassive&&f||(i.isPassive&&!i.isActive&&!l&&!c&&(i.isActive=!0,i.requeueAnnounce?.()),i.isPassive&&!i.isActive))return;let m=i.peerStates[o],g=m?.connectedPeer;if(g&&m){let x=fm(g);if(x==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(x==="stale")Ga(m,o,"message-from-stale-peer");else{let M=Date.now(),E=m.connectedPeerUnhealthySinceMs??M;if(m.connectedPeerUnhealthySinceMs=E,M-E<hb)return;Ga(m,o,"message-from-prolonged-disconnect")}}let y=i.sharedPeers.get(i.appId,o);y&&i.sharedPeers.getHealth(y.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),y=void 0);let _=!!(o&&!a&&!l&&!c);if(_&&!y){let x=hr(i.peerStates,o),M=Vt<o;if(x.answeringPeer||x.connectedPeer||x.offerAnswered)return;if(!M&&!x.offerPeer){let E=await Yi(gs(i.rootTopicPlaintext,o));!i.isLeaving()&&!x.connectedPeer&&s(E,Nt({peerId:Vt}));return}if(x.offerRelays[e])return;x.offerRelays[e]=Va,En(x)}if(y&&(a||l||c)){if(y.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,y);return}if(_)return Mb(i,e,o,y,s);if(a)return wb(i,e,o,a,d,u,s);if(c)return Sb(i,o,c,d,h);if(l)return Eb(i,e,o,l,d,h)}});var qa,Ab,Rb,Cb,Yh,Zh=Gt(()=>{pn();$r();Fh();Oh();Xp();lm();Xh();xm();qa=5333,Ab=[233,533,1333],Rb=7533,Cb=123333,Yh=({init:i,subscribe:e,announce:t,deactivate:n})=>{let s={},r={},o={},a={},l=new pm,c=()=>Ei(s).some(M=>nn(M).length>0),d=M=>r[M]??(r[M]={}),h=M=>o[M]??(o[M]={}),u=(M,E,A)=>{l.getHealth(M.peer)==="live"&&l.sendRoomPresence(M,E,A)},f=(M,E)=>{Wn(r[M]??{}).forEach(([A,R])=>{if(!R.shouldAdvertise())return;let{roomToken:w,roomTokenPromise:b}=R;if(w){u(E,w,!0);return}b.then(L=>{r[M]?.[A]===R&&R.roomToken===L&&(l.get(M,E.peerId)!==E||E.isClosing||R.shouldAdvertise()&&u(E,L,!0))})})},p=(M,E,A)=>Ei(l.getMap(M)).forEach(R=>u(R,E,A)),v=M=>{a[M]||(a[M]=l.setRoomPresenceHandler(M,(E,A,R)=>{if(!R)return;let w=l.get(M,E),b=o[M]?.[A];!w||!b||r[M]?.[b]?.attachSharedPeerToRoom(E,w)}))},m=M=>{s[M]&&nn(s[M]).length>0||(a[M]?.(),delete a[M],delete r[M],delete o[M])},g=!1,y=[],_=null,x=Pt;return(M,E,A)=>{if(!M)throw nt("requires a config map as the first argument");if(A&&typeof A!="object")throw nt("third argument must be a callbacks object");let{appId:R}=M,w=A?.onJoinError,b=A?.onPeerHandshake,L=A?.handshakeTimeoutMs;if(!R)throw nt("config map is missing appId field");if(!E)throw nt("roomId argument required");if(L!==void 0&&(!Number.isFinite(L)||L<=0))throw nt("handshakeTimeoutMs must be a positive number");if(s[R]?.[E])return s[R][E];v(R);let B=gs(Ft,R,E),F=Yi(B),S=Yi(gs(B,Vt)),D=Up(M.password??"",R,E),P=Fp(R,E),N=M._test_only_sharedPeerIdleMs??Cb,k=!1,q=ie=>async pe=>({type:pe.type,sdp:await ie(D,pe.sdp)}),Z=q(zp),O=q(Bp),J=l.getMap(R),fe=()=>Bh(!0,M),X=!1;_||(_=new Hp(fe));let ne=_,ge=async ie=>{let pe=await ie.getOffer(Date.now()-ie.created>Yr);if(!pe||pe.type!=="offer")throw nt("failed to get offer for peer");return(await O(pe)).sdp},ee=(ie,pe)=>{let Y=hr(ze.peerStates,ie);Y.answeringExpiryTimer=tt(Y.answeringExpiryTimer),Y.answeringPeer=null;let{proxy:ce,isNew:he}=l.bind(E,P,pe,{onDetach:()=>{let Ae=ze.peerStates[ie];Ae?.connectedPeer===pe.peer&&(Ae.connectedPeer=null,Ae.connectedPeerUnhealthySinceMs=null,En(Ae))}});Y.connectedPeer=pe.peer,Y.connectedPeerUnhealthySinceMs=null,En(Y),he&&H(ce,ie),ur(Y,ne)},re=(ie,pe,Y)=>{if(k){ie.destroy();return}let ce=hr(ze.peerStates,pe);if(ce.connectedPeer){let me=J[pe];if(me&&ce.connectedPeer===me.peer&&me.bindings[E])return;ce.connectedPeer!==ie&&!ie.isDead&&ie.destroy();return}let he=J[pe];if(he&&l.getHealth(he.peer)==="stale"&&(l.clear(R,pe,{destroyPeer:!0}),he=void 0),he&&he.peer!==ie){ie.isDead||ie.destroy(),ee(pe,he);return}let Ae=!he;he||(he=l.register(R,pe,ie,N)),ee(pe,he),Ae&&f(R,he)},ve=(ie,pe)=>{if(k)return;let Y=ze.peerStates[pe];Y?.connectedPeer===ie&&(Ga(Y,pe,"close-event"),z(),!ae&&X&&ze.requeueAnnounce?.())},ae=!!M.passive,Se=null,Pe,Ve=Pt,z=()=>{if(!ae||!ze.isActive)return;let ie=!1;Wn(ze.peerStates).forEach(([pe,Y])=>{Y.connectedPeer||Y.answeringPeer||Y.offerInitPromise||Y.offerPeer||Y.offerRelays.some(Boolean)?ie=!0:Y.status==="idle"&&delete ze.peerStates[pe]}),ie||(ze.isActive=!1,Pe=tt(Pe),I.forEach(tt),I.length=0,Ve(),Se?.roomToken&&p(R,Se.roomToken,!1))},ze={appId:R,roomId:E,config:M,peerStates:{},rootTopicPlaintext:B,rootTopicP:F,selfTopicP:S,toPlain:Z,toCipher:O,isLeaving:()=>k,isPassive:ae,isActive:!ae,onJoinError:w,sharedPeers:l,offerPool:ne,encryptOffer:ge,initPeer:Bh,connectPeer:re,disconnectPeer:ve,attachSharedPeerToRoom:ee,checkDeactivate:z,announceIntervals:[],announceIntervalMs:qa},Oe={config:M,appId:R,roomId:E,isPassive:ae},We=ym(ze);if(!g){let ie=i(M);y=(Array.isArray(ie)?ie:[ie]).map(pe=>Promise.resolve(pe)),g=!0,x=M.relayConfig?.manualReconnection?Pt:kp()}!ae&&!ne.isActive&&ne.warmup(),ze.announceIntervals=y.map(()=>qa);let Ee=y.map(()=>qa),je=y.map(()=>0),Te=y.map(()=>0),I=[],T=y.map(async(ie,pe)=>e(await ie,await F,await S,We(pe),Y=>ne.getOffers(Y,ge),Oe));fn([F,S]).then(([ie,pe])=>{if(k)return;let Y=async(ce,he)=>{if(k||ae&&!ze.isActive)return;let Ae=ae?{passive:!0}:void 0,me;try{me=await t(ce,ie,pe,Ae,Oe),Te[he]=0}catch(V){let xe=Te[he]??0;xe===0&&M.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${Ft}: announce failed - ${Ti(V,"")}`),Te[he]=xe+1}if(k||ae&&!ze.isActive||me&&typeof me!="number"&&"stopAnnouncing"in me)return;typeof me=="number"?(ze.announceIntervals[he]=me,Ee[he]=me):me&&(Ee[he]=me.nextAnnounceMs,X||(X=me.reannounceOnDisconnect===!0));let Qe=je[he]??0;je[he]=Qe+1;let qe=Ee[he]??qa,ut=Ab[Qe];I[he]=setTimeout(()=>{Y(ce,he)},typeof ut=="number"?Math.min(qe,ut):qe)};Ve=()=>{n&&y.forEach(async ce=>{let he=await ce;k||n(he,ie,pe,Oe)})},ze.requeueAnnounce=()=>{I.forEach(tt),I.length=0,Pe=tt(Pe),ne.isActive||ne.warmup(),Se?.roomToken&&p(R,Se.roomToken,!0),Pe=setTimeout(z,Rb),y.forEach(async(ce,he)=>{let Ae=await ce;Ae&&!k&&(je[he]=0,Y(Ae,he))})},T.forEach(async(ce,he)=>{if(await ce,k)return;let Ae=await y[he];Ae&&!k&&(!ae||ze.isActive)&&Y(Ae,he)})});let H=Pt,{compose:j}=Vp(M.password??"",R,E),se=j(b),te={...se?{onPeerHandshake:se}:{},...L===void 0?{}:{handshakeTimeoutMs:L},isPassive:ae,onHandshakeError:(ie,pe)=>w?.({error:pe.replace(/^handshake failed: /,""),appId:R,peerId:ie,roomId:E})};s[R]??(s[R]={});let Re=d(R),ye=am(ie=>H=ie,ie=>{if(k)return;let pe=ze.peerStates[ie];pe?.connectedPeer&&(pe.connectedPeer=null,En(pe),z())},()=>{k=!0,H=Pt;let ie=r[R]?.[E];ie?.roomToken&&(p(R,ie.roomToken,!1),delete o[R]?.[ie.roomToken],o[R]&&!nn(o[R]).length&&delete o[R]),r[R]&&(delete r[R][E],nn(r[R]).length||delete r[R]),Wn(ze.peerStates).forEach(([pe,Y])=>{if(Y.answeringExpiryTimer=tt(Y.answeringExpiryTimer),Y.connectedPeer&&!Y.connectedPeer.isDead){let ce=J[pe];(!ce||ce.peer!==Y.connectedPeer)&&Y.connectedPeer.destroy()}Y.answeringPeer&&!Y.answeringPeer.isDead&&Y.answeringPeer.destroy(),ur(Y,ne),Y.connectedPeer=null,Y.answeringPeer=null,En(Y)}),s[R]&&(delete s[R][E],nn(s[R]).length===0&&delete s[R]),I.forEach(tt),Pe=tt(Pe),T.forEach(async pe=>{(await pe)()}),!c()&&(g=!1,ne.destroy(),_=null,x(),m(R))},te);return Se={roomToken:null,roomTokenPromise:P,attachSharedPeerToRoom:ee,shouldAdvertise:()=>!ae||ze.isActive},Re[E]=Se,P.then(ie=>{let pe=Se;!pe||k||r[R]?.[E]!==pe||(pe.roomToken=ie,h(R)[ie]=E,Ei(J).forEach(Y=>{Y.remoteRoomTokens.has(ie)&&ee(Y.peerId,Y)}),(!ae||ze.isActive)&&p(R,ie,!0))}),s[R][E]=ye}}});var Pb,Ib,Lb,Jh,Db,kb,jh,_m,Qh,eu,bm=Gt(()=>{pn();Zh();Pb=["offer","answer","candidate"],Ib=6e4,Lb=i=>{if(typeof i=="string")try{let e=Xn(i);return e&&typeof e=="object"?e:null}catch{return null}return i},Jh=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,Db=i=>Pb.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),kb=i=>{let e=Lb(i);if(!e||Db(e))return!1;let t=Jh(e,"peerId");return!!(t&&t!==Vt&&e.passive!==!0&&!Jh(e,"answer")&&!Jh(e,"candidate"))},jh=i=>{if(!i)throw nt("topic strategy missing room context");return i},_m=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),Qh=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),eu=({steadyAnnounceIntervalMs:i=Ib,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:n,publishTopic:s,unpublishTopic:r})=>Yh({init:t,subscribe:async(o,a,l,c,d,h)=>{let u=jh(h),f=(M,E)=>void s(o,M,E,Qh(u,"signal",a,l)),p=null,v=!1,m=null,g=!1,y=M=>{v||(v=!0,M())},_=()=>(m||(m=Promise.resolve(n(o,l,(M,E)=>{g||c(M,E,f)},_m(u,"self",a,l))).then(M=>{p=M,g&&y(M)})),m);u.isPassive||await _();let x=await n(o,a,async(M,E)=>{g||(u.isPassive&&kb(E)&&await _(),g||await c(M,E,f))},_m(u,"root",a,l));return()=>{g=!0,p&&y(p),x()}},announce:async(o,a,l,c,d)=>{let h=jh(d),u=await s(o,a,Nt({peerId:Vt,...c}),Qh(h,"announce",a,l));return typeof u=="number"||u!==void 0&&"stopAnnouncing"in u?u:{nextAnnounceMs:u?.nextAnnounceMs??i,reannounceOnDisconnect:u?.reannounceOnDisconnect??e}},...r?{deactivate:(o,a,l,c)=>{let d=jh(c);return r(o,a,Qh(d,"announce",a,l))}}:{}})});var Mm=Gt(()=>{pn();$r();Zh();bm()});var Em,Ub,Tm,Am,Fb,Nb,Ob,Rm,Bb,tu,wm,Xa,zb,Hb,eo,iu,xs,Sm,Vb,nu,Gb,Wb,qb,Xb,su,ru,Cm,Kb,Ri,Pm,$b,Yb,Im,Zb,Lm,Jb,jb,Qb,Dm,km=Gt(()=>{Ip();Mm();Em=Dh(i=>i.socket),Ub=5,Tm="x",Am="EVENT",{secretKey:Fb,publicKey:Nb}=Th.keygen(),Ob=Ai(Nb),Rm={},Bb={},tu={},wm=250,Xa=6e4,zb=15*6e4,Hb=5333,eo=new WeakMap,iu=new WeakSet,xs=new WeakMap,Sm=i=>{let e=eo.get(i),t=Math.min(e?.delayMs?Math.max(Xa,e.delayMs*2):Xa,zb);return eo.set(i,{delayMs:t,untilMs:Date.now()+t}),t},Vb=i=>{let e=eo.get(i);if(!e)return 0;let t=e.untilMs-Date.now();return t>0?t:0},nu=i=>({nextAnnounceMs:i}),Gb={stopAnnouncing:!0},Wb=i=>{if(iu.has(i))return!1;let e=xs.get(i);return e&&(clearTimeout(e.timer),xs.delete(i)),iu.add(i),eo.delete(i),i.close?.(),!0},qb=(i,e)=>{let t=xs.get(i);t&&(clearTimeout(t.timer),t.eventIds.add(e));let n=t?.eventIds??new Set([e]),s=setTimeout(()=>{xs.delete(i)},Hb);xs.set(i,{eventIds:n,timer:s})},Xb=(i,e)=>{let t=xs.get(i);return t?.eventIds.has(e)?(clearTimeout(t.timer),xs.delete(i),!0):!1},su=()=>Math.floor(Date.now()/1e3),ru=i=>tu[i]??(tu[i]=Fa(i,1e4)+2e4),Cm=async(i,e)=>{let t={kind:ru(i),tags:[[Tm,i]],created_at:su(),content:e,pubkey:Ob},n=await vs("SHA-256",Nt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Nt([Am,{...t,id:Ai(n),sig:Ai(await Th.signAsync(n,Fb))}])},Kb=(i,e)=>(Rm[i]=e,Nt(["REQ",i,{kinds:[ru(e)],since:su(),"#x":[e]}])),Ri={},Pm=i=>{i.flushWaiters.forEach(e=>e()),i.flushWaiters.clear()},$b=(i,e,t)=>{var s;let n=Ri[s=i.url]??(Ri[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});n.topics.set(e,t),Im(i,n)},Yb=(i,e)=>{let t=Ri[i.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Pm(t),t.subIds.forEach(n=>i.send(Nt(["CLOSE",n]))),delete Ri[i.url]):Im(i,t))},Im=(i,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{Lm(i)}finally{Pm(e)}},0))},Zb=i=>{let e=Ri[i.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},Lm=i=>{let e=Ri[i.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],n=[],s=su();for(let r=0;r<t.length;r+=wm)n.push(t.slice(r,r+wm));for(;e.subIds.length>n.length;){let r=e.subIds.pop();r&&i.send(Nt(["CLOSE",r]))}n.forEach((r,o)=>{var l;let a=(l=e.subIds)[o]??(l[o]=Pn(64));i.send(Nt(["REQ",a,{kinds:[...new Set(r.map(ru))],since:s,"#x":r}]))})},Jb=i=>{let e=Ri[i.url];e&&e.topics.size>0&&Lm(i)},jb=eu({init:i=>Ih(i,Dm,Ub,!0).map(e=>{let t=Em.register(e,()=>Lh(e,n=>{let[s,r,o,a]=Xn(n);if(s!==Am){let l=`${Ft}: relay failure from ${t.url} - `,c=s==="CLOSED"&&typeof o=="string"?o:a,d=s==="OK"&&o===!1,h=d&&c?.startsWith("rate-limited:"),u=d&&c?.startsWith("duplicate:"),f=s==="CLOSED"||d&&!h&&!u,p=s==="OK"&&Xb(t,r);if(f&&!Wb(t))return;h?Sm(t):p&&eo.delete(t),!u&&i.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(l+r):(d||s==="CLOSED")&&console.warn(l+c));return}if(o&&typeof o=="object"&&"content"in o){let{content:l}=o,c=Bb[r];if(c){c(Rm[r]??"",l);return}let d=Ri[t.url];if(d?.subIds.includes(r)&&o.tags){let h=o.tags.find(u=>u[0]===Tm);h?.[1]&&d.topics.get(h[1])?.(h[1],l)}}},()=>Jb(t)));return t.ready}),subscribeTopic:(i,e,t,n)=>{$b(i,e,(o,a)=>void t(o,a));let r=()=>{Yb(i,e)};return n.kind==="root"?Zb(i).then(()=>r):r},publishTopic:async(i,e,t,n)=>{if(iu.has(i)||i.isClosed)return n.kind==="announce"?Gb:void 0;if(n.kind==="announce"){let a=Vb(i);if(a>0)return nu(Math.max(Xa,a))}let s=await Cm(e,typeof t=="string"?t:Nt(t)),r=i.socket.readyState===1;if(i.send(s),n.kind!=="announce")return;if(!r)return nu(Sm(i));let o=Xn(s)[1].id;return qb(i,o),nu(Xa)}}),Qb=Em.getSockets,Dm=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(i=>"wss://"+i)});var Um={};Wm(Um,{createEvent:()=>Cm,defaultRelayUrls:()=>Dm,getRelaySockets:()=>Qb,joinRoom:()=>jb,pauseRelayReconnection:()=>Na,resumeRelayReconnection:()=>Oa,selfId:()=>Vt,subscribe:()=>Kb});var Fm=Gt(()=>{km()});var qm=0,mu=1,Xm=2;var bd=1,Wc=2,di=3,xn=0,zt=1,Ct=2,Oi=0,zs=1,On=2,gu=3,vu=4,Mn=5,It=100,Km=101,$m=102,Ym=103,Zm=104,Jm=200,kt=201,jm=202,Qm=203,Er=204,Ws=205,e0=206,t0=207,n0=208,i0=209,s0=210,r0=211,o0=212,a0=213,l0=214,Rl=0,Cl=1,Pl=2,qs=3,Il=4,Ll=5,Dl=6,kl=7,Md=0,c0=1,h0=2,jn=0,u0=1,d0=2,f0=3,p0=4,m0=5,g0=6,v0=7;var wd=300,Xs=301,Ks=302,Ul=303,Fl=304,la=306,Bn=1e3,Rn=1001,Nl=1002,yn=1003,y0=1004;var io=1005;var Xt=1006,Ya=1007;var mi=1008;var xi=1009,Sd=1010,Ed=1011,Tr=1012,qc=1013,os=1014,gi=1015,ii=1016,Xc=1017,Kc=1018,$s=1020,Td=35902,Ad=1021,Rd=1022,Bt=1023,Cd=1024,Pd=1025,Hs=1026,Ys=1027,Id=1028,$c=1029,Ld=1030,Yc=1031;var Zc=1033,Do=33776,ko=33777,Uo=33778,Fo=33779,Ol=35840,Bl=35841,zl=35842,Hl=35843,Vl=36196,Gl=37492,Wl=37496,ql=37808,Xl=37809,Kl=37810,$l=37811,Yl=37812,Zl=37813,Jl=37814,jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,sc=37821,No=36492,rc=36494,oc=36495,Dd=36283,ac=36284,lc=36285,cc=36286;var Oo=2300,hc=2301,Za=2302,yu=2400,xu=2401,_u=2402;var x0=3200,_0=3201;var kd=0,b0=1,Yn="",jt="srgb",_i="srgb-linear",ca="linear",pt="srgb";var bs=7680;var bu=519,M0=512,w0=513,S0=514,Ud=515,E0=516,T0=517,A0=518,R0=519,uc=35044,Jc=35048;var Mu="300 es",vi=2e3,Bo=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ja=Math.PI/180,dc=180/Math.PI;function Bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function C0(i,e){return(i%e+e)%e}function ja(i,e,t){return(1-t)*i+t*e}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],y=s[1],_=s[4],x=s[7],M=s[2],E=s[5],A=s[8];return r[0]=o*v+a*y+l*M,r[3]=o*m+a*_+l*E,r[6]=o*g+a*x+l*A,r[1]=c*v+d*y+h*M,r[4]=c*m+d*_+h*E,r[7]=c*g+d*x+h*A,r[2]=u*v+f*y+p*M,r[5]=u*m+f*_+p*E,r[8]=u*g+f*x+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,f=c*r-o*l,p=t*h+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=h*v,e[1]=(s*c-d*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new Be;function Fd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function P0(){let i=zo("canvas");return i.style.display="block",i}var wu={};function Mr(i){i in wu||(wu[i]=!0,console.warn(i))}function I0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function L0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function D0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ot={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Su=[.64,.33,.3,.6,.15,.06],Eu=[.2126,.7152,.0722],Tu=[.3127,.329],Au=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[_i]:{primaries:Su,whitePoint:Tu,transfer:ca,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:Eu,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:Su,whitePoint:Tu,transfer:pt,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:Eu,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}});var Ms,fc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=zo("canvas")),Ms.width=e.width,Ms.height=e.height;let n=Ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},k0=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(el(s[o].image)):r.push(el(s[o]))}else r=el(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var U0=0,en=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Xt,o=mi,a=Bt,l=xi,c=i.DEFAULT_ANISOTROPY,d=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Bi(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=wd;en.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,x=(f+1)/2,M=(g+1)/2,E=(d+u)/4,A=(h+v)/4,R=(p+m)/4;return _>x&&_>M?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=A/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=R/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=R/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-v)/y,this.z=(u-d)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vo=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Et=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(h!==v||l!==u||c!==f||d!==p){let m=1-a,g=l*u+c*f+d*p+h*v,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let M=Math.sqrt(_),E=Math.atan2(M,g*y);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}let x=a*y;if(l=l*m+u*x,c=c*m+f*x,d=d*m+p*x,h=h*m+v*x,m===1-a){let M=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=M,c*=M,d*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+d*h+l*f-c*u,e[t+1]=l*p+d*u+c*h-a*f,e[t+2]=c*p+d*f+a*u-l*h,e[t+3]=d*p-a*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),h=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"YXZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"ZXY":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"ZYX":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"YZX":this._x=u*d*h+c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h-u*f*p;break;case"XZY":this._x=u*d*h-c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new U,Cu=new Et,as=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),ro.subVectors(this.max,pr),ws.subVectors(e.a,pr),Ss.subVectors(e.b,pr),Es.subVectors(e.c,pr),Ii.subVectors(Ss,ws),Li.subVectors(Es,Ss),ji.subVectors(ws,Es);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-ji.z,ji.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,ji.z,0,-ji.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-ji.y,ji.x,0];return!nl(t,ws,Ss,Es,ro)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,ws,Ss,Es,ro))?!1:(oo.crossVectors(Ii,Li),t=[oo.x,oo.y,oo.z],nl(t,ws,Ss,Es,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ai=[new U,new U,new U,new U,new U,new U,new U,new U],Un=new U,so=new as,ws=new U,Ss=new U,Es=new U,Ii=new U,Li=new U,ji=new U,pr=new U,ro=new U,oo=new U,Qi=new U;function nl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),d=n.dot(Qi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var F0=new as,mr=new U,il=new U,ls=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):F0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(il)),this.expandByPoint(mr.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new U,sl=new U,ao=new U,Di=new U,rl=new U,lo=new U,ol=new U,Ar=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sl.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(sl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=Di.dot(this.direction),l=-Di.dot(ao),c=Di.lengthSq(),d=Math.abs(1-o*o),h,u,f,p;if(d>0)if(h=o*l-a,u=o*a-l,p=r*d,h>=0)if(u>=-p)if(u<=p){let v=1/d;h*=v,u*=v,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-p?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=p?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(sl).addScaledVector(ao,u),f}intersectSphere(e,t){li.subVectors(e.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,s,r){rl.subVectors(t,e),lo.subVectors(n,e),ol.crossVectors(rl,lo);let o=this.direction.dot(ol),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let l=a*this.direction.dot(lo.crossVectors(Di,lo));if(l<0)return null;let c=a*this.direction.dot(rl.cross(Di));if(c<0||l+c>o)return null;let d=-a*Di.dot(ol);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class i{constructor(e,t,n,s,r,o,a,l,c,d,h,u,f,p,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,h,u,f,p,v,m)}set(e,t,n,s,r,o,a,l,c,d,h,u,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=d,g[10]=h,g[14]=u,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=o*d,f=o*h,p=a*d,v=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*d,f=l*h,p=c*d,v=c*h;t[0]=u+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=f*a-p,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*d,f=l*h,p=c*d,v=c*h;t[0]=u-v*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*d,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*d,f=o*h,p=a*d,v=a*h;t[0]=l*d,t[4]=p*c-f,t[8]=u*c+v,t[1]=l*h,t[5]=v*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*d,t[4]=v-u*h,t[8]=p*h+f,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*h+p,t[10]=u-v*h}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+v,t[5]=o*d,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,O0)}lookAt(e,t,n){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ki.crossVectors(n,gn),ki.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ki.crossVectors(n,gn)),ki.normalize(),co.crossVectors(gn,ki),s[0]=ki.x,s[4]=co.x,s[8]=gn.x,s[1]=ki.y,s[5]=co.y,s[9]=gn.y,s[2]=ki.z,s[6]=co.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],y=n[3],_=n[7],x=n[11],M=n[15],E=s[0],A=s[4],R=s[8],w=s[12],b=s[1],L=s[5],B=s[9],F=s[13],S=s[2],D=s[6],P=s[10],N=s[14],k=s[3],q=s[7],Z=s[11],O=s[15];return r[0]=o*E+a*b+l*S+c*k,r[4]=o*A+a*L+l*D+c*q,r[8]=o*R+a*B+l*P+c*Z,r[12]=o*w+a*F+l*N+c*O,r[1]=d*E+h*b+u*S+f*k,r[5]=d*A+h*L+u*D+f*q,r[9]=d*R+h*B+u*P+f*Z,r[13]=d*w+h*F+u*N+f*O,r[2]=p*E+v*b+m*S+g*k,r[6]=p*A+v*L+m*D+g*q,r[10]=p*R+v*B+m*P+g*Z,r[14]=p*w+v*F+m*N+g*O,r[3]=y*E+_*b+x*S+M*k,r[7]=y*A+_*L+x*D+M*q,r[11]=y*R+_*B+x*P+M*Z,r[15]=y*w+_*F+x*N+M*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15];return p*(+r*l*h-s*c*h-r*a*u+n*c*u+s*a*f-n*l*f)+v*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*d-r*l*d)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*d-n*c*d)+g*(-s*a*d-t*l*h+t*a*u+s*o*h-n*o*u+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],y=h*m*c-v*u*c+v*l*f-a*m*f-h*l*g+a*u*g,_=p*u*c-d*m*c-p*l*f+o*m*f+d*l*g-o*u*g,x=d*v*c-p*h*c+p*a*f-o*v*f-d*a*g+o*h*g,M=p*h*l-d*v*l-p*a*u+o*v*u+d*a*m-o*h*m,E=t*y+n*_+s*x+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=y*A,e[1]=(v*u*r-h*m*r-v*s*f+n*m*f+h*s*g-n*u*g)*A,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*g+n*l*g)*A,e[3]=(h*l*r-a*u*r-h*s*c+n*u*c+a*s*f-n*l*f)*A,e[4]=_*A,e[5]=(d*m*r-p*u*r+p*s*f-t*m*f-d*s*g+t*u*g)*A,e[6]=(p*l*r-o*m*r-p*s*c+t*m*c+o*s*g-t*l*g)*A,e[7]=(o*u*r-d*l*r+d*s*c-t*u*c-o*s*f+t*l*f)*A,e[8]=x*A,e[9]=(p*h*r-d*v*r-p*n*f+t*v*f+d*n*g-t*h*g)*A,e[10]=(o*v*r-p*a*r+p*n*c-t*v*c-o*n*g+t*a*g)*A,e[11]=(d*a*r-o*h*r-d*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=M*A,e[13]=(d*v*s-p*h*s+p*n*u-t*v*u-d*n*m+t*h*m)*A,e[14]=(p*a*s-o*v*s-p*n*l+t*v*l+o*n*m-t*a*m)*A,e[15]=(o*h*s-d*a*s+d*n*l-t*h*l-o*n*u+t*a*u)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,f=r*d,p=r*h,v=o*d,m=o*h,g=a*h,y=l*c,_=l*d,x=l*h,M=n.x,E=n.y,A=n.z;return s[0]=(1-(v+g))*M,s[1]=(f+x)*M,s[2]=(p-_)*M,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(u+g))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(p+_)*A,s[9]=(m-y)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ts.set(s[0],s[1],s[2]).length(),o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fn.copy(this);let c=1/r,d=1/o,h=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=vi){let l=this.elements,c=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s),f,p;if(a===vi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Bo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=vi){let l=this.elements,c=1/(t-e),d=1/(n-s),h=1/(o-r),u=(t+e)*c,f=(n+s)*d,p,v;if(a===vi)p=(o+r)*h,v=-2*h;else if(a===Bo)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ts=new U,Fn=new it,N0=new U(0,0,0),O0=new U(1,1,1),ki=new U,co=new U,gn=new U,Pu=new it,Iu=new Et,Ht=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ht.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},B0=0,Lu=new U,As=new Et,ci=new it,ho=new U,gr=new U,z0=new U,H0=new Et,Du=new U(1,0,0),ku=new U(0,1,0),Uu=new U(0,0,1),Fu={type:"added"},V0={type:"removed"},Rs={type:"childadded",child:null},al={type:"childremoved",child:null},Kt=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Ht,n=new Et,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Be}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(gr,ho,this.up):ci.lookAt(ho,gr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ci),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V0),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Kt.DEFAULT_UP=new U(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new U,hi=new U,ll=new U,ui=new U,Cs=new U,Ps=new U,Nu=new U,cl=new U,hl=new U,ul=new U,dl=new rt,fl=new rt,pl=new rt,Ni=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),hi.subVectors(n,t),ll.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(hi),l=Nn.dot(ll),c=hi.dot(hi),d=hi.dot(ll),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,f=(c*l-a*d)*u,p=(o*d-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return dl.setScalar(0),fl.setScalar(0),pl.setScalar(0),dl.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dl,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(pl,r.z),o}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),hi.subVectors(e,t),Nn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Nn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Cs.subVectors(s,n),Ps.subVectors(r,n),cl.subVectors(e,n);let l=Cs.dot(cl),c=Ps.dot(cl);if(l<=0&&c<=0)return t.copy(n);hl.subVectors(e,s);let d=Cs.dot(hl),h=Ps.dot(hl);if(d>=0&&h<=d)return t.copy(s);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Cs,o);ul.subVectors(e,r);let f=Cs.dot(ul),p=Ps.dot(ul);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ps,a);let m=d*p-f*h;if(m<=0&&h-d>=0&&f-p>=0)return Nu.subVectors(r,s),a=(h-d)/(h-d+(f-p)),t.copy(s).addScaledVector(Nu,a);let g=1/(m+v+u);return o=v*g,a=u*g,t.copy(n).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},uo={h:0,s:0,l:0};function ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=C0(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ml(o,r,e+1/3),this.g=ml(o,r,e),this.b=ml(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=Nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ot.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Qt(Jt.r*255,0,255))*65536+Math.round(Qt(Jt.g*255,0,255))*256+Math.round(Qt(Jt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=jt){ot.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(uo);let n=ja(Ui.h,uo.h,t),s=ja(Ui.s,uo.s,t),r=ja(Ui.l,uo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ze;Ze.NAMES=Nd;var G0=0,Qn=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Bi(),this.name="",this.blending=zs,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Ws,this.blendEquation=It,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Ws&&(n.blendDst=this.blendDst),this.blendEquation!==It&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ei=class extends Qn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pi=W0();function W0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function q0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Qt(i,-65504,65504),pi.floatView[0]=i;let e=pi.uint32View[0],t=e>>23&511;return pi.baseTable[t]+((e&8388607)>>pi.shiftTable[t])}function X0(i){let e=i>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[e]+(i&1023)]+pi.exponentTable[e],pi.floatView[0]}var bi={toHalfFloat:q0,fromHalfFloat:X0},Rt=new U,fo=new Fe,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}};var Wo=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qo=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},K0=0,An=new it,gl=new Kt,Is=new U,vn=new as,vr=new as,Ot=new U,Mt=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?qo:Wo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(vn.min,vr.min),vn.expandByPoint(Ot),Ot.addVectors(vn.max,vr.max),vn.expandByPoint(Ot)):(vn.expandByPoint(vr.min),vn.expandByPoint(vr.max))}vn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Ot.add(Is)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;let c=new U,d=new U,h=new U,u=new Fe,f=new Fe,p=new Fe,v=new U,m=new U;function g(R,w,b){c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,b),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),d.sub(c),h.sub(c),f.sub(u),p.sub(u);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(L),a[R].add(v),a[w].add(v),a[b].add(v),l[R].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,w=y.length;R<w;++R){let b=y[R],L=b.start,B=b.count;for(let F=L,S=L+B;F<S;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new U,x=new U,M=new U,E=new U;function A(R){M.fromBufferAttribute(s,R),E.copy(M);let w=a[R];_.copy(w),_.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(E,w);let L=x.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,w=y.length;R<w;++R){let b=y[R],L=b.start,B=b.count;for(let F=L,S=L+B;F<S;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,d=new U,h=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d),f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let g=0;g<d;g++)u[p++]=c[f++]}return new gt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){let u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new it,es=new Ar,po=new ls,Bu=new U,mo=new U,go=new U,vo=new U,vl=new U,yo=new U,zu=new U,xo=new U,Ne=class extends Kt{constructor(e=new Mt,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],h=r[l];d!==0&&(vl.fromBufferAttribute(h,e),o?yo.addScaledVector(vl,d):yo.addScaledVector(vl.sub(t),d))}t.add(yo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(po.containsPoint(es.origin)===!1&&(es.intersectSphere(po,Bu)===null||es.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),es.copy(e.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,M=_;x<M;x+=3){let E=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);s=_o(this,g,e,n,c,d,h,E,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let y=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);s=_o(this,o,e,n,c,d,h,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,M=_;x<M;x+=3){let E=x,A=x+1,R=x+2;s=_o(this,g,e,n,c,d,h,E,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let y=m,_=m+1,x=m+2;s=_o(this,o,e,n,c,d,h,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $0(i,e,t,n,s,r,o,a){let l;if(e.side===zt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xn,a),l===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:i}}function _o(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,mo),i.getVertexPosition(l,go),i.getVertexPosition(c,vo);let d=$0(i,e,t,n,mo,go,vo,zu);if(d){let h=new U;Ni.getBarycoord(zu,mo,go,vo,h),s&&(d.uv=Ni.getInterpolatedAttribute(s,a,l,c,h,new Fe)),r&&(d.uv1=Ni.getInterpolatedAttribute(r,a,l,c,h,new Fe)),o&&(d.normal=Ni.getInterpolatedAttribute(o,a,l,c,h,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Ni.getNormal(mo,go,vo,u.normal),d.face=u,d.barycoord=h}return d}var _n=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],h=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(h,2));function p(v,m,g,y,_,x,M,E,A,R,w){let b=x/A,L=M/R,B=x/2,F=M/2,S=E/2,D=A+1,P=R+1,N=0,k=0,q=new U;for(let Z=0;Z<P;Z++){let O=Z*L-F;for(let J=0;J<D;J++){let fe=J*b-B;q[v]=fe*y,q[m]=O*_,q[g]=S,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=E>0?1:-1,d.push(q.x,q.y,q.z),h.push(J/A),h.push(1-Z/R),N+=1}}for(let Z=0;Z<R;Z++)for(let O=0;O<A;O++){let J=u+O+D*Z,fe=u+O+D*(Z+1),X=u+(O+1)+D*(Z+1),ne=u+(O+1)+D*Z;l.push(J,fe,ne),l.push(fe,X,ne),k+=6}a.addGroup(f,k,w),f+=k,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Y0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Od(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Z0={clone:Zs,merge:rn},J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends Qn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xo=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fi=new U,Hu=new Fe,Vu=new Fe,qt=class extends Xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Vu),t.subVectors(Vu,Hu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ls=-90,Ds=1,gc=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(Ls,Ds,e,t);s.layers=this.layers,this.add(s);let r=new qt(Ls,Ds,e,t);r.layers=this.layers,this.add(r);let o=new qt(Ls,Ds,e,t);o.layers=this.layers,this.add(o);let a=new qt(Ls,Ds,e,t);a.layers=this.layers,this.add(a);let l=new qt(Ls,Ds,e,t);l.layers=this.layers,this.add(l);let c=new qt(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ko=class extends en{constructor(e,t,n,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vc=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ko(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _n(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Oi});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Xt),new gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},yl=new U,Q0=new U,eg=new Be,fi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yl.subVectors(n,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||eg.getNormalMatrix(e),s=this.coplanarPoint(yl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new ls,bo=new U,Rr=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],h=s[6],u=s[7],f=s[8],p=s[9],v=s[10],m=s[11],g=s[12],y=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,u-c,m-f,x-g).normalize(),n[1].setComponents(l+r,u+c,m+f,x+g).normalize(),n[2].setComponents(l+o,u+d,m+p,x+y).normalize(),n[3].setComponents(l-o,u-d,m-p,x-y).normalize(),n[4].setComponents(l-a,u-h,m-v,x-_).normalize(),t===vi)n[5].setComponents(l+a,u+h,m+v,x+_).normalize();else if(t===Bo)n[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tg(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let d=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<h.length;f++){let p=h[u],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,h[u]=v)}h.length=u+1;for(let f=0,p=h.length;f<p;f++){let v=h[f];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $o=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,h=e/a,u=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<d;g++){let y=g*u-o;for(let _=0;_<c;_++){let x=_*h-r;p.push(x,-y,0),v.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let _=y+c*g,x=y+c*(g+1),M=y+1+c*(g+1),E=y+1+c*g;f.push(_,x,E),f.push(x,M,E)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ag=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ev=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_v=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$v=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ly=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_y=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,My=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:sg,alphamap_pars_fragment:rg,alphatest_fragment:og,alphatest_pars_fragment:ag,aomap_fragment:lg,aomap_pars_fragment:cg,batching_pars_vertex:hg,batching_vertex:ug,begin_vertex:dg,beginnormal_vertex:fg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:gg,clipping_planes_fragment:vg,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:xg,clipping_planes_vertex:_g,color_fragment:bg,color_pars_fragment:Mg,color_pars_vertex:wg,color_vertex:Sg,common:Eg,cube_uv_reflection_fragment:Tg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:Rg,displacementmap_vertex:Cg,emissivemap_fragment:Pg,emissivemap_pars_fragment:Ig,colorspace_fragment:Lg,colorspace_pars_fragment:Dg,envmap_fragment:kg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Fg,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:$g,envmap_vertex:Og,fog_vertex:Bg,fog_pars_vertex:zg,fog_fragment:Hg,fog_pars_fragment:Vg,gradientmap_pars_fragment:Gg,lightmap_pars_fragment:Wg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:Xg,lights_pars_begin:Kg,lights_toon_fragment:Yg,lights_toon_pars_fragment:Zg,lights_phong_fragment:Jg,lights_phong_pars_fragment:jg,lights_physical_fragment:Qg,lights_physical_pars_fragment:ev,lights_fragment_begin:tv,lights_fragment_maps:nv,lights_fragment_end:iv,logdepthbuf_fragment:sv,logdepthbuf_pars_fragment:rv,logdepthbuf_pars_vertex:ov,logdepthbuf_vertex:av,map_fragment:lv,map_pars_fragment:cv,map_particle_fragment:hv,map_particle_pars_fragment:uv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:fv,morphinstance_vertex:pv,morphcolor_vertex:mv,morphnormal_vertex:gv,morphtarget_pars_vertex:vv,morphtarget_vertex:yv,normal_fragment_begin:xv,normal_fragment_maps:_v,normal_pars_fragment:bv,normal_pars_vertex:Mv,normal_vertex:wv,normalmap_pars_fragment:Sv,clearcoat_normal_fragment_begin:Ev,clearcoat_normal_fragment_maps:Tv,clearcoat_pars_fragment:Av,iridescence_pars_fragment:Rv,opaque_fragment:Cv,packing:Pv,premultiplied_alpha_fragment:Iv,project_vertex:Lv,dithering_fragment:Dv,dithering_pars_fragment:kv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Fv,shadowmap_pars_fragment:Nv,shadowmap_pars_vertex:Ov,shadowmap_vertex:Bv,shadowmask_pars_fragment:zv,skinbase_vertex:Hv,skinning_pars_vertex:Vv,skinning_vertex:Gv,skinnormal_vertex:Wv,specularmap_fragment:qv,specularmap_pars_fragment:Xv,tonemapping_fragment:Kv,tonemapping_pars_fragment:$v,transmission_fragment:Yv,transmission_pars_fragment:Zv,uv_pars_fragment:Jv,uv_pars_vertex:jv,uv_vertex:Qv,worldpos_vertex:ey,background_vert:ty,background_frag:ny,backgroundCube_vert:iy,backgroundCube_frag:sy,cube_vert:ry,cube_frag:oy,depth_vert:ay,depth_frag:ly,distanceRGBA_vert:cy,distanceRGBA_frag:hy,equirect_vert:uy,equirect_frag:dy,linedashed_vert:fy,linedashed_frag:py,meshbasic_vert:my,meshbasic_frag:gy,meshlambert_vert:vy,meshlambert_frag:yy,meshmatcap_vert:xy,meshmatcap_frag:_y,meshnormal_vert:by,meshnormal_frag:My,meshphong_vert:wy,meshphong_frag:Sy,meshphysical_vert:Ey,meshphysical_frag:Ty,meshtoon_vert:Ay,meshtoon_frag:Ry,points_vert:Cy,points_frag:Py,shadow_vert:Iy,shadow_frag:Ly,sprite_vert:Dy,sprite_frag:ky},_e={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},$n={basic:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:rn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:rn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:rn([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:rn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:rn([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:rn([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:rn([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:rn([_e.lights,_e.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};$n.physical={uniforms:rn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Mo={r:0,b:0,g:0},ns=new Ht,Uy=new it;function Fy(i,e,t,n,s,r,o){let a=new Ze(0),l=r===!0?0:1,c,d,h=null,u=0,f=null;function p(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1,x=p(y);x===null?g(a,l):x&&x.isColor&&(g(x,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let x=p(_);x&&(x.isCubeTexture||x.mapping===la)?(d===void 0&&(d=new Ne(new _n(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:Zs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ns.copy(_.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(ns)),d.material.toneMapped=ot.getTransfer(x.colorSpace)!==pt,(h!==x||u!==x.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ne(new $o(2,2),new ht({name:"BackgroundMaterial",uniforms:Zs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ot.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,_){y.getRGB(Mo,Od(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:v,addToRenderList:m}}function Ny(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(b,L,B,F,S){let D=!1,P=h(F,B,L);r!==P&&(r=P,c(r.object)),D=f(b,F,B,S),D&&p(b,F,B,S),S!==null&&e.update(S,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,x(b,L,B,F),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function h(b,L,B){let F=B.wireframe===!0,S=n[b.id];S===void 0&&(S={},n[b.id]=S);let D=S[L.id];D===void 0&&(D={},S[L.id]=D);let P=D[F];return P===void 0&&(P=u(l()),D[F]=P),P}function u(b){let L=[],B=[],F=[];for(let S=0;S<t;S++)L[S]=0,B[S]=0,F[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,L,B,F){let S=r.attributes,D=L.attributes,P=0,N=B.getAttributes();for(let k in N)if(N[k].location>=0){let Z=S[k],O=D[k];if(O===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),Z===void 0||Z.attribute!==O||O&&Z.data!==O.data)return!0;P++}return r.attributesNum!==P||r.index!==F}function p(b,L,B,F){let S={},D=L.attributes,P=0,N=B.getAttributes();for(let k in N)if(N[k].location>=0){let Z=D[k];Z===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor));let O={};O.attribute=Z,Z&&Z.data&&(O.data=Z.data),S[k]=O,P++}r.attributes=S,r.attributesNum=P,r.index=F}function v(){let b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function m(b){g(b,0)}function g(b,L){let B=r.newAttributes,F=r.enabledAttributes,S=r.attributeDivisors;B[b]=1,F[b]===0&&(i.enableVertexAttribArray(b),F[b]=1),S[b]!==L&&(i.vertexAttribDivisor(b,L),S[b]=L)}function y(){let b=r.newAttributes,L=r.enabledAttributes;for(let B=0,F=L.length;B<F;B++)L[B]!==b[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function _(b,L,B,F,S,D,P){P===!0?i.vertexAttribIPointer(b,L,B,S,D):i.vertexAttribPointer(b,L,B,F,S,D)}function x(b,L,B,F){v();let S=F.attributes,D=B.getAttributes(),P=L.defaultAttributeValues;for(let N in D){let k=D[N];if(k.location>=0){let q=S[N];if(q===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){let Z=q.normalized,O=q.itemSize,J=e.get(q);if(J===void 0)continue;let fe=J.buffer,X=J.type,ne=J.bytesPerElement,ge=X===i.INT||X===i.UNSIGNED_INT||q.gpuType===qc;if(q.isInterleavedBufferAttribute){let ee=q.data,re=ee.stride,ve=q.offset;if(ee.isInstancedInterleavedBuffer){for(let ae=0;ae<k.locationSize;ae++)g(k.location+ae,ee.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ae=0;ae<k.locationSize;ae++)m(k.location+ae);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ae=0;ae<k.locationSize;ae++)_(k.location+ae,O/k.locationSize,X,Z,re*ne,(ve+O/k.locationSize*ae)*ne,ge)}else{if(q.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)g(k.location+ee,q.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ee=0;ee<k.locationSize;ee++)m(k.location+ee);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ee=0;ee<k.locationSize;ee++)_(k.location+ee,O/k.locationSize,X,Z,O*ne,O/k.locationSize*ee*ne,ge)}}else if(P!==void 0){let Z=P[N];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(k.location,Z);break;case 3:i.vertexAttrib3fv(k.location,Z);break;case 4:i.vertexAttrib4fv(k.location,Z);break;default:i.vertexAttrib1fv(k.location,Z)}}}}y()}function M(){R();for(let b in n){let L=n[b];for(let B in L){let F=L[B];for(let S in F)d(F[S].object),delete F[S];delete L[B]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let B in L){let F=L[B];for(let S in F)d(F[S].object),delete F[S];delete L[B]}delete n[b.id]}function A(b){for(let L in n){let B=n[L];if(B[b.id]===void 0)continue;let F=B[b.id];for(let S in F)d(F[S].object),delete F[S];delete B[b.id]}}function R(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Oy(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let p=0;p<h;p++)f+=d[p];t.update(f,n,1)}function l(c,d,h,u){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],d[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=d[v]*u[v];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function By(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Bt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:M,maxSamples:E}}function zy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new fi,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){let p=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?d(null):c();else{let y=r?0:n,_=y*4,x=g.clippingState||null;l.value=x,x=d(p,u,_,f);for(let M=0;M!==_;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,p){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Hy(i){let e=new WeakMap;function t(o,a){return a===Ul?o.mapping=Xs:a===Fl&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ul||a===Fl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Js=class extends Xo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bs=4,Gu=[.125,.215,.35,.446,.526,.582],rs=20,xl=new Js,Wu=new Ze,_l=null,bl=0,Ml=0,wl=!1,ss=(1+Math.sqrt(5))/2,ks=1/ss,qu=[new U(-ss,ks,0),new U(ss,ks,0),new U(-ks,0,ss),new U(ks,0,ss),new U(0,ss,-ks),new U(0,ss,ks),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_l=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,bl,Ml),this._renderer.xr.enabled=wl,e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:ii,format:Bt,colorSpace:_i,depthBuffer:!1},s=Xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vy(r)),this._blurMaterial=Gy(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,s){let a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Wu),d.toneMapping=jn,d.autoClear=!1;let f=new ei({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),p=new Ne(new _n,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Wu),v=!0);for(let g=0;g<6;g++){let y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let _=this._cubeSize;wo(s,y*_,g>2?_:0,_,_),d.setRenderTarget(s),v&&d.render(p,a),d.render(e,a)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Xs||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qu[(s-r-1)%qu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,h=new Ne(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rs-1),v=r/p,m=isFinite(r)?1+Math.floor(d*v):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let g=[],y=0;for(let A=0;A<rs;++A){let R=A/v,w=Math.exp(-R*R/2);g.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<g.length;A++)g[A]=g[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;let x=this._sizeLods[s],M=3*x*(s>_-Bs?s-_+Bs:0),E=4*(this._cubeSize-x);wo(t,M,E,3*x,2*x),l.setRenderTarget(t),l.render(h,xl)}};function Vy(i){let e=[],t=[],n=[],s=i,r=i-Bs+1+Gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Bs?l=Gu[o-i+Bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,p=6,v=3,m=2,g=1,y=new Float32Array(v*p*f),_=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,R=E>2?0:-1,w=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(w,v*p*E),_.set(u,m*p*E);let b=[E,E,E,E,E,E];x.set(b,g*p*E)}let M=new Mt;M.setAttribute("position",new gt(y,v)),M.setAttribute("uv",new gt(_,m)),M.setAttribute("faceIndex",new gt(x,g)),e.push(M),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xu(i,e,t){let n=new zn(i,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gy(i,e,t){let n=new Float32Array(rs),s=new U(0,1,0);return new ht({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ku(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function $u(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ul||l===Fl,d=l===Xs||l===Ks;if(c||d){let h=e.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new js(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new js(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xy(i,e,t,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);for(let p in u.morphAttributes){let v=u.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)e.remove(v[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let p in f){let v=f[p];for(let m=0,g=v.length;m<g;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let u=[],f=h.index,p=h.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){let M=y[_+0],E=y[_+1],A=y[_+2];u.push(M,E,E,A,A,M)}}else if(p!==void 0){let y=p.array;v=p.version;for(let _=0,x=y.length/3-1;_<x;_+=3){let M=_+0,E=_+1,A=_+2;u.push(M,E,E,A,A,M)}}else return;let m=new(Fd(u)?qo:Wo)(u,1);m.version=v;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function d(h){let u=r.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Ky(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*o,p),t.update(f,n,p))}function d(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function h(u,f,p,v){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)c(u[g]/o,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y]*v[y];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function $y(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yy(i,e,t){let n=new WeakMap,s=new rt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==h){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*M*4*h),A=new Vo(E,x,M,h);A.type=gi,A.needsUpdate=!0;let R=_*4;for(let b=0;b<h;b++){let L=m[b],B=g[b],F=y[b],S=x*M*4*b;for(let D=0;D<L.count;D++){let P=D*R;f===!0&&(s.fromBufferAttribute(L,D),E[S+P+0]=s.x,E[S+P+1]=s.y,E[S+P+2]=s.z,E[S+P+3]=0),p===!0&&(s.fromBufferAttribute(B,D),E[S+P+4]=s.x,E[S+P+5]=s.y,E[S+P+6]=s.z,E[S+P+7]=0),v===!0&&(s.fromBufferAttribute(F,D),E[S+P+8]=s.x,E[S+P+9]=s.y,E[S+P+10]=s.z,E[S+P+11]=F.itemSize===4?s.w:1)}}u={count:h,texture:A,size:new Fe(x,M)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Zy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Yo=class extends en{constructor(e,t,n,s,r,o,a,l,c,d=Hs){if(d!==Hs&&d!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Hs&&(n=os),n===void 0&&d===Ys&&(n=$s),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zd=new en,Yu=new Yo(1,1),Hd=new Vo,Vd=new mc,Gd=new Ko,Zu=[],Ju=[],ju=new Float32Array(16),Qu=new Float32Array(9),ed=new Float32Array(4);function ir(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ha(i,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;ed.set(n),i.uniformMatrix2fv(this.addr,!1,ed),Dt(t,n)}}function nx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),Dt(t,n)}}function ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;ju.set(n),i.uniformMatrix4fv(this.addr,!1,ju),Dt(t,n)}}function sx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function dx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yu.compareFunction=Ud,r=Yu):r=zd,t.setTexture2D(e||r,s)}function fx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vd,s)}function px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gd,s)}function mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hd,s)}function gx(i){switch(i){case 5126:return Jy;case 35664:return jy;case 35665:return Qy;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function vx(i,e){i.uniform1fv(this.addr,e)}function yx(i,e){let t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function xx(i,e){let t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function _x(i,e){let t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function bx(i,e){let t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mx(i,e){let t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wx(i,e){let t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sx(i,e){i.uniform1iv(this.addr,e)}function Ex(i,e){i.uniform2iv(this.addr,e)}function Tx(i,e){i.uniform3iv(this.addr,e)}function Ax(i,e){i.uniform4iv(this.addr,e)}function Rx(i,e){i.uniform1uiv(this.addr,e)}function Cx(i,e){i.uniform2uiv(this.addr,e)}function Px(i,e){i.uniform3uiv(this.addr,e)}function Ix(i,e){i.uniform4uiv(this.addr,e)}function Lx(i,e,t){let n=this.cache,s=e.length,r=ha(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zd,r[o])}function Dx(i,e,t){let n=this.cache,s=e.length,r=ha(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vd,r[o])}function kx(i,e,t){let n=this.cache,s=e.length,r=ha(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gd,r[o])}function Ux(i,e,t){let n=this.cache,s=e.length,r=ha(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function Fx(i){switch(i){case 5126:return vx;case 35664:return yx;case 35665:return xx;case 35666:return _x;case 35674:return bx;case 35675:return Mx;case 35676:return wx;case 5124:case 35670:return Sx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Ux}}var yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gx(t.type)}},xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}},_c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function td(i,e){i.seq.push(e),i.map[e.id]=e}function Nx(i,e,t){let n=i.name,s=n.length;for(Sl.lastIndex=0;;){let r=Sl.exec(n),o=Sl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){td(t,c===void 0?new yc(a,i,e):new xc(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new _c(a),td(t,h)),t=h}}}var Gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Nx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function nd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ox=37297,Bx=0;function zx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var id=new Be;function Hx(i){ot._getMatrix(id,ot.workingColorSpace,i);let e=`mat3( ${id.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case ca:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zx(i.getShaderSource(e),o)}else return s}function Vx(i,e){let t=Hx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gx(i,e){let t;switch(e){case u0:t="Linear";break;case d0:t="Reinhard";break;case f0:t="Cineon";break;case p0:t="ACESFilmic";break;case g0:t="AgX";break;case v0:t="Neutral";break;case m0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var So=new U;function Wx(){ot.getLuminanceCoefficients(So);let i=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Xx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wr(i){return i!==""}function rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace($x,Zx)}var Yx=new Map;function Zx(i,e){let t=Ye[e];if(t===void 0){let n=Yx.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}var Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(i){return i.replace(Jx,jx)}function jx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function e1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case Ks:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function n1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Md:e="ENVMAP_BLENDING_MULTIPLY";break;case c0:e="ENVMAP_BLENDING_MIX";break;case h0:e="ENVMAP_BLENDING_ADD";break}return e}function i1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Qx(t),c=e1(t),d=t1(t),h=n1(t),u=i1(t),f=qx(t),p=Xx(r),v=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wr).join(`
`),g.length>0&&(g+=`
`)):(m=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),g=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==jn?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),Wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=bc(o),o=rd(o,t),o=od(o,t),a=bc(a),a=rd(a,t),a=od(a,t),o=ad(o),a=ad(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=y+m+o,x=y+g+a,M=nd(s,s.VERTEX_SHADER,_),E=nd(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(M).trim(),S=s.getShaderInfoLog(E).trim(),D=!0,P=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,M,E);else{let N=sd(s,M,"vertex"),k=sd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+N+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||S==="")&&(P=!1);P&&(L.diagnostics={runnable:D,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:S,prefix:g}})}s.deleteShader(M),s.deleteShader(E),R=new Gs(s,v),w=Kx(s,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Ox)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}var r1=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wc(e),t.set(e,n)),n}},wc=class{constructor(e){this.id=r1++,this.code=e,this.usedTimes=0}};function o1(i,e,t,n,s,r,o){let a=new Go,l=new Mc,c=new Set,d=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,L,B,F){let S=B.fog,D=F.geometry,P=w.isMeshStandardMaterial?B.environment:null,N=(w.isMeshStandardMaterial?t:e).get(w.envMap||P),k=N&&N.mapping===la?N.image.height:null,q=p[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,O=Z!==void 0?Z.length:0,J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let fe,X,ne,ge;if(q){let dt=$n[q];fe=dt.vertexShader,X=dt.fragmentShader}else fe=w.vertexShader,X=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);let ee=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),ve=F.isInstancedMesh===!0,ae=F.isBatchedMesh===!0,Se=!!w.map,Pe=!!w.matcap,Ve=!!N,z=!!w.aoMap,ze=!!w.lightMap,Oe=!!w.bumpMap,We=!!w.normalMap,Ee=!!w.displacementMap,je=!!w.emissiveMap,Te=!!w.metalnessMap,I=!!w.roughnessMap,T=w.anisotropy>0,H=w.clearcoat>0,j=w.dispersion>0,se=w.iridescence>0,te=w.sheen>0,Re=w.transmission>0,ye=T&&!!w.anisotropyMap,ie=H&&!!w.clearcoatMap,pe=H&&!!w.clearcoatNormalMap,Y=H&&!!w.clearcoatRoughnessMap,ce=se&&!!w.iridescenceMap,he=se&&!!w.iridescenceThicknessMap,Ae=te&&!!w.sheenColorMap,me=te&&!!w.sheenRoughnessMap,Qe=!!w.specularMap,qe=!!w.specularColorMap,ut=!!w.specularIntensityMap,V=Re&&!!w.transmissionMap,xe=Re&&!!w.thicknessMap,Q=!!w.gradientMap,oe=!!w.alphaMap,we=w.alphaTest>0,be=!!w.alphaHash,Ke=!!w.extensions,St=jn;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(St=i.toneMapping);let Yt={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:fe,fragmentShader:X,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ae,batchingColor:ae&&F._colorsTexture!==null,instancing:ve,instancingColor:ve&&F.instanceColor!==null,instancingMorph:ve&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:_i,alphaToCoverage:!!w.alphaToCoverage,map:Se,matcap:Pe,envMap:Ve,envMapMode:Ve&&N.mapping,envMapCubeUVHeight:k,aoMap:z,lightMap:ze,bumpMap:Oe,normalMap:We,displacementMap:u&&Ee,emissiveMap:je,normalMapObjectSpace:We&&w.normalMapType===b0,normalMapTangentSpace:We&&w.normalMapType===kd,metalnessMap:Te,roughnessMap:I,anisotropy:T,anisotropyMap:ye,clearcoat:H,clearcoatMap:ie,clearcoatNormalMap:pe,clearcoatRoughnessMap:Y,dispersion:j,iridescence:se,iridescenceMap:ce,iridescenceThicknessMap:he,sheen:te,sheenColorMap:Ae,sheenRoughnessMap:me,specularMap:Qe,specularColorMap:qe,specularIntensityMap:ut,transmission:Re,transmissionMap:V,thicknessMap:xe,gradientMap:Q,opaque:w.transparent===!1&&w.blending===zs&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:we,alphaHash:be,combine:w.combine,mapUv:Se&&v(w.map.channel),aoMapUv:z&&v(w.aoMap.channel),lightMapUv:ze&&v(w.lightMap.channel),bumpMapUv:Oe&&v(w.bumpMap.channel),normalMapUv:We&&v(w.normalMap.channel),displacementMapUv:Ee&&v(w.displacementMap.channel),emissiveMapUv:je&&v(w.emissiveMap.channel),metalnessMapUv:Te&&v(w.metalnessMap.channel),roughnessMapUv:I&&v(w.roughnessMap.channel),anisotropyMapUv:ye&&v(w.anisotropyMap.channel),clearcoatMapUv:ie&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(w.sheenRoughnessMap.channel),specularMapUv:Qe&&v(w.specularMap.channel),specularColorMapUv:qe&&v(w.specularColorMap.channel),specularIntensityMapUv:ut&&v(w.specularIntensityMap.channel),transmissionMapUv:V&&v(w.transmissionMap.channel),thicknessMapUv:xe&&v(w.thicknessMap.channel),alphaMapUv:oe&&v(w.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(We||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Se||oe),fog:!!S,useFog:w.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:re,skinning:F.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:Se&&w.map.isVideoTexture===!0&&ot.getTransfer(w.map.colorSpace)===pt,decodeVideoTextureEmissive:je&&w.emissiveMap.isVideoTexture===!0&&ot.getTransfer(w.emissiveMap.colorSpace)===pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ct,flipSided:w.side===zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ke&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&w.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function g(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(y(b,w),_(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let b=p[w.type],L;if(b){let B=$n[b];L=Z0.clone(B.uniforms)}else L=w.uniforms;return L}function M(w,b){let L;for(let B=0,F=d.length;B<F;B++){let S=d[B];if(S.cacheKey===b){L=S,++L.usedTimes;break}}return L===void 0&&(L=new s1(i,b,w,r),d.push(L)),L}function E(w){if(--w.usedTimes===0){let b=d.indexOf(w);d[b]=d[d.length-1],d.pop(),w.destroy()}}function A(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:d,dispose:R}}function a1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function l1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,u,f,p,v,m){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:u,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:m},i[e]=g):(g.id=h.id,g.object=h,g.geometry=u,g.material=f,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=v,g.group=m),e++,g}function a(h,u,f,p,v,m){let g=o(h,u,f,p,v,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(h,u,f,p,v,m){let g=o(h,u,f,p,v,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(h,u){t.length>1&&t.sort(h||l1),n.length>1&&n.sort(u||cd),s.length>1&&s.sort(u||cd)}function d(){for(let h=e,u=i.length;h<u;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function c1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new hd,i.set(n,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function h1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ze};break;case"SpotLight":t={position:new U,direction:new U,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function u1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var d1=0;function f1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function p1(i){let e=new h1,t=u1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new it,o=new it;function a(c){let d=0,h=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,y=0,_=0,x=0,M=0,E=0,A=0;c.sort(f1);for(let w=0,b=c.length;w<b;w++){let L=c[w],B=L.color,F=L.intensity,S=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*F,h+=B.g*F,u+=B.b*F;else if(L.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(L.sh.coefficients[P],F);A++}else if(L.isDirectionalLight){let P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let N=L.shadow,k=t.get(L);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=P,f++}else if(L.isSpotLight){let P=e.get(L);P.position.setFromMatrixPosition(L.matrixWorld),P.color.copy(B).multiplyScalar(F),P.distance=S,P.coneCos=Math.cos(L.angle),P.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),P.decay=L.decay,n.spot[v]=P;let N=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,N.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[v]=N.matrix,L.castShadow){let k=t.get(L);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=D,x++}v++}else if(L.isRectAreaLight){let P=e.get(L);P.color.copy(B).multiplyScalar(F),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=P,m++}else if(L.isPointLight){let P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),P.distance=L.distance,P.decay=L.decay,L.castShadow){let N=L.shadow,k=t.get(L);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,k.shadowCameraNear=N.camera.near,k.shadowCameraFar=N.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=D,n.pointShadowMatrix[p]=L.shadow.matrix,_++}n.point[p]=P,p++}else if(L.isHemisphereLight){let P=e.get(L);P.skyColor.copy(L.color).multiplyScalar(F),P.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[g]=P,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==f||R.pointLength!==p||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==g||R.numDirectionalShadows!==y||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==M||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,R.directionalLength=f,R.pointLength=p,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=g,R.numDirectionalShadows=y,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=M,R.numLightProbes=A,n.version=d1++)}function l(c,d){let h=0,u=0,f=0,p=0,v=0,m=d.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let _=c[g];if(_.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function ud(i){let e=new p1(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function m1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ud(i),e.set(s,[a])):r>=o.length?(a=new ud(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sc=class extends Qn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ec=class extends Qn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y1(i,e,t){let n=new Rr,s=new Fe,r=new Fe,o=new rt,a=new Sc({depthPacking:_0}),l=new Ec,c={},d=t.maxTextureSize,h={[xn]:zt,[zt]:xn,[Ct]:Ct},u=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:g1,fragmentShader:v1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Mt;p.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ne(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let g=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Oi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=g!==di&&this.type===di,S=g===di&&this.type!==di;for(let D=0,P=E.length;D<P;D++){let N=E[D],k=N.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let q=k.getFrameExtents();if(s.multiply(q),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/q.x),s.x=r.x*q.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/q.y),s.y=r.y*q.y,k.mapSize.y=r.y)),k.map===null||F===!0||S===!0){let O=this.type!==di?{minFilter:yn,magFilter:yn}:{};k.map!==null&&k.map.dispose(),k.map=new zn(s.x,s.y,O),k.map.texture.name=N.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let Z=k.getViewportCount();for(let O=0;O<Z;O++){let J=k.getViewport(O);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),B.viewport(o),k.updateMatrices(N,O),n=k.getFrustum(),x(A,R,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===di&&y(k,R),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,b,L)};function y(E,A){let R=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,R,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,R,f,v,null)}function _(E,A,R,w){let b=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=b.uuid,F=A.uuid,S=c[B];S===void 0&&(S={},c[B]=S);let D=S[F];D===void 0&&(D=b.clone(),S[F]=D,A.addEventListener("dispose",M)),b=D}if(b.visible=A.visible,b.wireframe=A.wireframe,w===di?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=i.properties.get(b);B.light=R}return b}function x(E,A,R,w,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=e.update(E),S=E.material;if(Array.isArray(S)){let D=F.groups;for(let P=0,N=D.length;P<N;P++){let k=D[P],q=S[k.materialIndex];if(q&&q.visible){let Z=_(E,q,w,b);E.onBeforeShadow(i,E,A,R,F,Z,k),i.renderBufferDirect(R,null,F,Z,E,k),E.onAfterShadow(i,E,A,R,F,Z,k)}}}else if(S.visible){let D=_(E,S,w,b);E.onBeforeShadow(i,E,A,R,F,D,null),i.renderBufferDirect(R,null,F,D,E,null),E.onAfterShadow(i,E,A,R,F,D,null)}}let B=E.children;for(let F=0,S=B.length;F<S;F++)x(B[F],A,R,w,b)}function M(E){E.target.removeEventListener("dispose",M);for(let R in c){let w=c[R],b=E.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var x1={[Rl]:Cl,[Pl]:Dl,[Il]:kl,[qs]:Ll,[Cl]:Rl,[Dl]:Pl,[kl]:Il,[Ll]:qs};function _1(i,e){function t(){let V=!1,xe=new rt,Q=null,oe=new rt(0,0,0,0);return{setMask:function(we){Q!==we&&!V&&(i.colorMask(we,we,we,we),Q=we)},setLocked:function(we){V=we},setClear:function(we,be,Ke,St,Yt){Yt===!0&&(we*=St,be*=St,Ke*=St),xe.set(we,be,Ke,St),oe.equals(xe)===!1&&(i.clearColor(we,be,Ke,St),oe.copy(xe))},reset:function(){V=!1,Q=null,oe.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,Q=null,oe=null,we=null;return{setReversed:function(be){if(xe!==be){let Ke=e.get("EXT_clip_control");xe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);let St=we;we=null,this.setClear(St)}xe=be},getReversed:function(){return xe},setTest:function(be){be?ee(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(be){Q!==be&&!V&&(i.depthMask(be),Q=be)},setFunc:function(be){if(xe&&(be=x1[be]),oe!==be){switch(be){case Rl:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Pl:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case Il:i.depthFunc(i.EQUAL);break;case Ll:i.depthFunc(i.GEQUAL);break;case Dl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=be}},setLocked:function(be){V=be},setClear:function(be){we!==be&&(xe&&(be=1-be),i.clearDepth(be),we=be)},reset:function(){V=!1,Q=null,oe=null,we=null,xe=!1}}}function s(){let V=!1,xe=null,Q=null,oe=null,we=null,be=null,Ke=null,St=null,Yt=null;return{setTest:function(dt){V||(dt?ee(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(dt){xe!==dt&&!V&&(i.stencilMask(dt),xe=dt)},setFunc:function(dt,Dn,ri){(Q!==dt||oe!==Dn||we!==ri)&&(i.stencilFunc(dt,Dn,ri),Q=dt,oe=Dn,we=ri)},setOp:function(dt,Dn,ri){(be!==dt||Ke!==Dn||St!==ri)&&(i.stencilOp(dt,Dn,ri),be=dt,Ke=Dn,St=ri)},setLocked:function(dt){V=dt},setClear:function(dt){Yt!==dt&&(i.clearStencil(dt),Yt=dt)},reset:function(){V=!1,xe=null,Q=null,oe=null,we=null,be=null,Ke=null,St=null,Yt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,d={},h={},u=new WeakMap,f=[],p=null,v=!1,m=null,g=null,y=null,_=null,x=null,M=null,E=null,A=new Ze(0,0,0),R=0,w=!1,b=null,L=null,B=null,F=null,S=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,N=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(k)[1]),P=N>=1):k.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),P=N>=2);let q=null,Z={},O=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),fe=new rt().fromArray(O),X=new rt().fromArray(J);function ne(V,xe,Q,oe){let we=new Uint8Array(4),be=i.createTexture();i.bindTexture(V,be),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<Q;Ke++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(xe+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return be}let ge={};ge[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(qs),Oe(!1),We(mu),ee(i.CULL_FACE),z(Oi);function ee(V){d[V]!==!0&&(i.enable(V),d[V]=!0)}function re(V){d[V]!==!1&&(i.disable(V),d[V]=!1)}function ve(V,xe){return h[V]!==xe?(i.bindFramebuffer(V,xe),h[V]=xe,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function ae(V,xe){let Q=f,oe=!1;if(V){Q=u.get(xe),Q===void 0&&(Q=[],u.set(xe,Q));let we=V.textures;if(Q.length!==we.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Ke=we.length;be<Ke;be++)Q[be]=i.COLOR_ATTACHMENT0+be;Q.length=we.length,oe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,oe=!0);oe&&i.drawBuffers(Q)}function Se(V){return p!==V?(i.useProgram(V),p=V,!0):!1}let Pe={[It]:i.FUNC_ADD,[Km]:i.FUNC_SUBTRACT,[$m]:i.FUNC_REVERSE_SUBTRACT};Pe[Ym]=i.MIN,Pe[Zm]=i.MAX;let Ve={[Jm]:i.ZERO,[kt]:i.ONE,[jm]:i.SRC_COLOR,[Er]:i.SRC_ALPHA,[s0]:i.SRC_ALPHA_SATURATE,[n0]:i.DST_COLOR,[e0]:i.DST_ALPHA,[Qm]:i.ONE_MINUS_SRC_COLOR,[Ws]:i.ONE_MINUS_SRC_ALPHA,[i0]:i.ONE_MINUS_DST_COLOR,[t0]:i.ONE_MINUS_DST_ALPHA,[r0]:i.CONSTANT_COLOR,[o0]:i.ONE_MINUS_CONSTANT_COLOR,[a0]:i.CONSTANT_ALPHA,[l0]:i.ONE_MINUS_CONSTANT_ALPHA};function z(V,xe,Q,oe,we,be,Ke,St,Yt,dt){if(V===Oi){v===!0&&(re(i.BLEND),v=!1);return}if(v===!1&&(ee(i.BLEND),v=!0),V!==Mn){if(V!==m||dt!==w){if((g!==It||x!==It)&&(i.blendEquation(i.FUNC_ADD),g=It,x=It),dt)switch(V){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case On:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case On:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,_=null,M=null,E=null,A.set(0,0,0),R=0,m=V,w=dt}return}we=we||xe,be=be||Q,Ke=Ke||oe,(xe!==g||we!==x)&&(i.blendEquationSeparate(Pe[xe],Pe[we]),g=xe,x=we),(Q!==y||oe!==_||be!==M||Ke!==E)&&(i.blendFuncSeparate(Ve[Q],Ve[oe],Ve[be],Ve[Ke]),y=Q,_=oe,M=be,E=Ke),(St.equals(A)===!1||Yt!==R)&&(i.blendColor(St.r,St.g,St.b,Yt),A.copy(St),R=Yt),m=V,w=!1}function ze(V,xe){V.side===Ct?re(i.CULL_FACE):ee(i.CULL_FACE);let Q=V.side===zt;xe&&(Q=!Q),Oe(Q),V.blending===zs&&V.transparent===!1?z(Oi):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let oe=V.stencilWrite;a.setTest(oe),oe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),je(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(V){b!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),b=V)}function We(V){V!==qm?(ee(i.CULL_FACE),V!==L&&(V===mu?i.cullFace(i.BACK):V===Xm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),L=V}function Ee(V){V!==B&&(P&&i.lineWidth(V),B=V)}function je(V,xe,Q){V?(ee(i.POLYGON_OFFSET_FILL),(F!==xe||S!==Q)&&(i.polygonOffset(xe,Q),F=xe,S=Q)):re(i.POLYGON_OFFSET_FILL)}function Te(V){V?ee(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function I(V){V===void 0&&(V=i.TEXTURE0+D-1),q!==V&&(i.activeTexture(V),q=V)}function T(V,xe,Q){Q===void 0&&(q===null?Q=i.TEXTURE0+D-1:Q=q);let oe=Z[Q];oe===void 0&&(oe={type:void 0,texture:void 0},Z[Q]=oe),(oe.type!==V||oe.texture!==xe)&&(q!==Q&&(i.activeTexture(Q),q=Q),i.bindTexture(V,xe||ge[V]),oe.type=V,oe.texture=xe)}function H(){let V=Z[q];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(V){fe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),fe.copy(V))}function me(V){X.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),X.copy(V))}function Qe(V,xe){let Q=c.get(xe);Q===void 0&&(Q=new WeakMap,c.set(xe,Q));let oe=Q.get(V);oe===void 0&&(oe=i.getUniformBlockIndex(xe,V.name),Q.set(V,oe))}function qe(V,xe){let oe=c.get(xe).get(V);l.get(xe)!==oe&&(i.uniformBlockBinding(xe,oe,V.__bindingPointIndex),l.set(xe,oe))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},q=null,Z={},h={},u=new WeakMap,f=[],p=null,v=!1,m=null,g=null,y=null,_=null,x=null,M=null,E=null,A=new Ze(0,0,0),R=0,w=!1,b=null,L=null,B=null,F=null,S=null,fe.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:re,bindFramebuffer:ve,drawBuffers:ae,useProgram:Se,setBlending:z,setMaterial:ze,setFlipSided:Oe,setCullFace:We,setLineWidth:Ee,setPolygonOffset:je,setScissorTest:Te,activeTexture:I,bindTexture:T,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:se,texImage2D:ce,texImage3D:he,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:pe,texStorage3D:Y,texSubImage2D:te,texSubImage3D:Re,compressedTexSubImage2D:ye,compressedTexSubImage3D:ie,scissor:Ae,viewport:me,reset:ut}}function dd(i,e,t,n){let s=b1(n);switch(t){case Ad:return i*e;case Cd:return i*e;case Pd:return i*e*2;case Id:return i*e/s.components*s.byteLength;case $c:return i*e/s.components*s.byteLength;case Ld:return i*e*2/s.components*s.byteLength;case Yc:return i*e*2/s.components*s.byteLength;case Rd:return i*e*3/s.components*s.byteLength;case Bt:return i*e*4/s.components*s.byteLength;case Zc:return i*e*4/s.components*s.byteLength;case Do:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Hl:return Math.max(i,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(i,8)*Math.max(e,8)/2;case Vl:case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case No:case rc:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dd:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b1(i){switch(i){case xi:case Sd:return{byteLength:1,components:1};case Tr:case Ed:case ii:return{byteLength:2,components:1};case Xc:case Kc:return{byteLength:2,components:4};case os:case qc:case gi:return{byteLength:4,components:1};case Td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function M1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap,h,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,T){return f?new OffscreenCanvas(I,T):zo("canvas")}function v(I,T,H){let j=1,se=Te(I);if((se.width>H||se.height>H)&&(j=H/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let te=Math.floor(j*se.width),Re=Math.floor(j*se.height);h===void 0&&(h=p(te,Re));let ye=T?p(te,Re):h;return ye.width=te,ye.height=Re,ye.getContext("2d").drawImage(I,0,0,te,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Re+")."),ye}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,T,H,j,se=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=T;if(T===i.RED&&(H===i.FLOAT&&(te=i.R32F),H===i.HALF_FLOAT&&(te=i.R16F),H===i.UNSIGNED_BYTE&&(te=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.R8UI),H===i.UNSIGNED_SHORT&&(te=i.R16UI),H===i.UNSIGNED_INT&&(te=i.R32UI),H===i.BYTE&&(te=i.R8I),H===i.SHORT&&(te=i.R16I),H===i.INT&&(te=i.R32I)),T===i.RG&&(H===i.FLOAT&&(te=i.RG32F),H===i.HALF_FLOAT&&(te=i.RG16F),H===i.UNSIGNED_BYTE&&(te=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RG8UI),H===i.UNSIGNED_SHORT&&(te=i.RG16UI),H===i.UNSIGNED_INT&&(te=i.RG32UI),H===i.BYTE&&(te=i.RG8I),H===i.SHORT&&(te=i.RG16I),H===i.INT&&(te=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGB8UI),H===i.UNSIGNED_SHORT&&(te=i.RGB16UI),H===i.UNSIGNED_INT&&(te=i.RGB32UI),H===i.BYTE&&(te=i.RGB8I),H===i.SHORT&&(te=i.RGB16I),H===i.INT&&(te=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),H===i.UNSIGNED_INT&&(te=i.RGBA32UI),H===i.BYTE&&(te=i.RGBA8I),H===i.SHORT&&(te=i.RGBA16I),H===i.INT&&(te=i.RGBA32I)),T===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),T===i.RGBA){let Re=se?ca:ot.getTransfer(j);H===i.FLOAT&&(te=i.RGBA32F),H===i.HALF_FLOAT&&(te=i.RGBA16F),H===i.UNSIGNED_BYTE&&(te=Re===pt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(I,T){let H;return I?T===null||T===os||T===$s?H=i.DEPTH24_STENCIL8:T===gi?H=i.DEPTH32F_STENCIL8:T===Tr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===os||T===$s?H=i.DEPTH_COMPONENT24:T===gi?H=i.DEPTH_COMPONENT32F:T===Tr&&(H=i.DEPTH_COMPONENT16),H}function M(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==Xt?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){let T=I.target;T.removeEventListener("dispose",E),R(T),T.isVideoTexture&&d.delete(T)}function A(I){let T=I.target;T.removeEventListener("dispose",A),b(T)}function R(I){let T=n.get(I);if(T.__webglInit===void 0)return;let H=I.source,j=u.get(H);if(j){let se=j[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(I),Object.keys(j).length===0&&u.delete(H)}n.remove(I)}function w(I){let T=n.get(I);i.deleteTexture(T.__webglTexture);let H=I.source,j=u.get(H);delete j[T.__cacheKey],o.memory.textures--}function b(I){let T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let se=0;se<T.__webglFramebuffer[j].length;se++)i.deleteFramebuffer(T.__webglFramebuffer[j][se]);else i.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)i.deleteFramebuffer(T.__webglFramebuffer[j]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let H=I.textures;for(let j=0,se=H.length;j<se;j++){let te=n.get(H[j]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(I)}let L=0;function B(){L=0}function F(){let I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function S(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function D(I,T){let H=n.get(I);if(I.isVideoTexture&&Ee(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){let j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,I,T);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function P(I,T){let H=n.get(I);if(I.version>0&&H.__version!==I.version){X(H,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function N(I,T){let H=n.get(I);if(I.version>0&&H.__version!==I.version){X(H,I,T);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function k(I,T){let H=n.get(I);if(I.version>0&&H.__version!==I.version){ne(H,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}let q={[Bn]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Nl]:i.MIRRORED_REPEAT},Z={[yn]:i.NEAREST,[y0]:i.NEAREST_MIPMAP_NEAREST,[io]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},O={[M0]:i.NEVER,[R0]:i.ALWAYS,[w0]:i.LESS,[Ud]:i.LEQUAL,[S0]:i.EQUAL,[A0]:i.GEQUAL,[E0]:i.GREATER,[T0]:i.NOTEQUAL};function J(I,T){if(T.type===gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Xt||T.magFilter===Ya||T.magFilter===io||T.magFilter===mi||T.minFilter===Xt||T.minFilter===Ya||T.minFilter===io||T.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,q[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,q[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,q[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Z[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==io&&T.minFilter!==mi||T.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function fe(I,T){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));let j=T.source,se=u.get(j);se===void 0&&(se={},u.set(j,se));let te=S(T);if(te!==I.__cacheKey){se[te]===void 0&&(se[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),se[te].usedTimes++;let Re=se[I.__cacheKey];Re!==void 0&&(se[I.__cacheKey].usedTimes--,Re.usedTimes===0&&w(T)),I.__cacheKey=te,I.__webglTexture=se[te].texture}return H}function X(I,T,H){let j=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=i.TEXTURE_3D);let se=fe(I,T),te=T.source;t.bindTexture(j,I.__webglTexture,i.TEXTURE0+H);let Re=n.get(te);if(te.version!==Re.__version||se===!0){t.activeTexture(i.TEXTURE0+H);let ye=ot.getPrimaries(ot.workingColorSpace),ie=T.colorSpace===Yn?null:ot.getPrimaries(T.colorSpace),pe=T.colorSpace===Yn||ye===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Y=v(T.image,!1,s.maxTextureSize);Y=je(T,Y);let ce=r.convert(T.format,T.colorSpace),he=r.convert(T.type),Ae=_(T.internalFormat,ce,he,T.colorSpace,T.isVideoTexture);J(j,T);let me,Qe=T.mipmaps,qe=T.isVideoTexture!==!0,ut=Re.__version===void 0||se===!0,V=te.dataReady,xe=M(T,Y);if(T.isDepthTexture)Ae=x(T.format===Ys,T.type),ut&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ae,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Y.width,Y.height,0,ce,he,null));else if(T.isDataTexture)if(Qe.length>0){qe&&ut&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,Qe[0].width,Qe[0].height);for(let Q=0,oe=Qe.length;Q<oe;Q++)me=Qe[Q],qe?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,me.width,me.height,ce,he,me.data):t.texImage2D(i.TEXTURE_2D,Q,Ae,me.width,me.height,0,ce,he,me.data);T.generateMipmaps=!1}else qe?(ut&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,Y.width,Y.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,ce,he,Y.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Y.width,Y.height,0,ce,he,Y.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,Qe[0].width,Qe[0].height,Y.depth);for(let Q=0,oe=Qe.length;Q<oe;Q++)if(me=Qe[Q],T.format!==Bt)if(ce!==null)if(qe){if(V)if(T.layerUpdates.size>0){let we=dd(me.width,me.height,T.format,T.type);for(let be of T.layerUpdates){let Ke=me.data.subarray(be*we/me.data.BYTES_PER_ELEMENT,(be+1)*we/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,be,me.width,me.height,1,ce,Ke)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,Y.depth,ce,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ae,me.width,me.height,Y.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,Y.depth,ce,he,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ae,me.width,me.height,Y.depth,0,ce,he,me.data)}else{qe&&ut&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,Qe[0].width,Qe[0].height);for(let Q=0,oe=Qe.length;Q<oe;Q++)me=Qe[Q],T.format!==Bt?ce!==null?qe?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,me.width,me.height,ce,me.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,me.width,me.height,ce,he,me.data):t.texImage2D(i.TEXTURE_2D,Q,Ae,me.width,me.height,0,ce,he,me.data)}else if(T.isDataArrayTexture)if(qe){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,Y.width,Y.height,Y.depth),V)if(T.layerUpdates.size>0){let Q=dd(Y.width,Y.height,T.format,T.type);for(let oe of T.layerUpdates){let we=Y.data.subarray(oe*Q/Y.data.BYTES_PER_ELEMENT,(oe+1)*Q/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,Y.width,Y.height,1,ce,he,we)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ce,he,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Y.width,Y.height,Y.depth,0,ce,he,Y.data);else if(T.isData3DTexture)qe?(ut&&t.texStorage3D(i.TEXTURE_3D,xe,Ae,Y.width,Y.height,Y.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ce,he,Y.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Y.width,Y.height,Y.depth,0,ce,he,Y.data);else if(T.isFramebufferTexture){if(ut)if(qe)t.texStorage2D(i.TEXTURE_2D,xe,Ae,Y.width,Y.height);else{let Q=Y.width,oe=Y.height;for(let we=0;we<xe;we++)t.texImage2D(i.TEXTURE_2D,we,Ae,Q,oe,0,ce,he,null),Q>>=1,oe>>=1}}else if(Qe.length>0){if(qe&&ut){let Q=Te(Qe[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ae,Q.width,Q.height)}for(let Q=0,oe=Qe.length;Q<oe;Q++)me=Qe[Q],qe?V&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce,he,me):t.texImage2D(i.TEXTURE_2D,Q,Ae,ce,he,me);T.generateMipmaps=!1}else if(qe){if(ut){let Q=Te(Y);t.texStorage2D(i.TEXTURE_2D,xe,Ae,Q.width,Q.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,he,Y)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ce,he,Y);m(T)&&g(j),Re.__version=te.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ne(I,T,H){if(T.image.length!==6)return;let j=fe(I,T),se=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let te=n.get(se);if(se.version!==te.__version||j===!0){t.activeTexture(i.TEXTURE0+H);let Re=ot.getPrimaries(ot.workingColorSpace),ye=T.colorSpace===Yn?null:ot.getPrimaries(T.colorSpace),ie=T.colorSpace===Yn||Re===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let pe=T.isCompressedTexture||T.image[0].isCompressedTexture,Y=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let oe=0;oe<6;oe++)!pe&&!Y?ce[oe]=v(T.image[oe],!0,s.maxCubemapSize):ce[oe]=Y?T.image[oe].image:T.image[oe],ce[oe]=je(T,ce[oe]);let he=ce[0],Ae=r.convert(T.format,T.colorSpace),me=r.convert(T.type),Qe=_(T.internalFormat,Ae,me,T.colorSpace),qe=T.isVideoTexture!==!0,ut=te.__version===void 0||j===!0,V=se.dataReady,xe=M(T,he);J(i.TEXTURE_CUBE_MAP,T);let Q;if(pe){qe&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Qe,he.width,he.height);for(let oe=0;oe<6;oe++){Q=ce[oe].mipmaps;for(let we=0;we<Q.length;we++){let be=Q[we];T.format!==Bt?Ae!==null?qe?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,be.width,be.height,Ae,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,Qe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,be.width,be.height,Ae,me,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,Qe,be.width,be.height,0,Ae,me,be.data)}}}else{if(Q=T.mipmaps,qe&&ut){Q.length>0&&xe++;let oe=Te(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Y){qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ce[oe].width,ce[oe].height,Ae,me,ce[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,ce[oe].width,ce[oe].height,0,Ae,me,ce[oe].data);for(let we=0;we<Q.length;we++){let Ke=Q[we].image[oe].image;qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,Ke.width,Ke.height,Ae,me,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,Qe,Ke.width,Ke.height,0,Ae,me,Ke.data)}}else{qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ae,me,ce[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Ae,me,ce[oe]);for(let we=0;we<Q.length;we++){let be=Q[we];qe?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,Ae,me,be.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,Qe,Ae,me,be.image[oe])}}}m(T)&&g(i.TEXTURE_CUBE_MAP),te.__version=se.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ge(I,T,H,j,se,te){let Re=r.convert(H.format,H.colorSpace),ye=r.convert(H.type),ie=_(H.internalFormat,Re,ye,H.colorSpace),pe=n.get(T),Y=n.get(H);if(Y.__renderTarget=T,!pe.__hasExternalTextures){let ce=Math.max(1,T.width>>te),he=Math.max(1,T.height>>te);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,te,ie,ce,he,T.depth,0,Re,ye,null):t.texImage2D(se,te,ie,ce,he,0,Re,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),We(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,se,Y.__webglTexture,0,Oe(T)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,se,Y.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(I,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){let j=T.depthTexture,se=j&&j.isDepthTexture?j.type:null,te=x(T.stencilBuffer,se),Re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=Oe(T);We(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,te,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,te,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,te,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,I)}else{let j=T.textures;for(let se=0;se<j.length;se++){let te=j[se],Re=r.convert(te.format,te.colorSpace),ye=r.convert(te.type),ie=_(te.internalFormat,Re,ye,te.colorSpace),pe=Oe(T);H&&We(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ie,T.width,T.height):We(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ie,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function re(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);let se=j.__webglTexture,te=Oe(T);if(T.depthTexture.format===Hs)We(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(T.depthTexture.format===Ys)We(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ve(I){let T=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){let se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=j}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");re(T.__webglFramebuffer,I)}else if(H){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=i.createRenderbuffer(),ee(T.__webglDepthbuffer[j],I,!1);else{let se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ee(T.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(I,T,H){let j=n.get(I);T!==void 0&&ge(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ve(I)}function Se(I){let T=I.texture,H=n.get(I),j=n.get(T);I.addEventListener("dispose",A);let se=I.textures,te=I.isWebGLCubeRenderTarget===!0,Re=se.length>1;if(Re||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=T.version,o.memory.textures++),te){H.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ye]=[];for(let ie=0;ie<T.mipmaps.length;ie++)H.__webglFramebuffer[ye][ie]=i.createFramebuffer()}else H.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)H.__webglFramebuffer[ye]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ye=0,ie=se.length;ye<ie;ye++){let pe=n.get(se[ye]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&We(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ye=0;ye<se.length;ye++){let ie=se[ye];H.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ye]);let pe=r.convert(ie.format,ie.colorSpace),Y=r.convert(ie.type),ce=_(ie.internalFormat,pe,Y,ie.colorSpace,I.isXRRenderTarget===!0),he=Oe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ce,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,H.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),J(i.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)ge(H.__webglFramebuffer[ye][ie],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ie);else ge(H.__webglFramebuffer[ye],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(T)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ye=0,ie=se.length;ye<ie;ye++){let pe=se[ye],Y=n.get(pe);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture),J(i.TEXTURE_2D,pe),ge(H.__webglFramebuffer,I,pe,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),m(pe)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ye=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,j.__webglTexture),J(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)ge(H.__webglFramebuffer[ie],I,T,i.COLOR_ATTACHMENT0,ye,ie);else ge(H.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,ye,0);m(T)&&g(ye),t.unbindTexture()}I.depthBuffer&&ve(I)}function Pe(I){let T=I.textures;for(let H=0,j=T.length;H<j;H++){let se=T[H];if(m(se)){let te=y(I),Re=n.get(se).__webglTexture;t.bindTexture(te,Re),g(te),t.unbindTexture()}}}let Ve=[],z=[];function ze(I){if(I.samples>0){if(We(I)===!1){let T=I.textures,H=I.width,j=I.height,se=i.COLOR_BUFFER_BIT,te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(I),ye=T.length>1;if(ye)for(let ie=0;ie<T.length;ie++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ie=0;ie<T.length;ie++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[ie]);let pe=n.get(T[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,se,i.NEAREST),l===!0&&(Ve.length=0,z.length=0,Ve.push(i.COLOR_ATTACHMENT0+ie),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ve.push(te),z.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let ie=0;ie<T.length;ie++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Re.__webglColorRenderbuffer[ie]);let pe=n.get(T[ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Oe(I){return Math.min(s.maxSamples,I.samples)}function We(I){let T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ee(I){let T=o.render.frame;d.get(I)!==T&&(d.set(I,T),I.update())}function je(I,T){let H=I.colorSpace,j=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==_i&&H!==Yn&&(ot.getTransfer(H)===pt?(j!==Bt||se!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=D,this.setTexture2DArray=P,this.setTexture3D=N,this.setTextureCube=k,this.rebindTextures=ae,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=We}function w1(i,e){function t(n,s=Yn){let r,o=ot.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===Xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Td)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.BYTE;if(n===Ed)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===os)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===Ad)return i.ALPHA;if(n===Rd)return i.RGB;if(n===Bt)return i.RGBA;if(n===Cd)return i.LUMINANCE;if(n===Pd)return i.LUMINANCE_ALPHA;if(n===Hs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===Id)return i.RED;if(n===$c)return i.RED_INTEGER;if(n===Ld)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===Zc)return i.RGBA_INTEGER;if(n===Do||n===ko||n===Uo||n===Fo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Gl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===Xl||n===Kl||n===$l||n===Yl||n===Zl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===rc||n===oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dd||n===ac||n===lc||n===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Jn=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},S1={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new en,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:E1,fragmentShader:T1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new $o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,p=null,v=new Ac,m=t.getContextAttributes(),g=null,y=null,_=[],x=[],M=new Fe,E=null,A=new qt;A.viewport=new rt;let R=new qt;R.viewport=new rt;let w=[A,R],b=new Tc,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=_[X];return ne===void 0&&(ne=new Sr,_[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=_[X];return ne===void 0&&(ne=new Sr,_[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=_[X];return ne===void 0&&(ne=new Sr,_[X]=ne),ne.getHandSpace()};function F(X){let ne=x.indexOf(X.inputSource);if(ne===-1)return;let ge=_[ne];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function S(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",S),s.removeEventListener("inputsourceschange",D);for(let X=0;X<_.length;X++){let ne=x[X];ne!==null&&(x[X]=null,_[X].disconnect(ne))}L=null,B=null,v.reset(),e.setRenderTarget(g),f=null,u=null,h=null,s=null,y=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",S),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zn(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ge=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Ys:Hs,ge=m.stencil?$s:os);let re={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(s,t),u=h.createProjectionLayer(re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new zn(u.textureWidth,u.textureHeight,{format:Bt,type:xi,depthTexture:new Yo(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(X){for(let ne=0;ne<X.removed.length;ne++){let ge=X.removed[ne],ee=x.indexOf(ge);ee>=0&&(x[ee]=null,_[ee].disconnect(ge))}for(let ne=0;ne<X.added.length;ne++){let ge=X.added[ne],ee=x.indexOf(ge);if(ee===-1){for(let ve=0;ve<_.length;ve++)if(ve>=x.length){x.push(ge),ee=ve;break}else if(x[ve]===null){x[ve]=ge,ee=ve;break}if(ee===-1)break}let re=_[ee];re&&re.connect(ge)}}let P=new U,N=new U;function k(X,ne,ge){P.setFromMatrixPosition(ne.matrixWorld),N.setFromMatrixPosition(ge.matrixWorld);let ee=P.distanceTo(N),re=ne.projectionMatrix.elements,ve=ge.projectionMatrix.elements,ae=re[14]/(re[10]-1),Se=re[14]/(re[10]+1),Pe=(re[9]+1)/re[5],Ve=(re[9]-1)/re[5],z=(re[8]-1)/re[0],ze=(ve[8]+1)/ve[0],Oe=ae*z,We=ae*ze,Ee=ee/(-z+ze),je=Ee*-z;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(je),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),re[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Te=ae+Ee,I=Se+Ee,T=Oe-je,H=We+(ee-je),j=Pe*Se/I*Te,se=Ve*Se/I*Te;X.projectionMatrix.makePerspective(T,H,j,se,Te,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ne=X.near,ge=X.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),b.near=R.near=A.near=ne,b.far=R.far=A.far=ge,(L!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,B=b.far),A.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,b.layers.mask=A.layers.mask|R.layers.mask;let ee=X.parent,re=b.cameras;q(b,ee);for(let ve=0;ve<re.length;ve++)q(re[ve],ee);re.length===2?k(b,A,R):b.projectionMatrix.copy(A.projectionMatrix),Z(X,b,ee)};function Z(X,ne,ge){ge===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let O=null;function J(X,ne){if(d=ne.getViewerPose(c||o),p=ne,d!==null){let ge=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ee=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,ee=!0);for(let ve=0;ve<ge.length;ve++){let ae=ge[ve],Se=null;if(f!==null)Se=f.getViewport(ae);else{let Ve=h.getViewSubImage(u,ae);Se=Ve.viewport,ve===0&&(e.setRenderTargetTextures(y,Ve.colorTexture,u.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(y))}let Pe=w[ve];Pe===void 0&&(Pe=new qt,Pe.layers.enable(ve),Pe.viewport=new rt,w[ve]=Pe),Pe.matrix.fromArray(ae.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ae.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Se.x,Se.y,Se.width,Se.height),ve===0&&(b.matrix.copy(Pe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ee===!0&&b.cameras.push(Pe)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")){let ve=h.getDepthInformation(ge[0]);ve&&ve.isValid&&ve.texture&&v.init(e,ve,s.renderState)}}for(let ge=0;ge<_.length;ge++){let ee=x[ge],re=_[ge];ee!==null&&re!==void 0&&re.update(ee,ne,c||o)}O&&O(X,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}let fe=new Bd;fe.setAnimationLoop(J),this.setAnimationLoop=function(X){O=X},this.dispose=function(){}}},is=new Ht,A1=new it;function R1(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Od(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,_,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===zt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===zt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,is.copy(x),is.x*=-1,is.y*=-1,is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(is)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=_*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C1(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=s[y.id];x===void 0&&(p(y),x=d(y),s[y.id]=x,y.addEventListener("dispose",m));let M=_.program;n.updateUBOMapping(y,M);let E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function d(y){let _=h();y.__bindingPointIndex=_;let x=i.createBuffer(),M=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let _=s[y.id],x=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,A=x.length;E<A;E++){let R=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,b=R.length;w<b;w++){let L=R[w];if(f(L,E,w,M)===!0){let B=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],S=0;for(let D=0;D<F.length;D++){let P=F[D],N=v(P);typeof P=="number"||typeof P=="boolean"?(L.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,B+S,L.__data)):P.isMatrix3?(L.__data[0]=P.elements[0],L.__data[1]=P.elements[1],L.__data[2]=P.elements[2],L.__data[3]=0,L.__data[4]=P.elements[3],L.__data[5]=P.elements[4],L.__data[6]=P.elements[5],L.__data[7]=0,L.__data[8]=P.elements[6],L.__data[9]=P.elements[7],L.__data[10]=P.elements[8],L.__data[11]=0):(P.toArray(L.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,x,M){let E=y.value,A=_+"_"+x;if(M[A]===void 0)return typeof E=="number"||typeof E=="boolean"?M[A]=E:M[A]=E.clone(),!0;{let R=M[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return M[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function p(y){let _=y.uniforms,x=0,M=16;for(let A=0,R=_.length;A<R;A++){let w=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,L=w.length;b<L;b++){let B=w[b],F=Array.isArray(B.value)?B.value:[B.value];for(let S=0,D=F.length;S<D;S++){let P=F[S],N=v(P),k=x%M,q=k%N.boundary,Z=k+q;x+=q,Z!==0&&M-Z<N.storage&&(x+=M-Z),B.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=N.storage}}}let E=x%M;return E>0&&(x+=M-E),y.__size=x,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Zo=class{constructor(e={}){let{canvas:t=P0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),v=new Int32Array(4),m=null,g=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=jn,this.toneMappingExposure=1;let x=this,M=!1,E=0,A=0,R=null,w=-1,b=null,L=new rt,B=new rt,F=null,S=new Ze(0),D=0,P=t.width,N=t.height,k=1,q=null,Z=null,O=new rt(0,0,P,N),J=new rt(0,0,P,N),fe=!1,X=new Rr,ne=!1,ge=!1,ee=new it,re=new it,ve=new U,ae=new rt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Ve(){return R===null?k:1}let z=n;function ze(C,G){return t.getContext(C,G)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){let G="webgl2";if(z=ze(G,C),z===null)throw ze(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Oe,We,Ee,je,Te,I,T,H,j,se,te,Re,ye,ie,pe,Y,ce,he,Ae,me,Qe,qe,ut,V;function xe(){Oe=new qy(z),Oe.init(),qe=new w1(z,Oe),We=new By(z,Oe,e,qe),Ee=new _1(z,Oe),We.reverseDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),je=new $y(z),Te=new a1,I=new M1(z,Oe,Ee,Te,We,qe,je),T=new Hy(x),H=new Wy(x),j=new tg(z),ut=new Ny(z,j),se=new Xy(z,j,je,ut),te=new Zy(z,se,j,je),Ae=new Yy(z,We,I),Y=new zy(Te),Re=new o1(x,T,H,Oe,We,ut,Y),ye=new R1(x,Te),ie=new c1,pe=new m1(Oe),he=new Fy(x,T,H,Ee,te,f,l),ce=new y1(x,te,We),V=new C1(z,je,We,Ee),me=new Oy(z,Oe,je),Qe=new Ky(z,Oe,je),je.programs=Re.programs,x.capabilities=We,x.extensions=Oe,x.properties=Te,x.renderLists=ie,x.shadowMap=ce,x.state=Ee,x.info=je}xe();let Q=new Rc(x,z);this.xr=Q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let C=Oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(P,N,!1))},this.getSize=function(C){return C.set(P,N)},this.setSize=function(C,G,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,N=G,t.width=Math.floor(C*k),t.height=Math.floor(G*k),K===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(P*k,N*k).floor()},this.setDrawingBufferSize=function(C,G,K){P=C,N=G,k=K,t.width=Math.floor(C*K),t.height=Math.floor(G*K),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,G,K,$){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,G,K,$),Ee.viewport(L.copy(O).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,G,K,$){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,G,K,$),Ee.scissor(B.copy(J).multiplyScalar(k).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){Ee.setScissorTest(fe=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){Z=C},this.getClearColor=function(C){return C.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(C=!0,G=!0,K=!0){let $=0;if(C){let W=!1;if(R!==null){let ue=R.texture.format;W=ue===Zc||ue===Yc||ue===$c}if(W){let ue=R.texture.type,Me=ue===xi||ue===os||ue===Tr||ue===$s||ue===Xc||ue===Kc,Ie=he.getClearColor(),Le=he.getClearAlpha(),Ge=Ie.r,$e=Ie.g,De=Ie.b;Me?(p[0]=Ge,p[1]=$e,p[2]=De,p[3]=Le,z.clearBufferuiv(z.COLOR,0,p)):(v[0]=Ge,v[1]=$e,v[2]=De,v[3]=Le,z.clearBufferiv(z.COLOR,0,v))}else $|=z.COLOR_BUFFER_BIT}G&&($|=z.DEPTH_BUFFER_BIT),K&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ie.dispose(),pe.dispose(),Te.dispose(),T.dispose(),H.dispose(),te.dispose(),ut.dispose(),V.dispose(),Re.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ou),Q.removeEventListener("sessionend",au),Ji.stop()};function oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let C=je.autoReset,G=ce.enabled,K=ce.autoUpdate,$=ce.needsUpdate,W=ce.type;xe(),je.autoReset=C,ce.enabled=G,ce.autoUpdate=K,ce.needsUpdate=$,ce.type=W}function be(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ke(C){let G=C.target;G.removeEventListener("dispose",Ke),St(G)}function St(C){Yt(C),Te.remove(C)}function Yt(C){let G=Te.get(C).programs;G!==void 0&&(G.forEach(function(K){Re.releaseProgram(K)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,K,$,W,ue){G===null&&(G=Se);let Me=W.isMesh&&W.matrixWorld.determinant()<0,Ie=zm(C,G,K,$,W);Ee.setMaterial($,Me);let Le=K.index,Ge=1;if($.wireframe===!0){if(Le=se.getWireframeAttribute(K),Le===void 0)return;Ge=2}let $e=K.drawRange,De=K.attributes.position,at=$e.start*Ge,xt=($e.start+$e.count)*Ge;ue!==null&&(at=Math.max(at,ue.start*Ge),xt=Math.min(xt,(ue.start+ue.count)*Ge)),Le!==null?(at=Math.max(at,0),xt=Math.min(xt,Le.count)):De!=null&&(at=Math.max(at,0),xt=Math.min(xt,De.count));let _t=xt-at;if(_t<0||_t===1/0)return;ut.setup(W,$,Ie,K,Le);let on,lt=me;if(Le!==null&&(on=j.get(Le),lt=Qe,lt.setIndex(on)),W.isMesh)$.wireframe===!0?(Ee.setLineWidth($.wireframeLinewidth*Ve()),lt.setMode(z.LINES)):lt.setMode(z.TRIANGLES);else if(W.isLine){let Ue=$.linewidth;Ue===void 0&&(Ue=1),Ee.setLineWidth(Ue*Ve()),W.isLineSegments?lt.setMode(z.LINES):W.isLineLoop?lt.setMode(z.LINE_LOOP):lt.setMode(z.LINE_STRIP)}else W.isPoints?lt.setMode(z.POINTS):W.isSprite&&lt.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)lt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ue=W._multiDrawStarts,oi=W._multiDrawCounts,ct=W._multiDrawCount,kn=Le?j.get(Le).bytesPerElement:1,_s=Te.get($).currentProgram.getUniforms();for(let mn=0;mn<ct;mn++)_s.setValue(z,"_gl_DrawID",mn),lt.render(Ue[mn]/kn,oi[mn])}else if(W.isInstancedMesh)lt.renderInstances(at,_t,W.count);else if(K.isInstancedBufferGeometry){let Ue=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,oi=Math.min(K.instanceCount,Ue);lt.renderInstances(at,_t,oi)}else lt.render(at,_t)};function dt(C,G,K){C.transparent===!0&&C.side===Ct&&C.forceSinglePass===!1?(C.side=zt,C.needsUpdate=!0,no(C,G,K),C.side=xn,C.needsUpdate=!0,no(C,G,K),C.side=Ct):no(C,G,K)}this.compile=function(C,G,K=null){K===null&&(K=C),g=pe.get(K),g.init(G),_.push(g),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),C!==K&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();let $=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ue=W.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){let Ie=ue[Me];dt(Ie,K,W),$.add(Ie)}else dt(ue,K,W),$.add(ue)}),_.pop(),g=null,$},this.compileAsync=function(C,G,K=null){let $=this.compile(C,G,K);return new Promise(W=>{function ue(){if($.forEach(function(Me){Te.get(Me).currentProgram.isReady()&&$.delete(Me)}),$.size===0){W(C);return}setTimeout(ue,10)}Oe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Dn=null;function ri(C){Dn&&Dn(C)}function ou(){Ji.stop()}function au(){Ji.start()}let Ji=new Bd;Ji.setAnimationLoop(ri),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(C){Dn=C,Q.setAnimationLoop(C),C===null?Ji.stop():Ji.start()},Q.addEventListener("sessionstart",ou),Q.addEventListener("sessionend",au),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(G),G=Q.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,G,R),g=pe.get(C,_.length),g.init(G),_.push(g),re.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),X.setFromProjectionMatrix(re),ge=this.localClippingEnabled,ne=Y.init(this.clippingPlanes,ge),m=ie.get(C,y.length),m.init(),y.push(m),Q.enabled===!0&&Q.isPresenting===!0){let ue=x.xr.getDepthSensingMesh();ue!==null&&$a(ue,G,-1/0,x.sortObjects)}$a(C,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,Z),Pe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Pe&&he.addToRenderList(m,C),this.info.render.frame++,ne===!0&&Y.beginShadows();let K=g.state.shadowsArray;ce.render(K,C,G),ne===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,W=m.transmissive;if(g.setupLights(),G.isArrayCamera){let ue=G.cameras;if(W.length>0)for(let Me=0,Ie=ue.length;Me<Ie;Me++){let Le=ue[Me];cu($,W,C,Le)}Pe&&he.render(C);for(let Me=0,Ie=ue.length;Me<Ie;Me++){let Le=ue[Me];lu(m,C,Le,Le.viewport)}}else W.length>0&&cu($,W,C,G),Pe&&he.render(C),lu(m,C,G);R!==null&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(x,C,G),ut.resetDefaultState(),w=-1,b=null,_.pop(),_.length>0?(g=_[_.length-1],ne===!0&&Y.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function $a(C,G,K,$){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){$&&ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);let Me=te.update(C),Ie=C.material;Ie.visible&&m.push(C,Me,Ie,K,ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let Me=te.update(C),Ie=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ae.copy(C.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ae.copy(Me.boundingSphere.center)),ae.applyMatrix4(C.matrixWorld).applyMatrix4(re)),Array.isArray(Ie)){let Le=Me.groups;for(let Ge=0,$e=Le.length;Ge<$e;Ge++){let De=Le[Ge],at=Ie[De.materialIndex];at&&at.visible&&m.push(C,Me,at,K,ae.z,De)}}else Ie.visible&&m.push(C,Me,Ie,K,ae.z,null)}}let ue=C.children;for(let Me=0,Ie=ue.length;Me<Ie;Me++)$a(ue[Me],G,K,$)}function lu(C,G,K,$){let W=C.opaque,ue=C.transmissive,Me=C.transparent;g.setupLightsView(K),ne===!0&&Y.setGlobalState(x.clippingPlanes,K),$&&Ee.viewport(L.copy($)),W.length>0&&to(W,G,K),ue.length>0&&to(ue,G,K),Me.length>0&&to(Me,G,K),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function cu(C,G,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new zn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?ii:xi,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let ue=g.state.transmissionRenderTarget[$.id],Me=$.viewport||L;ue.setSize(Me.z,Me.w);let Ie=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(S),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),Pe&&he.render(K);let Le=x.toneMapping;x.toneMapping=jn;let Ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),ne===!0&&Y.setGlobalState(x.clippingPlanes,$),to(C,K,$),I.updateMultisampleRenderTarget(ue),I.updateRenderTargetMipmap(ue),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let De=0,at=G.length;De<at;De++){let xt=G[De],_t=xt.object,on=xt.geometry,lt=xt.material,Ue=xt.group;if(lt.side===Ct&&_t.layers.test($.layers)){let oi=lt.side;lt.side=zt,lt.needsUpdate=!0,hu(_t,K,$,on,lt,Ue),lt.side=oi,lt.needsUpdate=!0,$e=!0}}$e===!0&&(I.updateMultisampleRenderTarget(ue),I.updateRenderTargetMipmap(ue))}x.setRenderTarget(Ie),x.setClearColor(S,D),Ge!==void 0&&($.viewport=Ge),x.toneMapping=Le}function to(C,G,K){let $=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ue=C.length;W<ue;W++){let Me=C[W],Ie=Me.object,Le=Me.geometry,Ge=$===null?Me.material:$,$e=Me.group;Ie.layers.test(K.layers)&&hu(Ie,G,K,Le,Ge,$e)}}function hu(C,G,K,$,W,ue){C.onBeforeRender(x,G,K,$,W,ue),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(x,G,K,$,C,ue),W.transparent===!0&&W.side===Ct&&W.forceSinglePass===!1?(W.side=zt,W.needsUpdate=!0,x.renderBufferDirect(K,G,$,W,C,ue),W.side=xn,W.needsUpdate=!0,x.renderBufferDirect(K,G,$,W,C,ue),W.side=Ct):x.renderBufferDirect(K,G,$,W,C,ue),C.onAfterRender(x,G,K,$,W,ue)}function no(C,G,K){G.isScene!==!0&&(G=Se);let $=Te.get(C),W=g.state.lights,ue=g.state.shadowsArray,Me=W.state.version,Ie=Re.getParameters(C,W.state,ue,G,K),Le=Re.getProgramCacheKey(Ie),Ge=$.programs;$.environment=C.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(C.isMeshStandardMaterial?H:T).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",Ke),Ge=new Map,$.programs=Ge);let $e=Ge.get(Le);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===Me)return du(C,Ie),$e}else Ie.uniforms=Re.getUniforms(C),C.onBeforeCompile(Ie,x),$e=Re.acquireProgram(Ie,Le),Ge.set(Le,$e),$.uniforms=Ie.uniforms;let De=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=Y.uniform),du(C,Ie),$.needsLights=Vm(C),$.lightsStateVersion=Me,$.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.directionalShadowMap.value=W.state.directionalShadowMap,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotShadowMap.value=W.state.spotShadowMap,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMap.value=W.state.pointShadowMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function uu(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=Gs.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function du(C,G){let K=Te.get(C);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function zm(C,G,K,$,W){G.isScene!==!0&&(G=Se),I.resetTextureUnits();let ue=G.fog,Me=$.isMeshStandardMaterial?G.environment:null,Ie=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:_i,Le=($.isMeshStandardMaterial?H:T).get($.envMap||Me),Ge=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,$e=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,xt=!!K.morphAttributes.color,_t=jn;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=x.toneMapping);let on=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,lt=on!==void 0?on.length:0,Ue=Te.get($),oi=g.state.lights;if(ne===!0&&(ge===!0||C!==b)){let Tn=C===b&&$.id===w;Y.setState($,C,Tn)}let ct=!1;$.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==oi.state.version||Ue.outputColorSpace!==Ie||W.isBatchedMesh&&Ue.batching===!1||!W.isBatchedMesh&&Ue.batching===!0||W.isBatchedMesh&&Ue.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ue.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||W.isInstancedMesh&&Ue.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ue.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ue.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ue.instancingMorph===!1&&W.morphTexture!==null||Ue.envMap!==Le||$.fog===!0&&Ue.fog!==ue||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Y.numPlanes||Ue.numIntersection!==Y.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==$e||Ue.morphTargets!==De||Ue.morphNormals!==at||Ue.morphColors!==xt||Ue.toneMapping!==_t||Ue.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Ue.__version=$.version);let kn=Ue.currentProgram;ct===!0&&(kn=no($,G,W));let _s=!1,mn=!1,dr=!1,bt=kn.getUniforms(),Kn=Ue.uniforms;if(Ee.useProgram(kn.program)&&(_s=!0,mn=!0,dr=!0),$.id!==w&&(w=$.id,mn=!0),_s||b!==C){Ee.buffers.depth.getReversed()?(ee.copy(C.projectionMatrix),L0(ee),D0(ee),bt.setValue(z,"projectionMatrix",ee)):bt.setValue(z,"projectionMatrix",C.projectionMatrix),bt.setValue(z,"viewMatrix",C.matrixWorldInverse);let Ci=bt.map.cameraPosition;Ci!==void 0&&Ci.setValue(z,ve.setFromMatrixPosition(C.matrixWorld)),We.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,mn=!0,dr=!0)}if(W.isSkinnedMesh){bt.setOptional(z,W,"bindMatrix"),bt.setOptional(z,W,"bindMatrixInverse");let Tn=W.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),bt.setValue(z,"boneTexture",Tn.boneTexture,I))}W.isBatchedMesh&&(bt.setOptional(z,W,"batchingTexture"),bt.setValue(z,"batchingTexture",W._matricesTexture,I),bt.setOptional(z,W,"batchingIdTexture"),bt.setValue(z,"batchingIdTexture",W._indirectTexture,I),bt.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&bt.setValue(z,"batchingColorTexture",W._colorsTexture,I));let fr=K.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&Ae.update(W,K,kn),(mn||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,bt.setValue(z,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Kn.envMap.value=Le,Kn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(Kn.envMapIntensity.value=G.environmentIntensity),mn&&(bt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&Hm(Kn,dr),ue&&$.fog===!0&&ye.refreshFogUniforms(Kn,ue),ye.refreshMaterialUniforms(Kn,$,k,N,g.state.transmissionRenderTarget[C.id]),Gs.upload(z,uu(Ue),Kn,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Gs.upload(z,uu(Ue),Kn,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(z,"center",W.center),bt.setValue(z,"modelViewMatrix",W.modelViewMatrix),bt.setValue(z,"normalMatrix",W.normalMatrix),bt.setValue(z,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Tn=$.uniformsGroups;for(let Ci=0,Pi=Tn.length;Ci<Pi;Ci++){let fu=Tn[Ci];V.update(fu,kn),V.bind(fu,kn)}}return kn}function Hm(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Vm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,G,K){Te.get(C.texture).__webglTexture=G,Te.get(C.depthTexture).__webglTexture=K;let $=Te.get(C);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){let K=Te.get(C);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,K=0){R=C,E=G,A=K;let $=!0,W=null,ue=!1,Me=!1;if(C){let Le=Te.get(C);if(Le.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(z.FRAMEBUFFER,null),$=!1;else if(Le.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Le.__hasExternalTextures)I.rebindTextures(C,Te.get(C.texture).__webglTexture,Te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let De=C.depthTexture;if(Le.__boundDepthTexture!==De){if(De!==null&&Te.has(De)&&(C.width!==De.image.width||C.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);let $e=Te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[G])?W=$e[G][K]:W=$e[G],ue=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?W=Te.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?W=$e[K]:W=$e,L.copy(C.viewport),B.copy(C.scissor),F=C.scissorTest}else L.copy(O).multiplyScalar(k).floor(),B.copy(J).multiplyScalar(k).floor(),F=fe;if(Ee.bindFramebuffer(z.FRAMEBUFFER,W)&&$&&Ee.drawBuffers(C,W),Ee.viewport(L),Ee.scissor(B),Ee.setScissorTest(F),ue){let Le=Te.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,K)}else if(Me){let Le=Te.get(C.texture),Ge=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.__webglTexture,K||0,Ge)}w=-1},this.readRenderTargetPixels=function(C,G,K,$,W,ue,Me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){Ee.bindFramebuffer(z.FRAMEBUFFER,Ie);try{let Le=C.texture,Ge=Le.format,$e=Le.type;if(!We.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-$&&K>=0&&K<=C.height-W&&z.readPixels(G,K,$,W,qe.convert(Ge),qe.convert($e),ue)}finally{let Le=R!==null?Te.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(C,G,K,$,W,ue,Me){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){let Le=C.texture,Ge=Le.format,$e=Le.type;if(!We.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-$&&K>=0&&K<=C.height-W){Ee.bindFramebuffer(z.FRAMEBUFFER,Ie);let De=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,De),z.bufferData(z.PIXEL_PACK_BUFFER,ue.byteLength,z.STREAM_READ),z.readPixels(G,K,$,W,qe.convert(Ge),qe.convert($e),0);let at=R!==null?Te.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(z.FRAMEBUFFER,at);let xt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await I0(z,xt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,De),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ue),z.deleteBuffer(De),z.deleteSync(xt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,K=0){C.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);let $=Math.pow(2,-K),W=Math.floor(C.image.width*$),ue=Math.floor(C.image.height*$),Me=G!==null?G.x:0,Ie=G!==null?G.y:0;I.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,Me,Ie,W,ue),Ee.unbindTexture()},this.copyTextureToTexture=function(C,G,K=null,$=null,W=0){C.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1],G=arguments[2],W=arguments[3]||0,K=null);let ue,Me,Ie,Le,Ge,$e,De,at,xt,_t=C.isCompressedTexture?C.mipmaps[W]:C.image;K!==null?(ue=K.max.x-K.min.x,Me=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,Le=K.min.x,Ge=K.min.y,$e=K.isBox3?K.min.z:0):(ue=_t.width,Me=_t.height,Ie=_t.depth||1,Le=0,Ge=0,$e=0),$!==null?(De=$.x,at=$.y,xt=$.z):(De=0,at=0,xt=0);let on=qe.convert(G.format),lt=qe.convert(G.type),Ue;G.isData3DTexture?(I.setTexture3D(G,0),Ue=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(I.setTexture2DArray(G,0),Ue=z.TEXTURE_2D_ARRAY):(I.setTexture2D(G,0),Ue=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let oi=z.getParameter(z.UNPACK_ROW_LENGTH),ct=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kn=z.getParameter(z.UNPACK_SKIP_PIXELS),_s=z.getParameter(z.UNPACK_SKIP_ROWS),mn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Le),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ge),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$e);let dr=C.isDataArrayTexture||C.isData3DTexture,bt=G.isDataArrayTexture||G.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Kn=Te.get(C),fr=Te.get(G),Tn=Te.get(Kn.__renderTarget),Ci=Te.get(fr.__renderTarget);Ee.bindFramebuffer(z.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Pi=0;Pi<Ie;Pi++)dr&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Te.get(C).__webglTexture,W,$e+Pi),C.isDepthTexture?(bt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Te.get(G).__webglTexture,W,xt+Pi),z.blitFramebuffer(Le,Ge,ue,Me,De,at,ue,Me,z.DEPTH_BUFFER_BIT,z.NEAREST)):bt?z.copyTexSubImage3D(Ue,W,De,at,xt+Pi,Le,Ge,ue,Me):z.copyTexSubImage2D(Ue,W,De,at,xt+Pi,Le,Ge,ue,Me);Ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else bt?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Ue,W,De,at,xt,ue,Me,Ie,on,lt,_t.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Ue,W,De,at,xt,ue,Me,Ie,on,_t.data):z.texSubImage3D(Ue,W,De,at,xt,ue,Me,Ie,on,lt,_t):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,De,at,ue,Me,on,lt,_t.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,De,at,_t.width,_t.height,on,_t.data):z.texSubImage2D(z.TEXTURE_2D,W,De,at,ue,Me,on,lt,_t);z.pixelStorei(z.UNPACK_ROW_LENGTH,oi),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kn),z.pixelStorei(z.UNPACK_SKIP_ROWS,_s),z.pixelStorei(z.UNPACK_SKIP_IMAGES,mn),W===0&&G.generateMipmaps&&z.generateMipmap(Ue),Ee.unbindTexture()},this.copyTextureToTexture3D=function(C,G,K=null,$=null,W=0){return C.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,C=arguments[2],G=arguments[3],W=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,G,K,$,W)},this.initRenderTarget=function(C){Te.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),Ee.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,Ee.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var ti=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new U,Jo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qs=class extends Qn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Us,yr=new U,Fs=new U,Ns=new U,Os=new Fe,xr=new Fe,Wd=new it,Eo=new U,_r=new U,To=new U,fd=new Fe,El=new Fe,pd=new Fe,Cr=class extends Kt{constructor(e=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cc(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Jo(n,3,0,!1)),Us.setAttribute("uv",new Jo(n,2,3,!1))}this.geometry=Us,this.material=e,this.center=new Fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Ns.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ao(Eo.set(-.5,-.5,0),Ns,o,Fs,s,r),Ao(_r.set(.5,-.5,0),Ns,o,Fs,s,r),Ao(To.set(.5,.5,0),Ns,o,Fs,s,r),fd.set(0,0),El.set(1,0),pd.set(1,1);let a=e.ray.intersectTriangle(Eo,_r,To,!1,yr);if(a===null&&(Ao(_r.set(-.5,.5,0),Ns,o,Fs,s,r),El.set(0,1),a=e.ray.intersectTriangle(Eo,To,_r,!1,yr),a===null))return;let l=e.ray.origin.distanceTo(yr);l<e.near||l>e.far||t.push({distance:l,point:yr.clone(),uv:Ni.getInterpolation(yr,Eo,_r,To,fd,El,pd,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ao(i,e,t,n,s,r){Os.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xr.x=r*Os.x-s*Os.y,xr.y=s*Os.x+r*Os.y):xr.copy(Os),i.copy(e),i.x+=xr.x,i.y+=xr.y,i.applyMatrix4(Wd)}var Hi=class extends en{constructor(e=null,t=1,n=1,s,r,o,a,l,c=yn,d=yn,h,u){super(null,o,a,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vi=class extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Pr=class extends Qn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},jo=new U,Qo=new U,md=new it,br=new Ar,Ro=new ls,Tl=new U,gd=new U,ea=class extends Kt{constructor(e=new Mt,t=new Pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)jo.fromBufferAttribute(t,s-1),Qo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=jo.distanceTo(Qo);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;md.copy(s).invert(),br.copy(e.ray).applyMatrix4(md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){let g=d.getX(v),y=d.getX(v+1),_=Co(this,e,br,l,g,y);_&&t.push(_)}if(this.isLineLoop){let v=d.getX(p-1),m=d.getX(f),g=Co(this,e,br,l,v,m);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){let g=Co(this,e,br,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){let v=Co(this,e,br,l,p-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Co(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(jo.fromBufferAttribute(o,s),Qo.fromBufferAttribute(o,r),t.distanceSqToSegment(jo,Qo,Tl,gd)>n)return;Tl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Tl);if(!(l<e.near||l>e.far))return{distance:l,point:gd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Pc=class extends Qn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vd=new it,Ic=new Ar,Po=new ls,Io=new U,ta=class extends Kt{constructor(e=new Mt,t=new Pc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;vd.copy(s).invert(),Ic.copy(e.ray).applyMatrix4(vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,v=f;p<v;p++){let m=c.getX(p);Io.fromBufferAttribute(h,m),yd(Io,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=u,v=f;p<v;p++)Io.fromBufferAttribute(h,p),yd(Io,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yd(i,e,t,n,s,r,o){let a=Ic.distanceSqToPoint(i);if(a<t){let l=new U;Ic.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gi=class extends en{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var na=class i extends Mt{constructor(e=[new Fe(0,-.5),new Fe(.5,0),new Fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/t,h=new U,u=new Fe,f=new U,p=new U,v=new U,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let y=0;y<=t;y++){let _=n+y*d*s,x=Math.sin(_),M=Math.cos(_);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*x,h.y=e[E].y,h.z=e[E].x*M,o.push(h.x,h.y,h.z),u.x=y/t,u.y=E/(e.length-1),a.push(u.x,u.y);let A=l[3*E+0]*x,R=l[3*E+1],w=l[3*E+0]*M;c.push(A,R,w)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let x=_+y*e.length,M=x,E=x+e.length,A=x+e.length+1,R=x+1;r.push(M,E,R),r.push(A,R,E)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var er=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,d=new Fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Hn=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],u=[],f=[],p=0,v=[],m=n/2,g=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function y(){let x=new U,M=new U,E=0,A=(t-e)/n;for(let R=0;R<=r;R++){let w=[],b=R/r,L=b*(t-e)+e;for(let B=0;B<=s;B++){let F=B/s,S=F*l+a,D=Math.sin(S),P=Math.cos(S);M.x=L*D,M.y=-b*n+m,M.z=L*P,h.push(M.x,M.y,M.z),x.set(D,A,P).normalize(),u.push(x.x,x.y,x.z),f.push(F,1-b),w.push(p++)}v.push(w)}for(let R=0;R<s;R++)for(let w=0;w<r;w++){let b=v[w][R],L=v[w+1][R],B=v[w+1][R+1],F=v[w][R+1];(e>0||w!==0)&&(d.push(b,L,F),E+=3),(t>0||w!==r-1)&&(d.push(L,B,F),E+=3)}c.addGroup(g,E,0),g+=E}function _(x){let M=p,E=new Fe,A=new U,R=0,w=x===!0?e:t,b=x===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),p++;let L=p;for(let B=0;B<=s;B++){let S=B/s*l+a,D=Math.cos(S),P=Math.sin(S);A.x=w*P,A.y=m*b,A.z=w*D,h.push(A.x,A.y,A.z),u.push(0,b,0),E.x=D*.5+.5,E.y=P*.5*b+.5,f.push(E.x,E.y),p++}for(let B=0;B<s;B++){let F=M+B,S=L+B;x===!0?d.push(S,S+1,F):d.push(S+1,S,F),R+=3}c.addGroup(g,R,x===!0?1:2),g+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ia=class i extends Hn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bn=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],h=new U,u=new U,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let y=[],_=g/n,x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let E=M/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+_*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(E+x,1-_),y.push(c++)}d.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let _=d[g][y+1],x=d[g][y],M=d[g+1][y],E=d[g+1][y+1];(g!==0||o>0)&&f.push(_,x,E),(g!==n-1||l<Math.PI)&&f.push(x,M,E)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sa=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],d=new U,h=new U,u=new U;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let v=p/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let v=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,y=(s+1)*f+p;o.push(v,m,y),o.push(m,g,y)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ni=class extends Qn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Lo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function P1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var tr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xu:r=e,a=2*t-n;break;case _u:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xu:o=e,l=2*n-t;break;case _u:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,y=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,_=(-1-f)*m+(1.5+f)*v+.5*p,x=f*m-f*v;for(let M=0;M!==a;++M)r[M]=g*o[d+M]+y*o[c+M]+_*o[l+M]+x*o[h+M];return r}},Dc=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(s-t),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}},kc=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case hc:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return hc;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&P1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Za,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,u=h-n,f=h+n;for(let p=0;p!==n;++p){let v=t[h+p];if(v!==t[u+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=hc;var cs=class extends Vn{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Oo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends Vn{};Uc.prototype.ValueTypeName="color";var Fc=class extends Vn{};Fc.prototype.ValueTypeName="number";var Nc=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)Et.slerpFlat(r,0,o,c-a,o,c,l);return r}},ra=class extends Vn{InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Vn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Oo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends Vn{};Oc.prototype.ValueTypeName="vector";var Bc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null}}},I1=new Bc,zc=class{constructor(e){this.manager=e!==void 0?e:I1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var oa=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Al=new it,xd=new U,_d=new U,Hc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Vc=class extends Hc{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},aa=class extends oa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var nr=class extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Qc="\\[\\]\\.:\\/",L1=new RegExp("["+Qc+"]","g"),eh="[^"+Qc+"]",D1="[^"+Qc.replace("\\.","")+"]",k1=/((?:WC+[\/:])*)/.source.replace("WC",eh),U1=/(WCOD+)?/.source.replace("WCOD",D1),F1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),N1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),O1=new RegExp("^"+k1+U1+F1+N1+"$"),B1=["material","materials","bones","map"],Gc=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L1,"")}static parseTrackName(e){let t=O1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);B1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Gc;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Xd(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}async function Kd(){let i=window.__SIMDATA,e="bundle";if(i)i.starsBytes=Xd(i.stars),i.milkywayBytes=i.milkyway?Xd(i.milkyway):null;else{if(location.protocol==="file:")throw new Error("data/data-bundle.js is missing. Run: node tools/build-data.mjs");e="files";let t=async(n,s)=>{let r=await fetch(`data/${n}`);if(!r.ok)throw new Error(`data/${n}: HTTP ${r.status}`);return s==="bin"?new Uint8Array(await r.arrayBuffer()):r.json()};i={manifest:await t("manifest.json"),names:await t("names.json"),galaxies:await t("galaxies.json"),exoplanets:await t("exoplanets.json"),ephemeris:await t("ephemeris.json")},i.starsBytes=await t("stars.bin","bin");try{i.milkywayBytes=await t("milkyway.bin","bin")}catch{i.milkywayBytes=null}}return z1(i,e)}function z1(i,e="node"){let t=i.starsBytes,n=Math.floor(t.length/24),s=new DataView(t.buffer,t.byteOffset,t.byteLength),r=new Float64Array(n*3),o=new Float32Array(n),a=new Float32Array(n),l=new Uint8Array(n),c=new Uint8Array(n),d=new Uint32Array(n);for(let p=0;p<n;p++){let v=p*24;r[p*3]=s.getFloat32(v,!0),r[p*3+1]=s.getFloat32(v+4,!0),r[p*3+2]=s.getFloat32(v+8,!0),o[p]=s.getInt16(v+12,!0)/1e3,a[p]=s.getUint16(v+14,!0),l[p]=s.getUint8(v+16),c[p]=s.getUint8(v+17),d[p]=s.getUint32(v+20,!0)}let h=null;if(i.milkywayBytes){let p=i.milkywayBytes,v=new DataView(p.buffer,p.byteOffset,32),m=v.getUint16(4,!0),g=v.getUint16(6,!0),y=new Uint16Array(p.buffer.slice(p.byteOffset+32,p.byteOffset+32+m*g*2)),_=new Uint16Array(p.buffer.slice(p.byteOffset+32+m*g*2,p.byteOffset+32+m*g*4));h={width:m,height:g,logMin:v.getFloat32(8,!0),logMax:v.getFloat32(12,!0),colMin:v.getFloat32(16,!0),colMax:v.getFloat32(20,!0),integratedV:v.getFloat32(24,!0),lum:y,col:_}}let u=new Map;for(let p of i.names.entries)u.set(p[0],{name:p[1],desig:p[2],sp:p[3],system:p[4],gj:p[5]});let f=new Map;for(let p of i.exoplanets.hosts)p.star>=0&&f.set(p.star,p);return{n,pos:r,absMag:o,teff:a,flags:l,lc:c,hip:d,names:u,hosts:f,galaxies:i.galaxies.galaxies,ephemeris:i.ephemeris,manifest:i.manifest,milkyWay:h,source:e}}var Je=Math.PI/180,th=1/3.261563777,Lr=3.261563777,st=3085677581491367e-2,Dr=94607304725808e-1,Xe=1495978707e-1;var ua=206264.80624709636,Tt={V:0,IV:1,III:2,II:3,I:4,WD:5,UNK:6};var H1=[[2400,-6.6],[2600,-4.9],[3e3,-3.2],[3500,-1.9],[4e3,-.95],[4500,-.55],[5e3,-.3],[5500,-.13],[5772,-.07],[6e3,-.05],[6500,-.01],[7e3,.01],[8e3,-.05],[9e3,-.2],[1e4,-.4],[15e3,-1.5],[2e4,-2.1],[3e4,-3],[4e4,-3.9],[5e4,-4.6]];function V1(i,e){if(e<=i[0][0])return i[0][1];let t=i.length;if(e>=i[t-1][0])return i[t-1][1];let n=0,s=t-1;for(;s-n>1;){let c=n+s>>1;i[c][0]<=e?n=c:s=c}let[r,o]=i[n],[a,l]=i[s];return o+(e-r)/(a-r)*(l-o)}function nh(i){return V1(H1,i)}function Yd(i,e){let t=i+nh(e);return Math.pow(10,-.4*(t-4.74))}function Zd(i,e){return Math.sqrt(i)/Math.pow(e/5772,2)}function Jd(i,e=Tt.V){return e===Tt.WD?.6:e===Tt.III||e===Tt.II?Math.min(5,Math.max(.8,1.3+.1*Math.log10(Math.max(i,1)))):e===Tt.I?Math.min(25,Math.max(5,6*Math.pow(Math.max(i,1)/1e4,.25))):i<.033?Math.pow(i/.23,1/2.3):i<16?Math.pow(i,1/4):i<1.4*Math.pow(2,3.5)*1e3?Math.pow(i/1.4,1/3.5):Math.pow(i/3200,1/1.1)*20}var ih=[[-.0548755604162154,-.873437090234885,-.4838350155487132],[.4941094278755837,-.4448296299600112,.746982244497219],[-.8676661490190047,-.1980763734312015,.4559837761750669]];var $d=23.43928*Je;function da(i){let e=Math.cos($d),t=Math.sin($d);return[i[0],e*i[1]-t*i[2],t*i[1]+e*i[2]]}function sh(i){return i.getTime()/864e5+24405875e-1}function jd(i){return new Date((i-24405875e-1)*864e5)}var sr=2451545;function us(i){let e=(u,f,p,v)=>{let m=(u-f)/(u<f?p:v);return Math.exp(-.5*m*m)},t=0,n=0,s=0,r=662607015e-42,o=299792458,a=1380649e-29;for(let u=380;u<=780;u+=5){let f=1.056*e(u,599.8,37.9,31)+.362*e(u,442,16,26.7)-.065*e(u,501.1,20.4,26.2),p=.821*e(u,568.8,46.9,40.5)+.286*e(u,530.9,16.3,31.1),v=1.217*e(u,437,11.8,36)+.681*e(u,459,26,13.8),m=u*1e-9,g=1/(m**5*(Math.exp(r*o/(m*a*i))-1));t+=f*g,n+=p*g,s+=v*g}t/=n,s/=n,n=1;let l=3.2406*t-1.5372*n-.4986*s,c=-.9689*t+1.8758*n+.0415*s,d=.0557*t-.204*n+1.057*s;l=Math.max(l,0),c=Math.max(c,0),d=Math.max(d,0);let h=.2126*l+.7152*c+.0722*d;return[l/h,c/h,d/h]}function W1(i,e){return e===Tt.WD?"D":i>=3e4?"O":i>=1e4?"B":i>=7500?"A":i>=6e3?"F":i>=5200?"G":i>=3900?"K":"M"}function Qd(i,e,t){let n=Yd(i,e),s=Zd(n,e);t===Tt.WD&&(s=.0125*Math.pow(.6/.6,-1/3)),s=Math.max(s,.005);let r=Jd(n,t),o=W1(e,t);return{lumSun:n,radiusSun:s,radiusKm:s*695700,massSun:r,gm:r*13271244004194e-2,teff:e,letter:o,lc:t,absMag:i,color:us(e)}}function fa(i,e,t){let n=e.heliopause;if(t&&n.knownAu&&n.knownAu[t]!=null)return n.knownAu[t]*Xe;let s=n.windScale,r,o=n.windSpeedKmS.default,a=i.radiusSun;i.lc===Tt.WD?r=s.whiteDwarf:i.lc===Tt.I?(r=s.supergiant*Math.pow(Math.max(i.lumSun,1)/1e4,.9),o=n.windSpeedKmS.giant*3):i.lc===Tt.III||i.lc===Tt.II?(r=s.giant*Math.pow(Math.max(i.lumSun,1)/100,.6)*(a/10)**.5,o=n.windSpeedKmS.giant):i.letter==="O"||i.letter==="B"?(r=s[i.letter]*Math.pow(Math.max(i.lumSun,1)/1e3,i.letter==="O"?1.7:1.4),o=n.windSpeedKmS.hot):i.letter==="A"?(r=s.A*a*a,o=n.windSpeedKmS.hot*.4):r=(s[i.letter]??1)*a*a;let l=Math.sqrt(Math.max(r,1e-9)*(o/n.windSpeedKmS.default));return Math.min(n.maxAu,Math.max(n.minAu,n.sunAu*l))*Xe}function pa(i,e,t=.3){return 278.5*Math.pow(i,.25)/Math.sqrt(e)*Math.pow(1-t,.25)}function kr(i,e){let t=Math.min(7200,Math.max(2600,e))-5780,n=(o,a,l,c,d)=>o+a*t+l*t*t+c*t**3+d*t**4,s=n(1.0512,13242e-8,15418e-12,-79895e-16,-18328e-19),r=n(.3438,58942e-9,16558e-13,-30045e-16,-52983e-20);return{inner:Math.sqrt(i/s),outer:Math.sqrt(i/r)}}var ds=4,ma=class{constructor(e,t){this.d=e,this.cfg=t,this.n=e.n,this.pos=e.pos,this.grid=new Map;for(let n=0;n<this.n;n++){let s=this._key(Math.floor(this.pos[n*3]/ds),Math.floor(this.pos[n*3+1]/ds),Math.floor(this.pos[n*3+2]/ds)),r=this.grid.get(s);r||this.grid.set(s,r=[]),r.push(n)}this._traits=new Map,this.sunIndex=0;for(let n=0;n<Math.min(this.n,4);n++)e.flags[n]&32&&(this.sunIndex=n)}_key(e,t,n){return`${e},${t},${n}`}within(e,t,n=[]){let s=Math.ceil(t/ds),r=Math.floor(e[0]/ds),o=Math.floor(e[1]/ds),a=Math.floor(e[2]/ds),l=t*t;for(let c=-s;c<=s;c++)for(let d=-s;d<=s;d++)for(let h=-s;h<=s;h++){let u=this.grid.get(this._key(r+c,o+d,a+h));if(u)for(let f of u){let p=this.pos[f*3]-e[0],v=this.pos[f*3+1]-e[1],m=this.pos[f*3+2]-e[2];p*p+v*v+m*m<=l&&n.push(f)}}return n}posOf(e){return[this.pos[e*3],this.pos[e*3+1],this.pos[e*3+2]]}distFromSun(e){return Math.hypot(this.pos[e*3],this.pos[e*3+1],this.pos[e*3+2])}traits(e){let t=this._traits.get(e);return t||(t=Qd(this.d.absMag[e],this.d.teff[e],this.d.lc[e]),this._traits.set(e,t)),t}info(e){return this.d.names.get(e)||null}isSun(e){return(this.d.flags[e]&32)!==0}hasKnownPlanets(e){return this.d.hosts.has(e)}host(e){return this.d.hosts.get(e)||null}search(e,t=60){if(e=e.toLowerCase().trim(),e.length<2)return[];if(!this._sIdx){this._sIdx=[];for(let[r,o]of this.d.names)this._sIdx.push([r,[o.name,o.desig,o.system,o.gj!=null?"gj "+o.gj:""].filter(Boolean).join("|").toLowerCase()])}let n=[],s=new Set;for(let[r,o]of this._sIdx)o.includes(e)&&(n.push(r),s.add(r));if(/^(hip\s*)?\d+$/.test(e)||"sol".startsWith(e)||"sun".startsWith(e)){let r=(e.match(/\d+/)||[""])[0];for(let o=0;o<this.n&&n.length<t*4;o++)s.has(o)||(r&&this.d.hip[o]&&String(this.d.hip[o]).startsWith(r)||this.isSun(o)&&("sol".startsWith(e)||"sun".startsWith(e)))&&n.push(o)}return n}designation(e){if(this.isSun(e))return"Sol";let t=this.info(e);return t&&t.desig?t.desig:this.d.hip[e]?`HIP ${this.d.hip[e]}`:`Star #${e}`}name(e){if(this.isSun(e))return"Sun";let t=this.info(e);return t&&t.name?t.name:this.designation(e)}apparentMag(e,t){let n=this.pos[e*3]-t[0],s=this.pos[e*3+1]-t[1],r=this.pos[e*3+2]-t[2],o=Math.max(Math.hypot(n,s,r),1e-7);return this.d.absMag[e]+5*Math.log10(o/10)}spectralText(e){let t=this.info(e);if(t&&t.sp){let s=/^(sd|d)?[OBAFGKM]\d?(\.\d)?\s?(Ia\+|Iab|Ia|Ib|III|II|IV|V|VI|I)?[a-z]*/.exec(t.sp);if(s&&s[0].length>=2&&!/\.\.\./.test(s[0]))return s[0]}let n=this.traits(e);return n.letter+(n.lc===Tt.III?" giant":n.lc===Tt.I?" supergiant":n.lc===Tt.WD?" white dwarf":" dwarf")}systemsNear(e,t,n){let s=n*3/ua,r=this.within(e,t+s),o=n/ua,a=o*o,l=new Map(r.map(u=>[u,u])),c=u=>{for(;l.get(u)!==u;)l.set(u,l.get(l.get(u))),u=l.get(u);return u};for(let u=0;u<r.length;u++){let f=r[u];for(let p=u+1;p<r.length;p++){let v=r[p],m=this.pos[f*3]-this.pos[v*3],g=this.pos[f*3+1]-this.pos[v*3+1],y=this.pos[f*3+2]-this.pos[v*3+2];m*m+g*g+y*y<a&&l.set(c(f),c(v))}}let d=new Map;for(let u of r){let f=c(u),p=d.get(f);p||d.set(f,p=[]),p.push(u)}let h=[];for(let u of d.values()){u.sort((m,g)=>this.traits(g).lumSun-this.traits(m).lumSun||m-g);let f=u[0],p=this.posOf(f),v=Math.hypot(p[0]-e[0],p[1]-e[1],p[2]-e[2]);v>t||h.push({key:Math.min(...u),members:u,primary:f,name:this.systemName(u),distPc:v,centre:p})}return h.sort((u,f)=>u.distPc-f.distPc),h}systemName(e){for(let s of e){let r=this.info(s);if(r&&r.system)return r.system}let t=e[0],n=this.name(t);return e.length>1&&(n=n.replace(/\s+[AB]$/,"")),n}systemOf(e,t){let n=this.posOf(e);return this.systemsNear(n,t*2/ua+1e-6,t).find(r=>r.members.includes(e))||{key:e,members:[e],primary:e,name:this.name(e),distPc:0,centre:n}}heliopauseKm(e){let t=this.traits(e);return fa(t,this.cfg,this.name(e))}};var $t=Math.PI*2,Ce=(i,e,t)=>i<e?e:i>t?t:i;var wn=(i,e,t)=>{let n=Ce((t-i)/(e-i),0,1);return n*n*(3-2*n)};var ef=(i,e)=>(i%e+e)%e;var Ur=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],an=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Ut=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],ln=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],cn=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],et=i=>Math.hypot(i[0],i[1],i[2]),vt=i=>{let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]},Fr=(i,e,t)=>[i[0]+e[0]*t,i[1]+e[1]*t,i[2]+e[2]*t];function si(i){let e=Math.abs(i[0])<.9?[1,0,0]:[0,1,0];return vt(cn(i,e))}function Nr(i,e,t){let n=Math.cos(t),s=Math.sin(t),r=ln(e,i)*(1-n),o=cn(e,i);return[i[0]*n+o[0]*s+e[0]*r,i[1]*n+o[1]*s+e[1]*r,i[2]*n+o[2]*s+e[2]*r]}var rr=(i,e)=>{let t=new Array(9);for(let n=0;n<3;n++)for(let s=0;s<3;s++)t[n*3+s]=i[n*3]*e[s]+i[n*3+1]*e[3+s]+i[n*3+2]*e[6+s];return t},ga=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]],rh=i=>{let e=Math.cos(i),t=Math.sin(i);return[1,0,0,0,e,-t,0,t,e]},Or=i=>{let e=Math.cos(i),t=Math.sin(i);return[e,-t,0,t,e,0,0,0,1]};function Mi(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e>>>0}function hn(i,e){let t=(i^2654435769)>>>0;return t=Math.imul(t^e+2135587861,2246822507)>>>0,t^=t>>>13,t=Math.imul(t,3266489909)>>>0,t^=t>>>16,t>>>0}function un(i){let e=i>>>0,t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t.normal=()=>{let n=0,s=0;for(;n===0;)n=t();return s=t(),Math.sqrt(-2*Math.log(n))*Math.cos($t*s)},t.logUniform=(n,s)=>Math.exp(Math.log(n)+(Math.log(s)-Math.log(n))*t()),t.weighted=n=>{let s=0;for(let[,o]of n)s+=o;let r=t()*s;for(let[o,a]of n)if(r-=a,r<=0)return o;return n[n.length-1][0]},t}function At(i){let e=Math.abs(i);return e<1?`${(i*1e3).toFixed(e<.01?1:0)} m`:e<1e5?`${i.toFixed(e<100?1:0)} km`:e<149597870*.2?`${(i/1e6).toFixed(2)} M km`:e<94607e8*.1?`${(i/149597870).toFixed(e/149597870<10?2:1)} AU`:`${(i/94607304725808e-1).toFixed(e/946e10<10?3:2)} ly`}function va(i){let e=299792.458,t=Math.abs(i);return t<.01?`${(i*1e3).toFixed(1)} m/s`:t<1e3?`${i.toFixed(t<10?2:1)} km/s`:t/e<1?`${Math.round(i).toLocaleString("en-US")} km/s`:`${(t/e).toLocaleString("en-US",{maximumFractionDigits:t/e<10?2:0})} c`}function ya(i){if(!isFinite(i))return"\u2014";let e=Math.abs(i);return e<90?`${e.toFixed(0)} s`:e<5400?`${Math.floor(e/60)} m ${String(Math.floor(e%60)).padStart(2,"0")} s`:e<172800?`${Math.floor(e/3600)} h ${String(Math.floor(e%3600/60)).padStart(2,"0")} m`:e<86400*400?`${(e/86400).toFixed(1)} d`:`${(e/31557600).toFixed(2)} y`}var q1=9.80665,Sn=class{constructor(e){Object.assign(this,{children:[],pole:[0,0,1],albedo:.3,fictional:!1,rings:null,atmosphere:null,look:null,info:""},e),this._jd=NaN,this._p=[0,0,0],this._vjd=NaN,this._v=[0,0,0],this._tmp=[0,0,0],e.parent&&e.parent.children.push(this),this.gravityMs2=this.gm?this.gm*1e9/(this.radiusKm*1e3)**2:0,this._spinAng=null}get isStar(){return this.kind==="star"}positionAt(e){if(this._jd===e)return this._p;let t=this._p;if(this.orbit){if(this.orbit.positionAt(e,t),this.parent){let n=this.parent.positionAt(e);t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}}else this.fixed?(t[0]=this.fixed[0],t[1]=this.fixed[1],t[2]=this.fixed[2]):t[0]=t[1]=t[2]=0;return this._jd=e,t}velocityAt(e){if(this._vjd===e)return this._v;let t=this._v;if(this.orbit){if(this.orbit.velocityAt(e,t),this.parent){let n=this.parent.velocityAt(e);t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}}else t[0]=t[1]=t[2]=0;return this._vjd=e,t}localAt(e,t=[0,0,0]){return this.orbit?this.orbit.positionAt(e,t):t[0]=t[1]=t[2]=0,t}get semiMajorKm(){return this.orbit&&this.orbit.a?this.orbit.a:0}get soiKm(){if(this._soi!==void 0)return this._soi;let e=1/0;return this.parent&&this.parent.gm&&this.gm&&this.semiMajorKm&&(e=this.semiMajorKm*Math.pow(this.gm/this.parent.gm,.4)),this.kind==="star"&&(e=1/0),this._soi=e,e}get hillKm(){return this.parent&&this.parent.gm&&this.semiMajorKm?this.semiMajorKm*Math.cbrt(this.gm/(3*this.parent.gm)):1/0}safeRadiusKm(e){if(this._safe!==void 0)return this._safe;let t=e.ship.safeOrbit,n;if(this.kind==="star")n=this.radiusKm*Math.max(t.starMinRadii,1+t.baseFraction);else{let s=this.gravityMs2/q1,r=Math.max(t.minAltitudeKm,this.radiusKm*(t.baseFraction+t.gravityLogFactor*Math.log(1+s)));if(n=this.radiusKm+r,this.rings){let o=Math.max(...this.rings.map(a=>a.r1));n=Math.max(n,this.radiusKm*1+r)}}return this._safe=n,n}axesAt(e){let t=this.pole,n;if(this.spin&&this.spin.sync&&this.parent){let r=this.localAt(e,this._tmp),o=vt(r),a=ln(o,t);n=vt([-(o[0]-t[0]*a),-(o[1]-t[1]*a),-(o[2]-t[2]*a)]),isFinite(n[0])||(n=si(t))}else{let r=[-t[1],t[0],0],o=Math.hypot(r[0],r[1]);r=o>1e-9?[r[0]/o,r[1]/o,0]:[1,0,0];let a=this.spinAngle(e);n=Nr(r,t,a)}let s=cn(t,n);return{x:n,y:s,z:t}}spinAngle(e){if(this.spinOverride!==void 0)return this.spinOverride;let t=this.spin;return t?(t.w0+t.rateDegDay*(e-2451545))*Je:0}},or=class{constructor(e){Object.assign(this,{bodies:[],byId:new Map,stars:[],belts:[],fictional:!1,kind:"procedural"},e)}add(e){return e.system=this,this.bodies.push(e),this.byId.set(e.id,e),e.kind==="star"&&this.stars.push(e),e.kind==="belt"&&this.belts.push(e),e}get(e){return this.byId.get(e)||null}get primary(){return this.stars[0]}get targets(){return this.bodies.filter(e=>e.kind!=="belt")}lightSources(e,t){let n=[];for(let s of this.stars){let r=s.positionAt(t),o=r[0]-e[0],a=r[1]-e[1],l=r[2]-e[2],c=Math.hypot(o,a,l)||1,d=c/Xe;n.push({star:s,dir:[o/c,a/c,l/c],dist:c,irradiance:s.lumSun/(d*d)})}return n}};function tf(i,e){let t=i*Je,n=e*Je;return[Math.cos(n)*Math.cos(t),Math.cos(n)*Math.sin(t),Math.sin(n)]}function oh(i,e){i=ef(i+Math.PI,$t)-Math.PI;let t=e<.8?i+e*Math.sin(i):Math.PI*Math.sign(i||1);for(let n=0;n<30;n++){let s=t-e*Math.sin(t)-i,r=1-e*Math.cos(t),o=s/r;if(t-=o,Math.abs(o)<1e-13)break}return t}var qi=class{constructor(e){this.a=e.a,this.e=e.e,this.inc=e.inc*Je,this.node=e.node*Je,this.argp=e.argp*Je,this.M0=e.M0*Je,this.epochJD=e.epochJD,this.n=e.nDegPerDay*Je/86400,this.frame=e.frame||"icrs",this.R=rr(Or(this.node),rr(rh(this.inc),Or(this.argp))),e.plane&&(this.R=rr(e.plane,this.R)),this.periodSec=$t/Math.abs(this.n),this.retro=this.n<0}positionAt(e,t){let n=this.M0+this.n*(e-this.epochJD)*86400,s=oh(n,this.e),r=Math.cos(s),o=Math.sin(s),a=this.a*Math.sqrt(1-this.e*this.e),l=ga(this.R,[this.a*(r-this.e),a*o,0]);return this.frame==="ecliptic"&&(l=da(l)),t[0]=l[0],t[1]=l[1],t[2]=l[2],t}velocityAt(e,t){let n=this.M0+this.n*(e-this.epochJD)*86400,s=oh(n,this.e),r=Math.cos(s),o=Math.sin(s),a=this.n/(1-this.e*r),l=this.a*Math.sqrt(1-this.e*this.e),c=ga(this.R,[-this.a*o*a,l*r*a,0]);return this.frame==="ecliptic"&&(c=da(c)),t[0]=c[0],t[1]=c[1],t[2]=c[2],t}},xa=class{constructor(e,t){this.t1=e.table1[t],this.t2=e.table2a&&e.table2a[t],this.t2b=e.table2b&&e.table2b[t],this.key=t,this.periodSec=0,this.a=this.t1.a[0]*Xe,this._setPeriod()}_setPeriod(){this.periodSec=36525*360/Math.abs(this.t1.L[1])*86400}_elements(e){let t=(e-sr)/36525,n=e>23784965e-1&&e<24698075e-1,s=n||!this.t2?this.t1:this.t2,r=a=>s[a][0]+s[a][1]*t,o=r("L")-r("varpi");if(!n&&this.t2b){let{b:a,c:l,s:c,f:d}=this.t2b;o+=a*t*t+l*Math.cos(d*Je*t)+c*Math.sin(d*Je*t)}return{a:r("a")*Xe,e:r("e"),I:r("I")*Je,Om:r("Omega")*Je,w:(r("varpi")-r("Omega"))*Je,M:o*Je}}positionAt(e,t){let n=this._elements(e),s=oh(n.M,n.e),r=n.a*(Math.cos(s)-n.e),o=n.a*Math.sqrt(1-n.e*n.e)*Math.sin(s),a=rr(Or(n.Om),rr(rh(n.I),Or(n.w))),l=da(ga(a,[r,o,0]));return t[0]=l[0],t[1]=l[1],t[2]=l[2],t}velocityAt(e,t){let n=.041666666666666664,s=[0,0,0],r=[0,0,0];this.positionAt(e-n,s),this.positionAt(e+n,r);let o=2*n*86400;return t[0]=(r[0]-s[0])/o,t[1]=(r[1]-s[1])/o,t[2]=(r[2]-s[2])/o,t}};var le=(i,e,t)=>[i/255,e/255,t/255],X1={hKm:8.5,topKm:100,rayleigh:[.0058,.0135,.0331],mie:.003,mieG:.76,mieH:1.8,tint:[1,1,1],strength:1},nf={sun:{look:{kind:"star",tex:"sun"},info:"G2V star \xB7 5772 K"},mercury:{look:{kind:"tex",tex:"mercury",bump:.35,crater:.9,spec:.05},info:"Real global map (Solar System Scope / NASA)"},venus:{look:{kind:"tex",tex:"venus_atmosphere",bump:0,spec:0},atmosphere:{hKm:15,topKm:70,rayleigh:[.001,.0018,.0035],mie:.06,mieG:.4,mieH:12,tint:[1,.92,.72],strength:1.6,opaque:!0},info:"Cloud-top map; the surface is hidden under ~70 km of cloud"},earth:{look:{kind:"tex",tex:"earth_daymap",night:"earth_nightmap",clouds:"earth_clouds",ocean:!0,bump:.15,spec:.55},atmosphere:{...X1},info:"Real global maps; day/night follows the actual date"},moon:{look:{kind:"tex",tex:"moon",bump:.45,crater:1,spec:0},info:"Real global map"},mars:{look:{kind:"tex",tex:"mars",bump:.35,crater:.6,spec:0},atmosphere:{hKm:11,topKm:80,rayleigh:[2e-5,4e-5,9e-5],mie:14e-5,mieG:.7,mieH:11,tint:[1,.72,.5],strength:1},info:"Real global map"},jupiter:{look:{kind:"tex",tex:"jupiter",gas:!0,spec:0},atmosphere:{hKm:27,topKm:280,rayleigh:[.0026,.0048,.0095],mie:5e-4,mieG:.5,mieH:25,tint:[1,.95,.85],strength:.9},info:"Real global map"},saturn:{look:{kind:"tex",tex:"saturn",gas:!0,spec:0,ring:"saturn_ring_alpha"},atmosphere:{hKm:60,topKm:500,rayleigh:[.002,.0038,.0075],mie:4e-4,mieG:.5,mieH:50,tint:[1,.92,.75],strength:.9},info:"Real global map; rings from published boundaries + Cassini-era profile"},uranus:{look:{kind:"tex",tex:"uranus",gas:!0,spec:0},atmosphere:{hKm:27,topKm:300,rayleigh:[.005,.0032,.002],mie:5e-4,mieG:.5,mieH:25,tint:[.7,.95,1],strength:1},info:"Real global map"},neptune:{look:{kind:"tex",tex:"neptune",gas:!0,spec:0},atmosphere:{hKm:20,topKm:280,rayleigh:[.0025,.0038,.006],mie:5e-4,mieG:.5,mieH:20,tint:[.55,.75,1],strength:1.2},info:"Real global map"},ceres:{look:{kind:"proc",style:"rock",colors:[le(92,88,84),le(124,120,114),le(190,188,182),le(60,58,56)],p:{crater:.9,bump:.7,spot:.15}},info:"Procedural surface (no global map)"},pluto:{look:{kind:"proc",style:"pluto",colors:[le(150,104,76),le(205,170,140),le(240,228,215),le(92,60,46)],p:{crater:.3,bump:.35,ice:.5}},atmosphere:{hKm:50,topKm:250,rayleigh:[3e-6,5e-6,12e-6],mie:4e-5,mieG:.8,mieH:50,tint:[.7,.8,1],strength:1},info:"Procedural surface in Pluto-like colours (no global map)"},haumea:{look:{kind:"proc",style:"ice",colors:[le(200,205,210),le(235,238,240),le(120,90,80),le(170,175,185)],p:{crater:.2,bump:.2,ice:.9}},info:"Procedural surface"},makemake:{look:{kind:"proc",style:"rock",colors:[le(160,90,62),le(196,130,96),le(226,190,160),le(110,60,44)],p:{crater:.15,bump:.25,ice:.3}},info:"Procedural surface"},eris:{look:{kind:"proc",style:"ice",colors:[le(225,228,232),le(246,247,248),le(200,195,190),le(180,186,195)],p:{crater:.1,bump:.1,ice:1}},info:"Procedural surface"},phobos:{look:{kind:"proc",style:"rock",colors:[le(78,72,68),le(104,96,90),le(130,120,112),le(50,46,44)],p:{crater:1,bump:1}},info:"Procedural surface"},deimos:{look:{kind:"proc",style:"rock",colors:[le(92,84,76),le(120,110,100),le(146,136,124),le(64,58,52)],p:{crater:.6,bump:.8}},info:"Procedural surface"},io:{look:{kind:"proc",style:"io",colors:[le(196,180,112),le(226,216,168),le(184,98,50),le(36,32,30)],p:{crater:0,bump:.25,spot:.9}},info:"Procedural surface in Io colours (sulfur plains, dark calderas)"},europa:{look:{kind:"proc",style:"europa",colors:[le(226,220,205),le(246,244,238),le(150,100,72),le(196,180,150)],p:{crater:.03,bump:.12,ice:1,stripe:.9}},info:"Procedural surface (ice shell with reddish linea)"},ganymede:{look:{kind:"proc",style:"ganymede",colors:[le(104,94,84),le(150,142,132),le(210,208,202),le(70,64,58)],p:{crater:.7,bump:.55,ice:.6,stripe:.4}},info:"Procedural surface (dark ancient terrain + bright grooved terrain)"},callisto:{look:{kind:"proc",style:"rock",colors:[le(70,60,52),le(98,86,74),le(190,188,184),le(44,38,34)],p:{crater:1,bump:.8,ice:.15}},info:"Procedural surface (saturated cratering)"},mimas:{look:{kind:"proc",style:"ice",colors:[le(150,152,154),le(182,184,186),le(208,210,212),le(110,112,114)],p:{crater:1,bump:.8,bigCrater:1}},info:"Procedural surface (with a Herschel-like giant crater)"},enceladus:{look:{kind:"proc",style:"ice",colors:[le(238,242,246),le(252,253,254),le(214,224,236),le(190,205,222)],p:{crater:.25,bump:.2,ice:1,stripe:.6}},info:"Procedural surface (very bright ice)"},tethys:{look:{kind:"proc",style:"ice",colors:[le(190,192,194),le(220,222,224),le(238,240,242),le(150,152,154)],p:{crater:.8,bump:.6}},info:"Procedural surface"},dione:{look:{kind:"proc",style:"ice",colors:[le(184,186,188),le(214,216,218),le(236,238,240),le(140,142,144)],p:{crater:.7,bump:.55,stripe:.3}},info:"Procedural surface"},rhea:{look:{kind:"proc",style:"ice",colors:[le(176,178,180),le(206,208,210),le(230,232,234),le(130,132,134)],p:{crater:.95,bump:.7}},info:"Procedural surface"},iapetus:{look:{kind:"proc",style:"iapetus",colors:[le(38,30,26),le(70,60,54),le(226,226,224),le(190,190,188)],p:{crater:.8,bump:.6}},info:"Procedural surface (two-tone: dark leading hemisphere)"},titan:{look:{kind:"proc",style:"haze",colors:[le(196,128,52),le(220,160,78),le(168,100,40),le(120,70,30)],p:{bump:0,bands:.15}},atmosphere:{hKm:40,topKm:400,rayleigh:[.003,.006,.014],mie:.04,mieG:.55,mieH:45,tint:[1,.62,.22],strength:1.5,opaque:!0},info:"Thick orange haze (surface not visible), procedural shading"},miranda:{look:{kind:"proc",style:"ice",colors:[le(150,150,152),le(180,180,182),le(206,206,208),le(104,104,106)],p:{crater:.6,bump:.9,stripe:.5}},info:"Procedural surface"},ariel:{look:{kind:"proc",style:"ice",colors:[le(160,160,160),le(190,190,190),le(214,214,214),le(120,120,120)],p:{crater:.5,bump:.6,stripe:.5}},info:"Procedural surface"},umbriel:{look:{kind:"proc",style:"rock",colors:[le(78,78,80),le(98,98,100),le(150,150,152),le(54,54,56)],p:{crater:.9,bump:.6}},info:"Procedural surface"},titania:{look:{kind:"proc",style:"ice",colors:[le(128,120,112),le(158,150,142),le(190,184,176),le(92,86,80)],p:{crater:.7,bump:.6,stripe:.25}},info:"Procedural surface"},oberon:{look:{kind:"proc",style:"rock",colors:[le(112,102,96),le(140,130,122),le(186,178,170),le(78,70,66)],p:{crater:.9,bump:.7}},info:"Procedural surface"},triton:{look:{kind:"proc",style:"triton",colors:[le(214,186,170),le(238,220,206),le(246,238,232),le(150,118,104)],p:{crater:.1,bump:.3,ice:.7}},atmosphere:{hKm:8,topKm:800,rayleigh:[1e-6,2e-6,5e-6],mie:3e-6,mieG:.8,mieH:10,tint:[.8,.85,1],strength:.6},info:"Procedural surface (pink-cream nitrogen frost)"},proteus:{look:{kind:"proc",style:"rock",colors:[le(70,68,66),le(92,90,88),le(120,118,114),le(46,44,42)],p:{crater:1,bump:.9}},info:"Procedural surface"},charon:{look:{kind:"proc",style:"charon",colors:[le(150,146,142),le(184,180,176),le(120,70,56),le(210,208,204)],p:{crater:.4,bump:.4}},info:"Procedural surface (grey with a reddish polar cap)"}};function rf(i,e,t){let n=new or({id:"sol",name:"Solar System",kind:"solar",fictional:!1,originPc:[0,0,0],starIndices:[i.sunIndex]}),s=new Map;for(let a of e.bodies){let l=nf[a.id]||{},c={id:a.id,name:a.name,kind:a.kind,radiusKm:a.R,gm:a.GM,albedo:a.albedo??l.albedo??.3,pole:tf(a.pole[0],a.pole[1]),look:l.look||null,atmosphere:l.atmosphere||null,rings:a.rings?a.rings.map(f=>({r0:f.r0,r1:f.r1,tau:f.tau,name:f.name})):null,info:l.info||"",source:"NASA/JPL",dataSrc:a.src};if(a.rings&&(c.rings=a.rings.map(f=>({r0:f.r0,r1:f.r1,tau:f.tau,name:f.name}))),a.id==="sun"){let f=new Sn({...c,kind:"star",teff:5772,lumSun:1,lumV:1,absMagV:4.83,massSun:1,letter:"G",lc:0,color:[1.04,.98,.9],fixed:[0,0,0],traits:null,spin:sf(a),limb:.6,surfaceRadiance:Math.pow(10,-12.628)*Math.pow(30856775814913675e-2/a.R,2)});n.add(f),s.set("sun",f);continue}let d=a.parent==="sun"?s.get("sun"):s.get(a.parent);if(!d){console.warn("missing parent for",a.id);continue}let h;a.orbit.type==="jpl-mean"?h=new xa(e.elements,a.orbit.key):h=new qi({a:a.orbit.a,e:a.orbit.e,inc:a.orbit.i,node:a.orbit.node,argp:a.orbit.argp,M0:a.orbit.M,epochJD:a.orbit.epochJD,nDegPerDay:a.orbit.nDegPerDay,frame:"ecliptic"});let u=new Sn({...c,parent:d,orbit:h,spin:a.synchronous?{sync:!0}:sf(a),synchronous:!!a.synchronous});n.add(u),s.set(a.id,u)}let r={star:0,planet:1,dwarf:2,moon:3};n.bodies.sort((a,l)=>r[a.kind]-r[l.kind]||(a.orbit?.a??0)-(l.orbit?.a??0)),n.add(new Sn({id:"asteroid-belt",name:"Main asteroid belt",kind:"belt",parent:s.get("sun"),radiusKm:1,belt:{innerAu:2.1,outerAu:3.3,peakAu:2.7,thicknessAu:.35,count:26e3,tint:[.62,.56,.5],note:"representative particles, not individual catalogued asteroids"},info:"Representative belt"})),n.add(new Sn({id:"kuiper-belt",name:"Kuiper belt",kind:"belt",parent:s.get("sun"),radiusKm:1,belt:{innerAu:38,outerAu:52,peakAu:43,thicknessAu:5,count:18e3,tint:[.55,.5,.48],note:"representative particles, not individual catalogued objects"},info:"Representative belt"}));let o=s.get("sun");return o.lumSun=1,o.massSun=1,o.traitsLike={teff:5772,lumSun:1,radiusKm:o.radiusKm,letter:"G",massSun:1,lc:0},n.hz={inner:.95,outer:1.67},n.frostAu=2.7,n}function sf(i){if(i.w)return{w0:i.w[0],rateDegDay:i.w[1]};let e=i.rotH?i.rotH:24;return{w0:0,rateDegDay:360/Math.abs(e)*24*Math.sign(e)}}var ah=398600.435436,fs=6371;var de=(i,e,t)=>[i/255,e/255,t/255];function ba(i){if(i<2.04)return Math.pow(i,.279);let e=.808*Math.pow(i,.589),t=11.2*Math.pow(i/318,-.04);return Math.min(e,t)}function af(i){return i<1.2?Math.pow(i,1/.279):i<8?Math.pow(i/.808,1/.589):318*Math.pow(Math.max(i,8)/11.2,1.5)}function lf(i,e){return e>=8||i>=100?"gas":e>=3.2||i>=17?"ice":e>=1.7||i>=5.5?"subneptune":i<.02?"dwarf":"rocky"}var _a={desert:[de(176,138,96),de(210,178,128),de(236,214,170),de(120,88,62)],rust:[de(150,82,52),de(190,112,72),de(224,160,116),de(96,52,36)],grey:[de(104,100,96),de(140,136,130),de(176,172,166),de(66,64,62)],basalt:[de(58,52,50),de(86,78,74),de(124,112,104),de(32,28,28)],olive:[de(98,96,62),de(132,126,84),de(170,160,112),de(64,62,40)],violet:[de(92,78,96),de(126,108,130),de(166,148,168),de(58,48,62)],ice:[de(206,220,232),de(236,244,250),de(255,255,255),de(150,176,204)],lava:[de(38,28,26),de(66,44,38),de(150,56,20),de(255,140,40)],venus:[de(210,170,110),de(232,204,150),de(246,232,190),de(180,130,80)]};function lh(i,e){let t=un(hn(e.seed,24301)),n={look:null,atmosphere:null,rings:null,label:""},s=e.teq,r=t()*100;if(i==="gas"||i==="ice"){let p,v,m,g,y,_=!1;i==="gas"?s>1500?(p=[de(40,30,40),de(110,50,70),de(190,80,60),de(30,22,34)],v="ultra-hot gas giant",m=[1,.5,.4],g=.25,y=.5):s>900?(p=[de(30,34,52),de(52,62,96),de(86,100,150),de(20,24,36)],v="hot gas giant",m=[.5,.65,1],g=.3,y=.45):s>400?(p=K1(t,[[182,150,120],[222,196,160],[140,110,90],[244,232,210]]),v="warm gas giant",m=[.9,.9,1],g=.6,y=.6):s>160?(p=t()<.5?[de(176,130,96),de(222,190,150),de(120,86,66),de(242,228,206)]:[de(190,160,120),de(226,204,164),de(150,122,92),de(246,238,216)],v="cool gas giant",m=[1,.95,.85],g=.85,y=.7):(p=[de(196,176,136),de(224,208,170),de(168,148,116),de(240,232,208)],v="cold gas giant",m=[1,.93,.78],g=.55,y=.4):(p=s>400?[de(70,110,170),de(100,150,205),de(150,190,230),de(50,80,130)]:t()<.5?[de(120,190,205),de(160,218,228),de(196,238,244),de(90,150,170)]:[de(50,80,190),de(70,110,215),de(120,156,235),de(36,56,140)],v="ice giant",m=[.7,.85,1],g=.18,y=.35),n.look={kind:"proc",style:"gas",colors:p,p:{bands:g,turb:y,spot:t()<.5?.8:.2,seed:r}},n.atmosphere={hKm:24+t()*40,topKm:300,rayleigh:[Math.max(.002,.006*(1.1-m[0]*.6)),.0045,.0065*(.5+m[2]*.7)],mie:5e-4,mieG:.5,mieH:25,tint:m,strength:1},n.label=v;let x=e.ringChance??.18;return t()<x&&s<900&&(n.rings=$1(t,i)),n}let o=s>700,a=s>330,l=s>235,c=s>120,d=e.mE>3.5||e.mE>.55&&t()<.4;if(i==="subneptune"){let p=o?[de(120,90,80),de(170,130,110),de(210,180,160),de(80,60,56)]:t()<.5?[de(170,190,200),de(200,216,224),de(226,236,240),de(130,154,168)]:[de(190,176,150),de(220,206,180),de(238,228,206),de(150,136,112)];return n.look={kind:"proc",style:"gas",colors:p,p:{bands:.12,turb:.3,spot:.1,seed:r}},n.atmosphere={hKm:30,topKm:220,rayleigh:[.0025,.0045,.008],mie:.001,mieG:.5,mieH:20,tint:[.9,.95,1],strength:1},n.label=o?"hot sub-Neptune":"sub-Neptune / mini-Neptune",n}if(i==="dwarf")return n.look={kind:"proc",style:t()<.5?"rock":"ice",colors:of(_a[c?t()<.5?"ice":"rust":"grey"],t),p:{crater:.4+t()*.4,bump:.5,ice:c?.8:.1}},n.label=c?"icy dwarf planet":"rocky dwarf planet",n;if(o&&s>1200)return n.look={kind:"proc",style:"lava",colors:_a.lava,p:{crater:.1,bump:.5,lava:1,seed:r}},n.label="molten lava world",d&&(n.atmosphere={hKm:12,topKm:60,rayleigh:[.003,.003,.004],mie:.01,mieG:.6,mieH:10,tint:[1,.55,.3],strength:.6}),n;if(e.inHz&&e.mE>.4&&e.mE<4&&t()<.62){let p=.45+t()*.4;return n.look={kind:"proc",style:"ocean",colors:[de(18,52,110),de(54,110,66),de(160,138,96),de(240,244,248)],p:{ocean:p,cloud:.45+t()*.3,ice:.25+t()*.4,bump:.15,seed:r,spec:.6}},n.atmosphere={hKm:8.5,topKm:100,rayleigh:[.0058,.0135,.0331],mie:.003,mieG:.76,mieH:1.8,tint:[1,1,1],strength:1},n.label="temperate ocean-continent world",n}let h;o?h=t()<.6?"basalt":"venus":a?h=t()<.5?"venus":"desert":l?h="desert":c?h=t()<.55?"rust":"grey":h="ice",!o&&!c&&t()<.3&&(h=["olive","violet","grey","rust"][Math.floor(t()*4)]);let u=of(_a[h],t);if(d&&a&&e.mE>.5&&(h==="venus"||t()<.4))return n.look={kind:"proc",style:"gas",colors:_a.venus,p:{bands:.1,turb:.5,spot:0,seed:r}},n.atmosphere={hKm:15,topKm:70,rayleigh:[.001,.0018,.0035],mie:.06,mieG:.4,mieH:12,tint:[1,.92,.72],strength:1.5,opaque:!0},n.label="cloud-wrapped greenhouse world",n;if(n.look={kind:"proc",style:h==="ice"?"ice":"rock",colors:u,p:{crater:d?.35:.8,bump:d?.5:.8,ice:h==="ice"?.9:c?.35:0,seed:r}},d&&e.mE>.25){let p=Ce(e.mE/1.5,.15,1.6);n.atmosphere={hKm:9,topKm:90,rayleigh:[.0058*p,.0135*p,.0331*p],mie:.002*p,mieG:.7,mieH:3,tint:h==="rust"?[1,.75,.55]:[1,1,1],strength:.8}}return n.label={desert:"arid desert world",rust:"cold rust-red world",grey:"airless rocky world",basalt:"scorched basalt world",olive:"olive-grey rocky world",violet:"violet-grey rocky world",ice:"frozen ice world",venus:"hot dry world"}[h]+(n.atmosphere?" with atmosphere":""),n}function K1(i,e){return e.map(([t,n,s])=>de(Ce(t+(i()-.5)*36,0,255),Ce(n+(i()-.5)*30,0,255),Ce(s+(i()-.5)*30,0,255)))}function of(i,e){let t=.9+e()*.2,n=(e()-.5)*.06,s=(e()-.5)*.06;return i.map(([r,o,a])=>[Ce(r*t+n,0,1),Ce(o*t,0,1),Ce(a*t+s,0,1)])}function $1(i,e){let t=1.35+i()*.5,n=t+.35+i()*.9,s=i()<.4;return[{r0:t,r1:t+(n-t)*.35,tau:.15+i()*.2,relative:!0},{r0:t+(n-t)*.4,r1:n,tau:s?.1:.6+i()*.5,relative:!0}]}var Y1=66743e-24,Z1=317.83;function J1(i,e,t,n,s){let r=t.letter==="M"?.12:t.letter==="K"?.6:1,o=t.lc===Tt.WD,a=[];return i<.5?(a.push(["rocky",.62],["subneptune",s?.38:.26]),!s&&(t.letter==="G"||t.letter==="F")&&i>.04&&a.push(["gas",.03])):i<1.6?a.push(["rocky",.34],["subneptune",.28],["gas",.3*n.gasGiantChanceBeyondFrost*r],["ice",.12]):a.push(["gas",n.gasGiantChanceBeyondFrost*r],["ice",n.iceGiantChance*(t.letter==="M"?.7:1)],["dwarf",.22],["subneptune",.1],["rocky",.08]),e.weighted(a)}function j1(i,e,t,n){switch(i){case"rocky":return e()<.28?e.logUniform(1.4,7):e.logUniform(.05,1.6);case"subneptune":return e.logUniform(4.5,18);case"ice":return e.logUniform(12,36);case"gas":return e.logUniform(.18,4.5)*Z1;case"dwarf":return e.logUniform(4e-4,.018);default:return 1}}function Q1(i,e,t,n,s){let r=(t+n)*30035e-10/s,o=Math.cbrt(r/3)*.5*(i+e);return(e-i)/o}function cf(i,e,t,n){let s=i.lumSun,r=i.massSun,o=i.radiusKm/Xe,a=t.frostLineAuAtSolarLum*Math.sqrt(s),l=kr(s,i.teff),c=i.lc===Tt.III||i.lc===Tt.II||i.lc===Tt.I,d=i.lc===Tt.WD,h=Math.max(.011,.034*Math.sqrt(s)*.8,3.5*o),u=Math.min(n,38*Math.pow(Math.max(r,.08),.75)+1.5);c&&(u=Math.min(u,n));let f=i.letter==="M"?e()<t.mDwarfCompactProbability:e()<.25,p;d?p=e.int(0,2):c||i.letter==="O"||i.letter==="B"?p=e.int(0,3):i.letter==="M"?p=f?e.int(3,7):e.int(1,4):p=e.int(t.planetCount.min,t.planetCount.max);let v=c||d?Math.max(h,1.5+.8*o):h,m=[],g=f?v*e.range(1.15,2.4):e.logUniform(v*1.4,Math.max(v*4,Math.min(1.2*l.inner,u*.3)));g=Math.max(g,v);for(let M=0;M<p&&!(g>u);M++){let E=J1(g/a,e,i,t,f),A=j1(E,e,g,i);if(m.length){let w=m[m.length-1],b=0;for(;Q1(w.a,g,w.mE,A,r)<t.spacing.hillSpacingMin&&b++<200;)g*=1.06;if(g>u)break}m.push({a:g,cls:E,mE:A});let R=f?e.range(1.25,2):e.range(t.spacing.periodRatioMin,t.spacing.periodRatioMax);g*=Math.pow(R,2/3)*(E==="gas"?e.range(1.15,1.6):1)}let y=[],_=m.find(M=>M.cls==="gas"&&M.a>.8*a);if(_&&e()<t.beltChance&&!f){let M=_.a/e.range(2.3,3.1),E=M*.82,A=M*1.28;for(let R=m.length-1;R>=0;R--)m[R].a>E*.92&&m[R].a<A*1.08&&m.splice(R,1);M>h*2&&M<a*1.3&&y.push({kind:"asteroid",inner:E,outer:A,peak:M})}let x=m[m.length-1];if(x&&e()<t.kuiperBeltChance&&x.a*1.7<n){let M=x.a*e.range(1.7,2.6);M<n&&y.push({kind:"kuiper",inner:M*.78,outer:M*1.3,peak:M})}return{planets:m,belts:y,hz:l,frostAu:a,compact:f}}function hf(i,e,t,n,s,r,o){let a=[],l=0;if(i.cls==="gas"||i.cls==="ice"?l=e.int(t.moonsPerGiant[0],t.moonsPerGiant[1]):i.cls==="rocky"&&e()<t.moonChanceTerrestrial&&i.mE>.2&&(l=1),!l)return a;let c=s*(i.cls==="rocky"?e.range(12,60):e.range(3,7)),d=i.a>n*.8;for(let h=0;h<l&&!(c>o*.33);h++){let u=i.cls==="rocky"?s*.3:2800,f=Ce(e.logUniform(120,u),80,u),p=d?e.range(1.1,2.4):e.range(2.8,3.6),v=4/3*Math.PI*Math.pow(f*1e3,3)*p*1e3;a.push({aKm:c,rKm:f,gm:Y1*v,rho:p,iced:d,volcanic:!d&&i.cls!=="rocky"&&h===0&&e()<.4}),c*=e.range(1.45,2.3)}return a}var Ma=13271244004194e-2,e_=["I","II","III","IV","V","VI","VII","VIII","IX","X"],t_="bcdefghijklmnop";function uf(i,e,t){let n=i.d.hip[e],s=n?`HIP${n}`:`P${Math.round(i.pos[e*3]*100)},${Math.round(i.pos[e*3+1]*100)},${Math.round(i.pos[e*3+2]*100)}`;return hn(t.sim.seed>>>0,Mi(s))}function df(i){let e=i.range(-1,1),t=i.range(0,$t),n=Math.sqrt(1-e*e),s=[n*Math.cos(t),n*Math.sin(t),e],r=si(s),o=cn(s,r);return[r[0],o[0],s[0],r[1],o[1],s[1],r[2],o[2],s[2]]}function n_(i,e,t,n,s,r){let o=i.traits(e),{teff:a,lumSun:l,radiusKm:c,massSun:d}=o,h="";s&&(s.teff||s.rad||s.mass)&&(s.teff&&(a=s.teff),s.rad&&(c=s.rad*695700),s.mass&&(d=s.mass),s.logL!=null?l=Math.pow(10,s.logL):s.rad&&s.teff&&(l=s.rad*s.rad*Math.pow(s.teff/5772,4)),h=" (stellar parameters from NASA Exoplanet Archive)");let u=un(hn(uf(i,e,n),77)),f=i.info(e),p=i.d.absMag[e];s&&(s.teff||s.rad)&&(p=4.74-2.5*Math.log10(l)-nh(a));let v=Math.pow(10,-.4*(p-4.83)),m=Math.pow(10,-.4*(p+26.74))*Math.pow(3085677581491367e-2*10/c,2);return new Sn({id:`star-${e}`,name:i.name(e),kind:"star",radiusKm:c,gm:d*Ma,teff:a,lumSun:l,massSun:d,lc:o.lc,letter:o.letter,color:us(a),fixed:t,catalogIndex:e,absMagV:p,lumV:v,surfaceRadiance:m,limb:a>6500?.45:a>4500?.6:.7,pole:vt([u.range(-1,1),u.range(-1,1),u.range(-1,1)]),spin:{w0:u.range(0,360),rateDegDay:360/u.range(3,30)},look:{kind:"star"},info:`${i.spectralText(e)} \xB7 ${Math.round(a)} K \xB7 ${l>=100?l.toFixed(0):l>=1?l.toFixed(1):l.toPrecision(2)} L\u2609${h}`,source:"catalogue",designation:i.designation(e),isPrimary:r})}function ff(i,e,t){if(t)return{sync:!0};let n=e==="gas"||e==="ice"?i.range(8,20):i.range(8,60);return{w0:i.range(0,360),rateDegDay:360/n*24*(i()<.93?1:-1)}}function pf(i,e,t){let n=i.range(0,t)*Je,s=si(e),r=Nr(e,s,n);return Nr(r,e,i.range(0,$t))}function mf(i,e,t){let n=e.primary,s=i.posOf(n),r=new or({id:`star:${e.key}`,name:e.name,kind:"procedural",originPc:s,starIndices:e.members.slice(),catalogKey:e.key}),o=[];e.members.forEach((h,u)=>{let f=i.posOf(h),p=[(f[0]-s[0])*st,(f[1]-s[1])*st,(f[2]-s[2])*st],v=n_(i,h,p,t,i.host(h),u===0);r.add(v),o.push(v)}),o.length>1&&o.forEach((h,u)=>{h.name=`${e.name} ${String.fromCharCode(65+u)}`});let a=o[0];if(r.heliopauseKm=i.heliopauseKm(n),o.length>1){let h=0;for(let u of o){let f=fa({lumSun:u.lumSun,radiusSun:u.radiusKm/695700,teff:u.teff,letter:u.letter,lc:u.lc},t,u.name);h+=f*f}r.heliopauseKm=Math.sqrt(h)}let l=kr(a.lumSun,a.teff);r.hz=l,r.frostAu=t.procgen.frostLineAuAtSolarLum*Math.sqrt(a.lumSun),r.hasKnownPlanets=!1,r.hasFictionalPlanets=!1;let c=!1;o.forEach((h,u)=>{let f=h.catalogIndex,p=i.host(f),v=500;for(let g of o)if(g!==h){let y=Math.hypot(g.fixed[0]-h.fixed[0],g.fixed[1]-h.fixed[1],g.fixed[2]-h.fixed[2])/Xe;v=Math.min(v,y/3)}let m=uf(i,f,t);p&&p.planets.length?(i_(r,h,p,m,t,e.name),c=!0):t.procgen.enabled&&s_(r,h,m,t,v,o.length>1?String.fromCharCode(65+u):"",e.name)}),r.hasKnownPlanets=c,r.kind=c?"known":"procedural",r.fictional=!c;let d={star:0,planet:1,dwarf:2,moon:3,belt:4};return r}function i_(i,e,t,n,s,r){let o=un(hn(n,31)),a=df(o),l=t.planets.slice().sort((c,d)=>(c.a??c.per??1e9)-(d.a??d.per??1e9));for(let c of l){let d=[],h=e.massSun,u=c.a;!u&&c.per&&(u=Math.cbrt(Ma*h*Math.pow(c.per*86400,2)/(4*Math.PI*Math.PI))/Xe,d.push("a from period")),u||(u=.1,d.push("a unknown (placeholder)"));let f=c.m,p=c.r;!f&&p&&(f=af(p),d.push("mass")),!p&&f&&(p=ba(f),d.push("radius")),!f&&!p&&(f=5,p=ba(5),d.push("mass"),d.push("radius"));let v=c.e;v==null&&(v=0,d.push("e"));let m=un(hn(n,Mi(c.name))),g=lf(f,p),y=e.lumSun,_=c.teq||pa(y,u,.3),x=kr(y,e.teff),M=lh(g,{teq:_,mE:f,rE:p,inHz:u>=x.inner*.97&&u<=x.outer*1.03,aAu:u,seed:hn(n,Mi(c.name)),ringChance:.08}),E=Math.sqrt(Ma*h/Math.pow(u*Xe,3))*86400/Je,A=m.range(0,2.5),R=$t/(E*Je),w=R<25,b=new qi({a:u*Xe,e:v,inc:Math.min(A,8),node:m.range(0,360),argp:c.w??m.range(0,360),M0:m.range(0,360),epochJD:sr,nDegPerDay:E,plane:a}),L=vt(cn([a[0],a[3],a[6]],[a[1],a[4],a[7]])),B=new Sn({id:`planet-${c.name.replace(/\s+/g,"-")}`,name:c.name,kind:g==="dwarf"?"dwarf":"planet",parent:e,orbit:b,radiusKm:p*fs,gm:f*ah,albedo:.3,pole:w?[a[2],a[5],a[8]]:pf(m,[a[2],a[5],a[8]],35),spin:ff(m,g,w),synchronous:w,look:M.look,atmosphere:M.atmosphere,rings:M.rings?M.rings.map(F=>({r0:F.r0*p*fs,r1:F.r1*p*fs,tau:F.tau})):null,fictional:!1,source:"NASA Exoplanet Archive",meta:{cls:g,mE:f,rE:p,teq:_,aAu:u,e:v,periodDays:R,method:c.meth,year:c.yr,est:d,label:M.label,confirmed:!0},info:`CONFIRMED planet \xB7 ${c.meth||"detected"}${c.yr?", "+c.yr:""} \xB7 ${M.label} (appearance is an artist's rendering \u2014 the archive has no imagery)`+(d.length?` \xB7 estimated: ${d.join(", ")}`:"")});i.add(B),M.rings&&(B.rings=M.rings.map(F=>({r0:F.r0*B.radiusKm,r1:F.r1*B.radiusKm,tau:F.tau})))}}function s_(i,e,t,n,s,r,o){let a=n.procgen,l=un(hn(t,11)),c={lumSun:e.lumSun,massSun:e.massSun,teff:e.teff,radiusKm:e.radiusKm,letter:e.letter,lc:e.lc},d=cf(c,l,a,s),h=df(l),u=d.hz,f=r?`${o} ${r}`:o;d.planets.forEach((p,v)=>{let m=`${f} ${t_[v]||"z"+v}`,g=un(hn(t,1e3+v)),y=p.mE,_=ba(y),x=Math.min(.55,Math.abs(g.normal())*a.eccentricitySigma*(d.compact?.5:1)),M=pa(c.lumSun,p.a,.3),E=lh(p.cls,{teq:M,mE:y,rE:_,inHz:p.a>=u.inner*.97&&p.a<=u.outer*1.03,aAu:p.a,seed:hn(t,5e3+v),ringChance:a.ringChanceGiant}),A=Math.sqrt(Ma*c.massSun/Math.pow(p.a*Xe,3))*86400/Je,R=360/A,w=R<20||c.letter==="M"&&R<60,b=new qi({a:p.a*Xe,e:x,inc:Math.abs(g.normal())*a.inclinationSigmaDeg,node:g.range(0,360),argp:g.range(0,360),M0:g.range(0,360),epochJD:sr,nDegPerDay:A,plane:h}),L=p.cls==="dwarf"?"dwarf":"planet",B=w?[h[2],h[5],h[8]]:pf(g,[h[2],h[5],h[8]],p.cls==="gas"?30:45),F=new Sn({id:`${e.id}-p${v}`,name:m,kind:L,parent:e,orbit:b,radiusKm:_*fs,gm:y*ah,albedo:.3,pole:B,spin:ff(g,p.cls,w),synchronous:w,look:E.look,atmosphere:E.atmosphere,rings:E.rings?E.rings.map(P=>({r0:P.r0*_*fs,r1:P.r1*_*fs,tau:P.tau})):null,fictional:!0,source:"procedural (FICTIONAL)",meta:{cls:p.cls,mE:y,rE:_,teq:M,aAu:p.a,e:x,periodDays:R,label:E.label,confirmed:!1,inHz:p.a>=u.inner&&p.a<=u.outer},info:`FICTIONAL planet \u2014 procedurally generated \xB7 ${E.label}`});i.add(F);let S=F.hillKm;hf({cls:p.cls,mE:y,a:p.a},g,a,d.frostAu,F.radiusKm,F.gm,S).forEach((P,N)=>{let k=un(hn(t,9e4+v*31+N)),q=P.iced?"ice-moon":"rock-moon",Z=Math.sqrt(F.gm/P.aKm**3)*86400/Je,O=P.volcanic?{kind:"proc",style:"io",colors:[[.9,.8,.35],[.98,.92,.55],[.85,.38,.16],[.16,.13,.12]],p:{crater:0,bump:.25,spot:.9}}:P.iced?{kind:"proc",style:k()<.5?"ice":"europa",colors:[[.82+k()*.15,.82+k()*.14,.84+k()*.12],[.94,.95,.96],[.62,.5,.42],[.55,.58,.64]],p:{crater:k(),bump:.5,ice:1,stripe:k()*.8}}:{kind:"proc",style:"rock",colors:[[.36+k()*.1,.33+k()*.08,.3],[.5+k()*.1,.47,.42],[.66,.62,.58],[.2,.19,.18]],p:{crater:.6+k()*.4,bump:.8}},J=new Sn({id:`${F.id}-m${N}`,name:`${m} ${e_[N]||N+1}`,kind:"moon",parent:F,orbit:new qi({a:P.aKm,e:Math.abs(k.normal())*.01,inc:Math.abs(k.normal())*2,node:k.range(0,360),argp:k.range(0,360),M0:k.range(0,360),epochJD:sr,nDegPerDay:Z,plane:r_(F.pole)}),radiusKm:P.rKm,gm:P.gm,albedo:P.iced?.6:.12,pole:F.pole,spin:{sync:!0},synchronous:!0,look:O,fictional:!0,source:"procedural (FICTIONAL)",meta:{cls:q,label:P.volcanic?"volcanic moon":P.iced?"icy moon":"rocky moon"},info:`FICTIONAL moon \u2014 procedurally generated (${P.volcanic?"volcanic":P.iced?"icy":"rocky"})`});i.add(J)})}),d.belts.forEach((p,v)=>{let m=p.kind==="asteroid",g=p.outer-p.inner;i.add(new Sn({id:`${e.id}-belt${v}`,name:`${f} ${m?"asteroid belt":"outer debris belt"}`,kind:"belt",parent:e,radiusKm:1,fictional:!0,source:"procedural (FICTIONAL)",belt:{innerAu:p.inner,outerAu:p.outer,peakAu:p.peak,thicknessAu:g*(m?.12:.2),count:m?22e3:16e3,tint:m?[.62,.56,.5]:[.56,.58,.62],note:"procedural, FICTIONAL"},plane:h,info:"FICTIONAL belt \u2014 procedurally generated"}))}),e.systemPlane=h}function r_(i){let e=vt(i),t=si(e),n=cn(e,t);return[t[0],n[0],e[0],t[1],n[1],e[1],t[2],n[2],e[2]]}var wa=class{constructor(e,t){this.data=e,this.cfg=t,this.cat=new ma(e,t),this.systems=new Map,this.solar=rf(this.cat,e.ephemeris,t),this.solar.heliopauseKm=this.cat.heliopauseKm(this.cat.sunIndex),this.solar.heliopauseKm=t.heliopause.sunAu*Xe,this.solar.catalogKey=this.cat.sunIndex,this.solar.starIndices=[this.cat.sunIndex],this.systems.set(this.cat.sunIndex,this.solar),this._hpCache=new Map}systemForGroup(e){if(e.members.includes(this.cat.sunIndex))return this.solar;let t=this.systems.get(e.key);return t||(t=mf(this.cat,e,this.cfg),this.systems.set(e.key,t)),t}destinationsNear(e,t){let n=this.cfg.destinations;return this.cat.systemsNear(e,(t??n.radiusLy)*th,n.groupAu).map(r=>({group:r,name:r.name,distLy:r.distPc*Lr,known:r.members.some(o=>this.cat.hasKnownPlanets(o)),stars:r.members.length}))}heliopauseOfStar(e){let t=this._hpCache.get(e);return t===void 0&&(t=e===this.cat.sunIndex?this.cfg.heliopause.sunAu*Xe:this.cat.heliopauseKm(e),this._hpCache.set(e,t)),t}starsNearPc(e,t){return this.cat.within(e,t)}nextBoundary(e,t,n,s){let r=n/st+.25,o=this.cat.within(e,r+.2),a=null,l=null;for(let c of o){let d=this.heliopauseOfStar(c)/st,h=this.cat.pos[c*3]-e[0],u=this.cat.pos[c*3+1]-e[1],f=this.cat.pos[c*3+2]-e[2],p=h*h+u*u+f*f;if(p<d*d){(!l||p<l.cc)&&(l={star:c,cc:p,radiusKm:d*st});continue}let v=h*t[0]+u*t[1]+f*t[2];if(v<=0)continue;let m=p-v*v;if(m>=d*d)continue;let g=(v-Math.sqrt(d*d-m))*st;(!a||g<a.distKm)&&(a={distKm:g,star:c,radiusKm:d*st})}return{ahead:a,inside:l}}};var tn=`
const float PI = 3.14159265359;
const float TAU = 6.28318530718;

// \u2500\u2500 special relativity \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// n: unit vector from observer to source in the rest frame; beta: observer velocity / c (rest frame).
// returns the apparent direction in the observer frame; D = Doppler factor (observed/emitted frequency)
vec3 aberrate(vec3 n, vec3 beta, float gamma, out float D) {
  float b = length(beta);
  if (b < 1e-7) { D = 1.0; return n; }
  vec3 bh = beta / b;
  float c = dot(n, bh);
  D = gamma * (1.0 + b * c);
  return (n + ((gamma - 1.0) * c + gamma * b) * bh) / D;
}
// inverse: observer-frame direction np -> rest-frame direction; D = observed/emitted frequency for that ray
vec3 deaberrate(vec3 np, vec3 beta, float gamma, out float D) {
  float b = length(beta);
  if (b < 1e-7) { D = 1.0; return np; }
  vec3 bh = beta / b;
  float c = dot(np, bh);
  float den = gamma * (1.0 - b * c);
  D = 1.0 / den;
  return (np + ((gamma - 1.0) * c - gamma * b) * bh) / den;
}

// \u2500\u2500 photometry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Apparent V magnitude -> irradiance in units of the solar constant at 1 AU (m = -26.74)
float magToIrradiance(float m) { return exp2(-0.4 * (m + 26.74) * 3.321928095); }

float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 hash32(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yzz) * p3.zyx); }
float hash13(vec3 p3) { p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }

// 3D value noise & fbm (cheap, directional-artifact free enough for planets/sky)
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i), n100 = hash13(i + vec3(1,0,0)), n010 = hash13(i + vec3(0,1,0)), n110 = hash13(i + vec3(1,1,0));
  float n001 = hash13(i + vec3(0,0,1)), n101 = hash13(i + vec3(1,0,1)), n011 = hash13(i + vec3(0,1,1)), n111 = hash13(i + vec3(1,1,1));
  return mix(mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y), mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
}
float fbm(vec3 p, int oct) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 8; i++) { if (i >= oct) break; s += a * vnoise(p); p = p * 2.03 + vec3(11.7, 3.1, 7.3); a *= 0.5; }
  return s;
}
float ridged(vec3 p, int oct) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 8; i++) { if (i >= oct) break; float n = 1.0 - abs(vnoise(p) * 2.0 - 1.0); s += a * n * n; p = p * 2.07 + vec3(5.3, 1.7, 9.1); a *= 0.5; }
  return s;
}
`;var gf=`
${tn}
attribute vec3 aPos;      // star position (pc, float32 \u2013 exact copy of the catalogue value)
attribute vec2 aPhys;     // x = absolute V magnitude, y = ln(Teff)
#define aCorner position.xy   // quad corner (-1..1)

uniform vec3 uCamHi;      // camera position in pc, split in two floats for ~1e-7 relative precision of (star - camera)
uniform vec3 uCamLo;
uniform mat3 uView;       // rest-frame -> camera axes
uniform vec2 uRes;
uniform float uFocalPx;
uniform vec3 uBeta;
uniform float uGamma;
uniform float uExposure;
uniform float uMagLimit;
uniform float uBrightness;
uniform float uSigma;
uniform float uHalo;
uniform float uHaloAmt;
uniform float uHaloW;
uniform float uSat;
uniform float uBlue;      // temperature shift strength for Doppler
uniform sampler2D uColorLUT;
uniform float uLnTmin;
uniform float uLnTmax;
// warp
uniform vec3 uWarpDir;    // unit heading (rest frame)
uniform float uWarpBeta;  // effective artistic beta (0 = off)
uniform float uWarpGamma;
uniform float uStreak;
uniform float uWarpDim;
uniform float uBeam;
uniform int uHide[8];

varying vec2 vUV;         // pixels, relative to star centre
varying vec3 vColor;
varying float vAmp;
varying vec2 vAxis;       // streak direction in px
varying float vSigmaMajor;
varying float vSigma;
varying float vHalo;
varying float vHW;
varying float vR;

void main() {
  for (int i = 0; i < 8; i++) if (uHide[i] == gl_InstanceID) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }
  vec3 d = (aPos - uCamHi) - uCamLo;
  float dist = max(length(d), 1e-6);
  vec3 n = d / dist;

  // special relativity (ship velocity through the sky)
  float D1;
  vec3 n1 = aberrate(n, uBeta, uGamma, D1);
  // artistic warp-bubble aberration, applied on top
  float D2 = 1.0;
  vec3 n2 = n1;
  if (uWarpBeta > 0.0) n2 = aberrate(n1, uWarpDir * uWarpBeta, uWarpGamma, D2);
  float D = D1 * D2;

  float m = aPhys.x + 5.0 * log2(dist * 0.1) * 0.30102999566;
  // beaming: flux scales as D^2 (energy flux of a moving source seen by a moving observer)
  float E = magToIrradiance(m) * pow(clamp(D1, 0.02, 30.0), uBeam) * mix(1.0, D2 * D2, uWarpDim);
  float lnT = aPhys.y + log(D) * uBlue;
  vec3 col = texture2D(uColorLUT, vec2(clamp((lnT - uLnTmin) / (uLnTmax - uLnTmin), 0.0, 1.0), 0.5)).rgb;
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(lum), col, uSat);

  vec3 v = uView * n2;
  if (v.z > -1e-3) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }

  float sig = uSigma;
  // peak radiance of the PSF core (units: sunlit white diffuse surface = 1); see docs in renderer.js
  float peak = uBrightness * E * uFocalPx * uFocalPx / (2.0 * sig * sig) * uExposure;
  // faint-star cull
  if (peak < 0.0012) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }

  vec2 ndc = v.xy / -v.z * (uFocalPx / (0.5 * uRes.y));
  ndc.x *= uRes.y / uRes.x;
  if (abs(ndc.x) > 1.15 || abs(ndc.y) > 1.15) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }

  // sprite extent: Gaussian core + Moffat halo, and an optional radial streak (warp)
  float rCore = sig * sqrt(2.0 * log(max(peak / 0.0015, 1.0001)));
  float rHalo = uHalo > 0.0 ? uHaloW * sqrt(max(pow(max(peak * uHaloAmt * uHalo / 0.0015, 1.0), 0.6667) - 1.0, 0.0)) : 0.0;
  float R = clamp(max(rCore, min(rHalo, 90.0)), 1.6, 90.0);

  vec2 axis = vec2(1.0, 0.0);
  float stretch = 0.0;
  if (uStreak > 0.0) {
    // radial streak away from the heading point (screen space)
    vec3 hv = uView * uWarpDir;
    vec2 hndc = hv.z < 0.0 ? hv.xy / -hv.z * (uFocalPx / (0.5 * uRes.y)) : normalize(hv.xy + 1e-6) * 10.0;
    hndc.x *= uRes.y / uRes.x;
    vec2 rad = (ndc - hndc) * 0.5 * vec2(uRes.x, uRes.y);
    float rl = length(rad);
    axis = rl > 1e-3 ? rad / rl : vec2(1.0, 0.0);
    // streak length grows with distance from the heading point and with how much the map stretches here (1/D2 away from the bunched front)
    float mag = clamp(1.0 / D - 1.0, 0.0, 6.0);
    stretch = uStreak * (rl * 0.05 + 16.0 * mag);
    stretch = min(stretch, 260.0);
  }
  if (stretch > 0.5) R = min(R, 14.0);                                    // a streak is a thin line: no giant halo (a very bright star such as the Sun would smear into a thick ribbon)
  float sigMajor = sqrt(sig * sig + stretch * stretch * 0.33);
  float aspect = sigMajor / sig;
  vec2 q = aCorner;
  float ext = R * mix(1.0, aspect, step(0.5, stretch));
  vec2 offPx = vec2(q.x * ext, q.y * R);
  // rotate along the streak axis (when stretched)
  if (stretch > 0.5) offPx = axis * (q.x * ext) + vec2(-axis.y, axis.x) * (q.y * R);

  vUV = (stretch > 0.5) ? vec2(q.x * ext, q.y * R) : offPx;
  vAxis = axis;
  vSigmaMajor = sigMajor;
  vSigma = sig;
  vHalo = uHalo * uHaloAmt; vHW = uHaloW; vR = ext;
  vAmp = peak * (sig / sigMajor);
  if (stretch > 0.5) vAmp = 6.0 * vAmp / (6.0 + vAmp);                      // soft limit for streaked stars
  vColor = col;
  vec2 ndcOff = (stretch > 0.5 ? offPx : offPx) * vec2(2.0 / uRes.x, 2.0 / uRes.y);
  gl_Position = vec4(ndc + ndcOff, 0.0, 1.0);
}
`,vf=`
precision highp float;
varying vec2 vUV;
varying vec3 vColor;
varying float vAmp;
varying vec2 vAxis;
varying float vSigmaMajor;
varying float vSigma;
varying float vHalo;
varying float vHW;
varying float vR;
void main() {
  // vUV is in the (u = along streak, v = across) frame already
  float u = vUV.x, v = vUV.y;
  float core = exp(-0.5 * (u * u / (vSigmaMajor * vSigmaMajor) + v * v / (vSigma * vSigma)));
  float r2 = u * u + v * v;
  // wide veiling halo (scattering in optics): Moffat, ~0.04% of the peak amplitude per unit
  float halo = vHalo * pow(1.0 + r2 / (vHW * vHW), -1.5);
  float win = 1.0 - smoothstep(0.55, 1.0, length(vUV) / max(vR, 1.0));
  float I = vAmp * (core + halo) * win;
  gl_FragColor = vec4(min(vColor * I, vec3(6.0e4)), 1.0);
}
`;var ch=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,yf=`
precision highp float;
${tn}
varying vec2 vUv;
uniform sampler2D uMW;           // rgb = radiance in sunlit-white units, equirect, galactic coordinates (u: l/2pi+.5, v: .5-b/pi)
uniform mat3 uInvView;           // camera axes -> rest frame
uniform mat3 uToGal;             // rest frame (ICRS) -> galactic
uniform vec2 uTan;               // tan(fov/2) * (aspect, 1)
uniform vec3 uBeta;
uniform float uGamma;
uniform vec3 uWarpDir;
uniform float uWarpBeta;
uniform float uWarpGamma;
uniform float uExposure;
uniform float uGain;
uniform float uDetail;
uniform float uGrain;
uniform float uDust;
uniform float uMwScale;          // overall scale (includes the prescale of the map)
uniform sampler2D uModelSun;     // analytic model seen from the Sun
uniform sampler2D uModelShip;    // analytic model seen from the ship
uniform float uModelOn;
uniform float uBlue;
uniform float uZodi;
uniform float uBeam;
uniform vec2 uMWSize;
uniform float uBeamCap;      // comfort limit on the Doppler brightening of the diffuse sky
uniform vec3 uSunDirRest;
uniform float uZodiScale;
void main() {
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 vcam = normalize(vec3(ndc * uTan, -1.0));
  vec3 np = uInvView * vcam;
  float Dw = 1.0, Dr = 1.0;
  vec3 n1 = uWarpBeta > 0.0 ? deaberrate(np, uWarpDir * uWarpBeta, uWarpGamma, Dw) : np;
  vec3 n = deaberrate(n1, uBeta, uGamma, Dr);
  float D = Dw * Dr;
  vec3 g = uToGal * n;
  float lon = atan(g.y, g.x);
  float lat = asin(clamp(g.z, -1.0, 1.0));
  vec2 uv = vec2(lon / TAU + 0.5, 0.5 - lat / PI);
  vec3 L0 = texture2D(uMW, uv).rgb;
  // mild unsharp mask: the map is a smoothed sample of the Gaia star counts, so edges of dust lanes get a little crisper
  vec2 tx = vec2(1.0 / uMWSize.x, 1.0 / uMWSize.y) * 1.6;
  vec3 Lb = 0.25 * (texture2D(uMW, uv + vec2(tx.x, 0.0)).rgb + texture2D(uMW, uv - vec2(tx.x, 0.0)).rgb + texture2D(uMW, uv + vec2(0.0, tx.y)).rgb + texture2D(uMW, uv - vec2(0.0, tx.y)).rgb);
  vec3 L = max(L0 + (L0 - Lb) * 0.7, vec3(0.0)) * uMwScale;
  if (uModelOn > 0.5) {
    float ms = texture2D(uModelSun, uv).r, mh = texture2D(uModelShip, uv).r;
    L *= clamp(pow(mh / max(ms, 1e-5), 0.7), 0.15, 6.0);
  }

  // fine structure the 0.35-degree map cannot hold: filaments / dust texture and unresolved-star grain
  // (noise is hashed in the observer's own directions, not the rest frame: relativistic aberration would otherwise magnify it into huge blotches)
  float lowF = fbm(np * 120.0, 4);
  float hiF = fbm(np * 380.0, 3);
  float dens = clamp(log2(1.0 + L.g * uExposure * uGain * 40.0), 0.0, 6.0) / 6.0;
  float filament = (lowF - 0.5) * 0.12 + (hiF - 0.5) * 0.5;
  L *= exp(uDetail * filament * (0.15 + 0.4 * dens) * uDust);
  vec3 cell = floor(np * 650.0);
  float grain = hash13(cell) + hash13(cell + 17.0) - 1.0;
  L *= 1.0 + uGrain * grain * 0.55;

  // Doppler: surface brightness ~ D^3 (clamped), colour shifts toward blue ahead / red behind
  float bright = min(pow(clamp(D, 0.05, 20.0), uBeam), uBeamCap);
  vec3 tint = vec3(pow(D, -0.55 * uBlue), 1.0, pow(D, 0.55 * uBlue));
  L *= bright * tint;

  // zodiacal light (interplanetary dust): brightest toward the Sun and along the ecliptic plane
  if (uZodi > 0.0) {
    float cosE = dot(n, uSunDirRest);
    float elong = acos(clamp(cosE, -1.0, 1.0));
    // ~23 mag/arcsec^2 at 90 deg elongation, brightening steeply toward the Sun (gegenschein bump at 180 deg)
    float zl = 1.3e-9 * (1.0 + 60.0 / (1.0 + pow(elong / 0.35, 2.0)) + 0.6 * exp(-pow((elong - 3.14159) / 0.25, 2.0)));
    L += vec3(1.0, 0.93, 0.78) * zl * uZodi * uZodiScale;
  }
  vec3 outc = L * uExposure * uGain;
  gl_FragColor = vec4(min(outc, vec3(6.0e4)), 1.0);
}
`,xf=`
${tn}
#define aCorner position.xy
uniform mat3 uView;
uniform vec2 uRes;
uniform float uFocalPx;
uniform vec3 uBeta;
uniform float uGamma;
uniform vec3 uWarpDir;
uniform float uWarpBeta;
uniform float uWarpGamma;
uniform vec3 uDir;        // unit direction to the galaxy (rest frame)
uniform float uSizeRad;   // half-extent of the quad in radians
uniform float uPA;        // position angle (rad, east of north) \u2013 applied in the sky tangent plane
uniform vec3 uEast;
uniform vec3 uNorth;
varying vec2 vLocal;
varying float vD;
void main() {
  vec3 right = uEast, up = uNorth;
  vec3 p = normalize(uDir + (aCorner.x * right + aCorner.y * up) * uSizeRad);
  float D1; vec3 n1 = aberrate(p, uBeta, uGamma, D1);
  float D2 = 1.0; vec3 n2 = n1;
  if (uWarpBeta > 0.0) n2 = aberrate(n1, uWarpDir * uWarpBeta, uWarpGamma, D2);
  vD = D1 * D2;
  vec3 v = uView * n2;
  vLocal = aCorner;
  if (v.z > -1e-3) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }
  vec2 ndc = v.xy / -v.z * (uFocalPx / (0.5 * uRes.y));
  ndc.x *= uRes.y / uRes.x;
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,_f=`
precision highp float;
varying vec2 vLocal;
varying float vD;
uniform float uPA;
uniform float uEll;
uniform float uRh;        // half-light radius in units of the quad half-extent
uniform vec3 uColor;
uniform float uPeak;      // peak radiance (already exposed)
uniform float uFloor;
void main() {
  float c = cos(uPA), s = sin(uPA);
  vec2 p = vec2(c * vLocal.x + s * vLocal.y, -s * vLocal.x + c * vLocal.y);   // x along the major axis
  p.y /= max(1.0 - uEll, 0.15);
  float r = length(p) / max(uRh, 1e-4);
  // Sersic n~1 disc / dSph-like exponential profile with a soft truncation
  float I = exp(-1.68 * r) * (1.0 - smoothstep(0.82, 1.0, length(vLocal)));
  gl_FragColor = vec4(uColor * (uPeak * I * pow(clamp(vD, 0.1, 10.0), 1.5) + uFloor * I), 1.0);
}
`,bf=`
precision highp float;
varying vec2 vUv;
uniform vec3 uOrigin;      // viewpoint, galactocentric kpc (x toward the Galactic centre from the Sun direction, Sun at (-R0, 0, z0))
uniform vec4 uDisc;        // hR, hz, bulge radius, bulge strength
uniform vec4 uDust;        // dust hR, hz, kappa0 (1/kpc), unused
const float PI = 3.14159265359;
float emis(vec3 p) {
  float R = length(p.xy), z = abs(p.z), r = length(p);
  float disc = exp(-R / uDisc.x) * exp(-z / uDisc.y) + 0.12 * exp(-R / (2.0 * uDisc.x)) * exp(-z / (3.0 * uDisc.y));   // thin + thick disc
  float bulge = uDisc.w * exp(-r / uDisc.z) / (0.4 + r * 0.8);
  return disc + bulge;
}
float kappa(vec3 p) { return uDust.z * exp(-length(p.xy) / uDust.x) * exp(-abs(p.z) / uDust.y); }
void main() {
  float l = (vUv.x - 0.5) * 2.0 * PI, b = (0.5 - vUv.y) * PI;   // matches the sky shader: u = l/2pi + .5, v = .5 - b/pi
  vec3 dir = vec3(cos(b) * cos(l), cos(b) * sin(l), sin(b));
  float s = 0.0, tau = 0.0, sum = 0.0, ds = 0.012;
  for (int i = 0; i < 96; i++) {
    vec3 p = uOrigin + dir * (s + 0.5 * ds);
    float k = kappa(p);
    sum += emis(p) * exp(-tau) * ds;
    tau += k * ds;
    s += ds; ds *= 1.075;
    if (s > 40.0) break;
  }
  gl_FragColor = vec4(sum, tau, 0.0, 1.0);
}
`;var Mf=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,wf=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uTexel;     // 1 / source size
uniform float uKaris;
uniform float uCap;
vec3 s(vec2 o) { vec3 c = texture2D(tSrc, vUv + o * uTexel).rgb; return (isnan(c.r + c.g + c.b) || isinf(c.r + c.g + c.b)) ? vec3(0.0) : clamp(c, vec3(0.0), vec3(uCap)); }
float kw(vec3 c) { return 1.0 / (1.0 + dot(c, vec3(0.2126, 0.7152, 0.0722))); }
void main() {
  vec3 a = s(vec2(-2,  2)), b = s(vec2(0,  2)), c = s(vec2(2,  2));
  vec3 d = s(vec2(-2,  0)), e = s(vec2(0,  0)), f = s(vec2(2,  0));
  vec3 g = s(vec2(-2, -2)), h = s(vec2(0, -2)), i = s(vec2(2, -2));
  vec3 j = s(vec2(-1,  1)), k = s(vec2(1,  1)), l = s(vec2(-1, -1)), m = s(vec2(1, -1));
  vec3 r;
  if (uKaris > 0.5) {
    vec3 g0 = (a + b + d + e) * 0.25, g1 = (b + c + e + f) * 0.25, g2 = (d + e + g + h) * 0.25, g3 = (e + f + h + i) * 0.25, g4 = (j + k + l + m) * 0.25;
    r = g0 * 0.125 * kw(g0) + g1 * 0.125 * kw(g1) + g2 * 0.125 * kw(g2) + g3 * 0.125 * kw(g3) + g4 * 0.5 * kw(g4);
    r /= (0.125 * (kw(g0) + kw(g1) + kw(g2) + kw(g3)) + 0.5 * kw(g4));
  } else {
    r = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  }
  gl_FragColor = vec4(r, 1.0);
}
`,Sf=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;      // lower (smaller) level
uniform sampler2D tAdd;      // this level's own downsampled image
uniform vec2 uTexel;         // 1 / size of tSrc
uniform float uRadius;
uniform float uMix;
void main() {
  vec2 t = uTexel * uRadius;
  vec3 c = texture2D(tSrc, vUv + vec2(-t.x,  t.y)).rgb * 1.0 + texture2D(tSrc, vUv + vec2(0.0,  t.y)).rgb * 2.0 + texture2D(tSrc, vUv + vec2( t.x,  t.y)).rgb * 1.0
         + texture2D(tSrc, vUv + vec2(-t.x, 0.0)).rgb * 2.0 + texture2D(tSrc, vUv).rgb * 4.0 + texture2D(tSrc, vUv + vec2( t.x, 0.0)).rgb * 2.0
         + texture2D(tSrc, vUv + vec2(-t.x, -t.y)).rgb * 1.0 + texture2D(tSrc, vUv + vec2(0.0, -t.y)).rgb * 2.0 + texture2D(tSrc, vUv + vec2( t.x, -t.y)).rgb * 1.0;
  c /= 16.0;
  gl_FragColor = vec4(texture2D(tAdd, vUv).rgb * (1.0 - uMix) + c * uMix, 1.0);
}
`,Ef=`
precision highp float;
${tn}
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uBloom;
uniform float uSaturation;
uniform float uContrast;
uniform float uGrain;
uniform float uVignette;
uniform float uCA;
uniform float uTime;
uniform vec2 uRes;
uniform float uFlash;      // warp collapse flash
uniform vec3 uFlashColor;
uniform vec2 uFlashPos;

// ACES filmic (Narkowicz) \u2013 keeps highlights from clipping to flat white too abruptly
vec3 aces(vec3 x) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
vec3 srgb(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }

void main() {
  vec2 uv = vUv;
  vec2 cc = uv - 0.5;
  float r2 = dot(cc, cc);
  // lateral chromatic aberration (barely perceptible, like a real lens)
  vec2 off = cc * uCA * (1.0 + 2.0 * r2);
  vec3 col;
  col.r = texture2D(tScene, uv + off).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - off).b;
  if (isnan(col.r + col.g + col.b) || isinf(col.r + col.g + col.b)) col = vec3(0.0);
  col = clamp(col, vec3(0.0), vec3(6.0e4));
  vec3 bl = texture2D(tBloom, uv).rgb;
  if (isnan(bl.r + bl.g + bl.b) || isinf(bl.r + bl.g + bl.b)) bl = vec3(0.0);
  col = col * (1.0 - 0.5 * uBloom) + bl * uBloom;
  if (uFlash > 0.0) {
    float fr = length((uv - uFlashPos) * vec2(uRes.x / uRes.y, 1.0));
    col += uFlashColor * uFlash * exp(-fr * fr * 7.0) * 3.0;
  }
  col *= 1.0 - uVignette * smoothstep(0.1, 0.8, r2 * 2.0);
  vec3 t = aces(col);
  float lum = dot(t, vec3(0.2126, 0.7152, 0.0722));
  t = mix(vec3(lum), t, uSaturation);
  t = (t - 0.18) * uContrast + 0.18;
  t = max(t, 0.0);
  vec3 o = srgb(t);
  // film grain + dithering (tiny, avoids banding in the dark sky)
  float n = hash12(gl_FragCoord.xy + fract(uTime) * 91.7) - 0.5;
  float n2 = hash12(gl_FragCoord.xy * 1.37 + 17.0 + fract(uTime * 1.3) * 53.1) - 0.5;
  o += (n + n2) * (uGrain * (0.4 + 0.6 * (1.0 - lum)) + 1.0 / 255.0);
  gl_FragColor = vec4(o, 1.0);
}
`,Tf=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uCenter;      // ship position in uv
uniform float uRadius;     // bubble wall radius, in units of screen height
uniform float uStrength;   // 0..1 formation
uniform float uAspect;
uniform float uTime;
uniform float uFlow;
void main() {
  vec2 p = (vUv - uCenter) * vec2(uAspect, 1.0);
  float r = length(p);
  float w = uRadius * 0.34;
  float x = (r - uRadius) / w;
  // refraction profile: strong gradient at the wall, mild inside (flat space) and a long tail outside
  float prof = exp(-x * x) * (-x) * 1.2 + 0.35 * exp(-max(x, 0.0) * 0.9) * smoothstep(-6.0, 0.0, x);
  float shift = uStrength * uRadius * 0.55 * prof;
  float ripple = 1.0 + 0.018 * uStrength * sin(atan(p.y, p.x) * 9.0 + uTime * 1.7) * exp(-x * x);
  vec2 dir = r > 1e-5 ? p / r : vec2(0.0);
  vec2 q = (p - dir * shift * ripple) / vec2(uAspect, 1.0) + uCenter;
  // chromatic split proportional to the lens shift
  vec2 d = dir * shift * 0.003 / vec2(uAspect, 1.0);
  vec3 c;
  c.r = texture2D(tSrc, q + d).r;
  c.g = texture2D(tSrc, q).g;
  c.b = texture2D(tSrc, q - d).b;
  gl_FragColor = vec4(c, 1.0);
}
`,Af=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).rgb, 1.0); }
`;var hh=Math.log(1e3),Rf=Math.log(6e4),Sa=class{constructor(e,t,n){this.cfg=t,this.data=n,this.canvas=e;let s=e.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0,preserveDrawingBuffer:!0});if(!s)throw new Error("WebGL2 is required.");this.renderer=new Zo({canvas:e,context:s,antialias:!1,logarithmicDepthBuffer:!0}),this.renderer.autoClear=!1,this.renderer.outputColorSpace=_i,this.renderer.toneMapping=jn,this.renderer.shadowMap.enabled=!!t.visuals.ship.shadows,this.renderer.shadowMap.type=Wc,this.maxTex=this.renderer.capabilities.maxTextureSize,this.renderScale=t.visuals.renderScale,this.fsGeo=new Mt,this.fsGeo.setAttribute("position",new gt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.fsMesh=new Ne(this.fsGeo,null),this.fsMesh.frustumCulled=!1,this.fsScene=new ti,this.fsScene.add(this.fsMesh),this.fsCam=new Js(-1,1,1,-1,0,1),this.skyScene=new ti,this.camera=new qt(t.camera.fovDeg,1,t.camera.near,t.camera.far),this.time=0,this._buildColorLUT(),this._buildStars(),this._buildSky(),this._buildMwModel(),this._buildGalaxies(),this._buildPost(),this.resize()}_buildColorLUT(){let t=new Uint16Array(1024);for(let s=0;s<256;s++){let r=Math.exp(hh+s/255*(Rf-hh)),o=us(r);t[s*4]=bi.toHalfFloat(o[0]),t[s*4+1]=bi.toHalfFloat(o[1]),t[s*4+2]=bi.toHalfFloat(o[2]),t[s*4+3]=bi.toHalfFloat(1)}let n=new Hi(t,256,1,Bt,ii);n.minFilter=n.magFilter=Xt,n.needsUpdate=!0,n.generateMipmaps=!1,this.colorLUT=n}_buildStars(){let e=this.data,t=e.n,n=new nr;n.setAttribute("position",new gt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),n.setIndex([0,1,2,0,2,3]);let s=new Float32Array(t*3),r=new Float32Array(t*2);for(let o=0;o<t;o++)s[o*3]=e.pos[o*3],s[o*3+1]=e.pos[o*3+1],s[o*3+2]=e.pos[o*3+2],r[o*2]=e.absMag[o],r[o*2+1]=Math.log(e.teff[o]);n.setAttribute("aPos",new Vi(s,3)),n.setAttribute("aPhys",new Vi(r,2)),n.instanceCount=t,this.starUniforms={uCamHi:{value:new U},uCamLo:{value:new U},uView:{value:new Be},uRes:{value:new Fe(1,1)},uFocalPx:{value:1e3},uBeta:{value:new U},uGamma:{value:1},uExposure:{value:1},uMagLimit:{value:10},uBrightness:{value:1},uSigma:{value:.62},uHalo:{value:1},uHaloAmt:{value:4e-4},uHaloW:{value:4},uSat:{value:1},uBlue:{value:1},uColorLUT:{value:this.colorLUT},uLnTmin:{value:hh},uLnTmax:{value:Rf},uWarpDir:{value:new U(0,0,-1)},uWarpBeta:{value:0},uWarpGamma:{value:1},uStreak:{value:0},uWarpDim:{value:0},uBeam:{value:2},uHide:{value:new Array(8).fill(-1)}},this.starMat=new ht({vertexShader:gf,fragmentShader:vf,uniforms:this.starUniforms,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mn,blendEquation:It,blendSrc:kt,blendDst:kt}),this.starMesh=new Ne(n,this.starMat),this.starMesh.frustumCulled=!1,this.starMesh.renderOrder=1,this.skyScene.add(this.starMesh)}_buildSky(){let e=this.data.milkyWay,t=e,n;if(e){let{width:r,height:o}=e,a=new Uint16Array(r*o*4),l=[];for(let f=0;f<r*o;f+=7)l.push(e.col[f]);l.sort((f,p)=>f-p);let c=l[l.length>>1],d=f=>e.colMin+f/65535*(e.colMax-e.colMin),h=d(c),u=this.cfg.visuals.milkyWay.colorSensitivity??2.4;for(let f=0;f<r*o;f++){let p=e.logMin+e.lum[f]/65535*(e.logMax-e.logMin),v=Math.PI*Math.pow(10,p)*1e6,m=(d(e.col[f])-h)*u,g=Math.exp(-.5*m),y=Math.exp(.5*m),_=1,x=.2126*g+.7152*_+.0722*y;g/=x,_/=x,y/=x,a[f*4]=bi.toHalfFloat(v*g),a[f*4+1]=bi.toHalfFloat(v*_),a[f*4+2]=bi.toHalfFloat(v*y),a[f*4+3]=bi.toHalfFloat(1)}n=new Hi(a,r,o,Bt,ii),n.wrapS=Bn,n.wrapT=Rn,n.minFilter=n.magFilter=Xt,n.generateMipmaps=!1,n.needsUpdate=!0,this.mwInfo={integratedV:e.integratedV}}else n=new Hi(new Uint16Array([0,0,0,15360]),1,1,Bt,ii),n.needsUpdate=!0,console.warn("milkyway.bin not found \u2013 run: node tools/build-data.mjs --only=skymap");let s=new Be;s.set(...ih.flat()),this.skyUniforms={uMW:{value:n},uMWSize:{value:new Fe(t?t.width:1024,t?t.height:512)},uInvView:{value:new Be},uToGal:{value:s},uTan:{value:new Fe(1,1)},uBeta:{value:new U},uGamma:{value:1},uWarpDir:{value:new U(0,0,-1)},uWarpBeta:{value:0},uWarpGamma:{value:1},uExposure:{value:1},uGain:{value:1},uDetail:{value:1},uGrain:{value:.5},uDust:{value:1},uBeamCap:{value:8},uMwScale:{value:1e-6},uBlue:{value:1},uModelSun:{value:null},uModelShip:{value:null},uModelOn:{value:0},uZodi:{value:0},uBeam:{value:3},uSunDirRest:{value:new U(1,0,0)},uZodiScale:{value:1}},this.skyMat=new ht({vertexShader:ch,fragmentShader:yf,uniforms:this.skyUniforms,depthTest:!1,depthWrite:!1}),this.skyMesh=new Ne(this.fsGeo,this.skyMat),this.skyMesh.frustumCulled=!1,this.skyMesh.renderOrder=0,this.skyScene.add(this.skyMesh)}_buildMwModel(){let e=this.cfg.galaxyModel;this.mwModel={rtSun:this._rt(256,128),rtShip:this._rt(256,128),last:null},this.mwModelMat=new ht({vertexShader:ch,fragmentShader:bf,depthTest:!1,depthWrite:!1,uniforms:{uOrigin:{value:new U},uDisc:{value:new rt(e.diskScaleLengthKpc,e.diskScaleHeightPc/1e3,e.bulgeRadiusKpc,14)},uDust:{value:new rt(e.dustScaleLengthKpc,e.dustScaleHeightPc/1e3,10,0)}}}),this.mwModelMesh=new Ne(this.fsGeo,this.mwModelMat),this._renderMwModel(this.mwModel.rtSun,[0,0,0]),this._renderMwModel(this.mwModel.rtShip,[0,0,0]),this.skyUniforms.uModelSun.value=this.mwModel.rtSun.texture,this.skyUniforms.uModelShip.value=this.mwModel.rtShip.texture}_renderMwModel(e,t){let n=this.cfg.galaxyModel,s=ih,r=s[0][0]*t[0]+s[0][1]*t[1]+s[0][2]*t[2],o=s[1][0]*t[0]+s[1][1]*t[1]+s[1][2]*t[2],a=s[2][0]*t[0]+s[2][1]*t[1]+s[2][2]*t[2];this.mwModelMat.uniforms.uOrigin.value.set(r/1e3-n.sunRadiusKpc,o/1e3,a/1e3+n.sunHeightPc/1e3),this.fsMesh.material=this.mwModelMat,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}updateMwModel(e){let t=this.cfg.galaxyModel,n=Math.hypot(e[0],e[1],e[2]);if(this.skyUniforms.uModelOn.value=n>20?1:0,n<=20)return;let s=this.mwModel.last;s&&Math.hypot(e[0]-s[0],e[1]-s[1],e[2]-s[2])<t.refreshDistancePc||(this._renderMwModel(this.mwModel.rtShip,e),this.mwModel.last=e.slice())}_buildGalaxies(){this.galaxies=[];let e=new Mt;e.setAttribute("position",new gt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]);for(let t of this.data.galaxies){let n=Math.hypot(t.x,t.y,t.z)||1,s=new U(t.x/n,t.y/n,t.z/n),r=t.ra*Je,o=t.dec*Je,a=new U(-Math.sin(r),Math.cos(r),0),l=new U(-Math.sin(o)*Math.cos(r),-Math.sin(o)*Math.sin(r),Math.cos(o)),c=Math.max((t.rhArcmin||3)/60*Je,1e-4),d=Math.min(Math.max(c*5,.006),.7),h=new ht({vertexShader:xf,fragmentShader:_f,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mn,blendEquation:It,blendSrc:kt,blendDst:kt,uniforms:{uView:this.starUniforms.uView,uRes:this.starUniforms.uRes,uFocalPx:this.starUniforms.uFocalPx,uBeta:this.starUniforms.uBeta,uGamma:this.starUniforms.uGamma,uWarpDir:this.starUniforms.uWarpDir,uWarpBeta:this.starUniforms.uWarpBeta,uWarpGamma:this.starUniforms.uWarpGamma,uDir:{value:s},uSizeRad:{value:d},uPA:{value:0},uEast:{value:a},uNorth:{value:l},uEll:{value:t.ell??.2},uRh:{value:c/d},uColor:{value:new U(1,.96,.9)},uPeak:{value:0},uFloor:{value:0}}}),u=t.vmag??14,f=Math.pow(10,-.4*(u+26.74)),p=c/1.68,v=f/(2*Math.PI*p*p*Math.max(1-(t.ell??.2),.15)),m=new Ne(e,h);m.frustumCulled=!1,m.renderOrder=.5,m.userData={g:t,I0:v,rhRad:c},h.uniforms.uPA.value=(t.pa??0)*Je,this.skyScene.add(m),this.galaxies.push(m)}}_buildPost(){let e=(t,n)=>new ht({vertexShader:Mf,fragmentShader:t,uniforms:n,depthTest:!1,depthWrite:!1});this.mats={down:e(wf,{tSrc:{value:null},uTexel:{value:new Fe},uKaris:{value:0},uCap:{value:6e4}}),up:e(Sf,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new Fe},uRadius:{value:1},uMix:{value:.5}}),composite:e(Ef,{tScene:{value:null},tBloom:{value:null},uBloom:{value:.06},uSaturation:{value:1.05},uContrast:{value:1},uGrain:{value:.01},uVignette:{value:.2},uCA:{value:7e-4},uTime:{value:0},uRes:{value:new Fe},uFlash:{value:0},uFlashColor:{value:new U(.6,.8,1)},uFlashPos:{value:new Fe(.5,.5)}}),lens:e(Tf,{tSrc:{value:null},uCenter:{value:new Fe(.5,.5)},uRadius:{value:.2},uStrength:{value:0},uAspect:{value:1},uTime:{value:0},uFlow:{value:0}}),copy:e(Af,{tSrc:{value:null}})}}_rt(e,t,n=0,s=!1){let r=new zn(e,t,{type:ii,format:Bt,minFilter:Xt,magFilter:Xt,depthBuffer:s,stencilBuffer:!1,samples:n,generateMipmaps:!1});return r.texture.colorSpace=_i,r}resize(e=window.innerWidth,t=window.innerHeight){let n=Math.min(window.devicePixelRatio||1,this.cfg.visuals.maxPixelRatio),s=this.renderScale,r=Math.max(2,Math.floor(e*n*s)),o=Math.max(2,Math.floor(t*n*s));this.W=r,this.H=o,this.cssW=e,this.cssH=t,this.renderer.setPixelRatio(1),this.renderer.setSize(Math.floor(e*n),Math.floor(t*n),!1),this.outW=Math.floor(e*n),this.outH=Math.floor(t*n);let a=Math.min(this.cfg.visuals.antialias,this.renderer.capabilities.maxSamples);for(let h of["sceneRT","lensRT"])this[h]&&this[h].dispose();if(this.sceneRT=this._rt(r,o,a,!0),this.lensRT=this._rt(r,o,a,!0),this.camera.aspect=r/o,this.camera.updateProjectionMatrix(),this.bloomRTs)for(let h of this.bloomRTs)h.down.dispose(),h.up.dispose();this.bloomRTs=[];let l=Math.max(2,r>>1),c=Math.max(2,o>>1),d=this.cfg.visuals.bloom.levels;for(let h=0;h<d;h++)this.bloomRTs.push({w:l,h:c,down:this._rt(l,c),up:this._rt(l,c)}),l=Math.max(2,l>>1),c=Math.max(2,c>>1);this.starUniforms.uRes.value.set(r,o),this.mats.composite.uniforms.uRes.value.set(r,o),this.mats.lens.uniforms.uAspect.value=r/o}setRenderScale(e){Math.abs(e-this.renderScale)>.01&&(this.renderScale=e,this.resize(this.cssW,this.cssH))}get focalPx(){return .5*this.H/Math.tan(.5*this.camera.fov*Je)}quad(e,t,n=!1){this.fsMesh.material=e,this.renderer.setRenderTarget(t),n&&this.renderer.clear(),this.renderer.render(this.fsScene,this.fsCam)}prepare(e){let t=this.cfg.visuals,n=this.starUniforms,s=this.skyUniforms;this.time+=e.dt||0,this.updateMwModel(e.camPc),this.camera.fov=e.fov??this.cfg.camera.fovDeg,this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,0),this.camera.quaternion.copy(e.quat),this.camera.updateMatrixWorld(!0);let r=f=>Math.fround(f);n.uCamHi.value.set(r(e.camPc[0]),r(e.camPc[1]),r(e.camPc[2])),n.uCamLo.value.set(e.camPc[0]-r(e.camPc[0]),e.camPc[1]-r(e.camPc[1]),e.camPc[2]-r(e.camPc[2]));let o=new it().makeRotationFromQuaternion(e.quat),a=new Be().setFromMatrix4(o),l=a.clone().transpose();n.uView.value.copy(l),s.uInvView.value.copy(a),n.uFocalPx.value=this.focalPx,n.uBeta.value.fromArray(e.beta),n.uGamma.value=e.gamma,n.uExposure.value=Math.max(e.exposure,this.cfg.visuals.stars.minGain||0),n.uBrightness.value=t.stars.brightness,n.uSigma.value=t.stars.psfSigmaPx,n.uHalo.value=t.stars.haloStrength,n.uHaloAmt.value=t.stars.haloFraction,n.uHaloW.value=t.stars.haloWidthPx,n.uSat.value=t.stars.colorSaturation,n.uMagLimit.value=t.stars.magnitudeLimit,n.uBlue.value=this.cfg.warp.visual.blueshiftScale*1;let c=e.warp||{};n.uWarpDir.value.fromArray(c.dir||[0,0,-1]),n.uWarpBeta.value=c.beta||0,n.uWarpGamma.value=c.gamma||1,n.uStreak.value=(c.streak||0)*this.cfg.warp.visual.streakScale,n.uWarpDim.value=c.dim||0;for(let f=0;f<8;f++)n.uHide.value[f]=e.hide&&e.hide[f]!=null?e.hide[f]:-1;let d=Math.tan(.5*this.camera.fov*Je);s.uTan.value.set(d*this.camera.aspect,d),s.uBeta.value.fromArray(e.beta),s.uGamma.value=e.gamma,s.uWarpDir.value.fromArray(c.dir||[0,0,-1]),s.uWarpBeta.value=c.beta||0,s.uWarpGamma.value=c.gamma||1,s.uExposure.value=e.exposure,s.uGain.value=t.milkyWay.enabled?t.milkyWay.gain:0,s.uDetail.value=t.milkyWay.detail,s.uGrain.value=t.milkyWay.grain,s.uDust.value=t.milkyWay.dustContrast,s.uBlue.value=this.cfg.warp.visual.blueshiftScale,s.uMwScale.value=1e-6*(e.mwScale??1);let u=((e.warp||{}).lens||0)>.01;n.uBeam.value=u?this.cfg.warp.visual.beaming:2,s.uBeam.value=u?this.cfg.warp.visual.beaming*.9:3,s.uBeamCap.value=this.cfg.visuals.relativity?.skyGainCap??3,s.uZodi.value=e.zodi||0,e.sunDir&&s.uSunDirRest.value.fromArray(e.sunDir),s.uZodiScale.value=e.zodiScale??1;for(let f of this.galaxies){let{I0:p,rhRad:v,g:m}=f.userData,g=f.material.uniforms,y=Math.max(e.exposure,t.stars.minGain||0)*(t.milkyWay.enabled?t.milkyWay.gain:1)*t.galaxies.gain,_=Math.PI*p*y,x=Math.min(1,Math.max(0,(Math.max(e.exposure,1)-2e3)/4e5));g.uPeak.value=Math.max(_,t.galaxies.visibilityFloor*x),g.uFloor.value=0,g.uColor.value.set(1,.96,.9),f.visible=t.galaxies.enabled}}render(e,t={}){let n=this.renderer,s=this.cfg.visuals;this.prepare(e),n.setRenderTarget(this.sceneRT),n.setClearColor(0,1),n.clear(!0,!0,!0),n.render(this.skyScene,this.camera),t.space&&t.space(n,this.camera);let r=this.sceneRT,o=e.warp||{};if(o.lens>.001){let f=this.mats.lens.uniforms;f.tSrc.value=this.sceneRT.texture,f.uStrength.value=o.lens*this.cfg.warp.visual.lensStrength,f.uCenter.value.set(o.center[0],o.center[1]),f.uRadius.value=o.radius,f.uTime.value=this.time,this.quad(this.mats.lens,this.lensRT,!0),r=this.lensRT}t.near&&(n.setRenderTarget(r),n.clearDepth(),t.near(n));let a=this.bloomRTs,l=s.bloom,c=r.texture;for(let f=0;f<a.length;f++){let p=this.mats.down.uniforms;p.tSrc.value=c,p.uKaris.value=f===0?1:0,p.uCap.value=f===0?s.bloom.inputCap||14:6e4,p.uTexel.value.set(1/(f===0?this.W:a[f-1].w),1/(f===0?this.H:a[f-1].h)),this.quad(this.mats.down,a[f].down),c=a[f].down.texture}let d=a[a.length-1].down.texture;for(let f=a.length-2;f>=0;f--){let p=this.mats.up.uniforms;p.tSrc.value=d,p.tAdd.value=a[f].down.texture,p.uTexel.value.set(1/a[f+1].w,1/a[f+1].h),p.uRadius.value=l.radius,p.uMix.value=.55,this.quad(this.mats.up,a[f].up),d=a[f].up.texture}let h=this.mats.composite.uniforms,u=s.tonemap;h.tScene.value=r.texture,h.tBloom.value=d,h.uBloom.value=l.strength*s.intensity,h.uSaturation.value=u.saturation,h.uContrast.value=u.contrast,h.uGrain.value=u.filmGrain,h.uVignette.value=u.vignette,h.uCA.value=u.chromaticAberration,h.uTime.value=this.time,h.uFlash.value=(o.flash||0)*this.cfg.warp.visual.flashScale,o.center&&h.uFlashPos.value.set(o.center[0],o.center[1]),n.setViewport(0,0,this.outW,this.outH),this.quad(this.mats.composite,null)}};var uh=`
uniform vec3 uBetaCam;
uniform float uGamma;
uniform vec3 uWDirCam;
uniform float uWBeta;
uniform float uWGamma;
vec3 relView(vec3 p) {
  float r = length(p);
  if (r < 1e-12) return p;
  vec3 n = p / r; float D;
  vec3 n1 = aberrate(n, uBetaCam, uGamma, D);
  if (uWBeta > 0.0) n1 = aberrate(n1, uWDirCam * uWBeta, uWGamma, D);
  return n1 * r;
}
`,Cf=`
// band-limited detail: octaves whose wavelength stays >= ~W pixels, cross-faded so nothing swims or sparkles as the camera zooms.
float lodDetailH(vec3 p, float px, float W, float H) {
  // octaves o (frequency 2^o per radian) from the map's own resolution (o=8) up to the finest one whose cells are still >= W pixels wide;
  // the finest fades in with the zoom, amplitude falls as 2^(-0.8 o): fractal relief, never finer than the screen can resolve
  float lod = min(log2(1.0 / (px * W)), 16.0), lf = floor(lod), ff = lod - lf;
  float n = 0.0;
  for (int i = 0; i < 6; i++) {
    float o = lf + 1.0 - float(i);
    if (o < 8.0) break;
    float w = (i == 0) ? ff : 1.0;
    if (o > 16.0) continue;
    n += w * exp2(-H * (o - 8.0)) * (vnoise(p * exp2(o) + o * 7.31) - 0.5);
  }
  return n * 3.0;
}
float lodDetail(vec3 p, float px, float W) { return lodDetailH(p, px, W, 0.8); }
`,Pf=`#include <common>
#include <logdepthbuf_pars_vertex>`,Br=`#include <common>
#include <logdepthbuf_pars_fragment>`,zr=`
${tn}
${uh}
${Pf}
varying vec3 vObj;
varying vec3 vWorldRel;     // camera-relative position, world axes (unaberrated)
void main() {
  vObj = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);        // camera-relative (camera sits at the origin)
  vWorldRel = wp.xyz;
  vec4 mv = viewMatrix * wp;
  mv.xyz = relView(mv.xyz);
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}
`,If=`
precision highp float;
${tn}
${Cf}
${Br}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform mat3 uBodyRot;          // object -> world axes
uniform vec3 uCenterRel;        // body centre, camera-relative (world axes)
uniform float uRadius;          // km
uniform float uExposure;
uniform float uFade;
uniform int uType;              // 0 texture, 1 proc
uniform int uStyle;             // procedural style id
uniform sampler2D tDay;
uniform sampler2D tNight;
uniform sampler2D tCloud;
uniform sampler2D tRing;
uniform float uHasNight;
uniform float uHasCloud;
uniform vec3 uCol[4];
uniform vec4 uP;                // crater, bump, ice, seed
uniform vec4 uP2;               // bands, turb, spot, stripe
uniform vec4 uP3;               // ocean, cloud, lava, spec
uniform float uOcean;           // texture ocean mask enabled
uniform float uGas;
uniform float uAirless;         // 1 = Lommel-Seeliger regolith scattering
uniform float uAtmo;            // 0..1 terminator softening by atmosphere
uniform float uNightGain;
uniform vec3 uLightDir[2];      // unit, world axes
uniform vec3 uLightE[2];        // irradiance (solar constants) * star colour
uniform float uLightAng[2];     // angular radius of the star disc at this body
uniform vec3 uAmbient;          // planetshine / starlight (solar constants)
uniform vec4 uOcc[3];           // occluder centre relative to THIS body centre (km, world axes) + radius km
uniform float uOccCount;
uniform vec4 uRingInfo;         // inner r (km), outer r (km), shadow strength, enabled
uniform vec3 uPole;
uniform float uDetail;
uniform float uSeed;
uniform float uSelfLum;         // emissive floor (lava glow etc)
uniform float uTexel;           // angular size of one texel of the colour map (rad)

// \u2500\u2500\u2500\u2500\u2500 procedural helpers \u2500\u2500\u2500\u2500\u2500
vec3 gCg = vec3(0.0);       // analytic relief gradient (tangent slope, dimensionless) from all craters at this fragment: no screen-space derivatives, so no pixel noise at any zoom
float cellCraters(vec3 p, float scale, float seed, float depth, out float fresh, out vec3 grad) {
  vec3 q = p * scale;
  vec3 ip = floor(q);
  float h = 0.0; fresh = 0.0; grad = vec3(0.0);
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) for (int k = -1; k <= 1; k++) {
    vec3 c = ip + vec3(float(i), float(j), float(k));
    float hh = hash13(c + seed);
    if (hh > 0.62) continue;                         // not every cell holds a crater
    vec3 off = vec3(hash13(c + seed + 3.1), hash13(c + seed + 7.7), hash13(c + seed + 11.3));
    float rad = mix(0.12, 0.46, hash13(c + seed + 5.5));
    vec3 d = q - (c + off);
    float dl = max(length(d), 1e-6);
    float x = dl / rad;
    if (x < 1.9) {
      float bowl = -(1.0 - x * x) * step(x, 1.0);
      float rim = exp(-pow((x - 1.0) / 0.22, 2.0)) * 0.55;
      float ej = exp(-pow(max(x - 1.0, 0.0) / 0.9, 2.0));
      h += (bowl * 0.9 + rim) * depth * rad;
      grad += (0.9 * 2.0 * x * step(x, 1.0) + rim * (-2.0 * (x - 1.0) / 0.0484)) * depth * (d / dl);
      fresh = max(fresh, ej * step(0.8, hash13(c + seed + 9.9)));
    }
  }
  return h;
}
float craterField(vec3 p, float density, out float fresh, float gw) {
  float f0, f1, f2; vec3 g0, g1, g2;
  float h = cellCraters(p, 4.0, uSeed, 0.9, f0, g0) * 1.2 + cellCraters(p, 11.0, uSeed + 5.0, 0.7, f1, g1) + cellCraters(p, 29.0, uSeed + 9.0, 0.5, f2, g2) * 0.8;
  fresh = max(f0, max(f1, f2));
  gCg += (g0 * 1.2 + g1 + g2 * 0.8) * density * gw;
  return h * density;
}
// Close-range craters: octaves of sharp single-cell craters from just below the colour map's own resolution down to the finest the screen can resolve.
// Each octave fades in as its craters grow past a few pixels (never aliased); height is in radians so the bump slope stays physical.
vec2 fineCraters(vec3 p, float px, float dens, out vec3 grad) {
  float hsum = 0.0, asum = 0.0; grad = vec3(0.0);
  for (int o = 0; o < 8; o++) {
    float freq = exp2(9.0 + float(o));
    float radPxMax = 0.15 / (freq * px);
    if (radPxMax < 4.0) break;                                 // this octave (and all finer ones) is below one resolvable pixel
    vec3 q = p * freq, c = floor(q);
    float seedo = uSeed + float(o) * 17.0;
    float hh = hash13(c + seedo);
    if (hh > 0.55 * dens) continue;
    vec3 off = 0.3 + 0.4 * vec3(hash13(c + seedo + 3.1), hash13(c + seedo + 7.7), hash13(c + seedo + 11.3));
    float rad = mix(0.05, 0.15, hash13(c + seedo + 5.5));
    vec3 dv = q - (c + off); float dl = max(length(dv), 1e-6);
    float x = dl / rad;
    float vis = smoothstep(4.0, 14.0, rad / (freq * px));
    if (x < 1.9 && vis > 0.0) {
      float bowl = -(1.0 - x * x) * step(x, 1.0);
      float rim = exp(-pow((x - 1.0) / 0.2, 2.0)) * 0.6;
      float ej = exp(-pow(max(x - 1.0, 0.0) / 0.8, 2.0));
      float young = step(0.85, hash13(c + seedo + 9.9));
      hsum += vis * (bowl * 0.8 + rim) * 0.5 * rad / freq;
      grad += vis * 0.5 * (0.8 * 2.0 * x * step(x, 1.0) + rim * (-2.0 * (x - 1.0) / 0.04)) * (dv / dl);
      asum += vis * (young * ej * 0.35 + bowl * 0.1 + rim * 0.12);
    }
  }
  return vec2(hsum, asum);
}
// returns albedo; writes height (for bump) and specular mask
vec3 procSurface(vec3 p, int style, out float height, out float spec, out float emit) {
  height = 0.0; spec = 0.0; emit = 0.0;
  float lat = asin(clamp(p.y, -1.0, 1.0));
  float sd = uSeed;
  vec3 c0 = uCol[0], c1 = uCol[1], c2 = uCol[2], c3 = uCol[3];
  float crater = uP.x, ice = uP.z;
  vec3 col;
  if (style == 3) {                                    // gas giant / sub-Neptune
    float warp = fbm(p * 3.0 + sd, 4) * uP2.y * 2.0;
    float y = p.y * 5.5 + warp * 0.6 + 0.35 * sin(p.y * 17.0 + warp * 2.0) * uP2.x;
    float b = 0.5 + 0.5 * sin(y * 6.2831 * 0.55 + sd);
    float b2 = fbm(vec3(p.x * 6.0, p.y * 22.0 + sd, p.z * 6.0) + warp, 4);
    float mixv = clamp(mix(0.5, b, uP2.x) + (b2 - 0.5) * uP2.y * 0.9, 0.0, 1.0);
    col = mix(c0, c1, mixv);
    col = mix(col, c2, smoothstep(0.62, 0.9, b2) * 0.45 * uP2.x);
    col = mix(col, c3, smoothstep(0.7, 1.0, fbm(p * vec3(8.0, 36.0, 8.0) + sd * 3.0, 3)) * 0.35 * uP2.x);
    // storms (anticyclonic ovals)
    if (uP2.z > 0.0) {
      vec3 sp = normalize(vec3(cos(sd * 2.3), sin(sd * 1.7) * 0.35, sin(sd * 2.3)));
      float lon = atan(p.z, p.x), slon = atan(sp.z, sp.x);
      float dl = atan(sin(lon - slon), cos(lon - slon));
      float dist2 = pow(dl / 0.22, 2.0) + pow((lat - asin(sp.y)) / 0.1, 2.0);
      col = mix(col, c3 * 1.15 + 0.05, exp(-dist2) * uP2.z * 0.85);
    }
    height = 0.0; return col;
  }
  if (style == 4) {                                    // ocean-continent world
    float land = fbm(p * 2.7 + sd, 6) + 0.35 * fbm(p * 9.0 + sd * 2.0, 4);
    float sea = mix(0.62, 0.38, uP3.x);
    float isLand = smoothstep(sea - 0.01, sea + 0.012, land);
    float elev = clamp((land - sea) * 3.2, 0.0, 1.0);
    vec3 landc = mix(c1, c2, smoothstep(0.1, 0.9, fbm(p * 5.0 + sd * 4.0, 4)));
    landc = mix(landc, c3, smoothstep(0.6, 1.0, elev));
    vec3 sea0 = mix(c0 * 1.8, c0, smoothstep(sea - 0.14, sea, land));
    col = mix(sea0, landc, isLand);
    float capLat = mix(1.45, 0.95, clamp(ice, 0.0, 1.0));
    float cap = smoothstep(capLat - 0.12 + (fbm(p * 6.0, 3) - 0.5) * 0.25, capLat + 0.05, abs(lat));
    col = mix(col, c3, cap);
    spec = (1.0 - isLand) * (1.0 - cap) * uP3.w;
    height = isLand * elev * 0.3;
    // clouds in the albedo for procedural oceans
    float cl = smoothstep(1.0 - uP3.y * 0.62, 1.0, fbm(p * 3.6 + vec3(sd * 3.0, 0.0, sd) + 7.0 * fbm(p * 1.4, 3), 6));
    col = mix(col, vec3(1.0), cl * 0.92); spec *= 1.0 - cl;
    return col;
  }
  if (style == 5) {                                    // lava world
    float cr = ridged(p * 4.0 + sd, 6);
    float crack = smoothstep(0.55, 0.85, cr);
    col = mix(c0, c1, fbm(p * 8.0, 5));
    emit = crack * 1.0 * uP3.z;
    col = mix(col, c2, crack * 0.8);
    height = fbm(p * 10.0, 5) * 0.3;
    return col;
  }
  if (style == 6) {                                    // Titan-like featureless haze
    float b = fbm(vec3(p.x * 2.0, p.y * 9.0, p.z * 2.0) + sd, 4);
    col = mix(c0, c1, b * 0.9); height = 0.0; return col;
  }
  float fresh = 0.0;
  float cr = craterField(p, crater, fresh, 0.9);
  float base = fbm(p * 3.2 + sd, 6);
  float fine = fbm(p * 24.0 + sd, 4);
  height = (base - 0.5) * 0.5 + (fine - 0.5) * 0.18;
  col = mix(c0, c1, smoothstep(0.25, 0.8, base));
  col *= 0.88 + 0.24 * fine;
  if (style == 8) {                                    // Europa: bright ice shell crossed by long reddish-brown fractures
    float cr1 = ridged(p * 2.4 + vec3(sd), 5), cr2 = ridged(p * 7.0 + vec3(sd * 2.0), 4);
    float l1 = smoothstep(0.62, 0.82, cr1), l2 = smoothstep(0.66, 0.86, cr2) * 0.7;
    float tint = smoothstep(0.35, 0.7, fbm(p * 3.0 + sd, 4));
    col = mix(c1, c0, 0.35 * fbm(p * 12.0, 3));
    col = mix(col, c3, tint * 0.35);
    col = mix(col, c2, clamp(l1 + l2, 0.0, 1.0) * 0.85);
    height = (l1 + l2) * 0.05 + (fine - 0.5) * 0.04;
    return col;
  }
  if (style == 2 || style == 0 || style == 9) {        // ice-like: bright, with cracks (linea)
    float cracks = ridged(p * 3.0 + vec3(sd), 5);
    float lines = smoothstep(0.58, 0.8, cracks);
    col = mix(col, c2, 0.35 * ice);
    col = mix(col, c3, lines * uP2.w * 0.9);
    height += lines * 0.1 * uP2.w;
  }
  if (style == 7) {                                    // Io: pale sulfur / SO2 plains, orange-red deposits, dark irregular paterae with coloured halos
    float s1 = fbm(p * 5.0 + sd, 5), s2 = fbm(p * 14.0 + sd * 3.0, 4);
    vec3 yellow = c0, pale = c1, orange = c2, black = c3;
    col = mix(yellow, pale, smoothstep(0.3, 0.75, s1));
    col = mix(col, vec3(0.86, 0.84, 0.78) * 0.72, smoothstep(0.62, 0.85, fbm(p * 8.0 + sd * 7.0, 4)) * 0.75);                 // white SO2 frost
    col = mix(col, orange, smoothstep(0.6, 0.85, s2) * 0.8);
    col = mix(col, orange * vec3(0.8, 0.6, 0.5), smoothstep(0.85, 1.25, abs(lat)) * 0.55);                                      // reddish polar deposits
    vec3 wq = p + (vec3(fbm(p * 9.0 + sd, 3), fbm(p * 9.0 + sd + 4.1, 3), fbm(p * 9.0 + sd + 8.2, 3)) - 0.5) * 0.22;           // wobble the cells: irregular, not round
    vec3 cc = floor(wq * 11.0); vec3 fc = fract(wq * 11.0) - 0.5;
    float pick = step(0.88, hash13(cc + sd)), sz = 0.18 + 0.3 * hash13(cc + sd + 3.7);
    float dd = length(fc);
    float dark = pick * (1.0 - smoothstep(sz * 0.55, sz, dd));
    float halo = pick * smoothstep(sz, sz * 1.1, dd) * (1.0 - smoothstep(sz * 1.1, sz * 2.4, dd));                          // red/orange apron around the vent
    col = mix(col, mix(orange, pale, 0.25), halo * 0.75);
    col = mix(col, black, clamp(dark * 1.4, 0.0, 0.95) * uP2.z);
    emit = 0.0;                                         // hot spots are invisible against sunlit sulfur; the old emissive term blew the calderas out to white
    height = (s1 - 0.5) * 0.15; return col;
  }
  if (style == 10) {                                   // Iapetus two-tone
    float lon = atan(p.z, p.x);
    float edge = 0.5 + 0.5 * sin(lon - 1.2) + (fbm(p * 5.0 + sd, 4) - 0.5) * 0.9;
    col = mix(c2, c0, smoothstep(0.35, 0.62, edge));
    col *= 0.9 + 0.2 * fine; return col;
  }
  if (style == 11) {                                   // Pluto
    float lon = atan(p.z, p.x);
    float heart = exp(-(pow((lon - 2.9) / 0.75, 2.0) + pow((lat - 0.12) / 0.5, 2.0)));
    float dark = (1.0 - smoothstep(0.3, 0.55, abs(lat) + (fbm(p * 4.0 + sd, 4) - 0.5) * 0.7));
    col = mix(c1, c3, dark * smoothstep(0.35, 0.65, fbm(p * 3.0 + sd * 2.0, 5)));
    col = mix(col, c2, heart * 0.85 + smoothstep(0.9, 1.4, abs(lat)) * 0.5);
    col *= 0.9 + 0.2 * fine; height = 0.0; gCg *= 0.3333; return col;
  }
  if (style == 12) {                                   // Triton
    col = mix(c0, c1, smoothstep(0.3, 0.7, base));
    col = mix(col, c2, smoothstep(0.1, 1.3, -lat) * 0.6);
    float streaks = smoothstep(0.7, 0.9, fbm(vec3(p.x * 40.0, p.y * 4.0, p.z * 40.0) + sd, 3));
    col = mix(col, c3, streaks * 0.35 * step(0.0, -lat + 0.3)); return col;
  }
  if (style == 13) {                                   // Charon
    col = mix(c0, c1, smoothstep(0.3, 0.75, base)) * (0.9 + 0.2 * fine);
    col = mix(col, c2, smoothstep(0.85, 1.3, lat + (base - 0.5) * 0.4) * 0.9); return col;
  }
  if (style == 14) {                                   // Ganymede: dark old terrain + bright grooved terrain
    float t = smoothstep(0.45, 0.62, fbm(p * 2.2 + sd, 5));
    float grooves = 0.5 + 0.5 * sin((fbm(p * 5.0 + sd, 4) * 60.0));
    col = mix(c0, c1, t);
    col = mix(col, c2, t * grooves * 0.35 * uP2.w * 2.0);
    col = mix(col, c2, fresh * 0.6); return col;
  }
  col = mix(col, c2, clamp(fresh * 0.35, 0.0, 1.0));   // fresh ejecta rays / bright craters
  col = mix(col, c3, smoothstep(0.7, 1.0, cr * 0.5 + 0.5) * 0.0);
  if (ice > 0.0 && style != 2) col = mix(col, c2, ice * 0.5 * smoothstep(0.55, 1.2, abs(lat) + (fine - 0.5) * 0.3));
  return col;
}

// (lodDetail lives in GLSL_LOD, shared with the cloud shell)
float lodDetail_unused(vec3 p, float px, float W) {
  float lod = log2(1.0 / (px * W)), lf = floor(lod), ff = lod - lf;
  float n = (1.0 - ff) * exp2(0.55 * (ff)) * (vnoise(p * exp2(lf)) - 0.5);
  n += exp2(0.55 * (ff - 1.0)) * (vnoise(p * exp2(lf + 1.0) + 7.3) - 0.5);
  n += ff * exp2(0.55 * (ff - 2.0)) * (vnoise(p * exp2(lf + 2.0) + 13.1) - 0.5);
  return n * 2.0;
}

// \u2500\u2500\u2500\u2500\u2500 analytic eclipse by spherical occluders \u2500\u2500\u2500\u2500\u2500
float discOverlap(float ra, float rb, float d) {   // fraction of disc A (radius ra) covered by disc B (radius rb), centres d apart
  if (d >= ra + rb) return 0.0;
  if (d <= abs(rb - ra)) return rb >= ra ? 1.0 : (rb * rb) / (ra * ra);
  float a = acos(clamp((d * d + ra * ra - rb * rb) / (2.0 * d * ra), -1.0, 1.0));
  float b = acos(clamp((d * d + rb * rb - ra * ra) / (2.0 * d * rb), -1.0, 1.0));
  float area = ra * ra * (a - sin(2.0 * a) * 0.5) + rb * rb * (b - sin(2.0 * b) * 0.5);
  return clamp(area / (PI * ra * ra), 0.0, 1.0);
}
float occlusion(vec3 P, vec3 L, float angS) {          // P relative to body centre (km)
  float vis = 1.0;
  for (int i = 0; i < 3; i++) {
    if (float(i) >= uOccCount) break;
    vec3 o = uOcc[i].xyz - P;
    float tc = dot(o, L);
    if (tc <= 0.0) continue;
    float s = length(o - tc * L);
    float angO = uOcc[i].w / tc;
    vis *= 1.0 - discOverlap(angS, angO, s / tc);
  }
  return vis;
}
float ringAlpha(float r) {
  float u = (r - uRingInfo.x) / (uRingInfo.y - uRingInfo.x);
  if (u < 0.0 || u > 1.0) return 0.0;
  return texture2D(tRing, vec2(u, 0.5)).a;
}

vec3 sampleTex(sampler2D t, vec2 uv, vec2 uvA, vec2 uvB) {
  // pick the derivative set without the longitude wrap discontinuity
  vec2 dA = fwidth(uvA), dB = fwidth(uvB);
  vec2 d1 = dFdx(uvA), d2 = dFdy(uvA);
  if (dot(dB, dB) < dot(dA, dA)) { d1 = dFdx(uvB); d2 = dFdy(uvB); }
  return textureGrad(t, uv, d1, d2).rgb;
}

void main() {
  vec3 p = normalize(vObj);
  float lat = asin(clamp(p.y, -1.0, 1.0));
  float lon = atan(-p.z, p.x);
  vec2 uv = vec2(lon / TAU + 0.5, lat / PI + 0.5);
  vec2 uvB = vec2(fract(lon / TAU + 1.0), uv.y);
  vec3 albedo; float height = 0.0, spec = 0.0, emit = 0.0;
  float oceanMask = 0.0;
  if (uType == 0) {
    albedo = sampleTex(tDay, uv, uv, uvB);
    albedo = pow(albedo, vec3(2.2));                                  // textures are sRGB
    if (uOcean > 0.5) {
      float mx = max(albedo.r, albedo.g);
      oceanMask = 1.0 - smoothstep(0.0, 0.04, mx - albedo.b * 0.95);
      oceanMask *= 1.0 - smoothstep(0.55, 0.8, dot(albedo, vec3(0.333)));     // not ice
      spec = oceanMask * uP3.w;
    }
    height = 0.0;      // relief comes only from procedural craters / band-limited detail: bump from the colour map itself speckles (8-bit steps) and pits gas-giant cloud tops
    if (uP.x > 0.0) { float fr; craterField(p, uP.x, fr, uDetail); }
  } else {
    albedo = pow(clamp(procSurface(p, uStyle, height, spec, emit), 0.0, 1.0), vec3(2.2));      // palettes are authored in sRGB
  }
  // extra fine relief where the map is magnified beyond its resolution: band-limited octaves, no per-pixel noise
  float px = max(length(fwidth(p)), 1e-7);
  if (uType == 0) {
    float gate = smoothstep(1.3, 5.0, uTexel / px) * uDetail;
    if (gate > 0.01) {
      float n1 = lodDetail(p, px, 9.0), n2 = lodDetail(p + 3.7, px, 24.0);
      albedo *= clamp(1.0 + gate * (0.22 * n1 + 0.12 * n2) * (uAirless > 0.5 ? 1.0 : 0.8), 0.6, 1.5);
      height += gate * (0.7 * lodDetailH(p, px, 9.0, 1.0) + 0.4 * lodDetailH(p + 3.7, px, 24.0, 1.0)) * 0.004;      // slope-consistent relief (amplitude \u221D wavelength)
    }
  }

  if (uP.x > 0.0) {
    vec3 fg; vec2 fc = fineCraters(p, px, clamp(uP.x * 1.6, 0.25, 1.0), fg);
    gCg += fg; albedo *= clamp(1.0 + fc.y, 0.5, 1.7);
  }

  // \u2500\u2500 normal: screen-space bump from the smooth procedural height field, plus the analytic crater slopes (exact at any zoom)
  vec3 N = normalize(uBodyRot * p);
  float bump = uP.y * uDetail;
  vec3 pn = p;
  if (bump > 0.001) {
    vec2 dHr = vec2(dFdx(height), dFdy(height));
    vec2 dH = clamp(dHr / max(px, 1e-7) * bump * 0.4, vec2(-0.45), vec2(0.45));
    vec3 sx = normalize(dFdx(p)), sy = normalize(dFdy(p));
    vec3 R1 = cross(sy, p), R2 = cross(p, sx);
    float fDet = dot(sx, R1);
    vec3 grad = sign(fDet) * (dH.x * R1 + dH.y * R2);
    float facing = smoothstep(0.1, 0.45, abs(fDet));                     // grazing view: screen derivatives degenerate, fall back to the smooth normal
    pn = normalize(abs(fDet) * p - grad * facing);
    vec3 gt = gCg - p * dot(gCg, p); float gl = length(gt);
    if (gl > 1e-7) pn = normalize(pn - gt / gl * min(gl * bump * 0.4, 0.7));
    N = normalize(uBodyRot * pn);
    // near the terminator the bump is blended back to the smooth geometric normal
    float nd0 = dot(normalize(uBodyRot * p), uLightDir[0]);
    N = normalize(mix(normalize(uBodyRot * p), N, smoothstep(0.0, 0.22, nd0)));
  }
  vec3 V = normalize(-vWorldRel);
  vec3 Ng = normalize(uBodyRot * p);           // geometric normal (terminator, atmosphere wrap)
  N = normalize(N + V * max(0.12 - dot(N, V), 0.0));       // a bumped normal must not turn away from the viewer (black limb speckle)

  vec3 radiance = vec3(0.0);
  vec3 Pk = Ng * uRadius;
  for (int li = 0; li < 2; li++) {
    vec3 E = uLightE[li];
    if (E.r + E.g + E.b <= 0.0) continue;
    vec3 L = uLightDir[li];
    float ndl = dot(N, L), ndg = dot(Ng, L);
    float wrap = uAtmo * 0.12;
    float lit = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
    // geometric self-shadowing: don't light faces tilted away from the light by bump alone
    lit *= smoothstep(-0.03, 0.06, ndg + wrap * 0.5);
    float ndv = max(dot(N, V), 0.001);
    float refl = lit;
    if (uAirless > 0.5) { float ls = lit / (lit + ndv) * 2.0; refl = mix(lit, ls * min(lit * 4.0, 1.0), 0.75); }
    float shadow = occlusion(Pk, L, uLightAng[li]);
    if (uRingInfo.w > 0.5 && uRingInfo.z > 0.0) {
      float dl = dot(L, uPole);
      if (abs(dl) > 1e-3) {
        float t = -dot(Pk, uPole) / dl;
        if (t > 0.0) { float ra = ringAlpha(length(Pk + L * t)); shadow *= 1.0 - ra * uRingInfo.z; }
      }
    }
    vec3 diffuse = albedo * refl * E;
    // specular glint (oceans, ice)
    vec3 H = normalize(L + V);
    float sp = pow(max(dot(N, H), 0.0), 90.0) * spec * lit;
    radiance += (diffuse + sp * E * 0.9) * shadow;
  }
  // earthshine / starlight on the unlit side
  radiance += albedo * uAmbient * 0.9;
  // night-side lights
  if (uHasNight > 0.5) {
    float day = 0.0;
    for (int li = 0; li < 2; li++) day = max(day, dot(Ng, uLightDir[li]) * (uLightE[li].r + uLightE[li].g + uLightE[li].b > 0.0 ? 1.0 : 0.0));
    vec3 nl = pow(sampleTex(tNight, uv, uv, uvB), vec3(2.2));
    radiance += nl * uNightGain * (1.0 - smoothstep(-0.12, 0.08, day));
  }
  radiance += albedo * emit * 40.0 * uSelfLum + vec3(1.0, 0.35, 0.08) * emit * uSelfLum * 6.0;
  vec3 outc = radiance * uExposure * uFade;
  gl_FragColor = vec4(min(outc, vec3(6.0e4)), 1.0);
  #include <logdepthbuf_fragment>
}
`,Lf=`
precision highp float;
${tn}
${Cf}
${Br}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform mat3 uBodyRot;
uniform float uExposure;
uniform float uFade;
uniform sampler2D tCloud;
uniform vec3 uLightDir[2];
uniform vec3 uLightE[2];
uniform vec3 uAmbient;
uniform float uRadius;
uniform vec4 uOcc[3];
uniform float uOccCount;
uniform float uLightAng[2];
uniform float uOpacity;
vec2 dd(vec2 a, vec2 b) { return dot(a, a) < dot(b, b) ? a : b; }
void main() {
  vec3 p = normalize(vObj);
  float lat = asin(clamp(p.y, -1.0, 1.0)), lon = atan(-p.z, p.x);
  vec2 uv = vec2(lon / TAU + 0.5, lat / PI + 0.5), uvB = vec2(fract(lon / TAU + 1.0), uv.y);
  vec2 dA = fwidth(uv), dB = fwidth(uvB);
  vec2 d1 = dFdx(uv), d2 = dFdy(uv);
  if (dot(dB, dB) < dot(dA, dA)) { d1 = dFdx(uvB); d2 = dFdy(uvB); }
  vec4 t = textureGrad(tCloud, uv, d1, d2);
  float a0 = clamp(dot(t.rgb, vec3(0.3333)) * 1.25 - 0.04, 0.0, 1.0);
  float px = max(length(fwidth(p)), 1e-7);
  float zoom = smoothstep(1.3, 5.0, 0.00307 / px);                      // magnified beyond the 2k map: add procedural wisps so texels do not show
  float wisp = 0.5 + lodDetail(p + 1.3, px, 16.0) * 0.3 + lodDetail(p, px, 40.0) * 0.18;
  a0 = clamp(mix(a0, a0 * (0.4 + 1.2 * wisp) + (wisp - 0.55) * 0.2 * a0, zoom), 0.0, 1.0);
  float a = smoothstep(0.02, 0.98, a0) * uOpacity;
  vec3 N = normalize(uBodyRot * p);
  vec3 rad = vec3(0.0);
  for (int i = 0; i < 2; i++) {
    vec3 E = uLightE[i]; if (E.r + E.g + E.b <= 0.0) continue;
    float ndl = dot(N, uLightDir[i]);
    float lit = clamp((ndl + 0.1) / 1.1, 0.0, 1.0);
    rad += vec3(0.92, 0.93, 0.95) * lit * E;
  }
  rad += vec3(0.9) * uAmbient * 0.9;
  gl_FragColor = vec4(min(rad * uExposure * uFade, vec3(6.0e4)) * a, a);
  #include <logdepthbuf_fragment>
}
`,Df=`
precision highp float;
${tn}
${Br}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform vec3 uCenterRel;         // km, camera-relative, world axes
uniform float uRadius;           // planet radius, km
uniform float uTop;              // atmosphere top radius, km
uniform vec3 uBetaR;             // Rayleigh coefficients (1/km, RGB)
uniform float uBetaM;
uniform float uHr, uHm, uG;
uniform vec3 uTint;
uniform float uStrength;
uniform float uExposure, uFade;
uniform vec3 uLightDir[2];
uniform vec3 uLightE[2];
uniform vec3 uAmbient;
uniform float uSteps;

bool sphere(vec3 o, vec3 d, vec3 c, float r, out float t0, out float t1) {
  vec3 oc = o - c; float b = dot(oc, d); float cc = dot(oc, oc) - r * r; float h = b * b - cc;
  if (h < 0.0) return false;
  h = sqrt(h); t0 = -b - h; t1 = -b + h; return true;
}
void main() {
  vec3 o = vec3(0.0);                                  // camera
  vec3 d = normalize(vWorldRel);
  float a0, a1;
  if (!sphere(o, d, uCenterRel, uTop, a0, a1)) discard;
  float g0, g1;
  bool hitsPlanet = sphere(o, d, uCenterRel, uRadius, g0, g1) && g1 > 0.0;
  float tStart = max(a0, 0.0);
  float tEnd = a1;
  if (hitsPlanet && g0 > 0.0) tEnd = min(tEnd, g0);
  if (tEnd <= tStart) discard;
  float len = tEnd - tStart;
  const int NS = 14;
  float ds = len / float(NS);
  vec3 sumR = vec3(0.0), sumM = vec3(0.0);
  float odR = 0.0, odM = 0.0;
  vec3 scatter = vec3(0.0);
  vec3 tau0 = vec3(0.0);
  for (int li = 0; li < 2; li++) {
    vec3 E = uLightE[li]; if (E.r + E.g + E.b <= 0.0) continue;
    vec3 L = uLightDir[li];
    float cosT = dot(d, L);
    float pR = 3.0 / (16.0 * PI) * (1.0 + cosT * cosT);
    float g = uG; float pM = 3.0 / (8.0 * PI) * ((1.0 - g * g) * (1.0 + cosT * cosT)) / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosT, 1.5));
    float odRv = 0.0, odMv = 0.0;
    vec3 accR = vec3(0.0), accM = vec3(0.0);
    for (int i = 0; i < NS; i++) {
      float t = tStart + (float(i) + 0.5) * ds;
      vec3 pos = o + d * t - uCenterRel;
      float h = length(pos) - uRadius;
      float dR = exp(-max(h, 0.0) / uHr), dM = exp(-max(h, 0.0) / uHm);
      odRv += dR * ds; odMv += dM * ds;
      // optical depth towards the light (4 samples)
      float tl0, tl1; sphere(pos, L, vec3(0.0), uTop, tl0, tl1);
      float pg0, pg1; bool blocked = sphere(pos, L, vec3(0.0), uRadius * 0.999, pg0, pg1) && pg1 > 0.0 && pg0 > 0.0;
      if (blocked) continue;
      float dl = tl1 / 4.0, odRl = 0.0, odMl = 0.0;
      for (int j = 0; j < 4; j++) {
        vec3 q = pos + L * (float(j) + 0.5) * dl; float hh = length(q) - uRadius;
        odRl += exp(-max(hh, 0.0) / uHr) * dl; odMl += exp(-max(hh, 0.0) / uHm) * dl;
      }
      vec3 tr = exp(-(uBetaR * (odRv + odRl) + vec3(uBetaM * 1.1) * (odMv + odMl)));
      accR += dR * tr * ds; accM += dM * tr * ds;
    }
    scatter += PI * E * uTint * (accR * uBetaR * pR + accM * uBetaM * pM) * uStrength;
    odR = odRv; odM = odMv;
  }
  // a little ambient glow so the night limb is not perfectly black next to a lit planet
  vec3 trans = exp(-(uBetaR * odR + vec3(uBetaM * 1.1) * odM));
  float T = dot(trans, vec3(0.3333));
  scatter += PI * uAmbient * uTint * (1.0 - T) * 0.15;
  vec3 col = scatter * uExposure * uFade;
  gl_FragColor = vec4(min(col, vec3(6.0e4)), mix(1.0, T, uFade));
  #include <logdepthbuf_fragment>
}
`,kf=`
${tn}
${uh}
${Pf}
varying vec3 vObj;
varying vec3 vWorldRel;
void main() {
  vObj = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldRel = wp.xyz;
  vec4 mv = viewMatrix * wp;
  mv.xyz = relView(mv.xyz);
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}
`,Uf=`
precision highp float;
${tn}
${Br}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform mat3 uBodyRot;
uniform vec3 uCenterRel;
uniform float uPlanetR;
uniform float uInner, uOuter;       // km
uniform float uExposure, uFade;
uniform vec3 uLightDir[2];
uniform vec3 uLightE[2];
uniform float uLightAng[2];
uniform vec3 uAmbient;
uniform sampler2D tRing;
uniform float uHasTex;
uniform vec3 uTint;
uniform vec4 uBands[6];             // procedural: r0, r1, tau, 0
uniform float uBandCount;
uniform vec3 uPole;
uniform float uSeed;
float profile(float r) {
  if (uHasTex > 0.5) {
    float u = (r - uInner) / (uOuter - uInner);
    return clamp(texture2D(tRing, vec2(u, 0.5)).a, 0.0, 1.0);
  }
  float a = 0.0;
  for (int i = 0; i < 6; i++) {
    if (float(i) >= uBandCount) break;
    float r0 = uBands[i].x, r1 = uBands[i].y;
    float m = smoothstep(r0, r0 + (r1 - r0) * 0.06, r) * (1.0 - smoothstep(r1 - (r1 - r0) * 0.06, r1, r));
    float n = 0.65 + 0.35 * sin(r * 0.002 / (uPlanetR / 60000.0) + hash11(uSeed + float(i)) * 40.0) * sin(r * 0.00071 + float(i) * 3.0);
    a = max(a, m * (1.0 - exp(-uBands[i].z * 2.2)) * n);
  }
  return a;
}
void main() {
  vec3 pl = vObj;                                       // ring plane coordinates, km (object space; z = pole)
  float r = length(pl.xy);
  float a = profile(r);
  if (a < 0.003) discard;
  vec3 colBase = uHasTex > 0.5 ? texture2D(tRing, vec2((r - uInner) / (uOuter - uInner), 0.5)).rgb : uTint;
  colBase = min(pow(colBase, vec3(2.2)) * (uHasTex > 0.5 ? 2.2 : 1.0), vec3(0.95));      // the map is a presentation colour map; real ring particles are as bright as the cloud tops (albedo 0.5\u20130.8)
  vec3 Nw = normalize(uBodyRot * vec3(0.0, 0.0, 1.0));
  vec3 V = normalize(-vWorldRel);
  vec3 Pw = uBodyRot * pl;                              // position relative to planet centre, world axes
  vec3 rad = vec3(0.0);
  for (int i = 0; i < 2; i++) {
    vec3 E = uLightE[i]; if (E.r + E.g + E.b <= 0.0) continue;
    vec3 L = uLightDir[i];
    // planet shadow cast onto the ring
    float tc = dot(-Pw, L);
    float vis = 1.0;
    if (tc > 0.0) {
      float s = length(-Pw - tc * L);
      float angP = uPlanetR / tc, angS = uLightAng[i];
      float sep = s / tc;
      vis = smoothstep(angP - angS, angP + angS, sep);
    }
    float cl = dot(L, Nw), cv = dot(V, Nw);
    bool sameSide = cl * cv > 0.0;
    // thin, mostly-translucent slab of ice: reflected light on the lit face, forward scattering when the sun is behind the rings
    float refl = (0.38 + 0.62 * abs(cl)) * (sameSide ? 1.0 : 0.0) * 0.95;      // a layer of tumbling particles still shines at low sun (mutual shadowing is weak, opposition surge): not a flat Lambert sheet
    float fwd = (!sameSide) ? pow(max(dot(-L, V), 0.0), 6.0) * 0.55 * (1.0 - exp(-a * 3.0)) + 0.0 : 0.0;
    // translucency: unlit-side transmitted light grows where the ring is thin
    float trans = (!sameSide) ? max(abs(cl), 0.08) * pow(1.0 - a, 1.2) * 0.6 : 0.0;
    rad += colBase * E * (refl + fwd + trans) * vis;
  }
  rad += colBase * uAmbient * 0.6;
  // Saturn-light on the rings is negligible; fade near-edge-on rings to avoid sparkle
  float edge = smoothstep(0.0, 0.02, abs(dot(V, Nw)));
  gl_FragColor = vec4(min(rad * uExposure * uFade, vec3(6.0e4)) * a * edge, a * edge);
  #include <logdepthbuf_fragment>
}
`,Ff=`
precision highp float;
${tn}
${Br}
varying vec3 vObj;
varying vec3 vWorldRel;
uniform mat3 uBodyRot;
uniform vec3 uColor;
uniform float uRadiance;      // surface radiance, sunlit-white units
uniform float uExposure;
uniform float uFade;
uniform float uLimb;          // limb-darkening coefficient
uniform float uHasTex;
uniform sampler2D tSun;
uniform float uSeed;
uniform float uSpots;
void main() {
  vec3 p = normalize(vObj);
  vec3 V = normalize(-vWorldRel);
  vec3 N = normalize(uBodyRot * p);
  float mu = clamp(dot(N, V), 0.0, 1.0);
  float limb = (1.0 - uLimb * (1.0 - mu)) / (1.0 - uLimb / 3.0);
  float lat = asin(clamp(p.y, -1.0, 1.0)), lon = atan(-p.z, p.x);
  vec2 uv = vec2(lon / TAU + 0.5, lat / PI + 0.5);
  float tex = 1.0;
  if (uHasTex > 0.5) {
    vec3 t = texture2D(tSun, uv).rgb;
    float l = dot(t, vec3(0.3, 0.55, 0.15));
    tex = mix(1.0, clamp(l * 1.6, 0.35, 1.25), 0.55);
  } else {
    float gran = fbm(p * 60.0 + uSeed, 4);
    float sp = smoothstep(0.62, 0.78, fbm(p * 5.0 + uSeed * 3.0, 4)) * uSpots;
    tex = (0.92 + 0.16 * gran) * (1.0 - 0.6 * sp);
  }
  // the limb of a real star is a hot-gas haze; keep the edge soft
  float edge = smoothstep(0.0, 0.07, mu);
  vec3 c = uColor * uRadiance * limb * tex;
  gl_FragColor = vec4(min(c * uExposure * uFade, vec3(6.0e4)) * edge, 1.0);
  #include <logdepthbuf_fragment>
}
`,Nf=`
${tn}
${uh}
attribute vec4 aPosE;        // camera-relative position (km, world axes), irradiance E (solar constants) \u2013 xyz in km
attribute vec4 aColor;       // rgb colour (luminance 1), a = core fade (0 = resolved disc replaces the core)
uniform mat3 uView;
uniform vec2 uRes;
uniform float uFocalPx;
uniform float uExposure;
uniform float uSigma;
uniform float uHalo;
uniform float uBrightness;
uniform float uHaloAmt;
uniform float uHaloW;
varying vec2 vUV;
varying vec3 vColor;
varying float vAmp;
varying float vCore;
varying float vHalo;
varying float vHW;
varying float vR;
void main() {
  vec3 pc = uView * aPosE.xyz;                // camera axes
  float r = length(pc);
  vec3 n = pc / r; float D;
  vec3 n1 = aberrate(n, uBetaCam, uGamma, D);
  float D2 = 1.0; vec3 n2 = n1;
  if (uWBeta > 0.0) n2 = aberrate(n1, uWDirCam * uWBeta, uWGamma, D2);
  if (n2.z > -1e-3) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }
  float E = aPosE.w * D * D * mix(1.0, D2 * D2, 0.0);
  float sig = uSigma;
  float peak = uBrightness * E * uFocalPx * uFocalPx / (2.0 * sig * sig) * uExposure;
  if (peak < 0.0012) { gl_Position = vec4(3.0, 3.0, 3.0, 1.0); return; }
  vec2 ndc = n2.xy / -n2.z * (uFocalPx / (0.5 * uRes.y)); ndc.x *= uRes.y / uRes.x;
  float rCore = sig * sqrt(2.0 * log(max(peak / 0.0015, 1.0001)));
  float rHalo = uHaloW * sqrt(max(pow(max(peak * uHaloAmt * uHalo / 0.0015, 1.0), 0.6667) - 1.0, 0.0));
  float R = clamp(max(rCore, rHalo), 1.6, 120.0);
  vec2 q = position.xy;
  vUV = q * R; vR = R;
  vColor = aColor.rgb; vAmp = peak; vCore = aColor.a; vHalo = uHalo * uHaloAmt; vHW = uHaloW;
  gl_Position = vec4(ndc + q * R * vec2(2.0 / uRes.x, 2.0 / uRes.y), 0.0, 1.0);
}
`,Of=`
precision highp float;
varying vec2 vUV; varying vec3 vColor; varying float vAmp; varying float vCore; varying float vHalo; varying float vHW; varying float vR;
uniform float uSigma;
void main() {
  float r2 = dot(vUV, vUV);
  float win = 1.0 - smoothstep(0.55, 1.0, sqrt(r2) / vR);        // quad edge never clips the glow
  float core = exp(-0.5 * r2 / (uSigma * uSigma));
  float halo = vHalo * pow(1.0 + r2 / (vHW * vHW), -1.5);
  gl_FragColor = vec4(min(vColor * vAmp * (core + halo) * win * vCore, vec3(6.0e4)), 1.0);
}
`;async function Bf(i){let e=window.__SIMTEX||{},t={},n=i.capabilities.maxTextureSize,s=Math.min(8,i.capabilities.getMaxAnisotropy()),r=Object.entries(e).map(([o,a])=>new Promise(l=>{let c=new Image;c.onload=()=>{let d=c;if(c.width>n){let u=document.createElement("canvas");u.width=n,u.height=Math.round(c.height*n/c.width),u.getContext("2d").drawImage(c,0,0,u.width,u.height),d=u}let h=new en(d);h.colorSpace=Yn,h.wrapS=Bn,h.wrapT=Rn,h.minFilter=mi,h.magFilter=Xt,h.generateMipmaps=!0,h.anisotropy=s,o==="saturn_ring_alpha"&&(h.wrapS=Rn,h.generateMipmaps=!0),h.needsUpdate=!0,t[o]=h,l()},c.onerror=()=>{console.warn("texture failed:",o),l()},c.src=a}));return await Promise.all(r),t}function zf(){let i=new Hi(new Uint8Array([255,255,255,255]),1,1,Bt);return i.needsUpdate=!0,i}function Ea(i,e,t){if(t>=i+e)return 0;if(t<=Math.abs(e-i))return e>=i?1:e*e/(i*i);let n=Math.acos(Ce((t*t+i*i-e*e)/(2*t*i),-1,1)),s=Math.acos(Ce((t*t+e*e-i*i)/(2*t*e),-1,1));return Ce((i*i*(n-Math.sin(2*n)*.5)+e*e*(s-Math.sin(2*s)*.5))/(Math.PI*i*i),0,1)}function Hf(i,e,t){let n=0,s=0,r=i.stars,o=r.map(a=>a.positionAt(t));return r.forEach((a,l)=>{let c=o[l][0]-e[0],d=o[l][1]-e[1],h=o[l][2]-e[2],u=Math.hypot(c,d,h)||1,f=u/Xe,p=a.lumV/(f*f),v=[c/u,d/u,h/u],m=a.radiusKm/u,g=1;for(let y of i.bodies){if(y.kind==="star"||y.kind==="belt")continue;let _=y.positionAt(t),x=_[0]-e[0],M=_[1]-e[1],E=_[2]-e[2],A=x*v[0]+M*v[1]+E*v[2];if(A<=0)continue;let R=Math.hypot(x,M,E);if(y.radiusKm/R<2e-4)continue;let w=x-A*v[0],b=M-A*v[1],L=E-A*v[2],B=Math.hypot(w,b,L)/A,F=y.radiusKm/A;g*=1-Ea(m,F,B)}n+=p*g;for(let y of i.bodies){if(y.kind==="star"||y.kind==="belt")continue;let _=y.positionAt(t),x=_[0]-e[0],M=_[1]-e[1],E=_[2]-e[2],A=Math.hypot(x,M,E);if(A<1)continue;let R=o[l][0]-_[0],w=o[l][1]-_[1],b=o[l][2]-_[2],L=Math.hypot(R,w,b),B=L/Xe,F=-(x*R+M*w+E*b)/(A*L),S=Math.acos(Ce(F,-1,1)),D=(Math.sin(S)+(Math.PI-S)*Math.cos(S))/Math.PI,P=Math.pow(y.radiusKm/A,2);s+=(y.albedo??.3)*P*D*(a.lumV/(B*B))*(A<y.radiusKm*1.001?0:1)*.9}}),{direct:n,shine:s}}function Vf(i,e){let t=e.visuals.exposure,n=Math.pow(2,t.compensationEv);return Ce((t.key??.9)/Math.max(i,1e-12),t.minGain,t.maxGain)*n}function Gf(i,e,t,n){if(!isFinite(i)||i<=0)return e;let s=1-Math.exp(-t/Math.max(n,.05));return Math.exp(Math.log(i)+(Math.log(e)-Math.log(i))*s)}function Wf(i,e,t){let n=null;for(let s of i.stars){let r=s.positionAt(t),o=r[0]-e[0],a=r[1]-e[1],l=r[2]-e[2],c=Math.hypot(o,a,l)||1,d=c/Xe,h=s.lumV/(d*d),u=[o/c,a/c,l/c],f=s.radiusKm/c,p=1;for(let v of i.bodies){if(v.kind==="star"||v.kind==="belt")continue;let m=v.positionAt(t),g=m[0]-e[0],y=m[1]-e[1],_=m[2]-e[2],x=g*u[0]+y*u[1]+_*u[2];if(x<=0)continue;let M=Math.hypot(g,y,_);if(v.radiusKm/M<2e-4)continue;let E=Math.hypot(g-x*u[0],y-x*u[1],_-x*u[2])/x;p*=1-Ea(f,v.radiusKm/x,E)}(!n||h*p>n.E)&&(n={star:s,dir:u,E:h*p,E0:h,vis:p,color:s.color||[1,1,1]})}return n}var o_={rock:1,ice:2,gas:3,ocean:4,lava:5,haze:6,io:7,europa:8,ganymede:14,iapetus:10,pluto:11,triton:12,charon:13},qf={earth:[.2,.35,.7],moon:[.5,.5,.5],mars:[.7,.4,.25],venus:[.9,.8,.55],mercury:[.5,.48,.46],jupiter:[.85,.75,.6],saturn:[.9,.82,.62],uranus:[.6,.85,.9],neptune:[.35,.5,.9],titan:[.8,.55,.25],io:[.9,.8,.4]},Kw=new it,a_=new U;function l_(i){return i.color||[1,.96,.9]}var Ta=class{constructor(e,t,n,s){this.gfx=e,this.cfg=t,this.tex=n,this.cat=s,this.scene=new ti,this.sphereGeo=new bn(1,144,96),this.blank=zf(),this.items=[],this.system=null,this.labels=[],this.spriteCap=512,this._buildSprites(),this.sharedRel={uBetaCam:{value:new U},uGamma:{value:1},uWDirCam:{value:new U(0,0,-1)},uWBeta:{value:0},uWGamma:{value:1}},this.fadeEdge={lo:t.visuals.planets.resolveMinPx,hi:t.visuals.planets.resolveMaxPx}}_buildSprites(){let e=new nr;e.setAttribute("position",new gt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),this.spritePos=new Float32Array(this.spriteCap*4),this.spriteCol=new Float32Array(this.spriteCap*4),this.spritePosAttr=new Vi(this.spritePos,4),this.spriteColAttr=new Vi(this.spriteCol,4),this.spritePosAttr.setUsage(Jc),this.spriteColAttr.setUsage(Jc),e.setAttribute("aPosE",this.spritePosAttr),e.setAttribute("aColor",this.spriteColAttr),e.instanceCount=0,this.spriteGeo=e;let t=this.gfx.starUniforms;this.spriteMat=new ht({vertexShader:Nf,fragmentShader:Of,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mn,blendEquation:It,blendSrc:kt,blendDst:kt,uniforms:{uView:t.uView,uRes:t.uRes,uFocalPx:t.uFocalPx,uExposure:{value:1},uSigma:t.uSigma,uHalo:t.uHalo,uHaloAmt:t.uHaloAmt,uHaloW:t.uHaloW,uBrightness:t.uBrightness,uBetaCam:{value:new U},uGamma:t.uGamma,uWDirCam:{value:new U(0,0,-1)},uWBeta:t.uWarpBeta,uWGamma:t.uWarpGamma}}),this.spriteMesh=new Ne(e,this.spriteMat),this.spriteMesh.frustumCulled=!1,this.spriteMesh.renderOrder=100,this.scene.add(this.spriteMesh)}clear(){for(let e of this.items)for(let t of e.objs)this.scene.remove(t),t.geometry&&t.geometry!==this.sphereGeo&&t.geometry.dispose(),t.material&&t.material.dispose();this.items=[],this.orbitLines=[],this.system=null}setSystem(e){this.clear(),this.system=e;let t=this.gfx;for(let n of e.bodies){let s={body:n,objs:[],star:n.kind==="star"};n.kind==="belt"?this._makeBelt(s,n):n.kind==="star"?this._makeStar(s,n):this._makeBody(s,n);for(let r of s.objs)this.scene.add(r);this.items.push(s)}for(let n of this.items){let s=n.body;if(s.kind==="star"||s.kind==="belt")continue;let r=[];if(s.parent&&s.parent.kind!=="star"&&r.push(s.parent),s.parent)for(let o of s.parent.children)o!==s&&o.kind!=="belt"&&r.push(o);for(let o of s.children)o.kind!=="belt"&&r.push(o);n.occluders=r}this._buildOrbitLines(e)}_bodyMat(e){let t=e.look||{kind:"proc",style:"rock",colors:[[.4,.4,.4],[.5,.5,.5],[.7,.7,.7],[.2,.2,.2]],p:{}},n=this.tex,s=t.p||{},r=(t.colors||[[.5,.5,.5],[.6,.6,.6],[.8,.8,.8],[.3,.3,.3]]).map(h=>new U(h[0],h[1],h[2])),o=t.kind==="tex"&&n[t.tex],a=o?n[t.tex]:this.blank,l=o_[t.style]||1,c=s.seed??Mi(e.id)%1e3/7.3,d={uBodyRot:{value:new Be},uCenterRel:{value:new U},uRadius:{value:e.radiusKm},uExposure:{value:1},uFade:{value:1},uType:{value:o?0:1},uStyle:{value:l},tDay:{value:a},tNight:{value:t.night&&n[t.night]?n[t.night]:this.blank},tCloud:{value:t.clouds&&n[t.clouds]?n[t.clouds]:this.blank},tRing:{value:this.blank},uHasNight:{value:t.night&&n[t.night]?1:0},uHasCloud:{value:t.clouds&&n[t.clouds]?1:0},uCol:{value:r.concat(Array(4).fill(new U(.5,.5,.5))).slice(0,4)},uP:{value:new rt(s.crater??t.crater??0,(s.bump??t.bump??.4)*this.cfg.visuals.planets.detailBump,s.ice??0,c)},uP2:{value:new rt(s.bands??.5,s.turb??.5,s.spot??0,s.stripe??0)},uP3:{value:new rt(s.ocean??.5,s.cloud??.5,s.lava??0,s.spec??t.spec??0)},uOcean:{value:t.ocean?1:0},uGas:{value:t.gas?1:0},uAirless:{value:!e.atmosphere&&t.kind!=="star"&&!t.gas&&t.style!=="gas"?1:0},uAtmo:{value:e.atmosphere?1:0},uNightGain:{value:this.cfg.visuals.planets.nightLightGain},uLightDir:{value:[new U(1,0,0),new U(1,0,0)]},uLightE:{value:[new U,new U]},uLightAng:{value:[.005,.005]},uAmbient:{value:new U},uOcc:{value:[new rt,new rt,new rt]},uOccCount:{value:0},uRingInfo:{value:new rt(0,1,0,0)},uPole:{value:new U(0,0,1)},uDetail:{value:1},uSeed:{value:c},uSelfLum:{value:1},uTexel:{value:o&&a.image?Math.PI*2/Math.max(a.image.width,1):.003},...this.sharedRel};return new ht({vertexShader:zr,fragmentShader:If,uniforms:d})}_makeBody(e,t){let n=this._bodyMat(t),s=new Ne(this.sphereGeo,n);s.matrixAutoUpdate=!1,s.frustumCulled=!1,s.renderOrder=10,e.mesh=s,e.mat=n,e.objs.push(s);let r=t.look||{};if(r.clouds&&this.tex[r.clouds]){let o=new ht({vertexShader:zr,fragmentShader:Lf,transparent:!0,depthWrite:!1,uniforms:{uBodyRot:n.uniforms.uBodyRot,uExposure:n.uniforms.uExposure,uFade:n.uniforms.uFade,tCloud:{value:this.tex[r.clouds]},uLightDir:n.uniforms.uLightDir,uLightE:n.uniforms.uLightE,uAmbient:n.uniforms.uAmbient,uRadius:n.uniforms.uRadius,uOcc:n.uniforms.uOcc,uOccCount:n.uniforms.uOccCount,uLightAng:n.uniforms.uLightAng,uOpacity:{value:this.cfg.visuals.planets.clouds},...this.sharedRel},blending:Mn,blendEquation:It,blendSrc:kt,blendDst:Ws}),a=new Ne(this.sphereGeo,o);a.matrixAutoUpdate=!1,a.frustumCulled=!1,a.renderOrder=11,e.cloudMesh=a,e.objs.push(a)}if(t.atmosphere){let o=t.atmosphere,a=new ht({vertexShader:zr,fragmentShader:Df,transparent:!0,depthWrite:!1,side:xn,blending:Mn,blendEquation:It,blendSrc:kt,blendDst:Er,uniforms:{uCenterRel:n.uniforms.uCenterRel,uRadius:{value:t.radiusKm},uTop:{value:t.radiusKm+o.topKm},uBetaR:{value:new U(...o.rayleigh)},uBetaM:{value:o.mie},uHr:{value:o.hKm},uHm:{value:o.mieH??o.hKm*.2},uG:{value:o.mieG??.7},uTint:{value:new U(...o.tint||[1,1,1])},uStrength:{value:o.strength??1},uExposure:n.uniforms.uExposure,uFade:n.uniforms.uFade,uLightDir:n.uniforms.uLightDir,uLightE:n.uniforms.uLightE,uAmbient:n.uniforms.uAmbient,uSteps:{value:14},...this.sharedRel}}),l=new Ne(this.sphereGeo,a);l.matrixAutoUpdate=!1,l.frustumCulled=!1,l.renderOrder=12,e.atmoMesh=l,e.atmoMat=a,e.objs.push(l)}if(t.rings&&t.rings.length){let o=Math.min(...t.rings.map(p=>p.r0)),a=Math.max(...t.rings.map(p=>p.r1)),l=r.ring&&this.tex[r.ring],c=c_(l?74500:o,l?140220:a,256,3),d=t.rings.slice(0,6).map(p=>new rt(p.r0,p.r1,p.tau,0));for(;d.length<6;)d.push(new rt);let h=t.id==="saturn",u=new ht({vertexShader:kf,fragmentShader:Uf,transparent:!0,depthWrite:!1,side:Ct,blending:Mn,blendEquation:It,blendSrc:kt,blendDst:Ws,uniforms:{uBodyRot:{value:new Be},uCenterRel:n.uniforms.uCenterRel,uPlanetR:{value:t.radiusKm},uInner:{value:l?74500:o},uOuter:{value:l?140220:a},uExposure:n.uniforms.uExposure,uFade:n.uniforms.uFade,uLightDir:n.uniforms.uLightDir,uLightE:n.uniforms.uLightE,uLightAng:n.uniforms.uLightAng,uAmbient:n.uniforms.uAmbient,tRing:{value:l?this.tex[r.ring]:this.blank},uHasTex:{value:l?1:0},uTint:{value:new U(.78,.72,.62)},uBands:{value:d},uBandCount:{value:t.rings.length},uPole:{value:new U(0,0,1)},uSeed:{value:Mi(t.id)%100},...this.sharedRel}}),f=new Ne(c,u);f.matrixAutoUpdate=!1,f.frustumCulled=!1,f.renderOrder=13,e.ringMesh=f,e.ringMat=u,e.objs.push(f),n.uniforms.tRing.value=l?this.tex[r.ring]:this.blank,n.uniforms.uRingInfo.value.set(l?74500:o,l?140220:a,this.cfg.visuals.planets.ringShadows*(l?.95:0),l?1:0)}}_makeStar(e,t){let n=t.id==="sun"&&this.tex.sun,s=new ht({vertexShader:zr,fragmentShader:Ff,uniforms:{uBodyRot:{value:new Be},uColor:{value:new U(...l_(t))},uRadiance:{value:t.surfaceRadiance},uExposure:{value:1},uFade:{value:1},uLimb:{value:t.limb??.6},uHasTex:{value:n?1:0},tSun:{value:n?this.tex.sun:this.blank},uSeed:{value:Mi(t.id)%100},uSpots:{value:t.teff<5200?1:.5},...this.sharedRel}}),r=new Ne(this.sphereGeo,s);r.matrixAutoUpdate=!1,r.frustumCulled=!1,r.renderOrder=10,e.mesh=r,e.mat=s,e.objs.push(r)}_makeBelt(e,t){let n=t.belt,s=un(hn(Mi(t.id),4242)),r=n.count,o=new Float32Array(r*3),a=new Float32Array(r);for(let h=0;h<r;h++){let u=n.peakAu+s.normal()*.5*(n.outerAu-n.innerAu)*.5,f=Ce(u,n.innerAu,n.outerAu)*Xe,p=s()*$t,v=s.normal()*n.thicknessAu*Xe*.5;o[h*3]=Math.cos(p)*f,o[h*3+1]=Math.sin(p)*f,o[h*3+2]=v,a[h]=.4+s()*.6}let l=new Mt;l.setAttribute("position",new gt(o,3)),l.setAttribute("aSize",new gt(a,1));let c=new ht({transparent:!0,depthWrite:!1,blending:Mn,blendEquation:It,blendSrc:kt,blendDst:kt,uniforms:{uExposure:{value:1},uE:{value:1},uTint:{value:new U(...n.tint)},uGain:{value:1}},vertexShader:`#include <common>
        attribute float aSize; uniform float uExposure; uniform float uE; uniform float uGain; varying float vA;
        #include <logdepthbuf_pars_vertex>
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float d = max(-mv.z, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp((1.2 + 5.0e5 / d) * (0.7 + 0.6 * aSize), 1.0, 4.5);
          // Real asteroids are far too small and dark to see; belts are drawn as a faint particle band with an explicit visibility gain (visuals.belts.gain)
          vA = uGain * uE * uExposure * 0.012 * (0.5 + aSize) / (1.0 + d / 1.2e8);
          #include <logdepthbuf_vertex>
        }`,fragmentShader:`precision highp float;
        #include <common>
        uniform vec3 uTint; varying float vA;
        #include <logdepthbuf_pars_fragment>
        void main(){
          #include <logdepthbuf_fragment>
          vec2 c = gl_PointCoord - 0.5; float f = exp(-dot(c, c) * 14.0);
          gl_FragColor = vec4(min(uTint * vA * f, vec3(8.0)), 1.0); }`}),d=new ta(l,c);d.frustumCulled=!1,d.matrixAutoUpdate=!1,d.renderOrder=5,e.points=d,e.mat=c,e.objs.push(d)}_buildOrbitLines(e){this.orbitLines=[];let t=256;for(let n of e.bodies){if(!n.orbit||n.kind==="belt"||n.kind==="star"||!n.parent||!n.orbit.periodSec||!isFinite(n.orbit.periodSec))continue;let s=new Float32Array((t+1)*3),r=n.orbit.periodSec/86400,o=2461e3,a=[0,0,0];for(let u=0;u<=t;u++)n.orbit.positionAt(o+r*u/t,a),s[u*3]=a[0],s[u*3+1]=a[1],s[u*3+2]=a[2];let l=new Mt;l.setAttribute("position",new gt(s,3));let c=n.kind==="moon"?[.45,.55,.7]:n.kind==="dwarf"?[.55,.5,.5]:[.5,.65,.5],d=new Pr({color:new Ze(...c),transparent:!0,opacity:0,depthWrite:!1,blending:On}),h=new ea(l,d);h.frustumCulled=!1,h.matrixAutoUpdate=!1,h.renderOrder=4,this.scene.add(h),this.orbitLines.push({body:n,line:h,mat:d,baseOpacity:this.cfg.visuals.orbitLines.opacity})}}update(e){let t=this.system;if(!t)return{hide:[],labels:[]};let n=e.camSys,s=e.jd,r=e.focalPx,o=this.cfg.visuals;this.sharedRel.uBetaCam.value.copy(e.betaCam),this.sharedRel.uGamma.value=e.gamma,this.spriteMat.uniforms.uBetaCam.value.copy(e.betaCam),this.spriteMat.uniforms.uExposure.value=e.exposure;let a=e.warp||{};this.sharedRel.uWDirCam.value.copy(a.dirCam||new U(0,0,-1)),this.sharedRel.uWBeta.value=a.beta||0,this.sharedRel.uWGamma.value=a.gamma||1,this.spriteMat.uniforms.uWDirCam.value.copy(this.sharedRel.uWDirCam.value);let l=[],c=[],d=0,h=this.spritePos,u=this.spriteCol,f={v:null},p=(x,M,E,A)=>{let R=1;for(let w of this.items){let b=w.body;if(b===x||b.kind==="belt")continue;let L=f.v.get(b);if(L.dist>=E)continue;let B=b.radiusKm/L.dist;if(B*r<.3)continue;let F=(M[0]*L.rel[0]+M[1]*L.rel[1]+M[2]*L.rel[2])/(E*L.dist),S=Math.acos(Ce(F,-1,1));if(!(S>A+B)&&(R*=1-Ea(A,B,S),R<=0))return 0}return R},v=(x,M,E,A)=>{d>=this.spriteCap||(h[d*4]=x[0],h[d*4+1]=x[1],h[d*4+2]=x[2],h[d*4+3]=M,u[d*4]=E[0],u[d*4+1]=E[1],u[d*4+2]=E[2],u[d*4+3]=A,d++)},m=t.stars,g=m.map(x=>x.positionAt(s)),y=[0,0,0],_=new Map;for(let x of this.items){let M=x.body,E=M.positionAt(s);y[0]=E[0]-n[0],y[1]=E[1]-n[1],y[2]=E[2]-n[2];let A=Math.hypot(y[0],y[1],y[2]);_.set(M,{p:E,rel:[y[0],y[1],y[2]],dist:A})}f.v=_;for(let x of this.items){let M=x.body,E=_.get(M),{rel:A,dist:R,p:w}=E,b=M.radiusKm/Math.max(R,.001)*r;if(x.angPx=b,x.dist=R,M.kind==="belt"){this._updateBelt(x,M,A,w,s,e);continue}let L=[];for(let S=0;S<m.length;S++){let D=m[S];if(D===M)continue;let P=g[S],N=P[0]-w[0],k=P[1]-w[1],q=P[2]-w[2],Z=Math.hypot(N,k,q)||1,O=Z/Xe;L.push({s:D,dir:[N/Z,k/Z,q/Z],E:D.lumV/(O*O),ang:Math.min(.3,D.radiusKm/Z),d:Z})}if(L.sort((S,D)=>D.E-S.E),x.lights=L,M.kind==="star"){M.catalogIndex!==void 0?l.push(M.catalogIndex):this.cat&&this.cat.sunIndex!==void 0&&M.id==="sun"&&l.push(this.cat.sunIndex);let S=wn(this.fadeEdge.lo,this.fadeEdge.hi,b),D=M.lumV/Math.pow(Math.max(R,1)/Xe,2)*p(M,A,R,M.radiusKm/Math.max(R,1));if(v(A,D,M.color,1-S),x.mesh.visible=b>this.fadeEdge.lo&&this._inFront(e,A,M.radiusKm),x.mesh.visible){this._setMatrix(x.mesh,M,s,A,1,!0);let P=x.mat.uniforms;P.uExposure.value=e.exposure,P.uFade.value=S,P.uBodyRot.value.setFromMatrix4(x.mesh.matrix.clone().setPosition(0,0,0)).multiplyScalar(1/M.radiusKm),this._normRot(P.uBodyRot.value)}o.labels.enabled&&c.push({body:M,rel:A,dist:R,angPx:b,kind:"star"});continue}let B=wn(this.fadeEdge.lo,this.fadeEdge.hi,b),F=b>this.fadeEdge.lo&&this._inFront(e,A,M.radiusKm*1.2);{let S=0;for(let D of L)S+=D.E;if(L.length){let D=Ce((L[0].dir[0]*-A[0]+L[0].dir[1]*-A[1]+L[0].dir[2]*-A[2])/Math.max(R,.001),-1,1),P=Math.acos(D),N=(Math.sin(P)+(Math.PI-P)*Math.cos(P))/Math.PI,q=(M.albedo??.3)*Math.pow(M.radiusKm/Math.max(R,1),2)*N*S*(2/3)*1.5*p(M,A,R,M.radiusKm/Math.max(R,1)),Z=M.meanColor||(M.meanColor=this._meanColor(M));v(A,q,Z,1-B)}}x.mesh.visible=F,F&&this._updateBodyMesh(x,M,s,A,R,w,e,B,_),x.cloudMesh&&(x.cloudMesh.visible=F),x.atmoMesh&&(x.atmoMesh.visible=F),x.ringMesh&&(x.ringMesh.visible=F||M.rings&&b*2.6>.7),x.ringMesh&&x.ringMesh.visible&&this._updateRing(x,M,s,A,e,B),o.labels.enabled&&c.push({body:M,rel:A,dist:R,angPx:b,kind:M.kind})}return this.spriteGeo.instanceCount=d,this.spritePosAttr.needsUpdate=!0,this.spriteColAttr.needsUpdate=!0,this._updateOrbitLines(e,_,s),{hide:l,labels:c,bodyInfo:_}}_inFront(e,t,n){let s=a_.set(t[0],t[1],t[2]).applyMatrix3(e.view),r=s.length();return r<n*1?!0:s.z<n*.5+0&&(-s.z>0||r<n*4)}_meanColor(e){if(qf[e.id])return qf[e.id];let t=e.look&&e.look.colors;return t&&t[1]?[t[1][0],t[1][1],t[1][2]]:[.7,.7,.7]}_normRot(e){let t=e.elements;for(let n=0;n<3;n++){let s=Math.hypot(t[n*3],t[n*3+1],t[n*3+2])||1;t[n*3]/=s,t[n*3+1]/=s,t[n*3+2]/=s}}_setMatrix(e,t,n,s,r,o=!1){let a=t.axesAt(n),l=t.radiusKm*r,c=e.matrix;return c.set(a.x[0]*l,a.z[0]*l,-a.y[0]*l,s[0],a.x[1]*l,a.z[1]*l,-a.y[1]*l,s[1],a.x[2]*l,a.z[2]*l,-a.y[2]*l,s[2],0,0,0,1),e.matrixWorld.copy(c),a}_updateBodyMesh(e,t,n,s,r,o,a,l,c){let d=e.mat.uniforms;this._applySpinLimit(t,n,a);let h=this._setMatrix(e.mesh,t,n,s,1);d.uBodyRot.value.set(h.x[0],h.z[0],-h.y[0],h.x[1],h.z[1],-h.y[1],h.x[2],h.z[2],-h.y[2]),d.uCenterRel.value.set(s[0],s[1],s[2]),d.uExposure.value=a.exposure,d.uFade.value=l,d.uPole.value.set(h.z[0],h.z[1],h.z[2]),d.uDetail.value=this.cfg.visuals.planets.detailBump,d.uNightGain.value=this.cfg.visuals.planets.nightLightGain;let u=e.lights;for(let v=0;v<2;v++){let m=u[v];if(m){d.uLightDir.value[v].set(m.dir[0],m.dir[1],m.dir[2]);let g=m.s.color;d.uLightE.value[v].set(g[0]*m.E,g[1]*m.E,g[2]*m.E),d.uLightAng.value[v]=Math.max(m.ang,1e-5)}else d.uLightE.value[v].set(0,0,0)}let f=2e-9;if(t.parent&&t.parent.kind!=="star"&&u[0]){let v=c.get(t.parent),m=c.get(t),g=Math.hypot(v.p[0]-m.p[0],v.p[1]-m.p[1],v.p[2]-m.p[2]),y=[(v.p[0]-m.p[0])/g,(v.p[1]-m.p[1])/g,(v.p[2]-m.p[2])/g],_=.5*(1+(y[0]*-u[0].dir[0]*-1+y[1]*-u[0].dir[1]*-1+y[2]*-u[0].dir[2]*-1)*0+(y[0]*u[0].dir[0]+y[1]*u[0].dir[1]+y[2]*u[0].dir[2])*-1*-1);f+=(t.parent.albedo??.3)*Math.pow(t.parent.radiusKm/g,2)*u[0].E*.5*Math.max(.02,_*.9)}d.uAmbient.value.set(f,f,f);let p=0;for(let v of e.occluders||[]){if(p>=3)break;let m=c.get(v);if(!m)continue;let g=c.get(t),y=m.p[0]-g.p[0],_=m.p[1]-g.p[1],x=m.p[2]-g.p[2];Math.hypot(y,_,x)>60*Math.max(t.radiusKm,v.radiusKm)+1e6&&!(t.parent===v||v.parent===t)||(d.uOcc.value[p].set(y,_,x,v.radiusKm),p++)}if(d.uOccCount.value=p,e.cloudMesh){let v=1+14/t.radiusKm*1+.0016;this._setMatrix(e.cloudMesh,t,n,s,v)}if(e.atmoMesh){let v=t.atmosphere,m=(t.radiusKm+v.topKm)/t.radiusKm*1.002;this._setMatrix(e.atmoMesh,t,n,s,m),e.atmoMat.side=r<t.radiusKm+v.topKm?zt:xn,e.atmoMat.uniforms.uStrength.value=(v.strength??1)*this.cfg.visuals.planets.atmosphere}}_applySpinLimit(e,t,n){if(!e.spin||e.spin.sync){e.spinOverride=void 0;return}let s=e.spinAngle?(e.spin.w0+e.spin.rateDegDay*(t-2451545))*Je:0,r=Math.abs(e.spin.rateDegDay/360)*n.timeScale/86400*86400/86400*1,o=n.timeScale/86400,a=Math.abs(e.spin.rateDegDay/360)*o,l=.45;if(a<=l){e.spinOverride=void 0,e._spinFree=null;return}e._spinFree==null&&(e._spinFree=s),e._spinFree+=Math.sign(e.spin.rateDegDay)*l*$t*(n.dtReal||.016),e.spinOverride=e._spinFree}_updateRing(e,t,n,s,r,o){let a=t.axesAt(n),l=e.ringMesh.matrix;l.set(a.x[0],a.y[0],a.z[0],s[0],a.x[1],a.y[1],a.z[1],s[1],a.x[2],a.y[2],a.z[2],s[2],0,0,0,1),e.ringMesh.matrixWorld.copy(l);let c=e.ringMat.uniforms;c.uBodyRot.value.set(a.x[0],a.y[0],a.z[0],a.x[1],a.y[1],a.z[1],a.x[2],a.y[2],a.z[2]),c.uExposure.value=r.exposure,c.uFade.value=1,c.uPole.value.set(a.z[0],a.z[1],a.z[2]);let d=e.lights||[];for(let h=0;h<2;h++){let u=d[h];if(u){c.uLightDir.value[h].set(u.dir[0],u.dir[1],u.dir[2]);let f=u.s.color;c.uLightE.value[h].set(f[0]*u.E,f[1]*u.E,f[2]*u.E),c.uLightAng.value[h]=Math.max(u.ang,1e-5)}else c.uLightE.value[h].set(0,0,0)}c.uAmbient.value.set(2e-9,2e-9,2e-9)}_updateBelt(e,t,n,s,r,o){let a=t.plane,l=e.points.matrix;if(a)l.set(a[0],a[1],a[2],n[0],a[3],a[4],a[5],n[1],a[6],a[7],a[8],n[2],0,0,0,1);else{let f=Math.cos(23.43928*Je),p=Math.sin(23.43928*Je);l.set(1,0,0,n[0],0,f,-p,n[1],0,p,f,n[2],0,0,0,1)}e.points.matrixWorld.copy(l);let c=e.mat.uniforms;c.uExposure.value=o.exposure,c.uGain.value=this.cfg.visuals.belts.gain;let d=t.parent,h=d?d.positionAt(r):[0,0,0],u=Math.max(t.belt.peakAu,.05);c.uE.value=(d&&d.lumV?d.lumV:1)/(u*u),e.points.visible=!0}_updateOrbitLines(e,t,n){let s=this.cfg.visuals.orbitLines.enabled&&e.showOrbits!==!1;for(let r of this.orbitLines||[]){let o=r.body,a=t.get(o.parent),l=t.get(o);if(!s||!a||!l){r.line.visible=!1;continue}r.line.visible=!0;let c=r.line.matrix;c.identity(),c.setPosition(a.rel[0],a.rel[1],a.rel[2]),r.line.matrixWorld.copy(c);let d=o.orbit.a||1,h=a.dist,u=d/Math.max(h,1)*e.focalPx,f=wn(.03,.35,l.dist/d),p=wn(4,40,u);r.mat.opacity=r.baseOpacity*f*p*.5,r.line.visible=r.mat.opacity>.004}}render(e,t){e.render(this.scene,t)}};function c_(i,e,t,n){let s=[],r=[];for(let a=0;a<=n;a++){let l=i+(e-i)*(a/n);for(let c=0;c<=t;c++){let d=c/t*$t;s.push(Math.cos(d)*l,Math.sin(d)*l,0)}}for(let a=0;a<n;a++)for(let l=0;l<t;l++){let c=a*(t+1)+l,d=c+1,h=c+t+1,u=h+1;r.push(c,d,h,d,u,h)}let o=new Mt;return o.setAttribute("position",new yt(s,3)),o.setIndex(r),o}function h_(i,e=1024){let t=un(i),n=document.createElement("canvas");n.width=e,n.height=e/2;let s=n.getContext("2d");s.fillStyle="#b9bcc0",s.fillRect(0,0,n.width,n.height);let r=28,o=8;for(let h=0;h<o;h++)for(let u=0;u<r;u++){let f=n.width/r,p=n.height/o,v=.82+t()*.2,m=Math.round(190*v);s.fillStyle=`rgb(${m},${m+2},${m+5})`,s.fillRect(u*f+1,h*p+1,f-2,p-2),t()<.12&&(s.fillStyle=`rgba(40,44,52,${.15+t()*.25})`,s.fillRect(u*f+3,h*p+3,f*(.3+t()*.6),p*(.3+t()*.6))),t()<.08&&(s.fillStyle="rgba(20,20,24,0.55)",s.fillRect(u*f+f*.2,h*p+p*.4,f*.6,2))}s.strokeStyle="rgba(30,32,38,0.55)",s.lineWidth=1;for(let h=0;h<=r;h++)s.beginPath(),s.moveTo(h*n.width/r,0),s.lineTo(h*n.width/r,n.height),s.stroke();for(let h=0;h<=o;h++)s.beginPath(),s.moveTo(0,h*n.height/o),s.lineTo(n.width,h*n.height/o),s.stroke();s.fillStyle="#d2672b",s.fillRect(0,n.height*.18,n.width,7),s.fillStyle="#1f2a3a",s.fillRect(0,n.height*.58,n.width,4),s.fillStyle="rgba(25,28,34,0.9)",s.font="bold 28px Menlo, monospace",s.fillText("MERIDIAN  ISV-0471",n.width*.18,n.height*.5),s.fillText("MERIDIAN  ISV-0471",n.width*.68,n.height*.5);for(let h=0;h<2200;h++)s.fillStyle=`rgba(20,20,24,${.05+t()*.15})`,s.fillRect(t()*n.width,t()*n.height,1+t()*2,1+t()*2);let a=new Gi(n);a.colorSpace=jt,a.wrapS=Bn,a.wrapT=Bn,a.anisotropy=8;let l=document.createElement("canvas");l.width=n.width,l.height=n.height,l.getContext("2d").drawImage(n,0,0);let d=new Gi(l);return d.wrapS=d.wrapT=Bn,{map:a,bump:d}}function Xf(i){let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d");if(i==="radiator"){t.fillStyle="#d9dadc",t.fillRect(0,0,512,512),t.strokeStyle="#7e8288",t.lineWidth=2;for(let s=0;s<=16;s++)t.beginPath(),t.moveTo(s*32,0),t.lineTo(s*32,512),t.stroke(),t.beginPath(),t.moveTo(0,s*32),t.lineTo(512,s*32),t.stroke();t.fillStyle="rgba(40,42,48,0.18)";for(let s=0;s<16;s+=2)t.fillRect(0,s*32,512,32)}else{t.fillStyle="#0c1424",t.fillRect(0,0,512,512),t.strokeStyle="#2f4d86",t.lineWidth=2;for(let s=0;s<=8;s++)t.beginPath(),t.moveTo(s*64,0),t.lineTo(s*64,512),t.stroke();for(let s=0;s<=16;s++)t.beginPath(),t.moveTo(0,s*32),t.lineTo(512,s*32),t.stroke();t.fillStyle="rgba(70,120,200,0.12)";for(let s=0;s<8;s++)for(let r=0;r<16;r++)(s+r)%2&&t.fillRect(s*64+2,r*32+2,60,28)}let n=new Gi(e);return n.colorSpace=jt,n.anisotropy=8,n}function Kf(i,e=64){let t=i.map(([s,r])=>new Fe(s,r)),n=new na(t,e);return n.rotateX(Math.PI/2),n.computeVertexNormals(),n}function fh(i){let e=new Jn,t=h_(471),n=Xf("radiator"),s=Xf("pv"),r=(re,ve=.5,ae=.7)=>new ni({color:re,roughness:ve,metalness:ae}),o=new ni({map:t.map,bumpMap:t.bump,bumpScale:1.4,roughness:.52,metalness:.55});o.map.repeat.set(2,3);let a=r(2106412,.6,.6),l=new ni({color:13214282,roughness:.32,metalness:.95}),c=new ni({color:659480,roughness:.08,metalness:.2,emissive:16767392,emissiveIntensity:0}),h=Kf([[.01,-37.5],[.7,-36.6],[1.7,-34.4],[2.7,-30.8],[3.4,-26.5],[3.85,-20.5],[4.1,-12],[4.2,-2],[4.2,8],[4,14],[3.6,19.5],[3.1,23.5],[3,25.5]].map(([re,ve])=>[re,ve]),72),u=new Ne(h,o);u.castShadow=u.receiveShadow=!0,e.add(u);let f=new Ne(new bn(1,32,20),o);f.scale.set(2.6,1.7,6.6),f.position.set(0,3.5,-24.5),f.castShadow=f.receiveShadow=!0,e.add(f);let p=new Ne(new _n(3.3,.55,3.6),c);p.position.set(0,4.6,-27.6),p.rotation.x=.28,e.add(p);let v=new Ne(new Hn(3.15,3.35,5.6,40),a);v.rotation.x=Math.PI/2,v.position.set(0,0,28),v.castShadow=!0,e.add(v);let m=[[2.1,30.6],[2.6,31.8],[3.3,33.8],[3.8,36.2],[3.8,36.5],[3.55,36.5],[3.1,34.2],[2.4,32],[1.8,30.8]],g=new Ne(Kf(m,48),new ni({color:3816772,roughness:.35,metalness:.9,side:Ct}));g.castShadow=!0,e.add(g);let _={map:(()=>{let re=document.createElement("canvas");re.width=re.height=128;let ve=re.getContext("2d"),ae=ve.createRadialGradient(64,64,0,64,64,64);ae.addColorStop(0,"rgba(255,250,235,1)"),ae.addColorStop(.18,"rgba(255,214,140,0.95)"),ae.addColorStop(.38,"rgba(255,150,60,0.5)"),ae.addColorStop(.68,"rgba(255,100,30,0.14)"),ae.addColorStop(1,"rgba(255,80,20,0)"),ve.fillStyle=ae,ve.fillRect(0,0,128,128);let Se=new Gi(re);return Se.colorSpace=jt,Se})(),transparent:!0,blending:On,depthWrite:!1},x=new ei({..._,opacity:.9,side:Ct}),M=new Ne(new er(3.45,40),x);M.position.set(0,0,36.3),M.rotation.y=Math.PI,e.add(M);let E=new ei({..._,opacity:.9,side:Ct}),A=new Ne(new er(2,32),E);A.position.set(0,0,31.4),A.rotation.y=Math.PI,e.add(A);let R=new Qs({..._,opacity:0,color:16756848}),w=new Cr(R);w.position.set(0,0,37.5),w.scale.set(13,13,1),e.add(w);let b=new Ne(new Hn(4.35,4.35,.5,48),l);b.rotation.x=Math.PI/2,b.position.set(0,0,11.5),b.castShadow=!0,e.add(b);let L=b.clone();L.position.z=12.4,L.scale.set(.96,1,.96),e.add(L);let B=un(99);for(let re=0;re<38;re++){let ve=.5+B()*1.6,ae=.2+B()*.4,Se=.8+B()*2.6,Pe=new Ne(new _n(ve,ae,Se),B()<.2?a:o),Ve=B()*Math.PI*2,z=-18+B()*34,ze=(z<-12?3.9:4.2)+ae*.3;Pe.position.set(Math.cos(Ve)*ze,Math.sin(Ve)*ze,z),Pe.rotation.z=Ve-Math.PI/2,Pe.castShadow=Pe.receiveShadow=!0,e.add(Pe)}let F=new Ne(new Hn(.06,.1,5.5,8),a);F.position.set(.9,6,-3),e.add(F);let S=new Ne(new bn(1.5,24,12,0,Math.PI*2,0,Math.PI/3),r(14540253,.3,.9));S.position.set(.9,8.9,-3),S.rotation.x=-.5,S.castShadow=!0,e.add(S);let D=new Ne(new Hn(.04,.04,7,6),a);D.position.set(-1.3,6.4,9),e.add(D);let P=new ni({map:n,roughness:.55,metalness:.3,side:Ct}),N=[];for(let re of[-1,1]){let ve=new Ne(new _n(5.2,.35,1.6),o);ve.position.set(re*6.6,.4,1),ve.castShadow=!0,e.add(ve);let ae=new Ne(new _n(11.5,.12,15),P);ae.position.set(re*14.4,.4,3.2),ae.rotation.y=re*-.08,ae.castShadow=ae.receiveShadow=!0,e.add(ae),N.push(ae);let Se=new Ne(new _n(11.7,.22,.3),l);Se.position.set(re*14.4,.4,-4.4),e.add(Se)}let k=[],q=[],Z=new Jn;for(let re of[-1,1]){let ve=new Ne(new _n(5.4,.5,1.2),a);ve.position.set(re*6.4,-2.2,8),ve.rotation.z=re*-.18,e.add(ve);let ae=new Ne(new Hn(1.15,1,29,24),o);ae.rotation.x=Math.PI/2,ae.position.set(re*9.2,-3.3,8),ae.castShadow=ae.receiveShadow=!0,e.add(ae);let Se=new Ne(new bn(1.15,20,12,0,Math.PI*2,0,Math.PI/2),o);Se.rotation.x=-Math.PI/2,Se.position.set(re*9.2,-3.3,-6.5),Se.castShadow=!0,e.add(Se);for(let We=0;We<8;We++){let Ee=new ni({color:661028,emissive:4892927,emissiveIntensity:0,roughness:.3,metalness:.4}),je=new Ne(new sa(1.26,.14,10,28),Ee);je.position.set(re*9.2,-3.3,-3.5+We*2.9),e.add(je),k.push(Ee)}let Pe=new Ne(new ia(.95,1.5,24),a);Pe.rotation.x=-Math.PI/2,Pe.position.set(re*9.2,-3.3,23.4),e.add(Pe);let Ve=new ei({color:16777215,transparent:!0,opacity:0,blending:On,depthWrite:!1,side:Ct}),z=new Ne(new Hn(1.52,1.32,29.5,28,1,!0),Ve);z.rotation.x=Math.PI/2,z.position.set(re*9.2,-3.3,8),e.add(z),q.push(Ve);let ze=new Ne(new bn(1.3,16,10),Ve.clone());ze.position.set(re*9.2,-3.3,-6.6),e.add(ze),q.push(ze.material);let Oe=new Ne(new er(.9,20),new ei({color:6732799,transparent:!0,opacity:0,blending:On,depthWrite:!1}));Oe.position.set(re*9.2,-3.3,24.3),Oe.rotation.y=Math.PI,e.add(Oe),Z.add(Oe)}for(let re of[-30,20])for(let ve of[0,1,2,3]){let ae=new Ne(new _n(.7,.35,.9),a),Se=ve*Math.PI/2+Math.PI/4,Pe=re<0?3:3.55;ae.position.set(Math.cos(Se)*Pe,Math.sin(Se)*Pe,re),ae.rotation.z=Se-Math.PI/2,e.add(ae)}let O=[],J=[[-18.8,.7,5,16722474,"port"],[18.8,.7,5,2817877,"stbd"],[0,3.9,24.2,16777215,"tail"],[0,-4.4,-22,16777215,"strobe"]];for(let[re,ve,ae,Se,Pe]of J){let Ve=new ei({color:Se,transparent:!0,blending:On,depthWrite:!1}),z=new Ne(new bn(.28,10,8),Ve);z.position.set(re,ve,ae),e.add(z),O.push({mesh:z,kind:Pe,mat:Ve});let ze=new Cr(new Qs({color:Se,transparent:!0,opacity:0,blending:On,depthWrite:!1,map:u_()}));ze.scale.set(3,3,1),ze.position.copy(z.position),e.add(ze),O[O.length-1].halo=ze}let fe=new ht({transparent:!0,depthWrite:!1,blending:On,side:Ct,uniforms:{uPower:{value:0},uTime:{value:0},uColor:{value:new Ze(1,.5,.14)}},vertexShader:"varying vec2 vUv; varying vec3 vP; void main(){ vUv=uv; vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`precision highp float; varying vec2 vUv; varying vec3 vP; uniform float uPower; uniform float uTime; uniform vec3 uColor;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
      void main(){ float t = vUv.y;   // 0 at nozzle, 1 at tip
        float core = pow(1.0 - t, 1.5);
        float tur = n(vec2(vUv.x*8.0, t*6.0 - uTime*11.0))*0.6 + n(vec2(vUv.x*16.0, t*12.0 - uTime*17.0))*0.4;
        float edge = 1.0 - abs(vUv.x*2.0-1.0);
        // standard chemical-rocket flame: white-hot core, yellow, orange skirt, with a few shock diamonds along the axis
        float diamonds = 0.78 + 0.22 * cos(t * 38.0 - uTime * 2.0) * smoothstep(0.0, 0.25, t) * (1.0 - t);
        float a = core * (0.5 + 0.7*tur) * smoothstep(0.0, 0.55, edge) * uPower * diamonds;
        vec3 hot = vec3(1.0, 0.97, 0.88), mid = vec3(1.0, 0.72, 0.28), cool = uColor;
        float h = smoothstep(0.35, 1.0, edge) * (1.0 - t * 0.7);
        vec3 c = mix(mix(cool, mid, smoothstep(0.1, 0.6, edge + 0.2 - t * 0.5)), hot, h * h) * a;
        gl_FragColor = vec4(c*1.0, 1.0); }`}),X=new Ne(new Hn(.4,3.2,1,32,1,!0),fe);X.geometry.translate(0,.5,0),X.rotation.x=Math.PI/2,X.position.set(0,0,36.2),X.frustumCulled=!1,e.add(X),X.userData.baseLen=1;let ne=new Jn,ge=30.6;ne.position.set(0,0,ge);for(let re of[g,M,A,w,X])re.position.z-=ge,ne.add(re);return e.add(ne),e.traverse(re=>{re.isMesh&&re.material&&re.material.isMeshStandardMaterial&&(re.castShadow=re.castShadow||!1)}),{root:e,hullMat:o,coilMats:k,engineGlow:M,plume:X,plumeMat:fe,lights:O,nacelles:Z,update(re,ve,ae){ae.gimbal&&(ne.rotation.x+=(ae.gimbal.x-ne.rotation.x)*1,ne.rotation.y+=(ae.gimbal.y-ne.rotation.y)*1),fe.uniforms.uTime.value=ve;let Se=dh(ae.engines?ae.engines.rocket:ae.throttle);fe.uniforms.uPower.value=Se*i.visuals.ship.engineGlow;let Pe=4+26*Math.pow(Se,.8);X.scale.set(.8+.4*Se,Pe,.8+.4*Se),X.visible=Se>.02,x.opacity=Se>.02?.2+.75*Se:0,E.opacity=Se>.02?.3+.7*Se:0,R.opacity=Se>.02?(.08+.34*Se)*i.visuals.ship.engineGlow:0,w.scale.setScalar(10+8*Se);let Ve=dh(ae.engines?ae.engines.cruise:0),z=dh(ae.engines?ae.engines.warp:ae.warp),ze=ae.speed01||0,Oe=z/(Ve+z+1e-6),We=z>.01?.78+.22*Math.sin(ve*(2.2+6*ze)*Math.PI*2*.5):1,Ee=Ve*.8+z*We,je=1+(.3-1)*Oe,Te=.97+(.6-.97)*Oe,I=.92+(1-.92)*Oe;for(let T of k)T.emissive.setRGB(je,Te,I),T.emissiveIntensity=.04+3.2*Ee;for(let T of q)T.color.setRGB(je,Te,I),T.opacity=.34*Ee*Ee+.06*Ee;for(let T of Z.children)T.material.color.setRGB(je,Te,I),T.material.opacity=.85*Ee;for(let T of O){let H=1;T.kind==="strobe"?H=Math.floor(ve*1.1)%2===0&&ve*1.1%1<.12?1:0:T.kind==="tail"&&(H=ve%1.6<.8?.9:.25),T.mat.opacity=H*(i.visuals.ship.lights?1:0),T.halo.material.opacity=H*.55*(i.visuals.ship.lights?1:0)}c.emissiveIntensity=0}}}var dh=i=>i<0?0:i>1?1:i,Aa;function u_(){if(Aa)return Aa;let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Aa=new Gi(i),Aa}var d_=`
varying vec3 vN; varying vec3 vP; varying vec3 vView;
void main() {
  vP = position; vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}`,f_=`
precision highp float;
varying vec3 vN; varying vec3 vP; varying vec3 vView;
uniform float uForm;        // 0..1 bubble strength
uniform float uTime;
uniform float uSpeed;       // 0..1 log speed
uniform float uPulse;       // collapse / formation shock 0..1
uniform float uOpacity;
uniform vec3 uForwardView;  // ship forward in view space
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y); }
float fbm2(vec2 p){ float a=0.5,s=0.0; for(int i=0;i<4;i++){ s+=a*noise(p); p*=2.1; a*=0.5;} return s; }
// hexagonal tiling distance
float hexEdge(vec2 p){
  const vec2 s = vec2(1.0, 1.7320508);
  vec4 hC = floor(vec4(p, p - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
  vec4 h = vec4(p - hC.xy * s, p - (hC.zw + 0.5) * s);
  vec2 q = dot(h.xy,h.xy) < dot(h.zw,h.zw) ? h.xy : h.zw;
  q = abs(q); return max(dot(q, s * 0.5), q.x);
}
void main() {
  vec3 n = normalize(vN); vec3 v = normalize(vView);
  float fres = pow(1.0 - abs(dot(n, v)), 2.4);
  // position along the ship axis: +1 ahead (-Z in model space), -1 behind
  float z = -vP.z / 70.0;
  vec3 pn = normalize(vP);
  float rxy = length(pn.xz);
  // the field is a flat lens (wide in the ship's X/Y plane, thin along the axis): ripples travel outward across it, quickening with speed
  float rings = 0.5 + 0.5 * sin(rxy * 16.0 - uTime * (2.5 + 9.0 * uSpeed));
  rings = pow(rings, 6.0) * smoothstep(0.1, 0.5, abs(pn.y));
  // hexagonal lattice on the two broad faces (planar mapping: no pole pinch), drifting slowly
  float cells = hexEdge(pn.xz * 9.0 + vec2(uTime * (0.25 + 0.5 * uSpeed), 0.0) + noise(pn.xz * 3.0 + uTime * 0.3) * 0.4);
  float lattice = smoothstep(0.43, 0.5, cells) * (0.35 + 0.65 * fbm2(pn.xz * 5.0 + uTime * 0.5)) * smoothstep(0.12, 0.55, abs(pn.y));
  float shimmer = fbm2(pn.xz * 6.0 + vec2(uTime * 0.5, -uTime * 0.7 * (1.0 + uSpeed)));
  // blue-white leading wall \u2192 amber trailing wall (Doppler of the compressed / stretched space)
  vec3 front = vec3(0.55, 0.82, 1.35), back = vec3(1.2, 0.5, 0.18);
  vec3 col = mix(back, front, smoothstep(-0.7, 0.7, pn.z * -1.0));
  float rim = smoothstep(0.15, 1.0, fres);
  float wall = rim * 1.15 + lattice * (0.05 + 0.5 * rim) + rings * 0.12 * rim + shimmer * 0.05 * (0.3 + rim);
  wall += uPulse * (0.35 + 1.2 * rim);
  float a = wall * uForm * uOpacity;
  gl_FragColor = vec4(col * a * 0.9, 1.0);
}`,p_=`
attribute vec4 aP; attribute vec2 aC;
uniform float uTime, uFlow, uLen, uSpan, uBub, uWidth, uAmp;
uniform vec2 uRes;
varying vec3 vCol; varying float vA; varying float vEdge; varying float vSide;
vec3 place(float zc, float rr, float th, float off) {
  float z = (zc - 0.5) * uSpan - off;
  float g = exp(-z * z / (2.0 * pow(1.25 * uBub, 2.0)));
  float c = cos(th), s = sin(th);
  float rho = 1.0 / sqrt(c * c / 1.0 + s * s / 0.07);                      // the obstacle is a flat lens in the ship's X/Z plane (thin in Y): the stream parts around that ellipse
  float r = sqrt(rr * rr + pow(uBub * 1.08 * g * rho, 2.0));
  return vec3(r * c, r * s, z);
}
void main() {
  float jit = 0.55 + 0.9 * aP.w;
  float zc = fract(aP.z + uTime * uFlow * jit / uSpan);
  float rr = 45.0 + 1800.0 * pow(aP.y, 1.7);
  vec3 ph = place(zc, rr, aP.x, 0.0), pt = place(zc, rr, aP.x, uLen * jit);
  mat4 mvp = projectionMatrix * modelViewMatrix;
  vec4 ch = mvp * vec4(ph, 1.0), ct = mvp * vec4(pt, 1.0);
  float ok = (ch.w > 8.0 && ct.w > 8.0) ? 1.0 : 0.0;
  vec2 sh = ch.xy / max(ch.w, 1e-3), st = ct.xy / max(ct.w, 1e-3);
  vec2 d = (sh - st) * uRes * 0.5; float l = length(d);
  vec2 dir = l > 1e-3 ? d / l : vec2(1.0, 0.0), n = vec2(-dir.y, dir.x);
  vec4 c = aC.x > 0.5 ? ch : ct;
  c.xy += n * aC.y * uWidth * 2.0 / uRes * c.w;
  gl_Position = c;
  float fadeSpan = smoothstep(0.0, 0.12, zc) * (1.0 - smoothstep(0.86, 1.0, zc));
  float tAft = smoothstep(-uSpan * 0.18, uSpan * 0.18, ph.z);                                  // ahead of the lens: blue-white, behind: amber
  vCol = mix(vec3(0.55, 0.8, 1.35), vec3(1.25, 0.55, 0.22), tAft) * (0.45 + 0.8 * aP.w);
  vA = ok * fadeSpan * smoothstep(10.0, 70.0, max(ch.w, 0.0)) * uAmp / (1.0 + rr / 700.0);
  vEdge = aC.x; vSide = aC.y;
}`,m_=`
precision highp float;
varying vec3 vCol; varying float vA; varying float vEdge; varying float vSide;
void main() {
  float e = clamp(vEdge, 0.0, 1.0);
  float a = vA * e * e * (1.0 - min(vSide * vSide, 1.0));
  gl_FragColor = vec4(vCol * a, 1.0);
}`,Ra=class{constructor(e,t){this.gfx=e,this.cfg=t,this.scene=new ti,this.camera=new qt(t.camera.fovDeg,1,.15,6e3),this.ship=fh(t),this.scene.add(this.ship.root),this.sun=new Ir(16777215,3),this.sun.castShadow=!!t.visuals.ship.shadows,this.sun.shadow.mapSize.set(2048,2048);let n=this.sun.shadow.camera;n.left=-45,n.right=45,n.top=45,n.bottom=-45,n.near=1,n.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.15,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Ir(11189247,0),this.scene.add(this.fill),this.amb=new aa(16777215,0),this.scene.add(this.amb),this._buildEnv(),this.bubbleMat=new ht({vertexShader:d_,fragmentShader:f_,transparent:!0,depthWrite:!1,side:xn,blending:Mn,blendEquation:It,blendSrc:kt,blendDst:kt,uniforms:{uForm:{value:0},uTime:{value:0},uSpeed:{value:0},uPulse:{value:0},uOpacity:{value:1},uForwardView:{value:new U(0,0,-1)}}}),this.bubble=new Ne(new bn(70,96,64),this.bubbleMat),this.bubble.scale.set(1.9,.5,1.7),this.bubble.renderOrder=50,this.bubble.visible=!1,this.bubble.frustumCulled=!1,this.scene.add(this.bubble);{let r=new Float32Array(7800),o=new Float32Array(650*4*4),a=new Float32Array(650*4*2),l=new Uint32Array(650*6),c=12345,d=()=>(c=c*1664525+1013904223>>>0)/4294967296;for(let u=0;u<650;u++){let f=d()*Math.PI*2,p=d(),v=d(),m=d();for(let g=0;g<4;g++){let y=u*4+g;o.set([f,p,v,m],y*4),a.set([g<2?0:1,g%2?1:-1],y*2)}l.set([u*4,u*4+1,u*4+2,u*4+1,u*4+3,u*4+2],u*6)}let h=new Mt;h.setAttribute("position",new gt(r,3)),h.setAttribute("aP",new gt(o,4)),h.setAttribute("aC",new gt(a,2)),h.setIndex(new gt(l,1)),this.flowMat=new ht({vertexShader:p_,fragmentShader:m_,transparent:!0,depthWrite:!1,depthTest:!0,side:Ct,blending:Mn,blendEquation:It,blendSrc:kt,blendDst:kt,uniforms:{uTime:{value:0},uFlow:{value:0},uLen:{value:0},uSpan:{value:3600},uBub:{value:120},uWidth:{value:1.6},uAmp:{value:0},uRes:{value:new Fe(1,1)}}}),this.flow=new Ne(h,this.flowMat),this.flow.frustumCulled=!1,this.flow.renderOrder=40,this.flow.visible=!1,this.scene.add(this.flow)}this.t=0}_buildEnv(){let e=this.gfx.renderer,t=new js(e),n=new ti,s=new ht({side:zt,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`precision highp float; varying vec3 vD;
        void main(){ float d = vD.y;                       // +Y = toward the nearest big body (reflected light)
          float g = smoothstep(-0.15, 1.0, d);
          vec3 c = vec3(0.0) + vec3(1.0, 1.0, 1.0) * pow(g, 1.4);
          // faint cool floor so the far side is not pure black
          c += vec3(0.02, 0.025, 0.035);
          gl_FragColor = vec4(c, 1.0); }`});n.add(new Ne(new bn(10,32,16),s)),this.envRT=t.fromScene(n,.04),this.scene.environment=this.envRT.texture,t.dispose()}update(e){this.t+=e.dt||0;let t=this.ship.root;t.quaternion.copy(e.quat),t.visible=e.cam.dist>this.cfg.ship.lengthM*this.cfg.camera.hideShipBelowLengths;let{yaw:n,pitch:s,dist:r,up:o}=e.cam,a=Math.cos(s),l=new U(Math.sin(n)*a,Math.sin(s),Math.cos(n)*a),c=l.clone().negate(),d=new U(0,a>=0?1:-1,0),h=new U().crossVectors(c,d);h.lengthSq()<1e-8&&h.set(Math.cos(n),0,-Math.sin(n)),h.normalize();let u=new U().crossVectors(h,c),f=new Et().setFromRotationMatrix(new it().makeBasis(h,u,c.clone().negate())),p=l.clone().multiplyScalar(r).add(new U(0,o,0)),v=1-wn(this.cfg.ship.lengthM*.15,this.cfg.ship.lengthM*1,r),m=(e.camFrame||e.quat).clone().slerp(e.quat,v),g=m.clone().multiply(f),y=p.clone().applyQuaternion(m);this.camera.position.copy(y),this.camera.quaternion.copy(g),this.camera.near=Math.max(.15,(r-60)*.1),this.camera.far=r+4500,this.camera.fov=e.fov,this.camera.aspect=e.aspect,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0);let _=e.exposure,x=Math.PI,M=e.sunE,E=e.sunVisible??1;this.sun.color.setRGB(1,1,1),this.sun.intensity=x*_*1*Math.max(M[0]*.2126+M[1]*.7152+M[2]*.0722,0)*E,this.sun.color.setRGB(M[0]/(M[1]||1),1,M[2]/(M[1]||1)),this.sun.color.multiplyScalar(1);let A=new U().fromArray(e.sunDir);this.sun.position.copy(A).multiplyScalar(200),this.sun.target.position.set(0,0,0),this.sun.visible=E>.001,this.sun.castShadow=!!this.cfg.visuals.ship.shadows;let R=e.bodyShine||0;this.scene.environmentIntensity=x*_*(R*1+4e-9*0+0)+0;let w=new U().fromArray(e.bodyDir||[0,1,0]),b=new Et().setFromUnitVectors(new U(0,1,0),w);this.scene.environmentRotation=new Ht().setFromQuaternion(b),this.amb.intensity=x*_*(e.ambientE||0)+.015*(1-Math.min(1,e.warp.form))*(this.cfg.visuals.ship.shadowFill??1),this._updateOthers(e),this.ship.update(e.dt||0,this.t,{gimbal:e.gimbal,engines:e.engines,speed01:e.warp.speed01,throttle:e.throttle,warp:e.warp.form,engineOn:!0});let L=e.warp.form;if(this.bubble.visible=L>.002||e.warp.pulse>.01,this.bubble.visible){let B=this.bubbleMat.uniforms;B.uForm.value=L,B.uTime.value=this.t,B.uSpeed.value=e.warp.speed01,B.uPulse.value=e.warp.pulse,B.uOpacity.value=this.cfg.warp.visual.bubbleOpacity;let F=.35+.65*wn(0,.6,L);this.bubble.scale.set(1.9*F,.5*F,1.7*F*(1+.12*e.warp.speed01)),this.bubble.quaternion.copy(e.quat)}{let B=e.warp.speed01,F=L*(.7-.4*B)*this.cfg.warp.visual.streakScale;if(this.flow.visible=F>.004,this.flow.visible){let S=this.flowMat.uniforms;S.uTime.value=this.t,S.uFlow.value=350+9e3*Math.pow(B,1.2),S.uLen.value=40+900*B,S.uAmp.value=.22*F,S.uBub.value=133*(.35+.65*wn(0,.6,L)),S.uRes.value.set(this.gfx.W,this.gfx.H),S.uWidth.value=Math.max(1.2,1.8*this.gfx.W/1600),this.flow.quaternion.copy(e.quat)}}return{camQuat:g,offsetWorld:y}}_updateOthers(e){let t=e.others||[],n=this.others||(this.others=[]);for(;n.length<Math.min(t.length,this.cfg.visitors.maxModels);){let s=fh(this.cfg);s.root.visible=!1,this.scene.add(s.root),n.push(s)}n.forEach((s,r)=>{let o=t[r];s.root.visible=!!o,o&&(s.root.position.set(o.relKm[0]*1e3,o.relKm[1]*1e3,o.relKm[2]*1e3),s.root.quaternion.set(o.quat[0],o.quat[1],o.quat[2],o.quat[3]).normalize(),s.update(e.dt||0,this.t,{engines:{rocket:o.eng[0],cruise:o.eng[1],warp:o.eng[2]},speed01:o.eng[2],throttle:o.eng[0],warp:0,gimbal:{x:0,y:0}}))})}render(e){e.render(this.scene,this.camera)}};var ft=299792.458,dn=i=>new U(i[0],i[1],i[2]),Ca=class{constructor(e,t){this.uni=e,this.cfg=t,this.cat=e.cat;let n=t.sim.startTime;this.jd=n==="now"||!n?sh(new Date):sh(new Date(n)),this.timeIndex=t.time.initialStep,this.timeScale=t.time.steps[this.timeIndex],this.timeEff=this.timeScale,this.timeAuto=t.time.auto.enabled,this.system=e.solar,this.ref=null,this.anchorPc=[0,0,0],this.pos=[0,0,0],this.vel=[0,0,0],this.q=new Et,this.angVel=new U,this.qCam=new Et,this.camRecentre=0,this._attRate=0,this.gimbal={x:0,y:0},this._attErr=null,this._dtFrame=1/60,this.speedTarget=0,this.speed=0,this.warp={on:!1,c:0,step:0,form:0,pulse:0,flash:0,capC:1/0,capWhy:"",dropping:!1,rampTimer:0},this.mode="free",this.orbit=null,this.course=null,this.trip={elapsed:0,start:null,label:""},this.input={throttle:0,yaw:0,pitch:0,roll:0,brake:!1},this.messages=[],this.msgTimer=0,this.lastSafeBody=null,this.safeHit=0,this.frameCount=0,this.tour=null,this.tourPace=t.tour.defaultPace,this._destCache=null,this._destT=-1,this.eng={rocket:0,cruise:0,warp:0},this.ins=null,this.xfer=null,this.thrust=0,this.thrustT=0,this.flipping=!1,this.intentDir=null,this.cam={yaw:0,pitch:.28,dist:t.ship.lengthM*t.camera.chaseDistanceLengths,up:t.ship.lengthM*.1,yawT:0,pitchT:.28,distT:t.ship.lengthM*t.camera.chaseDistanceLengths,drift:!1},this.autoCamRecenter=0,this.startTour=t.sim.startWithTour,this.placeAtBody(e.solar.get("earth"),5.5,.9,.3)}say(e,t=4){this.messages.push({msg:e,t}),this.messages.length>4&&this.messages.shift()}refPos(e=this.jd){return this.ref?this.ref.positionAt(e):[0,0,0]}refVel(e=this.jd){return this.ref?this.ref.velocityAt(e):[0,0,0]}sysPos(e=this.jd){let t=this.refPos(e);return[t[0]+this.pos[0],t[1]+this.pos[1],t[2]+this.pos[2]]}sysVel(e=this.jd){let t=this.refVel(e);return[t[0]+this.vel[0],t[1]+this.vel[1],t[2]+this.vel[2]]}shipPc(e=this.jd){let t=this.sysPos(e),n=this.system?this.system.originPc:this.anchorPc;return[n[0]+t[0]/st,n[1]+t[1]/st,n[2]+t[2]/st]}forward(){return new U(0,0,-1).applyQuaternion(this.q)}up(){return new U(0,1,0).applyQuaternion(this.q)}right(){return new U(1,0,0).applyQuaternion(this.q)}setRef(e,t=this.jd){if(e===this.ref)return;let n=this.sysPos(t),s=this.sysVel(t);this.ref=e;let r=this.refPos(t),o=this.refVel(t);this.pos=[n[0]-r[0],n[1]-r[1],n[2]-r[2]],this.vel=[s[0]-o[0],s[1]-o[1],s[2]-o[2]]}enterOrbit(e,t,n,s,r=0,o=!1){this.setRef(e);let a=Math.sqrt(Math.max(e.gm,1e-6)/(t*t*t))*(o?-1:1);this.orbit={body:e,r:t,ex:n,ey:s,theta:r,omega:a},this._applyOrbit(0)}_applyOrbit(e){let t=this.orbit,n=t.omega*e,s=this.cfg.ship.maxOrbitRateRadPerSec*Math.max(this._dtFrame,1/240);Math.abs(n)>s&&(n=Math.sign(n)*s),t.theta+=n,this._applyOrbitState()}_applyOrbitState(){let e=this.orbit,t=Math.cos(e.theta),n=Math.sin(e.theta);this.pos=[e.r*(t*e.ex[0]+n*e.ey[0]),e.r*(t*e.ex[1]+n*e.ey[1]),e.r*(t*e.ex[2]+n*e.ey[2])];let s=e.r*e.omega;this.vel=[s*(-n*e.ex[0]+t*e.ey[0]),s*(-n*e.ex[1]+t*e.ey[1]),s*(-n*e.ex[2]+t*e.ey[2])]}breakOrbit(){this.orbit&&(this.orbit=null,this.speedTarget=et(this.vel))}placeAtBody(e,t,n=.6,s=.25){let r=Math.max(e.safeRadiusKm(this.cfg),e.radiusKm*t),o=vt([Math.cos(n)*Math.cos(s),Math.sin(n)*Math.cos(s),Math.sin(s)]),a=vt(cn(e.pole,o));(!isFinite(a[0])||et(a)<1e-6)&&(a=si(o)),this.system=e.system,this.enterOrbit(e,r,o,a,0);let l=dn(this.vel).normalize();this._lookAlong(l,1/0,new U(0,0,1))}_lookAlong(e,t=1/0,n){let s=e.clone().normalize();if(s.lengthSq()<.5)return;let r=n?n.clone():this.up().clone();Math.abs(r.dot(s))>.98&&(r=new U(0,0,1)),Math.abs(r.dot(s))>.98&&(r=new U(0,1,0));let o=new it().lookAt(new U(0,0,0),s.clone(),r),a=new Et().setFromRotationMatrix(o);if(t===1/0){this.q.copy(a),this.qCam.copy(a),this._attRate=0;return}let l=this.cfg.ship,c=Math.max(this._dtFrame,1e-4),d=this.q.angleTo(a);if(d<1e-4){this._attRate*=Math.exp(-c/.2);return}let h=Math.min(t/c,l.maxTurnDegPerSec*Math.PI/180),u=Math.min(h,l.attitudeGain*d*1+8e-4);this._attRate+=(u-this._attRate)*(1-Math.exp(-c/l.attitudeLagSec));let f=Math.min(d,Math.max(this._attRate,0)*c),p=this.q.clone().invert().multiply(a);p.w<0&&(p.x=-p.x,p.y=-p.y,p.z=-p.z,p.w=-p.w);let v=Math.sqrt(Math.max(1-p.w*p.w,1e-12));this._attErr={ax:p.x/v,ay:p.y/v,mag:Math.min(d,.35)},this.q.rotateTowards(a,f)}rotateShip(e){let t=this.q.clone();this.q.multiply(e).normalize();let n=this.q.clone().multiply(t.invert());this.qCam.premultiply(n).normalize()}recenterCamera(){this.camRecentre=1.2}camToward(e,t=0,n=0,s,r=!0){let o=this.qCam.clone().invert(),a=dn(e).normalize().applyQuaternion(o),l=Math.atan2(a.x,a.z)+t,c=Math.asin(Ce(a.y,-1,1))+n;if(r)this.cam.yaw=this.cam.yawT=l,this.cam.pitch=this.cam.pitchT=c,s!=null&&(this.cam.dist=this.cam.distT=s);else{let d=l-this.cam.yawT;d=Math.atan2(Math.sin(d),Math.cos(d)),l=this.cam.yawT+d,this.cam.yawT=l,this.cam.pitchT=c,s!=null&&(this.cam.distT=s)}}_tourTravelCam(e,t){e.camT=(e.camT||0)+t;let n=this.cfg.ship.lengthM,s=performance.now()<(this.cam.holdUntil||0),r=e.zoomMul||1,o=e.camT*.35;s||(this.cam.yawT=.35*Math.sin(o),this.cam.pitchT=.3+.06*Math.sin(o*.7)),this.cam.distT=n*2.6*r}_tourCamera(e){let t=this.tour;if(!t||this.mode!=="tour")return;let n=t.curBody;if(!n||!this.system||n.system!==this.system){this._tourTravelCam(t,e);return}let s=n.positionAt(this.jd),r=this.sysPos(),o=vt([s[0]-r[0],s[1]-r[1],s[2]-r[2]]);t.camT=(t.camT||0)+e;let a=this.cfg.ship.lengthM,l=t.zoomMul||1,c=performance.now()<(this.cam.holdUntil||0);if(t.phase==="dwell"){let d=this.system.stars[0].positionAt(this.jd),h=vt([d[0]-r[0],d[1]-r[1],d[2]-r[2]]),u=vt(Ur(Ut(o,-1),Ut(h,.12))),f=t.camT*this.cfg.tour.cameraDriftDegPerSec*Math.PI/180,p=a*(2.7+.5*Math.sin(f*.5))*l;c?this.cam.distT=p:this.camToward(u,.2*Math.sin(f*.9)+.08,.1+.04*Math.sin(f*.6),p,!1)}else{let d=t.camT*.35;c||(this.cam.yawT=.35*Math.sin(d),this.cam.pitchT=.3+.06*Math.sin(d*.7)),this.cam.distT=a*2.6*l}}_capK(e){if(this.system)return e;let t=this.cfg.time.interstellarMaxC;if(!(t>0))return e;let n=Math.max(this.speed,1);return Math.max(1,Math.min(e,t*ft/n))}get kNow(){return this.warp.on?this._warpK():this.ins?this.ins.k:this.xfer?this.xfer.k:this._capK(this.timeAuto&&this.course?this.timeEff:this.timeScale)}setTimeIndex(e){this.timeIndex=Ce(e,0,this.cfg.time.steps.length-1),this.timeScale=this.cfg.time.steps[this.timeIndex],this.timeAuto=!1,this.tour&&this.tour.pace==="fast"&&this.setTourPace("slow")}setTimeAuto(e){if(e&&this.tour&&this.tour.pace==="slow"){this.setTourPace("fast");return}this.timeAuto=e}getDestinations(e=!1){let t=performance.now();if(!e&&this._destCache&&t-this._destT<this.cfg.destinations.refreshSec*1e3)return this._destCache;let n={bodies:[],systems:[]};if(this.system)for(let o of this.system.bodies){if(o.kind==="belt")continue;let a=o.positionAt(this.jd),l=this.sysPos();n.bodies.push({body:o,name:o.name,kind:o.kind,dist:Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2]),parent:o.parent})}let s=this.shipPc(),r=this.uni.destinationsNear(s,this.cfg.destinations.radiusLy);for(let o of r)this.system&&o.group.members.some(a=>this.system.starIndices&&this.system.starIndices.includes(a))||n.systems.push(o);return n.systems=n.systems.slice(0,this.cfg.destinations.maxListed),this._destCache=n,this._destT=t,n}searchSystems(e,t=14){if(!e||e.trim().length<2)return[];let n=this.cat,s=this.shipPc(),r=this.cfg.destinations.radiusLy,o=new Set,a=[];for(let l of n.search(e)){let c=n.systemOf(l,this.cfg.destinations.groupAu);if(!c||o.has(c.key)||(o.add(c.key),this.system&&this.system.starIndices&&c.members.some(u=>this.system.starIndices.includes(u))))continue;let d=c.centre,h=Math.hypot(d[0]-s[0],d[1]-s[1],d[2]-s[2])*Lr;a.push({group:c,name:c.name,distLy:h,known:c.members.some(u=>n.hasKnownPlanets(u)),stars:c.members.length,outOfRange:h>r})}return a.sort((l,c)=>l.distLy-c.distLy),a.slice(0,t)}engageAutopilot(){let e=this.course;if(!e){this.say("No course set");return}if(e.engaged){this.disengageAutopilot();return}this.stopTour(),this.course=e,e.engaged=!0,e.userStep=!1,this.mode="auto",this.timeAuto=this.cfg.time.auto.enabled,this.xfer=null,(e.kind==="body"||e.phase==="align")&&this.breakOrbit(),this.say("Autopilot engaged")}disengageAutopilot(e="Autopilot disengaged \u2014 manual control"){let t=this.course;t&&(t.engaged=!1),this.mode==="auto"&&(this.mode="free"),this.timeAuto=!1,this.speedTarget=this.warp.on?this.speedTarget:et(this.vel),e&&this.say(e)}cancelCourse(e){this.course=null,this.mode==="auto"&&(this.mode="free"),e&&this.say(e)}stopTour(){if(!this.tour)return;let e=this.tour.pace==="slow";this.tour=null,this.mode==="tour"&&(this.mode="free"),this.course=null,this.timeAuto=!1,e||(this.timeIndex=0,this.timeScale=this.cfg.time.steps[0],this.timeEff=this.timeScale),this.cam.yawT=this.cam.yaw,this.say("Tour ended \u2014 you have the helm")}_dwellScale(e){if(typeof e.timeScale=="number")return e.timeScale;let t=this.orbit;if(!t)return 60;let n=2*Math.PI*Math.sqrt(Math.pow(t.r,3)/Math.max(t.body.gm,1e-6));return Ce(n/this.cfg.tour.orbitSeconds,1,this.cfg.time.steps[this.cfg.time.steps.length-1])}_systemStops(){let e=this.system;if(!e)return[];if(e===this.uni.solar)return this.cfg.tour.stops.filter(s=>e.get(s.body));let n=e.bodies.filter(s=>(s.kind==="planet"||s.kind==="dwarf")&&s.semiMajorKm).sort((s,r)=>s.semiMajorKm-r.semiMajorKm).slice(0,9).map(s=>({body:s.id,distance:6,dwell:18,legSeconds:30,timeScale:"orbit",note:s.name}));return!n.length&&e.stars[0]&&n.push({body:e.stars[0].id,distance:4,dwell:20,legSeconds:30,timeScale:"orbit",note:e.stars[0].name}),n}beginTour(e=null,t=null){t=t||this.tourPace,e=e||(this.system?"system":"stars");let n=[];if(e==="system"){if(!this.system){this.say("Enter a star system first, or take the stars tour");return}if(n=this._systemStops(),!n.length){this.say("Nothing to tour here");return}}this.cancelCourse(),this.tourPace=t,this.tour={scope:e,pace:t,idx:-1,phase:"dwell",timer:0,stops:n,visited:new Set(this.system&&this.system.starIndices?this.system.starIndices:[]),curBody:null},this.mode="tour",t==="slow"?(this.timeAuto=!1,this.timeIndex=this.cfg.tour.slowInitialStep[e],this.timeScale=this.cfg.time.steps[this.timeIndex],this.timeEff=this.timeScale):this.timeAuto=!0,e==="stars"?this._starsHop():this._tourNext(!0),this.say(`${t==="slow"?"Slow":"Fast"} ${e==="stars"?"local stars":"star system"} tour${t==="slow"?" \u2014 set the pace with the TIME buttons":""}`,4)}setTourPace(e){this.tourPace=e;let t=this.tour;if(!(!t||t.pace===e)){if(t.pace=e,e==="slow")this.timeAuto=!1;else if(this.timeAuto=!0,t.phase==="dwell"){let n=t.stops[t.idx]||{timeScale:"orbit"};this.timeScale=this._dwellScale(n),this.timeEff=this.timeScale,this.timeAuto=!1}this.say(e==="slow"?"Slow tour \u2014 you set the time compression":"Fast tour \u2014 time compression is automatic",3)}}_dwellStart(e){let t=this.tour,n=t.pace==="slow";t.phase="dwell",t.timer=e.dwell*(n?this.cfg.tour.slowDwellFactor:1),this.timeAuto=!1,this.mode="tour",n||(this.timeScale=this._dwellScale(e),this.timeEff=this.timeScale),t.curBody=this.orbit?this.orbit.body:t.curBody}_tourNext(e=!1){let t=this.tour;if(t.scope==="stars"){this._starsHop();return}t.idx=(t.idx+1)%t.stops.length;let n=t.stops[t.idx],s=this.system.get(n.body);if(!s){t.stops.splice(t.idx,1),t.stops.length?(t.idx--,this._tourNext(e)):this.stopTour();return}if(t.curBody=s,e&&n.legSeconds===0){this.warp.on=!1,this.warp.c=0,this.warp.form=0,this.placeAtBody(s,n.distance,.9,.3),this._dwellStart(n);return}t.phase="travel",this.course={kind:"body",body:s,radius:Math.max(s.safeRadiusKm(this.cfg),s.radiusKm*n.distance),targetSeconds:n.legSeconds,tour:!0,engaged:!0,label:s.name},this.timeAuto=t.pace==="fast",this.mode="tour",this.trip={elapsed:0,label:s.name}}_starsHop(){let e=this.tour;e.phase="travel",e.curBody=null;let t=this.getDestinations(!0).systems.filter(o=>!o.outOfRange),n=o=>o.group.members.some(a=>e.visited.has(a)),s=t.find(o=>!n(o));if(!s){if(e.visited.clear(),this.system&&this.system.starIndices)for(let o of this.system.starIndices)e.visited.add(o);s=t[0]}if(!s){this.say("No star systems in range for the tour"),this.stopTour();return}for(let o of s.group.members)e.visited.add(o);let r=this.uni.systemForGroup(s.group);this.breakOrbit(),this.xfer=null,this.ins=null,this.course={kind:"system",group:s.group,system:r,name:s.name,targetPc:s.group.centre,phase:"align",label:s.name,hpKm:this.uni.heliopauseOfStar(s.group.primary),engaged:!0,tour:!0},this.timeAuto=e.pace==="fast",this.mode="tour",this.trip={elapsed:0,label:s.name},this.say(`Next stop: ${s.name} \u2014 ${s.distLy.toFixed(2)} ly`,4)}_starsTourArrived(e){let t=this.tour,n=e.system,s=n.bodies.filter(a=>a.kind==="planet"&&a.radiusKm>2e3).sort((a,l)=>(a.semiMajorKm||0)-(l.semiMajorKm||0)),o=s.find(a=>a.habitable||a.inHabitableZone)||s[Math.floor(s.length/2)]||s[0]||n.stars[0];t.curBody=o,t.stops=[{body:o.id,distance:6,dwell:this.cfg.tour.starsDwell,legSeconds:this.cfg.tour.starsLegSeconds,timeScale:"orbit",note:o.name}],t.idx=0,this.course={kind:"body",body:o,radius:Math.max(o.safeRadiusKm(this.cfg),o.radiusKm*(o.kind==="star"?4:6)),targetSeconds:this.cfg.tour.starsLegSeconds,tour:!0,engaged:!0,label:o.name},this.timeAuto=t.pace==="fast",this.mode="tour",this.trip={elapsed:0,label:o.name},this.say(`Arrived at ${e.name} \u2014 visiting ${o.name}`,4)}setCourseBody(e,t="orbit",n=null){if(!e||e.system!==this.system)return;this.stopTour();let s=e.safeRadiusKm(this.cfg),r=t==="approach"?Math.max(s*1.5,e.radiusKm*this.cfg.autopilot.approachRadii):Math.max(s,e.radiusKm+this.cfg.autopilot.arrivalOrbitAltKm);if(n!=null&&isFinite(n)&&(r=Math.max(s,e.radiusKm+n)),this.xfer&&t==="orbit"){this.say("Orbit change already under way \u2014 wait for the burn to finish (or press W/S/X to abort)",4);return}if(this.orbit&&this.orbit.body===e&&t==="orbit"){let o=e.soiKm;if(isFinite(o)&&(r=Math.min(r,o*.9)),this.course=null,this.mode==="auto"&&(this.mode="free"),Math.abs(r-this.orbit.r)<.002*r){this.say("Already in that orbit");return}this._startTransfer(e,r);return}this.xfer=null,this.course={kind:"body",body:e,mode:t,radius:r,targetSeconds:this.cfg.time.auto.targetSeconds,label:e.name,engaged:!1},this.trip={elapsed:0,label:e.name},this.say(`Course set: ${e.name}${t==="approach"?" (approach)":""} \u2014 aligning; press AUTO to engage the autopilot`,4)}setCourseSystem(e){if(e.outOfRange){this.say(`${e.name} is ${e.distLy.toFixed(1)} ly away \u2014 courses reach ${this.cfg.destinations.radiusLy} ly (warp closer first)`,4);return}this.stopTour();let t=this.uni.systemForGroup(e.group);this.course={kind:"system",group:e.group,system:t,name:e.name,targetPc:e.group.centre,phase:"align",label:e.name,hpKm:this.uni.heliopauseOfStar(e.group.primary),engaged:!1},this.trip={elapsed:0,label:e.name},this.say(`Course set: ${e.name} \u2014 ${e.distLy.toFixed(2)} ly \u2014 aligning; press AUTO to engage the autopilot`,4)}get subKms(){return this.cfg.ship.maxSublightC*ft}canEngageWarp(){let e=this.shipPc(),t=this.uni.nextBoundary(e,[this.forward().x,this.forward().y,this.forward().z],1e9);return t.inside?{ok:!1,why:`inside the heliopause of ${this.cat.name(t.inside.star)}`}:this.system&&et(this.sysPos())<this.system.heliopauseKm*this.cfg.warp.minEngageClearanceFraction?{ok:!1,why:"inside the heliopause \u2014 sub-light only"}:{ok:!0}}engageWarp(e=0){if(this.warp.on)return;let t=this.canEngageWarp();if(!t.ok){this.say(`Warp unavailable: ${t.why}`);return}this.breakOrbit(),this.leaveSystemFrame();let n=this.warp;n.on=!0,n.step=Ce(e,0,this.cfg.warp.steps.length-1),n.c=Math.max(this.speed/ft,.02),n.dropping=!1,n.rampTimer=0,n.engagedAt=this.jd,this.say("Warp field forming")}disengageWarp(){this.warp.on&&(this.course&&this.course.engaged&&this.course.kind==="system"&&this.disengageAutopilot("Autopilot disengaged \u2014 warp dropped by the pilot"),this.warp.dropping=!0,this.warp.step=-1,this.say("Dropping out of warp"))}setSpeed(e,t){let n=this.cfg.ship.speedPresets[e];n&&(this.commandSpeed(n[Ce(t,0,n.length-1)]*(e==="cruise"?ft:1)),this.speedPreset={regime:e,i:Ce(t,0,n.length-1)})}commandSpeed(e){if(this.mode==="tour"&&this.stopTour(),this.course&&this.course.engaged&&this.disengageAutopilot("Autopilot disengaged \u2014 speed set manually"),this.ins=null,this.xfer=null,this.speedPreset=null,this.warp.on){this.pendingSpeed=e,this.disengageWarp();return}this.orbit&&this.breakOrbit(),this.speedTarget=Ce(e,0,this.cfg.ship.maxSublightC*ft),this.intentDir=this.forward().clone()}speedRegime(){return Math.max(this.speed,this.speedTarget)<this.cfg.ship.orbitalMaxKmS?"orbital":"cruise"}setWarpStep(e){if(!this.warp.on){this.engageWarp(e),this.course&&(this.course.userStep=!0);return}this.warp.dropping=!1,this.warp.step=Ce(e,0,this.cfg.warp.steps.length-1),this.course&&(this.course.userStep=!0)}stepWarp(e){if(!this.warp.on){e>0&&this.setWarpStep(0);return}this.setWarpStep(this.warp.step+e)}leaveSystemFrame(){if(!this.system)return;let e=this.sysPos(),t=this.sysVel();this.anchorPc=this.system.originPc.slice(),this.ref=null,this.pos=e,this.vel=t,this.leftSystem=this.system,this.system=null}enterSystem(e){let t=this.sysPos(),n=this.sysVel(),s=[this.anchorPc[0]-e.originPc[0],this.anchorPc[1]-e.originPc[1],this.anchorPc[2]-e.originPc[2]];this.pos=[s[0]*st+t[0],s[1]*st+t[1],s[2]*st+t[2]],this.vel=n,this.ref=null,this.system=e,this.anchorPc=e.originPc.slice(),this.say(`Entering ${/system$/i.test(e.name)?"the "+e.name:"the "+e.name+" system"}`),this._destCache=null}governor(){let e=Math.LN10/this.cfg.warp.decelSecPerDecade,t=this.shipPc(),n=this.forward(),r=this.cfg.warp.steps[this.cfg.warp.steps.length-1]*ft/e*1.6+2e12,o=this.uni.nextBoundary(t,[n.x,n.y,n.z],r);if(o.inside)return{capC:0,why:"heliopause",x:0,star:o.inside.star};if(o.ahead){let a=Math.max(o.ahead.distKm-this.cfg.warp.arrivalMarginAu*Xe,0);return{capC:(this.subKms+e*a)/ft,why:"heliopause",x:a,star:o.ahead.star,hpKm:o.ahead.radiusKm}}return{capC:1/0,why:"",x:1/0}}update(e){let t=Math.min(e,this.cfg.sim.maxFrameDt),n=this.cfg.sim.physicsStep,s=t,r=0;for(;s>1e-9&&r<this.cfg.sim.maxSubsteps;){let o=Math.min(n,s);this._step(o),s-=o,r++}this.frameCount++;for(let o of this.messages)o.t-=t;this.messages=this.messages.filter(o=>o.t>0),this.warp.pulse=Math.max(0,this.warp.pulse-t*.9),this.warp.flash=Math.max(0,this.warp.flash-t*1.4)}_step(e){let t=this.cfg,n=t.ship;this._dtFrame=e,this._attErr=null,this.startTour&&(this.startTour=!1,this.beginTour());let s=this.input,r=Math.abs(s.yaw)+Math.abs(s.pitch)+Math.abs(s.roll)>.001,o=Math.abs(s.throttle)>.001||s.brake;(r||o)&&this.mode==="tour"&&this.stopTour(),o&&this.course&&this.course.engaged&&!this.warp.on&&(this.course.kind==="body"||this.course.phase!=="warp")&&this.disengageAutopilot("Autopilot disengaged \u2014 manual control");let a=n.turnRateDegPerSec*Math.PI/180,l=new U(s.pitch,s.yaw,s.roll).multiplyScalar(a);if(this.angVel.lerp(l,1-Math.exp(-e/Math.max(.03,n.steerSmoothing))),this.mode!=="auto"||r){let p=new Et().setFromEuler(new Ht(this.angVel.x*e,this.angVel.y*e,this.angVel.z*e,"YXZ"));this.rotateShip(p)}let c=this.warp.on,d=c?this._warpK():this.timeScale;this.thrustT=0,this.course&&this._autopilot(e),this.mode==="tour"&&this.tour&&this.tour.phase==="dwell"&&(this.tour.timer-=e,this.timeAuto=!1,d=c?this._warpK():this.timeScale,this.tour.timer<=0&&this._tourNext()),this.timeAuto&&this.course&&!c?d=this.timeEff:c||(this.timeEff=this.timeScale),c||(d=this.ins?this.ins.k:this.xfer?this.xfer.k:this._capK(d));let h=e*d;this.timeUsed=d,this.warp.on?this._warpMulti(h):this._sublightStep(e,h,o),this.jd+=h/86400,this.trip.elapsed+=h,this._frameManagement(),this._wallOfSafeOrbits(),this._tourCamera(e),this.speed=this.warp.on?this.warp.c*ft:et(this.vel),this.thrust+=(this.thrustT-this.thrust)*(1-Math.exp(-e/.18));{let p=this.eng,v=!this.warp.on&&!this.ins&&Math.max(this.speed,this.speedTarget)>=n.orbitalMaxKmS,m=Ce(Math.log10(Math.max(this.speed,1)/n.orbitalMaxKmS)/Math.log10(n.maxSublightC*ft/n.orbitalMaxKmS),0,1),g={rocket:!this.warp.on&&!v?this.thrust:0,cruise:v?.22+.78*m:0,warp:this.warp.on?.3+.7*Ce(Math.log10(Math.max(this.warp.c,1))/Math.log10(this.cfg.warp.steps[this.cfg.warp.steps.length-1]),0,1):0};for(let y of["rocket","cruise","warp"])p[y]+=(g[y]-p[y])*(1-Math.exp(-e/(g[y]>p[y]?1.6:2.4)))}{let p=(this.cfg.ship.gimbalMaxDeg||6)*Math.PI/180,v=this._attErr,m=1-Math.exp(-e/.25),g=v?-v.ax*Ce(Math.abs(v.mag)/.2,0,1)*p:0,y=v?-v.ay*Ce(Math.abs(v.mag)/.2,0,1)*p:0;this.gimbal.x+=(g-this.gimbal.x)*m,this.gimbal.y+=(y-this.gimbal.y)*m,v||(this._attRate*=Math.exp(-e/.15))}this.camRecentre>0&&(this.camRecentre-=e,this.qCam.slerp(this.q,1-Math.exp(-e/.35)),this.camRecentre<=0&&this.qCam.copy(this.q));let u=this.cam,f=1-Math.exp(-e/Math.max(this.cfg.camera.smoothingSec,.01));u.yawT-=$t*Math.round((u.yawT-u.yaw)/$t),u.pitchT-=$t*Math.round((u.pitchT-u.pitch)/$t),u.yaw+=(u.yawT-u.yaw)*f,u.pitch+=(u.pitchT-u.pitch)*f,u.dist+=(u.distT-u.dist)*f}_startTransfer(e,t){let n=this.orbit,s=e.gm,r=t>n.r,o=n.r,a=.5*(o+t),l=Math.sqrt(s*(2/o-1/a)),c=Math.sqrt(s*(2/t-1/a)),d=Math.sqrt(s/t),h=this.cfg.ship.maneuverAccelMs2*.001;this.xfer={body:e,mu:s,goalR:t,raising:r,phase:"turn1",vt1:l,dv2:Math.abs(d-c),a:h,k:1,aps:r?"apo":"peri",eta:0},this.orbit=null,this.setRef(e),this.say(`Orbit change: ${r?"raising":"lowering"} to ${At(t-e.radiusKm)} \u2014 ${r?"prograde":"retrograde"} burn, coast, circularise`)}_xferStep(e,t){let n=this.xfer,s=n.mu,r=n.raising?1:-1,o=Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01,a=this.pos,l=this.vel,c=vt(l),d=dn(c).multiplyScalar(r),h=n.dv2/(2*n.a),f=n.phase==="turn1"||n.phase==="burn1"||n.phase==="turn2"||n.phase==="burn2"?d:dn(c),p=this.cfg.ship.flipRateDegPerSec*Math.PI/180;o||this._lookAlong(f,p*e,this.up());let v=this.forward().dot(f)>.985,m=this.forward(),g=t,y=0;this.thrustT=0;let _=(x,M)=>{let E=Math.min(n.a*x,M);return l=[l[0]+m.x*E,l[1]+m.y*E,l[2]+m.z*E],E};for(;g>1e-9&&y++<400;){if(n.phase==="turn1")if(v)n.phase="burn1";else{[a,l]=Hr(s,a,l,g),g=0;break}if(n.phase==="burn1"||n.phase==="burn2"){let x=n.phase==="burn1"?n.vt1:Math.sqrt(s/et(a)),M=et(l),E=n.raising?x-M:M-x;if(E<=2e-4*x){if(n.phase==="burn1"){n.phase="coast";continue}this._finishTransfer(a,l);return}let A=Math.min(g,.5);if(v){let R=Math.min(n.a*A,E),w=[l[0]+m.x*R*.5,l[1]+m.y*R*.5,l[2]+m.z*R*.5],[b,L]=Hr(s,a,w,A);a=b,l=[L[0]+m.x*R*.5,L[1]+m.y*R*.5,L[2]+m.z*R*.5],this.thrustT=1}else[a,l]=Hr(s,a,l,A);g-=A;continue}if(n.phase==="coast"||n.phase==="turn2"){let x=Yf(s,a,l,n.aps);n.eta=x;let M=n.phase==="coast"?x-h-10:x-h;if(M<=1e-6){if(n.phase==="coast"){n.phase="turn2";continue}if(v){n.phase="burn2";continue}[a,l]=Hr(s,a,l,Math.min(g,.25)),g-=Math.min(g,.25);continue}let E=Math.min(g,M);[a,l]=Hr(s,a,l,E),g-=E;continue}break}this.pos=a,this.vel=l,this.speed=et(l),this.speedTarget=this.speed,n.phase==="burn1"||n.phase==="burn2"?n.k=Ce(this.timeScale,1,100):n.phase==="turn1"||n.phase==="turn2"?n.k=1:(n.coastReal=(n.coastReal||0)+e,n.k=Ce((Yf(s,a,l,n.aps)-h-10)/Math.max(14-n.coastReal,2),1,this.cfg.time.steps[this.cfg.time.steps.length-1]))}_insertStep(e,t){let n=this.ins,s=this.orbit,r=n.body,o=r.gm,a=n.a,l=Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01,c=Math.cos(s.theta),d=Math.sin(s.theta),h=[-d*s.ex[0]+c*s.ey[0],-d*s.ex[1]+c*s.ey[1],-d*s.ex[2]+c*s.ey[2]],u=Math.sqrt(o/s.r),f=dn(h);l||this._lookAlong(f,ar(this.cfg,e,this.forward().angleTo(f)));let p=this.forward().dot(f),v=t,m=0,g=!1;for(;v>1e-9&&m++<400;){let y=Math.min(v,.25);if(v-=y,p>.985&&n.vt<u&&(n.vt=Math.min(u,n.vt+a*p*y),g=!0),s.omega=n.vt/s.r,s.theta+=s.omega*y,n.vt>=u*.99999)break}this._applyOrbitState(),g&&(this.thrustT=1),n.k=p>.985?Ce(u/a/8,1,30):1,this.speed=et(this.vel),this.speedTarget=this.speed,n.vt>=u*.99999&&(s.omega=Math.sqrt(o/(s.r*s.r*s.r)),this.ins=null,this.say(`In orbit: ${r.name}, ${At(s.r-r.radiusKm)} altitude`),this._tourOrDone(n.C))}_finishTransfer(e,t){let n=this.xfer,s=n.body,r=et(e),o=Ut(e,1/r),a=an(t,Ut(o,ln(t,o))),l=vt(a);this.xfer=null,this.enterOrbit(s,n.goalR,o,l,0),this.say(`In orbit: ${s.name}, ${At(n.goalR-s.radiusKm)} altitude`)}_sublightStep(e,t,n){let s=this.cfg.ship;if(this.ins&&(this.input.throttle>.001||this.input.brake)&&(this.ins=null,this.breakOrbit(),this._tourOrDone(null),this.say("Orbit insertion aborted")),this.xfer)if(this.input.throttle>.001||this.input.brake)this.xfer=null,this.speedTarget=et(this.vel),this.say("Orbit change aborted");else{this._xferStep(e,t);return}if(this.orbit&&this.ins){this._insertStep(e,t);return}if(this.orbit)if(this.input.throttle>.001)this.breakOrbit();else{this._applyOrbit(t),!(Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01)&&!(this.course&&!this.course.engaged)&&this._lookAlong(dn(this.vel).normalize(),s.flipRateDegPerSec*Math.PI/180*e,this.up());return}if(this.course&&this.course.autopilotMoved){this.course.autopilotMoved=!1;return}let r=this.input,o=s.maxSublightC*ft,a=s.speedFloorKmS;if(r.throttle!==0){this.speedPreset=null,this.intentDir=this.forward().clone();let A=this.speedTarget;A<a&&(A=r.throttle>0?a:0),A>0&&(A*=Math.pow(10,r.throttle*s.throttleDecadesPerSec*e)),A<a&&(A=0),this.speedTarget=Math.min(o,A)}r.brake&&(this.speedTarget=Math.max(0,this.speedTarget*Math.exp(-e*3))),this.speedTarget<a*.9&&(this.speedTarget=0);let l=this.forward(),c=dn(this.vel),d=c.length(),h=!!(this.course&&this.course.engaged),u=d>1e-9?c.clone().divideScalar(d):l.clone(),f=Math.abs(r.yaw)+Math.abs(r.pitch)+Math.abs(r.roll)>.01;(!this._noseSaved||l.angleTo(this._noseSaved)>3e-4||!this.intentDir||d<a*.5)&&(this.intentDir=l.clone());let v=this.intentDir.clone().multiplyScalar(this.speedTarget).sub(c),m=v.length(),g=Math.max(d,this.speedTarget,a);this.burning?m<.003*g&&(this.burning=!1):m>.012*g&&(this.burning=!0);let y=this.burning?0:1/0,_=s.flipRateDegPerSec*Math.PI/180,x=0,M=Math.max(d,this.speedTarget)>=s.orbitalMaxKmS;if(h)this.burning=!1,this.flipping=!1;else if(M){let A=this.speedTarget<d?s.driveSpoolSec*.45:s.driveSpoolSec,R=1-Math.exp(-e/A),w=l.clone().multiplyScalar(this.speedTarget);c.add(w.sub(c).multiplyScalar(R)),this.burning=!1,this.flipping=!1,this.intentDir=l.clone()}else if(m>y||this.burning){let A=v.clone().divideScalar(m),R=l.dot(A),w=v.dot(u)<-.5*m;!f&&(R<.3||this.flipping||w)&&(this.flipping=!0,this._lookAlong(A,_*e,this.up()),R>.97&&!w&&(this.flipping=!1));let b=Math.max(v.dot(l),0);if(b>0&&(this.flipping?R>.93:R>.3||f)){let L=s.maneuverAccelMs2*.001*t,B=Math.min(b,L);c.addScaledVector(l,B),x=Ce(B/Math.max(L,1e-12),0,1)}}else this.flipping=!1,!f&&!(this.course&&!this.course.engaged)&&d>a*2&&l.dot(u)<.9995&&this._lookAlong(u,_*e,this.up());this.speedTarget===0&&d<a*.9&&c.set(0,0,0),this.thrustT=Math.max(this.thrustT,x),this._noseSaved=this.forward().clone(),this.vel=[c.x,c.y,c.z];let E=et(this.vel);if(E>o){let A=o/E;this.vel=this.vel.map(R=>R*A)}this._prev={jd:this.jd,abs:this.sysPos()},this.pos=[this.pos[0]+this.vel[0]*t,this.pos[1]+this.vel[1]*t,this.pos[2]+this.vel[2]*t]}_warpK(){return this.tour&&this.tour.pace==="fast"?this.cfg.tour.fastWarpK:Ce(this.timeScale,1,this.cfg.warp.maxTimeCompression)}_warpMulti(e){let t=Math.min(80,Math.max(1,Math.ceil(e/.08))),n=e/t;for(let s=0;s<t&&this.warp.on;s++)this._warpStep(n)}_warpStep(e){let t=this.warp,n=this.cfg.warp,s=this.governor();t.capC=s.capC,t.capWhy=s.why,t.govX=s.x;let r=this.cfg.ship.maxSublightC,o=t.step<0?r:n.steps[t.step];if(s.capC<o&&(o=Math.max(s.capC,r)),this.course&&this.course.kind==="system"&&!t.dropping&&this.course.phase==="warp"&&this.course.engaged&&!this.course.userStep){t.rampTimer+=e;let f=this.tour&&this.tour.pace==="slow"?Math.min(this.cfg.tour.slowWarpStep,n.steps.length-1):n.steps.length-1;t.step<f&&t.rampTimer>n.secondsPerStep&&t.c>=n.steps[t.step]*.97&&(t.step++,t.rampTimer=0),o=Math.min(n.steps[Math.min(t.step,f)],Math.max(s.capC,r)),o=Math.max(o,r)}let a=Math.log10(Math.max(t.c,.001)),l=Math.log10(Math.max(o,.001));l>a?a=Math.min(l,a+e/n.rampSecPerDecade):a=Math.max(l,a-e/n.decelSecPerDecade),isFinite(s.capC)&&(a=Math.min(a,Math.log10(Math.max(s.capC,r)))),t.c=Math.pow(10,a);let c=this.forward(),d=t.c*ft;this.vel=[c.x*d,c.y*d,c.z*d],this.pos=[this.pos[0]+this.vel[0]*e,this.pos[1]+this.vel[1]*e,this.pos[2]+this.vel[2]*e];let h=t.form;t.form=wn(n.bubbleStartC,n.bubbleFullC,t.c),h>.3&&t.form<=.3&&!t._collapsed&&(t.pulse=1,t.flash=1,t._collapsed=!0),t.form>.5&&(t._collapsed=!1);let u=!t.dropping&&t.step>=0&&n.steps[t.step]>r*1.001&&s.capC>r*1.02;t.c<=r*1.0005&&!u&&this._dropToSublight(),s.why==="heliopause"&&s.capC<=0&&this._dropToSublight()}_dropToSublight(){let e=this.warp,t=this.forward(),n=this.subKms;e.on=!1,e.c=0,e.form=0,e.dropping=!1,e._collapsed=!1,e.pulse=1,e.flash=1,e.step=0,this.vel=[t.x*n,t.y*n,t.z*n],this.speed=n,this.speedTarget=this.course&&this.course.engaged?n:0,this.pendingSpeed!=null&&(this.speedTarget=Ce(this.pendingSpeed,0,n),this.pendingSpeed=null),this.say("Warp field collapsed \u2014 sub-light")}_courseAlign(e,t){if(this.warp.on)return;let n=this.sysPos(),s;if(t.kind==="body"){if(t.body.system!==this.system)return;let l=t.body.positionAt(this.jd);s=[l[0]-n[0],l[1]-n[1],l[2]-n[2]]}else{let l=this.shipPc();s=[t.targetPc[0]-l[0],t.targetPc[1]-l[1],t.targetPc[2]-l[2]],t.distKm=et(s)*st}let r=dn(vt(s)),o=this.forward().angleTo(r);t.aligned=o<.035,t.alignErr=o,!(Math.abs(this.input.yaw)+Math.abs(this.input.pitch)+Math.abs(this.input.roll)>.01)&&!this.flipping&&!this.xfer&&(this._lookAlong(r,ar(this.cfg,e,o)),this._noseSaved=this.forward().clone())}_autopilot(e){let t=this.course,n=this.cfg.autopilot,s=this.cfg.ship;if(!t.engaged){this._courseAlign(e,t);return}let r=n.cruiseFraction*s.maxSublightC*ft,o=n.accelTimeSec,a=e*this.kNow;t.kind==="body"?this._autoBody(t,e,a,r,n.brakeSeconds):t.kind==="system"&&this._autoSystem(t,e,a,r,o)}_pathWaypoint(e,t,n){let s=this.system;if(!s)return null;let r=this.jd,o=an(t,e),a=ln(o,o);if(a<1)return null;let l=this.cfg.autopilot.pathClearance,c=null;for(let d of s.bodies){if(d.kind==="belt"||d===n)continue;let h=d.positionAt(r),u=d.safeRadiusKm(this.cfg),f=u*l;if(et(an(e,h))<f*1.05)continue;let p=Ce(ln(an(h,e),o)/a,0,1),v=Fr(e,o,p),m=an(v,h),g=et(m);if(!(g>=f||p<=1e-4)&&(!c||p<c.t)){let y=g>1e-6*f?Ut(m,1/g):vt(cn(o,[0,0,1]));(!isFinite(y[0])||et(y)<.5)&&(y=si(vt(o))),c={t:p,body:d,off:Ut(y,f*1.25)}}}return c?{body:c.body,off:c.off}:null}_flyWaypoint(e,t,n,s,r,o,a,l){let c=this.jd,d=this.sysPos(c),h=Ur(this.pathBodyPos(t.body,c),t.off),u=an(h,d),f=et(u);if(f<1)return!1;let p=Ut(u,1/f),v=n*this.kNow,g=(Math.max(et(an(s,d))-r,0)+l)/a,y=this.speed+o/this.cfg.autopilot.accelTimeSec*v+.001,_=Math.min(o,g,Math.max(y,o*.001)),x=Math.min(_*v,f),M=Fr(d,p,x),E=this.ref?this.ref.positionAt(c+v/86400):[0,0,0];this.pos=an(M,E);let A=this.ref?this.ref.velocityAt(c):[0,0,0];return this.vel=an(Ut(p,x/Math.max(v,1e-9)),A),this.speedTarget=et(this.vel),this._lookAlong(dn(p),ar(this.cfg,n,this.forward().angleTo(dn(p)))),this.thrustT=_>this.speed*1.002?1:0,e.autopilotMoved=!0,x<f-1e-6*f}pathBodyPos(e,t){return e.positionAt(t)}_autoClear(e,t,n,s=null){let r=this.system;if(!r)return!1;let o=this.jd,a=this.sysPos(o),l=null,c=2.3,d=null;for(let A of r.bodies){if(A.kind==="belt"||A===s)continue;let R=A.positionAt(o),w=[a[0]-R[0],a[1]-R[1],a[2]-R[2]],b=et(w),L=A.safeRadiusKm(this.cfg);b/L<c&&(c=b/L,l=A,d=w)}if(!l)return this._clearing=!1,!1;let h=vt(d),u=l.safeRadiusKm(this.cfg),f=et(d),p=ln(t,h),v=p>=0?1/0:f*Math.sqrt(Math.max(1-p*p,0));if(!(p<0&&v<u*1.4||f<u*1.12)&&!(this._clearing&&f<u*1.15))return this._clearing=!1,!1;this._clearing=!0;let g=vt(an(t,Ut(h,p))),y=isFinite(g[0])&&et(an(t,Ut(h,p)))>1e-6?vt(Ur(h,Ut(g,.9))):h,_=Math.min(n,Math.max(u/6,1)),x=Math.max(u*1.5,f);this.timeEff=Math.max(this.timeEff||1,1),this.timeEff=Math.exp(Math.log(this.timeEff)+(Math.log(Ce(u*2/_/3.5,1,400))-Math.log(this.timeEff))*.2);let M=e*this.kNow,E=_*M;return this.pos=[this.pos[0]+y[0]*E,this.pos[1]+y[1]*E,this.pos[2]+y[2]*E],this.vel=[y[0]*_,y[1]*_,y[2]*_],this.speed=_,this.speedTarget=_,this.thrustT=1,this._lookAlong(dn(y),ar(this.cfg,e,this.forward().angleTo(dn(y)))),this.course&&(this.course.autopilotMoved=!0),!0}_autoBody(e,t,n,s,r){let o=e.body;if(o.system!==this.system){this.cancelCourse("Course cancelled");return}this.breakOrbit();let a=o.positionAt(this.jd),l=this.sysPos(),c=[l[0]-a[0],l[1]-a[1],l[2]-a[2]],d=et(c),h=d>1e-6?Ut(c,1/d):[1,0,0];if(this._autoClear(t,h.map(ee=>-ee),s,o))return;let u=e.radius;if((!e.wp||performance.now()-(e.wpT||0)>400)&&(e.wpT=performance.now(),e.wp||(e.wp=this._pathWaypoint(l,a,o))),e.wp){let ee=Math.max(u*.03,1);if(this._flyWaypoint(e,e.wp,t,a,u,s,r,ee))return;e.wp=null,e.wpT=0}let f=d-u,p=this.cfg.ship,v=this.cfg.autopilot,m=p.orbitalMaxKmS,g=p.maneuverAccelMs2*.001,y=Math.max(u*.03,1),_=m*r-y,x=ee=>(ee+y)/r,M=ee=>.9*Math.sqrt(2*g*Math.max(ee,0)),E=Math.max(s*r-y,0);e.realElapsed=(e.realElapsed||0)+t,this._autoTime(f,E,s,r,e,u,o,y,_);let A=t*this.kNow,R=dn(h).negate(),w=this.forward(),b=w.angleTo(R);!e.retro&&e.alignedOnce&&f<_+m*r*(v.flipLeadFactor??4)&&(e.retro=!0);let B=!!e.retro?R.clone().negate():R;this._lookAlong(B,ar(this.cfg,t,w.angleTo(B)));let F=b<.35||e.alignedOnce;if(F&&(e.alignedOnce=!0),!F&&f>0){e.autopilotMoved=!0;return}let S=f,D=0,P=!1;if(f>0){let ee=A;if(f>E){let re=(f-E)/s;ee<=re?(S=f-s*ee,ee=0):(ee-=re,S=E)}if(ee>0&&S>_){let re=r*Math.log((S+y)/(_+y));ee<=re?(S=(S+y)*Math.exp(-ee/r)-y,ee=0):(S=_,ee-=re)}if(ee>0){P=!0;let re=0;for(;ee>1e-9&&re++<400;){let ve=Math.min(ee,.25),ae=Math.min(x(S),M(S));if(S=Math.max(S-ae*ve,0),ee-=ve,S<=0)break}}S=Math.max(S,0),D=(f-S)/Math.max(A,1e-9)}let N=this.speed+s/v.accelTimeSec*A;D>N&&f>E&&(S=f-N*A,D=N);let k=u+S,q=Ut(h,k),Z=o.positionAt(this.jd+A/86400),O=[Z[0]+q[0],Z[1]+q[1],Z[2]+q[2]],J=this.ref?this.ref.positionAt(this.jd+A/86400):[0,0,0];this.pos=[O[0]-J[0],O[1]-J[1],O[2]-J[2]];let fe=Ut(h,-D),X=o.velocityAt(this.jd),ne=this.ref?this.ref.velocityAt(this.jd):[0,0,0];this.vel=[fe[0]+X[0]-ne[0],fe[1]+X[1]-ne[1],fe[2]+X[2]-ne[2]],Math.max(this.speed,D)<m&&(D>this.speed*1.002+1e-9?this.thrustT=b<.5?1:0:P&&w.dot(R)<-.85&&(this.thrustT=.9)),this.speedTarget=D,e.autopilotMoved=!0,e.remaining=S,e.dTarget=k,e.xh=_,S<=.2&&this._arriveAtBody(e,o,h,k,D)}_arriveAtBody(e,t,n,s,r=0){if(e.mode==="approach"){this.setRef(t),this.orbit=null,this.vel=[0,0,0],this.speedTarget=0,this.speed=0,this.pos=Ut(n,s),this.say(`Holding ${At(s-t.radiusKm)} above ${t.name}`),this.course=null,this.mode="free",this.timeAuto=!1,this.tour&&this._tourOrDone(e);return}let o=vt(cn(t.pole,n));(!isFinite(o[0])||et(o)<.2)&&(o=si(n));let a=.35,l=vt(Ur(Ut(o,Math.cos(a)),Ut(vt(cn(n,o)),Math.sin(a))));this.setRef(t),this.orbit={body:t,r:s,ex:n,ey:l,theta:0,omega:0},this._applyOrbitState(),this.ins={body:t,vt:0,a:this.cfg.ship.maneuverAccelMs2*.001,k:1,C:e},this.course=null,this.mode="free",this.timeAuto=!1,this.say(`Arrived \u2014 inserting into orbit around ${t.name}`)}_tourOrDone(e){if(this.course=null,this.tour){let t=this.tour.stops[this.tour.idx];this._dwellStart(t||{dwell:20,timeScale:"orbit"})}else this.mode="free",this.timeAuto=!1}_autoTime(e,t,n,s,r,o,a,l=1,c=0){if(!this.timeAuto)return;let d=this.cfg.time,h=d.steps,u=h[h.length-1],f=Math.max(r.targetSeconds||d.auto.targetSeconds,3),p=Math.max(e-t,0)/n+s*Math.log(1+Math.min(e,t)/Math.max(l,1))+0,v=Math.max(f-(r.realElapsed||0),Math.min(6,f*.3)),m=p/v;r.tour&&(m=Math.max(m,1));let g=a?a.radiusKm:1;a&&e<d.auto.approachDistanceRadii*g&&(m=Math.min(m,h[d.auto.approachStep])),e<c+this.cfg.ship.orbitalMaxKmS*s*((this.cfg.autopilot.flipLeadFactor??4)+1)&&(m=Math.min(m,this.cfg.autopilot.finalApproachK)),m=Ce(m,1,u),this.timeEff=Math.exp(Math.log(this.timeEff||1)+(Math.log(m)-Math.log(this.timeEff||1))*.15)}_autoSystem(e,t,n,s,r){let o=this.cfg.ship,a=this.cfg.autopilot;if(this.system&&this.system===e.system){if(this.tour&&this.tour.scope==="stars"&&e.tour){this._starsTourArrived(e);return}if(a.continueToStar){let v=e.system.stars[0];this.course={kind:"body",body:v,radius:v.safeRadiusKm(this.cfg),targetSeconds:this.cfg.time.auto.targetSeconds,label:v.name,engaged:!0},this.say(`Arrived at ${e.name} \u2014 approaching ${v.name}`)}else this.course=null,this.mode="free",this.say(`Arrived at ${e.name}`);return}let l=this.shipPc(),c=e.targetPc,d=vt([c[0]-l[0],c[1]-l[1],c[2]-l[2]]),h=Math.hypot(c[0]-l[0],c[1]-l[1],c[2]-l[2])*st;e.distKm=h;let u=dn(d),p=this.forward().angleTo(u);if(!this.warp.on||this.warp.c<3)this._lookAlong(u,ar(this.cfg,t,p));else{let v=this.up().clone(),m=new it().lookAt(new U,u,Math.abs(v.dot(u))>.98?new U(0,0,1):v),g=new Et().setFromRotationMatrix(m);this.q.slerp(g,1-Math.exp(-t*3))}if(e.phase==="align"){this.breakOrbit(),this.timeEff=Math.max(1,this.timeEff),p<.09&&(e.phase=this.system?"depart":"warp",e.departT=0),this.vel=this.vel.map(v=>v*Math.exp(-t*.1)),e.autopilotMoved=!1;return}if(e.phase==="depart"){if(this._autoClear(t,d,s))return;let v=this.sysPos(),m=this.system.heliopauseKm-et(v);this._autoTimeDepart(m,s);let g=t*this.kNow,y=s/a.accelTimeSec,_=Math.min(s,this.speed+y*g);this.speed<.001&&(_=Math.min(s,y*g));let x=Math.min(_*g,Math.max(m,0)+1),M=_;this.vel=[d[0]*M,d[1]*M,d[2]*M];let E=this.refVel();this.vel=[this.vel[0]-E[0]*0,this.vel[1]-E[1]*0,this.vel[2]-E[2]*0],this.pos=[this.pos[0]+d[0]*x,this.pos[1]+d[1]*x,this.pos[2]+d[2]*x],this.speed=M,this.speedTarget=M,e.autopilotMoved=!0,M<s*.999&&p<.5&&(this.thrustT=1);return}e.phase==="warp"&&(!this.warp.on&&!this.system&&(this.engageWarp(0),this.warp.step=0),this.warp.on&&(this.warp.step=Math.max(this.warp.step,0)),e.autopilotMoved=!1)}_autoTimeDepart(e,t){if(!this.timeAuto)return;let n=this.cfg.time,s=n.steps[n.steps.length-1],r=this.course;r.departReal=(r.departReal||0)+1/60;let o=Math.max(e,0)/t+this.cfg.autopilot.accelTimeSec*2,a=Math.max(n.auto.targetSeconds*.55,6),l=Math.max(a-r.departReal,2.5),c=Ce(o/l,1,s);this.timeEff=Math.exp(Math.log(this.timeEff||1)+(Math.log(c)-Math.log(this.timeEff||1))*.2)}_frameManagement(){let e=this.jd;if(this.system){if(et(this.sysPos(e))>this.system.heliopauseKm*1&&!(this.course&&this.course.engaged&&this.course.kind==="body")){let n=this.system;this.leaveSystemFrame(),this.say(`Leaving ${/system$/i.test(n.name),"the "}${n.name}${/system$/i.test(n.name)?"":" system"} \u2014 heliopause crossed`),this._destCache=null,this.course&&this.course.kind==="system"&&this.course.phase==="depart"&&(this.course.phase="warp");return}!this.xfer&&!this.ins&&this._chooseRef(e)}else{let t=this.shipPc(e),n=this.cat.within(t,this.cfg.heliopause.maxAu*1.05*Xe/st),s=null;for(let r of n){let o=this.uni.heliopauseOfStar(r)/st,a=this.cat.pos[r*3]-t[0],l=this.cat.pos[r*3+1]-t[1],c=this.cat.pos[r*3+2]-t[2],d=Math.hypot(a,l,c);d<o&&(!s||d/o<s.f)&&(s={i:r,f:d/o})}if(s){let r=this.cat.systemOf(s.i,this.cfg.destinations.groupAu),o=this.uni.systemForGroup(r);this.warp.on&&this._dropToSublight(),this.enterSystem(o),this._chooseRef(e,!0)}}}_chooseRef(e,t=!1){let n=this.system;if(!n)return;let s=this.sysPos(e),r=null,o=1/0;for(let a of n.bodies){if(a.kind==="belt"||a.kind==="star")continue;let l=a.soiKm;if(!isFinite(l))continue;let c=a.positionAt(e),d=Math.hypot(s[0]-c[0],s[1]-c[1],s[2]-c[2]),h=l*(this.ref===a?1.08:1);d<h&&l<o&&(r=a,o=l)}if(!r){let a=n.stars[0],l=1/0;for(let c of n.stars){let d=c.positionAt(e),h=Math.hypot(s[0]-d[0],s[1]-d[1],s[2]-d[2]);h<l&&(l=h,a=c)}r=n.stars.length>1?a:null}r!==this.ref&&this.setRef(r,e)}_wallOfSafeOrbits(){let e=this.system;if(!e||this.orbit||this.xfer||this.ins)return;let t=this.jd,n=this._prev?this._prev.jd:t,s=this.sysPos(t),r=this._prev?this._prev.abs:s,o=this.sysVel(t);for(let a of e.bodies){if(a.kind==="belt")continue;let l=a.safeRadiusKm(this.cfg),c=a.positionAt(t),d=[s[0]-c[0],s[1]-c[1],s[2]-c[2]],h=et(d);if(h>l*3&&(!this._prev||et(an(r,s))<h*.2))continue;let u=a.positionAt(n),f=[r[0]-u[0],r[1]-u[1],r[2]-u[2]],p=an(d,f),v=ln(p,p),m=1,g=h<l;if(v>0){let b=Ce(-ln(f,p)/v,0,1),L=Fr(f,p,b);et(L)<l&&(g=!0,m=b)}if(!g)continue;let y=m<1&&v>0?vt(Fr(f,p,m)):vt(d);isFinite(y[0])||(y=[1,0,0]);let _=Ut(y,l*1.0005),x=c,M=[x[0]+_[0],x[1]+_[1],x[2]+_[2]],E=this.refPos(t);this.pos=[M[0]-E[0],M[1]-E[1],M[2]-E[2]];let A=a.velocityAt(t),R=[o[0]-A[0],o[1]-A[1],o[2]-A[2]],w=ln(R,y);if(w<0){let b=this.refVel(t),L=[R[0]-y[0]*w+A[0]-b[0],R[1]-y[1]*w+A[1]-b[1],R[2]-y[2]*w+A[2]-b[2]];this.vel=L}this.speedTarget=Math.min(this.speedTarget,et(this.vel)),(this.lastSafeBody!==a||this.safeHit<=0)&&this.say(`Safe-orbit limit: ${a.name} (${At(l-a.radiusKm)} altitude)`,3),this.lastSafeBody=a,this.safeHit=.5,this.cfg.ship.orbitHold.enabled&&!this.course&&et(R)<20}this.safeHit=Math.max(0,this.safeHit-1/60),this._prev={jd:t,abs:this.sysPos(t)}}betaVector(){if(this.warp.on)return[0,0,0];let e=this.system?this.sysVel():this.vel;return[e[0]/ft,e[1]/ft,e[2]/ft]}visualBeta(){let e=this.warp,t=this.cfg.warp,n=t.visual.maxBeta??.97;if(!e.on)return this.betaVector();let s=this.forward(),r=this.cfg.ship.maxSublightC,o=Math.pow(Ce(Math.log10(e.c/r)/Math.log10(t.steps[t.steps.length-1]/r),0,1),.55),a=(r+(n-r)*o)*t.visual.aberrationScale;return[s.x*a,s.y*a,s.z*a]}gammaOf(e){let t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];return 1/Math.sqrt(Math.max(1-t,1e-6))}hud(){let e=this.system,n={warp:this.warp.on,speed:this.speed,c:this.speed/ft,K:this.kNow,jd:this.jd,mode:this.mode};if(n.where=e?this.ref?`${e.name} \xB7 ${this.ref.name}`:e.name:"Interstellar space",n.system=e?e.name:null,n.engaged=!!(this.course&&this.course.engaged),n.fictional=e?e.fictional:!1,n.gamma=this.gammaOf(this.betaVector()),this.course){let s=this.course;if(s.kind==="body"){let r=s.body,o=r.positionAt(this.jd),a=this.sysPos();n.target=r.name,n.targetDist=Math.hypot(a[0]-o[0],a[1]-o[1],a[2]-o[2]),n.targetKind="body"}else s.kind==="system"&&(n.target=s.name,n.targetDist=s.distKm??0,n.targetKind="system",n.phase=s.phase)}return n.trip=this.trip.elapsed,n}eta(){let e=this.course;if(!e)return NaN;let t=this.warp.on?this._warpK():this.timeEff;if(e.kind==="body"){let n=this.cfg.autopilot.cruiseFraction*this.cfg.ship.maxSublightC*ft,s=this.cfg.autopilot.accelTimeSec,r=e.remaining??NaN;return isFinite(r)?(Math.max(r-n*s,0)/n+s*Math.log(1+Math.min(r,n*s)/Math.max(e.radius*.02,1)))/t:NaN}if(e.kind==="system"){let n=(e.distKm??0)-(e.hpKm??0),s=this.warp,r=s.on?Math.max(s.c*ft,1):this.cfg.warp.steps[this.cfg.warp.steps.length-1]*ft*.8;return Math.max(n,0)/r+12}return NaN}};function $f(i){if(i>1e-8){let e=Math.sqrt(i);return[(1-Math.cos(e))/i,(e-Math.sin(e))/(e*e*e)]}if(i<-1e-8){let e=Math.sqrt(-i);return[(Math.cosh(e)-1)/-i,(Math.sinh(e)-e)/(e*e*e)]}return[.5,1/6]}function Hr(i,e,t,n){let s=et(e),r=et(t),o=ln(e,t)/s,a=Math.sqrt(i),l=2/s-r*r/i;if(l>1e-14){let _=2*Math.PI/(a*Math.pow(l,1.5));n-=_*Math.trunc(n/_)}let c=a*Math.abs(l)*n,d=.5,h=1/6;for(let _=0;_<60;_++){let x=l*c*c;[d,h]=$f(x);let M=s*o/a*c*c*d+(1-l*s)*c*c*c*h+s*c-a*n,E=s*o/a*c*(1-x*h)+(1-l*s)*c*c*d+s,A=M/E;if(c-=A,Math.abs(A)<1e-9*Math.max(1,Math.abs(c)))break}let u=l*c*c;[d,h]=$f(u);let f=1-c*c/s*d,p=n-c*c*c/a*h,v=[f*e[0]+p*t[0],f*e[1]+p*t[1],f*e[2]+p*t[2]],m=et(v),g=a/(m*s)*(u*h-1)*c,y=1-c*c/m*d;return[v,[g*e[0]+y*t[0],g*e[1]+y*t[1],g*e[2]+y*t[2]]]}function Yf(i,e,t,n){let s=et(e),r=ln(t,t),o=2/s-r/i;if(o<=0)return 1/0;let a=1/o,l=et(cn(e,t)),c=Math.sqrt(Math.max(0,1-l*l*o/i)),d=Math.sqrt(i/(a*a*a)),h=2*Math.PI/d;if(c<1e-6)return .5*h;let u=ln(e,t)/s,f=Math.acos(Ce((1-s/a)/c,-1,1)),p=u>=0?f:2*Math.PI-f,v=p-c*Math.sin(p),m=((n==="apo"?Math.PI:2*Math.PI)-v)/d;return m-=h*Math.floor(m/h),m}function ar(i,e,t){let n=Math.max(Math.PI/Math.max(i.autopilot.turnSeconds,.5),.2),s=Math.min(1,t/Math.max(t,1e-6));return Math.min(t,n*e*(.4+.6*Math.min(1,t/.5)))}var Zf=`
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
.smap{position:absolute;right:14px;bottom:210px;display:none;opacity:.78;pointer-events:none;text-align:center;transition:opacity .3s}
.smap canvas{display:block;border:1px solid var(--line);border-radius:50%;background:radial-gradient(circle,rgba(8,10,18,.55) 0,rgba(8,10,18,.35) 70%,rgba(8,10,18,0) 100%)}
.smap .cap{margin-top:3px;font-size:9px;letter-spacing:.1em;color:var(--dim);text-transform:uppercase}
@media(max-height:760px){.smap{display:none!important}}
.vis{position:absolute;left:14px;top:96px;width:270px;display:none}.vis.open{display:block}
.vis h4{margin:0;padding:8px 10px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;border-bottom:1px solid var(--line);display:flex;justify-content:space-between}
.vis .body{padding:8px 10px;max-height:60vh;overflow:auto}.vis p{margin:0 0 7px;line-height:1.5}.vis .fine{color:var(--dim);font-size:10px}.vis .err{color:#ff9a8a}
.vis .me{color:var(--dim);margin-bottom:5px}.vis .me b{color:#fff;font-weight:400;font-size:12px;letter-spacing:.06em}
.vis .row{display:flex;gap:6px;margin-bottom:8px}.vis .row button{flex:1}.vis button[disabled]{opacity:.4;cursor:default}
.vis .sec{color:var(--faint);letter-spacing:.12em;font-size:9px;text-transform:uppercase;margin:4px 0 3px}
.vis .item{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.vis .item .m{color:var(--dim);white-space:nowrap}.vis .where{color:var(--faint);font-size:9px;margin:-1px 0 4px}
.vlbl{position:absolute;left:0;top:0;pointer-events:none;color:#dfe3ee;font-size:10px;letter-spacing:.08em;white-space:nowrap;text-shadow:0 0 4px #000,0 0 2px #000;display:none}
.vlbl i{position:absolute;left:-5px;top:-5px;width:8px;height:8px;border:1px solid #fff;transform:rotate(45deg)}
.vlbl .arr{display:none;position:absolute;left:-8px;top:-8px;width:16px;height:16px;line-height:16px;text-align:center;font-size:12px;text-decoration:none}
.vlbl.edge i{display:none}.vlbl.edge .arr{display:block}.vlbl.edgeR .a,.vlbl.edgeR .b{left:auto;right:12px;text-align:right}
.vis .count{margin:2px 0 6px;font-size:11px}.vis .count b{font-size:20px;font-weight:400;color:#fff;margin-right:4px}.vis .count span{display:block;color:var(--dim);font-size:10px;margin-top:1px}
.vis .item.you .n{color:#fff}.vis .item.you .m{color:#9fd0ff}
.vlbl .a{position:absolute;left:10px;top:-12px}.vlbl .b{position:absolute;left:10px;top:0;color:#9aa0b0;font-size:9px}
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
`;var He=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!=null&&(n.innerHTML=t),n},ph=class{constructor(e,t){this.cfg=t,this.level=0,this.ang=0,this.pulse=0,this.dial=document.createElement("canvas"),this.dial.width=this.dial.height=88,this.dial.style.cssText="position:absolute;right:9px;top:50%;width:52px;height:52px;margin-top:-26px;pointer-events:none",e.style.position="absolute",e.appendChild(this.dial),e.style.paddingRight="74px",this.glow=document.createElement("div"),this.glow.style.cssText="position:fixed;inset:0;pointer-events:none;opacity:0;background:radial-gradient(ellipse at center, rgba(150,180,255,0) 55%, rgba(150,180,255,0.55) 135%)"}update(e,t){let n=t>1.5?Math.min(1,Math.log10(t)/7):0;this.level+=(n-this.level)*(1-Math.exp(-e/.8));let s=this.level,r=this.dial.getContext("2d"),o=44,a=2*Math.PI/60*Math.pow(Math.max(t,1),.55),l=Math.min(a,38);this.ang=(this.ang+l*e)%(Math.PI*2),r.clearRect(0,0,88,88),r.save(),r.translate(o,o);let c=.35+.5*s;r.strokeStyle=`rgba(225,232,255,${c})`,r.lineWidth=1.6,r.beginPath(),r.arc(0,0,36,0,Math.PI*2),r.stroke();for(let f=0;f<12;f++){let p=f/12*Math.PI*2,v=f%3?31:28;r.beginPath(),r.moveTo(Math.cos(p)*v,Math.sin(p)*v),r.lineTo(Math.cos(p)*34,Math.sin(p)*34),r.stroke()}let d=Math.min(Math.PI*2,l*.16*(1+3*s)),h=16;for(let f=0;f<h;f++){let p=f/h,v=this.ang-p*d;r.fillStyle=`rgba(190,210,255,${(1-p*.8)*.9*Math.min(1,a*.25)*(.15+.85*s*s)/(1+5*p)})`,r.beginPath(),r.moveTo(0,0),r.arc(0,0,34,v-d/h-.01,v+.01),r.closePath(),r.fill()}r.strokeStyle=`rgba(255,255,255,${.7+.3*s})`,r.lineWidth=2,r.lineCap="round",r.beginPath(),r.moveTo(0,0),r.lineTo(Math.cos(this.ang-Math.PI/2)*32,Math.sin(this.ang-Math.PI/2)*32),r.stroke(),r.restore(),this.dial.style.filter=s>.3?`drop-shadow(0 0 ${2+6*s}px rgba(170,195,255,${.3+.5*s}))`:"none",this.pulse+=e*(.4+1.6*s);let u=this.cfg.ui.timeGlow===!1?0:Math.max(0,s-.25)/.75;this.glow.style.opacity=String(u*(.3+.5*s)*(.7+.3*Math.sin(this.pulse*2)))}},mh=class{constructor(e){this.ui=e,this.t=0,this.W=148,this.on=e.cfg.ui.systemMap!==!1,this.box=document.createElement("div"),this.box.className="smap",this.cv=document.createElement("canvas"),this.cap=document.createElement("div"),this.cap.className="cap",this.box.append(this.cv,this.cap)}toggle(){this.on=!this.on,this.on||(this.box.style.display="none")}draw(e){let t=this.ui,n=t.sim,s=n.system;if(!this.on||t.hidden||!s){this.box.style.display="none";return}if(this.t+=e,this.t<1/30)return;this.t=0,this.box.style.display="block";let r=this.W,o=Math.min(2,window.devicePixelRatio||1),a=this.cv;a.width!==r*o&&(a.width=a.height=r*o,a.style.width=a.style.height=r+"px");let l=a.getContext("2d");l.setTransform(o,0,0,o,0,0),l.clearRect(0,0,r,r);let c=n.jd,d=r/2,h=r/2-9,u=s.bodies.filter(S=>(S.kind==="planet"||S.kind==="dwarf")&&S.semiMajorKm),f=u.filter(S=>S.kind==="planet"),p=u.filter(S=>S.kind==="dwarf"),v=n.sysPos(c),m=0;for(let S of u)m=Math.max(m,S.semiMajorKm*1.08);m=Math.max(m,Math.hypot(v[0],v[1])*1.02>m*1&&Math.hypot(v[0],v[1])<m*3?Math.hypot(v[0],v[1])*1.02:0,1e7);let g=m*.012,y=S=>Math.log1p(S/g)/Math.log1p(m/g),_=(S,D)=>{let P=Math.hypot(S,D),N=Math.atan2(D,S),k=P>1?y(P)*h/P:0;return[d+S*k,d-D*k]};l.lineWidth=1,l.strokeStyle="rgba(210,220,255,0.16)";for(let S of u)l.beginPath(),l.arc(d,d,y(S.semiMajorKm)*h,0,Math.PI*2),l.stroke();for(let S of s.stars){let D=S.positionAt(c),P=_(D[0],D[1]);l.fillStyle="#ffe6b0",l.beginPath(),l.arc(P[0],P[1],3.2,0,Math.PI*2),l.fill()}let x=t.selected&&t.selected.type==="body"?t.selected.body:null;for(let S of u){let D=S.positionAt(c),P=_(D[0],D[1]),N=S.kind==="planet";l.fillStyle=N?"rgba(235,240,255,0.9)":"rgba(200,210,235,0.55)",l.beginPath(),l.arc(P[0],P[1],N?2.2:1.4,0,Math.PI*2),l.fill(),(S===n.ref||n.ref&&n.ref.parent===S||S===x)&&(l.strokeStyle=S===x?"#fff":"rgba(255,255,255,0.7)",l.beginPath(),l.arc(P[0],P[1],5,0,Math.PI*2),l.stroke())}let M=t.visitors&&t.visitors.state==="on"?t.visitors.view.filter(S=>S.sameSystem):[],E=performance.now()/1e3;for(let S of M){let D=_(v[0]+S.relKm[0],v[1]+S.relKm[1]),P=0;for(let q=0;q<S.name.length;q++)P=(P*31+S.name.charCodeAt(q))%997;let N=5,k=(E+P*.37)%N/N;if(k<.3){let q=k/.3;l.strokeStyle=`rgba(150,205,255,${.75*(1-q)})`,l.lineWidth=1.2,l.beginPath(),l.arc(D[0],D[1],3+15*q,0,Math.PI*2),l.stroke()}l.strokeStyle="#9fd0ff",l.fillStyle="rgba(159,208,255,0.35)",l.lineWidth=1.2,l.beginPath(),l.moveTo(D[0],D[1]-3.6),l.lineTo(D[0]+3.6,D[1]),l.lineTo(D[0],D[1]+3.6),l.lineTo(D[0]-3.6,D[1]),l.closePath(),l.fill(),l.stroke()}let A=n.course;if(A&&A.kind==="body"&&A.body.system===s){let S=A.body.positionAt(c),D=_(v[0],v[1]),P=_(S[0],S[1]);l.strokeStyle="rgba(255,255,255,0.35)",l.setLineDash([2,3]),l.beginPath(),l.moveTo(D[0],D[1]),l.lineTo(P[0],P[1]),l.stroke(),l.setLineDash([])}let R=t._view,w=_(v[0],v[1]);if(R){let S=new U(0,0,-1).applyMatrix3(R.clone().transpose()),D=Math.hypot(S.x,S.y);if(D>.15){let P=Math.atan2(-S.y,S.x),N=t.cfg.camera.fovDeg*Math.PI/180*.8*(.35+.65*D);l.fillStyle=`rgba(190,210,255,${.14*D})`,l.beginPath(),l.moveTo(w[0],w[1]),l.arc(w[0],w[1],30,P-N,P+N),l.closePath(),l.fill()}}let b=n.forward(),L=Math.hypot(b.x,b.y);if(l.fillStyle="#fff",l.strokeStyle="#fff",L>.3){let S=Math.atan2(-b.y,b.x);l.save(),l.translate(w[0],w[1]),l.rotate(S),l.beginPath(),l.moveTo(6,0),l.lineTo(-4,-3.6),l.lineTo(-2,0),l.lineTo(-4,3.6),l.closePath(),l.fill(),l.restore()}else l.beginPath(),l.arc(w[0],w[1],4,0,Math.PI*2),l.stroke(),l.beginPath(),l.arc(w[0],w[1],1.4,0,Math.PI*2),b.z>0?l.fill():(l.moveTo(w[0]-2.4,w[1]-2.4),l.lineTo(w[0]+2.4,w[1]+2.4),l.moveTo(w[0]+2.4,w[1]-2.4),l.lineTo(w[0]-2.4,w[1]+2.4),l.stroke());let B=f.length,F=p.length;this.cap.textContent=`${B} planet${B===1?"":"s"}${F?` \xB7 ${F} dwarf`:""}${s.fictional?" \xB7 fictional":""}${M.length?` \xB7 ${M.length} visitor${M.length>1?"s":""}`:""}`}},Pa=class{constructor(e,t,n,s,r){this.visitors=r,this.sim=e,this.cfg=t,this.gfx=n,this.canvas=s,this.root=document.getElementById("ui");let o=document.createElement("style");o.textContent=Zf,document.head.appendChild(o),this.keys=new Set,this.selected=null,this.labelsEnabled=t.visuals.labels.enabled,this.hidden=!1,this._build(),this._bindInput(),this.fpsAvg=60,this._lastNav=0}_build(){let e=this.root,t=this.sim,n=this.cfg;this.tl=He("div","tl panel"),this.tl.style.padding="7px 11px",this.tl.innerHTML='<div class="loc" id="h-loc"></div><div class="sub" id="h-sub"></div><div class="sub" id="h-sub2"></div>',this.timeFx=new ph(this.tl,n),this.root.appendChild(this.timeFx.glow),this.sysMap=new mh(this),this.root.appendChild(this.sysMap.box),this.tr=He("div","tr"),this.chips={};for(let l of["TOUR","FREE","AUTO","WARP"]){let c=He("div","chip",l);this.chips[l]=c,this.tr.appendChild(c)}this.chips.AUTO.style.cursor="pointer",this.chips.AUTO.title="autopilot (cruise control) for the set course \u2014 click or press P",this.chips.AUTO.onclick=()=>t.engageAutopilot(),this.banner=He("div","banner panel"),this.banner.textContent="fictional system \xB7 procedurally generated",this.toast=He("div","toast"),this.speedP=He("div","speed panel",`<div class="big" id="h-speed">0 m/s</div><div class="bar"><i id="h-bar" style="width:0%"></i></div>
      <div class="row"><span>velocity</span><b id="h-kms"></b></div><div class="row"><span>\u03B3 / \u03B2</span><b id="h-gam"></b></div><div class="row"><span>frame</span><b id="h-frame"></b></div><div class="row"><span id="h-near-l">nearest</span><b id="h-near"></b></div><div class="row"><span>engine</span><b id="h-eng"></b></div><div class="row"><span>trip clock</span><b id="h-trip"></b></div>`),this.courseP=He("div","course panel",""),this.courseP.style.display="none",this.ctl=He("div","ctl panel");let s=He("div","grp");s.appendChild(He("span","lab","time")),this.timeBtns=[],n.time.steps.forEach((l,c)=>{let d=He("button","",l>=1e6?l/1e6+"M":l>=1e3?l/1e3+"k":String(l));d.title=`time \xD7${l} (key ${c+1})`,d.onclick=()=>t.setTimeIndex(c),s.appendChild(d),this.timeBtns.push(d)}),this.autoT=He("button","","A"),this.autoT.title="automatic time compression for autopilot legs (key 0)",this.autoT.onclick=()=>t.setTimeAuto(!t.timeAuto),s.appendChild(this.autoT);let r=He("div","drive");r.innerHTML=`<div class="dh"><span class="lab">drive</span><b id="drv-txt"></b></div>
      <div class="trk" id="drv-trk"><i class="seg o"></i><i class="seg c"></i><i class="seg w"></i><i class="cmd" id="drv-cmd"></i><i class="act" id="drv-act"></i><i class="thumb" id="drv-thumb"></i></div>
      <div class="lbls"><span style="left:0">stop</span><span id="drv-l1"></span><span id="drv-l3"></span><span id="drv-l4"></span></div>
      <div class="legend"><span class="o">ROCKET \xB7 km/s</span><span class="c">NACELLES \xB7 % c</span><span class="w">WARP \xB7 c</span></div>`,this._setupDrive(r);let o=He("div","grp"),a=He("div","grp");a.appendChild(He("span","lab","tour")),this.btnSys=He("button","","SYSTEM"),this.btnSys.title="tour the planets of the star system you are in (T)",this.btnSys.onclick=()=>this.startTour("system"),this.btnStars=He("button","","STARS"),this.btnStars.title="tour the local stars, warping from system to system",this.btnStars.onclick=()=>this.startTour("stars"),this.btnPace=He("button","","FAST"),this.btnPace.title="FAST: time compression is automatic \xB7 SLOW: you set it with the TIME buttons",this.btnPace.onclick=()=>t.setTourPace((t.tour?t.tour.pace:t.tourPace)==="fast"?"slow":"fast"),a.append(this.btnSys,this.btnStars,this.btnPace),this.btnVis=He("button","","VISITORS"),this.btnVis.title="see other people flying right now (opt-in, peer to peer)",this.btnVis.onclick=()=>this.toggleVisitors(),this.btnNav=He("button","","NAV"),this.btnNav.onclick=()=>this.toggleNav(),this.btnStop=He("button","","HOLD"),this.btnStop.title="cancel autopilot / stop (X)",this.btnStop.onclick=()=>this.stopAll(),this.btnSet=He("button","","\u2699"),this.btnSet.title="settings (,)",this.btnSet.onclick=()=>this.toggleSettings(),this.btnFull=He("button","","\u26F6"),this.btnFull.title="full screen on / off (Z)",this.btnFull.onclick=()=>this.toggleFullscreen(),this.btnHelp=He("button","","?"),this.btnHelp.onclick=()=>this.help.classList.toggle("open");for(let l of[this.btnVis,this.btnNav,this.btnStop,this.btnSet,this.btnFull,this.btnHelp])o.appendChild(l);this.ctl.append(r,s,a,o),this.nav=He("div","nav panel",'<h4><span>Navigation</span><span id="nav-x" style="cursor:pointer">\xD7</span></h4><div class="srch"><input id="nav-q" type="text" placeholder="search systems (2+ characters)" autocomplete="off" spellcheck="false"></div><div class="list" id="nav-list"></div><div class="foot" id="nav-foot">select a destination</div>'),this.visP=He("div","vis panel",""),this.visKey="",this.visLbls=[],this.setP=He("div","set panel",'<h4><span>Settings</span><span id="set-x" style="cursor:pointer">\xD7</span></h4><div class="body" id="set-body"></div>'),this.help=He("div","help panel",`<h4>Controls</h4><div class="cols">
      <div><kbd>W</kbd><kbd>S</kbd> throttle up / down</div><div><kbd>X</kbd> cut throttle \xB7 cancel autopilot</div>
      <div><kbd>A</kbd><kbd>D</kbd> yaw \xB7 <kbd>R</kbd><kbd>F</kbd> pitch \xB7 <kbd>Q</kbd><kbd>E</kbd> roll</div><div>mouse: <b>drag</b> orbit camera \xB7 <b>wheel</b> zoom</div>
      <div><kbd>right-drag</kbd> / <kbd>Shift</kbd>+drag steer ship</div><div><kbd>C</kbd> recentre camera \xB7 <kbd>V</kbd> first-person</div>
      <div><kbd>=</kbd><kbd>-</kbd> / wheel on the drive slider: step through rocket \u2192 nacelle \u2192 warp speeds</div><div><kbd>G</kbd> engage / drop warp \xB7 <kbd>]</kbd><kbd>[</kbd> warp step</div><div><kbd>1</kbd>\u2013<kbd>8</kbd> time compression \xB7 <kbd>0</kbd> auto</div>
      <div><kbd>N</kbd> navigation \xB7 <kbd>Enter</kbd> set course</div><div><kbd>T</kbd> tour on / off \xB7 <kbd>,</kbd> settings</div>
      <div><kbd>O</kbd> orbit lines \xB7 <kbd>L</kbd> labels</div><div><kbd>M</kbd> system map \xB7 <kbd>Z</kbd> full screen \xB7 <kbd>H</kbd> hide interface \xB7 <kbd>?</kbd> this help</div></div>
      <div style="margin-top:8px;color:#8a8a8a">Speed limit inside a heliopause is ${n.ship.maxSublightC} c. Beyond it the warp drive steps 1 c \u2192 ${n.warp.steps[n.warp.steps.length-1].toLocaleString("en-US")} c and the ship brakes itself to sub-light at the next heliopause. Nothing can be landed on; every body has a safe-orbit wall.</div>`),this.labelLayer=He("div"),this.labelLayer.style.cssText="position:absolute;inset:0;pointer-events:none",this.well=He("div","well panel",'<canvas width="760" height="64"></canvas>'),this.wellCv=this.well.querySelector("canvas"),this.selP=He("div","selp panel",""),this.selKey=null,this.markSel=He("div","mark",'<div class="box"></div><div class="arr"></div><div class="tx"></div>'),this.markHome=He("div","mark home",'<div class="arr"></div><div class="tx"></div>'),this.labelLayer.append(this.markSel,this.markHome),this.hint=He("div","hint",n.ui.keyHints?"drag = look around \xB7 right-drag = steer \xB7 W/S throttle \xB7 N navigation \xB7 ? help":""),this.fps=He("div","fps",""),e.append(this.labelLayer,this.well,this.selP,this.tl,this.tr,this.banner,this.toast,this.speedP,this.courseP,this.ctl,this.nav,this.visP,this.setP,this.help,this.hint,this.fps),this.nav.querySelector("#nav-x").onclick=()=>this.nav.classList.remove("open"),this.setP.querySelector("#set-x").onclick=()=>this.setP.classList.remove("open"),this._buildSettings(),this.lbls=[],this.$=l=>document.getElementById(l),this.navList=this.$("nav-list"),this.navFoot=this.$("nav-foot"),this.navQ=this.$("nav-q"),this.navQ.addEventListener("input",()=>this.renderNav(!0)),this.navQ.addEventListener("keydown",l=>{if(l.key==="Escape")this.navQ.value?(this.navQ.value="",this.renderNav(!0)):(this.navQ.blur(),this.nav.classList.remove("open")),l.stopPropagation();else if(l.key==="Enter"){let c=this.navList.querySelector(".item:not(.dim)");c&&!this.selected?c.click():this.commitSelection(l.shiftKey?"approach":"orbit")}}),setTimeout(()=>{this.hint&&(this.hint.style.opacity="0")},22e3),this.hint.style.transition="opacity 2s"}toggleNav(){this.nav.classList.toggle("open"),this.nav.classList.contains("open")&&(this.visP.classList.remove("open"),this.renderNav(!0),setTimeout(()=>this.navQ.focus(),0))}startTour(e){let t=this.sim;t.tour&&t.tour.scope===e?t.stopTour():t.beginTour(e)}toggleFullscreen(){let e=document,t=e.documentElement;if(e.fullscreenElement||e.webkitFullscreenElement)(e.exitFullscreen||e.webkitExitFullscreen).call(e);else{let n=t.requestFullscreen||t.webkitRequestFullscreen;if(n){let s=n.call(t);s&&s.catch&&s.catch(()=>this.sim.say("Full screen was refused by the browser",3))}else this.sim.say("Full screen is not available in this browser",3)}}toggleSettings(){this.setP.classList.toggle("open")}stopAll(){let e=this.sim;e.tour&&e.stopTour(),e.course&&e.cancelCourse("Autopilot disengaged"),e.warp.on&&e.disengageWarp(),e.speedTarget=0}_buildSettings(){let e=this.setP.querySelector("#set-body"),t=this.cfg,n={};try{n=JSON.parse(localStorage.getItem("starship.settings")||"{}")}catch{}let s=u=>u.split(".").reduce((f,p)=>f?.[p],t),r=(u,f)=>{let p=u.split("."),v=p.pop();p.reduce((m,g)=>m[g],t)[v]=f,n[u]=f;try{localStorage.setItem("starship.settings",JSON.stringify(n))}catch{}};for(let[u,f]of Object.entries(n))try{r(u,f)}catch{}let o=u=>e.appendChild(He("div","sec",u)),a=(u,f,p,v,m,g=y=>y)=>{let y=He("label","",`<span>${u}</span>`),_=He("input");_.type="range",_.min=p,_.max=v,_.step=m,_.value=s(f);let x=He("span","v",g(+_.value));_.oninput=()=>{r(f,+_.value),x.textContent=g(+_.value)},y.append(_,x),e.appendChild(y)},l=(u,f,p)=>{let v=He("label","",`<span>${u}</span>`),m=He("input");m.type="checkbox",m.checked=!!s(f),m.onchange=()=>{r(f,m.checked),p&&p(m.checked)},v.appendChild(m),e.appendChild(v)};o("picture"),a("exposure (EV)","visuals.exposure.compensationEv",-3,3,.1,u=>u.toFixed(1)),a("visual intensity","visuals.intensity",0,2,.05,u=>u.toFixed(2)),a("bloom","visuals.bloom.strength",0,.3,.005,u=>u.toFixed(3)),a("film grain","visuals.tonemap.filmGrain",0,.05,.002,u=>u.toFixed(3)),a("field of view","camera.fovDeg",30,90,1,u=>u+"\xB0"),a("render scale","visuals.renderScale",.5,1.5,.05,u=>u.toFixed(2)),o("sky"),a("star brightness","visuals.stars.brightness",.2,4,.05,u=>u.toFixed(2)),a("star halo","visuals.stars.haloStrength",0,3,.1,u=>u.toFixed(1)),a("star colour","visuals.stars.colorSaturation",0,2,.05,u=>u.toFixed(2)),a("milky way gain","visuals.milkyWay.gain",0,30,.5,u=>u.toFixed(1)),a("dust / detail","visuals.milkyWay.detail",0,2,.05,u=>u.toFixed(2)),a("galaxies gain","visuals.galaxies.gain",0,10,.1,u=>u.toFixed(1)),a("galaxy smudge floor","visuals.galaxies.visibilityFloor",0,.1,.002,u=>u.toFixed(3)),o("worlds"),a("surface relief","visuals.planets.detailBump",0,2,.05,u=>u.toFixed(2)),a("atmospheres","visuals.planets.atmosphere",0,2,.05,u=>u.toFixed(2)),a("clouds","visuals.planets.clouds",0,1,.05,u=>u.toFixed(2)),l("orbit lines","visuals.orbitLines.enabled"),l("labels","visuals.labels.enabled",u=>this.labelsEnabled=u),l("ship shadows","visuals.ship.shadows"),o("flight"),a("speed limit (c)","ship.maxSublightC",.1,.95,.01,u=>u.toFixed(2)),a("turn rate (\xB0/s)","ship.turnRateDegPerSec",10,120,1,u=>u),a("warp bubble opacity","warp.visual.bubbleOpacity",0,2,.05,u=>u.toFixed(2)),a("warp star bunching","warp.visual.aberrationScale",0,1.2,.05,u=>u.toFixed(2)),a("warp streaks","warp.visual.streakScale",0,3,.1,u=>u.toFixed(1)),a("warp lensing","warp.visual.lensStrength",0,2,.05,u=>u.toFixed(2));let c=He("div","sec","everything else: config.js");e.appendChild(c);let d=He("button","","reset saved settings");d.style.marginTop="8px",d.onclick=()=>{try{localStorage.removeItem("starship.settings")}catch{}location.reload()},e.appendChild(d);let h=He("button","","copy settings JSON");h.style.margin="8px 0 0 6px",h.onclick=()=>navigator.clipboard&&navigator.clipboard.writeText(JSON.stringify(n,null,2)),e.appendChild(h)}_bindInput(){let e=this.sim,t=this.canvas,n=e.input;window.addEventListener("keydown",l=>{if(l.target&&/INPUT|TEXTAREA/.test(l.target.tagName))return;let c=l.key.toLowerCase();this.keys.add(c),c==="z"&&!l.ctrlKey&&!l.metaKey?this.toggleFullscreen():c==="h"?(this.hidden=!this.hidden,this.root.style.display=this.hidden?"none":""):c==="n"?this.toggleNav():c===","?this.toggleSettings():c==="?"||c==="/"?this.help.classList.toggle("open"):c==="escape"?(this.help.classList.remove("open"),this.nav.classList.remove("open"),this.setP.classList.remove("open")):c==="t"?e.tour?e.stopTour():e.beginTour():c==="g"?e.warp.on?e.disengageWarp():e.setWarpStep(0):c==="]"||c==="pageup"?e.stepWarp(1):c==="["||c==="pagedown"?e.stepWarp(-1):c==="x"?this.stopAll():c==="p"?e.engageAutopilot():c==="m"?this.sysMap.toggle():c==="="||c==="+"?this.stepDrive(1):c==="-"||c==="_"?this.stepDrive(-1):c==="o"?this.cfg.visuals.orbitLines.enabled=!this.cfg.visuals.orbitLines.enabled:c==="l"?(this.labelsEnabled=!this.labelsEnabled,this.cfg.visuals.labels.enabled=this.labelsEnabled):c==="c"?(e.recenterCamera(),e.cam.yawT=0,e.cam.pitchT=.28,e.cam.distT=this.cfg.ship.lengthM*this.cfg.camera.chaseDistanceLengths):c==="v"?(e.cam.distT=e.cam.distT<4?this.cfg.ship.lengthM*this.cfg.camera.chaseDistanceLengths:0,e.cam.yawT=0,e.cam.pitchT=0):c==="enter"?this.commitSelection(l.shiftKey?"approach":"orbit"):/^[1-8]$/.test(c)?e.setTimeIndex(+c-1):c==="0"&&e.setTimeAuto(!e.timeAuto),["arrowup","arrowdown","arrowleft","arrowright"," ","tab"].includes(c)&&l.preventDefault()}),window.addEventListener("keyup",l=>this.keys.delete(l.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear());let s=null;t.addEventListener("contextmenu",l=>l.preventDefault()),t.addEventListener("pointerdown",l=>{t.setPointerCapture(l.pointerId),s={x:l.clientX,y:l.clientY,mode:l.button===2||l.shiftKey?"steer":"orbit"}});let r=()=>{s=null};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("lostpointercapture",r),window.addEventListener("blur",r),t.addEventListener("pointermove",l=>{if(!s)return;let c=l.clientX-s.x,d=l.clientY-s.y;if(s.x=l.clientX,s.y=l.clientY,s.mode==="orbit")e.cam.holdUntil=performance.now()+6e3,e.cam.yawT-=c*this.cfg.camera.orbitSensitivity*(Math.cos(e.cam.pitchT)>=0?1:-1),e.cam.pitchT+=d*this.cfg.camera.orbitSensitivity,e.tour&&(e.cam.drift=!1);else{e.mode==="tour"&&e.stopTour();let h=this.cfg.camera.steerSensitivity,u=new Et().setFromEuler(new Ht(-d*h,-c*h,0,"YXZ"));e.rotateShip(u)}}),t.addEventListener("wheel",l=>{l.preventDefault();let c=this.cfg.ship.lengthM,d=Math.pow(this.cfg.camera.zoomSpeed,Math.sign(l.deltaY)*Math.min(3,Math.abs(l.deltaY)/100+.4));if(e.mode==="tour"&&e.tour){e.tour.zoomMul=Ce((e.tour.zoomMul||1)*d,.05,this.cfg.camera.maxDistanceLengths/2.6);return}let h=e.cam.distT;h=h<1&&l.deltaY<0?0:Math.max(h,.6)*d,e.cam.distT=Ce(h,this.cfg.camera.minDistanceLengths*c,this.cfg.camera.maxDistanceLengths*c),l.deltaY>0&&e.cam.distT<.6&&h>0&&(e.cam.distT=.6*d)},{passive:!1}),t.addEventListener("dblclick",()=>{e.recenterCamera(),e.cam.yawT=0,e.cam.pitchT=.28});let o=0,a=()=>{cancelAnimationFrame(o),o=requestAnimationFrame(()=>{(Math.abs(this.gfx.cssW-window.innerWidth)>0||Math.abs(this.gfx.cssH-window.innerHeight)>0)&&this.gfx.resize()})};window.addEventListener("resize",a),document.addEventListener("fullscreenchange",()=>{a(),setTimeout(a,150),setTimeout(a,600)}),window.ResizeObserver&&new ResizeObserver(a).observe(document.documentElement)}pollKeys(){let e=this.keys,t=this.sim.input;t.throttle=(e.has("w")?1:0)-(e.has("s")?1:0),t.yaw=(e.has("a")||e.has("arrowleft")?1:0)-(e.has("d")||e.has("arrowright")?1:0),t.pitch=(e.has("r")||e.has("arrowup")?1:0)-(e.has("f")||e.has("arrowdown")?1:0),t.roll=(e.has("q")?1:0)-(e.has("e")?1:0),t.brake=!1}_driveMap(){let e=this.cfg.ship,t=this.cfg.warp.steps,n=.28,s=.66,r=e.orbitalMaxKmS,o=e.maxSublightC*ft,a=.05;return{ORB:n,CRU:s,toU:(l,c)=>c!=null&&c>=0?s+(1-s)*(.04+.92*c/(t.length-1)):l<r?l<a?0:n*(.05+.95*Math.log(l/a)/Math.log(r/a)):n+(s-n)*Math.log(Math.min(l,o)/r)/Math.log(o/r),fromU:l=>{if(l=Ce(l,0,1),l<n){let d=l/n;return{kms:d<.05?0:a*Math.pow(r/a,(d-.05)/.95)}}if(l<s)return{kms:r*Math.pow(o/r,(l-n)/(s-n))};let c=(l-s)/(1-s);return{warp:Ce(Math.round((c-.04)/.92*(t.length-1)),0,t.length-1)}}}}_setupDrive(e){let t=this.sim,n=this._driveMap(),s=e.querySelector("#drv-trk"),r=this;this.drv={root:e,M:n,trk:s,txt:e.querySelector("#drv-txt"),thumb:e.querySelector("#drv-thumb"),cmd:e.querySelector("#drv-cmd"),act:e.querySelector("#drv-act")};let o=s.querySelectorAll(".seg");o[0].style.cssText=`left:0;width:${n.ORB*100}%`,o[1].style.cssText=`left:${n.ORB*100}%;width:${(n.CRU-n.ORB)*100}%`,o[2].style.cssText=`left:${n.CRU*100}%;width:${(1-n.CRU)*100}%`;let a=(h,u,f)=>{let p=e.querySelector(h);p.style.left=u*100+"%",p.textContent=f};a("#drv-l1",n.ORB,"100 km/s"),a("#drv-l3",n.CRU,"80 % c"),a("#drv-l4",.99,"10\u2076 c");let l=h=>{let u=s.getBoundingClientRect(),f=Ce((h-u.left)/u.width,0,1),p=n.fromU(f);if(p.warp!=null){if(t.warp.on&&t.warp.step===p.warp)return;t.setWarpStep(p.warp)}else{if(t.warp.on&&t.warp.dropping)return;t.commandSpeed(p.kms)}},c=!1;s.addEventListener("pointerdown",h=>{c=!0,s.setPointerCapture(h.pointerId),l(h.clientX),h.stopPropagation()}),s.addEventListener("pointermove",h=>{c&&l(h.clientX)});let d=()=>{c=!1};s.addEventListener("pointerup",d),s.addEventListener("pointercancel",d),s.addEventListener("wheel",h=>{h.preventDefault(),this.stepDrive(h.deltaY<0?1:-1)},{passive:!1})}_driveList(){let e=this.cfg.ship.speedPresets,t=[{kms:0}];for(let n of e.orbital)t.push({kms:n});for(let n of e.cruise)t.push({kms:n*ft});return this.cfg.warp.steps.forEach((n,s)=>t.push({warp:s})),t}stepDrive(e){let t=this.sim,n=this._driveList(),s=-1;if(t.warp.on&&!t.warp.dropping)s=n.findIndex(a=>a.warp===t.warp.step);else{let a=t.speedTarget,l=1e30;n.forEach((c,d)=>{if(c.kms!=null){let h=Math.abs(Math.log((c.kms+.02)/(a+.02)));h<l&&(l=h,s=d)}})}let r=Ce(s+e,0,n.length-1),o=n[r];o.warp!=null?t.setWarpStep(o.warp):t.commandSpeed(o.kms)}updateDrive(e){let t=this.drv,n=this.sim,s=t.M,r=n.eng,o=n.warp.on&&!n.warp.dropping,a=o?n.warp.step:-1,l=n.speedTarget,c=o?s.toU(0,a):s.toU(l),d=n.warp.on?s.toU(0,Math.max(n.warp.step,0)):s.toU(Math.max(n.speed,0));t.thumb.style.left=c*100+"%",t.act.style.left=d*100+"%";let h=n.warp.on,u=!h&&Math.max(n.speed,n.speedTarget)>=this.cfg.ship.orbitalMaxKmS,f=o?"#6aa8ff":u?"#f0f0f4":"#ff9a4a";t.thumb.style.borderColor=f,t.thumb.style.boxShadow=`0 0 8px ${f}`,t.act.style.background=f;let p=o?"WARP":u?"NACELLES":"ROCKET",v=o?`${this.cfg.warp.steps[a].toLocaleString("en-US")} c`:l<.05?"stop":l>=ft*.001?`${(l/ft*100).toFixed(l/ft<.1?2:1)} % c`:l>=1?`${l.toFixed(l<10?1:0)} km/s`:`${(l*1e3).toFixed(0)} m/s`;t.txt.innerHTML=`<span style="color:${f}">${p}</span> \xB7 ${v}`;let m=t.root.querySelectorAll(".legend span");m[0].style.opacity=.35+.65*r.rocket,m[1].style.opacity=.35+.65*r.cruise,m[2].style.opacity=.35+.65*r.warp}select(e){this.selected=e,this.selKey=null,this.altSel=null,this.altBody=null,this.nav.classList.contains("open")&&this.renderNav(!0)}commitSelection(e="orbit"){let t=this.selected;t&&(t.type==="body"?this.sim.setCourseBody(t.body,e,this.altSel!=null&&this.altBody===t.body?this.altSel:null):t.type==="system"&&this.sim.setCourseSystem(t.dest),this.renderNav(!0))}renderNav(e=!1){if(!this.nav.classList.contains("open"))return;let t=performance.now();if(!e&&t-this._lastNav<700)return;this._lastNav=t;let n=this.sim,s=n.getDestinations(e),r=this.navList;r.innerHTML="";let o=(u,f)=>r.appendChild(He("div",u,f)),a=this.selected,l=(this.navQ.value||"").trim(),c=l.length>=2,d=l.toLowerCase();if(l.length===1&&o("sec","type at least 2 characters to search"),n.system){o("sec",`in ${n.system.name}${n.system.fictional?" \xB7 fictional":""}`);let u=new Map(s.bodies.map(v=>[v.body,v])),f=s.bodies.filter(v=>v.kind==="star").concat(s.bodies.filter(v=>v.kind==="planet"||v.kind==="dwarf").sort((v,m)=>(v.body.orbit?.a??0)-(m.body.orbit?.a??0))),p=[];for(let v of f){p.push(v);let m=s.bodies.filter(g=>g.body.parent===v.body&&g.kind==="moon").sort((g,y)=>(g.body.orbit?.a??0)-(y.body.orbit?.a??0));p.push(...m)}for(let v of p){if(c&&!v.name.toLowerCase().includes(d))continue;let m=He("div","item"+(a&&a.body===v.body?" sel":"")),g=v.kind==="moon"?"&nbsp;&nbsp;\u21B3 ":"";m.innerHTML=`<span class="n">${g}${v.name}${v.body.fictional?'<span class="tag f">F</span>':""}</span><span class="m">${At(v.dist)}</span>`,m.onclick=()=>{this.select({type:"body",body:v.body})},m.ondblclick=()=>{this.selected={type:"body",body:v.body},this.commitSelection()},r.appendChild(m)}}let h=c?n.searchSystems(l):s.systems;o("sec",c?`systems matching \u201C${l}\u201D`:`star systems within ${this.cfg.destinations.radiusLy} ly`),h.length||o("item",`<span class="n" style="color:#777">${c?"no match":"none in range"}</span>`);for(let u of h){let f=He("div","item"+(u.outOfRange?" dim":"")+(a&&a.dest&&a.dest.group.key===u.group.key?" sel":""));f.innerHTML=`<span class="n">${u.name}${u.known?'<span class="tag">planets</span>':'<span class="tag f">F</span>'}</span><span class="m">${u.distLy.toFixed(2)} ly${u.outOfRange?" \xB7&nbsp;far":""}</span>`,f.onclick=()=>{this.select({type:"system",dest:u})},f.ondblclick=()=>{this.selected={type:"system",dest:u},this.commitSelection()},r.appendChild(f)}this.showFoot()}showFoot(){let e=this.selected,t=this.navFoot;if(!e){t.innerHTML='click to inspect \xB7 double-click or <b>Enter</b> to set course<br><span style="color:#666">F = fictional (procedurally generated)</span>';return}if(e.type==="body"){let r=e.body,o=this.cfg,a=r.safeRadiusKm(o)-r.radiusKm;t.innerHTML=`<b>${r.name}</b> \xB7 ${r.kind}${r.fictional?" \xB7 <b>FICTIONAL</b>":""}<br>radius ${At(r.radiusKm)} \xB7 g ${(r.gravityMs2||0).toFixed(2)} m/s\xB2 \xB7 safe orbit ${At(a)} up<br><span style="color:#888">${r.info||""}</span><br><span class="bb"><button id="goA" style="margin-top:5px">APPROACH</button> <button id="go" style="margin-top:5px">ORBIT</button></span>`}else{let r=e.dest;t.innerHTML=`<b>${r.name}</b> \xB7 ${r.distLy.toFixed(2)} ly \xB7 ${r.stars} star${r.stars>1?"s":""}<br>${r.known?"confirmed planets (NASA Exoplanet Archive)":"<b>no confirmed planets</b> \u2014 a procedurally generated <b>FICTIONAL</b> system will be shown"}<br><button id="go" style="margin-top:5px">SET COURSE</button>`}let n=t.querySelector("#go");n&&(n.onclick=()=>this.commitSelection("orbit"));let s=t.querySelector("#goA");s&&(s.onclick=()=>this.commitSelection("approach"))}_nearestStar(e){let t=performance.now();if(this._ns&&t-this._nsT<400)return this._ns;this._nsT=t;let n=this.sim.cat,s=null;for(let a=.5;a<=64&&!s;a*=2){let l=1/0;for(let c of n.within(e,a)){let d=Math.hypot(n.pos[c*3]-e[0],n.pos[c*3+1]-e[1],n.pos[c*3+2]-e[2]);d<l&&(l=d,s=c)}}if(s==null)return this._ns=null,null;let r=n.traits(s),o=Math.hypot(n.pos[s*3]-e[0],n.pos[s*3+1]-e[1],n.pos[s*3+2]-e[2]);return this._ns={name:n.isSun(s)?"Sol":n.name(s),distKm:o*st,hpKm:this.sim.uni.heliopauseOfStar(s),gm:r.gm,radiusKm:r.radiusKm},this._ns}updateWell(){let e=this.sim,t=this.wellCv,n=t.getContext("2d"),s=420,r=76,o=Math.min(2,window.devicePixelRatio||1);t.width!==s*o&&(t.width=s*o,t.height=r*o),n.setTransform(o,0,0,o,0,0);let a,l,c,d,h,u=!1,f=[];if(e.system){let P=e.system,N=e.sysPos(),k=null;for(let q of P.stars){let Z=q.positionAt(e.jd),O=Math.hypot(N[0]-Z[0],N[1]-Z[1],N[2]-Z[2]);(!k||O<k.d)&&(k={st:q,d:O})}a=P.name.replace(/ system$/i,"")==="Solar System"?"Sol":k.st.name,l=k.d,c=P.heliopauseKm,d=k.st.gm,h=k.st.radiusKm,u=Math.hypot(N[0],N[1],N[2])>c,f=P.bodies.filter(q=>(q.kind==="planet"||q.kind==="dwarf")&&q.semiMajorKm).map(q=>({n:q.name,a:q.semiMajorKm}))}else{let P=this._nearestStar(e.shipPc());if(!P){this.well.style.display="none";return}a=P.name,l=P.distKm,c=P.hpKm,d=P.gm,h=P.radiusKm,u=!0}this.well.style.display=this.hidden?"none":"block";let p=Math.log10(Math.max(h,1)),v=Math.log10(c),m=14,g=m,y=s-m,_=28,x=P=>g+(y-g)*Ce((Math.log10(Math.max(P,1))-p)/(v-p),0,1);n.clearRect(0,0,s,r);let M=n.createLinearGradient(g,0,y,0);M.addColorStop(0,"rgba(235,235,235,0.95)"),M.addColorStop(.35,"rgba(180,180,180,0.5)"),M.addColorStop(1,"rgba(120,120,120,0.10)"),n.fillStyle=M,n.fillRect(g,_-5,y-g,10),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=1,n.strokeRect(g+.5,_-5.5,y-g,11),n.font="10px ui-monospace, Menlo, monospace",n.textBaseline="alphabetic",n.fillStyle="rgba(255,255,255,0.45)";for(let P=Math.ceil(Math.log10(h/Xe));P<=Math.floor(Math.log10(c/Xe));P++){let N=x(Math.pow(10,P)*Xe);n.fillRect(Math.round(N),_+5,1,4),P>=0&&n.fillText(P===0?"1 AU":Math.pow(10,P)+"",N-4*String(Math.pow(10,P)).length,_+19)}let E=f.length<=10;n.fillStyle="#fff";for(let P of f){let N=x(P.a);n.fillRect(Math.round(N),_-9,1,4),E&&(n.fillStyle="rgba(255,255,255,0.75)",n.fillText(P.n.slice(0,2),N-6,_-12),n.fillStyle="#fff")}n.fillStyle="#fff",n.fillRect(y-1,_-10,2,20),n.textAlign="right",n.fillText("HELIOPAUSE "+(c/Xe>=1e3?Math.round(c/Xe).toLocaleString("en-US"):(c/Xe).toFixed(c/Xe<10?1:0))+" AU",y,_-15),n.textAlign="left";let A=x(l);n.fillStyle="#fff",n.beginPath(),u&&l>c?(n.moveTo(y+10,_),n.lineTo(y+2,_-5),n.lineTo(y+2,_+5)):(n.moveTo(A,_-6),n.lineTo(A-5,_-14),n.lineTo(A+5,_-14)),n.closePath(),n.fill();let R=l,w=Math.sqrt(2*d/R),b=d/(R*R)*1e3,L=P=>P>=1?P.toFixed(2)+" m/s\xB2":P>=.001?(P*1e3).toFixed(2)+" mm/s\xB2":P*1e6>=.1?(P*1e6).toFixed(1)+" \xB5m/s\xB2":"<0.1 \xB5m/s\xB2",B=P=>P>=Dr*.1?(P/Dr).toFixed(2)+" ly":P>=Xe*.01?(P/Xe).toFixed(P/Xe<10?2:0)+" AU":At(P),F=c-R,S=`${a.toUpperCase()} \xB7 ${B(R)} \xB7 escape ${va(w)} \xB7 g ${L(b)}`,D=R>c?`outside the heliopause by ${B(R-c)}`:`${Math.max(0,100*(1-F/c)).toFixed(R/c<.01?2:1)} % of the way to the heliopause \xB7 ${B(F)} to go`;n.fillStyle="#d8d8d8",n.fillText(S,g,r-20),n.fillStyle="rgba(200,200,200,0.7)",n.fillText(D,g,r-6)}update(e,t){this.pollKeys();let n=this.sim,s=n.hud(),r=this.$;this.fpsAvg+=(1/Math.max(e,.001)-this.fpsAvg)*.05,r("h-loc").textContent=s.where;let o=jd(s.jd);r("h-sub").textContent=`${o.toISOString().replace("T"," ").slice(0,19)} UTC  \xB7  time \xD7${s.K>=100?Math.round(s.K).toLocaleString("en-US"):s.K.toFixed(s.K<10?1:0)}${s.K>=5?" "+"\u203A".repeat(Math.min(7,Math.floor(Math.log10(s.K)*1.1))):""}${n.timeAuto&&n.course&&!s.warp?" (auto)":""}`,r("h-sub2").textContent=n.ref?`frame: ${n.ref.name} \xB7 ${n.ref.kind}`:n.system?`frame: ${n.system.name}`:"frame: interstellar",this.updateWell(),this.sysMap.draw(e),this.banner.style.display=s.fictional?"block":"none",this.banner.textContent=s.fictional?"fictional system \xB7 procedurally generated \xB7 no confirmed planets":"",this.chips.TOUR.className="chip"+(n.mode==="tour"?" on":""),this.chips.FREE.className="chip"+(n.mode==="free"?" on":""),this.chips.AUTO.className="chip"+(s.engaged?" on":n.course?" warn":""),this.chips.WARP.className="chip"+(s.warp?" on":n.warp.form>0?" warn":""),r("h-speed").textContent=s.warp?s.c>=100?Math.round(s.c).toLocaleString("en-US")+" c":s.c.toFixed(s.c<10?2:1)+" c":s.c>=.01?s.c.toFixed(s.c<.1?4:3)+" c":va(s.speed),r("h-kms").textContent=s.warp?"FTL "+(s.c*ft).toExponential(2)+" km/s":va(s.speed);let a=Math.min(s.c,.9999);r("h-gam").textContent=s.warp?"bubble \xB7 n/a":`${s.gamma.toFixed(3)} / ${a.toFixed(3)}`,r("h-frame").textContent=n.ref?n.ref.name:n.system?"star":"rest",r("h-trip").textContent=ya(s.trip);{let p=n.forward(),v=Math.hypot(...n.vel),m=n.thrust,g=v>1e-6&&(p.x*n.vel[0]+p.y*n.vel[1]+p.z*n.vel[2])/v<-.5,y=!s.warp&&Math.max(n.speed,n.speedTarget)>=this.cfg.ship.orbitalMaxKmS;r("h-eng").textContent=s.warp?`warp field ${Math.round(n.eng.warp*100)} %`:n.ins?"orbit insertion burn":y?`nacelles ${Math.round(n.eng.cruise*100)} %`:m>.08?g?"rocket \xB7 retro burn":"rocket \xB7 burn":n.flipping?"turning to brake":"coasting"}if(!this._nearT||performance.now()-this._nearT>250){this._nearT=performance.now();let p="\u2014",v="nearest";if(n.system){let m=n.sysPos(),g=null,y=1/0;for(let _ of n.system.bodies){if(_.kind==="belt")continue;let x=_.positionAt(n.jd),M=Math.hypot(m[0]-x[0],m[1]-x[1],m[2]-x[2])-_.radiusKm;M<y&&(y=M,g=_)}g&&(v=g.name,p=(y<0?"0 km":At(y))+" alt")}else{let m=n.shipPc(),g=-1,y=1/0,_=n.cat.within(m,6);for(let x of _){let M=Math.hypot(n.cat.pos[x*3]-m[0],n.cat.pos[x*3+1]-m[1],n.cat.pos[x*3+2]-m[2]);M<y&&(y=M,g=x)}g>=0&&(v=n.cat.name(g),p=(y*3.2616).toFixed(y*3.26<1?3:2)+" ly")}this._nearTxt=[v,p]}this._nearTxt&&(r("h-near-l").textContent=this._nearTxt[0],r("h-near").textContent=this._nearTxt[1]);let l=Math.log10(this.cfg.ship.maxSublightC*ft),c=Math.log10(this.cfg.ship.speedFloorKmS),d=s.warp?Ce(Math.log10(Math.max(s.c,.05)/this.cfg.ship.maxSublightC)/Math.log10(this.cfg.warp.steps[this.cfg.warp.steps.length-1]/this.cfg.ship.maxSublightC),0,1):Ce((Math.log10(Math.max(s.speed,1e-9))-c)/(l-c),0,1);r("h-bar").style.width=d*100+"%";let h=!1;if(n.course){let p=n.eta();this.courseP.style.display="block";let v=n.course,m=v.kind==="body"?At(s.targetDist??0):`${((s.targetDist??0)/Dr).toFixed(2)} ly`,g=v.kind==="system"?{align:"aligning",depart:"sub-light to heliopause",warp:n.warp.on?n.warp.dropping||n.warp.capC<n.warp.c*1.02?"braking for arrival":"warp cruise":"engaging"}[v.phase]:v.remaining<(v.radius||1)*2?"final approach":"transit";if(v.engaged)this.courseP.innerHTML=`<div class="t">\u2192 ${v.label}${n.tour?n.tour.scope==="stars"?" \xB7 stars tour":" \xB7 system tour":""}</div><div class="d"><span>distance <b>${m}</b></span><span>ETA <b>${isFinite(p)?ya(p):"\u2014"}</b></span><span>elapsed <b>${ya(s.trip)}</b></span></div><div class="d"><span>${g}</span><span>${n.timeAuto&&!s.warp?"auto time":""}</span></div>`;else{let y=(v.alignErr??0)*180/Math.PI;this.courseP.innerHTML=`<div class="t">\u2192 ${v.label} \xB7 manual</div><div class="d"><span>distance <b>${m}</b></span><span>${v.aligned?"<b>on course</b>":"aligning \xB7 "+y.toFixed(0)+"\xB0 off"}</span></div><div class="d"><span>press <b>AUTO</b> (P) for cruise control</span><span><u id="cc-x" style="cursor:pointer">clear</u></span></div>`;let _=this.courseP.querySelector("#cc-x");_&&(_.onclick=()=>n.cancelCourse("Course cleared")),h=!0}}else if(n.tour){let p=n.tour,v=p.stops[p.idx],m=p.scope==="stars"?`${n.system?n.system.name:""} \xB7 ${v?v.note:""}`:v?v.note:"";this.courseP.style.display="block",this.courseP.innerHTML=`<div class="t">${p.scope==="stars"?"local stars tour":"star system tour"} \xB7 ${p.pace} \xB7 ${m}</div><div class="d"><span>${p.pace==="slow"?"you set the pace with the <b>TIME</b> buttons \xB7 <b>AUTO</b> = fast tour":"time compression is automatic \xB7 pick a <b>TIME</b> button for a slow tour"}</span></div><div class="d"><span>press <b>T</b> or move the controls to take the helm</span></div>`}else this.courseP.style.display="none";let u=n.timeAuto||!s.warp&&Math.abs(s.K-n.timeScale)>.02*n.timeScale,f=this.cfg.time.steps;this.timeBtns.forEach((p,v)=>p.classList.toggle("on",!u&&v===n.timeIndex)),this.timeBtns.forEach((p,v)=>p.classList.toggle("dim",s.warp&&f[v]>this.cfg.warp.maxTimeCompression)),this.autoT.classList.toggle("on",u),this.updateDrive(s),this.timeFx.update(e,s.K);{let p=n.tour;this.btnSys.classList.toggle("on",!!p&&p.scope==="system"),this.btnStars.classList.toggle("on",!!p&&p.scope==="stars");let v=p?p.pace:n.tourPace;this.btnPace.textContent=v==="fast"?"FAST":"SLOW",this.btnPace.classList.toggle("on",!!p),this.chips.TOUR.textContent=p?p.pace==="fast"?"FAST TOUR":"SLOW TOUR":"TOUR"}this.toast.innerHTML=n.messages.map(p=>`<div>${p.msg}</div>`).join(""),this.fps.textContent=`${Math.round(this.fpsAvg)} fps \xB7 ${this.gfx.W}\xD7${this.gfx.H}${t&&t.scale<.99?" \xB7 scale "+t.scale.toFixed(2):""}`,this.renderNav()}toggleVisitors(){this.visP.classList.toggle("open"),this.visP.classList.contains("open")&&(this.nav.classList.remove("open"),this.visKey="",this.renderVisitors(!0))}renderVisitors(e=!1){let t=this.visitors,n=this.visP,s=this.sim;if(!n.classList.contains("open"))return;let r=t.view,o=t.state,a=t.rerollWait,l=[o,t.error,t.callsign,t.count,this.sim.system?this.sim.system.name:"",r.map(u=>u.name+Math.round(Math.log10(u.distKm+1)*4)).join("|"),a>0?Math.ceil(a):0].join("\xA7");if(!e&&l===this.visKey)return;this.visKey=l;let c=u=>u>=946e10*.05?(u/94607e8).toFixed(2)+" ly":u>=1496e5*.05?(u/1496e5).toFixed(2)+" AU":At(u),d='<h4><span>Visitors</span><span id="vis-x" style="cursor:pointer">\xD7</span></h4><div class="body">';if(o==="off"||o==="error")d+=`<p>See other people who are flying right now, as ships.</p><p class="fine">This is <b>peer to peer</b>: your browser connects straight to other visitors' browsers, so they can see your network address, like in a video call. Public matchmaking relays only introduce browsers to each other. There are no accounts, nothing is stored, and you get a random callsign.</p>`,o==="error"&&(d+=`<p class="err">${t.error}</p>`),d+='<button id="vis-join">JOIN</button>';else{d+=`<div class="me">you are<br><b>${t.callsign}</b></div><div class="row"><button id="vis-reroll" ${a>0?"disabled":""}>RE-ROLL${a>0?" \xB7 "+Math.ceil(a)+"s":""}</button><button id="vis-leave">LEAVE</button></div>`;let u=r.length+1;d+=`<div class="count"><b>${o==="joining"?"\u2026":u}</b> ${u===1?"visitor":"visitors"} present<span>${o==="joining"?"connecting\u2026":r.length?`you + ${r.length} other${r.length>1?"s":""}`:"just you so far; others appear here as they arrive"}</span></div>`,d+=`<div class="item you"><span class="n">${t.callsign}</span><span class="m">you</span></div><div class="where">${s.system?"in "+s.system.name:"interstellar space"}</div>`;for(let f of r.slice(0,12))d+=`<div class="item"><span class="n">${f.name}</span><span class="m">${c(f.distKm)}</span></div><div class="where">${f.sameSystem?"in this system":f.sysName||"elsewhere"}${f.eng[2]>.1?" \xB7 warp":f.eng[1]>.1?" \xB7 cruise":f.eng[0]>.1?" \xB7 burning":""}</div>`}n.innerHTML=d+"</div>";let h=u=>n.querySelector(u);h("#vis-x")&&(h("#vis-x").onclick=()=>n.classList.remove("open")),h("#vis-join")&&(h("#vis-join").onclick=()=>{t.join().then(()=>this.renderVisitors(!0)),this.renderVisitors(!0)}),h("#vis-leave")&&(h("#vis-leave").onclick=()=>{t.leave(),this.renderVisitors(!0)}),h("#vis-reroll")&&(h("#vis-reroll").onclick=()=>{t.reroll(),this.renderVisitors(!0)})}updateVisitors(e,t){let n=this.visitors;this.renderVisitors();let s="VISITORS"+(n.state==="on"?` \xB7 ${n.count+1}`:"");this.btnVis.textContent!==s&&(this.btnVis.textContent=s),this.btnVis.classList.toggle("on",n.state==="on");let o=n.state==="on"&&!this.hidden&&this.labelsEnabled?n.view.slice(0,24):[];for(;this.visLbls.length<o.length;){let l=He("div","vlbl",'<i></i><span class="a"></span><span class="b"></span><u class="arr">\u27A4</u>');this.labelLayer.appendChild(l),this.visLbls.push(l)}let a=0;this.visLbls.forEach((l,c)=>{let d=o[c];if(!d){l.style.display="none";return}let h=this._project(d.relKm,e,t);if(!h.on&&(!d.sameSystem||++a>6)){l.style.display="none";return}l.style.display="block",l.style.transform=`translate(${Math.round(h.x)}px,${Math.round(h.y)}px)`,l.classList.toggle("edge",!h.on),l.classList.toggle("edgeR",!h.on&&Math.cos(h.ang*Math.PI/180)>.2),h.on||(l.children[3].style.transform=`rotate(${h.ang}deg)`);let u=d.eng[2]>.1?"#7fb2ff":d.eng[1]>.1?"#f4f4ff":d.eng[0]>.1?"#ffae5c":"#cfd3dc";l.firstChild.style.borderColor=u,l.firstChild.style.boxShadow=`0 0 6px ${u}`,l.children[3].style.color=u;let f=d.name+"|"+Math.round(d.distKm/(d.distKm>1e7?1e6:d.distKm>1e3?100:1));l._k!==f&&(l._k=f,l.children[1].textContent=d.name,l.children[2].textContent=d.distKm>946e10*.05?(d.distKm/94607e8).toFixed(2)+" ly":d.distKm>1496e5*.05?(d.distKm/1496e5).toFixed(2)+" AU":At(d.distKm))})}_project(e,t,n){let s=this.gfx.cssW,r=this.gfx.cssH,o=.5*r/Math.tan(.5*n*Math.PI/180),a=new U(e[0],e[1],e[2]).applyMatrix3(t),l=a.z>=-1e-9,c=s/2+a.x/Math.max(-a.z,1e-9)*o,d=r/2-a.y/Math.max(-a.z,1e-9)*o,h=34,u=h+26,f=r-118;if(!l&&c>h&&c<s-h&&d>u&&d<f)return{x:c,y:d,on:!0,ang:0};let v=a.x,m=-a.y;l&&Math.hypot(v,m)<1e-6&&(v=1);let g=Math.hypot(v,m)||1;v/=g,m/=g;let y=s/2,_=(u+f)/2,x=(s-2*h)/2,M=(f-u)/2,E=Math.min(Math.abs(v)>1e-6?x/Math.abs(v):1e9,Math.abs(m)>1e-6?M/Math.abs(m):1e9);return{x:y+v*E,y:_+m*E,on:!1,ang:Math.atan2(m,v)*180/Math.PI}}_placeMark(e,t,n,s){e.style.display="block",e.style.transform=`translate(${Math.round(t.x)}px,${Math.round(t.y)}px)`;let r=e.querySelector(".box"),o=e.querySelector(".arr"),a=e.querySelector(".tx");r&&(r.style.display=t.on&&s?"block":"none"),o.style.display=t.on?"none":"block",t.on||(o.style.transform=`rotate(${t.ang}deg)`),o.textContent="\u27A4",a.textContent=n,a.style.left=t.on?"22px":Math.cos(t.ang*Math.PI/180)>.2?"-"+(a.textContent.length*6.4+16)+"px":"14px"}_altControl(e){let t=this.selP.querySelector("#sp-r"),n=this.selP.querySelector("#sp-n"),s=Math.max(e.safeRadiusKm(this.cfg)-e.radiusKm,1),r=Math.max(e.radiusKm*40,s*4),o=Math.log(r/s),a=()=>this.altSel!=null&&this.altBody===e?this.altSel:s,l=()=>{t.value=String(Math.round(1e3*Math.log(Math.max(a(),s)/s)/o)),n.value=this.altSel!=null&&this.altBody===e?At(a()):At(s)+" (safe)"},c=d=>{this.altSel=Ce(d,s,r*4),this.altBody=e,l()};t.oninput=()=>c(s*Math.exp(o*+t.value/1e3)),n.onfocus=()=>{n.select()},n.onchange=()=>{let d=/^\s*([0-9.]+(?:e[0-9]+)?)\s*(m|km|au|mm|M km)?\s*$/i.exec(n.value.replace(/,/g,""));if(!d){l();return}let h=(d[2]||"km").toLowerCase(),u=parseFloat(d[1]);c(h==="m"?u/1e3:h==="au"?u*1495978707e-1:h==="mm"||h==="m km"?u*1e6:u)},l()}updateMarkers(e,t){let n=this.sim,s=n.uni;if(this._view=e,this.hidden){this.markSel.style.display="none",this.markHome.style.display="none",this.selP.style.display="none";return}let r=null,o="";if(n.system&&n.system===s.solar){let u=s.solar.get("earth");if(u&&n.ref!==u){let f=u.positionAt(n.jd),p=n.sysPos();r=[f[0]-p[0],f[1]-p[1],f[2]-p[2]],o="EARTH"}}else{let u=n.shipPc();r=[-u[0]*st,-u[1]*st,-u[2]*st],o="SOL"}let a=this.selected&&this.selected.type==="body"&&this.selected.body.name.toUpperCase()===o;if(r&&!a){let u=Math.hypot(r[0],r[1],r[2]);u<1e5&&o==="SOL"?this.markHome.style.display="none":this._placeMark(this.markHome,this._project(r,e,t),`${o} \xB7 ${At(u)}`,!1)}else this.markHome.style.display="none";let l=this.selected,c=!1;if(l&&l.type==="body"&&l.body.system===n.system&&n.system){c=!0;let u=l.body,f=u.positionAt(n.jd),p=n.sysPos(),v=[f[0]-p[0],f[1]-p[1],f[2]-p[2]],m=Math.hypot(v[0],v[1],v[2]);this._placeMark(this.markSel,this._project(v,e,t),`${u.name.toUpperCase()}${u.fictional?" (F)":""} \xB7 ${At(Math.max(m-u.radiusKm,0))}`,!0),this._selDist=m}else if(l&&l.type==="system"){c=!0;let u=l.dest.group.centre,f=n.shipPc(),p=[(u[0]-f[0])*st,(u[1]-f[1])*st,(u[2]-f[2])*st],v=Math.hypot(p[0],p[1],p[2]);this._placeMark(this.markSel,this._project(p,e,t),`${l.dest.name.toUpperCase()} \xB7 ${(v/Dr).toFixed(2)} ly`,!0)}if(!c){this.markSel.style.display="none",this.selP.style.display="none",l&&(this.selected=null),this.selKey=null;return}let d=l.type+":"+(l.type==="body"?l.body.name:l.dest.name);if(this.selKey!==d){if(this.selKey=d,this.selP.style.display="block",l.type==="body"){let u=l.body;this.selP.innerHTML=`<h5><b>${u.name}</b><span id="sp-x">\u2715</span></h5><div class="m">${u.kind}${u.fictional?" \xB7 <b>FICTIONAL</b>":""} \xB7 radius ${At(u.radiusKm)}<br><span id="sp-d"></span></div><div class="alt"><span>altitude</span><input id="sp-r" type="range" min="0" max="1000" step="1"><input id="sp-n" type="text" inputmode="decimal" spellcheck="false" title="altitude in km (or add m / km / AU)"></div><div class="b"><button id="sp-a" title="fly there and hold position at this altitude (Shift+Enter); untouched = ${this.cfg.autopilot.approachRadii} radii out">APPROACH</button><button id="sp-o" title="fly there and settle into the safe low orbit (Enter)">ORBIT</button></div>`,this._altControl(u),this.selP.querySelector("#sp-a").onclick=()=>this.commitSelection("approach"),this.selP.querySelector("#sp-o").onclick=()=>this.commitSelection("orbit")}else{let u=l.dest;this.selP.innerHTML=`<h5><b>${u.name}</b><span id="sp-x">\u2715</span></h5><div class="m">${u.stars} star${u.stars>1?"s":""} \xB7 ${u.known?"confirmed planets":"<b>FICTIONAL</b> planets"}<br><span id="sp-d"></span></div><div class="b"><button id="sp-o">SET COURSE</button></div>`,this.selP.querySelector("#sp-o").onclick=()=>this.commitSelection("orbit")}this.selP.querySelector("#sp-x").onclick=()=>{this.selected=null,this.selKey=null,this.nav.classList.contains("open")&&this.renderNav(!0)}}let h=this.selP.querySelector("#sp-d");if(h){let u=n.course,f=u&&(l.type==="body"&&u.kind==="body"&&u.body===l.body||l.type==="system"&&u.kind==="system"&&u.name===l.dest.name);h.textContent=(l.type==="body"?"distance "+At(Math.max((this._selDist||0)-l.body.radiusKm,0)):"")+(f?" \xB7 underway":"")}}updateLabels(e,t,n,s){if(!this.labelsEnabled||this.hidden){for(let f of this.lbls)f.e.style.display="none";return}let r=this.gfx.cssW,o=this.gfx.cssH,a=.5*o/Math.tan(.5*n*Math.PI/180),l=[],c=new U;for(let f of e.labels||[]){if(c.set(f.rel[0],f.rel[1],f.rel[2]).applyMatrix3(t),c.z>=-1e-6)continue;let p=r/2+c.x/-c.z*a,v=o/2-c.y/-c.z*a;if(p<-20||p>r+20||v<-20||v>o+20)continue;let g=(f.kind==="star"?3:f.kind==="planet"?2:f.kind==="dwarf"?1.5:f.kind==="galaxy"?2.5:1)*1e3+Math.min(f.angPx,300)-f.dist*1e-9;f.kind==="moon"&&f.angPx<3&&f.body.parent&&e.bodyInfo.get(f.body.parent).angPx<12||f.kind==="galaxy"&&f.dirOnly&&!this.cfg.visuals.galaxies.labels||l.push({x:p,y:v,L:f,score:g})}l.sort((f,p)=>p.score-f.score);let d=this.cfg.visuals.labels.maxLabels,h=[],u=0;for(let f of l){if(u>=d)break;h.some(p=>Math.abs(p.x-f.x)<90&&Math.abs(p.y-f.y)<18)||(h.push(f),u++)}for(;this.lbls.length<h.length;){let f=He("div","lbl"),p={e:f};f.onclick=()=>{p.body&&p.body.system===this.sim.system&&p.body.positionAt&&this.select({type:"body",body:p.body})},this.labelLayer.appendChild(f),this.lbls.push(p)}this.lbls.forEach((f,p)=>{let v=h[p];if(!v){f.e.style.display="none";return}let m=v.L.body,g=this.selected&&this.selected.body===m;f.body=m,f.e.style.display="block",f.e.style.transform=`translate(${Math.round(v.x+9)}px,${Math.round(v.y-7)}px)`,f.e.className="lbl"+(g?" sel":"");let y=m.name+(m.fictional?"\xB7F":"");f.key!==y+(v.L.dist<1e7?"n":"f")&&(f.key=y+(v.L.dist<1e7?"n":"f"),f.e.innerHTML=`<i style="position:absolute;left:-12px;top:5px"></i>${m.name}${m.fictional?' <span class="s">fictional</span>':""}`)})}};var Jf=["ISV","ISV","ISV","CSV","ESV","RSV","UES"],jf=["NCC","NCC","NCC","NAR","NX","NSV"],Qf=["Aurora","Calliope","Meridian","Odyssey","Resolute","Endeavour","Perseverance","Horizon","Tycho","Sagan","Kepler","Halley","Hypatia","Magellan","Vesper","Lodestar","Wayfarer","Corvus","Cassini","Armstrong","Challenger","Pathfinder","Voyager","Zenith","Cormorant","Albatross","Kestrel","Ptolemy","Copernicus","Galileo","Newton","Curie","Ibn Battuta","Zheng He","Shackleton","Amundsen","Nansen","Franklin","Cook","Drake","Hudson","Tasman","Vespucci","Orion","Lyra","Cygnus","Pegasus","Andromeda","Carina","Vela","Argo","Centaur","Perseus","Cepheus","Bellerophon","Artemis","Ariadne","Atlas","Hyperion","Helios","Pioneer","Surveyor","Mariner","Discoverer","Intrepid","Valiant","Steadfast","Tenacity","Clarity","Fortitude","Providence","Constance","Verity","Harmony","Concord","Sojourner","Wanderer","Nomad","Drifter","Migrant","Haven","Beacon","Sentinel","Lantern","Compass","Sextant","Astrolabe","Orrery","Gnomon","Equinox","Solstice","Zephyr","Mistral","Tramontane"];function vh(i=Math.random){let e=s=>s[Math.floor(i()*s.length)],t=i()<.7?1e3+Math.floor(i()*9e3):1e4+Math.floor(i()*9e4),n=i()<.12?"-"+e(["A","B","C","D","E"]):"";return`${e(Jf)} ${e(Qf)} ${e(jf)}-${t}${n}`}var mS=Jf.length*Qf.length*jf.length*9e3,gh=(i,e)=>Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number"&&Number.isFinite(t)&&Math.abs(t)<e),Ia=(i,e)=>typeof i=="string"?i.replace(/[^\p{L}\p{N} ·.\-']/gu,"").slice(0,e):"";function ep(i){if(!i||typeof i!="object"||i.ver!==1)return null;let e=Ia(i.name,40);if(e.length<3||!gh(i.abs,1e5)||!gh(i.vel,1e12)||!Array.isArray(i.quat)||i.quat.length!==4||!i.quat.every(o=>typeof o=="number"&&Number.isFinite(o)&&Math.abs(o)<=1.0001))return null;let t=Ia(i.sys,40),n=Ia(i.ref,40),s=null;if(t){if(!gh(i.pos,1e12))return null;s=i.pos.slice()}let r=Array.isArray(i.eng)&&i.eng.length===3?i.eng.map(o=>typeof o=="number"&&Number.isFinite(o)?Math.min(1,Math.max(0,o)):0):[0,0,0];return{ver:1,name:e,sys:t,ref:n,sysName:Ia(i.sysName,40),pos:s,abs:i.abs.slice(),vel:i.vel.slice(),quat:i.quat.slice(),eng:r}}function tp(i,e,t,n){let s=i.system,r=i.shipPc(),o={ver:1,name:e,sys:s?s.id:"",ref:i.ref?i.ref.id:"",sysName:s?s.name:"",pos:s?i.pos.slice():null,abs:r,vel:[0,0,0],quat:i.q.toArray(),eng:[i.eng.rocket,i.eng.cruise,i.eng.warp].map(a=>+a.toFixed(2))};if(t&&t.sys===o.sys&&t.ref===o.ref&&n>t.t){let a=(n-t.t)/1e3;o.vel=s?o.pos.map((l,c)=>(l-t.pos[c])/a):o.abs.map((l,c)=>(l-t.abs[c])/a)}return o}function np(i,e,t,n){let s=n||[0,0,0];if(i.sys&&i.sys===t.sysId){let o=i.ref?t.refPos(i.ref):[0,0,0];if(o)return[0,1,2].map(a=>o[a]+i.pos[a]+i.vel[a]*e+s[a]-t.mySysPos[a])}let r=i.sys?i.vel.map(o=>o/st):i.vel;return[0,1,2].map(o=>(i.abs[o]+r[o]*e-t.myPc[o])*st)}var Ka=class{constructor(e,t){this.sim=e,this.cfg=t,this.C=t.visitors,this.state="off",this.error="",this.callsign=vh(),this.peers=new Map,this.view=[],this.models=[],this._sendT=0,this._prev=null,this._rerollAt=0,this._room=null,this._ship=null,this._joinedAt=0}get count(){return this.peers.size}get rerollWait(){return Math.max(0,(this._rerollAt-performance.now())/1e3)}async join(){if(!(this.state==="on"||this.state==="joining")){this.state="joining",this.error="";try{let e=await Promise.resolve().then(()=>(Fm(),Um));this._mod=e;let t=e.joinRoom({appId:this.C.appId,relayConfig:this.C.relays&&this.C.relays.length?{urls:this.C.relays}:{redundancy:4}},this.C.room),n=t.makeAction("ship");this._room=t,this._ship=n,n.onMessage=(s,r)=>this._receive(s,r&&r.peerId!==void 0?r.peerId:r),t.onPeerJoin=s=>{this._sendTo(s)},t.onPeerLeave=s=>{this.peers.delete(s)},this.state="on",this._joinedAt=performance.now(),this._prev=null,this._sendT=0}catch(e){this.state="error",this.error="Could not start peer-to-peer: "+(e&&e.message?e.message:e)}}}leave(){try{this._room&&this._room.leave()}catch{}this._room=null,this._ship=null,this.peers.clear(),this.view=[],this.models=[],this.state="off",this.error=""}reroll(){let e=performance.now();return e<this._rerollAt?!1:(this._rerollAt=e+this.C.rerollSec*1e3,this.callsign=vh(),this._sendT=0,!0)}_sendTo(e){if(this._ship)try{this._ship.send(this._message(),{target:e})}catch{}}_message(){let e=performance.now(),t=tp(this.sim,this.callsign,this._prev,e);return this._prev={t:e,sys:t.sys,ref:t.ref,pos:t.pos,abs:t.abs},t}_receive(e,t){if(this.peers.size>=this.C.maxPeers&&!this.peers.has(t))return;let n=ep(e);if(!n)return;let s=performance.now(),r=this.peers.get(t),o=[0,0,0];if(r&&n.sys&&r.m.sys===n.sys&&r.m.ref===n.ref&&n.pos){let a=Math.min((s-r.t0)/1e3,this.C.maxExtrapolateSec),l=Math.exp(-(s-r.errT)/400);o=[0,1,2].map(c=>r.m.pos[c]+r.m.vel[c]*a+r.err[c]*l-n.pos[c])}this.peers.set(t,{m:n,t0:s,err:o,errT:s})}update(e){if(this.state!=="on"){this.view=[],this.models=[];return}let t=this.sim,n=performance.now();if(this._sendT-=e,this._sendT<=0&&this._ship){this._sendT=1/this.C.sendHz;try{this._ship.send(this._message())}catch{}}if(!this._relayChecked&&n-this._joinedAt>7e3){this._relayChecked=!0;try{let a=this._mod.getRelaySockets?Object.values(this._mod.getRelaySockets()):[];if(a.length&&!a.some(l=>l&&l.readyState===1)){this.state="error",this.error="Could not reach the matchmaking relays (offline, or blocked by a firewall).";return}}catch{}}let s=t.system,r={sysId:s?s.id:"",mySysPos:s?t.sysPos():[0,0,0],myPc:t.shipPc(),refPos:a=>{let l=s?s.get(a):null;return l?l.positionAt(t.jd):null}},o=[];for(let[a,l]of this.peers){if(n-l.t0>this.C.staleSec*1e3){this.peers.delete(a);continue}let c=Math.min((n-l.t0)/1e3,this.C.maxExtrapolateSec),d=Math.exp(-(n-l.errT)/400),h=np(l.m,c,r,l.err.map(u=>u*d));o.push({id:a,name:l.m.name,sysName:l.m.sysName||(l.m.sys?"":"interstellar space"),sameSystem:!!l.m.sys&&l.m.sys===r.sysId,relKm:h,distKm:Math.hypot(h[0],h[1],h[2]),eng:l.m.eng,quat:l.m.quat})}o.sort((a,l)=>a.distKm-l.distKm),this.view=o,this.models=o.filter(a=>a.distKm*1e3<this.C.modelRangeM).slice(0,this.C.maxModels)}};async function Bm(){let i=window.SIM_CONFIG;new URLSearchParams(location.search).has("notour")&&(i.sim.startWithTour=!1);try{let P=JSON.parse(localStorage.getItem("starship.settings")||"{}");for(let[N,k]of Object.entries(P)){let q=N.split("."),Z=q.pop();q.reduce((O,J)=>O?.[J],i)[Z]=k}}catch{}let t=(P,N)=>{let k=document.getElementById("boot-msg");k&&(k.textContent=P);let q=document.getElementById("boot-bar");q&&N!=null&&(q.style.width=N*100+"%")},n=()=>new Promise(P=>setTimeout(P,16));t("reading star catalogue\u2026",.08),await n();let s=await Kd();t(`${s.n.toLocaleString("en-US")} stars \xB7 ${s.galaxies.length} galaxies \xB7 ${s.hosts.size} planet hosts`,.3),await n();let r=new wa(s,i),o=document.getElementById("view"),a=new Sa(o,i,s);t("decoding planet maps\u2026",.5),await n();let l=await Bf(a.renderer);t("building the ship\u2026",.8),await n();let c=new Ta(a,i,l,r.cat),d=new Ra(a,i),h=new Ca(r,i),u=new Ka(h,i),f=new Pa(h,i,a,o,u);t("ready",1),await n();let p=null,v=i.visuals.renderScale,m=null,g=performance.now(),y=0,_=0,x=0,M=0,E=60,A=0,R=0,w=3,b=!1,L=null,B=0,F=window.__sim={cfg:i,data:s,uni:r,gfx:a,space:c,shipView:d,sim:h,ui:f,visitors:u,textures:l,frames:0,F:null,info:null,freeze:!1};F.testWarp=(P,N)=>{h.cancelCourse(),h.stopTour&&h.stopTour(),h.system=null,h.ref=null,h.anchorPc=[0,0,0],h.pos=[4e10,2e10,1e10],h.vel=[0,0,0],N&&h._lookAlong(new U(...N),1/0,new U(0,0,1)),h.warp.on=!0,h.warp.step=P,h.warp.c=i.warp.steps[P],h.warp.form=1,h.mode="free",h.warp.dropping=!1},F.deepSpace=(P=[.3,.9,.1],N=0,k=[0,0,0],q=[6e10,2e10,1e10])=>{h.cancelCourse(),h.stopTour&&h.stopTour(),h.warp.on=!1,h.warp.form=0,h.system=null,h.ref=null,h.anchorPc=k.slice(),h.pos=q.slice(),h.orbit=null,h._lookAlong(new U(...P),1/0,new U(0,0,1));let Z=h.forward(),O=N*ft;h.speedTarget=O,h.vel=[Z.x*O,Z.y*O,Z.z*O],h.mode="free"},F.probeHDR=()=>{let P=a,N=P.renderer,k=P.W,q=P.H,Z=new Uint16Array(4*k*q);N.readRenderTargetPixels(P.sceneRT,0,0,k,q,Z);let O=ge=>{let ee=ge>>10&31,re=ge&1023;return ee===0?Math.pow(2,-14)*(re/1024):ee===31?re?NaN:1/0:Math.pow(2,ee-15)*(1+re/1024)},J=0,fe=0,X=0,ne=0;for(let ge=0;ge<Z.length;ge+=4){let ee=O(Z[ge]);Number.isNaN(ee)?J++:ee===1/0?fe++:(ee>.002&&X++,ee>ne&&(ne=ee))}return{nan:J,inf:fe,lit:X,max:+ne.toFixed(3),total:k*q}};let S=performance.now(),D=P=>{let N=Math.min(.1,(P-g)/1e3);g=P,F.freeze||(f.pollKeys(),h.update(N)),h.system!==p&&(p=h.system,p?c.setSystem(p):c.clear());let k=h.jd,q=h.cam,Z=h.sysPos(k),O=Om(h,r,k,Z);if(F.devCam&&h.system){let H=h.system.get(F.devCam.body)||h.system.bodies.find(j=>j.id===F.devCam.body||j.name===F.devCam.body);H&&(O=Om(h,r,k,H.positionAt(k)))}let J=F.devGain||Vf(O.contextE,i);m=Gf(m,J,N,i.visuals.exposure.adaptSeconds),u.update(N);let fe=d.update({others:u.models,quat:h.q,camFrame:h.qCam,gimbal:h.gimbal,engines:h.eng,dt:N,cam:{yaw:q.yaw,pitch:q.pitch,dist:Math.max(q.dist,0),up:q.dist<3?0:q.up*Math.min(1,q.dist/40)},fov:i.camera.fovDeg,aspect:a.W/a.H,...O,exposure:m,throttle:eM(h,i),warp:{form:h.warp.form,speed01:Nm(h,i),pulse:h.warp.pulse}}),X=fe.camQuat,ne=fe.offsetWorld.clone().multiplyScalar(.001),ge=[Z[0]+ne.x,Z[1]+ne.y,Z[2]+ne.z],ee=F.devCam;if(ee&&h.system){let H=h.system.get(ee.body)||h.system.bodies.find(j=>j.id===ee.body||j.name===ee.body);if(H){let j=H.positionAt(k),se=(H.parent&&H.parent.kind==="star"?H.parent:h.system.stars[0]).positionAt(k),te=new U(se[0]-j[0],se[1]-j[1],se[2]-j[2]);te=te.lengthSq()<1?new U(1,0,0):te.normalize();let Re=new U(0,0,1),ye=new U().crossVectors(te,Re).normalize(),ie=new U().crossVectors(ye,te).normalize(),pe=ee.az*Je,Y=ee.el*Je,ce=te.clone().multiplyScalar(Math.cos(pe)*Math.cos(Y)).add(ye.clone().multiplyScalar(Math.sin(pe)*Math.cos(Y))).add(ie.clone().multiplyScalar(Math.sin(Y))),he=H.radiusKm*ee.r;ge=[j[0]+ce.x*he,j[1]+ce.y*he,j[2]+ce.z*he];let Ae=ce.clone().negate(),me=new U().crossVectors(Ae,Re).normalize(),Qe=new U().crossVectors(me,Ae);X=new Et().setFromRotationMatrix(new it().makeBasis(me,Qe,Ae.clone().negate())),ee.look&&X.multiply(new Et().setFromEuler(new Ht(ee.look[1]*Je,ee.look[0]*Je,0))),d.ship.root.visible=!1,d.bubble.visible=!1}}let re=h.system?h.system.originPc:h.anchorPc,ve=[re[0]+ge[0]/st,re[1]+ge[1]/st,re[2]+ge[2]/st],ae=h.visualBeta(),Se=ae[0]**2+ae[1]**2+ae[2]**2,Pe=1/Math.sqrt(Math.max(1-Se,1e-6)),Ve=new Be().setFromMatrix4(new it().makeRotationFromQuaternion(X)).transpose(),z=new U(ae[0],ae[1],ae[2]).applyMatrix3(Ve),ze=h.forward(),Oe=h.warp,We=i.warp.visual,Ee=Nm(h,i),je=tM(d,a,Oe,Ee),Te={camPc:ve,camSys:ge,jd:k,quat:X,view:Ve,beta:ae,gamma:Pe,betaCam:z,exposure:m,fov:i.camera.fovDeg,dt:N,dtReal:N,timeScale:h.timeUsed||1,focalPx:a.focalPx,mwScale:1,zodi:h.system&&h.system===r.solar?1:0,zodiScale:1,sunDir:O.sunDirRest,hide:[],showOrbits:!0,warp:{dir:[ze.x,ze.y,ze.z],beta:0,gamma:1,streak:Oe.on?Oe.form*(.3+.7*Ee):0,dim:0,lens:Oe.form>.01?Oe.form:0,center:je.center,radius:je.radius,flash:Oe.flash,dirCam:new U(0,0,-1)}};a.camera.fov=i.camera.fovDeg,a.camera.updateProjectionMatrix(),Te.focalPx=a.focalPx;let I={hide:[],labels:[],bodyInfo:new Map};if(p&&(I=c.update(Te)),Te.hide=I.hide,i.visuals.galaxies.labels&&i.visuals.galaxies.enabled&&i.visuals.labels.enabled){I.labels=(I.labels||[]).slice();for(let H of a.galaxies){let j=H.userData.g,se=H.material.uniforms.uDir.value;I.labels.push({body:{name:`${j.name} \xB7 ${(j.dKpc*3.2616).toFixed(0)} kly`,fictional:!1,parent:null},rel:[se.x*1e9,se.y*1e9,se.z*1e9],dist:1e18,angPx:3,kind:"galaxy",dirOnly:!0})}}F.F=Te,F.info=I,F.ctx=O,i.visuals.renderScale!==v&&(v=i.visuals.renderScale,a.setRenderScale(v)),a.render(Te,{space:p?(H,j)=>c.render(H,j):null,near:H=>d.render(H)}),F.freeze||f.update(N,{scale:a.renderScale}),f.updateLabels(I,Ve,i.camera.fovDeg,a.W/a.H),f.updateMarkers(Ve,i.camera.fovDeg),f.updateVisitors(Ve,i.camera.fovDeg),F.frames++;let T=i.visuals.adaptiveResolution;if(T.enabled&&performance.now()-S>4e3){let H=performance.now(),j=1/Math.max(N,.001);E+=(j-E)*.08,E<T.targetFps-6?(_+=N,M=0):E>=T.targetFps-4?(M+=N,_=0):_=M=0,L&&H-L.t>2500&&(E<L.fps*1.08&&a.renderScale<L.prev&&(a.setRenderScale(L.prev),B=H+12e4),L=null),_>1.5&&a.renderScale>T.min&&H>B&&(L={t:H,fps:E,prev:a.renderScale},a.setRenderScale(Math.max(T.min,a.renderScale-.1)),_=0,H-A<6e3&&(w=Math.min(w*2,90)),R=H),M>w&&a.renderScale<v-.01&&H-R>3e3&&(a.setRenderScale(Math.min(v,a.renderScale+.1)),M=0,A=H),H-R>4e4&&(w=3);let se=h.warp.form>.01||h.warp.on;b&&!se&&a.renderScale<v&&(a.setRenderScale(v),E=T.targetFps,_=0,w=3),b=se}requestAnimationFrame(D)};document.getElementById("boot").style.display="none",window.__ready=!0,requestAnimationFrame(D)}function Nm(i,e){let t=i.warp;if(!t.on)return 0;let n=e.warp.steps[e.warp.steps.length-1];return Ce(Math.log10(Math.max(t.c,.8)/.8)/Math.log10(n/.8),0,1)}function eM(i,e){return i.warp.on?.55:Ce(i.thrust,0,1)*.9}function Om(i,e,t,n){let s=e.cat,r=[1,0,0],o=[0,0,0],a=3e-9,l=0,c=[0,1,0],d=1,h=[1,0,0];if(i.system){let u=Wf(i.system,n,t),f=Hf(i.system,n,t);u&&(r=u.dir,h=u.dir,o=[u.color[0]*u.E,u.color[1]*u.E,u.color[2]*u.E],d=u.vis),l=f.shine,a=f.direct+f.shine+3e-9;let p=null,v=1/0;for(let m of i.system.bodies){if(m.kind==="star"||m.kind==="belt")continue;let g=m.positionAt(t),y=Math.hypot(g[0]-n[0],g[1]-n[1],g[2]-n[2]),_=y/m.radiusKm;_<v&&(v=_,p=[(g[0]-n[0])/y,(g[1]-n[1])/y,(g[2]-n[2])/y])}p&&v<40&&(c=p)}else{let u=i.shipPc(t),f=s.within(u,12),p=0,v=0;for(let m of f){let g=s.apparentMag(m,u),y=Math.pow(10,-.4*(g+26.74));if(v+=y,y>p){p=y;let _=[s.pos[m*3]-u[0],s.pos[m*3+1]-u[1],s.pos[m*3+2]-u[2]],x=Math.hypot(..._)||1;r=[_[0]/x,_[1]/x,_[2]/x],h=r;let M=us(s.d.teff[m]);o=[M[0]*y,M[1]*y,M[2]*y]}}a=v+3e-9}return{sunDir:r,sunE:o,sunVisible:d,bodyDir:c,bodyShine:l,ambientE:2e-9,contextE:a,sunDirRest:h}}function tM(i,e,t,n){if(!(t.form>.01))return{center:[.5,.5],radius:.2};let s=i.camera,r=new U(0,0,0).applyMatrix4(s.matrixWorldInverse),o=Math.max(r.length(),1),a=.5/Math.tan(.5*s.fov*Je),l=.5,c=.5;r.z<-.01&&(l=.5+r.x/-r.z*a/s.aspect,c=.5+r.y/-r.z*a);let d=120*(.35+.65*wn(0,.6,t.form)),h=Math.min(d/Math.max(o,d*1.02),.99),u=Math.min(Math.tan(Math.asin(h))*a,1.5);return{center:[l,c],radius:u}}Bm().catch(i=>{console.error(i);let e=document.getElementById("boot-msg");e&&(e.textContent="Error: "+(i&&i.message?i.message:i),e.style.color="#f88")});})();
