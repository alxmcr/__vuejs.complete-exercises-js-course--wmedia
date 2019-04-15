<template>
    <div>
        <h1>Contador: {{ cantidad }}</h1>
        <button @click="aumentar">Aumentar</button>
        <button @click="reducir">Reducir</button>
    </div>
</template>

<script>
export default {
  // props: ["cantidad"],
  methods: {
    aumentar() {
      // this.$emit("aumentar");

      //Now, you can access the state object as store.state,
      //and trigger a state change with the store.commit method
      this.$store.commit("aumentar");
    },
    reducir() {
      // this.$emit("reducir");
      this.$store.commit("reducir");
    }
  },
  computed: {
    cantidad() {
      return this.$store.state.count;
    }
  }
};
</script>

