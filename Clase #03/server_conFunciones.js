const http = require('node:http')

function createPage(content) {
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

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(createPage('<p>Alumno: Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/materia') {
        res.write(createPage('<p>Materia: Aplicaciones Hibridas</p>'))
        res.end()
    }
    else if (req.url === '/profesor') {
        res.write(createPage('<p>Profesor: Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/productos') {
        const productos = [
            { id: 1, nombre: 'Café Expreso', precio: 200 },
            { id: 2, nombre: 'Café Americano', precio: 250 },
            { id: 3, nombre: 'Café Cortado', precio: 200 },
            { id: 4, nombre: 'Café Doble', precio: 250 },
            { id: 5, nombre: 'Café Lagrima', precio: 200 }
        ]

        let content = '<ul>'
        for (let i = 0; i < productos.length; i++) {
            content += `<li>${productos[i].id} - ${productos[i].nombre} - ${productos[i].precio}</li>`
        }
        content += '</ul>'
        res.write(createPage(content))

        res.end()
    }
    else {
        res.write(createPage('<p>404 - Not Found</p>'))
        res.end()
    }
})

server.listen(2022)