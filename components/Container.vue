<template>
  <div
    :class="[
        { 'px-[2%]': !fullwidth },
        // { 'grid grid-cols-2': split },
    ]"
  >
    <slot/>
  </div>
</template>

<script>
export default {
    name: 'Container',
    props: {
        fullwidth: {
            type: Boolean,
            default: false
        }
    }
}
</script>