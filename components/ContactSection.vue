<template>
  <div class="contact-section grid grid-cols-2 h-screen">
    <div class="w-full h-full flex items-center justify-center">
        <div class="flex flex-col items-start  gap-24">
            <div class="flex flex-col items-start gap-8">
                <Heading
                    title="Ozvěte se nám"
                    weight="normal"
                />
                <a class="big" href="mailto:info@quintbike.cz">info@quintbike.cz</a>
                <a class="big" href="tel:+420 457 456 432">+420 457 456 432</a>
            </div>
            <div class="flex flex-col items-start gap-8">
                <Heading
                    title="Nebo přijďte na kafe"
                    weight="normal"
                />
                <a class="big" href="mailto:info@quintbike.cz">U Rybníčku 342/12, Opava</a>
                <p class="big">po-pá: 9.00 - 15.00</p>
                <p class="big">so-ne: zavřeno</p>
            </div>
        </div>
    </div>
    <div class="w-full h-full relative">
        <nuxt-img
            src="/contact/1.jpg"
            class="absolute bottom-0 left-0 w-full h-full object-cover"
            format="jpg"
            preload
        />
    </div>
    <!-- <Image
        image="/contact/1.jpg"
    /> -->
  </div>
</template>

<script>
export default {
    name: 'ContactSection'
}
</script>

<style>

</style>