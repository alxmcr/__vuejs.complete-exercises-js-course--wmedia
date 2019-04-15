<template>
  <!-- <contador :cantidad="cantidad"
            @aumentar="cantidad++"
            @reducir="cantidad--"> -->
  <contador></contador>
</template>

<script>
import Contador from "./components/Contador"
export default {
  components: {
    Contador
  }
}
</script>

<style>
</style>
