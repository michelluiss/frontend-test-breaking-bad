<template>
  <div>
    <header-app/>
    <episodes-content/>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Episodes from '../../components/episodes/Episodes';

export default {

  components: {
    'header-app': Header,
    'episodes-content': Episodes,
  },
};
</script>

<style lang="scss">
//  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap');
//  @import "./assets/sass/style.scss";
</style>
