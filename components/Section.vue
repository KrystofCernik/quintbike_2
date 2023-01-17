<template>
  <div
    class="w-full grid grid-cols-2 py-24"
    :class="[
        //{ '!grid-cols-3': imageWide },
        { '!grid-cols-1 text-center px-64': textOnly },
        { '!grid-cols-1 text-left': statement },
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