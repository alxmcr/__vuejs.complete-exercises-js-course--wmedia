<template>
    <div id="app">
        <h1>Aprender en 2017-2018</h1>
        <form @submit.prevent="agregarTecnologia">
            <input v-model="nuevaTecnologia"
                   type="text" placeholder="Tecnología a aprender">
        </form>
        <ul>
            <li v-for="(tecnologia, index) in aprender" :key="index" >
                {{ tecnologia.nombre }}
            </li>
        </ul>
    </div>
</template>


<script>
// mixin
import { mixin } from "./mixins";
export default {
  // Aqui se aplicara: 'Mixin Option Merge'
  // debido a que el 'mixin'
  // tambien declaró: 'created()'
  // 1st. Se ejecuta el 'created' del 'mixin'
  // 2nd. Se ejecuta el 'created' del component'
  created() {
    console.log("Created desde el componente");
  },
  mixins: [mixin],
  // custom property
  nombre: 'desde App.vue'
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>