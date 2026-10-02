(()=>{var Xu=0,ic=1,qu=2;var ch=1,Tl=2,Xn=3,on=0,Ue=1,Ee=2,ui=0,ns=1,Mn=2,sc=3,rc=4,hn=5,Te=100,Ku=101,$u=102,Yu=103,Zu=104,Ju=200,Ce=201,ju=202,Qu=203,ks=204,as=205,td=206,ed=207,nd=208,id=209,sd=210,rd=211,ad=212,od=213,ld=214,co=0,ho=1,uo=2,os=3,fo=4,po=5,mo=6,go=7,hh=0,cd=1,hd=2,In=0,ud=1,dd=2,fd=3,pd=4,md=5,gd=6,vd=7;var uh=300,ls=301,cs=302,vo=303,xo=304,aa=306,bn=1e3,mn=1001,yo=1002,an=1003,xd=1004;var nr=1005;var ke=1006,Pa=1007;var $n=1008;var jn=1009,dh=1010,fh=1011,Os=1012,Al=1013,Ri=1014,Yn=1015,Nn=1016,Rl=1017,Cl=1018,hs=1020,ph=35902,mh=1021,gh=1022,De=1023,vh=1024,xh=1025,is=1026,us=1027,yh=1028,Pl=1029,_h=1030,Il=1031;var Ll=1033,Ir=33776,Lr=33777,Dr=33778,Ur=33779,_o=35840,Mo=35841,bo=35842,So=35843,wo=36196,Eo=37492,To=37496,Ao=37808,Ro=37809,Co=37810,Po=37811,Io=37812,Lo=37813,Do=37814,Uo=37815,Fo=37816,No=37817,ko=37818,Oo=37819,Bo=37820,zo=37821,Fr=36492,Ho=36494,Vo=36495,Mh=36283,Go=36284,Wo=36285,Xo=36286;var Nr=2300,qo=2301,Ia=2302,ac=2400,oc=2401,lc=2402;var yd=3200,_d=3201;var bh=0,Md=1,Rn="",Ge="srgb",Qn="srgb-linear",oa="linear",he="srgb";var ki=7680;var cc=519,bd=512,Sd=513,wd=514,Sh=515,Ed=516,Td=517,Ad=518,Rd=519,Ko=35044,Dl=35048;var hc="300 es",Zn=2e3,kr=2001,fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var La=Math.PI/180,$o=180/Math.PI;function di(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function Cd(s,t){return(s%t+t)%t}function Da(s,t,e){return(1-e)*s+e*t}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ct=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],p=n[8],v=i[0],g=i[3],m=i[6],x=i[1],_=i[4],y=i[7],E=i[2],T=i[5],A=i[8];return r[0]=o*v+a*x+l*E,r[3]=o*g+a*_+l*T,r[6]=o*m+a*y+l*A,r[1]=c*v+d*x+u*E,r[4]=c*g+d*_+u*T,r[7]=c*m+d*y+u*A,r[2]=h*v+f*x+p*E,r[5]=h*g+f*_+p*T,r[8]=h*m+f*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,p=e*u+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(i*c-d*n)*v,t[2]=(a*n-i*o)*v,t[3]=h*v,t[4]=(d*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ua=new Dt;function wh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pd(){let s=Or("canvas");return s.style.display="block",s}var uc={};function Us(s){s in uc||(uc[s]=!0,console.warn(s))}function Id(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ld(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?oa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var dc=[.64,.33,.3,.6,.15,.06],fc=[.2126,.7152,.0722],pc=[.3127,.329],mc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Qn]:{primaries:dc,whitePoint:pc,transfer:oa,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:fc,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:dc,whitePoint:pc,transfer:he,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:fc,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});var Oi,Yo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Or("canvas")),Oi.width=t.width,Oi.height=t.height;let n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ud=0,Br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fa(i[o].image)):r.push(Fa(i[o]))}else r=Fa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fd=0,Xe=class s extends fi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=mn,i=mn,r=ke,o=$n,a=De,l=jn,c=s.DEFAULT_ANISOTROPY,d=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=di(),this.name="",this.source=new Br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=uh;Xe.DEFAULT_ANISOTROPY=1;var jt=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(f+1)/2,E=(m+1)/2,T=(d+h)/4,A=(u+v)/4,C=(p+g)/4;return _>y&&_>E?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=A/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=A/r,i=C/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-v)/x,this.z=(h-d)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zr=class extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Se=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3],h=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==h||c!==f||d!==p){let g=1-a,m=l*h+c*f+d*p+u*v,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let E=Math.sqrt(_),T=Math.atan2(E,m*x);g=Math.sin(g*T)/E,a=Math.sin(a*T)/E}let y=a*x;if(l=l*g+h*y,c=c*g+f*y,d=d*g+p*y,u=u*g+v*y,g===1-a){let E=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=E,c*=E,d*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+d*u+l*f-c*h,t[e+1]=l*p+d*h+c*u-a*f,t[e+2]=c*p+d*f+a*h-l*u,t[e+3]=d*p-a*u-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(r/2),h=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"YZX":this._x=h*d*u+c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u-h*f*p;break;case"XZY":this._x=h*d*u-c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=n+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),d=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=i+l*u+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Na=new I,vc=new Se,Ci=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),sr.subVectors(this.max,Ts),Bi.subVectors(t.a,Ts),zi.subVectors(t.b,Ts),Hi.subVectors(t.c,Ts),si.subVectors(zi,Bi),ri.subVectors(Hi,zi),_i.subVectors(Bi,Hi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-_i.z,_i.y,si.z,0,-si.x,ri.z,0,-ri.x,_i.z,0,-_i.x,-si.y,si.x,0,-ri.y,ri.x,0,-_i.y,_i.x,0];return!ka(e,Bi,zi,Hi,sr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Bi,zi,Hi,sr))?!1:(rr.crossVectors(si,ri),e=[rr.x,rr.y,rr.z],ka(e,Bi,zi,Hi,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},zn=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,ir=new Ci,Bi=new I,zi=new I,Hi=new I,si=new I,ri=new I,_i=new I,Ts=new I,sr=new I,rr=new I,Mi=new I;function ka(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Mi.fromArray(s,r);let a=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),d=n.dot(Mi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Nd=new Ci,As=new I,Oa=new I,Pi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Oa)),this.expandByPoint(As.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new I,Ba=new I,ar=new I,ai=new I,za=new I,or=new I,Ha=new I,Bs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ba.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Ba);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=ai.dot(this.direction),l=-ai.dot(ar),c=ai.lengthSq(),d=Math.abs(1-o*o),u,h,f,p;if(d>0)if(u=o*l-a,h=o*a-l,p=r*d,u>=0)if(h>=-p)if(h<=p){let v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ba).addScaledVector(ar,h),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,i,r){za.subVectors(e,t),or.subVectors(n,t),Ha.crossVectors(za,or);let o=this.direction.dot(Ha),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let l=a*this.direction.dot(or.crossVectors(ai,or));if(l<0)return null;let c=a*this.direction.dot(za.cross(ai));if(c<0||l+c>o)return null;let d=-a*ai.dot(Ha);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class s{constructor(t,e,n,i,r,o,a,l,c,d,u,h,f,p,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,d,u,h,f,p,v,g)}set(t,e,n,i,r,o,a,l,c,d,u,h,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let h=o*d,f=o*u,p=a*d,v=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*d,f=l*u,p=c*d,v=c*u;e[0]=h+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=f*a-p,e[6]=v+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*d,f=l*u,p=c*d,v=c*u;e[0]=h-v*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*d,e[9]=v-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*d,f=o*u,p=a*d,v=a*u;e[0]=l*d,e[4]=p*c-f,e[8]=h*c+v,e[1]=l*u,e[5]=v*c+h,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*d,e[4]=v-h*u,e[8]=p*u+f,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*u+p,e[10]=h-v*u}else if(t.order==="XZY"){let h=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+v,e[5]=o*d,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Od)}lookAt(t,e,n){let i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),oi.crossVectors(n,sn),oi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),oi.crossVectors(n,sn)),oi.normalize(),lr.crossVectors(sn,oi),i[0]=oi.x,i[4]=lr.x,i[8]=sn.x,i[1]=oi.y,i[5]=lr.y,i[9]=sn.y,i[2]=oi.z,i[6]=lr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],_=n[7],y=n[11],E=n[15],T=i[0],A=i[4],C=i[8],S=i[12],b=i[1],P=i[5],U=i[9],F=i[13],N=i[2],V=i[6],L=i[10],q=i[14],O=i[3],Z=i[7],et=i[11],ht=i[15];return r[0]=o*T+a*b+l*N+c*O,r[4]=o*A+a*P+l*V+c*Z,r[8]=o*C+a*U+l*L+c*et,r[12]=o*S+a*F+l*q+c*ht,r[1]=d*T+u*b+h*N+f*O,r[5]=d*A+u*P+h*V+f*Z,r[9]=d*C+u*U+h*L+f*et,r[13]=d*S+u*F+h*q+f*ht,r[2]=p*T+v*b+g*N+m*O,r[6]=p*A+v*P+g*V+m*Z,r[10]=p*C+v*U+g*L+m*et,r[14]=p*S+v*F+g*q+m*ht,r[3]=x*T+_*b+y*N+E*O,r[7]=x*A+_*P+y*V+E*Z,r[11]=x*C+_*U+y*L+E*et,r[15]=x*S+_*F+y*q+E*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*l*u-i*c*u-r*a*h+n*c*h+i*a*f-n*l*f)+v*(+e*l*f-e*c*h+r*o*h-i*o*f+i*c*d-r*l*d)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*d-n*c*d)+m*(-i*a*d-e*l*u+e*a*h+i*o*u-n*o*h+n*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=u*g*c-v*h*c+v*l*f-a*g*f-u*l*m+a*h*m,_=p*h*c-d*g*c-p*l*f+o*g*f+d*l*m-o*h*m,y=d*v*c-p*u*c+p*a*f-o*v*f-d*a*m+o*u*m,E=p*u*l-d*v*l-p*a*h+o*v*h+d*a*g-o*u*g,T=e*x+n*_+i*y+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=x*A,t[1]=(v*h*r-u*g*r-v*i*f+n*g*f+u*i*m-n*h*m)*A,t[2]=(a*g*r-v*l*r+v*i*c-n*g*c-a*i*m+n*l*m)*A,t[3]=(u*l*r-a*h*r-u*i*c+n*h*c+a*i*f-n*l*f)*A,t[4]=_*A,t[5]=(d*g*r-p*h*r+p*i*f-e*g*f-d*i*m+e*h*m)*A,t[6]=(p*l*r-o*g*r-p*i*c+e*g*c+o*i*m-e*l*m)*A,t[7]=(o*h*r-d*l*r+d*i*c-e*h*c-o*i*f+e*l*f)*A,t[8]=y*A,t[9]=(p*u*r-d*v*r-p*n*f+e*v*f+d*n*m-e*u*m)*A,t[10]=(o*v*r-p*a*r+p*n*c-e*v*c-o*n*m+e*a*m)*A,t[11]=(d*a*r-o*u*r-d*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=E*A,t[13]=(d*v*i-p*u*i+p*n*h-e*v*h-d*n*g+e*u*g)*A,t[14]=(p*a*i-o*v*i-p*n*l+e*v*l+o*n*g-e*a*g)*A,t[15]=(o*u*i-d*a*i+d*n*l-e*u*l-o*n*h+e*a*h)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,p=r*u,v=o*d,g=o*u,m=a*u,x=l*c,_=l*d,y=l*u,E=n.x,T=n.y,A=n.z;return i[0]=(1-(v+m))*E,i[1]=(f+y)*E,i[2]=(p-_)*E,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(h+m))*T,i[6]=(g+x)*T,i[7]=0,i[8]=(p+_)*A,i[9]=(g-x)*A,i[10]=(1-(h+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Vi.set(i[0],i[1],i[2]).length(),o=Vi.set(i[4],i[5],i[6]).length(),a=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);let c=1/r,d=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Zn){let l=this.elements,c=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f,p;if(a===Zn)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===kr)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Zn){let l=this.elements,c=1/(e-t),d=1/(n-i),u=1/(o-r),h=(e+t)*c,f=(n+i)*d,p,v;if(a===Zn)p=(o+r)*u,v=-2*u;else if(a===kr)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new I,yn=new Qt,kd=new I(0,0,0),Od=new I(1,1,1),oi=new I,lr=new I,sn=new I,xc=new Qt,yc=new Se,Fe=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fe.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bd=0,_c=new I,Gi=new Se,Vn=new Qt,cr=new I,Rs=new I,zd=new I,Hd=new Se,Mc=new I(1,0,0),bc=new I(0,1,0),Sc=new I(0,0,1),wc={type:"added"},Vd={type:"removed"},Wi={type:"childadded",child:null},Va={type:"childremoved",child:null},Oe=class s extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Fe,n=new Se,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Dt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Rs,cr,this.up):Vn.lookAt(cr,Rs,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),u=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Oe.DEFAULT_UP=new I(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new I,Gn=new I,Ga=new I,Wn=new I,Xi=new I,qi=new I,Ec=new I,Wa=new I,Xa=new I,qa=new I,Ka=new jt,$a=new jt,Ya=new jt,hi=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){_n.subVectors(i,e),Gn.subVectors(n,e),Ga.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(Gn),l=_n.dot(Ga),c=Gn.dot(Gn),d=Gn.dot(Ga),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-a*d)*h,p=(o*d-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ka.setScalar(0),$a.setScalar(0),Ya.setScalar(0),Ka.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),Gn.subVectors(t,e),_n.cross(Gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),_n.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Xi.subVectors(i,n),qi.subVectors(r,n),Wa.subVectors(t,n);let l=Xi.dot(Wa),c=qi.dot(Wa);if(l<=0&&c<=0)return e.copy(n);Xa.subVectors(t,i);let d=Xi.dot(Xa),u=qi.dot(Xa);if(d>=0&&u<=d)return e.copy(i);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(Xi,o);qa.subVectors(t,r);let f=Xi.dot(qa),p=qi.dot(qa);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(qi,a);let g=d*p-f*u;if(g<=0&&u-d>=0&&f-p>=0)return Ec.subVectors(r,i),a=(u-d)/(u-d+(f-p)),e.copy(i).addScaledVector(Ec,a);let m=1/(g+v+h);return o=v*m,a=h*m,e.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Za(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Cd(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=Eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ne.fromWorkingColorSpace(Ve.copy(this),t),Math.round(We(Ve.r*255,0,255))*65536+Math.round(We(Ve.g*255,0,255))*256+Math.round(We(Ve.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ge){ne.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,i=Ve.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(hr);let n=Da(li.h,hr.h,e),i=Da(li.s,hr.s,e),r=Da(li.l,hr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new qt;qt.NAMES=Eh;var Gd=0,Ln=class extends fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=di(),this.name="",this.blending=ns,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ks,this.blendDst=as,this.blendEquation=Te,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ks&&(n.blendSrc=this.blendSrc),this.blendDst!==as&&(n.blendDst=this.blendDst),this.blendEquation!==Te&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Dn=class extends Ln{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kn=Wd();function Wd(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Xd(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=We(s,-65504,65504),Kn.floatView[0]=s;let t=Kn.uint32View[0],e=t>>23&511;return Kn.baseTable[e]+((t&8388607)>>Kn.shiftTable[e])}function qd(s){let t=s>>10;return Kn.uint32View[0]=Kn.mantissaTable[Kn.offsetTable[t]+(s&1023)]+Kn.exponentTable[t],Kn.floatView[0]}var ti={toHalfFloat:Xd,fromHalfFloat:qd},we=new I,ur=new Ct,de=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),t}};var Vr=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gr=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kd=0,pn=new Qt,Ja=new Oe,Ki=new I,rn=new Ci,Cs=new Ci,Le=new I,ye=class s extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Gr:Vr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(rn.min,Cs.min),rn.expandByPoint(Le),Le.addVectors(rn.max,Cs.max),rn.expandByPoint(Le)):(rn.expandByPoint(Cs.min),rn.expandByPoint(Cs.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Le.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),Le.add(Ki)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;let c=new I,d=new I,u=new I,h=new Ct,f=new Ct,p=new Ct,v=new I,g=new I;function m(C,S,b){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),h.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,b),d.sub(c),u.sub(c),f.sub(h),p.sub(h);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(P),a[C].add(v),a[S].add(v),a[b].add(v),l[C].add(g),l[S].add(g),l[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){let b=x[C],P=b.start,U=b.count;for(let F=P,N=P+U;F<N;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new I,y=new I,E=new I,T=new I;function A(C){E.fromBufferAttribute(i,C),T.copy(E);let S=a[C];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(T,S);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,S=x.length;C<S;++C){let b=x[C],P=b.start,U=b.count;for(let F=P,N=P+U;F<N;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,u=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){let p=t.getX(h+0),v=t.getX(h+1),g=t.getX(h+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let m=0;m<d;m++)h[p++]=c[f++]}return new de(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(t.data))}d.length>0&&(i[l]=d,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let d=i[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tc=new Qt,bi=new Bs,dr=new Pi,Ac=new I,fr=new I,pr=new I,mr=new I,ja=new I,gr=new I,Rc=new I,vr=new I,It=class extends Oe{constructor(t=new ye,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(ja.fromBufferAttribute(u,t),o?gr.addScaledVector(ja,d):gr.addScaledVector(ja.sub(e),d))}e.add(gr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(dr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(dr,Ac)===null||bi.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){let T=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);i=xr(this,m,t,n,c,d,u,T,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);i=xr(this,o,t,n,c,d,u,x,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){let g=h[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){let T=y,A=y+1,C=y+2;i=xr(this,m,t,n,c,d,u,T,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let x=g,_=g+1,y=g+2;i=xr(this,o,t,n,c,d,u,x,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function $d(s,t,e,n,i,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===on,a),l===null)return null;vr.copy(a),vr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(vr);return c<e.near||c>e.far?null:{distance:c,point:vr.clone(),object:s}}function xr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,fr),s.getVertexPosition(l,pr),s.getVertexPosition(c,mr);let d=$d(s,t,e,n,fr,pr,mr,Rc);if(d){let u=new I;hi.getBarycoord(Rc,fr,pr,mr,u),i&&(d.uv=hi.getInterpolatedAttribute(i,a,l,c,u,new Ct)),r&&(d.uv1=hi.getInterpolatedAttribute(r,a,l,c,u,new Ct)),o&&(d.normal=hi.getInterpolatedAttribute(o,a,l,c,u,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};hi.getNormal(fr,pr,mr,h.normal),d.face=h,d.barycoord=u}return d}var ln=class s extends ye{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(u,2));function p(v,g,m,x,_,y,E,T,A,C,S){let b=y/A,P=E/C,U=y/2,F=E/2,N=T/2,V=A+1,L=C+1,q=0,O=0,Z=new I;for(let et=0;et<L;et++){let ht=et*P-F;for(let Ut=0;Ut<V;Ut++){let Nt=Ut*b-U;Z[v]=Nt*x,Z[g]=ht*_,Z[m]=N,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[g]=0,Z[m]=T>0?1:-1,d.push(Z.x,Z.y,Z.z),u.push(Ut/A),u.push(1-et/C),q+=1}}for(let et=0;et<C;et++)for(let ht=0;ht<A;ht++){let Ut=h+ht+V*et,Nt=h+ht+V*(et+1),X=h+(ht+1)+V*(et+1),J=h+(ht+1)+V*et;l.push(Ut,Nt,J),l.push(Nt,X,J),O+=6}a.addGroup(f,O,S),f+=O,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ds(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let n=ds(s[e]);for(let i in n)t[i]=n[i]}return t}function Yd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Th(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Zd={clone:ds,merge:$e},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oe=class extends Ln{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new I,Cc=new Ct,Pc=new Ct,Ne=class extends Wr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(La*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Yi=1,jo=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne($i,Yi,t,e);i.layers=this.layers,this.add(i);let r=new Ne($i,Yi,t,e);r.layers=this.layers,this.add(r);let o=new Ne($i,Yi,t,e);o.layers=this.layers,this.add(o);let a=new Ne($i,Yi,t,e);a.layers=this.layers,this.add(a);let l=new Ne($i,Yi,t,e);l.layers=this.layers,this.add(l);let c=new Ne($i,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xr=class extends Xe{constructor(t,e,n,i,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qo=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ln(5,5,5),r=new oe({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:ui});r.uniforms.tEquirect.value=e;let o=new It(i,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=ke),new jo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Qa=new I,Qd=new I,tf=new Dt,qn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Qa.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tf.getNormalMatrix(t),i=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new Pi,yr=new I,zs=class{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,o=new qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],u=i[6],h=i[7],f=i[8],p=i[9],v=i[10],g=i[11],m=i[12],x=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-r,h-c,g-f,y-m).normalize(),n[1].setComponents(l+r,h+c,g+f,y+m).normalize(),n[2].setComponents(l+o,h+d,g+p,y+x).normalize(),n[3].setComponents(l-o,h-d,g-p,y-x).normalize(),n[4].setComponents(l-a,h-u,g-v,y-_).normalize(),e===Zn)n[5].setComponents(l+a,h+u,g+v,y+_).normalize();else if(e===kr)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(yr.x=i.normal.x>0?t.max.x:t.min.x,yr.y=i.normal.y>0?t.max.y:t.min.y,yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ah(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ef(s){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){let p=u[h],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var qr=class s extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=t/a,h=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<d;m++){let x=m*h-o;for(let _=0;_<c;_++){let y=_*u-r;p.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,y=x+c*(m+1),E=x+1+c*(m+1),T=x+1+c*m;f.push(_,y,T),f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
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
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
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
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
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
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gf=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tf=`#define PI 3.141592653589793
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
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
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
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
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tp=`PhysicalMaterial material;
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
#endif`,ep=`struct PhysicalMaterial {
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dp=`#if defined( USE_POINTS_UV )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,im=`uniform sampler2D t2D;
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`#include <common>
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
}`,cm=`#if DEPTH_PACKING == 3200
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
}`,hm=`#define DISTANCE
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
}`,um=`#define DISTANCE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
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
}`,_m=`#define MATCAP
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
}`,bm=`#define NORMAL
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
}`,Sm=`#define NORMAL
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
}`,wm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define TOON
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
}`,Cm=`#define TOON
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
}`,Pm=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:rf,alphamap_pars_fragment:af,alphatest_fragment:of,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:hf,batching_pars_vertex:uf,batching_vertex:df,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:vf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:Mf,color_fragment:bf,color_pars_fragment:Sf,color_pars_vertex:wf,color_vertex:Ef,common:Tf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Cf,displacementmap_vertex:Pf,emissivemap_fragment:If,emissivemap_pars_fragment:Lf,colorspace_fragment:Df,colorspace_pars_fragment:Uf,envmap_fragment:Ff,envmap_common_pars_fragment:Nf,envmap_pars_fragment:kf,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Yf,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:Hf,fog_fragment:Vf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Wf,lightmap_pars_fragment:Xf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Kf,lights_pars_begin:$f,lights_toon_fragment:Zf,lights_toon_pars_fragment:Jf,lights_phong_fragment:jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:tp,lights_physical_pars_fragment:ep,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:sp,logdepthbuf_fragment:rp,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:lp,map_fragment:cp,map_pars_fragment:hp,map_particle_fragment:up,map_particle_pars_fragment:dp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphinstance_vertex:mp,morphcolor_vertex:gp,morphnormal_vertex:vp,morphtarget_pars_vertex:xp,morphtarget_vertex:yp,normal_fragment_begin:_p,normal_fragment_maps:Mp,normal_pars_fragment:bp,normal_pars_vertex:Sp,normal_vertex:wp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Pp,packing:Ip,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Up,dithering_pars_fragment:Fp,roughnessmap_fragment:Np,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:Hp,skinbase_vertex:Vp,skinning_pars_vertex:Gp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Kp,tonemapping_fragment:$p,tonemapping_pars_fragment:Yp,transmission_fragment:Zp,transmission_pars_fragment:Jp,uv_pars_fragment:jp,uv_pars_vertex:Qp,uv_vertex:tm,worldpos_vertex:em,background_vert:nm,background_frag:im,backgroundCube_vert:sm,backgroundCube_frag:rm,cube_vert:am,cube_frag:om,depth_vert:lm,depth_frag:cm,distanceRGBA_vert:hm,distanceRGBA_frag:um,equirect_vert:dm,equirect_frag:fm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:vm,meshlambert_vert:xm,meshlambert_frag:ym,meshmatcap_vert:_m,meshmatcap_frag:Mm,meshnormal_vert:bm,meshnormal_frag:Sm,meshphong_vert:wm,meshphong_frag:Em,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Pm,points_frag:Im,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Um,sprite_frag:Fm},ut={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},An={basic:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:$e([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:$e([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:$e([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:$e([ut.points,ut.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:$e([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:$e([ut.common,ut.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:$e([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:$e([ut.sprite,ut.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:$e([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:$e([ut.lights,ut.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};An.physical={uniforms:$e([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var _r={r:0,b:0,g:0},wi=new Fe,Nm=new Qt;function km(s,t,e,n,i,r,o){let a=new qt(0),l=r===!0?0:1,c,d,u=null,h=0,f=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1,y=p(x);y===null?m(a,l):y&&y.isColor&&(m(y,1),_=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,_){let y=p(_);y&&(y.isCubeTexture||y.mapping===aa)?(d===void 0&&(d=new It(new ln(1,1,1),new oe({name:"BackgroundCubeMaterial",uniforms:ds(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(wi)),d.material.toneMapped=ne.getTransfer(y.colorSpace)!==he,(u!==y||h!==y.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,u=y,h=y.version,f=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new It(new qr(2,2),new oe({name:"BackgroundMaterial",uniforms:ds(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ne.getTransfer(y.colorSpace)!==he,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(_r,Th(s)),n.buffers.color.setClear(_r.r,_r.g,_r.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:v,addToRenderList:g}}function Om(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,o=!1;function a(b,P,U,F,N){let V=!1,L=u(F,U,P);r!==L&&(r=L,c(r.object)),V=f(b,F,U,N),V&&p(b,F,U,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(b,P,U,F),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function d(b){return s.deleteVertexArray(b)}function u(b,P,U){let F=U.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let V=N[P.id];V===void 0&&(V={},N[P.id]=V);let L=V[F];return L===void 0&&(L=h(l()),V[F]=L),L}function h(b){let P=[],U=[],F=[];for(let N=0;N<e;N++)P[N]=0,U[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,P,U,F){let N=r.attributes,V=P.attributes,L=0,q=U.getAttributes();for(let O in q)if(q[O].location>=0){let et=N[O],ht=V[O];if(ht===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;L++}return r.attributesNum!==L||r.index!==F}function p(b,P,U,F){let N={},V=P.attributes,L=0,q=U.getAttributes();for(let O in q)if(q[O].location>=0){let et=V[O];et===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));let ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),N[O]=ht,L++}r.attributes=N,r.attributesNum=L,r.index=F}function v(){let b=r.newAttributes;for(let P=0,U=b.length;P<U;P++)b[P]=0}function g(b){m(b,0)}function m(b,P){let U=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;U[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),N[b]!==P&&(s.vertexAttribDivisor(b,P),N[b]=P)}function x(){let b=r.newAttributes,P=r.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==b[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function _(b,P,U,F,N,V,L){L===!0?s.vertexAttribIPointer(b,P,U,N,V):s.vertexAttribPointer(b,P,U,F,N,V)}function y(b,P,U,F){v();let N=F.attributes,V=U.getAttributes(),L=P.defaultAttributeValues;for(let q in V){let O=V[q];if(O.location>=0){let Z=N[q];if(Z===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){let et=Z.normalized,ht=Z.itemSize,Ut=t.get(Z);if(Ut===void 0)continue;let Nt=Ut.buffer,X=Ut.type,J=Ut.bytesPerElement,lt=X===s.INT||X===s.UNSIGNED_INT||Z.gpuType===Al;if(Z.isInterleavedBufferAttribute){let nt=Z.data,it=nt.stride,ct=Z.offset;if(nt.isInstancedInterleavedBuffer){for(let rt=0;rt<O.locationSize;rt++)m(O.location+rt,nt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let rt=0;rt<O.locationSize;rt++)g(O.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let rt=0;rt<O.locationSize;rt++)_(O.location+rt,ht/O.locationSize,X,et,it*J,(ct+ht/O.locationSize*rt)*J,lt)}else{if(Z.isInstancedBufferAttribute){for(let nt=0;nt<O.locationSize;nt++)m(O.location+nt,Z.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<O.locationSize;nt++)g(O.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let nt=0;nt<O.locationSize;nt++)_(O.location+nt,ht/O.locationSize,X,et,ht*J,ht/O.locationSize*nt*J,lt)}}else if(L!==void 0){let et=L[q];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(O.location,et);break;case 3:s.vertexAttrib3fv(O.location,et);break;case 4:s.vertexAttrib4fv(O.location,et);break;default:s.vertexAttrib1fv(O.location,et)}}}}x()}function E(){C();for(let b in n){let P=n[b];for(let U in P){let F=P[U];for(let N in F)d(F[N].object),delete F[N];delete P[U]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let U in P){let F=P[U];for(let N in F)d(F[N].object),delete F[N];delete P[U]}delete n[b.id]}function A(b){for(let P in n){let U=n[P];if(U[b.id]===void 0)continue;let F=U[b.id];for(let N in F)d(F[N].object),delete F[N];delete U[b.id]}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Bm(s,t,e){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,u){u!==0&&(s.drawArraysInstanced(n,c,d,u),e.update(d,n,u))}function a(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let p=0;p<u;p++)f+=d[p];e.update(f,n,1)}function l(c,d,u,h){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],d[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=d[v]*h[v];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==De&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==jn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Yn&&!C)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:E,maxSamples:T}}function Hm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new qn,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?d(null):c();else{let x=r?0:n,_=x*4,y=m.clippingState||null;l.value=y,y=d(p,h,_,f);for(let E=0;E!==_;++E)y[E]=e[E];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Vm(s){let t=new WeakMap;function e(o,a){return a===vo?o.mapping=ls:a===xo&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===vo||a===xo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qo(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fs=class extends Wr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},es=4,Ic=[.125,.215,.35,.446,.526,.582],Ai=20,to=new fs,Lc=new qt,eo=null,no=0,io=0,so=!1,Ti=(1+Math.sqrt(5))/2,Zi=1/Ti,Dc=[new I(-Ti,Zi,0),new I(Ti,Zi,0),new I(-Zi,0,Ti),new I(Zi,0,Ti),new I(0,Ti,-Zi),new I(0,Ti,Zi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,no,io),this._renderer.xr.enabled=so,t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Nn,format:De,colorSpace:Qn,depthBuffer:!1},i=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Wm(r,t,e)}return i}_compileMaterial(t){let e=new It(this._lodPlanes[0],t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,i){let a=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Lc),d.toneMapping=In,d.autoClear=!1;let f=new Dn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),p=new It(new ln,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Lc),v=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let _=this._cubeSize;Mr(i,x*_,m>2?_:0,_,_),d.setRenderTarget(i),v&&d.render(p,a),d.render(t,a)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=h,d.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ls||t.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,to)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dc[(i-r-1)%Dc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new It(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),v=r/p,g=isFinite(r)?1+Math.floor(d*v):Ai;g>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);let m=[],x=0;for(let A=0;A<Ai;++A){let C=A/v,S=Math.exp(-C*C/2);m.push(S),A===0?x+=S:A<g&&(x+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:_}=this;h.dTheta.value=p,h.mipInt.value=_-n;let y=this._sizeLods[i],E=3*y*(i>_-es?i-_+es:0),T=4*(this._cubeSize-y);Mr(e,E,T,3*y,2*y),l.setRenderTarget(e),l.render(u,to)}};function Gm(s){let t=[],e=[],n=[],i=s,r=s-es+1+Ic.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-es?l=Ic[o-s+es-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,p=6,v=3,g=2,m=1,x=new Float32Array(v*p*f),_=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,C=T>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(S,v*p*T),_.set(h,g*p*T);let b=[T,T,T,T,T,T];y.set(b,m*p*T)}let E=new ye;E.setAttribute("position",new de(x,v)),E.setAttribute("uv",new de(_,g)),E.setAttribute("faceIndex",new de(y,m)),t.push(E),i>es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(s,t,e){let n=new Sn(s,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wm(s,t,e){let n=new Float32Array(Ai),i=new I(0,1,0);return new oe({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Fc(){return new oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Nc(){return new oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function Xm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===vo||l===xo,d=l===ls||l===cs;if(c||d){let u=t.get(a),h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ps(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||d&&f&&i(f)?(e===null&&(e=new ps(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Km(s,t,e,n){let i={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);for(let p in h.morphAttributes){let v=h.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}h.removeEventListener("dispose",o),delete i[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(u){let h=u.attributes;for(let p in h)t.update(h[p],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],s.ARRAY_BUFFER)}}function c(u){let h=[],f=u.index,p=u.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){let E=x[_+0],T=x[_+1],A=x[_+2];h.push(E,T,T,A,A,E)}}else if(p!==void 0){let x=p.array;v=p.version;for(let _=0,y=x.length/3-1;_<y;_+=3){let E=_+0,T=_+1,A=_+2;h.push(E,T,T,A,A,E)}}else return;let g=new(wh(h)?Gr:Vr)(h,1);g.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function $m(s,t,e){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),e.update(f,n,1)}function c(h,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,h*o,p),e.update(f,n,p))}function d(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(h,f,p,v){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x]*v[x];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Ym(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zm(s,t,e){let n=new WeakMap,i=new jt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let y=a.attributes.position.count*_,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*E*4*u),A=new zr(T,y,E,u);A.type=Yn,A.needsUpdate=!0;let C=_*4;for(let b=0;b<u;b++){let P=g[b],U=m[b],F=x[b],N=y*E*4*b;for(let V=0;V<P.count;V++){let L=V*C;f===!0&&(i.fromBufferAttribute(P,V),T[N+L+0]=i.x,T[N+L+1]=i.y,T[N+L+2]=i.z,T[N+L+3]=0),p===!0&&(i.fromBufferAttribute(U,V),T[N+L+4]=i.x,T[N+L+5]=i.y,T[N+L+6]=i.z,T[N+L+7]=0),v===!0&&(i.fromBufferAttribute(F,V),T[N+L+8]=i.x,T[N+L+9]=i.y,T[N+L+10]=i.z,T[N+L+11]=F.itemSize===4?i.w:1)}}h={count:u,texture:A,size:new Ct(y,E)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Jm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,u=t.get(l,d);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Kr=class extends Xe{constructor(t,e,n,i,r,o,a,l,c,d=is){if(d!==is&&d!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===is&&(n=Ri),n===void 0&&d===us&&(n=hs),super(null,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rh=new Xe,kc=new Kr(1,1),Ch=new zr,Ph=new Jo,Ih=new Xr,Oc=[],Bc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function ys(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Oc[i];if(r===void 0&&(r=new Float32Array(i),Oc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function la(s,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function jm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function n0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Vc.set(n),s.uniformMatrix2fv(this.addr,!1,Vc),Re(e,n)}}function i0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Hc.set(n),s.uniformMatrix3fv(this.addr,!1,Hc),Re(e,n)}}function s0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;zc.set(n),s.uniformMatrix4fv(this.addr,!1,zc),Re(e,n)}}function r0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function a0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function o0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function c0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function h0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function u0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function f0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(kc.compareFunction=Sh,r=kc):r=Rh,e.setTexture2D(t||r,i)}function p0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ph,i)}function m0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ih,i)}function g0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ch,i)}function v0(s){switch(s){case 5126:return jm;case 35664:return Qm;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(s,t){s.uniform1fv(this.addr,t)}function y0(s,t){let e=ys(t,this.size,2);s.uniform2fv(this.addr,e)}function _0(s,t){let e=ys(t,this.size,3);s.uniform3fv(this.addr,e)}function M0(s,t){let e=ys(t,this.size,4);s.uniform4fv(this.addr,e)}function b0(s,t){let e=ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function S0(s,t){let e=ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function w0(s,t){let e=ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function E0(s,t){s.uniform1iv(this.addr,t)}function T0(s,t){s.uniform2iv(this.addr,t)}function A0(s,t){s.uniform3iv(this.addr,t)}function R0(s,t){s.uniform4iv(this.addr,t)}function C0(s,t){s.uniform1uiv(this.addr,t)}function P0(s,t){s.uniform2uiv(this.addr,t)}function I0(s,t){s.uniform3uiv(this.addr,t)}function L0(s,t){s.uniform4uiv(this.addr,t)}function D0(s,t,e){let n=this.cache,i=t.length,r=la(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Rh,r[o])}function U0(s,t,e){let n=this.cache,i=t.length,r=la(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ph,r[o])}function F0(s,t,e){let n=this.cache,i=t.length,r=la(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ih,r[o])}function N0(s,t,e){let n=this.cache,i=t.length,r=la(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ch,r[o])}function k0(s){switch(s){case 5126:return x0;case 35664:return y0;case 35665:return _0;case 35666:return M0;case 35674:return b0;case 35675:return S0;case 35676:return w0;case 5124:case 35670:return E0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return I0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return N0}}var tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v0(e.type)}},el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}},nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ro=/(\w+)(\])?(\[|\.)?/g;function Gc(s,t){s.seq.push(t),s.map[t.id]=t}function O0(s,t,e){let n=s.name,i=n.length;for(ro.lastIndex=0;;){let r=ro.exec(n),o=ro.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gc(e,c===void 0?new tl(a,s,t):new el(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new nl(a),Gc(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);O0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Wc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var B0=37297,z0=0;function H0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xc=new Dt;function V0(s){ne._getMatrix(Xc,ne.workingColorSpace,s);let t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case oa:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function qc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+H0(s.getShaderSource(t),o)}else return i}function G0(s,t){let e=V0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function W0(s,t){let e;switch(t){case ud:e="Linear";break;case dd:e="Reinhard";break;case fd:e="Cineon";break;case pd:e="ACESFilmic";break;case gd:e="AgX";break;case vd:e="Neutral";break;case md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var br=new I;function X0(){ne.getLuminanceCoefficients(br);let s=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function K0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Fs(s){return s!==""}function Kc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(s){return s.replace(Y0,J0)}var Z0=new Map;function J0(s,t){let e=Xt[t];if(e===void 0){let n=Z0.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}var j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(s){return s.replace(j0,Q0)}function Q0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function tg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function eg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ng(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function ig(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hh:t="ENVMAP_BLENDING_MULTIPLY";break;case cd:t="ENVMAP_BLENDING_MIX";break;case hd:t="ENVMAP_BLENDING_ADD";break}return t}function sg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=tg(e),c=eg(e),d=ng(e),u=ig(e),h=sg(e),f=q0(e),p=K0(r),v=i.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Fs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(g=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Xt.tonemapping_pars_fragment:"",e.toneMapping!==In?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,G0("linearToOutputTexel",e.outputColorSpace),X0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=il(o),o=Kc(o,e),o=$c(o,e),a=il(a),a=Kc(a,e),a=$c(a,e),o=Yc(o),a=Yc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,y=x+m+a,E=Wc(i,i.VERTEX_SHADER,_),T=Wc(i,i.FRAGMENT_SHADER,y);i.attachShader(v,E),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(P){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(E).trim(),N=i.getShaderInfoLog(T).trim(),V=!0,L=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,E,T);else{let q=qc(i,E,"vertex"),O=qc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+q+`
`+O)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||N==="")&&(L=!1);L&&(P.diagnostics={runnable:V,programLog:U,vertexShader:{log:F,prefix:g},fragmentShader:{log:N,prefix:m}})}i.deleteShader(E),i.deleteShader(T),C=new rs(i,v),S=$0(i,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,B0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=T,this}var ag=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rl(t),e.set(t,n)),n}},rl=class{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}};function og(s,t,e,n,i,r,o){let a=new Hr,l=new sl,c=new Set,d=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,P,U,F){let N=U.fog,V=F.geometry,L=S.isMeshStandardMaterial?U.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||L),O=q&&q.mapping===aa?q.image.height:null,Z=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=et!==void 0?et.length:0,Ut=0;V.morphAttributes.position!==void 0&&(Ut=1),V.morphAttributes.normal!==void 0&&(Ut=2),V.morphAttributes.color!==void 0&&(Ut=3);let Nt,X,J,lt;if(Z){let le=An[Z];Nt=le.vertexShader,X=le.fragmentShader}else Nt=S.vertexShader,X=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),lt=l.getFragmentShaderID(S);let nt=s.getRenderTarget(),it=s.state.buffers.depth.getReversed(),ct=F.isInstancedMesh===!0,rt=F.isBatchedMesh===!0,wt=!!S.map,Pt=!!S.matcap,Yt=!!q,D=!!S.aoMap,ee=!!S.lightMap,kt=!!S.bumpMap,Bt=!!S.normalMap,Mt=!!S.displacementMap,$t=!!S.emissiveMap,_t=!!S.metalnessMap,R=!!S.roughnessMap,M=S.anisotropy>0,H=S.clearcoat>0,$=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,St=S.transmission>0,dt=M&&!!S.anisotropyMap,vt=H&&!!S.clearcoatMap,Zt=H&&!!S.clearcoatNormalMap,st=H&&!!S.clearcoatRoughnessMap,xt=Q&&!!S.iridescenceMap,Lt=Q&&!!S.iridescenceThicknessMap,Ft=Y&&!!S.sheenColorMap,yt=Y&&!!S.sheenRoughnessMap,te=!!S.specularMap,Wt=!!S.specularColorMap,me=!!S.specularIntensityMap,k=St&&!!S.transmissionMap,ft=St&&!!S.thicknessMap,K=!!S.gradientMap,j=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Vt=!!S.extensions,Me=In;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Me=s.toneMapping);let ze={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Nt,fragmentShader:X,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:rt,batchingColor:rt&&F._colorsTexture!==null,instancing:ct,instancingColor:ct&&F.instanceColor!==null,instancingMorph:ct&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Qn,alphaToCoverage:!!S.alphaToCoverage,map:wt,matcap:Pt,envMap:Yt,envMapMode:Yt&&q.mapping,envMapCubeUVHeight:O,aoMap:D,lightMap:ee,bumpMap:kt,normalMap:Bt,displacementMap:h&&Mt,emissiveMap:$t,normalMapObjectSpace:Bt&&S.normalMapType===Md,normalMapTangentSpace:Bt&&S.normalMapType===bh,metalnessMap:_t,roughnessMap:R,anisotropy:M,anisotropyMap:dt,clearcoat:H,clearcoatMap:vt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:st,dispersion:$,iridescence:Q,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:Y,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:te,specularColorMap:Wt,specularIntensityMap:me,transmission:St,transmissionMap:k,thicknessMap:ft,gradientMap:K,opaque:S.transparent===!1&&S.blending===ns&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:wt&&v(S.map.channel),aoMapUv:D&&v(S.aoMap.channel),lightMapUv:ee&&v(S.lightMap.channel),bumpMapUv:kt&&v(S.bumpMap.channel),normalMapUv:Bt&&v(S.normalMap.channel),displacementMapUv:Mt&&v(S.displacementMap.channel),emissiveMapUv:$t&&v(S.emissiveMap.channel),metalnessMapUv:_t&&v(S.metalnessMap.channel),roughnessMapUv:R&&v(S.roughnessMap.channel),anisotropyMapUv:dt&&v(S.anisotropyMap.channel),clearcoatMapUv:vt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(S.sheenRoughnessMap.channel),specularMapUv:te&&v(S.specularMap.channel),specularColorMapUv:Wt&&v(S.specularColorMap.channel),specularIntensityMapUv:me&&v(S.specularIntensityMap.channel),transmissionMapUv:k&&v(S.transmissionMap.channel),thicknessMapUv:ft&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Bt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(wt||j),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:it,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:wt&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:$t&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ee,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(b,S),_(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=p[S.type],P;if(b){let U=An[b];P=Zd.clone(U.uniforms)}else P=S.uniforms;return P}function E(S,b){let P;for(let U=0,F=d.length;U<F;U++){let N=d[U];if(N.cacheKey===b){P=N,++P.usedTimes;break}}return P===void 0&&(P=new rg(s,b,S,r),d.push(P)),P}function T(S){if(--S.usedTimes===0){let b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:C}}function lg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function cg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Jc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function jc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,h,f,p,v,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:h,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function a(u,h,f,p,v,g){let m=o(u,h,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,h,f,p,v,g){let m=o(u,h,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,h){e.length>1&&e.sort(u||cg),n.length>1&&n.sort(h||Jc),i.length>1&&i.sort(h||Jc)}function d(){for(let u=t,h=s.length;u<h;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function hg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new jc,s.set(n,[o])):i>=r.length?(o=new jc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ug(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new qt};break;case"SpotLight":e={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function dg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var fg=0;function pg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mg(s){let t=new ug,e=dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Qt,o=new Qt;function a(c){let d=0,u=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,x=0,_=0,y=0,E=0,T=0,A=0;c.sort(pg);for(let S=0,b=c.length;S<b;S++){let P=c[S],U=P.color,F=P.intensity,N=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*F,u+=U.g*F,h+=U.b*F;else if(P.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(P.sh.coefficients[L],F);A++}else if(P.isDirectionalLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,O=e.get(P);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=L,f++}else if(P.isSpotLight){let L=t.get(P);L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(U).multiplyScalar(F),L.distance=N,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,n.spot[v]=L;let q=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,q.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=q.matrix,P.castShadow){let O=e.get(P);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=V,y++}v++}else if(P.isRectAreaLight){let L=t.get(P);L.color.copy(U).multiplyScalar(F),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=L,g++}else if(P.isPointLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),L.distance=P.distance,L.decay=P.decay,P.castShadow){let q=P.shadow,O=e.get(P);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,O.shadowCameraNear=q.camera.near,O.shadowCameraFar=q.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=P.shadow.matrix,_++}n.point[p]=L,p++}else if(P.isHemisphereLight){let L=t.get(P);L.skyColor.copy(P.color).multiplyScalar(F),L.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[m]=L,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let C=n.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=f,C.pointLength=p,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=A,n.version=fg++)}function l(c,d){let u=0,h=0,f=0,p=0,v=0,g=d.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let _=c[m];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Qc(s){let t=new mg(s),e=[],n=[];function i(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Qc(s),t.set(i,[a])):r>=o.length?(a=new Qc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var al=class extends Ln{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ol=class extends Ln{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
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
}`;function yg(s,t,e){let n=new zs,i=new Ct,r=new Ct,o=new jt,a=new al({depthPacking:_d}),l=new ol,c={},d=e.maxTextureSize,u={[on]:Ue,[Ue]:on,[Ee]:Ee},h=new oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:vg,fragmentShader:xg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new It(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let m=this.type;this.render=function(T,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ui),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=m!==Xn&&this.type===Xn,N=m===Xn&&this.type!==Xn;for(let V=0,L=T.length;V<L;V++){let q=T[V],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let Z=O.getFrameExtents();if(i.multiply(Z),r.copy(O.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/Z.x),i.x=r.x*Z.x,O.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/Z.y),i.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||F===!0||N===!0){let ht=this.type!==Xn?{minFilter:an,magFilter:an}:{};O.map!==null&&O.map.dispose(),O.map=new Sn(i.x,i.y,ht),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();let et=O.getViewportCount();for(let ht=0;ht<et;ht++){let Ut=O.getViewport(ht);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),U.viewport(o),O.updateMatrices(q,ht),n=O.getFrustum(),y(A,C,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===Xn&&x(O,C),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(S,b,P)};function x(T,A){let C=t.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Sn(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,C,h,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,C,f,v,null)}function _(T,A,C,S){let b=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let U=b.uuid,F=A.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let V=N[F];V===void 0&&(V=b.clone(),N[F]=V,A.addEventListener("dispose",E)),b=V}if(b.visible=A.visible,b.wireframe=A.wireframe,S===Xn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=s.properties.get(b);U.light=C}return b}function y(T,A,C,S,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let F=t.update(T),N=T.material;if(Array.isArray(N)){let V=F.groups;for(let L=0,q=V.length;L<q;L++){let O=V[L],Z=N[O.materialIndex];if(Z&&Z.visible){let et=_(T,Z,S,b);T.onBeforeShadow(s,T,A,C,F,et,O),s.renderBufferDirect(C,null,F,et,T,O),T.onAfterShadow(s,T,A,C,F,et,O)}}}else if(N.visible){let V=_(T,N,S,b);T.onBeforeShadow(s,T,A,C,F,V,null),s.renderBufferDirect(C,null,F,V,T,null),T.onAfterShadow(s,T,A,C,F,V,null)}}let U=T.children;for(let F=0,N=U.length;F<N;F++)y(U[F],A,C,S,b)}function E(T){T.target.removeEventListener("dispose",E);for(let C in c){let S=c[C],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var _g={[co]:ho,[uo]:mo,[fo]:go,[os]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:os};function Mg(s,t){function e(){let k=!1,ft=new jt,K=null,j=new jt(0,0,0,0);return{setMask:function(gt){K!==gt&&!k&&(s.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){k=gt},setClear:function(gt,pt,Vt,Me,ze){ze===!0&&(gt*=Me,pt*=Me,Vt*=Me),ft.set(gt,pt,Vt,Me),j.equals(ft)===!1&&(s.clearColor(gt,pt,Vt,Me),j.copy(ft))},reset:function(){k=!1,K=null,j.set(-1,0,0,0)}}}function n(){let k=!1,ft=!1,K=null,j=null,gt=null;return{setReversed:function(pt){if(ft!==pt){let Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let Me=gt;gt=null,this.setClear(Me)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?nt(s.DEPTH_TEST):it(s.DEPTH_TEST)},setMask:function(pt){K!==pt&&!k&&(s.depthMask(pt),K=pt)},setFunc:function(pt){if(ft&&(pt=_g[pt]),j!==pt){switch(pt){case co:s.depthFunc(s.NEVER);break;case ho:s.depthFunc(s.ALWAYS);break;case uo:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case fo:s.depthFunc(s.EQUAL);break;case po:s.depthFunc(s.GEQUAL);break;case mo:s.depthFunc(s.GREATER);break;case go:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=pt}},setLocked:function(pt){k=pt},setClear:function(pt){gt!==pt&&(ft&&(pt=1-pt),s.clearDepth(pt),gt=pt)},reset:function(){k=!1,K=null,j=null,gt=null,ft=!1}}}function i(){let k=!1,ft=null,K=null,j=null,gt=null,pt=null,Vt=null,Me=null,ze=null;return{setTest:function(le){k||(le?nt(s.STENCIL_TEST):it(s.STENCIL_TEST))},setMask:function(le){ft!==le&&!k&&(s.stencilMask(le),ft=le)},setFunc:function(le,gn,On){(K!==le||j!==gn||gt!==On)&&(s.stencilFunc(le,gn,On),K=le,j=gn,gt=On)},setOp:function(le,gn,On){(pt!==le||Vt!==gn||Me!==On)&&(s.stencilOp(le,gn,On),pt=le,Vt=gn,Me=On)},setLocked:function(le){k=le},setClear:function(le){ze!==le&&(s.clearStencil(le),ze=le)},reset:function(){k=!1,ft=null,K=null,j=null,gt=null,pt=null,Vt=null,Me=null,ze=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,d={},u={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,x=null,_=null,y=null,E=null,T=null,A=new qt(0,0,0),C=0,S=!1,b=null,P=null,U=null,F=null,N=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,q=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=q>=2);let Z=null,et={},ht=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),Nt=new jt().fromArray(ht),X=new jt().fromArray(Ut);function J(k,ft,K,j){let gt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(k,pt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<K;Vt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ft+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return pt}let lt={};lt[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(os),kt(!1),Bt(ic),nt(s.CULL_FACE),D(ui);function nt(k){d[k]!==!0&&(s.enable(k),d[k]=!0)}function it(k){d[k]!==!1&&(s.disable(k),d[k]=!1)}function ct(k,ft){return u[k]!==ft?(s.bindFramebuffer(k,ft),u[k]=ft,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function rt(k,ft){let K=f,j=!1;if(k){K=h.get(ft),K===void 0&&(K=[],h.set(ft,K));let gt=k.textures;if(K.length!==gt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Vt=gt.length;pt<Vt;pt++)K[pt]=s.COLOR_ATTACHMENT0+pt;K.length=gt.length,j=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,j=!0);j&&s.drawBuffers(K)}function wt(k){return p!==k?(s.useProgram(k),p=k,!0):!1}let Pt={[Te]:s.FUNC_ADD,[Ku]:s.FUNC_SUBTRACT,[$u]:s.FUNC_REVERSE_SUBTRACT};Pt[Yu]=s.MIN,Pt[Zu]=s.MAX;let Yt={[Ju]:s.ZERO,[Ce]:s.ONE,[ju]:s.SRC_COLOR,[ks]:s.SRC_ALPHA,[sd]:s.SRC_ALPHA_SATURATE,[nd]:s.DST_COLOR,[td]:s.DST_ALPHA,[Qu]:s.ONE_MINUS_SRC_COLOR,[as]:s.ONE_MINUS_SRC_ALPHA,[id]:s.ONE_MINUS_DST_COLOR,[ed]:s.ONE_MINUS_DST_ALPHA,[rd]:s.CONSTANT_COLOR,[ad]:s.ONE_MINUS_CONSTANT_COLOR,[od]:s.CONSTANT_ALPHA,[ld]:s.ONE_MINUS_CONSTANT_ALPHA};function D(k,ft,K,j,gt,pt,Vt,Me,ze,le){if(k===ui){v===!0&&(it(s.BLEND),v=!1);return}if(v===!1&&(nt(s.BLEND),v=!0),k!==hn){if(k!==g||le!==S){if((m!==Te||y!==Te)&&(s.blendEquation(s.FUNC_ADD),m=Te,y=Te),le)switch(k){case ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mn:s.blendFunc(s.ONE,s.ONE);break;case sc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,_=null,E=null,T=null,A.set(0,0,0),C=0,g=k,S=le}return}gt=gt||ft,pt=pt||K,Vt=Vt||j,(ft!==m||gt!==y)&&(s.blendEquationSeparate(Pt[ft],Pt[gt]),m=ft,y=gt),(K!==x||j!==_||pt!==E||Vt!==T)&&(s.blendFuncSeparate(Yt[K],Yt[j],Yt[pt],Yt[Vt]),x=K,_=j,E=pt,T=Vt),(Me.equals(A)===!1||ze!==C)&&(s.blendColor(Me.r,Me.g,Me.b,ze),A.copy(Me),C=ze),g=k,S=!1}function ee(k,ft){k.side===Ee?it(s.CULL_FACE):nt(s.CULL_FACE);let K=k.side===Ue;ft&&(K=!K),kt(K),k.blending===ns&&k.transparent===!1?D(ui):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let j=k.stencilWrite;a.setTest(j),j&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),$t(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):it(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(k){b!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),b=k)}function Bt(k){k!==Xu?(nt(s.CULL_FACE),k!==P&&(k===ic?s.cullFace(s.BACK):k===qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):it(s.CULL_FACE),P=k}function Mt(k){k!==U&&(L&&s.lineWidth(k),U=k)}function $t(k,ft,K){k?(nt(s.POLYGON_OFFSET_FILL),(F!==ft||N!==K)&&(s.polygonOffset(ft,K),F=ft,N=K)):it(s.POLYGON_OFFSET_FILL)}function _t(k){k?nt(s.SCISSOR_TEST):it(s.SCISSOR_TEST)}function R(k){k===void 0&&(k=s.TEXTURE0+V-1),Z!==k&&(s.activeTexture(k),Z=k)}function M(k,ft,K){K===void 0&&(Z===null?K=s.TEXTURE0+V-1:K=Z);let j=et[K];j===void 0&&(j={type:void 0,texture:void 0},et[K]=j),(j.type!==k||j.texture!==ft)&&(Z!==K&&(s.activeTexture(K),Z=K),s.bindTexture(k,ft||lt[k]),j.type=k,j.texture=ft)}function H(){let k=et[Z];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(k){Nt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Nt.copy(k))}function yt(k){X.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),X.copy(k))}function te(k,ft){let K=c.get(ft);K===void 0&&(K=new WeakMap,c.set(ft,K));let j=K.get(k);j===void 0&&(j=s.getUniformBlockIndex(ft,k.name),K.set(k,j))}function Wt(k,ft){let j=c.get(ft).get(k);l.get(ft)!==j&&(s.uniformBlockBinding(ft,j,k.__bindingPointIndex),l.set(ft,j))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Z=null,et={},u={},h=new WeakMap,f=[],p=null,v=!1,g=null,m=null,x=null,_=null,y=null,E=null,T=null,A=new qt(0,0,0),C=0,S=!1,b=null,P=null,U=null,F=null,N=null,Nt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:it,bindFramebuffer:ct,drawBuffers:rt,useProgram:wt,setBlending:D,setMaterial:ee,setFlipSided:kt,setCullFace:Bt,setLineWidth:Mt,setPolygonOffset:$t,setScissorTest:_t,activeTexture:R,bindTexture:M,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:xt,texImage3D:Lt,updateUBOMapping:te,uniformBlockBinding:Wt,texStorage2D:Zt,texStorage3D:st,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Ft,viewport:yt,reset:me}}function th(s,t,e,n){let i=bg(n);switch(e){case mh:return s*t;case vh:return s*t;case xh:return s*t*2;case yh:return s*t/i.components*i.byteLength;case Pl:return s*t/i.components*i.byteLength;case _h:return s*t*2/i.components*i.byteLength;case Il:return s*t*2/i.components*i.byteLength;case gh:return s*t*3/i.components*i.byteLength;case De:return s*t*4/i.components*i.byteLength;case Ll:return s*t*4/i.components*i.byteLength;case Ir:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mo:case So:return Math.max(s,16)*Math.max(t,8)/4;case _o:case bo:return Math.max(s,8)*Math.max(t,8)/2;case wo:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fr:case Ho:case Vo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mh:case Go:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wo:case Xo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(s){switch(s){case jn:case dh:return{byteLength:1,components:1};case Os:case fh:case Nn:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Ri:case Al:case Yn:return{byteLength:4,components:1};case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Sg(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,M){return f?new OffscreenCanvas(R,M):Or("canvas")}function v(R,M,H){let $=1,Q=_t(R);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor($*Q.width),St=Math.floor($*Q.height);u===void 0&&(u=p(Y,St));let dt=M?p(Y,St):u;return dt.width=Y,dt.height=St,dt.getContext("2d").drawImage(R,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+St+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(R,M,H,$,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=M;if(M===s.RED&&(H===s.FLOAT&&(Y=s.R32F),H===s.HALF_FLOAT&&(Y=s.R16F),H===s.UNSIGNED_BYTE&&(Y=s.R8)),M===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.R8UI),H===s.UNSIGNED_SHORT&&(Y=s.R16UI),H===s.UNSIGNED_INT&&(Y=s.R32UI),H===s.BYTE&&(Y=s.R8I),H===s.SHORT&&(Y=s.R16I),H===s.INT&&(Y=s.R32I)),M===s.RG&&(H===s.FLOAT&&(Y=s.RG32F),H===s.HALF_FLOAT&&(Y=s.RG16F),H===s.UNSIGNED_BYTE&&(Y=s.RG8)),M===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RG8UI),H===s.UNSIGNED_SHORT&&(Y=s.RG16UI),H===s.UNSIGNED_INT&&(Y=s.RG32UI),H===s.BYTE&&(Y=s.RG8I),H===s.SHORT&&(Y=s.RG16I),H===s.INT&&(Y=s.RG32I)),M===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),H===s.UNSIGNED_INT&&(Y=s.RGB32UI),H===s.BYTE&&(Y=s.RGB8I),H===s.SHORT&&(Y=s.RGB16I),H===s.INT&&(Y=s.RGB32I)),M===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),H===s.UNSIGNED_INT&&(Y=s.RGBA32UI),H===s.BYTE&&(Y=s.RGBA8I),H===s.SHORT&&(Y=s.RGBA16I),H===s.INT&&(Y=s.RGBA32I)),M===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),M===s.RGBA){let St=Q?oa:ne.getTransfer($);H===s.FLOAT&&(Y=s.RGBA32F),H===s.HALF_FLOAT&&(Y=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Y=St===he?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(R,M){let H;return R?M===null||M===Ri||M===hs?H=s.DEPTH24_STENCIL8:M===Yn?H=s.DEPTH32F_STENCIL8:M===Os&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===hs?H=s.DEPTH_COMPONENT24:M===Yn?H=s.DEPTH_COMPONENT32F:M===Os&&(H=s.DEPTH_COMPONENT16),H}function E(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==ke?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){let M=R.target;M.removeEventListener("dispose",T),C(M),M.isVideoTexture&&d.delete(M)}function A(R){let M=R.target;M.removeEventListener("dispose",A),b(M)}function C(R){let M=n.get(R);if(M.__webglInit===void 0)return;let H=R.source,$=h.get(H);if($){let Q=$[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys($).length===0&&h.delete(H)}n.remove(R)}function S(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let H=R.source,$=h.get(H);delete $[M.__cacheKey],o.memory.textures--}function b(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Q=0;Q<M.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=R.textures;for(let $=0,Q=H.length;$<Q;$++){let Y=n.get(H[$]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(R)}let P=0;function U(){P=0}function F(){let R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function N(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){let H=n.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,R,M);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+M)}function L(R,M){let H=n.get(R);if(R.version>0&&H.__version!==R.version){X(H,R,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+M)}function q(R,M){let H=n.get(R);if(R.version>0&&H.__version!==R.version){X(H,R,M);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+M)}function O(R,M){let H=n.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+M)}let Z={[bn]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[yo]:s.MIRRORED_REPEAT},et={[an]:s.NEAREST,[xd]:s.NEAREST_MIPMAP_NEAREST,[nr]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},ht={[bd]:s.NEVER,[Rd]:s.ALWAYS,[Sd]:s.LESS,[Sh]:s.LEQUAL,[wd]:s.EQUAL,[Ad]:s.GEQUAL,[Ed]:s.GREATER,[Td]:s.NOTEQUAL};function Ut(R,M){if(M.type===Yn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ke||M.magFilter===Pa||M.magFilter===nr||M.magFilter===$n||M.minFilter===ke||M.minFilter===Pa||M.minFilter===nr||M.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Z[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Z[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Z[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,et[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,et[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ht[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===an||M.minFilter!==nr&&M.minFilter!==$n||M.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Nt(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));let $=M.source,Q=h.get($);Q===void 0&&(Q={},h.set($,Q));let Y=N(M);if(Y!==R.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[Y].usedTimes++;let St=Q[R.__cacheKey];St!==void 0&&(Q[R.__cacheKey].usedTimes--,St.usedTimes===0&&S(M)),R.__cacheKey=Y,R.__webglTexture=Q[Y].texture}return H}function X(R,M,H){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);let Q=Nt(R,M),Y=M.source;e.bindTexture($,R.__webglTexture,s.TEXTURE0+H);let St=n.get(Y);if(Y.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+H);let dt=ne.getPrimaries(ne.workingColorSpace),vt=M.colorSpace===Rn?null:ne.getPrimaries(M.colorSpace),Zt=M.colorSpace===Rn||dt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let st=v(M.image,!1,i.maxTextureSize);st=$t(M,st);let xt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),Ft=_(M.internalFormat,xt,Lt,M.colorSpace,M.isVideoTexture);Ut($,M);let yt,te=M.mipmaps,Wt=M.isVideoTexture!==!0,me=St.__version===void 0||Q===!0,k=Y.dataReady,ft=E(M,st);if(M.isDepthTexture)Ft=y(M.format===us,M.type),me&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ft,st.width,st.height,0,xt,Lt,null));else if(M.isDataTexture)if(te.length>0){Wt&&me&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,te[0].width,te[0].height);for(let K=0,j=te.length;K<j;K++)yt=te[K],Wt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,yt.width,yt.height,xt,Lt,yt.data):e.texImage2D(s.TEXTURE_2D,K,Ft,yt.width,yt.height,0,xt,Lt,yt.data);M.generateMipmaps=!1}else Wt?(me&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,st.width,st.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,xt,Lt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,st.width,st.height,0,xt,Lt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Wt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ft,te[0].width,te[0].height,st.depth);for(let K=0,j=te.length;K<j;K++)if(yt=te[K],M.format!==De)if(xt!==null)if(Wt){if(k)if(M.layerUpdates.size>0){let gt=th(yt.width,yt.height,M.format,M.type);for(let pt of M.layerUpdates){let Vt=yt.data.subarray(pt*gt/yt.data.BYTES_PER_ELEMENT,(pt+1)*gt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,pt,yt.width,yt.height,1,xt,Vt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,yt.width,yt.height,st.depth,xt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Ft,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,yt.width,yt.height,st.depth,xt,Lt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,Ft,yt.width,yt.height,st.depth,0,xt,Lt,yt.data)}else{Wt&&me&&e.texStorage2D(s.TEXTURE_2D,ft,Ft,te[0].width,te[0].height);for(let K=0,j=te.length;K<j;K++)yt=te[K],M.format!==De?xt!==null?Wt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,Ft,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,yt.width,yt.height,xt,Lt,yt.data):e.texImage2D(s.TEXTURE_2D,K,Ft,yt.width,yt.height,0,xt,Lt,yt.data)}else if(M.isDataArrayTexture)if(Wt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ft,st.width,st.height,st.depth),k)if(M.layerUpdates.size>0){let K=th(st.width,st.height,M.format,M.type);for(let j of M.layerUpdates){let gt=st.data.subarray(j*K/st.data.BYTES_PER_ELEMENT,(j+1)*K/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,xt,Lt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Lt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,xt,Lt,st.data);else if(M.isData3DTexture)Wt?(me&&e.texStorage3D(s.TEXTURE_3D,ft,Ft,st.width,st.height,st.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Lt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,xt,Lt,st.data);else if(M.isFramebufferTexture){if(me)if(Wt)e.texStorage2D(s.TEXTURE_2D,ft,Ft,st.width,st.height);else{let K=st.width,j=st.height;for(let gt=0;gt<ft;gt++)e.texImage2D(s.TEXTURE_2D,gt,Ft,K,j,0,xt,Lt,null),K>>=1,j>>=1}}else if(te.length>0){if(Wt&&me){let K=_t(te[0]);e.texStorage2D(s.TEXTURE_2D,ft,Ft,K.width,K.height)}for(let K=0,j=te.length;K<j;K++)yt=te[K],Wt?k&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,xt,Lt,yt):e.texImage2D(s.TEXTURE_2D,K,Ft,xt,Lt,yt);M.generateMipmaps=!1}else if(Wt){if(me){let K=_t(st);e.texStorage2D(s.TEXTURE_2D,ft,Ft,K.width,K.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Lt,st)}else e.texImage2D(s.TEXTURE_2D,0,Ft,xt,Lt,st);g(M)&&m($),St.__version=Y.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,H){if(M.image.length!==6)return;let $=Nt(R,M),Q=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let Y=n.get(Q);if(Q.version!==Y.__version||$===!0){e.activeTexture(s.TEXTURE0+H);let St=ne.getPrimaries(ne.workingColorSpace),dt=M.colorSpace===Rn?null:ne.getPrimaries(M.colorSpace),vt=M.colorSpace===Rn||St===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Zt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!Zt&&!st?xt[j]=v(M.image[j],!0,i.maxCubemapSize):xt[j]=st?M.image[j].image:M.image[j],xt[j]=$t(M,xt[j]);let Lt=xt[0],Ft=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),te=_(M.internalFormat,Ft,yt,M.colorSpace),Wt=M.isVideoTexture!==!0,me=Y.__version===void 0||$===!0,k=Q.dataReady,ft=E(M,Lt);Ut(s.TEXTURE_CUBE_MAP,M);let K;if(Zt){Wt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,te,Lt.width,Lt.height);for(let j=0;j<6;j++){K=xt[j].mipmaps;for(let gt=0;gt<K.length;gt++){let pt=K[gt];M.format!==De?Ft!==null?Wt?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,te,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,pt.width,pt.height,Ft,yt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,te,pt.width,pt.height,0,Ft,yt,pt.data)}}}else{if(K=M.mipmaps,Wt&&me){K.length>0&&ft++;let j=_t(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,te,j.width,j.height)}for(let j=0;j<6;j++)if(st){Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Ft,yt,xt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,xt[j].width,xt[j].height,0,Ft,yt,xt[j].data);for(let gt=0;gt<K.length;gt++){let Vt=K[gt].image[j].image;Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Vt.width,Vt.height,Ft,yt,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,te,Vt.width,Vt.height,0,Ft,yt,Vt.data)}}else{Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ft,yt,xt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,Ft,yt,xt[j]);for(let gt=0;gt<K.length;gt++){let pt=K[gt];Wt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Ft,yt,pt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,te,Ft,yt,pt.image[j])}}}g(M)&&m(s.TEXTURE_CUBE_MAP),Y.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function lt(R,M,H,$,Q,Y){let St=r.convert(H.format,H.colorSpace),dt=r.convert(H.type),vt=_(H.internalFormat,St,dt,H.colorSpace),Zt=n.get(M),st=n.get(H);if(st.__renderTarget=M,!Zt.__hasExternalTextures){let xt=Math.max(1,M.width>>Y),Lt=Math.max(1,M.height>>Y);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,vt,xt,Lt,M.depth,0,St,dt,null):e.texImage2D(Q,Y,vt,xt,Lt,0,St,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Bt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,st.__webglTexture,0,kt(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,st.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(R,M,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let $=M.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Y=y(M.stencilBuffer,Q),St=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=kt(M);Bt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Y,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Y,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Y,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,R)}else{let $=M.textures;for(let Q=0;Q<$.length;Q++){let Y=$[Q],St=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),vt=_(Y.internalFormat,St,dt,Y.colorSpace),Zt=kt(M);H&&Bt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,vt,M.width,M.height):Bt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,vt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,vt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let Q=$.__webglTexture,Y=kt(M);if(M.depthTexture.format===is)Bt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(M.depthTexture.format===us)Bt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ct(R){let M=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");it(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),nt(M.__webglDepthbuffer[$],R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),nt(M.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(R,M,H){let $=n.get(R);M!==void 0&&lt($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&ct(R)}function wt(R){let M=R.texture,H=n.get(R),$=n.get(M);R.addEventListener("dispose",A);let Q=R.textures,Y=R.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)H.__webglFramebuffer[dt][vt]=s.createFramebuffer()}else H.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)H.__webglFramebuffer[dt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(St)for(let dt=0,vt=Q.length;dt<vt;dt++){let Zt=n.get(Q[dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Bt(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){let vt=Q[dt];H.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);let Zt=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),xt=_(vt.internalFormat,Zt,st,vt.colorSpace,R.isXRRenderTarget===!0),Lt=kt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,xt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)lt(H.__webglFramebuffer[dt][vt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else lt(H.__webglFramebuffer[dt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(M)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let dt=0,vt=Q.length;dt<vt;dt++){let Zt=Q[dt],st=n.get(Zt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Ut(s.TEXTURE_2D,Zt),lt(H.__webglFramebuffer,R,Zt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(Zt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),Ut(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)lt(H.__webglFramebuffer[vt],R,M,s.COLOR_ATTACHMENT0,dt,vt);else lt(H.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,dt,0);g(M)&&m(dt),e.unbindTexture()}R.depthBuffer&&ct(R)}function Pt(R){let M=R.textures;for(let H=0,$=M.length;H<$;H++){let Q=M[H];if(g(Q)){let Y=x(R),St=n.get(Q).__webglTexture;e.bindTexture(Y,St),m(Y),e.unbindTexture()}}}let Yt=[],D=[];function ee(R){if(R.samples>0){if(Bt(R)===!1){let M=R.textures,H=R.width,$=R.height,Q=s.COLOR_BUFFER_BIT,Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(R),dt=M.length>1;if(dt)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[vt]);let Zt=n.get(M[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,Q,s.NEAREST),l===!0&&(Yt.length=0,D.length=0,Yt.push(s.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Yt.push(Y),D.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,St.__webglColorRenderbuffer[vt]);let Zt=n.get(M[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function kt(R){return Math.min(i.maxSamples,R.samples)}function Bt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Mt(R){let M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function $t(R,M){let H=R.colorSpace,$=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Qn&&H!==Rn&&(ne.getTransfer(H)===he?($!==De||Q!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=L,this.setTexture3D=q,this.setTextureCube=O,this.rebindTextures=rt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Bt}function wg(s,t){function e(n,i=Rn){let r,o=ne.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===Rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return s.BYTE;if(n===fh)return s.SHORT;if(n===Os)return s.UNSIGNED_SHORT;if(n===Al)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===Yn)return s.FLOAT;if(n===Nn)return s.HALF_FLOAT;if(n===mh)return s.ALPHA;if(n===gh)return s.RGB;if(n===De)return s.RGBA;if(n===vh)return s.LUMINANCE;if(n===xh)return s.LUMINANCE_ALPHA;if(n===is)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===yh)return s.RED;if(n===Pl)return s.RED_INTEGER;if(n===_h)return s.RG;if(n===Il)return s.RG_INTEGER;if(n===Ll)return s.RGBA_INTEGER;if(n===Ir||n===Lr||n===Dr||n===Ur)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===Mo||n===bo||n===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Eo||n===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Eo)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===Fo||n===No||n===ko||n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===Ho||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mh||n===Go||n===Wo||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ll=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Pn=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eg={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`,cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Xe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new oe({vertexShader:Tg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hl=class extends fi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,p=null,v=new cl,g=e.getContextAttributes(),m=null,x=null,_=[],y=[],E=new Ct,T=null,A=new Ne;A.viewport=new jt;let C=new Ne;C.viewport=new jt;let S=[A,C],b=new ll,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=_[X];return J===void 0&&(J=new Ns,_[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=_[X];return J===void 0&&(J=new Ns,_[X]=J),J.getGripSpace()},this.getHand=function(X){let J=_[X];return J===void 0&&(J=new Ns,_[X]=J),J.getHandSpace()};function F(X){let J=y.indexOf(X.inputSource);if(J===-1)return;let lt=_[J];lt!==void 0&&(lt.update(X.inputSource,X.frame,c||o),lt.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",V);for(let X=0;X<_.length;X++){let J=y[X];J!==null&&(y[X]=null,_[X].disconnect(J))}P=null,U=null,v.reset(),t.setRenderTarget(m),f=null,h=null,u=null,i=null,x=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Sn(f.framebufferWidth,f.framebufferHeight,{format:De,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,lt=null,nt=null;g.depth&&(nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?us:is,lt=g.stencil?hs:Ri);let it={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(it),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Sn(h.textureWidth,h.textureHeight,{format:De,type:jn,depthTexture:new Kr(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(X){for(let J=0;J<X.removed.length;J++){let lt=X.removed[J],nt=y.indexOf(lt);nt>=0&&(y[nt]=null,_[nt].disconnect(lt))}for(let J=0;J<X.added.length;J++){let lt=X.added[J],nt=y.indexOf(lt);if(nt===-1){for(let ct=0;ct<_.length;ct++)if(ct>=y.length){y.push(lt),nt=ct;break}else if(y[ct]===null){y[ct]=lt,nt=ct;break}if(nt===-1)break}let it=_[nt];it&&it.connect(lt)}}let L=new I,q=new I;function O(X,J,lt){L.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(lt.matrixWorld);let nt=L.distanceTo(q),it=J.projectionMatrix.elements,ct=lt.projectionMatrix.elements,rt=it[14]/(it[10]-1),wt=it[14]/(it[10]+1),Pt=(it[9]+1)/it[5],Yt=(it[9]-1)/it[5],D=(it[8]-1)/it[0],ee=(ct[8]+1)/ct[0],kt=rt*D,Bt=rt*ee,Mt=nt/(-D+ee),$t=Mt*-D;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($t),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),it[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let _t=rt+Mt,R=wt+Mt,M=kt-$t,H=Bt+(nt-$t),$=Pt*wt/R*_t,Q=Yt*wt/R*_t;X.projectionMatrix.makePerspective(M,H,$,Q,_t,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let J=X.near,lt=X.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(lt=v.depthFar)),b.near=C.near=A.near=J,b.far=C.far=A.far=lt,(P!==b.near||U!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,U=b.far),A.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,b.layers.mask=A.layers.mask|C.layers.mask;let nt=X.parent,it=b.cameras;Z(b,nt);for(let ct=0;ct<it.length;ct++)Z(it[ct],nt);it.length===2?O(b,A,C):b.projectionMatrix.copy(A.projectionMatrix),et(X,b,nt)};function et(X,J,lt){lt===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(lt.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$o*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ht=null;function Ut(X,J){if(d=J.getViewerPose(c||o),p=J,d!==null){let lt=d.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let nt=!1;lt.length!==b.cameras.length&&(b.cameras.length=0,nt=!0);for(let ct=0;ct<lt.length;ct++){let rt=lt[ct],wt=null;if(f!==null)wt=f.getViewport(rt);else{let Yt=u.getViewSubImage(h,rt);wt=Yt.viewport,ct===0&&(t.setRenderTargetTextures(x,Yt.colorTexture,h.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(x))}let Pt=S[ct];Pt===void 0&&(Pt=new Ne,Pt.layers.enable(ct),Pt.viewport=new jt,S[ct]=Pt),Pt.matrix.fromArray(rt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(rt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(wt.x,wt.y,wt.width,wt.height),ct===0&&(b.matrix.copy(Pt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),nt===!0&&b.cameras.push(Pt)}let it=i.enabledFeatures;if(it&&it.includes("depth-sensing")){let ct=u.getDepthInformation(lt[0]);ct&&ct.isValid&&ct.texture&&v.init(t,ct,i.renderState)}}for(let lt=0;lt<_.length;lt++){let nt=y[lt],it=_[lt];nt!==null&&it!==void 0&&it.update(nt,J,c||o)}ht&&ht(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}let Nt=new Ah;Nt.setAnimationLoop(Ut),this.setAnimationLoop=function(X){ht=X},this.dispose=function(){}}},Ei=new Fe,Rg=new Qt;function Cg(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Th(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ue&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ue&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,y=x.envMapRotation;_&&(g.envMap.value=_,Ei.copy(y),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),g.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Ei)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(p(x),y=d(x),i[x.id]=y,x.addEventListener("dispose",g));let E=_.program;n.updateUBOMapping(x,E);let T=t.render.frame;r[x.id]!==T&&(h(x),r[x.id]=T)}function d(x){let _=u();x.__bindingPointIndex=_;let y=s.createBuffer(),E=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let _=i[x.id],y=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,A=y.length;T<A;T++){let C=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,b=C.length;S<b;S++){let P=C[S];if(f(P,T,S,E)===!0){let U=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],N=0;for(let V=0;V<F.length;V++){let L=F[V],q=v(L);typeof L=="number"||typeof L=="boolean"?(P.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,U+N,P.__data)):L.isMatrix3?(P.__data[0]=L.elements[0],P.__data[1]=L.elements[1],P.__data[2]=L.elements[2],P.__data[3]=0,P.__data[4]=L.elements[3],P.__data[5]=L.elements[4],P.__data[6]=L.elements[5],P.__data[7]=0,P.__data[8]=L.elements[6],P.__data[9]=L.elements[7],P.__data[10]=L.elements[8],P.__data[11]=0):(L.toArray(P.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,y,E){let T=x.value,A=_+"_"+y;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{let C=E[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return E[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function p(x){let _=x.uniforms,y=0,E=16;for(let A=0,C=_.length;A<C;A++){let S=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,P=S.length;b<P;b++){let U=S[b],F=Array.isArray(U.value)?U.value:[U.value];for(let N=0,V=F.length;N<V;N++){let L=F[N],q=v(L),O=y%E,Z=O%q.boundary,et=O+Z;y+=Z,et!==0&&E-et<q.storage&&(y+=E-et),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=q.storage}}}let T=y%E;return T>0&&(y+=E-T),x.__size=y,x.__cache={},this}function v(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){let _=x.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var $r=class{constructor(t={}){let{canvas:e=Pd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=In,this.toneMappingExposure=1;let y=this,E=!1,T=0,A=0,C=null,S=-1,b=null,P=new jt,U=new jt,F=null,N=new qt(0),V=0,L=e.width,q=e.height,O=1,Z=null,et=null,ht=new jt(0,0,L,q),Ut=new jt(0,0,L,q),Nt=!1,X=new zs,J=!1,lt=!1,nt=new Qt,it=new Qt,ct=new I,rt=new jt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Yt(){return C===null?O:1}let D=n;function ee(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),D===null){let B="webgl2";if(D=ee(B,w),D===null)throw ee(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Bt,Mt,$t,_t,R,M,H,$,Q,Y,St,dt,vt,Zt,st,xt,Lt,Ft,yt,te,Wt,me,k;function ft(){kt=new qm(D),kt.init(),Wt=new wg(D,kt),Bt=new zm(D,kt,t,Wt),Mt=new Mg(D,kt),Bt.reverseDepthBuffer&&h&&Mt.buffers.depth.setReversed(!0),$t=new Ym(D),_t=new lg,R=new Sg(D,kt,Mt,_t,Bt,Wt,$t),M=new Vm(y),H=new Xm(y),$=new ef(D),me=new Om(D,$),Q=new Km(D,$,$t,me),Y=new Jm(D,Q,$,$t),Ft=new Zm(D,Bt,R),st=new Hm(_t),St=new og(y,M,H,kt,Bt,me,st),dt=new Cg(y,_t),vt=new hg,Zt=new gg(kt),Lt=new km(y,M,H,Mt,Y,f,l),xt=new yg(y,Y,Bt),k=new Pg(D,$t,Bt,Mt),yt=new Bm(D,kt,$t),te=new $m(D,kt,$t),$t.programs=St.programs,y.capabilities=Bt,y.extensions=kt,y.properties=_t,y.renderLists=vt,y.shadowMap=xt,y.state=Mt,y.info=$t}ft();let K=new hl(y,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(L,q,!1))},this.getSize=function(w){return w.set(L,q)},this.setSize=function(w,B,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,q=B,e.width=Math.floor(w*O),e.height=Math.floor(B*O),G===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(L*O,q*O).floor()},this.setDrawingBufferSize=function(w,B,G){L=w,q=B,O=G,e.width=Math.floor(w*G),e.height=Math.floor(B*G),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ht)},this.setViewport=function(w,B,G,W){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,B,G,W),Mt.viewport(P.copy(ht).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,B,G,W){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,B,G,W),Mt.scissor(U.copy(Ut).multiplyScalar(O).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(w){Mt.setScissorTest(Nt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){et=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(w=!0,B=!0,G=!0){let W=0;if(w){let z=!1;if(C!==null){let at=C.texture.format;z=at===Ll||at===Il||at===Pl}if(z){let at=C.texture.type,mt=at===jn||at===Ri||at===Os||at===hs||at===Rl||at===Cl,Et=Lt.getClearColor(),Tt=Lt.getClearAlpha(),Ot=Et.r,Gt=Et.g,At=Et.b;mt?(p[0]=Ot,p[1]=Gt,p[2]=At,p[3]=Tt,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Ot,v[1]=Gt,v[2]=At,v[3]=Tt,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}B&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),Zt.dispose(),_t.dispose(),M.dispose(),H.dispose(),Y.dispose(),me.dispose(),k.dispose(),St.dispose(),K.dispose(),K.removeEventListener("sessionstart",Yl),K.removeEventListener("sessionend",Zl),yi.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=$t.autoReset,B=xt.enabled,G=xt.autoUpdate,W=xt.needsUpdate,z=xt.type;ft(),$t.autoReset=w,xt.enabled=B,xt.autoUpdate=G,xt.needsUpdate=W,xt.type=z}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vt(w){let B=w.target;B.removeEventListener("dispose",Vt),Me(B)}function Me(w){ze(w),_t.remove(w)}function ze(w){let B=_t.get(w).programs;B!==void 0&&(B.forEach(function(G){St.releaseProgram(G)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,G,W,z,at){B===null&&(B=wt);let mt=z.isMesh&&z.matrixWorld.determinant()<0,Et=Vu(w,B,G,W,z);Mt.setMaterial(W,mt);let Tt=G.index,Ot=1;if(W.wireframe===!0){if(Tt=Q.getWireframeAttribute(G),Tt===void 0)return;Ot=2}let Gt=G.drawRange,At=G.attributes.position,se=Gt.start*Ot,ge=(Gt.start+Gt.count)*Ot;at!==null&&(se=Math.max(se,at.start*Ot),ge=Math.min(ge,(at.start+at.count)*Ot)),Tt!==null?(se=Math.max(se,0),ge=Math.min(ge,Tt.count)):At!=null&&(se=Math.max(se,0),ge=Math.min(ge,At.count));let ve=ge-se;if(ve<0||ve===1/0)return;me.setup(z,W,Et,G,Tt);let Ye,re=yt;if(Tt!==null&&(Ye=$.get(Tt),re=te,re.setIndex(Ye)),z.isMesh)W.wireframe===!0?(Mt.setLineWidth(W.wireframeLinewidth*Yt()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(z.isLine){let Rt=W.linewidth;Rt===void 0&&(Rt=1),Mt.setLineWidth(Rt*Yt()),z.isLineSegments?re.setMode(D.LINES):z.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else z.isPoints?re.setMode(D.POINTS):z.isSprite&&re.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)re.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Rt=z._multiDrawStarts,Bn=z._multiDrawCounts,ae=z._multiDrawCount,vn=Tt?$.get(Tt).bytesPerElement:1,Ni=_t.get(W).currentProgram.getUniforms();for(let nn=0;nn<ae;nn++)Ni.setValue(D,"_gl_DrawID",nn),re.render(Rt[nn]/vn,Bn[nn])}else if(z.isInstancedMesh)re.renderInstances(se,ve,z.count);else if(G.isInstancedBufferGeometry){let Rt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Bn=Math.min(G.instanceCount,Rt);re.renderInstances(se,ve,Bn)}else re.render(se,ve)};function le(w,B,G){w.transparent===!0&&w.side===Ee&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,er(w,B,G),w.side=on,w.needsUpdate=!0,er(w,B,G),w.side=Ee):er(w,B,G)}this.compile=function(w,B,G=null){G===null&&(G=w),m=Zt.get(G),m.init(B),_.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let W=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let at=z.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let Et=at[mt];le(Et,G,z),W.add(Et)}else le(at,G,z),W.add(at)}),_.pop(),m=null,W},this.compileAsync=function(w,B,G=null){let W=this.compile(w,B,G);return new Promise(z=>{function at(){if(W.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&W.delete(mt)}),W.size===0){z(w);return}setTimeout(at,10)}kt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let gn=null;function On(w){gn&&gn(w)}function Yl(){yi.stop()}function Zl(){yi.start()}let yi=new Ah;yi.setAnimationLoop(On),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){gn=w,K.setAnimationLoop(w),w===null?yi.stop():yi.start()},K.addEventListener("sessionstart",Yl),K.addEventListener("sessionend",Zl),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,B,C),m=Zt.get(w,_.length),m.init(B),_.push(m),it.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(it),lt=this.localClippingEnabled,J=st.init(this.clippingPlanes,lt),g=vt.get(w,x.length),g.init(),x.push(g),K.enabled===!0&&K.isPresenting===!0){let at=y.xr.getDepthSensingMesh();at!==null&&Ca(at,B,-1/0,y.sortObjects)}Ca(w,B,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Z,et),Pt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Pt&&Lt.addToRenderList(g,w),this.info.render.frame++,J===!0&&st.beginShadows();let G=m.state.shadowsArray;xt.render(G,w,B),J===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,z=g.transmissive;if(m.setupLights(),B.isArrayCamera){let at=B.cameras;if(z.length>0)for(let mt=0,Et=at.length;mt<Et;mt++){let Tt=at[mt];jl(W,z,w,Tt)}Pt&&Lt.render(w);for(let mt=0,Et=at.length;mt<Et;mt++){let Tt=at[mt];Jl(g,w,Tt,Tt.viewport)}}else z.length>0&&jl(W,z,w,B),Pt&&Lt.render(w),Jl(g,w,B);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,B),me.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(m=_[_.length-1],J===!0&&st.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Ca(w,B,G,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){W&&rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);let mt=Y.update(w),Et=w.material;Et.visible&&g.push(w,mt,Et,G,rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let mt=Y.update(w),Et=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),rt.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),rt.copy(mt.boundingSphere.center)),rt.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(Et)){let Tt=mt.groups;for(let Ot=0,Gt=Tt.length;Ot<Gt;Ot++){let At=Tt[Ot],se=Et[At.materialIndex];se&&se.visible&&g.push(w,mt,se,G,rt.z,At)}}else Et.visible&&g.push(w,mt,Et,G,rt.z,null)}}let at=w.children;for(let mt=0,Et=at.length;mt<Et;mt++)Ca(at[mt],B,G,W)}function Jl(w,B,G,W){let z=w.opaque,at=w.transmissive,mt=w.transparent;m.setupLightsView(G),J===!0&&st.setGlobalState(y.clippingPlanes,G),W&&Mt.viewport(P.copy(W)),z.length>0&&tr(z,B,G),at.length>0&&tr(at,B,G),mt.length>0&&tr(mt,B,G),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function jl(w,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Sn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Nn:jn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let at=m.state.transmissionRenderTarget[W.id],mt=W.viewport||P;at.setSize(mt.z,mt.w);let Et=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(N),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Pt&&Lt.render(G);let Tt=y.toneMapping;y.toneMapping=In;let Ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),J===!0&&st.setGlobalState(y.clippingPlanes,W),tr(w,G,W),R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let At=0,se=B.length;At<se;At++){let ge=B[At],ve=ge.object,Ye=ge.geometry,re=ge.material,Rt=ge.group;if(re.side===Ee&&ve.layers.test(W.layers)){let Bn=re.side;re.side=Ue,re.needsUpdate=!0,Ql(ve,G,W,Ye,re,Rt),re.side=Bn,re.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(at),R.updateRenderTargetMipmap(at))}y.setRenderTarget(Et),y.setClearColor(N,V),Ot!==void 0&&(W.viewport=Ot),y.toneMapping=Tt}function tr(w,B,G){let W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,at=w.length;z<at;z++){let mt=w[z],Et=mt.object,Tt=mt.geometry,Ot=W===null?mt.material:W,Gt=mt.group;Et.layers.test(G.layers)&&Ql(Et,B,G,Tt,Ot,Gt)}}function Ql(w,B,G,W,z,at){w.onBeforeRender(y,B,G,W,z,at),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,B,G,W,w,at),z.transparent===!0&&z.side===Ee&&z.forceSinglePass===!1?(z.side=Ue,z.needsUpdate=!0,y.renderBufferDirect(G,B,W,z,w,at),z.side=on,z.needsUpdate=!0,y.renderBufferDirect(G,B,W,z,w,at),z.side=Ee):y.renderBufferDirect(G,B,W,z,w,at),w.onAfterRender(y,B,G,W,z,at)}function er(w,B,G){B.isScene!==!0&&(B=wt);let W=_t.get(w),z=m.state.lights,at=m.state.shadowsArray,mt=z.state.version,Et=St.getParameters(w,z.state,at,B,G),Tt=St.getProgramCacheKey(Et),Ot=W.programs;W.environment=w.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",Vt),Ot=new Map,W.programs=Ot);let Gt=Ot.get(Tt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===mt)return ec(w,Et),Gt}else Et.uniforms=St.getUniforms(w),w.onBeforeCompile(Et,y),Gt=St.acquireProgram(Et,Tt),Ot.set(Tt,Gt),W.uniforms=Et.uniforms;let At=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=st.uniform),ec(w,Et),W.needsLights=Wu(w),W.lightsStateVersion=mt,W.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.directionalShadowMap.value=z.state.directionalShadowMap,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotShadowMap.value=z.state.spotShadowMap,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMap.value=z.state.pointShadowMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function tc(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=rs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function ec(w,B){let G=_t.get(w);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Vu(w,B,G,W,z){B.isScene!==!0&&(B=wt),R.resetTextureUnits();let at=B.fog,mt=W.isMeshStandardMaterial?B.environment:null,Et=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qn,Tt=(W.isMeshStandardMaterial?H:M).get(W.envMap||mt),Ot=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),At=!!G.morphAttributes.position,se=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color,ve=In;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=y.toneMapping);let Ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=Ye!==void 0?Ye.length:0,Rt=_t.get(W),Bn=m.state.lights;if(J===!0&&(lt===!0||w!==b)){let fn=w===b&&W.id===S;st.setState(W,w,fn)}let ae=!1;W.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Bn.state.version||Rt.outputColorSpace!==Et||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==Tt||W.fog===!0&&Rt.fog!==at||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==st.numPlanes||Rt.numIntersection!==st.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==Gt||Rt.morphTargets!==At||Rt.morphNormals!==se||Rt.morphColors!==ge||Rt.toneMapping!==ve||Rt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,Rt.__version=W.version);let vn=Rt.currentProgram;ae===!0&&(vn=er(W,B,z));let Ni=!1,nn=!1,ws=!1,xe=vn.getUniforms(),Tn=Rt.uniforms;if(Mt.useProgram(vn.program)&&(Ni=!0,nn=!0,ws=!0),W.id!==S&&(S=W.id,nn=!0),Ni||b!==w){Mt.buffers.depth.getReversed()?(nt.copy(w.projectionMatrix),Ld(nt),Dd(nt),xe.setValue(D,"projectionMatrix",nt)):xe.setValue(D,"projectionMatrix",w.projectionMatrix),xe.setValue(D,"viewMatrix",w.matrixWorldInverse);let ni=xe.map.cameraPosition;ni!==void 0&&ni.setValue(D,ct.setFromMatrixPosition(w.matrixWorld)),Bt.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,nn=!0,ws=!0)}if(z.isSkinnedMesh){xe.setOptional(D,z,"bindMatrix"),xe.setOptional(D,z,"bindMatrixInverse");let fn=z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),xe.setValue(D,"boneTexture",fn.boneTexture,R))}z.isBatchedMesh&&(xe.setOptional(D,z,"batchingTexture"),xe.setValue(D,"batchingTexture",z._matricesTexture,R),xe.setOptional(D,z,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",z._indirectTexture,R),xe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",z._colorsTexture,R));let Es=G.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0)&&Ft.update(z,G,vn),(nn||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,xe.setValue(D,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Tn.envMap.value=Tt,Tn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Tn.envMapIntensity.value=B.environmentIntensity),nn&&(xe.setValue(D,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&Gu(Tn,ws),at&&W.fog===!0&&dt.refreshFogUniforms(Tn,at),dt.refreshMaterialUniforms(Tn,W,O,q,m.state.transmissionRenderTarget[w.id]),rs.upload(D,tc(Rt),Tn,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(rs.upload(D,tc(Rt),Tn,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(D,"center",z.center),xe.setValue(D,"modelViewMatrix",z.modelViewMatrix),xe.setValue(D,"normalMatrix",z.normalMatrix),xe.setValue(D,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let fn=W.uniformsGroups;for(let ni=0,ii=fn.length;ni<ii;ni++){let nc=fn[ni];k.update(nc,vn),k.bind(nc,vn)}}return vn}function Gu(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Wu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,B,G){_t.get(w.texture).__webglTexture=B,_t.get(w.depthTexture).__webglTexture=G;let W=_t.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){let G=_t.get(w);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,G=0){C=w,T=B,A=G;let W=!0,z=null,at=!1,mt=!1;if(w){let Tt=_t.get(w);if(Tt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Tt.__hasExternalTextures)R.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let At=w.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&_t.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);let Gt=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[B])?z=Gt[B][G]:z=Gt[B],at=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?z=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[G]:z=Gt,P.copy(w.viewport),U.copy(w.scissor),F=w.scissorTest}else P.copy(ht).multiplyScalar(O).floor(),U.copy(Ut).multiplyScalar(O).floor(),F=Nt;if(Mt.bindFramebuffer(D.FRAMEBUFFER,z)&&W&&Mt.drawBuffers(w,z),Mt.viewport(P),Mt.scissor(U),Mt.setScissorTest(F),at){let Tt=_t.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Tt.__webglTexture,G)}else if(mt){let Tt=_t.get(w.texture),Ot=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,G||0,Ot)}S=-1},this.readRenderTargetPixels=function(w,B,G,W,z,at,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){Mt.bindFramebuffer(D.FRAMEBUFFER,Et);try{let Tt=w.texture,Ot=Tt.format,Gt=Tt.type;if(!Bt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&G>=0&&G<=w.height-z&&D.readPixels(B,G,W,z,Wt.convert(Ot),Wt.convert(Gt),at)}finally{let Tt=C!==null?_t.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,B,G,W,z,at,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){let Tt=w.texture,Ot=Tt.format,Gt=Tt.type;if(!Bt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-W&&G>=0&&G<=w.height-z){Mt.bindFramebuffer(D.FRAMEBUFFER,Et);let At=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(B,G,W,z,Wt.convert(Ot),Wt.convert(Gt),0);let se=C!==null?_t.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,se);let ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Id(D,ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(At),D.deleteSync(ge),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,G=0){w.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-G),z=Math.floor(w.image.width*W),at=Math.floor(w.image.height*W),mt=B!==null?B.x:0,Et=B!==null?B.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,mt,Et,z,at),Mt.unbindTexture()},this.copyTextureToTexture=function(w,B,G=null,W=null,z=0){w.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,G=null);let at,mt,Et,Tt,Ot,Gt,At,se,ge,ve=w.isCompressedTexture?w.mipmaps[z]:w.image;G!==null?(at=G.max.x-G.min.x,mt=G.max.y-G.min.y,Et=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Ot=G.min.y,Gt=G.isBox3?G.min.z:0):(at=ve.width,mt=ve.height,Et=ve.depth||1,Tt=0,Ot=0,Gt=0),W!==null?(At=W.x,se=W.y,ge=W.z):(At=0,se=0,ge=0);let Ye=Wt.convert(B.format),re=Wt.convert(B.type),Rt;B.isData3DTexture?(R.setTexture3D(B,0),Rt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Rt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Rt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Bn=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ni=D.getParameter(D.UNPACK_SKIP_ROWS),nn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gt);let ws=w.isDataArrayTexture||w.isData3DTexture,xe=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Tn=_t.get(w),Es=_t.get(B),fn=_t.get(Tn.__renderTarget),ni=_t.get(Es.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,fn.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Et;ii++)ws&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(w).__webglTexture,z,Gt+ii),w.isDepthTexture?(xe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(B).__webglTexture,z,ge+ii),D.blitFramebuffer(Tt,Ot,at,mt,At,se,at,mt,D.DEPTH_BUFFER_BIT,D.NEAREST)):xe?D.copyTexSubImage3D(Rt,z,At,se,ge+ii,Tt,Ot,at,mt):D.copyTexSubImage2D(Rt,z,At,se,ge+ii,Tt,Ot,at,mt);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xe?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Rt,z,At,se,ge,at,mt,Et,Ye,re,ve.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,z,At,se,ge,at,mt,Et,Ye,ve.data):D.texSubImage3D(Rt,z,At,se,ge,at,mt,Et,Ye,re,ve):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,At,se,at,mt,Ye,re,ve.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,At,se,ve.width,ve.height,Ye,ve.data):D.texSubImage2D(D.TEXTURE_2D,z,At,se,at,mt,Ye,re,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,Bn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ni),D.pixelStorei(D.UNPACK_SKIP_IMAGES,nn),z===0&&B.generateMipmaps&&D.generateMipmap(Rt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,G=null,W=null,z=0){return w.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,G,W,z)},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Mt.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,Mt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Un=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fe,this.environmentIntensity=1,this.environmentRotation=new Fe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ul=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ko,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new I,Yr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new de(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ms=class extends Ln{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ji,Ps=new I,ji=new I,Qi=new I,ts=new Ct,Is=new Ct,Lh=new Qt,Sr=new I,Ls=new I,wr=new I,eh=new Ct,ao=new Ct,nh=new Ct,Hs=class extends Oe{constructor(t=new ms){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ul(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new Yr(n,3,0,!1)),Ji.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Qi.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Er(Sr.set(-.5,-.5,0),Qi,o,ji,i,r),Er(Ls.set(.5,-.5,0),Qi,o,ji,i,r),Er(wr.set(.5,.5,0),Qi,o,ji,i,r),eh.set(0,0),ao.set(1,0),nh.set(1,1);let a=t.ray.intersectTriangle(Sr,Ls,wr,!1,Ps);if(a===null&&(Er(Ls.set(-.5,.5,0),Qi,o,ji,i,r),ao.set(0,1),a=t.ray.intersectTriangle(Sr,wr,Ls,!1,Ps),a===null))return;let l=t.ray.origin.distanceTo(Ps);l<t.near||l>t.far||e.push({distance:l,point:Ps.clone(),uv:hi.getInterpolation(Ps,Sr,Ls,wr,eh,ao,nh,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Er(s,t,e,n,i,r){ts.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Is.x=r*ts.x-i*ts.y,Is.y=i*ts.x+r*ts.y):Is.copy(ts),s.copy(t),s.x+=Is.x,s.y+=Is.y,s.applyMatrix4(Lh)}var pi=class extends Xe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=an,d=an,u,h){super(null,o,a,l,c,d,i,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class extends de{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Vs=class extends Ln{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zr=new I,Jr=new I,ih=new Qt,Ds=new Bs,Tr=new Pi,oo=new I,sh=new I,jr=class extends Oe{constructor(t=new ye,e=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Zr.fromBufferAttribute(e,i-1),Jr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Zr.distanceTo(Jr);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;ih.copy(i).invert(),Ds.copy(t.ray).applyMatrix4(ih);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=d.getX(v),x=d.getX(v+1),_=Ar(this,t,Ds,l,m,x);_&&e.push(_)}if(this.isLineLoop){let v=d.getX(p-1),g=d.getX(f),m=Ar(this,t,Ds,l,v,g);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=Ar(this,t,Ds,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){let v=Ar(this,t,Ds,l,p-1,f);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ar(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Zr.fromBufferAttribute(o,i),Jr.fromBufferAttribute(o,r),e.distanceSqToSegment(Zr,Jr,oo,sh)>n)return;oo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(oo);if(!(l<t.near||l>t.far))return{distance:l,point:sh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var dl=class extends Ln{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rh=new Qt,fl=new Bs,Rr=new Pi,Cr=new I,Qr=class extends Oe{constructor(t=new ye,e=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;rh.copy(i).invert(),fl.copy(t.ray).applyMatrix4(rh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,v=f;p<v;p++){let g=c.getX(p);Cr.fromBufferAttribute(u,g),ah(Cr,g,l,i,t,e,this)}}else{let h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=h,v=f;p<v;p++)Cr.fromBufferAttribute(u,p),ah(Cr,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ah(s,t,e,n,i,r,o){let a=fl.distanceSqToPoint(s);if(a<e){let l=new I;fl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gi=class extends Xe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ta=class s extends ye{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=We(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/e,u=new I,h=new Ct,f=new I,p=new I,v=new I,g=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=e;x++){let _=n+x*d*i,y=Math.sin(_),E=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*E,o.push(u.x,u.y,u.z),h.x=x/e,h.y=T/(t.length-1),a.push(h.x,h.y);let A=l[3*T+0]*y,C=l[3*T+1],S=l[3*T+0]*E;c.push(A,C,S)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let y=_+x*t.length,E=y,T=y+t.length,A=y+t.length+1,C=y+1;r.push(E,T,C),r.push(A,C,T)}this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var gs=class s extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,d=new Ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/t+1)/2,d.y=(o[h+1]/t+1)/2,l.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wn=class s extends ye{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let d=[],u=[],h=[],f=[],p=0,v=[],g=n/2,m=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function x(){let y=new I,E=new I,T=0,A=(e-t)/n;for(let C=0;C<=r;C++){let S=[],b=C/r,P=b*(e-t)+t;for(let U=0;U<=i;U++){let F=U/i,N=F*l+a,V=Math.sin(N),L=Math.cos(N);E.x=P*V,E.y=-b*n+g,E.z=P*L,u.push(E.x,E.y,E.z),y.set(V,A,L).normalize(),h.push(y.x,y.y,y.z),f.push(F,1-b),S.push(p++)}v.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){let b=v[S][C],P=v[S+1][C],U=v[S+1][C+1],F=v[S][C+1];(t>0||S!==0)&&(d.push(b,P,F),T+=3),(e>0||S!==r-1)&&(d.push(P,U,F),T+=3)}c.addGroup(m,T,0),m+=T}function _(y){let E=p,T=new Ct,A=new I,C=0,S=y===!0?t:e,b=y===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*b,0),h.push(0,b,0),f.push(.5,.5),p++;let P=p;for(let U=0;U<=i;U++){let N=U/i*l+a,V=Math.cos(N),L=Math.sin(N);A.x=S*L,A.y=g*b,A.z=S*V,u.push(A.x,A.y,A.z),h.push(0,b,0),T.x=V*.5+.5,T.y=L*.5*b+.5,f.push(T.x,T.y),p++}for(let U=0;U<i;U++){let F=E+U,N=P+U;y===!0?d.push(N,N+1,F):d.push(N+1,N,F),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class s extends wn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var cn=class s extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new I,h=new I,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let x=[],_=m/n,y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){let T=E/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),g.push(T+y,1-_),x.push(c++)}d.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let _=d[m][x+1],y=d[m][x],E=d[m+1][x],T=d[m+1][x+1];(m!==0||o>0)&&f.push(_,y,T),(m!==n-1||l<Math.PI)&&f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var na=class s extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],d=new I,u=new I,h=new I;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){let v=p/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){let v=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,x=(i+1)*f+p;o.push(v,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fn=class extends Ln{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Pr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ig(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var vs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends vs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case oc:r=t,a=2*e-n;break;case lc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oc:o=t,l=2*n-e;break;case lc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,x=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,_=(-1-f)*g+(1.5+f)*v+.5*p,y=f*g-f*v;for(let E=0;E!==a;++E)r[E]=m*o[d+E]+x*o[c+E]+_*o[l+E]+y*o[u+E];return r}},ml=class extends vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(i-e),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}},gl=class extends vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pr(e,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pr(t.times,Array),values:Pr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Ig(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,h=u-n,f=u+n;for(let p=0;p!==n;++p){let v=e[u+p];if(v!==e[h+p]||v!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=qo;var Ii=class extends En{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Nr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends En{};vl.prototype.ValueTypeName="color";var xl=class extends En{};xl.prototype.ValueTypeName="number";var yl=class extends vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let d=c+a;c!==d;c+=4)Se.slerpFlat(r,0,o,c-a,o,c,l);return r}},ia=class extends En{InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends En{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Nr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends En{};_l.prototype.ValueTypeName="vector";var Ml=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null}}},Lg=new Ml,bl=class{constructor(t){this.manager=t!==void 0?t:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var sa=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var lo=new Qt,oh=new I,lh=new I,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(oh),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wl=class extends Sl{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ra=class extends sa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var xs=class extends ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fl="\\[\\]\\.:\\/",Dg=new RegExp("["+Fl+"]","g"),Nl="[^"+Fl+"]",Ug="[^"+Fl.replace("\\.","")+"]",Fg=/((?:WC+[\/:])*)/.source.replace("WC",Nl),Ng=/(WCOD+)?/.source.replace("WCOD",Ug),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),Bg=new RegExp("^"+Fg+Ng+kg+Og+"$"),zg=["material","materials","bones","map"],El=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(t){let e=Bg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);zg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=El;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Uh(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}async function Fh(){let s=window.__SIMDATA,t="bundle";if(s)s.starsBytes=Uh(s.stars),s.milkywayBytes=s.milkyway?Uh(s.milkyway):null;else{if(location.protocol==="file:")throw new Error("data/data-bundle.js is missing. Run: node tools/build-data.mjs");t="files";let e=async(n,i)=>{let r=await fetch(`data/${n}`);if(!r.ok)throw new Error(`data/${n}: HTTP ${r.status}`);return i==="bin"?new Uint8Array(await r.arrayBuffer()):r.json()};s={manifest:await e("manifest.json"),names:await e("names.json"),galaxies:await e("galaxies.json"),exoplanets:await e("exoplanets.json"),ephemeris:await e("ephemeris.json")},s.starsBytes=await e("stars.bin","bin");try{s.milkywayBytes=await e("milkyway.bin","bin")}catch{s.milkywayBytes=null}}return Hg(s,t)}function Hg(s,t="node"){let e=s.starsBytes,n=Math.floor(e.length/24),i=new DataView(e.buffer,e.byteOffset,e.byteLength),r=new Float64Array(n*3),o=new Float32Array(n),a=new Float32Array(n),l=new Uint8Array(n),c=new Uint8Array(n),d=new Uint32Array(n);for(let p=0;p<n;p++){let v=p*24;r[p*3]=i.getFloat32(v,!0),r[p*3+1]=i.getFloat32(v+4,!0),r[p*3+2]=i.getFloat32(v+8,!0),o[p]=i.getInt16(v+12,!0)/1e3,a[p]=i.getUint16(v+14,!0),l[p]=i.getUint8(v+16),c[p]=i.getUint8(v+17),d[p]=i.getUint32(v+20,!0)}let u=null;if(s.milkywayBytes){let p=s.milkywayBytes,v=new DataView(p.buffer,p.byteOffset,32),g=v.getUint16(4,!0),m=v.getUint16(6,!0),x=new Uint16Array(p.buffer.slice(p.byteOffset+32,p.byteOffset+32+g*m*2)),_=new Uint16Array(p.buffer.slice(p.byteOffset+32+g*m*2,p.byteOffset+32+g*m*4));u={width:g,height:m,logMin:v.getFloat32(8,!0),logMax:v.getFloat32(12,!0),colMin:v.getFloat32(16,!0),colMax:v.getFloat32(20,!0),integratedV:v.getFloat32(24,!0),lum:x,col:_}}let h=new Map;for(let p of s.names.entries)h.set(p[0],{name:p[1],desig:p[2],sp:p[3],system:p[4],gj:p[5]});let f=new Map;for(let p of s.exoplanets.hosts)p.star>=0&&f.set(p.star,p);return{n,pos:r,absMag:o,teff:a,flags:l,lc:c,hip:d,names:h,hosts:f,galaxies:s.galaxies.galaxies,ephemeris:s.ephemeris,manifest:s.manifest,milkyWay:u,source:t}}var Kt=Math.PI/180,kl=1/3.261563777,Ws=3.261563777,ie=3085677581491367e-2,Xs=94607304725808e-1,zt=1495978707e-1;var ca=206264.80624709636,be={V:0,IV:1,III:2,II:3,I:4,WD:5,UNK:6};var Vg=[[2400,-6.6],[2600,-4.9],[3e3,-3.2],[3500,-1.9],[4e3,-.95],[4500,-.55],[5e3,-.3],[5500,-.13],[5772,-.07],[6e3,-.05],[6500,-.01],[7e3,.01],[8e3,-.05],[9e3,-.2],[1e4,-.4],[15e3,-1.5],[2e4,-2.1],[3e4,-3],[4e4,-3.9],[5e4,-4.6]];function Gg(s,t){if(t<=s[0][0])return s[0][1];let e=s.length;if(t>=s[e-1][0])return s[e-1][1];let n=0,i=e-1;for(;i-n>1;){let c=n+i>>1;s[c][0]<=t?n=c:i=c}let[r,o]=s[n],[a,l]=s[i];return o+(t-r)/(a-r)*(l-o)}function Ol(s){return Gg(Vg,s)}function kh(s,t){let e=s+Ol(t);return Math.pow(10,-.4*(e-4.74))}function Oh(s,t){return Math.sqrt(s)/Math.pow(t/5772,2)}function Bh(s,t=be.V){return t===be.WD?.6:t===be.III||t===be.II?Math.min(5,Math.max(.8,1.3+.1*Math.log10(Math.max(s,1)))):t===be.I?Math.min(25,Math.max(5,6*Math.pow(Math.max(s,1)/1e4,.25))):s<.033?Math.pow(s/.23,1/2.3):s<16?Math.pow(s,1/4):s<1.4*Math.pow(2,3.5)*1e3?Math.pow(s/1.4,1/3.5):Math.pow(s/3200,1/1.1)*20}var Bl=[[-.0548755604162154,-.873437090234885,-.4838350155487132],[.4941094278755837,-.4448296299600112,.746982244497219],[-.8676661490190047,-.1980763734312015,.4559837761750669]];var Nh=23.43928*Kt;function ha(s){let t=Math.cos(Nh),e=Math.sin(Nh);return[s[0],t*s[1]-e*s[2],e*s[1]+t*s[2]]}function zl(s){return s.getTime()/864e5+24405875e-1}function zh(s){return new Date((s-24405875e-1)*864e5)}var _s=2451545;function Di(s){let t=(h,f,p,v)=>{let g=(h-f)/(h<f?p:v);return Math.exp(-.5*g*g)},e=0,n=0,i=0,r=662607015e-42,o=299792458,a=1380649e-29;for(let h=380;h<=780;h+=5){let f=1.056*t(h,599.8,37.9,31)+.362*t(h,442,16,26.7)-.065*t(h,501.1,20.4,26.2),p=.821*t(h,568.8,46.9,40.5)+.286*t(h,530.9,16.3,31.1),v=1.217*t(h,437,11.8,36)+.681*t(h,459,26,13.8),g=h*1e-9,m=1/(g**5*(Math.exp(r*o/(g*a*s))-1));e+=f*m,n+=p*m,i+=v*m}e/=n,i/=n,n=1;let l=3.2406*e-1.5372*n-.4986*i,c=-.9689*e+1.8758*n+.0415*i,d=.0557*e-.204*n+1.057*i;l=Math.max(l,0),c=Math.max(c,0),d=Math.max(d,0);let u=.2126*l+.7152*c+.0722*d;return[l/u,c/u,d/u]}function Xg(s,t){return t===be.WD?"D":s>=3e4?"O":s>=1e4?"B":s>=7500?"A":s>=6e3?"F":s>=5200?"G":s>=3900?"K":"M"}function Hh(s,t,e){let n=kh(s,t),i=Oh(n,t);e===be.WD&&(i=.0125*Math.pow(.6/.6,-1/3)),i=Math.max(i,.005);let r=Bh(n,e),o=Xg(t,e);return{lumSun:n,radiusSun:i,radiusKm:i*695700,massSun:r,gm:r*13271244004194e-2,teff:t,letter:o,lc:e,absMag:s,color:Di(t)}}function ua(s,t,e){let n=t.heliopause;if(e&&n.knownAu&&n.knownAu[e]!=null)return n.knownAu[e]*zt;let i=n.windScale,r,o=n.windSpeedKmS.default,a=s.radiusSun;s.lc===be.WD?r=i.whiteDwarf:s.lc===be.I?(r=i.supergiant*Math.pow(Math.max(s.lumSun,1)/1e4,.9),o=n.windSpeedKmS.giant*3):s.lc===be.III||s.lc===be.II?(r=i.giant*Math.pow(Math.max(s.lumSun,1)/100,.6)*(a/10)**.5,o=n.windSpeedKmS.giant):s.letter==="O"||s.letter==="B"?(r=i[s.letter]*Math.pow(Math.max(s.lumSun,1)/1e3,s.letter==="O"?1.7:1.4),o=n.windSpeedKmS.hot):s.letter==="A"?(r=i.A*a*a,o=n.windSpeedKmS.hot*.4):r=(i[s.letter]??1)*a*a;let l=Math.sqrt(Math.max(r,1e-9)*(o/n.windSpeedKmS.default));return Math.min(n.maxAu,Math.max(n.minAu,n.sunAu*l))*zt}function da(s,t,e=.3){return 278.5*Math.pow(s,.25)/Math.sqrt(t)*Math.pow(1-e,.25)}function qs(s,t){let e=Math.min(7200,Math.max(2600,t))-5780,n=(o,a,l,c,d)=>o+a*e+l*e*e+c*e**3+d*e**4,i=n(1.0512,13242e-8,15418e-12,-79895e-16,-18328e-19),r=n(.3438,58942e-9,16558e-13,-30045e-16,-52983e-20);return{inner:Math.sqrt(s/i),outer:Math.sqrt(s/r)}}var Ui=4,fa=class{constructor(t,e){this.d=t,this.cfg=e,this.n=t.n,this.pos=t.pos,this.grid=new Map;for(let n=0;n<this.n;n++){let i=this._key(Math.floor(this.pos[n*3]/Ui),Math.floor(this.pos[n*3+1]/Ui),Math.floor(this.pos[n*3+2]/Ui)),r=this.grid.get(i);r||this.grid.set(i,r=[]),r.push(n)}this._traits=new Map,this.sunIndex=0;for(let n=0;n<Math.min(this.n,4);n++)t.flags[n]&32&&(this.sunIndex=n)}_key(t,e,n){return`${t},${e},${n}`}within(t,e,n=[]){let i=Math.ceil(e/Ui),r=Math.floor(t[0]/Ui),o=Math.floor(t[1]/Ui),a=Math.floor(t[2]/Ui),l=e*e;for(let c=-i;c<=i;c++)for(let d=-i;d<=i;d++)for(let u=-i;u<=i;u++){let h=this.grid.get(this._key(r+c,o+d,a+u));if(h)for(let f of h){let p=this.pos[f*3]-t[0],v=this.pos[f*3+1]-t[1],g=this.pos[f*3+2]-t[2];p*p+v*v+g*g<=l&&n.push(f)}}return n}posOf(t){return[this.pos[t*3],this.pos[t*3+1],this.pos[t*3+2]]}distFromSun(t){return Math.hypot(this.pos[t*3],this.pos[t*3+1],this.pos[t*3+2])}traits(t){let e=this._traits.get(t);return e||(e=Hh(this.d.absMag[t],this.d.teff[t],this.d.lc[t]),this._traits.set(t,e)),e}info(t){return this.d.names.get(t)||null}isSun(t){return(this.d.flags[t]&32)!==0}hasKnownPlanets(t){return this.d.hosts.has(t)}host(t){return this.d.hosts.get(t)||null}search(t,e=60){if(t=t.toLowerCase().trim(),t.length<2)return[];if(!this._sIdx){this._sIdx=[];for(let[r,o]of this.d.names)this._sIdx.push([r,[o.name,o.desig,o.system,o.gj!=null?"gj "+o.gj:""].filter(Boolean).join("|").toLowerCase()])}let n=[],i=new Set;for(let[r,o]of this._sIdx)o.includes(t)&&(n.push(r),i.add(r));if(/^(hip\s*)?\d+$/.test(t)||"sol".startsWith(t)||"sun".startsWith(t)){let r=(t.match(/\d+/)||[""])[0];for(let o=0;o<this.n&&n.length<e*4;o++)i.has(o)||(r&&this.d.hip[o]&&String(this.d.hip[o]).startsWith(r)||this.isSun(o)&&("sol".startsWith(t)||"sun".startsWith(t)))&&n.push(o)}return n}designation(t){if(this.isSun(t))return"Sol";let e=this.info(t);return e&&e.desig?e.desig:this.d.hip[t]?`HIP ${this.d.hip[t]}`:`Star #${t}`}name(t){if(this.isSun(t))return"Sun";let e=this.info(t);return e&&e.name?e.name:this.designation(t)}apparentMag(t,e){let n=this.pos[t*3]-e[0],i=this.pos[t*3+1]-e[1],r=this.pos[t*3+2]-e[2],o=Math.max(Math.hypot(n,i,r),1e-7);return this.d.absMag[t]+5*Math.log10(o/10)}spectralText(t){let e=this.info(t);if(e&&e.sp){let i=/^(sd|d)?[OBAFGKM]\d?(\.\d)?\s?(Ia\+|Iab|Ia|Ib|III|II|IV|V|VI|I)?[a-z]*/.exec(e.sp);if(i&&i[0].length>=2&&!/\.\.\./.test(i[0]))return i[0]}let n=this.traits(t);return n.letter+(n.lc===be.III?" giant":n.lc===be.I?" supergiant":n.lc===be.WD?" white dwarf":" dwarf")}systemsNear(t,e,n){let i=n*3/ca,r=this.within(t,e+i),o=n/ca,a=o*o,l=new Map(r.map(h=>[h,h])),c=h=>{for(;l.get(h)!==h;)l.set(h,l.get(l.get(h))),h=l.get(h);return h};for(let h=0;h<r.length;h++){let f=r[h];for(let p=h+1;p<r.length;p++){let v=r[p],g=this.pos[f*3]-this.pos[v*3],m=this.pos[f*3+1]-this.pos[v*3+1],x=this.pos[f*3+2]-this.pos[v*3+2];g*g+m*m+x*x<a&&l.set(c(f),c(v))}}let d=new Map;for(let h of r){let f=c(h),p=d.get(f);p||d.set(f,p=[]),p.push(h)}let u=[];for(let h of d.values()){h.sort((g,m)=>this.traits(m).lumSun-this.traits(g).lumSun||g-m);let f=h[0],p=this.posOf(f),v=Math.hypot(p[0]-t[0],p[1]-t[1],p[2]-t[2]);v>e||u.push({key:Math.min(...h),members:h,primary:f,name:this.systemName(h),distPc:v,centre:p})}return u.sort((h,f)=>h.distPc-f.distPc),u}systemName(t){for(let i of t){let r=this.info(i);if(r&&r.system)return r.system}let e=t[0],n=this.name(e);return t.length>1&&(n=n.replace(/\s+[AB]$/,"")),n}systemOf(t,e){let n=this.posOf(t);return this.systemsNear(n,e*2/ca+1e-6,e).find(r=>r.members.includes(t))||{key:t,members:[t],primary:t,name:this.name(t),distPc:0,centre:n}}heliopauseKm(t){let e=this.traits(t);return ua(e,this.cfg,this.name(t))}};var Be=Math.PI*2,bt=(s,t,e)=>s<t?t:s>e?e:s;var un=(s,t,e)=>{let n=bt((e-s)/(t-s),0,1);return n*n*(3-2*n)};var Vh=(s,t)=>(s%t+t)%t;var Ks=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Ze=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Pe=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Je=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],je=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Jt=s=>Math.hypot(s[0],s[1],s[2]),fe=s=>{let t=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/t,s[1]/t,s[2]/t]},$s=(s,t,e)=>[s[0]+t[0]*e,s[1]+t[1]*e,s[2]+t[2]*e];function kn(s){let t=Math.abs(s[0])<.9?[1,0,0]:[0,1,0];return fe(je(s,t))}function Ys(s,t,e){let n=Math.cos(e),i=Math.sin(e),r=Je(t,s)*(1-n),o=je(t,s);return[s[0]*n+o[0]*i+t[0]*r,s[1]*n+o[1]*i+t[1]*r,s[2]*n+o[2]*i+t[2]*r]}var Ms=(s,t)=>{let e=new Array(9);for(let n=0;n<3;n++)for(let i=0;i<3;i++)e[n*3+i]=s[n*3]*t[i]+s[n*3+1]*t[3+i]+s[n*3+2]*t[6+i];return e},pa=(s,t)=>[s[0]*t[0]+s[1]*t[1]+s[2]*t[2],s[3]*t[0]+s[4]*t[1]+s[5]*t[2],s[6]*t[0]+s[7]*t[1]+s[8]*t[2]],Hl=s=>{let t=Math.cos(s),e=Math.sin(s);return[1,0,0,0,t,-e,0,e,t]},Zs=s=>{let t=Math.cos(s),e=Math.sin(s);return[t,-e,0,e,t,0,0,0,1]};function ei(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t>>>0}function Qe(s,t){let e=(s^2654435769)>>>0;return e=Math.imul(e^t+2135587861,2246822507)>>>0,e^=e>>>13,e=Math.imul(e,3266489909)>>>0,e^=e>>>16,e>>>0}function tn(s){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e.normal=()=>{let n=0,i=0;for(;n===0;)n=e();return i=e(),Math.sqrt(-2*Math.log(n))*Math.cos(Be*i)},e.logUniform=(n,i)=>Math.exp(Math.log(n)+(Math.log(i)-Math.log(n))*e()),e.weighted=n=>{let i=0;for(let[,o]of n)i+=o;let r=e()*i;for(let[o,a]of n)if(r-=a,r<=0)return o;return n[n.length-1][0]},e}function Ie(s){let t=Math.abs(s);return t<1?`${(s*1e3).toFixed(t<.01?1:0)} m`:t<1e5?`${s.toFixed(t<100?1:0)} km`:t<149597870*.2?`${(s/1e6).toFixed(2)} M km`:t<94607e8*.1?`${(s/149597870).toFixed(t/149597870<10?2:1)} AU`:`${(s/94607304725808e-1).toFixed(t/946e10<10?3:2)} ly`}function ma(s){let t=299792.458,e=Math.abs(s);return e<.01?`${(s*1e3).toFixed(1)} m/s`:e<1e3?`${s.toFixed(e<10?2:1)} km/s`:e/t<1?`${Math.round(s).toLocaleString("en-US")} km/s`:`${(e/t).toLocaleString("en-US",{maximumFractionDigits:e/t<10?2:0})} c`}function ga(s){if(!isFinite(s))return"\u2014";let t=Math.abs(s);return t<90?`${t.toFixed(0)} s`:t<5400?`${Math.floor(t/60)} m ${String(Math.floor(t%60)).padStart(2,"0")} s`:t<172800?`${Math.floor(t/3600)} h ${String(Math.floor(t%3600/60)).padStart(2,"0")} m`:t<86400*400?`${(t/86400).toFixed(1)} d`:`${(t/31557600).toFixed(2)} y`}var qg=9.80665,dn=class{constructor(t){Object.assign(this,{children:[],pole:[0,0,1],albedo:.3,fictional:!1,rings:null,atmosphere:null,look:null,info:""},t),this._jd=NaN,this._p=[0,0,0],this._vjd=NaN,this._v=[0,0,0],this._tmp=[0,0,0],t.parent&&t.parent.children.push(this),this.gravityMs2=this.gm?this.gm*1e9/(this.radiusKm*1e3)**2:0,this._spinAng=null}get isStar(){return this.kind==="star"}positionAt(t){if(this._jd===t)return this._p;let e=this._p;if(this.orbit){if(this.orbit.positionAt(t,e),this.parent){let n=this.parent.positionAt(t);e[0]+=n[0],e[1]+=n[1],e[2]+=n[2]}}else this.fixed?(e[0]=this.fixed[0],e[1]=this.fixed[1],e[2]=this.fixed[2]):e[0]=e[1]=e[2]=0;return this._jd=t,e}velocityAt(t){if(this._vjd===t)return this._v;let e=this._v;if(this.orbit){if(this.orbit.velocityAt(t,e),this.parent){let n=this.parent.velocityAt(t);e[0]+=n[0],e[1]+=n[1],e[2]+=n[2]}}else e[0]=e[1]=e[2]=0;return this._vjd=t,e}localAt(t,e=[0,0,0]){return this.orbit?this.orbit.positionAt(t,e):e[0]=e[1]=e[2]=0,e}get semiMajorKm(){return this.orbit&&this.orbit.a?this.orbit.a:0}get soiKm(){if(this._soi!==void 0)return this._soi;let t=1/0;return this.parent&&this.parent.gm&&this.gm&&this.semiMajorKm&&(t=this.semiMajorKm*Math.pow(this.gm/this.parent.gm,.4)),this.kind==="star"&&(t=1/0),this._soi=t,t}get hillKm(){return this.parent&&this.parent.gm&&this.semiMajorKm?this.semiMajorKm*Math.cbrt(this.gm/(3*this.parent.gm)):1/0}safeRadiusKm(t){if(this._safe!==void 0)return this._safe;let e=t.ship.safeOrbit,n;if(this.kind==="star")n=this.radiusKm*Math.max(e.starMinRadii,1+e.baseFraction);else{let i=this.gravityMs2/qg,r=Math.max(e.minAltitudeKm,this.radiusKm*(e.baseFraction+e.gravityLogFactor*Math.log(1+i)));if(n=this.radiusKm+r,this.rings){let o=Math.max(...this.rings.map(a=>a.r1));n=Math.max(n,this.radiusKm*1+r)}}return this._safe=n,n}axesAt(t){let e=this.pole,n;if(this.spin&&this.spin.sync&&this.parent){let r=this.localAt(t,this._tmp),o=fe(r),a=Je(o,e);n=fe([-(o[0]-e[0]*a),-(o[1]-e[1]*a),-(o[2]-e[2]*a)]),isFinite(n[0])||(n=kn(e))}else{let r=[-e[1],e[0],0],o=Math.hypot(r[0],r[1]);r=o>1e-9?[r[0]/o,r[1]/o,0]:[1,0,0];let a=this.spinAngle(t);n=Ys(r,e,a)}let i=je(e,n);return{x:n,y:i,z:e}}spinAngle(t){if(this.spinOverride!==void 0)return this.spinOverride;let e=this.spin;return e?(e.w0+e.rateDegDay*(t-2451545))*Kt:0}},bs=class{constructor(t){Object.assign(this,{bodies:[],byId:new Map,stars:[],belts:[],fictional:!1,kind:"procedural"},t)}add(t){return t.system=this,this.bodies.push(t),this.byId.set(t.id,t),t.kind==="star"&&this.stars.push(t),t.kind==="belt"&&this.belts.push(t),t}get(t){return this.byId.get(t)||null}get primary(){return this.stars[0]}get targets(){return this.bodies.filter(t=>t.kind!=="belt")}lightSources(t,e){let n=[];for(let i of this.stars){let r=i.positionAt(e),o=r[0]-t[0],a=r[1]-t[1],l=r[2]-t[2],c=Math.hypot(o,a,l)||1,d=c/zt;n.push({star:i,dir:[o/c,a/c,l/c],dist:c,irradiance:i.lumSun/(d*d)})}return n}};function Gh(s,t){let e=s*Kt,n=t*Kt;return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Vl(s,t){s=Vh(s+Math.PI,Be)-Math.PI;let e=t<.8?s+t*Math.sin(s):Math.PI*Math.sign(s||1);for(let n=0;n<30;n++){let i=e-t*Math.sin(e)-s,r=1-t*Math.cos(e),o=i/r;if(e-=o,Math.abs(o)<1e-13)break}return e}var xi=class{constructor(t){this.a=t.a,this.e=t.e,this.inc=t.inc*Kt,this.node=t.node*Kt,this.argp=t.argp*Kt,this.M0=t.M0*Kt,this.epochJD=t.epochJD,this.n=t.nDegPerDay*Kt/86400,this.frame=t.frame||"icrs",this.R=Ms(Zs(this.node),Ms(Hl(this.inc),Zs(this.argp))),t.plane&&(this.R=Ms(t.plane,this.R)),this.periodSec=Be/Math.abs(this.n),this.retro=this.n<0}positionAt(t,e){let n=this.M0+this.n*(t-this.epochJD)*86400,i=Vl(n,this.e),r=Math.cos(i),o=Math.sin(i),a=this.a*Math.sqrt(1-this.e*this.e),l=pa(this.R,[this.a*(r-this.e),a*o,0]);return this.frame==="ecliptic"&&(l=ha(l)),e[0]=l[0],e[1]=l[1],e[2]=l[2],e}velocityAt(t,e){let n=this.M0+this.n*(t-this.epochJD)*86400,i=Vl(n,this.e),r=Math.cos(i),o=Math.sin(i),a=this.n/(1-this.e*r),l=this.a*Math.sqrt(1-this.e*this.e),c=pa(this.R,[-this.a*o*a,l*r*a,0]);return this.frame==="ecliptic"&&(c=ha(c)),e[0]=c[0],e[1]=c[1],e[2]=c[2],e}},va=class{constructor(t,e){this.t1=t.table1[e],this.t2=t.table2a&&t.table2a[e],this.t2b=t.table2b&&t.table2b[e],this.key=e,this.periodSec=0,this.a=this.t1.a[0]*zt,this._setPeriod()}_setPeriod(){this.periodSec=36525*360/Math.abs(this.t1.L[1])*86400}_elements(t){let e=(t-_s)/36525,n=t>23784965e-1&&t<24698075e-1,i=n||!this.t2?this.t1:this.t2,r=a=>i[a][0]+i[a][1]*e,o=r("L")-r("varpi");if(!n&&this.t2b){let{b:a,c:l,s:c,f:d}=this.t2b;o+=a*e*e+l*Math.cos(d*Kt*e)+c*Math.sin(d*Kt*e)}return{a:r("a")*zt,e:r("e"),I:r("I")*Kt,Om:r("Omega")*Kt,w:(r("varpi")-r("Omega"))*Kt,M:o*Kt}}positionAt(t,e){let n=this._elements(t),i=Vl(n.M,n.e),r=n.a*(Math.cos(i)-n.e),o=n.a*Math.sqrt(1-n.e*n.e)*Math.sin(i),a=Ms(Zs(n.Om),Ms(Hl(n.I),Zs(n.w))),l=ha(pa(a,[r,o,0]));return e[0]=l[0],e[1]=l[1],e[2]=l[2],e}velocityAt(t,e){let n=.041666666666666664,i=[0,0,0],r=[0,0,0];this.positionAt(t-n,i),this.positionAt(t+n,r);let o=2*n*86400;return e[0]=(r[0]-i[0])/o,e[1]=(r[1]-i[1])/o,e[2]=(r[2]-i[2])/o,e}};var tt=(s,t,e)=>[s/255,t/255,e/255],Kg={hKm:8.5,topKm:100,rayleigh:[.0058,.0135,.0331],mie:.003,mieG:.76,mieH:1.8,tint:[1,1,1],strength:1},Wh={sun:{look:{kind:"star",tex:"sun"},info:"G2V star \xB7 5772 K"},mercury:{look:{kind:"tex",tex:"mercury",bump:.35,crater:.9,spec:.05},info:"Real global map (Solar System Scope / NASA)"},venus:{look:{kind:"tex",tex:"venus_atmosphere",bump:0,spec:0},atmosphere:{hKm:15,topKm:70,rayleigh:[.001,.0018,.0035],mie:.06,mieG:.4,mieH:12,tint:[1,.92,.72],strength:1.6,opaque:!0},info:"Cloud-top map; the surface is hidden under ~70 km of cloud"},earth:{look:{kind:"tex",tex:"earth_daymap",night:"earth_nightmap",clouds:"earth_clouds",ocean:!0,bump:.15,spec:.55},atmosphere:{...Kg},info:"Real global maps; day/night follows the actual date"},moon:{look:{kind:"tex",tex:"moon",bump:.45,crater:1,spec:0},info:"Real global map"},mars:{look:{kind:"tex",tex:"mars",bump:.35,crater:.6,spec:0},atmosphere:{hKm:11,topKm:80,rayleigh:[2e-5,4e-5,9e-5],mie:14e-5,mieG:.7,mieH:11,tint:[1,.72,.5],strength:1},info:"Real global map"},jupiter:{look:{kind:"tex",tex:"jupiter",gas:!0,spec:0},atmosphere:{hKm:27,topKm:280,rayleigh:[.0026,.0048,.0095],mie:5e-4,mieG:.5,mieH:25,tint:[1,.95,.85],strength:.9},info:"Real global map"},saturn:{look:{kind:"tex",tex:"saturn",gas:!0,spec:0,ring:"saturn_ring_alpha"},atmosphere:{hKm:60,topKm:500,rayleigh:[.002,.0038,.0075],mie:4e-4,mieG:.5,mieH:50,tint:[1,.92,.75],strength:.9},info:"Real global map; rings from published boundaries + Cassini-era profile"},uranus:{look:{kind:"tex",tex:"uranus",gas:!0,spec:0},atmosphere:{hKm:27,topKm:300,rayleigh:[.005,.0032,.002],mie:5e-4,mieG:.5,mieH:25,tint:[.7,.95,1],strength:1},info:"Real global map"},neptune:{look:{kind:"tex",tex:"neptune",gas:!0,spec:0},atmosphere:{hKm:20,topKm:280,rayleigh:[.0025,.0038,.006],mie:5e-4,mieG:.5,mieH:20,tint:[.55,.75,1],strength:1.2},info:"Real global map"},ceres:{look:{kind:"proc",style:"rock",colors:[tt(92,88,84),tt(124,120,114),tt(190,188,182),tt(60,58,56)],p:{crater:.9,bump:.7,spot:.15}},info:"Procedural surface (no global map)"},pluto:{look:{kind:"proc",style:"pluto",colors:[tt(150,104,76),tt(205,170,140),tt(240,228,215),tt(92,60,46)],p:{crater:.3,bump:.35,ice:.5}},atmosphere:{hKm:50,topKm:250,rayleigh:[3e-6,5e-6,12e-6],mie:4e-5,mieG:.8,mieH:50,tint:[.7,.8,1],strength:1},info:"Procedural surface in Pluto-like colours (no global map)"},haumea:{look:{kind:"proc",style:"ice",colors:[tt(200,205,210),tt(235,238,240),tt(120,90,80),tt(170,175,185)],p:{crater:.2,bump:.2,ice:.9}},info:"Procedural surface"},makemake:{look:{kind:"proc",style:"rock",colors:[tt(160,90,62),tt(196,130,96),tt(226,190,160),tt(110,60,44)],p:{crater:.15,bump:.25,ice:.3}},info:"Procedural surface"},eris:{look:{kind:"proc",style:"ice",colors:[tt(225,228,232),tt(246,247,248),tt(200,195,190),tt(180,186,195)],p:{crater:.1,bump:.1,ice:1}},info:"Procedural surface"},phobos:{look:{kind:"proc",style:"rock",colors:[tt(78,72,68),tt(104,96,90),tt(130,120,112),tt(50,46,44)],p:{crater:1,bump:1}},info:"Procedural surface"},deimos:{look:{kind:"proc",style:"rock",colors:[tt(92,84,76),tt(120,110,100),tt(146,136,124),tt(64,58,52)],p:{crater:.6,bump:.8}},info:"Procedural surface"},io:{look:{kind:"proc",style:"io",colors:[tt(196,180,112),tt(226,216,168),tt(184,98,50),tt(36,32,30)],p:{crater:0,bump:.25,spot:.9}},info:"Procedural surface in Io colours (sulfur plains, dark calderas)"},europa:{look:{kind:"proc",style:"europa",colors:[tt(226,220,205),tt(246,244,238),tt(150,100,72),tt(196,180,150)],p:{crater:.03,bump:.12,ice:1,stripe:.9}},info:"Procedural surface (ice shell with reddish linea)"},ganymede:{look:{kind:"proc",style:"ganymede",colors:[tt(104,94,84),tt(150,142,132),tt(210,208,202),tt(70,64,58)],p:{crater:.7,bump:.55,ice:.6,stripe:.4}},info:"Procedural surface (dark ancient terrain + bright grooved terrain)"},callisto:{look:{kind:"proc",style:"rock",colors:[tt(70,60,52),tt(98,86,74),tt(190,188,184),tt(44,38,34)],p:{crater:1,bump:.8,ice:.15}},info:"Procedural surface (saturated cratering)"},mimas:{look:{kind:"proc",style:"ice",colors:[tt(150,152,154),tt(182,184,186),tt(208,210,212),tt(110,112,114)],p:{crater:1,bump:.8,bigCrater:1}},info:"Procedural surface (with a Herschel-like giant crater)"},enceladus:{look:{kind:"proc",style:"ice",colors:[tt(238,242,246),tt(252,253,254),tt(214,224,236),tt(190,205,222)],p:{crater:.25,bump:.2,ice:1,stripe:.6}},info:"Procedural surface (very bright ice)"},tethys:{look:{kind:"proc",style:"ice",colors:[tt(190,192,194),tt(220,222,224),tt(238,240,242),tt(150,152,154)],p:{crater:.8,bump:.6}},info:"Procedural surface"},dione:{look:{kind:"proc",style:"ice",colors:[tt(184,186,188),tt(214,216,218),tt(236,238,240),tt(140,142,144)],p:{crater:.7,bump:.55,stripe:.3}},info:"Procedural surface"},rhea:{look:{kind:"proc",style:"ice",colors:[tt(176,178,180),tt(206,208,210),tt(230,232,234),tt(130,132,134)],p:{crater:.95,bump:.7}},info:"Procedural surface"},iapetus:{look:{kind:"proc",style:"iapetus",colors:[tt(38,30,26),tt(70,60,54),tt(226,226,224),tt(190,190,188)],p:{crater:.8,bump:.6}},info:"Procedural surface (two-tone: dark leading hemisphere)"},titan:{look:{kind:"proc",style:"haze",colors:[tt(196,128,52),tt(220,160,78),tt(168,100,40),tt(120,70,30)],p:{bump:0,bands:.15}},atmosphere:{hKm:40,topKm:400,rayleigh:[.003,.006,.014],mie:.04,mieG:.55,mieH:45,tint:[1,.62,.22],strength:1.5,opaque:!0},info:"Thick orange haze (surface not visible), procedural shading"},miranda:{look:{kind:"proc",style:"ice",colors:[tt(150,150,152),tt(180,180,182),tt(206,206,208),tt(104,104,106)],p:{crater:.6,bump:.9,stripe:.5}},info:"Procedural surface"},ariel:{look:{kind:"proc",style:"ice",colors:[tt(160,160,160),tt(190,190,190),tt(214,214,214),tt(120,120,120)],p:{crater:.5,bump:.6,stripe:.5}},info:"Procedural surface"},umbriel:{look:{kind:"proc",style:"rock",colors:[tt(78,78,80),tt(98,98,100),tt(150,150,152),tt(54,54,56)],p:{crater:.9,bump:.6}},info:"Procedural surface"},titania:{look:{kind:"proc",style:"ice",colors:[tt(128,120,112),tt(158,150,142),tt(190,184,176),tt(92,86,80)],p:{crater:.7,bump:.6,stripe:.25}},info:"Procedural surface"},oberon:{look:{kind:"proc",style:"rock",colors:[tt(112,102,96),tt(140,130,122),tt(186,178,170),tt(78,70,66)],p:{crater:.9,bump:.7}},info:"Procedural surface"},triton:{look:{kind:"proc",style:"triton",colors:[tt(214,186,170),tt(238,220,206),tt(246,238,232),tt(150,118,104)],p:{crater:.1,bump:.3,ice:.7}},atmosphere:{hKm:8,topKm:800,rayleigh:[1e-6,2e-6,5e-6],mie:3e-6,mieG:.8,mieH:10,tint:[.8,.85,1],strength:.6},info:"Procedural surface (pink-cream nitrogen frost)"},proteus:{look:{kind:"proc",style:"rock",colors:[tt(70,68,66),tt(92,90,88),tt(120,118,114),tt(46,44,42)],p:{crater:1,bump:.9}},info:"Procedural surface"},charon:{look:{kind:"proc",style:"charon",colors:[tt(150,146,142),tt(184,180,176),tt(120,70,56),tt(210,208,204)],p:{crater:.4,bump:.4}},info:"Procedural surface (grey with a reddish polar cap)"}};function qh(s,t,e){let n=new bs({id:"sol",name:"Solar System",kind:"solar",fictional:!1,originPc:[0,0,0],starIndices:[s.sunIndex]}),i=new Map;for(let a of t.bodies){let l=Wh[a.id]||{},c={id:a.id,name:a.name,kind:a.kind,radiusKm:a.R,gm:a.GM,albedo:a.albedo??l.albedo??.3,pole:Gh(a.pole[0],a.pole[1]),look:l.look||null,atmosphere:l.atmosphere||null,rings:a.rings?a.rings.map(f=>({r0:f.r0,r1:f.r1,tau:f.tau,name:f.name})):null,info:l.info||"",source:"NASA/JPL",dataSrc:a.src};if(a.rings&&(c.rings=a.rings.map(f=>({r0:f.r0,r1:f.r1,tau:f.tau,name:f.name}))),a.id==="sun"){let f=new dn({...c,kind:"star",teff:5772,lumSun:1,lumV:1,absMagV:4.83,massSun:1,letter:"G",lc:0,color:[1.04,.98,.9],fixed:[0,0,0],traits:null,spin:Xh(a),limb:.6,surfaceRadiance:Math.pow(10,-12.628)*Math.pow(30856775814913675e-2/a.R,2)});n.add(f),i.set("sun",f);continue}let d=a.parent==="sun"?i.get("sun"):i.get(a.parent);if(!d){console.warn("missing parent for",a.id);continue}let u;a.orbit.type==="jpl-mean"?u=new va(t.elements,a.orbit.key):u=new xi({a:a.orbit.a,e:a.orbit.e,inc:a.orbit.i,node:a.orbit.node,argp:a.orbit.argp,M0:a.orbit.M,epochJD:a.orbit.epochJD,nDegPerDay:a.orbit.nDegPerDay,frame:"ecliptic"});let h=new dn({...c,parent:d,orbit:u,spin:a.synchronous?{sync:!0}:Xh(a),synchronous:!!a.synchronous});n.add(h),i.set(a.id,h)}let r={star:0,planet:1,dwarf:2,moon:3};n.bodies.sort((a,l)=>r[a.kind]-r[l.kind]||(a.orbit?.a??0)-(l.orbit?.a??0)),n.add(new dn({id:"asteroid-belt",name:"Main asteroid belt",kind:"belt",parent:i.get("sun"),radiusKm:1,belt:{innerAu:2.1,outerAu:3.3,peakAu:2.7,thicknessAu:.35,count:26e3,tint:[.62,.56,.5],note:"representative particles, not individual catalogued asteroids"},info:"Representative belt"})),n.add(new dn({id:"kuiper-belt",name:"Kuiper belt",kind:"belt",parent:i.get("sun"),radiusKm:1,belt:{innerAu:38,outerAu:52,peakAu:43,thicknessAu:5,count:18e3,tint:[.55,.5,.48],note:"representative particles, not individual catalogued objects"},info:"Representative belt"}));let o=i.get("sun");return o.lumSun=1,o.massSun=1,o.traitsLike={teff:5772,lumSun:1,radiusKm:o.radiusKm,letter:"G",massSun:1,lc:0},n.hz={inner:.95,outer:1.67},n.frostAu=2.7,n}function Xh(s){if(s.w)return{w0:s.w[0],rateDegDay:s.w[1]};let t=s.rotH?s.rotH:24;return{w0:0,rateDegDay:360/Math.abs(t)*24*Math.sign(t)}}var Gl=398600.435436,Fi=6371;var ot=(s,t,e)=>[s/255,t/255,e/255];function ya(s){if(s<2.04)return Math.pow(s,.279);let t=.808*Math.pow(s,.589),e=11.2*Math.pow(s/318,-.04);return Math.min(t,e)}function $h(s){return s<1.2?Math.pow(s,1/.279):s<8?Math.pow(s/.808,1/.589):318*Math.pow(Math.max(s,8)/11.2,1.5)}function Yh(s,t){return t>=8||s>=100?"gas":t>=3.2||s>=17?"ice":t>=1.7||s>=5.5?"subneptune":s<.02?"dwarf":"rocky"}var xa={desert:[ot(176,138,96),ot(210,178,128),ot(236,214,170),ot(120,88,62)],rust:[ot(150,82,52),ot(190,112,72),ot(224,160,116),ot(96,52,36)],grey:[ot(104,100,96),ot(140,136,130),ot(176,172,166),ot(66,64,62)],basalt:[ot(58,52,50),ot(86,78,74),ot(124,112,104),ot(32,28,28)],olive:[ot(98,96,62),ot(132,126,84),ot(170,160,112),ot(64,62,40)],violet:[ot(92,78,96),ot(126,108,130),ot(166,148,168),ot(58,48,62)],ice:[ot(206,220,232),ot(236,244,250),ot(255,255,255),ot(150,176,204)],lava:[ot(38,28,26),ot(66,44,38),ot(150,56,20),ot(255,140,40)],venus:[ot(210,170,110),ot(232,204,150),ot(246,232,190),ot(180,130,80)]};function Wl(s,t){let e=tn(Qe(t.seed,24301)),n={look:null,atmosphere:null,rings:null,label:""},i=t.teq,r=e()*100;if(s==="gas"||s==="ice"){let p,v,g,m,x,_=!1;s==="gas"?i>1500?(p=[ot(40,30,40),ot(110,50,70),ot(190,80,60),ot(30,22,34)],v="ultra-hot gas giant",g=[1,.5,.4],m=.25,x=.5):i>900?(p=[ot(30,34,52),ot(52,62,96),ot(86,100,150),ot(20,24,36)],v="hot gas giant",g=[.5,.65,1],m=.3,x=.45):i>400?(p=$g(e,[[182,150,120],[222,196,160],[140,110,90],[244,232,210]]),v="warm gas giant",g=[.9,.9,1],m=.6,x=.6):i>160?(p=e()<.5?[ot(176,130,96),ot(222,190,150),ot(120,86,66),ot(242,228,206)]:[ot(190,160,120),ot(226,204,164),ot(150,122,92),ot(246,238,216)],v="cool gas giant",g=[1,.95,.85],m=.85,x=.7):(p=[ot(196,176,136),ot(224,208,170),ot(168,148,116),ot(240,232,208)],v="cold gas giant",g=[1,.93,.78],m=.55,x=.4):(p=i>400?[ot(70,110,170),ot(100,150,205),ot(150,190,230),ot(50,80,130)]:e()<.5?[ot(120,190,205),ot(160,218,228),ot(196,238,244),ot(90,150,170)]:[ot(50,80,190),ot(70,110,215),ot(120,156,235),ot(36,56,140)],v="ice giant",g=[.7,.85,1],m=.18,x=.35),n.look={kind:"proc",style:"gas",colors:p,p:{bands:m,turb:x,spot:e()<.5?.8:.2,seed:r}},n.atmosphere={hKm:24+e()*40,topKm:300,rayleigh:[Math.max(.002,.006*(1.1-g[0]*.6)),.0045,.0065*(.5+g[2]*.7)],mie:5e-4,mieG:.5,mieH:25,tint:g,strength:1},n.label=v;let y=t.ringChance??.18;return e()<y&&i<900&&(n.rings=Yg(e,s)),n}let o=i>700,a=i>330,l=i>235,c=i>120,d=t.mE>3.5||t.mE>.55&&e()<.4;if(s==="subneptune"){let p=o?[ot(120,90,80),ot(170,130,110),ot(210,180,160),ot(80,60,56)]:e()<.5?[ot(170,190,200),ot(200,216,224),ot(226,236,240),ot(130,154,168)]:[ot(190,176,150),ot(220,206,180),ot(238,228,206),ot(150,136,112)];return n.look={kind:"proc",style:"gas",colors:p,p:{bands:.12,turb:.3,spot:.1,seed:r}},n.atmosphere={hKm:30,topKm:220,rayleigh:[.0025,.0045,.008],mie:.001,mieG:.5,mieH:20,tint:[.9,.95,1],strength:1},n.label=o?"hot sub-Neptune":"sub-Neptune / mini-Neptune",n}if(s==="dwarf")return n.look={kind:"proc",style:e()<.5?"rock":"ice",colors:Kh(xa[c?e()<.5?"ice":"rust":"grey"],e),p:{crater:.4+e()*.4,bump:.5,ice:c?.8:.1}},n.label=c?"icy dwarf planet":"rocky dwarf planet",n;if(o&&i>1200)return n.look={kind:"proc",style:"lava",colors:xa.lava,p:{crater:.1,bump:.5,lava:1,seed:r}},n.label="molten lava world",d&&(n.atmosphere={hKm:12,topKm:60,rayleigh:[.003,.003,.004],mie:.01,mieG:.6,mieH:10,tint:[1,.55,.3],strength:.6}),n;if(t.inHz&&t.mE>.4&&t.mE<4&&e()<.62){let p=.45+e()*.4;return n.look={kind:"proc",style:"ocean",colors:[ot(18,52,110),ot(54,110,66),ot(160,138,96),ot(240,244,248)],p:{ocean:p,cloud:.45+e()*.3,ice:.25+e()*.4,bump:.15,seed:r,spec:.6}},n.atmosphere={hKm:8.5,topKm:100,rayleigh:[.0058,.0135,.0331],mie:.003,mieG:.76,mieH:1.8,tint:[1,1,1],strength:1},n.label="temperate ocean-continent world",n}let u;o?u=e()<.6?"basalt":"venus":a?u=e()<.5?"venus":"desert":l?u="desert":c?u=e()<.55?"rust":"grey":u="ice",!o&&!c&&e()<.3&&(u=["olive","violet","grey","rust"][Math.floor(e()*4)]);let h=Kh(xa[u],e);if(d&&a&&t.mE>.5&&(u==="venus"||e()<.4))return n.look={kind:"proc",style:"gas",colors:xa.venus,p:{bands:.1,turb:.5,spot:0,seed:r}},n.atmosphere={hKm:15,topKm:70,rayleigh:[.001,.0018,.0035],mie:.06,mieG:.4,mieH:12,tint:[1,.92,.72],strength:1.5,opaque:!0},n.label="cloud-wrapped greenhouse world",n;if(n.look={kind:"proc",style:u==="ice"?"ice":"rock",colors:h,p:{crater:d?.35:.8,bump:d?.5:.8,ice:u==="ice"?.9:c?.35:0,seed:r}},d&&t.mE>.25){let p=bt(t.mE/1.5,.15,1.6);n.atmosphere={hKm:9,topKm:90,rayleigh:[.0058*p,.0135*p,.0331*p],mie:.002*p,mieG:.7,mieH:3,tint:u==="rust"?[1,.75,.55]:[1,1,1],strength:.8}}return n.label={desert:"arid desert world",rust:"cold rust-red world",grey:"airless rocky world",basalt:"scorched basalt world",olive:"olive-grey rocky world",violet:"violet-grey rocky world",ice:"frozen ice world",venus:"hot dry world"}[u]+(n.atmosphere?" with atmosphere":""),n}function $g(s,t){return t.map(([e,n,i])=>ot(bt(e+(s()-.5)*36,0,255),bt(n+(s()-.5)*30,0,255),bt(i+(s()-.5)*30,0,255)))}function Kh(s,t){let e=.9+t()*.2,n=(t()-.5)*.06,i=(t()-.5)*.06;return s.map(([r,o,a])=>[bt(r*e+n,0,1),bt(o*e,0,1),bt(a*e+i,0,1)])}function Yg(s,t){let e=1.35+s()*.5,n=e+.35+s()*.9,i=s()<.4;return[{r0:e,r1:e+(n-e)*.35,tau:.15+s()*.2,relative:!0},{r0:e+(n-e)*.4,r1:n,tau:i?.1:.6+s()*.5,relative:!0}]}var Zg=66743e-24,Jg=317.83;function jg(s,t,e,n,i){let r=e.letter==="M"?.12:e.letter==="K"?.6:1,o=e.lc===be.WD,a=[];return s<.5?(a.push(["rocky",.62],["subneptune",i?.38:.26]),!i&&(e.letter==="G"||e.letter==="F")&&s>.04&&a.push(["gas",.03])):s<1.6?a.push(["rocky",.34],["subneptune",.28],["gas",.3*n.gasGiantChanceBeyondFrost*r],["ice",.12]):a.push(["gas",n.gasGiantChanceBeyondFrost*r],["ice",n.iceGiantChance*(e.letter==="M"?.7:1)],["dwarf",.22],["subneptune",.1],["rocky",.08]),t.weighted(a)}function Qg(s,t,e,n){switch(s){case"rocky":return t()<.28?t.logUniform(1.4,7):t.logUniform(.05,1.6);case"subneptune":return t.logUniform(4.5,18);case"ice":return t.logUniform(12,36);case"gas":return t.logUniform(.18,4.5)*Jg;case"dwarf":return t.logUniform(4e-4,.018);default:return 1}}function tv(s,t,e,n,i){let r=(e+n)*30035e-10/i,o=Math.cbrt(r/3)*.5*(s+t);return(t-s)/o}function Zh(s,t,e,n){let i=s.lumSun,r=s.massSun,o=s.radiusKm/zt,a=e.frostLineAuAtSolarLum*Math.sqrt(i),l=qs(i,s.teff),c=s.lc===be.III||s.lc===be.II||s.lc===be.I,d=s.lc===be.WD,u=Math.max(.011,.034*Math.sqrt(i)*.8,3.5*o),h=Math.min(n,38*Math.pow(Math.max(r,.08),.75)+1.5);c&&(h=Math.min(h,n));let f=s.letter==="M"?t()<e.mDwarfCompactProbability:t()<.25,p;d?p=t.int(0,2):c||s.letter==="O"||s.letter==="B"?p=t.int(0,3):s.letter==="M"?p=f?t.int(3,7):t.int(1,4):p=t.int(e.planetCount.min,e.planetCount.max);let v=c||d?Math.max(u,1.5+.8*o):u,g=[],m=f?v*t.range(1.15,2.4):t.logUniform(v*1.4,Math.max(v*4,Math.min(1.2*l.inner,h*.3)));m=Math.max(m,v);for(let E=0;E<p&&!(m>h);E++){let T=jg(m/a,t,s,e,f),A=Qg(T,t,m,s);if(g.length){let S=g[g.length-1],b=0;for(;tv(S.a,m,S.mE,A,r)<e.spacing.hillSpacingMin&&b++<200;)m*=1.06;if(m>h)break}g.push({a:m,cls:T,mE:A});let C=f?t.range(1.25,2):t.range(e.spacing.periodRatioMin,e.spacing.periodRatioMax);m*=Math.pow(C,2/3)*(T==="gas"?t.range(1.15,1.6):1)}let x=[],_=g.find(E=>E.cls==="gas"&&E.a>.8*a);if(_&&t()<e.beltChance&&!f){let E=_.a/t.range(2.3,3.1),T=E*.82,A=E*1.28;for(let C=g.length-1;C>=0;C--)g[C].a>T*.92&&g[C].a<A*1.08&&g.splice(C,1);E>u*2&&E<a*1.3&&x.push({kind:"asteroid",inner:T,outer:A,peak:E})}let y=g[g.length-1];if(y&&t()<e.kuiperBeltChance&&y.a*1.7<n){let E=y.a*t.range(1.7,2.6);E<n&&x.push({kind:"kuiper",inner:E*.78,outer:E*1.3,peak:E})}return{planets:g,belts:x,hz:l,frostAu:a,compact:f}}function Jh(s,t,e,n,i,r,o){let a=[],l=0;if(s.cls==="gas"||s.cls==="ice"?l=t.int(e.moonsPerGiant[0],e.moonsPerGiant[1]):s.cls==="rocky"&&t()<e.moonChanceTerrestrial&&s.mE>.2&&(l=1),!l)return a;let c=i*(s.cls==="rocky"?t.range(12,60):t.range(3,7)),d=s.a>n*.8;for(let u=0;u<l&&!(c>o*.33);u++){let h=s.cls==="rocky"?i*.3:2800,f=bt(t.logUniform(120,h),80,h),p=d?t.range(1.1,2.4):t.range(2.8,3.6),v=4/3*Math.PI*Math.pow(f*1e3,3)*p*1e3;a.push({aKm:c,rKm:f,gm:Zg*v,rho:p,iced:d,volcanic:!d&&s.cls!=="rocky"&&u===0&&t()<.4}),c*=t.range(1.45,2.3)}return a}var _a=13271244004194e-2,ev=["I","II","III","IV","V","VI","VII","VIII","IX","X"],nv="bcdefghijklmnop";function jh(s,t,e){let n=s.d.hip[t],i=n?`HIP${n}`:`P${Math.round(s.pos[t*3]*100)},${Math.round(s.pos[t*3+1]*100)},${Math.round(s.pos[t*3+2]*100)}`;return Qe(e.sim.seed>>>0,ei(i))}function Qh(s){let t=s.range(-1,1),e=s.range(0,Be),n=Math.sqrt(1-t*t),i=[n*Math.cos(e),n*Math.sin(e),t],r=kn(i),o=je(i,r);return[r[0],o[0],i[0],r[1],o[1],i[1],r[2],o[2],i[2]]}function iv(s,t,e,n,i,r){let o=s.traits(t),{teff:a,lumSun:l,radiusKm:c,massSun:d}=o,u="";i&&(i.teff||i.rad||i.mass)&&(i.teff&&(a=i.teff),i.rad&&(c=i.rad*695700),i.mass&&(d=i.mass),i.logL!=null?l=Math.pow(10,i.logL):i.rad&&i.teff&&(l=i.rad*i.rad*Math.pow(i.teff/5772,4)),u=" (stellar parameters from NASA Exoplanet Archive)");let h=tn(Qe(jh(s,t,n),77)),f=s.info(t),p=s.d.absMag[t];i&&(i.teff||i.rad)&&(p=4.74-2.5*Math.log10(l)-Ol(a));let v=Math.pow(10,-.4*(p-4.83)),g=Math.pow(10,-.4*(p+26.74))*Math.pow(3085677581491367e-2*10/c,2);return new dn({id:`star-${t}`,name:s.name(t),kind:"star",radiusKm:c,gm:d*_a,teff:a,lumSun:l,massSun:d,lc:o.lc,letter:o.letter,color:Di(a),fixed:e,catalogIndex:t,absMagV:p,lumV:v,surfaceRadiance:g,limb:a>6500?.45:a>4500?.6:.7,pole:fe([h.range(-1,1),h.range(-1,1),h.range(-1,1)]),spin:{w0:h.range(0,360),rateDegDay:360/h.range(3,30)},look:{kind:"star"},info:`${s.spectralText(t)} \xB7 ${Math.round(a)} K \xB7 ${l>=100?l.toFixed(0):l>=1?l.toFixed(1):l.toPrecision(2)} L\u2609${u}`,source:"catalogue",designation:s.designation(t),isPrimary:r})}function tu(s,t,e){if(e)return{sync:!0};let n=t==="gas"||t==="ice"?s.range(8,20):s.range(8,60);return{w0:s.range(0,360),rateDegDay:360/n*24*(s()<.93?1:-1)}}function eu(s,t,e){let n=s.range(0,e)*Kt,i=kn(t),r=Ys(t,i,n);return Ys(r,t,s.range(0,Be))}function nu(s,t,e){let n=t.primary,i=s.posOf(n),r=new bs({id:`star:${t.key}`,name:t.name,kind:"procedural",originPc:i,starIndices:t.members.slice(),catalogKey:t.key}),o=[];t.members.forEach((u,h)=>{let f=s.posOf(u),p=[(f[0]-i[0])*ie,(f[1]-i[1])*ie,(f[2]-i[2])*ie],v=iv(s,u,p,e,s.host(u),h===0);r.add(v),o.push(v)}),o.length>1&&o.forEach((u,h)=>{u.name=`${t.name} ${String.fromCharCode(65+h)}`});let a=o[0];if(r.heliopauseKm=s.heliopauseKm(n),o.length>1){let u=0;for(let h of o){let f=ua({lumSun:h.lumSun,radiusSun:h.radiusKm/695700,teff:h.teff,letter:h.letter,lc:h.lc},e,h.name);u+=f*f}r.heliopauseKm=Math.sqrt(u)}let l=qs(a.lumSun,a.teff);r.hz=l,r.frostAu=e.procgen.frostLineAuAtSolarLum*Math.sqrt(a.lumSun),r.hasKnownPlanets=!1,r.hasFictionalPlanets=!1;let c=!1;o.forEach((u,h)=>{let f=u.catalogIndex,p=s.host(f),v=500;for(let m of o)if(m!==u){let x=Math.hypot(m.fixed[0]-u.fixed[0],m.fixed[1]-u.fixed[1],m.fixed[2]-u.fixed[2])/zt;v=Math.min(v,x/3)}let g=jh(s,f,e);p&&p.planets.length?(sv(r,u,p,g,e,t.name),c=!0):e.procgen.enabled&&rv(r,u,g,e,v,o.length>1?String.fromCharCode(65+h):"",t.name)}),r.hasKnownPlanets=c,r.kind=c?"known":"procedural",r.fictional=!c;let d={star:0,planet:1,dwarf:2,moon:3,belt:4};return r}function sv(s,t,e,n,i,r){let o=tn(Qe(n,31)),a=Qh(o),l=e.planets.slice().sort((c,d)=>(c.a??c.per??1e9)-(d.a??d.per??1e9));for(let c of l){let d=[],u=t.massSun,h=c.a;!h&&c.per&&(h=Math.cbrt(_a*u*Math.pow(c.per*86400,2)/(4*Math.PI*Math.PI))/zt,d.push("a from period")),h||(h=.1,d.push("a unknown (placeholder)"));let f=c.m,p=c.r;!f&&p&&(f=$h(p),d.push("mass")),!p&&f&&(p=ya(f),d.push("radius")),!f&&!p&&(f=5,p=ya(5),d.push("mass"),d.push("radius"));let v=c.e;v==null&&(v=0,d.push("e"));let g=tn(Qe(n,ei(c.name))),m=Yh(f,p),x=t.lumSun,_=c.teq||da(x,h,.3),y=qs(x,t.teff),E=Wl(m,{teq:_,mE:f,rE:p,inHz:h>=y.inner*.97&&h<=y.outer*1.03,aAu:h,seed:Qe(n,ei(c.name)),ringChance:.08}),T=Math.sqrt(_a*u/Math.pow(h*zt,3))*86400/Kt,A=g.range(0,2.5),C=Be/(T*Kt),S=C<25,b=new xi({a:h*zt,e:v,inc:Math.min(A,8),node:g.range(0,360),argp:c.w??g.range(0,360),M0:g.range(0,360),epochJD:_s,nDegPerDay:T,plane:a}),P=fe(je([a[0],a[3],a[6]],[a[1],a[4],a[7]])),U=new dn({id:`planet-${c.name.replace(/\s+/g,"-")}`,name:c.name,kind:m==="dwarf"?"dwarf":"planet",parent:t,orbit:b,radiusKm:p*Fi,gm:f*Gl,albedo:.3,pole:S?[a[2],a[5],a[8]]:eu(g,[a[2],a[5],a[8]],35),spin:tu(g,m,S),synchronous:S,look:E.look,atmosphere:E.atmosphere,rings:E.rings?E.rings.map(F=>({r0:F.r0*p*Fi,r1:F.r1*p*Fi,tau:F.tau})):null,fictional:!1,source:"NASA Exoplanet Archive",meta:{cls:m,mE:f,rE:p,teq:_,aAu:h,e:v,periodDays:C,method:c.meth,year:c.yr,est:d,label:E.label,confirmed:!0},info:`CONFIRMED planet \xB7 ${c.meth||"detected"}${c.yr?", "+c.yr:""} \xB7 ${E.label} (appearance is an artist's rendering \u2014 the archive has no imagery)`+(d.length?` \xB7 estimated: ${d.join(", ")}`:"")});s.add(U),E.rings&&(U.rings=E.rings.map(F=>({r0:F.r0*U.radiusKm,r1:F.r1*U.radiusKm,tau:F.tau})))}}function rv(s,t,e,n,i,r,o){let a=n.procgen,l=tn(Qe(e,11)),c={lumSun:t.lumSun,massSun:t.massSun,teff:t.teff,radiusKm:t.radiusKm,letter:t.letter,lc:t.lc},d=Zh(c,l,a,i),u=Qh(l),h=d.hz,f=r?`${o} ${r}`:o;d.planets.forEach((p,v)=>{let g=`${f} ${nv[v]||"z"+v}`,m=tn(Qe(e,1e3+v)),x=p.mE,_=ya(x),y=Math.min(.55,Math.abs(m.normal())*a.eccentricitySigma*(d.compact?.5:1)),E=da(c.lumSun,p.a,.3),T=Wl(p.cls,{teq:E,mE:x,rE:_,inHz:p.a>=h.inner*.97&&p.a<=h.outer*1.03,aAu:p.a,seed:Qe(e,5e3+v),ringChance:a.ringChanceGiant}),A=Math.sqrt(_a*c.massSun/Math.pow(p.a*zt,3))*86400/Kt,C=360/A,S=C<20||c.letter==="M"&&C<60,b=new xi({a:p.a*zt,e:y,inc:Math.abs(m.normal())*a.inclinationSigmaDeg,node:m.range(0,360),argp:m.range(0,360),M0:m.range(0,360),epochJD:_s,nDegPerDay:A,plane:u}),P=p.cls==="dwarf"?"dwarf":"planet",U=S?[u[2],u[5],u[8]]:eu(m,[u[2],u[5],u[8]],p.cls==="gas"?30:45),F=new dn({id:`${t.id}-p${v}`,name:g,kind:P,parent:t,orbit:b,radiusKm:_*Fi,gm:x*Gl,albedo:.3,pole:U,spin:tu(m,p.cls,S),synchronous:S,look:T.look,atmosphere:T.atmosphere,rings:T.rings?T.rings.map(L=>({r0:L.r0*_*Fi,r1:L.r1*_*Fi,tau:L.tau})):null,fictional:!0,source:"procedural (FICTIONAL)",meta:{cls:p.cls,mE:x,rE:_,teq:E,aAu:p.a,e:y,periodDays:C,label:T.label,confirmed:!1,inHz:p.a>=h.inner&&p.a<=h.outer},info:`FICTIONAL planet \u2014 procedurally generated \xB7 ${T.label}`});s.add(F);let N=F.hillKm;Jh({cls:p.cls,mE:x,a:p.a},m,a,d.frostAu,F.radiusKm,F.gm,N).forEach((L,q)=>{let O=tn(Qe(e,9e4+v*31+q)),Z=L.iced?"ice-moon":"rock-moon",et=Math.sqrt(F.gm/L.aKm**3)*86400/Kt,ht=L.volcanic?{kind:"proc",style:"io",colors:[[.9,.8,.35],[.98,.92,.55],[.85,.38,.16],[.16,.13,.12]],p:{crater:0,bump:.25,spot:.9}}:L.iced?{kind:"proc",style:O()<.5?"ice":"europa",colors:[[.82+O()*.15,.82+O()*.14,.84+O()*.12],[.94,.95,.96],[.62,.5,.42],[.55,.58,.64]],p:{crater:O(),bump:.5,ice:1,stripe:O()*.8}}:{kind:"proc",style:"rock",colors:[[.36+O()*.1,.33+O()*.08,.3],[.5+O()*.1,.47,.42],[.66,.62,.58],[.2,.19,.18]],p:{crater:.6+O()*.4,bump:.8}},Ut=new dn({id:`${F.id}-m${q}`,name:`${g} ${ev[q]||q+1}`,kind:"moon",parent:F,orbit:new xi({a:L.aKm,e:Math.abs(O.normal())*.01,inc:Math.abs(O.normal())*2,node:O.range(0,360),argp:O.range(0,360),M0:O.range(0,360),epochJD:_s,nDegPerDay:et,plane:av(F.pole)}),radiusKm:L.rKm,gm:L.gm,albedo:L.iced?.6:.12,pole:F.pole,spin:{sync:!0},synchronous:!0,look:ht,fictional:!0,source:"procedural (FICTIONAL)",meta:{cls:Z,label:L.volcanic?"volcanic moon":L.iced?"icy moon":"rocky moon"},info:`FICTIONAL moon \u2014 procedurally generated (${L.volcanic?"volcanic":L.iced?"icy":"rocky"})`});s.add(Ut)})}),d.belts.forEach((p,v)=>{let g=p.kind==="asteroid",m=p.outer-p.inner;s.add(new dn({id:`${t.id}-belt${v}`,name:`${f} ${g?"asteroid belt":"outer debris belt"}`,kind:"belt",parent:t,radiusKm:1,fictional:!0,source:"procedural (FICTIONAL)",belt:{innerAu:p.inner,outerAu:p.outer,peakAu:p.peak,thicknessAu:m*(g?.12:.2),count:g?22e3:16e3,tint:g?[.62,.56,.5]:[.56,.58,.62],note:"procedural, FICTIONAL"},plane:u,info:"FICTIONAL belt \u2014 procedurally generated"}))}),t.systemPlane=u}function av(s){let t=fe(s),e=kn(t),n=je(t,e);return[e[0],n[0],t[0],e[1],n[1],t[1],e[2],n[2],t[2]]}var Ma=class{constructor(t,e){this.data=t,this.cfg=e,this.cat=new fa(t,e),this.systems=new Map,this.solar=qh(this.cat,t.ephemeris,e),this.solar.heliopauseKm=this.cat.heliopauseKm(this.cat.sunIndex),this.solar.heliopauseKm=e.heliopause.sunAu*zt,this.solar.catalogKey=this.cat.sunIndex,this.solar.starIndices=[this.cat.sunIndex],this.systems.set(this.cat.sunIndex,this.solar),this._hpCache=new Map}systemForGroup(t){if(t.members.includes(this.cat.sunIndex))return this.solar;let e=this.systems.get(t.key);return e||(e=nu(this.cat,t,this.cfg),this.systems.set(t.key,e)),e}destinationsNear(t,e){let n=this.cfg.destinations;return this.cat.systemsNear(t,(e??n.radiusLy)*kl,n.groupAu).map(r=>({group:r,name:r.name,distLy:r.distPc*Ws,known:r.members.some(o=>this.cat.hasKnownPlanets(o)),stars:r.members.length}))}heliopauseOfStar(t){let e=this._hpCache.get(t);return e===void 0&&(e=t===this.cat.sunIndex?this.cfg.heliopause.sunAu*zt:this.cat.heliopauseKm(t),this._hpCache.set(t,e)),e}starsNearPc(t,e){return this.cat.within(t,e)}nextBoundary(t,e,n,i){let r=n/ie+.25,o=this.cat.within(t,r+.2),a=null,l=null;for(let c of o){let d=this.heliopauseOfStar(c)/ie,u=this.cat.pos[c*3]-t[0],h=this.cat.pos[c*3+1]-t[1],f=this.cat.pos[c*3+2]-t[2],p=u*u+h*h+f*f;if(p<d*d){(!l||p<l.cc)&&(l={star:c,cc:p,radiusKm:d*ie});continue}let v=u*e[0]+h*e[1]+f*e[2];if(v<=0)continue;let g=p-v*v;if(g>=d*d)continue;let m=(v-Math.sqrt(d*d-g))*ie;(!a||m<a.distKm)&&(a={distKm:m,star:c,radiusKm:d*ie})}return{ahead:a,inside:l}}};var qe=`
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
`;var iu=`
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
`,su=`
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
`,ru=`
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
`,au=`
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
`,ou=`
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
`,lu=`
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
`;var cu=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,hu=`
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
`,uu=`
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
`,du=`
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
`,fu=`
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
`,pu=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
void main() { gl_FragColor = vec4(texture2D(tSrc, vUv).rgb, 1.0); }
`;var ql=Math.log(1e3),mu=Math.log(6e4),ba=class{constructor(t,e,n){this.cfg=e,this.data=n,this.canvas=t;let i=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0,preserveDrawingBuffer:!0});if(!i)throw new Error("WebGL2 is required.");this.renderer=new $r({canvas:t,context:i,antialias:!1,logarithmicDepthBuffer:!0}),this.renderer.autoClear=!1,this.renderer.outputColorSpace=Qn,this.renderer.toneMapping=In,this.renderer.shadowMap.enabled=!!e.visuals.ship.shadows,this.renderer.shadowMap.type=Tl,this.maxTex=this.renderer.capabilities.maxTextureSize,this.renderScale=e.visuals.renderScale,this.fsGeo=new ye,this.fsGeo.setAttribute("position",new de(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.fsMesh=new It(this.fsGeo,null),this.fsMesh.frustumCulled=!1,this.fsScene=new Un,this.fsScene.add(this.fsMesh),this.fsCam=new fs(-1,1,1,-1,0,1),this.skyScene=new Un,this.camera=new Ne(e.camera.fovDeg,1,e.camera.near,e.camera.far),this.time=0,this._buildColorLUT(),this._buildStars(),this._buildSky(),this._buildMwModel(),this._buildGalaxies(),this._buildPost(),this.resize()}_buildColorLUT(){let e=new Uint16Array(1024);for(let i=0;i<256;i++){let r=Math.exp(ql+i/255*(mu-ql)),o=Di(r);e[i*4]=ti.toHalfFloat(o[0]),e[i*4+1]=ti.toHalfFloat(o[1]),e[i*4+2]=ti.toHalfFloat(o[2]),e[i*4+3]=ti.toHalfFloat(1)}let n=new pi(e,256,1,De,Nn);n.minFilter=n.magFilter=ke,n.needsUpdate=!0,n.generateMipmaps=!1,this.colorLUT=n}_buildStars(){let t=this.data,e=t.n,n=new xs;n.setAttribute("position",new de(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),n.setIndex([0,1,2,0,2,3]);let i=new Float32Array(e*3),r=new Float32Array(e*2);for(let o=0;o<e;o++)i[o*3]=t.pos[o*3],i[o*3+1]=t.pos[o*3+1],i[o*3+2]=t.pos[o*3+2],r[o*2]=t.absMag[o],r[o*2+1]=Math.log(t.teff[o]);n.setAttribute("aPos",new mi(i,3)),n.setAttribute("aPhys",new mi(r,2)),n.instanceCount=e,this.starUniforms={uCamHi:{value:new I},uCamLo:{value:new I},uView:{value:new Dt},uRes:{value:new Ct(1,1)},uFocalPx:{value:1e3},uBeta:{value:new I},uGamma:{value:1},uExposure:{value:1},uMagLimit:{value:10},uBrightness:{value:1},uSigma:{value:.62},uHalo:{value:1},uHaloAmt:{value:4e-4},uHaloW:{value:4},uSat:{value:1},uBlue:{value:1},uColorLUT:{value:this.colorLUT},uLnTmin:{value:ql},uLnTmax:{value:mu},uWarpDir:{value:new I(0,0,-1)},uWarpBeta:{value:0},uWarpGamma:{value:1},uStreak:{value:0},uWarpDim:{value:0},uBeam:{value:2},uHide:{value:new Array(8).fill(-1)}},this.starMat=new oe({vertexShader:iu,fragmentShader:su,uniforms:this.starUniforms,transparent:!0,depthTest:!1,depthWrite:!1,blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:Ce}),this.starMesh=new It(n,this.starMat),this.starMesh.frustumCulled=!1,this.starMesh.renderOrder=1,this.skyScene.add(this.starMesh)}_buildSky(){let t=this.data.milkyWay,e=t,n;if(t){let{width:r,height:o}=t,a=new Uint16Array(r*o*4),l=[];for(let f=0;f<r*o;f+=7)l.push(t.col[f]);l.sort((f,p)=>f-p);let c=l[l.length>>1],d=f=>t.colMin+f/65535*(t.colMax-t.colMin),u=d(c),h=this.cfg.visuals.milkyWay.colorSensitivity??2.4;for(let f=0;f<r*o;f++){let p=t.logMin+t.lum[f]/65535*(t.logMax-t.logMin),v=Math.PI*Math.pow(10,p)*1e6,g=(d(t.col[f])-u)*h,m=Math.exp(-.5*g),x=Math.exp(.5*g),_=1,y=.2126*m+.7152*_+.0722*x;m/=y,_/=y,x/=y,a[f*4]=ti.toHalfFloat(v*m),a[f*4+1]=ti.toHalfFloat(v*_),a[f*4+2]=ti.toHalfFloat(v*x),a[f*4+3]=ti.toHalfFloat(1)}n=new pi(a,r,o,De,Nn),n.wrapS=bn,n.wrapT=mn,n.minFilter=n.magFilter=ke,n.generateMipmaps=!1,n.needsUpdate=!0,this.mwInfo={integratedV:t.integratedV}}else n=new pi(new Uint16Array([0,0,0,15360]),1,1,De,Nn),n.needsUpdate=!0,console.warn("milkyway.bin not found \u2013 run: node tools/build-data.mjs --only=skymap");let i=new Dt;i.set(...Bl.flat()),this.skyUniforms={uMW:{value:n},uMWSize:{value:new Ct(e?e.width:1024,e?e.height:512)},uInvView:{value:new Dt},uToGal:{value:i},uTan:{value:new Ct(1,1)},uBeta:{value:new I},uGamma:{value:1},uWarpDir:{value:new I(0,0,-1)},uWarpBeta:{value:0},uWarpGamma:{value:1},uExposure:{value:1},uGain:{value:1},uDetail:{value:1},uGrain:{value:.5},uDust:{value:1},uBeamCap:{value:8},uMwScale:{value:1e-6},uBlue:{value:1},uModelSun:{value:null},uModelShip:{value:null},uModelOn:{value:0},uZodi:{value:0},uBeam:{value:3},uSunDirRest:{value:new I(1,0,0)},uZodiScale:{value:1}},this.skyMat=new oe({vertexShader:Xl,fragmentShader:ru,uniforms:this.skyUniforms,depthTest:!1,depthWrite:!1}),this.skyMesh=new It(this.fsGeo,this.skyMat),this.skyMesh.frustumCulled=!1,this.skyMesh.renderOrder=0,this.skyScene.add(this.skyMesh)}_buildMwModel(){let t=this.cfg.galaxyModel;this.mwModel={rtSun:this._rt(256,128),rtShip:this._rt(256,128),last:null},this.mwModelMat=new oe({vertexShader:Xl,fragmentShader:lu,depthTest:!1,depthWrite:!1,uniforms:{uOrigin:{value:new I},uDisc:{value:new jt(t.diskScaleLengthKpc,t.diskScaleHeightPc/1e3,t.bulgeRadiusKpc,14)},uDust:{value:new jt(t.dustScaleLengthKpc,t.dustScaleHeightPc/1e3,10,0)}}}),this.mwModelMesh=new It(this.fsGeo,this.mwModelMat),this._renderMwModel(this.mwModel.rtSun,[0,0,0]),this._renderMwModel(this.mwModel.rtShip,[0,0,0]),this.skyUniforms.uModelSun.value=this.mwModel.rtSun.texture,this.skyUniforms.uModelShip.value=this.mwModel.rtShip.texture}_renderMwModel(t,e){let n=this.cfg.galaxyModel,i=Bl,r=i[0][0]*e[0]+i[0][1]*e[1]+i[0][2]*e[2],o=i[1][0]*e[0]+i[1][1]*e[1]+i[1][2]*e[2],a=i[2][0]*e[0]+i[2][1]*e[1]+i[2][2]*e[2];this.mwModelMat.uniforms.uOrigin.value.set(r/1e3-n.sunRadiusKpc,o/1e3,a/1e3+n.sunHeightPc/1e3),this.fsMesh.material=this.mwModelMat,this.renderer.setRenderTarget(t),this.renderer.render(this.fsScene,this.fsCam)}updateMwModel(t){let e=this.cfg.galaxyModel,n=Math.hypot(t[0],t[1],t[2]);if(this.skyUniforms.uModelOn.value=n>20?1:0,n<=20)return;let i=this.mwModel.last;i&&Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])<e.refreshDistancePc||(this._renderMwModel(this.mwModel.rtShip,t),this.mwModel.last=t.slice())}_buildGalaxies(){this.galaxies=[];let t=new ye;t.setAttribute("position",new de(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),t.setIndex([0,1,2,0,2,3]);for(let e of this.data.galaxies){let n=Math.hypot(e.x,e.y,e.z)||1,i=new I(e.x/n,e.y/n,e.z/n),r=e.ra*Kt,o=e.dec*Kt,a=new I(-Math.sin(r),Math.cos(r),0),l=new I(-Math.sin(o)*Math.cos(r),-Math.sin(o)*Math.sin(r),Math.cos(o)),c=Math.max((e.rhArcmin||3)/60*Kt,1e-4),d=Math.min(Math.max(c*5,.006),.7),u=new oe({vertexShader:au,fragmentShader:ou,transparent:!0,depthTest:!1,depthWrite:!1,blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uView:this.starUniforms.uView,uRes:this.starUniforms.uRes,uFocalPx:this.starUniforms.uFocalPx,uBeta:this.starUniforms.uBeta,uGamma:this.starUniforms.uGamma,uWarpDir:this.starUniforms.uWarpDir,uWarpBeta:this.starUniforms.uWarpBeta,uWarpGamma:this.starUniforms.uWarpGamma,uDir:{value:i},uSizeRad:{value:d},uPA:{value:0},uEast:{value:a},uNorth:{value:l},uEll:{value:e.ell??.2},uRh:{value:c/d},uColor:{value:new I(1,.96,.9)},uPeak:{value:0},uFloor:{value:0}}}),h=e.vmag??14,f=Math.pow(10,-.4*(h+26.74)),p=c/1.68,v=f/(2*Math.PI*p*p*Math.max(1-(e.ell??.2),.15)),g=new It(t,u);g.frustumCulled=!1,g.renderOrder=.5,g.userData={g:e,I0:v,rhRad:c},u.uniforms.uPA.value=(e.pa??0)*Kt,this.skyScene.add(g),this.galaxies.push(g)}}_buildPost(){let t=(e,n)=>new oe({vertexShader:cu,fragmentShader:e,uniforms:n,depthTest:!1,depthWrite:!1});this.mats={down:t(hu,{tSrc:{value:null},uTexel:{value:new Ct},uKaris:{value:0},uCap:{value:6e4}}),up:t(uu,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new Ct},uRadius:{value:1},uMix:{value:.5}}),composite:t(du,{tScene:{value:null},tBloom:{value:null},uBloom:{value:.06},uSaturation:{value:1.05},uContrast:{value:1},uGrain:{value:.01},uVignette:{value:.2},uCA:{value:7e-4},uTime:{value:0},uRes:{value:new Ct},uFlash:{value:0},uFlashColor:{value:new I(.6,.8,1)},uFlashPos:{value:new Ct(.5,.5)}}),lens:t(fu,{tSrc:{value:null},uCenter:{value:new Ct(.5,.5)},uRadius:{value:.2},uStrength:{value:0},uAspect:{value:1},uTime:{value:0},uFlow:{value:0}}),copy:t(pu,{tSrc:{value:null}})}}_rt(t,e,n=0,i=!1){let r=new Sn(t,e,{type:Nn,format:De,minFilter:ke,magFilter:ke,depthBuffer:i,stencilBuffer:!1,samples:n,generateMipmaps:!1});return r.texture.colorSpace=Qn,r}resize(t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight){let n=Math.min(window.devicePixelRatio||1,this.cfg.visuals.maxPixelRatio),i=this.renderScale,r=Math.max(2,Math.floor(t*n*i)),o=Math.max(2,Math.floor(e*n*i));this.W=r,this.H=o,this.cssW=t,this.cssH=e,this.renderer.setPixelRatio(1),this.renderer.setSize(Math.floor(t*n),Math.floor(e*n),!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.outW=Math.floor(t*n),this.outH=Math.floor(e*n);let a=Math.min(this.cfg.visuals.antialias,this.renderer.capabilities.maxSamples);for(let u of["sceneRT","lensRT"])this[u]&&this[u].dispose();if(this.sceneRT=this._rt(r,o,a,!0),this.lensRT=this._rt(r,o,a,!0),this.camera.aspect=r/o,this.camera.updateProjectionMatrix(),this.bloomRTs)for(let u of this.bloomRTs)u.down.dispose(),u.up.dispose();this.bloomRTs=[];let l=Math.max(2,r>>1),c=Math.max(2,o>>1),d=this.cfg.visuals.bloom.levels;for(let u=0;u<d;u++)this.bloomRTs.push({w:l,h:c,down:this._rt(l,c),up:this._rt(l,c)}),l=Math.max(2,l>>1),c=Math.max(2,c>>1);this.starUniforms.uRes.value.set(r,o),this.mats.composite.uniforms.uRes.value.set(r,o),this.mats.lens.uniforms.uAspect.value=r/o}setRenderScale(t){Math.abs(t-this.renderScale)>.01&&(this.renderScale=t,this.resize(this.cssW,this.cssH))}get focalPx(){return .5*this.H/Math.tan(.5*this.camera.fov*Kt)}quad(t,e,n=!1){this.fsMesh.material=t,this.renderer.setRenderTarget(e),n&&this.renderer.clear(),this.renderer.render(this.fsScene,this.fsCam)}prepare(t){let e=this.cfg.visuals,n=this.starUniforms,i=this.skyUniforms;this.time+=t.dt||0,this.updateMwModel(t.camPc),this.camera.fov=t.fov??this.cfg.camera.fovDeg,this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,0),this.camera.quaternion.copy(t.quat),this.camera.updateMatrixWorld(!0);let r=f=>Math.fround(f);n.uCamHi.value.set(r(t.camPc[0]),r(t.camPc[1]),r(t.camPc[2])),n.uCamLo.value.set(t.camPc[0]-r(t.camPc[0]),t.camPc[1]-r(t.camPc[1]),t.camPc[2]-r(t.camPc[2]));let o=new Qt().makeRotationFromQuaternion(t.quat),a=new Dt().setFromMatrix4(o),l=a.clone().transpose();n.uView.value.copy(l),i.uInvView.value.copy(a),n.uFocalPx.value=this.focalPx,n.uBeta.value.fromArray(t.beta),n.uGamma.value=t.gamma,n.uExposure.value=Math.max(t.exposure,this.cfg.visuals.stars.minGain||0),n.uBrightness.value=e.stars.brightness,n.uSigma.value=e.stars.psfSigmaPx,n.uHalo.value=e.stars.haloStrength,n.uHaloAmt.value=e.stars.haloFraction,n.uHaloW.value=e.stars.haloWidthPx,n.uSat.value=e.stars.colorSaturation,n.uMagLimit.value=e.stars.magnitudeLimit,n.uBlue.value=this.cfg.warp.visual.blueshiftScale*1;let c=t.warp||{};n.uWarpDir.value.fromArray(c.dir||[0,0,-1]),n.uWarpBeta.value=c.beta||0,n.uWarpGamma.value=c.gamma||1,n.uStreak.value=(c.streak||0)*this.cfg.warp.visual.streakScale,n.uWarpDim.value=c.dim||0;for(let f=0;f<8;f++)n.uHide.value[f]=t.hide&&t.hide[f]!=null?t.hide[f]:-1;let d=Math.tan(.5*this.camera.fov*Kt);i.uTan.value.set(d*this.camera.aspect,d),i.uBeta.value.fromArray(t.beta),i.uGamma.value=t.gamma,i.uWarpDir.value.fromArray(c.dir||[0,0,-1]),i.uWarpBeta.value=c.beta||0,i.uWarpGamma.value=c.gamma||1,i.uExposure.value=t.exposure,i.uGain.value=e.milkyWay.enabled?e.milkyWay.gain:0,i.uDetail.value=e.milkyWay.detail,i.uGrain.value=e.milkyWay.grain,i.uDust.value=e.milkyWay.dustContrast,i.uBlue.value=this.cfg.warp.visual.blueshiftScale,i.uMwScale.value=1e-6*(t.mwScale??1);let h=((t.warp||{}).lens||0)>.01;n.uBeam.value=h?this.cfg.warp.visual.beaming:2,i.uBeam.value=h?this.cfg.warp.visual.beaming*.9:3,i.uBeamCap.value=this.cfg.visuals.relativity?.skyGainCap??3,i.uZodi.value=t.zodi||0,t.sunDir&&i.uSunDirRest.value.fromArray(t.sunDir),i.uZodiScale.value=t.zodiScale??1;for(let f of this.galaxies){let{I0:p,rhRad:v,g}=f.userData,m=f.material.uniforms,x=Math.max(t.exposure,e.stars.minGain||0)*(e.milkyWay.enabled?e.milkyWay.gain:1)*e.galaxies.gain,_=Math.PI*p*x,y=Math.min(1,Math.max(0,(Math.max(t.exposure,1)-2e3)/4e5));m.uPeak.value=Math.max(_,e.galaxies.visibilityFloor*y),m.uFloor.value=0,m.uColor.value.set(1,.96,.9),f.visible=e.galaxies.enabled}}render(t,e={}){let n=this.renderer,i=this.cfg.visuals;this.prepare(t),n.setRenderTarget(this.sceneRT),n.setClearColor(0,1),n.clear(!0,!0,!0),n.render(this.skyScene,this.camera),e.space&&e.space(n,this.camera);let r=this.sceneRT,o=t.warp||{};if(o.lens>.001){let f=this.mats.lens.uniforms;f.tSrc.value=this.sceneRT.texture,f.uStrength.value=o.lens*this.cfg.warp.visual.lensStrength,f.uCenter.value.set(o.center[0],o.center[1]),f.uRadius.value=o.radius,f.uTime.value=this.time,this.quad(this.mats.lens,this.lensRT,!0),r=this.lensRT}e.near&&(n.setRenderTarget(r),n.clearDepth(),e.near(n));let a=this.bloomRTs,l=i.bloom,c=r.texture;for(let f=0;f<a.length;f++){let p=this.mats.down.uniforms;p.tSrc.value=c,p.uKaris.value=f===0?1:0,p.uCap.value=f===0?i.bloom.inputCap||14:6e4,p.uTexel.value.set(1/(f===0?this.W:a[f-1].w),1/(f===0?this.H:a[f-1].h)),this.quad(this.mats.down,a[f].down),c=a[f].down.texture}let d=a[a.length-1].down.texture;for(let f=a.length-2;f>=0;f--){let p=this.mats.up.uniforms;p.tSrc.value=d,p.tAdd.value=a[f].down.texture,p.uTexel.value.set(1/a[f+1].w,1/a[f+1].h),p.uRadius.value=l.radius,p.uMix.value=.55,this.quad(this.mats.up,a[f].up),d=a[f].up.texture}let u=this.mats.composite.uniforms,h=i.tonemap;u.tScene.value=r.texture,u.tBloom.value=d,u.uBloom.value=l.strength*i.intensity,u.uSaturation.value=h.saturation,u.uContrast.value=h.contrast,u.uGrain.value=h.filmGrain,u.uVignette.value=h.vignette,u.uCA.value=h.chromaticAberration,u.uTime.value=this.time,u.uFlash.value=(o.flash||0)*this.cfg.warp.visual.flashScale,o.center&&u.uFlashPos.value.set(o.center[0],o.center[1]),n.setViewport(0,0,this.outW,this.outH),this.quad(this.mats.composite,null)}};var Kl=`
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
`,gu=`
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
`,vu=`#include <common>
#include <logdepthbuf_pars_vertex>`,Js=`#include <common>
#include <logdepthbuf_pars_fragment>`,js=`
${qe}
${Kl}
${vu}
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
`,xu=`
precision highp float;
${qe}
${gu}
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
`,yu=`
precision highp float;
${qe}
${gu}
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
`,_u=`
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
${vu}
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
`,bu=`
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
`,Su=`
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
`,wu=`
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
`,Eu=`
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
`;async function Tu(s){let t=window.__SIMTEX||{},e={},n=s.capabilities.maxTextureSize,i=Math.min(8,s.capabilities.getMaxAnisotropy()),r=Object.entries(t).map(([o,a])=>new Promise(l=>{let c=new Image;c.onload=()=>{let d=c;if(c.width>n){let h=document.createElement("canvas");h.width=n,h.height=Math.round(c.height*n/c.width),h.getContext("2d").drawImage(c,0,0,h.width,h.height),d=h}let u=new Xe(d);u.colorSpace=Rn,u.wrapS=bn,u.wrapT=mn,u.minFilter=$n,u.magFilter=ke,u.generateMipmaps=!0,u.anisotropy=i,o==="saturn_ring_alpha"&&(u.wrapS=mn,u.generateMipmaps=!0),u.needsUpdate=!0,e[o]=u,l()},c.onerror=()=>{console.warn("texture failed:",o),l()},c.src=a}));return await Promise.all(r),e}function Au(){let s=new pi(new Uint8Array([255,255,255,255]),1,1,De);return s.needsUpdate=!0,s}function Sa(s,t,e){if(e>=s+t)return 0;if(e<=Math.abs(t-s))return t>=s?1:t*t/(s*s);let n=Math.acos(bt((e*e+s*s-t*t)/(2*e*s),-1,1)),i=Math.acos(bt((e*e+t*t-s*s)/(2*e*t),-1,1));return bt((s*s*(n-Math.sin(2*n)*.5)+t*t*(i-Math.sin(2*i)*.5))/(Math.PI*s*s),0,1)}function Ru(s,t,e){let n=0,i=0,r=s.stars,o=r.map(a=>a.positionAt(e));return r.forEach((a,l)=>{let c=o[l][0]-t[0],d=o[l][1]-t[1],u=o[l][2]-t[2],h=Math.hypot(c,d,u)||1,f=h/zt,p=a.lumV/(f*f),v=[c/h,d/h,u/h],g=a.radiusKm/h,m=1;for(let x of s.bodies){if(x.kind==="star"||x.kind==="belt")continue;let _=x.positionAt(e),y=_[0]-t[0],E=_[1]-t[1],T=_[2]-t[2],A=y*v[0]+E*v[1]+T*v[2];if(A<=0)continue;let C=Math.hypot(y,E,T);if(x.radiusKm/C<2e-4)continue;let S=y-A*v[0],b=E-A*v[1],P=T-A*v[2],U=Math.hypot(S,b,P)/A,F=x.radiusKm/A;m*=1-Sa(g,F,U)}n+=p*m;for(let x of s.bodies){if(x.kind==="star"||x.kind==="belt")continue;let _=x.positionAt(e),y=_[0]-t[0],E=_[1]-t[1],T=_[2]-t[2],A=Math.hypot(y,E,T);if(A<1)continue;let C=o[l][0]-_[0],S=o[l][1]-_[1],b=o[l][2]-_[2],P=Math.hypot(C,S,b),U=P/zt,F=-(y*C+E*S+T*b)/(A*P),N=Math.acos(bt(F,-1,1)),V=(Math.sin(N)+(Math.PI-N)*Math.cos(N))/Math.PI,L=Math.pow(x.radiusKm/A,2);i+=(x.albedo??.3)*L*V*(a.lumV/(U*U))*(A<x.radiusKm*1.001?0:1)*.9}}),{direct:n,shine:i}}function Cu(s,t){let e=t.visuals.exposure,n=Math.pow(2,e.compensationEv);return bt((e.key??.9)/Math.max(s,1e-12),e.minGain,e.maxGain)*n}function Pu(s,t,e,n){if(!isFinite(s)||s<=0)return t;let i=1-Math.exp(-e/Math.max(n,.05));return Math.exp(Math.log(s)+(Math.log(t)-Math.log(s))*i)}function Iu(s,t,e){let n=null;for(let i of s.stars){let r=i.positionAt(e),o=r[0]-t[0],a=r[1]-t[1],l=r[2]-t[2],c=Math.hypot(o,a,l)||1,d=c/zt,u=i.lumV/(d*d),h=[o/c,a/c,l/c],f=i.radiusKm/c,p=1;for(let v of s.bodies){if(v.kind==="star"||v.kind==="belt")continue;let g=v.positionAt(e),m=g[0]-t[0],x=g[1]-t[1],_=g[2]-t[2],y=m*h[0]+x*h[1]+_*h[2];if(y<=0)continue;let E=Math.hypot(m,x,_);if(v.radiusKm/E<2e-4)continue;let T=Math.hypot(m-y*h[0],x-y*h[1],_-y*h[2])/y;p*=1-Sa(f,v.radiusKm/y,T)}(!n||u*p>n.E)&&(n={star:i,dir:h,E:u*p,E0:u,vis:p,color:i.color||[1,1,1]})}return n}var ov={rock:1,ice:2,gas:3,ocean:4,lava:5,haze:6,io:7,europa:8,ganymede:14,iapetus:10,pluto:11,triton:12,charon:13},Lu={earth:[.2,.35,.7],moon:[.5,.5,.5],mars:[.7,.4,.25],venus:[.9,.8,.55],mercury:[.5,.48,.46],jupiter:[.85,.75,.6],saturn:[.9,.82,.62],uranus:[.6,.85,.9],neptune:[.35,.5,.9],titan:[.8,.55,.25],io:[.9,.8,.4]},cy=new Qt,lv=new I;function cv(s){return s.color||[1,.96,.9]}var wa=class{constructor(t,e,n,i){this.gfx=t,this.cfg=e,this.tex=n,this.cat=i,this.scene=new Un,this.sphereGeo=new cn(1,144,96),this.blank=Au(),this.items=[],this.system=null,this.labels=[],this.spriteCap=512,this._buildSprites(),this.sharedRel={uBetaCam:{value:new I},uGamma:{value:1},uWDirCam:{value:new I(0,0,-1)},uWBeta:{value:0},uWGamma:{value:1}},this.fadeEdge={lo:e.visuals.planets.resolveMinPx,hi:e.visuals.planets.resolveMaxPx}}_buildSprites(){let t=new xs;t.setAttribute("position",new de(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),t.setIndex([0,1,2,0,2,3]),this.spritePos=new Float32Array(this.spriteCap*4),this.spriteCol=new Float32Array(this.spriteCap*4),this.spritePosAttr=new mi(this.spritePos,4),this.spriteColAttr=new mi(this.spriteCol,4),this.spritePosAttr.setUsage(Dl),this.spriteColAttr.setUsage(Dl),t.setAttribute("aPosE",this.spritePosAttr),t.setAttribute("aColor",this.spriteColAttr),t.instanceCount=0,this.spriteGeo=t;let e=this.gfx.starUniforms;this.spriteMat=new oe({vertexShader:wu,fragmentShader:Eu,transparent:!0,depthTest:!1,depthWrite:!1,blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uView:e.uView,uRes:e.uRes,uFocalPx:e.uFocalPx,uExposure:{value:1},uSigma:e.uSigma,uHalo:e.uHalo,uHaloAmt:e.uHaloAmt,uHaloW:e.uHaloW,uBrightness:e.uBrightness,uBetaCam:{value:new I},uGamma:e.uGamma,uWDirCam:{value:new I(0,0,-1)},uWBeta:e.uWarpBeta,uWGamma:e.uWarpGamma}}),this.spriteMesh=new It(t,this.spriteMat),this.spriteMesh.frustumCulled=!1,this.spriteMesh.renderOrder=100,this.scene.add(this.spriteMesh)}clear(){for(let t of this.items)for(let e of t.objs)this.scene.remove(e),e.geometry&&e.geometry!==this.sphereGeo&&e.geometry.dispose(),e.material&&e.material.dispose();this.items=[],this.orbitLines=[],this.system=null}setSystem(t){this.clear(),this.system=t;let e=this.gfx;for(let n of t.bodies){let i={body:n,objs:[],star:n.kind==="star"};n.kind==="belt"?this._makeBelt(i,n):n.kind==="star"?this._makeStar(i,n):this._makeBody(i,n);for(let r of i.objs)this.scene.add(r);this.items.push(i)}for(let n of this.items){let i=n.body;if(i.kind==="star"||i.kind==="belt")continue;let r=[];if(i.parent&&i.parent.kind!=="star"&&r.push(i.parent),i.parent)for(let o of i.parent.children)o!==i&&o.kind!=="belt"&&r.push(o);for(let o of i.children)o.kind!=="belt"&&r.push(o);n.occluders=r}this._buildOrbitLines(t)}_bodyMat(t){let e=t.look||{kind:"proc",style:"rock",colors:[[.4,.4,.4],[.5,.5,.5],[.7,.7,.7],[.2,.2,.2]],p:{}},n=this.tex,i=e.p||{},r=(e.colors||[[.5,.5,.5],[.6,.6,.6],[.8,.8,.8],[.3,.3,.3]]).map(u=>new I(u[0],u[1],u[2])),o=e.kind==="tex"&&n[e.tex],a=o?n[e.tex]:this.blank,l=ov[e.style]||1,c=i.seed??ei(t.id)%1e3/7.3,d={uBodyRot:{value:new Dt},uCenterRel:{value:new I},uRadius:{value:t.radiusKm},uExposure:{value:1},uFade:{value:1},uType:{value:o?0:1},uStyle:{value:l},tDay:{value:a},tNight:{value:e.night&&n[e.night]?n[e.night]:this.blank},tCloud:{value:e.clouds&&n[e.clouds]?n[e.clouds]:this.blank},tRing:{value:this.blank},uHasNight:{value:e.night&&n[e.night]?1:0},uHasCloud:{value:e.clouds&&n[e.clouds]?1:0},uCol:{value:r.concat(Array(4).fill(new I(.5,.5,.5))).slice(0,4)},uP:{value:new jt(i.crater??e.crater??0,(i.bump??e.bump??.4)*this.cfg.visuals.planets.detailBump,i.ice??0,c)},uP2:{value:new jt(i.bands??.5,i.turb??.5,i.spot??0,i.stripe??0)},uP3:{value:new jt(i.ocean??.5,i.cloud??.5,i.lava??0,i.spec??e.spec??0)},uOcean:{value:e.ocean?1:0},uGas:{value:e.gas?1:0},uAirless:{value:!t.atmosphere&&e.kind!=="star"&&!e.gas&&e.style!=="gas"?1:0},uAtmo:{value:t.atmosphere?1:0},uNightGain:{value:this.cfg.visuals.planets.nightLightGain},uLightDir:{value:[new I(1,0,0),new I(1,0,0)]},uLightE:{value:[new I,new I]},uLightAng:{value:[.005,.005]},uAmbient:{value:new I},uOcc:{value:[new jt,new jt,new jt]},uOccCount:{value:0},uRingInfo:{value:new jt(0,1,0,0)},uPole:{value:new I(0,0,1)},uDetail:{value:1},uSeed:{value:c},uSelfLum:{value:1},uTexel:{value:o&&a.image?Math.PI*2/Math.max(a.image.width,1):.003},...this.sharedRel};return new oe({vertexShader:js,fragmentShader:xu,uniforms:d})}_makeBody(t,e){let n=this._bodyMat(e),i=new It(this.sphereGeo,n);i.matrixAutoUpdate=!1,i.frustumCulled=!1,i.renderOrder=10,t.mesh=i,t.mat=n,t.objs.push(i);let r=e.look||{};if(r.clouds&&this.tex[r.clouds]){let o=new oe({vertexShader:js,fragmentShader:yu,transparent:!0,depthWrite:!1,uniforms:{uBodyRot:n.uniforms.uBodyRot,uExposure:n.uniforms.uExposure,uFade:n.uniforms.uFade,tCloud:{value:this.tex[r.clouds]},uLightDir:n.uniforms.uLightDir,uLightE:n.uniforms.uLightE,uAmbient:n.uniforms.uAmbient,uRadius:n.uniforms.uRadius,uOcc:n.uniforms.uOcc,uOccCount:n.uniforms.uOccCount,uLightAng:n.uniforms.uLightAng,uOpacity:{value:this.cfg.visuals.planets.clouds},...this.sharedRel},blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:as}),a=new It(this.sphereGeo,o);a.matrixAutoUpdate=!1,a.frustumCulled=!1,a.renderOrder=11,t.cloudMesh=a,t.objs.push(a)}if(e.atmosphere){let o=e.atmosphere,a=new oe({vertexShader:js,fragmentShader:_u,transparent:!0,depthWrite:!1,side:on,blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:ks,uniforms:{uCenterRel:n.uniforms.uCenterRel,uRadius:{value:e.radiusKm},uTop:{value:e.radiusKm+o.topKm},uBetaR:{value:new I(...o.rayleigh)},uBetaM:{value:o.mie},uHr:{value:o.hKm},uHm:{value:o.mieH??o.hKm*.2},uG:{value:o.mieG??.7},uTint:{value:new I(...o.tint||[1,1,1])},uStrength:{value:o.strength??1},uExposure:n.uniforms.uExposure,uFade:n.uniforms.uFade,uLightDir:n.uniforms.uLightDir,uLightE:n.uniforms.uLightE,uAmbient:n.uniforms.uAmbient,uSteps:{value:14},...this.sharedRel}}),l=new It(this.sphereGeo,a);l.matrixAutoUpdate=!1,l.frustumCulled=!1,l.renderOrder=12,t.atmoMesh=l,t.atmoMat=a,t.objs.push(l)}if(e.rings&&e.rings.length){let o=Math.min(...e.rings.map(p=>p.r0)),a=Math.max(...e.rings.map(p=>p.r1)),l=r.ring&&this.tex[r.ring],c=hv(l?74500:o,l?140220:a,256,3),d=e.rings.slice(0,6).map(p=>new jt(p.r0,p.r1,p.tau,0));for(;d.length<6;)d.push(new jt);let u=e.id==="saturn",h=new oe({vertexShader:Mu,fragmentShader:bu,transparent:!0,depthWrite:!1,side:Ee,blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:as,uniforms:{uBodyRot:{value:new Dt},uCenterRel:n.uniforms.uCenterRel,uPlanetR:{value:e.radiusKm},uInner:{value:l?74500:o},uOuter:{value:l?140220:a},uExposure:n.uniforms.uExposure,uFade:n.uniforms.uFade,uLightDir:n.uniforms.uLightDir,uLightE:n.uniforms.uLightE,uLightAng:n.uniforms.uLightAng,uAmbient:n.uniforms.uAmbient,tRing:{value:l?this.tex[r.ring]:this.blank},uHasTex:{value:l?1:0},uTint:{value:new I(.78,.72,.62)},uBands:{value:d},uBandCount:{value:e.rings.length},uPole:{value:new I(0,0,1)},uSeed:{value:ei(e.id)%100},...this.sharedRel}}),f=new It(c,h);f.matrixAutoUpdate=!1,f.frustumCulled=!1,f.renderOrder=13,t.ringMesh=f,t.ringMat=h,t.objs.push(f),n.uniforms.tRing.value=l?this.tex[r.ring]:this.blank,n.uniforms.uRingInfo.value.set(l?74500:o,l?140220:a,this.cfg.visuals.planets.ringShadows*(l?.95:0),l?1:0)}}_makeStar(t,e){let n=e.id==="sun"&&this.tex.sun,i=new oe({vertexShader:js,fragmentShader:Su,uniforms:{uBodyRot:{value:new Dt},uColor:{value:new I(...cv(e))},uRadiance:{value:e.surfaceRadiance},uExposure:{value:1},uFade:{value:1},uLimb:{value:e.limb??.6},uHasTex:{value:n?1:0},tSun:{value:n?this.tex.sun:this.blank},uSeed:{value:ei(e.id)%100},uSpots:{value:e.teff<5200?1:.5},...this.sharedRel}}),r=new It(this.sphereGeo,i);r.matrixAutoUpdate=!1,r.frustumCulled=!1,r.renderOrder=10,t.mesh=r,t.mat=i,t.objs.push(r)}_makeBelt(t,e){let n=e.belt,i=tn(Qe(ei(e.id),4242)),r=n.count,o=new Float32Array(r*3),a=new Float32Array(r);for(let u=0;u<r;u++){let h=n.peakAu+i.normal()*.5*(n.outerAu-n.innerAu)*.5,f=bt(h,n.innerAu,n.outerAu)*zt,p=i()*Be,v=i.normal()*n.thicknessAu*zt*.5;o[u*3]=Math.cos(p)*f,o[u*3+1]=Math.sin(p)*f,o[u*3+2]=v,a[u]=.4+i()*.6}let l=new ye;l.setAttribute("position",new de(o,3)),l.setAttribute("aSize",new de(a,1));let c=new oe({transparent:!0,depthWrite:!1,blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uExposure:{value:1},uE:{value:1},uTint:{value:new I(...n.tint)},uGain:{value:1}},vertexShader:`#include <common>
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
          gl_FragColor = vec4(min(uTint * vA * f, vec3(8.0)), 1.0); }`}),d=new Qr(l,c);d.frustumCulled=!1,d.matrixAutoUpdate=!1,d.renderOrder=5,t.points=d,t.mat=c,t.objs.push(d)}_buildOrbitLines(t){this.orbitLines=[];let e=256;for(let n of t.bodies){if(!n.orbit||n.kind==="belt"||n.kind==="star"||!n.parent||!n.orbit.periodSec||!isFinite(n.orbit.periodSec))continue;let i=new Float32Array((e+1)*3),r=n.orbit.periodSec/86400,o=2461e3,a=[0,0,0];for(let h=0;h<=e;h++)n.orbit.positionAt(o+r*h/e,a),i[h*3]=a[0],i[h*3+1]=a[1],i[h*3+2]=a[2];let l=new ye;l.setAttribute("position",new de(i,3));let c=n.kind==="moon"?[.45,.55,.7]:n.kind==="dwarf"?[.55,.5,.5]:[.5,.65,.5],d=new Vs({color:new qt(...c),transparent:!0,opacity:0,depthWrite:!1,blending:Mn}),u=new jr(l,d);u.frustumCulled=!1,u.matrixAutoUpdate=!1,u.renderOrder=4,this.scene.add(u),this.orbitLines.push({body:n,line:u,mat:d,baseOpacity:this.cfg.visuals.orbitLines.opacity})}}update(t){let e=this.system;if(!e)return{hide:[],labels:[]};let n=t.camSys,i=t.jd,r=t.focalPx,o=this.cfg.visuals;this.sharedRel.uBetaCam.value.copy(t.betaCam),this.sharedRel.uGamma.value=t.gamma,this.spriteMat.uniforms.uBetaCam.value.copy(t.betaCam),this.spriteMat.uniforms.uExposure.value=t.exposure;let a=t.warp||{};this.sharedRel.uWDirCam.value.copy(a.dirCam||new I(0,0,-1)),this.sharedRel.uWBeta.value=a.beta||0,this.sharedRel.uWGamma.value=a.gamma||1,this.spriteMat.uniforms.uWDirCam.value.copy(this.sharedRel.uWDirCam.value);let l=[],c=[],d=0,u=this.spritePos,h=this.spriteCol,f={v:null},p=(y,E,T,A)=>{let C=1;for(let S of this.items){let b=S.body;if(b===y||b.kind==="belt")continue;let P=f.v.get(b);if(P.dist>=T)continue;let U=b.radiusKm/P.dist;if(U*r<.3)continue;let F=(E[0]*P.rel[0]+E[1]*P.rel[1]+E[2]*P.rel[2])/(T*P.dist),N=Math.acos(bt(F,-1,1));if(!(N>A+U)&&(C*=1-Sa(A,U,N),C<=0))return 0}return C},v=(y,E,T,A)=>{d>=this.spriteCap||(u[d*4]=y[0],u[d*4+1]=y[1],u[d*4+2]=y[2],u[d*4+3]=E,h[d*4]=T[0],h[d*4+1]=T[1],h[d*4+2]=T[2],h[d*4+3]=A,d++)},g=e.stars,m=g.map(y=>y.positionAt(i)),x=[0,0,0],_=new Map;for(let y of this.items){let E=y.body,T=E.positionAt(i);x[0]=T[0]-n[0],x[1]=T[1]-n[1],x[2]=T[2]-n[2];let A=Math.hypot(x[0],x[1],x[2]);_.set(E,{p:T,rel:[x[0],x[1],x[2]],dist:A})}f.v=_;for(let y of this.items){let E=y.body,T=_.get(E),{rel:A,dist:C,p:S}=T,b=E.radiusKm/Math.max(C,.001)*r;if(y.angPx=b,y.dist=C,E.kind==="belt"){this._updateBelt(y,E,A,S,i,t);continue}let P=[];for(let N=0;N<g.length;N++){let V=g[N];if(V===E)continue;let L=m[N],q=L[0]-S[0],O=L[1]-S[1],Z=L[2]-S[2],et=Math.hypot(q,O,Z)||1,ht=et/zt;P.push({s:V,dir:[q/et,O/et,Z/et],E:V.lumV/(ht*ht),ang:Math.min(.3,V.radiusKm/et),d:et})}if(P.sort((N,V)=>V.E-N.E),y.lights=P,E.kind==="star"){E.catalogIndex!==void 0?l.push(E.catalogIndex):this.cat&&this.cat.sunIndex!==void 0&&E.id==="sun"&&l.push(this.cat.sunIndex);let N=un(this.fadeEdge.lo,this.fadeEdge.hi,b),V=E.lumV/Math.pow(Math.max(C,1)/zt,2)*p(E,A,C,E.radiusKm/Math.max(C,1));if(v(A,V,E.color,1-N),y.mesh.visible=b>this.fadeEdge.lo&&this._inFront(t,A,E.radiusKm),y.mesh.visible){this._setMatrix(y.mesh,E,i,A,1,!0);let L=y.mat.uniforms;L.uExposure.value=t.exposure,L.uFade.value=N,L.uBodyRot.value.setFromMatrix4(y.mesh.matrix.clone().setPosition(0,0,0)).multiplyScalar(1/E.radiusKm),this._normRot(L.uBodyRot.value)}o.labels.enabled&&c.push({body:E,rel:A,dist:C,angPx:b,kind:"star"});continue}let U=un(this.fadeEdge.lo,this.fadeEdge.hi,b),F=b>this.fadeEdge.lo&&this._inFront(t,A,E.radiusKm*1.2);{let N=0;for(let V of P)N+=V.E;if(P.length){let V=bt((P[0].dir[0]*-A[0]+P[0].dir[1]*-A[1]+P[0].dir[2]*-A[2])/Math.max(C,.001),-1,1),L=Math.acos(V),q=(Math.sin(L)+(Math.PI-L)*Math.cos(L))/Math.PI,Z=(E.albedo??.3)*Math.pow(E.radiusKm/Math.max(C,1),2)*q*N*(2/3)*1.5*p(E,A,C,E.radiusKm/Math.max(C,1)),et=E.meanColor||(E.meanColor=this._meanColor(E));v(A,Z,et,1-U)}}y.mesh.visible=F,F&&this._updateBodyMesh(y,E,i,A,C,S,t,U,_),y.cloudMesh&&(y.cloudMesh.visible=F),y.atmoMesh&&(y.atmoMesh.visible=F),y.ringMesh&&(y.ringMesh.visible=F||E.rings&&b*2.6>.7),y.ringMesh&&y.ringMesh.visible&&this._updateRing(y,E,i,A,t,U),o.labels.enabled&&c.push({body:E,rel:A,dist:C,angPx:b,kind:E.kind})}return this.spriteGeo.instanceCount=d,this.spritePosAttr.needsUpdate=!0,this.spriteColAttr.needsUpdate=!0,this._updateOrbitLines(t,_,i),{hide:l,labels:c,bodyInfo:_}}_inFront(t,e,n){let i=lv.set(e[0],e[1],e[2]).applyMatrix3(t.view),r=i.length();return r<n*1?!0:i.z<n*.5+0&&(-i.z>0||r<n*4)}_meanColor(t){if(Lu[t.id])return Lu[t.id];let e=t.look&&t.look.colors;return e&&e[1]?[e[1][0],e[1][1],e[1][2]]:[.7,.7,.7]}_normRot(t){let e=t.elements;for(let n=0;n<3;n++){let i=Math.hypot(e[n*3],e[n*3+1],e[n*3+2])||1;e[n*3]/=i,e[n*3+1]/=i,e[n*3+2]/=i}}_setMatrix(t,e,n,i,r,o=!1){let a=e.axesAt(n),l=e.radiusKm*r,c=t.matrix;return c.set(a.x[0]*l,a.z[0]*l,-a.y[0]*l,i[0],a.x[1]*l,a.z[1]*l,-a.y[1]*l,i[1],a.x[2]*l,a.z[2]*l,-a.y[2]*l,i[2],0,0,0,1),t.matrixWorld.copy(c),a}_updateBodyMesh(t,e,n,i,r,o,a,l,c){let d=t.mat.uniforms;this._applySpinLimit(e,n,a);let u=this._setMatrix(t.mesh,e,n,i,1);d.uBodyRot.value.set(u.x[0],u.z[0],-u.y[0],u.x[1],u.z[1],-u.y[1],u.x[2],u.z[2],-u.y[2]),d.uCenterRel.value.set(i[0],i[1],i[2]),d.uExposure.value=a.exposure,d.uFade.value=l,d.uPole.value.set(u.z[0],u.z[1],u.z[2]),d.uDetail.value=this.cfg.visuals.planets.detailBump,d.uNightGain.value=this.cfg.visuals.planets.nightLightGain;let h=t.lights;for(let v=0;v<2;v++){let g=h[v];if(g){d.uLightDir.value[v].set(g.dir[0],g.dir[1],g.dir[2]);let m=g.s.color;d.uLightE.value[v].set(m[0]*g.E,m[1]*g.E,m[2]*g.E),d.uLightAng.value[v]=Math.max(g.ang,1e-5)}else d.uLightE.value[v].set(0,0,0)}let f=2e-9;if(e.parent&&e.parent.kind!=="star"&&h[0]){let v=c.get(e.parent),g=c.get(e),m=Math.hypot(v.p[0]-g.p[0],v.p[1]-g.p[1],v.p[2]-g.p[2]),x=[(v.p[0]-g.p[0])/m,(v.p[1]-g.p[1])/m,(v.p[2]-g.p[2])/m],_=.5*(1+(x[0]*-h[0].dir[0]*-1+x[1]*-h[0].dir[1]*-1+x[2]*-h[0].dir[2]*-1)*0+(x[0]*h[0].dir[0]+x[1]*h[0].dir[1]+x[2]*h[0].dir[2])*-1*-1);f+=(e.parent.albedo??.3)*Math.pow(e.parent.radiusKm/m,2)*h[0].E*.5*Math.max(.02,_*.9)}d.uAmbient.value.set(f,f,f);let p=0;for(let v of t.occluders||[]){if(p>=3)break;let g=c.get(v);if(!g)continue;let m=c.get(e),x=g.p[0]-m.p[0],_=g.p[1]-m.p[1],y=g.p[2]-m.p[2];Math.hypot(x,_,y)>60*Math.max(e.radiusKm,v.radiusKm)+1e6&&!(e.parent===v||v.parent===e)||(d.uOcc.value[p].set(x,_,y,v.radiusKm),p++)}if(d.uOccCount.value=p,t.cloudMesh){let v=1+14/e.radiusKm*1+.0016;this._setMatrix(t.cloudMesh,e,n,i,v)}if(t.atmoMesh){let v=e.atmosphere,g=(e.radiusKm+v.topKm)/e.radiusKm*1.002;this._setMatrix(t.atmoMesh,e,n,i,g),t.atmoMat.side=r<e.radiusKm+v.topKm?Ue:on,t.atmoMat.uniforms.uStrength.value=(v.strength??1)*this.cfg.visuals.planets.atmosphere}}_applySpinLimit(t,e,n){if(!t.spin||t.spin.sync){t.spinOverride=void 0;return}let i=t.spinAngle?(t.spin.w0+t.spin.rateDegDay*(e-2451545))*Kt:0,r=Math.abs(t.spin.rateDegDay/360)*n.timeScale/86400*86400/86400*1,o=n.timeScale/86400,a=Math.abs(t.spin.rateDegDay/360)*o,l=.45;if(a<=l){t.spinOverride=void 0,t._spinFree=null;return}t._spinFree==null&&(t._spinFree=i),t._spinFree+=Math.sign(t.spin.rateDegDay)*l*Be*(n.dtReal||.016),t.spinOverride=t._spinFree}_updateRing(t,e,n,i,r,o){let a=e.axesAt(n),l=t.ringMesh.matrix;l.set(a.x[0],a.y[0],a.z[0],i[0],a.x[1],a.y[1],a.z[1],i[1],a.x[2],a.y[2],a.z[2],i[2],0,0,0,1),t.ringMesh.matrixWorld.copy(l);let c=t.ringMat.uniforms;c.uBodyRot.value.set(a.x[0],a.y[0],a.z[0],a.x[1],a.y[1],a.z[1],a.x[2],a.y[2],a.z[2]),c.uExposure.value=r.exposure,c.uFade.value=1,c.uPole.value.set(a.z[0],a.z[1],a.z[2]);let d=t.lights||[];for(let u=0;u<2;u++){let h=d[u];if(h){c.uLightDir.value[u].set(h.dir[0],h.dir[1],h.dir[2]);let f=h.s.color;c.uLightE.value[u].set(f[0]*h.E,f[1]*h.E,f[2]*h.E),c.uLightAng.value[u]=Math.max(h.ang,1e-5)}else c.uLightE.value[u].set(0,0,0)}c.uAmbient.value.set(2e-9,2e-9,2e-9)}_updateBelt(t,e,n,i,r,o){let a=e.plane,l=t.points.matrix;if(a)l.set(a[0],a[1],a[2],n[0],a[3],a[4],a[5],n[1],a[6],a[7],a[8],n[2],0,0,0,1);else{let f=Math.cos(23.43928*Kt),p=Math.sin(23.43928*Kt);l.set(1,0,0,n[0],0,f,-p,n[1],0,p,f,n[2],0,0,0,1)}t.points.matrixWorld.copy(l);let c=t.mat.uniforms;c.uExposure.value=o.exposure,c.uGain.value=this.cfg.visuals.belts.gain;let d=e.parent,u=d?d.positionAt(r):[0,0,0],h=Math.max(e.belt.peakAu,.05);c.uE.value=(d&&d.lumV?d.lumV:1)/(h*h),t.points.visible=!0}_updateOrbitLines(t,e,n){let i=this.cfg.visuals.orbitLines.enabled&&t.showOrbits!==!1;for(let r of this.orbitLines||[]){let o=r.body,a=e.get(o.parent),l=e.get(o);if(!i||!a||!l){r.line.visible=!1;continue}r.line.visible=!0;let c=r.line.matrix;c.identity(),c.setPosition(a.rel[0],a.rel[1],a.rel[2]),r.line.matrixWorld.copy(c);let d=o.orbit.a||1,u=a.dist,h=d/Math.max(u,1)*t.focalPx,f=un(.03,.35,l.dist/d),p=un(4,40,h);r.mat.opacity=r.baseOpacity*f*p*.5,r.line.visible=r.mat.opacity>.004}}render(t,e){t.render(this.scene,e)}};function hv(s,t,e,n){let i=[],r=[];for(let a=0;a<=n;a++){let l=s+(t-s)*(a/n);for(let c=0;c<=e;c++){let d=c/e*Be;i.push(Math.cos(d)*l,Math.sin(d)*l,0)}}for(let a=0;a<n;a++)for(let l=0;l<e;l++){let c=a*(e+1)+l,d=c+1,u=c+e+1,h=u+1;r.push(c,d,u,d,h,u)}let o=new ye;return o.setAttribute("position",new pe(i,3)),o.setIndex(r),o}function uv(s,t=1024){let e=tn(s),n=document.createElement("canvas");n.width=t,n.height=t/2;let i=n.getContext("2d");i.fillStyle="#b9bcc0",i.fillRect(0,0,n.width,n.height);let r=28,o=8;for(let u=0;u<o;u++)for(let h=0;h<r;h++){let f=n.width/r,p=n.height/o,v=.82+e()*.2,g=Math.round(190*v);i.fillStyle=`rgb(${g},${g+2},${g+5})`,i.fillRect(h*f+1,u*p+1,f-2,p-2),e()<.12&&(i.fillStyle=`rgba(40,44,52,${.15+e()*.25})`,i.fillRect(h*f+3,u*p+3,f*(.3+e()*.6),p*(.3+e()*.6))),e()<.08&&(i.fillStyle="rgba(20,20,24,0.55)",i.fillRect(h*f+f*.2,u*p+p*.4,f*.6,2))}i.strokeStyle="rgba(30,32,38,0.55)",i.lineWidth=1;for(let u=0;u<=r;u++)i.beginPath(),i.moveTo(u*n.width/r,0),i.lineTo(u*n.width/r,n.height),i.stroke();for(let u=0;u<=o;u++)i.beginPath(),i.moveTo(0,u*n.height/o),i.lineTo(n.width,u*n.height/o),i.stroke();i.fillStyle="#d2672b",i.fillRect(0,n.height*.18,n.width,7),i.fillStyle="#1f2a3a",i.fillRect(0,n.height*.58,n.width,4),i.fillStyle="rgba(25,28,34,0.9)",i.font="bold 28px Menlo, monospace",i.fillText("MERIDIAN  ISV-0471",n.width*.18,n.height*.5),i.fillText("MERIDIAN  ISV-0471",n.width*.68,n.height*.5);for(let u=0;u<2200;u++)i.fillStyle=`rgba(20,20,24,${.05+e()*.15})`,i.fillRect(e()*n.width,e()*n.height,1+e()*2,1+e()*2);let a=new gi(n);a.colorSpace=Ge,a.wrapS=bn,a.wrapT=bn,a.anisotropy=8;let l=document.createElement("canvas");l.width=n.width,l.height=n.height,l.getContext("2d").drawImage(n,0,0);let d=new gi(l);return d.wrapS=d.wrapT=bn,{map:a,bump:d}}function Du(s){let t=document.createElement("canvas");t.width=512,t.height=512;let e=t.getContext("2d");if(s==="radiator"){e.fillStyle="#d9dadc",e.fillRect(0,0,512,512),e.strokeStyle="#7e8288",e.lineWidth=2;for(let i=0;i<=16;i++)e.beginPath(),e.moveTo(i*32,0),e.lineTo(i*32,512),e.stroke(),e.beginPath(),e.moveTo(0,i*32),e.lineTo(512,i*32),e.stroke();e.fillStyle="rgba(40,42,48,0.18)";for(let i=0;i<16;i+=2)e.fillRect(0,i*32,512,32)}else{e.fillStyle="#0c1424",e.fillRect(0,0,512,512),e.strokeStyle="#2f4d86",e.lineWidth=2;for(let i=0;i<=8;i++)e.beginPath(),e.moveTo(i*64,0),e.lineTo(i*64,512),e.stroke();for(let i=0;i<=16;i++)e.beginPath(),e.moveTo(0,i*32),e.lineTo(512,i*32),e.stroke();e.fillStyle="rgba(70,120,200,0.12)";for(let i=0;i<8;i++)for(let r=0;r<16;r++)(i+r)%2&&e.fillRect(i*64+2,r*32+2,60,28)}let n=new gi(t);return n.colorSpace=Ge,n.anisotropy=8,n}function Uu(s,t=64){let e=s.map(([i,r])=>new Ct(i,r)),n=new ta(e,t);return n.rotateX(Math.PI/2),n.computeVertexNormals(),n}function Fu(s){let t=new Pn,e=uv(471),n=Du("radiator"),i=Du("pv"),r=(it,ct=.5,rt=.7)=>new Fn({color:it,roughness:ct,metalness:rt}),o=new Fn({map:e.map,bumpMap:e.bump,bumpScale:1.4,roughness:.52,metalness:.55});o.map.repeat.set(2,3);let a=r(2106412,.6,.6),l=new Fn({color:13214282,roughness:.32,metalness:.95}),c=new Fn({color:659480,roughness:.08,metalness:.2,emissive:16767392,emissiveIntensity:0}),u=Uu([[.01,-37.5],[.7,-36.6],[1.7,-34.4],[2.7,-30.8],[3.4,-26.5],[3.85,-20.5],[4.1,-12],[4.2,-2],[4.2,8],[4,14],[3.6,19.5],[3.1,23.5],[3,25.5]].map(([it,ct])=>[it,ct]),72),h=new It(u,o);h.castShadow=h.receiveShadow=!0,t.add(h);let f=new It(new cn(1,32,20),o);f.scale.set(2.6,1.7,6.6),f.position.set(0,3.5,-24.5),f.castShadow=f.receiveShadow=!0,t.add(f);let p=new It(new ln(3.3,.55,3.6),c);p.position.set(0,4.6,-27.6),p.rotation.x=.28,t.add(p);let v=new It(new wn(3.15,3.35,5.6,40),a);v.rotation.x=Math.PI/2,v.position.set(0,0,28),v.castShadow=!0,t.add(v);let g=[[2.1,30.6],[2.6,31.8],[3.3,33.8],[3.8,36.2],[3.8,36.5],[3.55,36.5],[3.1,34.2],[2.4,32],[1.8,30.8]],m=new It(Uu(g,48),new Fn({color:3816772,roughness:.35,metalness:.9,side:Ee}));m.castShadow=!0,t.add(m);let _={map:(()=>{let it=document.createElement("canvas");it.width=it.height=128;let ct=it.getContext("2d"),rt=ct.createRadialGradient(64,64,0,64,64,64);rt.addColorStop(0,"rgba(255,250,235,1)"),rt.addColorStop(.18,"rgba(255,214,140,0.95)"),rt.addColorStop(.38,"rgba(255,150,60,0.5)"),rt.addColorStop(.68,"rgba(255,100,30,0.14)"),rt.addColorStop(1,"rgba(255,80,20,0)"),ct.fillStyle=rt,ct.fillRect(0,0,128,128);let wt=new gi(it);return wt.colorSpace=Ge,wt})(),transparent:!0,blending:Mn,depthWrite:!1},y=new Dn({..._,opacity:.9,side:Ee}),E=new It(new gs(3.45,40),y);E.position.set(0,0,36.3),E.rotation.y=Math.PI,t.add(E);let T=new Dn({..._,opacity:.9,side:Ee}),A=new It(new gs(2,32),T);A.position.set(0,0,31.4),A.rotation.y=Math.PI,t.add(A);let C=new ms({..._,opacity:0,color:16756848}),S=new Hs(C);S.position.set(0,0,37.5),S.scale.set(13,13,1),t.add(S);let b=new It(new wn(4.35,4.35,.5,48),l);b.rotation.x=Math.PI/2,b.position.set(0,0,11.5),b.castShadow=!0,t.add(b);let P=b.clone();P.position.z=12.4,P.scale.set(.96,1,.96),t.add(P);let U=tn(99);for(let it=0;it<38;it++){let ct=.5+U()*1.6,rt=.2+U()*.4,wt=.8+U()*2.6,Pt=new It(new ln(ct,rt,wt),U()<.2?a:o),Yt=U()*Math.PI*2,D=-18+U()*34,ee=(D<-12?3.9:4.2)+rt*.3;Pt.position.set(Math.cos(Yt)*ee,Math.sin(Yt)*ee,D),Pt.rotation.z=Yt-Math.PI/2,Pt.castShadow=Pt.receiveShadow=!0,t.add(Pt)}let F=new It(new wn(.06,.1,5.5,8),a);F.position.set(.9,6,-3),t.add(F);let N=new It(new cn(1.5,24,12,0,Math.PI*2,0,Math.PI/3),r(14540253,.3,.9));N.position.set(.9,8.9,-3),N.rotation.x=-.5,N.castShadow=!0,t.add(N);let V=new It(new wn(.04,.04,7,6),a);V.position.set(-1.3,6.4,9),t.add(V);let L=new Fn({map:n,roughness:.55,metalness:.3,side:Ee}),q=[];for(let it of[-1,1]){let ct=new It(new ln(5.2,.35,1.6),o);ct.position.set(it*6.6,.4,1),ct.castShadow=!0,t.add(ct);let rt=new It(new ln(11.5,.12,15),L);rt.position.set(it*14.4,.4,3.2),rt.rotation.y=it*-.08,rt.castShadow=rt.receiveShadow=!0,t.add(rt),q.push(rt);let wt=new It(new ln(11.7,.22,.3),l);wt.position.set(it*14.4,.4,-4.4),t.add(wt)}let O=[],Z=[],et=new Pn;for(let it of[-1,1]){let ct=new It(new ln(5.4,.5,1.2),a);ct.position.set(it*6.4,-2.2,8),ct.rotation.z=it*-.18,t.add(ct);let rt=new It(new wn(1.15,1,29,24),o);rt.rotation.x=Math.PI/2,rt.position.set(it*9.2,-3.3,8),rt.castShadow=rt.receiveShadow=!0,t.add(rt);let wt=new It(new cn(1.15,20,12,0,Math.PI*2,0,Math.PI/2),o);wt.rotation.x=-Math.PI/2,wt.position.set(it*9.2,-3.3,-6.5),wt.castShadow=!0,t.add(wt);for(let Bt=0;Bt<8;Bt++){let Mt=new Fn({color:661028,emissive:4892927,emissiveIntensity:0,roughness:.3,metalness:.4}),$t=new It(new na(1.26,.14,10,28),Mt);$t.position.set(it*9.2,-3.3,-3.5+Bt*2.9),t.add($t),O.push(Mt)}let Pt=new It(new ea(.95,1.5,24),a);Pt.rotation.x=-Math.PI/2,Pt.position.set(it*9.2,-3.3,23.4),t.add(Pt);let Yt=new Dn({color:16777215,transparent:!0,opacity:0,blending:Mn,depthWrite:!1,side:Ee}),D=new It(new wn(1.52,1.32,29.5,28,1,!0),Yt);D.rotation.x=Math.PI/2,D.position.set(it*9.2,-3.3,8),t.add(D),Z.push(Yt);let ee=new It(new cn(1.3,16,10),Yt.clone());ee.position.set(it*9.2,-3.3,-6.6),t.add(ee),Z.push(ee.material);let kt=new It(new gs(.9,20),new Dn({color:6732799,transparent:!0,opacity:0,blending:Mn,depthWrite:!1}));kt.position.set(it*9.2,-3.3,24.3),kt.rotation.y=Math.PI,t.add(kt),et.add(kt)}for(let it of[-30,20])for(let ct of[0,1,2,3]){let rt=new It(new ln(.7,.35,.9),a),wt=ct*Math.PI/2+Math.PI/4,Pt=it<0?3:3.55;rt.position.set(Math.cos(wt)*Pt,Math.sin(wt)*Pt,it),rt.rotation.z=wt-Math.PI/2,t.add(rt)}let ht=[],Ut=[[-18.8,.7,5,16722474,"port"],[18.8,.7,5,2817877,"stbd"],[0,3.9,24.2,16777215,"tail"],[0,-4.4,-22,16777215,"strobe"]];for(let[it,ct,rt,wt,Pt]of Ut){let Yt=new Dn({color:wt,transparent:!0,blending:Mn,depthWrite:!1}),D=new It(new cn(.28,10,8),Yt);D.position.set(it,ct,rt),t.add(D),ht.push({mesh:D,kind:Pt,mat:Yt});let ee=new Hs(new ms({color:wt,transparent:!0,opacity:0,blending:Mn,depthWrite:!1,map:dv()}));ee.scale.set(3,3,1),ee.position.copy(D.position),t.add(ee),ht[ht.length-1].halo=ee}let Nt=new oe({transparent:!0,depthWrite:!1,blending:Mn,side:Ee,uniforms:{uPower:{value:0},uTime:{value:0},uColor:{value:new qt(1,.5,.14)}},vertexShader:"varying vec2 vUv; varying vec3 vP; void main(){ vUv=uv; vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`precision highp float; varying vec2 vUv; varying vec3 vP; uniform float uPower; uniform float uTime; uniform vec3 uColor;
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
        gl_FragColor = vec4(c*1.0, 1.0); }`}),X=new It(new wn(.4,3.2,1,32,1,!0),Nt);X.geometry.translate(0,.5,0),X.rotation.x=Math.PI/2,X.position.set(0,0,36.2),X.frustumCulled=!1,t.add(X),X.userData.baseLen=1;let J=new Pn,lt=30.6;J.position.set(0,0,lt);for(let it of[m,E,A,S,X])it.position.z-=lt,J.add(it);return t.add(J),t.traverse(it=>{it.isMesh&&it.material&&it.material.isMeshStandardMaterial&&(it.castShadow=it.castShadow||!1)}),{root:t,hullMat:o,coilMats:O,engineGlow:E,plume:X,plumeMat:Nt,lights:ht,nacelles:et,update(it,ct,rt){rt.gimbal&&(J.rotation.x+=(rt.gimbal.x-J.rotation.x)*1,J.rotation.y+=(rt.gimbal.y-J.rotation.y)*1),Nt.uniforms.uTime.value=ct;let wt=$l(rt.engines?rt.engines.rocket:rt.throttle);Nt.uniforms.uPower.value=wt*s.visuals.ship.engineGlow;let Pt=4+26*Math.pow(wt,.8);X.scale.set(.8+.4*wt,Pt,.8+.4*wt),X.visible=wt>.02,y.opacity=wt>.02?.2+.75*wt:0,T.opacity=wt>.02?.3+.7*wt:0,C.opacity=wt>.02?(.08+.34*wt)*s.visuals.ship.engineGlow:0,S.scale.setScalar(10+8*wt);let Yt=$l(rt.engines?rt.engines.cruise:0),D=$l(rt.engines?rt.engines.warp:rt.warp),ee=rt.speed01||0,kt=D/(Yt+D+1e-6),Bt=D>.01?.78+.22*Math.sin(ct*(2.2+6*ee)*Math.PI*2*.5):1,Mt=Yt*.8+D*Bt,$t=1+(.3-1)*kt,_t=.97+(.6-.97)*kt,R=.92+(1-.92)*kt;for(let M of O)M.emissive.setRGB($t,_t,R),M.emissiveIntensity=.04+3.2*Mt;for(let M of Z)M.color.setRGB($t,_t,R),M.opacity=.34*Mt*Mt+.06*Mt;for(let M of et.children)M.material.color.setRGB($t,_t,R),M.material.opacity=.85*Mt;for(let M of ht){let H=1;M.kind==="strobe"?H=Math.floor(ct*1.1)%2===0&&ct*1.1%1<.12?1:0:M.kind==="tail"&&(H=ct%1.6<.8?.9:.25),M.mat.opacity=H*(s.visuals.ship.lights?1:0),M.halo.material.opacity=H*.55*(s.visuals.ship.lights?1:0)}c.emissiveIntensity=0}}}var $l=s=>s<0?0:s>1?1:s,Ea;function dv(){if(Ea)return Ea;let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ea=new gi(s),Ea}var fv=`
varying vec3 vN; varying vec3 vP; varying vec3 vView;
void main() {
  vP = position; vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}`,pv=`
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
}`,mv=`
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
}`,gv=`
precision highp float;
varying vec3 vCol; varying float vA; varying float vEdge; varying float vSide;
void main() {
  float e = clamp(vEdge, 0.0, 1.0);
  float a = vA * e * e * (1.0 - min(vSide * vSide, 1.0));
  gl_FragColor = vec4(vCol * a, 1.0);
}`,Ta=class{constructor(t,e){this.gfx=t,this.cfg=e,this.scene=new Un,this.camera=new Ne(e.camera.fovDeg,1,.15,6e3),this.ship=Fu(e),this.scene.add(this.ship.root),this.sun=new Gs(16777215,3),this.sun.castShadow=!!e.visuals.ship.shadows,this.sun.shadow.mapSize.set(2048,2048);let n=this.sun.shadow.camera;n.left=-45,n.right=45,n.top=45,n.bottom=-45,n.near=1,n.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.15,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Gs(11189247,0),this.scene.add(this.fill),this.amb=new ra(16777215,0),this.scene.add(this.amb),this._buildEnv(),this.bubbleMat=new oe({vertexShader:fv,fragmentShader:pv,transparent:!0,depthWrite:!1,side:on,blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uForm:{value:0},uTime:{value:0},uSpeed:{value:0},uPulse:{value:0},uOpacity:{value:1},uForwardView:{value:new I(0,0,-1)}}}),this.bubble=new It(new cn(70,96,64),this.bubbleMat),this.bubble.scale.set(1.9,.5,1.7),this.bubble.renderOrder=50,this.bubble.visible=!1,this.bubble.frustumCulled=!1,this.scene.add(this.bubble);{let r=new Float32Array(7800),o=new Float32Array(650*4*4),a=new Float32Array(650*4*2),l=new Uint32Array(650*6),c=12345,d=()=>(c=c*1664525+1013904223>>>0)/4294967296;for(let h=0;h<650;h++){let f=d()*Math.PI*2,p=d(),v=d(),g=d();for(let m=0;m<4;m++){let x=h*4+m;o.set([f,p,v,g],x*4),a.set([m<2?0:1,m%2?1:-1],x*2)}l.set([h*4,h*4+1,h*4+2,h*4+1,h*4+3,h*4+2],h*6)}let u=new ye;u.setAttribute("position",new de(r,3)),u.setAttribute("aP",new de(o,4)),u.setAttribute("aC",new de(a,2)),u.setIndex(new de(l,1)),this.flowMat=new oe({vertexShader:mv,fragmentShader:gv,transparent:!0,depthWrite:!1,depthTest:!0,side:Ee,blending:hn,blendEquation:Te,blendSrc:Ce,blendDst:Ce,uniforms:{uTime:{value:0},uFlow:{value:0},uLen:{value:0},uSpan:{value:3600},uBub:{value:120},uWidth:{value:1.6},uAmp:{value:0},uRes:{value:new Ct(1,1)}}}),this.flow=new It(u,this.flowMat),this.flow.frustumCulled=!1,this.flow.renderOrder=40,this.flow.visible=!1,this.scene.add(this.flow)}this.t=0}_buildEnv(){let t=this.gfx.renderer,e=new ps(t),n=new Un,i=new oe({side:Ue,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`precision highp float; varying vec3 vD;
        void main(){ float d = vD.y;                       // +Y = toward the nearest big body (reflected light)
          float g = smoothstep(-0.15, 1.0, d);
          vec3 c = vec3(0.0) + vec3(1.0, 1.0, 1.0) * pow(g, 1.4);
          // faint cool floor so the far side is not pure black
          c += vec3(0.02, 0.025, 0.035);
          gl_FragColor = vec4(c, 1.0); }`});n.add(new It(new cn(10,32,16),i)),this.envRT=e.fromScene(n,.04),this.scene.environment=this.envRT.texture,e.dispose()}update(t){this.t+=t.dt||0;let e=this.ship.root;e.quaternion.copy(t.quat),e.visible=t.cam.dist>this.cfg.ship.lengthM*this.cfg.camera.hideShipBelowLengths;let{yaw:n,pitch:i,dist:r,up:o}=t.cam,a=Math.cos(i),l=new I(Math.sin(n)*a,Math.sin(i),Math.cos(n)*a),c=l.clone().negate(),d=new I(0,a>=0?1:-1,0),u=new I().crossVectors(c,d);u.lengthSq()<1e-8&&u.set(Math.cos(n),0,-Math.sin(n)),u.normalize();let h=new I().crossVectors(u,c),f=new Se().setFromRotationMatrix(new Qt().makeBasis(u,h,c.clone().negate())),p=l.clone().multiplyScalar(r).add(new I(0,o,0)),v=1-un(this.cfg.ship.lengthM*.15,this.cfg.ship.lengthM*1,r),g=(t.camFrame||t.quat).clone().slerp(t.quat,v),m=g.clone().multiply(f),x=p.clone().applyQuaternion(g);this.camera.position.copy(x),this.camera.quaternion.copy(m),this.camera.near=Math.max(.15,(r-60)*.1),this.camera.far=r+4500,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0);let _=t.exposure,y=Math.PI,E=t.sunE,T=t.sunVisible??1;this.sun.color.setRGB(1,1,1),this.sun.intensity=y*_*1*Math.max(E[0]*.2126+E[1]*.7152+E[2]*.0722,0)*T,this.sun.color.setRGB(E[0]/(E[1]||1),1,E[2]/(E[1]||1)),this.sun.color.multiplyScalar(1);let A=new I().fromArray(t.sunDir);this.sun.position.copy(A).multiplyScalar(200),this.sun.target.position.set(0,0,0),this.sun.visible=T>.001,this.sun.castShadow=!!this.cfg.visuals.ship.shadows;let C=t.bodyShine||0;this.scene.environmentIntensity=y*_*(C*1+4e-9*0+0)+0;let S=new I().fromArray(t.bodyDir||[0,1,0]),b=new Se().setFromUnitVectors(new I(0,1,0),S);this.scene.environmentRotation=new Fe().setFromQuaternion(b),this.amb.intensity=y*_*(t.ambientE||0)+.015*(1-Math.min(1,t.warp.form))*(this.cfg.visuals.ship.shadowFill??1),this.ship.update(t.dt||0,this.t,{gimbal:t.gimbal,engines:t.engines,speed01:t.warp.speed01,throttle:t.throttle,warp:t.warp.form,engineOn:!0});let P=t.warp.form;if(this.bubble.visible=P>.002||t.warp.pulse>.01,this.bubble.visible){let U=this.bubbleMat.uniforms;U.uForm.value=P,U.uTime.value=this.t,U.uSpeed.value=t.warp.speed01,U.uPulse.value=t.warp.pulse,U.uOpacity.value=this.cfg.warp.visual.bubbleOpacity;let F=.35+.65*un(0,.6,P);this.bubble.scale.set(1.9*F,.5*F,1.7*F*(1+.12*t.warp.speed01)),this.bubble.quaternion.copy(t.quat)}{let U=t.warp.speed01,F=P*(.7-.4*U)*this.cfg.warp.visual.streakScale;if(this.flow.visible=F>.004,this.flow.visible){let N=this.flowMat.uniforms;N.uTime.value=this.t,N.uFlow.value=350+9e3*Math.pow(U,1.2),N.uLen.value=40+900*U,N.uAmp.value=.22*F,N.uBub.value=133*(.35+.65*un(0,.6,P)),N.uRes.value.set(this.gfx.W,this.gfx.H),N.uWidth.value=Math.max(1.2,1.8*this.gfx.W/1600),this.flow.quaternion.copy(t.quat)}}return{camQuat:m,offsetWorld:x}}render(t){t.render(this.scene,this.camera)}};var ce=299792.458,en=s=>new I(s[0],s[1],s[2]),Aa=class{constructor(t,e){this.uni=t,this.cfg=e,this.cat=t.cat;let n=e.sim.startTime;this.jd=n==="now"||!n?zl(new Date):zl(new Date(n)),this.timeIndex=e.time.initialStep,this.timeScale=e.time.steps[this.timeIndex],this.timeEff=this.timeScale,this.timeAuto=e.time.auto.enabled,this.system=t.solar,this.ref=null,this.anchorPc=[0,0,0],this.pos=[0,0,0],this.vel=[0,0,0],this.q=new Se,this.angVel=new I,this.qCam=new Se,this.camRecentre=0,this._attRate=0,this.gimbal={x:0,y:0},this._attErr=null,this._dtFrame=1/60,this.speedTarget=0,this.speed=0,this.warp={on:!1,c:0,step:0,form:0,pulse:0,flash:0,capC:1/0,capWhy:"",dropping:!1,rampTimer:0},this.mode="free",this.orbit=null,this.course=null,this.trip={elapsed:0,start:null,label:""},this.input={throttle:0,yaw:0,pitch:0,roll:0,brake:!1},this.messages=[],this.msgTimer=0,this.lastSafeBody=null,this.safeHit=0,this.frameCount=0,this.tour=null,this._destCache=null,this._destT=-1,this.eng={rocket:0,cruise:0,warp:0},this.ins=null,this.xfer=null,this.thrust=0,this.thrustT=0,this.flipping=!1,this.intentDir=null,this.cam={yaw:0,pitch:.28,dist:e.ship.lengthM*e.camera.chaseDistanceLengths,up:e.ship.lengthM*.1,yawT:0,pitchT:.28,distT:e.ship.lengthM*e.camera.chaseDistanceLengths,drift:!1},this.autoCamRecenter=0,this.startTour=e.sim.startWithTour,this.placeAtBody(t.solar.get("earth"),5.5,.9,.3)}say(t,e=4){this.messages.push({msg:t,t:e}),this.messages.length>4&&this.messages.shift()}refPos(t=this.jd){return this.ref?this.ref.positionAt(t):[0,0,0]}refVel(t=this.jd){return this.ref?this.ref.velocityAt(t):[0,0,0]}sysPos(t=this.jd){let e=this.refPos(t);return[e[0]+this.pos[0],e[1]+this.pos[1],e[2]+this.pos[2]]}sysVel(t=this.jd){let e=this.refVel(t);return[e[0]+this.vel[0],e[1]+this.vel[1],e[2]+this.vel[2]]}shipPc(t=this.jd){let e=this.sysPos(t),n=this.system?this.system.originPc:this.anchorPc;return[n[0]+e[0]/ie,n[1]+e[1]/ie,n[2]+e[2]/ie]}forward(){return new I(0,0,-1).applyQuaternion(this.q)}up(){return new I(0,1,0).applyQuaternion(this.q)}right(){return new I(1,0,0).applyQuaternion(this.q)}setRef(t,e=this.jd){if(t===this.ref)return;let n=this.sysPos(e),i=this.sysVel(e);this.ref=t;let r=this.refPos(e),o=this.refVel(e);this.pos=[n[0]-r[0],n[1]-r[1],n[2]-r[2]],this.vel=[i[0]-o[0],i[1]-o[1],i[2]-o[2]]}enterOrbit(t,e,n,i,r=0,o=!1){this.setRef(t);let a=Math.sqrt(Math.max(t.gm,1e-6)/(e*e*e))*(o?-1:1);this.orbit={body:t,r:e,ex:n,ey:i,theta:r,omega:a},this._applyOrbit(0)}_applyOrbit(t){let e=this.orbit;e.theta+=e.omega*t,this._applyOrbitState()}_applyOrbitState(){let t=this.orbit,e=Math.cos(t.theta),n=Math.sin(t.theta);this.pos=[t.r*(e*t.ex[0]+n*t.ey[0]),t.r*(e*t.ex[1]+n*t.ey[1]),t.r*(e*t.ex[2]+n*t.ey[2])];let i=t.r*t.omega;this.vel=[i*(-n*t.ex[0]+e*t.ey[0]),i*(-n*t.ex[1]+e*t.ey[1]),i*(-n*t.ex[2]+e*t.ey[2])]}breakOrbit(){this.orbit&&(this.orbit=null,this.speedTarget=Jt(this.vel))}placeAtBody(t,e,n=.6,i=.25){let r=Math.max(t.safeRadiusKm(this.cfg),t.radiusKm*e),o=fe([Math.cos(n)*Math.cos(i),Math.sin(n)*Math.cos(i),Math.sin(i)]),a=fe(je(t.pole,o));(!isFinite(a[0])||Jt(a)<1e-6)&&(a=kn(o)),this.system=t.system,this.enterOrbit(t,r,o,a,0);let l=en(this.vel).normalize();this._lookAlong(l,1/0,new I(0,0,1))}_lookAlong(t,e=1/0,n){let i=t.clone().normalize();if(i.lengthSq()<.5)return;let r=n?n.clone():this.up().clone();Math.abs(r.dot(i))>.98&&(r=new I(0,0,1)),Math.abs(r.dot(i))>.98&&(r=new I(0,1,0));let o=new Qt().lookAt(new I(0,0,0),i.clone(),r),a=new Se().setFromRotationMatrix(o);if(e===1/0){this.q.copy(a),this.qCam.copy(a),this._attRate=0;return}let l=this.cfg.ship,c=Math.max(this._dtFrame,1e-4),d=this.q.angleTo(a);if(d<1e-4){this._attRate*=Math.exp(-c/.2);return}let u=Math.min(e/c,l.maxTurnDegPerSec*Math.PI/180),h=Math.min(u,l.attitudeGain*d*1+8e-4);this._attRate+=(h-this._attRate)*(1-Math.exp(-c/l.attitudeLagSec));let f=Math.min(d,Math.max(this._attRate,0)*c),p=this.q.clone().invert().multiply(a);p.w<0&&(p.x=-p.x,p.y=-p.y,p.z=-p.z,p.w=-p.w);let v=Math.sqrt(Math.max(1-p.w*p.w,1e-12));this._attErr={ax:p.x/v,ay:p.y/v,mag:Math.min(d,.35)},this.q.rotateTowards(a,f)}rotateShip(t){let e=this.q.clone();this.q.multiply(t).normalize();let n=this.q.clone().multiply(e.invert());this.qCam.premultiply(n).normalize()}recenterCamera(){this.camRecentre=1.2}camToward(t,e=0,n=0,i,r=!0){let o=this.qCam.clone().invert(),a=en(t).normalize().applyQuaternion(o),l=Math.atan2(a.x,a.z)+e,c=Math.asin(bt(a.y,-1,1))+n;if(r)this.cam.yaw=this.cam.yawT=l,this.cam.pitch=this.cam.pitchT=c,i!=null&&(this.cam.dist=this.cam.distT=i);else{let d=l-this.cam.yawT;d=Math.atan2(Math.sin(d),Math.cos(d)),l=this.cam.yawT+d,this.cam.yawT=l,this.cam.pitchT=c,i!=null&&(this.cam.distT=i)}}_tourCamera(t){let e=this.tour;if(!e||this.mode!=="tour")return;let n=e.stops[e.idx],i=this.uni.solar.get(n.body);if(!i)return;let r=i.positionAt(this.jd),o=this.sysPos(),a=fe([r[0]-o[0],r[1]-o[1],r[2]-o[2]]);e.camT=(e.camT||0)+t;let l=this.cfg.ship.lengthM,c=e.zoomMul||1,d=performance.now()<(this.cam.holdUntil||0);if(e.phase==="dwell"){let u=this.system.stars[0].positionAt(this.jd),h=fe([u[0]-o[0],u[1]-o[1],u[2]-o[2]]),f=fe(Ks(Pe(a,-1),Pe(h,.12))),p=e.camT*this.cfg.tour.cameraDriftDegPerSec*Math.PI/180,v=l*(2.7+.5*Math.sin(p*.5))*c;d?this.cam.distT=v:this.camToward(f,.2*Math.sin(p*.9)+.08,.1+.04*Math.sin(p*.6),v,!1)}else{let u=e.camT*.35;d||(this.cam.yawT=.35*Math.sin(u),this.cam.pitchT=.3+.06*Math.sin(u*.7)),this.cam.distT=l*2.6*c}}_capK(t){if(this.system)return t;let e=this.cfg.time.interstellarMaxC;if(!(e>0))return t;let n=Math.max(this.speed,1);return Math.max(1,Math.min(t,e*ce/n))}get kNow(){return this.warp.on?this._warpK():this.ins?this.ins.k:this.xfer?this.xfer.k:this._capK(this.timeAuto&&this.course?this.timeEff:this.timeScale)}setTimeIndex(t){this.timeIndex=bt(t,0,this.cfg.time.steps.length-1),this.timeScale=this.cfg.time.steps[this.timeIndex],this.timeAuto=!1}setTimeAuto(t){this.timeAuto=t}getDestinations(t=!1){let e=performance.now();if(!t&&this._destCache&&e-this._destT<this.cfg.destinations.refreshSec*1e3)return this._destCache;let n={bodies:[],systems:[]};if(this.system)for(let o of this.system.bodies){if(o.kind==="belt")continue;let a=o.positionAt(this.jd),l=this.sysPos();n.bodies.push({body:o,name:o.name,kind:o.kind,dist:Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2]),parent:o.parent})}let i=this.shipPc(),r=this.uni.destinationsNear(i,this.cfg.destinations.radiusLy);for(let o of r)this.system&&o.group.members.some(a=>this.system.starIndices&&this.system.starIndices.includes(a))||n.systems.push(o);return n.systems=n.systems.slice(0,this.cfg.destinations.maxListed),this._destCache=n,this._destT=e,n}searchSystems(t,e=14){if(!t||t.trim().length<2)return[];let n=this.cat,i=this.shipPc(),r=this.cfg.destinations.radiusLy,o=new Set,a=[];for(let l of n.search(t)){let c=n.systemOf(l,this.cfg.destinations.groupAu);if(!c||o.has(c.key)||(o.add(c.key),this.system&&this.system.starIndices&&c.members.some(h=>this.system.starIndices.includes(h))))continue;let d=c.centre,u=Math.hypot(d[0]-i[0],d[1]-i[1],d[2]-i[2])*Ws;a.push({group:c,name:c.name,distLy:u,known:c.members.some(h=>n.hasKnownPlanets(h)),stars:c.members.length,outOfRange:u>r})}return a.sort((l,c)=>l.distLy-c.distLy),a.slice(0,e)}engageAutopilot(){let t=this.course;if(!t){this.say("No course set");return}if(t.engaged){this.disengageAutopilot();return}this.stopTour(),this.course=t,t.engaged=!0,t.userStep=!1,this.mode="auto",this.timeAuto=this.cfg.time.auto.enabled,this.xfer=null,(t.kind==="body"||t.phase==="align")&&this.breakOrbit(),this.say("Autopilot engaged")}disengageAutopilot(t="Autopilot disengaged \u2014 manual control"){let e=this.course;e&&(e.engaged=!1),this.mode==="auto"&&(this.mode="free"),this.timeAuto=!1,this.speedTarget=this.warp.on?this.speedTarget:Jt(this.vel),t&&this.say(t)}cancelCourse(t){this.course=null,this.mode==="auto"&&(this.mode="free"),t&&this.say(t)}stopTour(){this.tour&&(this.tour=null,this.mode==="tour"&&(this.mode="free"),this.course=null,this.timeAuto=!1,this.timeIndex=0,this.timeScale=this.cfg.time.steps[0],this.timeEff=this.timeScale,this.cam.yawT=this.cam.yaw,this.say("Tour ended \u2014 you have the helm"))}_dwellScale(t){if(typeof t.timeScale=="number")return t.timeScale;let e=this.orbit;if(!e)return 60;let n=2*Math.PI*Math.sqrt(Math.pow(e.r,3)/Math.max(e.body.gm,1e-6));return bt(n/this.cfg.tour.orbitSeconds,1,this.cfg.time.steps[this.cfg.time.steps.length-1])}beginTour(){let t=this.cfg.tour.stops.filter(e=>this.uni.solar.get(e.body));if(t.length){if(this.system!==this.uni.solar){this.say("The tour runs in the Solar System");return}this.cancelCourse(),this.tour={idx:-1,phase:"dwell",timer:0,stops:t},this.mode="tour",this.timeAuto=!0,this._tourNext(!0)}}_tourNext(t=!1){let e=this.tour;e.idx=(e.idx+1)%e.stops.length;let n=e.stops[e.idx],i=this.uni.solar.get(n.body);if(t&&n.legSeconds===0){this.warp.on=!1,this.warp.c=0,this.warp.form=0,this.placeAtBody(i,n.distance,.9,.3),e.phase="dwell",e.timer=n.dwell,this.timeScale=this._dwellScale(n),this.timeEff=this.timeScale,this.timeAuto=!1,this.mode="tour";return}e.phase="travel",this.course={kind:"body",body:i,radius:Math.max(i.safeRadiusKm(this.cfg),i.radiusKm*n.distance),targetSeconds:n.legSeconds,tour:!0,engaged:!0,label:i.name},this.timeAuto=!0,this.mode="tour",this.trip={elapsed:0,label:i.name}}setCourseBody(t,e="orbit",n=null){if(!t||t.system!==this.system)return;this.stopTour();let i=t.safeRadiusKm(this.cfg),r=e==="approach"?Math.max(i*1.5,t.radiusKm*this.cfg.autopilot.approachRadii):Math.max(i,t.radiusKm+this.cfg.autopilot.arrivalOrbitAltKm);if(n!=null&&isFinite(n)&&(r=Math.max(i,t.radiusKm+n)),this.xfer&&e==="orbit"){this.say("Orbit change already under way \u2014 wait for the burn to finish (or press W/S/X to abort)",4);return}if(this.orbit&&this.orbit.body===t&&e==="orbit"){let o=t.soiKm;if(isFinite(o)&&(r=Math.min(r,o*.9)),this.course=null,this.mode==="auto"&&(this.mode="free"),Math.abs(r-this.orbit.r)<.002*r){this.say("Already in that orbit");return}this._startTransfer(t,r);return}this.xfer=null,this.course={kind:"body",body:t,mode:e,radius:r,targetSeconds:this.cfg.time.auto.targetSeconds,label:t.name,engaged:!1},this.trip={elapsed:0,label:t.name},this.say(`Course set: ${t.name}${e==="approach"?" (approach)":""} \u2014 aligning; press AUTO to engage the autopilot`,4)}setCourseSystem(t){if(t.outOfRange){this.say(`${t.name} is ${t.distLy.toFixed(1)} ly away \u2014 courses reach ${this.cfg.destinations.radiusLy} ly (warp closer first)`,4);return}this.stopTour();let e=this.uni.systemForGroup(t.group);this.course={kind:"system",group:t.group,system:e,name:t.name,targetPc:t.group.centre,phase:"align",label:t.name,hpKm:this.uni.heliopauseOfStar(t.group.primary),engaged:!1},this.trip={elapsed:0,label:t.name},this.say(`Course set: ${t.name} \u2014 ${t.distLy.toFixed(2)} ly \u2014 aligning; press AUTO to engage the autopilot`,4)}get subKms(){return this.cfg.ship.maxSublightC*ce}canEngageWarp(){let t=this.shipPc(),e=this.uni.nextBoundary(t,[this.forward().x,this.forward().y,this.forward().z],1e9);return e.inside?{ok:!1,why:`inside the heliopause of ${this.cat.name(e.inside.star)}`}:this.system&&Jt(this.sysPos())<this.system.heliopauseKm*this.cfg.warp.minEngageClearanceFraction?{ok:!1,why:"inside the heliopause \u2014 sub-light only"}:{ok:!0}}engageWarp(t=0){if(this.warp.on)return;let e=this.canEngageWarp();if(!e.ok){this.say(`Warp unavailable: ${e.why}`);return}this.breakOrbit(),this.leaveSystemFrame();let n=this.warp;n.on=!0,n.step=bt(t,0,this.cfg.warp.steps.length-1),n.c=Math.max(this.speed/ce,.02),n.dropping=!1,n.rampTimer=0,n.engagedAt=this.jd,this.say("Warp field forming")}disengageWarp(){this.warp.on&&(this.course&&this.course.engaged&&this.course.kind==="system"&&this.disengageAutopilot("Autopilot disengaged \u2014 warp dropped by the pilot"),this.warp.dropping=!0,this.warp.step=-1,this.say("Dropping out of warp"))}setSpeed(t,e){let n=this.cfg.ship.speedPresets[t];n&&(this.commandSpeed(n[bt(e,0,n.length-1)]*(t==="cruise"?ce:1)),this.speedPreset={regime:t,i:bt(e,0,n.length-1)})}commandSpeed(t){if(this.mode==="tour"&&this.stopTour(),this.course&&this.course.engaged&&this.disengageAutopilot("Autopilot disengaged \u2014 speed set manually"),this.ins=null,this.xfer=null,this.speedPreset=null,this.warp.on){this.pendingSpeed=t,this.disengageWarp();return}this.orbit&&this.breakOrbit(),this.speedTarget=bt(t,0,this.cfg.ship.maxSublightC*ce),this.intentDir=this.forward().clone()}speedRegime(){return Math.max(this.speed,this.speedTarget)<this.cfg.ship.orbitalMaxKmS?"orbital":"cruise"}setWarpStep(t){if(!this.warp.on){this.engageWarp(t),this.course&&(this.course.userStep=!0);return}this.warp.dropping=!1,this.warp.step=bt(t,0,this.cfg.warp.steps.length-1),this.course&&(this.course.userStep=!0)}stepWarp(t){if(!this.warp.on){t>0&&this.setWarpStep(0);return}this.setWarpStep(this.warp.step+t)}leaveSystemFrame(){if(!this.system)return;let t=this.sysPos(),e=this.sysVel();this.anchorPc=this.system.originPc.slice(),this.ref=null,this.pos=t,this.vel=e,this.leftSystem=this.system,this.system=null}enterSystem(t){let e=this.sysPos(),n=this.sysVel(),i=[this.anchorPc[0]-t.originPc[0],this.anchorPc[1]-t.originPc[1],this.anchorPc[2]-t.originPc[2]];this.pos=[i[0]*ie+e[0],i[1]*ie+e[1],i[2]*ie+e[2]],this.vel=n,this.ref=null,this.system=t,this.anchorPc=t.originPc.slice(),this.say(`Entering ${/system$/i.test(t.name)?"the "+t.name:"the "+t.name+" system"}`),this._destCache=null}governor(){let t=Math.LN10/this.cfg.warp.decelSecPerDecade,e=this.shipPc(),n=this.forward(),r=this.cfg.warp.steps[this.cfg.warp.steps.length-1]*ce/t*1.6+2e12,o=this.uni.nextBoundary(e,[n.x,n.y,n.z],r);if(o.inside)return{capC:0,why:"heliopause",x:0,star:o.inside.star};if(o.ahead){let a=Math.max(o.ahead.distKm-this.cfg.warp.arrivalMarginAu*zt,0);return{capC:(this.subKms+t*a)/ce,why:"heliopause",x:a,star:o.ahead.star,hpKm:o.ahead.radiusKm}}return{capC:1/0,why:"",x:1/0}}update(t){let e=Math.min(t,this.cfg.sim.maxFrameDt),n=this.cfg.sim.physicsStep,i=e,r=0;for(;i>1e-9&&r<this.cfg.sim.maxSubsteps;){let o=Math.min(n,i);this._step(o),i-=o,r++}this.frameCount++;for(let o of this.messages)o.t-=e;this.messages=this.messages.filter(o=>o.t>0),this.warp.pulse=Math.max(0,this.warp.pulse-e*.9),this.warp.flash=Math.max(0,this.warp.flash-e*1.4)}_step(t){let e=this.cfg,n=e.ship;this._dtFrame=t,this._attErr=null,this.startTour&&(this.startTour=!1,this.beginTour());let i=this.input,r=Math.abs(i.yaw)+Math.abs(i.pitch)+Math.abs(i.roll)>.001,o=Math.abs(i.throttle)>.001||i.brake;(r||o)&&this.mode==="tour"&&this.stopTour(),o&&this.course&&this.course.engaged&&!this.warp.on&&(this.course.kind==="body"||this.course.phase!=="warp")&&this.disengageAutopilot("Autopilot disengaged \u2014 manual control");let a=n.turnRateDegPerSec*Math.PI/180,l=new I(i.pitch,i.yaw,i.roll).multiplyScalar(a);if(this.angVel.lerp(l,1-Math.exp(-t/Math.max(.03,n.steerSmoothing))),this.mode!=="auto"||r){let p=new Se().setFromEuler(new Fe(this.angVel.x*t,this.angVel.y*t,this.angVel.z*t,"YXZ"));this.rotateShip(p)}let c=this.warp.on,d=c?this._warpK():this.timeScale;this.thrustT=0,this.course&&this._autopilot(t),this.mode==="tour"&&this.tour&&this.tour.phase==="dwell"&&(this.tour.timer-=t,this.timeAuto=!1,d=c?this._warpK():this.timeScale,this.tour.timer<=0&&this._tourNext()),this.timeAuto&&this.course&&!c?d=this.timeEff:c||(this.timeEff=this.timeScale),c||(d=this.ins?this.ins.k:this.xfer?this.xfer.k:this._capK(d));let u=t*d;this.timeUsed=d,this.warp.on?this._warpMulti(u):this._sublightStep(t,u,o),this.jd+=u/86400,this.trip.elapsed+=u,this._frameManagement(),this._wallOfSafeOrbits(),this._tourCamera(t),this.speed=this.warp.on?this.warp.c*ce:Jt(this.vel),this.thrust+=(this.thrustT-this.thrust)*(1-Math.exp(-t/.18));{let p=this.eng,v=!this.warp.on&&!this.ins&&Math.max(this.speed,this.speedTarget)>=n.orbitalMaxKmS,g=bt(Math.log10(Math.max(this.speed,1)/n.orbitalMaxKmS)/Math.log10(n.maxSublightC*ce/n.orbitalMaxKmS),0,1),m={rocket:!this.warp.on&&!v?this.thrust:0,cruise:v?.22+.78*g:0,warp:this.warp.on?.3+.7*bt(Math.log10(Math.max(this.warp.c,1))/Math.log10(this.cfg.warp.steps[this.cfg.warp.steps.length-1]),0,1):0};for(let x of["rocket","cruise","warp"])p[x]+=(m[x]-p[x])*(1-Math.exp(-t/(m[x]>p[x]?1.6:2.4)))}{let p=(this.cfg.ship.gimbalMaxDeg||6)*Math.PI/180,v=this._attErr,g=1-Math.exp(-t/.25),m=v?-v.ax*bt(Math.abs(v.mag)/.2,0,1)*p:0,x=v?-v.ay*bt(Math.abs(v.mag)/.2,0,1)*p:0;this.gimbal.x+=(m-this.gimbal.x)*g,this.gimbal.y+=(x-this.gimbal.y)*g,v||(this._attRate*=Math.exp(-t/.15))}this.camRecentre>0&&(this.camRecentre-=t,this.qCam.slerp(this.q,1-Math.exp(-t/.35)),this.camRecentre<=0&&this.qCam.copy(this.q));let h=this.cam,f=1-Math.exp(-t/Math.max(this.cfg.camera.smoothingSec,.01));h.yawT-=Be*Math.round((h.yawT-h.yaw)/Be),h.pitchT-=Be*Math.round((h.pitchT-h.pitch)/Be),h.yaw+=(h.yawT-h.yaw)*f,h.pitch+=(h.pitchT-h.pitch)*f,h.dist+=(h.distT-h.dist)*f}_startTransfer(t,e){let n=this.orbit,i=t.gm,r=e>n.r,o=n.r,a=.5*(o+e),l=Math.sqrt(i*(2/o-1/a)),c=Math.sqrt(i*(2/e-1/a)),d=Math.sqrt(i/e),u=this.cfg.ship.maneuverAccelMs2*.001;this.xfer={body:t,mu:i,goalR:e,raising:r,phase:"turn1",vt1:l,dv2:Math.abs(d-c),a:u,k:1,aps:r?"apo":"peri",eta:0},this.orbit=null,this.setRef(t),this.say(`Orbit change: ${r?"raising":"lowering"} to ${Ie(e-t.radiusKm)} \u2014 ${r?"prograde":"retrograde"} burn, coast, circularise`)}_xferStep(t,e){let n=this.xfer,i=n.mu,r=n.raising?1:-1,o=Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01,a=this.pos,l=this.vel,c=fe(l),d=en(c).multiplyScalar(r),u=n.dv2/(2*n.a),f=n.phase==="turn1"||n.phase==="burn1"||n.phase==="turn2"||n.phase==="burn2"?d:en(c),p=this.cfg.ship.flipRateDegPerSec*Math.PI/180;o||this._lookAlong(f,p*t,this.up());let v=this.forward().dot(f)>.985,g=this.forward(),m=e,x=0;this.thrustT=0;let _=(y,E)=>{let T=Math.min(n.a*y,E);return l=[l[0]+g.x*T,l[1]+g.y*T,l[2]+g.z*T],T};for(;m>1e-9&&x++<400;){if(n.phase==="turn1")if(v)n.phase="burn1";else{[a,l]=Qs(i,a,l,m),m=0;break}if(n.phase==="burn1"||n.phase==="burn2"){let y=n.phase==="burn1"?n.vt1:Math.sqrt(i/Jt(a)),E=Jt(l),T=n.raising?y-E:E-y;if(T<=2e-4*y){if(n.phase==="burn1"){n.phase="coast";continue}this._finishTransfer(a,l);return}let A=Math.min(m,.5);if(v){let C=Math.min(n.a*A,T),S=[l[0]+g.x*C*.5,l[1]+g.y*C*.5,l[2]+g.z*C*.5],[b,P]=Qs(i,a,S,A);a=b,l=[P[0]+g.x*C*.5,P[1]+g.y*C*.5,P[2]+g.z*C*.5],this.thrustT=1}else[a,l]=Qs(i,a,l,A);m-=A;continue}if(n.phase==="coast"||n.phase==="turn2"){let y=ku(i,a,l,n.aps);n.eta=y;let E=n.phase==="coast"?y-u-10:y-u;if(E<=1e-6){if(n.phase==="coast"){n.phase="turn2";continue}if(v){n.phase="burn2";continue}[a,l]=Qs(i,a,l,Math.min(m,.25)),m-=Math.min(m,.25);continue}let T=Math.min(m,E);[a,l]=Qs(i,a,l,T),m-=T;continue}break}this.pos=a,this.vel=l,this.speed=Jt(l),this.speedTarget=this.speed,n.phase==="burn1"||n.phase==="burn2"?n.k=bt(this.timeScale,1,100):n.phase==="turn1"||n.phase==="turn2"?n.k=1:(n.coastReal=(n.coastReal||0)+t,n.k=bt((ku(i,a,l,n.aps)-u-10)/Math.max(14-n.coastReal,2),1,this.cfg.time.steps[this.cfg.time.steps.length-1]))}_insertStep(t,e){let n=this.ins,i=this.orbit,r=n.body,o=r.gm,a=n.a,l=Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01,c=Math.cos(i.theta),d=Math.sin(i.theta),u=[-d*i.ex[0]+c*i.ey[0],-d*i.ex[1]+c*i.ey[1],-d*i.ex[2]+c*i.ey[2]],h=Math.sqrt(o/i.r),f=en(u);l||this._lookAlong(f,Ss(this.cfg,t,this.forward().angleTo(f)));let p=this.forward().dot(f),v=e,g=0,m=!1;for(;v>1e-9&&g++<400;){let x=Math.min(v,.25);if(v-=x,p>.985&&n.vt<h&&(n.vt=Math.min(h,n.vt+a*p*x),m=!0),i.omega=n.vt/i.r,i.theta+=i.omega*x,n.vt>=h*.99999)break}this._applyOrbitState(),m&&(this.thrustT=1),n.k=p>.985?bt(h/a/8,1,30):1,this.speed=Jt(this.vel),this.speedTarget=this.speed,n.vt>=h*.99999&&(i.omega=Math.sqrt(o/(i.r*i.r*i.r)),this.ins=null,this.say(`In orbit: ${r.name}, ${Ie(i.r-r.radiusKm)} altitude`),this._tourOrDone(n.C))}_finishTransfer(t,e){let n=this.xfer,i=n.body,r=Jt(t),o=Pe(t,1/r),a=Ze(e,Pe(o,Je(e,o))),l=fe(a);this.xfer=null,this.enterOrbit(i,n.goalR,o,l,0),this.say(`In orbit: ${i.name}, ${Ie(n.goalR-i.radiusKm)} altitude`)}_sublightStep(t,e,n){let i=this.cfg.ship;if(this.ins&&(this.input.throttle>.001||this.input.brake)&&(this.ins=null,this.breakOrbit(),this._tourOrDone(null),this.say("Orbit insertion aborted")),this.xfer)if(this.input.throttle>.001||this.input.brake)this.xfer=null,this.speedTarget=Jt(this.vel),this.say("Orbit change aborted");else{this._xferStep(t,e);return}if(this.orbit&&this.ins){this._insertStep(t,e);return}if(this.orbit)if(this.input.throttle>.001)this.breakOrbit();else{this._applyOrbit(e),!(Math.abs(this.input.yaw)+Math.abs(this.input.pitch)>.01)&&!(this.course&&!this.course.engaged)&&this._lookAlong(en(this.vel).normalize(),i.flipRateDegPerSec*Math.PI/180*t,this.up());return}if(this.course&&this.course.autopilotMoved){this.course.autopilotMoved=!1;return}let r=this.input,o=i.maxSublightC*ce,a=i.speedFloorKmS;if(r.throttle!==0){this.speedPreset=null,this.intentDir=this.forward().clone();let A=this.speedTarget;A<a&&(A=r.throttle>0?a:0),A>0&&(A*=Math.pow(10,r.throttle*i.throttleDecadesPerSec*t)),A<a&&(A=0),this.speedTarget=Math.min(o,A)}r.brake&&(this.speedTarget=Math.max(0,this.speedTarget*Math.exp(-t*3))),this.speedTarget<a*.9&&(this.speedTarget=0);let l=this.forward(),c=en(this.vel),d=c.length(),u=!!(this.course&&this.course.engaged),h=d>1e-9?c.clone().divideScalar(d):l.clone(),f=Math.abs(r.yaw)+Math.abs(r.pitch)+Math.abs(r.roll)>.01;(!this._noseSaved||l.angleTo(this._noseSaved)>3e-4||!this.intentDir||d<a*.5)&&(this.intentDir=l.clone());let v=this.intentDir.clone().multiplyScalar(this.speedTarget).sub(c),g=v.length(),m=Math.max(d,this.speedTarget,a);this.burning?g<.003*m&&(this.burning=!1):g>.012*m&&(this.burning=!0);let x=this.burning?0:1/0,_=i.flipRateDegPerSec*Math.PI/180,y=0,E=Math.max(d,this.speedTarget)>=i.orbitalMaxKmS;if(u)this.burning=!1,this.flipping=!1;else if(E){let A=this.speedTarget<d?i.driveSpoolSec*.45:i.driveSpoolSec,C=1-Math.exp(-t/A),S=l.clone().multiplyScalar(this.speedTarget);c.add(S.sub(c).multiplyScalar(C)),this.burning=!1,this.flipping=!1,this.intentDir=l.clone()}else if(g>x||this.burning){let A=v.clone().divideScalar(g),C=l.dot(A),S=v.dot(h)<-.5*g;!f&&(C<.3||this.flipping||S)&&(this.flipping=!0,this._lookAlong(A,_*t,this.up()),C>.97&&!S&&(this.flipping=!1));let b=Math.max(v.dot(l),0);if(b>0&&(this.flipping?C>.93:C>.3||f)){let P=i.maneuverAccelMs2*.001*e,U=Math.min(b,P);c.addScaledVector(l,U),y=bt(U/Math.max(P,1e-12),0,1)}}else this.flipping=!1,!f&&!(this.course&&!this.course.engaged)&&d>a*2&&l.dot(h)<.9995&&this._lookAlong(h,_*t,this.up());this.speedTarget===0&&d<a*.9&&c.set(0,0,0),this.thrustT=Math.max(this.thrustT,y),this._noseSaved=this.forward().clone(),this.vel=[c.x,c.y,c.z];let T=Jt(this.vel);if(T>o){let A=o/T;this.vel=this.vel.map(C=>C*A)}this._prev={jd:this.jd,abs:this.sysPos()},this.pos=[this.pos[0]+this.vel[0]*e,this.pos[1]+this.vel[1]*e,this.pos[2]+this.vel[2]*e]}_warpK(){return bt(this.timeScale,1,this.cfg.warp.maxTimeCompression)}_warpMulti(t){let e=Math.min(80,Math.max(1,Math.ceil(t/.08))),n=t/e;for(let i=0;i<e&&this.warp.on;i++)this._warpStep(n)}_warpStep(t){let e=this.warp,n=this.cfg.warp,i=this.governor();e.capC=i.capC,e.capWhy=i.why,e.govX=i.x;let r=this.cfg.ship.maxSublightC,o=e.step<0?r:n.steps[e.step];i.capC<o&&(o=Math.max(i.capC,r)),this.course&&this.course.kind==="system"&&!e.dropping&&this.course.phase==="warp"&&this.course.engaged&&!this.course.userStep&&(e.rampTimer+=t,e.step<n.steps.length-1&&e.rampTimer>n.secondsPerStep&&e.c>=n.steps[e.step]*.97&&(e.step++,e.rampTimer=0),o=Math.min(n.steps[e.step],Math.max(i.capC,r)),o=Math.max(o,r));let a=Math.log10(Math.max(e.c,.001)),l=Math.log10(Math.max(o,.001));l>a?a=Math.min(l,a+t/n.rampSecPerDecade):a=Math.max(l,a-t/n.decelSecPerDecade),isFinite(i.capC)&&(a=Math.min(a,Math.log10(Math.max(i.capC,r)))),e.c=Math.pow(10,a);let c=this.forward(),d=e.c*ce;this.vel=[c.x*d,c.y*d,c.z*d],this.pos=[this.pos[0]+this.vel[0]*t,this.pos[1]+this.vel[1]*t,this.pos[2]+this.vel[2]*t];let u=e.form;e.form=un(n.bubbleStartC,n.bubbleFullC,e.c),u>.3&&e.form<=.3&&!e._collapsed&&(e.pulse=1,e.flash=1,e._collapsed=!0),e.form>.5&&(e._collapsed=!1);let h=!e.dropping&&e.step>=0&&n.steps[e.step]>r*1.001&&i.capC>r*1.02;e.c<=r*1.0005&&!h&&this._dropToSublight(),i.why==="heliopause"&&i.capC<=0&&this._dropToSublight()}_dropToSublight(){let t=this.warp,e=this.forward(),n=this.subKms;t.on=!1,t.c=0,t.form=0,t.dropping=!1,t._collapsed=!1,t.pulse=1,t.flash=1,t.step=0,this.vel=[e.x*n,e.y*n,e.z*n],this.speed=n,this.speedTarget=this.course&&this.course.engaged?n:0,this.pendingSpeed!=null&&(this.speedTarget=bt(this.pendingSpeed,0,n),this.pendingSpeed=null),this.say("Warp field collapsed \u2014 sub-light")}_courseAlign(t,e){if(this.warp.on)return;let n=this.sysPos(),i;if(e.kind==="body"){if(e.body.system!==this.system)return;let l=e.body.positionAt(this.jd);i=[l[0]-n[0],l[1]-n[1],l[2]-n[2]]}else{let l=this.shipPc();i=[e.targetPc[0]-l[0],e.targetPc[1]-l[1],e.targetPc[2]-l[2]],e.distKm=Jt(i)*ie}let r=en(fe(i)),o=this.forward().angleTo(r);e.aligned=o<.035,e.alignErr=o,!(Math.abs(this.input.yaw)+Math.abs(this.input.pitch)+Math.abs(this.input.roll)>.01)&&!this.flipping&&!this.xfer&&(this._lookAlong(r,Ss(this.cfg,t,o)),this._noseSaved=this.forward().clone())}_autopilot(t){let e=this.course,n=this.cfg.autopilot,i=this.cfg.ship;if(!e.engaged){this._courseAlign(t,e);return}let r=n.cruiseFraction*i.maxSublightC*ce,o=n.accelTimeSec,a=t*this.kNow;e.kind==="body"?this._autoBody(e,t,a,r,n.brakeSeconds):e.kind==="system"&&this._autoSystem(e,t,a,r,o)}_pathWaypoint(t,e,n){let i=this.system;if(!i)return null;let r=this.jd,o=Ze(e,t),a=Je(o,o);if(a<1)return null;let l=this.cfg.autopilot.pathClearance,c=null;for(let d of i.bodies){if(d.kind==="belt"||d===n)continue;let u=d.positionAt(r),h=d.safeRadiusKm(this.cfg),f=h*l;if(Jt(Ze(t,u))<f*1.05)continue;let p=bt(Je(Ze(u,t),o)/a,0,1),v=$s(t,o,p),g=Ze(v,u),m=Jt(g);if(!(m>=f||p<=1e-4)&&(!c||p<c.t)){let x=m>1e-6*f?Pe(g,1/m):fe(je(o,[0,0,1]));(!isFinite(x[0])||Jt(x)<.5)&&(x=kn(fe(o))),c={t:p,body:d,off:Pe(x,f*1.25)}}}return c?{body:c.body,off:c.off}:null}_flyWaypoint(t,e,n,i,r,o,a,l){let c=this.jd,d=this.sysPos(c),u=Ks(this.pathBodyPos(e.body,c),e.off),h=Ze(u,d),f=Jt(h);if(f<1)return!1;let p=Pe(h,1/f),v=n*this.kNow,m=(Math.max(Jt(Ze(i,d))-r,0)+l)/a,x=this.speed+o/this.cfg.autopilot.accelTimeSec*v+.001,_=Math.min(o,m,Math.max(x,o*.001)),y=Math.min(_*v,f),E=$s(d,p,y),T=this.ref?this.ref.positionAt(c+v/86400):[0,0,0];this.pos=Ze(E,T);let A=this.ref?this.ref.velocityAt(c):[0,0,0];return this.vel=Ze(Pe(p,y/Math.max(v,1e-9)),A),this.speedTarget=Jt(this.vel),this._lookAlong(en(p),Ss(this.cfg,n,this.forward().angleTo(en(p)))),this.thrustT=_>this.speed*1.002?1:0,t.autopilotMoved=!0,y<f-1e-6*f}pathBodyPos(t,e){return t.positionAt(e)}_autoClear(t,e,n,i=null){let r=this.system;if(!r)return!1;let o=this.jd,a=this.sysPos(o),l=null,c=2.3,d=null;for(let A of r.bodies){if(A.kind==="belt"||A===i)continue;let C=A.positionAt(o),S=[a[0]-C[0],a[1]-C[1],a[2]-C[2]],b=Jt(S),P=A.safeRadiusKm(this.cfg);b/P<c&&(c=b/P,l=A,d=S)}if(!l)return this._clearing=!1,!1;let u=fe(d),h=l.safeRadiusKm(this.cfg),f=Jt(d),p=Je(e,u),v=p>=0?1/0:f*Math.sqrt(Math.max(1-p*p,0));if(!(p<0&&v<h*1.4||f<h*1.12)&&!(this._clearing&&f<h*1.15))return this._clearing=!1,!1;this._clearing=!0;let m=fe(Ze(e,Pe(u,p))),x=isFinite(m[0])&&Jt(Ze(e,Pe(u,p)))>1e-6?fe(Ks(u,Pe(m,.9))):u,_=Math.min(n,Math.max(h/6,1)),y=Math.max(h*1.5,f);this.timeEff=Math.max(this.timeEff||1,1),this.timeEff=Math.exp(Math.log(this.timeEff)+(Math.log(bt(h*2/_/3.5,1,400))-Math.log(this.timeEff))*.2);let E=t*this.kNow,T=_*E;return this.pos=[this.pos[0]+x[0]*T,this.pos[1]+x[1]*T,this.pos[2]+x[2]*T],this.vel=[x[0]*_,x[1]*_,x[2]*_],this.speed=_,this.speedTarget=_,this.thrustT=1,this._lookAlong(en(x),Ss(this.cfg,t,this.forward().angleTo(en(x)))),this.course&&(this.course.autopilotMoved=!0),!0}_autoBody(t,e,n,i,r){let o=t.body;if(o.system!==this.system){this.cancelCourse("Course cancelled");return}this.breakOrbit();let a=o.positionAt(this.jd),l=this.sysPos(),c=[l[0]-a[0],l[1]-a[1],l[2]-a[2]],d=Jt(c),u=d>1e-6?Pe(c,1/d):[1,0,0];if(this._autoClear(e,u.map(nt=>-nt),i,o))return;let h=t.radius;if((!t.wp||performance.now()-(t.wpT||0)>400)&&(t.wpT=performance.now(),t.wp||(t.wp=this._pathWaypoint(l,a,o))),t.wp){let nt=Math.max(h*.03,1);if(this._flyWaypoint(t,t.wp,e,a,h,i,r,nt))return;t.wp=null,t.wpT=0}let f=d-h,p=this.cfg.ship,v=this.cfg.autopilot,g=p.orbitalMaxKmS,m=p.maneuverAccelMs2*.001,x=Math.max(h*.03,1),_=g*r-x,y=nt=>(nt+x)/r,E=nt=>.9*Math.sqrt(2*m*Math.max(nt,0)),T=Math.max(i*r-x,0);t.realElapsed=(t.realElapsed||0)+e,this._autoTime(f,T,i,r,t,h,o,x,_);let A=e*this.kNow,C=en(u).negate(),S=this.forward(),b=S.angleTo(C);!t.retro&&t.alignedOnce&&f<_+g*r*(v.flipLeadFactor??4)&&(t.retro=!0);let U=!!t.retro?C.clone().negate():C;this._lookAlong(U,Ss(this.cfg,e,S.angleTo(U)));let F=b<.35||t.alignedOnce;if(F&&(t.alignedOnce=!0),!F&&f>0){t.autopilotMoved=!0;return}let N=f,V=0,L=!1;if(f>0){let nt=A;if(f>T){let it=(f-T)/i;nt<=it?(N=f-i*nt,nt=0):(nt-=it,N=T)}if(nt>0&&N>_){let it=r*Math.log((N+x)/(_+x));nt<=it?(N=(N+x)*Math.exp(-nt/r)-x,nt=0):(N=_,nt-=it)}if(nt>0){L=!0;let it=0;for(;nt>1e-9&&it++<400;){let ct=Math.min(nt,.25),rt=Math.min(y(N),E(N));if(N=Math.max(N-rt*ct,0),nt-=ct,N<=0)break}}N=Math.max(N,0),V=(f-N)/Math.max(A,1e-9)}let q=this.speed+i/v.accelTimeSec*A;V>q&&f>T&&(N=f-q*A,V=q);let O=h+N,Z=Pe(u,O),et=o.positionAt(this.jd+A/86400),ht=[et[0]+Z[0],et[1]+Z[1],et[2]+Z[2]],Ut=this.ref?this.ref.positionAt(this.jd+A/86400):[0,0,0];this.pos=[ht[0]-Ut[0],ht[1]-Ut[1],ht[2]-Ut[2]];let Nt=Pe(u,-V),X=o.velocityAt(this.jd),J=this.ref?this.ref.velocityAt(this.jd):[0,0,0];this.vel=[Nt[0]+X[0]-J[0],Nt[1]+X[1]-J[1],Nt[2]+X[2]-J[2]],Math.max(this.speed,V)<g&&(V>this.speed*1.002+1e-9?this.thrustT=b<.5?1:0:L&&S.dot(C)<-.85&&(this.thrustT=.9)),this.speedTarget=V,t.autopilotMoved=!0,t.remaining=N,t.dTarget=O,t.xh=_,N<=.2&&this._arriveAtBody(t,o,u,O,V)}_arriveAtBody(t,e,n,i,r=0){if(t.mode==="approach"){this.setRef(e),this.orbit=null,this.vel=[0,0,0],this.speedTarget=0,this.speed=0,this.pos=Pe(n,i),this.say(`Holding ${Ie(i-e.radiusKm)} above ${e.name}`),this.course=null,this.mode="free",this.timeAuto=!1,this.tour&&this._tourOrDone(t);return}let o=fe(je(e.pole,n));(!isFinite(o[0])||Jt(o)<.2)&&(o=kn(n));let a=.35,l=fe(Ks(Pe(o,Math.cos(a)),Pe(fe(je(n,o)),Math.sin(a))));this.setRef(e),this.orbit={body:e,r:i,ex:n,ey:l,theta:0,omega:0},this._applyOrbitState(),this.ins={body:e,vt:0,a:this.cfg.ship.maneuverAccelMs2*.001,k:1,C:t},this.course=null,this.mode="free",this.timeAuto=!1,this.say(`Arrived \u2014 inserting into orbit around ${e.name}`)}_tourOrDone(t){if(this.course=null,this.tour){let e=this.tour.stops[this.tour.idx];this.tour.phase="dwell",this.tour.timer=e.dwell,this.timeScale=this._dwellScale(e),this.timeAuto=!1,this.timeEff=this.timeScale,this.mode="tour"}else this.mode="free",this.timeAuto=!1}_autoTime(t,e,n,i,r,o,a,l=1,c=0){if(!this.timeAuto)return;let d=this.cfg.time,u=d.steps,h=u[u.length-1],f=Math.max(r.targetSeconds||d.auto.targetSeconds,3),p=Math.max(t-e,0)/n+i*Math.log(1+Math.min(t,e)/Math.max(l,1))+0,v=Math.max(f-(r.realElapsed||0),Math.min(6,f*.3)),g=p/v;r.tour&&(g=Math.max(g,1));let m=a?a.radiusKm:1;a&&t<d.auto.approachDistanceRadii*m&&(g=Math.min(g,u[d.auto.approachStep])),t<c+this.cfg.ship.orbitalMaxKmS*i*((this.cfg.autopilot.flipLeadFactor??4)+1)&&(g=Math.min(g,this.cfg.autopilot.finalApproachK)),g=bt(g,1,h),this.timeEff=Math.exp(Math.log(this.timeEff||1)+(Math.log(g)-Math.log(this.timeEff||1))*.15)}_autoSystem(t,e,n,i,r){let o=this.cfg.ship,a=this.cfg.autopilot;if(this.system&&this.system===t.system){if(a.continueToStar){let v=t.system.stars[0];this.course={kind:"body",body:v,radius:v.safeRadiusKm(this.cfg),targetSeconds:this.cfg.time.auto.targetSeconds,label:v.name,engaged:!0},this.say(`Arrived at ${t.name} \u2014 approaching ${v.name}`)}else this.course=null,this.mode="free",this.say(`Arrived at ${t.name}`);return}let l=this.shipPc(),c=t.targetPc,d=fe([c[0]-l[0],c[1]-l[1],c[2]-l[2]]),u=Math.hypot(c[0]-l[0],c[1]-l[1],c[2]-l[2])*ie;t.distKm=u;let h=en(d),p=this.forward().angleTo(h);if(!this.warp.on||this.warp.c<3?this._lookAlong(h,Ss(this.cfg,e,p)):this._lookAlong(h,.35*e),t.phase==="align"){this.breakOrbit(),this.timeEff=Math.max(1,this.timeEff),p<.09&&(t.phase=this.system?"depart":"warp",t.departT=0),this.vel=this.vel.map(v=>v*Math.exp(-e*.1)),t.autopilotMoved=!1;return}if(t.phase==="depart"){if(this._autoClear(e,d,i))return;let v=this.sysPos(),g=this.system.heliopauseKm-Jt(v);this._autoTimeDepart(g,i);let m=e*this.kNow,x=i/a.accelTimeSec,_=Math.min(i,this.speed+x*m);this.speed<.001&&(_=Math.min(i,x*m));let y=Math.min(_*m,Math.max(g,0)+1),E=_;this.vel=[d[0]*E,d[1]*E,d[2]*E];let T=this.refVel();this.vel=[this.vel[0]-T[0]*0,this.vel[1]-T[1]*0,this.vel[2]-T[2]*0],this.pos=[this.pos[0]+d[0]*y,this.pos[1]+d[1]*y,this.pos[2]+d[2]*y],this.speed=E,this.speedTarget=E,t.autopilotMoved=!0,E<i*.999&&p<.5&&(this.thrustT=1);return}t.phase==="warp"&&(!this.warp.on&&!this.system&&(this.engageWarp(0),this.warp.step=0),this.warp.on&&(this.warp.step=Math.max(this.warp.step,0)),t.autopilotMoved=!1)}_autoTimeDepart(t,e){if(!this.timeAuto)return;let n=this.cfg.time,i=n.steps[n.steps.length-1],r=this.course;r.departReal=(r.departReal||0)+1/60;let o=Math.max(t,0)/e+this.cfg.autopilot.accelTimeSec*2,a=Math.max(n.auto.targetSeconds*.55,6),l=Math.max(a-r.departReal,2.5),c=bt(o/l,1,i);this.timeEff=Math.exp(Math.log(this.timeEff||1)+(Math.log(c)-Math.log(this.timeEff||1))*.2)}_frameManagement(){let t=this.jd;if(this.system){if(Jt(this.sysPos(t))>this.system.heliopauseKm*1&&!(this.course&&this.course.engaged&&this.course.kind==="body")){let n=this.system;this.leaveSystemFrame(),this.say(`Leaving ${/system$/i.test(n.name),"the "}${n.name}${/system$/i.test(n.name)?"":" system"} \u2014 heliopause crossed`),this._destCache=null,this.course&&this.course.kind==="system"&&this.course.phase==="depart"&&(this.course.phase="warp");return}!this.xfer&&!this.ins&&this._chooseRef(t)}else{let e=this.shipPc(t),n=this.cat.within(e,this.cfg.heliopause.maxAu*1.05*zt/ie),i=null;for(let r of n){let o=this.uni.heliopauseOfStar(r)/ie,a=this.cat.pos[r*3]-e[0],l=this.cat.pos[r*3+1]-e[1],c=this.cat.pos[r*3+2]-e[2],d=Math.hypot(a,l,c);d<o&&(!i||d/o<i.f)&&(i={i:r,f:d/o})}if(i){let r=this.cat.systemOf(i.i,this.cfg.destinations.groupAu),o=this.uni.systemForGroup(r);this.warp.on&&this._dropToSublight(),this.enterSystem(o),this._chooseRef(t,!0)}}}_chooseRef(t,e=!1){let n=this.system;if(!n)return;let i=this.sysPos(t),r=null,o=1/0;for(let a of n.bodies){if(a.kind==="belt"||a.kind==="star")continue;let l=a.soiKm;if(!isFinite(l))continue;let c=a.positionAt(t),d=Math.hypot(i[0]-c[0],i[1]-c[1],i[2]-c[2]),u=l*(this.ref===a?1.08:1);d<u&&l<o&&(r=a,o=l)}if(!r){let a=n.stars[0],l=1/0;for(let c of n.stars){let d=c.positionAt(t),u=Math.hypot(i[0]-d[0],i[1]-d[1],i[2]-d[2]);u<l&&(l=u,a=c)}r=n.stars.length>1?a:null}r!==this.ref&&this.setRef(r,t)}_wallOfSafeOrbits(){let t=this.system;if(!t||this.orbit||this.xfer||this.ins)return;let e=this.jd,n=this._prev?this._prev.jd:e,i=this.sysPos(e),r=this._prev?this._prev.abs:i,o=this.sysVel(e);for(let a of t.bodies){if(a.kind==="belt")continue;let l=a.safeRadiusKm(this.cfg),c=a.positionAt(e),d=[i[0]-c[0],i[1]-c[1],i[2]-c[2]],u=Jt(d);if(u>l*3&&(!this._prev||Jt(Ze(r,i))<u*.2))continue;let h=a.positionAt(n),f=[r[0]-h[0],r[1]-h[1],r[2]-h[2]],p=Ze(d,f),v=Je(p,p),g=1,m=u<l;if(v>0){let b=bt(-Je(f,p)/v,0,1),P=$s(f,p,b);Jt(P)<l&&(m=!0,g=b)}if(!m)continue;let x=g<1&&v>0?fe($s(f,p,g)):fe(d);isFinite(x[0])||(x=[1,0,0]);let _=Pe(x,l*1.0005),y=c,E=[y[0]+_[0],y[1]+_[1],y[2]+_[2]],T=this.refPos(e);this.pos=[E[0]-T[0],E[1]-T[1],E[2]-T[2]];let A=a.velocityAt(e),C=[o[0]-A[0],o[1]-A[1],o[2]-A[2]],S=Je(C,x);if(S<0){let b=this.refVel(e),P=[C[0]-x[0]*S+A[0]-b[0],C[1]-x[1]*S+A[1]-b[1],C[2]-x[2]*S+A[2]-b[2]];this.vel=P}this.speedTarget=Math.min(this.speedTarget,Jt(this.vel)),(this.lastSafeBody!==a||this.safeHit<=0)&&this.say(`Safe-orbit limit: ${a.name} (${Ie(l-a.radiusKm)} altitude)`,3),this.lastSafeBody=a,this.safeHit=.5,this.cfg.ship.orbitHold.enabled&&!this.course&&Jt(C)<20}this.safeHit=Math.max(0,this.safeHit-1/60),this._prev={jd:e,abs:this.sysPos(e)}}betaVector(){if(this.warp.on)return[0,0,0];let t=this.system?this.sysVel():this.vel;return[t[0]/ce,t[1]/ce,t[2]/ce]}visualBeta(){let t=this.warp,e=this.cfg.warp,n=e.visual.maxBeta??.97;if(!t.on)return this.betaVector();let i=this.forward(),r=this.cfg.ship.maxSublightC,o=Math.pow(bt(Math.log10(t.c/r)/Math.log10(e.steps[e.steps.length-1]/r),0,1),.55),a=(r+(n-r)*o)*e.visual.aberrationScale;return[i.x*a,i.y*a,i.z*a]}gammaOf(t){let e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];return 1/Math.sqrt(Math.max(1-e,1e-6))}hud(){let t=this.system,n={warp:this.warp.on,speed:this.speed,c:this.speed/ce,K:this.kNow,jd:this.jd,mode:this.mode};if(n.where=t?this.ref?`${t.name} \xB7 ${this.ref.name}`:t.name:"Interstellar space",n.system=t?t.name:null,n.engaged=!!(this.course&&this.course.engaged),n.fictional=t?t.fictional:!1,n.gamma=this.gammaOf(this.betaVector()),this.course){let i=this.course;if(i.kind==="body"){let r=i.body,o=r.positionAt(this.jd),a=this.sysPos();n.target=r.name,n.targetDist=Math.hypot(a[0]-o[0],a[1]-o[1],a[2]-o[2]),n.targetKind="body"}else i.kind==="system"&&(n.target=i.name,n.targetDist=i.distKm??0,n.targetKind="system",n.phase=i.phase)}return n.trip=this.trip.elapsed,n}eta(){let t=this.course;if(!t)return NaN;let e=this.warp.on?this._warpK():this.timeEff;if(t.kind==="body"){let n=this.cfg.autopilot.cruiseFraction*this.cfg.ship.maxSublightC*ce,i=this.cfg.autopilot.accelTimeSec,r=t.remaining??NaN;return isFinite(r)?(Math.max(r-n*i,0)/n+i*Math.log(1+Math.min(r,n*i)/Math.max(t.radius*.02,1)))/e:NaN}if(t.kind==="system"){let n=(t.distKm??0)-(t.hpKm??0),i=this.warp,r=i.on?Math.max(i.c*ce,1):this.cfg.warp.steps[this.cfg.warp.steps.length-1]*ce*.8;return Math.max(n,0)/r+12}return NaN}};function Nu(s){if(s>1e-8){let t=Math.sqrt(s);return[(1-Math.cos(t))/s,(t-Math.sin(t))/(t*t*t)]}if(s<-1e-8){let t=Math.sqrt(-s);return[(Math.cosh(t)-1)/-s,(Math.sinh(t)-t)/(t*t*t)]}return[.5,1/6]}function Qs(s,t,e,n){let i=Jt(t),r=Jt(e),o=Je(t,e)/i,a=Math.sqrt(s),l=2/i-r*r/s;if(l>1e-14){let _=2*Math.PI/(a*Math.pow(l,1.5));n-=_*Math.trunc(n/_)}let c=a*Math.abs(l)*n,d=.5,u=1/6;for(let _=0;_<60;_++){let y=l*c*c;[d,u]=Nu(y);let E=i*o/a*c*c*d+(1-l*i)*c*c*c*u+i*c-a*n,T=i*o/a*c*(1-y*u)+(1-l*i)*c*c*d+i,A=E/T;if(c-=A,Math.abs(A)<1e-9*Math.max(1,Math.abs(c)))break}let h=l*c*c;[d,u]=Nu(h);let f=1-c*c/i*d,p=n-c*c*c/a*u,v=[f*t[0]+p*e[0],f*t[1]+p*e[1],f*t[2]+p*e[2]],g=Jt(v),m=a/(g*i)*(h*u-1)*c,x=1-c*c/g*d;return[v,[m*t[0]+x*e[0],m*t[1]+x*e[1],m*t[2]+x*e[2]]]}function ku(s,t,e,n){let i=Jt(t),r=Je(e,e),o=2/i-r/s;if(o<=0)return 1/0;let a=1/o,l=Jt(je(t,e)),c=Math.sqrt(Math.max(0,1-l*l*o/s)),d=Math.sqrt(s/(a*a*a)),u=2*Math.PI/d;if(c<1e-6)return .5*u;let h=Je(t,e)/i,f=Math.acos(bt((1-i/a)/c,-1,1)),p=h>=0?f:2*Math.PI-f,v=p-c*Math.sin(p),g=((n==="apo"?Math.PI:2*Math.PI)-v)/d;return g-=u*Math.floor(g/u),g}function Ss(s,t,e){let n=Math.max(Math.PI/Math.max(s.autopilot.turnSeconds,.5),.2),i=Math.min(1,e/Math.max(e,1e-6));return Math.min(e,n*t*(.4+.6*Math.min(1,e/.5)))}var Ou=`
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
`;var Ht=(s,t,e)=>{let n=document.createElement(s);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n},Ra=class{constructor(t,e,n,i){this.sim=t,this.cfg=e,this.gfx=n,this.canvas=i,this.root=document.getElementById("ui");let r=document.createElement("style");r.textContent=Ou,document.head.appendChild(r),this.keys=new Set,this.selected=null,this.labelsEnabled=e.visuals.labels.enabled,this.hidden=!1,this._build(),this._bindInput(),this.fpsAvg=60,this._lastNav=0}_build(){let t=this.root,e=this.sim,n=this.cfg;this.tl=Ht("div","tl panel"),this.tl.style.padding="7px 11px",this.tl.innerHTML='<div class="loc" id="h-loc"></div><div class="sub" id="h-sub"></div><div class="sub" id="h-sub2"></div>',this.tr=Ht("div","tr"),this.chips={};for(let a of["TOUR","FREE","AUTO","WARP"]){let l=Ht("div","chip",a);this.chips[a]=l,this.tr.appendChild(l)}this.chips.AUTO.style.cursor="pointer",this.chips.AUTO.title="autopilot (cruise control) for the set course \u2014 click or press P",this.chips.AUTO.onclick=()=>e.engageAutopilot(),this.banner=Ht("div","banner panel"),this.banner.textContent="fictional system \xB7 procedurally generated",this.toast=Ht("div","toast"),this.speedP=Ht("div","speed panel",`<div class="big" id="h-speed">0 m/s</div><div class="bar"><i id="h-bar" style="width:0%"></i></div>
      <div class="row"><span>velocity</span><b id="h-kms"></b></div><div class="row"><span>\u03B3 / \u03B2</span><b id="h-gam"></b></div><div class="row"><span>frame</span><b id="h-frame"></b></div><div class="row"><span id="h-near-l">nearest</span><b id="h-near"></b></div><div class="row"><span>engine</span><b id="h-eng"></b></div><div class="row"><span>trip clock</span><b id="h-trip"></b></div>`),this.courseP=Ht("div","course panel",""),this.courseP.style.display="none",this.ctl=Ht("div","ctl panel");let i=Ht("div","grp");i.appendChild(Ht("span","lab","time")),this.timeBtns=[],n.time.steps.forEach((a,l)=>{let c=Ht("button","",a>=1e6?a/1e6+"M":a>=1e3?a/1e3+"k":String(a));c.title=`time \xD7${a} (key ${l+1})`,c.onclick=()=>e.setTimeIndex(l),i.appendChild(c),this.timeBtns.push(c)}),this.autoT=Ht("button","","A"),this.autoT.title="automatic time compression for autopilot legs (key 0)",this.autoT.onclick=()=>e.setTimeAuto(!e.timeAuto),i.appendChild(this.autoT);let r=Ht("div","drive");r.innerHTML=`<div class="dh"><span class="lab">drive</span><b id="drv-txt"></b></div>
      <div class="trk" id="drv-trk"><i class="seg o"></i><i class="seg c"></i><i class="seg w"></i><i class="cmd" id="drv-cmd"></i><i class="act" id="drv-act"></i><i class="thumb" id="drv-thumb"></i></div>
      <div class="lbls"><span style="left:0">stop</span><span id="drv-l1"></span><span id="drv-l3"></span><span id="drv-l4"></span></div>
      <div class="legend"><span class="o">ROCKET \xB7 km/s</span><span class="c">NACELLES \xB7 % c</span><span class="w">WARP \xB7 c</span></div>`,this._setupDrive(r);let o=Ht("div","grp");this.btnTour=Ht("button","","TOUR"),this.btnTour.onclick=()=>e.tour?e.stopTour():e.beginTour(),this.btnNav=Ht("button","","NAV"),this.btnNav.onclick=()=>this.toggleNav(),this.btnStop=Ht("button","","HOLD"),this.btnStop.title="cancel autopilot / stop (X)",this.btnStop.onclick=()=>this.stopAll(),this.btnSet=Ht("button","","\u2699"),this.btnSet.title="settings (,)",this.btnSet.onclick=()=>this.toggleSettings(),this.btnHelp=Ht("button","","?"),this.btnHelp.onclick=()=>this.help.classList.toggle("open");for(let a of[this.btnTour,this.btnNav,this.btnStop,this.btnSet,this.btnHelp])o.appendChild(a);this.ctl.append(r,i,o),this.nav=Ht("div","nav panel",'<h4><span>Navigation</span><span id="nav-x" style="cursor:pointer">\xD7</span></h4><div class="srch"><input id="nav-q" type="text" placeholder="search systems (2+ characters)" autocomplete="off" spellcheck="false"></div><div class="list" id="nav-list"></div><div class="foot" id="nav-foot">select a destination</div>'),this.setP=Ht("div","set panel",'<h4><span>Settings</span><span id="set-x" style="cursor:pointer">\xD7</span></h4><div class="body" id="set-body"></div>'),this.help=Ht("div","help panel",`<h4>Controls</h4><div class="cols">
      <div><kbd>W</kbd><kbd>S</kbd> throttle up / down</div><div><kbd>X</kbd> cut throttle \xB7 cancel autopilot</div>
      <div><kbd>A</kbd><kbd>D</kbd> yaw \xB7 <kbd>R</kbd><kbd>F</kbd> pitch \xB7 <kbd>Q</kbd><kbd>E</kbd> roll</div><div>mouse: <b>drag</b> orbit camera \xB7 <b>wheel</b> zoom</div>
      <div><kbd>right-drag</kbd> / <kbd>Shift</kbd>+drag steer ship</div><div><kbd>C</kbd> recentre camera \xB7 <kbd>V</kbd> first-person</div>
      <div><kbd>=</kbd><kbd>-</kbd> / wheel on the drive slider: step through rocket \u2192 nacelle \u2192 warp speeds</div><div><kbd>G</kbd> engage / drop warp \xB7 <kbd>]</kbd><kbd>[</kbd> warp step</div><div><kbd>1</kbd>\u2013<kbd>8</kbd> time compression \xB7 <kbd>0</kbd> auto</div>
      <div><kbd>N</kbd> navigation \xB7 <kbd>Enter</kbd> set course</div><div><kbd>T</kbd> tour on / off \xB7 <kbd>,</kbd> settings</div>
      <div><kbd>O</kbd> orbit lines \xB7 <kbd>L</kbd> labels</div><div><kbd>H</kbd> hide interface \xB7 <kbd>?</kbd> this help</div></div>
      <div style="margin-top:8px;color:#8a8a8a">Speed limit inside a heliopause is ${n.ship.maxSublightC} c. Beyond it the warp drive steps 1 c \u2192 ${n.warp.steps[n.warp.steps.length-1].toLocaleString("en-US")} c and the ship brakes itself to sub-light at the next heliopause. Nothing can be landed on; every body has a safe-orbit wall.</div>`),this.labelLayer=Ht("div"),this.labelLayer.style.cssText="position:absolute;inset:0;pointer-events:none",this.well=Ht("div","well panel",'<canvas width="760" height="64"></canvas>'),this.wellCv=this.well.querySelector("canvas"),this.selP=Ht("div","selp panel",""),this.selKey=null,this.markSel=Ht("div","mark",'<div class="box"></div><div class="arr"></div><div class="tx"></div>'),this.markHome=Ht("div","mark home",'<div class="arr"></div><div class="tx"></div>'),this.labelLayer.append(this.markSel,this.markHome),this.hint=Ht("div","hint",n.ui.keyHints?"drag = look around \xB7 right-drag = steer \xB7 W/S throttle \xB7 N navigation \xB7 ? help":""),this.fps=Ht("div","fps",""),t.append(this.labelLayer,this.well,this.selP,this.tl,this.tr,this.banner,this.toast,this.speedP,this.courseP,this.ctl,this.nav,this.setP,this.help,this.hint,this.fps),this.nav.querySelector("#nav-x").onclick=()=>this.nav.classList.remove("open"),this.setP.querySelector("#set-x").onclick=()=>this.setP.classList.remove("open"),this._buildSettings(),this.lbls=[],this.$=a=>document.getElementById(a),this.navList=this.$("nav-list"),this.navFoot=this.$("nav-foot"),this.navQ=this.$("nav-q"),this.navQ.addEventListener("input",()=>this.renderNav(!0)),this.navQ.addEventListener("keydown",a=>{if(a.key==="Escape")this.navQ.value?(this.navQ.value="",this.renderNav(!0)):(this.navQ.blur(),this.nav.classList.remove("open")),a.stopPropagation();else if(a.key==="Enter"){let l=this.navList.querySelector(".item:not(.dim)");l&&!this.selected?l.click():this.commitSelection(a.shiftKey?"approach":"orbit")}}),setTimeout(()=>{this.hint&&(this.hint.style.opacity="0")},22e3),this.hint.style.transition="opacity 2s"}toggleNav(){this.nav.classList.toggle("open"),this.nav.classList.contains("open")&&(this.renderNav(!0),setTimeout(()=>this.navQ.focus(),0))}toggleSettings(){this.setP.classList.toggle("open")}stopAll(){let t=this.sim;t.tour&&t.stopTour(),t.course&&t.cancelCourse("Autopilot disengaged"),t.warp.on&&t.disengageWarp(),t.speedTarget=0}_buildSettings(){let t=this.setP.querySelector("#set-body"),e=this.cfg,n={};try{n=JSON.parse(localStorage.getItem("starship.settings")||"{}")}catch{}let i=h=>h.split(".").reduce((f,p)=>f?.[p],e),r=(h,f)=>{let p=h.split("."),v=p.pop();p.reduce((g,m)=>g[m],e)[v]=f,n[h]=f;try{localStorage.setItem("starship.settings",JSON.stringify(n))}catch{}};for(let[h,f]of Object.entries(n))try{r(h,f)}catch{}let o=h=>t.appendChild(Ht("div","sec",h)),a=(h,f,p,v,g,m=x=>x)=>{let x=Ht("label","",`<span>${h}</span>`),_=Ht("input");_.type="range",_.min=p,_.max=v,_.step=g,_.value=i(f);let y=Ht("span","v",m(+_.value));_.oninput=()=>{r(f,+_.value),y.textContent=m(+_.value)},x.append(_,y),t.appendChild(x)},l=(h,f,p)=>{let v=Ht("label","",`<span>${h}</span>`),g=Ht("input");g.type="checkbox",g.checked=!!i(f),g.onchange=()=>{r(f,g.checked),p&&p(g.checked)},v.appendChild(g),t.appendChild(v)};o("picture"),a("exposure (EV)","visuals.exposure.compensationEv",-3,3,.1,h=>h.toFixed(1)),a("visual intensity","visuals.intensity",0,2,.05,h=>h.toFixed(2)),a("bloom","visuals.bloom.strength",0,.3,.005,h=>h.toFixed(3)),a("film grain","visuals.tonemap.filmGrain",0,.05,.002,h=>h.toFixed(3)),a("field of view","camera.fovDeg",30,90,1,h=>h+"\xB0"),a("render scale","visuals.renderScale",.5,1.5,.05,h=>h.toFixed(2)),o("sky"),a("star brightness","visuals.stars.brightness",.2,4,.05,h=>h.toFixed(2)),a("star halo","visuals.stars.haloStrength",0,3,.1,h=>h.toFixed(1)),a("star colour","visuals.stars.colorSaturation",0,2,.05,h=>h.toFixed(2)),a("milky way gain","visuals.milkyWay.gain",0,30,.5,h=>h.toFixed(1)),a("dust / detail","visuals.milkyWay.detail",0,2,.05,h=>h.toFixed(2)),a("galaxies gain","visuals.galaxies.gain",0,10,.1,h=>h.toFixed(1)),a("galaxy smudge floor","visuals.galaxies.visibilityFloor",0,.1,.002,h=>h.toFixed(3)),o("worlds"),a("surface relief","visuals.planets.detailBump",0,2,.05,h=>h.toFixed(2)),a("atmospheres","visuals.planets.atmosphere",0,2,.05,h=>h.toFixed(2)),a("clouds","visuals.planets.clouds",0,1,.05,h=>h.toFixed(2)),l("orbit lines","visuals.orbitLines.enabled"),l("labels","visuals.labels.enabled",h=>this.labelsEnabled=h),l("ship shadows","visuals.ship.shadows"),o("flight"),a("speed limit (c)","ship.maxSublightC",.1,.95,.01,h=>h.toFixed(2)),a("turn rate (\xB0/s)","ship.turnRateDegPerSec",10,120,1,h=>h),a("warp bubble opacity","warp.visual.bubbleOpacity",0,2,.05,h=>h.toFixed(2)),a("warp star bunching","warp.visual.aberrationScale",0,1.2,.05,h=>h.toFixed(2)),a("warp streaks","warp.visual.streakScale",0,3,.1,h=>h.toFixed(1)),a("warp lensing","warp.visual.lensStrength",0,2,.05,h=>h.toFixed(2));let c=Ht("div","sec","everything else: config.js");t.appendChild(c);let d=Ht("button","","reset saved settings");d.style.marginTop="8px",d.onclick=()=>{try{localStorage.removeItem("starship.settings")}catch{}location.reload()},t.appendChild(d);let u=Ht("button","","copy settings JSON");u.style.margin="8px 0 0 6px",u.onclick=()=>navigator.clipboard&&navigator.clipboard.writeText(JSON.stringify(n,null,2)),t.appendChild(u)}_bindInput(){let t=this.sim,e=this.canvas,n=t.input;window.addEventListener("keydown",o=>{if(o.target&&/INPUT|TEXTAREA/.test(o.target.tagName))return;let a=o.key.toLowerCase();this.keys.add(a),a==="h"?(this.hidden=!this.hidden,this.root.style.display=this.hidden?"none":""):a==="n"?this.toggleNav():a===","?this.toggleSettings():a==="?"||a==="/"?this.help.classList.toggle("open"):a==="escape"?(this.help.classList.remove("open"),this.nav.classList.remove("open"),this.setP.classList.remove("open")):a==="t"?t.tour?t.stopTour():t.beginTour():a==="g"?t.warp.on?t.disengageWarp():t.setWarpStep(0):a==="]"||a==="pageup"?t.stepWarp(1):a==="["||a==="pagedown"?t.stepWarp(-1):a==="x"?this.stopAll():a==="p"?t.engageAutopilot():a==="="||a==="+"?this.stepDrive(1):a==="-"||a==="_"?this.stepDrive(-1):a==="o"?this.cfg.visuals.orbitLines.enabled=!this.cfg.visuals.orbitLines.enabled:a==="l"?(this.labelsEnabled=!this.labelsEnabled,this.cfg.visuals.labels.enabled=this.labelsEnabled):a==="c"?(t.recenterCamera(),t.cam.yawT=0,t.cam.pitchT=.28,t.cam.distT=this.cfg.ship.lengthM*this.cfg.camera.chaseDistanceLengths):a==="v"?(t.cam.distT=t.cam.distT<4?this.cfg.ship.lengthM*this.cfg.camera.chaseDistanceLengths:0,t.cam.yawT=0,t.cam.pitchT=0):a==="enter"?this.commitSelection(o.shiftKey?"approach":"orbit"):/^[1-8]$/.test(a)?t.setTimeIndex(+a-1):a==="0"&&t.setTimeAuto(!t.timeAuto),["arrowup","arrowdown","arrowleft","arrowright"," ","tab"].includes(a)&&o.preventDefault()}),window.addEventListener("keyup",o=>this.keys.delete(o.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear());let i=null;e.addEventListener("contextmenu",o=>o.preventDefault()),e.addEventListener("pointerdown",o=>{e.setPointerCapture(o.pointerId),i={x:o.clientX,y:o.clientY,mode:o.button===2||o.shiftKey?"steer":"orbit"}});let r=()=>{i=null};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("lostpointercapture",r),window.addEventListener("blur",r),e.addEventListener("pointermove",o=>{if(!i)return;let a=o.clientX-i.x,l=o.clientY-i.y;if(i.x=o.clientX,i.y=o.clientY,i.mode==="orbit")t.cam.holdUntil=performance.now()+6e3,t.cam.yawT-=a*this.cfg.camera.orbitSensitivity*(Math.cos(t.cam.pitchT)>=0?1:-1),t.cam.pitchT+=l*this.cfg.camera.orbitSensitivity,t.tour&&(t.cam.drift=!1);else{t.mode==="tour"&&t.stopTour();let c=this.cfg.camera.steerSensitivity,d=new Se().setFromEuler(new Fe(-l*c,-a*c,0,"YXZ"));t.rotateShip(d)}}),e.addEventListener("wheel",o=>{o.preventDefault();let a=this.cfg.ship.lengthM,l=Math.pow(this.cfg.camera.zoomSpeed,Math.sign(o.deltaY)*Math.min(3,Math.abs(o.deltaY)/100+.4));if(t.mode==="tour"&&t.tour){t.tour.zoomMul=bt((t.tour.zoomMul||1)*l,.05,this.cfg.camera.maxDistanceLengths/2.6);return}let c=t.cam.distT;c=c<1&&o.deltaY<0?0:Math.max(c,.6)*l,t.cam.distT=bt(c,this.cfg.camera.minDistanceLengths*a,this.cfg.camera.maxDistanceLengths*a),o.deltaY>0&&t.cam.distT<.6&&c>0&&(t.cam.distT=.6*l)},{passive:!1}),e.addEventListener("dblclick",()=>{t.recenterCamera(),t.cam.yawT=0,t.cam.pitchT=.28}),window.addEventListener("resize",()=>this.gfx.resize())}pollKeys(){let t=this.keys,e=this.sim.input;e.throttle=(t.has("w")?1:0)-(t.has("s")?1:0),e.yaw=(t.has("a")||t.has("arrowleft")?1:0)-(t.has("d")||t.has("arrowright")?1:0),e.pitch=(t.has("r")||t.has("arrowup")?1:0)-(t.has("f")||t.has("arrowdown")?1:0),e.roll=(t.has("q")?1:0)-(t.has("e")?1:0),e.brake=!1}_driveMap(){let t=this.cfg.ship,e=this.cfg.warp.steps,n=.28,i=.66,r=t.orbitalMaxKmS,o=t.maxSublightC*ce,a=.05;return{ORB:n,CRU:i,toU:(l,c)=>c!=null&&c>=0?i+(1-i)*(.04+.92*c/(e.length-1)):l<r?l<a?0:n*(.05+.95*Math.log(l/a)/Math.log(r/a)):n+(i-n)*Math.log(Math.min(l,o)/r)/Math.log(o/r),fromU:l=>{if(l=bt(l,0,1),l<n){let d=l/n;return{kms:d<.05?0:a*Math.pow(r/a,(d-.05)/.95)}}if(l<i)return{kms:r*Math.pow(o/r,(l-n)/(i-n))};let c=(l-i)/(1-i);return{warp:bt(Math.round((c-.04)/.92*(e.length-1)),0,e.length-1)}}}}_setupDrive(t){let e=this.sim,n=this._driveMap(),i=t.querySelector("#drv-trk"),r=this;this.drv={root:t,M:n,trk:i,txt:t.querySelector("#drv-txt"),thumb:t.querySelector("#drv-thumb"),cmd:t.querySelector("#drv-cmd"),act:t.querySelector("#drv-act")};let o=i.querySelectorAll(".seg");o[0].style.cssText=`left:0;width:${n.ORB*100}%`,o[1].style.cssText=`left:${n.ORB*100}%;width:${(n.CRU-n.ORB)*100}%`,o[2].style.cssText=`left:${n.CRU*100}%;width:${(1-n.CRU)*100}%`;let a=(u,h,f)=>{let p=t.querySelector(u);p.style.left=h*100+"%",p.textContent=f};a("#drv-l1",n.ORB,"100 km/s"),a("#drv-l3",n.CRU,"80 % c"),a("#drv-l4",.99,"10\u2076 c");let l=u=>{let h=i.getBoundingClientRect(),f=bt((u-h.left)/h.width,0,1),p=n.fromU(f);if(p.warp!=null){if(e.warp.on&&e.warp.step===p.warp)return;e.setWarpStep(p.warp)}else{if(e.warp.on&&e.warp.dropping)return;e.commandSpeed(p.kms)}},c=!1;i.addEventListener("pointerdown",u=>{c=!0,i.setPointerCapture(u.pointerId),l(u.clientX),u.stopPropagation()}),i.addEventListener("pointermove",u=>{c&&l(u.clientX)});let d=()=>{c=!1};i.addEventListener("pointerup",d),i.addEventListener("pointercancel",d),i.addEventListener("wheel",u=>{u.preventDefault(),this.stepDrive(u.deltaY<0?1:-1)},{passive:!1})}_driveList(){let t=this.cfg.ship.speedPresets,e=[{kms:0}];for(let n of t.orbital)e.push({kms:n});for(let n of t.cruise)e.push({kms:n*ce});return this.cfg.warp.steps.forEach((n,i)=>e.push({warp:i})),e}stepDrive(t){let e=this.sim,n=this._driveList(),i=-1;if(e.warp.on&&!e.warp.dropping)i=n.findIndex(a=>a.warp===e.warp.step);else{let a=e.speedTarget,l=1e30;n.forEach((c,d)=>{if(c.kms!=null){let u=Math.abs(Math.log((c.kms+.02)/(a+.02)));u<l&&(l=u,i=d)}})}let r=bt(i+t,0,n.length-1),o=n[r];o.warp!=null?e.setWarpStep(o.warp):e.commandSpeed(o.kms)}updateDrive(t){let e=this.drv,n=this.sim,i=e.M,r=n.eng,o=n.warp.on&&!n.warp.dropping,a=o?n.warp.step:-1,l=n.speedTarget,c=o?i.toU(0,a):i.toU(l),d=n.warp.on?i.toU(0,Math.max(n.warp.step,0)):i.toU(Math.max(n.speed,0));e.thumb.style.left=c*100+"%",e.act.style.left=d*100+"%";let u=n.warp.on,h=!u&&Math.max(n.speed,n.speedTarget)>=this.cfg.ship.orbitalMaxKmS,f=o?"#6aa8ff":h?"#f0f0f4":"#ff9a4a";e.thumb.style.borderColor=f,e.thumb.style.boxShadow=`0 0 8px ${f}`,e.act.style.background=f;let p=o?"WARP":h?"NACELLES":"ROCKET",v=o?`${this.cfg.warp.steps[a].toLocaleString("en-US")} c`:l<.05?"stop":l>=ce*.001?`${(l/ce*100).toFixed(l/ce<.1?2:1)} % c`:l>=1?`${l.toFixed(l<10?1:0)} km/s`:`${(l*1e3).toFixed(0)} m/s`;e.txt.innerHTML=`<span style="color:${f}">${p}</span> \xB7 ${v}`;let g=e.root.querySelectorAll(".legend span");g[0].style.opacity=.35+.65*r.rocket,g[1].style.opacity=.35+.65*r.cruise,g[2].style.opacity=.35+.65*r.warp}select(t){this.selected=t,this.selKey=null,this.altSel=null,this.altBody=null,this.nav.classList.contains("open")&&this.renderNav(!0)}commitSelection(t="orbit"){let e=this.selected;e&&(e.type==="body"?this.sim.setCourseBody(e.body,t,this.altSel!=null&&this.altBody===e.body?this.altSel:null):e.type==="system"&&this.sim.setCourseSystem(e.dest),this.renderNav(!0))}renderNav(t=!1){if(!this.nav.classList.contains("open"))return;let e=performance.now();if(!t&&e-this._lastNav<700)return;this._lastNav=e;let n=this.sim,i=n.getDestinations(t),r=this.navList;r.innerHTML="";let o=(h,f)=>r.appendChild(Ht("div",h,f)),a=this.selected,l=(this.navQ.value||"").trim(),c=l.length>=2,d=l.toLowerCase();if(l.length===1&&o("sec","type at least 2 characters to search"),n.system){o("sec",`in ${n.system.name}${n.system.fictional?" \xB7 fictional":""}`);let h=new Map(i.bodies.map(v=>[v.body,v])),f=i.bodies.filter(v=>v.kind==="star").concat(i.bodies.filter(v=>v.kind==="planet"||v.kind==="dwarf").sort((v,g)=>(v.body.orbit?.a??0)-(g.body.orbit?.a??0))),p=[];for(let v of f){p.push(v);let g=i.bodies.filter(m=>m.body.parent===v.body&&m.kind==="moon").sort((m,x)=>(m.body.orbit?.a??0)-(x.body.orbit?.a??0));p.push(...g)}for(let v of p){if(c&&!v.name.toLowerCase().includes(d))continue;let g=Ht("div","item"+(a&&a.body===v.body?" sel":"")),m=v.kind==="moon"?"&nbsp;&nbsp;\u21B3 ":"";g.innerHTML=`<span class="n">${m}${v.name}${v.body.fictional?'<span class="tag f">F</span>':""}</span><span class="m">${Ie(v.dist)}</span>`,g.onclick=()=>{this.select({type:"body",body:v.body})},g.ondblclick=()=>{this.selected={type:"body",body:v.body},this.commitSelection()},r.appendChild(g)}}let u=c?n.searchSystems(l):i.systems;o("sec",c?`systems matching \u201C${l}\u201D`:`star systems within ${this.cfg.destinations.radiusLy} ly`),u.length||o("item",`<span class="n" style="color:#777">${c?"no match":"none in range"}</span>`);for(let h of u){let f=Ht("div","item"+(h.outOfRange?" dim":"")+(a&&a.dest&&a.dest.group.key===h.group.key?" sel":""));f.innerHTML=`<span class="n">${h.name}${h.known?'<span class="tag">planets</span>':'<span class="tag f">F</span>'}</span><span class="m">${h.distLy.toFixed(2)} ly${h.outOfRange?" \xB7&nbsp;far":""}</span>`,f.onclick=()=>{this.select({type:"system",dest:h})},f.ondblclick=()=>{this.selected={type:"system",dest:h},this.commitSelection()},r.appendChild(f)}this.showFoot()}showFoot(){let t=this.selected,e=this.navFoot;if(!t){e.innerHTML='click to inspect \xB7 double-click or <b>Enter</b> to set course<br><span style="color:#666">F = fictional (procedurally generated)</span>';return}if(t.type==="body"){let r=t.body,o=this.cfg,a=r.safeRadiusKm(o)-r.radiusKm;e.innerHTML=`<b>${r.name}</b> \xB7 ${r.kind}${r.fictional?" \xB7 <b>FICTIONAL</b>":""}<br>radius ${Ie(r.radiusKm)} \xB7 g ${(r.gravityMs2||0).toFixed(2)} m/s\xB2 \xB7 safe orbit ${Ie(a)} up<br><span style="color:#888">${r.info||""}</span><br><span class="bb"><button id="goA" style="margin-top:5px">APPROACH</button> <button id="go" style="margin-top:5px">ORBIT</button></span>`}else{let r=t.dest;e.innerHTML=`<b>${r.name}</b> \xB7 ${r.distLy.toFixed(2)} ly \xB7 ${r.stars} star${r.stars>1?"s":""}<br>${r.known?"confirmed planets (NASA Exoplanet Archive)":"<b>no confirmed planets</b> \u2014 a procedurally generated <b>FICTIONAL</b> system will be shown"}<br><button id="go" style="margin-top:5px">SET COURSE</button>`}let n=e.querySelector("#go");n&&(n.onclick=()=>this.commitSelection("orbit"));let i=e.querySelector("#goA");i&&(i.onclick=()=>this.commitSelection("approach"))}_nearestStar(t){let e=performance.now();if(this._ns&&e-this._nsT<400)return this._ns;this._nsT=e;let n=this.sim.cat,i=null;for(let a=.5;a<=64&&!i;a*=2){let l=1/0;for(let c of n.within(t,a)){let d=Math.hypot(n.pos[c*3]-t[0],n.pos[c*3+1]-t[1],n.pos[c*3+2]-t[2]);d<l&&(l=d,i=c)}}if(i==null)return this._ns=null,null;let r=n.traits(i),o=Math.hypot(n.pos[i*3]-t[0],n.pos[i*3+1]-t[1],n.pos[i*3+2]-t[2]);return this._ns={name:n.isSun(i)?"Sol":n.name(i),distKm:o*ie,hpKm:this.sim.uni.heliopauseOfStar(i),gm:r.gm,radiusKm:r.radiusKm},this._ns}updateWell(){let t=this.sim,e=this.wellCv,n=e.getContext("2d"),i=420,r=76,o=Math.min(2,window.devicePixelRatio||1);e.width!==i*o&&(e.width=i*o,e.height=r*o),n.setTransform(o,0,0,o,0,0);let a,l,c,d,u,h=!1,f=[];if(t.system){let L=t.system,q=t.sysPos(),O=null;for(let Z of L.stars){let et=Z.positionAt(t.jd),ht=Math.hypot(q[0]-et[0],q[1]-et[1],q[2]-et[2]);(!O||ht<O.d)&&(O={st:Z,d:ht})}a=L.name.replace(/ system$/i,"")==="Solar System"?"Sol":O.st.name,l=O.d,c=L.heliopauseKm,d=O.st.gm,u=O.st.radiusKm,h=Math.hypot(q[0],q[1],q[2])>c,f=L.bodies.filter(Z=>(Z.kind==="planet"||Z.kind==="dwarf")&&Z.semiMajorKm).map(Z=>({n:Z.name,a:Z.semiMajorKm}))}else{let L=this._nearestStar(t.shipPc());if(!L){this.well.style.display="none";return}a=L.name,l=L.distKm,c=L.hpKm,d=L.gm,u=L.radiusKm,h=!0}this.well.style.display=this.hidden?"none":"block";let p=Math.log10(Math.max(u,1)),v=Math.log10(c),g=14,m=g,x=i-g,_=28,y=L=>m+(x-m)*bt((Math.log10(Math.max(L,1))-p)/(v-p),0,1);n.clearRect(0,0,i,r);let E=n.createLinearGradient(m,0,x,0);E.addColorStop(0,"rgba(235,235,235,0.95)"),E.addColorStop(.35,"rgba(180,180,180,0.5)"),E.addColorStop(1,"rgba(120,120,120,0.10)"),n.fillStyle=E,n.fillRect(m,_-5,x-m,10),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=1,n.strokeRect(m+.5,_-5.5,x-m,11),n.font="10px ui-monospace, Menlo, monospace",n.textBaseline="alphabetic",n.fillStyle="rgba(255,255,255,0.45)";for(let L=Math.ceil(Math.log10(u/zt));L<=Math.floor(Math.log10(c/zt));L++){let q=y(Math.pow(10,L)*zt);n.fillRect(Math.round(q),_+5,1,4),L>=0&&n.fillText(L===0?"1 AU":Math.pow(10,L)+"",q-4*String(Math.pow(10,L)).length,_+19)}let T=f.length<=10;n.fillStyle="#fff";for(let L of f){let q=y(L.a);n.fillRect(Math.round(q),_-9,1,4),T&&(n.fillStyle="rgba(255,255,255,0.75)",n.fillText(L.n.slice(0,2),q-6,_-12),n.fillStyle="#fff")}n.fillStyle="#fff",n.fillRect(x-1,_-10,2,20),n.textAlign="right",n.fillText("HELIOPAUSE "+(c/zt>=1e3?Math.round(c/zt).toLocaleString("en-US"):(c/zt).toFixed(c/zt<10?1:0))+" AU",x,_-15),n.textAlign="left";let A=y(l);n.fillStyle="#fff",n.beginPath(),h&&l>c?(n.moveTo(x+10,_),n.lineTo(x+2,_-5),n.lineTo(x+2,_+5)):(n.moveTo(A,_-6),n.lineTo(A-5,_-14),n.lineTo(A+5,_-14)),n.closePath(),n.fill();let C=l,S=Math.sqrt(2*d/C),b=d/(C*C)*1e3,P=L=>L>=1?L.toFixed(2)+" m/s\xB2":L>=.001?(L*1e3).toFixed(2)+" mm/s\xB2":L*1e6>=.1?(L*1e6).toFixed(1)+" \xB5m/s\xB2":"<0.1 \xB5m/s\xB2",U=L=>L>=Xs*.1?(L/Xs).toFixed(2)+" ly":L>=zt*.01?(L/zt).toFixed(L/zt<10?2:0)+" AU":Ie(L),F=c-C,N=`${a.toUpperCase()} \xB7 ${U(C)} \xB7 escape ${ma(S)} \xB7 g ${P(b)}`,V=C>c?`outside the heliopause by ${U(C-c)}`:`${Math.max(0,100*(1-F/c)).toFixed(C/c<.01?2:1)} % of the way to the heliopause \xB7 ${U(F)} to go`;n.fillStyle="#d8d8d8",n.fillText(N,m,r-20),n.fillStyle="rgba(200,200,200,0.7)",n.fillText(V,m,r-6)}update(t,e){this.pollKeys();let n=this.sim,i=n.hud(),r=this.$;this.fpsAvg+=(1/Math.max(t,.001)-this.fpsAvg)*.05,r("h-loc").textContent=i.where;let o=zh(i.jd);r("h-sub").textContent=`${o.toISOString().replace("T"," ").slice(0,19)} UTC  \xB7  time \xD7${i.K>=100?Math.round(i.K).toLocaleString("en-US"):i.K.toFixed(i.K<10?1:0)}${n.timeAuto&&n.course&&!i.warp?" (auto)":""}`,r("h-sub2").textContent=n.ref?`frame: ${n.ref.name} \xB7 ${n.ref.kind}`:n.system?`frame: ${n.system.name}`:"frame: interstellar",this.updateWell(),this.banner.style.display=i.fictional?"block":"none",this.banner.textContent=i.fictional?"fictional system \xB7 procedurally generated \xB7 no confirmed planets":"",this.chips.TOUR.className="chip"+(n.mode==="tour"?" on":""),this.chips.FREE.className="chip"+(n.mode==="free"?" on":""),this.chips.AUTO.className="chip"+(i.engaged?" on":n.course?" warn":""),this.chips.WARP.className="chip"+(i.warp?" on":n.warp.form>0?" warn":""),r("h-speed").textContent=i.warp?i.c>=100?Math.round(i.c).toLocaleString("en-US")+" c":i.c.toFixed(i.c<10?2:1)+" c":i.c>=.01?i.c.toFixed(i.c<.1?4:3)+" c":ma(i.speed),r("h-kms").textContent=i.warp?"FTL "+(i.c*ce).toExponential(2)+" km/s":ma(i.speed);let a=Math.min(i.c,.9999);r("h-gam").textContent=i.warp?"bubble \xB7 n/a":`${i.gamma.toFixed(3)} / ${a.toFixed(3)}`,r("h-frame").textContent=n.ref?n.ref.name:n.system?"star":"rest",r("h-trip").textContent=ga(i.trip);{let p=n.forward(),v=Math.hypot(...n.vel),g=n.thrust,m=v>1e-6&&(p.x*n.vel[0]+p.y*n.vel[1]+p.z*n.vel[2])/v<-.5,x=!i.warp&&Math.max(n.speed,n.speedTarget)>=this.cfg.ship.orbitalMaxKmS;r("h-eng").textContent=i.warp?`warp field ${Math.round(n.eng.warp*100)} %`:n.ins?"orbit insertion burn":x?`nacelles ${Math.round(n.eng.cruise*100)} %`:g>.08?m?"rocket \xB7 retro burn":"rocket \xB7 burn":n.flipping?"turning to brake":"coasting"}if(!this._nearT||performance.now()-this._nearT>250){this._nearT=performance.now();let p="\u2014",v="nearest";if(n.system){let g=n.sysPos(),m=null,x=1/0;for(let _ of n.system.bodies){if(_.kind==="belt")continue;let y=_.positionAt(n.jd),E=Math.hypot(g[0]-y[0],g[1]-y[1],g[2]-y[2])-_.radiusKm;E<x&&(x=E,m=_)}m&&(v=m.name,p=(x<0?"0 km":Ie(x))+" alt")}else{let g=n.shipPc(),m=-1,x=1/0,_=n.cat.within(g,6);for(let y of _){let E=Math.hypot(n.cat.pos[y*3]-g[0],n.cat.pos[y*3+1]-g[1],n.cat.pos[y*3+2]-g[2]);E<x&&(x=E,m=y)}m>=0&&(v=n.cat.name(m),p=(x*3.2616).toFixed(x*3.26<1?3:2)+" ly")}this._nearTxt=[v,p]}this._nearTxt&&(r("h-near-l").textContent=this._nearTxt[0],r("h-near").textContent=this._nearTxt[1]);let l=Math.log10(this.cfg.ship.maxSublightC*ce),c=Math.log10(this.cfg.ship.speedFloorKmS),d=i.warp?bt(Math.log10(Math.max(i.c,.05)/this.cfg.ship.maxSublightC)/Math.log10(this.cfg.warp.steps[this.cfg.warp.steps.length-1]/this.cfg.ship.maxSublightC),0,1):bt((Math.log10(Math.max(i.speed,1e-9))-c)/(l-c),0,1);r("h-bar").style.width=d*100+"%";let u=!1;if(n.course){let p=n.eta();this.courseP.style.display="block";let v=n.course,g=v.kind==="body"?Ie(i.targetDist??0):`${((i.targetDist??0)/Xs).toFixed(2)} ly`,m=v.kind==="system"?{align:"aligning",depart:"sub-light to heliopause",warp:n.warp.on?n.warp.dropping||n.warp.capC<n.warp.c*1.02?"braking for arrival":"warp cruise":"engaging"}[v.phase]:v.remaining<(v.radius||1)*2?"final approach":"transit";if(v.engaged)this.courseP.innerHTML=`<div class="t">\u2192 ${v.label}${n.tour?" \xB7 tour":""}</div><div class="d"><span>distance <b>${g}</b></span><span>ETA <b>${isFinite(p)?ga(p):"\u2014"}</b></span><span>elapsed <b>${ga(i.trip)}</b></span></div><div class="d"><span>${m}</span><span>${n.timeAuto&&!i.warp?"auto time":""}</span></div>`;else{let x=(v.alignErr??0)*180/Math.PI;this.courseP.innerHTML=`<div class="t">\u2192 ${v.label} \xB7 manual</div><div class="d"><span>distance <b>${g}</b></span><span>${v.aligned?"<b>on course</b>":"aligning \xB7 "+x.toFixed(0)+"\xB0 off"}</span></div><div class="d"><span>press <b>AUTO</b> (P) for cruise control</span><span><u id="cc-x" style="cursor:pointer">clear</u></span></div>`;let _=this.courseP.querySelector("#cc-x");_&&(_.onclick=()=>n.cancelCourse("Course cleared")),u=!0}}else if(n.tour){let p=n.tour.stops[n.tour.idx];this.courseP.style.display="block",this.courseP.innerHTML=`<div class="t">cinematic tour \xB7 ${p?p.note:""}</div><div class="d"><span>press <b>T</b> or move the controls to take the helm</span></div>`}else this.courseP.style.display="none";let h=n.timeAuto||!i.warp&&Math.abs(i.K-n.timeScale)>.02*n.timeScale,f=this.cfg.time.steps;this.timeBtns.forEach((p,v)=>p.classList.toggle("on",!h&&v===n.timeIndex)),this.timeBtns.forEach((p,v)=>p.classList.toggle("dim",i.warp&&f[v]>this.cfg.warp.maxTimeCompression)),this.autoT.classList.toggle("on",h),this.updateDrive(i),this.btnTour.classList.toggle("on",!!n.tour),this.toast.innerHTML=n.messages.map(p=>`<div>${p.msg}</div>`).join(""),this.fps.textContent=`${Math.round(this.fpsAvg)} fps \xB7 ${this.gfx.W}\xD7${this.gfx.H}${e&&e.scale<.99?" \xB7 scale "+e.scale.toFixed(2):""}`,this.renderNav()}_project(t,e,n){let i=this.gfx.cssW,r=this.gfx.cssH,o=.5*r/Math.tan(.5*n*Math.PI/180),a=new I(t[0],t[1],t[2]).applyMatrix3(e),l=a.z>=-1e-9,c=i/2+a.x/Math.max(-a.z,1e-9)*o,d=r/2-a.y/Math.max(-a.z,1e-9)*o,u=34,h=u+26,f=r-118;if(!l&&c>u&&c<i-u&&d>h&&d<f)return{x:c,y:d,on:!0,ang:0};let v=a.x,g=-a.y;l&&Math.hypot(v,g)<1e-6&&(v=1);let m=Math.hypot(v,g)||1;v/=m,g/=m;let x=i/2,_=(h+f)/2,y=(i-2*u)/2,E=(f-h)/2,T=Math.min(Math.abs(v)>1e-6?y/Math.abs(v):1e9,Math.abs(g)>1e-6?E/Math.abs(g):1e9);return{x:x+v*T,y:_+g*T,on:!1,ang:Math.atan2(g,v)*180/Math.PI}}_placeMark(t,e,n,i){t.style.display="block",t.style.transform=`translate(${Math.round(e.x)}px,${Math.round(e.y)}px)`;let r=t.querySelector(".box"),o=t.querySelector(".arr"),a=t.querySelector(".tx");r&&(r.style.display=e.on&&i?"block":"none"),o.style.display=e.on?"none":"block",e.on||(o.style.transform=`rotate(${e.ang}deg)`),o.textContent="\u27A4",a.textContent=n,a.style.left=e.on?"22px":Math.cos(e.ang*Math.PI/180)>.2?"-"+(a.textContent.length*6.4+16)+"px":"14px"}_altControl(t){let e=this.selP.querySelector("#sp-r"),n=this.selP.querySelector("#sp-n"),i=Math.max(t.safeRadiusKm(this.cfg)-t.radiusKm,1),r=Math.max(t.radiusKm*40,i*4),o=Math.log(r/i),a=()=>this.altSel!=null&&this.altBody===t?this.altSel:i,l=()=>{e.value=String(Math.round(1e3*Math.log(Math.max(a(),i)/i)/o)),n.value=this.altSel!=null&&this.altBody===t?Ie(a()):Ie(i)+" (safe)"},c=d=>{this.altSel=bt(d,i,r*4),this.altBody=t,l()};e.oninput=()=>c(i*Math.exp(o*+e.value/1e3)),n.onfocus=()=>{n.select()},n.onchange=()=>{let d=/^\s*([0-9.]+(?:e[0-9]+)?)\s*(m|km|au|mm|M km)?\s*$/i.exec(n.value.replace(/,/g,""));if(!d){l();return}let u=(d[2]||"km").toLowerCase(),h=parseFloat(d[1]);c(u==="m"?h/1e3:u==="au"?h*1495978707e-1:u==="mm"||u==="m km"?h*1e6:h)},l()}updateMarkers(t,e){let n=this.sim,i=n.uni;if(this.hidden){this.markSel.style.display="none",this.markHome.style.display="none",this.selP.style.display="none";return}let r=null,o="";if(n.system&&n.system===i.solar){let h=i.solar.get("earth");if(h&&n.ref!==h){let f=h.positionAt(n.jd),p=n.sysPos();r=[f[0]-p[0],f[1]-p[1],f[2]-p[2]],o="EARTH"}}else{let h=n.shipPc();r=[-h[0]*ie,-h[1]*ie,-h[2]*ie],o="SOL"}let a=this.selected&&this.selected.type==="body"&&this.selected.body.name.toUpperCase()===o;if(r&&!a){let h=Math.hypot(r[0],r[1],r[2]);h<1e5&&o==="SOL"?this.markHome.style.display="none":this._placeMark(this.markHome,this._project(r,t,e),`${o} \xB7 ${Ie(h)}`,!1)}else this.markHome.style.display="none";let l=this.selected,c=!1;if(l&&l.type==="body"&&l.body.system===n.system&&n.system){c=!0;let h=l.body,f=h.positionAt(n.jd),p=n.sysPos(),v=[f[0]-p[0],f[1]-p[1],f[2]-p[2]],g=Math.hypot(v[0],v[1],v[2]);this._placeMark(this.markSel,this._project(v,t,e),`${h.name.toUpperCase()}${h.fictional?" (F)":""} \xB7 ${Ie(Math.max(g-h.radiusKm,0))}`,!0),this._selDist=g}else if(l&&l.type==="system"){c=!0;let h=l.dest.group.centre,f=n.shipPc(),p=[(h[0]-f[0])*ie,(h[1]-f[1])*ie,(h[2]-f[2])*ie],v=Math.hypot(p[0],p[1],p[2]);this._placeMark(this.markSel,this._project(p,t,e),`${l.dest.name.toUpperCase()} \xB7 ${(v/Xs).toFixed(2)} ly`,!0)}if(!c){this.markSel.style.display="none",this.selP.style.display="none",l&&(this.selected=null),this.selKey=null;return}let d=l.type+":"+(l.type==="body"?l.body.name:l.dest.name);if(this.selKey!==d){if(this.selKey=d,this.selP.style.display="block",l.type==="body"){let h=l.body;this.selP.innerHTML=`<h5><b>${h.name}</b><span id="sp-x">\u2715</span></h5><div class="m">${h.kind}${h.fictional?" \xB7 <b>FICTIONAL</b>":""} \xB7 radius ${Ie(h.radiusKm)}<br><span id="sp-d"></span></div><div class="alt"><span>altitude</span><input id="sp-r" type="range" min="0" max="1000" step="1"><input id="sp-n" type="text" inputmode="decimal" spellcheck="false" title="altitude in km (or add m / km / AU)"></div><div class="b"><button id="sp-a" title="fly there and hold position at this altitude (Shift+Enter); untouched = ${this.cfg.autopilot.approachRadii} radii out">APPROACH</button><button id="sp-o" title="fly there and settle into the safe low orbit (Enter)">ORBIT</button></div>`,this._altControl(h),this.selP.querySelector("#sp-a").onclick=()=>this.commitSelection("approach"),this.selP.querySelector("#sp-o").onclick=()=>this.commitSelection("orbit")}else{let h=l.dest;this.selP.innerHTML=`<h5><b>${h.name}</b><span id="sp-x">\u2715</span></h5><div class="m">${h.stars} star${h.stars>1?"s":""} \xB7 ${h.known?"confirmed planets":"<b>FICTIONAL</b> planets"}<br><span id="sp-d"></span></div><div class="b"><button id="sp-o">SET COURSE</button></div>`,this.selP.querySelector("#sp-o").onclick=()=>this.commitSelection("orbit")}this.selP.querySelector("#sp-x").onclick=()=>{this.selected=null,this.selKey=null,this.nav.classList.contains("open")&&this.renderNav(!0)}}let u=this.selP.querySelector("#sp-d");if(u){let h=n.course,f=h&&(l.type==="body"&&h.kind==="body"&&h.body===l.body||l.type==="system"&&h.kind==="system"&&h.name===l.dest.name);u.textContent=(l.type==="body"?"distance "+Ie(Math.max((this._selDist||0)-l.body.radiusKm,0)):"")+(f?" \xB7 underway":"")}}updateLabels(t,e,n,i){if(!this.labelsEnabled||this.hidden){for(let f of this.lbls)f.e.style.display="none";return}let r=this.gfx.cssW,o=this.gfx.cssH,a=.5*o/Math.tan(.5*n*Math.PI/180),l=[],c=new I;for(let f of t.labels||[]){if(c.set(f.rel[0],f.rel[1],f.rel[2]).applyMatrix3(e),c.z>=-1e-6)continue;let p=r/2+c.x/-c.z*a,v=o/2-c.y/-c.z*a;if(p<-20||p>r+20||v<-20||v>o+20)continue;let m=(f.kind==="star"?3:f.kind==="planet"?2:f.kind==="dwarf"?1.5:f.kind==="galaxy"?2.5:1)*1e3+Math.min(f.angPx,300)-f.dist*1e-9;f.kind==="moon"&&f.angPx<3&&f.body.parent&&t.bodyInfo.get(f.body.parent).angPx<12||f.kind==="galaxy"&&f.dirOnly&&!this.cfg.visuals.galaxies.labels||l.push({x:p,y:v,L:f,score:m})}l.sort((f,p)=>p.score-f.score);let d=this.cfg.visuals.labels.maxLabels,u=[],h=0;for(let f of l){if(h>=d)break;u.some(p=>Math.abs(p.x-f.x)<90&&Math.abs(p.y-f.y)<18)||(u.push(f),h++)}for(;this.lbls.length<u.length;){let f=Ht("div","lbl"),p={e:f};f.onclick=()=>{p.body&&p.body.system===this.sim.system&&p.body.positionAt&&this.select({type:"body",body:p.body})},this.labelLayer.appendChild(f),this.lbls.push(p)}this.lbls.forEach((f,p)=>{let v=u[p];if(!v){f.e.style.display="none";return}let g=v.L.body,m=this.selected&&this.selected.body===g;f.body=g,f.e.style.display="block",f.e.style.transform=`translate(${Math.round(v.x+9)}px,${Math.round(v.y-7)}px)`,f.e.className="lbl"+(m?" sel":"");let x=g.name+(g.fictional?"\xB7F":"");f.key!==x+(v.L.dist<1e7?"n":"f")&&(f.key=x+(v.L.dist<1e7?"n":"f"),f.e.innerHTML=`<i style="position:absolute;left:-12px;top:5px"></i>${g.name}${g.fictional?' <span class="s">fictional</span>':""}`)})}};async function Hu(){let s=window.SIM_CONFIG;new URLSearchParams(location.search).has("notour")&&(s.sim.startWithTour=!1);try{let V=JSON.parse(localStorage.getItem("starship.settings")||"{}");for(let[L,q]of Object.entries(V)){let O=L.split("."),Z=O.pop();O.reduce((et,ht)=>et?.[ht],s)[Z]=q}}catch{}let e=(V,L)=>{let q=document.getElementById("boot-msg");q&&(q.textContent=V);let O=document.getElementById("boot-bar");O&&L!=null&&(O.style.width=L*100+"%")},n=()=>new Promise(V=>setTimeout(V,16));e("reading star catalogue\u2026",.08),await n();let i=await Fh();e(`${i.n.toLocaleString("en-US")} stars \xB7 ${i.galaxies.length} galaxies \xB7 ${i.hosts.size} planet hosts`,.3),await n();let r=new Ma(i,s),o=document.getElementById("view"),a=new ba(o,s,i);e("decoding planet maps\u2026",.5),await n();let l=await Tu(a.renderer);e("building the ship\u2026",.8),await n();let c=new wa(a,s,l,r.cat),d=new Ta(a,s),u=new Aa(r,s),h=new Ra(u,s,a,o);e("ready",1),await n();let f=null,p=s.visuals.renderScale,v=null,g=performance.now(),m=0,x=0,_=0,y=0,E=60,T=0,A=0,C=3,S=!1,b=null,P=0,U=window.__sim={cfg:s,data:i,uni:r,gfx:a,space:c,shipView:d,sim:u,ui:h,textures:l,frames:0,F:null,info:null,freeze:!1};U.testWarp=(V,L)=>{u.cancelCourse(),u.stopTour&&u.stopTour(),u.system=null,u.ref=null,u.anchorPc=[0,0,0],u.pos=[4e10,2e10,1e10],u.vel=[0,0,0],L&&u._lookAlong(new I(...L),1/0,new I(0,0,1)),u.warp.on=!0,u.warp.step=V,u.warp.c=s.warp.steps[V],u.warp.form=1,u.mode="free",u.warp.dropping=!1},U.deepSpace=(V=[.3,.9,.1],L=0,q=[0,0,0],O=[6e10,2e10,1e10])=>{u.cancelCourse(),u.stopTour&&u.stopTour(),u.warp.on=!1,u.warp.form=0,u.system=null,u.ref=null,u.anchorPc=q.slice(),u.pos=O.slice(),u.orbit=null,u._lookAlong(new I(...V),1/0,new I(0,0,1));let Z=u.forward(),et=L*ce;u.speedTarget=et,u.vel=[Z.x*et,Z.y*et,Z.z*et],u.mode="free"},U.probeHDR=()=>{let V=a,L=V.renderer,q=V.W,O=V.H,Z=new Uint16Array(4*q*O);L.readRenderTargetPixels(V.sceneRT,0,0,q,O,Z);let et=J=>{let lt=J>>10&31,nt=J&1023;return lt===0?Math.pow(2,-14)*(nt/1024):lt===31?nt?NaN:1/0:Math.pow(2,lt-15)*(1+nt/1024)},ht=0,Ut=0,Nt=0,X=0;for(let J=0;J<Z.length;J+=4){let lt=et(Z[J]);Number.isNaN(lt)?ht++:lt===1/0?Ut++:(lt>.002&&Nt++,lt>X&&(X=lt))}return{nan:ht,inf:Ut,lit:Nt,max:+X.toFixed(3),total:q*O}};let F=performance.now(),N=V=>{let L=Math.min(.1,(V-g)/1e3);g=V,U.freeze||(h.pollKeys(),u.update(L)),u.system!==f&&(f=u.system,f?c.setSystem(f):c.clear());let q=u.jd,O=u.cam,Z=u.sysPos(q),et=zu(u,r,q,Z);if(U.devCam&&u.system){let M=u.system.get(U.devCam.body)||u.system.bodies.find(H=>H.id===U.devCam.body||H.name===U.devCam.body);M&&(et=zu(u,r,q,M.positionAt(q)))}let ht=U.devGain||Cu(et.contextE,s);v=Pu(v,ht,L,s.visuals.exposure.adaptSeconds);let Ut=d.update({quat:u.q,camFrame:u.qCam,gimbal:u.gimbal,engines:u.eng,dt:L,cam:{yaw:O.yaw,pitch:O.pitch,dist:Math.max(O.dist,0),up:O.dist<3?0:O.up*Math.min(1,O.dist/40)},fov:s.camera.fovDeg,aspect:a.W/a.H,...et,exposure:v,throttle:vv(u,s),warp:{form:u.warp.form,speed01:Bu(u,s),pulse:u.warp.pulse}}),Nt=Ut.camQuat,X=Ut.offsetWorld.clone().multiplyScalar(.001),J=[Z[0]+X.x,Z[1]+X.y,Z[2]+X.z],lt=U.devCam;if(lt&&u.system){let M=u.system.get(lt.body)||u.system.bodies.find(H=>H.id===lt.body||H.name===lt.body);if(M){let H=M.positionAt(q),$=(M.parent&&M.parent.kind==="star"?M.parent:u.system.stars[0]).positionAt(q),Q=new I($[0]-H[0],$[1]-H[1],$[2]-H[2]);Q=Q.lengthSq()<1?new I(1,0,0):Q.normalize();let Y=new I(0,0,1),St=new I().crossVectors(Q,Y).normalize(),dt=new I().crossVectors(St,Q).normalize(),vt=lt.az*Kt,Zt=lt.el*Kt,st=Q.clone().multiplyScalar(Math.cos(vt)*Math.cos(Zt)).add(St.clone().multiplyScalar(Math.sin(vt)*Math.cos(Zt))).add(dt.clone().multiplyScalar(Math.sin(Zt))),xt=M.radiusKm*lt.r;J=[H[0]+st.x*xt,H[1]+st.y*xt,H[2]+st.z*xt];let Lt=st.clone().negate(),Ft=new I().crossVectors(Lt,Y).normalize(),yt=new I().crossVectors(Ft,Lt);Nt=new Se().setFromRotationMatrix(new Qt().makeBasis(Ft,yt,Lt.clone().negate())),lt.look&&Nt.multiply(new Se().setFromEuler(new Fe(lt.look[1]*Kt,lt.look[0]*Kt,0))),d.ship.root.visible=!1,d.bubble.visible=!1}}let nt=u.system?u.system.originPc:u.anchorPc,it=[nt[0]+J[0]/ie,nt[1]+J[1]/ie,nt[2]+J[2]/ie],ct=u.visualBeta(),rt=ct[0]**2+ct[1]**2+ct[2]**2,wt=1/Math.sqrt(Math.max(1-rt,1e-6)),Pt=new Dt().setFromMatrix4(new Qt().makeRotationFromQuaternion(Nt)).transpose(),Yt=new I(ct[0],ct[1],ct[2]).applyMatrix3(Pt),D=u.forward(),ee=u.warp,kt=s.warp.visual,Bt=Bu(u,s),Mt=xv(d,a,ee,Bt),$t={camPc:it,camSys:J,jd:q,quat:Nt,view:Pt,beta:ct,gamma:wt,betaCam:Yt,exposure:v,fov:s.camera.fovDeg,dt:L,dtReal:L,timeScale:u.timeUsed||1,focalPx:a.focalPx,mwScale:1,zodi:u.system&&u.system===r.solar?1:0,zodiScale:1,sunDir:et.sunDirRest,hide:[],showOrbits:!0,warp:{dir:[D.x,D.y,D.z],beta:0,gamma:1,streak:ee.on?ee.form*(.3+.7*Bt):0,dim:0,lens:ee.form>.01?ee.form:0,center:Mt.center,radius:Mt.radius,flash:ee.flash,dirCam:new I(0,0,-1)}};a.camera.fov=s.camera.fovDeg,a.camera.updateProjectionMatrix(),$t.focalPx=a.focalPx;let _t={hide:[],labels:[],bodyInfo:new Map};if(f&&(_t=c.update($t)),$t.hide=_t.hide,s.visuals.galaxies.labels&&s.visuals.galaxies.enabled&&s.visuals.labels.enabled){_t.labels=(_t.labels||[]).slice();for(let M of a.galaxies){let H=M.userData.g,$=M.material.uniforms.uDir.value;_t.labels.push({body:{name:`${H.name} \xB7 ${(H.dKpc*3.2616).toFixed(0)} kly`,fictional:!1,parent:null},rel:[$.x*1e9,$.y*1e9,$.z*1e9],dist:1e18,angPx:3,kind:"galaxy",dirOnly:!0})}}U.F=$t,U.info=_t,U.ctx=et,s.visuals.renderScale!==p&&(p=s.visuals.renderScale,a.setRenderScale(p)),a.render($t,{space:f?(M,H)=>c.render(M,H):null,near:M=>d.render(M)}),U.freeze||h.update(L,{scale:a.renderScale}),h.updateLabels(_t,Pt,s.camera.fovDeg,a.W/a.H),h.updateMarkers(Pt,s.camera.fovDeg),U.frames++;let R=s.visuals.adaptiveResolution;if(R.enabled&&performance.now()-F>4e3){let M=performance.now(),H=1/Math.max(L,.001);E+=(H-E)*.08,E<R.targetFps-6?(x+=L,y=0):E>=R.targetFps-4?(y+=L,x=0):x=y=0,b&&M-b.t>2500&&(E<b.fps*1.08&&a.renderScale<b.prev&&(a.setRenderScale(b.prev),P=M+12e4),b=null),x>1.5&&a.renderScale>R.min&&M>P&&(b={t:M,fps:E,prev:a.renderScale},a.setRenderScale(Math.max(R.min,a.renderScale-.1)),x=0,M-T<6e3&&(C=Math.min(C*2,90)),A=M),y>C&&a.renderScale<p-.01&&M-A>3e3&&(a.setRenderScale(Math.min(p,a.renderScale+.1)),y=0,T=M),M-A>4e4&&(C=3);let $=u.warp.form>.01||u.warp.on;S&&!$&&a.renderScale<p&&(a.setRenderScale(p),E=R.targetFps,x=0,C=3),S=$}requestAnimationFrame(N)};document.getElementById("boot").style.display="none",window.__ready=!0,requestAnimationFrame(N)}function Bu(s,t){let e=s.warp;if(!e.on)return 0;let n=t.warp.steps[t.warp.steps.length-1];return bt(Math.log10(Math.max(e.c,.8)/.8)/Math.log10(n/.8),0,1)}function vv(s,t){return s.warp.on?.55:bt(s.thrust,0,1)*.9}function zu(s,t,e,n){let i=t.cat,r=[1,0,0],o=[0,0,0],a=3e-9,l=0,c=[0,1,0],d=1,u=[1,0,0];if(s.system){let h=Iu(s.system,n,e),f=Ru(s.system,n,e);h&&(r=h.dir,u=h.dir,o=[h.color[0]*h.E,h.color[1]*h.E,h.color[2]*h.E],d=h.vis),l=f.shine,a=f.direct+f.shine+3e-9;let p=null,v=1/0;for(let g of s.system.bodies){if(g.kind==="star"||g.kind==="belt")continue;let m=g.positionAt(e),x=Math.hypot(m[0]-n[0],m[1]-n[1],m[2]-n[2]),_=x/g.radiusKm;_<v&&(v=_,p=[(m[0]-n[0])/x,(m[1]-n[1])/x,(m[2]-n[2])/x])}p&&v<40&&(c=p)}else{let h=s.shipPc(e),f=i.within(h,12),p=0,v=0;for(let g of f){let m=i.apparentMag(g,h),x=Math.pow(10,-.4*(m+26.74));if(v+=x,x>p){p=x;let _=[i.pos[g*3]-h[0],i.pos[g*3+1]-h[1],i.pos[g*3+2]-h[2]],y=Math.hypot(..._)||1;r=[_[0]/y,_[1]/y,_[2]/y],u=r;let E=Di(i.d.teff[g]);o=[E[0]*x,E[1]*x,E[2]*x]}}a=v+3e-9}return{sunDir:r,sunE:o,sunVisible:d,bodyDir:c,bodyShine:l,ambientE:2e-9,contextE:a,sunDirRest:u}}function xv(s,t,e,n){if(!(e.form>.01))return{center:[.5,.5],radius:.2};let i=s.camera,r=new I(0,0,0).applyMatrix4(i.matrixWorldInverse),o=Math.max(r.length(),1),a=.5/Math.tan(.5*i.fov*Kt),l=.5,c=.5;r.z<-.01&&(l=.5+r.x/-r.z*a/i.aspect,c=.5+r.y/-r.z*a);let d=120*(.35+.65*un(0,.6,e.form)),u=Math.min(d/Math.max(o,d*1.02),.99),h=Math.min(Math.tan(Math.asin(u))*a,1.5);return{center:[l,c],radius:h}}Hu().catch(s=>{console.error(s);let t=document.getElementById("boot-msg");t&&(t.textContent="Error: "+(s&&s.message?s.message:s),t.style.color="#f88")});})();
