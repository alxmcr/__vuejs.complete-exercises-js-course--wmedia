import Home from "./components/Home.vue";
import Equipo from "./components/Equipo.vue";
import EquipoAlejandro from "./components/EquipoAlejandro.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/equipo",
    component: Equipo,
    // nested routed
    children: [
      {
        path: "alejandro",
        component: EquipoAlejandro
      }
    ]
  }
];
