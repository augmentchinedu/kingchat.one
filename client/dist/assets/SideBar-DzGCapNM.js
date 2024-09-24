import{_ as S}from"./Logo-CiY2BDhN.js";import{m as C,u as x,r as y,b as h,c as n,j as i,F as v,y as A,g as b,d as L,w as k,h as e,t as p,k as w,E as j,C as B,f as u,s as I,v as N}from"./index-BcOv5rK5.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E={class:"flex flex-row justify-start gap-4"},F={class:"svg"},V={class:"inline-flex items-center"},H={__name:"Navigation",setup(c){const a=C("theme"),o=x(),_=y(null),m=[{name:"Home",route:"home",icon:"home",public:!0},{name:"Chats",route:"chats",icon:"envelop",public:!0},{name:"Rooms",route:"rooms",icon:"door",public:!0},{name:"Games",route:"games",icon:"gamepad",public:!0},{name:"Books",route:"books",icon:"book",public:!0},{name:"Store",route:"store",icon:"buy",public:!1}];function f(t){return`/${t.route}`}function g(t,l){fetch(`../assets/icons/${t}.svg`).then(s=>s.text()).then(s=>{document.querySelectorAll(".svg")[l].innerHTML=s;const r=document.querySelectorAll(".svg")[l].querySelector("svg");d(r,a.darken1)});function d(s,r){s.querySelectorAll("path").forEach($=>{$.setAttribute("fill",r)})}}return(t,l)=>{const d=h("router-link");return n(),i("nav",{class:"flex flex-col justify-between",ref_key:"nav",ref:_},[(n(),i(v,null,A(m,(s,r)=>(n(),i(v,{key:r},[s.public|b(o).app.isLoggedIn?(n(),L(d,{key:0,to:f(s),class:"px-4 py-2"},{default:k(()=>[e("div",E,[e("div",F,p(g(s.icon,r)),1),e("div",V,[e("span",null,p(s.name),1)])])]),_:2},1032,["to"])):w("",!0)],64))),64))],512)}}},M=c=>(I("data-v-6b1d2828"),c=c(),N(),c),R={id:"footer",class:"flex flex-col"},z={class:""},D=M(()=>e("li",null,[e("span",null,"Add Account")],-1)),G={class:"flex flex-row p-4 justify-between w-full max-w-full gap-2"},K={class:"grid content-center"},O={class:"flex flex-col overflow-hidden"},T={id:"display-name",class:"truncate"},U={id:"username",class:"truncate"},J={class:"grid content-center"},P={__name:"Footer",setup(c){const a=x(),o=j(a.user),_=y(!0);function m(){_.value=!_.value}async function f(){await a.logout()}return(g,t)=>{const l=h("v-img"),d=h("router-link");return n(),i("div",R,[b(a).app.isLoggedIn?(n(),i(v,{key:0},[e("div",{class:B([{more:_.value},"border-2"])},[e("div",z,[e("ul",null,[D,e("li",null,[e("span",{onClick:t[0]||(t[0]=s=>f())},"Logout")])])])],2),e("div",G,[e("div",null,[u(d,{to:{name:"page",params:{username:o.username}},class:"flex flex-row flex-grow-0 overflow-hidden gap-2"},{default:k(()=>[e("div",K,[u(l,{src:o.photoURL,"aspect-ratio":"1",class:"w-12 h-12 rounded-full"},null,8,["src"])]),e("div",O,[e("div",T,p(o.displayName),1),e("div",U,"@"+p(o.username),1)])]),_:1},8,["to"])]),e("div",J,[u(l,{src:"../assets/icons/more.svg",class:"w-6 h-6",onClick:t[1]||(t[1]=s=>m())})])])],64)):w("",!0)])}}},Q=q(P,[["__scopeId","data-v-6b1d2828"]]),W={id:"sidebar",class:"flex flex-col justify-between h-screen"},X={class:"flex px-4 py-8 gap-4"},Y=e("div",{class:"grid items-center"},[e("span",{class:""},"King Chat")],-1),Z=e("hr",null,null,-1),ee=e("hr",{class:"mt-12"},null,-1),ce={__name:"SideBar",setup(c){return(a,o)=>(n(),i("div",W,[e("div",null,[e("header",X,[u(S),Y]),Z,u(H)]),e("div",null,[ee,u(Q)])]))}};export{ce as _};
