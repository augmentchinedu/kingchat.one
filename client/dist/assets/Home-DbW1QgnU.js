import{f as h,g as m,h as s,j as t,F as v,k as f,o as n,b as l,w as x,t as o,a as c}from"./index-DQPKaWo5.js";const g=t("h2",null,"Active Users",-1),k={class:"flex flex-col"},w={class:"flex flex-row px-2 py-2 gap-2"},y={class:"grid items-center"},C={class:"text-base underline"},b={class:"text-base"},B=t("div",null,[t("span",{class:"text-sm"},"Click To Chat")],-1),L=t("hr",null,null,-1),F={__name:"Home",setup(N){const i=h(),r=m(()=>i.app.online);function _(a){return{path:`/chat/${a}`}}return(a,U)=>{const d=c("v-img"),p=c("router-link");return n(),s("div",null,[g,t("div",k,[(n(!0),s(v,null,f(r.value,(e,u)=>(n(),s("div",{key:u},[l(p,{to:_(e.username,e.chatid)},{default:x(()=>[t("div",w,[t("div",null,[l(d,{src:e.photoURL,class:"w-12 h-12 rounded-full","aspect-ratio":"1"},null,8,["src"])]),t("div",y,[t("div",null,[t("pre",null,o(e),1),t("span",C,o(e.displayName),1)]),t("div",null,[t("span",b,"@"+o(e.username),1)]),B])])]),_:2},1032,["to"]),L]))),128))])])}}};export{F as default};
