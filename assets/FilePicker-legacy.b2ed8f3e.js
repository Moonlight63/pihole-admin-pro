System.register(["./index-legacy.d190c3d0.js","./vendor-legacy.98f69d1a.js"],(function(e){"use strict";var l,t,a,n,u,r,o,c,s,i,d;return{setters:[function(e){l=e.a},function(e){t=e.r,a=e.k,n=e.l,u=e.e,r=e.i,o=e.q,c=e.g,s=e.n,i=e.x,d=e.t}],execute:function(){const f={class:"relative flex items-stretch justify-start"},p={class:"inline-flex"},y=["accept"],v={key:0},g={class:"inline-flex justify-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-r-form"};e("_",{props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:"mdi:upload"},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup(e,{emit:m}){const b=e,x=t(null),j=t(b.modelValue),S=a((()=>b.modelValue));n(S,(e=>{j.value=e,e||(x.value.input.value=null)}));const V=e=>{const l=e.target.files||e.dataTransfer.files;j.value=l[0],m("update:modelValue",j.value)};return(t,a)=>{const n=l;return u(),r("div",f,[o("label",p,[c(n,{as:"a",label:e.label,icon:e.icon,color:e.color,class:s({"rounded-r-none":j.value})},null,8,["label","icon","color","class"]),o("input",{ref_key:"root",ref:x,type:"file",class:"absolute top-0 left-0 w-full h-full outline-none opacity-0 cursor-pointer -z-1",accept:e.accept,onInput:V},null,40,y)]),j.value?(u(),r("div",v,[o("span",g,i(j.value.name),1)])):d("",!0)])}}})}}}));