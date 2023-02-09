<template>
  <div>
    <Nav
      @openMenu="handleOpenMenu"
    />
    <Menu
      :showMenu="showMenu"
    />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        handleOpenMenu(showMenu) {
          this.showMenu = showMenu
        }
    }
}
</script>

<style lang="scss">

body, html {
  scroll-behavior: smooth;
}

</style>
