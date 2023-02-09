
export const formatDate = (date: string) => {
    const options: Object = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(date).toLocaleDateString('cs-CS', options)
}