<template>
  <main-layout>
  <div class="home-block">
    <h1 class="home">{{ msg }}</h1>
  </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home.'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../styles/Home.sass'
</style>
