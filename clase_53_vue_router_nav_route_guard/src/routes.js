import Home from "./components/Home.vue";
import Equipo from "./components/Equipo.vue";
import Usuario from "./components/Usuario.vue";
import UsuarioFotos from "./components/UsuarioFotos.vue";
import UsuarioBio from "./components/UsuarioBio.vue";
import Contacto from "./components/Contacto.vue";
import NoEncontrado from "./components/404/NoEncontrado.vue";
// Vuex
import { store } from "./store";

export const routes = [
  { path: "/", component: Home, name: "home" },

  // Redirect and Alias
  // { path: "/prueba", redirect: "/", component: Home },
  // { path: "/prueba", redirect: { name: "home" }, component: Home },
  {
    path: "/prueba",
    alias: "/otraprueba",
    redirect: { name: "home" },
    component: Home
  },
  {
    path: "/equipo/:id",
    component: Equipo,
    children: [
      {
        path: "",
        components: {
          // Default
          default: Usuario,
          bio: UsuarioBio,
          fotos: UsuarioFotos
        },
        name: "equipo"
      }
    ]
  },
  {
    // Route Guard: Navegacion permitida ⚠️ solo a '/contacto'
    // se ejecutara 'en cada una de las rutas'
    // - ✔️ to: a donde vamos
    // - ✔️ from: de donde venimos
    // - ✔️ next: Continuar a la siguiente ruta
    beforeEnter: (to, from, next) => {
      console.log("Acceso a ruta 'contacto'");
      // ⚠️ sin esta linea,
      // no pasariamos a la
      // 'siguiente ruta' (/contacto)
      // Queda protegida ante un 'store.state.auth = false' 😄😄
      next(store.state.auth);
    },
    path: "/contacto",
    component: Contacto,
    name: "contacto",
    props: {
      newsletter: true
    }
  },
  // ⚠️ debe ser la "ULTIMA RUTA" (como un switch)
  // add a simple catch-all fallback route to your server.
  { path: "*", component: NoEncontrado }
];
