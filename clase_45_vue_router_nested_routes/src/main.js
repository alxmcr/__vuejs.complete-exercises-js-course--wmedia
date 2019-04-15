import Vue from 'vue'
import App from './App.vue'

// VueRouter
import VueRouter from "vue-router";
import { routes } from "./routes";

// Vue usa VueRouter
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
