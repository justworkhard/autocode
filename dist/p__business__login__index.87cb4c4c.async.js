(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{KO7S:function(e,a,t){e.exports={inputBox:"inputBox___3PnGp",header:"header___1owvI",pw:"pw___2Wfpa",checkBox:"checkBox___gZHG7",btn:"btn___3b2Vf",login:"login___3L_JM",apple:"apple___qdjtg",tip:"tip___1jQLo"}},gL5T:function(e,a,t){"use strict";t.r(a);t("P0Cl");var n=t("oB33"),c=t("mK77"),l=t.n(c),r=t("cO38"),s=t.n(r),p=t("xwgP"),o=t.n(p),i=t("AP5n"),m=t("0r0m"),u=t.n(m),d=t("YCKj"),_=t("KO7S"),h=t.n(_),E=t("oUqH");function g(e){var a=Object(p["useState"])(""),c=s()(a,2),r=c[0],i=c[1],m=Object(p["useState"])(""),_=s()(m,2),g=_[0],b=_[1],v=Object(p["useState"])(!1),x=s()(v,2),N=(x[0],x[1],Object(p["useState"])("")),f=s()(N,2),w=f[0],j=f[1],O=e.dispatch;function C(){Object(d["q"])({userName:r,password:g,merchantCode:w}).then(e=>{1200==e.code?(O({type:"user/fetchCurrent",payload:l()({},e.data)}),u.a.push("/business/card")):n["a"].info(e.msg)})}return o.a.createElement("div",{className:h.a.app},o.a.createElement("div",{className:h.a.header,style:{background:"url(".concat(t("Fzwr"),") center center /  100% 100% no-repeat")}},o.a.createElement("p",null,"\u767b\u5f55"),o.a.createElement("p",null,"Welcome")),o.a.createElement("div",{className:h.a.inputBox},o.a.createElement("span",{className:h.a.title},"\u8d26\u53f7"),o.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",onChange:e=>{i(e.target.value)}})),o.a.createElement("div",{className:h.a.inputBox},o.a.createElement("span",{className:h.a.title},"\u5bc6\u7801"),o.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onChange:e=>{b(e.target.value)}})),o.a.createElement("div",{className:h.a.inputBox},o.a.createElement("span",{className:h.a.title},"\u5546\u6237\u53f7"),o.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u5546\u6237\u53f7",onChange:e=>{j(e.target.value)}})),o.a.createElement("div",{className:h.a.pw},o.a.createElement("span",null,"\u5fd8\u8bb0\u5bc6\u7801\uff1f")),o.a.createElement("p",{className:"".concat(h.a.btn," ").concat(h.a.login),onClick:Object(E["throttle"])(C,2e3)},"\u767b\u5f55"),o.a.createElement("p",{className:"".concat(h.a.btn," ").concat(h.a.apple),onClick:()=>{u.a.push("/business/apply")}},"\u5165\u9a7b\u7533\u8bf7"),o.a.createElement("div",{className:h.a.tip},o.a.createElement("span",{className:"iconfont icon-iconfontgantanhao4",style:{fontSize:"28px",marginRight:"20px",color:"#999"}}),o.a.createElement("span",null,"\u70b9\u51fb\u5165\u9a7b\u7533\u8bf7\u6309\u94ae\uff0c\u6ce8\u518c\u6210\u4e3a\u65b0\u5546\u6237")))}a["default"]=Object(i["c"])(e=>{var a=e.user;return{userInfo:a.currentUser}})(g)}}]);