<template>
  <h1>{{ tareasCompletadas}} tareas completadas.</h1>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //   Acceso directamente al estado
  //   computed: {
  //       tareasCompletadas(){
  //           return this.$store.state.tareas.filter((tarea) => {
  //               return tarea.completado
  //           }).length;
  //       }
  //   }

  //   Getters
  //   computed: {
  //       tareasCompletadas(){
  //           return this.$store.getters.tareasCompletadas;
  //       }
  //   }

  // Getters and mapGetters
  computed: mapGetters(['tareasCompletadas'])
};
</script>

