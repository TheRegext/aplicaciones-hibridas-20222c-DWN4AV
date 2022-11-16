import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_N')
const categorias = db.collection('Categorias')
const productos = db.collection('Productos')

async function traerCategorias() {
    return client.connect()
        .then(async function () {
            return categorias.find().toArray()
        })
}

async function traerCategoriaByID(id) {
    return client.connect()
        .then(async function () {
            return categorias.findOne({ _id: new ObjectId(id) })
        })
}

async function guardarCategoria(categoria) {
    return client.connect()
        .then(async function () {
            return categorias.insertOne(categoria)
        })
}

async function editarCategoria(id, categoria) {
    let category_name

    return client.connect()
        .then(async function () {
            return categorias.findOne({ _id: new ObjectId(id) })
        })
        .then(async function (cat) {
            category_name = cat.name
            return categorias.updateOne({ _id: new ObjectId(id) }, { $set: categoria })
        })
        .then(async function () {
            return productos.updateMany({ category: category_name }, { $set: { category: categoria.name } })
        })
}

// embebido
/*
async function editarCategoria(id, categoria) {
    return client.connect()
        .then(async function () {
            return categorias.updateOne({ _id: new ObjectId(id) }, { $set: categoria })
        })
        .then(async function () {
            return productos.updateMany({ category: { _id: new ObjectId(id) } }, { $set: { 'category.name': categoria.name } })
        })
}*/

async function eliminarCategoria(id) {
    return client.connect()
        .then(async function () {
            return categorias.deleteOne({ _id: new ObjectId(id) })
        })
}

export {
    traerCategorias,
    traerCategoriaByID,
    guardarCategoria,
    editarCategoria,
    eliminarCategoria
}