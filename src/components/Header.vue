<template>
  <div class="component-header">
    <div class="container">
      <div class="header">
        <div class="logo">
          <img :src="require('../assets/img/breaking-bad-logo.png')" alt="logo">
        </div>
        <div class="menu">
          <ul class="nav">
            <li class="item-nav active">
              <a href="">Personagens</a>
            </li>
            <li class="item-nav">
              <a href="">Episodios</a>
            </li>
            <li class="item-nav">
              <a href="">Sugestão</a>
            </li>
          </ul>
        </div>
        <div class="search">
          <form action="" method="get">
            <input type="text" name="characters" id="" placeholder="Pesquise os personagens">
            <button class="submit" type="submit"></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
