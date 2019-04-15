Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.directive("fijar", {
  // bind: se ejecuta una UNICA VEZ
  bind(el, binding) {
    console.log(binding.value);
    console.log(binding.value.top);
    console.log(binding.value.background);
  }
});

new Vue({
  el: "#app"
});
