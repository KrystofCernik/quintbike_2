

export default defineEventHandler(async () => {
    const data = await $fetch('https://quintbike-api.haim.eu/articles')
    return data
})