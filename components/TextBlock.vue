<template>
  <div class="flex flex-col items-start">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
    name: 'TextBlock',
    props: {
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        }
    }
}
</script>

<style>

</style>