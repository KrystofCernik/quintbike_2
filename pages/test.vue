<template>
  <div class="test pt-28 pb-20">
    <Container>

        <!-- <p class="py-10" v-html="products[0].desc"></p> -->

        <!-- <Gallery
            :images="products[0].images"
        /> -->

        <Heading
            title="Produkty"
        />

        <div class="w-full flex flex-col items-start gap-3 pt-3 pb-8">
            <ul class="list-disc">
                <li
                    v-for="product in products"
                    :key="product.id + '-' + product.name"
                    class="ml-4"
                >
                    {{ product.name }}
                </li>
            </ul>
        </div>

        <Button
            type="secondary"
            label="Produkty"
            @click="tellMe(products)"
        />

        <Heading
            title="Články"
            class="pt-10"
        />

        <div class="w-full flex flex-wrap gap-1 pt-3 pb-8">
            <span
                v-for="article in articles"
                :key="article.id"
                class="w-1 h-1 bg-black-80 rounded-2xl"
            >
                
            </span>
        </div>

        <Button
            type="secondary"
            label="Články"
            @click="tellMe(articles)"
        />

        <Heading
            title="Stránky"
            class="pt-10"
        />

        <div class="w-full flex flex-wrap gap-1 pt-3 pb-8">
            <ul class="list-disc">
                <li
                    v-for="page in pages"
                    :key="page.id"
                    class="ml-4"
                >
                    <nuxt-link
                        :to="''"
                        class=""
                    >
                        {{ page.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <Button
            type="secondary"
            label="Stránky"
            @click="tellMe(pages)"
        />

        <Heading
            title="Kategorie"
            class="pt-10"
        />

        <div class="w-full flex flex-col items-start gap-3 pt-3 pb-8">
            <ul class="list-disc">
                <li
                    v-for="category in categories"
                    :key="category.id"
                    class="ml-4"
                >
                    {{ category.name }}
                </li>
            </ul>
        </div>

        <Button
            type="secondary"
            label="Kategorie"
            @click="tellMe(categories)"
        />

    </Container>
  </div>
</template>

<script setup>

  definePageMeta({
    name: 'Test'
  })

  const { data: products } = await useFetch('/api/products')

  const { data: articles } = await useFetch('/api/articles')

  const { data: pages } = await useFetch('/api/pages')

  const { data: categories } = await useFetch('/api/categories')

  const tellMe = (data) => {
    console.log(data)
  }

</script>

<style>

</style>