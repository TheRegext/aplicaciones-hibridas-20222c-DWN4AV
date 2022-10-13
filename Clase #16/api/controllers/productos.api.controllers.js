import * as productosService from '../../services/productos.services.js';

function findAll(req, res) {
    productosService.traerProductos()
        .then(productos => {
            res.status(200).json(productos)
        })
}

export {
    findAll
}