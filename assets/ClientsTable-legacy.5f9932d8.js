System.register(["./index-legacy.a10deaaf.js","./vendor-legacy.010102a1.js"],(function(l){"use strict";var e,a,t,u,n,s,c,o,d,i,r,m,p,h,v,g,y,b,k,f,C,x,V,_;return{setters:[function(l){e=l.i,a=l.j,t=l.k,u=l.b,n=l.c,s=l.h},function(l){c=l.i,o=l.k,d=l.o,i=l.c,r=l.w,m=l.q,p=l.x,h=l.R,v=l.b,g=l.j,y=l.e,b=l.a,k=l.F,f=l.A,C=l.t,x=l.p,V=l.u,_=l.s}],execute:function(){const j={class:"checkbox"},P=m("span",{class:"check"},null,-1),S=l("_",{props:{type:{type:String,default:"td"}},emits:["checked"],setup(l,{emit:e}){const a=c(!1);return o(a,(l=>{e("checked",l)})),(e,t)=>(d(),i(v(l.type),{class:"checkbox-cell"},{default:r((()=>[m("label",j,[p(m("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),type:"checkbox"},null,512),[[h,a.value]]),P])])),_:1}))}}),T=m("p",null,[_("Lorem ipsum dolor sit amet "),m("b",null,"adipiscing elit")],-1),U=m("p",null,"This is sample modal",-1),L=m("p",null,[_("Lorem ipsum dolor sit amet "),m("b",null,"adipiscing elit")],-1),N=m("p",null,"This is sample modal",-1),q={key:0,class:"p-3 bg-gray-50 dark:bg-gray-800"},w={key:0},A=m("th",null,null,-1),B=m("th",null,"Name",-1),E=m("th",null,"Company",-1),F=m("th",null,"City",-1),M=m("th",null,"Progress",-1),R=m("th",null,"Created",-1),W=m("th",null,null,-1),z={class:"image-cell"},D={"data-label":"Name"},G={"data-label":"Company"},H={"data-label":"City"},I={"data-label":"Progress",class:"progress-cell"},J=["value"],K={"data-label":"Created"},O=["title"],Q={class:"actions-cell"},X={class:"table-pagination"};l("a",{props:{checkable:Boolean},setup(l){const o=g((()=>e().clients)),p=c(!1),h=c(!1),v=c(10),_=c(0),j=c([]),P=g((()=>o.value.slice(v.value*_.value,v.value*(_.value+1)))),Y=g((()=>Math.ceil(o.value.length/v.value))),Z=g((()=>_.value+1)),$=g((()=>{const l=[];for(let e=0;e<Y.value;e++)l.push(e);return l}));return(e,c)=>{const o=a,v=S,g=t,ll=u,el=n,al=s;return d(),y(k,null,[b(o,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=l=>p.value=l),title:"Sample modal"},{default:r((()=>[T,U])),_:1},8,["modelValue"]),b(o,{modelValue:h.value,"onUpdate:modelValue":c[1]||(c[1]=l=>h.value=l),largeTitle:"Please confirm",button:"danger",hasCancel:""},{default:r((()=>[L,N])),_:1},8,["modelValue"]),j.value.length?(d(),y("div",q,[(d(!0),y(k,null,f(j.value,(l=>(d(),y("span",{key:l.id,class:"inline-block px-2 py-1 mr-2 text-sm bg-gray-100 rounded-sm dark:bg-gray-700"},C(l.name),1)))),128))])):x("",!0),m("table",null,[m("thead",null,[m("tr",null,[l.checkable?(d(),y("th",w)):x("",!0),A,B,E,F,M,R,W])]),m("tbody",null,[(d(!0),y(k,null,f(V(P),(e=>(d(),y("tr",{key:e.id},[l.checkable?(d(),i(v,{key:0,onChecked:l=>((l,e)=>{l?j.value.push(e):j.value=((l,e)=>{const a=[];return l.forEach((l=>{e(l)||a.push(l)})),a})(j.value,(l=>l.id===e.id))})(l,e)},null,8,["onChecked"])):x("",!0),m("td",z,[b(g,{username:e.name,class:"image"},null,8,["username"])]),m("td",D,C(e.name),1),m("td",G,C(e.company),1),m("td",H,C(e.city),1),m("td",I,[m("progress",{max:"100",value:e.progress},C(e.progress),9,J)]),m("td",K,[m("small",{class:"text-on-main-muted",title:e.created},C(e.created),9,O)]),m("td",Q,[b(el,{type:"justify-start lg:justify-end",noWrap:""},{default:r((()=>[b(ll,{color:"success",icon:"mdi:eye",small:"",onClick:c[2]||(c[2]=l=>p.value=!0)}),b(ll,{color:"danger",icon:"mdi:trash-can",small:"",onClick:c[3]||(c[3]=l=>h.value=!0)})])),_:1})])])))),128))])]),m("div",X,[b(al,null,{default:r((()=>[b(el,null,{default:r((()=>[(d(!0),y(k,null,f(V($),(l=>(d(),i(ll,{key:l,active:l===_.value,label:l+1,small:"",onClick:e=>_.value=l},null,8,["active","label","onClick"])))),128))])),_:1}),m("small",null,"Page "+C(V(Z))+" of "+C(V(Y)),1)])),_:1})])],64)}}})}}}));