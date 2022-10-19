import * as productosService from '../../services/productos.services.js';

function findAll(req, res) {
    productosService.traerProductos()
        .then(productos => {
            res.status(200).json(productos)
        })
}

function create(req, res) {
    const producto = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    }

    productosService.guardar(producto)
        .then(function (nuevoProducto) {
            res.status(201).json(nuevoProducto)
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
}

function findById(req, res) {
    const id = req.params.idProducto

    productosService.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.status(200).json(producto)
            }
            else {
                res.status(404).json({ message: 'Producto no encontrado' })
            }
        })
}

function editById(req, res) {
    const id = req.params.idProducto
    const producto = {}

    if (req.body.name) {
        producto.name = req.body.name
    }

    if (req.body.price) {
        producto.price = req.body.price
    }

    if (req.body.category) {
        producto.category = req.body.category
    }

    productosService.editar(id, producto)
        .then(function () {
            res.status(200).json({ message: 'Producto editado' })
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
}

function deleteById(req, res) {
    const id = req.params.idProducto

    productosService.eliminar(id)
        .then(function () {
            res.status(200).json({ message: 'Producto eliminado' })
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
}

function replaceById(req, res) {
    const id = req.params.idProducto
    const producto = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    }

    productosService.editar(id, producto)
        .then(function () {
            res.status(200).json({ message: 'Producto reemplazado' })
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
}

export {
    findAll,
    create,
    findById,
    editById,
    deleteById,
    replaceById
}