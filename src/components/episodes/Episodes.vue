<template>
  <div class="component-episodes">
    <div class="container">
      <div class="episodes">
        <div class="content">
          <div class="title">
            <h1>Episodios</h1>
          </div>
          <div class="box-episodes">
            <div class="episode">
              <div class="col-name">
                <h2 class="name">Ozymandas</h2>
                <span>Season: 5 - </span>
                <span>Episodio: 14</span>
              </div>
              <div class="col-date">
                <p>Data de estreia:</p>
                <p>15/09/2013</p>
              </div>
              <div class="col-character">
                <div class="name-c">Personagens:</div>
                <div class="name-c">Walter White</div>
                <div class="name-c">Jesse Pinkman</div>
                <div class="name-c">Skyler White</div>
                <div class="name-c">Walter White Jr</div>
              </div>
            </div>
          </div>
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
