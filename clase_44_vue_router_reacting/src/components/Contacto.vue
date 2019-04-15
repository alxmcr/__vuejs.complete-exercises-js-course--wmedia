<template>
  <div>
      <h2>Contact</h2>
      <button @click="volverHome">Volver a contacto</button>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push("/"), 2000); // Home)
  },
  methods: {
    volverHome() {
      // push: To navigate to a different URL. 
      // This method pushes a "new entry" into the 'history stack'
      // AÑADE UNA RUTA a la 'history stack'
      // Programmatic Nav: No requiere la ACCION del usuario
      this.$router.push("/", () => {
        // Se ejecutara cuando se cambie de rura.
        console.log("rutaCambiada")
      }); // Home
    }
  }
};
</script>
