import * as prodfavService from '../../services/prodfav.services.js'

export async function addProductFav(req, res) {
    const userId = req.params.idUser
    const prodfav = {
        product_id: req.body.product_id,
    }
    const result = await prodfavService.addProductFav(userId, prodfav)

    res.json({ message: 'Producto agregado a favoritos' })
}

export async function getProductFav(req, res) {
    const userId = req.params.idUser

    const result = await prodfavService.getProductFav(userId)

    res.json(result)
}

export async function deleteProductFav(req, res) {
    const userId = req.params.idUser
    const productId = req.params.idProduct

    const result = await prodfavService.deleteProductFav(userId, productId)

    res.json({ message: 'Producto eliminado de favoritos', result })
}