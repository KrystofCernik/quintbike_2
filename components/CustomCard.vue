<template>
  <div class="custom-card w-full bg-white flex flex-col items-center gap-2">
    <!-- <nuxt-img/> -->
    <h3>Lorem ipsum</h3>
    <p class="small text-center px-10">Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum </p>
    <nuxt-link
        :to="''"
        class="underline small"
    >
        Lorem ipsum
    </nuxt-link>
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
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>