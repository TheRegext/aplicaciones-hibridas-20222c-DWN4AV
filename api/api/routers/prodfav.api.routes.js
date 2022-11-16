import express from "express"
import * as prodfavControllers from "../controllers/prodfav.api.controllers.js"
const router = express.Router()

// router.route('/api/products/:idProduct/agregarFavorito/:idUser')
router.route('/api/users/:idUser/prodfavs')
    .post(prodfavControllers.addProductFav)
    .get(prodfavControllers.getProductFav)


router.route('/api/users/:idUser/prodfavs/:idProduct')
    .delete(prodfavControllers.deleteProductFav)

export default router