<template>
  <div>
    <header-app/>
    <suggestions-content/>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Suggestions from '../../components/suggestions/Suggestions'

export default {
  name: 'app',
  components: {
    'header-app': Header,
    'suggestions-content': Suggestions
  }
}
</script>

<style lang="scss">
</style>
