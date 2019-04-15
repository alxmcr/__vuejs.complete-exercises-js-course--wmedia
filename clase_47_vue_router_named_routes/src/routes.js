import Home from "./components/Home.vue";
import Equipo from "./components/Equipo.vue";
import Usuario from "./components/Usuario.vue";
import UsuarioBio from "./components/UsuarioBio.vue";
import UsuarioFotos from "./components/UsuarioFotos.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/equipo",
    name: "equipo",
    component: Equipo,
    children: [
      {
        // URL: /equipo/:id
        path: ":id",
        name: "teammember",
        component: Usuario,
        children: [
          {
            // URL: /equipo/:id/fotos
            path: "fotos",
            name: "fotos",
            component: UsuarioFotos
          },
          {
            // URL: /equipo/:id/bio
            path: "bio",
            name: "bio",
            component: UsuarioBio
          }
        ]
      }
    ]
  }
];
