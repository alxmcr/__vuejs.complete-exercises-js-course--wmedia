<template>
  <div>
    <ul>
        <li v-for="(producto, index) in getAllTheProductsParaCompra" :key="index">
            {{ producto.nombre }} - {{ producto.precio.toFixed(2) + ' €' }}
            <button @click="eliminarProductoAsync(index)">X</button>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  computed: mapGetters(['getAllTheProductsParaCompra']),
  methods: mapActions(["eliminarProductoAsync"])
}
</script>

