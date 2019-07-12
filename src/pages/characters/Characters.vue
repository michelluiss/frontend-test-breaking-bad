<template>
  <div>
    <header-app/>
    <characters-content/>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Characters from '../../components/characters/Characters'

export default {
  name: 'app',
  components: {
    'header-app': Header,
    'characters-content': Characters
  },
  data () {
    return{
      charactersList: {}
    }
  },
  created () {
    this.$http.get('characters?limit=8&offset=8')
    .then( (response) => {
      // console.log(response.body)
      this.charactersList = response.body
    })
  }
}
</script>

<style>

</style>
