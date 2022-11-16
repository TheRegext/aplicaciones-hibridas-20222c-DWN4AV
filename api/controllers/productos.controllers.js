import * as ProductosService from '../services/productos.services.js'
import * as CategoriasService from '../services/categorias.services.js'
import * as ReviewsService from '../services/reviews.services.js'

function verTodos(req, res) {
    ProductosService.traerProductos()
        .then(function (productos) {
            res.render('Productos/Lista', { productos })
        })
}

async function verUn(req, res) {
    const id = req.params.idProducto

    const product = await ProductosService.traerProductoByID(id)

    if (product) {
        const reviews = await ReviewsService.findAll(id)
        res.render('Productos/Ver', { product, reviews })
    }
    else {
        res.render('404')
    }
}


function formNuevo(req, res) {
    CategoriasService.traerCategorias()
        .then(function (categorias) {
            res.render('Productos/Cargar', { producto: {}, categorias })
        })

}

function crear(req, res) {
    const producto = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
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
    let categorias = []

    CategoriasService.traerCategorias()
        .then(function (todos) {
            categorias = todos
            return ProductosService.traerProductoByID(id)
        })
        .then(function (producto) {
            if (producto) {
                res.render('Productos/Cargar', { producto, categorias })
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
        price: req.body.price,
        category: req.body.category
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