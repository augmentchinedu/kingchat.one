import{u as w,r as n,b as r,c as g,j as x,h as u,f as o,w as b,H as h,q as k}from"./index-JGSeoenM.js";import{p as C}from"./index-CYKRgybp.js";import{_ as V}from"./Logo-MUgzqIQN.js";const y={class:"grid content-center h-full w-full"},S={class:"w-32 m-auto"},B=u("h2",{class:"my-2 text-center"},"You'll need a password",-1),j={__name:"CreatePassword",setup(N){const i=k(),t=w(),c=n(!1),s=n(""),d=n("");async function p(){d.value=C(s.value).value}async function m(){let a=await t.createPassword(t.user.uid,s.value);await t.login({id:t.user.email,password:s.value}),a?i.push("/auth/pick-profile-picture"):console.log(a)}return(a,e)=>{const f=r("v-text-field"),v=r("v-btn"),_=r("v-form");return g(),x("div",y,[u("div",S,[o(V,{class:"rounded-sm"})]),u("div",null,[B,o(_,{onSubmit:e[3]||(e[3]=h(()=>{},["prevent"])),class:"flex flex-col mx-4 gap-4"},{default:b(()=>[o(f,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),label:"Create Password",id:"password",type:"password",onInput:e[1]||(e[1]=l=>p()),messages:d.value},null,8,["modelValue","messages"]),o(v,{loading:c.value,class:"mt-2",text:"Next",block:"",onClick:e[2]||(e[2]=l=>m())},null,8,["loading"])]),_:1})])])}}};export{j as default};