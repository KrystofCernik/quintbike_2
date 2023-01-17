<template>
  <div>
    <Nav
      @openMenu="handleOpenMenu"
    />
    <Menu
      v-if="showMenu"
      :showMenu="showMenu"
    />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
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

body {
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
}

</style>
