<template>
  <div>

    <Hero
      title="Nejezděte v davu, ale daleko před ním"
      subtitle="Stavíme karbonová kola na míru"
      image="/hero-img.jpg"
    />

    <Container>

      <Section>
        <TextBlock
          title="Prouzkoumejte možnosti"
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v"
        />
        <Image 
          image="/1.jpg"
          description="quint gravel slx 12x1"
        />
      </Section>

      <Section>
        <TextBlock
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v  "
          class="order-last text-right"
        />
        <Image 
          image="/2.jpg"
          description="quint gravel slx 12x1"
        />
      </Section>

      <Section textOnly>
        <TextBlock
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v  "
        />
      </Section>

      <TripleSection>
        <CustomCard
          image="/3.jpg"
          title="Ritchey"
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum"
          :to="{
            name: 'custom',
            params: {
              slug: 'ritchey'
            }
          }"
        />
        <CustomCard
          image="/4.jpg"
          title="Eddie Merckx"
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum"
          :to="{
            name: 'custom',
            params: {
              slug: 'eddy'
            }
          }"
        />
        <CustomCard
          image="/5.jpg"
          title="Ridley"
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum"
          :to="{
            name: 'custom',
            params: {
              slug: 'ridley'
            }
          }"
        />
      </TripleSection>
    </Container>

    <Container green>
      <TextBlock
        title="Chceme vám něco říct.."
        white
      />
      <ArticleSection>
        <ArticleCard
            v-for="article in articles.slice(0, 3)"
            :key="article.id"
            :image="article.images[0].filename"
            :title="article.name"
            :date="article.date"
            :description="article.description"
            :to="article.id"
            white
        />
      </ArticleSection>
      <Button
        :to="{ name: 'news' }"
        type="white"
        label="další novinky"
        class="absolute left-1/2 -translate-x-1/2"
      />
    </Container>

  </div>
</template>

<script setup>

  definePageMeta({
    name: 'Homepage'
  })

  const { data: articles } = await useFetch('/api/articles')

</script>

<style>

</style>