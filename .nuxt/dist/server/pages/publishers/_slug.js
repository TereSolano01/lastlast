exports.ids = [8,1,2];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/HeaderView.vue?vue&type=template&id=95800244&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('NuxtLink', {
    staticClass: "three columns button button-primary",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "three columns button button-primary",
    attrs: {
      "to": "/books_index"
    }
  }, [_vm._v("Books")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "three columns button button-primary",
    attrs: {
      "to": "/authors_index"
    }
  }, [_vm._v("Authors")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "three columns button button-primary",
    attrs: {
      "to": "/publishers_index"
    }
  }, [_vm._v("Publishers")])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/HeaderView.vue?vue&type=template&id=95800244&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/HeaderView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8cf9da88"
  
)

/* harmony default export */ var HeaderView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/FooterView.vue?vue&type=template&id=5a2e731b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_vm._ssrNode("<button disabled=\"disabled\" class=\"twelve columns button-primary\">\n    Copyright (c) 2021 - Armando Arce-Orozco\n  </button>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/FooterView.vue?vue&type=template&id=5a2e731b&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/FooterView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00e7f7ca"
  
)

/* harmony default export */ var FooterView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/publishers/_slug.vue?vue&type=template&id=15fbd9b4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_c('HeaderView'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"three columns\"><img" + _vm._ssrAttr("src", '/images/' + _vm.publisher.image) + " class=\"u-max-full-width\"></div> "), _vm._ssrNode("<div class=\"six columns\">", "</div>", [_vm._ssrNode("<h4>" + _vm._ssrEscape(_vm._s(_vm.publisher.name)) + "</h4>" + _vm._ssrEscape("\n\t   Country: " + _vm._s(_vm.publisher.country) + "; Founded: " + _vm._s(_vm.publisher.founded)) + "<br>" + _vm._ssrEscape("\n\t   Genere: " + _vm._s(_vm.publisher.genere)) + "<br><br> <b>History</b><br> "), _c('nuxt-content', {
    attrs: {
      "document": _vm.publisher
    }
  })], 2), _vm._ssrNode(" <div class=\"three columns\"></div> <h5>Books</h5> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.books, function (book) {
    return _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
      attrs: {
        "to": {
          name: 'books-slug',
          params: {
            slug: book.slug
          }
        }
      }
    }, [_vm._v(_vm._s(book.title))])], 1);
  }), 0)], 2), _vm._ssrNode(" "), _c('FooterView')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/publishers/_slug.vue?vue&type=template&id=15fbd9b4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/publishers/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const publisher = await $content('publishers', params.slug).fetch();
    const books = await $content('books').where({
      publisherId: params.slug
    }).fetch();
    return {
      publisher,
      books
    };
  }
});
// CONCATENATED MODULE: ./pages/publishers/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var publishers_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/publishers/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  publishers_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "83b07218"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderView: __webpack_require__(23).default,FooterView: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map