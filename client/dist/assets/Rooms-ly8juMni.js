import{u,m as p,c as a,o,h as n,F as h,n as x,g as s,e as c,w as v,t as l}from"./index-5uhG7CKp.js";const f={id:"rooms",class:"flex flex-col px-2"},g=s("div",{class:"mb-2"},[s("span",{class:"text-xl"},"Select a room to join:")],-1),k={class:"flex flex-row px-2 py-2 gap-2"},w={class:"grid items-center"},b={class:"grid items-center"},y={class:"text-base font-semibold"},B={class:"text-sm"},L=s("hr",null,null,-1),F={__name:"Rooms",setup(S){const i=u(),r=p(()=>i.rooms);function _(t){return`/rooms/${t.id}?name=${t.name}&id=${t.id}`}return(t,$)=>{const d=a("v-img"),m=a("router-link");return o(),n("div",f,[g,(o(!0),n(h,null,x(r.value.all,e=>(o(),n("div",{key:e,class:"w-full"},[c(m,{to:_(e)},{default:v(()=>[s("div",k,[s("div",w,[c(d,{src:e.imgURL,class:"w-12 h-12","aspect-ratio":"1"},null,8,["src"])]),s("div",b,[s("div",null,[s("span",y,l(e.name),1)]),s("div",null,[s("span",B,l(e.desc),1)])])])]),_:2},1032,["to"]),L]))),128))])}}};export{F as default};