import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-b7566a2e.js";import{d as s}from"./useI18n-d79c1d65.js";import{_ as r}from"./Table.vue_vue_type_script_lang-29c2a6ea.js";import{b as t}from"./index-9818776b.js";import{E as i}from"./el-button-1bdd997e.js";import{g as o,h as a,r as m,l,m as p,w as n,c as j,u,ag as d,b5 as c}from"./runtime-core.esm-bundler-9826e6ce.js";import"./el-card-2fd19695.js";import"./el-popper-64a555d3.js";import"./useDesign-ed96a8b0.js";import"./index-7057029c.js";import"./tsxHelper-897a41b3.js";import"./index-a9263744.js";import"./style-af36378f.js";import"./event-5568c9d8.js";import"./index-ba610b86.js";import"./error-c58402b8.js";import"./_initCloneObject-eb4d3a6a.js";import"./_flatRest-d57efe1c.js";import"./el-input-76b99827.js";import"./typescript-5028724d.js";import"./el-scrollbar-950f64cb.js";import"./el-tag-452f7d8d.js";import"./index-b97f3052.js";import"./scroll-d46e7ac5.js";import"./isArrayLikeObject-a945ba94.js";import"./debounce-402e4831.js";import"./validator-45197e79.js";import"./is-c4ce1157.js";import"./isPlainObject-567313cc.js";import"./index-22dba743.js";import"./el-message-9459597d.js";const _=o({__name:"User",setup(o){const{t:_}=s(),b=[{field:"index",label:_("userDemo.index"),type:"index"},{field:"username",label:_("userDemo.username")},{field:"password",label:_("userDemo.password")},{field:"role",label:_("userDemo.role")},{field:"remark",label:_("userDemo.remark"),formatter:e=>a("span","admin"===e.username?_("userDemo.remarkMessage1"):_("userDemo.remarkMessage2"))},{field:"action",label:_("userDemo.action")}],f=m(!0);let g=m([]);(async e=>{const s=await t({params:e||{pageIndex:1,pageSize:10}});s&&(g.value=s.list)})();return(s,t)=>(l(),p(u(e),{title:u(_)("userDemo.title"),message:u(_)("userDemo.message")},{default:n((()=>[j(u(r),{columns:b,data:u(g),loading:f.value,selection:!1},{action:n((e=>[j(u(i),{type:"primary",onClick:e=>{}},{default:n((()=>[d(c(u(_)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{_ as default};
