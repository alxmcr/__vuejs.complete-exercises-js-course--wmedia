<template>
  <div>
    <button @click="ordenarPorKeySecundaria('color')">Por Color</button>
    <button @click="ordenarPorKeySecundaria('edad')">Por Edad</button>
    <button @click="ordenarPorKey">Por Key del nodo</button>
    <button @click="ordenarPorValor">Por Valor</button>
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

// Datos iniciales
const gatos = [
  { nombre: "Rouco", edad: 5, color: "blanco y negro" },
  { nombre: "Moma", edad: 3, color: "atrigrado" },
  { nombre: "Nino", edad: 1, color: "negro" },
  { nombre: "Guizmo", color: "negro" }
];

export default {
  name: "app",
  data() {
    return {
      gatos: gatosRef
    };
  },
  // child: para acceder a sub-referenciias
  created() {
    // set
    gatos.forEach(gato => {
      gatosRef.child(gato.nombre).set({
        edad: gato.edad || null,
        color: gato.color
      });
    });
    // ✔️✔️ child_moved - evento secundario
    this.gatos.orderByChild("edad").on("child_moved", snapshot => {
      console.warn(snapshot.val());
    });
  },
  methods: {
    // order
    // this.gatos -> referencia con Firebase

    // "gatos" : {
    //     "Guizmo" : {
    //         "color" : "negro"
    //     },
    //     "Moma" : {
    //         "color" : "atrigrado",
    //         "edad" : 3
    //     },
    //     "Nino" : {
    //         "color" : "negro",
    //         "edad" : 1
    //     },
    //     "Rouco" : {
    //         "color" : "blanco y negro",
    //         "edad" : 5
    //     }
    // },

    // --- ORDENAR LOS DATOS ---
    // ⚠️⚠️⚠️NO Se pueden COMBINAR⚠️⚠️⚠️
    // ✔️✔️ 1. orderByChild
    // source: https://firebase.google.com
    // Ordena los resultados según
    // el valor de una clave secundaria especificada
    // o una ruta de acceso secundaria anidada.
    // ⚠️⚠️ Nota.-
    // Los elementos secundarios cuyas
    // claves secundarias especificadas
    // posean el valor 'null' irán en 👉👉primer lugar👈👈.
    // En este caso ordenara por ⭐key⭐: 'color' o 'edad'
    ordenarPorKeySecundaria(key) {
      this.gatos.orderByChild(key).on("child_added", snapshot => {
        console.log(snapshot.key);
        console.log(snapshot.val());
      });
    },
    // ✔️✔️ 2. orderByKey
    // Ordena los resultados
    // según las claves secundarias.
    // En este caso ordenara por: 'Guizmo', 'Moma', 'Nino' y 'Rouco'
    // Es decir:
    // {
    //   key1: value1,
    //   key2: value2,
    //   key3: value3,
    //   key4: value4,
    // }
    // por key1, key2, etc
    ordenarPorKey() {
      // child_added
      // se ejecuta por
      // cada nodo secundario y los siguientes
      this.gatos.orderByKey().on("child_added", snapshot => {
        console.log(snapshot.key);
        console.log(snapshot.val());
      });
    },
    // ✔️✔️ 3. orderByValue
    // Ordena los resultados
    // según las valores
    // Es decir:
    // {
    //   key1: value1,
    //   key2: value2,
    //   key3: value3,
    //   key4: value4,
    // }
    // por value1, value2, etc
    ordenarPorValor() {
      const votos = db.ref("votos");

      votos.orderByValue().on("child_added", snapshot => {
        console.log(snapshot.key);
        console.log(snapshot.val());
      });
    }
  }
};
</script>
