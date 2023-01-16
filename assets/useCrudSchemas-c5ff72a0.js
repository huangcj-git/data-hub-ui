import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-b7566a2e.js";import{_ as t}from"./Search.vue_vue_type_script_setup_true_lang-c40a8814.js";import{d as o}from"./useI18n-d79c1d65.js";import{E as a}from"./el-button-1bdd997e.js";import{E as s}from"./el-tag-452f7d8d.js";import{_ as r}from"./Table.vue_vue_type_script_lang-29c2a6ea.js";import{g as i,d as l}from"./index-eed5924a.js";import{u as m}from"./useTable-79c5c10f.js";import{u as p}from"./useCrudSchemas-c23214a4.js";import{a as n}from"./dict-47997b0b.js";import{a as c}from"./index-30fdb42d.js";import{g as d,a as u,h as j,r as b,l as g,m as _,w as f,c as h,u as v,y,ag as w,b5 as x}from"./runtime-core.esm-bundler-9826e6ce.js";import"./el-card-2fd19695.js";import"./el-popper-64a555d3.js";import"./useDesign-ed96a8b0.js";import"./index-7057029c.js";import"./Form-9ef0c599.js";import"./el-col-3b20ee6d.js";import"./typescript-5028724d.js";import"./el-input-76b99827.js";import"./index-a9263744.js";import"./style-af36378f.js";import"./event-5568c9d8.js";import"./index-ba610b86.js";import"./error-c58402b8.js";import"./tsxHelper-897a41b3.js";import"./_initCloneObject-eb4d3a6a.js";import"./_flatRest-d57efe1c.js";import"./el-scrollbar-950f64cb.js";import"./index-b97f3052.js";import"./scroll-d46e7ac5.js";import"./isArrayLikeObject-a945ba94.js";import"./debounce-402e4831.js";import"./validator-45197e79.js";import"./is-c4ce1157.js";import"./el-input-number-87887e0e.js";import"./el-switch-b29bc9be.js";import"./el-divider-416824f4.js";import"./InputPassword-34bfb624.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./style.css_vue_type_style_index_0_src_true_lang-3417a35e.js";import"./el-message-9459597d.js";import"./aria-ecee1d93.js";import"./cloneDeep-ab3c70e9.js";import"./_arrayIncludesWith-032ec3dd.js";import"./browser-0659f211.js";import"./index-faf5036a.js";import"./Icon.vue_vue_type_script_setup_true_lang-fd6ccc6b.js";import"./useForm-5e5b70fc.js";import"./isPlainObject-567313cc.js";import"./index-22dba743.js";import"./el-message-box-fba4cfdf.js";import"./el-overlay-b2f833bb.js";import"./vnode-b96dd110.js";import"./tree-b59d36bb.js";const D={class:"mb-10px"},S=d({__name:"useCrudSchemas",setup(d){const S=n(),{register:P,tableObject:C,methods:R}=m({getListApi:i,delListApi:l,response:{list:"list",total:"total"}}),{getList:k,setSearchParams:z}=R;k();const{t:L}=o(),O=u([{field:"index",label:L("tableDemo.index"),type:"index",form:{show:!1},detail:{show:!1}},{field:"title",label:L("tableDemo.title"),search:{show:!0},form:{colProps:{span:24}},detail:{span:24}},{field:"author",label:L("tableDemo.author")},{field:"display_time",label:L("tableDemo.displayTime"),form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:L("tableDemo.importance"),formatter:(e,t,o)=>j(s,{type:1===o?"success":2===o?"warning":"danger"},(()=>L(1===o?"tableDemo.important":2===o?"tableDemo.good":"tableDemo.commonly"))),search:{show:!0,component:"Select",componentProps:{options:S.getDictObj.importance}},form:{component:"Select",componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}}},{field:"importance2",label:`${L("tableDemo.importance")}2`,search:{show:!0,component:"Select",dictName:"importance"}},{field:"importance3",label:`${L("tableDemo.importance")}3`,search:{show:!0,component:"Select",api:async()=>(await c()).data}},{field:"pageviews",label:L("tableDemo.pageviews"),form:{component:"InputNumber",value:0}},{field:"content",label:L("exampleDemo.content"),table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24}},{field:"action",width:"260px",label:L("tableDemo.action"),form:{show:!1},detail:{show:!1}}]),{allSchemas:I}=p(O),H=b(!1),T=async(e,t)=>{var o;C.currentRow=e;const{delList:a,getSelections:s}=R,r=await s();H.value=!0,await a(t?r.map((e=>e.id)):[null==(o=C.currentRow)?void 0:o.id],t).finally((()=>{H.value=!1}))};return(o,s)=>(g(),_(v(e),null,{default:f((()=>[h(v(t),{schema:v(I).searchSchema,onSearch:v(z),onReset:v(z)},null,8,["schema","onSearch","onReset"]),y("div",D,[h(v(a),{loading:H.value,type:"danger",onClick:s[0]||(s[0]=e=>T(null,!0))},{default:f((()=>[w(x(v(L)("exampleDemo.del")),1)])),_:1},8,["loading"])]),h(v(r),{pageSize:v(C).pageSize,"onUpdate:pageSize":s[1]||(s[1]=e=>v(C).pageSize=e),currentPage:v(C).currentPage,"onUpdate:currentPage":s[2]||(s[2]=e=>v(C).currentPage=e),columns:v(I).tableColumns,data:v(C).tableList,loading:v(C).loading,pagination:{total:v(C).total},onRegister:v(P)},{action:f((({row:e})=>[h(v(a),{type:"danger",onClick:t=>T(e,!1)},{default:f((()=>[w(x(v(L)("exampleDemo.del")),1)])),_:2},1032,["onClick"])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}});export{S as default};