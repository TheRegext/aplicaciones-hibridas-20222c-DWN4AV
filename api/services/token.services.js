import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_N')
const tokens = db.collection('tokens')

async function create(token) {
    await client.connect()
    await tokens.insertOne(token)
}

async function removeByToken(token) {
    await client.connect()
    await tokens.deleteOne({ token })
}

async function removeByUserId(user_id) {
    await client.connect()
    await tokens.deleteMany({ user_id })
}

async function findByToken(token) {
    await client.connect()
    return await tokens.findOne({ token })
}


export {
    create,
    removeByToken,
    removeByUserId,
    findByToken
}