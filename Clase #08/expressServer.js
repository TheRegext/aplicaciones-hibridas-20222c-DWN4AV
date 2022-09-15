import express from 'express'
import ProductosRoutes from './routers/productos.routes.js'

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static('public'))

app.use(ProductosRoutes)


app.listen(2022, function () {
    console.log('El servidor esta ON! http://localhost:2022')
})