<template>
  <div class="news">
    <Heading
        title="Chceme vám něco říct"
        weight="normal"
        center
        class="pt-40 pb-24"
    />
    <ArticleCardBig
        :image="articles[0].images[0].filename"
        :title="articles[0].name"
        :date="articles[0].date"
        :description="articles[0].description"
        :to="articles[0].id"
    />
    <ArticleSection>
        <ArticleCard
            v-for="article in articles.slice(1, 10)"
            :key="article.id"
            :image="article.images[0].filename"
            :title="article.name"
            :date="article.date"
            :description="article.description"
            :to="article.id"
        />
    </ArticleSection>
  </div>
</template>

<script setup>

  definePageMeta({
    name: 'news'
  })

  const { data: articles } = await useFetch('/api/articles')

  console.log(articles)

</script>

<style>

</style>