(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf587e6a"],{"0a49":function(t,e,r){var n=r("9b43"),i=r("626a"),a=r("4bf8"),o=r("9def"),c=r("cd1c");t.exports=function(t,e){var r=1==t,s=2==t,l=3==t,u=4==t,h=6==t,p=5==t||h,f=e||c;return function(e,c,d){for(var m,v,y=a(e),g=i(y),b=n(c,d,3),w=o(g.length),T=0,O=r?f(e,w):s?f(e,0):void 0;w>T;T++)if((p||T in g)&&(m=g[T],v=b(m,T,y),t))if(r)O[T]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return T;case 2:O.push(m)}else if(u)return!1;return h?-1:l||u?u:O}}},"0cc3":function(t,e,r){},1169:function(t,e,r){var n=r("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,a,o){try{var c=t[a](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function c(t){n(o,i,a,c,s,"next",t)}function s(t){n(o,i,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return i}))},3724:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player-wrap"},[t.loading?r("div",{staticClass:"player-loading"},[t._v("视频加载中...")]):t._e(),t._v(" "),t.rtcStream?[t.controls?[r("video",{attrs:{autoplay:"",controls:"",controlslist:"nodownload nofullscreen noremoteplayback",disablePictureInPicture:""},domProps:{srcObject:t.rtcStream}})]:[r("video",{attrs:{autoplay:""},domProps:{srcObject:t.rtcStream}})]]:t._e()],2)},i=[],a=(r("96cf"),r("1da1")),o=r("4ec3"),c={name:"WebrtcPlayer",rtcPeerConnection:null,data:function(){return{iceConnectionState:"",rtcPeerConnectionInit:!1,rtcStream:null,loading:!0}},props:{streamPath:{type:String,default:""},controls:{type:Boolean,default:!0}},created:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initRtcPeerConnection();case 2:if(console.log("initRtcPeerConnectioned"),!this.streamPath){t.next=10;break}return this.loading=!0,t.next=7,this.play(this.streamPath);case 7:this.loading=!1,console.log("played"),this.$emit("doPlayed");case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{initRtcPeerConnection:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new RTCPeerConnection,e.addTransceiver("video",{direction:"recvonly"}),e.addTransceiver("audio",{direction:"recvonly"}),e.onsignalingstatechange=function(t){console.log("onsignalingstatechange",t)},e.oniceconnectionstatechange=function(t){console.log("oniceconnectionstatechange",e.iceConnectionState)},e.onicecandidate=function(t){console.log("onicecandidate",t)},e.ontrack=function(t){console.log("ontrack",t),"video"===t.track.kind&&(n.rtcStream=t.streams[0])},t.next=9,e.createOffer();case 9:return r=t.sent,t.next=12,e.setLocalDescription(r);case 12:this.rtcPeerConnectionInit=!0,this.$options.rtcPeerConnection=e;case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),play:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=this.$options.rtcPeerConnection,n=r.localDescription.toJSON(),t.prev=2,t.next=5,Object(o["l"])(e,n);case 5:if(i=t.sent,console.log(i),!i.errmsg){t.next=11;break}return this.$message({type:"error",message:i.errmsg}),this.close(),t.abrupt("return");case 11:r.setRemoteDescription(new RTCSessionDescription({type:i.type,sdp:i.sdp})),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),console.error(t.t0);case 17:case"end":return t.stop()}}),t,this,[[2,14]])})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this.$options.rtcPeerConnection;t&&t.close()}},destroyed:function(){this.close()}},s=c,l=r("2877"),u=Object(l["a"])(s,n,i,!1,null,"1871937e",null);e["a"]=u.exports},"3dcc":function(t,e,r){"use strict";r("0cc3")},7514:function(t,e,r){"use strict";var n=r("5ca1"),i=r("0a49")(5),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(a)},"966e":function(t,e,r){"use strict";r("ad9b")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(R){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),o=new k(n||[]);return a._invoke=x(t,r,o),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(R){return{type:"throw",arg:R}}}t.wrap=l;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",m={};function v(){}function y(){}function g(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,T=w&&w(w(I([])));T&&T!==r&&n.call(T,a)&&(b=T);var O=g.prototype=v.prototype=Object.create(b);function P(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(i,a,o,c){var s=u(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,c)}))}c(s.arg)}var i;function a(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function x(t,e,r){var n=h;return function(i,a){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return C()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var c=j(o,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function I(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:C}}function C(){return{value:e,done:!0}}return y.prototype=O.constructor=g,g.constructor=y,y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},P(S.prototype),S.prototype[o]=function(){return this},t.AsyncIterator=S,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},P(O),s(O,c,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;_(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},ad9b:function(t,e,r){},caae:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:6}},[r("el-tree",{staticClass:"tree-block",attrs:{"default-expand-all":"","highlight-current":"","expand-on-click-node":!1,"node-key":"uuid",data:t.treeList,props:{children:"children",label:"label"}},on:{"node-click":t.onTreeNodeSelect}})],1),t._v(" "),r("el-col",{attrs:{span:18}},[r("el-input",{staticStyle:{"margin-bottom":"10px",display:"inline-block",width:"300px"},attrs:{size:"mini",placeholder:"搜索关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),t._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.gb28181ChannelShowPageList,fit:"",border:""}},[r("el-table-column",{attrs:{prop:"DeviceID",label:"通道编号",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Name",label:"名称",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Manufacturer",label:"厂商"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Address",label:"地址"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Status",label:"状态"}}),t._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return t.onPlay(e.row)}}},[t._v("播放")])]}}])})],1),t._v(" "),r("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":t.currentPage,total:t.gb28181ChannelShowList.length},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1),t._v(" "),r("el-dialog",{attrs:{title:t.dialogTitle,"show-close":!1,"before-close":t.onCloseRecordsDialog,visible:t.dialogVisible,width:"1500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.dialogVisible&&t.tempRecordSearch.id?[r("records",{attrs:{"record-search":t.tempRecordSearch}})]:t._e(),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:t.onCloseRecordsDialog}},[t._v("关 闭")])],1)],2)],1)},i=[],a=(r("8e6e"),r("456d"),r("ade3")),o=(r("ac6a"),r("2f62")),c=r("ed08"),s=r("d2cd");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"recordIndex",data:function(){return{dialogVisible:!1,searchKey:"",treeList:[],gb28181ChannelList:[],selectId:"",tempRecordSearch:{id:null,channel:null,deviceId:null,title:""},currentPage:1}},components:{Records:s["a"]},watch:{gb28181List:{handler:function(t){if(t&&t.length>0&&0===this.treeList.length){var e={uuid:Object(c["j"])(),label:"设置列表",id:"",children:t.map((function(t){return{uuid:Object(c["j"])(),id:t.id,label:t.label}}))};this.treeList=[e];var r=[];t.forEach((function(t){r=r.concat(t.children)})),this.gb28181ChannelList=r}},immediate:!0}},computed:u(u({},Object(o["b"])({gb28181List:function(t){return t.Gb28181List.map((function(t){var e={uuid:Object(c["j"])(),id:t.ID,label:t.ID,children:[]};return e.children=(t.Channels||[]).map((function(e,r){var n=u({uuid:Object(c["j"])(),id:t.ID,deviceId:e.DeviceID,channel:r,label:e.Name,isChannel:!0},e);return n})),e}))}})),{},{gb28181ChannelShowList:function(){var t=this;return this.gb28181ChannelList.filter((function(e){return(t.selectId&&e.id===t.selectId||""===t.selectId)&&(""===t.searchKey.trim()||e.Name&&-1!==e.Name.indexOf(t.searchKey))}))},gb28181ChannelShowPageList:function(){return this.gb28181ChannelShowList.slice(10*(this.currentPage-1),10*this.currentPage)},dialogTitle:function(){return"查看录像-"+this.tempRecordSearch.title}}),methods:{onTreeNodeSelect:function(t){this.selectId=t.id||"",this.searchKey=""},onPlay:function(t){this.tempRecordSearch.id=t.id,this.tempRecordSearch.channel=t.channel,this.tempRecordSearch.deviceId=t.deviceId,this.tempRecordSearch.title=t.Name+"("+t.deviceId+")",this.dialogVisible=!0},onCloseRecordsDialog:function(){this.dialogVisible=!1,this.tempRecordSearch.id=null,this.tempRecordSearch.channel=null,this.tempRecordSearch.deviceId=null,this.tempRecordSearch.title=""}}},p=h,f=(r("3dcc"),r("2877")),d=Object(f["a"])(p,n,i,!1,null,"315c13d2",null);e["default"]=d.exports},cd1c:function(t,e,r){var n=r("e853");t.exports=function(t,e){return new(n(t))(e)}},d2cd:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"record-wrap"},[r("div",{staticClass:"record-player"},[r("div",{staticClass:"record-time-select"},[r("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"small",clearable:!1,"value-format":"timestamp","picker-options":t.pickerOptions,placeholder:"选择日期"},on:{change:t.onSearchTimeChange},model:{value:t.searchTime,callback:function(e){t.searchTime=e},expression:"searchTime"}})],1),t._v(" "),t.recordList.length>0&&t.hasInitMinute?[t.recordSP?r("webrtc-player",{key:t.recordSP,attrs:{controls:!1,"stream-path":t.recordSP},on:{doPlayed:t.handlePlayed}}):r("p",{staticStyle:{"text-align":"center"}},[t._v("初始化...")])]:t._e()],2),t._v(" "),r("div",{staticClass:"record-time"},[r("div",{ref:"timeDay",staticClass:"time-day"},[t._l(t.minuteList,(function(e){return r("div",{staticClass:"time-minute",class:{active:e.hasRecord},attrs:{title:e.title},on:{click:function(r){return t.onMinuteClick(e)}}})})),t._v(" "),t._l(t.hourList,(function(e){return r("div",{staticClass:"time-text"},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2),t._v(" "),t.playTime.now?r("div",{staticClass:"time-cursor",style:t.playTimeStyle,on:{mousedown:t.onStartMove,mousemove:t.onDoingMove,mouseup:t.onStopMove}},[r("div",{staticClass:"time-cursor-text"},[t.isPlayTimeMoving?[t._v("\n          "+t._s(t.playMoveTime)+"\n        ")]:[t._v("\n          "+t._s(t._f("parseTimeFilter")(t.playTime.now,"{h}:{i}:{s}"))+"\n        ")]],2)]):t._e()])])},i=[],a=(r("8e6e"),r("456d"),r("6b54"),r("96cf"),r("1da1")),o=(r("7514"),r("ac6a"),r("ade3")),c=r("ed08"),s=r("3724"),l=r("2f62"),u=r("4ec3");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=(new Date).getTime();function d(){for(var t=[],e=1;e<1440;e++)t.push({title:Object(c["b"])(e),timestamp:e,endTimestamp:"",hasRecord:!1});return t}function m(){for(var t=[],e=0;e<24;e++){var r=e+":00";r<10&&(r="0"+r),t.push({title:r,timestamp:e+1})}return t}var v={name:"Record",props:{recordSearch:{type:Object,default:function(){return{}}}},data:function(){return{hasInitMinute:!1,hasQuery:!1,searchTime:f,minuteList:d(),hourList:m(),playTime:{start:"",end:"",now:""},isPlaying:!1,pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},recordSP:null,isPlayTimeMoving:!1,playTimeOffset:0}},created:function(){this.init()},timeInterval:null,components:{WebrtcPlayer:s["a"]},watch:{recordList:function(){!this.hasInitMinute&&this.hasQuery&&(this.hasInitMinute=!0,this.updateMinuteList())}},computed:p(p({},Object(l["b"])({gb28181List:function(t){return t.Gb28181List},gb28181ChannelList:function(t){var e=[];return t.Gb28181List.forEach((function(t){var r=t.Channels||[];r.length>0&&(e=e.concat(r.map((function(e){return e.id=t.ID,e.deviceId=e.DeviceID,e}))))})),e}})),{},{recordList:function(){var t=this,e=[],r=this.gb28181ChannelList.find((function(e){return e.deviceId===t.recordSearch.deviceId&&e.id===t.recordSearch.id}));if(r){var n=r.Records||[];e=n.map((function(t){var e=new Date(t.StartTime).getTime(),r=new Date(t.EndTime).getTime(),n=r-e,i=Object(c["h"])(e),a=Object(c["h"])(r);return t._startTime=e/1e3>>0,t._endTime=r/1e3>>0,t.timeLength=Math.floor(n/1e3/60%60),t.startTime=i,t.endTime=a,t.startTimestamp=e,t.endTimestamp=r,t}))}return e},playTimeStyle:function(){var t=0;if(this.isPlayTimeMoving)t=this.playTimeOffset;else if(this.playTime.now){var e=new Date(this.playTime.now),r=e.getHours(),n=e.getMinutes();t=60*r+n}var i={left:t+"px"};return i},playMoveTime:function(){return Object(c["b"])(this.playTimeOffset)}}),methods:{init:function(){this.hasQuery=!1,this.hasInitMinute=!1,this.playTime.now="",this.fetchList()},fetchList:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.getSearchTimeRange(),r={id:this.recordSearch.id,channel:this.recordSearch.channel,startTime:e.start,endTime:e.end},t.next=4,Object(u["q"])(r);case 4:this.hasQuery=!0;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSearchTimeRange:function(){var t=Object(c["f"])(this.searchTime),e=t.start,r=t.end,n=new Date(e).toISOString(),i=new Date(r).toISOString();return{start:n,end:i}},onSearchTimeChange:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.minuteList=d(),t.next=3,this.stop();case 3:this.init();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateMinuteList:function(){var t=this;this.playTime.start="",this.playTime.now="",this.playTime.endTime="",this.minuteList.forEach((function(e){var r=t.formatMinuteItemTimestamp(e);t.recordList.forEach((function(n){n.startTimestamp<=r&&n.endTimestamp>r&&(e.hasRecord=!0,e.endTimestamp=n.endTimestamp,t.playTime.start||(t.playTime.start=n.startTimestamp,t.playTime.end=n.endTimestamp))}))})),this.playTime.start&&this.play()},formatMinuteItemTimestamp:function(t){var e=Math.floor(t.timestamp/60)%60,r=Math.floor(t.timestamp%60),n=new Date(this.searchTime).setHours(e,r,0,0);return n},onStartMove:function(t){this.isPlayTimeMoving=!0,this.updatePlayTimeOffset(t)},onDoingMove:function(t){this.isPlayTimeMoving&&this.updatePlayTimeOffset(t)},onStopMove:function(t){if(this.isPlayTimeMoving){var e=this.minuteList[this.playTimeOffset];e&&this.onMinuteClick(e),this.isPlayTimeMoving=!1,this.playTimeOffset=0}},updatePlayTimeOffset:function(t){var e=this.getTimeRect(),r=t.clientX-e.left;this.playTimeOffset=parseInt(r,10)},getTimeRect:function(){var t=this.$refs.timeDay;return t.getBoundingClientRect()},onMinuteClick:function(t){if(t.hasRecord){var e=this.formatMinuteItemTimestamp(t);this.playTime.start=e,this.playTime.end=t.endTimestamp,this.play()}},play:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.stop();case 2:return e={id:this.recordSearch.id,channel:this.recordSearch.channel,startTime:this.playTime.start/1e3>>0,endTime:this.playTime.end/1e3>>0},t.prev=3,t.next=6,Object(u["o"])(e);case 6:this.recordSP="".concat(e.id,"/").concat(this.recordSearch.deviceId,"/").concat(e.startTime,"-").concat(e.endTime),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.error(t.t0);case 12:this.playTime.now=this.playTime.start;case 13:case"end":return t.stop()}}),t,this,[[3,9]])})));function e(){return t.apply(this,arguments)}return e}(),handlePlayed:function(){this.clearInterval(),this.intervalPlayTime()},stop:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.clearInterval(),this.isPlaying=!1,!this.recordSP){t.next=4;break}return t.abrupt("return",Object(u["u"])(this.recordSP));case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),intervalPlayTime:function(){var t=this;this.isPlaying=!0,this.$options.timeInterval=setInterval((function(){t.playTime.now+=1e3,t.checkPlayNext()}),1e3)},checkPlayNext:function(){var t=this;if(this.playTime.now===this.playTime.end){var e=this.minuteList.find((function(e){var r=t.formatMinuteItemTimestamp(e);return e.hasRecord&&t.playTime.end<=r}));e&&(this.playTime.start=this.formatMinuteItemTimestamp(e),this.playTime.end=e.endTimestamp,this.playTime.now=this.playTime.start,this.play())}},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.$options.timeInterval&&(clearInterval(this.$options.timeInterval),this.$options.timeInterval=null)}))},destroyed:function(){this.stop()}},y=v,g=(r("966e"),r("2877")),b=Object(g["a"])(y,n,i,!1,null,"004a8893",null);e["a"]=b.exports},e853:function(t,e,r){var n=r("d3f4"),i=r("1169"),a=r("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}}}]);