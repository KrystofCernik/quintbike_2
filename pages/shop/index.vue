<template>
  <div class="news">
    <Container class="px-64 pb-32">
        <Heading
            title="shop"
            weight="normal"
            center
            class="pt-40 pb-16"
        />
        <p class="mx-auto text-center pb-16">Vše co tady najdete je skladem a ihned k odběru</p>
        <ShopFilter
            @filter="handleFilter"
        />
        <ShopSection>
            <ShopItemCard
                v-for="item in items"
                :key="item.id + '-' + item.name"
                :image="item.images[0]?.filename"
                :title="item.name"
                :params="[]"
                price="56000"
            />
        </ShopSection>
    </Container>
  </div>
</template>

<script setup>

  definePageMeta({
    name: 'shop'
  })

  const { data: items } = await useFetch('/api/products')

  const filteredItems = computed(() => {
    console.log(items)
  })

  const handleFilter = (filter) => {
    console.log(filter)
    console.log(filteredItems)
    if (filter === 'quint') {
        filteredItems.value.filter(item => item.category?.name.toLowerCase() === 'modely')
        console.log(filteredItems)
    } else {
        filteredItems.value.filter(item => item.category?.name.toLowerCase() === 'zakázkové stavby')
    }
  }

</script>