import{_ as V,f as g,r as c,h,j as n,b as l,w,m as y,a as s,o as b,p as I,q as X,n as E}from"./index-DQPKaWo5.js";const u=t=>(I("data-v-dfc54dc2"),t=t(),X(),t),S={class:"grid content-center h-full w-full"},k=u(()=>n("h2",{class:"my-2 text-center"},"Verify Email",-1)),B=u(()=>n("div",{class:"text-right"},"Resend Verification Email",-1)),C={__name:"EmailVerification",setup(t){const p=E(),d=g(),i=c(!1),o=c("");async function m(){if(o.value.length==6){let r=await d.verifyOTP({uid:d.app.user.uid,code:o.value});console.log(r),r?p.push("/auth/create-password"):i.value=!0}}return(r,e)=>{const f=s("v-img"),v=s("v-alert"),_=s("v-text-field"),x=s("v-form");return b(),h("div",S,[n("div",null,[l(f,{src:"../assets/img/icon-black.svg",class:"w-20 h-20 mx-auto rounded-2xl bg-red-500 my-8","aspect-ratio":"1"})]),n("div",null,[k,l(x,{onSubmit:e[3]||(e[3]=y(()=>{},["prevent"])),class:"flex flex-col mx-4 gap-4"},{default:w(()=>[l(v,{text:"Invalid OTP",type:"warning",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a),rounded:"",closable:""},null,8,["modelValue"]),B,l(_,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value=a),label:"Verification Code",id:"code",placeholder:"XXXXXX",maxlength:"6",counter:"",onInput:e[2]||(e[2]=a=>m())},null,8,["modelValue"])]),_:1})])])}}},O=V(C,[["__scopeId","data-v-dfc54dc2"]]);export{O as default};
