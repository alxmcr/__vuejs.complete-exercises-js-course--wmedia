Vue.config.debug = true;
Vue.config.devtools = true;

// Vue's new instance
new Vue({
  el: "main",
  data: {
    busqueda: '',
    minimo: 5,
    juegos: [
      {
        titulo: "Battlefield 1",
        genero: "FPS",
        puntuacion: 9
      },
      {
        titulo: "Civilization VI",
        genero: "Estrategia",
        puntuacion: 10
      },
      {
        titulo: "Resident Evil 7",
        genero: "Survival Horror",
        puntuacion: 7
      }
    ]
  },
  // methods:
  // se reevalua CADA VEZ el modelo, exista o no cambios
  methods: {},
  // computed:
  // se reevalua SOLO si hay un cambio en el modelo,
  // caso contrario se usa una version CACHEADA
  // se ejecuta, antes de renderizar
  computed: {
    mejoresJuegos: function() {
      // arrow functions ayuda para poder usar la keyword: this
      return this.juegos.filter(juego => juego.puntuacion >= this.minimo);
    },
    buscarJuego(){
      return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda))
    }
  }
});
