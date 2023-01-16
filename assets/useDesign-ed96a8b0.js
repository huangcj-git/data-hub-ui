import{i as e,r as t,x as n,y as a,z as r,A as o,B as l,C as u,D as i,E as s}from"./useI18n-d79c1d65.js";import{j as c,r as d,k as m,u as v,aI as f}from"./runtime-core.esm-bundler-9826e6ce.js";function p(e){var t;const n=o(e);return null!=(t=null==n?void 0:n.$el)?t:n}const w=e?window:void 0,b=e?window.document:void 0,y=e?window.navigator:void 0;function h(...e){let a,r,o,l;if(t(e[0])||Array.isArray(e[0])?([r,o,l]=e,a=w):[a,r,o,l]=e,!a)return n;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const i=[],s=()=>{i.forEach((e=>e())),i.length=0},d=c((()=>p(a)),(e=>{s(),e&&i.push(...r.flatMap((t=>o.map((n=>((e,t,n)=>(e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)))(e,t,n))))))}),{immediate:!0,flush:"post"}),m=()=>{d(),s()};return u(m),m}function g(e,t,n={}){const{window:a=w,ignore:r=[],capture:o=!0,detectIframe:l=!1}=n;if(!a)return;let u,i=!0;const s=e=>r.some((t=>{if("string"==typeof t)return Array.from(a.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=p(t);return n&&(e.target===n||e.composedPath().includes(n))}})),c=n=>{a.clearTimeout(u);const r=p(e);r&&r!==n.target&&!n.composedPath().includes(r)&&(0===n.detail&&(i=!s(n)),i?t(n):i=!0)},d=[h(a,"click",c,{passive:!0,capture:o}),h(a,"pointerdown",(t=>{const n=p(e);n&&(i=!t.composedPath().includes(n)&&!s(t))}),{passive:!0}),h(a,"pointerup",(e=>{if(0===e.button){const t=e.composedPath();e.composedPath=()=>t,u=a.setTimeout((()=>c(e)),50)}}),{passive:!0}),l&&h(a,"blur",(n=>{var r;const o=p(e);"IFRAME"!==(null==(r=a.document.activeElement)?void 0:r.tagName)||(null==o?void 0:o.contains(a.document.activeElement))||t(n)}))].filter(Boolean);return()=>d.forEach((e=>e()))}function O(e,t=!1){const n=d(),r=()=>n.value=Boolean(e());return r(),a(r,t),n}function E(e={}){const{navigator:t=y,read:n=!1,source:a,copiedDuring:l=1500,legacy:u=!1}=e,i=["copy","cut"],s=O((()=>t&&"clipboard"in t)),c=m((()=>s.value||u)),v=d(""),f=d(!1),p=r((()=>f.value=!1),l);function w(){var e,n,a;s.value?t.clipboard.readText().then((e=>{v.value=e})):v.value=null!=(a=null==(n=null==(e=null==document?void 0:document.getSelection)?void 0:e.call(document))?void 0:n.toString())?a:""}if(c.value&&n)for(const r of i)h(r,w);return{isSupported:c,text:v,copied:f,copy:async function(e=o(a)){c.value&&null!=e&&(s.value?await t.clipboard.writeText(e):function(e){const t=document.createElement("textarea");t.value=null!=e?e:"",t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}(e),v.value=e,f.value=!0,p.start())}}}const x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},I="__vueuse_ssr_handlers__";function S(e,t,{window:n=w,initialValue:a=""}={}){const r=d(a),l=m((()=>{var e;return p(t)||(null==(e=null==n?void 0:n.document)?void 0:e.documentElement)}));return c([l,()=>o(e)],(([e,t])=>{var o;if(e&&n){const l=null==(o=n.getComputedStyle(e).getPropertyValue(t))?void 0:o.trim();r.value=l||a}}),{immediate:!0}),c(r,(t=>{var n;(null==(n=l.value)?void 0:n.style)&&l.value.style.setProperty(o(e),t)})),r}x[I]=x[I]||{},x[I];var F=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;function j(e,t,n={}){const a=n,{window:r=w}=a,o=((e,t)=>{var n={};for(var a in e)k.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&F)for(var a of F(e))t.indexOf(a)<0&&P.call(e,a)&&(n[a]=e[a]);return n})(a,["window"]);let l;const i=O((()=>r&&"ResizeObserver"in r)),s=()=>{l&&(l.disconnect(),l=void 0)},d=c((()=>p(e)),(e=>{s(),i.value&&r&&e&&(l=new ResizeObserver(t),l.observe(e,o))}),{immediate:!0,flush:"post"}),m=()=>{s(),d()};return u(m),{isSupported:i,stop:m}}function A(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:o=!0,immediate:l=!0}=t,u=d(0),i=d(0),s=d(0),m=d(0),v=d(0),f=d(0),w=d(0),b=d(0);function y(){const t=p(e);if(!t)return void(n&&(u.value=0,i.value=0,s.value=0,m.value=0,v.value=0,f.value=0,w.value=0,b.value=0));const a=t.getBoundingClientRect();u.value=a.height,i.value=a.bottom,s.value=a.left,m.value=a.right,v.value=a.top,f.value=a.width,w.value=a.x,b.value=a.y}return j(e,y),c((()=>p(e)),(e=>!e&&y())),o&&h("scroll",y,{capture:!0,passive:!0}),r&&h("resize",y,{passive:!0}),a((()=>{l&&y()})),{height:u,bottom:i,left:s,right:m,top:v,width:f,x:w,y:b,update:y}}const $=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function C(e,t={}){const{document:n=b,autoExit:a=!1}=t,r=e||(null==n?void 0:n.querySelector("html")),o=d(!1);let l=$[0];const i=O((()=>{if(!n)return!1;for(const e of $)if(e[1]in n)return l=e,!0;return!1})),[s,c,m,,v]=l;async function f(){i.value&&((null==n?void 0:n[m])&&await n[c](),o.value=!1)}async function w(){if(!i.value)return;await f();const e=p(r);e&&(await e[s](),o.value=!0)}return n&&h(n,v,(()=>{o.value=!!(null==n?void 0:n[m])}),!1),a&&u(f),{isSupported:i,isFullscreen:o,enter:w,exit:f,toggle:async function(){o.value?await f():await w()}}}var D,z,R=Object.defineProperty,q=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,Q=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function B(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,a=d(new Date),r=()=>a.value=new Date,o="requestAnimationFrame"===n?function(e,t={}){const{immediate:n=!0,window:a=w}=t,r=d(!1);let o=0,l=null;function i(t){r.value&&a&&(e({delta:t-o,timestamp:t}),o=t,l=a.requestAnimationFrame(i))}function s(){!r.value&&a&&(r.value=!0,l=a.requestAnimationFrame(i))}function c(){r.value=!1,null!=l&&a&&(a.cancelAnimationFrame(l),l=null)}return n&&s(),u(c),{isActive:r,pause:c,resume:s}}(r,{immediate:!0}):i(r,n,{immediate:!0});return t?((e,t)=>{for(var n in t||(t={}))N.call(t,n)&&Q(e,n,t[n]);if(q)for(var n of q(t))T.call(t,n)&&Q(e,n,t[n]);return e})({now:a},o):a}function M(){const e=d([]);return e.value.set=t=>{t&&e.value.push(t)},f((()=>{e.value.length=0})),e}(z=D||(D={})).UP="UP",z.RIGHT="RIGHT",z.DOWN="DOWN",z.LEFT="LEFT",z.NONE="NONE";var H=Object.defineProperty,_=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,W=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Z=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:1/0,value:31536e6,name:"year"}],G={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>1===e?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>1===e?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>1===e?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>1===e?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""},V=e=>e.toISOString().slice(0,10);function J(e,t={}){const{controls:n=!1,updateInterval:a=3e4}=t,r=B({interval:a,controls:!0}),{now:l}=r,u=((e,t)=>{var n={};for(var a in e)L.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&_)for(var a of _(e))t.indexOf(a)<0&&U.call(e,a)&&(n[a]=e[a]);return n})(r,["now"]),i=m((()=>function(e,t={},n=Date.now()){var a;const{max:r,messages:o=G,fullDateFormatter:l=V,units:u=Z,showSecond:i=!1,rounding:s="round"}=t,c="number"==typeof s?e=>+e.toFixed(s):Math[s],d=+n-+e,m=Math.abs(d);function v(e,t){return c(Math.abs(e)/t.value)}function f(e,t){const n=v(e,t),a=e>0,r=p(t.name,n,a);return p(a?"past":"future",r,a)}function p(e,t,n){const a=o[e];return"function"==typeof a?a(t,n):a.replace("{0}",t.toString())}if(m<6e4&&!i)return o.justNow;if("number"==typeof r&&m>r)return l(new Date(e));if("string"==typeof r){const t=null==(a=u.find((e=>e.name===r)))?void 0:a.max;if(t&&m>t)return l(new Date(e))}for(const[w,b]of u.entries()){if(v(d,b)<=0&&u[w-1])return f(d,u[w-1]);if(m<b.max)return f(d,b)}return o.invalid}(new Date(o(e)),t,v(l.value))));return n?((e,t)=>{for(var n in t||(t={}))L.call(t,n)&&W(e,n,t[n]);if(_)for(var n of _(t))U.call(t,n)&&W(e,n,t[n]);return e})({timeAgo:i},u):i}var K=Object.defineProperty,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,te=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ne(e={}){const{window:t=w,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:l=!0}=e,u=d(n),i=d(r),s=()=>{t&&(l?(u.value=t.innerWidth,i.value=t.innerHeight):(u.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};return s(),a(s),h("resize",s,{passive:!0}),o&&h("orientationchange",s,{passive:!0}),{width:u,height:i}}((e,t)=>{for(var n in t||(t={}))Y.call(t,n)&&te(e,n,t[n]);if(X)for(var n of X(t))ee.call(t,n)&&te(e,n,t[n])})({linear:l},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ae={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},re=d(0),oe=()=>{const e=s("zIndex",2e3),t=m((()=>e.value+re.value));return{initialZIndex:e,currentZIndex:t,nextZIndex:()=>(re.value++,t.value)}},le={namespace:"v",elNamespace:"el"},ue=()=>{const e=le;return{variables:e,getPrefixCls:t=>`${e.namespace}-${t}`}};export{ae as E,ne as a,ue as b,S as c,h as d,j as e,p as f,J as g,A as h,E as i,M as j,C as k,g as o,oe as u};
