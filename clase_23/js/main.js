Vue.config.devtools = true;

Vue.component('input-contrasena', {
    // You should use 'value' as property 2.2.0+
    props: ['value'],
    // ⚠️ usamos esta sintaxis, 
    // debido a que no podemos modificar 
    // algun valor del 'props' --> DIRECTAMENTE
    template: `<input type="text" ref="pass" :value="value" @input="comprobarContrasena($event.target.value)">`,
    methods: {
        comprobarContrasena(contrasena){
            if(this.noValidas.includes(contrasena)){
                this.$refs.pass.value = contrasena = '';
            }
            // ⚠️ Enviamos el valor de la 
            //contrasena al parent (la Instancia principal de Vue), 
            // sin modificar DIRECTAMENTE los valores de 'props')
            this.$emit("input", contrasena);
        }
    },
    data() {
        return {
            noValidas: ['abc', 'admin', '123456', 'root'],
        }
    }
});

new Vue({
    el: 'main',
    data: {
        contrasena: 'es3Es653!*&__',
    },
});