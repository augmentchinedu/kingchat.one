import{u as A,r as y,E as B,x as N,b as r,c as L,j as C,h as s,f as i,w as V,H as I,g as t,n as M,m as z,q as D}from"./index-BcOv5rK5.js";import{u as F,r as m,m as J,a as j,e as q}from"./index-2yzqm-aN.js";import{_ as O}from"./Logo-CiY2BDhN.js";const R={class:"grid content-center h-full w-full"},Z={class:"w-32 m-auto"},H=s("h2",{class:"my-2 text-center"},"Sign Up",-1),Y=s("div",null,[s("span",null,"Date Of Birth")],-1),G={class:"flex flex-row gap-1"},K={class:"basis-3/6"},P={class:"basis-2/6"},Q={class:"basis-2/6"},T={class:"text-center my-2"},W=s("span",null,"Already have an account? ",-1),oe={__name:"SignUp",setup(X){const v=z("theme"),d=A(),$=D();let c=y(!1),u=y("");const e=B({name:"",email:"",password:"12345678",month:"",day:"",year:""}),x={name:{required:m,minLengthValue:J(1),maxLengthValue:j(50)},email:{required:m,email:q},month:{required:m},day:{required:m},year:{required:m}},n=F(x,e),w=N(()=>u.value!==""?(console.log(n.value.$invalid),!0):n.value.$invalid);let f=[];for(let o=31;o>0;o--)f.push(o);let _=[];for(let o=2024;o>1980;o--)_.push(o);let k=["January","February","March","April","May","June","July","August","September","October","November","December"];async function g(){console.log("SignUp Form Submitted",e),c.value=!0,e.name=e.name.trim(),e.email=e.email.toLowerCase();let o=await d.signup(e);console.log(d.user.uid,o),o.uid&&(c.value=!1,$.push("/auth/email-verification"))}async function b(o){u.value="",o.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/)?(await d.verifyEmail(o)).data.email&&(u.value="Email already in use.",n.value.$invalid=!0):console.log("Email Not Verifiable")}return(o,a)=>{const h=r("v-text-field"),p=r("v-select"),E=r("v-btn"),S=r("router-link"),U=r("v-form");return L(),C("div",R,[s("div",Z,[i(O,{class:"rounded-sm"})]),s("div",null,[H,i(U,{onSubmit:I(g,["prevent"]),class:"mx-4"},{default:V(()=>[i(h,{modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.name=l),label:"Name",placeholder:"Name cannot be blank",maxlength:"50",counter:"","error-messages":t(n).name.$errors.map(l=>l.$message),onBlur:t(n).name.$touch,onInput:t(n).name.$touch},null,8,["modelValue","error-messages","onBlur","onInput"]),i(h,{modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]=l=>e.email=l),label:"Email",onBlur:a[2]||(a[2]=l=>(b(e.email),t(n).email.$touch)),onInput:a[3]||(a[3]=l=>(b(e.email),t(n).email.$touch)),"error-messages":(t(n).email.$errors.map(l=>l.$message),t(u))},null,8,["modelValue","error-messages"]),Y,s("div",G,[s("div",K,[i(p,{label:"Month",items:t(k),modelValue:e.month,"onUpdate:modelValue":a[4]||(a[4]=l=>e.month=l)},null,8,["items","modelValue"])]),s("div",P,[i(p,{label:"Day",items:t(f),modelValue:e.day,"onUpdate:modelValue":a[5]||(a[5]=l=>e.day=l)},null,8,["items","modelValue"])]),s("div",Q,[i(p,{label:"Year",items:t(_),modelValue:e.year,"onUpdate:modelValue":a[6]||(a[6]=l=>e.year=l)},null,8,["items","modelValue"])])]),i(E,{loading:t(c),class:"mt-2",text:"Next",color:t(v).darken4,block:"",disabled:w.value,onClick:a[7]||(a[7]=l=>g())},null,8,["loading","color","disabled"]),s("div",T,[W,i(S,{to:"/auth/login"},{default:V(()=>[s("span",{class:"font-bold",style:M({color:t(v).darken4})},"Login",4)]),_:1})])]),_:1})])])}}};export{oe as default};
