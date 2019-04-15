// ¿Quien 'vive' en cada una de las rutas?

const home = Vue.component("Home", {
  template: "<h2>Portada</h2>"
});

const contacto = Vue.component("Contacto", {
  template: "<h2>Contacto</h2>"
});

//  Plano de destinos con sus rutas
const routes = [
  {
    path: "/",
    component: home
  },
  {
    path: "/contacto",
    component: contacto
  }
];

// Instanciar el componente Enrutador
const router = new VueRouter({
    routes: routes
})

new Vue({
  router: router,
  el: "main"
});
