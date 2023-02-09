<template>
  <form class="w-min flex flex-col items-start gap-8 mx-auto py-28">
    <h2 class="w-full text-center">Máte zájem?</h2>
    <Input
        label="jméno"
        type="text"
    />
    <Input
        label="email"
        type="email"
    />
    <Textarea
        label="zpráva"
        type="text"
    />
    <Button
        type="secondary"
        label="Odeslat"
        @click="submit"
    />
  </form>
</template>

<script>
export default {
    name: 'Form',
}
</script>

<style>

</style>