import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui';                         //引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)  


import api from '@/api/api.js'              //api管理列表
Vue.prototype.$service = api


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
