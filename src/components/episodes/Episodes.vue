<template>
  <div class="component-episodes">
    <div class="container">
      <div class="episodes">
        <div class="content">
          
        </div>
        <nav>
          <ul class="pagination">
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
