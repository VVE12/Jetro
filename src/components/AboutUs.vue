<template>
  <main-layout>
    <div class="aboutus-block">
      <h1 class="aboutus">{{ msg }}</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
export default {
  name: 'AboutUs',
  data () {
    return {
      msg: 'About Us..'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../styles/AboutUs.sass'
</style>
