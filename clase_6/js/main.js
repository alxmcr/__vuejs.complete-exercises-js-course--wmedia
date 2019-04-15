Vue.config.debug = true;
Vue.config.devtools = true;

// Vue's new instance
new Vue({
  el: 'main',
  data: {
      mensaje: 'Hola Mundo :) !',
      newTarea: '',
      tareas: [{
              titulo: 'Aprender Vue.js',
              prioridad: true,
              antiguedad: 23
          },
          {
              titulo: 'Aprender ES6',
              prioridad: false,
              antiguedad: 135
          },
          {
              titulo: 'Publicar algo todos los días',
              prioridad: true,
              antiguedad: 378
          },
      ]
  },
  // methods: 
  // se reevalua CADA VEZ el modelo, exista o no cambios
  methods: {
      agregarTarea() {
          // this, hace referencia a la instancia Vue
          this.tareas.unshift({
              titulo: this.newTarea,
              prioridad: false,
              antiguedad: 0,
          });
          this.nuevaTarea = '';
      },
  },
  // computed: 
  // se reevalua SOLO si hay un cambio en el modelo, 
  // caso contrario se usa una version CACHEADA
  // se ejecuta, antes de renderizar
  computed: {
    mensajeAlReves: function(){
      return this.mensaje.split('').reverse().join('')
    },
    tareasConPrioridad(){
      return this.tareas.filter(function(tarea){
        return tarea.prioridad
      });
    },
    tareasPorAntiguedad(){
      return this.tareas.sort(function(a,b){
        return b.antiguedad < a.antiguedad
      });
    }
  }
});