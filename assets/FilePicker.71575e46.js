import{a as m}from"./index.8e950e9d.js";import{r as c,k as y,l as _,e as r,i as u,q as a,g as b,n as g,x as v,t as h}from"./vendor.c4b4c3b3.js";const V={class:"relative flex items-stretch justify-start"},x={class:"inline-flex"},k=["accept"],S={key:0},B={class:"inline-flex justify-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-r-form"},w={props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:"mdi:upload"},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup(t,{emit:i}){const o=t,n=c(null),e=c(o.modelValue),d=y(()=>o.modelValue);_(d,l=>{e.value=l,l||(n.value.input.value=null)});const p=l=>{const s=l.target.files||l.dataTransfer.files;e.value=s[0],i("update:modelValue",e.value)};return(l,s)=>{const f=m;return r(),u("div",V,[a("label",x,[b(f,{as:"a",label:t.label,icon:t.icon,color:t.color,class:g({"rounded-r-none":e.value})},null,8,["label","icon","color","class"]),a("input",{ref_key:"root",ref:n,type:"file",class:"absolute top-0 left-0 w-full h-full outline-none opacity-0 cursor-pointer -z-1",accept:t.accept,onInput:p},null,40,k)]),e.value?(r(),u("div",S,[a("span",B,v(e.value.name),1)])):h("",!0)])}}};export{w as _};