import{e as a}from"./is-c4ce1157.js";import{p as t}from"./useI18n-d79c1d65.js";import{b as l}from"./useDesign-ed96a8b0.js";import{g as r,a as e,b8 as n,o as s,k as i,j as o,u,l as m,x as p,b5 as c,v as V}from"./runtime-core.esm-bundler-9826e6ce.js";const d=r({__name:"CountTo",props:{startVal:t.number.def(0),endVal:t.number.def(2021),duration:t.number.def(3e3),autoplay:t.bool.def(!0),decimals:t.number.validate((a=>a>=0)).def(0),decimal:t.string.def("."),separator:t.string.def(","),prefix:t.string.def(""),suffix:t.string.def(""),useEasing:t.bool.def(!0),easingFn:{type:Function,default:(a,t,l,r)=>l*(1-Math.pow(2,-10*a/r))*1024/1023+t}},emits:["mounted","callback"],setup(t,{expose:r,emit:d}){const f=t,{getPrefixCls:g}=l(),F=g("count-to"),b=t=>{const{decimals:l,decimal:r,separator:e,suffix:n,prefix:s}=f;t=Number(t).toFixed(l);const i=(t+="").split(".");let o=i[0];const u=i.length>1?r+i[1]:"",m=/(\d+)(\d{3})/;if(e&&!a(e))for(;m.test(o);)o=o.replace(m,"$1"+e+"$2");return s+o+u+n},S=e({localStartVal:f.startVal,displayValue:b(f.startVal),printVal:null,paused:!1,localDuration:f.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),A=n(S,"displayValue");s((()=>{f.autoplay&&x(),d("mounted")}));const D=i((()=>f.startVal>f.endVal));o([()=>f.startVal,()=>f.endVal],(()=>{f.autoplay&&x()}));const x=()=>{const{startVal:a,duration:t}=f;S.localStartVal=a,S.startTime=null,S.localDuration=t,S.paused=!1,S.rAF=requestAnimationFrame(j)},y=()=>{cancelAnimationFrame(S.rAF)},T=()=>{S.startTime=null,S.localDuration=+S.remaining,S.localStartVal=+S.printVal,requestAnimationFrame(j)},j=a=>{const{useEasing:t,easingFn:l,endVal:r}=f;S.startTime||(S.startTime=a),S.timestamp=a;const e=a-S.startTime;S.remaining=S.localDuration-e,t?u(D)?S.printVal=S.localStartVal-l(e,0,S.localStartVal-r,S.localDuration):S.printVal=l(e,S.localStartVal,r-S.localStartVal,S.localDuration):u(D)?S.printVal=S.localStartVal-(S.localStartVal-r)*(e/S.localDuration):S.printVal=S.localStartVal+(r-S.localStartVal)*(e/S.localDuration),u(D)?S.printVal=S.printVal<r?r:S.printVal:S.printVal=S.printVal>r?r:S.printVal,S.displayValue=b(S.printVal),e<S.localDuration?S.rAF=requestAnimationFrame(j):d("callback")};return r({pauseResume:()=>{S.paused?(T(),S.paused=!1):(y(),S.paused=!0)},reset:()=>{S.startTime=null,cancelAnimationFrame(S.rAF),S.displayValue=b(f.startVal)},start:x,pause:y}),(a,t)=>(m(),p("span",{class:V(u(F))},c(u(A)),3))}});export{d as _};
