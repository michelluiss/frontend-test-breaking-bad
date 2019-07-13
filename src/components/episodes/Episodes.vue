<template>
  <div class="component-episodes">
    <div class="container">
      <div class="episodes">
        <div class="content">
          <div class="title">
            <h1>Episodios</h1>
          </div>
          <div class="box-episodes">
            <div class="episode" v-for="( character, index ) in episodeList" :key="index">
              <div class="col-name">
                <h2 class="name">{{character.title}}</h2>
                <span>Season: {{character.season}} - </span>
                <span>Episodio: {{character.episode}}</span>
              </div>
              <div class="col-date">
                <p>Data de estreia:</p>
                <p>{{character.air_date}}</p>
              </div>
              <div class="col-character">
                <div class="name-c">Personagens:</div>
                <div class="name-c" v-for="( item, index ) in character.characters" :key="index">{{item}}</div>
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
      episodeList: {},
      allEpisodes: {},
      pageActive: 0,
      paginationCount: 0,
      firstEpPage: 0,
      lastEpPage: 6
    }
  },
  created () {
    this.pageActive = 1
    this.$http.get('episodes')
    .then( (response) => {
      // console.log(response.body)
      this.paginationCount = Math.round( response.body.length / 6) + 1
      this.allEpisodes = response.body
      this.episodeList = response.body.slice(0,6)
    })
  },

  methods: {
    pagination ( page ) {
      if (page > 1) {
        this.firstEpPage = (page -1 ) * 6
        this.lastEpPage = page * 6
      }else {
        this.firstEpPage = 0
        this.lastEpPage = 6
      }
      this.pageActive = page
      this.episodeList = this.allEpisodes.slice( this.firstEpPage, this.lastEpPage);
    }
  }
}
</script>

<style>

</style>
