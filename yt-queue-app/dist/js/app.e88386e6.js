(function(e){function t(t){for(var o,i,s=t[0],a=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},u=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=a;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1eb7":function(e,t,n){},"46b6":function(e,t,n){"use strict";var o=n("76de"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("a026"),r=n("5132"),u=n.n(r),i=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[""!==e.err?n("div",{staticClass:"app-err"},[e._v(e._s(e.err))]):e._e(),n("VideoInput"),n("VideoQueue",{attrs:{queue:e.queue}})],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"video-input"}},[n("h1",[e._v("Enter a YouTube URL:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"url",name:"vid-url",id:"vid-url",placeholder:"https://www.youtube.com/watch?v=oHg5SJYRHA0",autofocus:""},domProps:{value:e.url},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnter(t):null},input:function(t){t.target.composing||(e.url=t.target.value)}}})])},l=[],d={name:"VideoInput",data:function(){return{url:""}},created:function(){var e=this;this.sockets.subscribe("vidRequestRes",function(t){var n=t.success;n&&(e.url="")})},methods:{onEnter:function(){this.$socket.emit("vid-request",this.url)}}},p=d,v=(n("46b6"),n("2877")),f=Object(v["a"])(p,c,l,!1,null,"37c23076",null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"video-queue"}},[n("h1",[e._v("Queue")]),e._l(e.queue,function(e,t){return n("VideoItem",{key:t,attrs:{video:e}})}),0===e.queue.length?n("p",[e._v("\n    There are currently no videos queued up.\n  ")]):e._e()],2)},b=[],y=function(){var e,t=this,n=t.$createElement,o=t._self._c||n;return o("div",{class:(e={},e["video-item"]=!0,e["video-item-hovered"]=t.active,e),on:{mouseover:function(e){t.active=!0},mouseleave:function(e){t.active=!1}}},[o("img",{staticClass:"video-thumb",attrs:{src:t.video.thumbnail}}),o("span",{staticClass:"video-name"},[t._v(t._s(t.video.title))]),o("button",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"video-skip-btn",on:{click:t.onClick}},[t._v("SKIP")])])},_=[],g={name:"VideoItem",props:["video"],data:function(){return{active:!1}},methods:{onClick:function(){this.$socket.emit("vid-skip",this.$vnode.key)}}},w=g,k=(n("7b8c"),Object(v["a"])(w,y,_,!1,null,null,null)),q=k.exports,O={name:"VideoQueue",props:["queue"],components:{VideoItem:q}},j=O,x=(n("939f"),Object(v["a"])(j,m,b,!1,null,"43e44925",null)),V=x.exports,E={created:function(){var e=this;this.sockets.subscribe("vidRequestRes",function(t){var n=t.success,o=t.reason;e.err=n?"":o}),this.sockets.subscribe("queueInit",function(t){e.queue=t}),this.sockets.subscribe("queuePush",function(t){e.queue.push(t)}),this.sockets.subscribe("queuePop",function(){e.queue.pop()}),this.sockets.subscribe("queueRmv",function(t){e.queue.splice(t,1)})},data:function(){return{err:"",queue:[]}},name:"home",components:{VideoInput:h,VideoQueue:V}},I=E,P=(n("cccb"),Object(v["a"])(I,s,a,!1,null,null,null)),$=P.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"host"}},[e.playing?e._e():n("div",{attrs:{id:"cover"}},[n("h1",[e._v("192.168.1.69")])]),n("div",{attrs:{id:"player"}})])},C=[],S={name:"home",data:function(){return{playing:!1}},created:function(){var e,t=this;this.sockets.subscribe("vid-play",function(n){e=n,o&&o.loadVideoById(e),t.playing=!0}),this.sockets.subscribe("vid-stop",function(){t.playing=!1,o&&o.stopVideo()});var n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";var o,r=document.getElementsByTagName("script")[0];function u(t){var n=t.target;""!==e&&n.loadVideoById(e)}r.parentNode.insertBefore(n,r),window.onYouTubeIframeAPIReady=function(){o=new YT.Player("player",{width:"100%",height:"100%",events:{onReady:u,onStateChange:s},playerVars:{autoplay:0,controls:0,rel:0,fs:0,showinfo:0}})};var i=this.$socket;function s(e){var t=e.data;0===t&&(console.log("DONE"),i.emit("vid-finish"))}}},T=S,N=(n("e5dd"),Object(v["a"])(T,R,C,!1,null,null,null)),B=N.exports;o["a"].use(i["a"]);var M=new i["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:$},{path:"/host",name:"host",component:B}]});o["a"].config.productionTip=!1,o["a"].use(new u.a({connection:"http://192.168.1.69:3000"})),o["a"].use(i["a"]),new o["a"]({router:M}).$mount("#app")},"76de":function(e,t,n){},"7b8c":function(e,t,n){"use strict";var o=n("d084"),r=n.n(o);r.a},"912f":function(e,t,n){},"939f":function(e,t,n){"use strict";var o=n("912f"),r=n.n(o);r.a},cccb:function(e,t,n){"use strict";var o=n("d563"),r=n.n(o);r.a},d084:function(e,t,n){},d563:function(e,t,n){},e5dd:function(e,t,n){"use strict";var o=n("1eb7"),r=n.n(o);r.a}});
//# sourceMappingURL=app.e88386e6.js.map