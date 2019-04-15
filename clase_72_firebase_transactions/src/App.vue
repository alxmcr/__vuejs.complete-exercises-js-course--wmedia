<template>
  <div>
    <h1>Datos del usuario</h1>
    <dl>
        <dt><i>Username:</i></dt>
        <dd>{{ datosPerfil.username }}</dd>
        <dt><i>Ciudad:</i></dt>
        <dd>{{ datosPerfil.ciudad }}</dd>
        <dt><i>País:</i></dt>
        <dd>{{ datosPerfil.pais }}</dd>
        <dt><i>Likes:</i></dt>
        <dd>{{ datosPerfil.likes }}</dd>
        <button @click="actualizarLikes">Añadir like</button>
    </dl>
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
  data() {
    return {
      datosPerfil: {}
    };
  },
  // child: para acceder a sub-referenciias
  created() {
    db
      .ref("/perfiles")
      .child("alejandro")
      .on("value", snapshot => (this.datosPerfil = snapshot.val()));
  },
  methods: {
    // ✔️ update
    // Utiliza el valor anterior
    // y aplica la 'transformacion'
    // sin consultar el estado actual de la BD

    // actualizarLikes() {
    //   db
    //     .ref("/perfiles")
    //     .child("alejandro")
    //     .update({
    //       likes: this.datosPerfil.likes + 1
    //     });
    // }

    // ✔️ transaciones
    // Util para cambios simultaneos
    // Consulta la base de datos 'antes'
    // ¿existe algun cambio?:
    // ⭐ Sí, utiliza el 'valor mas actual'
    // para ejecutar tu funcion
    // es decir:
    // ¿es distinto el 'valor que tengo' con 'la BD'?
    // ⭐ Sí, entonces utiliza, el valor mas actual de la BD
    actualizarLikes() {
      db
        .ref("/perfiles")
        .child("alejandro")
        .child("likes")
        .transaction(
          function(likesActuales) {
            // likesActuales:
            // el valor MAS ACTUALIZADO
            // o la ultima version
            // desde la BD
            return likesActuales + 1;
          },
          function(error, commited, snapshot) {
            if (error) {
              console.error(error);
            } else if (!commited) {
              console.warn("Transaccion no realizada!!");
            } else {
              console.info("transaccion realizada");
              console.log(snapshot.val());
            }
          }
        );
    }
  }
};
</script>
