<template>
  <div>
  </div>
</template>

<script>
// Importando firebase
import * as firebase from "firebase";

// Importando la configuracion para Firebase
import { config } from "../config/firebaseConfig";

// Initialize Firebase
firebase.initializeApp(config);

// Guardar una referencia a la base de datos (service)
var db = firebase.database();

// gatos ref
const gatosRef = db.ref("gatos");

export default {
  name: "app",
  data() {
    return {
      gatos: gatosRef
    };
  },
  created() {
    this.ordenarPorKeySecundaria("edad");
  },
  methods: {
    // --- FILTRAR DATOS ---
    // ⭐⭐Se pueden COMBINAR⭐⭐

    // ✔️✔️ 1. limitToFirst(n)
    // Configura la cantidad máxima de elementos
    // que pueden mostrarse
    // desde el comienzo de la lista de resultados ordenada.
    // es decir: N-primeros (comenzando desde abajo hacia arriba)
    // ordenarPorKeySecundaria(key) {
    //   this.gatos
    //     .orderByChild(key)
    //     .limitToFirst(3)
    //     .on("child_added", snapshot => {
    //       console.log(snapshot.key);
    //       console.log(snapshot.val());
    //     });
    // }

    // ✔️✔️ 2. limitToLast(n)
    // Configura la cantidad máxima de elementos
    // que pueden mostrarse
    // desde el final de la lista de resultados ordenada.
    // es decir: N-ultimos (comenzando desde arriba hacia abajo)
    // ordenarPorKeySecundaria(key) {
    //   this.gatos
    //     .orderByChild(key)
    //     .limitToLast(2)
    //     .on("child_added", snapshot => {
    //       console.log(snapshot.key);
    //       console.log(snapshot.val());
    //     });
    // }

    // ✔️✔️ 3. (Crear un rango) startAt y endAt
    // startAt --> edad > 1
    // endAt --> edad < 998
    // [1 - 998]
    // ordenarPorKeySecundaria(key) {
    //   this.gatos
    //     .orderByChild(key)
    //     .startAt(1)
    //     .endAt(998)
    //     .on("child_added", snapshot => {
    //       console.log(snapshot.key);
    //       console.log(snapshot.val());
    //     });
    // }

    // ✔️✔️ 4. equalTo
    // Muestra elementos con un 👉👉valor igual👈👈
    // a la clave o el valor
    // que se especifica
    // según el método de ordenamiento seleccionado.
    ordenarPorKeySecundaria(key) {
      this.gatos
        .orderByChild(key)
        .equalTo(999)
        .on("child_added", snapshot => {
          console.log(snapshot.key);
          console.log(snapshot.val());
        });
    }
  }
};
</script>
