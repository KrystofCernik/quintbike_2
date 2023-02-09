<template>
  <div
    class="flex flex-col items-start"
    :class="[
        { 'justify-between': span },
        { '!items-end text-right': alignToRight }
    ]"
  >
    <h2
        :class="[
            { 'text-white': white },
            { 'pb-4': description }
        ]"
    >
        {{ title }}
    </h2>
    <p
        :class="[
            { 'text-white': white },
            { 'w-2/5': alignToRight },
        ]"
    >
        {{ description }}
    </p>
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
        },
        white: {
            type: Boolean,
            default: false
        },
        span: {
            type: Boolean,
            default: false
        },
        alignToRight: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>