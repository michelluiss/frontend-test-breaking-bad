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
            <div class="card-character">
              <img :src="require('../../assets/img/personagens/walter-white-lg.jpg')" alt="logo">
              <div class="status alive">Vivo</div>
              <div class="box-info">
                <h2 class="name">Walter White</h2>
                <div class="birthday">09-07-1958</div>
                <p class="occupation">High School Chemistry Teacher, Meth King Pin</p>
              </div>
            </div>
            <div class="card-character">
              <img :src="require('../../assets/img/personagens/walter-white-lg.jpg')" alt="logo">
              <div class="status alive">Vivo</div>
              <div class="box-info">
                <h2 class="name">Walter White</h2>
                <div class="birthday">09-07-1958</div>
                <p class="occupation">High School Chemistry Teacher, Meth King Pin</p>
              </div>
            </div>
            <div class="card-character">
              <img :src="require('../../assets/img/personagens/walter-white-lg.jpg')" alt="logo">
              <div class="status alive">Vivo</div>
              <div class="box-info">
                <h2 class="name">Walter White</h2>
                <div class="birthday">09-07-1958</div>
                <p class="occupation">High School Chemistry Teacher, Meth King Pin</p>
              </div>
            </div>
            <div class="card-character">
              <img :src="require('../../assets/img/personagens/walter-white-lg.jpg')" alt="logo">
              <div class="status alive">Vivo</div>
              <div class="box-info">
                <h2 class="name">Walter White</h2>
                <div class="birthday">09-07-1958</div>
                <p class="occupation">High School Chemistry Teacher, Meth King Pin</p>
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
      response: {}
    }
  }
}
</script>

<style>

</style>
