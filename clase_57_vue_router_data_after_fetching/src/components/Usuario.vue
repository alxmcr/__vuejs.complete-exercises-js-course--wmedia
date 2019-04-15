<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>Alejandro Coca</h2>
        <h5>alejandro@mail.com</h5>
        <pre v-text="username"></pre>
    </section>
</template>

<script>
export default {
  data() {
    return {
      username: null
    };
  },
  // Fetching 'After' Navigation
  created() {
    this.obtenerUsername();
  },
  watch: {
    // ⚠️ call again the method if the route changes
    $route: "obtenerUsername"
  },
  methods: {
    obtenerUsername() {
      setTimeout(() => {
        this.username =
          this.$route.params.id + Math.floor(Math.random() * 1000);
      }, 2000);
    }
  },
  // Navigation Guards a Nivel 'component' (Dentro del componente)
  // ✔️ -  to: a donde vamos
  // ️️️✔️ - from: de donde venimos
  // ✔️ - next: Continuar a la siguiente ruta
  // Este tipo de guard, tiene las siguientes options:
  // 👉 - beforeRouteEnter: ANTES de 'renderizar' (antes de TODO)
  // 👉 - beforeRouteUpdate (added in 2.2+): la ruta que renderiza el mismo component, 'ha cambiado'.
  // 👉 - beforeRouteLeave: Justo cuando estas por 'salir', Ex. ¿estas seguro de querer salir? ¿No guardaste los cambios?
  beforeRouteEnter: (to, from, next) => {
    console.info("Antes de entrar");
    // ❌❌❌ does NOT have access to 'this'
    // console.log(this);  // ❌❌❌ Daria un error
    // Pero... puedes acceder a la instancia via 'vm'
    next(vm => {
      // - ⚠️ Acceso en diferido, o en  forma asincrona,
      // podemos acceder al 'view model'
      console.log(vm);
    });
  },
  beforeRouteUpdate: (to, from, next) => {
    console.log("Antes de cambiar la ruta sobre el mismo componente");
    // ✔️ tenemos acceso a 'this' 😄
    console.log(this);
    next();
  },
  // Antes de salir o ir a otra ruta
  beforeRouteLeave: (to, from, next) => {
    console.log("Antes de salir");
    next();
  }
};
</script>

