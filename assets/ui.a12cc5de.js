import{_ as I,a as j}from"./BottomOtherPagesSection.1dd2308a.js";import{_ as M}from"./TitleSubBar.ac99b068.js";import{a as W,_ as A}from"./Field.86c8c451.js";import{_ as F}from"./Notification.7664bb3c.js";import{j as P,d as E,f as J,a as L,b as q,c as H}from"./index.ef9167bf.js";import{_ as R}from"./HeroBar.edecabbc.js";import{_ as z}from"./TitleBar.4f8d5bae.js";import{i as f,j as v,o as G,e as K,a as e,w as o,q as n,u as l,F as Q,s as c}from"./vendor.283a5d30.js";var S={};const X=n("p",null,"This is sample modal",-1),Y=n("p",null,"This is sample modal",-1),Z=n("p",null,"This is sample modal",-1),ll=c("UI Components"),el=c(" Dark mode "),ol=n("div",{class:"py-24 text-center text-on-main-muted lg:py-12"},[n("div",{class:"flex items-center justify-center"},[n("button",{class:"button button-sm"}," Button2 ")]),n("div",{class:"flex items-center justify-center mt-6"},[n("input",{type:"checkbox",class:"checkbox"})])],-1),tl=c(" Modal examples "),nl={class:"space-y-12"},il=n("div",{class:"space-y-3"},[n("p",null,"Click to see in action")],-1),sl=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"},"Unhandled exception"),n("p",null,"Click to see in action")],-1),al=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"},"Success"),n("p",null,"Click to see in action")],-1),ul=n("h1",{class:"text-2xl text-on-main-muted"},"Notifications",-1),dl={class:"flex items-center justify-center mt-6"},cl=n("b",null,"Info state",-1),ml=c(". Notification "),_l=n("b",null,"Success state",-1),rl=c(". Notification "),bl=n("b",null,"Warning state",-1),fl=c(". Notification "),pl=n("b",null,"Danger state",-1),hl=c(". Notification "),gl=n("b",null,"White",-1),wl=c(". Notification "),vl=n("b",null,"Light",-1),xl=c(". Notification "),Bl=c("Buttons"),kl={class:"button-group"},yl=c("Cards"),Cl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},Vl=n("div",{class:"py-24 text-center text-on-main-muted lg:py-12"}," With title ",-1),Sl=n("div",{class:"py-24 text-center text-on-main-muted lg:py-12"}," With title & icons ",-1),$l={setup(Tl){const $=f(["Admin","UI Components"]),x=f(!1),B=f(!1),k=f(!1),y=f([]),m=v(()=>y.value.indexOf("outline")>-1),p=f([]),i=v(()=>p.value.indexOf("outline")>-1),s=v(()=>p.value.indexOf("small")>-1),a=v(()=>p.value.indexOf("disabled")>-1);return(Nl,u)=>{const C=P,T=z,N=R,h=I,_=E,g=J,r=L,t=q,w=H,V=W,b=F,O=A,U=M,D=j;return G(),K(Q,null,[e(C,{modelValue:x.value,"onUpdate:modelValue":u[0]||(u[0]=d=>x.value=d),title:"Please confirm action",buttonLabel:"Confirm",hasCancel:""},{default:o(()=>[X]),_:1},8,["modelValue"]),e(C,{modelValue:B.value,"onUpdate:modelValue":u[1]||(u[1]=d=>B.value=d),largeTitle:"Unhandled exception",button:"danger",shake:""},{default:o(()=>[Y]),_:1},8,["modelValue"]),e(C,{modelValue:k.value,"onUpdate:modelValue":u[2]||(u[2]=d=>k.value=d),largeTitle:"Success",button:"success"},{default:o(()=>[Z]),_:1},8,["modelValue"]),e(T,{titleStack:$.value},null,8,["titleStack"]),e(N,null,{default:o(()=>[ll]),_:1}),e(h,{first:""},{default:o(()=>[el]),_:1}),e(g,null,{default:o(()=>[e(_,{class:"shadow-2xl md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"},{default:o(()=>[ol]),_:1})]),_:1}),e(h,null,{default:o(()=>[tl]),_:1}),e(g,null,{default:o(()=>[n("div",nl,[e(_,{title:"Confirm modal",headerIcon:"mdi:close",class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:u[3]||(u[3]=d=>x.value=!0)},{default:o(()=>[il,e(r),e(w,null,{default:o(()=>[e(t,{label:"Confirm",color:"info"}),e(t,{label:"Cancel",color:"info",outline:""})]),_:1})]),_:1}),e(_,{class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:u[4]||(u[4]=d=>B.value=!0)},{default:o(()=>[sl,e(r),e(w,null,{default:o(()=>[e(t,{label:"Done",color:"danger"})]),_:1})]),_:1}),e(_,{class:"shadow-2xl cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto",hoverable:"",onClick:u[5]||(u[5]=d=>k.value=!0)},{default:o(()=>[al,e(r),e(t,{label:"Done",color:"success"})]),_:1})])]),_:1}),e(h,{custom:""},{default:o(()=>[ul,n("div",dl,[e(V,{modelValue:y.value,"onUpdate:modelValue":u[6]||(u[6]=d=>y.value=d),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),e(g,null,{default:o(()=>[e(b,{color:"info",icon:"mdi:information-outline",outline:l(m)},{right:o(()=>[e(t,{icon:"mdi:open-in-new",label:"Button",color:"info",outline:l(m),small:""},null,8,["outline"])]),default:o(()=>[cl,ml]),_:1},8,["outline"]),e(b,{color:"success",icon:"mdi:check-circle-outline",outline:l(m)},{right:o(()=>[e(t,{icon:"mdi:open-in-new",label:"Button",color:"success",outline:l(m),small:""},null,8,["outline"])]),default:o(()=>[_l,rl]),_:1},8,["outline"]),e(b,{color:"warning",icon:"mdi:alert-circle-outline",outline:l(m)},{right:o(()=>[e(t,{icon:"mdi:open-in-new",label:"Button",color:"warning",outline:l(m),small:""},null,8,["outline"])]),default:o(()=>[bl,fl]),_:1},8,["outline"]),e(b,{color:"danger",icon:"mdi:alert-circle",outline:l(m)},{right:o(()=>[e(t,{class:"border border-danger-hocus",icon:"mdi:open-in-new",label:"Button",color:"danger",outline:l(m),small:""},null,8,["outline"])]),default:o(()=>[pl,hl]),_:1},8,["outline"]),e(b,{icon:"mdi:select-color",outline:l(m)},{default:o(()=>[gl,wl]),_:1},8,["outline"]),e(b,{color:"light",icon:"mdi:feather",outline:l(m)},{default:o(()=>[vl,xl]),_:1},8,["outline"])]),_:1}),e(h,null,{default:o(()=>[Bl]),_:1}),e(g,null,{default:o(()=>[e(_,null,{default:o(()=>[e(O,{label:"Settings"},{default:o(()=>[e(V,{modelValue:p.value,"onUpdate:modelValue":u[7]||(u[7]=d=>p.value=d),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),e(r),e(w,null,{default:o(()=>[e(t,{color:"white",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"light",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"info",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"success",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"warning",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"danger",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"])]),_:1}),e(r),e(w,null,{default:o(()=>[e(t,{color:"white",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"light",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"info",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"success",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"warning",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"danger",label:"Button",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"])]),_:1}),e(r),e(w,null,{default:o(()=>[e(t,{color:"white",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"light",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"info",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"success",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"warning",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"danger",icon:"mdi:open-in-new",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"])]),_:1}),e(r),n("div",kl,[e(t,{color:"white",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"light",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"info",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"success",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"warning",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"]),e(t,{color:"danger",label:"Button",small:l(s),outline:l(i),disabled:l(a)},null,8,["small","outline","disabled"])])]),_:1})]),_:1}),e(h,null,{default:o(()=>[yl]),_:1}),e(g,null,{default:o(()=>[n("div",Cl,[e(_,{title:"With Title",mb:""},{default:o(()=>[Vl]),_:1}),e(_,{title:"Title & Icons",icon:"mdi:monitor-cellphone",headerIcon:"mdi:close",mb:""},{default:o(()=>[Sl]),_:1})]),e(U,{icon:"mdi:alert-circle",title:"Empty variation"}),e(_,{empty:""})]),_:1}),e(D)],64)}}};typeof S=="function"&&S($l);export{$l as default};