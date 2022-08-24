const http = require('node:http')
const views = require('./views.js')
const fs = require('node:fs')
// const productos = require('./productos.js')

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(views.createPage('<p>Alumno: Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/materia') {
        res.write(views.createPage('<p>Materia: Aplicaciones Hibridas</p>'))
        res.end()
    }
    else if (req.url === '/profesor') {
        res.write(views.createPage('<p>Profesor: Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/aumento') {
        for (let i = 0; i < productos.length; i++) {
            productos[i].precio = parseInt(productos[i].precio * 1.1)
        }
        res.write(views.createPage('<p>Se aplico un aumento del 10% a los productos</p>'))
        res.end()
    }
    else if (req.url === '/productos') {
        fs.readFile('./data/productos.json', function (err, data) {
            if (err) {
                res.write(views.createPage('<p>No se pudo leer el archivo</p>'))
                res.end()
            }
            else {
                const productos = JSON.parse(data.toString())

                let content = '<ul>'
                for (let i = 0; i < productos.length; i++) {
                    content += `<li>${productos[i].id} - ${productos[i].nombre} - ${productos[i].precio}</li>`
                }
                content += '</ul>'
                res.write(views.createPage(content))

                res.end()
            }
        })
    }
    else {
        res.write(views.createPage('<p>404 - Not Found</p>'))
        res.end()
    }
})

server.listen(2022)