Vue.config.debug = true;
Vue.config.devtools = true;

// Vue's new instance
new Vue({
  el: "main",
  http: {
    root: "/root",
    headers: {
      Authorization: "Basic YXBpOnBhc3N3b3Jk"
    }
  },
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
      // GET /someUrl
      this.$http.get("https://randomuser.me/api/?results=500").then(
        response => {
          this.personas = response.body.results;
        }
      );
    }
  }
});
