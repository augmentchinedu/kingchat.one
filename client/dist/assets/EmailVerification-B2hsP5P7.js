import{l as V,u as g,f as c,c as h,d as n,b as a,w,q as y,r as s,o as I,p as X,g as E}from"./index-Do9ei8D9.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u=o=>(X("data-v-a8ee306c"),o=o(),E(),o),b={class:"grid content-center h-full w-full"},B=u(()=>n("h2",{class:"my-2 text-center"},"Verify Email",-1)),C=u(()=>n("div",{class:"text-right"},"Resend Verification Email",-1)),k={__name:"EmailVerification",setup(o){const p=V(),d=g(),i=c(!1),t=c("");async function m(){if(t.value.length==6){let r=await d.verifyOTP({uid:d.app.user.uid,code:t.value});console.log(r),r?p.push("/auth/create-password"):i.value=!0}}return(r,e)=>{const f=s("v-img"),v=s("v-alert"),_=s("v-text-field"),x=s("v-form");return I(),h("div",b,[n("div",null,[a(f,{src:"../assets/img/logo.png",class:"w-20 h-20 mx-auto my-8 rounded-sm"})]),n("div",null,[B,a(x,{onSubmit:e[3]||(e[3]=y(()=>{},["prevent"])),class:"flex flex-col mx-4 gap-4"},{default:w(()=>[a(v,{text:"Invalid OTP",type:"warning",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l),rounded:"",closable:""},null,8,["modelValue"]),C,a(_,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value=l),label:"Verification Code",id:"code",placeholder:"XXXXXX",maxlength:"6",counter:"",onInput:e[2]||(e[2]=l=>m())},null,8,["modelValue"])]),_:1})])])}}},P=S(k,[["__scopeId","data-v-a8ee306c"]]);export{P as default};
