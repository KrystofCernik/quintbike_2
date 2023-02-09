<template>
  <div class="w-full flex flex-col md:grid md:grid-cols-3 gap-x-16 bg-transparent md:p-24">
    <slot/>
  </div>
</template>

<script>
export default {
    name: 'ArticleSection',
}
</script>