<template>
  <div>
    <nuxt-img
        :src="image"
        class="w-full object-cover"
        :style="`height: ${height};`"
        format="jpg"
        preload
    />
    <p class="small text-grey-100">{{ description }}</p>
  </div>
</template>

<script>
export default {
    name: 'Image',
    props: {
        image: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: 'auto'
        }
    }
}
</script>

<style>

</style>