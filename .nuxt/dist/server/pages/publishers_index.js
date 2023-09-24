exports.ids = [9,1,2];
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

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/publishers_index.vue?vue&type=template&id=7f3b1ccd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_c('HeaderView'), _vm._ssrNode(" <h3 style=\"margin-top: 15px\">Publishers Information</h3> <p>This section presents information about publishers</p> "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.publishers, function (publisher) {
    return _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
      attrs: {
        "to": {
          name: 'publishers-slug',
          params: {
            slug: publisher.slug
          }
        }
      }
    }, [_vm._v(_vm._s(publisher.name))])], 1);
  }), 0), _vm._ssrNode(" "), _c('FooterView')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/publishers_index.vue?vue&type=template&id=7f3b1ccd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/publishers_index.vue?vue&type=script&lang=js&
/* harmony default export */ var publishers_indexvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const publishers = await $content('publishers').fetch();
    return {
      publishers
    };
  }
});
// CONCATENATED MODULE: ./pages/publishers_index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_publishers_indexvue_type_script_lang_js_ = (publishers_indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/publishers_index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_publishers_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c68a88ce"
  
)

/* harmony default export */ var publishers_index = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderView: __webpack_require__(23).default,FooterView: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=publishers_index.js.map