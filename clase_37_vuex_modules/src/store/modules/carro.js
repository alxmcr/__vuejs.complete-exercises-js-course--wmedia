export const moduleCarro = {
  state: {
    productosParaCompra: []
  },
  mutations: {
    comprarProducto: (state, producto) => {
      state.productosParaCompra.unshift(producto);
    },
    eliminarProducto: (state, indice) => {
      state.productosParaCompra.splice(indice, 1);
    }
  },
  actions: {
    comprarProductoAsync(context, producto) {
      setTimeout(() => context.commit("comprarProducto", producto), 2000); // 2 segundos
    },
    eliminarProductoAsync(context, indice) {
      setTimeout(() => context.commit("eliminarProducto", indice), 2000); // 2 segundos
    }
  },
  getters: {
    getAllTheProductsParaCompra: state => {
      return state.productosParaCompra;
    },
    getTotalCompra: state => {
      return state.productosParaCompra.reduce((total, producto) => total + producto.precio, 0);
    }
  }
};
