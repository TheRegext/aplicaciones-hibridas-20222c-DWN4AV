import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

import fs from 'fs'

async function traerProductos() {
    return client.connect()
        .then(async function () {
            const db = client.db('DB_N')
            const Productos = db.collection("Productos")
            return Productos.find().toArray()
        })
        .catch(function (err) {
            return []
        })
}

async function guardar(producto) {
    return client.connect()
        .then(async function () {
            const db = client.db('DB_N')
            const Productos = db.collection("Productos")
            Productos.insertOne(producto)
            return producto
        })

}

async function guardarProductos(productos) {
    return fs.promises.writeFile('./data/productos.json', JSON.stringify(productos))
}

export {
    traerProductos,
    guardarProductos,
    guardar
}