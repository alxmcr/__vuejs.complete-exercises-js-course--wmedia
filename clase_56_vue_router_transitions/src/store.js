import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    auth: true,
    privado: true,
    tieneAutorizacion: true
  },
  mutations: {
    cambiarAuth: state => {
      console.log("Cambiando...auth");
      state.auth = !state.auth;
    },
    cambiarPrivado: state => {
      console.log("Cambiando...privado... de", state.privado);
      state.privado = !state.privado;
      console.log("... a", state.privado);
    },
    cambiarAutorizacion: state => {
      state.tieneAutorizacion = !state.tieneAutorizacion;
    }
  },
  getters: {
    getAuth: state => {
      return state.auth
    },
    getPrivado: state => {
      return state.privado
    },
    getTieneAutorizacion: state => {
      return state.tieneAutorizacion
    }
  }
});
