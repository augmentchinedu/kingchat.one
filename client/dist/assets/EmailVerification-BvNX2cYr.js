import{b as V,u as g,r as c,c as l,o as h,h as w,g as n,e as a,w as b,s as y,p as I,k as X}from"./index-Cdw0NIBP.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u=t=>(I("data-v-125582b5"),t=t(),X(),t),S={class:"grid content-center h-full w-full"},k=u(()=>n("h2",{class:"my-2 text-center"},"Verify Email",-1)),B=u(()=>n("div",{class:"text-right"},"Resend Verification Email",-1)),C={__name:"EmailVerification",setup(t){const m=V(),d=g(),i=c(!1),o=c("");async function p(){if(o.value.length==6){let r=await d.verifyOTP({uid:d.user.uid,code:o.value});console.log(r),r?m.push("/auth/create-password"):i.value=!0}}return(r,e)=>{const f=l("v-img"),v=l("v-alert"),_=l("v-text-field"),x=l("v-form");return h(),w("div",S,[n("div",null,[a(f,{src:"../assets/img/icon-black.svg",class:"w-20 h-20 mx-auto rounded-2xl bg-red-500 my-8","aspect-ratio":"1"})]),n("div",null,[k,a(x,{onSubmit:e[3]||(e[3]=y(()=>{},["prevent"])),class:"flex flex-col mx-4 gap-4"},{default:b(()=>[a(v,{text:"Invalid OTP",type:"warning",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=s=>i.value=s),rounded:"",closable:""},null,8,["modelValue"]),B,a(_,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value=s),label:"Verification Code",id:"code",placeholder:"XXXXXX",maxlength:"6",counter:"",onInput:e[2]||(e[2]=s=>p())},null,8,["modelValue"])]),_:1})])])}}},P=E(C,[["__scopeId","data-v-125582b5"]]);export{P as default};