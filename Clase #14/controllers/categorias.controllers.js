import * as categoriasServices from '../services/categorias.services.js'

function verCategorias(req, res) {
    categoriasServices.traerCategorias()
        .then(function (categorias) {
            res.render('Categorias/Lista', { categorias })
        })
}

export {
    verCategorias
}