import http from 'node:http'
import fs from 'node:fs'
import { createPage } from './views.js'

// import views from './views.js'
// import * as views from './views.js'
// import { createPage as armarPagina } from './views.js'

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
    else if (req.url === '/aumento') {
        fs.readFile('./data/productos.json', function (err, data) {
            if (err) {
                res.write(createPage('<p>No se pudo leer el archivo</p>'))
                res.end()
            }
            else {
                const productos = JSON.parse(data.toString())

                for (let i = 0; i < productos.length; i++) {
                    productos[i].precio = parseInt(productos[i].precio * 1.1)
                }

                fs.writeFile('./data/productos.json', JSON.stringify(productos), function (err) {
                    if (err) {
                        res.write(createPage('<p>No se pudo escribir el archivo</p>'))
                        res.end()
                    }
                    else {
                        res.write(createPage('<p>Se aplico el aumento</p>'))
                        res.end()
                    }

                })
            }
        })
    }
    else if (req.url === '/productos') {
        fs.readFile('./data/productos.json', function (err, data) {
            if (err) {
                res.write(createPage('<p>No se pudo leer el archivo</p>'))
                res.end()
            }
            else {
                const productos = JSON.parse(data.toString())

                let content = '<ul>'
                for (let i = 0; i < productos.length; i++) {
                    content += `<li>${productos[i].id} - ${productos[i].nombre} - ${productos[i].precio}</li>`
                }
                content += '</ul>'
                res.write(createPage(content))

                res.end()
            }
        })
    }
    else if (req.url === '/about.html') {
        fs.readFile('./public/about.html', function (err, data) {
            if (err) {
                res.write(createPage('<p>No se pudo leer el archivo</p>'))
                res.end()
            }
            else {
                res.write(data.toString())
                res.end()
            }
        })
    }
    else if (req.url === '/img/logo.png') {
        fs.readFile('./public/img/logo.png', function (err, data) {
            if (err) {
                res.write(createPage('<p>No se pudo leer el archivo</p>'))
                res.end()
            }
            else {
                res.write(data)
                res.end()
            }
        })
    }
    else {
        res.write(createPage('<p>404 - Not Found</p>'))
        res.end()
    }
})

server.listen(2022)