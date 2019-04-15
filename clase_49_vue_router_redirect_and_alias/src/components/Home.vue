<template>
    <section>
        <h1>Home</h1>
        <!--<router-link :to="'/equipo/' + id">Equipo</router-link>-->
        <router-link v-if="id" :to="{ name: 'equipo', params: {id: id}}">Equipo</router-link>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                id: 'alejandro'
            }
        }
    }
</script>
