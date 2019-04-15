<template>
  <section>
      <h1>Cantidad: {{ cantidad }}</h1>
      <button @click="aumentar">Aumentar</button>
      <button @click="reducir">Reducir</button>
  </section>
</template>

<script>
// mapState y mapMutations
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState(["cantidad"]),
  //   methods: {
  //       aumentar(){
  //           // Commit: Deja un 'log'
  //           this.$store.commit("aumentar");
  //       },
  //       reducir(){
  //           this.$store.commit("reducir");
  //       }
  //   }
  methods: mapMutations(["aumentar", "reducir"])
};
</script>

