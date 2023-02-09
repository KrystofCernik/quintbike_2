<template>
  <nuxt-link
    :to="to"
    class="text-[1.125rem] py-2 px-10 font-normal text-black-100 border border-white bg-white cursor-pointer"
    :class="[
        { '!bg-transparent !border-black-100 hover:!bg-black-100 hover:!text-white transition-default': type === 'secondary' },
        { '!bg-transparent !text-white !border-white hover:!bg-white hover:!text-black-100 transition-default': type === 'white' }
    ]"
  >
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
    name: 'Button',
    props: {
        to: {
            type: [String, Object],
            default: ''
        },
        type: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: null
        }
    }
}
</script>

<style>

</style>