(self["webpackChunkportfolio_display"]=self["webpackChunkportfolio_display"]||[]).push([[809],{96077:function(t,e,r){var o=r(60614),n=String,s=TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw s("Can't set "+n(t)+" as a prototype")}},70648:function(t,e,r){var o=r(51694),n=r(60614),s=r(84326),i=r(5112),a=i("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(r){}};t.exports=o?s:function(t){var e,r,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=l(e=c(t),a))?r:u?s(e):"Object"==(o=s(e))&&n(e.callee)?"Arguments":o}},77741:function(t,e,r){var o=r(1702),n=Error,s=o("".replace),i=function(t){return String(n(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(i);t.exports=function(t,e){if(c&&"string"==typeof t&&!n.prepareStackTrace)while(e--)t=s(t,a,"");return t}},22914:function(t,e,r){var o=r(47293),n=r(79114);t.exports=!o((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",n(1,7)),7!==t.stack)}))},22104:function(t,e,r){var o=r(34374),n=Function.prototype,s=n.apply,i=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(o?i.bind(s):function(){return i.apply(s,arguments)})},79587:function(t,e,r){var o=r(60614),n=r(70111),s=r(27674);t.exports=function(t,e,r){var i,a;return s&&o(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&s(t,a),t}},58340:function(t,e,r){var o=r(70111),n=r(68880);t.exports=function(t,e){o(e)&&"cause"in e&&n(t,"cause",e.cause)}},56277:function(t,e,r){var o=r(41340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:o(t)}},27674:function(t,e,r){var o=r(1702),n=r(19670),s=r(96077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=o(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(r,[]),e=r instanceof Array}catch(i){}return function(r,o){return n(r),s(o),e?t(r,o):r.__proto__=o,r}}():void 0)},2626:function(t,e,r){var o=r(3070).f;t.exports=function(t,e,r){r in t||o(t,r,{configurable:!0,get:function(){return e[r]},set:function(t){e[r]=t}})}},51694:function(t,e,r){var o=r(5112),n=o("toStringTag"),s={};s[n]="z",t.exports="[object z]"===String(s)},41340:function(t,e,r){var o=r(70648),n=String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return n(t)}},89191:function(t,e,r){"use strict";var o=r(35005),n=r(92597),s=r(68880),i=r(47976),a=r(27674),c=r(99920),u=r(2626),l=r(79587),p=r(56277),d=r(58340),f=r(77741),h=r(22914),m=r(19781),g=r(31913);t.exports=function(t,e,r,w){var v="stackTraceLimit",y=w?2:1,b=t.split("."),x=b[b.length-1],T=o.apply(null,b);if(T){var P=T.prototype;if(!g&&n(P,"cause")&&delete P.cause,!r)return T;var k=o("Error"),C=e((function(t,e){var r=p(w?e:t,void 0),o=w?new T(t):new T;return void 0!==r&&s(o,"message",r),h&&s(o,"stack",f(o.stack,2)),this&&i(P,this)&&l(o,this,C),arguments.length>y&&d(o,arguments[y]),o}));if(C.prototype=P,"Error"!==x?a?a(C,k):c(C,k,{name:!0}):m&&v in T&&(u(C,T,v),u(C,T,"prepareStackTrace")),c(C,T),!g)try{P.name!==x&&s(P,"name",x),P.constructor=C}catch(_){}return C}}},21703:function(t,e,r){var o=r(82109),n=r(17854),s=r(22104),i=r(89191),a="WebAssembly",c=n[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var r={};r[t]=i(t,e,u),o({global:!0,constructor:!0,arity:1,forced:u},r)},p=function(t,e){if(c&&c[t]){var r={};r[t]=i(a+"."+t,e,u),o({target:a,stat:!0,constructor:!0,arity:1,forced:u},r)}};l("Error",(function(t){return function(e){return s(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),l("URIError",(function(t){return function(e){return s(t,this,arguments)}})),p("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),p("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),p("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},66825:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return A}});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("center",[r("transition",{attrs:{name:"slide"}},[t.formSubmitted?t._e():r(t.formType?"register":"login",{tag:"component",staticStyle:{position:"fixed",top:"0"}})],1)],1),r("v-overlay",{attrs:{value:t.loadingOverlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),r("DialogBox",{attrs:{title:t.dialogContent.title,description:t.dialogContent.desc,visible:t.showCompletionDialog},scopedSlots:t._u([{key:"actions",fn:function(){return[r("v-btn",{attrs:{color:t.dialogContent.formValid?"success":"error"},on:{click:function(e){return e.stopPropagation(),t.dialogContent.action.apply(null,arguments)}}},[t._v(t._s(t.dialogContent.btnTxt))])]},proxy:!0}])})],1)},n=[],s=(r(21703),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-5 ma-4",attrs:{"min-width":t.$vuetify.breakpoint.smAndUp?"400px":"90vw"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-card-title",[t._v(" Register ")])],1),r("v-divider"),r("v-text-field",{attrs:{label:"Username",rules:[t.rules.containsSpaces]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),r("v-text-field",{attrs:{label:"Password",type:t.showPassword?"text":"password","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:[t.rules.passwordLength,t.rules.containsSpaces]},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-text-field",{attrs:{label:"Confirm Password",type:t.showPassword?"text":"password",rules:[t.rules.matchingPasswords]},model:{value:t.rePassword,callback:function(e){t.rePassword=e},expression:"rePassword"}}),r("v-card-actions",[r("v-btn",{attrs:{disabled:t.validateInput,color:"success"},on:{click:function(e){return e.stopPropagation(),t.submit()}}},[t._v(" Create ")]),r("v-spacer"),r("v-btn",{attrs:{text:"",color:"info"},on:{click:function(e){e.stopPropagation(),t.$parent.formType=!t.$parent.formType}}},[t._v(" Login Here ")])],1)],1)}),i=[],a=r(90965),c={data(){return{username:"",password:"",rePassword:"",showPassword:!1,rules:{matchingPasswords:t=>t===this.password||"Passwords do not match",passwordLength:t=>t.length>5||"Password is to short",containsSpaces:t=>!/\s/.test(t)||"Cannot contain spaces"}}},computed:{validateInput(){return!this.username||(!this.password||(!!/\s/.test(this.username+this.password)||(this.password.length<=5||this.password!==this.rePassword)))}},methods:{async submit(){const t=await a.Z.isUsernameTaken(this.username);if(t)return void this.exitProcess("Username Taken","This username has already been taken, try something similar","ok",!1,(()=>{this.resubmitRegisterForm()}));this.$parent.formSubmitted=!0,a.Z.postAccount({username:this.username,password:this.password}),await new Promise((t=>setTimeout(t,3e3)));const e=await a.Z.getAllUsersWithUsername(this.username);if(e.length>1)return e.forEach((t=>a.Z.deleteAccountByID(t))),void this.exitProcess("There seems to have been an issue :(","Unfortunately an issue was encountered whilst in the process of creating your account, please try again.","Try again",!1,(()=>{this.resubmitRegisterForm()}));0!==e.length?this.exitProcess("Hooray!","Your account has been successfully created, to complete the account creation process and begin building, we must ask you to log in with your newly created credentials.","login",!0,(()=>{this.sendUserToLoginForm()})):this.exitProcess("There was an issue connecting with our servers :(","Unfortunately the connection to our servers failed. This means that either \n          our servers are down (highly unlikely) or you are broke and cannot afford good \n          internet (judging by your geo location address highly likely), please try again.","Try again",!1,(()=>{this.resubmitRegisterForm()}))},exitProcess(t,e,r,o,n){this.$parent.dialogContent={title:t,desc:e,btnTxt:r,formValid:o,action:n},this.$parent.showCompletionDialog=!0},resubmitRegisterForm(){this.$parent.formType=!0,this.$parent.formSubmitted=!1,this.$parent.showCompletionDialog=!1},sendUserToLoginForm(){this.$parent.formType=!1,this.$parent.formSubmitted=!1,this.$parent.showCompletionDialog=!1}}},u=c,l=r(1001),p=r(43453),d=r.n(p),f=r(9787),h=r(85893),m=r(5255),g=r(65596),w=r(57894),v=r(22515),y=r(82660),b=(0,l.Z)(u,s,i,!1,null,null,null),x=b.exports;d()(b,{VBtn:f.Z,VCard:h.Z,VCardActions:m.h7,VCardTitle:m.EB,VDivider:g.Z,VRow:w.Z,VSpacer:v.Z,VTextField:y.Z});var T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-5 ma-4",attrs:{"min-width":t.$vuetify.breakpoint.smAndUp?"400px":"90vw"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-card-title",[t._v(" Login ")])],1),r("v-divider"),r("v-text-field",{attrs:{label:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),r("v-text-field",{attrs:{label:"Password",type:t.showPassword?"text":"password","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-card-actions",[r("v-btn",{attrs:{disabled:!t.username||!t.password,color:"success"},on:{click:function(e){return e.stopPropagation(),t.submit()}}},[t._v(" Login ")]),r("v-spacer"),r("v-btn",{attrs:{text:"",color:"info"},on:{click:function(e){e.stopPropagation(),t.$parent.formType=!t.$parent.formType}}},[t._v(" Register Here ")])],1)],1)},P=[],k={data(){return{username:"",password:"",showPassword:!1}},methods:{async submit(){this.$parent.formSubmitted=!0;const t=await a.Z.getAccountByUsername(this.username);if(!t)return void this.exitProcess("Incorrect Username or Password","The username or password that was entered do not match our records","Try again",!1,(()=>{this.sendUserToLoginForm()}));const e=this.password===t.password;e?(localStorage.setItem("username",this.username),this.exitProcess("Login Successful",`You have successfully logged in as ${this.username}!`,"work on portfolio",!0,(()=>{this.$router.push({name:"Build"})}))):this.exitProcess("Incorrect Username or Password","The username or password that was entered do not match our records","Try again",!1,(()=>{this.sendUserToLoginForm()}))},exitProcess(t,e,r,o,n){this.$parent.dialogContent={title:t,desc:e,btnTxt:r,formValid:o,action:n},this.$parent.showCompletionDialog=!0},sendUserToLoginForm(){this.$parent.formType=!1,this.$parent.formSubmitted=!1,this.$parent.showCompletionDialog=!1}}},C=k,_=(0,l.Z)(C,T,P,!1,null,null,null),S=_.exports;d()(_,{VBtn:f.Z,VCard:h.Z,VCardActions:m.h7,VCardTitle:m.EB,VDivider:g.Z,VRow:w.Z,VSpacer:v.Z,VTextField:y.Z});var $=r(43908),E={components:{register:x,login:S,DialogBox:$.Z},data(){return{formType:!0,formSubmitted:!1,showCompletionDialog:!1,dialogContent:{title:"",desc:"",btnTxt:"",formValid:!1,action:()=>{throw new Error("Action Left Undefined")}}}},created(){this.formType="register"===this.$route.query.type},computed:{loadingOverlay(){return this.formSubmitted&&!this.showCompletionDialog}},methods:{callDialog(t){this.dialogContent=t,this.showCompletionDialog=!0}},watch:{formType(t){this.$router.replace({name:"Auth",query:{type:t?"register":"login"}})}}},Z=E,V=r(58913),U=r(43297),D=(0,l.Z)(Z,o,n,!1,null,"8f2b5ecc",null),A=D.exports;d()(D,{VBtn:f.Z,VOverlay:V.Z,VProgressCircular:U.Z})}}]);
//# sourceMappingURL=809.6eebb8f0.js.map