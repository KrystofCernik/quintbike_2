<template>
  <div ref="frames" class="frames-section pt-20 bg-white">

    <Section id="white-section">
        <TextBlock
            description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum"
            class="pl-[2vw] justify-end w-2/3"
            :white="bgColor !== '#FFFFFF'"
        />
        <Image
            image="/frames/white-img.jpg"
        />
    </Section>

    <Section id="green-section">
        <Image
            image="/frames/green-img.jpg"
            class="pt-48"
        />
        <TextBlock
            alignToRight
            description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum"
            class="pr-[2vw]"
            :white="bgColor !== '#FFFFFF'"
        />
    </Section>

    <div id="pink-section">
         <Section textOnly>
            <TextBlock
                description="Lorem ipsum Lorem ipsum vLorem ipsum Lorem ipsLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum vLorem ipsum Lorem ipsum"
                class="py-20"
                :white="bgColor !== '#FFFFFF'"
            />
         </Section>
         <Section>
            <div>
                
            </div>
            <Image
                image="/frames/pink-img.jpg"
                class=""
            />
         </Section>
    </div>

    <div id="black-section">
         <Section statement>
            <TextBlock
                description="Lorem ipsum Lorem ipsum vLorem"
                class="pl-[2vw]"
                :white="bgColor !== '#FFFFFF'"
            />
         </Section>
         <Section>
            <Image
                image="/frames/black-img.jpg"
            />
         </Section>
    </div>



  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
    name: 'FramesSection',
    data() {
        return {
            bgColor: '#FFFFFF'
        }
    },
    watch: {
        bgColor() {
            this.$emit('color', this.bgColor)
        }
    },
    mounted() {
        ScrollTrigger.create({
            trigger: '#white-section',
            start: 'top 0%',
            end: 'bottom 60%',
            duration: 0.3,
            ease: 'ease',
            onEnter: () => {
                this.bgColor = '#FFFFFF'
                gsap.to('.frames-section', {
                    backgroundColor: '#FFFFFF'
                })
            },
            onLeave: () => {
                this.bgColor = '#6A8469'
                gsap.to('.frames-section', {
                    backgroundColor: '#6A8469'
                })
            },
            onEnterBack: () => {
                this.bgColor = '#6A8469'
                gsap.to('.frames-section', {
                    backgroundColor: '#6A8469'
                })
            },
            onLeaveBack: () => {
                this.bgColor = '#FFFFFF'
                gsap.to('.frames-section', {
                    backgroundColor: '#FFFFFF'
                })
            },
        })

        ScrollTrigger.create({
            trigger: '#green-section',
            start: 'top -40%',
            end: 'bottom 60%',
            duration: 0.3,
            ease: 'ease',
            onEnter: () => {
                this.bgColor = '#6A8469'
                gsap.to('.frames-section', {
                    backgroundColor: '#6A8469'
                })
            },
            onLeave: () => {
                this.bgColor = '#CE92A9'
                gsap.to('.frames-section', {
                    backgroundColor: '#CE92A9'
                })
            },
            onEnterBack: () => {
                this.bgColor = '#CE92A9'
                gsap.to('.frames-section', {
                    backgroundColor: '#CE92A9'
                })
            },
            onLeaveBack: () => {
                this.bgColor = '#6A8469'
                gsap.to('.frames-section', {
                    backgroundColor: '#6A8469'
                })
            },
        })

        ScrollTrigger.create({
            trigger: '#pink-section',
            start: 'top -40%',
            end: 'bottom 60%',
            duration: 0.3,
            ease: 'ease',
            onEnter: () => {
                this.bgColor = '#CE92A9'
                gsap.to('.frames-section', {
                    backgroundColor: '#CE92A9'
                })
            },
            onLeave: () => {
                this.bgColor = '#2E2E32'
                gsap.to('.frames-section', {
                    backgroundColor: '#2E2E32'
                })
            },
            onEnterBack: () => {
                this.bgColor = '#2E2E32'
                gsap.to('.frames-section', {
                    backgroundColor: '#2E2E32'
                })
            },
            onLeaveBack: () => {
                this.bgColor = '#CE92A9'
                gsap.to('.frames-section', {
                    backgroundColor: '#CE92A9'
                })
            },
        })

        ScrollTrigger.create({
            trigger: '#black-section',
            start: 'top -40%',
            end: 'bottom 60%',
            duration: 0.3,
            ease: 'ease',
            onEnter: () => {
                this.bgColor = '#2E2E32'
                gsap.to('.frames-section', {
                    backgroundColor: '#2E2E32'
                })
            },
            onLeave: () => {
                this.bgColor = '#FFFFFF'
                gsap.to('.frames-section', {
                    backgroundColor: '#FFFFFF'
                })
            },
            onEnterBack: () => {
                this.bgColor = '#FFFFFF'
                gsap.to('.frames-section', {
                    backgroundColor: '#FFFFFF'
                })
            },
            onLeaveBack: () => {
                this.bgColor = '#2E2E32'
                gsap.to('.frames-section', {
                    backgroundColor: '#2E2E32'
                })
            },
        })
    },
    beforeUnmount() {
        ScrollTrigger.killAll()
    }
}
</script>

<style>

</style>