import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(async function () {
        console.log("Me pude conectar a mi DB")
        // le indico que voy a utilizar la base de datos DB_N
        const db = client.db('DB_N')
        console.log("Estoy usando la base de datos: ", db.databaseName)

        // Ojo con el nombre de la coleccion que se crea en la DB
        // accedo a una coleccion
        const Alumnos = db.collection("Alumnos")

        // buscar documentos en la coleccion, usamos el metodo find()
        // find() devuelve un cursor, que es un objeto que nos permite iterar sobre los documentos
        // convertimos el cursor en un array con toArray()

        const listaAlumnos = await Alumnos.find().toArray()

        console.log('Listado')
        console.table(listaAlumnos)

        // filtramos la coleccion por un campo
        const listaAlumnosFiltrado = await Alumnos.find({ name: "Jose" }).toArray()

        console.log('Filtrado')
        console.table(listaAlumnosFiltrado)

        // busco y ordeno
        const listaAlumnosOrdenado = await Alumnos.find().sort({ name: -1 }).toArray()
        console.log('Ordenado')
        console.table(listaAlumnosOrdenado)


        // Traer uno solo documento
        const alumno = await Alumnos.findOne({ _id: new ObjectId("632134eb3cbf3f0f5123ea7c") })
        console.log('Traer uno solo')
        console.table(alumno)
        /*
                // insertar un documento
                const alumnoNuevo = {
                    name: "Maria",
                    age: 25
                }
        
                const resultado = await Alumnos.insertOne(alumnoNuevo)
        
                console.log('Insertar')
                console.table(alumnoNuevo)
                console.log(resultado)
        */
        // eliminar un documento
        /*
        const resultadoDelete = await Alumnos.deleteOne({ _id: new ObjectId("63227e88ba607b0f056d5504") })
        console.log('Eliminar')
        console.log(resultadoDelete)

        */
        resultado = await Alumnos.updateOne({
            _id: new ObjectId("63227fb418300e510bef7cd8")
        }, {
            $set: { name: "Maria Jose", email: "maria.jose@gmail.com" },
            $unset: { age: "" }
        })

        console.log('Update')
        console.log(resultado)

        // Reemplazar un documento
        const alumnoNuevo = {
            name: "Maria",
            age: 25
        }

        const resultadoReplace = await Alumnos.replaceOne({
            _id: new ObjectId("63227fb418300e510bef7cd8")
        }, alumnoNuevo)


    })
    .catch(function (err) {
        console.log("No me pude conectar a mi DB")
    })