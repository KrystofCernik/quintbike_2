<template>
  <div class="menu w-full h-screen pr-[2%] bg-white grid grid-cols-2">
    <div class="w-full h-full">
        <!-- <nuxt-img
            src=""
            class=""
            preload
        /> -->
    </div>
    <div class="w-full h-full pt-[9vh] flex items-center justify-end">
        <ul>
            <nuxt-link
                :to="''"
            >
                link 1
            </nuxt-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        showMenu: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selected: '',
        }
    }
}
</script>

<style>

</style>