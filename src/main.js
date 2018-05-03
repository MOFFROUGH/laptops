// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vue2Filters from 'vue2-filters'
import Panel from '@/components/global/panel'
Vue.use(Vue2Filters)
Vue.use(Vuetify, { theme: {
  primary: '#FF9800',
  secondary: '#1E88E5',
  accent: '#90A4AE',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50'
}})
Vue.component('panel', Panel)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
