import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10073296 = () => interopDefault(import('..\\pages\\albums_index.vue' /* webpackChunkName: "pages/albums_index" */))
const _7c93794c = () => interopDefault(import('..\\pages\\authors_index.vue' /* webpackChunkName: "pages/authors_index" */))
const _6ea02b6e = () => interopDefault(import('..\\pages\\books_index.vue' /* webpackChunkName: "pages/books_index" */))
const _2b5efed4 = () => interopDefault(import('..\\pages\\compositors_index.vue' /* webpackChunkName: "pages/compositors_index" */))
const _2bdbc196 = () => interopDefault(import('..\\pages\\movies_index.vue' /* webpackChunkName: "pages/movies_index" */))
const _8c8aed2e = () => interopDefault(import('..\\pages\\publishers_index.vue' /* webpackChunkName: "pages/publishers_index" */))
const _2e0d5183 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _be55f552 = () => interopDefault(import('..\\pages\\albums\\_slug.vue' /* webpackChunkName: "pages/albums/_slug" */))
const _745cd53e = () => interopDefault(import('..\\pages\\authors\\_slug.vue' /* webpackChunkName: "pages/authors/_slug" */))
const _155b277f = () => interopDefault(import('..\\pages\\books\\_slug.vue' /* webpackChunkName: "pages/books/_slug" */))
const _0fb57757 = () => interopDefault(import('..\\pages\\compositors\\_slug.vue' /* webpackChunkName: "pages/compositors/_slug" */))
const _0827ac98 = () => interopDefault(import('..\\pages\\movies\\_slug.vue' /* webpackChunkName: "pages/movies/_slug" */))
const _2d8c88e4 = () => interopDefault(import('..\\pages\\publishers\\_slug.vue' /* webpackChunkName: "pages/publishers/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/albums_index",
    component: _10073296,
    name: "albums_index"
  }, {
    path: "/authors_index",
    component: _7c93794c,
    name: "authors_index"
  }, {
    path: "/books_index",
    component: _6ea02b6e,
    name: "books_index"
  }, {
    path: "/compositors_index",
    component: _2b5efed4,
    name: "compositors_index"
  }, {
    path: "/movies_index",
    component: _2bdbc196,
    name: "movies_index"
  }, {
    path: "/publishers_index",
    component: _8c8aed2e,
    name: "publishers_index"
  }, {
    path: "/",
    component: _2e0d5183,
    name: "index"
  }, {
    path: "/albums/:slug?",
    component: _be55f552,
    name: "albums-slug"
  }, {
    path: "/authors/:slug?",
    component: _745cd53e,
    name: "authors-slug"
  }, {
    path: "/books/:slug?",
    component: _155b277f,
    name: "books-slug"
  }, {
    path: "/compositors/:slug?",
    component: _0fb57757,
    name: "compositors-slug"
  }, {
    path: "/movies/:slug?",
    component: _0827ac98,
    name: "movies-slug"
  }, {
    path: "/publishers/:slug?",
    component: _2d8c88e4,
    name: "publishers-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
