<template>
  <div class="custom-card w-full bg-white flex flex-col items-center gap-6 py-10">
    <nuxt-img
        class="w-3/4"
        :src="image"
        format="jpg"
        preload
    />
    <h3>{{ title }}</h3>
    <p class="small text-center w-3/4">{{ description }}</p>
    <SimpleLink
        :to="to"
    />
  </div>
</template>

<script>
export default {
    name: 'CustomCard',
    props: {
        image: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        to: {
            type: [String, Object],
            default: ''
        }
    }
}
</script>

<style>

</style>