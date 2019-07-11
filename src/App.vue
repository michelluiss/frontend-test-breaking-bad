<template>
  <div id="app">
    <header-app/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'header-app': Header
  }
}
</script>

<style lang="scss">
  @import "./assets/sass/style.scss";
</style>
