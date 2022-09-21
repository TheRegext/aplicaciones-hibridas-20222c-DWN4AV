import express from 'express'
import * as ProductosController from '../controllers/productos.controllers.js'

const route = express.Router()

route.get('/productos', ProductosController.verTodos)

route.route('/productos/nuevo')
    .get(ProductosController.formNuevo)
    .post(ProductosController.crear)

route.route('/productos/:idProducto/eliminar')
    .get(ProductosController.formEliminar)
    .post(ProductosController.eliminar)

// hacer el modificar un producto

route.get('/productos/:idProducto', ProductosController.verUn)




export default route