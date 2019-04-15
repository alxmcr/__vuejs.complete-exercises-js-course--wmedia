import Vue from 'vue'
import App from './App.vue'

// Vuex store
import store from './store'

new Vue({
  el: '#app',
  store, // ES6: store: store :D
  render: h => h(App)
})
