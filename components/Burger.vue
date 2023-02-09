<template>
  <div
    class="burger relative h-[40px] w-[40px] overflow-hidden flex flex-col justify-center items-end cursor-pointer"
    :class="{ active: showMenu, dark: dark }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="showMenu = !showMenu"
  >
    <span
        class="absolute -translate-y-[8px] w-[18px] h-[2px] bg-black-100 border-none transition-default"
        :class="[
            { 'translate-y-0  rotate-45 w-[30px] opacity-80': showMenu },
            { 'w-[30px] !opacity-100': hovered },
            { 'bg-white': dark || $route.name === 'contact' && !showMenu }
        ]"
    ></span>
    <span 
        class="absolute translate-y-[8px] w-[12px] h-[2px] bg-black-100 border-none transition-default"
        :class="[
            { '!translate-y-0  -rotate-45 !w-[30px] opacity-80': showMenu },
            { '!w-[30px] !opacity-100': hovered },
            { 'bg-white': dark || $route.name === 'contact' && !showMenu }
        ]"
    ></span>
    <span
        class="absolute w-[30px] h-[2px] bg-black-100 border-none transition-default"
        :class="[
            { 'translate-x-[70px]': showMenu },
            { 'bg-white': dark || $route.name === 'contact' && !showMenu }
        ]"
    ></span>
  </div>
</template>

<script>
export default {
    name: 'Burger',
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showMenu: false,
            hovered: false
        }
    },
    watch: {
        showMenu() {
            this.$emit('openMenu', this.showMenu)
        },
        '$route'() {
            this.showMenu = false
        }
    }
}
</script>

<style>

</style>