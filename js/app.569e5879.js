(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({cv:"cv",gallery:"gallery",home:"home"}[t]||t)+"."+{cv:"a316b8d7",gallery:"b2222043",home:"18189451"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={cv:1,gallery:1,home:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({cv:"cv",gallery:"gallery",home:"home"}[t]||t)+"."+{cv:"d3747219",gallery:"4d97e4c7",home:"9c4e9b4e"}[t]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){c=m[s],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],d.parentNode.removeChild(d),a(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var m=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",m.name="ChunkLoadError",m.type=n,m.request=r,a[1](m)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var m=0;m<c.length;m++)e(c[m]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f28":function(t,e,a){t.exports=a.p+"img/cv2-low.a0dab822.png"},"2aae":function(t,e,a){t.exports=a.p+"img/cv-low.79e99a17.png"},"2f99":function(t,e,a){t.exports=a.p+"img/heading.58840423.png"},"34b7":function(t,e,a){t.exports=a.p+"img/heading-low.d84d25d1.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("v-main",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"footer my-3",attrs:{padless:""}},[a("v-col",{attrs:{cols:"12",sm:"7"}},[a("v-row",{staticClass:"footer__copy ml-sm-10",attrs:{justify:"center","justify-sm":"start"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Zachary Knuttila | "),a("a",{attrs:{href:"https://www.carmengoetz.ca",target:"_blank"}},[t._v(" Carmen Goetz ")])])])],1),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-row",{staticClass:"mr-sm-10",attrs:{justify:"center","justify-sm":"end"}},[t._l(t.socials,(function(e){return a("v-btn",{key:e.name,staticClass:"footer__button mx-1",attrs:{icon:"",href:e.link,target:"_blank"}},[a("v-icon",{attrs:{size:"24"}},[t._v(" "+t._s(e.icon)+" ")])],1)})),a("v-dialog",{attrs:{width:"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"footer__button mx-1",attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",{attrs:{size:"24"}},[t._v(" "+t._s("mdi-email")+" ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-actions",{staticClass:"footer__dialog px-6 pt-4"},[a("v-card-title",{staticClass:"footer--text text-h5"},[t._v("Contact Zachary")]),a("v-spacer"),a("v-btn",{staticClass:"footer__dialog--close",attrs:{fab:"",text:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("Contact")],1)],1)],2)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"form"},[a("v-form",{staticClass:"mx-8 mb-6",on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{name:"firstname",rules:t.nameRules,label:"First name",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{name:"lastname",label:"Last name"},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{name:"email",rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{name:"message",rules:t.messageRules,filled:"",label:"Message","auto-grow":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[a("v-btn",{staticClass:"form__button",attrs:{disabled:!t.valid,type:"submit"}},[t._v("Send Message")])],1)],1)],1)],1)},c=[],u=a("f8c5"),m=void 0,d={name:"Contact",data:function(){return{valid:!1,firstname:"",lastname:"",nameRules:[function(t){return!!t||"First name is required"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],message:"",messageRules:[function(t){return!!t||"Message is required"}],snackbarSuccess:!1,text:"Hello, I'm a snackbar",snackbarFail:!1}},methods:{sendEmail:function(t){u["a"].sendForm("service_4ysvek7","template_lg8tddi",t.target,"user_20V2lpCRDxS6tEJvEjxAP").then((function(t){alert("Message Sent!"),console.log("SUCCESS!",t.status,t.text)}),(function(t){alert("There was a problem sending your message, please try again"),console.log("FAILED...",t)})).bind(m)}}},p=d,f=(a("7a5a"),a("2877")),g=a("6544"),h=a.n(g),v=a("8336"),y=a("62ad"),b=a("a523"),w=a("4bd4"),x=a("0fd9b"),k=a("8654"),_=a("a844"),C=Object(f["a"])(p,l,c,!1,null,null,null),j=C.exports;h()(C,{VBtn:v["a"],VCol:y["a"],VContainer:b["a"],VForm:w["a"],VRow:x["a"],VTextField:k["a"],VTextarea:_["a"]});var S={components:{Contact:j},name:"Footer",data:function(){return{dialog:!1,socials:[{link:"https://www.instagram.com/zacharyknuttila/",name:"Instagram",icon:"mdi-instagram"},{link:"https://www.youtube.com/user/ZacKnuttila/",name:"YouTube",icon:"mdi-youtube"}]}}},V=S,E=(a("85e6"),a("b0af")),z=a("99d9"),T=a("169a"),A=a("553a"),O=a("132d"),D=a("2fa4"),F=Object(f["a"])(V,i,s,!1,null,"ca006d98",null),L=F.exports;h()(F,{VBtn:v["a"],VCard:E["a"],VCardActions:z["a"],VCardTitle:z["b"],VCol:y["a"],VDialog:T["a"],VFooter:A["a"],VIcon:O["a"],VRow:x["a"],VSpacer:D["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"nav px-0 px-md-16",attrs:{flat:"","max-height":"132",height:"132",color:"transparent"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"9",xl:"10"}},[n("router-link",{attrs:{to:{name:"Home"}}},[n("v-img",{staticClass:"nav--dark mx-auto mx-md-0 my-4 my-md-0",attrs:{"max-width":t.getImageWidth(),contain:"",src:a("2f99"),"lazy-src":a("34b7")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),n("v-img",{staticClass:"nav--light mx-auto mx-md-0",attrs:{"max-width":t.getImageWidth(),contain:"",src:a("d647"),"lazy-src":a("b3c0")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[t._v(" >")])],1)],1),n("v-spacer"),t._l(t.pages,(function(e){return n("v-col",{key:e.index,attrs:{cols:e.cols,md:e.md,xl:"1"}},[n("router-link",{attrs:{to:{name:e.name}}},[n("v-img",{staticClass:"nav--dark mx-auto mx-md-0",attrs:{"max-width":e.width,src:e.imgDark,"lazy-src":e.lazyDark},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),n("v-img",{staticClass:"nav--light mx-auto mx-md-0",attrs:{"max-width":e.width,src:e.imgLight,"lazy-src":e.lazyLight},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)}))],2)],1)},M=[],P={name:"Header",components:{},data:function(){return{pages:[{path:"/gallery",name:"Gallery",imgDark:a("8002"),lazyDark:a("5f3a"),imgLight:a("f584"),lazyLight:a("85ff"),cols:"7",md:"2",width:window.matchMedia("(min-width: 600px)").matches?"148":"111",exact:!1},{path:"/cv",name:"CurriculumVitae",imgDark:a("9f60"),lazyDark:a("2aae"),imgLight:a("b064"),lazyLight:a("0f28"),cols:"5",md:"1",width:window.matchMedia("(min-width: 600px)").matches?"61":"46",exact:!1}]}},methods:{getImageWidth:function(){return window.matchMedia("(min-width: 600px)").matches?"400":"300"}}},Z=P,R=(a("8fe7"),a("40dc")),I=a("adda"),q=a("490a"),G=Object(f["a"])(Z,K,M,!1,null,"7592c3b2",null),H=G.exports;h()(G,{VAppBar:R["a"],VCol:y["a"],VImg:I["a"],VProgressCircular:q["a"],VRow:x["a"],VSpacer:D["a"]});var B={components:{Header:H,Footer:L},name:"App"},N=B,$=(a("5c0b"),a("7496")),J=a("f6c4"),W=Object(f["a"])(N,r,o,!1,null,null,null),U=W.exports;h()(W,{VApp:$["a"],VMain:J["a"]});a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("a630"),a("159b"),a("b64b");var Y=a("8c4f");n["a"].use(Y["a"]);var Q=[{path:"/",name:"Home",component:function(){return a.e("home").then(a.bind(null,"bb51"))},meta:{title:"Zachary Knuttila - Home",metaTags:[{name:"description",content:""},{property:"og:description",content:""},{property:"og:url",content:"https://zacharyjknuttila.com"},{property:"twitter:description",content:""},{property:"twitter:url",content:"https://zacharyjknuttila.com"}]}},{path:"/cv",name:"CurriculumVitae",component:function(){return a.e("cv").then(a.bind(null,"ac4b"))},meta:{title:"Zachary Knuttila - CV",metaTags:[{name:"description",content:"Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking."},{property:"og:description",content:"Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking."},{property:"og:url",content:"https://zacharyjknuttila.com/cv"},{property:"twitter:description",content:"Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking."},{property:"twitter:url",content:"https://zacharyjknuttila.com/cv"}]}},{path:"/gallery",name:"Gallery",component:function(){return a.e("gallery").then(a.bind(null,"0d77"))},meta:{title:"Zachary Knuttila - Gallery",metaTags:[{name:"description",content:"Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking."},{property:"og:description",content:"Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking."},{property:"og:url",content:"https://zacharyjknuttila.com/gallery"},{property:"twitter:description",content:"Zachary Knuttila is an emerging artist based in Saskatoon, focusing on digital work and traditional printmaking."},{property:"twitter:url",content:"https://zacharyjknuttila.com/gallery"}]}},{path:"/:catchAll(.*)",redirect:"/"}],X=new Y["a"]({mode:"history",base:"/",routes:Q});X.beforeEach((function(t,e,a){var n;if(document.title=null!==(n=t.meta.title)&&void 0!==n?n:"Creative Reyne",Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!t.meta.metaTags)return a();t.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(a){e.setAttribute(a,t[a])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),a()}));var tt=X,et=a("f309");n["a"].use(et["a"]);var at=new et["a"]({theme:{disable:!0}});n["a"].config.productionTip=!1,new n["a"]({router:tt,vuetify:at,render:function(t){return t(U)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5f3a":function(t,e,a){t.exports=a.p+"img/Gallery-low.9be49920.png"},"7a5a":function(t,e,a){"use strict";a("ebf5")},8002:function(t,e,a){t.exports=a.p+"img/Gallery.7b21366b.png"},"85e6":function(t,e,a){"use strict";a("ddb1")},"85ff":function(t,e,a){t.exports=a.p+"img/Gallery2-low.654933de.png"},"8fe7":function(t,e,a){"use strict";a("f68e")},"9c0c":function(t,e,a){},"9f60":function(t,e,a){t.exports=a.p+"img/cv.7c8d626e.png"},b064:function(t,e,a){t.exports=a.p+"img/cv2.d531d077.png"},b3c0:function(t,e,a){t.exports=a.p+"img/heading2-low.c143b288.png"},d647:function(t,e,a){t.exports=a.p+"img/heading2.ee547009.png"},ddb1:function(t,e,a){},ebf5:function(t,e,a){},f584:function(t,e,a){t.exports=a.p+"img/Gallery2.b2ef754f.png"},f68e:function(t,e,a){}});
//# sourceMappingURL=app.569e5879.js.map