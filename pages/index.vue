<template>
  <div>

    <Hero
      title="POJĎME JEZDIT SPOLEČNĚ"
      subtitle="Stavíme karbonová kola na míru"
    />

    <Container>

      <Section>
        <TextBlock
          title="Prouzkoumejte možnosti"
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v  "
        />
        <Image 
          image="~/assets/images/1.jpg"
          description="quint gravel slx 12x1"
        />
      </Section>

      <Section>
        <TextBlock
          description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vum vLorem ipsum Lorem ipsum v  "
          class="order-last text-right"
        />
        <Image 
          image="~/assets/images/1.jpg"
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
        
        />
        <CustomCard
        
        />
        <CustomCard
        
        />
      </TripleSection>

    </Container>

  </div>
</template>

<script>
export default {
  name: 'Homepage',
}
</script>

<style>

</style>