import * as categoriaService from '../../services/categorias.services.js'

function findAll(req, res) {
    categoriaService.traerCategorias()
        .then(function (categorias) {
            res.status(200).json(categorias)
        })
}

function findById(req, res) {
    const id = req.params.idCategoria

    categoriaService.traerCategoriaByID(id)
        .then(function (categoria) {
            if (categoria) {
                res.status(200).json(categoria)
            } else {
                res.status(404).json({ message: 'Categoria no encontrada' })
            }
        })
}

export {
    findAll,
    findById
}