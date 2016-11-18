import Vue from 'vue'
import App from './App'
import {} from './style/global.css'
import VueRouter from 'vue-router'
import routes, {configure} from './routes'

Vue.use(VueRouter)
export const router = new VueRouter({routes})
configure(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
