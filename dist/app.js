(()=>{var qu=0,sc=1,Ku=2;var hh=1,Tl=2,Wi=3,ai=0,Ue=1,Ee=2,un=0,is=1,_i=2,rc=3,ac=4,ci=5,Te=100,$u=101,Yu=102,Zu=103,Ju=104,ju=200,Ce=201,Qu=202,td=203,ks=204,as=205,ed=206,id=207,nd=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,co=0,ho=1,uo=2,os=3,fo=4,po=5,mo=6,go=7,uh=0,hd=1,ud=2,Pi=0,dd=1,fd=2,pd=3,md=4,gd=5,vd=6,xd=7;var dh=300,ls=301,cs=302,vo=303,xo=304,aa=306,bi=1e3,pi=1001,yo=1002,ri=1003,yd=1004;var ir=1005;var ke=1006,Pa=1007;var Ki=1008;var Ji=1009,fh=1010,ph=1011,Os=1012,Al=1013,Rn=1014,$i=1015,Fi=1016,Rl=1017,Cl=1018,hs=1020,mh=35902,gh=1021,vh=1022,De=1023,xh=1024,yh=1025,ns=1026,us=1027,_h=1028,Pl=1029,bh=1030,Il=1031;var Ll=1033,Ir=33776,Lr=33777,Dr=33778,Ur=33779,_o=35840,bo=35841,Mo=35842,So=35843,wo=36196,Eo=37492,To=37496,Ao=37808,Ro=37809,Co=37810,Po=37811,Io=37812,Lo=37813,Do=37814,Uo=37815,Fo=37816,No=37817,ko=37818,Oo=37819,Bo=37820,zo=37821,Fr=36492,Ho=36494,Vo=36495,Mh=36283,Go=36284,Wo=36285,Xo=36286;var Nr=2300,qo=2301,Ia=2302,oc=2400,lc=2401,cc=2402;var _d=3200,bd=3201;var Sh=0,Md=1,Ai="",Ge="srgb",ji="srgb-linear",oa="linear",he="srgb";var kn=7680;var hc=519,Sd=512,wd=513,Ed=514,wh=515,Td=516,Ad=517,Rd=518,Cd=519,Ko=35044,Dl=35048;var uc="300 es",Yi=2e3,kr=2001,fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var La=Math.PI/180,$o=180/Math.PI;function dn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function Pd(s,t){return(s%t+t)%t}function Da(s,t,e){return(1-e)*s+e*t}function Ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ct=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=n,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],p=i[8],v=n[0],g=n[3],m=n[6],x=n[1],_=n[4],y=n[7],E=n[2],A=n[5],T=n[8];return r[0]=o*v+a*x+l*E,r[3]=o*g+a*_+l*A,r[6]=o*m+a*y+l*T,r[1]=c*v+d*x+u*E,r[4]=c*g+d*_+u*A,r[7]=c*m+d*y+u*T,r[2]=h*v+f*x+p*E,r[5]=h*g+f*_+p*A,r[8]=h*m+f*y+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-i*r*d+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,p=e*u+i*h+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(n*c-d*i)*v,t[2]=(a*i-n*o)*v,t[3]=h*v,t[4]=(d*e-n*l)*v,t[5]=(n*r-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ua=new Dt;function Eh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Id(){let s=Or("canvas");return s.style.display="block",s}var dc={};function Us(s){s in dc||(dc[s]=!0,console.warn(s))}function Ld(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Dd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ud(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?oa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var fc=[.64,.33,.3,.6,.15,.06],pc=[.2126,.7152,.0722],mc=[.3127,.329],gc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ji]:{primaries:fc,whitePoint:mc,transfer:oa,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:pc,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:fc,whitePoint:mc,transfer:he,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:pc,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});var On,Yo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{On===void 0&&(On=Or("canvas")),On.width=t.width,On.height=t.height;let i=On.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=On}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fd=0,Br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Fa(n[o].image)):r.push(Fa(n[o]))}else r=Fa(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nd=0,Xe=class s extends fn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=pi,n=pi,r=ke,o=Ki,a=De,l=Ji,c=s.DEFAULT_ANISOTROPY,d=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=dn(),this.name="",this.source=new Br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bi:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bi:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=dh;Xe.DEFAULT_ANISOTROPY=1;var Qt=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(f+1)/2,E=(m+1)/2,A=(d+h)/4,T=(u+v)/4,C=(p+g)/4;return _>y&&_>E?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=A/i,r=T/i):y>E?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=A/n,r=C/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=T/r,n=C/r),this.set(i,n,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-v)/x,this.z=(h-d)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends fn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Xe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mi=class extends Zo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},zr=class extends Xe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends Xe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Me=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],d=i[n+2],u=i[n+3],h=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==h||c!==f||d!==p){let g=1-a,m=l*h+c*f+d*p+u*v,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let E=Math.sqrt(_),A=Math.atan2(E,m*x);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}let y=a*x;if(l=l*g+h*y,c=c*g+f*y,d=d*g+p*y,u=u*g+v*y,g===1-a){let E=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=E,c*=E,d*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],d=i[n+3],u=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+d*u+l*f-c*h,t[e+1]=l*p+d*h+c*u-a*f,t[e+2]=c*p+d*f+a*h-l*u,t[e+3]=d*p-a*u-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(n/2),u=a(r/2),h=l(i/2),f=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"YZX":this._x=h*d*u+c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u-h*f*p;break;case"XZY":this._x=h*d*u-c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=i+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+o*a+n*c-r*l,this._y=n*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-n*a,this._w=o*d-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=n*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),d=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*d,this.y=i+l*d+a*c-r*u,this.z=n+l*u+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Na=new I,xc=new Me,Cn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),sr.subVectors(this.max,Ts),Bn.subVectors(t.a,Ts),zn.subVectors(t.b,Ts),Hn.subVectors(t.c,Ts),sn.subVectors(zn,Bn),rn.subVectors(Hn,zn),_n.subVectors(Bn,Hn);let e=[0,-sn.z,sn.y,0,-rn.z,rn.y,0,-_n.z,_n.y,sn.z,0,-sn.x,rn.z,0,-rn.x,_n.z,0,-_n.x,-sn.y,sn.x,0,-rn.y,rn.x,0,-_n.y,_n.x,0];return!ka(e,Bn,zn,Hn,sr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Bn,zn,Hn,sr))?!1:(rr.crossVectors(sn,rn),e=[rr.x,rr.y,rr.z],ka(e,Bn,zn,Hn,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bi=[new I,new I,new I,new I,new I,new I,new I,new I],vi=new I,nr=new Cn,Bn=new I,zn=new I,Hn=new I,sn=new I,rn=new I,_n=new I,Ts=new I,sr=new I,rr=new I,bn=new I;function ka(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){bn.fromArray(s,r);let a=n.x*Math.abs(bn.x)+n.y*Math.abs(bn.y)+n.z*Math.abs(bn.z),l=t.dot(bn),c=e.dot(bn),d=i.dot(bn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var kd=new Cn,As=new I,Oa=new I,Pn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):kd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(As,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Oa)),this.expandByPoint(As.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new I,Ba=new I,ar=new I,an=new I,za=new I,or=new I,Ha=new I,Bs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ba.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),an.copy(this.origin).sub(Ba);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=an.dot(this.direction),l=-an.dot(ar),c=an.lengthSq(),d=Math.abs(1-o*o),u,h,f,p;if(d>0)if(u=o*l-a,h=o*a-l,p=r*d,u>=0)if(h>=-p)if(h<=p){let v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ba).addScaledVector(ar,h),f}intersectSphere(t,e){zi.subVectors(t.center,this.origin);let i=zi.dot(this.direction),n=zi.dot(zi)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,n=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,n=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,i,n,r){za.subVectors(e,t),or.subVectors(i,t),Ha.crossVectors(za,or);let o=this.direction.dot(Ha),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,t);let l=a*this.direction.dot(or.crossVectors(an,or));if(l<0)return null;let c=a*this.direction.dot(za.cross(an));if(c<0||l+c>o)return null;let d=-a*an.dot(Ha);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class s{constructor(t,e,i,n,r,o,a,l,c,d,u,h,f,p,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,d,u,h,f,p,v,g)}set(t,e,i,n,r,o,a,l,c,d,u,h,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Vn.setFromMatrixColumn(t,0).length(),r=1/Vn.setFromMatrixColumn(t,1).length(),o=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let h=o*d,f=o*u,p=a*d,v=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*d,f=l*u,p=c*d,v=c*u;e[0]=h+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=f*a-p,e[6]=v+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*d,f=l*u,p=c*d,v=c*u;e[0]=h-v*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*d,e[9]=v-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*d,f=o*u,p=a*d,v=a*u;e[0]=l*d,e[4]=p*c-f,e[8]=h*c+v,e[1]=l*u,e[5]=v*c+h,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*d,e[4]=v-h*u,e[8]=p*u+f,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*u+p,e[10]=h-v*u}else if(t.order==="XZY"){let h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+v,e[5]=o*d,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Od,t,Bd)}lookAt(t,e,i){let n=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),on.crossVectors(i,ni),on.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),on.crossVectors(i,ni)),on.normalize(),lr.crossVectors(ni,on),n[0]=on.x,n[4]=lr.x,n[8]=ni.x,n[1]=on.y,n[5]=lr.y,n[9]=ni.y,n[2]=on.z,n[6]=lr.z,n[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],x=i[3],_=i[7],y=i[11],E=i[15],A=n[0],T=n[4],C=n[8],S=n[12],M=n[1],P=n[5],U=n[9],F=n[13],N=n[2],V=n[6],L=n[10],q=n[14],O=n[3],Z=n[7],et=n[11],ht=n[15];return r[0]=o*A+a*M+l*N+c*O,r[4]=o*T+a*P+l*V+c*Z,r[8]=o*C+a*U+l*L+c*et,r[12]=o*S+a*F+l*q+c*ht,r[1]=d*A+u*M+h*N+f*O,r[5]=d*T+u*P+h*V+f*Z,r[9]=d*C+u*U+h*L+f*et,r[13]=d*S+u*F+h*q+f*ht,r[2]=p*A+v*M+g*N+m*O,r[6]=p*T+v*P+g*V+m*Z,r[10]=p*C+v*U+g*L+m*et,r[14]=p*S+v*F+g*q+m*ht,r[3]=x*A+_*M+y*N+E*O,r[7]=x*T+_*P+y*V+E*Z,r[11]=x*C+_*U+y*L+E*et,r[15]=x*S+_*F+y*q+E*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*l*u-n*c*u-r*a*h+i*c*h+n*a*f-i*l*f)+v*(+e*l*f-e*c*h+r*o*h-n*o*f+n*c*d-r*l*d)+g*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*d-i*c*d)+m*(-n*a*d-e*l*u+e*a*h+n*o*u-i*o*h+i*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=u*g*c-v*h*c+v*l*f-a*g*f-u*l*m+a*h*m,_=p*h*c-d*g*c-p*l*f+o*g*f+d*l*m-o*h*m,y=d*v*c-p*u*c+p*a*f-o*v*f-d*a*m+o*u*m,E=p*u*l-d*v*l-p*a*h+o*v*h+d*a*g-o*u*g,A=e*x+i*_+n*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=x*T,t[1]=(v*h*r-u*g*r-v*n*f+i*g*f+u*n*m-i*h*m)*T,t[2]=(a*g*r-v*l*r+v*n*c-i*g*c-a*n*m+i*l*m)*T,t[3]=(u*l*r-a*h*r-u*n*c+i*h*c+a*n*f-i*l*f)*T,t[4]=_*T,t[5]=(d*g*r-p*h*r+p*n*f-e*g*f-d*n*m+e*h*m)*T,t[6]=(p*l*r-o*g*r-p*n*c+e*g*c+o*n*m-e*l*m)*T,t[7]=(o*h*r-d*l*r+d*n*c-e*h*c-o*n*f+e*l*f)*T,t[8]=y*T,t[9]=(p*u*r-d*v*r-p*i*f+e*v*f+d*i*m-e*u*m)*T,t[10]=(o*v*r-p*a*r+p*i*c-e*v*c-o*i*m+e*a*m)*T,t[11]=(d*a*r-o*u*r-d*i*c+e*u*c+o*i*f-e*a*f)*T,t[12]=E*T,t[13]=(d*v*n-p*u*n+p*i*h-e*v*h-d*i*g+e*u*g)*T,t[14]=(p*a*n-o*v*n-p*i*l+e*v*l+o*i*g-e*a*g)*T,t[15]=(o*u*n-d*a*n+d*i*l-e*u*l-o*i*h+e*a*h)*T,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,d*a+i,d*l-n*o,0,c*l-n*a,d*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,p=r*u,v=o*d,g=o*u,m=a*u,x=l*c,_=l*d,y=l*u,E=i.x,A=i.y,T=i.z;return n[0]=(1-(v+m))*E,n[1]=(f+y)*E,n[2]=(p-_)*E,n[3]=0,n[4]=(f-y)*A,n[5]=(1-(h+m))*A,n[6]=(g+x)*A,n[7]=0,n[8]=(p+_)*T,n[9]=(g-x)*T,n[10]=(1-(h+v))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=Vn.set(n[0],n[1],n[2]).length(),o=Vn.set(n[4],n[5],n[6]).length(),a=Vn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],xi.copy(this);let c=1/r,d=1/o,u=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=d,xi.elements[5]*=d,xi.elements[6]*=d,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,e.setFromRotationMatrix(xi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=Yi){let l=this.elements,c=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),h=(i+n)/(i-n),f,p;if(a===Yi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===kr)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Yi){let l=this.elements,c=1/(e-t),d=1/(i-n),u=1/(o-r),h=(e+t)*c,f=(i+n)*d,p,v;if(a===Yi)p=(o+r)*u,v=-2*u;else if(a===kr)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Vn=new I,xi=new jt,Od=new I(0,0,0),Bd=new I(1,1,1),on=new I,lr=new I,ni=new I,yc=new jt,_c=new Me,Fe=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],d=n[9],u=n[2],h=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fe.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,bc=new I,Gn=new Me,Hi=new jt,cr=new I,Rs=new I,Hd=new I,Vd=new Me,Mc=new I(1,0,0),Sc=new I(0,1,0),wc=new I(0,0,1),Ec={type:"added"},Gd={type:"removed"},Wn={type:"childadded",child:null},Va={type:"childremoved",child:null},Oe=class s extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Fe,i=new Me,n=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new jt},normalMatrix:{value:new Dt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?cr.copy(t):cr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Rs,cr,this.up):Hi.lookAt(cr,Rs,this.up),this.quaternion.setFromRotationMatrix(Hi),n&&(Hi.extractRotation(n.matrixWorld),Gn.setFromRotationMatrix(Hi),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),u=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Oe.DEFAULT_UP=new I(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new I,Vi=new I,Ga=new I,Gi=new I,Xn=new I,qn=new I,Tc=new I,Wa=new I,Xa=new I,qa=new I,Ka=new Qt,$a=new Qt,Ya=new Qt,hn=class s{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),yi.subVectors(t,e),n.cross(yi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){yi.subVectors(n,e),Vi.subVectors(i,e),Ga.subVectors(t,e);let o=yi.dot(yi),a=yi.dot(Vi),l=yi.dot(Ga),c=Vi.dot(Vi),d=Vi.dot(Ga),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-a*d)*h,p=(o*d-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Ka.setScalar(0),$a.setScalar(0),Ya.setScalar(0),Ka.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,i),Ya.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,i,n){return yi.subVectors(i,e),Vi.subVectors(t,e),yi.cross(Vi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),yi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;Xn.subVectors(n,i),qn.subVectors(r,i),Wa.subVectors(t,i);let l=Xn.dot(Wa),c=qn.dot(Wa);if(l<=0&&c<=0)return e.copy(i);Xa.subVectors(t,n);let d=Xn.dot(Xa),u=qn.dot(Xa);if(d>=0&&u<=d)return e.copy(n);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(Xn,o);qa.subVectors(t,r);let f=Xn.dot(qa),p=qn.dot(qa);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(qn,a);let g=d*p-f*u;if(g<=0&&u-d>=0&&f-p>=0)return Tc.subVectors(r,n),a=(u-d)/(u-d+(f-p)),e.copy(n).addScaledVector(Tc,a);let m=1/(g+v+h);return o=v*m,a=h*m,e.copy(i).addScaledVector(Xn,o).addScaledVector(qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Za(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=Pd(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return ie.toWorkingColorSpace(this,n),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=Th[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ie.fromWorkingColorSpace(Ve.copy(this),t),Math.round(We(Ve.r*255,0,255))*65536+Math.round(We(Ve.g*255,0,255))*256+Math.round(We(Ve.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ve.copy(this),e);let i=Ve.r,n=Ve.g,r=Ve.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ge){ie.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,i=Ve.g,n=Ve.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(hr);let i=Da(ln.h,hr.h,e),n=Da(ln.s,hr.s,e),r=Da(ln.l,hr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new qt;qt.NAMES=Th;var Wd=0,Ii=class extends fn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=dn(),this.name="",this.blending=is,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ks,this.blendDst=as,this.blendEquation=Te,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ks&&(i.blendSrc=this.blendSrc),this.blendDst!==as&&(i.blendDst=this.blendDst),this.blendEquation!==Te&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Li=class extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qi=Xd();function Xd(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:o,offsetTable:a}}function qd(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=We(s,-65504,65504),qi.floatView[0]=s;let t=qi.uint32View[0],e=t>>23&511;return qi.baseTable[e]+((t&8388607)>>qi.shiftTable[e])}function Kd(s){let t=s>>10;return qi.uint32View[0]=qi.mantissaTable[qi.offsetTable[t]+(s&1023)]+qi.exponentTable[t],qi.floatView[0]}var Qi={toHalfFloat:qd,fromHalfFloat:Kd},we=new I,ur=new Ct,de=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ko,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),t}};var Vr=class extends de{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Gr=class extends de{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends de{constructor(t,e,i){super(new Float32Array(t),e,i)}},$d=0,fi=new jt,Ja=new Oe,Kn=new I,si=new Cn,Cs=new Cn,Le=new I,ye=class s extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Gr:Vr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Dt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,i){return fi.makeTranslation(t,e,i),this.applyMatrix4(fi),this}scale(t,e,i){return fi.makeScale(t,e,i),this.applyMatrix4(fi),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(si.min,Cs.min),si.expandByPoint(Le),Le.addVectors(si.max,Cs.max),si.expandByPoint(Le)):(si.expandByPoint(Cs.min),si.expandByPoint(Cs.max))}si.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Le.fromBufferAttribute(a,c),l&&(Kn.fromBufferAttribute(t,c),Le.add(Kn)),n=Math.max(n,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new I,l[C]=new I;let c=new I,d=new I,u=new I,h=new Ct,f=new Ct,p=new Ct,v=new I,g=new I;function m(C,S,M){c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),h.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),d.sub(c),u.sub(c),f.sub(h),p.sub(h);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(P),a[C].add(v),a[S].add(v),a[M].add(v),l[C].add(g),l[S].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){let M=x[C],P=M.start,U=M.count;for(let F=P,N=P+U;F<N;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new I,y=new I,E=new I,A=new I;function T(C){E.fromBufferAttribute(n,C),A.copy(E);let S=a[C];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(A,S);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,S=x.length;C<S;++C){let M=x[C],P=M.start,U=M.count;for(let F=P,N=P+U;F<N;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let n=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,u=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){let p=t.getX(h+0),v=t.getX(h+1),g=t.getX(h+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),d.subVectors(o,r),u.subVectors(n,r),d.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)n.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,r),u.subVectors(n,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let m=0;m<d;m++)h[p++]=c[f++]}return new de(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=t(h,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(t.data))}d.length>0&&(n[l]=d,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let d=n[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ac=new jt,Mn=new Bs,dr=new Pn,Rc=new I,fr=new I,pr=new I,mr=new I,ja=new I,gr=new I,Cc=new I,vr=new I,It=class extends Oe{constructor(t=new ye,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(ja.fromBufferAttribute(u,t),o?gr.addScaledVector(ja,d):gr.addScaledVector(ja.sub(e),d))}e.add(gr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(r),Mn.copy(t.ray).recast(t.near),!(dr.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(dr,Rc)===null||Mn.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),Mn.copy(t.ray).applyMatrix4(Ac),!(i.boundingBox!==null&&Mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){let A=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);n=xr(this,m,t,i,c,d,u,A,T,C),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);n=xr(this,o,t,i,c,d,u,x,_,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){let A=y,T=y+1,C=y+2;n=xr(this,m,t,i,c,d,u,A,T,C),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let x=g,_=g+1,y=g+2;n=xr(this,o,t,i,c,d,u,x,_,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Yd(s,t,e,i,n,r,o,a){let l;if(t.side===Ue?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===ai,a),l===null)return null;vr.copy(a),vr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(vr);return c<e.near||c>e.far?null:{distance:c,point:vr.clone(),object:s}}function xr(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,fr),s.getVertexPosition(l,pr),s.getVertexPosition(c,mr);let d=Yd(s,t,e,i,fr,pr,mr,Cc);if(d){let u=new I;hn.getBarycoord(Cc,fr,pr,mr,u),n&&(d.uv=hn.getInterpolatedAttribute(n,a,l,c,u,new Ct)),r&&(d.uv1=hn.getInterpolatedAttribute(r,a,l,c,u,new Ct)),o&&(d.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};hn.getNormal(fr,pr,mr,h.normal),d.face=h,d.barycoord=u}return d}var oi=class s extends ye{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(u,2));function p(v,g,m,x,_,y,E,A,T,C,S){let M=y/T,P=E/C,U=y/2,F=E/2,N=A/2,V=T+1,L=C+1,q=0,O=0,Z=new I;for(let et=0;et<L;et++){let ht=et*P-F;for(let Ut=0;Ut<V;Ut++){let kt=Ut*M-U;Z[v]=kt*x,Z[g]=ht*_,Z[m]=N,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[g]=0,Z[m]=A>0?1:-1,d.push(Z.x,Z.y,Z.z),u.push(Ut/T),u.push(1-et/C),q+=1}}for(let et=0;et<C;et++)for(let ht=0;ht<T;ht++){let Ut=h+ht+V*et,kt=h+ht+V*(et+1),X=h+(ht+1)+V*(et+1),J=h+(ht+1)+V*et;l.push(Ut,kt,J),l.push(kt,X,J),O+=6}a.addGroup(f,O,S),f+=O,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ds(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let i=ds(s[e]);for(let n in i)t[n]=i[n]}return t}function Zd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ah(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Jd={clone:ds,merge:$e},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oe=class extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Wr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=new I,Pc=new Ct,Ic=new Ct,Ne=class extends Wr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cn.x,cn.y).multiplyScalar(-t/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cn.x,cn.y).multiplyScalar(-t/cn.z)}getViewSize(t,e){return this.getViewBounds(t,Pc,Ic),e.subVectors(Ic,Pc)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(La*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$n=-90,Yn=1,jo=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ne($n,Yn,t,e);n.layers=this.layers,this.add(n);let r=new Ne($n,Yn,t,e);r.layers=this.layers,this.add(r);let o=new Ne($n,Yn,t,e);o.layers=this.layers,this.add(o);let a=new Ne($n,Yn,t,e);a.layers=this.layers,this.add(a);let l=new Ne($n,Yn,t,e);l.layers=this.layers,this.add(l);let c=new Ne($n,Yn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Xr=class extends Xe{constructor(t,e,i,n,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,i,n,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qo=class extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Xr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new oi(5,5,5),r=new oe({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:un});r.uniforms.tEquirect.value=e;let o=new It(n,r),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=ke),new jo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Qa=new I,tf=new I,ef=new Dt,Xi=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Qa.subVectors(i,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Qa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ef.getNormalMatrix(t),n=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sn=new Pn,yr=new I,zs=class{constructor(t=new Xi,e=new Xi,i=new Xi,n=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yi){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],d=n[5],u=n[6],h=n[7],f=n[8],p=n[9],v=n[10],g=n[11],m=n[12],x=n[13],_=n[14],y=n[15];if(i[0].setComponents(l-r,h-c,g-f,y-m).normalize(),i[1].setComponents(l+r,h+c,g+f,y+m).normalize(),i[2].setComponents(l+o,h+d,g+p,y+x).normalize(),i[3].setComponents(l-o,h-d,g-p,y-x).normalize(),i[4].setComponents(l-a,h-u,g-v,y-_).normalize(),e===Yi)i[5].setComponents(l+a,h+u,g+v,y+_).normalize();else if(e===kr)i[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(t){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(yr.x=n.normal.x>0?t.max.x:t.min.x,yr.y=n.normal.y>0?t.max.y:t.min.y,yr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rh(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function nf(s){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let d=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){let p=u[h],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var qr=class s extends ye{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,d=l+1,u=t/a,h=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<d;m++){let x=m*h-o;for(let _=0;_<c;_++){let y=_*u-r;p.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,y=x+c*(m+1),E=x+1+c*(m+1),A=x+1+c*m;f.push(_,y,A),f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
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
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vf=`#ifdef USE_IRIDESCENCE
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
#endif`,xf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Af=`#define PI 3.141592653589793
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
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cf=`vec3 transformedNormal = objectNormal;
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
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
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
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,np=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fp=`#if defined( USE_POINTS_UV )
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
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
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
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
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
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,um=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
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
}`,gm=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,xm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,_m=`#define LAMBERT
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
}`,bm=`#define MATCAP
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Tm=`#define PHONG
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define TOON
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
}`,Pm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:wf,color_pars_vertex:Ef,color_vertex:Tf,common:Af,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Pf,displacementmap_vertex:If,emissivemap_fragment:Lf,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Ff,envmap_fragment:Nf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Of,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:Zf,envmap_vertex:zf,fog_vertex:Hf,fog_pars_vertex:Vf,fog_fragment:Gf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:$f,lights_pars_begin:Yf,lights_toon_fragment:Jf,lights_toon_pars_fragment:jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:tp,lights_physical_fragment:ep,lights_physical_pars_fragment:ip,lights_fragment_begin:np,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:vp,morphnormal_vertex:xp,morphtarget_pars_vertex:yp,morphtarget_vertex:_p,normal_fragment_begin:bp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:wp,normal_vertex:Ep,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Pp,opaque_fragment:Ip,packing:Lp,premultiplied_alpha_fragment:Dp,project_vertex:Up,dithering_fragment:Fp,dithering_pars_fragment:Np,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:zp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Vp,skinbase_vertex:Gp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:Kp,specularmap_pars_fragment:$p,tonemapping_fragment:Yp,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:im,background_vert:nm,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:ym,meshlambert_frag:_m,meshmatcap_vert:bm,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:wm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:Am,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Pm,points_vert:Im,points_frag:Lm,shadow_vert:Dm,shadow_frag:Um,sprite_vert:Fm,sprite_frag:Nm},ut={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Ti={basic:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:$e([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:$e([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:$e([ut.points,ut.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:$e([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:$e([ut.common,ut.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:$e([ut.sprite,ut.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:$e([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:$e([ut.lights,ut.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ti.physical={uniforms:$e([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var _r={r:0,b:0,g:0},wn=new Fe,km=new jt;function Om(s,t,e,i,n,r,o){let a=new qt(0),l=r===!0?0:1,c,d,u=null,h=0,f=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1,y=p(x);y===null?m(a,l):y&&y.isColor&&(m(y,1),_=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,_){let y=p(_);y&&(y.isCubeTexture||y.mapping===aa)?(d===void 0&&(d=new It(new oi(1,1,1),new oe({name:"BackgroundCubeMaterial",uniforms:ds(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),wn.copy(_.backgroundRotation),wn.x*=-1,wn.y*=-1,wn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(km.makeRotationFromEuler(wn)),d.material.toneMapped=ie.getTransfer(y.colorSpace)!==he,(u!==y||h!==y.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,u=y,h=y.version,f=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new It(new qr(2,2),new oe({name:"BackgroundMaterial",uniforms:ds(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(_r,Ah(s)),i.buffers.color.setClear(_r.r,_r.g,_r.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:v,addToRenderList:g}}function Bm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null),r=n,o=!1;function a(M,P,U,F,N){let V=!1,L=u(F,U,P);r!==L&&(r=L,c(r.object)),V=f(M,F,U,N),V&&p(M,F,U,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(M,P,U,F),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function d(M){return s.deleteVertexArray(M)}function u(M,P,U){let F=U.wireframe===!0,N=i[M.id];N===void 0&&(N={},i[M.id]=N);let V=N[P.id];V===void 0&&(V={},N[P.id]=V);let L=V[F];return L===void 0&&(L=h(l()),V[F]=L),L}function h(M){let P=[],U=[],F=[];for(let N=0;N<e;N++)P[N]=0,U[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,P,U,F){let N=r.attributes,V=P.attributes,L=0,q=U.getAttributes();for(let O in q)if(q[O].location>=0){let et=N[O],ht=V[O];if(ht===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;L++}return r.attributesNum!==L||r.index!==F}function p(M,P,U,F){let N={},V=P.attributes,L=0,q=U.getAttributes();for(let O in q)if(q[O].location>=0){let et=V[O];et===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));let ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),N[O]=ht,L++}r.attributes=N,r.attributesNum=L,r.index=F}function v(){let M=r.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function g(M){m(M,0)}function m(M,P){let U=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;U[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),N[M]!==P&&(s.vertexAttribDivisor(M,P),N[M]=P)}function x(){let M=r.newAttributes,P=r.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==M[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function _(M,P,U,F,N,V,L){L===!0?s.vertexAttribIPointer(M,P,U,N,V):s.vertexAttribPointer(M,P,U,F,N,V)}function y(M,P,U,F){v();let N=F.attributes,V=U.getAttributes(),L=P.defaultAttributeValues;for(let q in V){let O=V[q];if(O.location>=0){let Z=N[q];if(Z===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){let et=Z.normalized,ht=Z.itemSize,Ut=t.get(Z);if(Ut===void 0)continue;let kt=Ut.buffer,X=Ut.type,J=Ut.bytesPerElement,lt=X===s.INT||X===s.UNSIGNED_INT||Z.gpuType===Al;if(Z.isInterleavedBufferAttribute){let it=Z.data,nt=it.stride,ct=Z.offset;if(it.isInstancedInterleavedBuffer){for(let rt=0;rt<O.locationSize;rt++)m(O.location+rt,it.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<O.locationSize;rt++)g(O.location+rt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let rt=0;rt<O.locationSize;rt++)_(O.location+rt,ht/O.locationSize,X,et,nt*J,(ct+ht/O.locationSize*rt)*J,lt)}else{if(Z.isInstancedBufferAttribute){for(let it=0;it<O.locationSize;it++)m(O.location+it,Z.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let it=0;it<O.locationSize;it++)g(O.location+it);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let it=0;it<O.locationSize;it++)_(O.location+it,ht/O.locationSize,X,et,ht*J,ht/O.locationSize*it*J,lt)}}else if(L!==void 0){let et=L[q];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(O.location,et);break;case 3:s.vertexAttrib3fv(O.location,et);break;case 4:s.vertexAttrib4fv(O.location,et);break;default:s.vertexAttrib1fv(O.location,et)}}}}x()}function E(){C();for(let M in i){let P=i[M];for(let U in P){let F=P[U];for(let N in F)d(F[N].object),delete F[N];delete P[U]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let U in P){let F=P[U];for(let N in F)d(F[N].object),delete F[N];delete P[U]}delete i[M.id]}function T(M){for(let P in i){let U=i[P];if(U[M.id]===void 0)continue;let F=U[M.id];for(let N in F)d(F[N].object),delete F[N];delete U[M.id]}}function C(){S(),o=!0,r!==n&&(r=n,c(r.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function zm(s,t,e){let i;function n(c){i=c}function r(c,d){s.drawArrays(i,c,d),e.update(d,i,1)}function o(c,d,u){u!==0&&(s.drawArraysInstanced(i,c,d,u),e.update(d,i,u))}function a(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let p=0;p<u;p++)f+=d[p];e.update(f,i,1)}function l(c,d,u,h){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],d[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=d[v]*h[v];e.update(p,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hm(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(T){return!(T!==De&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ji&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$i&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function Vm(s){let t=this,e=null,i=0,n=!1,r=!1,o=new Xi,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||i!==0||n;return n=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!n||p===null||p.length===0||r&&!g)r?d(null):c();else{let x=r?0:i,_=x*4,y=m.clippingState||null;l.value=y,y=d(p,h,_,f);for(let E=0;E!==_;++E)y[E]=e[E];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,h,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Gm(s){let t=new WeakMap;function e(o,a){return a===vo?o.mapping=ls:a===xo&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vo||a===xo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qo(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var fs=class extends Wr{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},es=4,Lc=[.125,.215,.35,.446,.526,.582],An=20,to=new fs,Dc=new qt,eo=null,io=0,no=0,so=!1,Tn=(1+Math.sqrt(5))/2,Zn=1/Tn,Uc=[new I(-Tn,Zn,0),new I(Tn,Zn,0),new I(-Zn,0,Tn),new I(Zn,0,Tn),new I(0,Tn,-Zn),new I(0,Tn,Zn),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){eo=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,io,no),this._renderer.xr.enabled=so,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Fi,format:De,colorSpace:ji,depthBuffer:!1},n=Fc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return n}_compileMaterial(t){let e=new It(this._lodPlanes[0],t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,i,n){let a=new Ne(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Dc),d.toneMapping=Pi,d.autoClear=!1;let f=new Li({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),p=new It(new oi,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Dc),v=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;br(n,x*_,m>2?_:0,_,_),d.setRenderTarget(n),v&&d.render(p,a),d.render(t,a)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=h,d.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ls||t.mapping===cs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;br(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,to)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uc[(n-r-1)%Uc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new It(this._lodPlanes[n],c),h=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*An-1),v=r/p,g=isFinite(r)?1+Math.floor(d*v):An;g>An&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${An}`);let m=[],x=0;for(let T=0;T<An;++T){let C=T/v,S=Math.exp(-C*C/2);m.push(S),T===0?x+=S:T<g&&(x+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:_}=this;h.dTheta.value=p,h.mipInt.value=_-i;let y=this._sizeLods[n],E=3*y*(n>_-es?n-_+es:0),A=4*(this._cubeSize-y);br(e,E,A,3*y,2*y),l.setRenderTarget(e),l.render(u,to)}};function Wm(s){let t=[],e=[],i=[],n=s,r=s-es+1+Lc.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-es?l=Lc[o-s+es-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,p=6,v=3,g=2,m=1,x=new Float32Array(v*p*f),_=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let A=0;A<f;A++){let T=A%3*2/3-1,C=A>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(S,v*p*A),_.set(h,g*p*A);let M=[A,A,A,A,A,A];y.set(M,m*p*A)}let E=new ye;E.setAttribute("position",new de(x,v)),E.setAttribute("uv",new de(_,g)),E.setAttribute("faceIndex",new de(y,m)),t.push(E),n>es&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fc(s,t,e){let i=new Mi(s,t,e);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function br(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Xm(s,t,e){let i=new Float32Array(An),n=new I(0,1,0);return new oe({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Nc(){return new oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function kc(){return new oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function qm(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===vo||l===xo,d=l===ls||l===cs;if(c||d){let u=t.get(a),h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ps(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||d&&f&&n(f)?(e===null&&(e=new ps(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Km(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Us("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function $m(s,t,e,i){let n={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);for(let p in h.morphAttributes){let v=h.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}h.removeEventListener("dispose",o),delete n[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,e.memory.geometries++),h}function l(u){let h=u.attributes;for(let p in h)t.update(h[p],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],s.ARRAY_BUFFER)}}function c(u){let h=[],f=u.index,p=u.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){let E=x[_+0],A=x[_+1],T=x[_+2];h.push(E,A,A,T,T,E)}}else if(p!==void 0){let x=p.array;v=p.version;for(let _=0,y=x.length/3-1;_<y;_+=3){let E=_+0,A=_+1,T=_+2;h.push(E,A,A,T,T,E)}}else return;let g=new(Eh(h)?Gr:Vr)(h,1);g.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Ym(s,t,e){let i;function n(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(i,f,r,h*o),e.update(f,i,1)}function c(h,f,p){p!==0&&(s.drawElementsInstanced(i,f,r,h*o,p),e.update(f,i,p))}function d(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function u(h,f,p,v){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,v,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x]*v[x];e.update(m,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Zm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Jm(s,t,e){let i=new WeakMap,n=new Qt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=i.get(a);if(h===void 0||h.count!==u){let S=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let y=a.attributes.position.count*_,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*E*4*u),T=new zr(A,y,E,u);T.type=$i,T.needsUpdate=!0;let C=_*4;for(let M=0;M<u;M++){let P=g[M],U=m[M],F=x[M],N=y*E*4*M;for(let V=0;V<P.count;V++){let L=V*C;f===!0&&(n.fromBufferAttribute(P,V),A[N+L+0]=n.x,A[N+L+1]=n.y,A[N+L+2]=n.z,A[N+L+3]=0),p===!0&&(n.fromBufferAttribute(U,V),A[N+L+4]=n.x,A[N+L+5]=n.y,A[N+L+6]=n.z,A[N+L+7]=0),v===!0&&(n.fromBufferAttribute(F,V),A[N+L+8]=n.x,A[N+L+9]=n.y,A[N+L+10]=n.z,A[N+L+11]=F.itemSize===4?n.w:1)}}h={count:u,texture:T,size:new Ct(y,E)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function jm(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,d=l.geometry,u=t.get(l,d);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Kr=class extends Xe{constructor(t,e,i,n,r,o,a,l,c,d=ns){if(d!==ns&&d!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ns&&(i=Rn),i===void 0&&d===us&&(i=hs),super(null,n,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ri,this.minFilter=l!==void 0?l:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ch=new Xe,Oc=new Kr(1,1),Ph=new zr,Ih=new Jo,Lh=new Xr,Bc=[],zc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Gc=new Float32Array(4);function ys(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Bc[n];if(r===void 0&&(r=new Float32Array(n),Bc[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function la(s,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Qm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function n0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Gc.set(i),s.uniformMatrix2fv(this.addr,!1,Gc),Re(e,i)}}function s0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Vc.set(i),s.uniformMatrix3fv(this.addr,!1,Vc),Re(e,i)}}function r0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;Hc.set(i),s.uniformMatrix4fv(this.addr,!1,Hc),Re(e,i)}}function a0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function o0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function h0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function u0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function f0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function p0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Oc.compareFunction=wh,r=Oc):r=Ch,e.setTexture2D(t||r,n)}function m0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ih,n)}function g0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Lh,n)}function v0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ph,n)}function x0(s){switch(s){case 5126:return Qm;case 35664:return t0;case 35665:return e0;case 35666:return i0;case 35674:return n0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}function y0(s,t){s.uniform1fv(this.addr,t)}function _0(s,t){let e=ys(t,this.size,2);s.uniform2fv(this.addr,e)}function b0(s,t){let e=ys(t,this.size,3);s.uniform3fv(this.addr,e)}function M0(s,t){let e=ys(t,this.size,4);s.uniform4fv(this.addr,e)}function S0(s,t){let e=ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function w0(s,t){let e=ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function E0(s,t){let e=ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function T0(s,t){s.uniform1iv(this.addr,t)}function A0(s,t){s.uniform2iv(this.addr,t)}function R0(s,t){s.uniform3iv(this.addr,t)}function C0(s,t){s.uniform4iv(this.addr,t)}function P0(s,t){s.uniform1uiv(this.addr,t)}function I0(s,t){s.uniform2uiv(this.addr,t)}function L0(s,t){s.uniform3uiv(this.addr,t)}function D0(s,t){s.uniform4uiv(this.addr,t)}function U0(s,t,e){let i=this.cache,n=t.length,r=la(e,n);Ae(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Ch,r[o])}function F0(s,t,e){let i=this.cache,n=t.length,r=la(e,n);Ae(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Ih,r[o])}function N0(s,t,e){let i=this.cache,n=t.length,r=la(e,n);Ae(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Lh,r[o])}function k0(s,t,e){let i=this.cache,n=t.length,r=la(e,n);Ae(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Ph,r[o])}function O0(s){switch(s){case 5126:return y0;case 35664:return _0;case 35665:return b0;case 35666:return M0;case 35674:return S0;case 35675:return w0;case 35676:return E0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return I0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return k0}}var tl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=x0(e.type)}},el=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O0(e.type)}},il=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},ro=/(\w+)(\])?(\[|\.)?/g;function Wc(s,t){s.seq.push(t),s.map[t.id]=t}function B0(s,t,e){let i=s.name,n=i.length;for(ro.lastIndex=0;;){let r=ro.exec(i),o=ro.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Wc(e,c===void 0?new tl(a,s,t):new el(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new il(a),Wc(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);B0(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Xc(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var z0=37297,H0=0;function V0(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var qc=new Dt;function G0(s){ie._getMatrix(qc,ie.workingColorSpace,s);let t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case oa:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kc(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+V0(s.getShaderSource(t),o)}else return n}function W0(s,t){let e=G0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X0(s,t){let e;switch(t){case dd:e="Linear";break;case fd:e="Reinhard";break;case pd:e="Cineon";break;case md:e="ACESFilmic";break;case vd:e="AgX";break;case xd:e="Neutral";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mr=new I;function q0(){ie.getLuminanceCoefficients(Mr);let s=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function $0(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y0(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Fs(s){return s!==""}function $c(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(s){return s.replace(Z0,j0)}var J0=new Map;function j0(s,t){let e=Xt[t];if(e===void 0){let i=J0.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}var Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(s){return s.replace(Q0,tg)}function tg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Jc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function ig(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ng(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function sg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case uh:t="ENVMAP_BLENDING_MULTIPLY";break;case hd:t="ENVMAP_BLENDING_MIX";break;case ud:t="ENVMAP_BLENDING_ADD";break}return t}function rg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ag(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=eg(e),c=ig(e),d=ng(e),u=sg(e),h=rg(e),f=K0(e),p=$0(r),v=n.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Fs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(g=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Pi?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=nl(o),o=$c(o,e),o=Yc(o,e),a=nl(a),a=$c(a,e),a=Yc(a,e),o=Zc(o),a=Zc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,y=x+m+a,E=Xc(n,n.VERTEX_SHADER,_),A=Xc(n,n.FRAGMENT_SHADER,y);n.attachShader(v,E),n.attachShader(v,A),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function T(P){if(s.debug.checkShaderErrors){let U=n.getProgramInfoLog(v).trim(),F=n.getShaderInfoLog(E).trim(),N=n.getShaderInfoLog(A).trim(),V=!0,L=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,E,A);else{let q=Kc(n,E,"vertex"),O=Kc(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+q+`
`+O)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||N==="")&&(L=!1);L&&(P.diagnostics={runnable:V,programLog:U,vertexShader:{log:F,prefix:g},fragmentShader:{log:N,prefix:m}})}n.deleteShader(E),n.deleteShader(A),C=new rs(n,v),S=Y0(n,v)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,z0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}var og=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new rl(t),e.set(t,i)),i}},rl=class{constructor(t){this.id=og++,this.code=t,this.usedTimes=0}};function lg(s,t,e,i,n,r,o){let a=new Hr,l=new sl,c=new Set,d=[],u=n.logarithmicDepthBuffer,h=n.vertexTextures,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,P,U,F){let N=U.fog,V=F.geometry,L=S.isMeshStandardMaterial?U.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||L),O=q&&q.mapping===aa?q.image.height:null,Z=p[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=et!==void 0?et.length:0,Ut=0;V.morphAttributes.position!==void 0&&(Ut=1),V.morphAttributes.normal!==void 0&&(Ut=2),V.morphAttributes.color!==void 0&&(Ut=3);let kt,X,J,lt;if(Z){let le=Ti[Z];kt=le.vertexShader,X=le.fragmentShader}else kt=S.vertexShader,X=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),lt=l.getFragmentShaderID(S);let it=s.getRenderTarget(),nt=s.state.buffers.depth.getReversed(),ct=F.isInstancedMesh===!0,rt=F.isBatchedMesh===!0,wt=!!S.map,Pt=!!S.matcap,Yt=!!q,D=!!S.aoMap,ee=!!S.lightMap,Ot=!!S.bumpMap,zt=!!S.normalMap,bt=!!S.displacementMap,$t=!!S.emissiveMap,_t=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,H=S.clearcoat>0,$=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,St=S.transmission>0,dt=b&&!!S.anisotropyMap,vt=H&&!!S.clearcoatMap,Zt=H&&!!S.clearcoatNormalMap,st=H&&!!S.clearcoatRoughnessMap,xt=Q&&!!S.iridescenceMap,Lt=Q&&!!S.iridescenceThicknessMap,Ft=Y&&!!S.sheenColorMap,yt=Y&&!!S.sheenRoughnessMap,te=!!S.specularMap,Wt=!!S.specularColorMap,me=!!S.specularIntensityMap,k=St&&!!S.transmissionMap,ft=St&&!!S.thicknessMap,K=!!S.gradientMap,j=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Vt=!!S.extensions,be=Pi;S.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(be=s.toneMapping);let ze={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:kt,fragmentShader:X,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:rt,batchingColor:rt&&F._colorsTexture!==null,instancing:ct,instancingColor:ct&&F.instanceColor!==null,instancingMorph:ct&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ji,alphaToCoverage:!!S.alphaToCoverage,map:wt,matcap:Pt,envMap:Yt,envMapMode:Yt&&q.mapping,envMapCubeUVHeight:O,aoMap:D,lightMap:ee,bumpMap:Ot,normalMap:zt,displacementMap:h&&bt,emissiveMap:$t,normalMapObjectSpace:zt&&S.normalMapType===Md,normalMapTangentSpace:zt&&S.normalMapType===Sh,metalnessMap:_t,roughnessMap:R,anisotropy:b,anisotropyMap:dt,clearcoat:H,clearcoatMap:vt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:st,dispersion:$,iridescence:Q,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:te,specularColorMap:Wt,specularIntensityMap:me,transmission:St,transmissionMap:k,thicknessMap:ft,gradientMap:K,opaque:S.transparent===!1&&S.blending===is&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:wt&&v(S.map.channel),aoMapUv:D&&v(S.aoMap.channel),lightMapUv:ee&&v(S.lightMap.channel),bumpMapUv:Ot&&v(S.bumpMap.channel),normalMapUv:zt&&v(S.normalMap.channel),displacementMapUv:bt&&v(S.displacementMap.channel),emissiveMapUv:$t&&v(S.emissiveMap.channel),metalnessMapUv:_t&&v(S.metalnessMap.channel),roughnessMapUv:R&&v(S.roughnessMap.channel),anisotropyMapUv:dt&&v(S.anisotropyMap.channel),clearcoatMapUv:vt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(S.sheenRoughnessMap.channel),specularMapUv:te&&v(S.specularMap.channel),specularColorMapUv:Wt&&v(S.specularColorMap.channel),specularIntensityMapUv:me&&v(S.specularIntensityMap.channel),transmissionMapUv:k&&v(S.transmissionMap.channel),thicknessMapUv:ft&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(zt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(wt||j),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:nt,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:wt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:$t&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ee,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let M=p[S.type],P;if(M){let U=Ti[M];P=Jd.clone(U.uniforms)}else P=S.uniforms;return P}function E(S,M){let P;for(let U=0,F=d.length;U<F;U++){let N=d[U];if(N.cacheKey===M){P=N,++P.usedTimes;break}}return P===void 0&&(P=new ag(s,M,S,r),d.push(P)),P}function A(S){if(--S.usedTimes===0){let M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:d,dispose:C}}function cg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function hg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function jc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qc(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,h,f,p,v,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:h,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function a(u,h,f,p,v,g){let m=o(u,h,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,h,f,p,v,g){let m=o(u,h,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,h){e.length>1&&e.sort(u||hg),i.length>1&&i.sort(h||jc),n.length>1&&n.sort(h||jc)}function d(){for(let u=t,h=s.length;u<h;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:d,sort:c}}function ug(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Qc,s.set(i,[o])):n>=r.length?(o=new Qc,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function dg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new qt};break;case"SpotLight":e={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function fg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var pg=0;function mg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gg(s){let t=new dg,e=fg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let n=new I,r=new jt,o=new jt;function a(c){let d=0,u=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,x=0,_=0,y=0,E=0,A=0,T=0;c.sort(mg);for(let S=0,M=c.length;S<M;S++){let P=c[S],U=P.color,F=P.intensity,N=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*F,u+=U.g*F,h+=U.b*F;else if(P.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(P.sh.coefficients[L],F);T++}else if(P.isDirectionalLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,O=e.get(P);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,i.directionalShadow[f]=O,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=P.shadow.matrix,x++}i.directional[f]=L,f++}else if(P.isSpotLight){let L=t.get(P);L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(U).multiplyScalar(F),L.distance=N,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,i.spot[v]=L;let q=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,q.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=q.matrix,P.castShadow){let O=e.get(P);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=V,y++}v++}else if(P.isRectAreaLight){let L=t.get(P);L.color.copy(U).multiplyScalar(F),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=L,g++}else if(P.isPointLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),L.distance=P.distance,L.decay=P.decay,P.castShadow){let q=P.shadow,O=e.get(P);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,O.shadowCameraNear=q.camera.near,O.shadowCameraFar=q.camera.far,i.pointShadow[p]=O,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=P.shadow.matrix,_++}i.point[p]=L,p++}else if(P.isHemisphereLight){let L=t.get(P);L.skyColor.copy(P.color).multiplyScalar(F),L.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[m]=L,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;let C=i.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=f,C.pointLength=p,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=T,i.version=pg++)}function l(c,d){let u=0,h=0,f=0,p=0,v=0,g=d.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let _=c[m];if(_.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),u++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function th(s){let t=new gg(s),e=[],i=[];function n(d){c.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function o(d){i.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vg(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new th(s),t.set(n,[a])):r>=o.length?(a=new th(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var al=class extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ol=class extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`;function _g(s,t,e){let i=new zs,n=new Ct,r=new Ct,o=new Qt,a=new al({depthPacking:bd}),l=new ol,c={},d=e.maxTextureSize,u={[ai]:Ue,[Ue]:ai,[Ee]:Ee},h=new oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:xg,fragmentShader:yg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new It(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let m=this.type;this.render=function(A,T,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(un),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=m!==Wi&&this.type===Wi,N=m===Wi&&this.type!==Wi;for(let V=0,L=A.length;V<L;V++){let q=A[V],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let Z=O.getFrameExtents();if(n.multiply(Z),r.copy(O.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(r.x=Math.floor(d/Z.x),n.x=r.x*Z.x,O.mapSize.x=r.x),n.y>d&&(r.y=Math.floor(d/Z.y),n.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||F===!0||N===!0){let ht=this.type!==Wi?{minFilter:ri,magFilter:ri}:{};O.map!==null&&O.map.dispose(),O.map=new Mi(n.x,n.y,ht),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();let et=O.getViewportCount();for(let ht=0;ht<et;ht++){let Ut=O.getViewport(ht);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),U.viewport(o),O.updateMatrices(q,ht),i=O.getFrustum(),y(T,C,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===Wi&&x(O,C),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(S,M,P)};function x(A,T){let C=t.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mi(n.x,n.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,C,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,C,f,v,null)}function _(A,T,C,S){let M=null,P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let U=M.uuid,F=T.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let V=N[F];V===void 0&&(V=M.clone(),N[F]=V,T.addEventListener("dispose",E)),M=V}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Wi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=s.properties.get(M);U.light=C}return M}function y(A,T,C,S,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Wi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let F=t.update(A),N=A.material;if(Array.isArray(N)){let V=F.groups;for(let L=0,q=V.length;L<q;L++){let O=V[L],Z=N[O.materialIndex];if(Z&&Z.visible){let et=_(A,Z,S,M);A.onBeforeShadow(s,A,T,C,F,et,O),s.renderBufferDirect(C,null,F,et,A,O),A.onAfterShadow(s,A,T,C,F,et,O)}}}else if(N.visible){let V=_(A,N,S,M);A.onBeforeShadow(s,A,T,C,F,V,null),s.renderBufferDirect(C,null,F,V,A,null),A.onAfterShadow(s,A,T,C,F,V,null)}}let U=A.children;for(let F=0,N=U.length;F<N;F++)y(U[F],T,C,S,M)}function E(A){A.target.removeEventListener("dispose",E);for(let C in c){let S=c[C],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var bg={[co]:ho,[uo]:mo,[fo]:go,[os]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:os};function Mg(s,t){function e(){let k=!1,ft=new Qt,K=null,j=new Qt(0,0,0,0);return{setMask:function(gt){K!==gt&&!k&&(s.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){k=gt},setClear:function(gt,pt,Vt,be,ze){ze===!0&&(gt*=be,pt*=be,Vt*=be),ft.set(gt,pt,Vt,be),j.equals(ft)===!1&&(s.clearColor(gt,pt,Vt,be),j.copy(ft))},reset:function(){k=!1,K=null,j.set(-1,0,0,0)}}}function i(){let k=!1,ft=!1,K=null,j=null,gt=null;return{setReversed:function(pt){if(ft!==pt){let Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let be=gt;gt=null,this.setClear(be)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?it(s.DEPTH_TEST):nt(s.DEPTH_TEST)},setMask:function(pt){K!==pt&&!k&&(s.depthMask(pt),K=pt)},setFunc:function(pt){if(ft&&(pt=bg[pt]),j!==pt){switch(pt){case co:s.depthFunc(s.NEVER);break;case ho:s.depthFunc(s.ALWAYS);break;case uo:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case fo:s.depthFunc(s.EQUAL);break;case po:s.depthFunc(s.GEQUAL);break;case mo:s.depthFunc(s.GREATER);break;case go:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=pt}},setLocked:function(pt){k=pt},setClear:function(pt){gt!==pt&&(ft&&(pt=1-pt),s.clearDepth(pt),gt=pt)},reset:function(){k=!1,K=null,j=null,gt=null,ft=!1}}}function n(){let k=!1,ft=null,K=null,j=null,gt=null,pt=null,Vt=null,be=null,ze=null;return{setTest:function(le){k||(le?it(s.STENCIL_TEST):nt(s.STENCIL_TEST))},setMask:function(le){ft!==le&&!k&&(s.stencilMask(le),ft=le)},setFunc:function(le,mi,ki){(K!==le||j!==mi||gt!==ki)&&(s.stencilFunc(le,mi,ki),K=le,j=mi,gt=ki)},setOp:function(le,mi,ki){(pt!==le||Vt!==mi||be!==ki)&&(s.stencilOp(le,mi,ki),pt=le,Vt=mi,be=ki)},setLocked:function(le){k=le},setClear:function(le){ze!==le&&(s.clearStencil(le),ze=le)},reset:function(){k=!1,ft=null,K=null,j=null,gt=null,pt=null,Vt=null,be=null,ze=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,d={},u={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,x=null,_=null,y=null,E=null,A=null,T=new qt(0,0,0),C=0,S=!1,M=null,P=null,U=null,F=null,N=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,q=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=q>=2);let Z=null,et={},ht=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),kt=new Qt().fromArray(ht),X=new Qt().fromArray(Ut);function J(k,ft,K,j){let gt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(k,pt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<K;Vt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ft+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return pt}let lt={};lt[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(os),Ot(!1),zt(sc),it(s.CULL_FACE),D(un);function it(k){d[k]!==!0&&(s.enable(k),d[k]=!0)}function nt(k){d[k]!==!1&&(s.disable(k),d[k]=!1)}function ct(k,ft){return u[k]!==ft?(s.bindFramebuffer(k,ft),u[k]=ft,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function rt(k,ft){let K=f,j=!1;if(k){K=h.get(ft),K===void 0&&(K=[],h.set(ft,K));let gt=k.textures;if(K.length!==gt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Vt=gt.length;pt<Vt;pt++)K[pt]=s.COLOR_ATTACHMENT0+pt;K.length=gt.length,j=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,j=!0);j&&s.drawBuffers(K)}function wt(k){return p!==k?(s.useProgram(k),p=k,!0):!1}let Pt={[Te]:s.FUNC_ADD,[$u]:s.FUNC_SUBTRACT,[Yu]:s.FUNC_REVERSE_SUBTRACT};Pt[Zu]=s.MIN,Pt[Ju]=s.MAX;let Yt={[ju]:s.ZERO,[Ce]:s.ONE,[Qu]:s.SRC_COLOR,[ks]:s.SRC_ALPHA,[rd]:s.SRC_ALPHA_SATURATE,[nd]:s.DST_COLOR,[ed]:s.DST_ALPHA,[td]:s.ONE_MINUS_SRC_COLOR,[as]:s.ONE_MINUS_SRC_ALPHA,[sd]:s.ONE_MINUS_DST_COLOR,[id]:s.ONE_MINUS_DST_ALPHA,[ad]:s.CONSTANT_COLOR,[od]:s.ONE_MINUS_CONSTANT_COLOR,[ld]:s.CONSTANT_ALPHA,[cd]:s.ONE_MINUS_CONSTANT_ALPHA};function D(k,ft,K,j,gt,pt,Vt,be,ze,le){if(k===un){v===!0&&(nt(s.BLEND),v=!1);return}if(v===!1&&(it(s.BLEND),v=!0),k!==ci){if(k!==g||le!==S){if((m!==Te||y!==Te)&&(s.blendEquation(s.FUNC_ADD),m=Te,y=Te),le)switch(k){case is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _i:s.blendFunc(s.ONE,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _i:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,_=null,E=null,A=null,T.set(0,0,0),C=0,g=k,S=le}return}gt=gt||ft,pt=pt||K,Vt=Vt||j,(ft!==m||gt!==y)&&(s.blendEquationSeparate(Pt[ft],Pt[gt]),m=ft,y=gt),(K!==x||j!==_||pt!==E||Vt!==A)&&(s.blendFuncSeparate(Yt[K],Yt[j],Yt[pt],Yt[Vt]),x=K,_=j,E=pt,A=Vt),(be.equals(T)===!1||ze!==C)&&(s.blendColor(be.r,be.g,be.b,ze),T.copy(be),C=ze),g=k,S=!1}function ee(k,ft){k.side===Ee?nt(s.CULL_FACE):it(s.CULL_FACE);let K=k.side===Ue;ft&&(K=!K),Ot(K),k.blending===is&&k.transparent===!1?D(un):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let j=k.stencilWrite;a.setTest(j),j&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),$t(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(k){M!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),M=k)}function zt(k){k!==qu?(it(s.CULL_FACE),k!==P&&(k===sc?s.cullFace(s.BACK):k===Ku?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):nt(s.CULL_FACE),P=k}function bt(k){k!==U&&(L&&s.lineWidth(k),U=k)}function $t(k,ft,K){k?(it(s.POLYGON_OFFSET_FILL),(F!==ft||N!==K)&&(s.polygonOffset(ft,K),F=ft,N=K)):nt(s.POLYGON_OFFSET_FILL)}function _t(k){k?it(s.SCISSOR_TEST):nt(s.SCISSOR_TEST)}function R(k){k===void 0&&(k=s.TEXTURE0+V-1),Z!==k&&(s.activeTexture(k),Z=k)}function b(k,ft,K){K===void 0&&(Z===null?K=s.TEXTURE0+V-1:K=Z);let j=et[K];j===void 0&&(j={type:void 0,texture:void 0},et[K]=j),(j.type!==k||j.texture!==ft)&&(Z!==K&&(s.activeTexture(K),Z=K),s.bindTexture(k,ft||lt[k]),j.type=k,j.texture=ft)}function H(){let k=et[Z];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(k){kt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),kt.copy(k))}function yt(k){X.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),X.copy(k))}function te(k,ft){let K=c.get(ft);K===void 0&&(K=new WeakMap,c.set(ft,K));let j=K.get(k);j===void 0&&(j=s.getUniformBlockIndex(ft,k.name),K.set(k,j))}function Wt(k,ft){let j=c.get(ft).get(k);l.get(ft)!==j&&(s.uniformBlockBinding(ft,j,k.__bindingPointIndex),l.set(ft,j))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Z=null,et={},u={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,x=null,_=null,y=null,E=null,A=null,T=new qt(0,0,0),C=0,S=!1,M=null,P=null,U=null,F=null,N=null,kt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:nt,bindFramebuffer:ct,drawBuffers:rt,useProgram:wt,setBlending:D,setMaterial:ee,setFlipSided:Ot,setCullFace:zt,setLineWidth:bt,setPolygonOffset:$t,setScissorTest:_t,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:xt,texImage3D:Lt,updateUBOMapping:te,uniformBlockBinding:Wt,texStorage2D:Zt,texStorage3D:st,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Ft,viewport:yt,reset:me}}function eh(s,t,e,i){let n=Sg(i);switch(e){case gh:return s*t;case xh:return s*t;case yh:return s*t*2;case _h:return s*t/n.components*n.byteLength;case Pl:return s*t/n.components*n.byteLength;case bh:return s*t*2/n.components*n.byteLength;case Il:return s*t*2/n.components*n.byteLength;case vh:return s*t*3/n.components*n.byteLength;case De:return s*t*4/n.components*n.byteLength;case Ll:return s*t*4/n.components*n.byteLength;case Ir:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bo:case So:return Math.max(s,16)*Math.max(t,8)/4;case _o:case Mo:return Math.max(s,8)*Math.max(t,8)/2;case wo:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fr:case Ho:case Vo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mh:case Go:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wo:case Xo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sg(s){switch(s){case Ji:case fh:return{byteLength:1,components:1};case Os:case ph:case Fi:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Rn:case Al:case $i:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function wg(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):Or("canvas")}function v(R,b,H){let $=1,Q=_t(R);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor($*Q.width),St=Math.floor($*Q.height);u===void 0&&(u=p(Y,St));let dt=b?p(Y,St):u;return dt.width=Y,dt.height=St,dt.getContext("2d").drawImage(R,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+St+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(R,b,H,$,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===s.RED&&(H===s.FLOAT&&(Y=s.R32F),H===s.HALF_FLOAT&&(Y=s.R16F),H===s.UNSIGNED_BYTE&&(Y=s.R8)),b===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.R8UI),H===s.UNSIGNED_SHORT&&(Y=s.R16UI),H===s.UNSIGNED_INT&&(Y=s.R32UI),H===s.BYTE&&(Y=s.R8I),H===s.SHORT&&(Y=s.R16I),H===s.INT&&(Y=s.R32I)),b===s.RG&&(H===s.FLOAT&&(Y=s.RG32F),H===s.HALF_FLOAT&&(Y=s.RG16F),H===s.UNSIGNED_BYTE&&(Y=s.RG8)),b===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RG8UI),H===s.UNSIGNED_SHORT&&(Y=s.RG16UI),H===s.UNSIGNED_INT&&(Y=s.RG32UI),H===s.BYTE&&(Y=s.RG8I),H===s.SHORT&&(Y=s.RG16I),H===s.INT&&(Y=s.RG32I)),b===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),H===s.UNSIGNED_INT&&(Y=s.RGB32UI),H===s.BYTE&&(Y=s.RGB8I),H===s.SHORT&&(Y=s.RGB16I),H===s.INT&&(Y=s.RGB32I)),b===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),H===s.UNSIGNED_INT&&(Y=s.RGBA32UI),H===s.BYTE&&(Y=s.RGBA8I),H===s.SHORT&&(Y=s.RGBA16I),H===s.INT&&(Y=s.RGBA32I)),b===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),b===s.RGBA){let St=Q?oa:ie.getTransfer($);H===s.FLOAT&&(Y=s.RGBA32F),H===s.HALF_FLOAT&&(Y=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Y=St===he?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(R,b){let H;return R?b===null||b===Rn||b===hs?H=s.DEPTH24_STENCIL8:b===$i?H=s.DEPTH32F_STENCIL8:b===Os&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rn||b===hs?H=s.DEPTH_COMPONENT24:b===$i?H=s.DEPTH_COMPONENT32F:b===Os&&(H=s.DEPTH_COMPONENT16),H}function E(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==ri&&R.minFilter!==ke?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),C(b),b.isVideoTexture&&d.delete(b)}function T(R){let b=R.target;b.removeEventListener("dispose",T),M(b)}function C(R){let b=i.get(R);if(b.__webglInit===void 0)return;let H=R.source,$=h.get(H);if($){let Q=$[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys($).length===0&&h.delete(H)}i.remove(R)}function S(R){let b=i.get(R);s.deleteTexture(b.__webglTexture);let H=R.source,$=h.get(H);delete $[b.__cacheKey],o.memory.textures--}function M(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let Q=0;Q<b.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)s.deleteFramebuffer(b.__webglFramebuffer[$]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=R.textures;for(let $=0,Q=H.length;$<Q;$++){let Y=i.get(H[$]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(H[$])}i.remove(R)}let P=0;function U(){P=0}function F(){let R=P;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),P+=1,R}function N(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function V(R,b){let H=i.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,R,b);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+b)}function L(R,b){let H=i.get(R);if(R.version>0&&H.__version!==R.version){X(H,R,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+b)}function q(R,b){let H=i.get(R);if(R.version>0&&H.__version!==R.version){X(H,R,b);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+b)}function O(R,b){let H=i.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+b)}let Z={[bi]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[yo]:s.MIRRORED_REPEAT},et={[ri]:s.NEAREST,[yd]:s.NEAREST_MIPMAP_NEAREST,[ir]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[Ki]:s.LINEAR_MIPMAP_LINEAR},ht={[Sd]:s.NEVER,[Cd]:s.ALWAYS,[wd]:s.LESS,[wh]:s.LEQUAL,[Ed]:s.EQUAL,[Rd]:s.GEQUAL,[Td]:s.GREATER,[Ad]:s.NOTEQUAL};function Ut(R,b){if(b.type===$i&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ke||b.magFilter===Pa||b.magFilter===ir||b.magFilter===Ki||b.minFilter===ke||b.minFilter===Pa||b.minFilter===ir||b.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Z[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,et[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,et[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ri||b.minFilter!==ir&&b.minFilter!==Ki||b.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function kt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let $=b.source,Q=h.get($);Q===void 0&&(Q={},h.set($,Q));let Y=N(b);if(Y!==R.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[Y].usedTimes++;let St=Q[R.__cacheKey];St!==void 0&&(Q[R.__cacheKey].usedTimes--,St.usedTimes===0&&S(b)),R.__cacheKey=Y,R.__webglTexture=Q[Y].texture}return H}function X(R,b,H){let $=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=s.TEXTURE_3D);let Q=kt(R,b),Y=b.source;e.bindTexture($,R.__webglTexture,s.TEXTURE0+H);let St=i.get(Y);if(Y.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+H);let dt=ie.getPrimaries(ie.workingColorSpace),vt=b.colorSpace===Ai?null:ie.getPrimaries(b.colorSpace),Zt=b.colorSpace===Ai||dt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let st=v(b.image,!1,n.maxTextureSize);st=$t(b,st);let xt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),Ft=_(b.internalFormat,xt,Lt,b.colorSpace,b.isVideoTexture);Ut($,b);let yt,te=b.mipmaps,Wt=b.isVideoTexture!==!0,me=St.__version===void 0||Q===!0,k=Y.dataReady,ft=E(b,st);if(b.isDepthTexture)Ft=y(b.format===us,b.type),me&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ft,st.width,st.height,0,xt,Lt,null));else if(b.isDataTexture)if(te.length>0){Wt&&me&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,te[0].width,te[0].height);for(let K=0,j=te.length;K<j;K++)yt=te[K],Wt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,yt.width,yt.height,xt,Lt,yt.data):e.texImage2D(s.TEXTURE_2D,K,Ft,yt.width,yt.height,0,xt,Lt,yt.data);b.generateMipmaps=!1}else Wt?(me&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,st.width,st.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,xt,Lt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,st.width,st.height,0,xt,Lt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ft,te[0].width,te[0].height,st.depth);for(let K=0,j=te.length;K<j;K++)if(yt=te[K],b.format!==De)if(xt!==null)if(Wt){if(k)if(b.layerUpdates.size>0){let gt=eh(yt.width,yt.height,b.format,b.type);for(let pt of b.layerUpdates){let Vt=yt.data.subarray(pt*gt/yt.data.BYTES_PER_ELEMENT,(pt+1)*gt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,pt,yt.width,yt.height,1,xt,Vt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,yt.width,yt.height,st.depth,xt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Ft,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,yt.width,yt.height,st.depth,xt,Lt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,Ft,yt.width,yt.height,st.depth,0,xt,Lt,yt.data)}else{Wt&&me&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,te[0].width,te[0].height);for(let K=0,j=te.length;K<j;K++)yt=te[K],b.format!==De?xt!==null?Wt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,Ft,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,yt.width,yt.height,xt,Lt,yt.data):e.texImage2D(s.TEXTURE_2D,K,Ft,yt.width,yt.height,0,xt,Lt,yt.data)}else if(b.isDataArrayTexture)if(Wt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ft,st.width,st.height,st.depth),k)if(b.layerUpdates.size>0){let K=eh(st.width,st.height,b.format,b.type);for(let j of b.layerUpdates){let gt=st.data.subarray(j*K/st.data.BYTES_PER_ELEMENT,(j+1)*K/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,xt,Lt,gt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Lt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,xt,Lt,st.data);else if(b.isData3DTexture)Wt?(me&&e.texStorage3D(s.TEXTURE_3D,ft,Ft,st.width,st.height,st.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Lt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,xt,Lt,st.data);else if(b.isFramebufferTexture){if(me)if(Wt)e.texStorage2D(s.TEXTURE_2D,ft,Ft,st.width,st.height);else{let K=st.width,j=st.height;for(let gt=0;gt<ft;gt++)e.texImage2D(s.TEXTURE_2D,gt,Ft,K,j,0,xt,Lt,null),K>>=1,j>>=1}}else if(te.length>0){if(Wt&&me){let K=_t(te[0]);e.texStorage2D(s.TEXTURE_2D,ft,Ft,K.width,K.height)}for(let K=0,j=te.length;K<j;K++)yt=te[K],Wt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,xt,Lt,yt):e.texImage2D(s.TEXTURE_2D,K,Ft,xt,Lt,yt);b.generateMipmaps=!1}else if(Wt){if(me){let K=_t(st);e.texStorage2D(s.TEXTURE_2D,ft,Ft,K.width,K.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Lt,st)}else e.texImage2D(s.TEXTURE_2D,0,Ft,xt,Lt,st);g(b)&&m($),St.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,H){if(b.image.length!==6)return;let $=kt(R,b),Q=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let Y=i.get(Q);if(Q.version!==Y.__version||$===!0){e.activeTexture(s.TEXTURE0+H);let St=ie.getPrimaries(ie.workingColorSpace),dt=b.colorSpace===Ai?null:ie.getPrimaries(b.colorSpace),vt=b.colorSpace===Ai||St===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!Zt&&!st?xt[j]=v(b.image[j],!0,n.maxCubemapSize):xt[j]=st?b.image[j].image:b.image[j],xt[j]=$t(b,xt[j]);let Lt=xt[0],Ft=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),te=_(b.internalFormat,Ft,yt,b.colorSpace),Wt=b.isVideoTexture!==!0,me=Y.__version===void 0||$===!0,k=Q.dataReady,ft=E(b,Lt);Ut(s.TEXTURE_CUBE_MAP,b);let K;if(Zt){Wt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,te,Lt.width,Lt.height);for(let j=0;j<6;j++){K=xt[j].mipmaps;for(let gt=0;gt<K.length;gt++){let pt=K[gt];b.format!==De?Ft!==null?Wt?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,te,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,pt.width,pt.height,Ft,yt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,te,pt.width,pt.height,0,Ft,yt,pt.data)}}}else{if(K=b.mipmaps,Wt&&me){K.length>0&&ft++;let j=_t(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,te,j.width,j.height)}for(let j=0;j<6;j++)if(st){Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Ft,yt,xt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,xt[j].width,xt[j].height,0,Ft,yt,xt[j].data);for(let gt=0;gt<K.length;gt++){let Vt=K[gt].image[j].image;Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Vt.width,Vt.height,Ft,yt,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,te,Vt.width,Vt.height,0,Ft,yt,Vt.data)}}else{Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ft,yt,xt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,Ft,yt,xt[j]);for(let gt=0;gt<K.length;gt++){let pt=K[gt];Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Ft,yt,pt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,te,Ft,yt,pt.image[j])}}}g(b)&&m(s.TEXTURE_CUBE_MAP),Y.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function lt(R,b,H,$,Q,Y){let St=r.convert(H.format,H.colorSpace),dt=r.convert(H.type),vt=_(H.internalFormat,St,dt,H.colorSpace),Zt=i.get(b),st=i.get(H);if(st.__renderTarget=b,!Zt.__hasExternalTextures){let xt=Math.max(1,b.width>>Y),Lt=Math.max(1,b.height>>Y);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,vt,xt,Lt,b.depth,0,St,dt,null):e.texImage2D(Q,Y,vt,xt,Lt,0,St,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,st.__webglTexture,0,Ot(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,st.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(R,b,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let $=b.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Y=y(b.stencilBuffer,Q),St=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=Ot(b);zt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Y,b.width,b.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Y,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Y,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,R)}else{let $=b.textures;for(let Q=0;Q<$.length;Q++){let Y=$[Q],St=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),vt=_(Y.internalFormat,St,dt,Y.colorSpace),Zt=Ot(b);H&&zt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,vt,b.width,b.height):zt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,vt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,vt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let Q=$.__webglTexture,Y=Ot(b);if(b.depthTexture.format===ns)zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===us)zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ct(R){let b=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=$}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");nt(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=s.createRenderbuffer(),it(b.__webglDepthbuffer[$],R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),it(b.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(R,b,H){let $=i.get(R);b!==void 0&&lt($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&ct(R)}function wt(R){let b=R.texture,H=i.get(R),$=i.get(b);R.addEventListener("dispose",T);let Q=R.textures,Y=R.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=b.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)H.__webglFramebuffer[dt][vt]=s.createFramebuffer()}else H.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)H.__webglFramebuffer[dt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(St)for(let dt=0,vt=Q.length;dt<vt;dt++){let Zt=i.get(Q[dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&zt(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){let vt=Q[dt];H.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);let Zt=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),xt=_(vt.internalFormat,Zt,st,vt.colorSpace,R.isXRRenderTarget===!0),Lt=Ot(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,xt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),it(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)lt(H.__webglFramebuffer[dt][vt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else lt(H.__webglFramebuffer[dt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let dt=0,vt=Q.length;dt<vt;dt++){let Zt=Q[dt],st=i.get(Zt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Ut(s.TEXTURE_2D,Zt),lt(H.__webglFramebuffer,R,Zt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(Zt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),Ut(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)lt(H.__webglFramebuffer[vt],R,b,s.COLOR_ATTACHMENT0,dt,vt);else lt(H.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,dt,0);g(b)&&m(dt),e.unbindTexture()}R.depthBuffer&&ct(R)}function Pt(R){let b=R.textures;for(let H=0,$=b.length;H<$;H++){let Q=b[H];if(g(Q)){let Y=x(R),St=i.get(Q).__webglTexture;e.bindTexture(Y,St),m(Y),e.unbindTexture()}}}let Yt=[],D=[];function ee(R){if(R.samples>0){if(zt(R)===!1){let b=R.textures,H=R.width,$=R.height,Q=s.COLOR_BUFFER_BIT,Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=i.get(R),dt=b.length>1;if(dt)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[vt]);let Zt=i.get(b[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,Q,s.NEAREST),l===!0&&(Yt.length=0,D.length=0,Yt.push(s.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Yt.push(Y),D.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,St.__webglColorRenderbuffer[vt]);let Zt=i.get(b[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ot(R){return Math.min(n.maxSamples,R.samples)}function zt(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(R){let b=o.render.frame;d.get(R)!==b&&(d.set(R,b),R.update())}function $t(R,b){let H=R.colorSpace,$=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==ji&&H!==Ai&&(ie.getTransfer(H)===he?($!==De||Q!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=L,this.setTexture3D=q,this.setTextureCube=O,this.rebindTextures=rt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=zt}function Eg(s,t){function e(i,n=Ai){let r,o=ie.getTransfer(n);if(i===Ji)return s.UNSIGNED_BYTE;if(i===Rl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===fh)return s.BYTE;if(i===ph)return s.SHORT;if(i===Os)return s.UNSIGNED_SHORT;if(i===Al)return s.INT;if(i===Rn)return s.UNSIGNED_INT;if(i===$i)return s.FLOAT;if(i===Fi)return s.HALF_FLOAT;if(i===gh)return s.ALPHA;if(i===vh)return s.RGB;if(i===De)return s.RGBA;if(i===xh)return s.LUMINANCE;if(i===yh)return s.LUMINANCE_ALPHA;if(i===ns)return s.DEPTH_COMPONENT;if(i===us)return s.DEPTH_STENCIL;if(i===_h)return s.RED;if(i===Pl)return s.RED_INTEGER;if(i===bh)return s.RG;if(i===Il)return s.RG_INTEGER;if(i===Ll)return s.RGBA_INTEGER;if(i===Ir||i===Lr||i===Dr||i===Ur)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_o||i===bo||i===Mo||i===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wo||i===Eo||i===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wo||i===Eo)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===To)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ao||i===Ro||i===Co||i===Po||i===Io||i===Lo||i===Do||i===Uo||i===Fo||i===No||i===ko||i===Oo||i===Bo||i===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ao)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ro)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Co)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Po)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Io)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Do)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===No)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ko)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fr||i===Ho||i===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Fr)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mh||i===Go||i===Wo||i===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var ll=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ci=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tg={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ci;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`,cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new Xe,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new oe({vertexShader:Ag,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hl=class extends fn{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,p=null,v=new cl,g=e.getContextAttributes(),m=null,x=null,_=[],y=[],E=new Ct,A=null,T=new Ne;T.viewport=new Qt;let C=new Ne;C.viewport=new Qt;let S=[T,C],M=new ll,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=_[X];return J===void 0&&(J=new Ns,_[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=_[X];return J===void 0&&(J=new Ns,_[X]=J),J.getGripSpace()},this.getHand=function(X){let J=_[X];return J===void 0&&(J=new Ns,_[X]=J),J.getHandSpace()};function F(X){let J=y.indexOf(X.inputSource);if(J===-1)return;let lt=_[J];lt!==void 0&&(lt.update(X.inputSource,X.frame,c||o),lt.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",V);for(let X=0;X<_.length;X++){let J=y[X];J!==null&&(y[X]=null,_[X].disconnect(J))}P=null,U=null,v.reset(),t.setRenderTarget(m),f=null,h=null,u=null,n=null,x=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",N),n.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),n.renderState.layers===void 0){let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,J),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Mi(f.framebufferWidth,f.framebufferHeight,{format:De,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,lt=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?us:ns,lt=g.stencil?hs:Rn);let nt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(n,e),h=u.createProjectionLayer(nt),n.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Mi(h.textureWidth,h.textureHeight,{format:De,type:Ji,depthTexture:new Kr(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),kt.setContext(n),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(X){for(let J=0;J<X.removed.length;J++){let lt=X.removed[J],it=y.indexOf(lt);it>=0&&(y[it]=null,_[it].disconnect(lt))}for(let J=0;J<X.added.length;J++){let lt=X.added[J],it=y.indexOf(lt);if(it===-1){for(let ct=0;ct<_.length;ct++)if(ct>=y.length){y.push(lt),it=ct;break}else if(y[ct]===null){y[ct]=lt,it=ct;break}if(it===-1)break}let nt=_[it];nt&&nt.connect(lt)}}let L=new I,q=new I;function O(X,J,lt){L.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(lt.matrixWorld);let it=L.distanceTo(q),nt=J.projectionMatrix.elements,ct=lt.projectionMatrix.elements,rt=nt[14]/(nt[10]-1),wt=nt[14]/(nt[10]+1),Pt=(nt[9]+1)/nt[5],Yt=(nt[9]-1)/nt[5],D=(nt[8]-1)/nt[0],ee=(ct[8]+1)/ct[0],Ot=rt*D,zt=rt*ee,bt=it/(-D+ee),$t=bt*-D;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($t),X.translateZ(bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),nt[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let _t=rt+bt,R=wt+bt,b=Ot-$t,H=zt+(it-$t),$=Pt*wt/R*_t,Q=Yt*wt/R*_t;X.projectionMatrix.makePerspective(b,H,$,Q,_t,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let J=X.near,lt=X.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(lt=v.depthFar)),M.near=C.near=T.near=J,M.far=C.far=T.far=lt,(P!==M.near||U!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far),T.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;let it=X.parent,nt=M.cameras;Z(M,it);for(let ct=0;ct<nt.length;ct++)Z(nt[ct],it);nt.length===2?O(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),et(X,M,it)};function et(X,J,lt){lt===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(lt.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$o*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ht=null;function Ut(X,J){if(d=J.getViewerPose(c||o),p=J,d!==null){let lt=d.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let it=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let ct=0;ct<lt.length;ct++){let rt=lt[ct],wt=null;if(f!==null)wt=f.getViewport(rt);else{let Yt=u.getViewSubImage(h,rt);wt=Yt.viewport,ct===0&&(t.setRenderTargetTextures(x,Yt.colorTexture,h.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(x))}let Pt=S[ct];Pt===void 0&&(Pt=new Ne,Pt.layers.enable(ct),Pt.viewport=new Qt,S[ct]=Pt),Pt.matrix.fromArray(rt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(rt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(wt.x,wt.y,wt.width,wt.height),ct===0&&(M.matrix.copy(Pt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Pt)}let nt=n.enabledFeatures;if(nt&&nt.includes("depth-sensing")){let ct=u.getDepthInformation(lt[0]);ct&&ct.isValid&&ct.texture&&v.init(t,ct,n.renderState)}}for(let lt=0;lt<_.length;lt++){let it=y[lt],nt=_[lt];it!==null&&nt!==void 0&&nt.update(it,J,c||o)}ht&&ht(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),p=null}let kt=new Rh;kt.setAnimationLoop(Ut),this.setAnimationLoop=function(X){ht=X},this.dispose=function(){}}},En=new Fe,Cg=new jt;function Pg(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ah(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,x,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ue&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ue&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,y=x.envMapRotation;_&&(g.envMap.value=_,En.copy(y),En.x*=-1,En.y*=-1,En.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),g.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(En)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Ig(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=n[x.id];y===void 0&&(p(x),y=d(x),n[x.id]=y,x.addEventListener("dispose",g));let E=_.program;i.updateUBOMapping(x,E);let A=t.render.frame;r[x.id]!==A&&(h(x),r[x.id]=A)}function d(x){let _=u();x.__bindingPointIndex=_;let y=s.createBuffer(),E=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let _=n[x.id],y=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,T=y.length;A<T;A++){let C=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=C.length;S<M;S++){let P=C[S];if(f(P,A,S,E)===!0){let U=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],N=0;for(let V=0;V<F.length;V++){let L=F[V],q=v(L);typeof L=="number"||typeof L=="boolean"?(P.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,U+N,P.__data)):L.isMatrix3?(P.__data[0]=L.elements[0],P.__data[1]=L.elements[1],P.__data[2]=L.elements[2],P.__data[3]=0,P.__data[4]=L.elements[3],P.__data[5]=L.elements[4],P.__data[6]=L.elements[5],P.__data[7]=0,P.__data[8]=L.elements[6],P.__data[9]=L.elements[7],P.__data[10]=L.elements[8],P.__data[11]=0):(L.toArray(P.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,y,E){let A=x.value,T=_+"_"+y;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{let C=E[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function p(x){let _=x.uniforms,y=0,E=16;for(let T=0,C=_.length;T<C;T++){let S=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,P=S.length;M<P;M++){let U=S[M],F=Array.isArray(U.value)?U.value:[U.value];for(let N=0,V=F.length;N<V;N++){let L=F[N],q=v(L),O=y%E,Z=O%q.boundary,et=O+Z;y+=Z,et!==0&&E-et<q.storage&&(y+=E-et),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=q.storage}}}let A=y%E;return A>0&&(y+=E-A),x.__size=y,x.__cache={},this}function v(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){let _=x.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function m(){for(let x in n)s.deleteBuffer(n[x]);o=[],n={},r={}}return{bind:l,update:c,dispose:m}}var $r=class{constructor(t={}){let{canvas:e=Id(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Pi,this.toneMappingExposure=1;let y=this,E=!1,A=0,T=0,C=null,S=-1,M=null,P=new Qt,U=new Qt,F=null,N=new qt(0),V=0,L=e.width,q=e.height,O=1,Z=null,et=null,ht=new Qt(0,0,L,q),Ut=new Qt(0,0,L,q),kt=!1,X=new zs,J=!1,lt=!1,it=new jt,nt=new jt,ct=new I,rt=new Qt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Yt(){return C===null?O:1}let D=i;function ee(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),D===null){let B="webgl2";if(D=ee(B,w),D===null)throw ee(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ot,zt,bt,$t,_t,R,b,H,$,Q,Y,St,dt,vt,Zt,st,xt,Lt,Ft,yt,te,Wt,me,k;function ft(){Ot=new Km(D),Ot.init(),Wt=new Eg(D,Ot),zt=new Hm(D,Ot,t,Wt),bt=new Mg(D,Ot),zt.reverseDepthBuffer&&h&&bt.buffers.depth.setReversed(!0),$t=new Zm(D),_t=new cg,R=new wg(D,Ot,bt,_t,zt,Wt,$t),b=new Gm(y),H=new qm(y),$=new nf(D),me=new Bm(D,$),Q=new $m(D,$,$t,me),Y=new jm(D,Q,$,$t),Ft=new Jm(D,zt,R),st=new Vm(_t),St=new lg(y,b,H,Ot,zt,me,st),dt=new Pg(y,_t),vt=new ug,Zt=new vg(Ot),Lt=new Om(y,b,H,bt,Y,f,l),xt=new _g(y,Y,zt),k=new Ig(D,$t,zt,bt),yt=new zm(D,Ot,$t),te=new Ym(D,Ot,$t),$t.programs=St.programs,y.capabilities=zt,y.extensions=Ot,y.properties=_t,y.renderLists=vt,y.shadowMap=xt,y.state=bt,y.info=$t}ft();let K=new hl(y,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(L,q,!1))},this.getSize=function(w){return w.set(L,q)},this.setSize=function(w,B,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,q=B,e.width=Math.floor(w*O),e.height=Math.floor(B*O),G===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(L*O,q*O).floor()},this.setDrawingBufferSize=function(w,B,G){L=w,q=B,O=G,e.width=Math.floor(w*G),e.height=Math.floor(B*G),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ht)},this.setViewport=function(w,B,G,W){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,B,G,W),bt.viewport(P.copy(ht).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,B,G,W){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,B,G,W),bt.scissor(U.copy(Ut).multiplyScalar(O).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(w){bt.setScissorTest(kt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){et=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(w=!0,B=!0,G=!0){let W=0;if(w){let z=!1;if(C!==null){let at=C.texture.format;z=at===Ll||at===Il||at===Pl}if(z){let at=C.texture.type,mt=at===Ji||at===Rn||at===Os||at===hs||at===Rl||at===Cl,Et=Lt.getClearColor(),Tt=Lt.getClearAlpha(),Bt=Et.r,Gt=Et.g,At=Et.b;mt?(p[0]=Bt,p[1]=Gt,p[2]=At,p[3]=Tt,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Bt,v[1]=Gt,v[2]=At,v[3]=Tt,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}B&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),Zt.dispose(),_t.dispose(),b.dispose(),H.dispose(),Y.dispose(),me.dispose(),k.dispose(),St.dispose(),K.dispose(),K.removeEventListener("sessionstart",Zl),K.removeEventListener("sessionend",Jl),yn.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=$t.autoReset,B=xt.enabled,G=xt.autoUpdate,W=xt.needsUpdate,z=xt.type;ft(),$t.autoReset=w,xt.enabled=B,xt.autoUpdate=G,xt.needsUpdate=W,xt.type=z}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vt(w){let B=w.target;B.removeEventListener("dispose",Vt),be(B)}function be(w){ze(w),_t.remove(w)}function ze(w){let B=_t.get(w).programs;B!==void 0&&(B.forEach(function(G){St.releaseProgram(G)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,G,W,z,at){B===null&&(B=wt);let mt=z.isMesh&&z.matrixWorld.determinant()<0,Et=Gu(w,B,G,W,z);bt.setMaterial(W,mt);let Tt=G.index,Bt=1;if(W.wireframe===!0){if(Tt=Q.getWireframeAttribute(G),Tt===void 0)return;Bt=2}let Gt=G.drawRange,At=G.attributes.position,se=Gt.start*Bt,ge=(Gt.start+Gt.count)*Bt;at!==null&&(se=Math.max(se,at.start*Bt),ge=Math.min(ge,(at.start+at.count)*Bt)),Tt!==null?(se=Math.max(se,0),ge=Math.min(ge,Tt.count)):At!=null&&(se=Math.max(se,0),ge=Math.min(ge,At.count));let ve=ge-se;if(ve<0||ve===1/0)return;me.setup(z,W,Et,G,Tt);let Ye,re=yt;if(Tt!==null&&(Ye=$.get(Tt),re=te,re.setIndex(Ye)),z.isMesh)W.wireframe===!0?(bt.setLineWidth(W.wireframeLinewidth*Yt()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(z.isLine){let Rt=W.linewidth;Rt===void 0&&(Rt=1),bt.setLineWidth(Rt*Yt()),z.isLineSegments?re.setMode(D.LINES):z.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else z.isPoints?re.setMode(D.POINTS):z.isSprite&&re.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)re.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Rt=z._multiDrawStarts,Oi=z._multiDrawCounts,ae=z._multiDrawCount,gi=Tt?$.get(Tt).bytesPerElement:1,Nn=_t.get(W).currentProgram.getUniforms();for(let ii=0;ii<ae;ii++)Nn.setValue(D,"_gl_DrawID",ii),re.render(Rt[ii]/gi,Oi[ii])}else if(z.isInstancedMesh)re.renderInstances(se,ve,z.count);else if(G.isInstancedBufferGeometry){let Rt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Oi=Math.min(G.instanceCount,Rt);re.renderInstances(se,ve,Oi)}else re.render(se,ve)};function le(w,B,G){w.transparent===!0&&w.side===Ee&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,er(w,B,G),w.side=ai,w.needsUpdate=!0,er(w,B,G),w.side=Ee):er(w,B,G)}this.compile=function(w,B,G=null){G===null&&(G=w),m=Zt.get(G),m.init(B),_.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let W=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let at=z.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let Et=at[mt];le(Et,G,z),W.add(Et)}else le(at,G,z),W.add(at)}),_.pop(),m=null,W},this.compileAsync=function(w,B,G=null){let W=this.compile(w,B,G);return new Promise(z=>{function at(){if(W.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&W.delete(mt)}),W.size===0){z(w);return}setTimeout(at,10)}Ot.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let mi=null;function ki(w){mi&&mi(w)}function Zl(){yn.stop()}function Jl(){yn.start()}let yn=new Rh;yn.setAnimationLoop(ki),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(w){mi=w,K.setAnimationLoop(w),w===null?yn.stop():yn.start()},K.addEventListener("sessionstart",Zl),K.addEventListener("sessionend",Jl),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,B,C),m=Zt.get(w,_.length),m.init(B),_.push(m),nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(nt),lt=this.localClippingEnabled,J=st.init(this.clippingPlanes,lt),g=vt.get(w,x.length),g.init(),x.push(g),K.enabled===!0&&K.isPresenting===!0){let at=y.xr.getDepthSensingMesh();at!==null&&Ca(at,B,-1/0,y.sortObjects)}Ca(w,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Z,et),Pt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Pt&&Lt.addToRenderList(g,w),this.info.render.frame++,J===!0&&st.beginShadows();let G=m.state.shadowsArray;xt.render(G,w,B),J===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,z=g.transmissive;if(m.setupLights(),B.isArrayCamera){let at=B.cameras;if(z.length>0)for(let mt=0,Et=at.length;mt<Et;mt++){let Tt=at[mt];Ql(W,z,w,Tt)}Pt&&Lt.render(w);for(let mt=0,Et=at.length;mt<Et;mt++){let Tt=at[mt];jl(g,w,Tt,Tt.viewport)}}else z.length>0&&Ql(W,z,w,B),Pt&&Lt.render(w),jl(g,w,B);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,B),me.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],J===!0&&st.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Ca(w,B,G,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){W&&rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);let mt=Y.update(w),Et=w.material;Et.visible&&g.push(w,mt,Et,G,rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let mt=Y.update(w),Et=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),rt.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),rt.copy(mt.boundingSphere.center)),rt.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(Et)){let Tt=mt.groups;for(let Bt=0,Gt=Tt.length;Bt<Gt;Bt++){let At=Tt[Bt],se=Et[At.materialIndex];se&&se.visible&&g.push(w,mt,se,G,rt.z,At)}}else Et.visible&&g.push(w,mt,Et,G,rt.z,null)}}let at=w.children;for(let mt=0,Et=at.length;mt<Et;mt++)Ca(at[mt],B,G,W)}function jl(w,B,G,W){let z=w.opaque,at=w.transmissive,mt=w.transparent;m.setupLightsView(G),J===!0&&st.setGlobalState(y.clippingPlanes,G),W&&bt.viewport(P.copy(W)),z.length>0&&tr(z,B,G),at.length>0&&tr(at,B,G),mt.length>0&&tr(mt,B,G),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Ql(w,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Mi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Fi:Ji,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let at=m.state.transmissionRenderTarget[W.id],mt=W.viewport||P;at.setSize(mt.z,mt.w);let Et=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(N),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Pt&&Lt.render(G);let Tt=y.toneMapping;y.toneMapping=Pi;let Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),J===!0&&st.setGlobalState(y.clippingPlanes,W),tr(w,G,W),R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let At=0,se=B.length;At<se;At++){let ge=B[At],ve=ge.object,Ye=ge.geometry,re=ge.material,Rt=ge.group;if(re.side===Ee&&ve.layers.test(W.layers)){let Oi=re.side;re.side=Ue,re.needsUpdate=!0,tc(ve,G,W,Ye,re,Rt),re.side=Oi,re.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at))}y.setRenderTarget(Et),y.setClearColor(N,V),Bt!==void 0&&(W.viewport=Bt),y.toneMapping=Tt}function tr(w,B,G){let W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,at=w.length;z<at;z++){let mt=w[z],Et=mt.object,Tt=mt.geometry,Bt=W===null?mt.material:W,Gt=mt.group;Et.layers.test(G.layers)&&tc(Et,B,G,Tt,Bt,Gt)}}function tc(w,B,G,W,z,at){w.onBeforeRender(y,B,G,W,z,at),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,B,G,W,w,at),z.transparent===!0&&z.side===Ee&&z.forceSinglePass===!1?(z.side=Ue,z.needsUpdate=!0,y.renderBufferDirect(G,B,W,z,w,at),z.side=ai,z.needsUpdate=!0,y.renderBufferDirect(G,B,W,z,w,at),z.side=Ee):y.renderBufferDirect(G,B,W,z,w,at),w.onAfterRender(y,B,G,W,z,at)}function er(w,B,G){B.isScene!==!0&&(B=wt);let W=_t.get(w),z=m.state.lights,at=m.state.shadowsArray,mt=z.state.version,Et=St.getParameters(w,z.state,at,B,G),Tt=St.getProgramCacheKey(Et),Bt=W.programs;W.environment=w.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(w.isMeshStandardMaterial?H:b).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",Vt),Bt=new Map,W.programs=Bt);let Gt=Bt.get(Tt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===mt)return ic(w,Et),Gt}else Et.uniforms=St.getUniforms(w),w.onBeforeCompile(Et,y),Gt=St.acquireProgram(Et,Tt),Bt.set(Tt,Gt),W.uniforms=Et.uniforms;let At=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=st.uniform),ic(w,Et),W.needsLights=Xu(w),W.lightsStateVersion=mt,W.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.directionalShadowMap.value=z.state.directionalShadowMap,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotShadowMap.value=z.state.spotShadowMap,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMap.value=z.state.pointShadowMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function ec(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=rs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function ic(w,B){let G=_t.get(w);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Gu(w,B,G,W,z){B.isScene!==!0&&(B=wt),R.resetTextureUnits();let at=B.fog,mt=W.isMeshStandardMaterial?B.environment:null,Et=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ji,Tt=(W.isMeshStandardMaterial?H:b).get(W.envMap||mt),Bt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),At=!!G.morphAttributes.position,se=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color,ve=Pi;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=y.toneMapping);let Ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=Ye!==void 0?Ye.length:0,Rt=_t.get(W),Oi=m.state.lights;if(J===!0&&(lt===!0||w!==M)){let di=w===M&&W.id===S;st.setState(W,w,di)}let ae=!1;W.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Oi.state.version||Rt.outputColorSpace!==Et||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==Tt||W.fog===!0&&Rt.fog!==at||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==st.numPlanes||Rt.numIntersection!==st.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==Gt||Rt.morphTargets!==At||Rt.morphNormals!==se||Rt.morphColors!==ge||Rt.toneMapping!==ve||Rt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,Rt.__version=W.version);let gi=Rt.currentProgram;ae===!0&&(gi=er(W,B,z));let Nn=!1,ii=!1,ws=!1,xe=gi.getUniforms(),Ei=Rt.uniforms;if(bt.useProgram(gi.program)&&(Nn=!0,ii=!0,ws=!0),W.id!==S&&(S=W.id,ii=!0),Nn||M!==w){bt.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),Dd(it),Ud(it),xe.setValue(D,"projectionMatrix",it)):xe.setValue(D,"projectionMatrix",w.projectionMatrix),xe.setValue(D,"viewMatrix",w.matrixWorldInverse);let en=xe.map.cameraPosition;en!==void 0&&en.setValue(D,ct.setFromMatrixPosition(w.matrixWorld)),zt.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ii=!0,ws=!0)}if(z.isSkinnedMesh){xe.setOptional(D,z,"bindMatrix"),xe.setOptional(D,z,"bindMatrixInverse");let di=z.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),xe.setValue(D,"boneTexture",di.boneTexture,R))}z.isBatchedMesh&&(xe.setOptional(D,z,"batchingTexture"),xe.setValue(D,"batchingTexture",z._matricesTexture,R),xe.setOptional(D,z,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",z._indirectTexture,R),xe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",z._colorsTexture,R));let Es=G.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0)&&Ft.update(z,G,gi),(ii||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,xe.setValue(D,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ei.envMap.value=Tt,Ei.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ei.envMapIntensity.value=B.environmentIntensity),ii&&(xe.setValue(D,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&Wu(Ei,ws),at&&W.fog===!0&&dt.refreshFogUniforms(Ei,at),dt.refreshMaterialUniforms(Ei,W,O,q,m.state.transmissionRenderTarget[w.id]),rs.upload(D,ec(Rt),Ei,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(rs.upload(D,ec(Rt),Ei,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(D,"center",z.center),xe.setValue(D,"modelViewMatrix",z.modelViewMatrix),xe.setValue(D,"normalMatrix",z.normalMatrix),xe.setValue(D,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let di=W.uniformsGroups;for(let en=0,nn=di.length;en<nn;en++){let nc=di[en];k.update(nc,gi),k.bind(nc,gi)}}return gi}function Wu(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Xu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,B,G){_t.get(w.texture).__webglTexture=B,_t.get(w.depthTexture).__webglTexture=G;let W=_t.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){let G=_t.get(w);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,G=0){C=w,A=B,T=G;let W=!0,z=null,at=!1,mt=!1;if(w){let Tt=_t.get(w);if(Tt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Tt.__hasExternalTextures)R.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let At=w.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&_t.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);let Gt=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[B])?z=Gt[B][G]:z=Gt[B],at=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?z=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[G]:z=Gt,P.copy(w.viewport),U.copy(w.scissor),F=w.scissorTest}else P.copy(ht).multiplyScalar(O).floor(),U.copy(Ut).multiplyScalar(O).floor(),F=kt;if(bt.bindFramebuffer(D.FRAMEBUFFER,z)&&W&&bt.drawBuffers(w,z),bt.viewport(P),bt.scissor(U),bt.setScissorTest(F),at){let Tt=_t.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Tt.__webglTexture,G)}else if(mt){let Tt=_t.get(w.texture),Bt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,G||0,Bt)}S=-1},this.readRenderTargetPixels=function(w,B,G,W,z,at,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){bt.bindFramebuffer(D.FRAMEBUFFER,Et);try{let Tt=w.texture,Bt=Tt.format,Gt=Tt.type;if(!zt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&G>=0&&G<=w.height-z&&D.readPixels(B,G,W,z,Wt.convert(Bt),Wt.convert(Gt),at)}finally{let Tt=C!==null?_t.get(C).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,B,G,W,z,at,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){let Tt=w.texture,Bt=Tt.format,Gt=Tt.type;if(!zt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-W&&G>=0&&G<=w.height-z){bt.bindFramebuffer(D.FRAMEBUFFER,Et);let At=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(B,G,W,z,Wt.convert(Bt),Wt.convert(Gt),0);let se=C!==null?_t.get(C).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,se);let ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ld(D,ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(At),D.deleteSync(ge),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,G=0){w.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-G),z=Math.floor(w.image.width*W),at=Math.floor(w.image.height*W),mt=B!==null?B.x:0,Et=B!==null?B.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,mt,Et,z,at),bt.unbindTexture()},this.copyTextureToTexture=function(w,B,G=null,W=null,z=0){w.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,G=null);let at,mt,Et,Tt,Bt,Gt,At,se,ge,ve=w.isCompressedTexture?w.mipmaps[z]:w.image;G!==null?(at=G.max.x-G.min.x,mt=G.max.y-G.min.y,Et=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Bt=G.min.y,Gt=G.isBox3?G.min.z:0):(at=ve.width,mt=ve.height,Et=ve.depth||1,Tt=0,Bt=0,Gt=0),W!==null?(At=W.x,se=W.y,ge=W.z):(At=0,se=0,ge=0);let Ye=Wt.convert(B.format),re=Wt.convert(B.type),Rt;B.isData3DTexture?(R.setTexture3D(B,0),Rt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Rt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Rt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Oi=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gi=D.getParameter(D.UNPACK_SKIP_PIXELS),Nn=D.getParameter(D.UNPACK_SKIP_ROWS),ii=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gt);let ws=w.isDataArrayTexture||w.isData3DTexture,xe=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Ei=_t.get(w),Es=_t.get(B),di=_t.get(Ei.__renderTarget),en=_t.get(Es.__renderTarget);bt.bindFramebuffer(D.READ_FRAMEBUFFER,di.__webglFramebuffer),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let nn=0;nn<Et;nn++)ws&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(w).__webglTexture,z,Gt+nn),w.isDepthTexture?(xe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(B).__webglTexture,z,ge+nn),D.blitFramebuffer(Tt,Bt,at,mt,At,se,at,mt,D.DEPTH_BUFFER_BIT,D.NEAREST)):xe?D.copyTexSubImage3D(Rt,z,At,se,ge+nn,Tt,Bt,at,mt):D.copyTexSubImage2D(Rt,z,At,se,ge+nn,Tt,Bt,at,mt);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xe?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Rt,z,At,se,ge,at,mt,Et,Ye,re,ve.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,z,At,se,ge,at,mt,Et,Ye,ve.data):D.texSubImage3D(Rt,z,At,se,ge,at,mt,Et,Ye,re,ve):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,At,se,at,mt,Ye,re,ve.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,At,se,ve.width,ve.height,Ye,ve.data):D.texSubImage2D(D.TEXTURE_2D,z,At,se,at,mt,Ye,re,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,Oi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ii),z===0&&B.generateMipmaps&&D.generateMipmap(Rt),bt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,G=null,W=null,z=0){return w.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,G,W,z)},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),bt.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,bt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Di=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fe,this.environmentIntensity=1,this.environmentRotation=new Fe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ul=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ko,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new I,Yr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ri(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new de(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ms=class extends Ii{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jn,Ps=new I,jn=new I,Qn=new I,ts=new Ct,Is=new Ct,Dh=new jt,Sr=new I,Ls=new I,wr=new I,ih=new Ct,ao=new Ct,nh=new Ct,Hs=class extends Oe{constructor(t=new ms){if(super(),this.isSprite=!0,this.type="Sprite",Jn===void 0){Jn=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ul(e,5);Jn.setIndex([0,1,2,0,2,3]),Jn.setAttribute("position",new Yr(i,3,0,!1)),Jn.setAttribute("uv",new Yr(i,2,3,!1))}this.geometry=Jn,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),Dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-Qn.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;Er(Sr.set(-.5,-.5,0),Qn,o,jn,n,r),Er(Ls.set(.5,-.5,0),Qn,o,jn,n,r),Er(wr.set(.5,.5,0),Qn,o,jn,n,r),ih.set(0,0),ao.set(1,0),nh.set(1,1);let a=t.ray.intersectTriangle(Sr,Ls,wr,!1,Ps);if(a===null&&(Er(Ls.set(-.5,.5,0),Qn,o,jn,n,r),ao.set(0,1),a=t.ray.intersectTriangle(Sr,wr,Ls,!1,Ps),a===null))return;let l=t.ray.origin.distanceTo(Ps);l<t.near||l>t.far||e.push({distance:l,point:Ps.clone(),uv:hn.getInterpolation(Ps,Sr,Ls,wr,ih,ao,nh,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Er(s,t,e,i,n,r){ts.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Is.x=r*ts.x-n*ts.y,Is.y=n*ts.x+r*ts.y):Is.copy(ts),s.copy(t),s.x+=Is.x,s.y+=Is.y,s.applyMatrix4(Dh)}var pn=class extends Xe{constructor(t=null,e=1,i=1,n,r,o,a,l,c=ri,d=ri,u,h){super(null,o,a,l,c,d,n,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class extends de{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Vs=class extends Ii{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zr=new I,Jr=new I,sh=new jt,Ds=new Bs,Tr=new Pn,oo=new I,rh=new I,jr=class extends Oe{constructor(t=new ye,e=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Zr.fromBufferAttribute(e,n-1),Jr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Zr.distanceTo(Jr);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(n),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;sh.copy(n).invert(),Ds.copy(t.ray).applyMatrix4(sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=d.getX(v),x=d.getX(v+1),_=Ar(this,t,Ds,l,m,x);_&&e.push(_)}if(this.isLineLoop){let v=d.getX(p-1),g=d.getX(f),m=Ar(this,t,Ds,l,v,g);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=Ar(this,t,Ds,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){let v=Ar(this,t,Ds,l,p-1,f);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ar(s,t,e,i,n,r){let o=s.geometry.attributes.position;if(Zr.fromBufferAttribute(o,n),Jr.fromBufferAttribute(o,r),e.distanceSqToSegment(Zr,Jr,oo,rh)>i)return;oo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(oo);if(!(l<t.near||l>t.far))return{distance:l,point:rh.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var dl=class extends Ii{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ah=new jt,fl=new Bs,Rr=new Pn,Cr=new I,Qr=class extends Oe{constructor(t=new ye,e=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(n),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;ah.copy(n).invert(),fl.copy(t.ray).applyMatrix4(ah);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,v=f;p<v;p++){let g=c.getX(p);Cr.fromBufferAttribute(u,g),oh(Cr,g,l,n,t,e,this)}}else{let h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=h,v=f;p<v;p++)Cr.fromBufferAttribute(u,p),oh(Cr,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oh(s,t,e,i,n,r,o){let a=fl.distanceSqToPoint(s);if(a<e){let l=new I;fl.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gn=class extends Xe{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ta=class s extends ye{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=We(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/e,u=new I,h=new Ct,f=new I,p=new I,v=new I,g=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=e;x++){let _=i+x*d*n,y=Math.sin(_),E=Math.cos(_);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*E,o.push(u.x,u.y,u.z),h.x=x/e,h.y=A/(t.length-1),a.push(h.x,h.y);let T=l[3*A+0]*y,C=l[3*A+1],S=l[3*A+0]*E;c.push(T,C,S)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let y=_+x*t.length,E=y,A=y+t.length,T=y+t.length+1,C=y+1;r.push(E,A,C),r.push(T,C,A)}this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var gs=class s extends ye{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,d=new Ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/t+1)/2,d.y=(o[h+1]/t+1)/2,l.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Si=class s extends ye{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let d=[],u=[],h=[],f=[],p=0,v=[],g=i/2,m=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function x(){let y=new I,E=new I,A=0,T=(e-t)/i;for(let C=0;C<=r;C++){let S=[],M=C/r,P=M*(e-t)+t;for(let U=0;U<=n;U++){let F=U/n,N=F*l+a,V=Math.sin(N),L=Math.cos(N);E.x=P*V,E.y=-M*i+g,E.z=P*L,u.push(E.x,E.y,E.z),y.set(V,T,L).normalize(),h.push(y.x,y.y,y.z),f.push(F,1-M),S.push(p++)}v.push(S)}for(let C=0;C<n;C++)for(let S=0;S<r;S++){let M=v[S][C],P=v[S+1][C],U=v[S+1][C+1],F=v[S][C+1];(t>0||S!==0)&&(d.push(M,P,F),A+=3),(e>0||S!==r-1)&&(d.push(P,U,F),A+=3)}c.addGroup(m,A,0),m+=A}function _(y){let E=p,A=new Ct,T=new I,C=0,S=y===!0?t:e,M=y===!0?1:-1;for(let U=1;U<=n;U++)u.push(0,g*M,0),h.push(0,M,0),f.push(.5,.5),p++;let P=p;for(let U=0;U<=n;U++){let N=U/n*l+a,V=Math.cos(N),L=Math.sin(N);T.x=S*L,T.y=g*M,T.z=S*V,u.push(T.x,T.y,T.z),h.push(0,M,0),A.x=V*.5+.5,A.y=L*.5*M+.5,f.push(A.x,A.y),p++}for(let U=0;U<n;U++){let F=E+U,N=P+U;y===!0?d.push(N,N+1,F):d.push(N+1,N,F),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class s extends Si{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var li=class s extends ye{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new I,h=new I,f=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){let x=[],_=m/i,y=0;m===0&&o===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){let A=E/e;u.x=-t*Math.cos(n+A*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(n+A*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),g.push(A+y,1-_),x.push(c++)}d.push(x)}for(let m=0;m<i;m++)for(let x=0;x<e;x++){let _=d[m][x+1],y=d[m][x],E=d[m+1][x],A=d[m+1][x+1];(m!==0||o>0)&&f.push(_,y,A),(m!==i-1||l<Math.PI)&&f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ia=class s extends ye{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],d=new I,u=new I,h=new I;for(let f=0;f<=i;f++)for(let p=0;p<=n;p++){let v=p/n*r,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(p/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=n;p++){let v=(n+1)*f+p-1,g=(n+1)*(f-1)+p-1,m=(n+1)*(f-1)+p,x=(n+1)*f+p;o.push(v,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ui=class extends Ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Pr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Lg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var vs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends vs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case lc:r=t,a=2*e-i;break;case cc:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:o=t,l=2*i-e;break;case cc:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,x=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,_=(-1-f)*g+(1.5+f)*v+.5*p,y=f*g-f*v;for(let E=0;E!==a;++E)r[E]=m*o[d+E]+x*o[c+E]+_*o[l+E]+y*o[u+E];return r}},ml=class extends vs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(i-e)/(n-e),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}},gl=class extends vs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},wi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pr(e,this.TimeBufferType),this.values=Pr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pr(t.times,Array),values:Pr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Lg(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,h=u-i,f=u+i;for(let p=0;p!==i;++p){let v=e[u+p];if(v!==e[h+p]||v!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,h=o*i;for(let f=0;f!==i;++f)e[h+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=qo;var In=class extends wi{constructor(t,e,i){super(t,e,i)}};In.prototype.ValueTypeName="bool";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=Nr;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends wi{};vl.prototype.ValueTypeName="color";var xl=class extends wi{};xl.prototype.ValueTypeName="number";var yl=class extends vs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let d=c+a;c!==d;c+=4)Me.slerpFlat(r,0,o,c-a,o,c,l);return r}},na=class extends wi{InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var Ln=class extends wi{constructor(t,e,i){super(t,e,i)}};Ln.prototype.ValueTypeName="string";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=Nr;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends wi{};_l.prototype.ValueTypeName="vector";var bl=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(d){a++,r===!1&&n.onStart!==void 0&&n.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,n.onProgress!==void 0&&n.onProgress(d,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(d){n.onError!==void 0&&n.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null}}},Dg=new bl,Ml=class{constructor(t){this.manager=t!==void 0?t:Dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var sa=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var lo=new jt,lh=new I,ch=new I,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wl=class extends Sl{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ra=class extends sa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var xs=class extends ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fl="\\[\\]\\.:\\/",Ug=new RegExp("["+Fl+"]","g"),Nl="[^"+Fl+"]",Fg="[^"+Fl.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",Nl),kg=/(WCOD+)?/.source.replace("WCOD",Fg),Og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),zg=new RegExp("^"+Ng+kg+Og+Bg+"$"),Hg=["material","materials","bones","map"],El=class{constructor(t,e,i){let n=i||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},_e=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(t){let e=zg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Hg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=El;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _v=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Fh(s){let t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}async function Nh(){let s=window.__SIMDATA,t="bundle";if(s)s.starsBytes=Fh(s.stars),s.milkywayBytes=s.milkyway?Fh(s.milkyway):null;else{if(location.protocol==="file:")throw new Error("data/data-bundle.js is missing. Run: node tools/build-data.mjs");t="files";let e=async(i,n)=>{let r=await fetch(`data/${i}`);if(!r.ok)throw new Error(`data/${i}: HTTP ${r.status}`);return n==="bin"?new Uint8Array(await r.arrayBuffer()):r.json()};s={manifest:await e("manifest.json"),names:await e("names.json"),galaxies:await e("galaxies.json"),exoplanets:await e("exoplanets.json"),ephemeris:await e("ephemeris.json")},s.starsBytes=await e("stars.bin","bin");try{s.milkywayBytes=await e("milkyway.bin","bin")}catch{s.milkywayBytes=null}}return Vg(s,t)}function Vg(s,t="node"){let e=s.starsBytes,i=Math.floor(e.length/24),n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=new Float64Array(i*3),o=new Float32Array(i),a=new Float32Array(i),l=new Uint8Array(i),c=new Uint8Array(i),d=new Uint32Array(i);for(let p=0;p<i;p++){let v=p*24;r[p*3]=n.getFloat32(v,!0),r[p*3+1]=n.getFloat32(v+4,!0),r[p*3+2]=n.getFloat32(v+8,!0),o[p]=n.getInt16(v+12,!0)/1e3,a[p]=n.getUint16(v+14,!0),l[p]=n.getUint8(v+16),c[p]=n.getUint8(v+17),d[p]=n.getUint32(v+20,!0)}let u=null;if(s.milkywayBytes){let p=s.milkywayBytes,v=new DataView(p.buffer,p.byteOffset,32),g=v.getUint16(4,!0),m=v.getUint16(6,!0),x=new Uint16Array(p.buffer.slice(p.byteOffset+32,p.byteOffset+32+g*m*2)),_=new Uint16Array(p.buffer.slice(p.byteOffset+32+g*m*2,p.byteOffset+32+g*m*4));u={width:g,height:m,logMin:v.getFloat32(8,!0),logMax:v.getFloat32(12,!0),colMin:v.getFloat32(16,!0),colMax:v.getFloat32(20,!0),integratedV:v.getFloat32(24,!0),lum:x,col:_}}let h=new Map;for(let p of s.names.entries)h.set(p[0],{name:p[1],desig:p[2],sp:p[3],system:p[4],gj:p[5]});let f=new Map;for(let p of s.exoplanets.hosts)p.star>=0&&f.set(p.star,p);return{n:i,pos:r,absMag:o,teff:a,flags:l,lc:c,hip:d,names:h,hosts:f,galaxies:s.galaxies.galaxies,ephemeris:s.ephemeris,manifest:s.manifest,milkyWay:u,source:t}}var Kt=Math.PI/180,kl=1/3.261563777,Ws=3.261563777,ne=3085677581491367e-2,Xs=94607304725808e-1,Ht=1495978707e-1;var ca=206264.80624709636,Se={V:0,IV:1,III:2,II:3,I:4,WD:5,UNK:6};var Gg=[[2400,-6.6],[2600,-4.9],[3e3,-3.2],[3500,-1.9],[4e3,-.95],[4500,-.55],[5e3,-.3],[5500,-.13],[5772,-.07],[6e3,-.05],[6500,-.01],[7e3,.01],[8e3,-.05],[9e3,-.2],[1e4,-.4],[15e3,-1.5],[2e4,-2.1],[3e4,-3],[4e4,-3.9],[5e4,-4.6]];function Wg(s,t){if(t<=s[0][0])return s[0][1];let e=s.length;if(t>=s[e-1][0])return s[e-1][1];let i=0,n=e-1;for(;n-i>1;){let c=i+n>>1;s[c][0]<=t?i=c:n=c}let[r,o]=s[i],[a,l]=s[n];return o+(t-r)/(a-r)*(l-o)}function Ol(s){return Wg(Gg,s)}function Oh(s,t){let e=s+Ol(t);return Math.pow(10,-.4*(e-4.74))}function Bh(s,t){return Math.sqrt(s)/Math.pow(t/5772,2)}function zh(s,t=Se.V){return t===Se.WD?.6:t===Se.III||t===Se.II?Math.min(5,Math.max(.8,1.3+.1*Math.log10(Math.max(s,1)))):t===Se.I?Math.min(25,Math.max(5,6*Math.pow(Math.max(s,1)/1e4,.25))):s<.033?Math.pow(s/.23,1/2.3):s<16?Math.pow(s,1/4):s<1.4*Math.pow(2,3.5)*1e3?Math.pow(s/1.4,1/3.5):Math.pow(s/3200,1/1.1)*20}var Bl=[[-.0548755604162154,-.873437090234885,-.4838350155487132],[.4941094278755837,-.4448296299600112,.746982244497219],[-.8676661490190047,-.1980763734312015,.4559837761750669]];var kh=23.43928*Kt;function ha(s){let t=Math.cos(kh),e=Math.sin(kh);return[s[0],t*s[1]-e*s[2],e*s[1]+t*s[2]]}function zl(s){return s.getTime()/864e5+24405875e-1}function Hh(s){return new Date((s-24405875e-1)*864e5)}var _s=2451545;function Dn(s){let t=(h,f,p,v)=>{let g=(h-f)/(h<f?p:v);return Math.exp(-.5*g*g)},e=0,i=0,n=0,r=662607015e-42,o=299792458,a=1380649e-29;for(let h=380;h<=780;h+=5){let f=1.056*t(h,599.8,37.9,31)+.362*t(h,442,16,26.7)-.065*t(h,501.1,20.4,26.2),p=.821*t(h,568.8,46.9,40.5)+.286*t(h,530.9,16.3,31.1),v=1.217*t(h,437,11.8,36)+.681*t(h,459,26,13.8),g=h*1e-9,m=1/(g**5*(Math.exp(r*o/(g*a*s))-1));e+=f*m,i+=p*m,n+=v*m}e/=i,n/=i,i=1;let l=3.2406*e-1.5372*i-.4986*n,c=-.9689*e+1.8758*i+.0415*n,d=.0557*e-.204*i+1.057*n;l=Math.max(l,0),c=Math.max(c,0),d=Math.max(d,0);let u=.2126*l+.7152*c+.0722*d;return[l/u,c/u,d/u]}function qg(s,t){return t===Se.WD?"D":s>=3e4?"O":s>=1e4?"B":s>=7500?"A":s>=6e3?"F":s>=5200?"G":s>=3900?"K":"M"}function Vh(s,t,e){let i=Oh(s,t),n=Bh(i,t);e===Se.WD&&(n=.0125*Math.pow(.6/.6,-1/3)),n=Math.max(n,.005);let r=zh(i,e),o=qg(t,e);return{lumSun:i,radiusSun:n,radiusKm:n*695700,massSun:r,gm:r*13271244004194e-2,teff:t,letter:o,lc:e,absMag:s,color:Dn(t)}}function ua(s,t,e){let i=t.heliopause;if(e&&i.knownAu&&i.knownAu[e]!=null)return i.knownAu[e]*Ht;let n=i.windScale,r,o=i.windSpeedKmS.default,a=s.radiusSun;s.lc===Se.WD?r=n.whiteDwarf:s.lc===Se.I?(r=n.supergiant*Math.pow(Math.max(s.lumSun,1)/1e4,.9),o=i.windSpeedKmS.giant*3):s.lc===Se.III||s.lc===Se.II?(r=n.giant*Math.pow(Math.max(s.lumSun,1)/100,.6)*(a/10)**.5,o=i.windSpeedKmS.giant):s.letter==="O"||s.letter==="B"?(r=n[s.letter]*Math.pow(Math.max(s.lumSun,1)/1e3,s.letter==="O"?1.7:1.4),o=i.windSpeedKmS.hot):s.letter==="A"?(r=n.A*a*a,o=i.windSpeedKmS.hot*.4):r=(n[s.letter]??1)*a*a;let l=Math.sqrt(Math.max(r,1e-9)*(o/i.windSpeedKmS.default));return Math.min(i.maxAu,Math.max(i.minAu,i.sunAu*l))*Ht}function da(s,t,e=.3){return 278.5*Math.pow(s,.25)/Math.sqrt(t)*Math.pow(1-e,.25)}function qs(s,t){let e=Math.min(7200,Math.max(2600,t))-5780,i=(o,a,l,c,d)=>o+a*e+l*e*e+c*e**3+d*e**4,n=i(1.0512,13242e-8,15418e-12,-79895e-16,-18328e-19),r=i(.3438,58942e-9,16558e-13,-30045e-16,-52983e-20);return{inner:Math.sqrt(s/n),outer:Math.sqrt(s/r)}}var Un=4,fa=class{constructor(t,e){this.d=t,this.cfg=e,this.n=t.n,this.pos=t.pos,this.grid=new Map;for(let i=0;i<this.n;i++){let n=this._key(Math.floor(this.pos[i*3]/Un),Math.floor(this.pos[i*3+1]/Un),Math.floor(this.pos[i*3+2]/Un)),r=this.grid.get(n);r||this.grid.set(n,r=[]),r.push(i)}this._traits=new Map,this.sunIndex=0;for(let i=0;i<Math.min(this.n,4);i++)t.flags[i]&32&&(this.sunIndex=i)}_key(t,e,i){return`${t},${e},${i}`}within(t,e,i=[]){let n=Math.ceil(e/Un),r=Math.floor(t[0]/Un),o=Math.floor(t[1]/Un),a=Math.floor(t[2]/Un),l=e*e;for(let c=-n;c<=n;c++)for(let d=-n;d<=n;d++)for(let u=-n;u<=n;u++){let h=this.grid.get(this._key(r+c,o+d,a+u));if(h)for(let f of h){let p=this.pos[f*3]-t[0],v=this.pos[f*3+1]-t[1],g=this.pos[f*3+2]-t[2];p*p+v*v+g*g<=l&&i.push(f)}}return i}posOf(t){return[this.pos[t*3],this.pos[t*3+1],this.pos[t*3+2]]}distFromSun(t){return Math.hypot(this.pos[t*3],this.pos[t*3+1],this.pos[t*3+2])}traits(t){let e=this._traits.get(t);return e||(e=Vh(this.d.absMag[t],this.d.teff[t],this.d.lc[t]),this._traits.set(t,e)),e}info(t){return this.d.names.get(t)||null}isSun(t){return(this.d.flags[t]&32)!==0}hasKnownPlanets(t){return this.d.hosts.has(t)}host(t){return this.d.hosts.get(t)||null}search(t,e=60){if(t=t.toLowerCase().trim(),t.length<2)return[];if(!this._sIdx){this._sIdx=[];for(let[r,o]of this.d.names)this._sIdx.push([r,[o.name,o.desig,o.system,o.gj!=null?"gj "+o.gj:""].filter(Boolean).join("|").toLowerCase()])}let i=[],n=new Set;for(let[r,o]of this._sIdx)o.includes(t)&&(i.push(r),n.add(r));if(/^(hip\s*)?\d+$/.test(t)||"sol".startsWith(t)||"sun".startsWith(t)){let r=(t.match(/\d+/)||[""])[0];for(let o=0;o<this.n&&i.length<e*4;o++)n.has(o)||(r&&this.d.hip[o]&&String(this.d.hip[o]).startsWith(r)||this.isSun(o)&&("sol".startsWith(t)||"sun".startsWith(t)))&&i.push(o)}return i}designation(t){if(this.isSun(t))return"Sol";let e=this.info(t);return e&&e.desig?e.desig:this.d.hip[t]?`HIP ${this.d.hip[t]}`:`Star #${t}`}name(t){if(this.isSun(t))return"Sun";let e=this.info(t);return e&&e.name?e.name:this.designation(t)}apparentMag(t,e){let i=this.pos[t*3]-e[0],n=this.pos[t*3+1]-e[1],r=this.pos[t*3+2]-e[2],o=Math.max(Math.hypot(i,n,r),1e-7);return this.d.absMag[t]+5*Math.log10(o/10)}spectralText(t){let e=this.info(t);if(e&&e.sp){let n=/^(sd|d)?[OBAFGKM]\d?(\.\d)?\s?(Ia\+|Iab|Ia|Ib|III|II|IV|V|VI|I)?[a-z]*/.exec(e.sp);if(n&&n[0].length>=2&&!/\.\.\./.test(n[0]))return n[0]}let i=this.traits(t);return i.letter+(i.lc===Se.III?" giant":i.lc===Se.I?" supergiant":i.lc===Se.WD?" white dwarf":" dwarf")}systemsNear(t,e,i){let n=i*3/ca,r=this.within(t,e+n),o=i/ca,a=o*o,l=new Map(r.map(h=>[h,h])),c=h=>{for(;l.get(h)!==h;)l.set(h,l.get(l.get(h))),h=l.get(h);return h};for(let h=0;h<r.length;h++){let f=r[h];for(let p=h+1;p<r.length;p++){let v=r[p],g=this.pos[f*3]-this.pos[v*3],m=this.pos[f*3+1]-this.pos[v*3+1],x=this.pos[f*3+2]-this.pos[v*3+2];g*g+m*m+x*x<a&&l.set(c(f),c(v))}}let d=new Map;for(let h of r){let f=c(h),p=d.get(f);p||d.set(f,p=[]),p.push(h)}let u=[];for(let h of d.values()){h.sort((g,m)=>this.traits(m).lumSun-this.traits(g).lumSun||g-m);let f=h[0],p=this.posOf(f),v=Math.hypot(p[0]-t[0],p[1]-t[1],p[2]-t[2]);v>e||u.push({key:Math.min(...h),members:h,primary:f,name:this.systemName(h),distPc:v,centre:p})}return u.sort((h,f)=>h.distPc-f.distPc),u}systemName(t){for(let n of t){let r=this.info(n);if(r&&r.system)return r.system}let e=t[0],i=this.name(e);return t.length>1&&(i=i.replace(/\s+[AB]$/,"")),i}systemOf(t,e){let i=this.posOf(t);return this.systemsNear(i,e*2/ca+1e-6,e).find(r=>r.members.includes(t))||{key:t,members:[t],primary:t,name:this.name(t),distPc:0,centre:i}}heliopauseKm(t){let e=this.traits(t);return ua(e,this.cfg,this.name(t))}};var Be=Math.PI*2,Mt=(s,t,e)=>s<t?t:s>e?e:s;var hi=(s,t,e)=>{let i=Mt((e-s)/(t-s),0,1);return i*i*(3-2*i)};var Gh=(s,t)=>(s%t+t)%t;var Ks=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Ze=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Pe=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Je=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],je=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Jt=s=>Math.hypot(s[0],s[1],s[2]),fe=s=>{let t=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/t,s[1]/t,s[2]/t]},$s=(s,t,e)=>[s[0]+t[0]*e,s[1]+t[1]*e,s[2]+t[2]*e];function Ni(s){let t=Math.abs(s[0])<.9?[1,0,0]:[0,1,0];return fe(je(s,t))}function Ys(s,t,e){let i=Math.cos(e),n=Math.sin(e),r=Je(t,s)*(1-i),o=je(t,s);return[s[0]*i+o[0]*n+t[0]*r,s[1]*i+o[1]*n+t[1]*r,s[2]*i+o[2]*n+t[2]*r]}var bs=(s,t)=>{let e=new Array(9);for(let i=0;i<3;i++)for(let n=0;n<3;n++)e[i*3+n]=s[i*3]*t[n]+s[i*3+1]*t[3+n]+s[i*3+2]*t[6+n];return e},pa=(s,t)=>[s[0]*t[0]+s[1]*t[1]+s[2]*t[2],s[3]*t[0]+s[4]*t[1]+s[5]*t[2],s[6]*t[0]+s[7]*t[1]+s[8]*t[2]],Hl=s=>{let t=Math.cos(s),e=Math.sin(s);return[1,0,0,0,t,-e,0,e,t]},Zs=s=>{let t=Math.cos(s),e=Math.sin(s);return[t,-e,0,e,t,0,0,0,1]};function tn(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t>>>0}function Qe(s,t){let e=(s^2654435769)>>>0;return e=Math.imul(e^t+2135587861,2246822507)>>>0,e^=e>>>13,e=Math.imul(e,3266489909)>>>0,e^=e>>>16,e>>>0}function ti(s){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+(n-i)*e(),e.int=(i,n)=>Math.floor(i+(n-i+1)*e()),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e.normal=()=>{let i=0,n=0;for(;i===0;)i=e();return n=e(),Math.sqrt(-2*Math.log(i))*Math.cos(Be*n)},e.logUniform=(i,n)=>Math.exp(Math.log(i)+(Math.log(n)-Math.log(i))*e()),e.weighted=i=>{let n=0;for(let[,o]of i)n+=o;let r=e()*n;for(let[o,a]of i)if(r-=a,r<=0)return o;return i[i.length-1][0]},e}function Ie(s){let t=Math.abs(s);return t<1?`${(s*1e3).toFixed(t<.01?1:0)} m`:t<1e5?`${s.toFixed(t<100?1:0)} km`:t<149597870*.2?`${(s/1e6).toFixed(2)} M km`:t<94607e8*.1?`${(s/149597870).toFixed(t/149597870<10?2:1)} AU`:`${(s/94607304725808e-1).toFixed(t/946e10<10?3:2)} ly`}function ma(s){let t=299792.458,e=Math.abs(s);return e<.01?`${(s*1e3).toFixed(1)} m/s`:e<1e3?`${s.toFixed(e<10?2:1)} km/s`:e/t<1?`${Math.round(s).toLocaleString("en-US")} km/s`:`${(e/t).toLocaleString("en-US",{maximumFractionDigits:e/t<10?2:0})} c`}function ga(s){if(!isFinite(s))return"\u2014";let t=Math.abs(s);return t<90?`${t.toFixed(0)} s`:t<5400?`${Math.floor(t/60)} m ${String(Math.floor(t%60)).padStart(2,"0")} s`:t<172800?`${Math.floor(t/3600)} h ${String(Math.floor(t%3600/60)).padStart(2,"0")} m`:t<86400*400?`${(t/86400).toFixed(1)} d`:`${(t/31557600).toFixed(2)} y`}var Kg=9.80665,ui=class{constructor(t){Object.assign(this,{children:[],pole:[0,0,1],albedo:.3,fictional:!1,rings:null,atmosphere:null,look:null,info:""},t),this._jd=NaN,this._p=[0,0,0],this._vjd=NaN,this._v=[0,0,0],this._tmp=[0,0,0],t.parent&&t.parent.children.push(this),this.gravityMs2=this.gm?this.gm*1e9/(this.radiusKm*1e3)**2:0,this._spinAng=null}get isStar(){return this.kind==="star"}positionAt(t){if(this._jd===t)return this._p;let e=this._p;if(this.orbit){if(this.orbit.positionAt(t,e),this.parent){let i=this.parent.positionAt(t);e[0]+=i[0],e[1]+=i[1],e[2]+=i[2]}}else this.fixed?(e[0]=this.fixed[0],e[1]=this.fixed[1],e[2]=this.fixed[2]):e[0]=e[1]=e[2]=0;return this._jd=t,e}velocityAt(t){if(this._vjd===t)return this._v;let e=this._v;if(this.orbit){if(this.orbit.velocityAt(t,e),this.parent){let i=this.parent.velocityAt(t);e[0]+=i[0],e[1]+=i[1],e[2]+=i[2]}}else e[0]=e[1]=e[2]=0;return this._vjd=t,e}localAt(t,e=[0,0,0]){return this.orbit?this.orbit.positionAt(t,e):e[0]=e[1]=e[2]=0,e}get semiMajorKm(){return this.orbit&&this.orbit.a?this.orbit.a:0}get soiKm(){if(this._soi!==void 0)return this._soi;let t=1/0;return this.parent&&this.parent.gm&&this.gm&&this.semiMajorKm&&(t=this.semiMajorKm*Math.pow(this.gm/this.parent.gm,.4)),this.kind==="star"&&(t=1/0),this._soi=t,t}get hillKm(){return this.parent&&this.parent.gm&&this.semiMajorKm?this.semiMajorKm*Math.cbrt(this.gm/(3*this.parent.gm)):1/0}safeRadiusKm(t){if(this._safe!==void 0)return this._safe;let e=t.ship.safeOrbit,i;if(this.kind==="star")i=this.radiusKm*Math.max(e.starMinRadii,1+e.baseFraction);else{let n=this.gravityMs2/Kg,r=Math.max(e.minAltitudeKm,this.radiusKm*(e.baseFraction+e.gravityLogFactor*Math.log(1+n)));if(i=this.radiusKm+r,this.rings){let o=Math.max(...this.rings.map(a=>a.r1));i=Math.max(i,this.radiusKm*1+r)}}return this._safe=i,i}axesAt(t){let e=this.pole,i;if(this.spin&&this.spin.sync&&this.parent){let r=this.localAt(t,this._tmp),o=fe(r),a=Je(o,e);i=fe([-(o[0]-e[0]*a),-(o[1]-e[1]*a),-(o[2]-e[2]*a)]),isFinite(i[0])||(i=Ni(e))}else{let r=[-e[1],e[0],0],o=Math.hypot(r[0],r[1]);r=o>1e-9?[r[0]/o,r[1]/o,0]:[1,0,0];let a=this.spinAngle(t);i=Ys(r,e,a)}let n=je(e,i);return{x:i,y:n,z:e}}spinAngle(t){if(this.spinOverride!==void 0)return this.spinOverride;let e=this.spin;return e?(e.w0+e.rateDegDay*(t-2451545))*Kt:0}},Ms=class{constructor(t){Object.assign(this,{bodies:[],byId:new Map,stars:[],belts:[],fictional:!1,kind:"procedural"},t)}add(t){return t.system=this,this.bodies.push(t),this.byId.set(t.id,t),t.kind==="star"&&this.stars.push(t),t.kind==="belt"&&this.belts.push(t),t}get(t){return this.byId.get(t)||null}get primary(){return this.stars[0]}get targets(){return this.bodies.filter(t=>t.kind!=="belt")}lightSources(t,e){let i=[];for(let n of this.stars){let r=n.positionAt(e),o=r[0]-t[0],a=r[1]-t[1],l=r[2]-t[2],c=Math.hypot(o,a,l)||1,d=c/Ht;i.push({star:n,dir:[o/c,a/c,l/c],dist:c,irradiance:n.lumSun/(d*d)})}return i}};function Wh(s,t){let e=s*Kt,i=t*Kt;return[Math.cos(i)*Math.cos(e),Math.cos(i)*Math.sin(e),Math.sin(i)]}function Vl(s,t){s=Gh(s+Math.PI,Be)-Math.PI;let e=t<.8?s+t*Math.sin(s):Math.PI*Math.sign(s||1);for(let i=0;i<30;i++){let n=e-t*Math.sin(e)-s,r=1-t*Math.cos(e),o=n/r;if(e-=o,Math.abs(o)<1e-13)break}return e}var xn=class{constructor(t){this.a=t.a,this.e=t.e,this.inc=t.inc*Kt,this.node=t.node*Kt,this.argp=t.argp*Kt,this.M0=t.M0*Kt,this.epochJD=t.epochJD,this.n=t.nDegPerDay*Kt/86400,this.frame=t.frame||"icrs",this.R=bs(Zs(this.node),bs(Hl(this.inc),Zs(this.argp))),t.plane&&(this.R=bs(t.plane,this.R)),this.periodSec=Be/Math.abs(this.n),this.retro=this.n<0}positionAt(t,e){let i=this.M0+this.n*(t-this.epochJD)*86400,n=Vl(i,this.e),r=Math.cos(n),o=Math.sin(n),a=this.a*Math.sqrt(1-this.e*this.e),l=pa(this.R,[this.a*(r-this.e),a*o,0]);return this.frame==="ecliptic"&&(l=ha(l)),e[0]=l[0],e[1]=l[1],e[2]=l[2],e}velocityAt(t,e){let i=this.M0+this.n*(t-this.epochJD)*86400,n=Vl(i,this.e),r=Math.cos(n),o=Math.sin(n),a=this.n/(1-this.e*r),l=this.a*Math.sqrt(1-this.e*this.e),c=pa(this.R,[-this.a*o*a,l*r*a,0]);return this.frame==="ecliptic"&&(c=ha(c)),e[0]=c[0],e[1]=c[1],e[2]=c[2],e}},va=class{constructor(t,e){this.t1=t.table1[e],this.t2=t.table2a&&t.table2a[e],this.t2b=t.table2b&&t.table2b[e],this.key=e,this.periodSec=0,this.a=this.t1.a[0]*Ht,this._setPeriod()}_setPeriod(){this.periodSec=36525*360/Math.abs(this.t1.L[1])*86400}_elements(t){let e=(t-_s)/36525,i=t>23784965e-1&&t<24698075e-1,n=i||!this.t2?this.t1:this.t2,r=a=>n[a][0]+n[a][1]*e,o=r("L")-r("varpi");if(!i&&this.t2b){let{b:a,c:l,s:c,f:d}=this.t2b;o+=a*e*e+l*Math.cos(d*Kt*e)+c*Math.sin(d*Kt*e)}return{a:r("a")*Ht,e:r("e"),I:r("I")*Kt,Om:r("Omega")*Kt,w:(r("varpi")-r("Omega"))*Kt,M:o*Kt}}positionAt(t,e){let i=this._elements(t),n=Vl(i.M,i.e),r=i.a*(Math.cos(n)-i.e),o=i.a*Math.sqrt(1-i.e*i.e)*Math.sin(n),a=bs(Zs(i.Om),bs(Hl(i.I),Zs(i.w))),l=ha(pa(a,[r,o,0]));return e[0]=l[0],e[1]=l[1],e[2]=l[2],e}velocityAt(t,e){let i=.041666666666666664,n=[0,0,0],r=[0,0,0];this.positionAt(t-i,n),this.positionAt(t+i,r);let o=2*i*86400;return e[0]=(r[0]-n[0])/o,e[1]=(r[1]-n[1])/o,e[2]=(r[2]-n[2])/o,e}};var tt=(s,t,e)=>[s/255,t/255,e/255],$g={hKm:8.5,topKm:100,rayleigh:[.0058,.0135,.0331],mie:.003,mieG:.76,mieH:1.8,tint:[1,1,1],strength:1},Xh={sun:{look:{kind:"star",tex:"sun"},info:"G2V star \xB7 5772 K"},mercury:{look:{kind:"tex",tex:"mercury",bump:.35,crater:.9,spec:.05},info:"Real global map (Solar System Scope / NASA)"},venus:{look:{kind:"tex",tex:"venus_atmosphere",bump:0,spec:0},atmosphere:{hKm:15,topKm:70,rayleigh:[.001,.0018,.0035],mie:.06,mieG:.4,mieH:12,tint:[1,.92,.72],strength:1.6,opaque:!0},info:"Cloud-top map; the surface is hidden under ~70 km of cloud"},earth:{look:{kind:"tex",tex:"earth_daymap",night:"earth_nightmap",clouds:"earth_clouds",ocean:!0,bump:.15,spec:.55},atmosphere:{...$g},info:"Real global maps; day/night follows the actual date"},moon:{look:{kind:"tex",tex:"moon",bump:.45,crater:1,spec:0},info:"Real global map"},mars:{look:{kind:"tex",tex:"mars",bump:.35,crater:.6,spec:0},atmosphere:{hKm:11,topKm:80,rayleigh:[2e-5,4e-5,9e-5],mie:14e-5,mieG:.7,mieH:11,tint:[1,.72,.5],strength:1},info:"Real global map"},jupiter:{look:{kind:"tex",tex:"jupiter",gas:!0,spec:0},atmosphere:{hKm:27,topKm:280,rayleigh:[.0026,.0048,.0095],mie:5e-4,mieG:.5,mieH:25,tint:[1,.95,.85],strength:.9},info:"Real global map"},saturn:{look:{kind:"tex",tex:"saturn",gas:!0,spec:0,ring:"saturn_ring_alpha"},atmosphere:{hKm:60,topKm:500,rayleigh:[.002,.0038,.0075],mie:4e-4,mieG:.5,mieH:50,tint:[1,.92,.75],strength:.9},info:"Real global map; rings from published boundaries + Cassini-era profile"},uranus:{look:{kind:"tex",tex:"uranus",gas:!0,spec:0},atmosphere:{hKm:27,topKm:300,rayleigh:[.005,.0032,.002],mie:5e-4,mieG:.5,mieH:25,tint:[.7,.95,1],strength:1},info:"Real global map"},neptune:{look:{kind:"tex",tex:"neptune",gas:!0,spec:0},atmosphere:{hKm:20,topKm:280,rayleigh:[.0025,.0038,.006],mie:5e-4,mieG:.5,mieH:20,tint:[.55,.75,1],strength:1.2},info:"Real global map"},ceres:{look:{kind:"proc",style:"rock",colors:[tt(92,88,84),tt(124,120,114),tt(190,188,182),tt(60,58,56)],p:{crater:.9,bump:.7,spot:.15}},info:"Procedural surface (no global map)"},pluto:{look:{kind:"proc",style:"pluto",colors:[tt(150,104,76),tt(205,170,140),tt(240,228,215),tt(92,60,46)],p:{crater:.3,bump:.35,ice:.5}},atmosphere:{hKm:50,topKm:250,rayleigh:[3e-6,5e-6,12e-6],mie:4e-5,mieG:.8,mieH:50,tint:[.7,.8,1],strength:1},info:"Procedural surface in Pluto-like colours (no global map)"},haumea:{look:{kind:"proc",style:"ice",colors:[tt(200,205,210),tt(235,238,240),tt(120,90,80),tt(170,175,185)],p:{crater:.2,bump:.2,ice:.9}},info:"Procedural surface"},makemake:{look:{kind:"proc",style:"rock",colors:[tt(160,90,62),tt(196,130,96),tt(226,190,160),tt(110,60,44)],p:{crater:.15,bump:.25,ice:.3}},info:"Procedural surface"},eris:{look:{kind:"proc",style:"ice",colors:[tt(225,228,232),tt(246,247,248),tt(200,195,190),tt(180,186,195)],p:{crater:.1,bump:.1,ice:1}},info:"Procedural surface"},phobos:{look:{kind:"proc",style:"rock",colors:[tt(78,72,68),tt(104,96,90),tt(130,120,112),tt(50,46,44)],p:{crater:1,bump:1}},info:"Procedural surface"},deimos:{look:{kind:"proc",style:"rock",colors:[tt(92,84,76),tt(120,110,100),tt(146,136,124),tt(64,58,52)],p:{crater:.6,bump:.8}},info:"Procedural surface"},io:{look:{kind:"proc",style:"io",colors:[tt(196,180,112),tt(226,216,168),tt(184,98,50),tt(36,32,30)],p:{crater:0,bump:.25,spot:.9}},info:"Procedural surface in Io colours (sulfur plains, dark calderas)"},europa:{look:{kind:"proc",style:"europa",colors:[tt(226,220,205),tt(246,244,238),tt(150,100,72),tt(196,180,150)],p:{crater:.03,bump:.12,ice:1,stripe:.9}},info:"Procedural surface (ice shell with reddish linea)"},ganymede:{look:{kind:"proc",style:"ganymede",colors:[tt(104,94,84),tt(150,142,132),tt(210,208,202),tt(70,64,58)],p:{crater:.7,bump:.55,ice:.6,stripe:.4}},info:"Procedural surface (dark ancient terrain + bright grooved terrain)"},callisto:{look:{kind:"proc",style:"rock",colors:[tt(70,60,52),tt(98,86,74),tt(190,188,184),tt(44,38,34)],p:{crater:1,bump:.8,ice:.15}},info:"Procedural surface (saturated cratering)"},mimas:{look:{kind:"proc",style:"ice",colors:[tt(150,152,154),tt(182,184,186),tt(208,210,212),tt(110,112,114)],p:{crater:1,bump:.8,bigCrater:1}},info:"Procedural surface (with a Herschel-like giant crater)"},enceladus:{look:{kind:"proc",style:"ice",colors:[tt(238,242,246),tt(252,253,254),tt(214,224,236),tt(190,205,222)],p:{crater:.25,bump:.2,ice:1,stripe:.6}},info:"Procedural surface (very bright ice)"},tethys:{look:{kind:"proc",style:"ice",colors:[tt(190,192,194),tt(220,222,224),tt(238,240,242),tt(150,152,154)],p:{crater:.8,bump:.6}},info:"Procedural surface"},dione:{look:{kind:"proc",style:"ice",colors:[tt(184,186,188),tt(214,216,218),tt(236,238,240),tt(140,142,144)],p:{crater:.7,bump:.55,stripe:.3}},info:"Procedural surface"},rhea:{look:{kind:"proc",style:"ice",colors:[tt(176,178,180),tt(206,208,210),tt(230,232,234),tt(130,132,134)],p:{crater:.95,bump:.7}},info:"Procedural surface"},iapetus:{look:{kind:"proc",style:"iapetus",colors:[tt(38,30,26),tt(70,60,54),tt(226,226,224),tt(190,190,188)],p:{crater:.8,bump:.6}},info:"Procedural surface (two-tone: dark leading hemisphere)"},titan:{look:{kind:"proc",style:"haze",colors:[tt(196,128,52),tt(220,160,78),tt(168,100,40),tt(120,70,30)],p:{bump:0,bands:.15}},atmosphere:{hKm:40,topKm:400,rayleigh:[.003,.006,.014],mie:.04,mieG:.55,mieH:45,tint:[1,.62,.22],strength:1.5,opaque:!0},info:"Thick orange haze (surface not visible), procedural shading"},miranda:{look:{kind:"proc",style:"ice",colors:[tt(150,150,152),tt(180,180,182),tt(206,206,208),tt(104,104,106)],p:{crater:.6,bump:.9,stripe:.5}},info:"Procedural surface"},ariel:{look:{kind:"proc",style:"ice",colors:[tt(160,160,160),tt(190,190,190),tt(214,214,214),tt(120,120,120)],p:{crater:.5,bump:.6,stripe:.5}},info:"Procedural surface"},umbriel:{look:{kind:"proc",style:"rock",colors:[tt(78,78,80),tt(98,98,100),tt(150,150,152),tt(54,54,56)],p:{crater:.9,bump:.6}},info:"Procedural surface"},titania:{look:{kind:"proc",style:"ice",colors:[tt(128,120,112),tt(158,150,142),tt(190,184,176),tt(92,86,80)],p:{crater:.7,bump:.6,stripe:.25}},info:"Procedural surface"},oberon:{look:{kind:"proc",style:"rock",colors:[tt(112,102,96),tt(140,130,122),tt(186,178,170),tt(78,70,66)],p:{crater:.9,bump:.7}},info:"Procedural surface"},triton:{look:{kind:"proc",style:"triton",colors:[tt(214,186,170),tt(238,220,206),tt(246,238,232),tt(150,118,104)],p:{crater:.1,bump:.3,ice:.7}},atmosphere:{hKm:8,topKm:800,rayleigh:[1e-6,2e-6,5e-6],mie:3e-6,mieG:.8,mieH:10,tint:[.8,.85,1],strength:.6},info:"Procedural surface (pink-cream nitrogen frost)"},proteus:{look:{kind:"proc",style:"rock",colors:[tt(70,68,66),tt(92,90,88),tt(120,118,114),tt(46,44,42)],p:{crater:1,bump:.9}},info:"Procedural surface"},charon:{look:{kind:"proc",style:"charon",colors:[tt(150,146,142),tt(184,180,176),tt(120,70,56),tt(210,208,204)],p:{crater:.4,bump:.4}},info:"Procedural surface (grey with a reddish polar cap)"}};function Kh(s,t,e){let i=new Ms({id:"sol",name:"Solar System",kind:"solar",fictional:!1,originPc:[0,0,0],starIndices:[s.sunIndex]}),n=new Map;for(let a of t.bodies){let l=Xh[a.id]||{},c={id:a.id,name:a.name,kind:a.kind,radiusKm:a.R,gm:a.GM,albedo:a.albedo??l.albedo??.3,pole:Wh(a.pole[0],a.pole[1]),look:l.look||null,atmosphere:l.atmosphere||null,rings:a.rings?a.rings.map(f=>({r0:f.r0,r1:f.r1,tau:f.tau,name:f.name})):null,info:l.info||"",source:"NASA/JPL",dataSrc:a.src};if(a.rings&&(c.rings=a.rings.map(f=>({r0:f.r0,r1:f.r1,tau:f.tau,name:f.name}))),a.id==="sun"){let f=new ui({...c,kind:"star",teff:5772,lumSun:1,lumV:1,absMagV:4.83,massSun:1,letter:"G",lc:0,color:[1.04,.98,.9],fixed:[0,0,0],traits:null,spin:qh(a),limb:.6,surfaceRadiance:Math.pow(10,-12.628)*Math.pow(30856775814913675e-2/a.R,2)});i.add(f),n.set("sun",f);continue}let d=a.parent==="sun"?n.get("sun"):n.get(a.parent);if(!d){console.warn("missing parent for",a.id);continue}let u;a.orbit.type==="jpl-mean"?u=new va(t.elements,a.orbit.key):u=new xn({a:a.orbit.a,e:a.orbit.e,inc:a.orbit.i,node:a.orbit.node,argp:a.orbit.argp,M0:a.orbit.M,epochJD:a.orbit.epochJD,nDegPerDay:a.orbit.nDegPerDay,frame:"ecliptic"});let h=new ui({...c,parent:d,orbit:u,spin:a.synchronous?{sync:!0}:qh(a),synchronous:!!a.synchronous});i.add(h),n.set(a.id,h)}let r={star:0,planet:1,dwarf:2,moon:3};i.bodies.sort((a,l)=>r[a.kind]-r[l.kind]||(a.orbit?.a??0)-(l.orbit?.a??0)),i.add(new ui({id:"asteroid-belt",name:"Main asteroid belt",kind:"belt",parent:n.get("sun"),radiusKm:1,belt:{innerAu:2.1,outerAu:3.3,peakAu:2.7,thicknessAu:.35,count:26e3,tint:[.62,.56,.5],note:"representative particles, not individual catalogued asteroids"},info:"Representative belt"})),i.add(new ui({id:"kuiper-belt",name:"Kuiper belt",kind:"belt",parent:n.get("sun"),radiusKm:1,belt:{innerAu:38,outerAu:52,peakAu:43,thicknessAu:5,count:18e3,tint:[.55,.5,.48],note:"representative particles, not individual catalogued objects"},info:"Representative belt"}));let o=n.get("sun");return o.lumSun=1,o.massSun=1,o.traitsLike={teff:5772,lumSun:1,radiusKm:o.radiusKm,letter:"G",massSun:1,lc:0},i.hz={inner:.95,outer:1.67},i.frostAu=2.7,i}function qh(s){if(s.w)return{w0:s.w[0],rateDegDay:s.w[1]};let t=s.rotH?s.rotH:24;return{w0:0,rateDegDay:360/Math.abs(t)*24*Math.sign(t)}}var Gl=398600.435436,Fn=6371;var ot=(s,t,e)=>[s/255,t/255,e/255];function ya(s){if(s<2.04)return Math.pow(s,.279);let t=.808*Math.pow(s,.589),e=11.2*Math.pow(s/318,-.04);return Math.min(t,e)}function Yh(s){return s<1.2?Math.pow(s,1/.279):s<8?Math.pow(s/.808,1/.589):318*Math.pow(Math.max(s,8)/11.2,1.5)}function Zh(s,t){return t>=8||s>=100?"gas":t>=3.2||s>=17?"ice":t>=1.7||s>=5.5?"subneptune":s<.02?"dwarf":"rocky"}var xa={desert:[ot(176,138,96),ot(210,178,128),ot(236,214,170),ot(120,88,62)],rust:[ot(150,82,52),ot(190,112,72),ot(224,160,116),ot(96,52,36)],grey:[ot(104,100,96),ot(140,136,130),ot(176,172,166),ot(66,64,62)],basalt:[ot(58,52,50),ot(86,78,74),ot(124,112,104),ot(32,28,28)],olive:[ot(98,96,62),ot(132,126,84),ot(170,160,112),ot(64,62,40)],violet:[ot(92,78,96),ot(126,108,130),ot(166,148,168),ot(58,48,62)],ice:[ot(206,220,232),ot(236,244,250),ot(255,255,255),ot(150,176,204)],lava:[ot(38,28,26),ot(66,44,38),ot(150,56,20),ot(255,140,40)],venus:[ot(210,170,110),ot(232,204,150),ot(246,232,190),ot(180,130,80)]};function Wl(s,t){let e=ti(Qe(t.seed,24301)),i={look:null,atmosphere:null,rings:null,label:""},n=t.teq,r=e()*100;if(s==="gas"||s==="ice"){let p,v,g,m,x,_=!1;s==="gas"?n>1500?(p=[ot(40,30,40),ot(110,50,70),ot(190,80,60),ot(30,22,34)],v="ultra-hot gas giant",g=[1,.5,.4],m=.25,x=.5):n>900?(p=[ot(30,34,52),ot(52,62,96),ot(86,100,150),ot(20,24,36)],v="hot gas giant",g=[.5,.65,1],m=.3,x=.45):n>400?(p=Yg(e,[[182,150,120],[222,196,160],[140,110,90],[244,232,210]]),v="warm gas giant",g=[.9,.9,1],m=.6,x=.6):n>160?(p=e()<.5?[ot(176,130,96),ot(222,190,150),ot(120,86,66),ot(242,228,206)]:[ot(190,160,120),ot(226,204,164),ot(150,122,92),ot(246,238,216)],v="cool gas giant",g=[1,.95,.85],m=.85,x=.7):(p=[ot(196,176,136),ot(224,208,170),ot(168,148,116),ot(240,232,208)],v="cold gas giant",g=[1,.93,.78],m=.55,x=.4):(p=n>400?[ot(70,110,170),ot(100,150,205),ot(150,190,230),ot(50,80,130)]:e()<.5?[ot(120,190,205),ot(160,218,228),ot(196,238,244),ot(90,150,170)]:[ot(50,80,190),ot(70,110,215),ot(120,156,235),ot(36,56,140)],v="ice giant",g=[.7,.85,1],m=.18,x=.35),i.look={kind:"proc",style:"gas",colors:p,p:{bands:m,turb:x,spot:e()<.5?.8:.2,seed:r}},i.atmosphere={hKm:24+e()*40,topKm:300,rayleigh:[Math.max(.002,.006*(1.1-g[0]*.6)),.0045,.0065*(.5+g[2]*.7)],mie:5e-4,mieG:.5,mieH:25,tint:g,strength:1},i.label=v;let y=t.ringChance??.18;return e()<y&&n<900&&(i.rings=Zg(e,s)),i}let o=n>700,a=n>330,l=n>235,c=n>120,d=t.mE>3.5||t.mE>.55&&e()<.4;if(s==="subneptune"){let p=o?[ot(120,90,80),ot(170,130,110),ot(210,180,160),ot(80,60,56)]:e()<.5?[ot(170,190,200),ot(200,216,224),ot(226,236,240),ot(130,154,168)]:[ot(190,176,150),ot(220,206,180),ot(238,228,206),ot(150,136,112)];return i.look={kind:"proc",style:"gas",colors:p,p:{bands:.12,turb:.3,spot:.1,seed:r}},i.atmosphere={hKm:30,topKm:220,rayleigh:[.0025,.0045,.008],mie:.001,mieG:.5,mieH:20,tint:[.9,.95,1],strength:1},i.label=o?"hot sub-Neptune":"sub-Neptune / mini-Neptune",i}if(s==="dwarf")return i.look={kind:"proc",style:e()<.5?"rock":"ice",colors:$h(xa[c?e()<.5?"ice":"rust":"grey"],e),p:{crater:.4+e()*.4,bump:.5,ice:c?.8:.1}},i.label=c?"icy dwarf planet":"rocky dwarf planet",i;if(o&&n>1200)return i.look={kind:"proc",style:"lava",colors:xa.lava,p:{crater:.1,bump:.5,lava:1,seed:r}},i.label="molten lava world",d&&(i.atmosphere={hKm:12,topKm:60,rayleigh:[.003,.003,.004],mie:.01,mieG:.6,mieH:10,tint:[1,.55,.3],strength:.6}),i;if(t.inHz&&t.mE>.4&&t.mE<4&&e()<.62){let p=.45+e()*.4;return i.look={kind:"proc",style:"ocean",colors:[ot(18,52,110),ot(54,110,66),ot(160,138,96),ot(240,244,248)],p:{ocean:p,cloud:.45+e()*.3,ice:.25+e()*.4,bump:.15,seed:r,spec:.6}},i.atmosphere={hKm:8.5,topKm:100,rayleigh:[.0058,.0135,.0331],mie:.003,mieG:.76,mieH:1.8,tint:[1,1,1],strength:1},i.label="temperate ocean-continent world",i}let u;o?u=e()<.6?"basalt":"venus":a?u=e()<.5?"venus":"desert":l?u="desert":c?u=e()<.55?"rust":"grey":u="ice",!o&&!c&&e()<.3&&(u=["olive","violet","grey","rust"][Math.floor(e()*4)]);let h=$h(xa[u],e);if(d&&a&&t.mE>.5&&(u==="venus"||e()<.4))return i.look={kind:"proc",style:"gas",colors:xa.venus,p:{bands:.1,turb:.5,spot:0,seed:r}},i.atmosphere={hKm:15,topKm:70,rayleigh:[.001,.0018,.0035],mie:.06,mieG:.4,mieH:12,tint:[1,.92,.72],strength:1.5,opaque:!0},i.label="cloud-wrapped greenhouse world",i;if(i.look={kind:"proc",style:u==="ice"?"ice":"rock",colors:h,p:{crater:d?.35:.8,bump:d?.5:.8,ice:u==="ice"?.9:c?.35:0,seed:r}},d&&t.mE>.25){let p=Mt(t.mE/1.5,.15,1.6);i.atmosphere={hKm:9,topKm:90,rayleigh:[.0058*p,.0135*p,.0331*p],mie:.002*p,mieG:.7,mieH:3,tint:u==="rust"?[1,.75,.55]:[1,1,1],strength:.8}}return i.label={desert:"arid desert world",rust:"cold rust-red world",grey:"airless rocky world",basalt:"scorched basalt world",olive:"olive-grey rocky world",violet:"violet-grey rocky world",ice:"frozen ice world",venus:"hot dry world"}[u]+(i.atmosphere?" with atmosphere":""),i}function Yg(s,t){return t.map(([e,i,n])=>ot(Mt(e+(s()-.5)*36,0,255),Mt(i+(s()-.5)*30,0,255),Mt(n+(s()-.5)*30,0,255)))}function $h(s,t){let e=.9+t()*.2,i=(t()-.5)*.06,n=(t()-.5)*.06;return s.map(([r,o,a])=>[Mt(r*e+i,0,1),Mt(o*e,0,1),Mt(a*e+n,0,1)])}function Zg(s,t){let e=1.35+s()*.5,i=e+.35+s()*.9,n=s()<.4;return[{r0:e,r1:e+(i-e)*.35,tau:.15+s()*.2,relative:!0},{r0:e+(i-e)*.4,r1:i,tau:n?.1:.6+s()*.5,relative:!0}]}var Jg=66743e-24,jg=317.83;function Qg(s,t,e,i,n){let r=e.letter==="M"?.12:e.letter==="K"?.6:1,o=e.lc===Se.WD,a=[];return s<.5?(a.push(["rocky",.62],["subneptune",n?.38:.26]),!n&&(e.letter==="G"||e.letter==="F")&&s>.04&&a.push(["gas",.03])):s<1.6?a.push(["rocky",.34],["subneptune",.28],["gas",.3*i.gasGiantChanceBeyondFrost*r],["ice",.12]):a.push(["gas",i.gasGiantChanceBeyondFrost*r],["ice",i.iceGiantChance*(e.letter==="M"?.7:1)],["dwarf",.22],["subneptune",.1],["rocky",.08]),t.weighted(a)}function tv(s,t,e,i){switch(s){case"rocky":return t()<.28?t.logUniform(1.4,7):t.logUniform(.05,1.6);case"subneptune":return t.logUniform(4.5,18);case"ice":return t.logUniform(12,36);case"gas":return t.logUniform(.18,4.5)*jg;case"dwarf":return t.logUniform(4e-4,.018);default:return 1}}function ev(s,t,e,i,n){let r=(e+i)*30035e-10/n,o=Math.cbrt(r/3)*.5*(s+t);return(t-s)/o}function Jh(s,t,e,i){let n=s.lumSun,r=s.massSun,o=s.radiusKm/Ht,a=e.frostLineAuAtSolarLum*Math.sqrt(n),l=qs(n,s.teff),c=s.lc===Se.III||s.lc===Se.II||s.lc===Se.I,d=s.lc===Se.WD,u=Math.max(.011,.034*Math.sqrt(n)*.8,3.5*o),h=Math.min(i,38*Math.pow(Math.max(r,.08),.75)+1.5);c&&(h=Math.min(h,i));let f=s.letter==="M"?t()<e.mDwarfCompactProbability:t()<.25,p;d?p=t.int(0,2):c||s.letter==="O"||s.letter==="B"?p=t.int(0,3):s.letter==="M"?p=f?t.int(3,7):t.int(1,4):p=t.int(e.planetCount.min,e.planetCount.max);let v=c||d?Math.max(u,1.5+.8*o):u,g=[],m=f?v*t.range(1.15,2.4):t.logUniform(v*1.4,Math.max(v*4,Math.min(1.2*l.inner,h*.3)));m=Math.max(m,v);for(let E=0;E<p&&!(m>h);E++){let A=Qg(m/a,t,s,e,f),T=tv(A,t,m,s);if(g.length){let S=g[g.length-1],M=0;for(;ev(S.a,m,S.mE,T,r)<e.spacing.hillSpacingMin&&M++<200;)m*=1.06;if(m>h)break}g.push({a:m,cls:A,mE:T});let C=f?t.range(1.25,2):t.range(e.spacing.periodRatioMin,e.spacing.periodRatioMax);m*=Math.pow(C,2/3)*(A==="gas"?t.range(1.15,1.6):1)}let x=[],_=g.find(E=>E.cls==="gas"&&E.a>.8*a);if(_&&t()<e.beltChance&&!f){let E=_.a/t.range(2.3,3.1),A=E*.82,T=E*1.28;for(let C=g.length-1;C>=0;C--)g[C].a>A*.92&&g[C].a<T*1.08&&g.splice(C,1);E>u*2&&E<a*1.3&&x.push({kind:"asteroid",inner:A,outer:T,peak:E})}let y=g[g.length-1];if(y&&t()<e.kuiperBeltChance&&y.a*1.7<i){let E=y.a*t.range(1.7,2.6);E<i&&x.push({kind:"kuiper",inner:E*.78,outer:E*1.3,peak:E})}return{planets:g,belts:x,hz:l,frostAu:a,compact:f}}function jh(s,t,e,i,n,r,o){let a=[],l=0;if(s.cls==="gas"||s.cls==="ice"?l=t.int(e.moonsPerGiant[0],e.moonsPerGiant[1]):s.cls==="rocky"&&t()<e.moonChanceTerrestrial&&s.mE>.2&&(l=1),!l)return a;let c=n*(s.cls==="rocky"?t.range(12,60):t.range(3,7)),d=s.a>i*.8;for(let u=0;u<l&&!(c>o*.33);u++){let h=s.cls==="rocky"?n*.3:2800,f=Mt(t.logUniform(120,h),80,h),p=d?t.range(1.1,2.4):t.range(2.8,3.6),v=4/3*Math.PI*Math.pow(f*1e3,3)*p*1e3;a.push({aKm:c,rKm:f,gm:Jg*v,rho:p,iced:d,volcanic:!d&&s.cls!=="rocky"&&u===0&&t()<.4}),c*=t.range(1.45,2.3)}return a}var _a=13271244004194e-2,iv=["I","II","III","IV","V","VI","VII","VIII","IX","X"],nv="bcdefghijklmnop";function Qh(s,t,e){let i=s.d.hip[t],n=i?`HIP${i}`:`P${Math.round(s.pos[t*3]*100)},${Math.round(s.pos[t*3+1]*100)},${Math.round(s.pos[t*3+2]*100)}`;return Qe(e.sim.seed>>>0,tn(n))}function tu(s){let t=s.range(-1,1),e=s.range(0,Be),i=Math.sqrt(1-t*t),n=[i*Math.cos(e),i*Math.sin(e),t],r=Ni(n),o=je(n,r);return[r[0],o[0],n[0],r[1],o[1],n[1],r[2],o[2],n[2]]}function sv(s,t,e,i,n,r){let o=s.traits(t),{teff:a,lumSun:l,radiusKm:c,massSun:d}=o,u="";n&&(n.teff||n.rad||n.mass)&&(n.teff&&(a=n.teff),n.rad&&(c=n.rad*695700),n.mass&&(d=n.mass),n.logL!=null?l=Math.pow(10,n.logL):n.rad&&n.teff&&(l=n.rad*n.rad*Math.pow(n.teff/5772,4)),u=" (stellar parameters from NASA Exoplanet Archive)");let h=ti(Qe(Qh(s,t,i),77)),f=s.info(t),p=s.d.absMag[t];n&&(n.teff||n.rad)&&(p=4.74-2.5*Math.log10(l)-Ol(a));let v=Math.pow(10,-.4*(p-4.83)),g=Math.pow(10,-.4*(p+26.74))*Math.pow(3085677581491367e-2*10/c,2);return new ui({id:`star-${t}`,name:s.name(t),kind:"star",radiusKm:c,gm:d*_a,teff:a,lumSun:l,massSun:d,lc:o.lc,letter:o.letter,color:Dn(a),fixed:e,catalogIndex:t,absMagV:p,lumV:v,surfaceRadiance:g,limb:a>6500?.45:a>4500?.6:.7,pole:fe([h.range(-1,1),h.range(-1,1),h.range(-1,1)]),spin:{w0:h.range(0,360),rateDegDay:360/h.range(3,30)},look:{kind:"star"},info:`${s.spectralText(t)} \xB7 ${Math.round(a)} K \xB7 ${l>=100?l.toFixed(0):l>=1?l.toFixed(1):l.toPrecision(2)} L\u2609${u}`,source:"catalogue",designation:s.designation(t),isPrimary:r})}function eu(s,t,e){if(e)return{sync:!0};let i=t==="gas"||t==="ice"?s.range(8,20):s.range(8,60);return{w0:s.range(0,360),rateDegDay:360/i*24*(s()<.93?1:-1)}}function iu(s,t,e){let i=s.range(0,e)*Kt,n=Ni(t),r=Ys(t,n,i);return Ys(r,t,s.range(0,Be))}function nu(s,t,e){let i=t.primary,n=s.posOf(i),r=new Ms({id:`star:${t.key}`,name:t.name,kind:"procedural",originPc:n,starIndices:t.members.slice(),catalogKey:t.key}),o=[];t.members.forEach((u,h)=>{let f=s.posOf(u),p=[(f[0]-n[0])*ne,(f[1]-n[1])*ne,(f[2]-n[2])*ne],v=sv(s,u,p,e,s.host(u),h===0);r.add(v),o.push(v)}),o.length>1&&o.forEach((u,h)=>{u.name=`${t.name} ${String.fromCharCode(65+h)}`});let a=o[0];if(r.heliopauseKm=s.heliopauseKm(i),o.length>1){let u=0;for(let h of o){let f=ua({lumSun:h.lumSun,radiusSun:h.radiusKm/695700,teff:h.teff,letter:h.letter,lc:h.lc},e,h.name);u+=f*f}r.heliopauseKm=Math.sqrt(u)}let l=qs(a.lumSun,a.teff);r.hz=l,r.frostAu=e.procgen.frostLineAuAtSolarLum*Math.sqrt(a.lumSun),r.hasKnownPlanets=!1,r.hasFictionalPlanets=!1;let c=!1;o.forEach((u,h)=>{let f=u.catalogIndex,p=s.host(f),v=500;for(let m of o)if(m!==u){let x=Math.hypot(m.fixed[0]-u.fixed[0],m.fixed[1]-u.fixed[1],m.fixed[2]-u.fixed[2])/Ht;v=Math.min(v,x/3)}let g=Qh(s,f,e);p&&p.planets.length?(rv(r,u,p,g,e,t.name),c=!0):e.procgen.enabled&&av(r,u,g,e,v,o.length>1?String.fromCharCode(65+h):"",t.name)}),r.hasKnownPlanets=c,r.kind=c?"known":"procedural",r.fictional=!c;let d={star:0,planet:1,dwarf:2,moon:3,belt:4};return r}function rv(s,t,e,i,n,r){let o=ti(Qe(i,31)),a=tu(o),l=e.planets.slice().sort((c,d)=>(c.a??c.per??1e9)-(d.a??d.per??1e9));for(let c of l){let d=[],u=t.massSun,h=c.a;!h&&c.per&&(h=Math.cbrt(_a*u*Math.pow(c.per*86400,2)/(4*Math.PI*Math.PI))/Ht,d.push("a from period")),h||(h=.1,d.push("a unknown (placeholder)"));let f=c.m,p=c.r;!f&&p&&(f=Yh(p),d.push("mass")),!p&&f&&(p=ya(f),d.push("radius")),!f&&!p&&(f=5,p=ya(5),d.push("mass"),d.push("radius"));let v=c.e;v==null&&(v=0,d.push("e"));let g=ti(Qe(i,tn(c.name))),m=Zh(f,p),x=t.lumSun,_=c.teq||da(x,h,.3),y=qs(x,t.teff),E=Wl(m,{teq:_,mE:f,rE:p,inHz:h>=y.inner*.97&&h<=y.outer*1.03,aAu:h,seed:Qe(i,tn(c.name)),ringChance:.08}),A=Math.sqrt(_a*u/Math.pow(h*Ht,3))*86400/Kt,T=g.range(0,2.5),C=Be/(A*Kt),S=C<25,M=new xn({a:h*Ht,e:v,inc:Math.min(T,8),node:g.range(0,360),argp:c.w??g.range(0,360),M0:g.range(0,360),epochJD:_s,nDegPerDay:A,plane:a}),P=fe(je([a[0],a[3],a[6]],[a[1],a[4],a[7]])),U=new ui({id:`planet-${c.name.replace(/\s+/g,"-")}`,name:c.name,kind:m==="dwarf"?"dwarf":"planet",parent:t,orbit:M,radiusKm:p*Fn,gm:f*Gl,albedo:.3,pole:S?[a[2],a[5],a[8]]:iu(g,[a[2],a[5],a[8]],35),spin:eu(g,m,S),synchronous:S,look:E.look,atmosphere:E.atmosphere,rings:E.rings?E.rings.map(F=>({r0:F.r0*p*Fn,r1:F.r1*p*Fn,tau:F.tau})):null,fictional:!1,source:"NASA Exoplanet Archive",meta:{cls:m,mE:f,rE:p,teq:_,aAu:h,e:v,periodDays:C,method:c.meth,year:c.yr,est:d,label:E.label,confirmed:!0},info:`CONFIRMED planet \xB7 ${c.meth||"detected"}${c.yr?", "+c.yr:""} \xB7 ${E.label} (appearance is an artist's rendering \u2014 the archive has no imagery)`+(d.length?` \xB7 estimated: ${d.join(", ")}`:"")});s.add(U),E.rings&&(U.rings=E.rings.map(F=>({r0:F.r0*U.radiusKm,r1:F.r1*U.radiusKm,tau:F.tau})))}}function av(s,t,e,i,n,r,o){let a=i.procgen,l=ti(Qe(e,11)),c={lumSun:t.lumSun,massSun:t.massSun,teff:t.teff,radiusKm:t.radiusKm,letter:t.letter,lc:t.lc},d=Jh(c,l,a,n),u=tu(l),h=d.hz,f=r?`${o} ${r}`:o;d.planets.forEach((p,v)=>{let g=`${f} ${nv[v]||"z"+v}`,m=ti(Qe(e,1e3+v)),x=p.mE,_=ya(x),y=Math.min(.55,Math.abs(m.normal())*a.eccentricitySigma*(d.compact?.5:1)),E=da(c.lumSun,p.a,.3),A=Wl(p.cls,{teq:E,mE:x,rE:_,inHz:p.a>=h.inner*.97&&p.a<=h.outer*1.03,aAu:p.a,seed:Qe(e,5e3+v),ringChance:a.ringChanceGiant}),T=Math.sqrt(_a*c.massSun/Math.pow(p.a*Ht,3))*86400/Kt,C=360/T,S=C<20||c.letter==="M"&&C<60,M=new xn({a:p.a*Ht,e:y,inc:Math.abs(m.normal())*a.inclinationSigmaDeg,node:m.range(0,360),argp:m.range(0,360),M0:m.range(0,360),epochJD:_s,nDegPerDay:T,plane:u}),P=p.cls==="dwarf"?"dwarf":"planet",U=S?[u[2],u[5],u[8]]:iu(m,[u[2],u[5],u[8]],p.cls==="gas"?30:45),F=new ui({id:`${t.id}-p${v}`,name:g,kind:P,parent:t,orbit:M,radiusKm:_*Fn,gm:x*Gl,albedo:.3,pole:U,spin:eu(m,p.cls,S),synchronous:S,look:A.look,atmosphere:A.atmosphere,rings:A.rings?A.rings.map(L=>({r0:L.r0*_*Fn,r1:L.r1*_*Fn,tau:L.tau})):null,fictional:!0,source:"procedural (FICTIONAL)",meta:{cls:p.cls,mE:x,rE:_,teq:E,aAu:p.a,e:y,periodDays:C,label:A.label,confirmed:!1,inHz:p.a>=h.inner&&p.a<=h.outer},info:`FICTIONAL planet \u2014 procedurally generated \xB7 ${A.label}`});s.add(F);let N=F.hillKm;jh({cls:p.cls,mE:x,a:p.a},m,a,d.frostAu,F.radiusKm,F.gm,N).forEach((L,q)=>{let O=ti(Qe(e,9e4+v*31+q)),Z=L.iced?"ice-moon":"rock-moon",et=Math.sqrt(F.gm/L.aKm**3)*86400/Kt,ht=L.volcanic?{kind:"proc",style:"io",colors:[[.9,.8,.35],[.98,.92,.55],[.85,.38,.16],[.16,.13,.12]],p:{crater:0,bump:.25,spot:.9}}:L.iced?{kind:"proc",style:O()<.5?"ice":"europa",colors:[[.82+O()*.15,.82+O()*.14,.84+O()*.12],[.94,.95,.96],[.62,.5,.42],[.55,.58,.64]],p:{crater:O(),bump:.5,ice:1,stripe:O()*.8}}:{kind:"proc",style:"rock",colors:[[.36+O()*.1,.33+O()*.08,.3],[.5+O()*.1,.47,.42],[.66,.62,.58],[.2,.19,.18]],p:{crater:.6+O()*.4,bump:.8}},Ut=new ui({id:`${F.id}-m${q}`,name:`${g} ${iv[q]||q+1}`,kind:"moon",parent:F,orbit:new xn({a:L.aKm,e:Math.abs(O.normal())*.01,inc:Math.abs(O.normal())*2,node:O.range(0,360),argp:O.range(0,360),M0:O.range(0,360),epochJD:_s,nDegPerDay:et,plane:ov(F.pole)}),radiusKm:L.rKm,gm:L.gm,albedo:L.iced?.6:.12,pole:F.pole,spin:{sync:!0},synchronous:!0,look:ht,fictional:!0,source:"procedural (FICTIONAL)",meta:{cls:Z,label:L.volcanic?"volcanic moon":L.iced?"icy moon":"rocky moon"},info:`FICTIONAL moon \u2014 procedurally generated (${L.volcanic?"volcanic":L.iced?"icy":"rocky"})`});s.add(Ut)})}),d.belts.forEach((p,v)=>{let g=p.kind==="asteroid",m=p.outer-p.inner;s.add(new ui({id:`${t.id}-belt${v}`,name:`${f} ${g?"asteroid belt":"outer debris belt"}`,kind:"belt",parent:t,radiusKm:1,fictional:!0,source:"procedural (FICTIONAL)",belt:{innerAu:p.inner,outerAu:p.outer,peakAu:p.peak,thicknessAu:m*(g?.12:.2),count:g?22e3:16e3,tint:g?[.62,.56,.5]:[.56,.58,.62],note:"procedural, FICTIONAL"},plane:u,info:"FICTIONAL belt \u2014 procedurally generated"}))}),t.systemPlane=u}function ov(s){let t=fe(s),e=Ni(t),i=je(t,e);return[e[0],i[0],t[0],e[1],i[1],t[1],e[2],i[2],t[2]]}var ba=class{constructor(t,e){this.data=t,this.cfg=e,this.cat=new fa(t,e),this.systems=new Map,this.solar=Kh(this.cat,t.ephemeris,e),this.solar.heliopauseKm=this.cat.heliopauseKm(this.cat.sunIndex),this.solar.heliopauseKm=e.heliopause.sunAu*Ht,this.solar.catalogKey=this.cat.sunIndex,this.solar.starIndices=[this.cat.sunIndex],this.systems.set(this.cat.sunIndex,this.solar),this._hpCache=new Map}systemForGroup(t){if(t.members.includes(this.cat.sunIndex))return this.solar;let e=this.systems.get(t.key);return e||(e=nu(this.cat,t,this.cfg),this.systems.set(t.key,e)),e}destinationsNear(t,e){let i=this.cfg.destinations;return this.cat.systemsNear(t,(e??i.radiusLy)*kl,i.groupAu).map(r=>({group:r,name:r.name,distLy:r.distPc*Ws,known:r.members.some(o=>this.cat.hasKnownPlanets(o)),stars:r.members.length}))}heliopauseOfStar(t){let e=this._hpCache.get(t);return e===void 0&&(e=t===this.cat.sunIndex?this.cfg.heliopause.sunAu*Ht:this.cat.heliopauseKm(t),this._hpCache.set(t,e)),e}starsNearPc(t,e){return this.cat.within(t,e)}nextBoundary(t,e,i,n){let r=i/ne+.25,o=this.cat.within(t,r+.2),a=null,l=null;for(let c of o){let d=this.heliopauseOfStar(c)/ne,u=this.cat.pos[c*3]-t[0],h=this.cat.pos[c*3+1]-t[1],f=this.cat.pos[c*3+2]-t[2],p=u*u+h*h+f*f;if(p<d*d){(!l||p<l.cc)&&(l={star:c,cc:p,radiusKm:d*ne});continue}let v=u*e[0]+h*e[1]+f*e[2];if(v<=0)continue;let g=p-v*v;if(g>=d*d)continue;let m=(v-Math.sqrt(d*d-g))*ne;(!a||m<a.distKm)&&(a={distKm:m,star:c,radiusKm:d*ne})}return{ahead:a,inside:l}}};var qe=`
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
`;var su=`
${qe}
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
`,ru=`
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
`;var Xl=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,au=`
precision highp float;
${qe}
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
`,ou=`
${qe}
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
`,lu=`
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
`,cu=`
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
`;var hu=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,uu=`
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
`,du=`
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
`,fu=`
precision highp float;
${qe}
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
`,pu=`
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
`,mu=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).rgb, 1.0); }
`;var ql=Math.log(1e3),gu=Math.log(6e4),Ma=class{constructor(t,e,i){this.cfg=e,this.data=i,this.canvas=t;let n=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0,preserveDrawingBuffer:!0});if(!n)throw new Error("WebGL2 is required.");this.renderer=new $r({canvas:t,context:n,antialias:!1,logarithmicDepthBuffer:!0}),this.renderer.autoClear=!1,this.renderer.outputColorSpace=ji,this.renderer.toneMapping=Pi,this.renderer.shadowMap.enabled=!!e.visuals.ship.shadows,this.renderer.shadowMap.type=Tl,this.maxTex=this.renderer.capabilities.maxTextureSize,this.renderScale=e.visuals.renderScale,this.fsGeo=new ye,this.fsGeo.setAttribute("position",new de(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.fsMesh=new It(this.fsGeo,null),this.fsMesh.frustumCulled=!1,this.fsScene=new Di,this.fsScene.add(this.fsMesh),this.fsCam=new fs(-1,1,1,-1,0,1),this.skyScene=new Di,this.camera=new Ne(e.camera.fovDeg,1,e.camera.near,e.camera.far),this.time=0,this._buildColorLUT(),this._buildStars(),this._buildSky(),this._buildMwModel(),this._buildGalaxies(),this._buildPost(),this.resize()}_buildColorLUT(){let e=new Uint16Array(1024);for(let n=0;n<256;n++){let r=Math.exp(ql+n/255*(gu-ql)),o=Dn(r);e[n*4]=Qi.toHalfFloat(o[0]),e[n*4+1]=Qi.toHalfFloat(o[1]),e[n*4+2]=Qi.toHalfFloat(o[2]),e[n*4+3]=Qi.toHalfFloat(1)}let i=new pn(e,256,1,De,Fi);i.minFilter=i.magFilter=ke,i.needsUpdate=!0,i.generateMipmaps=!1,this.colorLUT=i}_buildStars(){let t=this.data,e=t.n,i=new xs;i.setAttribute("position",new de(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let n=new Float32Array(e*3),r=new Float32Array(e*2);for(let o=0;o<e;o++)n[o*3]=t.pos[o*3],n[o*3+1]=t.pos[o*3+1],n[o*3+2]=t.pos[o*3+2],r[o*2]=t.absMag[o],r[o*2+1]=Math.log(t.teff[o]);i.setAttribute("aPos",new mn(n,3)),i.setAttribute("aPhys",new mn(r,2)),i.instanceCount=e,this.starUniforms={uCamHi:{value:new I},uCamLo:{value:new I},uView:{value:new Dt},uRes:{value:new Ct(1,1)},uFocalPx:{value:1e3},uBeta:{value:new I},uGamma:{value:1},uExposure:{value:1},uMagLimit:{value:10},uBrightness:{value:1},uSigma:{value:.62},uHalo:{value:1},uHaloAmt:{value:4e-4},uHaloW:{value:4},uSat:{value:1},uBlue:{value:1},uColorLUT:{value:this.colorLUT},uLnTmin:{value:ql},uLnTmax:{value:gu},uWarpDir:{value:new I(0,0,-1)},uWarpBeta:{value:0},uWarpGamma:{value:1},uStreak:{value:0},uWarpDim:{value:0},uBeam:{value:2},uHide:{value:new Array(8).fill(-1)}},this.starMat=new oe({vertexShader:su,fragmentShader:ru,uniforms:this.starUniforms,transparent:!0,depthTest:!1,depthWrite:!1,blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:Ce}),this.starMesh=new It(i,this.starMat),this.starMesh.frustumCulled=!1,this.starMesh.renderOrder=1,this.skyScene.add(this.starMesh)}_buildSky(){let t=this.data.milkyWay,e=t,i;if(t){let{width:r,height:o}=t,a=new Uint16Array(r*o*4),l=[];for(let f=0;f<r*o;f+=7)l.push(t.col[f]);l.sort((f,p)=>f-p);let c=l[l.length>>1],d=f=>t.colMin+f/65535*(t.colMax-t.colMin),u=d(c),h=this.cfg.visuals.milkyWay.colorSensitivity??2.4;for(let f=0;f<r*o;f++){let p=t.logMin+t.lum[f]/65535*(t.logMax-t.logMin),v=Math.PI*Math.pow(10,p)*1e6,g=(d(t.col[f])-u)*h,m=Math.exp(-.5*g),x=Math.exp(.5*g),_=1,y=.2126*m+.7152*_+.0722*x;m/=y,_/=y,x/=y,a[f*4]=Qi.toHalfFloat(v*m),a[f*4+1]=Qi.toHalfFloat(v*_),a[f*4+2]=Qi.toHalfFloat(v*x),a[f*4+3]=Qi.toHalfFloat(1)}i=new pn(a,r,o,De,Fi),i.wrapS=bi,i.wrapT=pi,i.minFilter=i.magFilter=ke,i.generateMipmaps=!1,i.needsUpdate=!0,this.mwInfo={integratedV:t.integratedV}}else i=new pn(new Uint16Array([0,0,0,15360]),1,1,De,Fi),i.needsUpdate=!0,console.warn("milkyway.bin not found \u2013 run: node tools/build-data.mjs --only=skymap");let n=new Dt;n.set(...Bl.flat()),this.skyUniforms={uMW:{value:i},uMWSize:{value:new Ct(e?e.width:1024,e?e.height:512)},uInvView:{value:new Dt},uToGal:{value:n},uTan:{value:new Ct(1,1)},uBeta:{value:new I},uGamma:{value:1},uWarpDir:{value:new I(0,0,-1)},uWarpBeta:{value:0},uWarpGamma:{value:1},uExposure:{value:1},uGain:{value:1},uDetail:{value:1},uGrain:{value:.5},uDust:{value:1},uBeamCap:{value:8},uMwScale:{value:1e-6},uBlue:{value:1},uModelSun:{value:null},uModelShip:{value:null},uModelOn:{value:0},uZodi:{value:0},uBeam:{value:3},uSunDirRest:{value:new I(1,0,0)},uZodiScale:{value:1}},this.skyMat=new oe({vertexShader:Xl,fragmentShader:au,uniforms:this.skyUniforms,depthTest:!1,depthWrite:!1}),this.skyMesh=new It(this.fsGeo,this.skyMat),this.skyMesh.frustumCulled=!1,this.skyMesh.renderOrder=0,this.skyScene.add(this.skyMesh)}_buildMwModel(){let t=this.cfg.galaxyModel;this.mwModel={rtSun:this._rt(256,128),rtShip:this._rt(256,128),last:null},this.mwModelMat=new oe({vertexShader:Xl,fragmentShader:cu,depthTest:!1,depthWrite:!1,uniforms:{uOrigin:{value:new I},uDisc:{value:new Qt(t.diskScaleLengthKpc,t.diskScaleHeightPc/1e3,t.bulgeRadiusKpc,14)},uDust:{value:new Qt(t.dustScaleLengthKpc,t.dustScaleHeightPc/1e3,10,0)}}}),this.mwModelMesh=new It(this.fsGeo,this.mwModelMat),this._renderMwModel(this.mwModel.rtSun,[0,0,0]),this._renderMwModel(this.mwModel.rtShip,[0,0,0]),this.skyUniforms.uModelSun.value=this.mwModel.rtSun.texture,this.skyUniforms.uModelShip.value=this.mwModel.rtShip.texture}_renderMwModel(t,e){let i=this.cfg.galaxyModel,n=Bl,r=n[0][0]*e[0]+n[0][1]*e[1]+n[0][2]*e[2],o=n[1][0]*e[0]+n[1][1]*e[1]+n[1][2]*e[2],a=n[2][0]*e[0]+n[2][1]*e[1]+n[2][2]*e[2];this.mwModelMat.uniforms.uOrigin.value.set(r/1e3-i.sunRadiusKpc,o/1e3,a/1e3+i.sunHeightPc/1e3),this.fsMesh.material=this.mwModelMat,this.renderer.setRenderTarget(t),this.renderer.render(this.fsScene,this.fsCam)}updateMwModel(t){let e=this.cfg.galaxyModel,i=Math.hypot(t[0],t[1],t[2]);if(this.skyUniforms.uModelOn.value=i>20?1:0,i<=20)return;let n=this.mwModel.last;n&&Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])<e.refreshDistancePc||(this._renderMwModel(this.mwModel.rtShip,t),this.mwModel.last=t.slice())}_buildGalaxies(){this.galaxies=[];let t=new ye;t.setAttribute("position",new de(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),t.setIndex([0,1,2,0,2,3]);for(let e of this.data.galaxies){let i=Math.hypot(e.x,e.y,e.z)||1,n=new I(e.x/i,e.y/i,e.z/i),r=e.ra*Kt,o=e.dec*Kt,a=new I(-Math.sin(r),Math.cos(r),0),l=new I(-Math.sin(o)*Math.cos(r),-Math.sin(o)*Math.sin(r),Math.cos(o)),c=Math.max((e.rhArcmin||3)/60*Kt,1e-4),d=Math.min(Math.max(c*5,.006),.7),u=new oe({vertexShader:ou,fragmentShader:lu,transparent:!0,depthTest:!1,depthWrite:!1,blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uView:this.starUniforms.uView,uRes:this.starUniforms.uRes,uFocalPx:this.starUniforms.uFocalPx,uBeta:this.starUniforms.uBeta,uGamma:this.starUniforms.uGamma,uWarpDir:this.starUniforms.uWarpDir,uWarpBeta:this.starUniforms.uWarpBeta,uWarpGamma:this.starUniforms.uWarpGamma,uDir:{value:n},uSizeRad:{value:d},uPA:{value:0},uEast:{value:a},uNorth:{value:l},uEll:{value:e.ell??.2},uRh:{value:c/d},uColor:{value:new I(1,.96,.9)},uPeak:{value:0},uFloor:{value:0}}}),h=e.vmag??14,f=Math.pow(10,-.4*(h+26.74)),p=c/1.68,v=f/(2*Math.PI*p*p*Math.max(1-(e.ell??.2),.15)),g=new It(t,u);g.frustumCulled=!1,g.renderOrder=.5,g.userData={g:e,I0:v,rhRad:c},u.uniforms.uPA.value=(e.pa??0)*Kt,this.skyScene.add(g),this.galaxies.push(g)}}_buildPost(){let t=(e,i)=>new oe({vertexShader:hu,fragmentShader:e,uniforms:i,depthTest:!1,depthWrite:!1});this.mats={down:t(uu,{tSrc:{value:null},uTexel:{value:new Ct},uKaris:{value:0},uCap:{value:6e4}}),up:t(du,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new Ct},uRadius:{value:1},uMix:{value:.5}}),composite:t(fu,{tScene:{value:null},tBloom:{value:null},uBloom:{value:.06},uSaturation:{value:1.05},uContrast:{value:1},uGrain:{value:.01},uVignette:{value:.2},uCA:{value:7e-4},uTime:{value:0},uRes:{value:new Ct},uFlash:{value:0},uFlashColor:{value:new I(.6,.8,1)},uFlashPos:{value:new Ct(.5,.5)}}),lens:t(pu,{tSrc:{value:null},uCenter:{value:new Ct(.5,.5)},uRadius:{value:.2},uStrength:{value:0},uAspect:{value:1},uTime:{value:0},uFlow:{value:0}}),copy:t(mu,{tSrc:{value:null}})}}_rt(t,e,i=0,n=!1){let r=new Mi(t,e,{type:Fi,format:De,minFilter:ke,magFilter:ke,depthBuffer:n,stencilBuffer:!1,samples:i,generateMipmaps:!1});return r.texture.colorSpace=ji,r}resize(t=window.innerWidth,e=window.innerHeight){let i=Math.min(window.devicePixelRatio||1,this.cfg.visuals.maxPixelRatio),n=this.renderScale,r=Math.max(2,Math.floor(t*i*n)),o=Math.max(2,Math.floor(e*i*n));this.W=r,this.H=o,this.cssW=t,this.cssH=e,this.renderer.setPixelRatio(1),this.renderer.setSize(Math.floor(t*i),Math.floor(e*i),!1),this.outW=Math.floor(t*i),this.outH=Math.floor(e*i);let a=Math.min(this.cfg.visuals.antialias,this.renderer.capabilities.maxSamples);for(let u of["sceneRT","lensRT"])this[u]&&this[u].dispose();if(this.sceneRT=this._rt(r,o,a,!0),this.lensRT=this._rt(r,o,a,!0),this.camera.aspect=r/o,this.camera.updateProjectionMatrix(),this.bloomRTs)for(let u of this.bloomRTs)u.down.dispose(),u.up.dispose();this.bloomRTs=[];let l=Math.max(2,r>>1),c=Math.max(2,o>>1),d=this.cfg.visuals.bloom.levels;for(let u=0;u<d;u++)this.bloomRTs.push({w:l,h:c,down:this._rt(l,c),up:this._rt(l,c)}),l=Math.max(2,l>>1),c=Math.max(2,c>>1);this.starUniforms.uRes.value.set(r,o),this.mats.composite.uniforms.uRes.value.set(r,o),this.mats.lens.uniforms.uAspect.value=r/o}setRenderScale(t){Math.abs(t-this.renderScale)>.01&&(this.renderScale=t,this.resize(this.cssW,this.cssH))}get focalPx(){return .5*this.H/Math.tan(.5*this.camera.fov*Kt)}quad(t,e,i=!1){this.fsMesh.material=t,this.renderer.setRenderTarget(e),i&&this.renderer.clear(),this.renderer.render(this.fsScene,this.fsCam)}prepare(t){let e=this.cfg.visuals,i=this.starUniforms,n=this.skyUniforms;this.time+=t.dt||0,this.updateMwModel(t.camPc),this.camera.fov=t.fov??this.cfg.camera.fovDeg,this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,0),this.camera.quaternion.copy(t.quat),this.camera.updateMatrixWorld(!0);let r=f=>Math.fround(f);i.uCamHi.value.set(r(t.camPc[0]),r(t.camPc[1]),r(t.camPc[2])),i.uCamLo.value.set(t.camPc[0]-r(t.camPc[0]),t.camPc[1]-r(t.camPc[1]),t.camPc[2]-r(t.camPc[2]));let o=new jt().makeRotationFromQuaternion(t.quat),a=new Dt().setFromMatrix4(o),l=a.clone().transpose();i.uView.value.copy(l),n.uInvView.value.copy(a),i.uFocalPx.value=this.focalPx,i.uBeta.value.fromArray(t.beta),i.uGamma.value=t.gamma,i.uExposure.value=Math.max(t.exposure,this.cfg.visuals.stars.minGain||0),i.uBrightness.value=e.stars.brightness,i.uSigma.value=e.stars.psfSigmaPx,i.uHalo.value=e.stars.haloStrength,i.uHaloAmt.value=e.stars.haloFraction,i.uHaloW.value=e.stars.haloWidthPx,i.uSat.value=e.stars.colorSaturation,i.uMagLimit.value=e.stars.magnitudeLimit,i.uBlue.value=this.cfg.warp.visual.blueshiftScale*1;let c=t.warp||{};i.uWarpDir.value.fromArray(c.dir||[0,0,-1]),i.uWarpBeta.value=c.beta||0,i.uWarpGamma.value=c.gamma||1,i.uStreak.value=(c.streak||0)*this.cfg.warp.visual.streakScale,i.uWarpDim.value=c.dim||0;for(let f=0;f<8;f++)i.uHide.value[f]=t.hide&&t.hide[f]!=null?t.hide[f]:-1;let d=Math.tan(.5*this.camera.fov*Kt);n.uTan.value.set(d*this.camera.aspect,d),n.uBeta.value.fromArray(t.beta),n.uGamma.value=t.gamma,n.uWarpDir.value.fromArray(c.dir||[0,0,-1]),n.uWarpBeta.value=c.beta||0,n.uWarpGamma.value=c.gamma||1,n.uExposure.value=t.exposure,n.uGain.value=e.milkyWay.enabled?e.milkyWay.gain:0,n.uDetail.value=e.milkyWay.detail,n.uGrain.value=e.milkyWay.grain,n.uDust.value=e.milkyWay.dustContrast,n.uBlue.value=this.cfg.warp.visual.blueshiftScale,n.uMwScale.value=1e-6*(t.mwScale??1);let h=((t.warp||{}).lens||0)>.01;i.uBeam.value=h?this.cfg.warp.visual.beaming:2,n.uBeam.value=h?this.cfg.warp.visual.beaming*.9:3,n.uBeamCap.value=this.cfg.visuals.relativity?.skyGainCap??3,n.uZodi.value=t.zodi||0,t.sunDir&&n.uSunDirRest.value.fromArray(t.sunDir),n.uZodiScale.value=t.zodiScale??1;for(let f of this.galaxies){let{I0:p,rhRad:v,g}=f.userData,m=f.material.uniforms,x=Math.max(t.exposure,e.stars.minGain||0)*(e.milkyWay.enabled?e.milkyWay.gain:1)*e.galaxies.gain,_=Math.PI*p*x,y=Math.min(1,Math.max(0,(Math.max(t.exposure,1)-2e3)/4e5));m.uPeak.value=Math.max(_,e.galaxies.visibilityFloor*y),m.uFloor.value=0,m.uColor.value.set(1,.96,.9),f.visible=e.galaxies.enabled}}render(t,e={}){let i=this.renderer,n=this.cfg.visuals;this.prepare(t),i.setRenderTarget(this.sceneRT),i.setClearColor(0,1),i.clear(!0,!0,!0),i.render(this.skyScene,this.camera),e.space&&e.space(i,this.camera);let r=this.sceneRT,o=t.warp||{};if(o.lens>.001){let f=this.mats.lens.uniforms;f.tSrc.value=this.sceneRT.texture,f.uStrength.value=o.lens*this.cfg.warp.visual.lensStrength,f.uCenter.value.set(o.center[0],o.center[1]),f.uRadius.value=o.radius,f.uTime.value=this.time,this.quad(this.mats.lens,this.lensRT,!0),r=this.lensRT}e.near&&(i.setRenderTarget(r),i.clearDepth(),e.near(i));let a=this.bloomRTs,l=n.bloom,c=r.texture;for(let f=0;f<a.length;f++){let p=this.mats.down.uniforms;p.tSrc.value=c,p.uKaris.value=f===0?1:0,p.uCap.value=f===0?n.bloom.inputCap||14:6e4,p.uTexel.value.set(1/(f===0?this.W:a[f-1].w),1/(f===0?this.H:a[f-1].h)),this.quad(this.mats.down,a[f].down),c=a[f].down.texture}let d=a[a.length-1].down.texture;for(let f=a.length-2;f>=0;f--){let p=this.mats.up.uniforms;p.tSrc.value=d,p.tAdd.value=a[f].down.texture,p.uTexel.value.set(1/a[f+1].w,1/a[f+1].h),p.uRadius.value=l.radius,p.uMix.value=.55,this.quad(this.mats.up,a[f].up),d=a[f].up.texture}let u=this.mats.composite.uniforms,h=n.tonemap;u.tScene.value=r.texture,u.tBloom.value=d,u.uBloom.value=l.strength*n.intensity,u.uSaturation.value=h.saturation,u.uContrast.value=h.contrast,u.uGrain.value=h.filmGrain,u.uVignette.value=h.vignette,u.uCA.value=h.chromaticAberration,u.uTime.value=this.time,u.uFlash.value=(o.flash||0)*this.cfg.warp.visual.flashScale,o.center&&u.uFlashPos.value.set(o.center[0],o.center[1]),i.setViewport(0,0,this.outW,this.outH),this.quad(this.mats.composite,null)}};var Kl=`
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
`,vu=`
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
`,xu=`#include <common>
#include <logdepthbuf_pars_vertex>`,Js=`#include <common>
#include <logdepthbuf_pars_fragment>`,js=`
${qe}
${Kl}
${xu}
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
`,yu=`
precision highp float;
${qe}
${vu}
${Js}
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
`,_u=`
precision highp float;
${qe}
${vu}
${Js}
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
`,bu=`
precision highp float;
${qe}
${Js}
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
`,Mu=`
${qe}
${Kl}
${xu}
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
`,Su=`
precision highp float;
${qe}
${Js}
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
`,wu=`
precision highp float;
${qe}
${Js}
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
`,Eu=`
${qe}
${Kl}
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
`,Tu=`
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
`;async function Au(s){let t=window.__SIMTEX||{},e={},i=s.capabilities.maxTextureSize,n=Math.min(8,s.capabilities.getMaxAnisotropy()),r=Object.entries(t).map(([o,a])=>new Promise(l=>{let c=new Image;c.onload=()=>{let d=c;if(c.width>i){let h=document.createElement("canvas");h.width=i,h.height=Math.round(c.height*i/c.width),h.getContext("2d").drawImage(c,0,0,h.width,h.height),d=h}let u=new Xe(d);u.colorSpace=Ai,u.wrapS=bi,u.wrapT=pi,u.minFilter=Ki,u.magFilter=ke,u.generateMipmaps=!0,u.anisotropy=n,o==="saturn_ring_alpha"&&(u.wrapS=pi,u.generateMipmaps=!0),u.needsUpdate=!0,e[o]=u,l()},c.onerror=()=>{console.warn("texture failed:",o),l()},c.src=a}));return await Promise.all(r),e}function Ru(){let s=new pn(new Uint8Array([255,255,255,255]),1,1,De);return s.needsUpdate=!0,s}function Sa(s,t,e){if(e>=s+t)return 0;if(e<=Math.abs(t-s))return t>=s?1:t*t/(s*s);let i=Math.acos(Mt((e*e+s*s-t*t)/(2*e*s),-1,1)),n=Math.acos(Mt((e*e+t*t-s*s)/(2*e*t),-1,1));return Mt((s*s*(i-Math.sin(2*i)*.5)+t*t*(n-Math.sin(2*n)*.5))/(Math.PI*s*s),0,1)}function Cu(s,t,e){let i=0,n=0,r=s.stars,o=r.map(a=>a.positionAt(e));return r.forEach((a,l)=>{let c=o[l][0]-t[0],d=o[l][1]-t[1],u=o[l][2]-t[2],h=Math.hypot(c,d,u)||1,f=h/Ht,p=a.lumV/(f*f),v=[c/h,d/h,u/h],g=a.radiusKm/h,m=1;for(let x of s.bodies){if(x.kind==="star"||x.kind==="belt")continue;let _=x.positionAt(e),y=_[0]-t[0],E=_[1]-t[1],A=_[2]-t[2],T=y*v[0]+E*v[1]+A*v[2];if(T<=0)continue;let C=Math.hypot(y,E,A);if(x.radiusKm/C<2e-4)continue;let S=y-T*v[0],M=E-T*v[1],P=A-T*v[2],U=Math.hypot(S,M,P)/T,F=x.radiusKm/T;m*=1-Sa(g,F,U)}i+=p*m;for(let x of s.bodies){if(x.kind==="star"||x.kind==="belt")continue;let _=x.positionAt(e),y=_[0]-t[0],E=_[1]-t[1],A=_[2]-t[2],T=Math.hypot(y,E,A);if(T<1)continue;let C=o[l][0]-_[0],S=o[l][1]-_[1],M=o[l][2]-_[2],P=Math.hypot(C,S,M),U=P/Ht,F=-(y*C+E*S+A*M)/(T*P),N=Math.acos(Mt(F,-1,1)),V=(Math.sin(N)+(Math.PI-N)*Math.cos(N))/Math.PI,L=Math.pow(x.radiusKm/T,2);n+=(x.albedo??.3)*L*V*(a.lumV/(U*U))*(T<x.radiusKm*1.001?0:1)*.9}}),{direct:i,shine:n}}function Pu(s,t){let e=t.visuals.exposure,i=Math.pow(2,e.compensationEv);return Mt((e.key??.9)/Math.max(s,1e-12),e.minGain,e.maxGain)*i}function Iu(s,t,e,i){if(!isFinite(s)||s<=0)return t;let n=1-Math.exp(-e/Math.max(i,.05));return Math.exp(Math.log(s)+(Math.log(t)-Math.log(s))*n)}function Lu(s,t,e){let i=null;for(let n of s.stars){let r=n.positionAt(e),o=r[0]-t[0],a=r[1]-t[1],l=r[2]-t[2],c=Math.hypot(o,a,l)||1,d=c/Ht,u=n.lumV/(d*d),h=[o/c,a/c,l/c],f=n.radiusKm/c,p=1;for(let v of s.bodies){if(v.kind==="star"||v.kind==="belt")continue;let g=v.positionAt(e),m=g[0]-t[0],x=g[1]-t[1],_=g[2]-t[2],y=m*h[0]+x*h[1]+_*h[2];if(y<=0)continue;let E=Math.hypot(m,x,_);if(v.radiusKm/E<2e-4)continue;let A=Math.hypot(m-y*h[0],x-y*h[1],_-y*h[2])/y;p*=1-Sa(f,v.radiusKm/y,A)}(!i||u*p>i.E)&&(i={star:n,dir:h,E:u*p,E0:u,vis:p,color:n.color||[1,1,1]})}return i}var lv={rock:1,ice:2,gas:3,ocean:4,lava:5,haze:6,io:7,europa:8,ganymede:14,iapetus:10,pluto:11,triton:12,charon:13},Du={earth:[.2,.35,.7],moon:[.5,.5,.5],mars:[.7,.4,.25],venus:[.9,.8,.55],mercury:[.5,.48,.46],jupiter:[.85,.75,.6],saturn:[.9,.82,.62],uranus:[.6,.85,.9],neptune:[.35,.5,.9],titan:[.8,.55,.25],io:[.9,.8,.4]},hy=new jt,cv=new I;function hv(s){return s.color||[1,.96,.9]}var wa=class{constructor(t,e,i,n){this.gfx=t,this.cfg=e,this.tex=i,this.cat=n,this.scene=new Di,this.sphereGeo=new li(1,144,96),this.blank=Ru(),this.items=[],this.system=null,this.labels=[],this.spriteCap=512,this._buildSprites(),this.sharedRel={uBetaCam:{value:new I},uGamma:{value:1},uWDirCam:{value:new I(0,0,-1)},uWBeta:{value:0},uWGamma:{value:1}},this.fadeEdge={lo:e.visuals.planets.resolveMinPx,hi:e.visuals.planets.resolveMaxPx}}_buildSprites(){let t=new xs;t.setAttribute("position",new de(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),t.setIndex([0,1,2,0,2,3]),this.spritePos=new Float32Array(this.spriteCap*4),this.spriteCol=new Float32Array(this.spriteCap*4),this.spritePosAttr=new mn(this.spritePos,4),this.spriteColAttr=new mn(this.spriteCol,4),this.spritePosAttr.setUsage(Dl),this.spriteColAttr.setUsage(Dl),t.setAttribute("aPosE",this.spritePosAttr),t.setAttribute("aColor",this.spriteColAttr),t.instanceCount=0,this.spriteGeo=t;let e=this.gfx.starUniforms;this.spriteMat=new oe({vertexShader:Eu,fragmentShader:Tu,transparent:!0,depthTest:!1,depthWrite:!1,blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uView:e.uView,uRes:e.uRes,uFocalPx:e.uFocalPx,uExposure:{value:1},uSigma:e.uSigma,uHalo:e.uHalo,uHaloAmt:e.uHaloAmt,uHaloW:e.uHaloW,uBrightness:e.uBrightness,uBetaCam:{value:new I},uGamma:e.uGamma,uWDirCam:{value:new I(0,0,-1)},uWBeta:e.uWarpBeta,uWGamma:e.uWarpGamma}}),this.spriteMesh=new It(t,this.spriteMat),this.spriteMesh.frustumCulled=!1,this.spriteMesh.renderOrder=100,this.scene.add(this.spriteMesh)}clear(){for(let t of this.items)for(let e of t.objs)this.scene.remove(e),e.geometry&&e.geometry!==this.sphereGeo&&e.geometry.dispose(),e.material&&e.material.dispose();this.items=[],this.orbitLines=[],this.system=null}setSystem(t){this.clear(),this.system=t;let e=this.gfx;for(let i of t.bodies){let n={body:i,objs:[],star:i.kind==="star"};i.kind==="belt"?this._makeBelt(n,i):i.kind==="star"?this._makeStar(n,i):this._makeBody(n,i);for(let r of n.objs)this.scene.add(r);this.items.push(n)}for(let i of this.items){let n=i.body;if(n.kind==="star"||n.kind==="belt")continue;let r=[];if(n.parent&&n.parent.kind!=="star"&&r.push(n.parent),n.parent)for(let o of n.parent.children)o!==n&&o.kind!=="belt"&&r.push(o);for(let o of n.children)o.kind!=="belt"&&r.push(o);i.occluders=r}this._buildOrbitLines(t)}_bodyMat(t){let e=t.look||{kind:"proc",style:"rock",colors:[[.4,.4,.4],[.5,.5,.5],[.7,.7,.7],[.2,.2,.2]],p:{}},i=this.tex,n=e.p||{},r=(e.colors||[[.5,.5,.5],[.6,.6,.6],[.8,.8,.8],[.3,.3,.3]]).map(u=>new I(u[0],u[1],u[2])),o=e.kind==="tex"&&i[e.tex],a=o?i[e.tex]:this.blank,l=lv[e.style]||1,c=n.seed??tn(t.id)%1e3/7.3,d={uBodyRot:{value:new Dt},uCenterRel:{value:new I},uRadius:{value:t.radiusKm},uExposure:{value:1},uFade:{value:1},uType:{value:o?0:1},uStyle:{value:l},tDay:{value:a},tNight:{value:e.night&&i[e.night]?i[e.night]:this.blank},tCloud:{value:e.clouds&&i[e.clouds]?i[e.clouds]:this.blank},tRing:{value:this.blank},uHasNight:{value:e.night&&i[e.night]?1:0},uHasCloud:{value:e.clouds&&i[e.clouds]?1:0},uCol:{value:r.concat(Array(4).fill(new I(.5,.5,.5))).slice(0,4)},uP:{value:new Qt(n.crater??e.crater??0,(n.bump??e.bump??.4)*this.cfg.visuals.planets.detailBump,n.ice??0,c)},uP2:{value:new Qt(n.bands??.5,n.turb??.5,n.spot??0,n.stripe??0)},uP3:{value:new Qt(n.ocean??.5,n.cloud??.5,n.lava??0,n.spec??e.spec??0)},uOcean:{value:e.ocean?1:0},uGas:{value:e.gas?1:0},uAirless:{value:!t.atmosphere&&e.kind!=="star"&&!e.gas&&e.style!=="gas"?1:0},uAtmo:{value:t.atmosphere?1:0},uNightGain:{value:this.cfg.visuals.planets.nightLightGain},uLightDir:{value:[new I(1,0,0),new I(1,0,0)]},uLightE:{value:[new I,new I]},uLightAng:{value:[.005,.005]},uAmbient:{value:new I},uOcc:{value:[new Qt,new Qt,new Qt]},uOccCount:{value:0},uRingInfo:{value:new Qt(0,1,0,0)},uPole:{value:new I(0,0,1)},uDetail:{value:1},uSeed:{value:c},uSelfLum:{value:1},uTexel:{value:o&&a.image?Math.PI*2/Math.max(a.image.width,1):.003},...this.sharedRel};return new oe({vertexShader:js,fragmentShader:yu,uniforms:d})}_makeBody(t,e){let i=this._bodyMat(e),n=new It(this.sphereGeo,i);n.matrixAutoUpdate=!1,n.frustumCulled=!1,n.renderOrder=10,t.mesh=n,t.mat=i,t.objs.push(n);let r=e.look||{};if(r.clouds&&this.tex[r.clouds]){let o=new oe({vertexShader:js,fragmentShader:_u,transparent:!0,depthWrite:!1,uniforms:{uBodyRot:i.uniforms.uBodyRot,uExposure:i.uniforms.uExposure,uFade:i.uniforms.uFade,tCloud:{value:this.tex[r.clouds]},uLightDir:i.uniforms.uLightDir,uLightE:i.uniforms.uLightE,uAmbient:i.uniforms.uAmbient,uRadius:i.uniforms.uRadius,uOcc:i.uniforms.uOcc,uOccCount:i.uniforms.uOccCount,uLightAng:i.uniforms.uLightAng,uOpacity:{value:this.cfg.visuals.planets.clouds},...this.sharedRel},blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:as}),a=new It(this.sphereGeo,o);a.matrixAutoUpdate=!1,a.frustumCulled=!1,a.renderOrder=11,t.cloudMesh=a,t.objs.push(a)}if(e.atmosphere){let o=e.atmosphere,a=new oe({vertexShader:js,fragmentShader:bu,transparent:!0,depthWrite:!1,side:ai,blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:ks,uniforms:{uCenterRel:i.uniforms.uCenterRel,uRadius:{value:e.radiusKm},uTop:{value:e.radiusKm+o.topKm},uBetaR:{value:new I(...o.rayleigh)},uBetaM:{value:o.mie},uHr:{value:o.hKm},uHm:{value:o.mieH??o.hKm*.2},uG:{value:o.mieG??.7},uTint:{value:new I(...o.tint||[1,1,1])},uStrength:{value:o.strength??1},uExposure:i.uniforms.uExposure,uFade:i.uniforms.uFade,uLightDir:i.uniforms.uLightDir,uLightE:i.uniforms.uLightE,uAmbient:i.uniforms.uAmbient,uSteps:{value:14},...this.sharedRel}}),l=new It(this.sphereGeo,a);l.matrixAutoUpdate=!1,l.frustumCulled=!1,l.renderOrder=12,t.atmoMesh=l,t.atmoMat=a,t.objs.push(l)}if(e.rings&&e.rings.length){let o=Math.min(...e.rings.map(p=>p.r0)),a=Math.max(...e.rings.map(p=>p.r1)),l=r.ring&&this.tex[r.ring],c=uv(l?74500:o,l?140220:a,256,3),d=e.rings.slice(0,6).map(p=>new Qt(p.r0,p.r1,p.tau,0));for(;d.length<6;)d.push(new Qt);let u=e.id==="saturn",h=new oe({vertexShader:Mu,fragmentShader:Su,transparent:!0,depthWrite:!1,side:Ee,blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:as,uniforms:{uBodyRot:{value:new Dt},uCenterRel:i.uniforms.uCenterRel,uPlanetR:{value:e.radiusKm},uInner:{value:l?74500:o},uOuter:{value:l?140220:a},uExposure:i.uniforms.uExposure,uFade:i.uniforms.uFade,uLightDir:i.uniforms.uLightDir,uLightE:i.uniforms.uLightE,uLightAng:i.uniforms.uLightAng,uAmbient:i.uniforms.uAmbient,tRing:{value:l?this.tex[r.ring]:this.blank},uHasTex:{value:l?1:0},uTint:{value:new I(.78,.72,.62)},uBands:{value:d},uBandCount:{value:e.rings.length},uPole:{value:new I(0,0,1)},uSeed:{value:tn(e.id)%100},...this.sharedRel}}),f=new It(c,h);f.matrixAutoUpdate=!1,f.frustumCulled=!1,f.renderOrder=13,t.ringMesh=f,t.ringMat=h,t.objs.push(f),i.uniforms.tRing.value=l?this.tex[r.ring]:this.blank,i.uniforms.uRingInfo.value.set(l?74500:o,l?140220:a,this.cfg.visuals.planets.ringShadows*(l?.95:0),l?1:0)}}_makeStar(t,e){let i=e.id==="sun"&&this.tex.sun,n=new oe({vertexShader:js,fragmentShader:wu,uniforms:{uBodyRot:{value:new Dt},uColor:{value:new I(...hv(e))},uRadiance:{value:e.surfaceRadiance},uExposure:{value:1},uFade:{value:1},uLimb:{value:e.limb??.6},uHasTex:{value:i?1:0},tSun:{value:i?this.tex.sun:this.blank},uSeed:{value:tn(e.id)%100},uSpots:{value:e.teff<5200?1:.5},...this.sharedRel}}),r=new It(this.sphereGeo,n);r.matrixAutoUpdate=!1,r.frustumCulled=!1,r.renderOrder=10,t.mesh=r,t.mat=n,t.objs.push(r)}_makeBelt(t,e){let i=e.belt,n=ti(Qe(tn(e.id),4242)),r=i.count,o=new Float32Array(r*3),a=new Float32Array(r);for(let u=0;u<r;u++){let h=i.peakAu+n.normal()*.5*(i.outerAu-i.innerAu)*.5,f=Mt(h,i.innerAu,i.outerAu)*Ht,p=n()*Be,v=n.normal()*i.thicknessAu*Ht*.5;o[u*3]=Math.cos(p)*f,o[u*3+1]=Math.sin(p)*f,o[u*3+2]=v,a[u]=.4+n()*.6}let l=new ye;l.setAttribute("position",new de(o,3)),l.setAttribute("aSize",new de(a,1));let c=new oe({transparent:!0,depthWrite:!1,blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uExposure:{value:1},uE:{value:1},uTint:{value:new I(...i.tint)},uGain:{value:1}},vertexShader:`#include <common>
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
          gl_FragColor = vec4(min(uTint * vA * f, vec3(8.0)), 1.0); }`}),d=new Qr(l,c);d.frustumCulled=!1,d.matrixAutoUpdate=!1,d.renderOrder=5,t.points=d,t.mat=c,t.objs.push(d)}_buildOrbitLines(t){this.orbitLines=[];let e=256;for(let i of t.bodies){if(!i.orbit||i.kind==="belt"||i.kind==="star"||!i.parent||!i.orbit.periodSec||!isFinite(i.orbit.periodSec))continue;let n=new Float32Array((e+1)*3),r=i.orbit.periodSec/86400,o=2461e3,a=[0,0,0];for(let h=0;h<=e;h++)i.orbit.positionAt(o+r*h/e,a),n[h*3]=a[0],n[h*3+1]=a[1],n[h*3+2]=a[2];let l=new ye;l.setAttribute("position",new de(n,3));let c=i.kind==="moon"?[.45,.55,.7]:i.kind==="dwarf"?[.55,.5,.5]:[.5,.65,.5],d=new Vs({color:new qt(...c),transparent:!0,opacity:0,depthWrite:!1,blending:_i}),u=new jr(l,d);u.frustumCulled=!1,u.matrixAutoUpdate=!1,u.renderOrder=4,this.scene.add(u),this.orbitLines.push({body:i,line:u,mat:d,baseOpacity:this.cfg.visuals.orbitLines.opacity})}}update(t){let e=this.system;if(!e)return{hide:[],labels:[]};let i=t.camSys,n=t.jd,r=t.focalPx,o=this.cfg.visuals;this.sharedRel.uBetaCam.value.copy(t.betaCam),this.sharedRel.uGamma.value=t.gamma,this.spriteMat.uniforms.uBetaCam.value.copy(t.betaCam),this.spriteMat.uniforms.uExposure.value=t.exposure;let a=t.warp||{};this.sharedRel.uWDirCam.value.copy(a.dirCam||new I(0,0,-1)),this.sharedRel.uWBeta.value=a.beta||0,this.sharedRel.uWGamma.value=a.gamma||1,this.spriteMat.uniforms.uWDirCam.value.copy(this.sharedRel.uWDirCam.value);let l=[],c=[],d=0,u=this.spritePos,h=this.spriteCol,f={v:null},p=(y,E,A,T)=>{let C=1;for(let S of this.items){let M=S.body;if(M===y||M.kind==="belt")continue;let P=f.v.get(M);if(P.dist>=A)continue;let U=M.radiusKm/P.dist;if(U*r<.3)continue;let F=(E[0]*P.rel[0]+E[1]*P.rel[1]+E[2]*P.rel[2])/(A*P.dist),N=Math.acos(Mt(F,-1,1));if(!(N>T+U)&&(C*=1-Sa(T,U,N),C<=0))return 0}return C},v=(y,E,A,T)=>{d>=this.spriteCap||(u[d*4]=y[0],u[d*4+1]=y[1],u[d*4+2]=y[2],u[d*4+3]=E,h[d*4]=A[0],h[d*4+1]=A[1],h[d*4+2]=A[2],h[d*4+3]=T,d++)},g=e.stars,m=g.map(y=>y.positionAt(n)),x=[0,0,0],_=new Map;for(let y of this.items){let E=y.body,A=E.positionAt(n);x[0]=A[0]-i[0],x[1]=A[1]-i[1],x[2]=A[2]-i[2];let T=Math.hypot(x[0],x[1],x[2]);_.set(E,{p:A,rel:[x[0],x[1],x[2]],dist:T})}f.v=_;for(let y of this.items){let E=y.body,A=_.get(E),{rel:T,dist:C,p:S}=A,M=E.radiusKm/Math.max(C,.001)*r;if(y.angPx=M,y.dist=C,E.kind==="belt"){this._updateBelt(y,E,T,S,n,t);continue}let P=[];for(let N=0;N<g.length;N++){let V=g[N];if(V===E)continue;let L=m[N],q=L[0]-S[0],O=L[1]-S[1],Z=L[2]-S[2],et=Math.hypot(q,O,Z)||1,ht=et/Ht;P.push({s:V,dir:[q/et,O/et,Z/et],E:V.lumV/(ht*ht),ang:Math.min(.3,V.radiusKm/et),d:et})}if(P.sort((N,V)=>V.E-N.E),y.lights=P,E.kind==="star"){E.catalogIndex!==void 0?l.push(E.catalogIndex):this.cat&&this.cat.sunIndex!==void 0&&E.id==="sun"&&l.push(this.cat.sunIndex);let N=hi(this.fadeEdge.lo,this.fadeEdge.hi,M),V=E.lumV/Math.pow(Math.max(C,1)/Ht,2)*p(E,T,C,E.radiusKm/Math.max(C,1));if(v(T,V,E.color,1-N),y.mesh.visible=M>this.fadeEdge.lo&&this._inFront(t,T,E.radiusKm),y.mesh.visible){this._setMatrix(y.mesh,E,n,T,1,!0);let L=y.mat.uniforms;L.uExposure.value=t.exposure,L.uFade.value=N,L.uBodyRot.value.setFromMatrix4(y.mesh.matrix.clone().setPosition(0,0,0)).multiplyScalar(1/E.radiusKm),this._normRot(L.uBodyRot.value)}o.labels.enabled&&c.push({body:E,rel:T,dist:C,angPx:M,kind:"star"});continue}let U=hi(this.fadeEdge.lo,this.fadeEdge.hi,M),F=M>this.fadeEdge.lo&&this._inFront(t,T,E.radiusKm*1.2);{let N=0;for(let V of P)N+=V.E;if(P.length){let V=Mt((P[0].dir[0]*-T[0]+P[0].dir[1]*-T[1]+P[0].dir[2]*-T[2])/Math.max(C,.001),-1,1),L=Math.acos(V),q=(Math.sin(L)+(Math.PI-L)*Math.cos(L))/Math.PI,Z=(E.albedo??.3)*Math.pow(E.radiusKm/Math.max(C,1),2)*q*N*(2/3)*1.5*p(E,T,C,E.radiusKm/Math.max(C,1)),et=E.meanColor||(E.meanColor=this._meanColor(E));v(T,Z,et,1-U)}}y.mesh.visible=F,F&&this._updateBodyMesh(y,E,n,T,C,S,t,U,_),y.cloudMesh&&(y.cloudMesh.visible=F),y.atmoMesh&&(y.atmoMesh.visible=F),y.ringMesh&&(y.ringMesh.visible=F||E.rings&&M*2.6>.7),y.ringMesh&&y.ringMesh.visible&&this._updateRing(y,E,n,T,t,U),o.labels.enabled&&c.push({body:E,rel:T,dist:C,angPx:M,kind:E.kind})}return this.spriteGeo.instanceCount=d,this.spritePosAttr.needsUpdate=!0,this.spriteColAttr.needsUpdate=!0,this._updateOrbitLines(t,_,n),{hide:l,labels:c,bodyInfo:_}}_inFront(t,e,i){let n=cv.set(e[0],e[1],e[2]).applyMatrix3(t.view),r=n.length();return r<i*1?!0:n.z<i*.5+0&&(-n.z>0||r<i*4)}_meanColor(t){if(Du[t.id])return Du[t.id];let e=t.look&&t.look.colors;return e&&e[1]?[e[1][0],e[1][1],e[1][2]]:[.7,.7,.7]}_normRot(t){let e=t.elements;for(let i=0;i<3;i++){let n=Math.hypot(e[i*3],e[i*3+1],e[i*3+2])||1;e[i*3]/=n,e[i*3+1]/=n,e[i*3+2]/=n}}_setMatrix(t,e,i,n,r,o=!1){let a=e.axesAt(i),l=e.radiusKm*r,c=t.matrix;return c.set(a.x[0]*l,a.z[0]*l,-a.y[0]*l,n[0],a.x[1]*l,a.z[1]*l,-a.y[1]*l,n[1],a.x[2]*l,a.z[2]*l,-a.y[2]*l,n[2],0,0,0,1),t.matrixWorld.copy(c),a}_updateBodyMesh(t,e,i,n,r,o,a,l,c){let d=t.mat.uniforms;this._applySpinLimit(e,i,a);let u=this._setMatrix(t.mesh,e,i,n,1);d.uBodyRot.value.set(u.x[0],u.z[0],-u.y[0],u.x[1],u.z[1],-u.y[1],u.x[2],u.z[2],-u.y[2]),d.uCenterRel.value.set(n[0],n[1],n[2]),d.uExposure.value=a.exposure,d.uFade.value=l,d.uPole.value.set(u.z[0],u.z[1],u.z[2]),d.uDetail.value=this.cfg.visuals.planets.detailBump,d.uNightGain.value=this.cfg.visuals.planets.nightLightGain;let h=t.lights;for(let v=0;v<2;v++){let g=h[v];if(g){d.uLightDir.value[v].set(g.dir[0],g.dir[1],g.dir[2]);let m=g.s.color;d.uLightE.value[v].set(m[0]*g.E,m[1]*g.E,m[2]*g.E),d.uLightAng.value[v]=Math.max(g.ang,1e-5)}else d.uLightE.value[v].set(0,0,0)}let f=2e-9;if(e.parent&&e.parent.kind!=="star"&&h[0]){let v=c.get(e.parent),g=c.get(e),m=Math.hypot(v.p[0]-g.p[0],v.p[1]-g.p[1],v.p[2]-g.p[2]),x=[(v.p[0]-g.p[0])/m,(v.p[1]-g.p[1])/m,(v.p[2]-g.p[2])/m],_=.5*(1+(x[0]*-h[0].dir[0]*-1+x[1]*-h[0].dir[1]*-1+x[2]*-h[0].dir[2]*-1)*0+(x[0]*h[0].dir[0]+x[1]*h[0].dir[1]+x[2]*h[0].dir[2])*-1*-1);f+=(e.parent.albedo??.3)*Math.pow(e.parent.radiusKm/m,2)*h[0].E*.5*Math.max(.02,_*.9)}d.uAmbient.value.set(f,f,f);let p=0;for(let v of t.occluders||[]){if(p>=3)break;let g=c.get(v);if(!g)continue;let m=c.get(e),x=g.p[0]-m.p[0],_=g.p[1]-m.p[1],y=g.p[2]-m.p[2];Math.hypot(x,_,y)>60*Math.max(e.radiusKm,v.radiusKm)+1e6&&!(e.parent===v||v.parent===e)||(d.uOcc.value[p].set(x,_,y,v.radiusKm),p++)}if(d.uOccCount.value=p,t.cloudMesh){let v=1+14/e.radiusKm*1+.0016;this._setMatrix(t.cloudMesh,e,i,n,v)}if(t.atmoMesh){let v=e.atmosphere,g=(e.radiusKm+v.topKm)/e.radiusKm*1.002;this._setMatrix(t.atmoMesh,e,i,n,g),t.atmoMat.side=r<e.radiusKm+v.topKm?Ue:ai,t.atmoMat.uniforms.uStrength.value=(v.strength??1)*this.cfg.visuals.planets.atmosphere}}_applySpinLimit(t,e,i){if(!t.spin||t.spin.sync){t.spinOverride=void 0;return}let n=t.spinAngle?(t.spin.w0+t.spin.rateDegDay*(e-2451545))*Kt:0,r=Math.abs(t.spin.rateDegDay/360)*i.timeScale/86400*86400/86400*1,o=i.timeScale/86400,a=Math.abs(t.spin.rateDegDay/360)*o,l=.45;if(a<=l){t.spinOverride=void 0,t._spinFree=null;return}t._spinFree==null&&(t._spinFree=n),t._spinFree+=Math.sign(t.spin.rateDegDay)*l*Be*(i.dtReal||.016),t.spinOverride=t._spinFree}_updateRing(t,e,i,n,r,o){let a=e.axesAt(i),l=t.ringMesh.matrix;l.set(a.x[0],a.y[0],a.z[0],n[0],a.x[1],a.y[1],a.z[1],n[1],a.x[2],a.y[2],a.z[2],n[2],0,0,0,1),t.ringMesh.matrixWorld.copy(l);let c=t.ringMat.uniforms;c.uBodyRot.value.set(a.x[0],a.y[0],a.z[0],a.x[1],a.y[1],a.z[1],a.x[2],a.y[2],a.z[2]),c.uExposure.value=r.exposure,c.uFade.value=1,c.uPole.value.set(a.z[0],a.z[1],a.z[2]);let d=t.lights||[];for(let u=0;u<2;u++){let h=d[u];if(h){c.uLightDir.value[u].set(h.dir[0],h.dir[1],h.dir[2]);let f=h.s.color;c.uLightE.value[u].set(f[0]*h.E,f[1]*h.E,f[2]*h.E),c.uLightAng.value[u]=Math.max(h.ang,1e-5)}else c.uLightE.value[u].set(0,0,0)}c.uAmbient.value.set(2e-9,2e-9,2e-9)}_updateBelt(t,e,i,n,r,o){let a=e.plane,l=t.points.matrix;if(a)l.set(a[0],a[1],a[2],i[0],a[3],a[4],a[5],i[1],a[6],a[7],a[8],i[2],0,0,0,1);else{let f=Math.cos(23.43928*Kt),p=Math.sin(23.43928*Kt);l.set(1,0,0,i[0],0,f,-p,i[1],0,p,f,i[2],0,0,0,1)}t.points.matrixWorld.copy(l);let c=t.mat.uniforms;c.uExposure.value=o.exposure,c.uGain.value=this.cfg.visuals.belts.gain;let d=e.parent,u=d?d.positionAt(r):[0,0,0],h=Math.max(e.belt.peakAu,.05);c.uE.value=(d&&d.lumV?d.lumV:1)/(h*h),t.points.visible=!0}_updateOrbitLines(t,e,i){let n=this.cfg.visuals.orbitLines.enabled&&t.showOrbits!==!1;for(let r of this.orbitLines||[]){let o=r.body,a=e.get(o.parent),l=e.get(o);if(!n||!a||!l){r.line.visible=!1;continue}r.line.visible=!0;let c=r.line.matrix;c.identity(),c.setPosition(a.rel[0],a.rel[1],a.rel[2]),r.line.matrixWorld.copy(c);let d=o.orbit.a||1,u=a.dist,h=d/Math.max(u,1)*t.focalPx,f=hi(.03,.35,l.dist/d),p=hi(4,40,h);r.mat.opacity=r.baseOpacity*f*p*.5,r.line.visible=r.mat.opacity>.004}}render(t,e){t.render(this.scene,e)}};function uv(s,t,e,i){let n=[],r=[];for(let a=0;a<=i;a++){let l=s+(t-s)*(a/i);for(let c=0;c<=e;c++){let d=c/e*Be;n.push(Math.cos(d)*l,Math.sin(d)*l,0)}}for(let a=0;a<i;a++)for(let l=0;l<e;l++){let c=a*(e+1)+l,d=c+1,u=c+e+1,h=u+1;r.push(c,d,u,d,h,u)}let o=new ye;return o.setAttribute("position",new pe(n,3)),o.setIndex(r),o}function dv(s,t=1024){let e=ti(s),i=document.createElement("canvas");i.width=t,i.height=t/2;let n=i.getContext("2d");n.fillStyle="#b9bcc0",n.fillRect(0,0,i.width,i.height);let r=28,o=8;for(let u=0;u<o;u++)for(let h=0;h<r;h++){let f=i.width/r,p=i.height/o,v=.82+e()*.2,g=Math.round(190*v);n.fillStyle=`rgb(${g},${g+2},${g+5})`,n.fillRect(h*f+1,u*p+1,f-2,p-2),e()<.12&&(n.fillStyle=`rgba(40,44,52,${.15+e()*.25})`,n.fillRect(h*f+3,u*p+3,f*(.3+e()*.6),p*(.3+e()*.6))),e()<.08&&(n.fillStyle="rgba(20,20,24,0.55)",n.fillRect(h*f+f*.2,u*p+p*.4,f*.6,2))}n.strokeStyle="rgba(30,32,38,0.55)",n.lineWidth=1;for(let u=0;u<=r;u++)n.beginPath(),n.moveTo(u*i.width/r,0),n.lineTo(u*i.width/r,i.height),n.stroke();for(let u=0;u<=o;u++)n.beginPath(),n.moveTo(0,u*i.height/o),n.lineTo(i.width,u*i.height/o),n.stroke();n.fillStyle="#d2672b",n.fillRect(0,i.height*.18,i.width,7),n.fillStyle="#1f2a3a",n.fillRect(0,i.height*.58,i.width,4),n.fillStyle="rgba(25,28,34,0.9)",n.font="bold 28px Menlo, monospace",n.fillText("MERIDIAN  ISV-0471",i.width*.18,i.height*.5),n.fillText("MERIDIAN  ISV-0471",i.width*.68,i.height*.5);for(let u=0;u<2200;u++)n.fillStyle=`rgba(20,20,24,${.05+e()*.15})`,n.fillRect(e()*i.width,e()*i.height,1+e()*2,1+e()*2);let a=new gn(i);a.colorSpace=Ge,a.wrapS=bi,a.wrapT=bi,a.anisotropy=8;let l=document.createElement("canvas");l.width=i.width,l.height=i.height,l.getContext("2d").drawImage(i,0,0);let d=new gn(l);return d.wrapS=d.wrapT=bi,{map:a,bump:d}}function Uu(s){let t=document.createElement("canvas");t.width=512,t.height=512;let e=t.getContext("2d");if(s==="radiator"){e.fillStyle="#d9dadc",e.fillRect(0,0,512,512),e.strokeStyle="#7e8288",e.lineWidth=2;for(let n=0;n<=16;n++)e.beginPath(),e.moveTo(n*32,0),e.lineTo(n*32,512),e.stroke(),e.beginPath(),e.moveTo(0,n*32),e.lineTo(512,n*32),e.stroke();e.fillStyle="rgba(40,42,48,0.18)";for(let n=0;n<16;n+=2)e.fillRect(0,n*32,512,32)}else{e.fillStyle="#0c1424",e.fillRect(0,0,512,512),e.strokeStyle="#2f4d86",e.lineWidth=2;for(let n=0;n<=8;n++)e.beginPath(),e.moveTo(n*64,0),e.lineTo(n*64,512),e.stroke();for(let n=0;n<=16;n++)e.beginPath(),e.moveTo(0,n*32),e.lineTo(512,n*32),e.stroke();e.fillStyle="rgba(70,120,200,0.12)";for(let n=0;n<8;n++)for(let r=0;r<16;r++)(n+r)%2&&e.fillRect(n*64+2,r*32+2,60,28)}let i=new gn(t);return i.colorSpace=Ge,i.anisotropy=8,i}function Fu(s,t=64){let e=s.map(([n,r])=>new Ct(n,r)),i=new ta(e,t);return i.rotateX(Math.PI/2),i.computeVertexNormals(),i}function Nu(s){let t=new Ci,e=dv(471),i=Uu("radiator"),n=Uu("pv"),r=(nt,ct=.5,rt=.7)=>new Ui({color:nt,roughness:ct,metalness:rt}),o=new Ui({map:e.map,bumpMap:e.bump,bumpScale:1.4,roughness:.52,metalness:.55});o.map.repeat.set(2,3);let a=r(2106412,.6,.6),l=new Ui({color:13214282,roughness:.32,metalness:.95}),c=new Ui({color:659480,roughness:.08,metalness:.2,emissive:16767392,emissiveIntensity:0}),u=Fu([[.01,-37.5],[.7,-36.6],[1.7,-34.4],[2.7,-30.8],[3.4,-26.5],[3.85,-20.5],[4.1,-12],[4.2,-2],[4.2,8],[4,14],[3.6,19.5],[3.1,23.5],[3,25.5]].map(([nt,ct])=>[nt,ct]),72),h=new It(u,o);h.castShadow=h.receiveShadow=!0,t.add(h);let f=new It(new li(1,32,20),o);f.scale.set(2.6,1.7,6.6),f.position.set(0,3.5,-24.5),f.castShadow=f.receiveShadow=!0,t.add(f);let p=new It(new oi(3.3,.55,3.6),c);p.position.set(0,4.6,-27.6),p.rotation.x=.28,t.add(p);let v=new It(new Si(3.15,3.35,5.6,40),a);v.rotation.x=Math.PI/2,v.position.set(0,0,28),v.castShadow=!0,t.add(v);let g=[[2.1,30.6],[2.6,31.8],[3.3,33.8],[3.8,36.2],[3.8,36.5],[3.55,36.5],[3.1,34.2],[2.4,32],[1.8,30.8]],m=new It(Fu(g,48),new Ui({color:3816772,roughness:.35,metalness:.9,side:Ee}));m.castShadow=!0,t.add(m);let _={map:(()=>{let nt=document.createElement("canvas");nt.width=nt.height=128;let ct=nt.getContext("2d"),rt=ct.createRadialGradient(64,64,0,64,64,64);rt.addColorStop(0,"rgba(255,250,235,1)"),rt.addColorStop(.18,"rgba(255,214,140,0.95)"),rt.addColorStop(.38,"rgba(255,150,60,0.5)"),rt.addColorStop(.68,"rgba(255,100,30,0.14)"),rt.addColorStop(1,"rgba(255,80,20,0)"),ct.fillStyle=rt,ct.fillRect(0,0,128,128);let wt=new gn(nt);return wt.colorSpace=Ge,wt})(),transparent:!0,blending:_i,depthWrite:!1},y=new Li({..._,opacity:.9,side:Ee}),E=new It(new gs(3.45,40),y);E.position.set(0,0,36.3),E.rotation.y=Math.PI,t.add(E);let A=new Li({..._,opacity:.9,side:Ee}),T=new It(new gs(2,32),A);T.position.set(0,0,31.4),T.rotation.y=Math.PI,t.add(T);let C=new ms({..._,opacity:0,color:16756848}),S=new Hs(C);S.position.set(0,0,37.5),S.scale.set(13,13,1),t.add(S);let M=new It(new Si(4.35,4.35,.5,48),l);M.rotation.x=Math.PI/2,M.position.set(0,0,11.5),M.castShadow=!0,t.add(M);let P=M.clone();P.position.z=12.4,P.scale.set(.96,1,.96),t.add(P);let U=ti(99);for(let nt=0;nt<38;nt++){let ct=.5+U()*1.6,rt=.2+U()*.4,wt=.8+U()*2.6,Pt=new It(new oi(ct,rt,wt),U()<.2?a:o),Yt=U()*Math.PI*2,D=-18+U()*34,ee=(D<-12?3.9:4.2)+rt*.3;Pt.position.set(Math.cos(Yt)*ee,Math.sin(Yt)*ee,D),Pt.rotation.z=Yt-Math.PI/2,Pt.castShadow=Pt.receiveShadow=!0,t.add(Pt)}let F=new It(new Si(.06,.1,5.5,8),a);F.position.set(.9,6,-3),t.add(F);let N=new It(new li(1.5,24,12,0,Math.PI*2,0,Math.PI/3),r(14540253,.3,.9));N.position.set(.9,8.9,-3),N.rotation.x=-.5,N.castShadow=!0,t.add(N);let V=new It(new Si(.04,.04,7,6),a);V.position.set(-1.3,6.4,9),t.add(V);let L=new Ui({map:i,roughness:.55,metalness:.3,side:Ee}),q=[];for(let nt of[-1,1]){let ct=new It(new oi(5.2,.35,1.6),o);ct.position.set(nt*6.6,.4,1),ct.castShadow=!0,t.add(ct);let rt=new It(new oi(11.5,.12,15),L);rt.position.set(nt*14.4,.4,3.2),rt.rotation.y=nt*-.08,rt.castShadow=rt.receiveShadow=!0,t.add(rt),q.push(rt);let wt=new It(new oi(11.7,.22,.3),l);wt.position.set(nt*14.4,.4,-4.4),t.add(wt)}let O=[],Z=[],et=new Ci;for(let nt of[-1,1]){let ct=new It(new oi(5.4,.5,1.2),a);ct.position.set(nt*6.4,-2.2,8),ct.rotation.z=nt*-.18,t.add(ct);let rt=new It(new Si(1.15,1,29,24),o);rt.rotation.x=Math.PI/2,rt.position.set(nt*9.2,-3.3,8),rt.castShadow=rt.receiveShadow=!0,t.add(rt);let wt=new It(new li(1.15,20,12,0,Math.PI*2,0,Math.PI/2),o);wt.rotation.x=-Math.PI/2,wt.position.set(nt*9.2,-3.3,-6.5),wt.castShadow=!0,t.add(wt);for(let zt=0;zt<8;zt++){let bt=new Ui({color:661028,emissive:4892927,emissiveIntensity:0,roughness:.3,metalness:.4}),$t=new It(new ia(1.26,.14,10,28),bt);$t.position.set(nt*9.2,-3.3,-3.5+zt*2.9),t.add($t),O.push(bt)}let Pt=new It(new ea(.95,1.5,24),a);Pt.rotation.x=-Math.PI/2,Pt.position.set(nt*9.2,-3.3,23.4),t.add(Pt);let Yt=new Li({color:16777215,transparent:!0,opacity:0,blending:_i,depthWrite:!1,side:Ee}),D=new It(new Si(1.52,1.32,29.5,28,1,!0),Yt);D.rotation.x=Math.PI/2,D.position.set(nt*9.2,-3.3,8),t.add(D),Z.push(Yt);let ee=new It(new li(1.3,16,10),Yt.clone());ee.position.set(nt*9.2,-3.3,-6.6),t.add(ee),Z.push(ee.material);let Ot=new It(new gs(.9,20),new Li({color:6732799,transparent:!0,opacity:0,blending:_i,depthWrite:!1}));Ot.position.set(nt*9.2,-3.3,24.3),Ot.rotation.y=Math.PI,t.add(Ot),et.add(Ot)}for(let nt of[-30,20])for(let ct of[0,1,2,3]){let rt=new It(new oi(.7,.35,.9),a),wt=ct*Math.PI/2+Math.PI/4,Pt=nt<0?3:3.55;rt.position.set(Math.cos(wt)*Pt,Math.sin(wt)*Pt,nt),rt.rotation.z=wt-Math.PI/2,t.add(rt)}let ht=[],Ut=[[-18.8,.7,5,16722474,"port"],[18.8,.7,5,2817877,"stbd"],[0,3.9,24.2,16777215,"tail"],[0,-4.4,-22,16777215,"strobe"]];for(let[nt,ct,rt,wt,Pt]of Ut){let Yt=new Li({color:wt,transparent:!0,blending:_i,depthWrite:!1}),D=new It(new li(.28,10,8),Yt);D.position.set(nt,ct,rt),t.add(D),ht.push({mesh:D,kind:Pt,mat:Yt});let ee=new Hs(new ms({color:wt,transparent:!0,opacity:0,blending:_i,depthWrite:!1,map:fv()}));ee.scale.set(3,3,1),ee.position.copy(D.position),t.add(ee),ht[ht.length-1].halo=ee}let kt=new oe({transparent:!0,depthWrite:!1,blending:_i,side:Ee,uniforms:{uPower:{value:0},uTime:{value:0},uColor:{value:new qt(1,.5,.14)}},vertexShader:"varying vec2 vUv; varying vec3 vP; void main(){ vUv=uv; vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`precision highp float; varying vec2 vUv; varying vec3 vP; uniform float uPower; uniform float uTime; uniform vec3 uColor;
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
        gl_FragColor = vec4(c*1.0, 1.0); }`}),X=new It(new Si(.4,3.2,1,32,1,!0),kt);X.geometry.translate(0,.5,0),X.rotation.x=Math.PI/2,X.position.set(0,0,36.2),X.frustumCulled=!1,t.add(X),X.userData.baseLen=1;let J=new Ci,lt=30.6;J.position.set(0,0,lt);for(let nt of[m,E,T,S,X])nt.position.z-=lt,J.add(nt);return t.add(J),t.traverse(nt=>{nt.isMesh&&nt.material&&nt.material.isMeshStandardMaterial&&(nt.castShadow=nt.castShadow||!1)}),{root:t,hullMat:o,coilMats:O,engineGlow:E,plume:X,plumeMat:kt,lights:ht,nacelles:et,update(nt,ct,rt){rt.gimbal&&(J.rotation.x+=(rt.gimbal.x-J.rotation.x)*1,J.rotation.y+=(rt.gimbal.y-J.rotation.y)*1),kt.uniforms.uTime.value=ct;let wt=$l(rt.engines?rt.engines.rocket:rt.throttle);kt.uniforms.uPower.value=wt*s.visuals.ship.engineGlow;let Pt=4+26*Math.pow(wt,.8);X.scale.set(.8+.4*wt,Pt,.8+.4*wt),X.visible=wt>.02,y.opacity=wt>.02?.2+.75*wt:0,A.opacity=wt>.02?.3+.7*wt:0,C.opacity=wt>.02?(.08+.34*wt)*s.visuals.ship.engineGlow:0,S.scale.setScalar(10+8*wt);let Yt=$l(rt.engines?rt.engines.cruise:0),D=$l(rt.engines?rt.engines.warp:rt.warp),ee=rt.speed01||0,Ot=D/(Yt+D+1e-6),zt=D>.01?.78+.22*Math.sin(ct*(2.2+6*ee)*Math.PI*2*.5):1,bt=Yt*.8+D*zt,$t=1+(.3-1)*Ot,_t=.97+(.6-.97)*Ot,R=.92+(1-.92)*Ot;for(let b of O)b.emissive.setRGB($t,_t,R),b.emissiveIntensity=.04+3.2*bt;for(let b of Z)b.color.setRGB($t,_t,R),b.opacity=.34*bt*bt+.06*bt;for(let b of et.children)b.material.color.setRGB($t,_t,R),b.material.opacity=.85*bt;for(let b of ht){let H=1;b.kind==="strobe"?H=Math.floor(ct*1.1)%2===0&&ct*1.1%1<.12?1:0:b.kind==="tail"&&(H=ct%1.6<.8?.9:.25),b.mat.opacity=H*(s.visuals.ship.lights?1:0),b.halo.material.opacity=H*.55*(s.visuals.ship.lights?1:0)}c.emissiveIntensity=0}}}var $l=s=>s<0?0:s>1?1:s,Ea;function fv(){if(Ea)return Ea;let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ea=new gn(s),Ea}var pv=`
varying vec3 vN; varying vec3 vP; varying vec3 vView;
void main() {
  vP = position; vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}`,mv=`
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
}`,gv=`
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
}`,vv=`
precision highp float;
varying vec3 vCol; varying float vA; varying float vEdge; varying float vSide;
void main() {
  float e = clamp(vEdge, 0.0, 1.0);
  float a = vA * e * e * (1.0 - min(vSide * vSide, 1.0));
  gl_FragColor = vec4(vCol * a, 1.0);
}`,Ta=class{constructor(t,e){this.gfx=t,this.cfg=e,this.scene=new Di,this.camera=new Ne(e.camera.fovDeg,1,.15,6e3),this.ship=Nu(e),this.scene.add(this.ship.root),this.sun=new Gs(16777215,3),this.sun.castShadow=!!e.visuals.ship.shadows,this.sun.shadow.mapSize.set(2048,2048);let i=this.sun.shadow.camera;i.left=-45,i.right=45,i.top=45,i.bottom=-45,i.near=1,i.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.15,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Gs(11189247,0),this.scene.add(this.fill),this.amb=new ra(16777215,0),this.scene.add(this.amb),this._buildEnv(),this.bubbleMat=new oe({vertexShader:pv,fragmentShader:mv,transparent:!0,depthWrite:!1,side:ai,blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uForm:{value:0},uTime:{value:0},uSpeed:{value:0},uPulse:{value:0},uOpacity:{value:1},uForwardView:{value:new I(0,0,-1)}}}),this.bubble=new It(new li(70,96,64),this.bubbleMat),this.bubble.scale.set(1.9,.5,1.7),this.bubble.renderOrder=50,this.bubble.visible=!1,this.bubble.frustumCulled=!1,this.scene.add(this.bubble);{let r=new Float32Array(7800),o=new Float32Array(650*4*4),a=new Float32Array(650*4*2),l=new Uint32Array(650*6),c=12345,d=()=>(c=c*1664525+1013904223>>>0)/4294967296;for(let h=0;h<650;h++){let f=d()*Math.PI*2,p=d(),v=d(),g=d();for(let m=0;m<4;m++){let x=h*4+m;o.set([f,p,v,g],x*4),a.set([m<2?0:1,m%2?1:-1],x*2)}l.set([h*4,h*4+1,h*4+2,h*4+1,h*4+3,h*4+2],h*6)}let u=new ye;u.setAttribute("position",new de(r,3)),u.setAttribute("aP",new de(o,4)),u.setAttribute("aC",new de(a,2)),u.setIndex(new de(l,1)),this.flowMat=new oe({vertexShader:gv,fragmentShader:vv,transparent:!0,depthWrite:!1,depthTest:!0,side:Ee,blending:ci,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uTime:{value:0},uFlow:{value:0},uLen:{value:0},uSpan:{value:3600},uBub:{value:120},uWidth:{value:1.6},uAmp:{value:0},uRes:{value:new Ct(1,1)}}}),this.flow=new It(u,this.flowMat),this.flow.frustumCulled=!1,this.flow.renderOrder=40,this.flow.visible=!1,this.scene.add(this.flow)}this.t=0}_buildEnv(){let t=this.gfx.renderer,e=new ps(t),i=new Di,n=new oe({side:Ue,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`precision highp float; varying vec3 vD;
        void main(){ float d = vD.y;                       // +Y = toward the nearest big body (reflected light)
          float g = smoothstep(-0.15, 1.0, d);
          vec3 c = vec3(0.0) + vec3(1.0, 1.0, 1.0) * pow(g, 1.4);
          // faint cool floor so the far side is not pure black
          c += vec3(0.02, 0.025, 0.035);
          gl_FragColor = vec4(c, 1.0); }`});i.add(new It(new li(10,32,16),n)),this.envRT=e.fromScene(i,.04),this.scene.environment=this.envRT.texture,e.dispose()}update(t){this.t+=t.dt||0;let e=this.ship.root;e.quaternion.copy(t.quat),e.visible=t.cam.dist>this.cfg.ship.lengthM*this.cfg.camera.hideShipBelowLengths;let{yaw:i,pitch:n,dist:r,up:o}=t.cam,a=Math.cos(n),l=new I(Math.sin(i)*a,Math.sin(n),Math.cos(i)*a),c=l.clone().negate(),d=new I(0,a>=0?1:-1,0),u=new I().crossVectors(c,d);u.lengthSq()<1e-8&&u.set(Math.cos(i),0,-Math.sin(i)),u.normalize();let h=new I().crossVectors(u,c),f=new Me().setFromRotationMatrix(new jt().makeBasis(u,h,c.clone().negate())),p=l.clone().multiplyScalar(r).add(new I(0,o,0)),v=1-hi(this.cfg.ship.lengthM*.15,this.cfg.ship.lengthM*1,r),g=(t.camFrame||t.quat).clone().slerp(t.quat,v),m=g.clone().multiply(f),x=p.clone().applyQuaternion(g);this.camera.position.copy(x),this.camera.quaternion.copy(m),this.camera.near=Math.max(.15,(r-60)*.1),this.camera.far=r+4500,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0);let _=t.exposure,y=Math.PI,E=t.sunE,A=t.sunVisible??1;this.sun.color.setRGB(1,1,1),this.sun.intensity=y*_*1*Math.max(E[0]*.2126+E[1]*.7152+E[2]*.0722,0)*A,this.sun.color.setRGB(E[0]/(E[1]||1),1,E[2]/(E[1]||1)),this.sun.color.multiplyScalar(1);let T=new I().fromArray(t.sunDir);this.sun.position.copy(T).multiplyScalar(200),this.sun.target.position.set(0,0,0),this.sun.visible=A>.001,this.sun.castShadow=!!this.cfg.visuals.ship.shadows;let C=t.bodyShine||0;this.scene.environmentIntensity=y*_*(C*1+4e-9*0+0)+0;let S=new I().fromArray(t.bodyDir||[0,1,0]),M=new Me().setFromUnitVectors(new I(0,1,0),S);this.scene.environmentRotation=new Fe().setFromQuaternion(M),this.amb.intensity=y*_*(t.ambientE||0)+.015*(1-Math.min(1,t.warp.form))*(this.cfg.visuals.ship.shadowFill??1),this.ship.update(t.dt||0,this.t,{gimbal:t.gimbal,engines:t.engines,speed01:t.warp.speed01,throttle:t.throttle,warp:t.warp.form,engineOn:!0});let P=t.warp.form;if(this.bubble.visible=P>.002||t.warp.pulse>.01,this.bubble.visible){let U=this.bubbleMat.uniforms;U.uForm.value=P,U.uTime.value=this.t,U.uSpeed.value=t.warp.speed01,U.uPulse.value=t.warp.pulse,U.uOpacity.value=this.cfg.warp.visual.bubbleOpacity;let F=.35+.65*hi(0,.6,P);this.bubble.scale.set(1.9*F,.5*F,1.7*F*(1+.12*t.warp.speed01)),this.bubble.quaternion.copy(t.quat)}{let U=t.warp.speed01,F=P*(.7-.4*U)*this.cfg.warp.visual.streakScale;if(this.flow.visible=F>.004,this.flow.visible){let N=this.flowMat.uniforms;N.uTime.value=this.t,N.uFlow.value=350+9e3*Math.pow(U,1.2),N.uLen.value=40+900*U,N.uAmp.value=.22*F,N.uBub.value=133*(.35+.65*hi(0,.6,P)),N.uRes.value.set(this.gfx.W,this.gfx.H),N.uWidth.value=Math.max(1.2,1.8*this.gfx.W/1600),this.flow.quaternion.copy(t.quat)}}return{camQuat:m,offsetWorld:x}}render(t){t.render(this.scene,this.camera)}};var ce=299792.458,ei=s=>new I(s[0],s[1],s[2]),Aa=class{constructor(t,e){this.uni=t,this.cfg=e,this.cat=t.cat;let i=e.sim.startTime;this.jd=i==="now"||!i?zl(new Date):zl(new Date(i)),this.timeIndex=e.time.initialStep,this.timeScale=e.time.steps[this.timeIndex],this.timeEff=this.timeScale,this.timeAuto=e.time.auto.enabled,this.system=t.solar,this.ref=null,this.anchorPc=[0,0,0],this.pos=[0,0,0],this.vel=[0,0,0],this.q=new Me,this.angVel=new I,this.qCam=new Me,this.camRecentre=0,this._attRate=0,this.gimbal={x:0,y:0},this._attErr=null,this._dtFrame=1/60,this.speedTarget=0,this.speed=0,this.warp={on:!1,c:0,step:0,form:0,pulse:0,flash:0,capC:1/0,capWhy:"",dropping:!1,rampTimer:0},this.mode="free",this.orbit=null,this.course=null,this.trip={elapsed:0,start:null,label:""},this.input={throttle:0,yaw:0,pitch:0,roll:0,brake:!1},this.messages=[],this.msgTimer=0,this.lastSafeBody=null,this.safeHit=0,this.frameCount=0,this.tour=null,this.tourPace=e.tour.defaultPace,this._destCache=null,this._destT=-1,this.eng={rocket:0,cruise:0,warp:0},this.ins=null,this.xfer=null,this.thrust=0,this.thrustT=0,this.flipping=!1,this.intentDir=null,this.cam={yaw:0,pitch:.28,dist:e.ship.lengthM*e.camera.chaseDistanceLengths,up:e.ship.lengthM*.1,yawT:0,pitchT:.28,distT:e.ship.lengthM*e.camera.chaseDistanceLengths,drift:!1},this.autoCamRecenter=0,this.startTour=e.sim.startWithTour,this.placeAtBody(t.solar.get("earth"),5.5,.9,.3)}say(t,e=4){this.messages.push({msg:t,t:e}),this.messages.length>4&&this.messages.shift()}refPos(t=this.jd){return this.ref?this.ref.positionAt(t):[0,0,0]}refVel(t=this.jd){return this.ref?this.ref.velocityAt(t):[0,0,0]}sysPos(t=this.jd){let e=this.refPos(t);return[e[0]+this.pos[0],e[1]+this.pos[1],e[2]+this.pos[2]]}sysVel(t=this.jd){let e=this.refVel(t);return[e[0]+this.vel[0],e[1]+this.vel[1],e[2]+this.vel[2]]}shipPc(t=this.jd){let e=this.sysPos(t),i=this.system?this.system.originPc:this.anchorPc;return[i[0]+e[0]/ne,i[1]+e[1]/ne,i[2]+e[2]/ne]}forward(){return new I(0,0,-1).applyQuaternion(this.q)}up(){return new I(0,1,0).applyQuaternion(this.q)}right(){return new I(1,0,0).applyQuaternion(this.q)}setRef(t,e=this.jd){if(t===this.ref)return;let i=this.sysPos(e),n=this.sysVel(e);this.ref=t;let r=this.refPos(e),o=this.refVel(e);this.pos=[i[0]-r[0],i[1]-r[1],i[2]-r[2]],this.vel=[n[0]-o[0],n[1]-o[1],n[2]-o[2]]}enterOrbit(t,e,i,n,r=0,o=!1){this.setRef(t);let a=Math.sqrt(Math.max(t.gm,1e-6)/(e*e*e))*(o?-1:1);this.orbit={body:t,r:e,ex:i,ey:n,theta:r,omega:a},this._applyOrbit(0)}_applyOrbit(t){let e=this.orbit;e.theta+=e.omega*t,this._applyOrbitState()}_applyOrbitState(){let t=this.orbit,e=Math.cos(t.theta),i=Math.sin(t.theta);this.pos=[t.r*(e*t.ex[0]+i*t.ey[0]),t.r*(e*t.ex[1]+i*t.ey[1]),t.r*(e*t.ex[2]+i*t.ey[2])];let n=t.r*t.omega;this.vel=[n*(-i*t.ex[0]+e*t.ey[0]),n*(-i*t.ex[1]+e*t.ey[1]),n*(-i*t.ex[2]+e*t.ey[2])]}breakOrbit(){this.orbit&&(this.orbit=null,this.speedTarget=Jt(this.vel))}placeAtBody(t,e,i=.6,n=.25){let r=Math.max(t.safeRadiusKm(this.cfg),t.radiusKm*e),o=fe([Math.cos(i)*Math.cos(n),Math.sin(i)*Math.cos(n),Math.sin(n)]),a=fe(je(t.pole,o));(!isFinite(a[0])||Jt(a)<1e-6)&&(a=Ni(o)),this.system=t.system,this.enterOrbit(t,r,o,a,0);let l=ei(this.vel).normalize();this._lookAlong(l,1/0,new I(0,0,1))}_lookAlong(t,e=1/0,i){let n=t.clone().normalize();if(n.lengthSq()<.5)return;let r=i?i.clone():this.up().clone();Math.abs(r.dot(n))>.98&&(r=new I(0,0,1)),Math.abs(r.dot(n))>.98&&(r=new I(0,1,0));let o=new jt().lookAt(new I(0,0,0),n.clone(),r),a=new Me().setFromRotationMatrix(o);if(e===1/0){this.q.copy(a),this.qCam.copy(a),this._attRate=0;return}let l=this.cfg.ship,c=Math.max(this._dtFrame,1e-4),d=this.q.angleTo(a);if(d<1e-4){this._attRate*=Math.exp(-c/.2);return}let u=Math.min(e/c,l.maxTurnDegPerSec*Math.PI/180),h=Math.min(u,l.attitudeGain*d*1+8e-4);this._attRate+=(h-this._attRate)*(1-Math.exp(-c/l.attitudeLagSec));let f=Math.min(d,Math.max(this._attRate,0)*c),p=this.q.clone().invert().multiply(a);p.w<0&&(p.x=-p.x,p.y=-p.y,p.z=-p.z,p.w=-p.w);let v=Math.sqrt(Math.max(1-p.w*p.w,1e-12));this._attErr={ax:p.x/v,ay:p.y/v,mag:Math.min(d,.35)},this.q.rotateTowards(a,f)}rotateShip(t){let e=this.q.clone();this.q.multiply(t).normalize();let i=this.q.clone().multiply(e.invert());this.qCam.premultiply(i).normalize()}recenterCamera(){this.camRecentre=1.2}camToward(t,e=0,i=0,n,r=!0){let o=this.qCam.clone().invert(),a=ei(t).normalize().applyQuaternion(o),l=Math.atan2(a.x,a.z)+e,c=Math.asin(Mt(a.y,-1,1))+i;if(r)this.cam.yaw=this.cam.yawT=l,this.cam.pitch=this.cam.pitchT=c,n!=null&&(this.cam.dist=this.cam.distT=n);else{let d=l-this.cam.yawT;d=Math.atan2(Math.sin(d),Math.cos(d)),l=this.cam.yawT+d,this.cam.yawT=l,this.cam.pitchT=c,n!=null&&(this.cam.distT=n)}}_tourTravelCam(t,e){t.camT=(t.camT||0)+e;let i=this.cfg.ship.lengthM,n=performance.now()<(this.cam.holdUntil||0),r=t.zoomMul||1,o=t.camT*.35;n||(this.cam.yawT=.35*Math.sin(o),this.cam.pitchT=.3+.06*Math.sin(o*.7)),this.cam.distT=i*2.6*r}_tourCamera(t){let e=this.tour;if(!e||this.mode!=="tour")return;let i=e.curBody;if(!i||!this.system||i.system!==this.system){this._tourTravelCam(e,t);return}let n=i.positionAt(this.jd),r=this.sysPos(),o=fe([n[0]-r[0],n[1]-r[1],n[2]-r[2]]);e.camT=(e.camT||0)+t;let a=this.cfg.ship.lengthM,l=e.zoomMul||1,c=performance.now()<(this.cam.holdUntil||0);if(e.phase==="dwell"){let d=this.system.stars[0].positionAt(this.jd),u=fe([d[0]-r[0],d[1]-r[1],d[2]-r[2]]),h=fe(Ks(Pe(o,-1),Pe(u,.12))),f=e.camT*this.cfg.tour.cameraDriftDegPerSec*Math.PI/180,p=a*(2.7+.5*Math.sin(f*.5))*l;c?this.cam.distT=p:this.camToward(h,.2*Math.sin(f*.9)+.08,.1+.04*Math.sin(f*.6),p,!1)}else{let d=e.camT*.35;c||(this.cam.yawT=.35*Math.sin(d),this.cam.pitchT=.3+.06*Math.sin(d*.7)),this.cam.distT=a*2.6*l}}_capK(t){if(this.system)return t;let e=this.cfg.time.interstellarMaxC;if(!(e>0))return t;let i=Math.max(this.speed,1);return Math.max(1,Math.min(t,e*ce/i))}get kNow(){return this.warp.on?this._warpK():this.ins?this.ins.k:this.xfer?this.xfer.k:this._capK(this.timeAuto&&this.course?this.timeEff:this.timeScale)}setTimeIndex(t){this.timeIndex=Mt(t,0,this.cfg.time.steps.length-1),this.timeScale=this.cfg.time.steps[this.timeIndex],this.timeAuto=!1,this.tour&&this.tour.pace==="fast"&&this.setTourPace("slow")}setTimeAuto(t){if(t&&this.tour&&this.tour.pace==="slow"){this.setTourPace("fast");return}this.timeAuto=t}getDestinations(t=!1){let e=performance.now();if(!t&&this._destCache&&e-this._destT<this.cfg.destinations.refreshSec*1e3)return this._destCache;let i={bodies:[],systems:[]};if(this.system)for(let o of this.system.bodies){if(o.kind==="belt")continue;let a=o.positionAt(this.jd),l=this.sysPos();i.bodies.push({body:o,name:o.name,kind:o.kind,dist:Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2]),parent:o.parent})}let n=this.shipPc(),r=this.uni.destinationsNear(n,this.cfg.destinations.radiusLy);for(let o of r)this.system&&o.group.members.some(a=>this.system.starIndices&&this.system.starIndices.includes(a))||i.systems.push(o);return i.systems=i.systems.slice(0,this.cfg.destinations.maxListed),this._destCache=i,this._destT=e,i}searchSystems(t,e=14){if(!t||t.trim().length<2)return[];let i=this.cat,n=this.shipPc(),r=this.cfg.destinations.radiusLy,o=new Set,a=[];for(let l of i.search(t)){let c=i.systemOf(l,this.cfg.destinations.groupAu);if(!c||o.has(c.key)||(o.add(c.key),this.system&&this.system.starIndices&&c.members.some(h=>this.system.starIndices.includes(h))))continue;let d=c.centre,u=Math.hypot(d[0]-n[0],d[1]-n[1],d[2]-n[2])*Ws;a.push({group:c,name:c.name,distLy:u,known:c.members.some(h=>i.hasKnownPlanets(h)),stars:c.members.length,outOfRange:u>r})}return a.sort((l,c)=>l.distLy-c.distLy),a.slice(0,e)}engageAutopilot(){let t=this.course;if(!t){this.say("No course set");return}if(t.engaged){this.disengageAutopilot();return}this.stopTour(),this.course=t,t.engaged=!0,t.userStep=!1,this.mode="auto",this.timeAuto=this.cfg.time.auto.enabled,this.xfer=null,(t.kind==="body"||t.phase==="align")&&this.breakOrbit(),this.say("Autopilot engaged")}disengageAutopilot(t="Autopilot disengaged \u2014 manual control"){let e=this.course;e&&(e.engaged=!1),this.mode==="auto"&&(this.mode="free"),this.timeAuto=!1,this.speedTarget=this.warp.on?this.speedTarget:Jt(this.vel),t&&this.say(t)}cancelCourse(t){this.course=null,this.mode==="auto"&&(this.mode="free"),t&&this.say(t)}stopTour(){if(!this.tour)return;let t=this.tour.pace==="slow";this.tour=null,this.mode==="tour"&&(this.mode="free"),this.course=null,this.timeAuto=!1,t||(this.timeIndex=0,this.timeScale=this.cfg.time.steps[0],this.timeEff=this.timeScale),this.cam.yawT=this.cam.yaw,this.say("Tour ended \u2014 you have the helm")}_dwellScale(t){if(typeof t.timeScale=="number")return t.timeScale;let e=this.orbit;if(!e)return 60;let i=2*Math.PI*Math.sqrt(Math.pow(e.r,3)/Math.max(e.body.gm,1e-6));return Mt(i/this.cfg.tour.orbitSeconds,1,this.cfg.time.steps[this.cfg.time.steps.length-1])}_systemStops(){let t=this.system;if(!t)return[];if(t===this.uni.solar)return this.cfg.tour.stops.filter(n=>t.get(n.body));let i=t.bodies.filter(n=>(n.kind==="planet"||n.kind==="dwarf")&&n.semiMajorKm).sort((n,r)=>n.semiMajorKm-r.semiMajorKm).slice(0,9).map(n=>({body:n.id,distance:6,dwell:18,legSeconds:30,timeScale:"orbit",note:n.name}));return!i.length&&t.stars[0]&&i.push({body:t.stars[0].id,distance:4,dwell:20,legSeconds:30,timeScale:"orbit",note:t.stars[0].name}),i}beginTour(t=null,e=null){e=e||this.tourPace,t=t||(this.system?"system":"stars");let i=[];if(t==="system"){if(!this.system){this.say("Enter a star system first, or take the stars tour");return}if(i=this._systemStops(),!i.length){this.say("Nothing to tour here");return}}this.cancelCourse(),this.tourPace=e,this.tour={scope:t,pace:e,idx:-1,phase:"dwell",timer:0,stops:i,visited:new Set(this.system&&this.system.starIndices?this.system.starIndices:[]),curBody:null},this.mode="tour",e==="slow"?(this.timeAuto=!1,this.timeIndex=this.cfg.tour.slowInitialStep[t],this.timeScale=this.cfg.time.steps[this.timeIndex],this.timeEff=this.timeScale):this.timeAuto=!0,t==="stars"?this._starsHop():this._tourNext(!0),this.say(`${e==="slow"?"Slow":"Fast"} ${t==="stars"?"local stars":"star system"} tour${e==="slow"?" \u2014 set the pace with the TIME buttons":""}`,4)}setTourPace(t){this.tourPace=t;let e=this.tour;if(!(!e||e.pace===t)){if(e.pace=t,t==="slow")this.timeAuto=!1;else if(this.timeAuto=!0,e.phase==="dwell"){let i=e.stops[e.idx]||{timeScale:"orbit"};this.timeScale=this._dwellScale(i),this.timeEff=this.timeScale,this.timeAuto=!1}this.say(t==="slow"?"Slow tour \u2014 you set the time compression":"Fast tour \u2014 time compression is automatic",3)}}_dwellStart(t){let e=this.tour,i=e.pace==="slow";e.phase="dwell",e.timer=t.dwell*(i?this.cfg.tour.slowDwellFactor:1),this.timeAuto=!1,this.mode="tour",i||(this.timeScale=this._dwellScale(t),this.timeEff=this.timeScale),e.curBody=this.orbit?this.orbit.body:e.curBody}_tourNext(t=!1){let e=this.tour;if(e.scope==="stars"){this._starsHop();return}e.idx=(e.idx+1)%e.stops.length;let i=e.stops[e.idx],n=this.system.get(i.body);if(!n){e.stops.splice(e.idx,1),e.stops.length?(e.idx--,this._tourNext(t)):this.stopTour();return}if(e.curBody=n,t&&i.legSeconds===0){this.warp.on=!1,this.warp.c=0,this.warp.form=0,this.placeAtBody(n,i.distance,.9,.3),this._dwellStart(i);return}e.phase="travel",this.course={kind:"body",body:n,radius:Math.max(n.safeRadiusKm(this.cfg),n.radiusKm*i.distance),targetSeconds:i.legSeconds,tour:!0,engaged:!0,label:n.name},this.timeAuto=e.pace==="fast",this.mode="tour",this.trip={elapsed:0,label:n.name}}_starsHop(){let t=this.tour;t.phase="travel",t.curBody=null;let e=this.getDestinations(!0).systems.filter(o=>!o.outOfRange),i=o=>o.group.members.some(a=>t.visited.has(a)),n=e.find(o=>!i(o));if(!n){if(t.visited.clear(),this.system&&this.system.starIndices)for(let o of this.system.starIndices)t.visited.add(o);n=e[0]}if(!n){this.say("No star systems in range for the tour"),this.stopTour();return}for(let o of n.group.members)t.visited.add(o);let r=this.uni.systemForGroup(n.group);this.breakOrbit(),this.xfer=null,this.ins=null,this.course={kind:"system",group:n.group,system:r,name:n.name,targetPc:n.group.centre,phase:"align",label:n.name,hpKm:this.uni.heliopauseOfStar(n.group.primary),engaged:!0,tour:!0},this.timeAuto=t.pace==="fast",this.mode="tour",this.trip={elapsed:0,label:n.name},this.say(`Next stop: ${n.name} \u2014 ${n.distLy.toFixed(2)} ly`,4)}_starsTourArrived(t){let e=this.tour,i=t.system,n=i.bodies.filter(a=>a.kind==="planet"&&a.radiusKm>2e3).sort((a,l)=>(a.semiMajorKm||0)-(l.semiMajorKm||0)),o=n.find(a=>a.habitable||a.inHabitableZone)||n[Math.floor(n.length/2)]||n[0]||i.stars[0];e.curBody=o,e.stops=[{body:o.id,distance:6,dwell:this.cfg.tour.starsDwell,legSeconds:this.cfg.tour.starsLegSeconds,timeScale:"orbit",note:o.name}],e.idx=0,this.course={kind:"body",body:o,radius:Math.max(o.safeRadiusKm(this.cfg),o.radiusKm*(o.kind==="star"?4:6)),targetSeconds:this.cfg.tour.starsLegSeconds,tour:!0,engaged:!0,label:o.name},this.timeAuto=e.pace==="fast",this.mode="tour",this.trip={elapsed:0,label:o.name},this.say(`Arrived at ${t.name} \u2014 visiting ${o.name}`,4)}setCourseBody(t,e="orbit",i=null){if(!t||t.system!==this.system)return;this.stopTour();let n=t.safeRadiusKm(this.cfg),r=e==="approach"?Math.max(n*1.5,t.radiusKm*this.cfg.autopilot.approachRadii):Math.max(n,t.radiusKm+this.cfg.autopilot.arrivalOrbitAltKm);if(i!=null&&isFinite(i)&&(r=Math.max(n,t.radiusKm+i)),this.xfer&&e==="orbit"){this.say("Orbit change already under way \u2014 wait for the burn to finish (or press W/S/X to abort)",4);return}if(this.orbit&&this.orbit.body===t&&e==="orbit"){let o=t.soiKm;if(isFinite(o)&&(r=Math.min(r,o*.9)),this.course=null,this.mode==="auto"&&(this.mode="free"),Math.abs(r-this.orbit.r)<.002*r){this.say("Already in that orbit");return}this._startTransfer(t,r);return}this.xfer=null,this.course={kind:"body",body:t,mode:e,radius:r,targetSeconds:this.cfg.time.auto.targetSeconds,label:t.name,engaged:!1},this.trip={elapsed:0,label:t.name},this.say(`Course set: ${t.name}${e==="approach"?" (approach)":""} \u2014 aligning; press AUTO to engage the autopilot`,4)}setCourseSystem(t){if(t.outOfRange){this.say(`${t.name} is ${t.distLy.toFixed(1)} ly away \u2014 courses reach ${this.cfg.destinations.radiusLy} ly (warp closer first)`,4);return}this.stopTour();let e=this.uni.systemForGroup(t.group);this.course={kind:"system",group:t.group,system:e,name:t.name,targetPc:t.group.centre,phase:"align",label:t.name,hpKm:this.uni.heliopauseOfStar(t.group.primary),engaged:!1},this.trip={elapsed:0,label:t.name},this.say(`Course set: ${t.name} \u2014 ${t.distLy.toFixed(2)} ly \u2014 aligning; press AUTO to engage the autopilot`,4)}get subKms(){return this.cfg.ship.maxSublightC*ce}canEngageWarp(){let t=this.shipPc(),e=this.uni.nextBoundary(t,[this.forward().x,this.forward().y,this.forward().z],1e9);return e.inside?{ok:!1,why:`inside the heliopause of ${this.cat.name(e.inside.star)}`}:this.system&&Jt(this.sysPos())<this.system.heliopauseKm*this.cfg.warp.minEngageClearanceFraction?{ok:!1,why:"inside the heliopause \u2014 sub-light only"}:{ok:!0}}engageWarp(t=0){if(this.warp.on)return;let e=this.canEngageWarp();if(!e.ok){this.say(`Warp unavailable: ${e.why}`);return}this.breakOrbit(),this.leaveSystemFrame();let i=this.warp;i.on=!0,i.step=Mt(t,0,this.cfg.warp.steps.length-1),i.c=Math.max(this.speed/ce,.02),i.dropping=!1,i.rampTimer=0,i.engagedAt=this.jd,this.say("Warp field forming")}disengageWarp(){this.warp.on&&(this.course&&this.course.engaged&&this.course.kind==="system"&&this.disengageAutopilot("Autopilot disengaged \u2014 warp dropped by the pilot"),this.warp.dropping=!0,this.warp.step=-1,this.say("Dropping out of warp"))}setSpeed(t,e){let i=this.cfg.ship.speedPresets[t];i&&(this.commandSpeed(i[Mt(e,0,i.length-1)]*(t==="cruise"?ce:1)),this.speedPreset={regime:t,i:Mt(e,0,i.length-1)})}commandSpeed(t){if(this.mode==="tour"&&this.stopTour(),this.course&&this.course.engaged&&this.disengageAutopilot("Autopilot disengaged \u2014 speed set manually"),this.ins=null,this.xfer=null,this.speedPreset=null,this.warp.on){this.pendingSpeed=t,this.disengageWarp();return}this.orbit&&this.breakOrbit(),this.speedTarget=Mt(t,0,this.cfg.ship.maxSublightC*ce),this.intentDir=this.forward().clone()}speedRegime(){return Math.max(this.speed,this.speedTarget)<this.cfg.ship.orbitalMaxKmS?"orbital":"cruise"}setWarpStep(t){if(!this.warp.on){this.engageWarp(t),this.course&&(this.course.userStep=!0);return}this.warp.dropping=!1,this.warp.step=Mt(t,0,this.cfg.warp.steps.length-1),this.course&&(this.course.userStep=!0)}stepWarp(t){if(!this.warp.on){t>0&&this.setWarpStep(0);return}this.setWarpStep(this.warp.step+t)}leaveSystemFrame(){if(!this.system)return;let t=this.sysPos(),e=this.sysVel();this.anchorPc=this.system.originPc.slice(),this.ref=null,this.pos=t,this.vel=e,this.leftSystem=this.system,this.system=null}enterSystem(t){let e=this.sysPos(),i=this.sysVel(),n=[this.anchorPc[0]-t.originPc[0],this.anchorPc[1]-t.originPc[1],this.anchorPc[2]-t.originPc[2]];this.pos=[n[0]*ne+e[0],n[1]*ne+e[1],n[2]*ne+e[2]],this.vel=i,this.ref=null,this.system=t,this.anchorPc=t.originPc.slice(),this.say(`Entering ${/system$/i.test(t.name)?"the "+t.name:"the "+t.name+" system"}`),this._destCache=null}governor(){let t=Math.LN10/this.cfg.warp.decelSecPerDecade,e=this.shipPc(),i=this.forward(),r=this.cfg.warp.steps[this.cfg.warp.steps.length-1]*ce/t*1.6+2e12,o=this.uni.nextBoundary(e,[i.x,i.y,i.z],r);if(o.inside)return{capC:0,why:"heliopause",x:0,star:o.inside.star};if(o.ahead){let a=Math.max(o.ahead.distKm-this.cfg.warp.arrivalMarginAu*Ht,0);return{capC:(this.subKms+t*a)/ce,why:"heliopause",x:a,star:o.ahead.star,hpKm:o.ahead.radiusKm}}return{capC:1/0,why:"",x:1/0}}update(t){let e=Math.min(t,this.cfg.sim.maxFrameDt),i=this.cfg.sim.physicsStep,n=e,r=0;for(;n>1e-9&&r<this.cfg.sim.maxSubsteps;){let o=Math.min(i,n);this._step(o),n-=o,r++}this.frameCount++;for(let o of this.messages)o.t-=e;this.messages=this.messages.filter(o=>o.t>0),this.warp.pulse=Math.max(0,this.warp.pulse-e*.9),this.warp.flash=Math.max(0,this.warp.flash-e*1.4)}_step(t){let e=this.cfg,i=e.ship;this._dtFrame=t,this._attErr=null,this.startTour&&(this.startTour=!1,this.beginTour());let n=this.input,r=Math.abs(n.yaw)+Math.abs(n.pitch)+Math.abs(n.roll)>.001,o=Math.abs(n.throttle)>.001||n.brake;(r||o)&&this.mode==="tour"&&this.stopTour(),o&&this.course&&this.course.engaged&&!this.warp.on&&(this.course.kind==="body"||this.course.phase!=="warp")&&this.disengageAutopilot("Autopilot disengaged \u2014 manual control");let a=i.turnRateDegPerSec*Math.PI/180,l=new I(n.pitch,n.yaw,n.roll).multiplyScalar(a);if(this.angVel.lerp(l,1-Math.exp(-t/Math.max(.03,i.steerSmoothing))),this.mode!=="auto"||r){let p=new Me().setFromEuler(new Fe(this.angVel.x*t,this.angVel.y*t,this.angVel.z*t,"YXZ"));this.rotateShip(p)}let c=this.warp.on,d=c?this._warpK():this.timeScale;this.thrustT=0,this.course&&this._autopilot(t),this.mode==="tour"&&this.tour&&this.tour.phase==="dwell"&&(this.tour.timer-=t,this.timeAuto=!1,d=c?this._warpK():this.timeScale,this.tour.timer<=0&&this._tourNext()),this.timeAuto&&this.course&&!c?d=this.timeEff:c||(this.timeEff=this.timeScale),c||(d=this.ins?this.ins.k:this.xfer?this.xfer.k:this._capK(d));let u=t*d;this.timeUsed=d,this.warp.on?this._warpMulti(u):this._sublightStep(t,u,o),this.jd+=u/86400,this.trip.elapsed+=u,this._frameManagement(),this._wallOfSafeOrbits(),this._tourCamera(t),this.speed=this.warp.on?this.warp.c*ce:Jt(this.vel),this.thrust+=(this.thrustT-this.thrust)*(1-Math.exp(-t/.18));{let p=this.eng,v=!this.warp.on&&!this.ins&&Math.max(this.speed,this.speedTarget)>=i.orbitalMaxKmS,g=Mt(Math.log10(Math.max(this.speed,1)/i.orbitalMaxKmS)/Math.log10(i.maxSublightC*ce/i.orbitalMaxKmS),0,1),m={rocket:!this.warp.on&&!v?this.thrust:0,cruise:v?.22+.78*g:0,warp:this.warp.on?.3+.7*Mt(Math.log10(Math.max(this.warp.c,1))/Math.log10(this.cfg.warp.steps[this.cfg.warp.steps.length-1]),0,1):0};for(let x of["rocket","cruise","warp"])p[x]+=(m[x]-p[x])*(1-Math.exp(-t/(m[x]>p[x]?1.6:2.4)))}{let p=(this.cfg.ship.gimbalMaxDeg||6)*Math.PI/180,v=this._attErr,g=1-Math.exp(-t/.25),m=v?-v.ax*Mt(Math.abs(v.mag)/.2,0,1)*p:0,x=v?-v.ay*Mt(Math.abs(v.mag)/.2,0,1)*p:0;this.gimbal.x+=(m-this.gimbal.x)*g,this.gimbal.y+=(x-this.gimbal.y)*g,v||(this._attRate*=Math.exp(-t/.15))}this.camRecentre>0&&(this.camRecentre-=t,this.qCam.slerp(this.q,1-Math.exp(-t/.35)),this.camRecentre<=0&&this.qCam.copy(this.q));let h=this.cam,f=1-Math.exp(-t/Math.max(this.cfg.camera.smoothingSec,.01));h.yawT-=Be*Math.round((h.yawT-h.yaw)/Be),h.pitchT-=Be*Math.round((h.pitchT-h.pitch)/Be),h.yaw+=(h.yawT-h.yaw)*f,h.pitch+=(h.pitchT-h.pitch)*f,h.dist+=(h.distT-h.dist)*f}_startTransfer(t,e){let i=this.orbit,n=t.gm,r=e>i.r,o=i.r,a=.5*(o+e),l=Math.sqrt(n*(2/o-1/a)),c=Math.sqrt(n*(2/e-1/a)),d=Math.sqrt(n/e),u=this.cfg.ship.maneuverAccelMs2*.001;this.xfer={body:t,mu:n,goalR:e,raising:r,phase:"turn1",vt1:l,dv2:Math.abs(d-c),a:u,k:1,aps:r?"apo":"peri",eta:0},this.orbit=null,this.setRef(t),this.say(`Orbit change: ${r?"raising":"lowering"} to ${Ie(e-t.radiusKm)} \u2014 ${r?"prograde":"retrograde"} burn, coast, circularise`)}_xferStep(t,e){let i=this.xfer,n=i.mu,r=i.raising?1:-1,o=Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01,a=this.pos,l=this.vel,c=fe(l),d=ei(c).multiplyScalar(r),u=i.dv2/(2*i.a),f=i.phase==="turn1"||i.phase==="burn1"||i.phase==="turn2"||i.phase==="burn2"?d:ei(c),p=this.cfg.ship.flipRateDegPerSec*Math.PI/180;o||this._lookAlong(f,p*t,this.up());let v=this.forward().dot(f)>.985,g=this.forward(),m=e,x=0;this.thrustT=0;let _=(y,E)=>{let A=Math.min(i.a*y,E);return l=[l[0]+g.x*A,l[1]+g.y*A,l[2]+g.z*A],A};for(;m>1e-9&&x++<400;){if(i.phase==="turn1")if(v)i.phase="burn1";else{[a,l]=Qs(n,a,l,m),m=0;break}if(i.phase==="burn1"||i.phase==="burn2"){let y=i.phase==="burn1"?i.vt1:Math.sqrt(n/Jt(a)),E=Jt(l),A=i.raising?y-E:E-y;if(A<=2e-4*y){if(i.phase==="burn1"){i.phase="coast";continue}this._finishTransfer(a,l);return}let T=Math.min(m,.5);if(v){let C=Math.min(i.a*T,A),S=[l[0]+g.x*C*.5,l[1]+g.y*C*.5,l[2]+g.z*C*.5],[M,P]=Qs(n,a,S,T);a=M,l=[P[0]+g.x*C*.5,P[1]+g.y*C*.5,P[2]+g.z*C*.5],this.thrustT=1}else[a,l]=Qs(n,a,l,T);m-=T;continue}if(i.phase==="coast"||i.phase==="turn2"){let y=Ou(n,a,l,i.aps);i.eta=y;let E=i.phase==="coast"?y-u-10:y-u;if(E<=1e-6){if(i.phase==="coast"){i.phase="turn2";continue}if(v){i.phase="burn2";continue}[a,l]=Qs(n,a,l,Math.min(m,.25)),m-=Math.min(m,.25);continue}let A=Math.min(m,E);[a,l]=Qs(n,a,l,A),m-=A;continue}break}this.pos=a,this.vel=l,this.speed=Jt(l),this.speedTarget=this.speed,i.phase==="burn1"||i.phase==="burn2"?i.k=Mt(this.timeScale,1,100):i.phase==="turn1"||i.phase==="turn2"?i.k=1:(i.coastReal=(i.coastReal||0)+t,i.k=Mt((Ou(n,a,l,i.aps)-u-10)/Math.max(14-i.coastReal,2),1,this.cfg.time.steps[this.cfg.time.steps.length-1]))}_insertStep(t,e){let i=this.ins,n=this.orbit,r=i.body,o=r.gm,a=i.a,l=Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01,c=Math.cos(n.theta),d=Math.sin(n.theta),u=[-d*n.ex[0]+c*n.ey[0],-d*n.ex[1]+c*n.ey[1],-d*n.ex[2]+c*n.ey[2]],h=Math.sqrt(o/n.r),f=ei(u);l||this._lookAlong(f,Ss(this.cfg,t,this.forward().angleTo(f)));let p=this.forward().dot(f),v=e,g=0,m=!1;for(;v>1e-9&&g++<400;){let x=Math.min(v,.25);if(v-=x,p>.985&&i.vt<h&&(i.vt=Math.min(h,i.vt+a*p*x),m=!0),n.omega=i.vt/n.r,n.theta+=n.omega*x,i.vt>=h*.99999)break}this._applyOrbitState(),m&&(this.thrustT=1),i.k=p>.985?Mt(h/a/8,1,30):1,this.speed=Jt(this.vel),this.speedTarget=this.speed,i.vt>=h*.99999&&(n.omega=Math.sqrt(o/(n.r*n.r*n.r)),this.ins=null,this.say(`In orbit: ${r.name}, ${Ie(n.r-r.radiusKm)} altitude`),this._tourOrDone(i.C))}_finishTransfer(t,e){let i=this.xfer,n=i.body,r=Jt(t),o=Pe(t,1/r),a=Ze(e,Pe(o,Je(e,o))),l=fe(a);this.xfer=null,this.enterOrbit(n,i.goalR,o,l,0),this.say(`In orbit: ${n.name}, ${Ie(i.goalR-n.radiusKm)} altitude`)}_sublightStep(t,e,i){let n=this.cfg.ship;if(this.ins&&(this.input.throttle>.001||this.input.brake)&&(this.ins=null,this.breakOrbit(),this._tourOrDone(null),this.say("Orbit insertion aborted")),this.xfer)if(this.input.throttle>.001||this.input.brake)this.xfer=null,this.speedTarget=Jt(this.vel),this.say("Orbit change aborted");else{this._xferStep(t,e);return}if(this.orbit&&this.ins){this._insertStep(t,e);return}if(this.orbit)if(this.input.throttle>.001)this.breakOrbit();else{this._applyOrbit(e),!(Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01)&&!(this.course&&!this.course.engaged)&&this._lookAlong(ei(this.vel).normalize(),n.flipRateDegPerSec*Math.PI/180*t,this.up());return}if(this.course&&this.course.autopilotMoved){this.course.autopilotMoved=!1;return}let r=this.input,o=n.maxSublightC*ce,a=n.speedFloorKmS;if(r.throttle!==0){this.speedPreset=null,this.intentDir=this.forward().clone();let T=this.speedTarget;T<a&&(T=r.throttle>0?a:0),T>0&&(T*=Math.pow(10,r.throttle*n.throttleDecadesPerSec*t)),T<a&&(T=0),this.speedTarget=Math.min(o,T)}r.brake&&(this.speedTarget=Math.max(0,this.speedTarget*Math.exp(-t*3))),this.speedTarget<a*.9&&(this.speedTarget=0);let l=this.forward(),c=ei(this.vel),d=c.length(),u=!!(this.course&&this.course.engaged),h=d>1e-9?c.clone().divideScalar(d):l.clone(),f=Math.abs(r.yaw)+Math.abs(r.pitch)+Math.abs(r.roll)>.01;(!this._noseSaved||l.angleTo(this._noseSaved)>3e-4||!this.intentDir||d<a*.5)&&(this.intentDir=l.clone());let v=this.intentDir.clone().multiplyScalar(this.speedTarget).sub(c),g=v.length(),m=Math.max(d,this.speedTarget,a);this.burning?g<.003*m&&(this.burning=!1):g>.012*m&&(this.burning=!0);let x=this.burning?0:1/0,_=n.flipRateDegPerSec*Math.PI/180,y=0,E=Math.max(d,this.speedTarget)>=n.orbitalMaxKmS;if(u)this.burning=!1,this.flipping=!1;else if(E){let T=this.speedTarget<d?n.driveSpoolSec*.45:n.driveSpoolSec,C=1-Math.exp(-t/T),S=l.clone().multiplyScalar(this.speedTarget);c.add(S.sub(c).multiplyScalar(C)),this.burning=!1,this.flipping=!1,this.intentDir=l.clone()}else if(g>x||this.burning){let T=v.clone().divideScalar(g),C=l.dot(T),S=v.dot(h)<-.5*g;!f&&(C<.3||this.flipping||S)&&(this.flipping=!0,this._lookAlong(T,_*t,this.up()),C>.97&&!S&&(this.flipping=!1));let M=Math.max(v.dot(l),0);if(M>0&&(this.flipping?C>.93:C>.3||f)){let P=n.maneuverAccelMs2*.001*e,U=Math.min(M,P);c.addScaledVector(l,U),y=Mt(U/Math.max(P,1e-12),0,1)}}else this.flipping=!1,!f&&!(this.course&&!this.course.engaged)&&d>a*2&&l.dot(h)<.9995&&this._lookAlong(h,_*t,this.up());this.speedTarget===0&&d<a*.9&&c.set(0,0,0),this.thrustT=Math.max(this.thrustT,y),this._noseSaved=this.forward().clone(),this.vel=[c.x,c.y,c.z];let A=Jt(this.vel);if(A>o){let T=o/A;this.vel=this.vel.map(C=>C*T)}this._prev={jd:this.jd,abs:this.sysPos()},this.pos=[this.pos[0]+this.vel[0]*e,this.pos[1]+this.vel[1]*e,this.pos[2]+this.vel[2]*e]}_warpK(){return this.tour&&this.tour.pace==="fast"?this.cfg.tour.fastWarpK:Mt(this.timeScale,1,this.cfg.warp.maxTimeCompression)}_warpMulti(t){let e=Math.min(80,Math.max(1,Math.ceil(t/.08))),i=t/e;for(let n=0;n<e&&this.warp.on;n++)this._warpStep(i)}_warpStep(t){let e=this.warp,i=this.cfg.warp,n=this.governor();e.capC=n.capC,e.capWhy=n.why,e.govX=n.x;let r=this.cfg.ship.maxSublightC,o=e.step<0?r:i.steps[e.step];if(n.capC<o&&(o=Math.max(n.capC,r)),this.course&&this.course.kind==="system"&&!e.dropping&&this.course.phase==="warp"&&this.course.engaged&&!this.course.userStep){e.rampTimer+=t;let f=this.tour&&this.tour.pace==="slow"?Math.min(this.cfg.tour.slowWarpStep,i.steps.length-1):i.steps.length-1;e.step<f&&e.rampTimer>i.secondsPerStep&&e.c>=i.steps[e.step]*.97&&(e.step++,e.rampTimer=0),o=Math.min(i.steps[Math.min(e.step,f)],Math.max(n.capC,r)),o=Math.max(o,r)}let a=Math.log10(Math.max(e.c,.001)),l=Math.log10(Math.max(o,.001));l>a?a=Math.min(l,a+t/i.rampSecPerDecade):a=Math.max(l,a-t/i.decelSecPerDecade),isFinite(n.capC)&&(a=Math.min(a,Math.log10(Math.max(n.capC,r)))),e.c=Math.pow(10,a);let c=this.forward(),d=e.c*ce;this.vel=[c.x*d,c.y*d,c.z*d],this.pos=[this.pos[0]+this.vel[0]*t,this.pos[1]+this.vel[1]*t,this.pos[2]+this.vel[2]*t];let u=e.form;e.form=hi(i.bubbleStartC,i.bubbleFullC,e.c),u>.3&&e.form<=.3&&!e._collapsed&&(e.pulse=1,e.flash=1,e._collapsed=!0),e.form>.5&&(e._collapsed=!1);let h=!e.dropping&&e.step>=0&&i.steps[e.step]>r*1.001&&n.capC>r*1.02;e.c<=r*1.0005&&!h&&this._dropToSublight(),n.why==="heliopause"&&n.capC<=0&&this._dropToSublight()}_dropToSublight(){let t=this.warp,e=this.forward(),i=this.subKms;t.on=!1,t.c=0,t.form=0,t.dropping=!1,t._collapsed=!1,t.pulse=1,t.flash=1,t.step=0,this.vel=[e.x*i,e.y*i,e.z*i],this.speed=i,this.speedTarget=this.course&&this.course.engaged?i:0,this.pendingSpeed!=null&&(this.speedTarget=Mt(this.pendingSpeed,0,i),this.pendingSpeed=null),this.say("Warp field collapsed \u2014 sub-light")}_courseAlign(t,e){if(this.warp.on)return;let i=this.sysPos(),n;if(e.kind==="body"){if(e.body.system!==this.system)return;let l=e.body.positionAt(this.jd);n=[l[0]-i[0],l[1]-i[1],l[2]-i[2]]}else{let l=this.shipPc();n=[e.targetPc[0]-l[0],e.targetPc[1]-l[1],e.targetPc[2]-l[2]],e.distKm=Jt(n)*ne}let r=ei(fe(n)),o=this.forward().angleTo(r);e.aligned=o<.035,e.alignErr=o,!(Math.abs(this.input.yaw)+Math.abs(this.input.pitch)+Math.abs(this.input.roll)>.01)&&!this.flipping&&!this.xfer&&(this._lookAlong(r,Ss(this.cfg,t,o)),this._noseSaved=this.forward().clone())}_autopilot(t){let e=this.course,i=this.cfg.autopilot,n=this.cfg.ship;if(!e.engaged){this._courseAlign(t,e);return}let r=i.cruiseFraction*n.maxSublightC*ce,o=i.accelTimeSec,a=t*this.kNow;e.kind==="body"?this._autoBody(e,t,a,r,i.brakeSeconds):e.kind==="system"&&this._autoSystem(e,t,a,r,o)}_pathWaypoint(t,e,i){let n=this.system;if(!n)return null;let r=this.jd,o=Ze(e,t),a=Je(o,o);if(a<1)return null;let l=this.cfg.autopilot.pathClearance,c=null;for(let d of n.bodies){if(d.kind==="belt"||d===i)continue;let u=d.positionAt(r),h=d.safeRadiusKm(this.cfg),f=h*l;if(Jt(Ze(t,u))<f*1.05)continue;let p=Mt(Je(Ze(u,t),o)/a,0,1),v=$s(t,o,p),g=Ze(v,u),m=Jt(g);if(!(m>=f||p<=1e-4)&&(!c||p<c.t)){let x=m>1e-6*f?Pe(g,1/m):fe(je(o,[0,0,1]));(!isFinite(x[0])||Jt(x)<.5)&&(x=Ni(fe(o))),c={t:p,body:d,off:Pe(x,f*1.25)}}}return c?{body:c.body,off:c.off}:null}_flyWaypoint(t,e,i,n,r,o,a,l){let c=this.jd,d=this.sysPos(c),u=Ks(this.pathBodyPos(e.body,c),e.off),h=Ze(u,d),f=Jt(h);if(f<1)return!1;let p=Pe(h,1/f),v=i*this.kNow,m=(Math.max(Jt(Ze(n,d))-r,0)+l)/a,x=this.speed+o/this.cfg.autopilot.accelTimeSec*v+.001,_=Math.min(o,m,Math.max(x,o*.001)),y=Math.min(_*v,f),E=$s(d,p,y),A=this.ref?this.ref.positionAt(c+v/86400):[0,0,0];this.pos=Ze(E,A);let T=this.ref?this.ref.velocityAt(c):[0,0,0];return this.vel=Ze(Pe(p,y/Math.max(v,1e-9)),T),this.speedTarget=Jt(this.vel),this._lookAlong(ei(p),Ss(this.cfg,i,this.forward().angleTo(ei(p)))),this.thrustT=_>this.speed*1.002?1:0,t.autopilotMoved=!0,y<f-1e-6*f}pathBodyPos(t,e){return t.positionAt(e)}_autoClear(t,e,i,n=null){let r=this.system;if(!r)return!1;let o=this.jd,a=this.sysPos(o),l=null,c=2.3,d=null;for(let T of r.bodies){if(T.kind==="belt"||T===n)continue;let C=T.positionAt(o),S=[a[0]-C[0],a[1]-C[1],a[2]-C[2]],M=Jt(S),P=T.safeRadiusKm(this.cfg);M/P<c&&(c=M/P,l=T,d=S)}if(!l)return this._clearing=!1,!1;let u=fe(d),h=l.safeRadiusKm(this.cfg),f=Jt(d),p=Je(e,u),v=p>=0?1/0:f*Math.sqrt(Math.max(1-p*p,0));if(!(p<0&&v<h*1.4||f<h*1.12)&&!(this._clearing&&f<h*1.15))return this._clearing=!1,!1;this._clearing=!0;let m=fe(Ze(e,Pe(u,p))),x=isFinite(m[0])&&Jt(Ze(e,Pe(u,p)))>1e-6?fe(Ks(u,Pe(m,.9))):u,_=Math.min(i,Math.max(h/6,1)),y=Math.max(h*1.5,f);this.timeEff=Math.max(this.timeEff||1,1),this.timeEff=Math.exp(Math.log(this.timeEff)+(Math.log(Mt(h*2/_/3.5,1,400))-Math.log(this.timeEff))*.2);let E=t*this.kNow,A=_*E;return this.pos=[this.pos[0]+x[0]*A,this.pos[1]+x[1]*A,this.pos[2]+x[2]*A],this.vel=[x[0]*_,x[1]*_,x[2]*_],this.speed=_,this.speedTarget=_,this.thrustT=1,this._lookAlong(ei(x),Ss(this.cfg,t,this.forward().angleTo(ei(x)))),this.course&&(this.course.autopilotMoved=!0),!0}_autoBody(t,e,i,n,r){let o=t.body;if(o.system!==this.system){this.cancelCourse("Course cancelled");return}this.breakOrbit();let a=o.positionAt(this.jd),l=this.sysPos(),c=[l[0]-a[0],l[1]-a[1],l[2]-a[2]],d=Jt(c),u=d>1e-6?Pe(c,1/d):[1,0,0];if(this._autoClear(e,u.map(it=>-it),n,o))return;let h=t.radius;if((!t.wp||performance.now()-(t.wpT||0)>400)&&(t.wpT=performance.now(),t.wp||(t.wp=this._pathWaypoint(l,a,o))),t.wp){let it=Math.max(h*.03,1);if(this._flyWaypoint(t,t.wp,e,a,h,n,r,it))return;t.wp=null,t.wpT=0}let f=d-h,p=this.cfg.ship,v=this.cfg.autopilot,g=p.orbitalMaxKmS,m=p.maneuverAccelMs2*.001,x=Math.max(h*.03,1),_=g*r-x,y=it=>(it+x)/r,E=it=>.9*Math.sqrt(2*m*Math.max(it,0)),A=Math.max(n*r-x,0);t.realElapsed=(t.realElapsed||0)+e,this._autoTime(f,A,n,r,t,h,o,x,_);let T=e*this.kNow,C=ei(u).negate(),S=this.forward(),M=S.angleTo(C);!t.retro&&t.alignedOnce&&f<_+g*r*(v.flipLeadFactor??4)&&(t.retro=!0);let U=!!t.retro?C.clone().negate():C;this._lookAlong(U,Ss(this.cfg,e,S.angleTo(U)));let F=M<.35||t.alignedOnce;if(F&&(t.alignedOnce=!0),!F&&f>0){t.autopilotMoved=!0;return}let N=f,V=0,L=!1;if(f>0){let it=T;if(f>A){let nt=(f-A)/n;it<=nt?(N=f-n*it,it=0):(it-=nt,N=A)}if(it>0&&N>_){let nt=r*Math.log((N+x)/(_+x));it<=nt?(N=(N+x)*Math.exp(-it/r)-x,it=0):(N=_,it-=nt)}if(it>0){L=!0;let nt=0;for(;it>1e-9&&nt++<400;){let ct=Math.min(it,.25),rt=Math.min(y(N),E(N));if(N=Math.max(N-rt*ct,0),it-=ct,N<=0)break}}N=Math.max(N,0),V=(f-N)/Math.max(T,1e-9)}let q=this.speed+n/v.accelTimeSec*T;V>q&&f>A&&(N=f-q*T,V=q);let O=h+N,Z=Pe(u,O),et=o.positionAt(this.jd+T/86400),ht=[et[0]+Z[0],et[1]+Z[1],et[2]+Z[2]],Ut=this.ref?this.ref.positionAt(this.jd+T/86400):[0,0,0];this.pos=[ht[0]-Ut[0],ht[1]-Ut[1],ht[2]-Ut[2]];let kt=Pe(u,-V),X=o.velocityAt(this.jd),J=this.ref?this.ref.velocityAt(this.jd):[0,0,0];this.vel=[kt[0]+X[0]-J[0],kt[1]+X[1]-J[1],kt[2]+X[2]-J[2]],Math.max(this.speed,V)<g&&(V>this.speed*1.002+1e-9?this.thrustT=M<.5?1:0:L&&S.dot(C)<-.85&&(this.thrustT=.9)),this.speedTarget=V,t.autopilotMoved=!0,t.remaining=N,t.dTarget=O,t.xh=_,N<=.2&&this._arriveAtBody(t,o,u,O,V)}_arriveAtBody(t,e,i,n,r=0){if(t.mode==="approach"){this.setRef(e),this.orbit=null,this.vel=[0,0,0],this.speedTarget=0,this.speed=0,this.pos=Pe(i,n),this.say(`Holding ${Ie(n-e.radiusKm)} above ${e.name}`),this.course=null,this.mode="free",this.timeAuto=!1,this.tour&&this._tourOrDone(t);return}let o=fe(je(e.pole,i));(!isFinite(o[0])||Jt(o)<.2)&&(o=Ni(i));let a=.35,l=fe(Ks(Pe(o,Math.cos(a)),Pe(fe(je(i,o)),Math.sin(a))));this.setRef(e),this.orbit={body:e,r:n,ex:i,ey:l,theta:0,omega:0},this._applyOrbitState(),this.ins={body:e,vt:0,a:this.cfg.ship.maneuverAccelMs2*.001,k:1,C:t},this.course=null,this.mode="free",this.timeAuto=!1,this.say(`Arrived \u2014 inserting into orbit around ${e.name}`)}_tourOrDone(t){if(this.course=null,this.tour){let e=this.tour.stops[this.tour.idx];this._dwellStart(e||{dwell:20,timeScale:"orbit"})}else this.mode="free",this.timeAuto=!1}_autoTime(t,e,i,n,r,o,a,l=1,c=0){if(!this.timeAuto)return;let d=this.cfg.time,u=d.steps,h=u[u.length-1],f=Math.max(r.targetSeconds||d.auto.targetSeconds,3),p=Math.max(t-e,0)/i+n*Math.log(1+Math.min(t,e)/Math.max(l,1))+0,v=Math.max(f-(r.realElapsed||0),Math.min(6,f*.3)),g=p/v;r.tour&&(g=Math.max(g,1));let m=a?a.radiusKm:1;a&&t<d.auto.approachDistanceRadii*m&&(g=Math.min(g,u[d.auto.approachStep])),t<c+this.cfg.ship.orbitalMaxKmS*n*((this.cfg.autopilot.flipLeadFactor??4)+1)&&(g=Math.min(g,this.cfg.autopilot.finalApproachK)),g=Mt(g,1,h),this.timeEff=Math.exp(Math.log(this.timeEff||1)+(Math.log(g)-Math.log(this.timeEff||1))*.15)}_autoSystem(t,e,i,n,r){let o=this.cfg.ship,a=this.cfg.autopilot;if(this.system&&this.system===t.system){if(this.tour&&this.tour.scope==="stars"&&t.tour){this._starsTourArrived(t);return}if(a.continueToStar){let v=t.system.stars[0];this.course={kind:"body",body:v,radius:v.safeRadiusKm(this.cfg),targetSeconds:this.cfg.time.auto.targetSeconds,label:v.name,engaged:!0},this.say(`Arrived at ${t.name} \u2014 approaching ${v.name}`)}else this.course=null,this.mode="free",this.say(`Arrived at ${t.name}`);return}let l=this.shipPc(),c=t.targetPc,d=fe([c[0]-l[0],c[1]-l[1],c[2]-l[2]]),u=Math.hypot(c[0]-l[0],c[1]-l[1],c[2]-l[2])*ne;t.distKm=u;let h=ei(d),p=this.forward().angleTo(h);if(!this.warp.on||this.warp.c<3)this._lookAlong(h,Ss(this.cfg,e,p));else{let v=this.up().clone(),g=new jt().lookAt(new I,h,Math.abs(v.dot(h))>.98?new I(0,0,1):v),m=new Me().setFromRotationMatrix(g);this.q.slerp(m,1-Math.exp(-e*3))}if(t.phase==="align"){this.breakOrbit(),this.timeEff=Math.max(1,this.timeEff),p<.09&&(t.phase=this.system?"depart":"warp",t.departT=0),this.vel=this.vel.map(v=>v*Math.exp(-e*.1)),t.autopilotMoved=!1;return}if(t.phase==="depart"){if(this._autoClear(e,d,n))return;let v=this.sysPos(),g=this.system.heliopauseKm-Jt(v);this._autoTimeDepart(g,n);let m=e*this.kNow,x=n/a.accelTimeSec,_=Math.min(n,this.speed+x*m);this.speed<.001&&(_=Math.min(n,x*m));let y=Math.min(_*m,Math.max(g,0)+1),E=_;this.vel=[d[0]*E,d[1]*E,d[2]*E];let A=this.refVel();this.vel=[this.vel[0]-A[0]*0,this.vel[1]-A[1]*0,this.vel[2]-A[2]*0],this.pos=[this.pos[0]+d[0]*y,this.pos[1]+d[1]*y,this.pos[2]+d[2]*y],this.speed=E,this.speedTarget=E,t.autopilotMoved=!0,E<n*.999&&p<.5&&(this.thrustT=1);return}t.phase==="warp"&&(!this.warp.on&&!this.system&&(this.engageWarp(0),this.warp.step=0),this.warp.on&&(this.warp.step=Math.max(this.warp.step,0)),t.autopilotMoved=!1)}_autoTimeDepart(t,e){if(!this.timeAuto)return;let i=this.cfg.time,n=i.steps[i.steps.length-1],r=this.course;r.departReal=(r.departReal||0)+1/60;let o=Math.max(t,0)/e+this.cfg.autopilot.accelTimeSec*2,a=Math.max(i.auto.targetSeconds*.55,6),l=Math.max(a-r.departReal,2.5),c=Mt(o/l,1,n);this.timeEff=Math.exp(Math.log(this.timeEff||1)+(Math.log(c)-Math.log(this.timeEff||1))*.2)}_frameManagement(){let t=this.jd;if(this.system){if(Jt(this.sysPos(t))>this.system.heliopauseKm*1&&!(this.course&&this.course.engaged&&this.course.kind==="body")){let i=this.system;this.leaveSystemFrame(),this.say(`Leaving ${/system$/i.test(i.name),"the "}${i.name}${/system$/i.test(i.name)?"":" system"} \u2014 heliopause crossed`),this._destCache=null,this.course&&this.course.kind==="system"&&this.course.phase==="depart"&&(this.course.phase="warp");return}!this.xfer&&!this.ins&&this._chooseRef(t)}else{let e=this.shipPc(t),i=this.cat.within(e,this.cfg.heliopause.maxAu*1.05*Ht/ne),n=null;for(let r of i){let o=this.uni.heliopauseOfStar(r)/ne,a=this.cat.pos[r*3]-e[0],l=this.cat.pos[r*3+1]-e[1],c=this.cat.pos[r*3+2]-e[2],d=Math.hypot(a,l,c);d<o&&(!n||d/o<n.f)&&(n={i:r,f:d/o})}if(n){let r=this.cat.systemOf(n.i,this.cfg.destinations.groupAu),o=this.uni.systemForGroup(r);this.warp.on&&this._dropToSublight(),this.enterSystem(o),this._chooseRef(t,!0)}}}_chooseRef(t,e=!1){let i=this.system;if(!i)return;let n=this.sysPos(t),r=null,o=1/0;for(let a of i.bodies){if(a.kind==="belt"||a.kind==="star")continue;let l=a.soiKm;if(!isFinite(l))continue;let c=a.positionAt(t),d=Math.hypot(n[0]-c[0],n[1]-c[1],n[2]-c[2]),u=l*(this.ref===a?1.08:1);d<u&&l<o&&(r=a,o=l)}if(!r){let a=i.stars[0],l=1/0;for(let c of i.stars){let d=c.positionAt(t),u=Math.hypot(n[0]-d[0],n[1]-d[1],n[2]-d[2]);u<l&&(l=u,a=c)}r=i.stars.length>1?a:null}r!==this.ref&&this.setRef(r,t)}_wallOfSafeOrbits(){let t=this.system;if(!t||this.orbit||this.xfer||this.ins)return;let e=this.jd,i=this._prev?this._prev.jd:e,n=this.sysPos(e),r=this._prev?this._prev.abs:n,o=this.sysVel(e);for(let a of t.bodies){if(a.kind==="belt")continue;let l=a.safeRadiusKm(this.cfg),c=a.positionAt(e),d=[n[0]-c[0],n[1]-c[1],n[2]-c[2]],u=Jt(d);if(u>l*3&&(!this._prev||Jt(Ze(r,n))<u*.2))continue;let h=a.positionAt(i),f=[r[0]-h[0],r[1]-h[1],r[2]-h[2]],p=Ze(d,f),v=Je(p,p),g=1,m=u<l;if(v>0){let M=Mt(-Je(f,p)/v,0,1),P=$s(f,p,M);Jt(P)<l&&(m=!0,g=M)}if(!m)continue;let x=g<1&&v>0?fe($s(f,p,g)):fe(d);isFinite(x[0])||(x=[1,0,0]);let _=Pe(x,l*1.0005),y=c,E=[y[0]+_[0],y[1]+_[1],y[2]+_[2]],A=this.refPos(e);this.pos=[E[0]-A[0],E[1]-A[1],E[2]-A[2]];let T=a.velocityAt(e),C=[o[0]-T[0],o[1]-T[1],o[2]-T[2]],S=Je(C,x);if(S<0){let M=this.refVel(e),P=[C[0]-x[0]*S+T[0]-M[0],C[1]-x[1]*S+T[1]-M[1],C[2]-x[2]*S+T[2]-M[2]];this.vel=P}this.speedTarget=Math.min(this.speedTarget,Jt(this.vel)),(this.lastSafeBody!==a||this.safeHit<=0)&&this.say(`Safe-orbit limit: ${a.name} (${Ie(l-a.radiusKm)} altitude)`,3),this.lastSafeBody=a,this.safeHit=.5,this.cfg.ship.orbitHold.enabled&&!this.course&&Jt(C)<20}this.safeHit=Math.max(0,this.safeHit-1/60),this._prev={jd:e,abs:this.sysPos(e)}}betaVector(){if(this.warp.on)return[0,0,0];let t=this.system?this.sysVel():this.vel;return[t[0]/ce,t[1]/ce,t[2]/ce]}visualBeta(){let t=this.warp,e=this.cfg.warp,i=e.visual.maxBeta??.97;if(!t.on)return this.betaVector();let n=this.forward(),r=this.cfg.ship.maxSublightC,o=Math.pow(Mt(Math.log10(t.c/r)/Math.log10(e.steps[e.steps.length-1]/r),0,1),.55),a=(r+(i-r)*o)*e.visual.aberrationScale;return[n.x*a,n.y*a,n.z*a]}gammaOf(t){let e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];return 1/Math.sqrt(Math.max(1-e,1e-6))}hud(){let t=this.system,i={warp:this.warp.on,speed:this.speed,c:this.speed/ce,K:this.kNow,jd:this.jd,mode:this.mode};if(i.where=t?this.ref?`${t.name} \xB7 ${this.ref.name}`:t.name:"Interstellar space",i.system=t?t.name:null,i.engaged=!!(this.course&&this.course.engaged),i.fictional=t?t.fictional:!1,i.gamma=this.gammaOf(this.betaVector()),this.course){let n=this.course;if(n.kind==="body"){let r=n.body,o=r.positionAt(this.jd),a=this.sysPos();i.target=r.name,i.targetDist=Math.hypot(a[0]-o[0],a[1]-o[1],a[2]-o[2]),i.targetKind="body"}else n.kind==="system"&&(i.target=n.name,i.targetDist=n.distKm??0,i.targetKind="system",i.phase=n.phase)}return i.trip=this.trip.elapsed,i}eta(){let t=this.course;if(!t)return NaN;let e=this.warp.on?this._warpK():this.timeEff;if(t.kind==="body"){let i=this.cfg.autopilot.cruiseFraction*this.cfg.ship.maxSublightC*ce,n=this.cfg.autopilot.accelTimeSec,r=t.remaining??NaN;return isFinite(r)?(Math.max(r-i*n,0)/i+n*Math.log(1+Math.min(r,i*n)/Math.max(t.radius*.02,1)))/e:NaN}if(t.kind==="system"){let i=(t.distKm??0)-(t.hpKm??0),n=this.warp,r=n.on?Math.max(n.c*ce,1):this.cfg.warp.steps[this.cfg.warp.steps.length-1]*ce*.8;return Math.max(i,0)/r+12}return NaN}};function ku(s){if(s>1e-8){let t=Math.sqrt(s);return[(1-Math.cos(t))/s,(t-Math.sin(t))/(t*t*t)]}if(s<-1e-8){let t=Math.sqrt(-s);return[(Math.cosh(t)-1)/-s,(Math.sinh(t)-t)/(t*t*t)]}return[.5,1/6]}function Qs(s,t,e,i){let n=Jt(t),r=Jt(e),o=Je(t,e)/n,a=Math.sqrt(s),l=2/n-r*r/s;if(l>1e-14){let _=2*Math.PI/(a*Math.pow(l,1.5));i-=_*Math.trunc(i/_)}let c=a*Math.abs(l)*i,d=.5,u=1/6;for(let _=0;_<60;_++){let y=l*c*c;[d,u]=ku(y);let E=n*o/a*c*c*d+(1-l*n)*c*c*c*u+n*c-a*i,A=n*o/a*c*(1-y*u)+(1-l*n)*c*c*d+n,T=E/A;if(c-=T,Math.abs(T)<1e-9*Math.max(1,Math.abs(c)))break}let h=l*c*c;[d,u]=ku(h);let f=1-c*c/n*d,p=i-c*c*c/a*u,v=[f*t[0]+p*e[0],f*t[1]+p*e[1],f*t[2]+p*e[2]],g=Jt(v),m=a/(g*n)*(h*u-1)*c,x=1-c*c/g*d;return[v,[m*t[0]+x*e[0],m*t[1]+x*e[1],m*t[2]+x*e[2]]]}function Ou(s,t,e,i){let n=Jt(t),r=Je(e,e),o=2/n-r/s;if(o<=0)return 1/0;let a=1/o,l=Jt(je(t,e)),c=Math.sqrt(Math.max(0,1-l*l*o/s)),d=Math.sqrt(s/(a*a*a)),u=2*Math.PI/d;if(c<1e-6)return .5*u;let h=Je(t,e)/n,f=Math.acos(Mt((1-n/a)/c,-1,1)),p=h>=0?f:2*Math.PI-f,v=p-c*Math.sin(p),g=((i==="apo"?Math.PI:2*Math.PI)-v)/d;return g-=u*Math.floor(g/u),g}function Ss(s,t,e){let i=Math.max(Math.PI/Math.max(s.autopilot.turnSeconds,.5),.2),n=Math.min(1,e/Math.max(e,1e-6));return Math.min(e,i*t*(.4+.6*Math.min(1,e/.5)))}var Bu=`
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
`;var Nt=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Yl=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0",this.level=0,this.off=0,this.W=0,this.H=0,this.dpr=1,this.bursts=[]}update(t,e){let i=e>2?Math.min(1,Math.log10(e)/7):0;this.level+=(i-this.level)*(1-Math.exp(-t/.8));let n=this.level,r=this.canvas,o=window.innerWidth,a=window.innerHeight,l=Math.min(2,window.devicePixelRatio||1);if(n<.01){this.on&&(r.getContext("2d").clearRect(0,0,r.width,r.height),this.on=!1);return}this.on=!0,(r.width!==Math.round(o*l)||r.height!==Math.round(a*l))&&(r.width=Math.round(o*l),r.height=Math.round(a*l));let c=r.getContext("2d");c.setTransform(l,0,0,l,0,0),c.clearRect(0,0,o,a);let d=28+1300*n*n,u=22-9*n;this.off=(this.off+d*t)%(u*1e3);let h=n<.35?1:n<.7?2:3,f=p=>Math.min(1,p/(a*.18),(a-p)/(a*.18));for(let p of[0,1])for(let v=0;v<h;v++){let g=p?o-10-v*(13+5*n):10+v*(13+5*n),m=p?-1:1,x=(5+22*n)*(1-.28*v),_=(.16+.5*n)*(1-.3*v),y=(this.off*(1+.23*v)+v*7.3)%u;for(let E=a+u-y;E>-u;E-=u){let A=f(E);if(A<=0)continue;let T=6+90*n*n*(.5+.5*Math.sin(E*12.9898+v)),C=c.createLinearGradient(0,E,0,E+T);C.addColorStop(0,`rgba(235,240,255,${_*A})`),C.addColorStop(1,"rgba(235,240,255,0)"),c.fillStyle=C,c.fillRect(p?g-x:g,E,x,1.3),T>14&&c.fillRect(g+(p?-.5:x-.5),E,.9,T*.9>1?T*.9:1)}}if(n>.72){let p=(n-.72)/.28*.05,v=performance.now()*(.12+.5*n)%(a+200)-100,g=c.createLinearGradient(0,v-90,0,v+90);g.addColorStop(0,"rgba(200,215,255,0)"),g.addColorStop(.5,`rgba(200,215,255,${p})`),g.addColorStop(1,"rgba(200,215,255,0)"),c.fillStyle=g,c.fillRect(0,v-90,o,180)}}},Ra=class{constructor(t,e,i,n){this.sim=t,this.cfg=e,this.gfx=i,this.canvas=n,this.root=document.getElementById("ui");let r=document.createElement("style");r.textContent=Bu,document.head.appendChild(r),this.keys=new Set,this.selected=null,this.labelsEnabled=e.visuals.labels.enabled,this.hidden=!1,this._build(),this._bindInput(),this.fpsAvg=60,this._lastNav=0}_build(){let t=this.root,e=this.sim,i=this.cfg;this.tl=Nt("div","tl panel"),this.tl.style.padding="7px 11px",this.tl.innerHTML='<div class="loc" id="h-loc"></div><div class="sub" id="h-sub"></div><div class="sub" id="h-sub2"></div>',this.tr=Nt("div","tr"),this.chips={};for(let l of["TOUR","FREE","AUTO","WARP"]){let c=Nt("div","chip",l);this.chips[l]=c,this.tr.appendChild(c)}this.chips.AUTO.style.cursor="pointer",this.chips.AUTO.title="autopilot (cruise control) for the set course \u2014 click or press P",this.chips.AUTO.onclick=()=>e.engageAutopilot(),this.banner=Nt("div","banner panel"),this.banner.textContent="fictional system \xB7 procedurally generated",this.toast=Nt("div","toast"),this.speedP=Nt("div","speed panel",`<div class="big" id="h-speed">0 m/s</div><div class="bar"><i id="h-bar" style="width:0%"></i></div>
      <div class="row"><span>velocity</span><b id="h-kms"></b></div><div class="row"><span>\u03B3 / \u03B2</span><b id="h-gam"></b></div><div class="row"><span>frame</span><b id="h-frame"></b></div><div class="row"><span id="h-near-l">nearest</span><b id="h-near"></b></div><div class="row"><span>engine</span><b id="h-eng"></b></div><div class="row"><span>trip clock</span><b id="h-trip"></b></div>`),this.courseP=Nt("div","course panel",""),this.courseP.style.display="none",this.ctl=Nt("div","ctl panel");let n=Nt("div","grp");n.appendChild(Nt("span","lab","time")),this.timeBtns=[],i.time.steps.forEach((l,c)=>{let d=Nt("button","",l>=1e6?l/1e6+"M":l>=1e3?l/1e3+"k":String(l));d.title=`time \xD7${l} (key ${c+1})`,d.onclick=()=>e.setTimeIndex(c),n.appendChild(d),this.timeBtns.push(d)}),this.autoT=Nt("button","","A"),this.autoT.title="automatic time compression for autopilot legs (key 0)",this.autoT.onclick=()=>e.setTimeAuto(!e.timeAuto),n.appendChild(this.autoT);let r=Nt("div","drive");r.innerHTML=`<div class="dh"><span class="lab">drive</span><b id="drv-txt"></b></div>
      <div class="trk" id="drv-trk"><i class="seg o"></i><i class="seg c"></i><i class="seg w"></i><i class="cmd" id="drv-cmd"></i><i class="act" id="drv-act"></i><i class="thumb" id="drv-thumb"></i></div>
      <div class="lbls"><span style="left:0">stop</span><span id="drv-l1"></span><span id="drv-l3"></span><span id="drv-l4"></span></div>
      <div class="legend"><span class="o">ROCKET \xB7 km/s</span><span class="c">NACELLES \xB7 % c</span><span class="w">WARP \xB7 c</span></div>`,this._setupDrive(r);let o=Nt("div","grp"),a=Nt("div","grp");a.appendChild(Nt("span","lab","tour")),this.btnSys=Nt("button","","SYSTEM"),this.btnSys.title="tour the planets of the star system you are in (T)",this.btnSys.onclick=()=>this.startTour("system"),this.btnStars=Nt("button","","STARS"),this.btnStars.title="tour the local stars, warping from system to system",this.btnStars.onclick=()=>this.startTour("stars"),this.btnPace=Nt("button","","FAST"),this.btnPace.title="FAST: time compression is automatic \xB7 SLOW: you set it with the TIME buttons",this.btnPace.onclick=()=>e.setTourPace((e.tour?e.tour.pace:e.tourPace)==="fast"?"slow":"fast"),a.append(this.btnSys,this.btnStars,this.btnPace),this.btnNav=Nt("button","","NAV"),this.btnNav.onclick=()=>this.toggleNav(),this.btnStop=Nt("button","","HOLD"),this.btnStop.title="cancel autopilot / stop (X)",this.btnStop.onclick=()=>this.stopAll(),this.btnSet=Nt("button","","\u2699"),this.btnSet.title="settings (,)",this.btnSet.onclick=()=>this.toggleSettings(),this.btnFull=Nt("button","","\u26F6"),this.btnFull.title="full screen on / off (Z)",this.btnFull.onclick=()=>this.toggleFullscreen(),this.btnHelp=Nt("button","","?"),this.btnHelp.onclick=()=>this.help.classList.toggle("open");for(let l of[this.btnNav,this.btnStop,this.btnSet,this.btnFull,this.btnHelp])o.appendChild(l);this.ctl.append(r,n,a,o),this.nav=Nt("div","nav panel",'<h4><span>Navigation</span><span id="nav-x" style="cursor:pointer">\xD7</span></h4><div class="srch"><input id="nav-q" type="text" placeholder="search systems (2+ characters)" autocomplete="off" spellcheck="false"></div><div class="list" id="nav-list"></div><div class="foot" id="nav-foot">select a destination</div>'),this.setP=Nt("div","set panel",'<h4><span>Settings</span><span id="set-x" style="cursor:pointer">\xD7</span></h4><div class="body" id="set-body"></div>'),this.help=Nt("div","help panel",`<h4>Controls</h4><div class="cols">
      <div><kbd>W</kbd><kbd>S</kbd> throttle up / down</div><div><kbd>X</kbd> cut throttle \xB7 cancel autopilot</div>
      <div><kbd>A</kbd><kbd>D</kbd> yaw \xB7 <kbd>R</kbd><kbd>F</kbd> pitch \xB7 <kbd>Q</kbd><kbd>E</kbd> roll</div><div>mouse: <b>drag</b> orbit camera \xB7 <b>wheel</b> zoom</div>
      <div><kbd>right-drag</kbd> / <kbd>Shift</kbd>+drag steer ship</div><div><kbd>C</kbd> recentre camera \xB7 <kbd>V</kbd> first-person</div>
      <div><kbd>=</kbd><kbd>-</kbd> / wheel on the drive slider: step through rocket \u2192 nacelle \u2192 warp speeds</div><div><kbd>G</kbd> engage / drop warp \xB7 <kbd>]</kbd><kbd>[</kbd> warp step</div><div><kbd>1</kbd>\u2013<kbd>8</kbd> time compression \xB7 <kbd>0</kbd> auto</div>
      <div><kbd>N</kbd> navigation \xB7 <kbd>Enter</kbd> set course</div><div><kbd>T</kbd> tour on / off \xB7 <kbd>,</kbd> settings</div>
      <div><kbd>O</kbd> orbit lines \xB7 <kbd>L</kbd> labels</div><div><kbd>Z</kbd> full screen \xB7 <kbd>H</kbd> hide interface \xB7 <kbd>?</kbd> this help</div></div>
      <div style="margin-top:8px;color:#8a8a8a">Speed limit inside a heliopause is ${i.ship.maxSublightC} c. Beyond it the warp drive steps 1 c \u2192 ${i.warp.steps[i.warp.steps.length-1].toLocaleString("en-US")} c and the ship brakes itself to sub-light at the next heliopause. Nothing can be landed on; every body has a safe-orbit wall.</div>`),this.labelLayer=Nt("div"),this.labelLayer.style.cssText="position:absolute;inset:0;pointer-events:none",this.well=Nt("div","well panel",'<canvas width="760" height="64"></canvas>'),this.wellCv=this.well.querySelector("canvas"),this.timeFx=new Yl,this.root.appendChild(this.timeFx.canvas),this.selP=Nt("div","selp panel",""),this.selKey=null,this.markSel=Nt("div","mark",'<div class="box"></div><div class="arr"></div><div class="tx"></div>'),this.markHome=Nt("div","mark home",'<div class="arr"></div><div class="tx"></div>'),this.labelLayer.append(this.markSel,this.markHome),this.hint=Nt("div","hint",i.ui.keyHints?"drag = look around \xB7 right-drag = steer \xB7 W/S throttle \xB7 N navigation \xB7 ? help":""),this.fps=Nt("div","fps",""),t.append(this.labelLayer,this.well,this.selP,this.tl,this.tr,this.banner,this.toast,this.speedP,this.courseP,this.ctl,this.nav,this.setP,this.help,this.hint,this.fps),this.nav.querySelector("#nav-x").onclick=()=>this.nav.classList.remove("open"),this.setP.querySelector("#set-x").onclick=()=>this.setP.classList.remove("open"),this._buildSettings(),this.lbls=[],this.$=l=>document.getElementById(l),this.navList=this.$("nav-list"),this.navFoot=this.$("nav-foot"),this.navQ=this.$("nav-q"),this.navQ.addEventListener("input",()=>this.renderNav(!0)),this.navQ.addEventListener("keydown",l=>{if(l.key==="Escape")this.navQ.value?(this.navQ.value="",this.renderNav(!0)):(this.navQ.blur(),this.nav.classList.remove("open")),l.stopPropagation();else if(l.key==="Enter"){let c=this.navList.querySelector(".item:not(.dim)");c&&!this.selected?c.click():this.commitSelection(l.shiftKey?"approach":"orbit")}}),setTimeout(()=>{this.hint&&(this.hint.style.opacity="0")},22e3),this.hint.style.transition="opacity 2s"}toggleNav(){this.nav.classList.toggle("open"),this.nav.classList.contains("open")&&(this.renderNav(!0),setTimeout(()=>this.navQ.focus(),0))}startTour(t){let e=this.sim;e.tour&&e.tour.scope===t?e.stopTour():e.beginTour(t)}toggleFullscreen(){let t=document,e=t.documentElement;if(t.fullscreenElement||t.webkitFullscreenElement)(t.exitFullscreen||t.webkitExitFullscreen).call(t);else{let i=e.requestFullscreen||e.webkitRequestFullscreen;if(i){let n=i.call(e);n&&n.catch&&n.catch(()=>this.sim.say("Full screen was refused by the browser",3))}else this.sim.say("Full screen is not available in this browser",3)}}toggleSettings(){this.setP.classList.toggle("open")}stopAll(){let t=this.sim;t.tour&&t.stopTour(),t.course&&t.cancelCourse("Autopilot disengaged"),t.warp.on&&t.disengageWarp(),t.speedTarget=0}_buildSettings(){let t=this.setP.querySelector("#set-body"),e=this.cfg,i={};try{i=JSON.parse(localStorage.getItem("starship.settings")||"{}")}catch{}let n=h=>h.split(".").reduce((f,p)=>f?.[p],e),r=(h,f)=>{let p=h.split("."),v=p.pop();p.reduce((g,m)=>g[m],e)[v]=f,i[h]=f;try{localStorage.setItem("starship.settings",JSON.stringify(i))}catch{}};for(let[h,f]of Object.entries(i))try{r(h,f)}catch{}let o=h=>t.appendChild(Nt("div","sec",h)),a=(h,f,p,v,g,m=x=>x)=>{let x=Nt("label","",`<span>${h}</span>`),_=Nt("input");_.type="range",_.min=p,_.max=v,_.step=g,_.value=n(f);let y=Nt("span","v",m(+_.value));_.oninput=()=>{r(f,+_.value),y.textContent=m(+_.value)},x.append(_,y),t.appendChild(x)},l=(h,f,p)=>{let v=Nt("label","",`<span>${h}</span>`),g=Nt("input");g.type="checkbox",g.checked=!!n(f),g.onchange=()=>{r(f,g.checked),p&&p(g.checked)},v.appendChild(g),t.appendChild(v)};o("picture"),a("exposure (EV)","visuals.exposure.compensationEv",-3,3,.1,h=>h.toFixed(1)),a("visual intensity","visuals.intensity",0,2,.05,h=>h.toFixed(2)),a("bloom","visuals.bloom.strength",0,.3,.005,h=>h.toFixed(3)),a("film grain","visuals.tonemap.filmGrain",0,.05,.002,h=>h.toFixed(3)),a("field of view","camera.fovDeg",30,90,1,h=>h+"\xB0"),a("render scale","visuals.renderScale",.5,1.5,.05,h=>h.toFixed(2)),o("sky"),a("star brightness","visuals.stars.brightness",.2,4,.05,h=>h.toFixed(2)),a("star halo","visuals.stars.haloStrength",0,3,.1,h=>h.toFixed(1)),a("star colour","visuals.stars.colorSaturation",0,2,.05,h=>h.toFixed(2)),a("milky way gain","visuals.milkyWay.gain",0,30,.5,h=>h.toFixed(1)),a("dust / detail","visuals.milkyWay.detail",0,2,.05,h=>h.toFixed(2)),a("galaxies gain","visuals.galaxies.gain",0,10,.1,h=>h.toFixed(1)),a("galaxy smudge floor","visuals.galaxies.visibilityFloor",0,.1,.002,h=>h.toFixed(3)),o("worlds"),a("surface relief","visuals.planets.detailBump",0,2,.05,h=>h.toFixed(2)),a("atmospheres","visuals.planets.atmosphere",0,2,.05,h=>h.toFixed(2)),a("clouds","visuals.planets.clouds",0,1,.05,h=>h.toFixed(2)),l("orbit lines","visuals.orbitLines.enabled"),l("labels","visuals.labels.enabled",h=>this.labelsEnabled=h),l("ship shadows","visuals.ship.shadows"),o("flight"),a("speed limit (c)","ship.maxSublightC",.1,.95,.01,h=>h.toFixed(2)),a("turn rate (\xB0/s)","ship.turnRateDegPerSec",10,120,1,h=>h),a("warp bubble opacity","warp.visual.bubbleOpacity",0,2,.05,h=>h.toFixed(2)),a("warp star bunching","warp.visual.aberrationScale",0,1.2,.05,h=>h.toFixed(2)),a("warp streaks","warp.visual.streakScale",0,3,.1,h=>h.toFixed(1)),a("warp lensing","warp.visual.lensStrength",0,2,.05,h=>h.toFixed(2));let c=Nt("div","sec","everything else: config.js");t.appendChild(c);let d=Nt("button","","reset saved settings");d.style.marginTop="8px",d.onclick=()=>{try{localStorage.removeItem("starship.settings")}catch{}location.reload()},t.appendChild(d);let u=Nt("button","","copy settings JSON");u.style.margin="8px 0 0 6px",u.onclick=()=>navigator.clipboard&&navigator.clipboard.writeText(JSON.stringify(i,null,2)),t.appendChild(u)}_bindInput(){let t=this.sim,e=this.canvas,i=t.input;window.addEventListener("keydown",l=>{if(l.target&&/INPUT|TEXTAREA/.test(l.target.tagName))return;let c=l.key.toLowerCase();this.keys.add(c),c==="z"&&!l.ctrlKey&&!l.metaKey?this.toggleFullscreen():c==="h"?(this.hidden=!this.hidden,this.root.style.display=this.hidden?"none":""):c==="n"?this.toggleNav():c===","?this.toggleSettings():c==="?"||c==="/"?this.help.classList.toggle("open"):c==="escape"?(this.help.classList.remove("open"),this.nav.classList.remove("open"),this.setP.classList.remove("open")):c==="t"?t.tour?t.stopTour():t.beginTour():c==="g"?t.warp.on?t.disengageWarp():t.setWarpStep(0):c==="]"||c==="pageup"?t.stepWarp(1):c==="["||c==="pagedown"?t.stepWarp(-1):c==="x"?this.stopAll():c==="p"?t.engageAutopilot():c==="="||c==="+"?this.stepDrive(1):c==="-"||c==="_"?this.stepDrive(-1):c==="o"?this.cfg.visuals.orbitLines.enabled=!this.cfg.visuals.orbitLines.enabled:c==="l"?(this.labelsEnabled=!this.labelsEnabled,this.cfg.visuals.labels.enabled=this.labelsEnabled):c==="c"?(t.recenterCamera(),t.cam.yawT=0,t.cam.pitchT=.28,t.cam.distT=this.cfg.ship.lengthM*this.cfg.camera.chaseDistanceLengths):c==="v"?(t.cam.distT=t.cam.distT<4?this.cfg.ship.lengthM*this.cfg.camera.chaseDistanceLengths:0,t.cam.yawT=0,t.cam.pitchT=0):c==="enter"?this.commitSelection(l.shiftKey?"approach":"orbit"):/^[1-8]$/.test(c)?t.setTimeIndex(+c-1):c==="0"&&t.setTimeAuto(!t.timeAuto),["arrowup","arrowdown","arrowleft","arrowright"," ","tab"].includes(c)&&l.preventDefault()}),window.addEventListener("keyup",l=>this.keys.delete(l.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear());let n=null;e.addEventListener("contextmenu",l=>l.preventDefault()),e.addEventListener("pointerdown",l=>{e.setPointerCapture(l.pointerId),n={x:l.clientX,y:l.clientY,mode:l.button===2||l.shiftKey?"steer":"orbit"}});let r=()=>{n=null};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("lostpointercapture",r),window.addEventListener("blur",r),e.addEventListener("pointermove",l=>{if(!n)return;let c=l.clientX-n.x,d=l.clientY-n.y;if(n.x=l.clientX,n.y=l.clientY,n.mode==="orbit")t.cam.holdUntil=performance.now()+6e3,t.cam.yawT-=c*this.cfg.camera.orbitSensitivity*(Math.cos(t.cam.pitchT)>=0?1:-1),t.cam.pitchT+=d*this.cfg.camera.orbitSensitivity,t.tour&&(t.cam.drift=!1);else{t.mode==="tour"&&t.stopTour();let u=this.cfg.camera.steerSensitivity,h=new Me().setFromEuler(new Fe(-d*u,-c*u,0,"YXZ"));t.rotateShip(h)}}),e.addEventListener("wheel",l=>{l.preventDefault();let c=this.cfg.ship.lengthM,d=Math.pow(this.cfg.camera.zoomSpeed,Math.sign(l.deltaY)*Math.min(3,Math.abs(l.deltaY)/100+.4));if(t.mode==="tour"&&t.tour){t.tour.zoomMul=Mt((t.tour.zoomMul||1)*d,.05,this.cfg.camera.maxDistanceLengths/2.6);return}let u=t.cam.distT;u=u<1&&l.deltaY<0?0:Math.max(u,.6)*d,t.cam.distT=Mt(u,this.cfg.camera.minDistanceLengths*c,this.cfg.camera.maxDistanceLengths*c),l.deltaY>0&&t.cam.distT<.6&&u>0&&(t.cam.distT=.6*d)},{passive:!1}),e.addEventListener("dblclick",()=>{t.recenterCamera(),t.cam.yawT=0,t.cam.pitchT=.28});let o=0,a=()=>{cancelAnimationFrame(o),o=requestAnimationFrame(()=>{(Math.abs(this.gfx.cssW-window.innerWidth)>0||Math.abs(this.gfx.cssH-window.innerHeight)>0)&&this.gfx.resize()})};window.addEventListener("resize",a),document.addEventListener("fullscreenchange",()=>{a(),setTimeout(a,150),setTimeout(a,600)}),window.ResizeObserver&&new ResizeObserver(a).observe(document.documentElement)}pollKeys(){let t=this.keys,e=this.sim.input;e.throttle=(t.has("w")?1:0)-(t.has("s")?1:0),e.yaw=(t.has("a")||t.has("arrowleft")?1:0)-(t.has("d")||t.has("arrowright")?1:0),e.pitch=(t.has("r")||t.has("arrowup")?1:0)-(t.has("f")||t.has("arrowdown")?1:0),e.roll=(t.has("q")?1:0)-(t.has("e")?1:0),e.brake=!1}_driveMap(){let t=this.cfg.ship,e=this.cfg.warp.steps,i=.28,n=.66,r=t.orbitalMaxKmS,o=t.maxSublightC*ce,a=.05;return{ORB:i,CRU:n,toU:(l,c)=>c!=null&&c>=0?n+(1-n)*(.04+.92*c/(e.length-1)):l<r?l<a?0:i*(.05+.95*Math.log(l/a)/Math.log(r/a)):i+(n-i)*Math.log(Math.min(l,o)/r)/Math.log(o/r),fromU:l=>{if(l=Mt(l,0,1),l<i){let d=l/i;return{kms:d<.05?0:a*Math.pow(r/a,(d-.05)/.95)}}if(l<n)return{kms:r*Math.pow(o/r,(l-i)/(n-i))};let c=(l-n)/(1-n);return{warp:Mt(Math.round((c-.04)/.92*(e.length-1)),0,e.length-1)}}}}_setupDrive(t){let e=this.sim,i=this._driveMap(),n=t.querySelector("#drv-trk"),r=this;this.drv={root:t,M:i,trk:n,txt:t.querySelector("#drv-txt"),thumb:t.querySelector("#drv-thumb"),cmd:t.querySelector("#drv-cmd"),act:t.querySelector("#drv-act")};let o=n.querySelectorAll(".seg");o[0].style.cssText=`left:0;width:${i.ORB*100}%`,o[1].style.cssText=`left:${i.ORB*100}%;width:${(i.CRU-i.ORB)*100}%`,o[2].style.cssText=`left:${i.CRU*100}%;width:${(1-i.CRU)*100}%`;let a=(u,h,f)=>{let p=t.querySelector(u);p.style.left=h*100+"%",p.textContent=f};a("#drv-l1",i.ORB,"100 km/s"),a("#drv-l3",i.CRU,"80 % c"),a("#drv-l4",.99,"10\u2076 c");let l=u=>{let h=n.getBoundingClientRect(),f=Mt((u-h.left)/h.width,0,1),p=i.fromU(f);if(p.warp!=null){if(e.warp.on&&e.warp.step===p.warp)return;e.setWarpStep(p.warp)}else{if(e.warp.on&&e.warp.dropping)return;e.commandSpeed(p.kms)}},c=!1;n.addEventListener("pointerdown",u=>{c=!0,n.setPointerCapture(u.pointerId),l(u.clientX),u.stopPropagation()}),n.addEventListener("pointermove",u=>{c&&l(u.clientX)});let d=()=>{c=!1};n.addEventListener("pointerup",d),n.addEventListener("pointercancel",d),n.addEventListener("wheel",u=>{u.preventDefault(),this.stepDrive(u.deltaY<0?1:-1)},{passive:!1})}_driveList(){let t=this.cfg.ship.speedPresets,e=[{kms:0}];for(let i of t.orbital)e.push({kms:i});for(let i of t.cruise)e.push({kms:i*ce});return this.cfg.warp.steps.forEach((i,n)=>e.push({warp:n})),e}stepDrive(t){let e=this.sim,i=this._driveList(),n=-1;if(e.warp.on&&!e.warp.dropping)n=i.findIndex(a=>a.warp===e.warp.step);else{let a=e.speedTarget,l=1e30;i.forEach((c,d)=>{if(c.kms!=null){let u=Math.abs(Math.log((c.kms+.02)/(a+.02)));u<l&&(l=u,n=d)}})}let r=Mt(n+t,0,i.length-1),o=i[r];o.warp!=null?e.setWarpStep(o.warp):e.commandSpeed(o.kms)}updateDrive(t){let e=this.drv,i=this.sim,n=e.M,r=i.eng,o=i.warp.on&&!i.warp.dropping,a=o?i.warp.step:-1,l=i.speedTarget,c=o?n.toU(0,a):n.toU(l),d=i.warp.on?n.toU(0,Math.max(i.warp.step,0)):n.toU(Math.max(i.speed,0));e.thumb.style.left=c*100+"%",e.act.style.left=d*100+"%";let u=i.warp.on,h=!u&&Math.max(i.speed,i.speedTarget)>=this.cfg.ship.orbitalMaxKmS,f=o?"#6aa8ff":h?"#f0f0f4":"#ff9a4a";e.thumb.style.borderColor=f,e.thumb.style.boxShadow=`0 0 8px ${f}`,e.act.style.background=f;let p=o?"WARP":h?"NACELLES":"ROCKET",v=o?`${this.cfg.warp.steps[a].toLocaleString("en-US")} c`:l<.05?"stop":l>=ce*.001?`${(l/ce*100).toFixed(l/ce<.1?2:1)} % c`:l>=1?`${l.toFixed(l<10?1:0)} km/s`:`${(l*1e3).toFixed(0)} m/s`;e.txt.innerHTML=`<span style="color:${f}">${p}</span> \xB7 ${v}`;let g=e.root.querySelectorAll(".legend span");g[0].style.opacity=.35+.65*r.rocket,g[1].style.opacity=.35+.65*r.cruise,g[2].style.opacity=.35+.65*r.warp}select(t){this.selected=t,this.selKey=null,this.altSel=null,this.altBody=null,this.nav.classList.contains("open")&&this.renderNav(!0)}commitSelection(t="orbit"){let e=this.selected;e&&(e.type==="body"?this.sim.setCourseBody(e.body,t,this.altSel!=null&&this.altBody===e.body?this.altSel:null):e.type==="system"&&this.sim.setCourseSystem(e.dest),this.renderNav(!0))}renderNav(t=!1){if(!this.nav.classList.contains("open"))return;let e=performance.now();if(!t&&e-this._lastNav<700)return;this._lastNav=e;let i=this.sim,n=i.getDestinations(t),r=this.navList;r.innerHTML="";let o=(h,f)=>r.appendChild(Nt("div",h,f)),a=this.selected,l=(this.navQ.value||"").trim(),c=l.length>=2,d=l.toLowerCase();if(l.length===1&&o("sec","type at least 2 characters to search"),i.system){o("sec",`in ${i.system.name}${i.system.fictional?" \xB7 fictional":""}`);let h=new Map(n.bodies.map(v=>[v.body,v])),f=n.bodies.filter(v=>v.kind==="star").concat(n.bodies.filter(v=>v.kind==="planet"||v.kind==="dwarf").sort((v,g)=>(v.body.orbit?.a??0)-(g.body.orbit?.a??0))),p=[];for(let v of f){p.push(v);let g=n.bodies.filter(m=>m.body.parent===v.body&&m.kind==="moon").sort((m,x)=>(m.body.orbit?.a??0)-(x.body.orbit?.a??0));p.push(...g)}for(let v of p){if(c&&!v.name.toLowerCase().includes(d))continue;let g=Nt("div","item"+(a&&a.body===v.body?" sel":"")),m=v.kind==="moon"?"&nbsp;&nbsp;\u21B3 ":"";g.innerHTML=`<span class="n">${m}${v.name}${v.body.fictional?'<span class="tag f">F</span>':""}</span><span class="m">${Ie(v.dist)}</span>`,g.onclick=()=>{this.select({type:"body",body:v.body})},g.ondblclick=()=>{this.selected={type:"body",body:v.body},this.commitSelection()},r.appendChild(g)}}let u=c?i.searchSystems(l):n.systems;o("sec",c?`systems matching \u201C${l}\u201D`:`star systems within ${this.cfg.destinations.radiusLy} ly`),u.length||o("item",`<span class="n" style="color:#777">${c?"no match":"none in range"}</span>`);for(let h of u){let f=Nt("div","item"+(h.outOfRange?" dim":"")+(a&&a.dest&&a.dest.group.key===h.group.key?" sel":""));f.innerHTML=`<span class="n">${h.name}${h.known?'<span class="tag">planets</span>':'<span class="tag f">F</span>'}</span><span class="m">${h.distLy.toFixed(2)} ly${h.outOfRange?" \xB7&nbsp;far":""}</span>`,f.onclick=()=>{this.select({type:"system",dest:h})},f.ondblclick=()=>{this.selected={type:"system",dest:h},this.commitSelection()},r.appendChild(f)}this.showFoot()}showFoot(){let t=this.selected,e=this.navFoot;if(!t){e.innerHTML='click to inspect \xB7 double-click or <b>Enter</b> to set course<br><span style="color:#666">F = fictional (procedurally generated)</span>';return}if(t.type==="body"){let r=t.body,o=this.cfg,a=r.safeRadiusKm(o)-r.radiusKm;e.innerHTML=`<b>${r.name}</b> \xB7 ${r.kind}${r.fictional?" \xB7 <b>FICTIONAL</b>":""}<br>radius ${Ie(r.radiusKm)} \xB7 g ${(r.gravityMs2||0).toFixed(2)} m/s\xB2 \xB7 safe orbit ${Ie(a)} up<br><span style="color:#888">${r.info||""}</span><br><span class="bb"><button id="goA" style="margin-top:5px">APPROACH</button> <button id="go" style="margin-top:5px">ORBIT</button></span>`}else{let r=t.dest;e.innerHTML=`<b>${r.name}</b> \xB7 ${r.distLy.toFixed(2)} ly \xB7 ${r.stars} star${r.stars>1?"s":""}<br>${r.known?"confirmed planets (NASA Exoplanet Archive)":"<b>no confirmed planets</b> \u2014 a procedurally generated <b>FICTIONAL</b> system will be shown"}<br><button id="go" style="margin-top:5px">SET COURSE</button>`}let i=e.querySelector("#go");i&&(i.onclick=()=>this.commitSelection("orbit"));let n=e.querySelector("#goA");n&&(n.onclick=()=>this.commitSelection("approach"))}_nearestStar(t){let e=performance.now();if(this._ns&&e-this._nsT<400)return this._ns;this._nsT=e;let i=this.sim.cat,n=null;for(let a=.5;a<=64&&!n;a*=2){let l=1/0;for(let c of i.within(t,a)){let d=Math.hypot(i.pos[c*3]-t[0],i.pos[c*3+1]-t[1],i.pos[c*3+2]-t[2]);d<l&&(l=d,n=c)}}if(n==null)return this._ns=null,null;let r=i.traits(n),o=Math.hypot(i.pos[n*3]-t[0],i.pos[n*3+1]-t[1],i.pos[n*3+2]-t[2]);return this._ns={name:i.isSun(n)?"Sol":i.name(n),distKm:o*ne,hpKm:this.sim.uni.heliopauseOfStar(n),gm:r.gm,radiusKm:r.radiusKm},this._ns}updateWell(){let t=this.sim,e=this.wellCv,i=e.getContext("2d"),n=420,r=76,o=Math.min(2,window.devicePixelRatio||1);e.width!==n*o&&(e.width=n*o,e.height=r*o),i.setTransform(o,0,0,o,0,0);let a,l,c,d,u,h=!1,f=[];if(t.system){let L=t.system,q=t.sysPos(),O=null;for(let Z of L.stars){let et=Z.positionAt(t.jd),ht=Math.hypot(q[0]-et[0],q[1]-et[1],q[2]-et[2]);(!O||ht<O.d)&&(O={st:Z,d:ht})}a=L.name.replace(/ system$/i,"")==="Solar System"?"Sol":O.st.name,l=O.d,c=L.heliopauseKm,d=O.st.gm,u=O.st.radiusKm,h=Math.hypot(q[0],q[1],q[2])>c,f=L.bodies.filter(Z=>(Z.kind==="planet"||Z.kind==="dwarf")&&Z.semiMajorKm).map(Z=>({n:Z.name,a:Z.semiMajorKm}))}else{let L=this._nearestStar(t.shipPc());if(!L){this.well.style.display="none";return}a=L.name,l=L.distKm,c=L.hpKm,d=L.gm,u=L.radiusKm,h=!0}this.well.style.display=this.hidden?"none":"block";let p=Math.log10(Math.max(u,1)),v=Math.log10(c),g=14,m=g,x=n-g,_=28,y=L=>m+(x-m)*Mt((Math.log10(Math.max(L,1))-p)/(v-p),0,1);i.clearRect(0,0,n,r);let E=i.createLinearGradient(m,0,x,0);E.addColorStop(0,"rgba(235,235,235,0.95)"),E.addColorStop(.35,"rgba(180,180,180,0.5)"),E.addColorStop(1,"rgba(120,120,120,0.10)"),i.fillStyle=E,i.fillRect(m,_-5,x-m,10),i.strokeStyle="rgba(255,255,255,0.35)",i.lineWidth=1,i.strokeRect(m+.5,_-5.5,x-m,11),i.font="10px ui-monospace, Menlo, monospace",i.textBaseline="alphabetic",i.fillStyle="rgba(255,255,255,0.45)";for(let L=Math.ceil(Math.log10(u/Ht));L<=Math.floor(Math.log10(c/Ht));L++){let q=y(Math.pow(10,L)*Ht);i.fillRect(Math.round(q),_+5,1,4),L>=0&&i.fillText(L===0?"1 AU":Math.pow(10,L)+"",q-4*String(Math.pow(10,L)).length,_+19)}let A=f.length<=10;i.fillStyle="#fff";for(let L of f){let q=y(L.a);i.fillRect(Math.round(q),_-9,1,4),A&&(i.fillStyle="rgba(255,255,255,0.75)",i.fillText(L.n.slice(0,2),q-6,_-12),i.fillStyle="#fff")}i.fillStyle="#fff",i.fillRect(x-1,_-10,2,20),i.textAlign="right",i.fillText("HELIOPAUSE "+(c/Ht>=1e3?Math.round(c/Ht).toLocaleString("en-US"):(c/Ht).toFixed(c/Ht<10?1:0))+" AU",x,_-15),i.textAlign="left";let T=y(l);i.fillStyle="#fff",i.beginPath(),h&&l>c?(i.moveTo(x+10,_),i.lineTo(x+2,_-5),i.lineTo(x+2,_+5)):(i.moveTo(T,_-6),i.lineTo(T-5,_-14),i.lineTo(T+5,_-14)),i.closePath(),i.fill();let C=l,S=Math.sqrt(2*d/C),M=d/(C*C)*1e3,P=L=>L>=1?L.toFixed(2)+" m/s\xB2":L>=.001?(L*1e3).toFixed(2)+" mm/s\xB2":L*1e6>=.1?(L*1e6).toFixed(1)+" \xB5m/s\xB2":"<0.1 \xB5m/s\xB2",U=L=>L>=Xs*.1?(L/Xs).toFixed(2)+" ly":L>=Ht*.01?(L/Ht).toFixed(L/Ht<10?2:0)+" AU":Ie(L),F=c-C,N=`${a.toUpperCase()} \xB7 ${U(C)} \xB7 escape ${ma(S)} \xB7 g ${P(M)}`,V=C>c?`outside the heliopause by ${U(C-c)}`:`${Math.max(0,100*(1-F/c)).toFixed(C/c<.01?2:1)} % of the way to the heliopause \xB7 ${U(F)} to go`;i.fillStyle="#d8d8d8",i.fillText(N,m,r-20),i.fillStyle="rgba(200,200,200,0.7)",i.fillText(V,m,r-6)}update(t,e){this.pollKeys();let i=this.sim,n=i.hud(),r=this.$;this.fpsAvg+=(1/Math.max(t,.001)-this.fpsAvg)*.05,r("h-loc").textContent=n.where;let o=Hh(n.jd);r("h-sub").textContent=`${o.toISOString().replace("T"," ").slice(0,19)} UTC  \xB7  time \xD7${n.K>=100?Math.round(n.K).toLocaleString("en-US"):n.K.toFixed(n.K<10?1:0)}${n.K>=5?" "+"\u203A".repeat(Math.min(7,Math.floor(Math.log10(n.K)*1.1))):""}${i.timeAuto&&i.course&&!n.warp?" (auto)":""}`,r("h-sub2").textContent=i.ref?`frame: ${i.ref.name} \xB7 ${i.ref.kind}`:i.system?`frame: ${i.system.name}`:"frame: interstellar",this.updateWell(),this.banner.style.display=n.fictional?"block":"none",this.banner.textContent=n.fictional?"fictional system \xB7 procedurally generated \xB7 no confirmed planets":"",this.chips.TOUR.className="chip"+(i.mode==="tour"?" on":""),this.chips.FREE.className="chip"+(i.mode==="free"?" on":""),this.chips.AUTO.className="chip"+(n.engaged?" on":i.course?" warn":""),this.chips.WARP.className="chip"+(n.warp?" on":i.warp.form>0?" warn":""),r("h-speed").textContent=n.warp?n.c>=100?Math.round(n.c).toLocaleString("en-US")+" c":n.c.toFixed(n.c<10?2:1)+" c":n.c>=.01?n.c.toFixed(n.c<.1?4:3)+" c":ma(n.speed),r("h-kms").textContent=n.warp?"FTL "+(n.c*ce).toExponential(2)+" km/s":ma(n.speed);let a=Math.min(n.c,.9999);r("h-gam").textContent=n.warp?"bubble \xB7 n/a":`${n.gamma.toFixed(3)} / ${a.toFixed(3)}`,r("h-frame").textContent=i.ref?i.ref.name:i.system?"star":"rest",r("h-trip").textContent=ga(n.trip);{let p=i.forward(),v=Math.hypot(...i.vel),g=i.thrust,m=v>1e-6&&(p.x*i.vel[0]+p.y*i.vel[1]+p.z*i.vel[2])/v<-.5,x=!n.warp&&Math.max(i.speed,i.speedTarget)>=this.cfg.ship.orbitalMaxKmS;r("h-eng").textContent=n.warp?`warp field ${Math.round(i.eng.warp*100)} %`:i.ins?"orbit insertion burn":x?`nacelles ${Math.round(i.eng.cruise*100)} %`:g>.08?m?"rocket \xB7 retro burn":"rocket \xB7 burn":i.flipping?"turning to brake":"coasting"}if(!this._nearT||performance.now()-this._nearT>250){this._nearT=performance.now();let p="\u2014",v="nearest";if(i.system){let g=i.sysPos(),m=null,x=1/0;for(let _ of i.system.bodies){if(_.kind==="belt")continue;let y=_.positionAt(i.jd),E=Math.hypot(g[0]-y[0],g[1]-y[1],g[2]-y[2])-_.radiusKm;E<x&&(x=E,m=_)}m&&(v=m.name,p=(x<0?"0 km":Ie(x))+" alt")}else{let g=i.shipPc(),m=-1,x=1/0,_=i.cat.within(g,6);for(let y of _){let E=Math.hypot(i.cat.pos[y*3]-g[0],i.cat.pos[y*3+1]-g[1],i.cat.pos[y*3+2]-g[2]);E<x&&(x=E,m=y)}m>=0&&(v=i.cat.name(m),p=(x*3.2616).toFixed(x*3.26<1?3:2)+" ly")}this._nearTxt=[v,p]}this._nearTxt&&(r("h-near-l").textContent=this._nearTxt[0],r("h-near").textContent=this._nearTxt[1]);let l=Math.log10(this.cfg.ship.maxSublightC*ce),c=Math.log10(this.cfg.ship.speedFloorKmS),d=n.warp?Mt(Math.log10(Math.max(n.c,.05)/this.cfg.ship.maxSublightC)/Math.log10(this.cfg.warp.steps[this.cfg.warp.steps.length-1]/this.cfg.ship.maxSublightC),0,1):Mt((Math.log10(Math.max(n.speed,1e-9))-c)/(l-c),0,1);r("h-bar").style.width=d*100+"%";let u=!1;if(i.course){let p=i.eta();this.courseP.style.display="block";let v=i.course,g=v.kind==="body"?Ie(n.targetDist??0):`${((n.targetDist??0)/Xs).toFixed(2)} ly`,m=v.kind==="system"?{align:"aligning",depart:"sub-light to heliopause",warp:i.warp.on?i.warp.dropping||i.warp.capC<i.warp.c*1.02?"braking for arrival":"warp cruise":"engaging"}[v.phase]:v.remaining<(v.radius||1)*2?"final approach":"transit";if(v.engaged)this.courseP.innerHTML=`<div class="t">\u2192 ${v.label}${i.tour?i.tour.scope==="stars"?" \xB7 stars tour":" \xB7 system tour":""}</div><div class="d"><span>distance <b>${g}</b></span><span>ETA <b>${isFinite(p)?ga(p):"\u2014"}</b></span><span>elapsed <b>${ga(n.trip)}</b></span></div><div class="d"><span>${m}</span><span>${i.timeAuto&&!n.warp?"auto time":""}</span></div>`;else{let x=(v.alignErr??0)*180/Math.PI;this.courseP.innerHTML=`<div class="t">\u2192 ${v.label} \xB7 manual</div><div class="d"><span>distance <b>${g}</b></span><span>${v.aligned?"<b>on course</b>":"aligning \xB7 "+x.toFixed(0)+"\xB0 off"}</span></div><div class="d"><span>press <b>AUTO</b> (P) for cruise control</span><span><u id="cc-x" style="cursor:pointer">clear</u></span></div>`;let _=this.courseP.querySelector("#cc-x");_&&(_.onclick=()=>i.cancelCourse("Course cleared")),u=!0}}else if(i.tour){let p=i.tour,v=p.stops[p.idx],g=p.scope==="stars"?`${i.system?i.system.name:""} \xB7 ${v?v.note:""}`:v?v.note:"";this.courseP.style.display="block",this.courseP.innerHTML=`<div class="t">${p.scope==="stars"?"local stars tour":"star system tour"} \xB7 ${p.pace} \xB7 ${g}</div><div class="d"><span>${p.pace==="slow"?"you set the pace with the <b>TIME</b> buttons \xB7 <b>AUTO</b> = fast tour":"time compression is automatic \xB7 pick a <b>TIME</b> button for a slow tour"}</span></div><div class="d"><span>press <b>T</b> or move the controls to take the helm</span></div>`}else this.courseP.style.display="none";let h=i.timeAuto||!n.warp&&Math.abs(n.K-i.timeScale)>.02*i.timeScale,f=this.cfg.time.steps;this.timeBtns.forEach((p,v)=>p.classList.toggle("on",!h&&v===i.timeIndex)),this.timeBtns.forEach((p,v)=>p.classList.toggle("dim",n.warp&&f[v]>this.cfg.warp.maxTimeCompression)),this.autoT.classList.toggle("on",h),this.updateDrive(n),this.timeFx.update(t,n.K);{let p=i.tour;this.btnSys.classList.toggle("on",!!p&&p.scope==="system"),this.btnStars.classList.toggle("on",!!p&&p.scope==="stars");let v=p?p.pace:i.tourPace;this.btnPace.textContent=v==="fast"?"FAST":"SLOW",this.btnPace.classList.toggle("on",!!p),this.chips.TOUR.textContent=p?p.pace==="fast"?"FAST TOUR":"SLOW TOUR":"TOUR"}this.toast.innerHTML=i.messages.map(p=>`<div>${p.msg}</div>`).join(""),this.fps.textContent=`${Math.round(this.fpsAvg)} fps \xB7 ${this.gfx.W}\xD7${this.gfx.H}${e&&e.scale<.99?" \xB7 scale "+e.scale.toFixed(2):""}`,this.renderNav()}_project(t,e,i){let n=this.gfx.cssW,r=this.gfx.cssH,o=.5*r/Math.tan(.5*i*Math.PI/180),a=new I(t[0],t[1],t[2]).applyMatrix3(e),l=a.z>=-1e-9,c=n/2+a.x/Math.max(-a.z,1e-9)*o,d=r/2-a.y/Math.max(-a.z,1e-9)*o,u=34,h=u+26,f=r-118;if(!l&&c>u&&c<n-u&&d>h&&d<f)return{x:c,y:d,on:!0,ang:0};let v=a.x,g=-a.y;l&&Math.hypot(v,g)<1e-6&&(v=1);let m=Math.hypot(v,g)||1;v/=m,g/=m;let x=n/2,_=(h+f)/2,y=(n-2*u)/2,E=(f-h)/2,A=Math.min(Math.abs(v)>1e-6?y/Math.abs(v):1e9,Math.abs(g)>1e-6?E/Math.abs(g):1e9);return{x:x+v*A,y:_+g*A,on:!1,ang:Math.atan2(g,v)*180/Math.PI}}_placeMark(t,e,i,n){t.style.display="block",t.style.transform=`translate(${Math.round(e.x)}px,${Math.round(e.y)}px)`;let r=t.querySelector(".box"),o=t.querySelector(".arr"),a=t.querySelector(".tx");r&&(r.style.display=e.on&&n?"block":"none"),o.style.display=e.on?"none":"block",e.on||(o.style.transform=`rotate(${e.ang}deg)`),o.textContent="\u27A4",a.textContent=i,a.style.left=e.on?"22px":Math.cos(e.ang*Math.PI/180)>.2?"-"+(a.textContent.length*6.4+16)+"px":"14px"}_altControl(t){let e=this.selP.querySelector("#sp-r"),i=this.selP.querySelector("#sp-n"),n=Math.max(t.safeRadiusKm(this.cfg)-t.radiusKm,1),r=Math.max(t.radiusKm*40,n*4),o=Math.log(r/n),a=()=>this.altSel!=null&&this.altBody===t?this.altSel:n,l=()=>{e.value=String(Math.round(1e3*Math.log(Math.max(a(),n)/n)/o)),i.value=this.altSel!=null&&this.altBody===t?Ie(a()):Ie(n)+" (safe)"},c=d=>{this.altSel=Mt(d,n,r*4),this.altBody=t,l()};e.oninput=()=>c(n*Math.exp(o*+e.value/1e3)),i.onfocus=()=>{i.select()},i.onchange=()=>{let d=/^\s*([0-9.]+(?:e[0-9]+)?)\s*(m|km|au|mm|M km)?\s*$/i.exec(i.value.replace(/,/g,""));if(!d){l();return}let u=(d[2]||"km").toLowerCase(),h=parseFloat(d[1]);c(u==="m"?h/1e3:u==="au"?h*1495978707e-1:u==="mm"||u==="m km"?h*1e6:h)},l()}updateMarkers(t,e){let i=this.sim,n=i.uni;if(this.hidden){this.markSel.style.display="none",this.markHome.style.display="none",this.selP.style.display="none";return}let r=null,o="";if(i.system&&i.system===n.solar){let h=n.solar.get("earth");if(h&&i.ref!==h){let f=h.positionAt(i.jd),p=i.sysPos();r=[f[0]-p[0],f[1]-p[1],f[2]-p[2]],o="EARTH"}}else{let h=i.shipPc();r=[-h[0]*ne,-h[1]*ne,-h[2]*ne],o="SOL"}let a=this.selected&&this.selected.type==="body"&&this.selected.body.name.toUpperCase()===o;if(r&&!a){let h=Math.hypot(r[0],r[1],r[2]);h<1e5&&o==="SOL"?this.markHome.style.display="none":this._placeMark(this.markHome,this._project(r,t,e),`${o} \xB7 ${Ie(h)}`,!1)}else this.markHome.style.display="none";let l=this.selected,c=!1;if(l&&l.type==="body"&&l.body.system===i.system&&i.system){c=!0;let h=l.body,f=h.positionAt(i.jd),p=i.sysPos(),v=[f[0]-p[0],f[1]-p[1],f[2]-p[2]],g=Math.hypot(v[0],v[1],v[2]);this._placeMark(this.markSel,this._project(v,t,e),`${h.name.toUpperCase()}${h.fictional?" (F)":""} \xB7 ${Ie(Math.max(g-h.radiusKm,0))}`,!0),this._selDist=g}else if(l&&l.type==="system"){c=!0;let h=l.dest.group.centre,f=i.shipPc(),p=[(h[0]-f[0])*ne,(h[1]-f[1])*ne,(h[2]-f[2])*ne],v=Math.hypot(p[0],p[1],p[2]);this._placeMark(this.markSel,this._project(p,t,e),`${l.dest.name.toUpperCase()} \xB7 ${(v/Xs).toFixed(2)} ly`,!0)}if(!c){this.markSel.style.display="none",this.selP.style.display="none",l&&(this.selected=null),this.selKey=null;return}let d=l.type+":"+(l.type==="body"?l.body.name:l.dest.name);if(this.selKey!==d){if(this.selKey=d,this.selP.style.display="block",l.type==="body"){let h=l.body;this.selP.innerHTML=`<h5><b>${h.name}</b><span id="sp-x">\u2715</span></h5><div class="m">${h.kind}${h.fictional?" \xB7 <b>FICTIONAL</b>":""} \xB7 radius ${Ie(h.radiusKm)}<br><span id="sp-d"></span></div><div class="alt"><span>altitude</span><input id="sp-r" type="range" min="0" max="1000" step="1"><input id="sp-n" type="text" inputmode="decimal" spellcheck="false" title="altitude in km (or add m / km / AU)"></div><div class="b"><button id="sp-a" title="fly there and hold position at this altitude (Shift+Enter); untouched = ${this.cfg.autopilot.approachRadii} radii out">APPROACH</button><button id="sp-o" title="fly there and settle into the safe low orbit (Enter)">ORBIT</button></div>`,this._altControl(h),this.selP.querySelector("#sp-a").onclick=()=>this.commitSelection("approach"),this.selP.querySelector("#sp-o").onclick=()=>this.commitSelection("orbit")}else{let h=l.dest;this.selP.innerHTML=`<h5><b>${h.name}</b><span id="sp-x">\u2715</span></h5><div class="m">${h.stars} star${h.stars>1?"s":""} \xB7 ${h.known?"confirmed planets":"<b>FICTIONAL</b> planets"}<br><span id="sp-d"></span></div><div class="b"><button id="sp-o">SET COURSE</button></div>`,this.selP.querySelector("#sp-o").onclick=()=>this.commitSelection("orbit")}this.selP.querySelector("#sp-x").onclick=()=>{this.selected=null,this.selKey=null,this.nav.classList.contains("open")&&this.renderNav(!0)}}let u=this.selP.querySelector("#sp-d");if(u){let h=i.course,f=h&&(l.type==="body"&&h.kind==="body"&&h.body===l.body||l.type==="system"&&h.kind==="system"&&h.name===l.dest.name);u.textContent=(l.type==="body"?"distance "+Ie(Math.max((this._selDist||0)-l.body.radiusKm,0)):"")+(f?" \xB7 underway":"")}}updateLabels(t,e,i,n){if(!this.labelsEnabled||this.hidden){for(let f of this.lbls)f.e.style.display="none";return}let r=this.gfx.cssW,o=this.gfx.cssH,a=.5*o/Math.tan(.5*i*Math.PI/180),l=[],c=new I;for(let f of t.labels||[]){if(c.set(f.rel[0],f.rel[1],f.rel[2]).applyMatrix3(e),c.z>=-1e-6)continue;let p=r/2+c.x/-c.z*a,v=o/2-c.y/-c.z*a;if(p<-20||p>r+20||v<-20||v>o+20)continue;let m=(f.kind==="star"?3:f.kind==="planet"?2:f.kind==="dwarf"?1.5:f.kind==="galaxy"?2.5:1)*1e3+Math.min(f.angPx,300)-f.dist*1e-9;f.kind==="moon"&&f.angPx<3&&f.body.parent&&t.bodyInfo.get(f.body.parent).angPx<12||f.kind==="galaxy"&&f.dirOnly&&!this.cfg.visuals.galaxies.labels||l.push({x:p,y:v,L:f,score:m})}l.sort((f,p)=>p.score-f.score);let d=this.cfg.visuals.labels.maxLabels,u=[],h=0;for(let f of l){if(h>=d)break;u.some(p=>Math.abs(p.x-f.x)<90&&Math.abs(p.y-f.y)<18)||(u.push(f),h++)}for(;this.lbls.length<u.length;){let f=Nt("div","lbl"),p={e:f};f.onclick=()=>{p.body&&p.body.system===this.sim.system&&p.body.positionAt&&this.select({type:"body",body:p.body})},this.labelLayer.appendChild(f),this.lbls.push(p)}this.lbls.forEach((f,p)=>{let v=u[p];if(!v){f.e.style.display="none";return}let g=v.L.body,m=this.selected&&this.selected.body===g;f.body=g,f.e.style.display="block",f.e.style.transform=`translate(${Math.round(v.x+9)}px,${Math.round(v.y-7)}px)`,f.e.className="lbl"+(m?" sel":"");let x=g.name+(g.fictional?"\xB7F":"");f.key!==x+(v.L.dist<1e7?"n":"f")&&(f.key=x+(v.L.dist<1e7?"n":"f"),f.e.innerHTML=`<i style="position:absolute;left:-12px;top:5px"></i>${g.name}${g.fictional?' <span class="s">fictional</span>':""}`)})}};async function Vu(){let s=window.SIM_CONFIG;new URLSearchParams(location.search).has("notour")&&(s.sim.startWithTour=!1);try{let V=JSON.parse(localStorage.getItem("starship.settings")||"{}");for(let[L,q]of Object.entries(V)){let O=L.split("."),Z=O.pop();O.reduce((et,ht)=>et?.[ht],s)[Z]=q}}catch{}let e=(V,L)=>{let q=document.getElementById("boot-msg");q&&(q.textContent=V);let O=document.getElementById("boot-bar");O&&L!=null&&(O.style.width=L*100+"%")},i=()=>new Promise(V=>setTimeout(V,16));e("reading star catalogue\u2026",.08),await i();let n=await Nh();e(`${n.n.toLocaleString("en-US")} stars \xB7 ${n.galaxies.length} galaxies \xB7 ${n.hosts.size} planet hosts`,.3),await i();let r=new ba(n,s),o=document.getElementById("view"),a=new Ma(o,s,n);e("decoding planet maps\u2026",.5),await i();let l=await Au(a.renderer);e("building the ship\u2026",.8),await i();let c=new wa(a,s,l,r.cat),d=new Ta(a,s),u=new Aa(r,s),h=new Ra(u,s,a,o);e("ready",1),await i();let f=null,p=s.visuals.renderScale,v=null,g=performance.now(),m=0,x=0,_=0,y=0,E=60,A=0,T=0,C=3,S=!1,M=null,P=0,U=window.__sim={cfg:s,data:n,uni:r,gfx:a,space:c,shipView:d,sim:u,ui:h,textures:l,frames:0,F:null,info:null,freeze:!1};U.testWarp=(V,L)=>{u.cancelCourse(),u.stopTour&&u.stopTour(),u.system=null,u.ref=null,u.anchorPc=[0,0,0],u.pos=[4e10,2e10,1e10],u.vel=[0,0,0],L&&u._lookAlong(new I(...L),1/0,new I(0,0,1)),u.warp.on=!0,u.warp.step=V,u.warp.c=s.warp.steps[V],u.warp.form=1,u.mode="free",u.warp.dropping=!1},U.deepSpace=(V=[.3,.9,.1],L=0,q=[0,0,0],O=[6e10,2e10,1e10])=>{u.cancelCourse(),u.stopTour&&u.stopTour(),u.warp.on=!1,u.warp.form=0,u.system=null,u.ref=null,u.anchorPc=q.slice(),u.pos=O.slice(),u.orbit=null,u._lookAlong(new I(...V),1/0,new I(0,0,1));let Z=u.forward(),et=L*ce;u.speedTarget=et,u.vel=[Z.x*et,Z.y*et,Z.z*et],u.mode="free"},U.probeHDR=()=>{let V=a,L=V.renderer,q=V.W,O=V.H,Z=new Uint16Array(4*q*O);L.readRenderTargetPixels(V.sceneRT,0,0,q,O,Z);let et=J=>{let lt=J>>10&31,it=J&1023;return lt===0?Math.pow(2,-14)*(it/1024):lt===31?it?NaN:1/0:Math.pow(2,lt-15)*(1+it/1024)},ht=0,Ut=0,kt=0,X=0;for(let J=0;J<Z.length;J+=4){let lt=et(Z[J]);Number.isNaN(lt)?ht++:lt===1/0?Ut++:(lt>.002&&kt++,lt>X&&(X=lt))}return{nan:ht,inf:Ut,lit:kt,max:+X.toFixed(3),total:q*O}};let F=performance.now(),N=V=>{let L=Math.min(.1,(V-g)/1e3);g=V,U.freeze||(h.pollKeys(),u.update(L)),u.system!==f&&(f=u.system,f?c.setSystem(f):c.clear());let q=u.jd,O=u.cam,Z=u.sysPos(q),et=Hu(u,r,q,Z);if(U.devCam&&u.system){let b=u.system.get(U.devCam.body)||u.system.bodies.find(H=>H.id===U.devCam.body||H.name===U.devCam.body);b&&(et=Hu(u,r,q,b.positionAt(q)))}let ht=U.devGain||Pu(et.contextE,s);v=Iu(v,ht,L,s.visuals.exposure.adaptSeconds);let Ut=d.update({quat:u.q,camFrame:u.qCam,gimbal:u.gimbal,engines:u.eng,dt:L,cam:{yaw:O.yaw,pitch:O.pitch,dist:Math.max(O.dist,0),up:O.dist<3?0:O.up*Math.min(1,O.dist/40)},fov:s.camera.fovDeg,aspect:a.W/a.H,...et,exposure:v,throttle:xv(u,s),warp:{form:u.warp.form,speed01:zu(u,s),pulse:u.warp.pulse}}),kt=Ut.camQuat,X=Ut.offsetWorld.clone().multiplyScalar(.001),J=[Z[0]+X.x,Z[1]+X.y,Z[2]+X.z],lt=U.devCam;if(lt&&u.system){let b=u.system.get(lt.body)||u.system.bodies.find(H=>H.id===lt.body||H.name===lt.body);if(b){let H=b.positionAt(q),$=(b.parent&&b.parent.kind==="star"?b.parent:u.system.stars[0]).positionAt(q),Q=new I($[0]-H[0],$[1]-H[1],$[2]-H[2]);Q=Q.lengthSq()<1?new I(1,0,0):Q.normalize();let Y=new I(0,0,1),St=new I().crossVectors(Q,Y).normalize(),dt=new I().crossVectors(St,Q).normalize(),vt=lt.az*Kt,Zt=lt.el*Kt,st=Q.clone().multiplyScalar(Math.cos(vt)*Math.cos(Zt)).add(St.clone().multiplyScalar(Math.sin(vt)*Math.cos(Zt))).add(dt.clone().multiplyScalar(Math.sin(Zt))),xt=b.radiusKm*lt.r;J=[H[0]+st.x*xt,H[1]+st.y*xt,H[2]+st.z*xt];let Lt=st.clone().negate(),Ft=new I().crossVectors(Lt,Y).normalize(),yt=new I().crossVectors(Ft,Lt);kt=new Me().setFromRotationMatrix(new jt().makeBasis(Ft,yt,Lt.clone().negate())),lt.look&&kt.multiply(new Me().setFromEuler(new Fe(lt.look[1]*Kt,lt.look[0]*Kt,0))),d.ship.root.visible=!1,d.bubble.visible=!1}}let it=u.system?u.system.originPc:u.anchorPc,nt=[it[0]+J[0]/ne,it[1]+J[1]/ne,it[2]+J[2]/ne],ct=u.visualBeta(),rt=ct[0]**2+ct[1]**2+ct[2]**2,wt=1/Math.sqrt(Math.max(1-rt,1e-6)),Pt=new Dt().setFromMatrix4(new jt().makeRotationFromQuaternion(kt)).transpose(),Yt=new I(ct[0],ct[1],ct[2]).applyMatrix3(Pt),D=u.forward(),ee=u.warp,Ot=s.warp.visual,zt=zu(u,s),bt=yv(d,a,ee,zt),$t={camPc:nt,camSys:J,jd:q,quat:kt,view:Pt,beta:ct,gamma:wt,betaCam:Yt,exposure:v,fov:s.camera.fovDeg,dt:L,dtReal:L,timeScale:u.timeUsed||1,focalPx:a.focalPx,mwScale:1,zodi:u.system&&u.system===r.solar?1:0,zodiScale:1,sunDir:et.sunDirRest,hide:[],showOrbits:!0,warp:{dir:[D.x,D.y,D.z],beta:0,gamma:1,streak:ee.on?ee.form*(.3+.7*zt):0,dim:0,lens:ee.form>.01?ee.form:0,center:bt.center,radius:bt.radius,flash:ee.flash,dirCam:new I(0,0,-1)}};a.camera.fov=s.camera.fovDeg,a.camera.updateProjectionMatrix(),$t.focalPx=a.focalPx;let _t={hide:[],labels:[],bodyInfo:new Map};if(f&&(_t=c.update($t)),$t.hide=_t.hide,s.visuals.galaxies.labels&&s.visuals.galaxies.enabled&&s.visuals.labels.enabled){_t.labels=(_t.labels||[]).slice();for(let b of a.galaxies){let H=b.userData.g,$=b.material.uniforms.uDir.value;_t.labels.push({body:{name:`${H.name} \xB7 ${(H.dKpc*3.2616).toFixed(0)} kly`,fictional:!1,parent:null},rel:[$.x*1e9,$.y*1e9,$.z*1e9],dist:1e18,angPx:3,kind:"galaxy",dirOnly:!0})}}U.F=$t,U.info=_t,U.ctx=et,s.visuals.renderScale!==p&&(p=s.visuals.renderScale,a.setRenderScale(p)),a.render($t,{space:f?(b,H)=>c.render(b,H):null,near:b=>d.render(b)}),U.freeze||h.update(L,{scale:a.renderScale}),h.updateLabels(_t,Pt,s.camera.fovDeg,a.W/a.H),h.updateMarkers(Pt,s.camera.fovDeg),U.frames++;let R=s.visuals.adaptiveResolution;if(R.enabled&&performance.now()-F>4e3){let b=performance.now(),H=1/Math.max(L,.001);E+=(H-E)*.08,E<R.targetFps-6?(x+=L,y=0):E>=R.targetFps-4?(y+=L,x=0):x=y=0,M&&b-M.t>2500&&(E<M.fps*1.08&&a.renderScale<M.prev&&(a.setRenderScale(M.prev),P=b+12e4),M=null),x>1.5&&a.renderScale>R.min&&b>P&&(M={t:b,fps:E,prev:a.renderScale},a.setRenderScale(Math.max(R.min,a.renderScale-.1)),x=0,b-A<6e3&&(C=Math.min(C*2,90)),T=b),y>C&&a.renderScale<p-.01&&b-T>3e3&&(a.setRenderScale(Math.min(p,a.renderScale+.1)),y=0,A=b),b-T>4e4&&(C=3);let $=u.warp.form>.01||u.warp.on;S&&!$&&a.renderScale<p&&(a.setRenderScale(p),E=R.targetFps,x=0,C=3),S=$}requestAnimationFrame(N)};document.getElementById("boot").style.display="none",window.__ready=!0,requestAnimationFrame(N)}function zu(s,t){let e=s.warp;if(!e.on)return 0;let i=t.warp.steps[t.warp.steps.length-1];return Mt(Math.log10(Math.max(e.c,.8)/.8)/Math.log10(i/.8),0,1)}function xv(s,t){return s.warp.on?.55:Mt(s.thrust,0,1)*.9}function Hu(s,t,e,i){let n=t.cat,r=[1,0,0],o=[0,0,0],a=3e-9,l=0,c=[0,1,0],d=1,u=[1,0,0];if(s.system){let h=Lu(s.system,i,e),f=Cu(s.system,i,e);h&&(r=h.dir,u=h.dir,o=[h.color[0]*h.E,h.color[1]*h.E,h.color[2]*h.E],d=h.vis),l=f.shine,a=f.direct+f.shine+3e-9;let p=null,v=1/0;for(let g of s.system.bodies){if(g.kind==="star"||g.kind==="belt")continue;let m=g.positionAt(e),x=Math.hypot(m[0]-i[0],m[1]-i[1],m[2]-i[2]),_=x/g.radiusKm;_<v&&(v=_,p=[(m[0]-i[0])/x,(m[1]-i[1])/x,(m[2]-i[2])/x])}p&&v<40&&(c=p)}else{let h=s.shipPc(e),f=n.within(h,12),p=0,v=0;for(let g of f){let m=n.apparentMag(g,h),x=Math.pow(10,-.4*(m+26.74));if(v+=x,x>p){p=x;let _=[n.pos[g*3]-h[0],n.pos[g*3+1]-h[1],n.pos[g*3+2]-h[2]],y=Math.hypot(..._)||1;r=[_[0]/y,_[1]/y,_[2]/y],u=r;let E=Dn(n.d.teff[g]);o=[E[0]*x,E[1]*x,E[2]*x]}}a=v+3e-9}return{sunDir:r,sunE:o,sunVisible:d,bodyDir:c,bodyShine:l,ambientE:2e-9,contextE:a,sunDirRest:u}}function yv(s,t,e,i){if(!(e.form>.01))return{center:[.5,.5],radius:.2};let n=s.camera,r=new I(0,0,0).applyMatrix4(n.matrixWorldInverse),o=Math.max(r.length(),1),a=.5/Math.tan(.5*n.fov*Kt),l=.5,c=.5;r.z<-.01&&(l=.5+r.x/-r.z*a/n.aspect,c=.5+r.y/-r.z*a);let d=120*(.35+.65*hi(0,.6,e.form)),u=Math.min(d/Math.max(o,d*1.02),.99),h=Math.min(Math.tan(Math.asin(u))*a,1.5);return{center:[l,c],radius:h}}Vu().catch(s=>{console.error(s);let t=document.getElementById("boot-msg");t&&(t.textContent="Error: "+(s&&s.message?s.message:s),t.style.color="#f88")});})();
