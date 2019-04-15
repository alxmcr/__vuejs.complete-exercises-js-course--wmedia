Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.directive("destacar", {
  bind(el, binding, vnode) {
    el.style.color = "red";
    el.style.fontSize = binding.value + "px";
  }
});

new Vue({
  el: "#app"
});
