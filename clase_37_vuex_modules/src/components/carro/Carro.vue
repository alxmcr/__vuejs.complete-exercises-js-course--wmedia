<template>
    <section>
        <h2>Carro de la compra</h2>
        <h3>Total compra: {{ getTotalCompra.toFixed(2) }} € </h3>
        <list-products-to-buy></list-products-to-buy>
    </section>
</template>
<script>
import { mapGetters } from "vuex";

import ListProductsToBuy from "./ListProductsToBuy.vue";

export default {
  components: {
    ListProductsToBuy
  },
  computed: mapGetters(["getTotalCompra"])
};
</script>