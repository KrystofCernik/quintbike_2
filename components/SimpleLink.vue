<template>
  <nuxt-link
    :to="to"
    class="simple-link small relative overflow-hidden"
    :class="{ 'text-white': white }"
  >
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
    name: 'SimpleLink',
    props: {
        to: {
            type: [String, Object],
            default: ''
        },
        label: {
            type: String,
            default: 'více'
        },
        white: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">

  .simple-link::before {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000000;
    z-index: 0;
  }

  .simple-link.text-white::before {
    background-color: #FFFFFF;
  }

  .simple-link:hover {
    &::before {
      animation: hoverlink 0.5s forwards;
    }
  }

  @keyframes hoverlink {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(100%);
    }
    51% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  

</style>