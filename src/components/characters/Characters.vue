<template>
  <div class="component-characters">
    <div class="container">
      <div class="character">
        <div class="header-content">
          <h1>Personagens</h1>
          <div class="box-filters">
            <span>Filtrar por:</span>
            <div class="filters">
              <div class="filter alive">
                <span>Vivo</span>
              </div>
              <div class="filter deceased">
                <span>Morto</span>
              </div>
              <div class="filter all">
                <span>Todos</span>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="box-characters">
            <div class="card-character" v-for="( character, index ) in charactersList" :key="index">
              <img :src="character.img" alt="logo">
              <div class="status alive" :class="character.status == 'Alive' ? 'alive' : 'deceased'">{{character.status == 'Alive' ? 'Vivo' : 'Morto' }}</div>
              <div class="box-info">
                <h2 class="name">{{character.name}}</h2>
                <div class="birthday">{{character.birthday}}</div>
                <p class="occupation">{{character.occupation[0]}}</p>
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
