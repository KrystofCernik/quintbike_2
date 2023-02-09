

export default defineEventHandler(async () => {
    const data = await $fetch('https://quintbike-api.haim.eu/pages')
    return data
})