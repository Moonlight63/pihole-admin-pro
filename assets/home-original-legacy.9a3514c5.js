System.register(["./vendor-legacy.bd7b00c3.js","./index-legacy.b16af19b.js","./ClientsTable-legacy.3ab0ea25.js","./Notification-legacy.0e25e9a4.js","./TitleSubBar-legacy.0d3b0a45.js","./HeroBar-legacy.b0d8db47.js","./TitleBar-legacy.9b885a82.js"],(function(e){"use strict";var l,a,n,t,i,o,u,s,c,d,r,m,b,p,f,g,h,v,y,k,C,_,j,x,T,w,M,P,S,V,A,R,B,D;return{setters:[function(e){l=e.j,a=e.i,n=e.o,t=e.e,i=e.a,o=e.w,u=e.F,s=e.A,c=e.t,d=e.p,r=e.q,m=e.c,b=e.u,p=e.s,f=e.l,g=e.C,h=e.k},function(e){v=e.i,y=e.j,k=e.b,C=e.c,_=e.k,j=e.h,x=e.l,T=e.d,w=e.f,M=e.m,P=e.n},function(e){S=e._,V=e.a},function(e){A=e._},function(e){R=e._},function(e){B=e._},function(e){D=e._}],execute:function(){const G=r("p",null,[p("Lorem ipsum dolor sit amet "),r("b",null,"adipiscing elit")],-1),H=r("p",null,"This is sample modal",-1),U=r("p",null,[p("Lorem ipsum dolor sit amet "),r("b",null,"adipiscing elit")],-1),E=r("p",null,"This is sample modal",-1),I={key:0,class:"p-3 bg-gray-50 dark:bg-gray-800"},N={key:0},O=r("th",null,null,-1),W=r("th",null,"Name",-1),q=r("th",null,"Username",-1),F=r("th",null,"E-Mail",-1),L=r("th",null,"Phone",-1),$=r("th",null,"Website",-1),z=r("th",null,null,-1),J={class:"image-cell"},K={"data-label":"Name"},Q={"data-label":"Username"},X={"data-label":"E-Mail"},Y={"data-label":"Phone"},Z={"data-label":"Website"},ee=["title"],le={class:"actions-cell"},ae={class:"table-pagination"},ne={props:{checkable:Boolean},setup(e){const p=l((()=>v().myusers)),f=a(!1),g=a(!1),h=a(10),x=a(0),T=a([]),w=l((()=>p.value.slice(h.value*x.value,h.value*(x.value+1)))),M=l((()=>Math.ceil(p.value.length/h.value))),P=l((()=>x.value+1)),V=l((()=>{const e=[];for(let l=0;l<M.value;l++)e.push(l);return e}));return(l,a)=>{const p=y,h=k,v=C,A=S,R=_,B=j;return n(),t(u,null,[i(p,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),title:"Sample modal"},{default:o((()=>[G,H])),_:1},8,["modelValue"]),i(p,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e),largeTitle:"Please confirm",button:"danger",hasCancel:""},{default:o((()=>[U,E])),_:1},8,["modelValue"]),T.value.length?(n(),t("div",I,[(n(!0),t(u,null,s(T.value,(e=>(n(),t("span",{key:e.id,class:"inline-block px-2 py-1 mr-2 text-sm bg-gray-100 rounded-sm dark:bg-gray-700"},c(e.name),1)))),128))])):d("v-if",!0),i(v,null,{default:o((()=>[i(h,{label:"Do Stuff",onClick:a[2]||(a[2]=e=>{console.log(store.state.myusers)})})])),_:1}),r("table",null,[r("thead",null,[r("tr",null,[e.checkable?(n(),t("th",N)):d("v-if",!0),O,W,q,F,L,$,z])]),r("tbody",null,[(n(!0),t(u,null,s(b(w),(l=>(n(),t("tr",{key:l.id},[e.checkable?(n(),m(A,{key:0,onChecked:e=>((e,l)=>{e?T.value.push(l):T.value=((e,l)=>{const a=[];return e.forEach((e=>{l(e)||a.push(e)})),a})(T.value,(e=>e.id===l.id))})(e,l)},null,8,["onChecked"])):d("v-if",!0),r("td",J,[i(R,{username:l.name,class:"image"},null,8,["username"])]),r("td",K,c(l.name),1),r("td",Q,c(l.username),1),r("td",X,c(l.email),1),r("td",Y,c(l.phone),1),r("td",Z,[r("small",{class:"text-gray-500 dark:text-gray-400",title:l.website},c(l.website),9,ee)]),r("td",le,[i(v,{type:"justify-start lg:justify-end",noWrap:""},{default:o((()=>[i(h,{color:"success",icon:"mdi:eye",small:"",onClick:a[3]||(a[3]=e=>f.value=!0)}),i(h,{color:"danger",icon:"mdi:trash-can",small:"",onClick:a[4]||(a[4]=e=>g.value=!0)})])),_:1})])])))),128))])]),r("div",ae,[i(B,null,{default:o((()=>[i(v,null,{default:o((()=>[(n(!0),t(u,null,s(b(V),(e=>(n(),m(h,{key:e,active:e===x.value,label:e+1,small:"",onClick:l=>x.value=e},null,8,["active","label","onClick"])))),128))])),_:1}),r("small",null,"Page "+c(b(P))+" of "+c(b(M)),1)])),_:1})])],64)}}},te={props:{data:{type:Object,required:!0}},setup(e){const i=e,o=a(null);let u;f((()=>{u=new g(o.value,{type:"line",data:i.data,options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{display:!0},x:{display:!0}},plugins:{legend:{display:!1}}}})}));const s=l((()=>i.data));return h(s,(e=>{u&&(u.data=e,u.update())})),(e,l)=>(n(),t("canvas",{ref_key:"root",ref:o},null,512))}};var ie={};const oe=p("Dashboard"),ue={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3"},se={class:"grid grid-cols-1 gap-6 mb-6 xl:grid-cols-2"},ce={class:"flex flex-col justify-between"},de={class:"flex flex-col justify-between"},re={key:0},me=r("b",null,"Responsive table.",-1),be=p(" Collapses on mobile "),pe=e("default",{setup(e){const c=a(["Admin","Dashboard"]),p=a(null),g=()=>{p.value=chartConfig.sampleChartData()};f((()=>{g()}));const h=v(),y=l((()=>h.clients.slice(0,3))),k=l((()=>h.history.slice(0,3)));return(e,l)=>{const a=D,f=B,h=x,v=M,C=P,_=R,j=te,S=T,G=A,H=ne,U=V,E=w;return n(),t(u,null,[i(a,{titleStack:c.value},null,8,["titleStack"]),i(f,null,{default:o((()=>[oe])),_:1}),i(E,null,{default:o((()=>[d(' <notification\n      color="info"\n      :icon="mdiGithub"\n    >\n      Please star this project on\n      <a\n        href="https://github.com/justboil/admin-one-vue-tailwind"\n        class="underline"\n        target="_blank"\n      >GitHub</a>\n      <template #right>\n        <jb-button\n          href="https://github.com/justboil/admin-one-vue-tailwind"\n          :icon="mdiGithub"\n          :outline="darkMode"\n          label="GitHub"\n          target="_blank"\n          small\n        />\n      </template>\n    </notification> '),r("div",ue,[i(h,{trend:"12%",trendType:"up",color:"text-emerald-500",icon:e.mdiAccountMultiple,number:512,label:"Clients"},null,8,["icon"]),i(h,{trend:"12%",trendType:"down",color:"text-blue-500",icon:e.mdiCartOutline,number:7770,prefix:"$",label:"Sales"},null,8,["icon"]),i(h,{trend:"Overflow",trendType:"alert",color:"text-red-500",icon:e.mdiChartTimelineVariant,number:256,suffix:"%",label:"Performance"},null,8,["icon"])]),r("div",se,[r("div",ce,[(n(!0),t(u,null,s(b(k),((e,l)=>(n(),m(v,{key:l,amount:e.amount,date:e.date,business:e.business,type:e.type,name:e.name,account:e.account},null,8,["amount","date","business","type","name","account"])))),128))]),r("div",de,[(n(!0),t(u,null,s(b(y),(e=>(n(),m(C,{key:e.id,name:e.name,login:e.login,date:e.created,progress:e.progress},null,8,["name","login","date","progress"])))),128))])]),i(_,{icon:e.mdiChartPie,title:"Trends overview"},null,8,["icon"]),i(S,{title:"Performance",icon:e.mdiFinance,headerIcon:e.mdiReload,class:"mb-6",onHeaderIconClick:g},{default:o((()=>[p.value?(n(),t("div",re,[i(j,{data:p.value,class:"h-96"},null,8,["data"])])):d("v-if",!0)])),_:1},8,["icon","headerIcon"]),i(_,{icon:e.mdiAccountMultiple,title:"Clients"},null,8,["icon"]),i(G,{color:"info",icon:e.mdiMonitorCellphone},{default:o((()=>[me,be])),_:1},8,["icon"]),i(S,{icon:e.mdiMonitorCellphone,title:"Responsive table",hasTable:""},{default:o((()=>[i(H)])),_:1},8,["icon"]),i(S,{icon:e.mdiMonitorCellphone,title:"Responsive table",hasTable:""},{default:o((()=>[i(U)])),_:1},8,["icon"])])),_:1})],64)}}});"function"==typeof ie&&ie(pe)}}}));