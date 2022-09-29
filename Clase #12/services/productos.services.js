import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function traerProductos() {
    return client.connect()
        .then(async function () {
            const db = client.db('DB_N')
            return db.collection("Productos").find().toArray()
        })
        .catch(function (err) {
            return []
        })
}

async function guardar(producto) {
    const productoNuevo = {
        ...producto,
    }

    return client.connect()
        .then(function () {
            const db = client.db('DB_N')
            return db.collection("Productos").insertOne(productoNuevo)
        })
        .then(function (result) {
            return productoNuevo
        })

}

async function traerProductoByID(id) {
    return client.connect()
        .then(function () {
            const db = client.db('DB_N')
            return db.collection("Productos").findOne({ _id: new ObjectId(id) })
        })
}

async function eliminar(id) {
    return client.connect()
        .then(function () {
            const db = client.db('DB_N')
            return db.collection("Productos").deleteOne({ _id: new ObjectId(id) })
        })
}

async function editar(id, producto) {
    return client.connect()
        .then(function () {
            return client.db('DB_N').collection('Productos').updateOne({ _id: new ObjectId(id) }, { $set: producto })
        })
}

export {
    traerProductos,
    guardar,
    traerProductoByID,
    eliminar,
    editar
}