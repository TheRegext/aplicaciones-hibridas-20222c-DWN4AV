import * as ProductosService from '../services/productos.services.js'

function verTodos(req, res) {
    ProductosService.traerProductos()
        .then(function (productos) {
            res.render('Productos/Lista', { productos })
        })
}

function verUn(req, res) {
    const id = req.params.idProducto
    ProductosService.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render('Productos/Ver', { producto })
            }
            else {
                res.render('404')
            }
        })
}


function formNuevo(req, res) {
    res.render('Productos/Cargar', { producto: {} })
}

function crear(req, res) {
    const producto = {
        name: req.body.name,
        price: req.body.price
    }

    ProductosService.guardar(producto)
        .then(function (producto) {
            res.render('Productos/Ver', { producto })
        })
        .catch(function (err) {
            res.render('500', { message: 'Error al guardar el producto' })
        })
}


function formEliminar(req, res) {
    const id = req.params.idProducto
    ProductosService.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render('Productos/Eliminar', { producto })
            }
            else {
                res.render('404')
            }
        })
}

function eliminar(req, res) {
    const id = req.params.idProducto
    ProductosService.eliminar(id)
        .then(function (producto) {
            res.redirect('/productos')
        })
        .catch(function (err) {
            res.render('500', { message: 'Error al eliminar el producto' })
        })
}

function formEditar(req, res) {
    const id = req.params.idProducto

    ProductosService.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render('Productos/Cargar', { producto })
            }
            else {
                res.render('404')
            }
        })
}


function editar(req, res) {
    const id = req.params.idProducto
    const producto = {
        name: req.body.name,
        price: req.body.price
    }
    ProductosService.editar(id, producto)
        .then(function (producto) {
            res.redirect('/productos/' + id)
        })
        .catch(function (err) {
            res.render('500', { message: 'Error al editar el producto' })
        })


}



export {
    verTodos,
    verUn,
    crear,
    formNuevo,
    formEliminar,
    eliminar,
    formEditar,
    editar
}