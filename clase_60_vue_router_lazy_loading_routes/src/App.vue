<template>
    <section>
        <router-link to="/">Info</router-link>
        <!-- simulate the "scroll to anchor" behavior: 'hash' -->
        <router-link :to="{path: '/bio', hash: '#parrafo'}">Bio</router-link>
        <hr>
        <router-view></router-view>
    </section>
</template>

