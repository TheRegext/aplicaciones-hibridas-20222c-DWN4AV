import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/alumno', function (req, res) {
    res.send("Hola, soy el alumno")
})

app.listen(2022, function () {
    console.log('Server is running on port 2022')
})