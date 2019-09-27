import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import Home from './components/Home.vue'
import About from './components/About.vue'
import Info from './components/Info.vue'

import {routes} from './routes.js'

Vue.use(VueRouter);

Vue.component('app-home', Home)
Vue.component('app-about', About)
Vue.component('app-info', Info)


const routerVar = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: routerVar,
  render: h => h(App)
})
