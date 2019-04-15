<template>
    <section>
        <button @click="cambiarAuth">Cambiar auth</button>
        <button @click="cambiarAutorizacion">Cambiar autorizacion de /contacto</button>
        <hr>
        <router-view></router-view>
    </section> 
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: mapMutations(["cambiarAuth", "cambiarAutorizacion"])
};
</script>