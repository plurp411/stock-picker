(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{203:function(t,e,n){"use strict";n.r(e);var c=n(0).default.extend({head:function(){return{title:"The Simple Stock Picker",meta:[]}},computed:{pages:function(){return this.$store.state.pages.all}},methods:{getSpacing:function(t){return t<this.pages.length-1?"mb-7":""}}}),r=n(15),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-4"},[n("div",{staticClass:"d-flex align-center justify-space-between mb-4"},[n("v-btn",{attrs:{depressed:"",color:"accent darken-1 white--text",small:""},on:{click:function(e){return t.$router.back()}}},[n("v-icon",{attrs:{left:""}},[t._v("\n        mdi-chevron-left\n      ")]),t._v("\n      Back\n    ")],1),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"accent darken-1 white--text",small:"",to:"/"}},[t._v("\n      Home\n      "),n("v-icon",{attrs:{right:"",small:""}},[t._v("\n        mdi-home\n      ")])],1)],1),t._v(" "),t._l(t.pages,(function(e,c){return n("v-card",{key:e.id,class:"primary pa-2 "+t.getSpacing(c),attrs:{flat:""}},[n("v-card-text",{staticClass:"py-3 px-3 d-flex justify-space-between align-center"},[n("span",{staticClass:"display-1 font-weight-bold"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("span",{staticClass:"text-h6 font-weight-medium"},[t._v("\n        "+t._s(e.index)+"\n      ")])]),t._v(" "),n("v-card-actions",{staticClass:"px-3 pb-3 pt-3"},[n("nuxt-link",{staticClass:"text-decoration-none mt-n2",staticStyle:{width:"100%"},attrs:{to:{name:"pages-id",params:{id:e.id}}}},[n("v-btn",{staticClass:"accent lighten-0",attrs:{block:"",depressed:"",width:"100%"}},[t._v("\n          Open\n        ")])],1)],1)],1)}))],2)}),[],!1,null,"2aa7f576",null);e.default=component.exports}}]);