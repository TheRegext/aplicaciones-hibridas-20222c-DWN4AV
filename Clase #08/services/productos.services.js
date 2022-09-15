import fs from 'fs'

async function traerProductos() {
    return fs.promises.readFile('./data/productos.json')
        .then(function (data) {
            const productos = JSON.parse(data.toString())
            return productos
        })
        .catch(function (err) {
            return []
        })
}

async function guardarProductos(productos) {
    return fs.promises.writeFile('./data/productos.json', JSON.stringify(productos))
}

export {
    traerProductos,
    guardarProductos
}