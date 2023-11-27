// ==UserScript==
// @encoding utf-8
// @name AdShield Defuser
// @description AdShield Defuser provides mitigation for AdShield trackers and advertisement services.
// @author HoJeong Go <seia@outlook.kr>
// @version 0.13.7
//
// @grant none
// @run-at document-start
//
// @match http://ygosu.com/*
// @match https://ygosu.com/*
// @match http://*.ygosu.com/*
// @match https://*.ygosu.com/*
// @match http://inven.co.kr/*
// @match https://inven.co.kr/*
// @match http://*.inven.co.kr/*
// @match https://*.inven.co.kr/*
// @match http://sportalkorea.com/*
// @match https://sportalkorea.com/*
// @match http://*.sportalkorea.com/*
// @match https://*.sportalkorea.com/*
// @match http://hancinema.net/*
// @match https://hancinema.net/*
// @match http://*.hancinema.net/*
// @match https://*.hancinema.net/*
// @match http://edaily.co.kr/*
// @match https://edaily.co.kr/*
// @match http://*.edaily.co.kr/*
// @match https://*.edaily.co.kr/*
// @match http://enetnews.co.kr/*
// @match https://enetnews.co.kr/*
// @match http://*.enetnews.co.kr/*
// @match https://*.enetnews.co.kr/*
// @match http://genshinlab.com/*
// @match https://genshinlab.com/*
// @match https://loawa.com/*
//
// @namespace https://github.com/seia-soto/userscripts
// @homepageURL https://github.com/seia-soto/userscripts
// @supportURL https://github.com/seia-soto/userscripts
// @updateURL https://seia-soto.github.io/userscripts/asdefuser.user.js
// @downloadURL https://seia-soto.github.io/userscripts/asdefuser.user.js
// ==/UserScript==
"use strict";(()=>{var Ct=Object.create;var nt=Object.defineProperty;var Ot=Object.getOwnPropertyDescriptor;var _t=Object.getOwnPropertyNames;var Mt=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty;var Nt=(e,t)=>()=>(e&&(t=e(e=0)),t);var $=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var vt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of _t(t))!Lt.call(e,i)&&i!==r&&nt(e,i,{get:()=>t[i],enumerable:!(n=Ot(t,i))||n.enumerable});return e};var Pt=(e,t,r)=>(r=e!=null?Ct(Mt(e)):{},vt(t||!e||!e.__esModule?nt(r,"default",{value:e,enumerable:!0}):r,e));var ut=$(v=>{"use strict";l();v.byteLength=qt;v.toByteArray=jt;v.fromByteArray=Ht;var E=[],w=[],Dt=typeof Uint8Array!="undefined"?Uint8Array:Array,W="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(A=0,it=W.length;A<it;++A)E[A]=W[A],w[W.charCodeAt(A)]=A;var A,it;w["-".charCodeAt(0)]=62;w["_".charCodeAt(0)]=63;function ot(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");r===-1&&(r=t);var n=r===t?0:4-r%4;return[r,n]}function qt(e){var t=ot(e),r=t[0],n=t[1];return(r+n)*3/4-n}function zt(e,t,r){return(t+r)*3/4-r}function jt(e){var t,r=ot(e),n=r[0],i=r[1],o=new Dt(zt(e,n,i)),u=0,p=i>0?n-4:n,c;for(c=0;c<p;c+=4)t=w[e.charCodeAt(c)]<<18|w[e.charCodeAt(c+1)]<<12|w[e.charCodeAt(c+2)]<<6|w[e.charCodeAt(c+3)],o[u++]=t>>16&255,o[u++]=t>>8&255,o[u++]=t&255;return i===2&&(t=w[e.charCodeAt(c)]<<2|w[e.charCodeAt(c+1)]>>4,o[u++]=t&255),i===1&&(t=w[e.charCodeAt(c)]<<10|w[e.charCodeAt(c+1)]<<4|w[e.charCodeAt(c+2)]>>2,o[u++]=t>>8&255,o[u++]=t&255),o}function $t(e){return E[e>>18&63]+E[e>>12&63]+E[e>>6&63]+E[e&63]}function Wt(e,t,r){for(var n,i=[],o=t;o<r;o+=3)n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(e[o+2]&255),i.push($t(n));return i.join("")}function Ht(e){for(var t,r=e.length,n=r%3,i=[],o=16383,u=0,p=r-n;u<p;u+=o)i.push(Wt(e,u,u+o>p?p:u+o));return n===1?(t=e[r-1],i.push(E[t>>2]+E[t<<4&63]+"==")):n===2&&(t=(e[r-2]<<8)+e[r-1],i.push(E[t>>10]+E[t>>4&63]+E[t<<2&63]+"=")),i.join("")}});var st=$(H=>{l();H.read=function(e,t,r,n,i){var o,u,p=i*8-n-1,c=(1<<p)-1,h=c>>1,f=-7,a=r?i-1:0,b=r?-1:1,g=e[t+a];for(a+=b,o=g&(1<<-f)-1,g>>=-f,f+=p;f>0;o=o*256+e[t+a],a+=b,f-=8);for(u=o&(1<<-f)-1,o>>=-f,f+=n;f>0;u=u*256+e[t+a],a+=b,f-=8);if(o===0)o=1-h;else{if(o===c)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,n),o=o-h}return(g?-1:1)*u*Math.pow(2,o-n)};H.write=function(e,t,r,n,i,o){var u,p,c,h=o*8-i-1,f=(1<<h)-1,a=f>>1,b=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:o-1,j=n?1:-1,Rt=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(p=isNaN(t)?1:0,u=f):(u=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-u))<1&&(u--,c*=2),u+a>=1?t+=b/c:t+=b*Math.pow(2,1-a),t*c>=2&&(u++,c/=2),u+a>=f?(p=0,u=f):u+a>=1?(p=(t*c-1)*Math.pow(2,i),u=u+a):(p=t*Math.pow(2,a-1)*Math.pow(2,i),u=0));i>=8;e[r+g]=p&255,g+=j,p/=256,i-=8);for(u=u<<i|p,h+=i;h>0;e[r+g]=u&255,g+=j,u/=256,h-=8);e[r+g-j]|=Rt*128}});var At=$(R=>{"use strict";l();var V=ut(),S=st(),ct=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;R.Buffer=s;R.SlowBuffer=Kt;R.INSPECT_MAX_BYTES=50;var P=2147483647;R.kMaxLength=P;s.TYPED_ARRAY_SUPPORT=Vt();!s.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Vt(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(e){return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}});Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function I(e){if(e>P)throw new RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return J(e)}return ht(e,t,r)}s.poolSize=8192;function ht(e,t,r){if(typeof e=="string")return Yt(e,t);if(ArrayBuffer.isView(e))return Xt(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(B(e,ArrayBuffer)||e&&B(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(B(e,SharedArrayBuffer)||e&&B(e.buffer,SharedArrayBuffer)))return Y(e,t,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return s.from(n,t,r);let i=Jt(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return s.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}s.from=function(e,t,r){return ht(e,t,r)};Object.setPrototypeOf(s.prototype,Uint8Array.prototype);Object.setPrototypeOf(s,Uint8Array);function lt(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Gt(e,t,r){return lt(e),e<=0?I(e):t!==void 0?typeof r=="string"?I(e).fill(t,r):I(e).fill(t):I(e)}s.alloc=function(e,t,r){return Gt(e,t,r)};function J(e){return lt(e),I(e<0?0:K(e)|0)}s.allocUnsafe=function(e){return J(e)};s.allocUnsafeSlow=function(e){return J(e)};function Yt(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!s.isEncoding(t))throw new TypeError("Unknown encoding: "+t);let r=dt(e,t)|0,n=I(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}function G(e){let t=e.length<0?0:K(e.length)|0,r=I(t);for(let n=0;n<t;n+=1)r[n]=e[n]&255;return r}function Xt(e){if(B(e,Uint8Array)){let t=new Uint8Array(e);return Y(t.buffer,t.byteOffset,t.byteLength)}return G(e)}function Y(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return t===void 0&&r===void 0?n=new Uint8Array(e):r===void 0?n=new Uint8Array(e,t):n=new Uint8Array(e,t,r),Object.setPrototypeOf(n,s.prototype),n}function Jt(e){if(s.isBuffer(e)){let t=K(e.length)|0,r=I(t);return r.length===0||e.copy(r,0,0,t),r}if(e.length!==void 0)return typeof e.length!="number"||Z(e.length)?I(0):G(e);if(e.type==="Buffer"&&Array.isArray(e.data))return G(e.data)}function K(e){if(e>=P)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+P.toString(16)+" bytes");return e|0}function Kt(e){return+e!=e&&(e=0),s.alloc(+e)}s.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==s.prototype};s.compare=function(t,r){if(B(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),B(r,Uint8Array)&&(r=s.from(r,r.offset,r.byteLength)),!s.isBuffer(t)||!s.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;let n=t.length,i=r.length;for(let o=0,u=Math.min(n,i);o<u;++o)if(t[o]!==r[o]){n=t[o],i=r[o];break}return n<i?-1:i<n?1:0};s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};s.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return s.alloc(0);let n;if(r===void 0)for(r=0,n=0;n<t.length;++n)r+=t[n].length;let i=s.allocUnsafe(r),o=0;for(n=0;n<t.length;++n){let u=t[n];if(B(u,Uint8Array))o+u.length>i.length?(s.isBuffer(u)||(u=s.from(u)),u.copy(i,o)):Uint8Array.prototype.set.call(i,u,o);else if(s.isBuffer(u))u.copy(i,o);else throw new TypeError('"list" argument must be an Array of Buffers');o+=u.length}return i};function dt(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||B(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&r===0)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return Ft(e).length;default:if(i)return n?-1:X(e).length;t=(""+t).toLowerCase(),i=!0}}s.byteLength=dt;function Qt(e,t,r){let n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,t>>>=0,r<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return cr(this,t,r);case"utf8":case"utf-8":return wt(this,t,r);case"ascii":return ur(this,t,r);case"latin1":case"binary":return sr(this,t,r);case"base64":return ir(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pr(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}s.prototype._isBuffer=!0;function U(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}s.prototype.swap16=function(){let t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let r=0;r<t;r+=2)U(this,r,r+1);return this};s.prototype.swap32=function(){let t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<t;r+=4)U(this,r,r+3),U(this,r+1,r+2);return this};s.prototype.swap64=function(){let t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<t;r+=8)U(this,r,r+7),U(this,r+1,r+6),U(this,r+2,r+5),U(this,r+3,r+4);return this};s.prototype.toString=function(){let t=this.length;return t===0?"":arguments.length===0?wt(this,0,t):Qt.apply(this,arguments)};s.prototype.toLocaleString=s.prototype.toString;s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:s.compare(this,t)===0};s.prototype.inspect=function(){let t="",r=R.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"};ct&&(s.prototype[ct]=s.prototype.inspect);s.prototype.compare=function(t,r,n,i,o){if(B(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(r===void 0&&(r=0),n===void 0&&(n=t?t.length:0),i===void 0&&(i=0),o===void 0&&(o=this.length),r<0||n>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&r>=n)return 0;if(i>=o)return-1;if(r>=n)return 1;if(r>>>=0,n>>>=0,i>>>=0,o>>>=0,this===t)return 0;let u=o-i,p=n-r,c=Math.min(u,p),h=this.slice(i,o),f=t.slice(r,n);for(let a=0;a<c;++a)if(h[a]!==f[a]){u=h[a],p=f[a];break}return u<p?-1:p<u?1:0};function yt(e,t,r,n,i){if(e.length===0)return-1;if(typeof r=="string"?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Z(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof t=="string"&&(t=s.from(t,n)),s.isBuffer(t))return t.length===0?-1:pt(e,t,r,n,i);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):pt(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function pt(e,t,r,n,i){let o=1,u=e.length,p=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||t.length<2)return-1;o=2,u/=2,p/=2,r/=2}function c(f,a){return o===1?f[a]:f.readUInt16BE(a*o)}let h;if(i){let f=-1;for(h=r;h<u;h++)if(c(e,h)===c(t,f===-1?0:h-f)){if(f===-1&&(f=h),h-f+1===p)return f*o}else f!==-1&&(h-=h-f),f=-1}else for(r+p>u&&(r=u-p),h=r;h>=0;h--){let f=!0;for(let a=0;a<p;a++)if(c(e,h+a)!==c(t,a)){f=!1;break}if(f)return h}return-1}s.prototype.includes=function(t,r,n){return this.indexOf(t,r,n)!==-1};s.prototype.indexOf=function(t,r,n){return yt(this,t,r,n,!0)};s.prototype.lastIndexOf=function(t,r,n){return yt(this,t,r,n,!1)};function Zt(e,t,r,n){r=Number(r)||0;let i=e.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;let o=t.length;n>o/2&&(n=o/2);let u;for(u=0;u<n;++u){let p=parseInt(t.substr(u*2,2),16);if(Z(p))return u;e[r+u]=p}return u}function tr(e,t,r,n){return D(X(t,e.length-r),e,r,n)}function rr(e,t,r,n){return D(lr(t),e,r,n)}function er(e,t,r,n){return D(Ft(t),e,r,n)}function nr(e,t,r,n){return D(dr(t,e.length-r),e,r,n)}s.prototype.write=function(t,r,n,i){if(r===void 0)i="utf8",n=this.length,r=0;else if(n===void 0&&typeof r=="string")i=r,n=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let o=this.length-r;if((n===void 0||n>o)&&(n=o),t.length>0&&(n<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let u=!1;for(;;)switch(i){case"hex":return Zt(this,t,r,n);case"utf8":case"utf-8":return tr(this,t,r,n);case"ascii":case"latin1":case"binary":return rr(this,t,r,n);case"base64":return er(this,t,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return nr(this,t,r,n);default:if(u)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),u=!0}};s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ir(e,t,r){return t===0&&r===e.length?V.fromByteArray(e):V.fromByteArray(e.slice(t,r))}function wt(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let o=e[i],u=null,p=o>239?4:o>223?3:o>191?2:1;if(i+p<=r){let c,h,f,a;switch(p){case 1:o<128&&(u=o);break;case 2:c=e[i+1],(c&192)===128&&(a=(o&31)<<6|c&63,a>127&&(u=a));break;case 3:c=e[i+1],h=e[i+2],(c&192)===128&&(h&192)===128&&(a=(o&15)<<12|(c&63)<<6|h&63,a>2047&&(a<55296||a>57343)&&(u=a));break;case 4:c=e[i+1],h=e[i+2],f=e[i+3],(c&192)===128&&(h&192)===128&&(f&192)===128&&(a=(o&15)<<18|(c&63)<<12|(h&63)<<6|f&63,a>65535&&a<1114112&&(u=a))}}u===null?(u=65533,p=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|u&1023),n.push(u),i+=p}return or(n)}var at=4096;function or(e){let t=e.length;if(t<=at)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=at));return r}function ur(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]&127);return n}function sr(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function cr(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let o=t;o<r;++o)i+=yr[e[o]];return i}function pr(e,t,r){let n=e.slice(t,r),i="";for(let o=0;o<n.length-1;o+=2)i+=String.fromCharCode(n[o]+n[o+1]*256);return i}s.prototype.slice=function(t,r){let n=this.length;t=~~t,r=r===void 0?n:~~r,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),r<t&&(r=t);let i=this.subarray(t,r);return Object.setPrototypeOf(i,s.prototype),i};function d(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(t,r,n){t=t>>>0,r=r>>>0,n||d(t,r,this.length);let i=this[t],o=1,u=0;for(;++u<r&&(o*=256);)i+=this[t+u]*o;return i};s.prototype.readUintBE=s.prototype.readUIntBE=function(t,r,n){t=t>>>0,r=r>>>0,n||d(t,r,this.length);let i=this[t+--r],o=1;for(;r>0&&(o*=256);)i+=this[t+--r]*o;return i};s.prototype.readUint8=s.prototype.readUInt8=function(t,r){return t=t>>>0,r||d(t,1,this.length),this[t]};s.prototype.readUint16LE=s.prototype.readUInt16LE=function(t,r){return t=t>>>0,r||d(t,2,this.length),this[t]|this[t+1]<<8};s.prototype.readUint16BE=s.prototype.readUInt16BE=function(t,r){return t=t>>>0,r||d(t,2,this.length),this[t]<<8|this[t+1]};s.prototype.readUint32LE=s.prototype.readUInt32LE=function(t,r){return t=t>>>0,r||d(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216};s.prototype.readUint32BE=s.prototype.readUInt32BE=function(t,r){return t=t>>>0,r||d(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])};s.prototype.readBigUInt64LE=F(function(t){t=t>>>0,T(t,"offset");let r=this[t],n=this[t+7];(r===void 0||n===void 0)&&_(t,this.length-8);let i=r+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,o=this[++t]+this[++t]*2**8+this[++t]*2**16+n*2**24;return BigInt(i)+(BigInt(o)<<BigInt(32))});s.prototype.readBigUInt64BE=F(function(t){t=t>>>0,T(t,"offset");let r=this[t],n=this[t+7];(r===void 0||n===void 0)&&_(t,this.length-8);let i=r*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],o=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n;return(BigInt(i)<<BigInt(32))+BigInt(o)});s.prototype.readIntLE=function(t,r,n){t=t>>>0,r=r>>>0,n||d(t,r,this.length);let i=this[t],o=1,u=0;for(;++u<r&&(o*=256);)i+=this[t+u]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*r)),i};s.prototype.readIntBE=function(t,r,n){t=t>>>0,r=r>>>0,n||d(t,r,this.length);let i=r,o=1,u=this[t+--i];for(;i>0&&(o*=256);)u+=this[t+--i]*o;return o*=128,u>=o&&(u-=Math.pow(2,8*r)),u};s.prototype.readInt8=function(t,r){return t=t>>>0,r||d(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]};s.prototype.readInt16LE=function(t,r){t=t>>>0,r||d(t,2,this.length);let n=this[t]|this[t+1]<<8;return n&32768?n|4294901760:n};s.prototype.readInt16BE=function(t,r){t=t>>>0,r||d(t,2,this.length);let n=this[t+1]|this[t]<<8;return n&32768?n|4294901760:n};s.prototype.readInt32LE=function(t,r){return t=t>>>0,r||d(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24};s.prototype.readInt32BE=function(t,r){return t=t>>>0,r||d(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]};s.prototype.readBigInt64LE=F(function(t){t=t>>>0,T(t,"offset");let r=this[t],n=this[t+7];(r===void 0||n===void 0)&&_(t,this.length-8);let i=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(r+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)});s.prototype.readBigInt64BE=F(function(t){t=t>>>0,T(t,"offset");let r=this[t],n=this[t+7];(r===void 0||n===void 0)&&_(t,this.length-8);let i=(r<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n)});s.prototype.readFloatLE=function(t,r){return t=t>>>0,r||d(t,4,this.length),S.read(this,t,!0,23,4)};s.prototype.readFloatBE=function(t,r){return t=t>>>0,r||d(t,4,this.length),S.read(this,t,!1,23,4)};s.prototype.readDoubleLE=function(t,r){return t=t>>>0,r||d(t,8,this.length),S.read(this,t,!0,52,8)};s.prototype.readDoubleBE=function(t,r){return t=t>>>0,r||d(t,8,this.length),S.read(this,t,!1,52,8)};function y(e,t,r,n,i,o){if(!s.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(t,r,n,i){if(t=+t,r=r>>>0,n=n>>>0,!i){let p=Math.pow(2,8*n)-1;y(this,t,r,n,p,0)}let o=1,u=0;for(this[r]=t&255;++u<n&&(o*=256);)this[r+u]=t/o&255;return r+n};s.prototype.writeUintBE=s.prototype.writeUIntBE=function(t,r,n,i){if(t=+t,r=r>>>0,n=n>>>0,!i){let p=Math.pow(2,8*n)-1;y(this,t,r,n,p,0)}let o=n-1,u=1;for(this[r+o]=t&255;--o>=0&&(u*=256);)this[r+o]=t/u&255;return r+n};s.prototype.writeUint8=s.prototype.writeUInt8=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,1,255,0),this[r]=t&255,r+1};s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,2,65535,0),this[r]=t&255,this[r+1]=t>>>8,r+2};s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=t&255,r+2};s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=t&255,r+4};s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=t&255,r+4};function xt(e,t,r,n,i){It(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o=o>>8,e[r++]=o,o=o>>8,e[r++]=o,o=o>>8,e[r++]=o;let u=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=u,u=u>>8,e[r++]=u,u=u>>8,e[r++]=u,u=u>>8,e[r++]=u,r}function mt(e,t,r,n,i){It(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o=o>>8,e[r+6]=o,o=o>>8,e[r+5]=o,o=o>>8,e[r+4]=o;let u=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=u,u=u>>8,e[r+2]=u,u=u>>8,e[r+1]=u,u=u>>8,e[r]=u,r+8}s.prototype.writeBigUInt64LE=F(function(t,r=0){return xt(this,t,r,BigInt(0),BigInt("0xffffffffffffffff"))});s.prototype.writeBigUInt64BE=F(function(t,r=0){return mt(this,t,r,BigInt(0),BigInt("0xffffffffffffffff"))});s.prototype.writeIntLE=function(t,r,n,i){if(t=+t,r=r>>>0,!i){let c=Math.pow(2,8*n-1);y(this,t,r,n,c-1,-c)}let o=0,u=1,p=0;for(this[r]=t&255;++o<n&&(u*=256);)t<0&&p===0&&this[r+o-1]!==0&&(p=1),this[r+o]=(t/u>>0)-p&255;return r+n};s.prototype.writeIntBE=function(t,r,n,i){if(t=+t,r=r>>>0,!i){let c=Math.pow(2,8*n-1);y(this,t,r,n,c-1,-c)}let o=n-1,u=1,p=0;for(this[r+o]=t&255;--o>=0&&(u*=256);)t<0&&p===0&&this[r+o+1]!==0&&(p=1),this[r+o]=(t/u>>0)-p&255;return r+n};s.prototype.writeInt8=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=t&255,r+1};s.prototype.writeInt16LE=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,2,32767,-32768),this[r]=t&255,this[r+1]=t>>>8,r+2};s.prototype.writeInt16BE=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=t&255,r+2};s.prototype.writeInt32LE=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,4,2147483647,-2147483648),this[r]=t&255,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4};s.prototype.writeInt32BE=function(t,r,n){return t=+t,r=r>>>0,n||y(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=t&255,r+4};s.prototype.writeBigInt64LE=F(function(t,r=0){return xt(this,t,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});s.prototype.writeBigInt64BE=F(function(t,r=0){return mt(this,t,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function gt(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Et(e,t,r,n,i){return t=+t,r=r>>>0,i||gt(e,t,r,4,34028234663852886e22,-34028234663852886e22),S.write(e,t,r,n,23,4),r+4}s.prototype.writeFloatLE=function(t,r,n){return Et(this,t,r,!0,n)};s.prototype.writeFloatBE=function(t,r,n){return Et(this,t,r,!1,n)};function Bt(e,t,r,n,i){return t=+t,r=r>>>0,i||gt(e,t,r,8,17976931348623157e292,-17976931348623157e292),S.write(e,t,r,n,52,8),r+8}s.prototype.writeDoubleLE=function(t,r,n){return Bt(this,t,r,!0,n)};s.prototype.writeDoubleBE=function(t,r,n){return Bt(this,t,r,!1,n)};s.prototype.copy=function(t,r,n,i){if(!s.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),r>=t.length&&(r=t.length),r||(r=0),i>0&&i<n&&(i=n),i===n||t.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-r<i-n&&(i=t.length-r+n);let o=i-n;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),r),o};s.prototype.fill=function(t,r,n,i){if(typeof t=="string"){if(typeof r=="string"?(i=r,r=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!s.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(t.length===1){let u=t.charCodeAt(0);(i==="utf8"&&u<128||i==="latin1")&&(t=u)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(r<0||this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;r=r>>>0,n=n===void 0?this.length:n>>>0,t||(t=0);let o;if(typeof t=="number")for(o=r;o<n;++o)this[o]=t;else{let u=s.isBuffer(t)?t:s.from(t,i),p=u.length;if(p===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<n-r;++o)this[o+r]=u[o%p]}return this};var k={};function Q(e,t,r){k[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}Q("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Q("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError);Q("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=ft(String(r)):typeof r=="bigint"&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=ft(i)),i+="n"),n+=` It must be ${t}. Received ${i}`,n},RangeError);function ft(e){let t="",r=e.length,n=e[0]==="-"?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function ar(e,t,r){T(t,"offset"),(e[t]===void 0||e[t+r]===void 0)&&_(t,e.length-(r+1))}function It(e,t,r,n,i,o){if(e>r||e<t){let u=typeof t=="bigint"?"n":"",p;throw o>3?t===0||t===BigInt(0)?p=`>= 0${u} and < 2${u} ** ${(o+1)*8}${u}`:p=`>= -(2${u} ** ${(o+1)*8-1}${u}) and < 2 ** ${(o+1)*8-1}${u}`:p=`>= ${t}${u} and <= ${r}${u}`,new k.ERR_OUT_OF_RANGE("value",p,e)}ar(n,i,o)}function T(e,t){if(typeof e!="number")throw new k.ERR_INVALID_ARG_TYPE(t,"number",e)}function _(e,t,r){throw Math.floor(e)!==e?(T(e,r),new k.ERR_OUT_OF_RANGE(r||"offset","an integer",e)):t<0?new k.ERR_BUFFER_OUT_OF_BOUNDS:new k.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}var fr=/[^+/0-9A-Za-z-_]/g;function hr(e){if(e=e.split("=")[0],e=e.trim().replace(fr,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function X(e,t){t=t||1/0;let r,n=e.length,i=null,o=[];for(let u=0;u<n;++u){if(r=e.charCodeAt(u),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}else if(u+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return o}function lr(e){let t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r)&255);return t}function dr(e,t){let r,n,i,o=[];for(let u=0;u<e.length&&!((t-=2)<0);++u)r=e.charCodeAt(u),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function Ft(e){return V.toByteArray(hr(e))}function D(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function B(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function Z(e){return e!==e}var yr=function(){let e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){let n=r*16;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function F(e){return typeof BigInt=="undefined"?wr:e}function wr(){throw new Error("BigInt not supported")}});var x,l=Nt(()=>{"use strict";x=Pt(At(),1)});l();l();l();l();l();var M=class{constructor(t){this.cache=new Map,this.analyzer=t}analyze(t){if(this.cache.has(t))return this.cache.get(t);let r=this.analyzer(t);return this.cache.set(t,r),r}},Lr=new M(e=>e.startsWith("[")||e.startsWith("<")),Nr=new M(e=>e.startsWith("chrome")||e.startsWith("webkit")||e.startsWith("moz")),xr=["https://07c225f3.online","https://css-load.com"],tt=new M(e=>{if(e.endsWith("/script.min.js")||e.endsWith("/loader.min.js")||!location.origin.endsWith(".online")&&e.includes(".online"))return!0;for(let t of xr)if(e.startsWith(t))return!0;return!1});var mr=({trace:e})=>tt.analyze(e[e.length-1]),gr=({trace:e})=>{for(let t of e)if(tt.analyze(t))return!0;return!1},Ut=e=>t=>{for(let r of e)if(r(t))return!0;return!1},q=Ut([mr]),L=Ut([gr]);var N=e=>new Proxy(console.debug,{apply(t,r,n){Reflect.apply(t,r,[`${e}`,...n])}}),bt=N("[asdefuser:__utils__]");var C=()=>{let e=new Error;if(!e.stack)throw new Error("Stack trace is not available!");if(e.stack.includes("@")){let n=e.stack.split(`
`).slice(2),i=[];navigator.userAgent.includes("Firefox/")&&n.splice(-1,1);for(let o of n){let u=o.indexOf("@")+1,p=o.lastIndexOf(":"),c=p<0?o.slice(u):o.slice(u,o.lastIndexOf(":",p-1));i.push(c)}return{trace:i,raw:n}}let t=e.stack.slice(6).split(`
`).slice(2),r=[];for(let n of t){let i=n.slice(n.indexOf("(")+1||n.indexOf("at")+3,n.lastIndexOf(":",n.lastIndexOf(":")-1));r.push(i)}return{trace:r,raw:t}},m=(e,t=e.name)=>new Proxy(e,{apply(n,i,o){let u=C();if(q(u))throw bt(`apply name=${t} argArray=`,o,"stack=",u.raw),new Error("asdefuser");return Reflect.apply(n,i,o)},setPrototypeOf(n,i){let o=C();if(L(o))throw bt(`setPrototypeOf name=${t} stack=`,o.raw),new Error("asdefuser");return Reflect.setPrototypeOf(n,i)}}),O=async e=>e.readyState!=="loading"?!0:new Promise(t=>{e.addEventListener("readystatechange",()=>{t(!0)})});var rt=N("[asdefuser:basedrop]"),kt=async()=>{await O(document);let e="";for(let t of document.querySelectorAll("script[wp-data]")){let r=t.getAttribute("wp-data");if(!r){rt("empty attribute",t);continue}let n;try{n=x.Buffer.from(r,"base64").toString("utf-8")}catch(i){rt("failed to decode b64 stream",i);continue}if(!n.startsWith("<")){rt("failed to decode encoded text",n);continue}e+=n}e&&document.head.insertAdjacentHTML("beforeend",e)};l();l();var St=[{id:"kynb",input:'0Nm}ubC9L6k{7("nx>s=Ko]IBw/ySgf%W',output:"a274bcljtv0omw6z9g5p13us8ekhxirfq",reserved1:121,reserved1Input:"e?`3AU<2Z[;	iJEFV'|Pa8T5j-.v :q#H)",reserved1Output:"eow5rfluq8x4zgj70p13ci6mh2s9tnkabv",reserved2:110,reserved2Input:`&XD_QOhMrltpR1c4zG
Y`,reserved2Output:"c7863qbsmwy54otnhiv1"},{id:"uyyk",input:"Tx<W|XvcubCz-ekU/ oiM	&:%Ig>2h{s[",output:"mjb0feu6lzx7kqhgop4at831c92ywir5n",reserved1:118,reserved1Input:`5f;Vt"qDLB91'm
}?R6S(Z#A\`Jr0HQlKP)`,reserved1Output:"qp5r842ycvxjowbaz7uhts9gk6i0emn13f",reserved2:115,reserved2Input:"NGnE8a_y.FjYO=4w3]p7",reserved2Output:"kn1eho6fjbr40pxc9i2q"},{id:"rypa",input:`B8 /Y9o]VHC_p3yt
hTONi5q6IG-r=2g%`,output:"ul2ow01j9zq58mfk4cv37absyigteh6xn",reserved1:112,reserved1Input:`nEeJKa.:P{A;x0UL"4'XFm|}wfvzQ#7ZS(`,reserved1Output:"m8961qwzghu27xeoapn3k5ilvrfjc4syt0",reserved2:114,reserved2Input:"&j<RDs[W>bukM`c?1)	l",reserved2Output:"6akyhor80m37slfw1vxp"},{id:"ehor",input:`"q4
J3fkZhj&lt\`wH50T='g|(EP[B-QYD`,output:"7uil5a3gxbrptvjeymo4c09wqzs682nf1",reserved1:107,reserved1Input:"<GcpOI/	zAX%6?9o r.bmFRie>Ks_)v;Vu",reserved1Output:"ypwzx2usm8og5q74tanlb6ri3vcehj9kf1",reserved2:104,reserved2Input:"7y:x218]U#NC}nWaMS{L",reserved2Output:"bja3zkfvqltgu5sw678n"},{id:"zmpc",input:`.Ip>szJ8EwahYM/v;yKc=f
([_T q3nOS`,output:"5nv1iegza269ju8soky04h3p7rltcxmbq",reserved1:119,reserved1Input:'QCABV"]#0jb&Wo6t:UuiHg1rPD4%)RlNk-',reserved1Output:"le4971m5irpukxjv3sq2o8y60gnbzthwfa",reserved2:102,reserved2Input:"G752e`LXx'Zm}9<	{?F",reserved2Output:"plbi21cxfmo36tn50uq"},{id:"fwbh",input:`x5A8hE9=
QG1"CuJ'oV(I)>lbW4D#e L6`,output:"wr275yogsj4kv03izcnx1uaqb8pflm6th",reserved1:57,reserved1Input:"3%t	{2rckfyXR]?NK&/Fgw;TSMmn-7_iU.",reserved1Output:"y93rfts7lxq8vkgjen5m0i6wzhap1ucb2o",reserved2:101,reserved2Input:"}qB<z`PZ[YH:0sjvaOp",reserved2Output:"6m7kwe3qaohu5g4bz8i"},{id:"qbuw",input:"i;Uj'[<w\"DT0lZLgS8f#hxsMV}ty:E-)`",output:"3c51goq40pzal9r6xuvtkey2swnj7mihb",reserved1:102,reserved1Input:`k96YK(v/&ICmGB	5bza?HcP_1W qRoA.=
`,reserved1Output:"mteqh0ys62p1fxj589ro4aunzlig3c7wbk",reserved2:56,reserved2Input:"{eF%OXrQ2>np3JN]47u",reserved2Output:"9jmanwyqx0s54zuto6h"},{id:"nloc",input:"x<[ykY%1-sK9_C0Raj#8OLl]/HwhqFU	3",output:"0ozupkrx6qjwnygl34m7i9th1f8v2bec5",reserved1:97,reserved1Input:'&m2GT5IrP" .B(o=:igbJpWnz7tcvNZ`>\n',reserved1Output:"74hfvbtcj2eroa0ul56yw3inqxkgp9m1zs",reserved2:115,reserved2Input:"uV6})Q'?D{SeAMX4;Ef",reserved2Output:"91ysxe8luorn6vpciwq"}];var z=N("[asdefuser:tinywave]"),Br=e=>{let t=e.slice(0,4),r=St.find(c=>c.id===t);if(!r)throw new Error("DEFUSER_TINYWAVE_KEY_NOT_FOUND");let n=String.fromCharCode(r.reserved1),i=String.fromCharCode(r.reserved2),o=(c,h,f)=>{let a=h.indexOf(f);return a>=0?c[a]:f},u=0,p=e.slice(4).split("").map(c=>{if(!u){if(c===n)return u=1,"";if(c===i)return u=2,""}return u===1?(u=0,r.reserved1Output.includes(c)?o(r.reserved1Input,r.reserved1Output,c):o(r.input,r.output,c)+c):u===2?(u=0,r.reserved2Output.includes(c)?o(r.reserved2Input,r.reserved2Output,c):o(r.input,r.output,c)+c):o(r.input,r.output,c)}).join("");return JSON.parse(p)},Ir=e=>{z("restore");let t=0;for(let r of e)try{r.tags&&document.head.insertAdjacentHTML("beforeend",r.tags)}catch(n){z("restore error=",n),t++}z(`restore total=${e.length} failed=${t}`)},Fr=async()=>{let e,t=()=>{let r=document.querySelector('script[data]:not([data=""])');if(r){let n=r.getAttribute("src"),i=r.getAttribute("data");n&&i&&(e={script:n,data:i})}};if(t(),e||(await O(document),t()),!e)throw new Error("DEFUSER_SHORTWAVE_TARGET_NOT_FOUND");return Br(e.data)},Tt=async()=>{let e=await Fr();z("payload",e),Ir(e)};l();var Ar=[["inventories",e=>Array.isArray(e)&&Object.getOwnPropertyNames(e[0]).includes("originalAds")],["key",e=>typeof e=="string"&&e.startsWith("as")]],et=e=>{if(typeof e!="object")return!1;if(Array.isArray(e)){for(let r of e)if(et(r))return!0}let t=Object.getOwnPropertyNames(e);for(let[r,n]of Ar)if(t.includes(r)&&n(e[r]))return!0;return!1};var Ur=()=>{Element.prototype.remove=m(Element.prototype.remove,"Element.prototype.remove"),Element.prototype.removeChild=m(Element.prototype.removeChild,"Element.prototype.removeChild"),Element.prototype.insertAdjacentHTML=m(Element.prototype.insertAdjacentHTML,"Element.prototype.insertAdjacentHTML"),Element.prototype.setAttribute=m(Element.prototype.setAttribute,"Element.prototype.setAttribute"),EventTarget.prototype.addEventListener=m(EventTarget.prototype.addEventListener,"EventTarget.prototype.addEventListener"),MessagePort.prototype.postMessage=m(MessagePort.prototype.postMessage,"MessagePort.prototype.postMessage"),document.createElement=m(document.createElement,"document.createElement"),window.setInterval=m(setInterval,"setInterval"),window.setTimeout=m(setTimeout,"setInterval"),localStorage.removeItem("as_profile_cache"),localStorage.removeItem("adshield-analytics-uuid"),Storage.prototype.setItem=new Proxy(Storage.prototype.setItem,{apply(e,t,r){let[n]=r;if(L(C())||n.startsWith("as_")||n.startsWith("as-")||n.includes("adshield"))throw new DOMException("QuotaExceededError");return Reflect.apply(e,t,r)}}),window.fetch=m(fetch,"fetch"),window.XMLHttpRequest=new Proxy(XMLHttpRequest,{construct(e,t,r){return L(C())?{}:Reflect.construct(e,t,r)}}),window.Error=new Proxy(Error,{set(){throw new Error("Overriding Error is not allowed!")},setPrototypeOf(){throw new Error("Overriding prototype of Error is not allowed!")}}),navigator.vendor.includes("Apple")&&(JSON.parse=new Proxy(JSON.parse,{apply(e,t,r){let n=Reflect.apply(e,t,r);return q(C())||et(n)?null:n},set(){throw new Error("Overriding JSON.parse is not allowed!")}}),O(document).then(()=>{var t;for(let r of document.querySelectorAll('iframe[src="about:blank"]'))r.remove();new MutationObserver(r=>{for(let n of r)for(let i of n.addedNodes)i instanceof HTMLIFrameElement&&i.getAttribute("src")==="about:blank"&&i.remove()}).observe((t=document.documentElement)!=null?t:document.body,{childList:!0,subtree:!0}),document.head.insertAdjacentHTML("afterbegin",'<style>iframe[src="about:blank"]{display:none!important}</style>')})),kt(),Tt()};Ur();})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
