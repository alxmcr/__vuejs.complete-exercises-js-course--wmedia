export const mixin = {
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
