<template>
  <section>
    <h1>Home</h1>
    <!-- <router-link :to="'/equipo/' + id">Equipo</router-link> -->
    <!-- Named route -->
    <router-link :to="{ name: 'equipo'}">Equipo</router-link>
  </section>
</template>


<script>
export default {
};
</script>
