import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_N')
const reviews = db.collection('reviews')

async function create(idProduct, review) {
    const reviewNew = {
        ...review,
        product_id: new ObjectId(idProduct)
    }

    return client.connect()
        .then(function () {
            return reviews.insertOne(reviewNew)
        })
        .then(function (result) {
            return reviewNew
        })

}

async function findAll(idProduct) {
    return client.connect()
        .then(function () {
            return reviews.find({ product_id: new ObjectId(idProduct) }).toArray()
        })

}



export {
    create,
    findAll,
}