<template>
  <div>
    <!-- Hola header: es el contenido que le pasamos al componente, para que lo use el 'slot' -->
    <elemento tipo="header">Hola header</elemento>
    <elemento tipo="article">Hola article</elemento>
    <elemento tipo="aside">Hola aside</elemento>
    <elemento tipo="footer">Hola footer</elemento>
    <!-- <elemento tipo="casa">Hola casa</elemento> -->
  </div>
</template>

<script>
import elemento from './components/Elemento'

export default {
  // ES6: esto tambien es equivalente:
  // components: {
  //   elemento: elemento  // solo si, key === value 😉
  // }
  components: {
    elemento
  }

}
</script>

<style>
</style>
