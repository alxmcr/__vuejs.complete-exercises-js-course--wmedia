import Vue from "vue";
import App from "./App.vue";

// VueRouter
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

// Vuex
import {store} from './store'

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  console.log('Acceso global a ruta');
  // ⚠️ sin esta linea, 
  // no pasariamos a la 
  // 'siguiente ruta' (que en este caso ⚠️ seria cualquiera)
  next(); 
});

new Vue({
  el: "#app",
  router, // vue-router
  store, // vuex
  render: h => h(App)
});
