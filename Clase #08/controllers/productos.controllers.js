import { createPage } from './views.js'
import { guardarProductos, traerProductos } from './services/productos.services.js'

function verTodos(req, res) {
    traerProductos()
        .then(function (productos) {
            res.render('Productos', { productos })
        })
}

function verUn(req, res) {
    traerProductos()
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
    traerProductos()
        .then(function (productos) {
            const nuevoProducto = {
                id: productos[productos.length - 1].id + 1,
                nombre: req.body.nombre,
                precio: req.body.precio
            }
            productos.push(nuevoProducto)

            return guardarProductos(productos)
        })
        .then(function () {
            res.send(createPage(`<h1>Producto guardado</h1>`))
        })
        .catch(function (err) {
            res.send('Error al guardar el producto')
        })
}

export {
    verTodos,
    verUn,
    crear
}