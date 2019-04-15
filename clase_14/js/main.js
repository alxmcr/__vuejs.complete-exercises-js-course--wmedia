Vue.config.debug = true;
Vue.config.devtools = true;

// Vue Component
Vue.component("elegir-ganador", {
  props: ["listado"],

  // require a root element

  /*
  Forma #1 -  template
  */
  // template: `
  //     <div>
  //       <h2 v-if="existeGanador">El ganador es: {{ganador}}</h2>
  //       <template v-else>
  //         <h3>Participantes:</h3>
  //         <ul>
  //           <li v-for="persona in listado">{{persona}}</li>
  //         </ul>
  //       </template>
  //       <button @click="elegirGanador">Elegir ganador</button>
  //     </div >`,


  // Forma #2 - template
  // template: '#elegir-jugador-template',

  data() {
    return {
      existeGanador: false,
      ganador: "",
      participantes: this.listado
    };
  },
  methods: {
    elegirGanador() {
      this.existeGanador = !this.existeGanador
      let cantidad = this.participantes.length;
      let indice = Math.floor(Math.random() * cantidad);
      this.ganador = this.participantes[indice - 1];
    }
  }
});

// Vue's new instance
new Vue({
  el: "main",
  data: {
    personas: ["Juan", "Alicia", "Pedro", "Javier", "Marcos"]
  }
});
