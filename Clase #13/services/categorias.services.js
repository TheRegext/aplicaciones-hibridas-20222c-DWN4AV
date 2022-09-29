import { MongoClient, ObjectId } from 'mongodb'

// MANEJO DE ERROES

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db("DB_N")

async function traerCategorias() {
    return client.connect()
        .then(async function () {
            return db.collection("Categorias").find().toArray()
        })
        .catch(function () {
            return []
        })
}


export {
    traerCategorias
}