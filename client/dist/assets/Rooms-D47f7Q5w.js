import{u as m,n as p,h as o,F as h,q as x,g as s,o as n,e as a,w as v,t as c,d as l}from"./index-Cq_jgrYn.js";const f={id:"rooms",class:"flex flex-col px-2"},g=s("div",{class:"mb-2"},[s("span",{class:"text-xl"},"Select a room to join:")],-1),k={class:"flex flex-row px-2 py-2 gap-2"},w={class:"grid items-center"},b={class:"grid items-center"},y={class:"text-base font-semibold"},B={class:"text-sm"},L=s("hr",null,null,-1),F={__name:"Rooms",setup(S){const i=m(),r=p(()=>i.rooms);function d(t){return`/rooms/${t.id}?name=${t.name}&id=${t.id}`}return(t,$)=>{const _=l("v-img"),u=l("router-link");return n(),o("div",f,[g,(n(!0),o(h,null,x(r.value.all,e=>(n(),o("div",{key:e,class:"w-full"},[a(u,{to:d(e)},{default:v(()=>[s("div",k,[s("div",w,[a(_,{src:e.imgURL,class:"w-12 h-12","aspect-ratio":"1"},null,8,["src"])]),s("div",b,[s("div",null,[s("span",y,c(e.name),1)]),s("div",null,[s("span",B,c(e.desc),1)])])])]),_:2},1032,["to"]),L]))),128))])}}};export{F as default};
