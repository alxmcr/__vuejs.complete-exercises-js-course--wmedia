import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cantidad: 0
    },
    mutations: {
        aumentar(state, cantidad){
            state.cantidad += cantidad;
        },
        reducir(state, cantidad){
            state.cantidad -= cantidad;
        }
    },
    actions: {
        // 'context' = 'mutations' + 'getters'
        aumentarAsync: (context, cantidad) => {
            // setTimeout: ejecutara la funcion DESPUES de 2 segundos
            setTimeout(() => context.commit('aumentar', cantidad), 2000); // 2 segundos
        },
        reducirAsync: (context, objeto) => {
            setTimeout(() => context.commit('reducir', objeto.cantidad), 2000); // 2 segundos
        }
    }
})