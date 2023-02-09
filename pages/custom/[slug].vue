<template>
  <div>

    <Hero
      :title="custom.name"
      :image="custom.images[0].filename"
    />

    <Container fullwidth>

      <Section>
        <TextBlock
          title="Prouzkoumejte možnosti"
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v"
          class="pl-[2vw]"
        />
        <Image 
          :image="custom.images[5]?.filename || custom.images[0].filename"
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
          :image="custom.images[1]?.filename || custom.images[0].filename"
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
        :images="custom.images?.slice(3) || custom.images[0]"
      />

      <Form />

    </Container>

    <p class="mb-16 mx-20">{{ stripeHtml(custom.desc) }}</p>

  </div>
</template>

<script setup>

  definePageMeta({
    name: 'custom'
  })

  const slug = useRoute().params.slug
  
  const { data: customs } = await useFetch('/api/products')

  console.log(customs)

  const custom = customs.value.find(model => 
    model.name.toLowerCase().includes(slug) &&
    !model.name.toLowerCase().includes('zakázkové stavby') &&
    !model.name.toLowerCase().includes('kola') &&
    model.category.name.toLowerCase() === 'zakázkové stavby')

  console.log(custom)

</script>

<style>

</style>