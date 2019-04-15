<template>
  <section>
      <h2>Dónde encontrarme</h2>
      <p>C/. Lo que sea, Bolivia</p>
      <!-- <h5>{{$route.params.newsletter}}</h5> -->
      <h5>{{ newsletter }}</h5>
      <!-- <template v-if="$route.params.newsletter === 'true'"> -->
      <!-- <template v-if="newsletter === 'true'"> -->
      <template v-if="newsletter">
        <form action="">
            <h3>Newsletter</h3>
            <label for="correoe">Correo-e</label>
            <input type="email" name="Tu correo-e" id="correoe" placeholder="Tu correo-e">
        </form>
      </template>
      <pre>{{numero}}</pre>
  </section>
</template>

<script>
export default {
  props: ["newsletter"],
  data() {
    return {
      numero: null
    };
  },
  // Fetching Before Navigation
  // Antes de 'entrar' a la ruta.
  beforeRouteEnter: (to, from, next) => {
    console.info("Antes de entrar");
    // ❌❌❌ does NOT have access to 'this'
    // Debido a que no sea creado TODAVIA el modelo 😞😞.
    // console.log(this.numero);  // ❌❌❌ Daria un error
    // Pero... puedes acceder a la instancia via 'vm' - viewmodel
    setTimeout(() => {
      // - ⚠️ Acceso en diferido, o en  forma asincrona,
      // podemos acceder al 'view model'
      // ⭐ next: tengo acceso a todo.
      next(vm => {
        vm.numero = Math.floor(Math.random() * 1000);
      });
    }, 2000);
  }
};
</script>
