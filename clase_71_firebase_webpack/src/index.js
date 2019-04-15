// Importando Vue
import Vue from "vue";

// Importando firebase
import * as firebase from "firebase";

// Importando la configuracion para Firebase
import { config } from "../config/firebaseConfig";

// Initialize Firebase
firebase.initializeApp(config);

// Guardar una referencia a la base de datos (service)
var db = firebase.database();

// Firebase - Guardar datos
// 1. set (reemplaza)
// 2. push (no reemplaza)

// ✔️✔️ 1. set = ELIMINA todos los nodos que pudiera haber
// y los REEMPLAZA de una determinada ruta
// ( ⚠️️⚠️NO ADICIONA, sobre lo que hay)
// es decir: que recibira nuevos datos o actualizaciones
// Guardar info de perfil... 👉👉 /perfiles/alejandro 👈👈
db
  .ref("/perfiles/alejandro") // ref = arbol JSON
  .set({
    username: "alejandro",
    password: "abc123",
    ciudad: "La Paz",
    pais: "Bolivia"
  })
  .then(() => {
    console.info("Datos añadidos");
  });

// ✔️✔️ 2. push: Crea una lista, crea un nuevo segmento deacuerdo al timestamp
// Es decir: ⚠️⚠️ no hay peligro de sobreescribir
// Guardar nuevos datos anidados (en forma de 👉👉 lista)
document.getElementById("formulario").onsubmit = function(event) {
  event.preventDefault();
  // console.log("works");
  let mensaje = document.getElementById("mensaje");
  db
    .ref("chats")
    .push({
      username: "alejandro",
      mensaje: mensaje.value
    })
    .then(() => {
      console.info("Mensaje enviado");
      mensaje.value = "";
    });
};

// Vue stuff
new Vue({
  el: "#app",
  data: {
    mensaje: null,
    username: "alejandro",
    mensajes: []
  },
  // on("value") = obtener datos
  created() {
    // snapshot: captura de la BD en ese momento
    // on: value se ejecuta 1 vez y
    // cada vez que cambie la base de datos
    // en la referencia /chats
    db.ref("/chats").on("value", snapshot => {
      this.cargarMensajes(snapshot.val());
    });
  },
  methods: {
    cargarMensajes(mensajes) {
      // console.log(mensajes);
      this.mensajes = [];
      for (let key in mensajes) {
        // Ojo, '.push' es el nativo de Javascript para arrays
        this.mensajes.push({
          mensaje: mensajes[key].mensaje,
          username: mensajes[key].username,
          key: key
        });
      }
      this.mensajes.reverse();
    },
    // push = enviar un registro o nodo
    enviarMensaje() {
      console.log("Enviando el mensaje desde Vue");
      db
        .ref("/chats")
        .push({
          username: this.username,
          mensaje: this.mensaje
        })
        .then(data => {
          this.mensaje = "";
          console.log(data.key);
        });
    },
    // ✔️✔️ 3. update: Solo cambia una parte o algo especifico,
    // dejando el resto, intacto👈👈
    // actualizar algun nodo
    // key = 'donde' tengo que actualizar
    editarMensaje(event, key) {
      console.log("mensaje:", event.target.innerHTML);
      console.log("key:", key);
      // 👉👉 /chats/:key
      db.ref("/chats/" + key).update({
        mensaje: event.target.innerHTML
      });
    },
    // ✔️✔️ 4. remove: Eliminar un nodo
    eliminarMensaje(key) {
      // console.log("key:", key);
      if (confirm("¿Seguro?")) {
        db.ref("/chats/" + key).remove();
      }
    }
  }
});
