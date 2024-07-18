import{n as C,k as V,j as k,e as c,h as R,l as $,f as B,d as t,a as s,w as U,m as E,r as a,o as N,u}from"./index-BPADXg_z.js";import{r as F,o as G,u as I,e as S,b as q}from"./index-zz_AwoTE.js";const j={class:"grid content-center h-full w-full"},A=t("h2",{class:"my-4 text-3xl text-center"},"Find your account",-1),M=t("p",{class:"my-2 text-center"}," Enter the email or username associated with your account to change your password. ",-1),P=t("div",{class:"text-sm text-right"},"Resend Recovery Code",-1),J={__name:"ForgotPassword",setup(z){const m=C(),v=V(),p=k(),r=c(!1),d=c(!1),n=R({id:m.query.id}),_={id:{required:F,shouldBeChecked:G(S,q)}},l=I(_,n),f=$(()=>l.value.$invalid);async function i(){console.log("Generating Recovery Code..."),r.value=!0,await p.generateRecoveryCode(n.id)?v.push("/auth/recovery-code-confirmation"):(d.value=!0,r.value=!1)}return(g,e)=>{const x=a("v-img"),h=a("v-alert"),y=a("v-text-field"),b=a("v-btn"),w=a("v-form");return N(),B("div",j,[t("div",null,[t("div",null,[s(x,{src:"../assets/img/icon-black.svg",class:"w-20 h-20 mx-auto my-8 rounded-2xl bg-red-600"}),A,M]),t("div",null,[s(w,{onSubmit:E(i,["prevent"]),class:"flex flex-col mx-4 gap-4"},{default:U(()=>[s(h,{text:"Username or Email does not have an account. Sign Up",type:"info",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=o=>d.value=o),rounded:"",closable:""},null,8,["modelValue"]),P,s(y,{modelValue:n.id,"onUpdate:modelValue":e[1]||(e[1]=o=>n.id=o),label:"Username or Email","error-messages":u(l).id.$errors.map(o=>o.$message),onBlur:u(l).id.$touch,onInput:u(l).id.$touch},null,8,["modelValue","error-messages","onBlur","onInput"]),s(b,{loading:r.value,class:"mt-2",text:"Next",block:"",color:"indigo-darken-1",onClick:e[2]||(e[2]=o=>i()),disabled:f.value},null,8,["loading","disabled"])]),_:1})])])])}}};export{J as default};
