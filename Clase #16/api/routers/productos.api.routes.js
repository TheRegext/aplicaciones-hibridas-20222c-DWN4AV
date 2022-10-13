import express from 'express'
import * as productosApiControllers from '../controllers/productos.api.controllers.js'

const route = express.Router()

route.route('/api/productos')
    .get(productosApiControllers.findAll)


export default route