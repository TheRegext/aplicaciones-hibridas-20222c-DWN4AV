import express from 'express'
import fs from 'fs'
import path from 'path'
import { createPage } from './views.js'

const app = express()

//app.use(express.static('public'))
//app.use('/upload', express.static('upload'))
app.use('/', express.static('public'))

app.get('/productos', function (req, res) {
    fs.readFile('./data/productos.json', function (err, data) {
        if (err) {
            res.send('No se encontró el archivo')
        } else {
            const productos = JSON.parse(data.toString())
            let html = '<ul>'
            for (let i = 0; i < productos.length; i++) {
                html += `<li>${productos[i].nombre}</li>`
            }
            html += '</ul>'
            res.send(createPage(html))
        }
    })
})

/*
app.get('/productos', function (req, res) {
    if (fs.existsSync('./data/productos.json')) {
        res.sendFile(path.resolve('./data/productos.json'))
    }
    else {
        res.send('No se encontró el archivo')
    }
})
*/
app.listen(2022, function () {
    console.log('El servidor esta ON! http://localhost:2022')
})