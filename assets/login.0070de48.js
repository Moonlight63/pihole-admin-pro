var U=Object.defineProperty,j=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var C=(n,e,o)=>e in n?U(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,$=(n,e)=>{for(var o in e||(e={}))D.call(e,o)&&C(n,o,e[o]);if(k)for(var o of k(e))E.call(e,o)&&C(n,o,e[o]);return n},V=(n,e)=>j(n,A(e));import{b as J,K as L,R as q,r as x,o as z,m as l,e as _,f as p,w as i,q as a,x as K,g as t,n as Y,y as G}from"./vendor.c4b4c3b3.js";import{_ as H,a as I}from"./Divider.a818c027.js";import{l as h,m as S,n as f,b as O,c as Q,d as W,a as X}from"./index.8e950e9d.js";import{_ as Z}from"./CheckRadioPicker.8260f4ad.js";var F={};const ee=a("div",{class:"py-10 text-4xl text-center text-success"},[a("p",null,"Success!")],-1),oe={class:"py-10 text-2xl text-center text-on-main-muted"},se=a("p",null,"Connecting to server...",-1),ne=a("div",{class:"py-10 text-2xl text-center text-on-main-muted"},[a("p",null,"Not connected to any server...")],-1),le={beforeRouteEnter:()=>{console.log(f().valid),console.log(h().isConnecting),console.log(h().connected),console.log("\u{1F680} ~ file: login.vue ~ line 10 ~ auth.updating",S().updating)}},te=J(V($({},le),{setup(n){const e=L({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:["remember"]}),o=h(),r=q(),g=S(),c=x(!1),d=x(!1),v=x(!1);let w=null;const B=async()=>{c.value=!1,d.value=!0;const u=await g.login(e.pass);u?(d.value=!1,r.push("/")):(c.value=!0,v.value=!0,setTimeout(()=>{d.value=!1,v.value=!1},800),w!==null&&clearTimeout(w),w=setTimeout(()=>c.value=!1,5e3)),console.log("\u{1F680} ~ file: login.vue ~ line 15 ~ submit ~ res",u)};return z(()=>{if(console.log("\u{1F680} ~ file: login.vue ~ line 75 ~ onMounted ~ ","Fully Loaded"),f().valid){r.push("/");return}f().$subscribe((u,s)=>{s.valid&&(console.log("\u{1F680} ~ file: login.vue ~ line 84 ~ useSession ~ state.valid",s.valid),r.push("/"))}),o.connected||(o.isConnecting?o.$subscribe((u,s)=>{s.isConnecting===!1&&s.connected==!1&&r.push("/")}):r.push("/")),g.$subscribe((u,s)=>{console.log("\u{1F680} ~ file: login.vue ~ line 100 ~ auth.$subscribe ~ state",s.updating)})}),(u,s)=>{const m=O,R=Q,T=W,M=Z,N=H,y=X,P=I;return l(f)().valid?(_(),p(m,{key:0,class:"w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12",rounded:"rounded-lg"},{default:i(()=>[ee]),_:1})):l(o).isConnecting||l(g).updating?(_(),p(m,{key:1,class:"w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12",rounded:"rounded-lg"},{default:i(()=>[a("div",oe,[se,a("p",null,K(l(o).apiAddress),1)])]),_:1})):l(o).connected?(_(),p(m,{key:2,class:Y(["w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12",v.value?"shaker":""]),rounded:"rounded-lg",form:"",onSubmit:G(B,["prevent"])},{default:i(()=>[t(T,{label:"Password",help:"Please enter your password"},{default:i(()=>[t(R,{modelValue:l(e).pass,"onUpdate:modelValue":s[0]||(s[0]=b=>l(e).pass=b),icon:"mdi:asterisk",type:"password",name:"password",autocomplete:"current-password",error:c.value},null,8,["modelValue","error"])]),_:1}),t(M,{modelValue:l(e).remember,"onUpdate:modelValue":s[1]||(s[1]=b=>l(e).remember=b),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),t(N),t(P,null,{default:i(()=>[t(y,{type:"submit",color:"info",label:"Login",loading:d.value},null,8,["loading"]),t(y,{to:"/",color:"info",outline:"",label:"Back"})]),_:1})]),_:1},8,["class","onSubmit"])):(_(),p(m,{key:3,class:"w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12",rounded:"rounded-lg"},{default:i(()=>[ne]),_:1}))}}}));typeof F=="function"&&F(te);export{te as default};