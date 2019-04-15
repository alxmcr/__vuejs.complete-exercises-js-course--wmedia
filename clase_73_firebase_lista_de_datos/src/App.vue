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
    /*db.ref('chats').push({
                mensaje: 'Hola, mundo',
                username: 'juanwmedia',
            });*/

    // ⚠️push: pasando un objeto vacio, 
    // retorna, la siguiente 'key' utilizable
    const key = db.ref("chats").push().key;
    console.log(key);
    db
      .ref("chats")
      .child(key)
      .set({
        mensaje: "Hola, mundo, desde SET",
        username: "alejandro"
      });
    db
      .ref("/perfiles")
      .child("alejandro")
      .child("chats")
      .child(key)
      .set(true);
  }
};
</script>
