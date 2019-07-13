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
            <li class="page-item active" v-for="( page, idx ) in paginationCount" :key="idx">
              <span class="page-link">{{page}}</span>
            </li>
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
      charactersList: {},
      paginationCount: 0
    }
  },
  created () {
    this.$http.get('characters?limit=8&offset=8')
    .then( (response) => {
      this.charactersList = response.body
      // console.log(response.body)
    })
    this.$http.get('characters')
    .then( (response) => {
      this.paginationCount = Math.round( response.body.length / 8) + 1
      // console.log(this.paginationCount)
    })
  }
}
</script>

<style>

</style>
