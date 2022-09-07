import express from 'express'
import fs from 'fs'
import path from 'path'
import { createPage } from './views.js'

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static('public'))


function traerProductos() {
    return fs.readFile('./data/productos.json', function (err, data) {
        if (err) {
            return []
        } else {
            const productos = JSON.parse(data.toString())
            console.log("traerProductos:", productos)
            return productos
        }
    })
}

app.get('/productos', function (req, res) {
    const productos = traerProductos()
    console.log("Productos:", productos)
    //res.render('Productos', { productos })
    res.send()
})

/*
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
*/

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
    // res.json(req.body)
    fs.readFile('./data/productos.json', function (err, data) {
        if (err) {
            res.send('No se encontró el archivo')
        }
        else {
            const productos = JSON.parse(data.toString())

            const nuevoProducto = {
                // id: productos.length + 1,
                id: productos[productos.length - 1].id + 1,
                nombre: req.body.nombre,
                precio: req.body.precio
            }
            productos.push(nuevoProducto)

            fs.writeFile('./data/productos.json', JSON.stringify(productos), function (err) {
                if (err) {
                    res.send('No se pudo guardar el producto')
                }
                else {
                    res.send('Producto guardado')
                }
            })

        }
    })
})


app.get('/template', function (req, res) {
    res.render('hola', { name: "<strong>Brian Lara</strong>" })
})

app.get('/GenerarCSV', function (req, res) {
    fs.readFile('./data/productos.json', function (err, data) {
        if (err) {
            res.send('No se encontró el archivo')
        } else {
            const productos = JSON.parse(data.toString())

            let csv = 'ID, Nombre, Precio\n'
            for (let i = 0; i < productos.length; i++) {
                csv += `${productos[i].id},${productos[i].nombre},${productos[i].precio}\n`
            }
            fs.writeFile('./data/productos.csv', csv, function (err) {
                if (err) {
                    res.send('No se pudo guardar el archivo')
                }
                else {
                    res.sendFile(path.resolve('./data/productos.csv'))
                }
            })

        }
    })
})

app.listen(2022, function () {
    console.log('El servidor esta ON! http://localhost:2022')
})