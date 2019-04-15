Vue.config.debug = true;
Vue.config.devtools = true;

// Vue's new instance
const vm1 = new Vue({
  // template o punto de montaje
  el: "main",
  // modelo
  data: {
    mensaje: "Instancia Vue 1"
  },
  // ANTES de que el cambio se realice
  // vuejs.org: before the DOM is patched. 
  beforeUpdate(){
    console.log("beforeUpdate: ", this.mensaje)
  },
  // DESPUES de que el cambio se realice
  // vuejs.org: after a data change causes the virtual DOM to be re-rendered and patched.
  updated(){
    console.log("updated: ", this.mensaje)
  },
  // methods:
  // se reevalua CADA VEZ el modelo, exista o no cambios
  methods: {
    alReves() {
      this.mensaje = this.mensaje
        .split("")
        .reverse()
        .join("");
      vm2.mensaje = "Hola desde la instancia 1";
    }
  },
  // computed: Manipular el modelo
  // se reevalua SOLO si hay un cambio en el modelo,
  // caso contrario se usa una version CACHEADA
  // se ejecuta, antes de renderizar
  computed: {
    mensajeMayusculas() {
      return this.mensaje.toUpperCase();
    }
  }
});

const vm2 = new Vue({
  // template o punto de montaje
  el: "#app",
  data: {
    mensaje: "Instancia Vue 2"
  }
});
