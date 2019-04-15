import Vue from "vue";
import Vuex from "vuex";

// Importar los modules
import {moduleProducto} from "./modules/productos";
import {moduleCarro} from "./modules/carro";

// Usar Vuex
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    "productos": moduleProducto,
    "carro": moduleCarro
  }
});
