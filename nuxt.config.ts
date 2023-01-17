// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/html-validator',
        '@nuxt/image-edge',
        'nuxt-icons',
    ],
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/typography.css',
    ], 
})

