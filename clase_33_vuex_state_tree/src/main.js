import Vue from 'vue'
import App from './App.vue'

// Solo me interesa 'store'  por eso las {} debido a que exportamos una variable con el nombre 'store'
import {store} from "./store/store"

new Vue({
  el: '#app',
  // inyectando la fuente de verdad
  store,
  render: h => h(App)
})
