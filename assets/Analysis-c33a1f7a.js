import{P as a,g as t,a as s,b as e}from"./PanelGroup-b3e2c309.js";import{d as i,am as o}from"./useI18n-d79c1d65.js";import{a as n,E as m}from"./el-col-3b20ee6d.js";import{E as l}from"./el-card-2fd19695.js";import{E as p}from"./el-skeleton-item-19d78108.js";import{p as r,b as u,l as d,_ as c}from"./Echart.vue_vue_type_script_setup_true_lang-063f2864.js";import{g as _,r as g,a as j,l as f,x as h,c as y,w as x,u as v,I as b}from"./runtime-core.esm-bundler-9826e6ce.js";import"./CountTo.vue_vue_type_script_setup_true_lang-303ca14f.js";import"./is-c4ce1157.js";import"./useDesign-ed96a8b0.js";import"./index-22dba743.js";import"./el-message-9459597d.js";import"./index-a9263744.js";import"./style-af36378f.js";import"./typescript-5028724d.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./app-c86413cf.js";import"./index-faf5036a.js";import"./debounce-402e4831.js";const w=_({__name:"Analysis",setup(_){const{t:w}=i(),E=g(!0),I=j(r),P=async()=>{const a=await t().catch((()=>{}));a&&(o(I,"legend.data",a.data.map((a=>w(a.name)))),I.series[0].data=a.data.map((a=>({name:w(a.name),value:a.value}))))},A=j(u),D=async()=>{const a=await s().catch((()=>{}));a&&(o(A,"xAxis.data",a.data.map((a=>w(a.name)))),o(A,"series",[{name:w("analysis.activeQuantity"),data:a.data.map((a=>a.value)),type:"bar"}]))},O=j(d),k=async()=>{const a=await e().catch((()=>{}));a&&(o(O,"xAxis.data",a.data.map((a=>w(a.name)))),o(O,"series",[{name:w("analysis.estimate"),smooth:!0,type:"line",data:a.data.map((a=>a.estimate)),animationDuration:2800,animationEasing:"cubicInOut"},{name:w("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:a.data.map((a=>a.actual)),animationDuration:2800,animationEasing:"quadraticOut"}]))};return(async()=>{await Promise.all([P(),D(),k()]),E.value=!1})(),(t,s)=>(f(),h(b,null,[y(a),y(v(m),{gutter:20,justify:"space-between"},{default:x((()=>[y(v(n),{xl:10,lg:10,md:24,sm:24,xs:24},{default:x((()=>[y(v(l),{shadow:"hover",class:"mb-20px"},{default:x((()=>[y(v(p),{loading:E.value,animated:""},{default:x((()=>[y(v(c),{options:v(I),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),y(v(n),{xl:14,lg:14,md:24,sm:24,xs:24},{default:x((()=>[y(v(l),{shadow:"hover",class:"mb-20px"},{default:x((()=>[y(v(p),{loading:E.value,animated:""},{default:x((()=>[y(v(c),{options:v(A),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),y(v(n),{span:24},{default:x((()=>[y(v(l),{shadow:"hover",class:"mb-20px"},{default:x((()=>[y(v(p),{loading:E.value,animated:"",rows:4},{default:x((()=>[y(v(c),{options:v(O),height:350},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64))}});export{w as default};
