(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{FzSR:function(e,a,t){"use strict";t.r(a);t("P0Cl");var c=t("oB33"),n=t("cO38"),s=t.n(n),r=t("xwgP"),o=t.n(r),l=t("YCKj"),m=t("AP5n"),d=t("FaU5"),i=t("XWyc"),_=t.n(i),p=t("0r0m"),u=t.n(p),E=t("erlh"),N=function(e){var a=e.product;return Object(r["useEffect"])(()=>{},[]),o.a.createElement("div",{className:_.a.productCar,onClick:()=>{"soldOut"!=a.state&&u.a.push("/detail?productionCode=".concat(a.productionCode,"&id=").concat(a.id))}},o.a.createElement("div",{className:_.a.avadarBox},"soldOut"==a.state?o.a.createElement("img",{className:_.a.avadar,src:t("wljE"),alt:""}):o.a.createElement("img",{className:_.a.avadar,src:a.productionUrl,alt:""}),"soldOut"==a.state?"":o.a.createElement("p",{className:_.a.time},"\u5269\u4f59",Object(E["c"])(a.endDate).day,"\u5929")),o.a.createElement("p",{className:_.a.name},a.productionName),o.a.createElement("div",{className:_.a.bottom},o.a.createElement("div",{className:_.a.priceBox},o.a.createElement("span",{className:_.a.dot},"\uffe5"),o.a.createElement("span",{className:_.a.price},a.discountPrice/100),o.a.createElement("span",{className:_.a.acountPrice},"\uffe5",a.price/100)),o.a.createElement("span",{className:_.a.sale},"\u5df2\u552e",a.totalSalesAmount)))};function f(e){var a=e.location.query.merchantCode,t=Object(r["useState"])({}),n=s()(t,2),m=n[0],i=n[1],p=Object(r["useState"])([]),u=s()(p,2),E=u[0],f=u[1],v=Object(r["useState"])(0),h=s()(v,2),b=h[0],x=h[1],O=Object(r["useState"])(0),j=s()(O,2),B=j[0],C=j[1];function g(e){console.log(E,"==="),Object(l["D"])({merchantCode:a,pageSize:"10",pageNum:e,lable01:"",sortType:""}).then(a=>{if(1200!=a.code)return c["a"].info("\u6570\u636e\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01");f(E.concat(a.data.records)),x(e)})}return Object(r["useEffect"])(()=>{Object(l["s"])(a).then(e=>{if(1200!=e.code)return c["a"].info("\u6570\u636e\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01");i(e.data)}),Object(l["D"])({merchantCode:a,pageSize:"10",pageNum:"0",lable01:"",sortType:""}).then(e=>{if(1200!=e.code)return c["a"].info("\u6570\u636e\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01");f(e.data.records),C(e.data.total)})},[]),o.a.createElement("div",{className:_.a.app},o.a.createElement("div",{className:_.a.header},o.a.createElement("div",{className:_.a.top},o.a.createElement("div",{className:_.a.search},o.a.createElement("span",{className:"iconfont icon-sousuo",style:{fontSize:"40px",marginRight:"20px"}}),o.a.createElement("input",{type:"text",placeholder:"\u8bd5\u8bd5\u641c\u7d22\u5546\u54c1\u540d"})),o.a.createElement("a",{className:_.a.iconBtn,href:"tel: "+m.merchantPhone},o.a.createElement("span",{className:"iconfont icon-dianhua",style:{color:"#fff",fontSize:"55px"}}),o.a.createElement("span",{className:_.a.text},"\u5546\u5bb6"))),o.a.createElement("div",{className:_.a.middle},o.a.createElement("img",{className:_.a.avadar,src:m.mainPicUrl,alt:""}),o.a.createElement("div",{className:_.a.info},o.a.createElement("div",{className:_.a.nameBox},o.a.createElement("span",{className:_.a.name},m.merchantName),o.a.createElement("span",{className:_.a.pay},"\u4eba\u5747\u6d88\u8d39",m.avgConsum/100)),o.a.createElement("div",{className:_.a.addAdate},o.a.createElement("span",{className:"iconfont "}),o.a.createElement("span",null,m.address)),o.a.createElement("div",{className:_.a.addAdate},o.a.createElement("span",{className:"iconfont "}),o.a.createElement("span",null,"\u8425\u4e1a\u65f6\u95f4\uff1a",m.businessTime))))),o.a.createElement(d["a"],{data:E,getMoreData:()=>{g(b+1)},maxData:B,className:_.a.content},E.map((e,a)=>{return o.a.createElement(N,{product:e})})))}a["default"]=Object(m["c"])(e=>{var a=e.user;return{userInfo:a.currentUser,openId:a.openid}})(f)},XWyc:function(e,a,t){e.exports={app:"app___23tO7",header:"header___1h8WB",top:"top___217le",search:"search___uc2md",iconBtn:"iconBtn___1AAFe",text:"text___19y94",middle:"middle___1JWzj",avadar:"avadar___s0AB_",info:"info___1bA-M",nameBox:"nameBox___MDCDR",name:"name___AvpKv",pay:"pay___27hyu",addAdate:"addAdate___1FFnp",tabs:"tabs___1RjFU",active:"active___2IC-9",content:"content___14sqV",productCar:"productCar___3v1ne",avadarBox:"avadarBox___1lgtw",time:"time___Nq53X",bottom:"bottom___2r4kW",priceBox:"priceBox___JkziC",price:"price___2GTtf",dot:"dot___LvsZk",acountPrice:"acountPrice___1-rN_",sale:"sale___defM3"}}}]);