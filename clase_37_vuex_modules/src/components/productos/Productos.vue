<template>
    <section>
        <create-producto></create-producto>
        <hr>
        <all-list-products></all-list-products>
    </section>
</template>
<script>
import CreateProducto from "./CreateProducto.vue";
import AllListProducts from "./AllListProducts.vue";

export default {
  components: {
    CreateProducto,
    AllListProducts
  }
};
</script>