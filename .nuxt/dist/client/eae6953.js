(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{293:function(t,n,r){"use strict";r.r(n);var e=r(48),component=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[n("NuxtLink",{staticClass:"three columns button button-primary",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("NuxtLink",{staticClass:"three columns button button-primary",attrs:{to:"/books_index"}},[t._v("Books")]),t._v(" "),n("NuxtLink",{staticClass:"three columns button button-primary",attrs:{to:"/authors_index"}},[t._v("Authors")]),t._v(" "),n("NuxtLink",{staticClass:"three columns button button-primary",attrs:{to:"/publishers_index"}},[t._v("Publishers")])],1)}),[],!1,null,null,null);n.default=component.exports},294:function(t,n,r){"use strict";r.r(n);var e=r(48),component=Object(e.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[t("button",{staticClass:"twelve columns button-primary",attrs:{disabled:"disabled"}},[this._v("\n    Copyright (c) 2021 - Armando Arce-Orozco\n  ")])])}],!1,null,null,null);n.default=component.exports},309:function(t,n,r){"use strict";r.r(n);r(25);var e=r(9),o=(r(49),{asyncData:function(t){return Object(e.a)(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.$content,t.params,n.next=3,r("authors").fetch();case 3:return e=n.sent,n.abrupt("return",{authors:e});case 5:case"end":return n.stop()}}),n)})))()}}),l=r(48),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("HeaderView"),t._v(" "),n("h3",{staticStyle:{"margin-top":"15px"}},[t._v("Authors Information")]),t._v(" "),n("p",[t._v("This section presents information about authors")]),t._v(" "),n("ul",t._l(t.authors,(function(r){return n("li",{key:r.slug},[n("NuxtLink",{attrs:{to:{name:"authors-slug",params:{slug:r.slug}}}},[t._v(t._s(r.name))])],1)})),0),t._v(" "),n("FooterView")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HeaderView:r(293).default,FooterView:r(294).default})}}]);