import { ObjectId } from "mongodb";

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