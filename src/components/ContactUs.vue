<template>
  <main-layout>
    <div class="contactus-block">
      <h1 class="contactus">{{ msg }}</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
export default {
  name: 'ContactUs',
  data () {
    return {
      msg: 'ContactUs.....'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="sass" scoped>
  h1
    background: #3399ff
</style>
