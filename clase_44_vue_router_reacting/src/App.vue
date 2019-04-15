<template>
  <section>
    <h1>Rutas con Vue-Router</h1>
    <router-link to="/" active-class="activo" tag="li" exact>
      <a>Portada</a>
    </router-link>
    <!-- Start Dynamic Routes -->
    <router-link to="/usuario/77" active-class="activo" tag="li">
      <a>Usuario 77</a>
    </router-link>
    <router-link to="/usuario/99" active-class="activo" tag="li">
      <a>Usuario 99</a>
    </router-link> 
    <!-- Fin Dynamic Routes -->
    <router-link to="/contacto" active-class="activo" tag="li">
      <a>Contacto</a>
    </router-link> 
    <hr>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  
}
</script>

<style>
.activo a{
  color: red;
}
</style>

