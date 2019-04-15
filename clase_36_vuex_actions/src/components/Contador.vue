<template>
  <section>
      <h1>Cantidad: {{ cantidad }}</h1>
      <button @click="aumentarAsync(12)">Aumentar</button>
      <button @click="reducirAsync({ cantidad: 15 })">Reducir</button>
  </section>
</template>

<script>
// mapState y mapMutations
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState(["cantidad"]),
  methods: mapActions(["aumentarAsync", "reducirAsync"])
};
</script>
