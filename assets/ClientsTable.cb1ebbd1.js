import{i as S,j as E,k as F,b as J,c as q,h as H}from"./index.ef9167bf.js";import{i as m,k as R,o as l,c as P,w as h,q as e,x as W,R as z,b as G,j as v,e as a,a as o,F as y,A as V,t as n,p as $,u as C,s as N}from"./vendor.283a5d30.js";const I={class:"checkbox"},K=e("span",{class:"check"},null,-1),O={props:{type:{type:String,default:"td"}},emits:["checked"],setup(g,{emit:k}){const c=m(!1);return R(c,r=>{k("checked",r)}),(r,_)=>(l(),P(G(g.type),{class:"checkbox-cell"},{default:h(()=>[e("label",I,[W(e("input",{"onUpdate:modelValue":_[0]||(_[0]=u=>c.value=u),type:"checkbox"},null,512),[[z,c.value]]),K])]),_:1}))}},Q=e("p",null,[N("Lorem ipsum dolor sit amet "),e("b",null,"adipiscing elit")],-1),X=e("p",null,"This is sample modal",-1),Y=e("p",null,[N("Lorem ipsum dolor sit amet "),e("b",null,"adipiscing elit")],-1),Z=e("p",null,"This is sample modal",-1),ee={key:0,class:"p-3 bg-gray-50 dark:bg-gray-800"},te={key:0},se=e("th",null,null,-1),le=e("th",null,"Name",-1),ae=e("th",null,"Company",-1),oe=e("th",null,"City",-1),ne=e("th",null,"Progress",-1),ce=e("th",null,"Created",-1),ue=e("th",null,null,-1),ie={class:"image-cell"},de={"data-label":"Name"},re={"data-label":"Company"},_e={"data-label":"City"},me={"data-label":"Progress",class:"progress-cell"},he=["value"],pe={"data-label":"Created"},ve=["title"],ge={class:"actions-cell"},ke={class:"table-pagination"},ye={props:{checkable:Boolean},setup(g){const k=v(()=>S().clients),c=m(!1),r=m(!1),_=m(10),u=m(0),p=m([]),w=v(()=>k.value.slice(_.value*u.value,_.value*(u.value+1))),B=v(()=>Math.ceil(k.value.length/_.value)),A=v(()=>u.value+1),M=v(()=>{const i=[];for(let s=0;s<B.value;s++)i.push(s);return i}),j=(i,s)=>{const d=[];return i.forEach(b=>{s(b)||d.push(b)}),d},D=(i,s)=>{i?p.value.push(s):p.value=j(p.value,d=>d.id===s.id)};return(i,s)=>{const d=E,b=O,T=F,x=J,L=q,U=H;return l(),a(y,null,[o(d,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=t=>c.value=t),title:"Sample modal"},{default:h(()=>[Q,X]),_:1},8,["modelValue"]),o(d,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=t=>r.value=t),largeTitle:"Please confirm",button:"danger",hasCancel:""},{default:h(()=>[Y,Z]),_:1},8,["modelValue"]),p.value.length?(l(),a("div",ee,[(l(!0),a(y,null,V(p.value,t=>(l(),a("span",{key:t.id,class:"inline-block px-2 py-1 mr-2 text-sm bg-gray-100 rounded-sm dark:bg-gray-700"},n(t.name),1))),128))])):$("",!0),e("table",null,[e("thead",null,[e("tr",null,[g.checkable?(l(),a("th",te)):$("",!0),se,le,ae,oe,ne,ce,ue])]),e("tbody",null,[(l(!0),a(y,null,V(C(w),t=>(l(),a("tr",{key:t.id},[g.checkable?(l(),P(b,{key:0,onChecked:f=>D(f,t)},null,8,["onChecked"])):$("",!0),e("td",ie,[o(T,{username:t.name,class:"image"},null,8,["username"])]),e("td",de,n(t.name),1),e("td",re,n(t.company),1),e("td",_e,n(t.city),1),e("td",me,[e("progress",{max:"100",value:t.progress},n(t.progress),9,he)]),e("td",pe,[e("small",{class:"text-on-main-muted",title:t.created},n(t.created),9,ve)]),e("td",ge,[o(L,{type:"justify-start lg:justify-end",noWrap:""},{default:h(()=>[o(x,{color:"success",icon:"mdi:eye",small:"",onClick:s[2]||(s[2]=f=>c.value=!0)}),o(x,{color:"danger",icon:"mdi:trash-can",small:"",onClick:s[3]||(s[3]=f=>r.value=!0)})]),_:1})])]))),128))])]),e("div",ke,[o(U,null,{default:h(()=>[o(L,null,{default:h(()=>[(l(!0),a(y,null,V(C(M),t=>(l(),P(x,{key:t,active:t===u.value,label:t+1,small:"",onClick:f=>u.value=t},null,8,["active","label","onClick"]))),128))]),_:1}),e("small",null,"Page "+n(C(A))+" of "+n(C(B)),1)]),_:1})])],64)}}};export{O as _,ye as a};