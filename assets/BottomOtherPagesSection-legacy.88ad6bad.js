System.register(["./vendor-legacy.010102a1.js","./index-legacy.a10deaaf.js"],(function(t){"use strict";var e,s,l,a,n,o,i,r,u,m,c,x,p,f,d,h;return{setters:[function(t){e=t.o,s=t.e,l=t.f,a=t.n,n=t.P,o=t.r,i=t.c,r=t.w,u=t.q,m=t.a,c=t.A,x=t.F,p=t.s,f=t.t,d=t.p},function(t){h=t.g}],execute:function(){const y={key:1,class:"text-2xl text-on-main-muted"},b=t("_",{props:{custom:Boolean,first:Boolean,last:Boolean},setup:t=>(n,o)=>(e(),s("section",{class:a(["px-6 py-24 text-center lg:px-0 lg:max-w-2xl lg:mx-auto",{"-mb-6":t.first,"-mt-6":t.last,"-my-6":!t.first&&!t.last}])},[t.custom?l(n.$slots,"default",{key:0}):(e(),s("h1",y,[l(n.$slots,"default")]))],2))}),g={class:"flex flex-col items-center justify-center mb-12 text-2xl md:flex-row text-on-main-muted"},k=u("span",{class:"md:mr-3"},"Please star this project on",-1),j={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-primary",target:"_blank"},w=u("span",null,"GitHub",-1),v={class:"mb-12 text-2xl text-on-main-muted"},_=p(" Check out other components and layouts at"),B=u("br",null,null,-1),P=p(" , "),G=u("br",null,null,-1),R=p(" screen samples "),$=u("h1",{class:"text-2xl text-on-main-muted"},[p(" Get more with "),u("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-primary"},"Premium version")],-1);t("a",{setup(t){const l=n().getRoutes(),a=[];for(const e in l){const t=l[e].path,s=l[e].meta&&l[e].meta.title?l[e].meta.title:null;s&&a.push({path:t,title:s})}return(t,l)=>{const n=h,y=o("RouterLink"),q=b;return e(),i(q,{last:""},{default:r((()=>[u("h1",g,[k,u("a",j,[m(n,{icon:"mdi:github",class:"mr-1 text-4xl"}),w])]),u("h1",v,[_,B,(e(),s(x,null,c(a,((t,l)=>(e(),s(x,{key:t.path},[m(y,{to:t.path,class:"text-primary"},{default:r((()=>[p(f(t.title),1)])),_:2},1032,["to"]),l+1<a.length?(e(),s(x,{key:0},[P],64)):d("",!0)],64)))),64)),G,R]),$])),_:1})}}})}}}));