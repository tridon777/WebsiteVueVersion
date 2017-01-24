// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Test from './components/Test'
import Hello from './components/Hello'
import Home from './components/Home'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
     routes: [
         { path: '/test', component: Test },
         { path: '/', component: Hello },
         { path: '/home', component: Home}
     ],
     mode: 'history'

})


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})



/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router: router,
//   template: '<App/>',
//   components: { App }
// })
