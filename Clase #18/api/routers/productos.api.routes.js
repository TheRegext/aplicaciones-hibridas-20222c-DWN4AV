import express from 'express'
import * as productosApiControllers from '../controllers/productos.api.controllers.js'
//import * as reviewsApiControllers from '../controllers/reviews.api.controllers.js'

const router = express.Router()

router.route('/api/productos')
    .get(productosApiControllers.findAll)
    .post(productosApiControllers.create)

router.route('/api/productos/:idProducto')
    .get(productosApiControllers.findById)
    .patch(productosApiControllers.editById)
    .delete(productosApiControllers.deleteById)
    .put(productosApiControllers.replaceById)

/*
router.route('/api/productos/:idProducto/revires')
    .get(reviewsApiControllers.findAll)*/

export default router