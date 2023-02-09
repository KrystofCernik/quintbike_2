<template>
  <div>
    <h2
        :class="[
            `font-${weight}`,
            { 'pt-56 pb-16 pl-64': offset  },
            { 'mx-auto text-center': center }
        ]"
    >
        {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
    name: 'Heading',
    props: {
        title: {
            type: String,
            default: null
        },
        weight: {
            type: String,
            default: 'medium'
        },
        offset: {
            type: Boolean,
            default: false
        },
        center: {
            type: Boolean,
            default: false
        }
    }
}
</script>