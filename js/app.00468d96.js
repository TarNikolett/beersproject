(function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/beersproject/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"369d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("TableData")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header-nav"}},[n("h1",[e._v(e._s(e.message))])])},l=[],s={name:"Header",data:function(){return{message:"Our Products"}}},u=s,c=(n("8baf"),n("2877")),f=Object(c["a"])(u,i,l,!1,null,null,null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-div"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.beers,"item-key":"name",dense:"",search:e.search,"footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right",prevIcon:"mdi-minus",nextIcon:"mdi-plus"}},scopedSlots:e._u([{key:"item.image_url",fn:function(e){var t=e.item;return[n("img",{attrs:{src:t.image_url}})]}},{key:"top",fn:function(){return[n("v-row",{staticClass:"first-row"},[n("v-col",[n("v-text-field",{staticClass:"search-filter-input",attrs:{label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-col",[n("v-text-field",{staticClass:"search-filter-input",attrs:{type:"number",label:"ABV less than:"},model:{value:e.abv,callback:function(t){e.abv=t},expression:"abv"}})],1)],1)]},proxy:!0}])})],1)},v=[],h=(n("d3b7"),{data:function(){return{search:"",abv:"",beers:[{}]}},computed:{headers:function(){var e=this;return[{text:"Beers name",value:"name",width:30},{text:"Image",value:"image_url",width:30},{text:"Tagline",value:"tagline",width:35},{text:"ABV-Alcohol By Volume",value:"abv",filter:function(t){return!e.abv||t<parseInt(e.abv)},width:50},{text:"Description",value:"description",width:20,align:"center"},{text:"Food pairing",value:"food_pairing",width:80,align:"center"}]}},mounted:function(){var e=this;fetch("https://api.punkapi.com/v2/beers").then((function(e){return e.json()})).then((function(t){return e.beers=t})).catch((function(e){console.log(e.message)}))}}),b=h,m=(n("a4df"),n("6544")),g=n.n(m),w=n("62ad"),y=n("8fea"),x=n("0fd9"),_=n("8654"),O=Object(c["a"])(b,d,v,!1,null,null,null),j=O.exports;g()(O,{VCol:w["a"],VDataTable:y["a"],VRow:x["a"],VTextField:_["a"]});var k={name:"App",components:{Header:p,TableData:j}},P=k,T=Object(c["a"])(P,a,o,!1,null,null,null),S=T.exports,V=n("f309");r["a"].use(V["a"]);var C=new V["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:C,render:function(e){return e(S)}}).$mount("#app")},6860:function(e,t,n){},"8baf":function(e,t,n){"use strict";n("6860")},a4df:function(e,t,n){"use strict";n("369d")}});
//# sourceMappingURL=app.00468d96.js.map