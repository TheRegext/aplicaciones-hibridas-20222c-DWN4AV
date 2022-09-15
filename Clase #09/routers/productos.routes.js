import express from 'express'
import * as ProductosController from '../controllers/productos.controllers.js'

const route = express.Router()

route.get('/productos', ProductosController.verTodos)

route.get('/productos/:idProducto', ProductosController.verUn)

route.post('/nuevo', ProductosController.crear)

export default route