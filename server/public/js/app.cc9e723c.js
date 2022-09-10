(function(){"use strict";var t={77110:function(t,e,r){r(26981),r(98394);var o=r(20144),n=r(62032);r(70044);o["default"].use(n.ZPm);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",[r("router-view",{key:t.showSessionRestorationDialog}),r("DialogBox",{attrs:{visible:t.showSessionRestorationDialog,title:"Restore Previous Session?",description:"We have detected that you previously made changes to your portfolio that went unsaved, would you like to restore your session?",mainBtnText:"Restore",mainBtnColor:"success",secondaryBtnText:"Discard"},on:{confirmed:t.restoreSession,close:t.dialogClosed}}),r("v-snackbar",{attrs:{"multi-line":!0},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[r("v-icon",t._b({staticClass:"mr-2",on:{click:function(e){e.stopPropagation(),t.showSnackbar=!1}}},"v-icon",o,!1),[t._v(" mdi-close ")])]}}]),model:{value:t.showSnackbar,callback:function(e){t.showSnackbar=e},expression:"showSnackbar"}},[t._v(" "+t._s(t.$store.state.snackbarText)+" ")])],1)],1)},a=[],s=r(20155),c=o["default"].extend({name:"App",data(){return{showSessionRestorationDialog:!1,showSnackbar:!1}},components:{DialogBox:s.Z},mounted(){this.$watch((()=>this.$store.state.snackbarText),(t=>{this.showSnackbar=!!t})),localStorage?.unsavedSessionData&&(this.showSessionRestorationDialog=!0)},methods:{restoreSession(){try{this.$store.state.portfolioItem=JSON.parse(localStorage.unsavedSessionData)}catch{return void(this.$store.state.snackbarText="Previous version corrupted. Restoration Unsuccessful.")}this.$router.push({name:"Build"})},dialogClosed(){this.showSessionRestorationDialog=!1,setTimeout((()=>localStorage.removeItem("unsavedSessionData")),100)}},watch:{showSnackbar(t){t||(this.$store.state.snackbarText=void 0)}}}),l=c,u=r(1001),d=r(43453),h=r.n(d),p=r(10303),f=r(14456),v=r(44654),m=(0,u.Z)(l,i,a,!1,null,null,null),b=m.exports;h()(m,{VApp:p.Z,VIcon:f.Z,VSnackbar:v.Z});var g=r(80365),y=r(25121),w=r(58075);o["default"].use(y.Z);var S=new y.Z({theme:{themes:{light:{primary:w.Z.indigo.darken1,secondary:w.Z.indigo.lighten3,accent:w.Z.amber.base}}},icons:{iconfont:"mdiSvg"}}),x=r(67356),k=r(20629);o["default"].use(k.ZP);const _=new k.ZP.Store({state:{portfolioItem:void 0,snackbarText:""}});o["default"].config.productionTip=!1,o["default"].use(x.Z),new o["default"]({store:_,router:g.Z,vuetify:S,render:t=>t(b)}).$mount("#app")},80365:function(t,e,r){r.d(e,{Z:function(){return I}});var o=r(20144),n=r(78345),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header pa-2",style:"background-color: rgba(255, 255, 255, "+t.barWhiteness+"); box-shadow: 0px 0px "+t.calcShadow()+"px"},[o("v-btn",{attrs:{text:"register"!==t.currentSection,color:"register"!==t.currentSection?"":"info"},on:{click:function(e){return e.stopPropagation(),t.$router.push({name:"Auth",query:{type:"register"}})}}},[t._v("Register")]),o("v-btn",{attrs:{text:"build"!==t.currentSection,color:"build"!==t.currentSection?"":"error"},on:{click:function(e){return e.stopPropagation(),t.$router.push({name:"Build"})}}},[t._v("Build")]),o("a",{attrs:{href:"#explore"}},[o("v-btn",{attrs:{text:"explore"!==t.currentSection,color:"explore"!==t.currentSection?"":"success"}},[t._v("Explore")])],1)],1),o("article",{attrs:{id:"invigorate"}},[o("v-img",{attrs:{position:"absolute",width:"100vw",src:r(35761)}})],1),o("article",{staticClass:"content-container",staticStyle:{"background-color":"white"},attrs:{id:"register"}},[o("Register")],1),o("article",{staticClass:"content-container",staticStyle:{"background-color":"white"},attrs:{id:"build"}},[o("Build")],1),o("article",{staticClass:"content-container",staticStyle:{"background-color":"white"},attrs:{id:"explore"}},[o("Explore")],1),o("article",{staticClass:"content-container",staticStyle:{height:"50vh"},attrs:{id:"footer"}}),t.username?o("v-btn",{attrs:{color:"error"},on:{click:function(e){return e.stopPropagation(),t.logout()}}},[t._v("Logout")]):t._e()],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticStyle:{color:"white"},attrs:{color:"blue darken-1"}},[r("v-icon",{staticClass:"pl-5 py-5",attrs:{"x-large":"",color:"white"}},[t._v("mdi-account-plus")]),r("div",{staticClass:"px-7 pb-5"},[r("div",{staticClass:"text-h2",staticStyle:{"font-weight":"bold"}},[t._v(" Register ")]),r("v-divider"),r("div",{staticStyle:{"font-size":"25pt"}},[r("ul",[r("li",[t._v("Join our amazing and dedicated community of professionals.")]),r("li",[t._v("Build your own stand-out portfolio and collaborate with others.")]),r("li",[t._v("Create an account for free with one click!")])])]),r("div",[r("v-btn",{staticClass:"mr-2 mb-2",attrs:{color:"white"},on:{click:function(e){return e.stopPropagation(),t.$router.push({name:"Auth",query:{type:"register"}})}}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-account")]),t._v(" Create an account ")],1)],1)],1)],1)},c=[],l=r(1001),u=r(43453),d=r.n(u),h=r(9787),p=r(65596),f=r(14456),v=r(30801),m={},b=(0,l.Z)(m,s,c,!1,null,null,null),g=b.exports;d()(b,{VBtn:h.Z,VDivider:p.Z,VIcon:f.Z,VSheet:v.Z});var y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticStyle:{color:"white"},attrs:{color:"red"}},[r("v-icon",{staticClass:"pl-5 py-5",attrs:{"x-large":"",color:"white"}},[t._v("mdi-wrench")]),r("div",{staticClass:"px-7 pb-5"},[r("div",{staticClass:"text-h2",staticStyle:{"font-weight":"bold"}},[t._v(" Build ")]),r("v-divider"),r("div",{staticStyle:{"font-size":"25pt"}},[r("ul",[r("li",[t._v("Building a stunning portfolio to display what you have accomplished has never been easier.")]),r("li",[t._v("Add information about yourself, drag and drop each component into place.")]),r("li",[t._v("Easily share what you have built with others by sending them a link!")])])]),r("div",[r("v-btn",{staticClass:"mr-2",attrs:{color:"white"},on:{click:function(e){return e.stopPropagation(),t.$router.push({name:"Build"})}}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-clipboard-edit")]),t._v(" Get started ")],1)],1)],1)],1)},w=[],S={},x=S,k=(0,l.Z)(x,y,w,!1,null,null,null),_=k.exports;d()(k,{VBtn:h.Z,VDivider:p.Z,VIcon:f.Z,VSheet:v.Z});var C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticStyle:{color:"white"},attrs:{color:"green"}},[r("v-icon",{staticClass:"pl-5 py-5",attrs:{"x-large":"",color:"white"}},[t._v("mdi-map")]),r("div",{staticClass:"px-7 pb-5"},[r("div",{staticClass:"text-h2",staticStyle:{"font-weight":"bold"}},[t._v(" Explore ")]),r("v-divider"),r("div",{staticStyle:{"font-size":"25pt"}},[r("ul",[r("li",[t._v("Look up others users' portfolios.")]),r("li",[t._v("Find ideas and get inspired.")]),r("li",[t._v("Learn about others in your field!")])])]),r("div",[r("v-btn",{staticClass:"pa-0 ma-0",staticStyle:{transition:"250ms"},attrs:{fab:!t.showSearch,color:"white",width:t.showSearch?t.searchBarWidth:"",height:t.showSearch?"70px":""},on:{click:function(e){e.stopPropagation(),t.showSearch=!0}}},[t.showSearch?r("div",{staticClass:"button-container"},[r("div",{staticStyle:{"flex-basis":"1"}},[r("v-icon",{staticClass:"mx-2",attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.showSearch=!1}}},[t._v("mdi-chevron-left")])],1),r("div",{staticStyle:{"flex-basis":"10",width:"100%"}},[r("form",{attrs:{action:""},on:{submit:function(t){return t.preventDefault()}}},[r("v-text-field",{staticClass:"mt-3 pr-10",attrs:{label:"Search Portfolios",type:"search"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1)])]):r("v-icon",{attrs:{dark:""}},[t._v(" mdi-magnify ")])],1)],1)],1)],1)},Z=[],B={data(){return{showSearch:!1,searchQuery:""}},computed:{searchBarWidth(){return this.$vuetify.breakpoint.smAndUp?"400px":"80vw"}},methods:{search(){this.searchQuery=this.searchQuery.trim(),this.searchQuery&&this.$router.push(`/display/${this.searchQuery}`)}}},P=B,T=r(82660),E=(0,l.Z)(P,C,Z,!1,null,"2c0e5892",null),$=E.exports;d()(E,{VBtn:h.Z,VDivider:p.Z,VIcon:f.Z,VSheet:v.Z,VTextField:T.Z});var V={name:"HomeView",data:()=>({barWhiteness:0,currentSection:0,username:localStorage.username}),components:{Register:g,Build:_,Explore:$},mounted(){document.addEventListener("scroll",this.adjustTopBar);const t=new IntersectionObserver((t=>{t.forEach((t=>{t.intersectionRatio>0&&(this.currentSection=t.target.getAttribute("id"))}))}),{rootMargin:"0px 0px -93% 0px"});document.querySelectorAll("article").forEach((e=>{t.observe(e)}))},destroyed(){document.removeEventListener("scroll",this.adjustTopBar)},methods:{calcShadow(){let t;const e=8;return t=window.scrollY/50<e?window.scrollY/50:e,t},adjustTopBar(){this.barWhiteness=window.scrollY/400},handleCreate(){this.$router.push({name:"Build"})},logout(){localStorage.clear(),this.$router.push({name:"Auth"}),setTimeout((()=>location.reload()),25)}}},A=V,D=r(15288),O=(0,l.Z)(A,i,a,!1,null,"24589cb6",null),j=O.exports;d()(O,{VBtn:h.Z,VImg:D.Z}),o["default"].use(n.Z);const R=[{path:"/",name:"Home",component:j},{path:"/display/:user",name:"Display",component:()=>Promise.all([r.e(938),r.e(705),r.e(470),r.e(901)]).then(r.bind(r,20901))},{path:"/display/preview",name:"Preview",component:()=>Promise.all([r.e(938),r.e(705),r.e(470),r.e(901)]).then(r.bind(r,20901))},{path:"/build",name:"Build",component:()=>Promise.all([r.e(938),r.e(705),r.e(470),r.e(13)]).then(r.bind(r,94013))},{path:"/auth",name:"Auth",component:()=>Promise.all([r.e(938),r.e(705),r.e(842)]).then(r.bind(r,10842))},{path:"*",name:"404",component:()=>Promise.all([r.e(938),r.e(959)]).then(r.bind(r,69959))}],q=new n.Z({routes:R,mode:"history",scrollBehavior(t,e,r){return document.title=`${t.name} - Portfolio`,{x:0,y:0}}});var I=q},20155:function(t,e,r){r.d(e,{Z:function(){return v}});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("v-card",{staticClass:"pb-2"},[r("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v(" "+t._s(t.title)+" ")]),r("v-card-text",{staticClass:"py-0"},[t._v(" "+t._s(t.description)+" ")]),r("v-card-actions",[t._t("actions",(function(){return[r("v-btn",{attrs:{color:t.mainBtnColor,dark:t.dark},on:{click:function(e){return e.stopPropagation(),t.confirmed()}}},[t._v(" "+t._s(t.mainBtnText)+" ")]),r("v-btn",{attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.show=!1}}},[t._v(" "+t._s(t.secondaryBtnText)+" ")])]}))],2)],1)],1)},n=[],i={props:{visible:{type:Boolean,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},mainBtnColor:{type:String,required:!1,default:"error"},dark:{type:Boolean,required:!1,default:!1},mainBtnText:{type:String,required:!1,default:"confirm"},secondaryBtnText:{type:String,required:!1,default:"nevermind"}},methods:{confirmed(){this.$emit("confirmed"),this.show=!1}},computed:{show:{get(){return this.visible},set(t){t||this.$emit("close")}}}},a=i,s=r(1001),c=r(43453),l=r.n(c),u=r(9787),d=r(85893),h=r(5255),p=r(45634),f=(0,s.Z)(a,o,n,!1,null,null,null),v=f.exports;l()(f,{VBtn:u.Z,VCard:d.Z,VCardActions:h.h7,VCardText:h.ZB,VCardTitle:h.EB,VDialog:p.Z})},35761:function(t,e,r){t.exports=r.p+"img/smilingman2.f1a18dc8.jpeg"}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,i){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],i=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,o){return r.f[o](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{13:"c6d0ceaf",470:"1dde773a",705:"8bbfc08a",842:"746760b6",901:"0498dbcd",938:"c14504f4",959:"b61257d3"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{13:"f0d62a06",470:"211510f3",842:"3adf151d",901:"f7ea727e",938:"e0f7bdd3",959:"ffb09b0f"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portfolio_display:";r.l=function(o,n,i,a){if(t[o])t[o].push(n);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[n];var h=function(e,r){s.onerror=s.onload=null,clearTimeout(p);var n=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=i,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===t||i===e))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){n=a[o],i=n.getAttribute("data-href");if(i===t||i===e)return n}},o=function(o){return new Promise((function(n,i){var a=r.miniCssF(o),s=r.p+a;if(e(a,s))return n();t(o,s,n,i)}))},n={143:0};r.f.miniCss=function(t,e){var r={13:1,470:1,842:1,901:1,938:1,959:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=o(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,o){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else if(938!=e){var i=new Promise((function(r,o){n=t[e]=[r,o]}));o.push(n[2]=i);var a=r.p+r.u(e),s=new Error,c=function(o){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}};r.l(a,c,"chunk-"+e,e)}else t[e]=0},r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var u=c(r)}for(e&&e(o);l<a.length;l++)i=a[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},o=self["webpackChunkportfolio_display"]=self["webpackChunkportfolio_display"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(77110)}));o=r.O(o)})();
//# sourceMappingURL=app.cc9e723c.js.map