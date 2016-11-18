import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import {} from './style/global.css'

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
