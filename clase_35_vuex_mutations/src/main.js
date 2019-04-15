import Vue from 'vue'
import App from './App.vue'

// Vuex store
import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
