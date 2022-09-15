import { createPage } from '../views.js'
import * as ProductosService from '../services/productos.services.js'

function verTodos(req, res) {
    ProductosService.traerProductos()
        .then(function (productos) {
            res.render('Productos', { productos })
        })
}

function verUn(req, res) {
    ProductosService.traerProductos()
        .then(function (productos) {
            const idProduto = parseInt(req.params.idProducto)
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
        })
        .catch(function (err) {
            res.status(404).send('Producto no encontrado')
        })
}


function crear(req, res) {
    const producto = {
        nombre: req.body.nombre,
        precio: req.body.precio
    }

    ProductosService.guardar(producto)
        .then(function (producto) {
            res.render('VerProducto', { producto })
        })
}

export {
    verTodos,
    verUn,
    crear
}