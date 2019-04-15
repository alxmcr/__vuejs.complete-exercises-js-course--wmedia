import Vue from "vue";

// usalo con precaucion.⚠️⚠️⚠️
// Global mixin:
//⚠️⚠️⚠️Se aplica a todas 
// las Vue instances presentes o futuras, 
Vue.mixin({
  // lifecycle hook
  created() {
    // console.info("Hola desde el mixin global");
    // ($...) $data, $options = metodos proveidos por Vue
    this.saludar(this.$options.nombre);
  },
  methods: {
    // ⚠️ nombre: parametro dinamico para los componentes
    saludar(nombre){
      alert(`Hola desde ${nombre}`);
    }
  }
});

// Local mixin:
// Solo lo utilizo cuando me hace falta o cuando lo necesito
export const mixin = {
  created() {
    console.log("Created desde el mixin");
  },
  data() {
    return {
      aprender: [
        { nombre: "Ionic 9" },
        { nombre: "Node" },
        { nombre: "MongoDB" },
        { nombre: "Angular 3" },
        { nombre: "Laravel" }
      ],
      nuevaTecnologia: null
    };
  },
  methods: {
    agregarTecnologia() {
      this.aprender.unshift({
        nombre: this.nuevaTecnologia
      });
      this.nuevaTecnologia = null;
    }
  }
};
