import express from 'express'
import * as productosApiControllers from '../controllers/productos.api.controllers.js'
import revirewsApiRoutes from './reviews.api.routes.js'
import { isLogin, isAdmin } from '../../middleware/auth.middleware.js'

const router = express.Router()

router.route('*')
    .all([isLogin, isAdmin])


router.route('/')
    .get(productosApiControllers.findAll)
    .post(productosApiControllers.create)

router.route('/:idProducto')
    .get(productosApiControllers.findById)
    .patch(productosApiControllers.editById)
    .delete(productosApiControllers.deleteById)
    .put(productosApiControllers.replaceById)

router.use('/', revirewsApiRoutes)

export default router