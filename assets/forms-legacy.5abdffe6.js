System.register(["./vendor-legacy.98f69d1a.js","./BottomOtherPagesSection-legacy.33ac3bce.js","./FilePicker-legacy.b2ed8f3e.js","./CheckRadioPicker-legacy.a7b0a913.js","./index-legacy.d190c3d0.js","./Divider-legacy.f830bc23.js","./TitleSubBar-legacy.869203dd.js","./HeroBar-legacy.18c9fca5.js","./TitleBar-legacy.9734aa68.js"],(function(e){"use strict";var l,o,a,t,n,u,i,d,c,m,r,s,p,f,b,h,V,y,_,w,g,x,j,k;return{setters:[function(e){l=e.r,o=e.K,a=e.e,t=e.i,n=e.g,u=e.w,i=e.y,d=e.m,c=e.F,m=e.v},function(e){r=e._,s=e.a},function(e){p=e._},function(e){f=e._},function(e){b=e.c,h=e.d,V=e.a,y=e.b,_=e.e},function(e){w=e._,g=e.a},function(e){x=e._},function(e){j=e._},function(e){k=e._}],execute:function(){var S={};const B=m("Forms"),v=m(" Custom elements "),U=e("default",{setup(e){const m=l(["Admin","Forms"]),S=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],U=o({name:"John Doe",email:"john.doe@example.com",phone:"",department:S[0],subject:"",question:""}),F=o({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),D=()=>{};return(e,l)=>{const o=k,O=j,C=x,T=b,M=h,P=w,R=V,q=g,A=y,Y=_,z=r,E=f,G=p,H=s;return a(),t(c,null,[n(o,{titleStack:m.value},null,8,["titleStack"]),n(O,null,{default:u((()=>[B])),_:1}),n(Y,null,{default:u((()=>[n(C,{icon:e.mdiBallotOutline,title:"Forms example"},null,8,["icon"]),n(A,{title:"Forms",icon:"mdi:ballot",form:"",onSubmit:i(D,["prevent"])},{default:u((()=>[n(M,{label:"Grouped with icons"},{default:u((()=>[n(T,{modelValue:d(U).name,"onUpdate:modelValue":l[0]||(l[0]=e=>d(U).name=e),icon:e.mdiAccount},null,8,["modelValue","icon"]),n(T,{modelValue:d(U).email,"onUpdate:modelValue":l[1]||(l[1]=e=>d(U).email=e),type:"email",icon:e.mdiMail},null,8,["modelValue","icon"])])),_:1}),n(M,{label:"With help line",help:"Do not enter the leading zero"},{default:u((()=>[n(T,{modelValue:d(U).phone,"onUpdate:modelValue":l[2]||(l[2]=e=>d(U).phone=e),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])])),_:1}),n(M,{label:"Dropdown"},{default:u((()=>[n(T,{modelValue:d(U).department,"onUpdate:modelValue":l[3]||(l[3]=e=>d(U).department=e),options:S},null,8,["modelValue"])])),_:1}),n(P),n(M,{label:"Question",help:"Your question. Max 255 characters"},{default:u((()=>[n(T,{type:"textarea",placeholder:"Explain how we can help you"})])),_:1}),n(P),n(q,null,{default:u((()=>[n(R,{type:"submit",color:"info",label:"Submit"}),n(R,{type:"reset",color:"info",outline:"",label:"Reset"})])),_:1})])),_:1},8,["onSubmit"])])),_:1}),n(z,null,{default:u((()=>[v])),_:1}),n(Y,null,{default:u((()=>[n(A,{title:"Custom elements",icon:e.mdiBallotOutline},{default:u((()=>[n(M,{label:"Checkbox",wrapBody:""},{default:u((()=>[n(E,{modelValue:d(F).checkbox,"onUpdate:modelValue":l[4]||(l[4]=e=>d(F).checkbox=e),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])])),_:1}),n(P),n(M,{label:"Radio",wrapBody:""},{default:u((()=>[n(E,{modelValue:d(F).radio,"onUpdate:modelValue":l[5]||(l[5]=e=>d(F).radio=e),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])])),_:1}),n(P),n(M,{label:"Switch"},{default:u((()=>[n(E,{modelValue:d(F).switch,"onUpdate:modelValue":l[6]||(l[6]=e=>d(F).switch=e),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])])),_:1}),n(P),n(G,{modelValue:d(F).file,"onUpdate:modelValue":l[7]||(l[7]=e=>d(F).file=e)},null,8,["modelValue"])])),_:1},8,["icon"])])),_:1}),n(H)],64)}}});"function"==typeof S&&S(U)}}}));