<template>
    <h1>Hola me llamo {{ nombre }} {{apellidos}} y soy un {{profesion}}</h1>
</template>

<script>
// - mapState:
//   Permite el acceso a los datos del 'state', mas facilmente.
//   Para ayudarnos con la creacion de computed properties.
import { mapState } from "vuex";

export default {
  // computed: {
  //     nombre(){
  //         return this.$store.state.nombre;
  //     }
  // }

  // computed: mapState({
  //   nombre: function(state) {
  //     return state.nombre;
  //   },
  //   apellidos: function(state) {
  //     return state.apellidos;
  //   }
  // })

  computed: mapState(["nombre", "apellidos", "profesion"])
};
</script>
