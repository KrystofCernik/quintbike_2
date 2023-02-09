<template>
  <div
    class="w-full flex flex-col md:grid md:grid-cols-2 gap-x-24 my-24"
    :class="[
        { 'md:!grid-cols-1 text-center md:px-64': textOnly },
        { '!grid-cols-1 text-left': statement }
    ]"
  >
    <slot/>
  </div>
</template>

<script>
export default {
    name: 'Section',
    props: {
        textOnly: {
            type: Boolean,
            default: false
        },
        statement: {
            type: Boolean,
            default: false
        },
        imageWide: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style>

</style>