import express from 'express'
import * as productosApiControllers from '../controllers/productos.api.controllers.js'

const router = express.Router()

router.route('/api/productos')
    .get(productosApiControllers.findAll)
    .post(productosApiControllers.create)

router.route('/api/productos/:idProducto')
    .get(productosApiControllers.findById)
    .patch(productosApiControllers.editById)
    .delete(productosApiControllers.deleteById)
    .put(productosApiControllers.replaceById)

export default router