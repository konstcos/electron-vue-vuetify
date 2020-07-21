import Vue from 'vue'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import App from './App'
import router from './router'
import store from './store'


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify,
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
