<template>
  <div
    class="nav absolute top-0 left-0 z-10 w-full h-[9vh] bg-white overflow-hidden flex items-center justify-between px-[2%]"
    :class="{ '!bg-transparent': showMenu || $route.name === 'contact' }"
  >
    <Logo />
    <Burger
        @openMenu="handleOpenMenu"
    />
  </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        handleOpenMenu(showMenu) {
            this.showMenu = showMenu
            this.$emit('openMenu', showMenu)
        }
    }
}
</script>

<style>

</style>