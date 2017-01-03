// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App'
import Home from './components/Home'
import Mood from './components/Mood'
import Photo from './components/Photo'
import Swiperbar from './components/Swiperbar'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

const routes = [{
  path: '/',
  // component: Home,
  redirect: '/home'   // 重定向 ！！
}, {
  path: '/Home',
  component: Home
}, {
  path: '/Photo',
  component: Photo
}, {
  path: '/Mood',
  component: Mood
}, {
  path: '/Swiperbar',
  component: Swiperbar
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
