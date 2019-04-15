Vue.config.debug = true;
Vue.config.devtools = true;

// Vue's new instance
new Vue({
  el: "main",
  data: {
    mostrar: true,
    mensajes: {
      transicion: "Transiciones CSS con Vue.js",
      animacion: "Animaciones CSS con Vue.js",
      animationCustom: "Animaciones custom CSS con Vue.js",
      entreElementos: "Transiciones entre elementos con Vue.js"
    }
  }
});
