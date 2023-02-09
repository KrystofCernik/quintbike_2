
export const stripeHtml = (html: string) => {
    let regex = /(<([^>]+)>)/ig
    return html.replace(regex, "")
} 