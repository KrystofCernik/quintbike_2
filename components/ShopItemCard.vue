<template>
  <div class="shop-item-card grid grid-cols-2 gap-20">
    <Image
        class="w-full h-full object-cover"
        :image="image"
    />
    <div class="flex flex-col items-start justify-between">
        <div class="flex flex-col items-start">
            <Heading
                :title="title"
                class="-mt-2"
            />
            <ul class="list-disc mt-5 ml-5">
                <li class="pb-4 font-light">vel S</li>
                <li class="pb-4 font-light">sada Shimano GRX 600 2x11</li>
                <li class="pb-4 font-light">taková a taková barva</li>
                <li class="pb-4 font-light">další parametr</li>
            </ul>
        </div>
        <div class="flex flex-col items-start">
            <p class="font-normal mb-6">cena: {{ price }},- s DPH</p>
            <Button
                type="secondary"
                label="Mám zájem"
            />
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ShopItemCard',
    props: {
        image: {
            type: String,
            default: '/shop/1.png'
        },
        title: {
            type: String,
            default: null
        },
        params: {
            type: Object,
            default: null
        },
        price: {
            type: String,
            default: null
        }
    }
}
</script>

<style>

</style>