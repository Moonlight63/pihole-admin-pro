System.register(["./vendor-legacy.bd7b00c3.js","./index-legacy.b16af19b.js"],(function(e){"use strict";var r,n,t,l,o,i,a,s,d,u,c,f;return{setters:[function(e){r=e.S,n=e.j,t=e.r,l=e.o,o=e.c,i=e.w,a=e.n,s=e.u,d=e.p,u=e.a},function(e){c=e.u,f=e.f}],execute:function(){e("default",{setup(e){const v=r(),g=n((()=>{const e=v.meta.bg;return["login","error"].includes(e)?e:"error"})),w=c(),p=n((()=>w.darkMode)),b=n((()=>{var e;return null!==(e={login:"bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500",loginDark:"bg-gradient-to-tr from-purple-900 via-pink-900 to-red-900",error:"bg-gradient-to-tr from-pink-400 via-red-500 to-yellow-500",errorDark:"bg-gradient-to-tr from-pink-900 via-red-900 to-yellow-900"}[p.value?`${g.value}Dark`:g.value])&&void 0!==e?e:""}));return(e,r)=>{const n=t("RouterView"),c=f;return l(),o(c,{class:a(["flex items-center justify-center h-screen",s(b)])},{default:i((()=>[d(' <div class="flex justify-center">\n    <div\n      class="relative w-full h-screen overflow-hidden shadow-xl shadow-black"\n    >\n      <div class="absolute top-0 left-0 w-full h-full transition-position">\n        <div class="w-full h-full"> '),u(n),d(" </div>\n      </div>\n    </div>\n  </div> "),d(' <slot\n      card-class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"\n      card-rounded="rounded-lg"\n    /> ')])),_:1},8,["class"])}}})}}}));