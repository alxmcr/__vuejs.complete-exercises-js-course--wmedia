import Vue from "vue";
import App from "./App.vue";
import Info from "./components/Info.vue";

// 🤔🤔 Loading 'Normal'
// Cargar el componente cuando necesite o NO ⚠️⚠️
// import Bio from "./components/Bio.vue";

// ✔️✔️ Lazy Loading:
// Cargar el componente, ⭐⭐ solo si ACCEDO a el, o cuando lo NECESITE
// For single component, we can simply use dynamic import which returns
// a Promise.
// ⚠️ Note.- esto es un proceso Asincrono
// ️️️⚠️⚠️ Sintaxis 'import' manejada por babel
const Bio = () => import("./components/Bio.vue");

// vue-router
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Info
  },
  {
    path: "/bio",
    component: Bio
  }
];

const router = new VueRouter({
  // ⚠️⚠️⚠️ Scroll Behavior: solo funciona en el modo 'history'
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    const position = {};

    console.log("to:", to);

    if (to.hash) {
      position.selector = to.hash;
    } else {
      position.x = 300; // 100px
      position.y = 400; // 100px
    }

    return position;
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
