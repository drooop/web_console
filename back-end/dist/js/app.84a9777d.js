(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"10af":function(e,t,r){},"1ab3":function(e,t,r){},"4a2f":function(e,t,r){e.exports=r.p+"img/yhl.594caa25.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],s={name:"app"},i=s,l=r("2877"),c=Object(l["a"])(i,a,o,!1,null,null,null),u=c.exports,m=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login_container",attrs:{id:"app"}},[r("div",{staticClass:"login_box"},[e._m(0),r("el-form",{ref:"loginFormRef",staticClass:"login_form",attrs:{model:e.login_form,rules:e.loginFormRules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user-solid"},model:{value:e.login_form.username,callback:function(t){e.$set(e.login_form,"username",t)},expression:"login_form.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password"},model:{value:e.login_form.password,callback:function(t){e.$set(e.login_form,"password",t)},expression:"login_form.password"}})],1),r("el-form-item",{staticClass:"btns"},[r("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),r("el-button",{attrs:{type:"info"},on:{click:e.resetLoginForm}},[e._v("重置")])],1)],1)],1)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"avatar_box"},[n("img",{attrs:{src:r("4a2f"),alt:""}})])}],p=(r("96cf"),r("1da1")),g={data:function(){return{login_form:{username:"yhlUser",password:"TQcps123"},loginFormRules:{username:[{required:!0,message:"please input username",trigger:"blur"},{min:3,max:10,message:"length of username between 3-10",trigger:"blur"}],password:[{required:!0,message:"please input password",trigger:"blur"},{min:6,max:15,message:"length of username between 6-15",trigger:"blur"}]}}},methods:{resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},login:function(){var e=this;this.$refs.loginFormRef.validate(function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("http://localhost:81/api/login",e.login_form);case 4:if(n=t.sent,a=n.data,200==a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("login failed"));case 8:e.$message.success("login success"),window.sessionStorage.setItem("token",a.data.token),e.$router.push("/home");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},v=g,_=(r("6a76"),Object(l["a"])(v,d,f,!1,null,"4293b8d4",null)),h=_.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"home-container"},[n("el-header",[n("div",[n("img",{attrs:{src:r("4a2f")}}),n("span",[e._v("云海流CPS工业互联网平台")])]),n("el-button",{attrs:{type:"info"},on:{click:e.logout}},[e._v("退出")])],1),n("el-container",[n("el-aside",{attrs:{width:e.isCollapse?"64px":"200px"}},[n("div",{staticClass:"toggle-button",on:{click:e.toggleCollapse}},[e._v(" ||| ")]),n("el-menu",{attrs:{"background-color":"#333744","text-color":"#fff","active-text-color":"#409EFF","unique-opened":"",collapse:e.isCollapse,"collapse-transition":!1,router:""}},e._l(e.menuList,(function(t){return n("el-submenu",{key:t.id,attrs:{index:t.id+""}},[n("template",{slot:"title"},[n("i",{class:e.iconsObj[t.id]}),n("span",[e._v(e._s(t.authName))])]),e._l(t.children,(function(t){return n("el-menu-item",{key:t.id,attrs:{index:"/"+t.path}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",[e._v(e._s(t.authName))])])],2)}))],2)})),1)],1),n("el-main",[n("router-view")],1)],1)],1)},x=[],w={created:function(){this.getMenuList()},data:function(){return{menuList:[],iconsObj:{1:"el-icon-s-platform",2:"el-icon-loading"},isCollapse:!1}},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},getMenuList:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("http://localhost:81/api/menus");case 2:if(r=t.sent,n=r.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("res.meta.msg"));case 6:e.menuList=n.data,console.log(n.data);case 8:case"end":return t.stop()}}),t)})))()},toggleCollapse:function(){this.isCollapse=!this.isCollapse}}},C=w,M=(r("a3f9"),Object(l["a"])(C,b,x,!1,null,"5ca4a1fc",null)),k=M.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Welcome to Wavelet World!")])])}],y={},R=y,S=Object(l["a"])(R,$,D,!1,null,"0b85ade8",null),O=S.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("虚拟工位控制台")]),r("el-form",{ref:"generateCMDFormRef",attrs:{model:e.cmd_form,rules:e.generateCMDFormRules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"virtualStationUrl"}},[r("el-input",{attrs:{placeholder:"请输入虚拟工位微服务地址",clearable:""},model:{value:e.cmd_form.virtualStationUrl,callback:function(t){e.$set(e.cmd_form,"virtualStationUrl",t)},expression:"cmd_form.virtualStationUrl"}},[r("template",{slot:"prepend"},[e._v("URL")])],2)],1),r("el-form-item",{attrs:{prop:"virtualStationCMD"}},[r("el-input",{attrs:{placeholder:"请输入微服务的可执行命令代码",clearable:""},model:{value:e.cmd_form.virtualStationCMD,callback:function(t){e.$set(e.cmd_form,"virtualStationCMD",t)},expression:"cmd_form.virtualStationCMD"}},[r("template",{slot:"prepend"},[e._v("命令")])],2)],1),r("el-form-item",{attrs:{prop:"cmdMethod"}},[r("el-radio",{attrs:{label:"get"},model:{value:e.cmd_form.cmdMethod,callback:function(t){e.$set(e.cmd_form,"cmdMethod",t)},expression:"cmd_form.cmdMethod"}},[e._v("get")]),r("el-radio",{attrs:{label:"post"},model:{value:e.cmd_form.cmdMethod,callback:function(t){e.$set(e.cmd_form,"cmdMethod",t)},expression:"cmd_form.cmdMethod"}},[e._v("post")])],1),r("el-form-item",{attrs:{prop:"trigger_sendCMD"}},[r("el-radio",{attrs:{label:"once"},model:{value:e.cmd_form.trigger_sendCMD,callback:function(t){e.$set(e.cmd_form,"trigger_sendCMD",t)},expression:"cmd_form.trigger_sendCMD"}},[e._v(" 单次发送 ")]),r("el-radio",{attrs:{label:"repeat"},model:{value:e.cmd_form.trigger_sendCMD,callback:function(t){e.$set(e.cmd_form,"trigger_sendCMD",t)},expression:"cmd_form.trigger_sendCMD"}},[e._v(" 重复发送 ")])],1),r("el-form-item",{attrs:{prop:"CMDIntervalTime"}},[r("el-input",{directives:[{name:"show",rawName:"v-show",value:"repeat"===e.cmd_form.trigger_sendCMD,expression:"cmd_form.trigger_sendCMD === 'repeat'"}],attrs:{placeholder:"请输入重复发送命令时的时间间隔",clearable:""},model:{value:e.cmd_form.CMDIntervalTime,callback:function(t){e.$set(e.cmd_form,"CMDIntervalTime",t)},expression:"cmd_form.CMDIntervalTime"}},[r("template",{slot:"append"},[e._v("秒")])],2)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.sendCMD}},[e._v("发送命令")]),r("el-button",{attrs:{type:"info"},on:{click:e.resetForm}},[e._v("重置")])],1),r("el-form-item",{attrs:{prop:"cmdResponse"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:15},placeholder:"请输入内容"},model:{value:e.cmd_form.cmdResponse,callback:function(t){e.$set(e.cmd_form,"cmdResponse",t)},expression:"cmd_form.cmdResponse"}})],1)],1)],1)},I=[],F={data:function(){return{cmd_form:{virtualStationUrl:"http://localhost:81/api/s1",virtualStationCMD:"start",trigger_sendCMD:"once",CMDIntervalTime:3,cmdResponse:"",cmdMethod:"get"},generateCMDFormRules:{virtualStationUrl:[{required:!0,message:"please input url",trigger:"blur"}],virtualStationCMD:[{required:!0,message:"please input cmd",trigger:"blur"}],CMDIntervalTime:[{min:1,max:15,message:"intervalTime must in [1s, 15s]",trigger:"blur"}],trigger_sendCMD:[],cmdResponse:[],cmdMethod:[]},timerId:null}},methods:{sendCMD:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,s,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r={cmd:e.cmd_form.virtualStationCMD},"post"!==e.cmd_form.cmdMethod){t.next=17;break}if("once"!==e.cmd_form.trigger_sendCMD){t.next=13;break}return t.next=5,e.$http.post(e.cmd_form.virtualStationUrl,r);case 5:if(n=t.sent,a=n.data,200==a.meta.status){t.next=9;break}return t.abrupt("return",e.$message.error("login failed"));case 9:e.$message.success("login success"),e.cmd_form.cmdResponse+="ResponseData:\n"+JSON.stringify(a.data)+"\n\n\n",t.next=15;break;case 13:o=e,e.timerId=setInterval(Object(p["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.$http.post(e.cmd_form.virtualStationUrl,r);case 2:if(n=t.sent,a=n.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",o.$message.error(a.meta.msg));case 6:o.$message.success(a.meta.msg),o.cmd_form.cmdResponse+="ResponseData:\n"+JSON.stringify(a.data)+"\n\n\n";case 8:case"end":return t.stop()}}),t)}))),1e3*o.cmd_form.CMDIntervalTime);case 15:t.next=30;break;case 17:if("repeat"!==e.cmd_form.trigger_sendCMD){t.next=22;break}s=e,e.timerId=setInterval(Object(p["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.$http.get(e.cmd_form.virtualStationUrl,e.cmd_form.virtualStationCMD);case 2:if(r=t.sent,n=r.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",s.$message.error(n.meta.msg));case 6:s.$message.success(n.meta.msg),s.cmd_form.cmdResponse+="ResponseData:\n"+JSON.stringify(n.data)+"\n\n\n";case 8:case"end":return t.stop()}}),t)}))),1e3*s.cmd_form.CMDIntervalTime),t.next=30;break;case 22:return t.next=24,e.$http.get(e.cmd_form.virtualStationUrl,{params:r});case 24:if(i=t.sent,l=i.data,200===l.meta.status){t.next=28;break}return t.abrupt("return",e.$message.error(l.meta.msg));case 28:e.$message.success(l.meta.msg),e.cmd_form.cmdResponse+="ResponseData:\n"+JSON.stringify(l.data)+"\n\n\n";case 30:case"end":return t.stop()}}),t)})))()},resetForm:function(){this.timerId&&clearInterval(this.timerId),this.$refs.generateCMDFormRef.resetFields()}}},T=F,U=Object(l["a"])(T,j,I,!1,null,"01ad6ced",null),E=U.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("This is Config of WebConsole")])])}],N={},q=N,J=Object(l["a"])(q,L,P,!1,null,"5afaa816",null),W=J.exports;n["default"].use(m["a"]);var z=[{path:"/",redirect:"/login"},{path:"/login",component:h},{path:"/home",component:k,redirect:"/welcome",children:[{path:"/welcome",component:O},{path:"/consoleMain",component:E},{path:"/consoleConfig",component:W}]}],A=new m["a"]({routes:z});A.beforeEach((function(e,t,r){if("/login"===e.path)return r();var n=window.sessionStorage.getItem("token");if(!n)return r("/login");r()}));var Q=A,B=(r("0fb7"),r("450d"),r("f529")),G=r.n(B),H=(r("1951"),r("eedf")),K=r.n(H),V=(r("425f"),r("4105")),X=r.n(V),Y=(r("eca7"),r("3787")),Z=r.n(Y),ee=(r("10cb"),r("f3ad")),te=r.n(ee),re=(r("adec"),r("3d2d")),ne=r.n(re),ae=(r("a673"),r("7b31")),oe=r.n(ae),se=(r("a769"),r("5cc3")),ie=r.n(se),le=(r("de31"),r("c69e")),ce=r.n(le),ue=(r("4ca3"),r("443e")),me=r.n(ue),de=(r("ce18"),r("f58e")),fe=r.n(de),pe=(r("8bd8"),r("4cb2")),ge=r.n(pe),ve=(r("34db"),r("3803")),_e=r.n(ve),he=(r("b5d8"),r("f494")),be=r.n(he);n["default"].use(K.a).use(X.a).use(Z.a).use(te.a).use(ne.a).use(oe.a).use(ie.a).use(ce.a).use(me.a).use(fe.a).use(ge.a).use(_e.a).use(be.a),n["default"].prototype.$message=G.a;r("10af");var xe=r("bc3a"),we=r.n(xe);n["default"].config.productionTip=!1,we.a.defaults.baseURL="",we.a.interceptors.request.use((function(e){return e.headers.Authorization=window.sessionStorage.getItem("token"),e})),n["default"].prototype.$http=we.a,new n["default"]({router:Q,render:function(e){return e(u)}}).$mount("#app")},"60ee":function(e,t,r){},"6a76":function(e,t,r){"use strict";var n=r("60ee"),a=r.n(n);a.a},a3f9:function(e,t,r){"use strict";var n=r("1ab3"),a=r.n(n);a.a}});
//# sourceMappingURL=app.84a9777d.js.map