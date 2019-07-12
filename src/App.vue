<template>
  <div id="app">
    <header-app/>
    <characters-content/>
  </div>
</template>

<script>
import Header from './components/Header'
import Characters from './components/characters/Characters'

export default {
  name: 'app',
  components: {
    'header-app': Header,
    'characters-content': Characters
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap');
  @import "./assets/sass/style.scss";
</style>
