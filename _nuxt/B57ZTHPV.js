import{e as _,o as r,c as i,a as t,j as p,p as u,d as h,t as l,u as o}from"./8BCLQuMx.js";const v={class:"loader-wrap"},L={__name:"Loader",setup(c){return _(()=>{const e=document.getElementById("svg"),a=gsap.timeline(),s="M0 502S175 272 500 272s500 230 500 230V0H0Z",d="M0 2S175 1 500 1s500 1 500 1V0H0Z";a.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),a.to(e,{duration:.5,attr:{d:s},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d},ease:"power2.easeOut"}),a.to(".loader-wrap",{y:-1500}),a.to(".loader-wrap",{zIndex:-1,display:"none"}),a.from("header",{y:200},"-=1.5"),a.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}),(e,a)=>(r(),i("div",v,a[0]||(a[0]=[t("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none"},[t("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z",fill:"#315d64"})],-1),t("div",{class:"loader-wrap-heading"},[t("span",null,[t("h2",{class:"load-text"},[t("span",null,"L"),t("span",null,"o"),t("span",null,"a"),t("span",null,"d"),t("span",null,"i"),t("span",null,"n"),t("span",null,"g")])])],-1)])))}},m={id:"home_wave"},M={__name:"Waves",setup(c){_(()=>{e()});async function e(){const a=(await p(async()=>{const{default:s}=await import("./DNEmjcJg.js");return{default:s}},[],import.meta.url)).default;a()}return(a,s)=>(r(),i("div",m))}},S=u("/assets/imgs/gabrielavvb-white.png"),g="gabrielavvb",f="https://gabrielavvb.github.io/",y="Copyright © 2023 All right reserved",n={theme_author:g,author_link:f,copyright:y},w={class:"pt-30 pb-30"},b={class:"container"},x={class:"row"},k={class:"col-12"},A={class:"text-center"},V={class:"fz-13"},B={class:"underline main-color"},E=["href"],$={__name:"Footer",setup(c){return(e,a)=>(r(),i("footer",w,[t("div",b,[t("div",x,[t("div",k,[t("div",A,[t("p",V,[h(l(o(n).copyright)+" ",1),t("span",B,[t("a",{href:o(n).author_link,target:"_blank"},l(o(n).theme_author),9,E)])])])])])])]))}};export{L as _,M as a,$ as b,S as c};
