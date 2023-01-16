import{a as e}from"./app-c86413cf.js";import{n as o,m as n,o as t,u as l,w as r,a8 as a,a9 as s,aa as i,_ as u,ab as d,ac as c,p,e as m}from"./useI18n-d79c1d65.js";import{E as f}from"./el-switch-b29bc9be.js";import{u as g}from"./useIcon-7c3ae95a.js";import{E as v,d as b,b as w}from"./useDesign-ed96a8b0.js";import{g as h,q as I,r as y,p as E,at as C,o as _,u as k,aH as T,k as F,aT as S,b8 as R,j as x,s as O,l as B,m as D,w as M,c as L,aE as P,aq as K,n as j,R as N,x as $,ae as z,aD as A,v as G,ac as H,y as V,aX as J,I as Y,z as U,aV as q,ag as W,b5 as X}from"./runtime-core.esm-bundler-9826e6ce.js";import{E as Q}from"./el-button-1bdd997e.js";import{c as Z,u as ee,a as oe,E as ne,O as te,w as le,F as re}from"./el-popper-64a555d3.js";import{E as ae}from"./el-scrollbar-950f64cb.js";import{i as se,E as ie,b as ue,c as de}from"./index-a9263744.js";import{u as ce}from"./index-b97f3052.js";import{b as pe}from"./style-af36378f.js";import{u as me}from"./index-7057029c.js";import{c as fe}from"./refs-2b3ead35.js";var ge=o(h({inheritAttrs:!1}),[["render",function(e,o,n,t,l,r){return I(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var ve=o(h({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,o,n,t,l,r){return I(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const be="data-el-collection-item",we=e=>{const o=`El${e}Collection`,n=`${o}Item`,t=Symbol(o),l=Symbol(n),r={...ge,name:o,setup(){const e=y(null),o=new Map;E(t,{itemMap:o,getItems:()=>{const n=k(e);if(!n)return[];const t=Array.from(n.querySelectorAll(`[${be}]`));return[...o.values()].sort(((e,o)=>t.indexOf(e.ref)-t.indexOf(o.ref)))},collectionRef:e})}},a={...ve,name:n,setup(e,{attrs:o}){const n=y(null),r=C(t,void 0);E(l,{collectionItemRef:n}),_((()=>{const e=k(n);e&&r.itemMap.set(e,{ref:e,...o})})),T((()=>{const e=k(n);r.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:l,ElCollection:r,ElCollectionItem:a}},he=n({style:{type:t([String,Array,Object])},currentTabId:{type:t(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:t(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Ie,ElCollectionItem:ye,COLLECTION_INJECTION_KEY:Ee,COLLECTION_ITEM_INJECTION_KEY:Ce}=we("RovingFocusGroup"),_e=Symbol("elRovingFocusGroup"),ke=Symbol("elRovingFocusGroupItem"),Te={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Fe=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case v.right:return v.left;case v.left:return v.right;default:return e}})(e.key,n);if(!("vertical"===o&&[v.left,v.right].includes(t)||"horizontal"===o&&[v.up,v.down].includes(t)))return Te[t]},Se=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},Re="currentTabIdChange",xe="rovingFocusGroup.entryFocus",Oe={bubbles:!1,cancelable:!0},Be=h({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:he,emits:[Re,"entryFocus"],setup(e,{emit:o}){var n;const t=y(null!=(n=e.currentTabId||e.defaultCurrentTabId)?n:null),l=y(!1),r=y(!1),a=y(null),{getItems:s}=C(Ee,void 0),i=F((()=>[{outline:"none"},e.style])),u=Z((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{r.value=!0})),d=Z((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!k(r),{target:n,currentTarget:a}=e;if(n===a&&o&&!k(l)){const e=new Event(xe,Oe);if(null==a||a.dispatchEvent(e),!e.defaultPrevented){const e=s().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===k(t))),...e].filter(Boolean).map((e=>e.ref));Se(o)}}r.value=!1})),c=Z((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{l.value=!1}));E(_e,{currentTabbedId:S(t),loop:R(e,"loop"),tabIndex:F((()=>k(l)?-1:0)),rovingFocusGroupRef:a,rovingFocusGroupRootStyle:i,orientation:R(e,"orientation"),dir:R(e,"dir"),onItemFocus:e=>{o(Re,e)},onItemShiftTab:()=>{l.value=!0},onBlur:c,onFocus:d,onMousedown:u}),x((()=>e.currentTabId),(e=>{t.value=null!=e?e:null})),b(a,xe,((...e)=>{o("entryFocus",...e)}))}});var De=o(h({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Ie,ElRovingFocusGroupImpl:o(Be,[["render",function(e,o,n,t,l,r){return I(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,o,n,t,l,r){const a=O("el-roving-focus-group-impl"),s=O("el-focus-group-collection");return B(),D(s,null,{default:M((()=>[L(a,P(K(e.$attrs)),{default:M((()=>[I(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Me=o(h({components:{ElRovingFocusCollectionItem:ye},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:n,loop:t,onItemFocus:l,onItemShiftTab:r}=C(_e,void 0),{getItems:a}=C(Ee,void 0),s=me(),i=y(null),u=Z((e=>{o("mousedown",e)}),(o=>{e.focusable?l(k(s)):o.preventDefault()})),d=Z((e=>{o("focus",e)}),(()=>{l(k(s))})),c=Z((e=>{o("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:l,currentTarget:s}=e;if(o===v.tab&&n)return void r();if(l!==s)return;const i=Fe(e);if(i){e.preventDefault();let o=a().filter((e=>e.focusable)).map((e=>e.ref));switch(i){case"last":o.reverse();break;case"prev":case"next":{"prev"===i&&o.reverse();const e=o.indexOf(s);o=t.value?(d=e+1,(u=o).map(((e,o)=>u[(o+d)%u.length]))):o.slice(e+1);break}}j((()=>{Se(o)}))}var u,d})),p=F((()=>n.value===k(s)));return E(ke,{rovingFocusGroupItemRef:i,tabIndex:F((()=>k(p)?0:-1)),handleMousedown:u,handleFocus:d,handleKeydown:c}),{id:s,handleKeydown:c,handleFocus:d,handleMousedown:u}}}),[["render",function(e,o,n,t,l,r){const a=O("el-roving-focus-collection-item");return B(),D(a,{id:e.id,focusable:e.focusable,active:e.active},{default:M((()=>[I(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Le=n({trigger:ee.trigger,effect:{...oe.effect,default:"light"},type:{type:t(String)},placement:{type:t(String),default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:t([Number,String]),default:0},maxHeight:{type:t([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:t(Object)},teleported:oe.teleported}),Pe=n({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:se}}),Ke=n({onKeydown:{type:t(Function)}}),je=[v.down,v.pageDown,v.home],Ne=[v.up,v.pageUp,v.end],$e=[...je,...Ne],{ElCollection:ze,ElCollectionItem:Ae,COLLECTION_INJECTION_KEY:Ge,COLLECTION_ITEM_INJECTION_KEY:He}=we("Dropdown"),Ve=Symbol("elDropdown"),{ButtonGroup:Je}=Q;var Ye=o(h({name:"ElDropdown",components:{ElButton:Q,ElButtonGroup:Je,ElScrollbar:ae,ElDropdownCollection:ze,ElTooltip:ne,ElRovingFocusGroup:De,ElOnlyChild:te,ElIcon:ie,ArrowDown:ue},props:Le,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=N(),t=l("dropdown"),{t:r}=ce(),a=y(),s=y(),i=y(null),u=y(null),d=y(null),c=y(null),p=y(!1),m=[v.enter,v.space,v.down],f=F((()=>({maxHeight:pe(e.maxHeight)}))),g=F((()=>[t.m(I.value)])),b=me().value,w=F((()=>e.id||b));function h(){var e;null==(e=i.value)||e.onClose()}const I=de();E(Ve,{contentRef:u,role:F((()=>e.role)),triggerId:w,isUsingKeyboard:p,onItemEnter:function(){},onItemLeave:function(){const e=k(u);null==e||e.focus(),c.value=null}}),E("elDropdown",{instance:n,dropdownSize:I,handleClick:function(){h()},commandHandler:function(...e){o("command",...e)},trigger:R(e,"trigger"),hideOnClick:R(e,"hideOnClick")});return{t:r,ns:t,scrollbar:d,wrapStyle:f,dropdownTriggerKls:g,dropdownSize:I,triggerId:w,triggerKeys:m,currentTabId:c,handleCurrentTabIdChange:function(e){c.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){p.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:h,handleOpen:function(){var e;null==(e=i.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&u.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=u.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:i,contentRef:u,triggeringElementRef:a,referenceElementRef:s}}}),[["render",function(e,o,n,t,l,r){var a;const s=O("el-dropdown-collection"),i=O("el-roving-focus-group"),u=O("el-scrollbar"),d=O("el-only-child"),c=O("el-tooltip"),p=O("el-button"),m=O("arrow-down"),f=O("el-icon"),g=O("el-button-group");return B(),$("div",{class:G([e.ns.b(),e.ns.is("disabled",e.disabled)])},[L(c,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(a=e.referenceElementRef)?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},z({content:M((()=>[L(u,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:M((()=>[L(i,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:M((()=>[L(s,null,{default:M((()=>[I(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:M((()=>[L(d,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:M((()=>[I(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(B(),D(g,{key:0},{default:M((()=>[L(p,A({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:M((()=>[I(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),L(p,A({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:M((()=>[L(f,{class:G(e.ns.e("icon"))},{default:M((()=>[L(m)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):H("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Ue=h({name:"DropdownItemImpl",components:{ElIcon:ie},props:Pe,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const n=l("dropdown"),{role:t}=C(Ve,void 0),{collectionItemRef:r}=C(He,void 0),{collectionItemRef:a}=C(Ce,void 0),{rovingFocusGroupItemRef:s,tabIndex:i,handleFocus:u,handleKeydown:d,handleMousedown:c}=C(ke,void 0),p=fe(r,a,s),m=F((()=>"menu"===t.value?"menuitem":"navigation"===t.value?"link":"button")),f=Z((e=>{const{code:n}=e;if(n===v.enter||n===v.space)return e.preventDefault(),e.stopImmediatePropagation(),o("clickimpl",e),!0}),d);return{ns:n,itemRef:p,dataset:{[be]:""},role:m,tabIndex:i,handleFocus:u,handleKeydown:f,handleMousedown:c}}}),qe=["aria-disabled","tabindex","role"];const We=()=>{const e=C("elDropdown",{}),o=F((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var Xe=o(h({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Ae,ElRovingFocusItem:Me,ElDropdownItemImpl:o(Ue,[["render",function(e,o,n,t,l,r){const a=O("el-icon");return B(),$(Y,null,[e.divided?(B(),$("li",A({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):H("v-if",!0),V("li",A({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=(...o)=>e.handleKeydown&&e.handleKeydown(...o)),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(B(),D(a,{key:0},{default:M((()=>[(B(),D(J(e.icon)))])),_:1})):H("v-if",!0),I(e.$slots,"default")],16,qe)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:Pe,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:n}){const{elDropdown:t}=We(),l=N(),r=y(null),a=F((()=>{var e,o;return null!=(o=null==(e=k(r))?void 0:e.textContent)?o:""})),{onItemEnter:s,onItemLeave:i}=C(Ve,void 0),u=Z((e=>(o("pointermove",e),e.defaultPrevented)),le((o=>{var n;e.disabled?i(o):(s(o),o.defaultPrevented||null==(n=o.currentTarget)||n.focus())}))),d=Z((e=>(o("pointerleave",e),e.defaultPrevented)),le((e=>{i(e)})));return{handleClick:Z((n=>{if(!e.disabled)return o("click",n),"keydown"!==n.type&&n.defaultPrevented}),(o=>{var n,r,a;e.disabled?o.stopImmediatePropagation():((null==(n=null==t?void 0:t.hideOnClick)?void 0:n.value)&&(null==(r=t.handleClick)||r.call(t)),null==(a=t.commandHandler)||a.call(t,e.command,l,o))})),handlePointerMove:u,handlePointerLeave:d,textContent:a,propsAndAttrs:F((()=>({...e,...n})))}}}),[["render",function(e,o,n,t,l,r){var a;const s=O("el-dropdown-item-impl"),i=O("el-roving-focus-item"),u=O("el-dropdown-collection-item");return B(),D(u,{disabled:e.disabled,"text-value":null!=(a=e.textValue)?a:e.textContent},{default:M((()=>[L(i,{focusable:!e.disabled},{default:M((()=>[L(s,A(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:M((()=>[I(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Qe=h({name:"ElDropdownMenu",props:Ke,setup(e){const o=l("dropdown"),{_elDropdownSize:n}=We(),t=n.value,{focusTrapRef:r,onKeydown:a}=C(re,void 0),{contentRef:s,role:i,triggerId:u}=C(Ve,void 0),{collectionRef:d,getItems:c}=C(Ge,void 0),{rovingFocusGroupRef:p,rovingFocusGroupRootStyle:m,tabIndex:f,onBlur:g,onFocus:b,onMousedown:w}=C(_e,void 0),{collectionRef:h}=C(Ee,void 0),I=F((()=>[o.b("menu"),o.bm("menu",null==t?void 0:t.value)])),y=fe(s,d,r,p,h),E=Z((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),v.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==k(s))return;if(!$e.includes(n))return;const l=c().filter((e=>!e.disabled)).map((e=>e.ref));Ne.includes(n)&&l.reverse(),Se(l)}));return{size:t,rovingFocusGroupRootStyle:m,tabIndex:f,dropdownKls:I,role:i,triggerId:u,dropdownListWrapperRef:y,handleKeydown:e=>{E(e),a(e)},onBlur:g,onFocus:b,onMousedown:w}}}),Ze=["role","aria-labelledby"];var eo=o(Qe,[["render",function(e,o,n,t,l,r){return B(),$("ul",{ref:e.dropdownListWrapperRef,class:G(e.dropdownKls),style:U(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=(...o)=>e.handleKeydown&&e.handleKeydown(...o)),onMousedown:o[3]||(o[3]=(...o)=>e.onMousedown&&e.onMousedown(...o))},[I(e.$slots,"default")],46,Ze)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const oo=r(Ye,{DropdownItem:Xe,DropdownMenu:eo}),no=a(Xe),to=a(eo),lo=h({__name:"ThemeSwitch",setup(o){const{getPrefixCls:n}=w(),t=n("theme-switch"),l=g({icon:"emojione-monotone:sun",color:"#fde047"}),r=g({icon:"emojione-monotone:crescent-moon",color:"#fde047"}),a=e(),s=y(a.getIsDark),i="var(--el-color-black)",u=e=>{a.setIsDark(e)};return(e,o)=>(B(),D(k(f),{class:G(k(t)),modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e),"inline-prompt":"","border-color":i,"inactive-color":i,"active-color":i,"active-icon":k(l),"inactive-icon":k(r),onChange:u},null,8,["class","modelValue","active-icon","inactive-icon"]))}}),ro=()=>({changeLocale:async e=>{const o=s.global,n=await i(Object.assign({"../../locales/en.ts":()=>u((()=>import("./en-19fd2183.js")),[]),"../../locales/zh-CN.ts":()=>u((()=>import("./zh-CN-c25ad4d0.js")),[])}),`../../locales/${e}.ts`);o.setLocaleMessage(e,n.default),(e=>{const o=d();"legacy"===s.mode?s.global.locale=e:s.global.locale.value=e,o.setCurrentLocale({lang:e}),c(e)})(e)}}),ao=h({__name:"LocaleDropdown",props:{color:p.string.def("")},setup(e){const{getPrefixCls:o}=w(),n=o("locale-dropdown"),t=m(),l=F((()=>t.getLocaleMap)),r=F((()=>t.getCurrentLocale)),a=e=>{if(e===k(r).lang)return;window.location.reload(),t.setCurrentLocale({lang:e});const{changeLocale:o}=ro();o(e)};return(o,t)=>{const r=O("Icon");return B(),D(k(oo),{class:G(k(n)),trigger:"click",onCommand:a},{dropdown:M((()=>[L(k(to),null,{default:M((()=>[(B(!0),$(Y,null,q(k(l),(e=>(B(),D(k(no),{key:e.lang,command:e.lang},{default:M((()=>[W(X(e.name),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:M((()=>[L(r,{size:18,icon:"ion:language-sharp",class:G(["cursor-pointer",o.$attrs.class]),color:e.color},null,8,["class","color"])])),_:1},8,["class"])}}});export{to as E,lo as _,ao as a,no as b,oo as c};
