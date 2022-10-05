import express from 'express'
import * as categoriasControllers from '../controllers/categorias.controllers.js'

const route = express.Router()

route.route('/categorias')
    .get(categoriasControllers.verCategorias)

export default route