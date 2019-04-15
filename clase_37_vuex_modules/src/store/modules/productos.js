export const moduleProducto = {
  state: {
    all: [
      { nombre: "Steam Link", precio: 50 },
      { nombre: "Steam Controller", precio: 59 },
      { nombre: "Axiom Verge", precio: 17 }
    ]
  },
  mutations: {
    anadirProducto(state, producto) {
      state.all.unshift(producto);
    }
  },
  actions: {
    anadirProductoAsync: (context, product) => {
      setTimeout(() => context.commit("anadirProducto", product), 2000); // 2 segundos
    }
  },
  getters: {
    getAllTheProducts: state => {
      return state.all;
    }
  }
};
