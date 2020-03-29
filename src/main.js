import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/assets/CSS/global.css'

import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:81/api/'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
