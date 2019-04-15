<template>
    <section>
        <button @click="cambiarAuth">Cambiar auth</button>
        <button @click="cambiarAutorizacion">Cambiar autorizacion de /contacto</button>
        <hr>
        <!-- Vue Router transitions -->
        <transition name="aparecer" appear>
            <router-view></router-view>
        </transition>
    </section> 
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: mapMutations(["cambiarAuth", "cambiarAutorizacion"])
};
</script>

<style>

/* 

CSS Transition - aparecer-XXXXX

donde '-XXXXX' puede ser:

-✔️ -enter: (entrada) Inicio de la animacion (durante 1 frame) se aplica la clase
-✔️ -enter-active: (entrada, "lenta" NO de golpe)
-✔️ -enter-to
-✔️ -leave
-✔️ -leave-active (salida, "lenta" NO de golpe)
-✔️ -leave-to: (salida) Ultimo estado de la transicion 
*/

.aparecer-enter {
  opacity: 0;
}

.aparecer-enter-active {
  transition: opacity 1s;
}

.aparecer-leave-to {
  opacity: 0;
}

.aparecer-leave-active {
  transition: opacity 1s;
}
</style>
