<template>
  <div>
    <ul>
        <li v-for="(producto, index) in getAllTheProducts" :key="index">
            {{ producto.nombre }} - {{ producto.precio.toFixed(2) + ' €' }}
            <button @click="comprarProductoAsync(producto)">+</button>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: mapGetters(['getAllTheProducts']),
    methods: mapActions(["comprarProductoAsync"])
};
</script>

