<template>
  <div class="h-[91vh] w-full px-[2%] mt-[9vh]">
    <div class="w-full h-full relative flex items-end justify-start">
        <nuxt-img
            class="absolute w-full h-full object-cover -z-10"
            :src="image"
            alt=""
        />
        <div class="px-14 py-10">
            <h1 class="text-white text-shadow-default">{{ title }}</h1>
            <h4 class="text-white text-shadow-default">{{ subtitle }}</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Hero',
    props: {
        title: {
            type: String,
            default: null
        },
        subtitle: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        }
    }
}
</script>