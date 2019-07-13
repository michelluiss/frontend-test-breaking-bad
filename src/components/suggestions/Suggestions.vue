<template>
  <div class="component-suggestions">
    <div class="container">
      <div class="suggestions">
        <div class="content">
          <div class="title">
            <h1>Envie sua sugestão</h1>
          </div>
          <div class="box-suggestions">
            <form action="" method="post">
              <input type="text" name="author" v-model="author" id="" placeholder="Seu nome">
              <textarea name="message" v-model="message" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
              <div class="button">
                <button type="submit" @click="sendMessage()">Enviar sugestão</button>
              </div>
            </form>
          </div>
        </div>
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
      author: '',
      message: ''
    }
  },
  created () {
  },

  methods: {
    sendMessage () {
      event.preventDefault();
      let author = { author: this.author }
      let message = { message: this.message }
      this.$http.post('https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions', message, author)
      .then( (response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>

</style>
