import{k as w,j as g,e as i,f as x,d as r,a,w as b,m as k,r as n,o as h}from"./index-BPADXg_z.js";import{p as y}from"./index-CYKRgybp.js";const C={class:"grid content-center h-full w-full"},V=r("h2",{class:"my-2 text-center"},"You'll need a password",-1),P={__name:"CreatePassword",setup(S){const d=w(),t=g(),s=i(""),u=i("");async function p(){u.value=y(s.value).value}async function c(){let o=await t.createPassword(t.app.user.uid,s.value);await t.login({id:t.$state.app.user.email,password:s.value}),o?d.push("/auth/pick-profile-picture"):console.log(o)}return(o,e)=>{const m=n("v-img"),v=n("v-text-field"),f=n("v-btn"),_=n("v-form");return h(),x("div",C,[r("div",null,[a(m,{src:"../assets/img/icon-black.svg",class:"w-20 h-20 mx-auto my-8 rounded-2xl bg-red-500","aspect-ratio":"1"})]),r("div",null,[V,a(_,{onSubmit:e[3]||(e[3]=k(()=>{},["prevent"])),class:"flex flex-col mx-4 gap-4"},{default:b(()=>[a(v,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),label:"Create Password",id:"password",type:"password",onInput:e[1]||(e[1]=l=>p()),messages:u.value},null,8,["modelValue","messages"]),a(f,{loading:o.loading,class:"mt-2",text:"Next",block:"",onClick:e[2]||(e[2]=l=>c())},null,8,["loading"])]),_:1})])])}}};export{P as default};
