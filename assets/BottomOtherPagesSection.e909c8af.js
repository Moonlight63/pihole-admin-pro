import{o as t,e,f as s,n as a,P as l,r,c as n,w as o,q as i,a as u,A as m,F as x,s as c,t as p,p as f}from"./vendor.b321879e.js";import{g as h}from"./index.45797eaf.js";const d={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"},g={props:{custom:Boolean,first:Boolean,last:Boolean},setup:l=>(r,n)=>(t(),e("section",{class:a(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":l.first,"-mt-6":l.last,"-my-6":!l.first&&!l.last}])},[l.custom?s(r.$slots,"default",{key:0}):(t(),e("h1",d,[s(r.$slots,"default")]))],2))},b={class:"flex flex-col items-center justify-center mb-12 text-2xl text-gray-500 md:flex-row dark:text-gray-400"},y=i("span",{class:"md:mr-3"},"Please star this project on",-1),k={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-500",target:"_blank"},j=i("span",null,"GitHub",-1),w={class:"mb-12 text-2xl text-gray-500 dark:text-gray-400"},v=c(" Check out other components and layouts at"),_=i("br",null,null,-1),B=c(" , "),P=i("br",null,null,-1),G=c(" screen samples "),R=i("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[c(" Get more with "),i("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-500"},"Premium version")],-1),$={setup(s){const a=l().getRoutes(),d=[];for(const t in a){const e=a[t].path,s=a[t].meta&&a[t].meta.title?a[t].meta.title:null;s&&d.push({path:e,title:s})}return(s,a)=>{const l=h,$=r("RouterLink"),q=g;return t(),n(q,{last:""},{default:o((()=>[i("h1",b,[y,i("a",k,[u(l,{icon:"mdi:github",class:"mr-1 text-4xl"}),j])]),i("h1",w,[v,_,(t(),e(x,null,m(d,((s,a)=>(t(),e(x,{key:s.path},[u($,{to:s.path,class:"text-blue-500"},{default:o((()=>[c(p(s.title),1)])),_:2},1032,["to"]),a+1<d.length?(t(),e(x,{key:0},[B],2112)):f("v-if",!0)],64)))),64)),P,G]),R])),_:1})}}};export{g as _,$ as a};