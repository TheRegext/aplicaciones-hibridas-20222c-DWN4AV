import { ObjectId } from "mongodb";
import { traerCategoriaByID } from "./services/categorias.services";

// Reference
// filter: carrera_id : new ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b")
const Alumnos = [
    {
        nombre: 'Juan',
        edad: 20,
        carrara_id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
        materias: [
            ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
            ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b")
        ]
    }
]

// Embeded
// filter: carrera._id: new ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b") 
const Alumnos = [
    {
        nombre: 'Juan',
        edad: 20,
        carrera: {
            _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
            nombre: 'Ingenieria en Sistemas',
            duracion: 5
        },
        materias: [
            {
                _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
                nombre: 'Matematicas',
            },
            {
                _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
                nombre: 'Fisica',
            }
        ]
    }
]



const Alumnos = [
    {
        nombre: 'Juan',
        edad: 20,
        carrera: {
            _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
            nombre: 'Ingenieria en Sistemas',
        },
        materias: [
            ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
            ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b")
        ]
    }
]

// un producto tiene una categoria
// y una categoria tiene muchos productos


// Reciones One to One
// 1 a 1

// 1 a N




// 1 categoria tiene N productos
let Categorias = [{
    _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
    name: 'Lacteos',
}]

// 1 producto tiene 1 categoria
let Productos = [{
    _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
    name: 'Leche',
    price: 200,

    categories: [...category_id]
}]

// reviews
let Reviews = [{
    _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
    text: 'Muy buena leche',
    product_id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
}]


// 1 producto tiene N reviews



/// usuarios
const Usuarios = [{
    _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
    name: 'Juan',
    email: 'juan@rmail.com',
    password: '123456',
    favorites: [...product_id]
}]


const Usuarios = [{
    _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
    name: 'Juan',
    email: 'juan@rmail.com',
    password: '123456',
}]


/// productos favoritos
const Favorites = [{
    product_id,
    user_id
}]


const Usuarios = [{
    _id: ObjectId("5f9e1b9b9b9b9b9b9b9b9b9b"),
    name: 'Juan',
    email: 'juan@rmail.com',
    password: '123456',
}]


/// productos favoritos
const ProdFav = [{
    user_id,
    products: []
}]

