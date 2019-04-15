Vue.config.debug = true;
Vue.config.devtools = true;

// para usar la sintaxis de vue-resource
// OJO: Change body for data
// Vue.prototype.$http = axios;

// Vue's new instance
new Vue({
  el: "main",
  data: {
    personas: []
  },
  // Cuando la Instancia ESTE LISTA...
  mounted: function() {
    console.log("Instancia montada");
    this.cargarPersonas();
  },
  methods: {
    cargarPersonas() {
      // this.$http.get("https://randomuser.me/api/?results=500").then(
      //   response => {
      //     this.personas = response.data.results;
      //   }
      // );

      axios
        .get("https://randomuser.me/api/?results=500")
        .then((response) => {
          this.personas = response.data.results;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
