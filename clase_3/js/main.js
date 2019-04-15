// Vanilla JS
// var h1 = document.querySelector('h1');
// var input = document.querySelector('input');
// input.addEventListener('keyup', () => h1.innerHTML = input.value)

// Data binding and reactivity
// Vue's new instance
const vm = new Vue({
  el: "main",
  // model
  data: {
    laborales: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    tareas: [
      { nombre: "Hacer la compra", prioridad: "baja" },
      { nombre: "Aprender Vue y Firebase", prioridad: "alta" },
      { nombre: "Ir al gimnasio", prioridad: "alta" }
    ],
    persona: {
        nombre: 'Alejandro',
        profesion: 'dev',
        ciudad: 'Bolivia'
    }
  }
});
