<template>
  <div>
    <h1>Menu principal</h1>
    <input type="range">
    <ul>
      <li>
        <a href="">Enlace 1</a>
        <a href="">Enlace 2</a>
        <a href="">Enlace 3</a>
        <a href="">Enlace 4</a>
        <a href="">Enlace 5</a>
        <a href="">Enlace 6</a>
      </li>
    </ul>
    <tareas></tareas>
  </div>
</template>

<script>

import tareas from './components/Tareas'

export default {
  components: {
    tareas
  }
}
</script>
