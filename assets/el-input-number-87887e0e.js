import{m as e,q as t,u as a,I as n,ad as l,O as r,n as u,w as s}from"./useI18n-d79c1d65.js";import{E as i}from"./el-input-76b99827.js";import{u as o,c as m,d,b as c,y as p,E as v,h as b,z as f}from"./index-a9263744.js";import{C as N,I as y,U as I}from"./event-5568c9d8.js";import{i as h}from"./el-popper-64a555d3.js";import{u as x}from"./index-b97f3052.js";import{u as g}from"./index-ba610b86.js";import{d as V}from"./error-c58402b8.js";import{C as S,g as w,r as E,a as j,k,j as A,o as F,G as _,l as B,x as K,b as O,u as T,v as C,c as M,w as z,m as P,ac as $,i as G}from"./runtime-core.esm-bundler-9826e6ce.js";const L=100,Y=600,q={beforeMount(e,t){const a=t.value,{interval:n=L,delay:l=Y}=S(a)?{}:a;let r,u;const s=()=>S(a)?a():a.handler(),i=()=>{u&&(clearTimeout(u),u=void 0),r&&(clearInterval(r),r=void 0)};e.addEventListener("mousedown",(e=>{0===e.button&&(i(),s(),document.addEventListener("mouseup",(()=>i()),{once:!0}),u=setTimeout((()=>{r=setInterval((()=>{s()}),n)}),l))}))}},D=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:o,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||t(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),U={[N]:(e,t)=>t!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[y]:e=>t(e)||h(e),[I]:e=>t(e)||h(e)},H=["aria-label","onKeydown"],J=["aria-label","onKeydown"],Q=w({name:"ElInputNumber"});const R=s(u(w({...Q,props:D,emits:U,setup(e,{expose:u,emit:s}){const o=e,{t:S}=x(),w=a("input-number"),L=E(),Y=j({currentValue:o.modelValue,userInput:null}),{formItem:D}=g(),U=k((()=>t(o.modelValue)&&o.modelValue<=o.min)),Q=k((()=>t(o.modelValue)&&o.modelValue>=o.max)),R=k((()=>{const e=ae(o.step);return n(o.precision)?Math.max(ae(o.modelValue),e):(o.precision,o.precision)})),W=k((()=>o.controls&&"right"===o.controlsPosition)),X=m(),Z=d(),ee=k((()=>{if(null!==Y.userInput)return Y.userInput;let e=Y.currentValue;if(h(e))return"";if(t(e)){if(Number.isNaN(e))return"";n(o.precision)||(e=e.toFixed(o.precision))}return e})),te=(e,t)=>{if(n(t)&&(t=R.value),0===t)return Math.round(e);let a=String(e);const l=a.indexOf(".");if(-1===l)return e;if(!a.replace(".","").split("")[l+t])return e;const r=a.length;return"5"===a.charAt(r-1)&&(a=`${a.slice(0,Math.max(0,r-1))}6`),Number.parseFloat(Number(a).toFixed(t))},ae=e=>{if(h(e))return 0;const t=e.toString(),a=t.indexOf(".");let n=0;return-1!==a&&(n=t.length-a-1),n},ne=(e,a=1)=>t(e)?te(e+o.step*a):Y.currentValue,le=()=>{if(o.readonly||Z.value||Q.value)return;const e=Number(ee.value)||0,t=ne(e);se(t),s(y,Y.currentValue)},re=()=>{if(o.readonly||Z.value||U.value)return;const e=Number(ee.value)||0,t=ne(e,-1);se(t),s(y,Y.currentValue)},ue=(e,t)=>{const{max:a,min:l,step:r,precision:u,stepStrictly:i,valueOnClear:m}=o;let d=Number(e);if(h(e)||Number.isNaN(d))return null;if(""===e){if(null===m)return null;d=G(m)?{min:l,max:a}[m]:m}return i&&(d=te(Math.round(d/r)*r,u)),n(u)||(d=te(d,u)),(d>a||d<l)&&(d=d>a?a:l,t&&s(I,d)),d},se=(e,t=!0)=>{var a;const n=Y.currentValue,l=ue(e);n!==l&&(t?(Y.userInput=null,s(I,l),s(N,l,n),o.validateEvent&&(null==(a=null==D?void 0:D.validate)||a.call(D,"change").catch((e=>V()))),Y.currentValue=l):s(I,l))},ie=e=>{Y.userInput=e;const t=""===e?null:Number(e);s(y,t),se(t,!1)},oe=e=>{const a=""!==e?Number(e):"";(t(a)&&!Number.isNaN(a)||""===e)&&se(a),Y.userInput=null},me=e=>{s("focus",e)},de=e=>{var t;s("blur",e),o.validateEvent&&(null==(t=null==D?void 0:D.validate)||t.call(D,"blur").catch((e=>V())))};return A((()=>o.modelValue),(e=>{const a=ue(Y.userInput),n=ue(e,!0);t(a)||a&&a===n||(Y.currentValue=n,Y.userInput=null)}),{immediate:!0}),F((()=>{var e;const{min:a,max:n,modelValue:l}=o,r=null==(e=L.value)?void 0:e.input;if(r.setAttribute("role","spinbutton"),Number.isFinite(n)?r.setAttribute("aria-valuemax",String(n)):r.removeAttribute("aria-valuemax"),Number.isFinite(a)?r.setAttribute("aria-valuemin",String(a)):r.removeAttribute("aria-valuemin"),r.setAttribute("aria-valuenow",String(Y.currentValue)),r.setAttribute("aria-disabled",String(Z.value)),!t(l)&&null!=l){let e=Number(l);Number.isNaN(e)&&(e=null),s(I,e)}})),_((()=>{var e;const t=null==(e=L.value)?void 0:e.input;null==t||t.setAttribute("aria-valuenow",`${Y.currentValue}`)})),u({focus:()=>{var e,t;null==(t=null==(e=L.value)?void 0:e.focus)||t.call(e)},blur:()=>{var e,t;null==(t=null==(e=L.value)?void 0:e.blur)||t.call(e)}}),(e,t)=>(B(),K("div",{class:C([T(w).b(),T(w).m(T(X)),T(w).is("disabled",T(Z)),T(w).is("without-controls",!e.controls),T(w).is("controls-right",T(W))]),onDragstart:t[0]||(t[0]=r((()=>{}),["prevent"]))},[e.controls?O((B(),K("span",{key:0,role:"button","aria-label":T(S)("el.inputNumber.decrease"),class:C([T(w).e("decrease"),T(w).is("disabled",T(U))]),onKeydown:l(re,["enter"])},[M(T(v),null,{default:z((()=>[T(W)?(B(),P(T(c),{key:0})):(B(),P(T(p),{key:1}))])),_:1})],42,H)),[[T(q),re]]):$("v-if",!0),e.controls?O((B(),K("span",{key:1,role:"button","aria-label":T(S)("el.inputNumber.increase"),class:C([T(w).e("increase"),T(w).is("disabled",T(Q))]),onKeydown:l(le,["enter"])},[M(T(v),null,{default:z((()=>[T(W)?(B(),P(T(b),{key:0})):(B(),P(T(f),{key:1}))])),_:1})],42,J)),[[T(q),le]]):$("v-if",!0),M(T(i),{id:e.id,ref_key:"input",ref:L,type:"number",step:e.step,"model-value":T(ee),placeholder:e.placeholder,readonly:e.readonly,disabled:T(Z),size:T(X),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[l(r(le,["prevent"]),["up"]),l(r(re,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:ie,onChange:oe},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{R as E,q as v};