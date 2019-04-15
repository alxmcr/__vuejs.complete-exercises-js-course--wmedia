Vue.config.devtools = true;

const compartido = {
    usuario: {
        nombre: "Alejandro Coca"
    }
};

new Vue({
    el: '#app1',
    data: compartido    
});

new Vue({
    el: '#app2',
    data: compartido
});