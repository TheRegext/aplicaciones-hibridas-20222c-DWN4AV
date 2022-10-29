import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_N')
const prodfavs = db.collection('prodfav')

async function addProductFav(userId, prodfav) {
    return client.connect()
        .then(async function () {
            return prodfavs.updateOne({ user_id: new ObjectId(userId) }, { $addToSet: { products: prodfav } })
        })
        .then(function (result) {
            if (result.modifiedCount === 0) {
                return prodfavs.insertOne({ user_id: new ObjectId(userId), products: [prodfav] })
            }
        })
}
async function getProductFav(userId) {
    return client.connect()
        .then(async function () {
            return prodfavs.findOne({ user_id: new ObjectId(userId) })
        })
}

async function deleteProductFav(userId, productId) {
    return client.connect()
        .then(async function () {
            return prodfavs.updateOne({ user_id: new ObjectId(userId) }, { $pull: { products: { product_id: productId } } })
        })
}

export {
    addProductFav,
    getProductFav,
    deleteProductFav
}