(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{UCX4:function(e,a,t){"use strict";t.r(a);t("AkY+");var r=t("bDmX"),c=(t("P0Cl"),t("oB33")),l=t("cO38"),s=t.n(l),o=t("xwgP"),n=t.n(o),m=t("YCKj"),i=t("kuL8"),d=t.n(i),_=t("8XlX"),p=t.n(_);a["default"]=function(e){var a=e.location.query,t=a.id,l=a.orderCode,i=a.mapUserCardNo,_=Object(o["useState"])(0),u=s()(_,2),N=u[0],E=u[1],h=Object(o["useState"])({qrCodeDetailDataList:[{}],mallProductions:{},merchantsDetailData:{merchants:{merchantName:""}}}),v=s()(h,2),w=v[0],f=v[1];return Object(o["useEffect"])(()=>{Object(m["u"])({id:t,orderCode:l,mapUserCardNo:i}).then(e=>{if(1200!=e.code)return c["a"].info("\u6570\u636e\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01");f(e.data)})},[]),n.a.createElement("div",{className:d.a.showT},n.a.createElement("div",{className:d.a.product},n.a.createElement("p",{className:"".concat(d.a.shopName," ").concat(p.a.oneLineEllipsis)},w.merchantsDetailData.merchants.merchantName,"   ",n.a.createElement("span",{className:"iconfont icon-qianjin",style:{fontSize:"28px"}})),n.a.createElement("div",{className:d.a.infoBox},n.a.createElement("img",{src:w.mallProductions.productionUrl,alt:""}),n.a.createElement("p",{className:d.a.productName},w.mallProductions.productionName),n.a.createElement("p",{className:d.a.price},"\uffe5",w.mallProductions.discountPrice/100))),n.a.createElement("div",{className:d.a.top},n.a.createElement("div",{className:d.a.header},n.a.createElement("span",{style:{fontSize:"32px",fontWeight:600,color:"#000"}},"\u5546\u54c1\u5238")),n.a.createElement("div",{className:d.a.tip},"\u53ef\u4f7f\u7528\uff08",w.qrCodeDetailDataList.length,"\u5f20\uff09| \u6709\u6548\u671f\u81f3",w.qrCodeDetailDataList[N].showEndDate),n.a.createElement("div",{className:d.a.content},n.a.createElement(r["a"],{className:d.a.spaceCarousel,frameOverflow:"visible",cellSpacing:20,slideWidth:.95,autoplay:!0,infinite:!0,dots:!1,beforeChange:(e,a)=>console.log("slide from ".concat(e," to ").concat(a)),afterChange:e=>{E(e)}},w.qrCodeDetailDataList.map((e,a)=>n.a.createElement("div",null,n.a.createElement("img",{className:d.a.qCode,src:e.qrCode}),n.a.createElement("p",{className:d.a.tCode},"\u5238\u7801\uff1a",e.cardNo),n.a.createElement("p",{className:d.a.warn},"\u672a\u5230\u5e97\u6d88\u8d39\u524d\u8bf7\u4e0d\u8981\u628a\u5238\u7801\u63d0\u4f9b\u7ed9\u5546\u5bb6")))))),n.a.createElement("div",{className:d.a.info},n.a.createElement("div",{className:d.a.header},n.a.createElement("p",{className:d.a.userdShop},"\u8ba2\u5355\u4fe1\u606f")),n.a.createElement("div",{className:d.a.orderInfo},n.a.createElement("div",{className:d.a.cell},n.a.createElement("span",{className:d.a.title},"\u8d2d\u4e70\u624b\u673a\u53f7\uff1a"),n.a.createElement("span",{className:d.a.value},w.orderQrShowData?w.orderQrShowData.tel:"")),n.a.createElement("div",{className:d.a.cell},n.a.createElement("span",{className:d.a.title},"\u4ed8\u6b3e\u65f6\u95f4\uff1a"),n.a.createElement("span",{className:d.a.value},w.orderQrShowData?w.orderQrShowData.payTime:"")),n.a.createElement("div",{className:d.a.cell},n.a.createElement("span",{className:d.a.title},"\u6570\u91cf\uff1a"),n.a.createElement("span",{className:d.a.value},w.orderQrShowData?w.orderQrShowData.quantity:"")),n.a.createElement("div",{className:d.a.cell},n.a.createElement("span",{className:d.a.title},"\u8ba2\u5355\u603b\u4ef7\uff1a"),n.a.createElement("span",{className:d.a.value},w.orderQrShowData?w.orderQrShowData.amount/100:"")),n.a.createElement("div",{className:d.a.cell},n.a.createElement("span",{className:d.a.title},"\u4fc3\u9500\u4f18\u60e0\uff1a"),n.a.createElement("span",{className:d.a.value},w.orderQrShowData?w.orderQrShowData.discount/100:0)),n.a.createElement("div",{className:d.a.cell},n.a.createElement("span",{className:d.a.title},"\u5b9e\u9645\u4ed8\u6b3e\uff1a"),n.a.createElement("span",{className:"".concat(d.a.value," ").concat(d.a.price)},w.orderQrShowData?w.orderQrShowData.actualPayment/100:"")))))}},kuL8:function(e,a,t){e.exports={showT:"showT___VVFqZ",product:"product___3qFQW",shopName:"shopName___2X8FX",infoBox:"infoBox___3A4uN",productName:"productName___1nep3",price:"price___3oqv_",top:"top___1D1cT",header:"header___7KmJi",sucess:"sucess___6wk5d",tip:"tip___M5SIb",qCode:"qCode___rbT1w",tCode:"tCode___2c08q",warn:"warn___3eq4M",info:"info___kpFgJ",more:"more___31zdG",userdShop:"userdShop___18nqM",addressBox:"addressBox___2uk8_",storeName:"storeName___lbw3O",cell:"cell___3RJtL",title:"title___utlqO",value:"value___2uLWQ",orderInfo:"orderInfo___2FwSG",content:"content___U5vTv"}}}]);