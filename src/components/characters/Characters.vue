<template>
  <div>
    <div class="component-header">
      <div class="container">
        <div class="header">
          <div class="logo">
            <img :src="require('../../assets/img/breaking-bad-logo.png')" alt="logo">
          </div>
          <div class="menu">
            <ul class="nav">
              <li class="item-nav active">
                <router-link :to="{ name: 'characters' }">Personagens</router-link>
              </li>
              <li class="item-nav">
                <router-link :to="{ name: 'episodes' }">Episodios</router-link>
              </li>
              <li class="item-nav">
                <router-link :to="{ name: 'suggestions' }">Sugestão</router-link>
              </li>
            </ul>
          </div>
          <div class="search">
            <form action="" method="get">
              <input type="text" v-model="search" name="characters" id="" placeholder="Pesquise os personagens">
              <button class="submit"></button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="component-characters">
      <div class="container">
        <div class="character">
          <div class="header-content" v-show="search == ''">
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
          <div class="searching" v-show="search != ''"><h3>Você pesquisou por "{{search}}"</h3></div>
          <div class="content">
            <div class="box-characters">
              <div class="card-character" v-for="( character, idx) in filteredList" :key="idx">
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
            <ul class="pagination" v-show="charactersList.length == 8">
              <li class="page-item" :class="page == pageActive ? 'active' : ''" v-for="( page, idx ) in paginationCount" :key="idx" @click="pagination(page)">
                <span class="page-link">{{page}}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  components: {
  },
  data() {
    return {
      charactersList: {},
      charactersFilter: {},
      charactersAll: {},
      search: '',
      paginationCount: 0,
      pageActive: 0,
      aliveActive: false,
      deceasedActive: false,
      allActive: false,
    };
  },

  created() {
    this.pageActive = 1;
    this.$http.get('https://www.breakingbadapi.com/api/characters') /**** metodo GET para buscar todos os personagens ****/
      .then((response) => {
        this.charactersList = response.body.slice(0, 8) /**** add somente os 8 primeiros personagens para sxibiççao ****/
        this.charactersAll = response.body
        this.paginationCount = Math.round(response.body.length / 8) + 1
      });
  },

  computed: {
    filteredList() { /**** esta função retorna um array de personagens de acordo com o campo de busca ***/
      if (this.search) {
        return this.charactersList = this.charactersAll.filter(character => character.name.toLowerCase().includes(this.search.toLowerCase()));
      }
      return this.charactersList
    },
  },

  methods: {

    selectFilter(status) { /**** esta função adiciona um active no filtro clicado ****/
      if (status === 'all') {
        this.allActive = true;
        this.aliveActive = false;
        this.deceasedActive = false;
      } else if (status == 'Alive') {
        this.allActive = false;
        this.aliveActive = true;
        this.deceasedActive = false;
      } else {
        this.allActive = false;
        this.aliveActive = false;
        this.deceasedActive = true;
      }
    },

    filterCharacter(status) { /**** está função faz o filtro dos personagens de acordo com o status desejado ****/
      this.$http.get('https://www.breakingbadapi.com/api/characters')
        .then((response) => {
          this.selectFilter(status);
          if (status === 'all') {
            this.pageActive = 1;
            this.charactersList = response.body.slice(0, 8);
          } else {
            this.charactersFilter = response.body.filter(character => character.status.toLowerCase().indexOf(status.toLowerCase()) >= 0);
            this.charactersList = this.charactersFilter;
          }
        });
    },

    pagination(page) { /**** função que retorna a página desejada dos personagens ****/
      this.pageActive = page;
      const offset = (page - 1) * 8;
      this.$http.get(`https://www.breakingbadapi.com/api/characters?limit=8&offset=${offset}`)
        .then((response) => {
          this.charactersList = response.body;
        });
    },
  },
};
</script>

<style>

</style>
