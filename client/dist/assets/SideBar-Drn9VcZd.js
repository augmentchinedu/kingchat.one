import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as t,f as c,e,u as h,a as f,F as d,n as $,d as v,c as b,w,t as p,h as g,s as k,r as L,I as A,b as _,p as C,l as B}from"./index-7Qu4_A9l.js";const I="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20216%20301.96'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cpath%20class='cls-1'%20d='M212.71,93.83h-59.8l51.68-36.18-16.24-23.2-51.7,36.21,21.59-59.31-26.62-9.7L110.06,60.92,93.71,0,66.36,7.35l16.3,60.92L34.37,27.72,16.16,49.43l52.92,44.4H3.29A3.29,3.29,0,0,0,0,97.12V222.64a41.12,41.12,0,0,0,41.12,41.12H167.28L216,302V97.12A3.29,3.29,0,0,0,212.71,93.83ZM125.73,194a4.27,4.27,0,0,1-4.28,4.28H33.74A4.28,4.28,0,0,1,29.45,194v-6.24a4.29,4.29,0,0,1,4.29-4.29h87.71a4.28,4.28,0,0,1,4.28,4.29ZM185,171.77a4.28,4.28,0,0,1-4.28,4.29h-147a4.29,4.29,0,0,1-4.29-4.29v-6.24a4.29,4.29,0,0,1,4.29-4.29h147a4.28,4.28,0,0,1,4.28,4.29Zm0-22.22a4.28,4.28,0,0,1-4.28,4.29h-147a4.29,4.29,0,0,1-4.29-4.29v-6.24A4.29,4.29,0,0,1,33.74,139h147a4.28,4.28,0,0,1,4.28,4.29Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",S={},N={class:"p-2 bg-blue-500"},V=e("img",{src:I,class:"w-20 h-20 mx-auto rounded-2x"},null,-1),j=[V];function F(o,n){return t(),c("div",N,j)}const H=m(S,[["render",F]]),M={class:"flex flex-col justify-between"},Z={class:"flex flex-row justify-start gap-4"},R=["src"],z={class:"inline-flex items-center"},D={__name:"Navigation",setup(o){const n=h(),a=[{name:"Home",route:"home",icon:"home",public:!0},{name:"Chats",route:"chats",icon:"envelop",public:!0},{name:"Rooms",route:"rooms",icon:"door",public:!0},{name:"Games",route:"games",icon:"gamepad",public:!0},{name:"Books",route:"books",icon:"book",public:!0},{name:"Store",route:"store",icon:"buy",public:!1}];function r(l){return`/${l.route}`}function u(l){return`../assets/icons/${l}.svg`}return(l,x)=>{const i=f("router-link");return t(),c("nav",M,[(t(),c(d,null,$(a,s=>(t(),c(d,{key:s},[s.public|v(n).app.isLoggedIn?(t(),b(i,{key:0,to:r(s),class:"px-4 py-2"},{default:w(()=>[e("div",Z,[e("div",null,[e("img",{src:u(s.icon),alt:""},null,8,R)]),e("div",z,[e("span",null,p(s.name),1)])])]),_:2},1032,["to"])):g("",!0)],64))),64))])}}},E=o=>(C("data-v-20e11c85"),o=o(),B(),o),G={id:"footer",class:"flex flex-col"},K={class:""},O=E(()=>e("li",null,[e("span",null,"Add Account")],-1)),U={class:"flex p-4 justify-between"},q={class:"flex gap-4"},J={class:"grid content-center"},P={class:"flex flex-col"},Q={id:"display-name"},T={id:"username"},W={class:"grid content-center"},X={__name:"Footer",setup(o){const n=h(),a=k(n.user),r=L(!0);function u(){r.value=!r.value}async function l(){await n.logout()}return(x,i)=>{const s=f("v-img");return t(),c("div",G,[v(n).app.isLoggedIn?(t(),c(d,{key:0},[e("div",{class:A([{more:r.value},"border-2"])},[e("div",K,[e("ul",null,[O,e("li",null,[e("span",{onClick:i[0]||(i[0]=y=>l())},"Logout")])])])],2),e("div",U,[e("div",q,[e("div",J,[_(s,{src:a.photoURL,"aspect-ratio":"1",class:"w-12 h-12 rounded-full"},null,8,["src"])]),e("div",P,[e("div",Q,p(a.displayName),1),e("div",T,"@"+p(a.username),1)])]),e("div",W,[e("div",null,[_(s,{src:"../assets/icons/more.svg",class:"w-6 h-6",onClick:i[1]||(i[1]=y=>u())})])])])],64)):g("",!0)])}}},Y=m(X,[["__scopeId","data-v-20e11c85"]]),ee={id:"sidebar",class:"flex flex-col justify-between h-screen"},se={class:"flex px-4 py-8 gap-4"},te=e("div",{class:"grid items-center"},[e("span",{class:""},"King Chat")],-1),oe=e("hr",null,null,-1),ne=e("hr",{class:"mt-12"},null,-1),le={__name:"SideBar",setup(o){return(n,a)=>(t(),c("div",ee,[e("div",null,[e("header",se,[_(H),te]),oe,_(D)]),e("div",null,[ne,_(Y)])]))}};export{le as _};
