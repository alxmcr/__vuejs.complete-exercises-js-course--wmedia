<!-- 
<template>
    <div>
      <article v-if="tipo === 'article'">
            <slot></slot>
        </article>
        <section v-if="tipo === 'section'">
            <slot></slot>
        </section>
        <aside v-if="tipo === 'aside'">
            <slot></slot>
        </aside>
        <nav v-if="tipo === 'nav'">
            <slot></slot>
        </nav>
        <header v-if="tipo === 'header'">
            <slot></slot>
        </header>
        <footer v-if="tipo === 'footer'">
            <slot></slot>
        </footer>
    </div>
</template>
-->

<script>
export default {
  props: ["tipo"],
  // Debe pasarse createElement
  render(createElement){
      return createElement(
          // Tipo de TAG: <header>,<article>,<aside>,<footer>
          this.tipo,
          // El contenido del slot. Ejemplo: Hola header, Hola footer
          this.$slots.default
      );
  }
};
</script>

<style>

</style>
