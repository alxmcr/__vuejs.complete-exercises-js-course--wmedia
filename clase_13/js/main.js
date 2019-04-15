Vue.config.debug = true;
Vue.config.devtools = true;

// Vue Component
Vue.component("mis-tareas", {
  props: ["tareas"],
  template: `
    <ul>
      <li v-for="tarea in tareas">{{tarea.title}}</li>
    </ul>
  `
});

Vue.component("mis-tareas-all-logic", {
  // ♫ \U26A0 ♦    Ojo: en lo componentes
  data: function() {
    return {
      tareasAjax: []
    }
  },
  template: `
    <ul>
      <li v-for="tarea in tareasAjax">{{tarea.title}}</li>
    </ul>
  `,
  // Cuando la Instancia ESTE LISTA...
  mounted: function() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      .then(response => {
        this.tareasAjax = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});

// Vue's new instance
new Vue({
  el: "main",
  data: {
    tareasLocales: [
      { title: "Aprender Vue.js" },
      { title: "Aprender ES6" },
      { title: "Publicar algo todos los días" }
    ]
  }
});
