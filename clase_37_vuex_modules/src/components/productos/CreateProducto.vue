<template>
  <div>
    <h1>Añadir un producto</h1>
    <form @submit.prevent="anadirProductoAsync(cloneProducto)">
        <input type="text" placeholder="Nombre" v-model="producto.nombre" required>
        <input type="number" placeholder="Precio" v-model.number="producto.precio" required>
        <input type="submit" value="Añadir">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      producto: {
        nombre: "",
        precio: 0
      }
    };
  },
  methods: mapActions(["anadirProductoAsync"]),
  computed: {
    cloneProducto() {
      return {
        nombre: this.producto.nombre,
        precio: this.producto.precio,
      };
    }
  }
};
</script>

