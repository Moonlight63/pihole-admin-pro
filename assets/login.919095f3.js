import{O as e,P as o,o as a,c as l,w as s,a as r,u as n,v as m}from"./vendor.2e7590e3.js";import{e as d,a as t,b as u,c as i,d as p}from"./index.b8dc0300.js";import{_ as c,a as b}from"./Field.cd83df54.js";var f={};const w={setup(f){const w=e({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:["remember"]}),g=o(),V=()=>{g.push("/")};return(e,o)=>{const f=d,g=c,h=b,y=t,j=u,_=i,v=p;return a(),l(v,{class:"w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12",rounded:"rounded-lg",form:"",onSubmit:m(V,["prevent"])},{default:s((()=>[r(g,{label:"Login",help:"Please enter your login"},{default:s((()=>[r(f,{modelValue:n(w).login,"onUpdate:modelValue":o[0]||(o[0]=e=>n(w).login=e),icon:"mdi:account",name:"login",autocomplete:"username"},null,8,["modelValue"])])),_:1}),r(g,{label:"Password",help:"Please enter your password"},{default:s((()=>[r(f,{modelValue:n(w).pass,"onUpdate:modelValue":o[1]||(o[1]=e=>n(w).pass=e),icon:"mdi:asterisk",type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue"])])),_:1}),r(h,{modelValue:n(w).remember,"onUpdate:modelValue":o[2]||(o[2]=e=>n(w).remember=e),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),r(y),r(_,null,{default:s((()=>[r(j,{type:"submit",color:"info",label:"Login"}),r(j,{to:"/",color:"info",outline:"",label:"Back"})])),_:1})])),_:1},8,["onSubmit"])}}};"function"==typeof f&&f(w);export{w as default};