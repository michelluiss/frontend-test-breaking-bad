<template>
  <div class="component-characters">
    <div class="container">
      <div class="character">
        <div class="header-content">
          <h1>Personagens</h1>
          <div class="box-filters">
            <span>Filtrar por:</span>
            <div class="filters">
              <div class="filter alive" :class="aliveActive ? 'active' : ''" @click="filterCharacter('Alive')">
                <span>Vivo</span>
              </div>
              <div class="filter deceased" :class="deceasedActive ? 'active' : ''" @click="filterCharacter('Deceased')">
                <span>Morto</span>
              </div>
              <div class="filter all" :class="allActive ? 'active' : ''" @click="filterCharacter('all')">
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
            <li class="page-item" :class="page == pageActive ? 'active' : ''" v-for="( page, idx ) in paginationCount" :key="idx" @click="pagination(page)">
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
      charactersFilter: {},
      paginationCount: 0,
      pageActive: 0,
      aliveActive: false,
      deceasedActive: false,
      allActive: false
    }
  },
  created () {
    this.pageActive = 1
    this.$http.get('characters')
    .then( (response) => {
      this.charactersList = response.body.slice(0,8)
      this.paginationCount = Math.round( response.body.length / 8) + 1
    })
  },
  methods: {

    selectFilter (status) {
      if ( status === 'all' ){
        this.allActive = true
        this.aliveActive = false
        this.deceasedActive = false
      }else if( status == 'Alive' ){
        this.allActive = false
        this.aliveActive = true
        this.deceasedActive = false
      }else {
        this.allActive = false
        this.aliveActive = false
        this.deceasedActive = true
      }
    },

    filterCharacter (status) {
      this.$http.get('characters')
      .then( (response) => {
        this.selectFilter(status)
        if ( status === 'all' ){
          this.charactersList = response.body.slice(0,8)
        }else {
          this.charactersFilter =  response.body.filter( ( character ) => {
            return character.status.toLowerCase().indexOf(status.toLowerCase()) >= 0; 
          })
          this.charactersList = this.charactersFilter.slice(0,8)
        }
      })
    },

    pagination ( page ) {
      this.pageActive = page
      let offset = (page - 1 ) * 8
      this.$http.get('characters?limit=8&offset=' + offset)
      .then( (response) => {
        this.charactersList = response.body
        // console.log(response.body)
      })
    }
  }
}
</script>

<style>

</style>
