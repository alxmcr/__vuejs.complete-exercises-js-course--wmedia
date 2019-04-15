<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>Alejandro Coca</h2>
        <h3>alejandro@mail.com</h3>
        <!-- 
            <router-link :to="'/equipo/' + $route.params.id + '/fotos'">Fotos</router-link>
            <router-link :to="'/equipo/' + $route.params.id + '/bio'">Bio</router-link> 
        -->
        <!-- Named Routes -->
        <router-link :to="{name:'fotos', params: {id: $route.params.id}}">Fotos</router-link>
        <router-link :to="{name:'bio', params: {id: $route.params.id}}">Bio</router-link>
        <router-view></router-view>
    </section>
</template>


