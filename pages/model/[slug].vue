<template>
  <div>

    <Hero
      title="QUINT GRAVEL 2021"
      image="/1.jpg"
    />

    <Container fullwidth>

      <Section>
        <TextBlock
          title="Prouzkoumejte možnosti"
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v"
          class="pl-[2vw]"
        />
        <Image 
          :image="model.images[5].filename"
          description="quint gravel slx 12x1"
        />
      </Section>

      <Section textOnly>
        <TextBlock
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v  "
        />
      </Section>

      <Section>
        <TextBlock
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v  "
          class="order-last text-right pr-[2vw]"
        />
        <Image 
          :image="model.images[1].filename"
          description="quint gravel slx 12x1"
        />
      </Section>

      <Section statement>
        <TextBlock
          title="Tady bude napsané něco delšího, aby to vypadalo hezky"
          class="pl-[2vw]"
        />
      </Section>

      <Gallery
        :images="model.images.slice(3)"
      />

      <Form />

    </Container>

    <p class="mb-16 mx-20">{{ stripeHtml(model.desc) }}</p>

  </div>
</template>

<script setup>

  definePageMeta({
    name: 'model'
  })

  const slug = useRoute().params.slug
  
  const { data: models } = await useFetch('/api/products')

  console.log(models)

  const model = models.value.find(model => model.name.toLowerCase().includes(slug) && model.category.name.toLowerCase() === 'modely')

</script>