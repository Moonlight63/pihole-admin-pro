import{i as e,O as l,o,e as a,a as t,w as n,v as m,u as i,F as u,s as d}from"./vendor.b321879e.js";import{_ as s,a as r}from"./BottomOtherPagesSection.e909c8af.js";import{_ as p}from"./FilePicker.faae1b3a.js";import{_ as c,a as f}from"./Field.0c8c18e6.js";import{e as b,a as h,b as V,c as _,d as w,f as x}from"./index.45797eaf.js";import{_ as y}from"./TitleSubBar.c2fe4baf.js";import{_ as j}from"./HeroBar.9094e249.js";import{_ as k}from"./TitleBar.95530f40.js";var B={};const S=d("Forms"),U=d(" Custom elements "),F={setup(d){const B=e(["Admin","Forms"]),F=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],v=l({name:"John Doe",email:"john.doe@example.com",phone:"",department:F[0],subject:"",question:""}),O=l({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),D=()=>{};return(e,l)=>{const d=k,T=j,g=y,C=b,M=c,q=h,A=V,P=_,R=w,Y=x,z=s,E=f,G=p,H=r;return o(),a(u,null,[t(d,{titleStack:B.value},null,8,["titleStack"]),t(T,null,{default:n((()=>[S])),_:1}),t(Y,null,{default:n((()=>[t(g,{icon:e.mdiBallotOutline,title:"Forms example"},null,8,["icon"]),t(R,{title:"Forms",icon:"mdi:ballot",form:"",onSubmit:m(D,["prevent"])},{default:n((()=>[t(M,{label:"Grouped with icons"},{default:n((()=>[t(C,{modelValue:i(v).name,"onUpdate:modelValue":l[0]||(l[0]=e=>i(v).name=e),icon:e.mdiAccount},null,8,["modelValue","icon"]),t(C,{modelValue:i(v).email,"onUpdate:modelValue":l[1]||(l[1]=e=>i(v).email=e),type:"email",icon:e.mdiMail},null,8,["modelValue","icon"])])),_:1}),t(M,{label:"With help line",help:"Do not enter the leading zero"},{default:n((()=>[t(C,{modelValue:i(v).phone,"onUpdate:modelValue":l[2]||(l[2]=e=>i(v).phone=e),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])])),_:1}),t(M,{label:"Dropdown"},{default:n((()=>[t(C,{modelValue:i(v).department,"onUpdate:modelValue":l[3]||(l[3]=e=>i(v).department=e),options:F},null,8,["modelValue"])])),_:1}),t(q),t(M,{label:"Question",help:"Your question. Max 255 characters"},{default:n((()=>[t(C,{type:"textarea",placeholder:"Explain how we can help you"})])),_:1}),t(q),t(P,null,{default:n((()=>[t(A,{type:"submit",color:"info",label:"Submit"}),t(A,{type:"reset",color:"info",outline:"",label:"Reset"})])),_:1})])),_:1},8,["onSubmit"])])),_:1}),t(z,null,{default:n((()=>[U])),_:1}),t(Y,null,{default:n((()=>[t(R,{title:"Custom elements",icon:e.mdiBallotOutline},{default:n((()=>[t(M,{label:"Checkbox",wrapBody:""},{default:n((()=>[t(E,{modelValue:i(O).checkbox,"onUpdate:modelValue":l[4]||(l[4]=e=>i(O).checkbox=e),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])])),_:1}),t(q),t(M,{label:"Radio",wrapBody:""},{default:n((()=>[t(E,{modelValue:i(O).radio,"onUpdate:modelValue":l[5]||(l[5]=e=>i(O).radio=e),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])])),_:1}),t(q),t(M,{label:"Switch"},{default:n((()=>[t(E,{modelValue:i(O).switch,"onUpdate:modelValue":l[6]||(l[6]=e=>i(O).switch=e),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])])),_:1}),t(q),t(G,{modelValue:i(O).file,"onUpdate:modelValue":l[7]||(l[7]=e=>i(O).file=e)},null,8,["modelValue"])])),_:1},8,["icon"])])),_:1}),t(H)],64)}}};"function"==typeof B&&B(F);export{F as default};