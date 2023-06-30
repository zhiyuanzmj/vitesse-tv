import './assets/main.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'uno.css'
import '@unocss/reset/tailwind.css'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

