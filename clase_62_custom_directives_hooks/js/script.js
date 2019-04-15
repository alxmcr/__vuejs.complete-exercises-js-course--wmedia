Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.directive("fijar", {
  // bind: se ejecuta una UNICA VEZ
  bind(el, binding) {
    // <h1 v-fijar>Hola desde el curso de Vue & Firebase</h1>
    console.log(el);
    console.log(binding);
    el.style.position = "fixed";

    //v-fijar="100"
    if (binding.expression) {
      // binding.expression = 100
      el.style.top = binding.expression + "px";
    }
    // ⚠️ solo puede existir 1 solo argumento.
    // Si hay algun argumento, entonces cambiamos de color
    //v-fijar
    if (binding.arg) {
      let color = "orange";
      let modificadores = Object.keys(binding.modifiers);

      if (modificadores.length > 0) {
        //v-fijar:fondo.yellow - dinamico
        // donde modificadores[0] = 'yellow'
        color = modificadores[0];
      }

      el.style.backgroundColor = color;
    }
  }
});

new Vue({
  el: "#app"
});
