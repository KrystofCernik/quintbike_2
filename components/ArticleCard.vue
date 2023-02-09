<template>
  <div class="custom-card w-full bg-transparent flex flex-col items-start p-8">
    <nuxt-img
        class="w-full h-[250px] object-cover"
        :src="image"
        format="jpg"
        preload
    />
    <h3
        class="mt-2 h-[85px]"
        :class="{ 'text-white': white }"
    >
        {{ title }}
    </h3>
    <p
        class="mb-1 small !font-normal text-grey-100"
        :class="{ '!text-white': white }"
    >
        {{ formatDate(date) }}
    </p>
    <p
        class="small text-left mb-2 h-[80px]"
        :class="{ 'text-white': white }"
    >
        {{ stripeHtml(description).slice(0, 100) + '...' }}
    </p>
    <SimpleLink
        :to="{
            name: 'news-detail',
            params: {
                id: to
            }
        }"
        label="číst více"
        :white="white"
    />
  </div>
</template>

<script setup>

  defineProps({
    image: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null
    },
    date: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    to: {
        type: String,
        default: null
    },
    white: {
        type: Boolean,
        default: false
    }
  })

</script>

<style>

</style>