System.register(["./vendor-legacy.010102a1.js"],(function(e){"use strict";var l,t,a,s,n,u,o,r,c,p,d,i,m,b,y;return{setters:[function(e){l=e.j,t=e.o,a=e.e,s=e.F,n=e.A,u=e.n,o=e.x,r=e.J,c=e.u,p=e.q,d=e.G,i=e.t,m=e.Q,b=e.p,y=e.f}],execute:function(){const f=["type","name","value"],g=p("span",{class:"check"},null,-1),x={class:"control-label"},h=(e("a",{props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup(e,{emit:m}){const b=e,y=l({get:()=>b.modelValue,set:e=>{m("update:modelValue",e)}}),h=l((()=>"radio"===b.type?"radio":"checkbox"));return(l,m)=>(t(),a("div",{class:u(["flex flex-wrap justify-start -mb-3",{"flex-col":e.column}])},[(t(!0),a(s,null,n(e.options,((l,s)=>(t(),a("label",{key:s,class:u([e.type,"mb-3 mr-6 last:mr-0"])},[o(p("input",{"onUpdate:modelValue":m[0]||(m[0]=e=>d(y)?y.value=e:null),type:c(h),name:e.name,value:s},null,8,f),[[r,c(y)]]),g,p("span",x,i(l),1)],2)))),128))],2))}}),{class:"mb-6 last:mb-0"}),v={key:0,class:"block mb-2 font-bold"},k={key:1,class:"mt-1 text-xs text-on-main-muted"};e("_",{props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const s=m(),n=l((()=>{const e=[],l=s.default().length;return l>1&&e.push("grid grid-cols-1 gap-3"),2===l&&e.push("md:grid-cols-2"),e}));return(l,s)=>(t(),a("div",h,[e.label?(t(),a("label",v,i(e.label),1)):b("",!0),p("div",{class:u(c(n))},[y(l.$slots,"default")],2),e.help?(t(),a("div",k,i(e.help),1)):b("",!0)]))}})}}}));
