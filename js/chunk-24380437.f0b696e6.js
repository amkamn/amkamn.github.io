(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24380437"],{"11e9":function(e,t,r){var n=r("52a7"),a=r("4630"),s=r("6821"),c=r("6a99"),i=r("69a8"),o=r("c69a"),u=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?u:function(e,t){if(e=s(e),t=c(t,!0),o)try{return u(e,t)}catch(r){}if(i(e,t))return a(!n.f.call(e,t),e[t])}},3138:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"genresFade"}},[r("div",{staticClass:"genres"},[r("Loader"),e.LOADING?e._e():r("vs-row",[r("vs-col",{staticClass:"header",staticStyle:{"padding-top":"1em"},attrs:{"vs-type":"flex","vs-w":"6"}},[r("vs-breadcrumb",[r("li",[r("a",{directives:[{name:"colorChange",rawName:"v-colorChange"}],attrs:{href:"/",title:"Home"}},[e._v("Home")]),r("span",{staticClass:"vs-breadcrum--separator"},[e._v("/")])]),r("li",{staticClass:"active",attrs:{"aria-current":"page"}},[e._v(e._s(e.UserSelectedGenres))])])],1),r("vs-col",{staticClass:"header",staticStyle:{"padding-top":"1em","padding-right":"1em"},attrs:{"vs-type":"flex","vs-w":"6"}},[r("Search")],1),e._l(e.genres,function(t){return r("vs-col",{key:t.id,staticClass:"movielist",staticStyle:{padding:"1em",width:"20%"},attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-w":"3"}},[r("router-link",{attrs:{to:{name:"movie",params:{id:t.id}}}},[r("vs-card",{staticClass:"cardx"},[r("div",{attrs:{slot:"media"},slot:"media"},[r("img",{attrs:{src:e._f("setImagePath")(t.poster_path)}})]),r("div",[r("span",[e._v(e._s(t.overview))])]),r("div",{attrs:{slot:"footer"},slot:"footer"})])],1)],1)}),r("Pagination",{attrs:{page:e.page,totalPage:e.totalPage},on:{more:e.more,prev:e.prev}})],2)],1)])},a=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach(function(t){Object(s["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var u=function(){return r.e("chunk-cf855ac2").then(r.bind(null,"9ba0"))},f=function(){return r.e("chunk-004f566a").then(r.bind(null,"ebbb"))},l=function(){return r.e("chunk-51c3031a").then(r.bind(null,"6407"))},p={head:{title:{inner:"Genres"}},computed:o({},Object(c["c"])({genres:function(e){return e.genres.genres},LOADING:function(e){return e.genres.loadingGenre}}),{},Object(c["b"])({UserSelectedGenres:"genres/getUserSelectedGenres",page:"genres/getCurrentPage",totalPage:"genres/getTotalPage"})),mounted:function(){this.initGenres()},methods:{initGenres:function(){var e=this.$route.params.genres;this.$store.dispatch("genres/fetchGenres",{slug:e})},more:function(){var e=this.$route.params.genres;this.$store.dispatch("genres/fetchGenresMore",{slug:e})},prev:function(){var e=this.$route.params.genres;this.$store.dispatch("genres/fetchGenresPrev",{slug:e})}},watch:{$route:function(){this.initGenres()}},components:{Loader:u,Search:f,Pagination:l}},d=p,g=(r("d1c7"),r("2877")),v=Object(g["a"])(d,n,a,!1,null,null,null);t["default"]=v.exports},"454f":function(e,t,r){r("46a7");var n=r("584a").Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},"46a7":function(e,t,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"85f2":function(e,t,r){e.exports=r("454f")},"8e6e":function(e,t,r){var n=r("5ca1"),a=r("990b"),s=r("6821"),c=r("11e9"),i=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){var t,r,n=s(e),o=c.f,u=a(n),f={},l=0;while(u.length>l)r=o(n,t=u[l++]),void 0!==r&&i(f,t,r);return f}})},9093:function(e,t,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},"990b":function(e,t,r){var n=r("9093"),a=r("2621"),s=r("cb7c"),c=r("7726").Reflect;e.exports=c&&c.ownKeys||function(e){var t=n.f(s(e)),r=a.f;return r?t.concat(r(e)):t}},bd86:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("85f2"),a=r.n(n);function s(e,t,r){return t in e?a()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},c291:function(e,t,r){},d1c7:function(e,t,r){"use strict";var n=r("c291"),a=r.n(n);a.a},f1ae:function(e,t,r){"use strict";var n=r("86cc"),a=r("4630");e.exports=function(e,t,r){t in e?n.f(e,t,a(0,r)):e[t]=r}}}]);
//# sourceMappingURL=chunk-24380437.f0b696e6.js.map