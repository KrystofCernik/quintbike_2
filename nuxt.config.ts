// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/html-validator',
        '@nuxt/image-edge',
        'nuxt-icons',
        'nuxt-swiper',
    ],
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/typography.css',
        '~/assets/css/transitions.css',
    ],
    nitro: {
        preset: 'netlify-edge',
    },
    // runtimeConfig: {
    //     public: {
    //       apiBase: '/api'
    //     }
    //   }
    // API_BASE_URL: 'https://strapi.meetfactory.cz',
    // publicRuntimeConfig: {
    //     API_BASE_URL: process.env.API_BASE_URL
    // },
    // axios: {
    //     proxy: true,
    // },
    // proxy: {
    //     '/api/': 'https://strapi.meetfactory.cz',
    // },
})

