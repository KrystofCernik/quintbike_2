<template>
  <div class="news-detail">

    <div class="p-24">

      <Heading
        :title="article.name"
      />

      <p class="mt-10">{{ stripeHtml(article.description) }}</p>

    </div>

    <Gallery
      :images="article.images"
    />

  </div>
</template>

<script setup>

  definePageMeta({
    name: 'news-detail'
  })

  const id = Number(useRoute().params.id)

  const { data: articles } = await useAsyncData('articles', () => $fetch(`/api/articles`))

  const article = articles.value.find(article => article.id === id)

  console.log(article)

</script>

<style>

</style>