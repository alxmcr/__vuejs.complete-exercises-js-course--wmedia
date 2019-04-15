import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // ¿que es lo que queremos COMPARTIR?
    state: {
        nombre: 'Alejandro',
        apellidos: 'Coca Rojas',
        profesion: 'Developer',
        ciudad: 'La Paz'
    }
});