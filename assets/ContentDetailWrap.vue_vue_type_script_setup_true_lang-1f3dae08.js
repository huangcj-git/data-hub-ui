import{p as e,d as t}from"./useI18n-d79c1d65.js";import{E as s}from"./el-card-2fd19695.js";import{E as a}from"./el-button-1bdd997e.js";import{b as r}from"./useDesign-ed96a8b0.js";import{_ as l}from"./Sticky.vue_vue_type_script_setup_true_lang-d8b7ea0b.js";import{g as o,r as i,o as n,s as p,l as c,x as f,c as d,w as m,u,y as _,v as x,ag as g,b5 as v,q as b}from"./runtime-core.esm-bundler-9826e6ce.js";const h={class:"text-16px font-700"},$={style:{padding:"var(--app-content-padding)"}},j=o({__name:"ContentDetailWrap",props:{title:e.string.def(""),message:e.string.def("")},emits:["back"],setup(e,{emit:o}){const{t:j}=t(),{getPrefixCls:k}=r(),y=k("content-detail-wrap"),w=i(85),C=i();return n((()=>{w.value=C.value.getBoundingClientRect().top})),(t,r)=>{const i=p("Icon");return c(),f("div",{class:x([`${u(y)}-container`,"relative bg-[#fff]"]),ref_key:"contentDetailWrap",ref:C},[d(u(l),{offset:w.value},{default:m((()=>[_("div",{class:x([`${u(y)}-header`,"flex border-bottom-1 h-50px items-center text-center bg-white pr-10px"])},[_("div",{class:x([`${u(y)}-header__back`,"flex pl-10px pr-10px "])},[d(u(a),{onClick:r[0]||(r[0]=e=>o("back"))},{default:m((()=>[d(i,{icon:"ep:arrow-left",class:"mr-5px"}),g(" "+v(u(j)("common.back")),1)])),_:1})],2),_("div",{class:x([`${u(y)}-header__title`,"flex flex-1  justify-center"])},[b(t.$slots,"title",{},(()=>[_("label",h,v(e.title),1)]))],2),_("div",{class:x([`${u(y)}-header__right`,"flex  pl-10px pr-10px"])},[b(t.$slots,"right")],2)],2)])),_:3},8,["offset"]),_("div",$,[d(u(s),{class:x([`${u(y)}-body`,"mb-20px"]),shadow:"never"},{default:m((()=>[_("div",null,[b(t.$slots,"default")])])),_:3},8,["class"])])],2)}}});export{j as _};