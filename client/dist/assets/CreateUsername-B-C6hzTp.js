import{u as k,E as V,r as i,b as c,c as w,j as C,h as d,f as u,w as E,H as y,g as v,m as B,q}from"./index-xwi7eWb3.js";import{u as j,r as A,m as L}from"./index-CMpMqR5k.js";import{_ as M}from"./Logo-FBpZKWpp.js";const N={class:"grid content-center h-full w-full"},S={class:"w-32 m-auto"},F=d("h2",{class:"my-2 text-center"},"Create Unique Username",-1),D={__name:"CreateUsername",setup(H){const g=B("theme"),h=q(),a=k(),n=V({username:a.user.username}),r=i(""),m=i(""),o=i(!1),U={username:{required:A,minLengthValue:L(1)}},l=j(U,n);async function f(){let s=n.username.match(/^@?(\w){1,15}$/)!==null;if(!s){r.value="Username is invalid",o.value=!0;return}console.log(n.username,s);let e=await a.verifyUsername(n.username);console.log(e),e?(m.value="Username is available",o.value=!1):(m.value="Username is taken",o.value=!0)}function p(){if(l.value.$silentErrors.length>0){let s=l.value.$silentErrors[0].$message;console.log(s),s&&(r.value=s)}else r.value=""}function _(){const s=a.user.uid;a.updateUsername(s,n.username),h.push("/home")}return(s,e)=>{const x=c("v-text-field"),$=c("v-btn"),b=c("v-form");return w(),C("div",N,[d("div",S,[u(M,{class:"rounded-sm"})]),F,d("div",null,[u(b,{onSubmit:e[4]||(e[4]=y(t=>_(),["prevent"])),class:"flex flex-col mx-4 gap-4"},{default:E(()=>[u(x,{modelValue:n.username,"onUpdate:modelValue":e[0]||(e[0]=t=>n.username=t),label:"Choose Username",prefix:"@","error-messages":r.value,messages:m.value,maxlength:"15",counter:"",onBlur:e[1]||(e[1]=t=>(p(),f(),v(l).username.$touch)),onInput:e[2]||(e[2]=t=>(p(),f(),v(l).username.$touch))},null,8,["modelValue","error-messages","messages"]),u($,{class:"mt-2",color:v(g).darken4,block:"",text:"Finish",onClick:e[3]||(e[3]=t=>_()),disabled:o.value},null,8,["color","disabled"])]),_:1})])])}}};export{D as default};