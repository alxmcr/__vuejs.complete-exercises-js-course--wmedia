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

// Global Guard: Navegacion de forma global
// se ejecutara 'en cada una de las rutas'
// - ✔️ to: a donde vamos
// - ✔️ from: de donde venimos
// - ✔️ next: Continuar a la siguiente ruta
router.beforeEach((to, from, next) => {
  console.log('Acceso a ruta');
  next(store.state.auth); // ⚠️ sin esta linea, no pasariamos a la 'siguiente ruta'
});

new Vue({
  el: "#app",
  router, // vue-router
  store, // vuex
  render: h => h(App)
});
