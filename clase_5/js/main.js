Vue.config.debug = true;
Vue.config.devtools = true;

// Vue's new instance
var vm = new Vue({
  el: "main",
  // model
  data: {
    newTarea: '',
    tareas: ["Aprender Vue.js", "Aprender ES6", "Publicar algo todos los días"]
  },
  methods: {
    agregarTarea: function (){
      // this, hace referencia a la instancia Vue
      this.tareas.unshift(this.newTarea);
      this.newTarea = '';
    }
  }
});

// Vanilla JavaScript
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }
