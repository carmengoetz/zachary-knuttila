(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gallery"],{"04ef":function(e,a,t){e.exports=t.p+"img/TheSoundOfWishingIWasAnywhereElseStoneLithograph2018-low.e58d30ec.png"},"0d77":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-row",{staticClass:"d-none d-sm-flex"},[t("v-col",{attrs:{cols:"12",lg:"6"}},e._l(e.images,(function(a){return t("v-row",{key:a.index},[a.index%2==0?t("div",{staticClass:"my-8 mx-auto"},[t("GalleryImage",{attrs:{index:a.index,image:a.image,lazy:a.imageLazy,title:a.title,medium:a.medium,date:a.date}})],1):e._e()])})),1),t("v-col",{attrs:{cols:"12",lg:"6"}},e._l(e.images,(function(a){return t("v-row",{key:a.index},[a.index%2!=0?t("div",{staticClass:"my-8 mx-auto"},[t("GalleryImage",{attrs:{index:a.index,image:a.image,lazy:a.imageLazy,title:a.title,medium:a.medium,date:a.date}})],1):e._e()])})),1)],1),t("v-row",{staticClass:"d-flex d-sm-none",attrs:{"no-gutters":""}},e._l(e.images,(function(e){return t("div",{key:e.index,staticClass:"mx-auto"},[t("GalleryImageMobile",{attrs:{index:e.index,image:e.image,lazy:e.imageLazy,title:e.title,medium:e.medium,date:e.date}})],1)})),0)],1)},n=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-dialog",{attrs:{transition:"fade-transition","max-width":"1400","content-class":"elevation-0",fullscreen:""},scopedSlots:e._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[t("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var o=a.hover;return[t("v-img",e._g(e._b({staticClass:"gallery__image mx-auto",attrs:{"max-width":e.getImageWidth(),contain:"",src:e.image,"lazy-src":e.lazy},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},"v-img",n,!1),i),[t("v-expand-transition",[o?t("v-row",{staticClass:"transition-slow-in-slow-out gallery--reveal pl-4",attrs:{"no-gutters":"",align:"center"}},[e._v(" "+e._s(e.title.toUpperCase())),t("br"),e._v(" "+e._s(e.medium)+" "+e._s(e.date)+" ")]):e._e()],1)],1)]}}],null,!0)})]}}]),model:{value:e.dialog[e.index],callback:function(a){e.$set(e.dialog,e.index,a)},expression:"dialog[index]"}},[t("v-card",{attrs:{color:"transparent"}},[t("v-card-actions",[t("v-spacer"),t("v-btn",{staticClass:"gallery__close",attrs:{fab:"",text:""},on:{click:function(a){return e.$set(e.dialog,e.index,!1)}}},[t("v-icon",[e._v("mdi-close")])],1)],1),t("v-img",{staticClass:"mx-auto",attrs:{contain:"","max-height":e.getDialogHeight(),src:e.image,"lazy-src":e.lazy},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)},r=[],s={name:"GalleryImage",props:["index","image","lazy","title","medium","date"],data:function(){return{dialog:[]}},methods:{getImageWidth:function(){return window.matchMedia("(min-width: 1904px)").matches?"800":"500"},getDialogHeight:function(){return window.matchMedia("(min-width: 1904px)").matches?"1000":"700"}}},l=s,c=(t("5126"),t("2877")),d=t("6544"),g=t.n(d),u=t("8336"),m=t("b0af"),p=t("99d9"),h=t("169a"),f=t("0789"),v=t("16b7"),y=t("f2e7"),x=t("58df"),b=t("d9bd"),w=Object(x["a"])(v["a"],y["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(b["c"])("v-hover should only contain a single element",this),e)):(Object(b["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var e}}),_=t("132d"),M=t("adda"),L=t("490a"),C=t("0fd9b"),T=t("2fa4"),z=Object(c["a"])(l,o,r,!1,null,"474328b2",null),j=z.exports;g()(z,{VBtn:u["a"],VCard:m["a"],VCardActions:p["a"],VDialog:h["a"],VExpandTransition:f["a"],VHover:w,VIcon:_["a"],VImg:M["a"],VProgressCircular:L["a"],VRow:C["a"],VSpacer:T["a"]});var S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{fluid:""}},[t("v-img",{staticClass:"mx-auto",attrs:{"max-width":"300",src:e.image,"lazy-src":e.lazy},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),t("v-row",{staticClass:"gallery--reveal px-4",attrs:{"no-gutters":"",align:"center"}},[e._v(" "+e._s(e.title.toUpperCase())),t("br"),e._v(" "+e._s(e.medium)+" "+e._s(e.date)+" ")])],1)},V=[],G={name:"GalleryImage",props:["index","image","lazy","title","medium","date"],data:function(){return{dialog:[]}}},A=G,I=(t("b51f"),t("a523")),O=Object(c["a"])(A,S,V,!1,null,"14f0db2b",null),k=O.exports;g()(O,{VContainer:I["a"],VImg:M["a"],VProgressCircular:L["a"],VRow:C["a"]});var U={components:{GalleryImage:j,GalleryImageMobile:k},name:"Gallery",data:function(){return{dialog:[],images:[{index:0,image:t("fada"),imageLazy:t("cd52"),title:"Learning to Tie Shoes - Guessing ",medium:"Generative Animation",date:"2018"},{index:1,image:t("372e"),imageLazy:t("8ce1"),title:"Do You Feel Alone Together",medium:"Risograph",date:"2019"},{index:2,image:t("b4b1"),imageLazy:t("04ef"),title:"Learning to Tie Shoes",medium:"Guessing Generative Animation",date:"2018"},{index:3,image:t("68b7"),imageLazy:t("4dae"),title:"Topographical Map of Unreal Moons 1",medium:"Lithograph",date:"2016"},{index:4,image:t("7083"),imageLazy:t("e2e1"),title:"Topographical Map of Unreal Moons 2",medium:"Lithograph",date:"2016"},{index:5,image:t("639c"),imageLazy:t("1324"),title:"Topographical Map of Unreal Moons 3",medium:"Lithograph",date:"2016"}]}},methods:{getImageWidth:function(){return window.matchMedia("(min-width: 1904px)").matches?"400":"300"}}},D=U,E=(t("1d8e"),t("62ad")),$=Object(c["a"])(D,i,n,!1,null,"10b7f165",null);a["default"]=$.exports;g()($,{VCol:E["a"],VContainer:I["a"],VRow:C["a"]})},1324:function(e,a,t){e.exports=t.p+"img/TopographicalMapOfUnrealMoons3Lithograph2016-low.e9563767.jpg"},"1d8e":function(e,a,t){"use strict";t("5a10")},"372e":function(e,a,t){e.exports=t.p+"img/DoYouFeelAloneTogetherRisograph2019.a3174020.jpg"},"4dae":function(e,a,t){e.exports=t.p+"img/TopographicalMapOfUnrealMoons1Lithograph2016-low.5cbd4c84.jpg"},5126:function(e,a,t){"use strict";t("ec63")},"5a10":function(e,a,t){},"639c":function(e,a,t){e.exports=t.p+"img/TopographicalMapOfUnrealMoons3Lithograph2016.c983f6f8.jpg"},"68b7":function(e,a,t){e.exports=t.p+"img/TopographicalMapOfUnrealMoons1Lithograph2016.cdc5e798.jpg"},7083:function(e,a,t){e.exports=t.p+"img/TopographicalMapOfUnrealMoons2Lithograph2016.33ac0b6f.jpg"},"8ce1":function(e,a,t){e.exports=t.p+"img/DoYouFeelAloneTogetherRisograph2019-low.36a43c24.jpg"},"8da0":function(e,a,t){},b4b1:function(e,a,t){e.exports=t.p+"img/TheSoundOfWishingIWasAnywhereElseStoneLithograph2018.5f37e319.png"},b51f:function(e,a,t){"use strict";t("8da0")},cd52:function(e,a,t){e.exports=t.p+"img/LearningToTieShoesGuessingGenerativeAnimation2018-low.a47a730b.jpg"},e2e1:function(e,a,t){e.exports=t.p+"img/TopographicalMapOfUnrealMoons2Lithograph2016-low.ba101f3d.jpg"},ec63:function(e,a,t){},fada:function(e,a,t){e.exports=t.p+"img/LearningToTieShoesGuessingGenerativeAnimation2018.9e486cb9.jpg"}}]);
//# sourceMappingURL=gallery.b2222043.js.map