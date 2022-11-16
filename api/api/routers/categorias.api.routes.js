import express from 'express'
import * as categoriasApiControllers from '../controllers/categorias.api.controllers.js'

const router = express.Router()

router.route('/api/categorias')
    .get(categoriasApiControllers.findAll)

router.route('/api/categorias/:idCategoria')
    .get(categoriasApiControllers.findById)


export default router