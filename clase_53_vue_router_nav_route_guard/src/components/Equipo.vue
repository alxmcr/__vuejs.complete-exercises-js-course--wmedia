<template>
    <main>
        <h1>Nuestro equipo:</h1>
        <!-- Named view for default -->
        <router-view></router-view>
        <!-- Named view 'bio' -->
        <router-view name="bio"></router-view>
        <!-- Named view 'fotos' -->
        <router-view name="fotos"></router-view>
    </main>
</template>