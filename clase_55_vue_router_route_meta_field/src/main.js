import Vue from "vue";
import App from "./App.vue";

// VueRouter
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

// Vuex
import { store } from "./store";

const router = new VueRouter({
  // mode: "history",
  routes
});

// Global Guard - Todas las rutas...

router.beforeEach((to, from, next) => {
  console.log("Acceso global a ruta");

  if (to.matched.some(record => record.meta.isPrivado)) {
    console.log("Es privado");
    // Es privado, ❌ no dejamos ingresar a la ruta que sea 'privadas' como ser: /contacto
    var tieneAutorizacion = store.getters.getTieneAutorizacion;

    if (tieneAutorizacion) {
      next();
    } else {
      console.log("No tiene Autorizacion");
      next(false);
    }
  } else {
    console.log("No Es privado");
    // NO es privado, ✔️ puede ingresar a la ruta /contacto
    // ⚠️ next()... sin esta linea,
    // no pasariamos a la
    // 'siguiente ruta' (que en este caso ⚠️ seria cualquiera)
    next();
  }
});

new Vue({
  el: "#app",
  router, // vue-router
  store, // vuex
  render: h => h(App)
});
