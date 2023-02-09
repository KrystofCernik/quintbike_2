<template>
  <div
    class="min-h-[110vh]"
    :class="[
        { 'px-[2%]': !fullwidth },
        // { 'grid grid-cols-2': split },
        { 'bg-green py-24': green }
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
        },
        green: {
            type: Boolean,
            default: false
        }
    }
}
</script>