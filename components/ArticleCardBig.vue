<template>
  <div class="custom-card w-full bg-transparent grid grid-cols-2 items-start gap-6 px-32 py-8">
    <nuxt-img
        class="w-full h-full"
        :src="image"
        fit="cover"
        format="jpg"
        preload
    />
    <div class="h-full flex flex-col items-start justify-between">
        <div class="flex flex-col items-start">
            <h3
                class="-mt-2"
                :class="{ 'text-white': white }"
            >
                {{ title }}
            </h3>
            <p
                class="my-1 small !font-normal text-grey-100"
                :class="{ '!text-white': white }"
            >
                {{ formatDate(date) }}
            </p>
            <p
                class="small text-left"
                :class="{ 'text-white': white }"
            >
                {{ stripeHtml(description) }}
            </p>
        </div>
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
  </div>
</template>

<script>
export default {
    name: 'ArticleCardBig',
    props: {
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
    }
}
</script>

<style>

</style>