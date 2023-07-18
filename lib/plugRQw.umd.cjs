(function(f,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue"),require("deepmerge"),require("vue-router"),require("lodash"),require("sweetalert"),require("axios"),require("view-ui-plus")):typeof define=="function"&&define.amd?define(["exports","vue","deepmerge","vue-router","lodash","sweetalert","axios","view-ui-plus"],o):(f=typeof globalThis<"u"?globalThis:f||self,o(f.plugRQw={},f.Vue,f.deepmerge,f.VueRouter,f._,f.swal,f.axios,f.ViewUIPlus))})(this,function(f,o,Fe,J,w,T,z,F){"use strict";const Q={r:{locale:"zh-CN",testMsg:"测试国际化",confirm:"确定",cancel:"取消",clear:"清空",info:{title:"提示",text:"确定执行该操作？"},http:{403:"登录状态失效,请重新登录！",409:"该账号已在其他地方登录,点击确定退出。"},pSelect:"请选择",pInput:"请输入",selectDate:"选择日期",selectTime:"选择时间",search:"搜索",level:{1:"一级",2:"二级",3:"三级"},unknown:"未知",title:"标题",required:"该项为必填",back:"返回",button:"按钮",check:"查询",adSearch:"高级查询",all:"全选",tabSetting:" 列表显示设置",delete:"删除",fView:"全屏预览",download:"点击下载",file:"文件",selectFile:"选择文件",notImg:"文件不是图片，不可预览",wrongFileType:"文件类型不被允许",supportType:"支持类型：",none:"无",fileIsBig:"文件过大",supportSize:"支持最大：",uploadError:"上传出错",uploadFail:"上传失败",closePreview:"关闭预览",fullImg:"全屏图片",preview:"预览",searchFor:"当前搜索：",noMore:"没有更多数据了",optionLabel:"选项",getDataError:"拉取数据出错",add:"添加",remove:"移除",addAll:"全部添加",removeAll:"全部移除",added:"已添加",notAdded:"未添加",success:"成功",failed:"失败",error:"出错",pageNotFound:"页面没找到",notFoundMsg:"您访问的页面不存在，点击下面按钮返回上一个页面。",hideMenu:"隐藏菜单",showMenu:"显示菜单"}},xe=/(%|){([0-9a-zA-Z_]+)}/g;function Pe(){function e(t,l){return Object.prototype.hasOwnProperty.call(t,l)}function n(t,...l){let i;return l.length===1&&typeof l[0]=="object"&&(i=l[0]),(!i||!i.hasOwnProperty)&&(i={}),t===void 0?"":t.replace(xe,(r,s,c,a)=>{let m;return t[a-1]==="{"&&t[a+r.length]==="}"?c:(m=e(i,c)?i[c]:null,m??"")})}return n}const Me=Pe();let x=Q;const Le={zh:Q};let X=null,Z={},g=null,Ie=function(...e){if(Reflect.has(this,"$t"))return this.$t(...e);if(g&&g.global)return g.global.t(...e);if(g&&g.locale){if(!Z[g.locale]||X!=g.locale){Z[g.locale]=!0;let n=g.getLocaleMessage(g.locale)||{},t=Fe(Le[g.locale],n,{clone:!0});x=t,g.setLocaleMessage(g.locale,t),X=g.locale}return g.hlang(...e)}};const N=function(...e){let n=e[0],t=e[1],l=Ie.apply(this,e);if(l!=null)return l;const i=n.split(".");let r=x;for(let s=0,c=i.length;s<c;s++){const a=i[s];if(l=r[a],s===c-1)return Me(l,t);if(!l)return"";r=l}return""},P={use:function(e){x=e||x},t:N,i18n:function(e){g=e}};function B(...e){var t;const n=(t=o.getCurrentInstance())==null?void 0:t.appContext.config.globalProperties;return N.apply(n,e)}const $=o.defineComponent({__name:"HeaderBt",props:{icon:{},withIcon:{type:Boolean,default:!1},iconSize:{default:18},color:{default:"inherit"},borderColor:{default:"#fff"},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:n}){const t=e;function l(){t.disabled||n("click")}return(i,r)=>{const s=o.resolveComponent("Icon");return o.openBlock(),o.createElementBlock("div",{class:o.normalizeClass({headerBtCTM:!0,withIconCTM:i.icon||i.withIcon,disabled:i.disabled}),style:o.normalizeStyle({color:i.color,borderLeftColor:i.borderColor}),onClick:l},[i.icon?(o.openBlock(),o.createBlock(s,{key:0,size:i.iconSize,type:i.icon},null,8,["size","type"])):o.createCommentVNode("",!0),o.renderSlot(i.$slots,"default")],6)}}}),Re={class:"headerTxtAM"},Ve={class:"contentAM"},Y=o.defineComponent({__name:"FullPop",props:{title:{},headerColor:{},headerBg:{},headerFontSize:{default:12},zIndex:{default:1e3}},emits:["on-open","on-close"],setup(e,{expose:n,emit:t}){const l=e;let i=o.ref(!1);const r=o.computed(()=>typeof l.headerFontSize=="number"?l.headerFontSize+"px":l.headerFontSize),s=o.computed(()=>({zIndex:l.zIndex}));function c(){i.value=!0,t("on-open")}function a(m){i.value=!1,t("on-close",m===!0)}return n({open:c,close:a}),(m,u)=>o.withDirectives((o.openBlock(),o.createElementBlock("div",{class:"fullScreenPopBoxAM",style:o.normalizeStyle(s.value)},[o.createElementVNode("div",{class:"headerAM",style:o.normalizeStyle({color:m.headerColor,backgroundColor:m.headerBg,fontSize:r.value})},[o.createElementVNode("span",Re,o.toDisplayString(m.title||o.unref(B)("r.title")),1),o.createVNode($,{icon:"md-return-left",onClick:a},{default:o.withCtx(()=>[o.createTextVNode(o.toDisplayString(o.unref(B)("r.back")),1)]),_:1})],4),o.createElementVNode("div",Ve,[o.renderSlot(m.$slots,"default")])],4)),[[o.vShow,o.unref(i)]])}}),ze={class:"msg"},K=o.defineComponent({__name:"Hello",setup(e){let n=o.ref("Greetings from Ricky.");return(t,l)=>(o.openBlock(),o.createElementBlock("span",ze,o.toDisplayString(o.unref(n)),1))}}),$e={class:"c404K"},De=o.createElementVNode("div",{class:"t404"},"404",-1),ve={class:"ct404"},je={class:"p404"},ee=o.defineComponent({__name:"Page404",setup(e){const t=o.getCurrentInstance().appContext.config.globalProperties.$router;function l(){t.go(-1)}return(i,r)=>{const s=o.resolveComponent("Button");return o.openBlock(),o.createElementBlock("div",$e,[De,o.createElementVNode("div",ve,"UH OH! "+o.toDisplayString(o.unref(B)("r.pageNotFound")),1),o.createElementVNode("div",je,o.toDisplayString(o.unref(B)("r.notFoundMsg")),1),o.createVNode(s,{class:"bt404",onClick:l},{default:o.withCtx(()=>[o.createTextVNode(o.toDisplayString(o.unref(B)("r.back")),1)]),_:1})])}}});function M(e,n,t){const l=(...i)=>N.apply(this,i);return new Promise((i,r)=>{if(typeof e=="object"&&!Array.isArray(e)){let s=l("r.confirm"),c=l("r.cancel"),a=!1,m="swalConfirmBt",u="swalCancelBt";const h=/^HTML.*Element$/;e.type&&(e.icon=e.type)&&delete e.type,e.content&&(e.text=e.content)&&delete e.content,e.className=e.className||"swalBoxX";let p="";e.text&&h.test(d(e.text))?p="content":e.text&&d(e.text)==="String"&&(p="text"),e.buttons&&(typeof e.buttons=="object"&&!Array.isArray(e.buttons)?e.buttons.cancel&&(e.buttons.cancel.text&&(c=e.buttons.cancel.text)&&(a=!0),e.buttons.cancel.className&&(u=e.buttons.cancel.className),e.buttons.confirm.text&&(s=e.buttons.confirm.text),e.buttons.confirm.className&&(m=e.buttons.confirm.className)):Array.isArray(e.buttons)&&(e.buttons[0]&&(c=e.buttons[0],a=!0),e.buttons[1]&&(s=e.buttons[1]))),T({title:e.title,icon:e.icon,className:e.className,[p]:e.text,buttons:{confirm:{text:s,value:!0,visible:!0,className:m},cancel:{text:c,value:null,visible:a,className:u}}}).then(k=>{k&&typeof e.onOk=="function"&&e.onOk(),i(k)}).catch(k=>{r(k)})}else if(typeof e=="string"){let s="";if(n)switch(typeof n){case"string":s="text";break;case"object":s="content";break}T({title:e,[s]:n||"",icon:t||"",className:"swalBoxX",buttons:{confirm:{text:l("r.confirm"),value:!0,visible:!0,className:"swalConfirmBt",closeModal:!0}}}).then(c=>{i(c)}).catch(c=>{r(c)})}else if(typeof e=="boolean")!e&&T.close&&T.close();else throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false")})}function He(e){return e.replace(/_(\w)/g,function(n,t){return t.toUpperCase()})}function qe(e){let n=document.createElement("div");return n.textContent!==void 0?n.textContent=e:n.innerText=e,n.innerHTML}function Ue(e){let n=document.createElement("div");return n.innerHTML=e,n.innerText||n.textContent}function We(e){return new Promise(n=>{let t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{n(t.result)}})}function te(e){return e.split(".").pop().toLocaleLowerCase()}function Ge(e){return d(e)==="String"&&e.indexOf("image")>-1}function Je(e){const n=te(e);let t="ios-document-outline";return["gif","jpg","jpeg","png","bmp","webp"].indexOf(n)>-1?t="ios-image":["mp4","m3u8","rmvb","avi","swf","3gp","mkv","flv"].indexOf(n)>-1?t="ios-film":["mp3","wav","wma","ogg","aac","flac"].indexOf(n)>-1?t="ios-musical-notes":["doc","txt","docx","pages","epub","pdf"].indexOf(n)>-1?t="md-document":["numbers","csv","xls","xlsx"].indexOf(n)>-1?t="ios-stats":["keynote","ppt","pptx"].indexOf(n)>-1&&(t="ios-videocam"),t}function Qe(e,n){let t=document.createElement("a");t.href=n,t.download=e,ne(t)}function ne(e){let n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}function D({group:e,condition:n,pathKey:t,childKey:l="children",path:i=[]}){if(e&&w.isObject(e)){if(w.isFunction(n)){if(w.isPlainObject(e)){let r=e,s=w.cloneDeep(i);if(n(r))return t&&r[t]&&s.push(r[t]),s;if(r[l]&&!w.isEmpty(r[l])){t&&r[t]&&s.push(r[t]);let c=D({group:r[l],condition:n,pathKey:t,childKey:l,path:s});if(!w.isEmpty(c))return c}}else if(Array.isArray(e))for(let r of e){let s=w.cloneDeep(i);if(n(r))return t&&r[t]?s.push(r[t]):s.push(String(e.indexOf(r))),s;if(r[l]&&r[l].length>0){t&&r[t]?s.push(r[t]):s.push(String(e.indexOf(r)));let c=D({group:r[l],condition:n,pathKey:t,childKey:l,path:s});if(!w.isEmpty(c))return c}}}else if(Array.isArray(e))for(let r of e){let s=w.cloneDeep(i);if(r===n)return s.push(String(e.indexOf(r))),s}}return[]}function le(e,n=12){if(d(e)==="String"&&e.length>0){let t=document.createElement("span");t.style.fontSize=n+"px",t.style.fontFamily="inherit",t.innerHTML=e,t.style.opacity="0",t.style.position="fixed",t.style.top="3000px",document.body.append(t);const l=t.clientWidth;return document.body.removeChild(t),l}return 0}function Xe(e){return e===""?null:e}function Ze(e){e=e||window.Event,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function d(e){return Object.prototype.toString.call(e).replace(/\[object |]/g,"")}function re(e){return e.replace(/([A-Z])/g,"_$1").toLowerCase()}function L(e){let n=d(e);if(n==="Object"){for(let t in e)if(e.hasOwnProperty(t)){let l=d(e[t]);l==="String"?e[t]=e[t].trim():(l==="Object"||l==="Array")&&L(e[t])}}else if(n==="Array")for(let t=0,l=e.length;t<l;t++){let i=d(e[t]);i==="String"?e[t]=e[t].trim():(i==="Array"||i==="Object")&&L(e[t])}return e}function I(e,n=[]){if(d(e)==="Array")return e.forEach((t,l)=>{switch(d(t)){case"Array":case"Object":I(t);break;default:e[l]=null}}),e;if(d(e)==="Object"){for(let t in e)if(e.hasOwnProperty(t)){let l=!0;for(let i of n)if(i===t){l=!1;break}if(l)switch(d(e[t])){case"Array":case"Object":I(e[t]);break;default:e[t]=null}}return e}else return e}const ie={headers:{"Content-Type":"multipart/form-data"}};function oe(e){let n=new FormData;for(let t in e)e.hasOwnProperty(t)&&e[t]!==null&&n.append(t,e[t]);return n}function se(e,n,t=!1){if(!e||!n)return!1;let l,i="notFoundC",r=function(s,c){if(Array.isArray(s)){if(d(c)==="Function"&&c(s))return i=s,[];for(let a of s){if(i!=="notFoundC")break;if(d(c)==="Function"&&c(a)||a===c)return i=a,[s.indexOf(a)];if(d(a)==="Array"||d(a)==="Object"){let m=r(a,c);if(m!==void 0)return[s.indexOf(a),...m]}}}else if(d(s)==="Object"){if(d(c)==="Function"&&c(s))return i=s,[];for(let a in s){if(i!=="notFoundC")break;if(s.hasOwnProperty(a)){if(d(c)==="Function"&&c(a)||s[a]===c)return i=s[a],[a];if(d(s[a])==="Object"||d(s[a])==="Array"){let m=r(s[a],c);if(m!==void 0)return[a,...m]}}}}};return l=r(e,n),t?l||!1:i==="notFoundC"?!1:i}function ce(e,n){for(let t=0,l=n.length;t<l;t++)if(e===n[t])return!0;return!1}function ae(e,n=2){let t=new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`),l=e&&String(e)||"";return t.test(l)?Number(l.replace(t,"$1")):e}function v(e,n={},t="get"){let l=document.createElement("form"),i=document.getElementsByTagName("body")[0];i.appendChild(l),l.setAttribute("style","display:none"),l.setAttribute("target",""),l.setAttribute("method",t);let r=e;if(window&&window.hasOwnProperty("g")){let s=Object.keys(window.g).filter(c=>c.indexOf("URL")>-1).map(c=>c.replace("URL",""));for(let c of s){let a=new RegExp("^/"+c+"(?=/.*$)","i");if(a.test(e)&&window.g[c+"URL"]){r=window.g[c+"URL"]+e.replace(a,"");break}}}if(l.setAttribute("action",r),w.isPlainObject(n)){for(let c in n)if(n.hasOwnProperty(c)&&(n[c]||n[c]===0||n[c]===!1||n[c]==="")){let a=document.createElement("input");a.setAttribute("type","hidden"),a.setAttribute("name",c),a.setAttribute("value",n[c]),l.appendChild(a)}l.submit();let s=setTimeout(()=>{i.removeChild(l),clearTimeout(s),s=null},8e3)}else console.error("请求数据格式有误，无法下载文件")}function fe(e,n={},t="get"){if(n.hasOwnProperty("columns")&&(n.columns===""||n.columns===null||n.columns===void 0)){M.call(this,{title:"需要导出的列不能为空",type:"warning"});return}v(e,n,t)}function ue(e,n,t=!1){let l;if(e&&d(n)==="Array"){let i=localStorage.getItem(e);if(i){let r=JSON.parse(decodeURI(i));l=n.filter(s=>s.key&&r.indexOf(s.title)!==-1).map(s=>s.key)}else l=n.map(r=>r.key)}else l=[];return t||(l=String(l)),l}function O(e){return e!=null&&e!==""}function de(e){return/^-?\d+(.\d+)?$/.test(e)}function me(e,n=!1,t=""){return function(l,i){let r;if(Array.isArray(e)){let a=[];for(let m of e)O(i.row[m])&&a.push(i.row[m]);r=a.join(t)}else typeof e=="function"?r=e(i):r=i.row[e];let s=le(r),c=i.column._width;return r&&s>c?l("Tooltip",{style:{width:"100%"},props:{content:r,maxWidth:c*2}},[l("span",{style:{width:"100%",display:"inline-block","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden","vertical-align":"top"}},r)]):l("span",n&&!O(r)?"--":r)}}function pe(e){if(w.isPlainObject(e)){for(let n in e)if(e.hasOwnProperty(n)&&O(e[n]))return!1;return!0}else if(Array.isArray(e)){for(let n of e)if(O(n))return!1;return!0}return!O(e)}function he(e){return d(e)==="String"?e.replace(/[^\x00-\xff]/g,"01").length:d(e)==="Number"?(e+="",e.replace(/[^\x00-\xff]/g,"01").length):0}function j({group:e,condition:n,key:t,val:l,childKey:i="children"}){if(d(e)!=="Array"||d(n)!=="Function"||d(t)!=="String"||d(i)!=="String")return!1;e.forEach(r=>{n(r)&&(d(l)==="Function"?r[t]=l(r[t]):r[t]=l),d(r[i])==="Array"&&r[i].length>0&&j({group:r[i],condition:n,key:t,val:l,childKey:i})})}function ye(e){let n=sessionStorage.getItem("btnPermissions");return n?n.split(",").indexOf(e)>-1:!1}function H(e){return d(e)==="Number"&&String(e)==="NaN"}function ge(e,n=!1,t=!1){if(d(e)!=="Object")return e;let l=Object.assign(e,{}),i="";for(let r in l)if(l.hasOwnProperty(r)){let s=l[r];s===void 0||s===""||d(s)==="String"&&s.trim()===""||s===null||H(s)?t?n?i+=r+"=&":l[r]="":delete l[r]:n&&(i+=r+"="+s+"&")}return n?i.length>0?i.substr(0,i.length-1):"":l}function R(e){let n={};if(Array.isArray(e)){n=[];for(let t of e)Array.isArray(t)||w.isPlainObject(t)?n.push(R(t)):O(t)&&n.push(t)}else if(w.isPlainObject(e))for(let t in e)e.hasOwnProperty(t)&&(Array.isArray(e[t])||w.isPlainObject(e[t])?n[t]=R(e[t]):O(e[t])&&(n[t]=e[t]));return n}function we(e){const n=window.open();if(n){n.document.write(e);let t=setTimeout(()=>{n.print(),window.clearTimeout(t),t=null},10)}}function q(e){let n=[],t=e;for(;e.previousSibling&&(e=e.previousSibling);)e.nodeType===1&&n.push(e);for(;t.nextSibling&&(t=t.nextSibling);)t.nodeType===1&&n.push(t);return n}const Ye=Object.freeze(Object.defineProperty({__proto__:null,clearObj:I,dataFilterOrToUrl:ge,decimalDigitsLimit:ae,downloadFileByFormSubmit:v,fileExport:fe,findCollection:se,formDataHeadConfig:ie,getColumnsKeys:ue,hasPermission:ye,htmlPrint:we,isEmptyValue:pe,isNaN:H,isNumberValue:de,isValidValue:O,myTypeof:d,oneOf:ce,removeEmptyValue:R,setValByOption:j,siblingElems:q,stringLength:he,toFormData:oe,toLine:re,tooltipManual:me,trimObj:L},Symbol.toStringTag,{value:"Module"})),Ke={class:"groupBoxRP"},et=["onClick"],tt=o.defineComponent({__name:"SideMenuGroup",props:{data:{default:()=>[]},pathName:{default:""}},setup(e){const n=e,t=J.useRouter();function l(r){return r.path===n.pathName?"active":""}function i(r,s){r.preventDefault();let c=r.target;if(!s.children&&!c.classList.contains("active")){t.push(s.path);return}let a=c.parentNode,m=q(a);for(let u of m){u.classList.remove("open");const h=u.querySelectorAll(".open");for(let p of h)p.classList.remove("open")}a.classList.toggle("open")}return(r,s)=>{const c=o.resolveComponent("sideMenuGroup",!0);return o.openBlock(),o.createElementBlock("ul",Ke,[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(n.data,(a,m)=>(o.openBlock(),o.createElementBlock("li",{class:o.normalizeClass({dropItemRP:a.children}),key:a.path+m},[o.createElementVNode("div",{class:o.normalizeClass(["menuTxtR",l(a)]),onClick:u=>i(u,a),style:o.normalizeStyle({paddingLeft:a.level*20+"px"})},o.toDisplayString(a.name||"-- no name --"),15,et),a.children?(o.openBlock(),o.createBlock(c,{key:0,data:a.children,"path-name":n.pathName},null,8,["data","path-name"])):o.createCommentVNode("",!0)],2))),128))])}}}),nt={class:"menuListR"},be=o.defineComponent({__name:"SideMenu",props:{data:{default:()=>[]}},emits:["on-change"],setup(e,{emit:n}){const t=e,l=J.useRoute(),i=o.ref(!0),r=o.ref(),s=o.ref(),c=o.computed(()=>i.value?B("r.hideMenu"):B("r.showMenu")),a=o.computed(()=>i.value?"ios-arrow-back":"ios-arrow-forward");o.onBeforeMount(()=>{let h=localStorage.getItem("menuDisplayR")||"";h!==""?i.value=JSON.parse(h):(i.value=!0,localStorage.setItem("menuDisplayR",JSON.stringify(!0)))}),o.watch(()=>l,h=>{r.value=h.path,o.nextTick(u)},{immediate:!0});function m(){i.value=!i.value,localStorage.setItem("menuDisplayR",JSON.stringify(i.value)),n("on-change",i.value)}function u(){let h=s.value.querySelectorAll(".dropItemRP");for(let p of h)p.querySelector(".active")&&!p.classList.contains("open")&&p.classList.add("open")}return(h,p)=>{const k=o.resolveComponent("Icon");return o.openBlock(),o.createElementBlock("div",{ref_key:"menuRef",ref:s,class:"menuBoxRP"},[o.withDirectives(o.createElementVNode("div",nt,[o.createVNode(tt,{data:t.data,pathName:r.value},null,8,["data","pathName"])],512),[[o.vShow,i.value]]),o.createVNode(k,{type:a.value,size:25,class:o.normalizeClass([{showIco:!i.value},"menuShowHideIco"]),title:c.value,onClick:m,color:i.value?"#fff":"#333"},null,8,["type","class","title","color"])],512)}}}),ke=Object.freeze(Object.defineProperty({__proto__:null,FullPop:Y,HeaderBt:$,Hello:K,Page404:ee,SideMenu:be},Symbol.toStringTag,{value:"Module"}));let _=0,A=document.createElement("div");A.setAttribute("class","spinModal"),A.innerHTML='<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>',window.onload=function(){document.getElementsByTagName("body")[0].append(A)};function Se(e){e?A.classList.add("show"):A.classList.remove("show")}function Oe(e){let n=_;e?_++:_>0&&_--,n!==_&&(_===0?Se(!1):n===0&&Se(!0))}const lt=window.location.origin;let E=null;const Ce=(...e)=>N.apply(E,e);let b=z.create({baseURL:lt,withCredentials:!0});function rt(){console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}")}b.interceptors.request.use(e=>e,e=>Promise.reject(e));function Be(){if(b.store)if(typeof b.store=="function"){const e=b.store();e.logout&&e.logout()}else b.store.dispatch("logout");else rt()}b.interceptors.response.use(e=>(E&&e&&e.data&&(e.data.code===403||e.data.code===409)&&E.messageBox({content:Ce("r.http."+e.data.code),onOk:Be}),e),e=>(E&&e&&e.response&&(e.response.status===403||e.response.status===409)&&E.messageBox({content:Ce("r.http."+e.response.status),onOk:Be}),console.warn("请求出错：",e),Promise.reject(e)));function C(e,n,t,l){l&&l.spin&&Oe(!1);let i=!0,r=e&&e.data;if(r){t=t||[];for(let s of t)r=r[s],i=i&&r;return i?r:(n&&console.warn(n),!1)}return n&&console.warn(n),!1}function it(e,n,t,l,i,r,s){return new Promise((c,a)=>{switch(e){case"get":b.get(n,{params:t}).then(u=>{let h=C(u,l,i,r);h?c(h):a(u)}).catch(u=>{C({},l,i,r),a(u)});break;case"delete":let m=s?"params":"data";b.delete(n,{[m]:t}).then(u=>{let h=C(u,l,i,r);h?c(h):a(u)}).catch(u=>{C({},l,i,r),a(u)});break;case"post":b.post(n,t,r).then(u=>{let h=C(u,l,i,r);h?c(h):a(u)}).catch(u=>{C({},l,i,r),a(u)});break;case"put":b.put(n,t,r).then(u=>{let h=C(u,l,i,r);h?c(h):a(u)}).catch(u=>{C({},l,i,r),a(u)});break}})}function V(e,n,t={},l,i,r,s){return new Promise((c,a)=>{if(n){r&&r.spin&&Oe(!0);let m=n;if(window&&window.hasOwnProperty("g")){const p=window.g;let k=Object.keys(p).filter(S=>S.indexOf("URL")>-1).map(S=>S.replace("URL",""));for(let S of k){let y=new RegExp("^/"+S+"(?=/.*$)","i");if(y.test(n)&&p[S+"URL"]){m=p[S+"URL"]+n.replace(y,"");break}}}let u;if(r&&r.headers&&r.headers["Content-Type"]==="multipart/form-data")u=t;else if(t&&!w.isEmpty(t))if(Array.isArray(t)){u=[];for(let p of t)(p||p===0||p===!1||p===""&&r&&!r.noEmptyStr)&&u.push(p)}else{u={};for(let p in t)t.hasOwnProperty(p)&&(t[p]||t[p]===0||t[p]===!1||t[p]===""&&r&&!r.noEmptyStr)&&(u[p]=t[p])}let h=e.toLowerCase();it(h,m,u,l,i,r,s).then(p=>{c(p)}).catch(p=>{a(p)})}else console.error("没有请求地址:url"),a("没有请求地址:url")})}const U={init(e,n){b.store=e,E=n.config.globalProperties},post(e,n,t,l,i){return new Promise((r,s)=>{V("post",e,n,t,l,i).then(c=>{r(c)}).catch(c=>{s(c)})})},put(e,n,t,l,i){return new Promise((r,s)=>{V("put",e,n,t,l,i).then(c=>{r(c)}).catch(c=>{s(c)})})},get(e,n,t,l,i){return new Promise((r,s)=>{V("get",e,n,t,l,i).then(c=>{r(c)}).catch(c=>{s(c)})})},delete(e,n,t,l,i,r=!0){return new Promise((s,c)=>{V("delete",e,n,t,l,i,r).then(a=>{s(a)}).catch(a=>{c(a)})})},all:z.all,spread:z.spread,config:b};function Ne({height:e,width:n=416,title:t,content:l,onOk:i,onCancel:r,okText:s,cancelText:c,noWarnIcon:a,footerAlign:m,cancelBt:u}){const h=(...y)=>N.apply(this,y);let k=(e&&Number(e)-90>100?Number(e)-90+"px":0)||"100px";l=l||h("r.info.text");let S=d(l)==="String";F.Modal.warning({width:n,footerHide:!0,render:y=>y("div",{class:"customMessageBox",style:{height:k}},[y("div",{class:"containerN"},[y("div",{class:"titleN"},[y("span",t||h("r.info.title")),y("Button",{class:"fr closeN ivu-btn ivu-btn-text",type:"text",onclick(){F.Modal.remove()}},[y("i",{class:"ivu-icon ivu-icon-ios-close",style:{fontSize:"30px"}})])]),y("div",{class:"contentN",style:{textAlign:S?"center":"left"}},[y("i",{class:S&&!a?"ivu-icon ivu-icon-ios-alert-outline":"hide",style:{fontSize:"60px",color:"#f8bb86"}}),y("div",{class:"msgBoxConO"},l)]),y("div",{class:"footerN",style:{textAlign:m||"center"}},[y("Button",{class:"okBtN ivu-btn ivu-btn-default",onclick(){F.Modal.remove(),i&&d(i)==="Function"&&i()}},[y("i",{class:"ivu-load-loop ivu-icon ivu-icon-ios-loading"}),y("span",s||h("r.confirm"))]),y("Button",{class:["cancelBtN ivu-btn ivu-btn-default",!u&&"hide"],onclick(){F.Modal.remove(),d(r)==="Function"&&r&&r()}},c||h("r.cancel"))])])])})}function _e(e,n,t,l){const i=(...r)=>N.apply(this,r);M.call(this,{title:e||i("r.info.title"),text:n||i("r.info.text"),icon:t||"warning",onOk:l,buttons:[i("r.cancel")]})}let W=[],G=[];const ot=function(e){e&&e.beforeEach?e.beforeEach(()=>{W.map(n=>{window.clearTimeout(n)}),G.map(n=>{window.clearInterval(n)}),W.length=0,G.length=0}):console.warn("安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})")},Ee=function(e,n){let t=window.setTimeout(e,n);return W.push(t),t},Ae=function(e,n){let t=window.setInterval(e,n);return G.push(t),t},Te={$fetch:U,$swal:M,$swalConfirm:_e,messageBox:Ne,setInterval:Ae,setTimeout:Ee,...Ye},st=function(e,n={}){U.init(n.useStore||n.store,e),n.locale&&P.use(n.locale),n.i18n&&P.i18n(n.i18n),n.router&&ot(n.router),Object.keys(ke).forEach(t=>{e.component(t,ke[t])}),Object.keys(Te).forEach(t=>{e.config.globalProperties[t]=Te[t]})},ct=P.use,at=P.i18n,ft={locale:ct,i18n:at,install:st};f.FullPop=Y,f.HeaderBt=$,f.Hello=K,f.Page404=ee,f.SideMenu=be,f.clearObj=I,f.dataFilterOrToUrl=ge,f.decimalDigitsLimit=ae,f.default=ft,f.downloadFileByFormSubmit=v,f.downloadFileReaderFile=Qe,f.emptyInput=Xe,f.fakeALinkClick=ne,f.fetch=U,f.fileExport=fe,f.findCollection=se,f.findPath=D,f.formDataHeadConfig=ie,f.getColumnsKeys=ue,f.getFileSrc=We,f.getFileTypeByName=te,f.getFileTypeIconByName=Je,f.getStringWidth=le,f.hasPermission=ye,f.htmlDecode=Ue,f.htmlEncode=qe,f.htmlPrint=we,f.isEmptyValue=pe,f.isImgByFile=Ge,f.isNaN=H,f.isNumberValue=de,f.isValidValue=O,f.messageBox=Ne,f.myTypeof=d,f.oneOf=ce,f.removeEmptyValue=R,f.setInterval=Ae,f.setTimeout=Ee,f.setValByOption=j,f.siblingElems=q,f.stopBubbling=Ze,f.stringLength=he,f.swal=M,f.swalConfirm=_e,f.toFormData=oe,f.toHump=He,f.toLine=re,f.tooltipManual=me,f.trimObj=L,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=plugRQw.umd.cjs.map
