<template>
    <h1 :class="{ [$style.subrayado]: subrayado }">Hola CSS Modules</h1>
</template>

<script>
export default {
  data() {
    return {
      subrayado: false
    };
  }
};
</script>

<!-- CSS Module -->
<style module>
.subrayado {
  text-decoration: underline;
}
.rojo {
  color: red;
}
</style>