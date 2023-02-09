<template>
  <div class="frames">

    <Container fullwidth>

        <FramesSection @color="handleBgColorChange" />

        <Form />

    </Container>

  </div>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'Frames',
    data() {
      return {
        bgColor: ''
      }
    },
    methods: {
      handleBgColorChange(value) {
        this.bgColor = value
        if (value !== '#FFFFFF') {
          gsap.to('form', {
            opacity: 0
          })
        } else {
          gsap.to('form', {
            opacity: 1
          })
        }
        gsap.to('.frames', {
          backgroundColor: value
        })
      }
    }
}
</script>

<style>

</style>