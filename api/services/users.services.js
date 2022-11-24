import { MongoClient, ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_N')
const users = db.collection('users')

async function login({ email, password }) {
    await client.connect()

    const user = await users.findOne({ email })

    if (!user) {
        throw new Error('Usuario no encontrado')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Contraseña incorrecta')
    }

    return user
}


async function find(filter) {
    await client.connect()
    return await users.find(filter).toArray()
}

async function create(user) {
    const newUser = { ...user }
    await client.connect()

    const userExists = await users.findOne({ email: newUser.email })

    if (userExists) {
        throw new Error('El email ya existe en un usuario')
    }

    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(newUser.password, salt)

    await users.insertOne(newUser)

    return newUser
}

async function remove(id) {
    await client.connect()

    const result = await users.deleteOne({ _id: ObjectId(id) })

    if (result.deletedCount === 0) {
        throw new Error('El usuario no existe')
    }
}

async function findById(id) {
    await client.connect()

    return await users.findOne({ _id: ObjectId(id) })
}

export {
    login,
    find,
    create,
    remove,
    findById
}
