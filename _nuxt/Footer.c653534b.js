import{f as l,o as n,c as r,a as t,l as p,d as h,t as _,i as a}from"./entry.b876faf3.js";const u={class:"loader-wrap"},m=t("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none"},[t("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z",fill:"#315d64"})],-1),v=t("div",{class:"loader-wrap-heading"},[t("span",null,[t("h2",{class:"load-text"},[t("span",null,"L"),t("span",null,"o"),t("span",null,"a"),t("span",null,"d"),t("span",null,"i"),t("span",null,"n"),t("span",null,"g")])])],-1),g=[m,v],M={__name:"Loader",setup(i){return l(()=>{const s=document.getElementById("svg"),e=gsap.timeline(),c="M0 502S175 272 500 272s500 230 500 230V0H0Z",d="M0 2S175 1 500 1s500 1 500 1V0H0Z";e.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),e.to(s,{duration:.5,attr:{d:c},ease:"power2.easeIn"}).to(s,{duration:.5,attr:{d},ease:"power2.easeOut"}),e.to(".loader-wrap",{y:-1500}),e.to(".loader-wrap",{zIndex:-1,display:"none"}),e.from("header",{y:200},"-=1.5"),e.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}),(s,e)=>(n(),r("div",u,g))}},f={id:"home_wave"},S={__name:"Waves",setup(i){l(()=>{s()});async function s(){const e=(await p(()=>import("./waves.d0444a6d.js"),[],import.meta.url)).default;e()}return(e,c)=>(n(),r("div",f))}},H=""+globalThis.__publicAssetsURL("assets/imgs/gabrielavvb-white.png"),y="gabrielavvb",w="https://gabrielavvb.github.io/",b="Copyright © 2023 All right reserved",o={theme_author:y,author_link:w,copyright:b},x={class:"pt-30 pb-30"},$={class:"container"},k={class:"row"},A={class:"col-12"},V={class:"text-center"},B={class:"fz-13"},E={class:"underline main-color"},I=["href"],R={__name:"Footer",setup(i){return(s,e)=>(n(),r("footer",x,[t("div",$,[t("div",k,[t("div",A,[t("div",V,[t("p",B,[h(_(a(o).copyright)+" ",1),t("span",E,[t("a",{href:a(o).author_link,target:"_blank"},_(a(o).theme_author),9,I)])])])])])])]))}};export{M as _,S as a,R as b,H as c};