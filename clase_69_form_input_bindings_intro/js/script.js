new Vue({
    el: '#app',
    data: {
        formulario: {
            nombre: null,
            apellidos: null,
            consulta: null,
            cliente: null,
            //⚠️⚠️ necesario para un <select> ⚠️
            conocio: 'Internet',
            acepta: null,
        },
        conocio: [
            'Amigo o familiar',
            'Internet',
            'TV o radio',
        ]
    },
    methods: {
        enviar() {
            for (let key in this.formulario) {
                console.info(`${key} : ${this.formulario[key]}`);
            }
        }
    }
});