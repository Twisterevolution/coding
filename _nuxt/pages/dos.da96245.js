(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{296:function(e,t,n){"use strict";n.r(t);n(24),n(65);var r=n(22),l=n(75),c=n.n(l),o={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,t.next=3,c.a.get("https://swapi.dev/api/people/");case 3:n=t.sent,data=n.data,n.error,i=0;case 7:if(!(i<data.results.length)){t.next=15;break}return t.next=10,c.a.get(data.results[i].homeworld);case 10:r=t.sent,data.results[i].planeta=r.data.name;case 12:i++,t.next=7;break;case 15:return t.abrupt("return",{personajes:data.results});case 16:case"end":return t.stop()}}),t)})))()},methods:{},computed:{}},_=n(58),component=Object(_.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Star Wars Example")]),e._v(" "),n("ul",e._l(e.personajes,(function(t){return n("li",{key:t.id},[e._v("\n      "+e._s(t.name)+"\n      "),n("ul",[n("li",[e._v("Estatura:"+e._s(t.height))]),e._v(" "),n("li",[e._v("Peso:"+e._s(t.mass))]),e._v(" "),n("li",[e._v("PLANETA:"+e._s(t.planeta))])])])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);