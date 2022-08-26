
export function createPage(content) {
    return `
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Mi pagina web</title>
            </head>
            <body>
                <h1>Mi espectacular pagina web!</h1>
                ${content}
            </body>
        </html>
    `
}

export default {
    createPage
}