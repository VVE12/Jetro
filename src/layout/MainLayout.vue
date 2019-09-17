<template>
  <div>
    <header class="header">
      <div class="header__logo"><img src="../assets/JETRO.png" alt=""></div>
      <nav class="header__nav">
        <router-link to="/">Home</router-link>
        <router-link to="aboutus">About Us</router-link>
        <router-link to="blog">Blog</router-link>
        <router-link to="portfolio">Portfolio</router-link>
        <router-link to="contactus">ContactUs</router-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <slot></slot>
    </transition>
    <footer class="footer">&copy;2019 — <strong>Jetro</strong></footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../layout/MainLayout.sass'
</style>
