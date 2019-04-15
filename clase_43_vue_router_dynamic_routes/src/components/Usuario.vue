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
  }
};
</script>

