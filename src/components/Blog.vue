<template>
  <main-layout>
    <div class="blog-block">
      <h1 class="blog">{{ msg }}</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
export default {
  name: 'Blog',
  data () {
    return {
      msg: 'Blog...'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="sass" scoped>
  h1
    background: #ffff00
</style>
