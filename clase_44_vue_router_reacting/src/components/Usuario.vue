<template>
  <h2>{{id}}</h2>
</template>

<script>
export default {
  data() {
    return {
      // this.$route = informacion de la ruta
      id: this.$route.params.id
    };
  },
  watch: {
    // to: a donde voy
    // from: de donde vengo
    '$route'(to) {
      // react to route changes...
      // Util, cuando se 'reutiliza el mismo componente'
      this.id = to.params.id;
    }
  }
};
</script>

