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

export default {
  name: "app",
  // child: para acceder a sub-referenciias
  created() {
    const chats = db.ref('chats');

    // ---- Events  Secundarios -----

    // ✔️✔️ 1. child_added
    // se lanza el evento cada vez, 
    // que se agrega un nuevo nodo
    // chats.on('child_added', (data) => {
    //   // console.log(data);
    //   console.log(data.key);
    //   console.log(data.val());
    // })

    // ✔️✔️ 2. child_changed
    // se lanza el evento cada vez, 
    // que se cambia el valor de algun propiedad en un nodo
    chats.on('child_changed', (data) => {
      // console.log(data);
      console.log(data.key);
      console.log(data.val());
    })

    // ✔️✔️ 3. child_removed
    // se lanza el evento cada vez, 
    // que eliminamos un elemento hijo
    chats.on('child_removed', (data) => {
      // console.log(data);
      console.log(data.key);
      console.log(data.val());
    })
  }
};
</script>
