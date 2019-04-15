import Vue from "vue";
import App from "./App.vue";
import Info from "./components/Info.vue";
import Bio from "./components/Bio.vue";

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

    if(to.hash){
      position.selector = to.hash;
    }else{
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
