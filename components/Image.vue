<template>
  <div>
    <nuxt-img
        :src="image"
        width="100%"
        format="jpg"
        preload
    />
    <p class="small text-grey">{{ description }}</p>
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
        }
    },
    mounted() {
        console.log(this.image)
    }
}
</script>

<style>

</style>