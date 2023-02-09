<template>
  <div class="w-full flex flex-col md:grid md:grid-cols-3 md:gap-x-px md:bg-grey-80 my-24">
    <slot/>
  </div>
</template>

<script>
export default {
    name: 'TripleSection',
}
</script>