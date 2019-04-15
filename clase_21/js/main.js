Vue.config.devtools = true;

// Parent component 
Vue.component('lista-tareas', {
    props: ['tareas'],
    template: `<div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="(tarea, index) in tareas" :key="index" :tarea="tarea"></tarea>
                </ul>
            </div>`,
});

// Child Component
Vue.component('tarea', {
    props: ['tarea'],
    template: `<li> {{ tarea }}</li>`
});

// Parent of all components
new Vue({
    el: 'main',
    data: {
        tareas: [
            'Finalizar sección Componentes',
            'Iniciar workflow con Vue CLI y Webpack',
            'Terminar de estudiar la documentación de Vuex',
            'Seguir jugando con Vue Router y grabar el primer vídeo',
        ]
    }
});