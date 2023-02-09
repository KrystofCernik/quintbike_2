<template>
  <div class="input__wrapper flex flex-col items-start gap-1">
    <label>
        {{ label }}
    </label>
    <textarea
        v-model="value"
        :type="type"
        class="input relative py-3 border-none w-[600px] h-[200px]"
        :class="{ 'filled': value.length }"
        @change="$emit('input', value)"
    />
  </div>
</template>

<script>
export default {
    name: 'Textarea',
    props: {
        label: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'text'
        },
    },
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style lang="scss">

textarea.input {
    resize: none;
    border-bottom: 2px solid #E6E6E6;
    transition: 0.15s ease;

    &:focus,
    &.filled {
        outline: none;
        border-bottom: 2px solid #959494;
    }
}

</style>