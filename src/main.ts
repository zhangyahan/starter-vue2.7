import Vue from 'vue'
import './styles/style.css'
import App from './App.vue'
import { pinia } from './store'
import { router } from './router'

const app = new Vue({
  pinia,
  router,
  render: (h) => h(App),
})

app.$mount('#app')
