new Vue({
    el: '#app',
    data: {
        formulario: null,
    },
    methods: {
        enviar(){
            console.log(typeof this.formulario)
        }
    }
});