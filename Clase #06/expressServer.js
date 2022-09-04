import express from 'express'
import fs from 'fs'
import { createPage } from './views.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.use('/', express.static('public'))

app.get('/productos', function (req, res) {
    fs.readFile('./data/productos.json', function (err, data) {
        if (err) {
            res.send('No se encontró el archivo')
        } else {
            const productos = JSON.parse(data.toString())
            res.render('Productos', { productos })

        }
    })
})
// Query Params
app.get('/productos/ver', function (req, res) {
    //res.json(req.query)
    const idProduto = parseInt(req.query.id)
    fs.readFile('./data/productos.json', function (err, data) {
        if (err) {
            res.send('No se encontró el archivo')
        } else {
            const productos = JSON.parse(data.toString())
            let producto = null

            for (let i = 0; i < productos.length; i++) {
                if (productos[i].id === idProduto) {
                    producto = productos[i]
                    break
                }
            }
            if (producto) {
                res.send(createPage(`
                    <h2>${producto.nombre}</h2>
                    <p>Precio: $${producto.precio}</p>
                `))
            } else {
                res.send(createPage(`<h1>Producto no encontrado</h1>`))
            }
        }
    })
})

// Route Params
// Path Params

// productos/2
app.get('/productos/:idProducto', function (req, res) {
    // res.json(req.params)
    const idProduto = parseInt(req.params.idProducto)
    fs.readFile('./data/productos.json', function (err, data) {
        if (err) {
            res.send('No se encontró el archivo')
        } else {
            const productos = JSON.parse(data.toString())
            let producto = null

            for (let i = 0; i < productos.length; i++) {
                if (productos[i].id === idProduto) {
                    producto = productos[i]
                    break
                }
            }
            if (producto) {
                res.send(createPage(`
                    <h2>${producto.nombre}</h2>
                    <p>Precio: $${producto.precio}</p>
                `))
            } else {
                res.send(createPage(`<h1>Producto no encontrado</h1>`))
            }
        }
    })

})

app.post('/nuevo', function (req, res) {
    res.json(req.body)
})


app.get('/template', function (req, res) {
    res.render('hola', { name: "<strong>Brian Lara</strong>" })
})



app.listen(2022, function () {
    console.log('El servidor esta ON! http://localhost:2022')
})