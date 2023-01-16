import{W as t,X as e,K as r,Y as n,M as o,Z as a,J as c,$ as u,a0 as s,L as i,a1 as f,a2 as p,a3 as b,a4 as l,a5 as y}from"./useI18n-d79c1d65.js";const j=t(e,"WeakMap");var v=Object.create;const h=function(){function t(){}return function(e){if(!r(e))return{};if(v)return v(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function d(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function _(t,e,r,a){var c=!r;r||(r={});for(var u=-1,s=e.length;++u<s;){var i=e[u],f=a?a(r[i],t[i],i,r,t):void 0;void 0===f&&(f=t[i]),c?n(r,i,f):o(r,i,f)}return r}function g(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function m(t){return null!=t&&g(t.length)&&!a(t)}var O=Object.prototype;function w(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||O)}function A(t){return c(t)&&"[object Arguments]"==u(t)}var x=Object.prototype,z=x.hasOwnProperty,P=x.propertyIsEnumerable;const S=A(function(){return arguments}())?A:function(t){return c(t)&&z.call(t,"callee")&&!P.call(t,"callee")};var T="object"==typeof exports&&exports&&!exports.nodeType&&exports,U=T&&"object"==typeof module&&module&&!module.nodeType&&module,B=U&&U.exports===T?e.Buffer:void 0;const I=(B?B.isBuffer:void 0)||function(){return!1};var M={};function k(t){return function(e){return t(e)}}M["[object Float32Array]"]=M["[object Float64Array]"]=M["[object Int8Array]"]=M["[object Int16Array]"]=M["[object Int32Array]"]=M["[object Uint8Array]"]=M["[object Uint8ClampedArray]"]=M["[object Uint16Array]"]=M["[object Uint32Array]"]=!0,M["[object Arguments]"]=M["[object Array]"]=M["[object ArrayBuffer]"]=M["[object Boolean]"]=M["[object DataView]"]=M["[object Date]"]=M["[object Error]"]=M["[object Function]"]=M["[object Map]"]=M["[object Number]"]=M["[object Object]"]=M["[object RegExp]"]=M["[object Set]"]=M["[object String]"]=M["[object WeakMap]"]=!1;var D="object"==typeof exports&&exports&&!exports.nodeType&&exports,E=D&&"object"==typeof module&&module&&!module.nodeType&&module,W=E&&E.exports===D&&s.process;const q=function(){try{var t=E&&E.require&&E.require("util").types;return t||W&&W.binding&&W.binding("util")}catch(e){}}();var F=q&&q.isTypedArray;const L=F?k(F):function(t){return c(t)&&g(t.length)&&!!M[u(t)]};var V=Object.prototype.hasOwnProperty;function C(t,e){var r=i(t),n=!r&&S(t),o=!r&&!n&&I(t),a=!r&&!n&&!o&&L(t),c=r||n||o||a,u=c?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],s=u.length;for(var p in t)!e&&!V.call(t,p)||c&&("length"==p||o&&("offset"==p||"parent"==p)||a&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||f(p,s))||u.push(p);return u}function J(t,e){return function(r){return t(e(r))}}const K=J(Object.keys,Object);var N=Object.prototype.hasOwnProperty;function R(t){return m(t)?C(t):function(t){if(!w(t))return K(t);var e=[];for(var r in Object(t))N.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}var X=Object.prototype.hasOwnProperty;function Y(t){if(!r(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=w(t),n=[];for(var o in t)("constructor"!=o||!e&&X.call(t,o))&&n.push(o);return n}function Z(t){return m(t)?C(t,!0):Y(t)}function $(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}const G=J(Object.getPrototypeOf,Object);function H(t){var e=this.__data__=new p(t);this.size=e.size}H.prototype.clear=function(){this.__data__=new p,this.size=0},H.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},H.prototype.get=function(t){return this.__data__.get(t)},H.prototype.has=function(t){return this.__data__.has(t)},H.prototype.set=function(t,e){var r=this.__data__;if(r instanceof p){var n=r.__data__;if(!b||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new l(n)}return r.set(t,e),this.size=r.size,this};var Q="object"==typeof exports&&exports&&!exports.nodeType&&exports,tt=Q&&"object"==typeof module&&module&&!module.nodeType&&module,et=tt&&tt.exports===Q?e.Buffer:void 0,rt=et?et.allocUnsafe:void 0;function nt(t,e){if(e)return t.slice();var r=t.length,n=rt?rt(r):new t.constructor(r);return t.copy(n),n}function ot(){return[]}var at=Object.prototype.propertyIsEnumerable,ct=Object.getOwnPropertySymbols;const ut=ct?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var c=t[r];e(c,r,t)&&(a[o++]=c)}return a}(ct(t),(function(e){return at.call(t,e)})))}:ot;function st(t,e,r){var n=e(t);return i(t)?n:$(n,r(t))}function it(t){return st(t,R,ut)}const ft=t(e,"DataView");const pt=t(e,"Promise");const bt=t(e,"Set");var lt="[object Map]",yt="[object Promise]",jt="[object Set]",vt="[object WeakMap]",ht="[object DataView]",dt=y(ft),_t=y(b),gt=y(pt),mt=y(bt),Ot=y(j),wt=u;(ft&&wt(new ft(new ArrayBuffer(1)))!=ht||b&&wt(new b)!=lt||pt&&wt(pt.resolve())!=yt||bt&&wt(new bt)!=jt||j&&wt(new j)!=vt)&&(wt=function(t){var e=u(t),r="[object Object]"==e?t.constructor:void 0,n=r?y(r):"";if(n)switch(n){case dt:return ht;case _t:return lt;case gt:return yt;case mt:return jt;case Ot:return vt}return e});const At=wt;const xt=e.Uint8Array;function zt(t){var e=new t.constructor(t.byteLength);return new xt(e).set(new xt(t)),e}function Pt(t,e){var r=e?zt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}function St(t){return"function"!=typeof t.constructor||w(t)?{}:h(G(t))}export{H as S,xt as U,Z as a,k as b,_ as c,$ as d,G as e,st as f,ut as g,zt as h,Pt as i,At as j,R as k,d as l,I as m,q as n,nt as o,St as p,it as q,S as r,ot as s,m as t,bt as u,L as v,g as w};