<template>
  <main-layout>
    <div class="portfolio-block">
      <h1 class="portfolio">{{ msg }}</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
export default {
  name: 'Portfolio',
  data () {
    return {
      msg: 'Portfolio....'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="sass" scoped>
  h1
    background: #008000
</style>
