<template>
    <section>
        <productos></productos>
        <carro></carro>
    </section>
</template>
<script>
import Productos from "./components/productos/Productos.vue";
import Carro from './components/carro/Carro.vue';
export default {
  components: { 
      Productos, 
      Carro 
  }
};
</script>