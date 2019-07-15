<template>
  <div>
    <!--header-app v-model="search"></header-app-->
    <characters-content></characters-content>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Characters from '../../components/characters/Characters'

export default {
  name: 'app',
  components: {
    // 'header-app': Header,
    'characters-content': Characters
  },
  data () {
    return{
      search: ''
    }
  },
  created () {
  }
}
</script>

<style>

</style>
