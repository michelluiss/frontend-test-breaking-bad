<template>
  <div>
    <characters-content></characters-content>
  </div>
</template>

<script>
import Characters from '../../components/characters/Characters';

export default {
  name: 'app',
  components: {
    'characters-content': Characters,
  },
  data() {
    return {
    };
  },
  created() {
  },
};
</script>

<style>

</style>
