# Clase 38 - Vuex Application Structure

- [Application Structure](https://vuex.vuejs.org/en/structure.html)

Una recomendacion de vuex.

```shell
├── index.html
├── main.js
├── api
│   └── ... # abstractions for making API requests
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module
```

⚠️ Se intento realizar, lo indicado en la clase, pero se tuvo muchos problemas con los `Vue Single File Components`, es por ello, que no se subio algun codigo para esta carpeta.