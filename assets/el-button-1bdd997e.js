import{c as t,d as e,u as r,i as o,l as a,E as n}from"./index-a9263744.js";import{j as i,u as s,k as c,at as l,r as u,bd as h,a8 as f,g as d,l as g,x as p,I as b,q as m,m as v,w as y,aX as k,v as x,ac as w,z as M,p as S,a as A,b8 as H}from"./runtime-core.esm-bundler-9826e6ce.js";import{E as B,m as R,u as F,n as N,w as _,a8 as $}from"./useI18n-d79c1d65.js";import{u as I}from"./index-ba610b86.js";const V=Symbol("buttonGroupContextKey"),E=({from:t,replacement:e,scope:r,version:o,ref:a,type:n="API"},c)=>{i((()=>s(c)),(t=>{}),{immediate:!0})},j=R({size:r,disabled:Boolean,type:{type:String,values:["default","primary","success","warning","info","danger","text",""],default:""},icon:{type:o},nativeType:{type:String,values:["button","submit","reset"],default:"button"},loading:Boolean,loadingIcon:{type:o,default:()=>a},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),q={click:t=>t instanceof MouseEvent};function z(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function T(t){return Math.min(1,Math.max(0,t))}function W(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function C(t){return t<=1?"".concat(100*Number(t),"%"):t}function O(t){return 1===t.length?"0"+t:String(t)}function P(t,e,r){t=z(t,255),e=z(e,255),r=z(r,255);var o=Math.max(t,e,r),a=Math.min(t,e,r),n=0,i=0,s=(o+a)/2;if(o===a)i=0,n=0;else{var c=o-a;switch(i=s>.5?c/(2-o-a):c/(o+a),o){case t:n=(e-r)/c+(e<r?6:0);break;case e:n=(r-t)/c+2;break;case r:n=(t-e)/c+4}n/=6}return{h:n,s:i,l:s}}function U(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*r*(e-t):r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function D(t,e,r){t=z(t,255),e=z(e,255),r=z(r,255);var o=Math.max(t,e,r),a=Math.min(t,e,r),n=0,i=o,s=o-a,c=0===o?0:s/o;if(o===a)n=0;else{switch(o){case t:n=(e-r)/s+(e<r?6:0);break;case e:n=(r-t)/s+2;break;case r:n=(t-e)/s+4}n/=6}return{h:n,s:c,v:i}}function G(t,e,r,o){var a=[O(Math.round(t).toString(16)),O(Math.round(e).toString(16)),O(Math.round(r).toString(16))];return o&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function L(t){return K(t)/255}function K(t){return parseInt(t,16)}var X={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function J(t){var e,r,o,a={r:0,g:0,b:0},n=1,i=null,s=null,c=null,l=!1,u=!1;return"string"==typeof t&&(t=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;var e=!1;if(X[t])t=X[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var r=tt.rgb.exec(t);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=tt.rgba.exec(t),r)return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=tt.hsl.exec(t),r)return{h:r[1],s:r[2],l:r[3]};if(r=tt.hsla.exec(t),r)return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=tt.hsv.exec(t),r)return{h:r[1],s:r[2],v:r[3]};if(r=tt.hsva.exec(t),r)return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=tt.hex8.exec(t),r)return{r:K(r[1]),g:K(r[2]),b:K(r[3]),a:L(r[4]),format:e?"name":"hex8"};if(r=tt.hex6.exec(t),r)return{r:K(r[1]),g:K(r[2]),b:K(r[3]),format:e?"name":"hex"};if(r=tt.hex4.exec(t),r)return{r:K(r[1]+r[1]),g:K(r[2]+r[2]),b:K(r[3]+r[3]),a:L(r[4]+r[4]),format:e?"name":"hex8"};if(r=tt.hex3.exec(t),r)return{r:K(r[1]+r[1]),g:K(r[2]+r[2]),b:K(r[3]+r[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(et(t.r)&&et(t.g)&&et(t.b)?(e=t.r,r=t.g,o=t.b,a={r:255*z(e,255),g:255*z(r,255),b:255*z(o,255)},l=!0,u="%"===String(t.r).substr(-1)?"prgb":"rgb"):et(t.h)&&et(t.s)&&et(t.v)?(i=C(t.s),s=C(t.v),a=function(t,e,r){t=6*z(t,360),e=z(e,100),r=z(r,100);var o=Math.floor(t),a=t-o,n=r*(1-e),i=r*(1-a*e),s=r*(1-(1-a)*e),c=o%6;return{r:255*[r,i,n,n,s,r][c],g:255*[s,r,r,i,n,n][c],b:255*[n,n,s,r,r,i][c]}}(t.h,i,s),l=!0,u="hsv"):et(t.h)&&et(t.s)&&et(t.l)&&(i=C(t.s),c=C(t.l),a=function(t,e,r){var o,a,n;if(t=z(t,360),e=z(e,100),r=z(r,100),0===e)a=r,n=r,o=r;else{var i=r<.5?r*(1+e):r+e-r*e,s=2*r-i;o=U(s,i,t+1/3),a=U(s,i,t),n=U(s,i,t-1/3)}return{r:255*o,g:255*a,b:255*n}}(t.h,i,c),l=!0,u="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=W(n),{ok:l,format:t.format||u,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:n}}var Q="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),Y="[\\s|\\(]+(".concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")\\s*\\)?"),Z="[\\s|\\(]+(".concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")\\s*\\)?"),tt={CSS_UNIT:new RegExp(Q),rgb:new RegExp("rgb"+Y),rgba:new RegExp("rgba"+Z),hsl:new RegExp("hsl"+Y),hsla:new RegExp("hsla"+Z),hsv:new RegExp("hsv"+Y),hsva:new RegExp("hsva"+Z),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function et(t){return Boolean(tt.CSS_UNIT.exec(String(t)))}var rt=function(){function t(e,r){var o;if(void 0===e&&(e=""),void 0===r&&(r={}),e instanceof t)return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var a=J(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=r.format)&&void 0!==o?o:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,r=t.g/255,o=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=W(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){return 0===this.toHsl().s},t.prototype.toHsv=function(){var t=D(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=D(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(e,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=P(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=P(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(e,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),G(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,r,o,a){var n,i=[O(Math.round(t).toString(16)),O(Math.round(e).toString(16)),O(Math.round(r).toString(16)),O((n=o,Math.round(255*parseFloat(n)).toString(16)))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(r,")"):"rgba(".concat(t,", ").concat(e,", ").concat(r,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*z(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*z(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+G(this.r,this.g,this.b,!1),e=0,r=Object.entries(X);e<r.length;e++){var o=r[e],a=o[0];if(t===o[1])return a}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var r=!1,o=this.a<1&&this.a>=0;return e||!o||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l+=e/100,r.l=T(r.l),new t(r)},t.prototype.brighten=function(e){void 0===e&&(e=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),new t(r)},t.prototype.darken=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l-=e/100,r.l=T(r.l),new t(r)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s-=e/100,r.s=T(r.s),new t(r)},t.prototype.saturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s+=e/100,r.s=T(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var r=this.toHsl(),o=(r.h+e)%360;return r.h=o<0?360+o:o,new t(r)},t.prototype.mix=function(e,r){void 0===r&&(r=50);var o=this.toRgb(),a=new t(e).toRgb(),n=r/100;return new t({r:(a.r-o.r)*n+o.r,g:(a.g-o.g)*n+o.g,b:(a.b-o.b)*n+o.b,a:(a.a-o.a)*n+o.a})},t.prototype.analogous=function(e,r){void 0===e&&(e=6),void 0===r&&(r=30);var o=this.toHsl(),a=360/r,n=[this];for(o.h=(o.h-(a*e>>1)+720)%360;--e;)o.h=(o.h+a)%360,n.push(new t(o));return n},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var r=this.toHsv(),o=r.h,a=r.s,n=r.v,i=[],s=1/e;e--;)i.push(new t({h:o,s:a,v:n})),n=(n+s)%1;return i},t.prototype.splitcomplement=function(){var e=this.toHsl(),r=e.h;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var r=this.toRgb(),o=new t(e).toRgb();return new t({r:o.r+(r.r-o.r)*r.a,g:o.g+(r.g-o.g)*r.a,b:o.b+(r.b-o.b)*r.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var r=this.toHsl(),o=r.h,a=[this],n=360/e,i=1;i<e;i++)a.push(new t({h:(o+i*n)%360,s:r.s,l:r.l}));return a},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function ot(t,e=20){return t.mix("#141414",e).toString()}const at=["aria-disabled","disabled","autofocus","type"],nt=d({name:"ElButton"});var it=N(d({...nt,props:j,emits:q,setup(r,{expose:o,emit:a}){const i=r,d=function(t){const r=e(),o=F("button");return c((()=>{let e={};const a=t.color;if(a){const n=new rt(a),i=t.dark?n.tint(20).toString():ot(n,20);if(t.plain)e=o.cssVarBlock({"bg-color":t.dark?ot(n,90):n.tint(90).toString(),"text-color":a,"border-color":t.dark?ot(n,50):n.tint(50).toString(),"hover-text-color":`var(${o.cssVarName("color-white")})`,"hover-bg-color":a,"hover-border-color":a,"active-bg-color":i,"active-text-color":`var(${o.cssVarName("color-white")})`,"active-border-color":i}),r.value&&(e[o.cssVarBlockName("disabled-bg-color")]=t.dark?ot(n,90):n.tint(90).toString(),e[o.cssVarBlockName("disabled-text-color")]=t.dark?ot(n,50):n.tint(50).toString(),e[o.cssVarBlockName("disabled-border-color")]=t.dark?ot(n,80):n.tint(80).toString());else{const s=t.dark?ot(n,30):n.tint(30).toString(),c=n.isDark()?`var(${o.cssVarName("color-white")})`:`var(${o.cssVarName("color-black")})`;if(e=o.cssVarBlock({"bg-color":a,"text-color":c,"border-color":a,"hover-bg-color":s,"hover-text-color":c,"hover-border-color":s,"active-bg-color":i,"active-border-color":i}),r.value){const r=t.dark?ot(n,50):n.tint(50).toString();e[o.cssVarBlockName("disabled-bg-color")]=r,e[o.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${o.cssVarName("color-white")})`,e[o.cssVarBlockName("disabled-border-color")]=r}}}return e}))}(i),S=F("button"),{_ref:A,_size:H,_type:R,_disabled:N,shouldAddSpace:_,handleClick:$}=((r,o)=>{E({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},c((()=>"text"===r.type)));const a=l(V,void 0),n=B("button"),{form:i}=I(),s=t(c((()=>null==a?void 0:a.size))),d=e(),g=u(),p=h(),b=c((()=>r.type||(null==a?void 0:a.type)||"")),m=c((()=>{var t,e,o;return null!=(o=null!=(e=r.autoInsertSpace)?e:null==(t=n.value)?void 0:t.autoInsertSpace)&&o}));return{_disabled:d,_size:s,_type:b,_ref:g,shouldAddSpace:c((()=>{var t;const e=null==(t=p.default)?void 0:t.call(p);if(m.value&&1===(null==e?void 0:e.length)){const t=e[0];if((null==t?void 0:t.type)===f){const e=t.children;return/^\p{Unified_Ideograph}{2}$/u.test(e.trim())}}return!1})),handleClick:t=>{"reset"===r.nativeType&&(null==i||i.resetFields()),o("click",t)}}})(i,a);return o({ref:A,size:H,type:R,disabled:N,shouldAddSpace:_}),(t,e)=>(g(),p("button",{ref_key:"_ref",ref:A,class:x([s(S).b(),s(S).m(s(R)),s(S).m(s(H)),s(S).is("disabled",s(N)),s(S).is("loading",t.loading),s(S).is("plain",t.plain),s(S).is("round",t.round),s(S).is("circle",t.circle),s(S).is("text",t.text),s(S).is("link",t.link),s(S).is("has-bg",t.bg)]),"aria-disabled":s(N)||t.loading,disabled:s(N)||t.loading,autofocus:t.autofocus,type:t.nativeType,style:M(s(d)),onClick:e[0]||(e[0]=(...t)=>s($)&&s($)(...t))},[t.loading?(g(),p(b,{key:0},[t.$slots.loading?m(t.$slots,"loading",{key:0}):(g(),v(s(n),{key:1,class:x(s(S).is("loading"))},{default:y((()=>[(g(),v(k(t.loadingIcon)))])),_:1},8,["class"]))],64)):t.icon||t.$slots.icon?(g(),v(s(n),{key:1},{default:y((()=>[t.icon?(g(),v(k(t.icon),{key:0})):m(t.$slots,"icon",{key:1})])),_:3})):w("v-if",!0),t.$slots.default?(g(),p("span",{key:2,class:x({[s(S).em("text","expand")]:s(_)})},[m(t.$slots,"default")],2)):w("v-if",!0)],14,at))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const st={size:j.size,type:j.type},ct=d({name:"ElButtonGroup"});var lt=N(d({...ct,props:st,setup(t){const e=t;S(V,A({size:H(e,"size"),type:H(e,"type")}));const r=F("button");return(t,e)=>(g(),p("div",{class:x(`${s(r).b("group")}`)},[m(t.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const ut=_(it,{ButtonGroup:lt});$(lt);export{ut as E,rt as T,E as u};
