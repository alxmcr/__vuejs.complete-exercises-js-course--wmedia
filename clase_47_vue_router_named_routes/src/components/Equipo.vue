<template>
  <section>
      <h1>Equipo</h1>
      <router-link :to="{ name: 'teammember', params: { id: id1}}">Alejandro</router-link>
      <router-link :to="{ name: 'teammember', params: { id: id2}}">Mauricio</router-link>
      <router-link :to="{ name: 'teammember', params: { id: id3}}">Reynaldo</router-link>
      <router-link :to="{ name: 'teammember', params: { id: id4}}">Gonzalo</router-link>
      <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id1: "alejandro",
      id2: "mauricio",
      id3: "reynaldo",
      id4: "gonzalo"
    };
  }
};
</script>
