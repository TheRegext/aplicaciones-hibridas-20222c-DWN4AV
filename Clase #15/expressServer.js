import express from 'express'
import ProductosRoutes from './routers/productos.routes.js'
import CategoriasRoutes from './routers/categorias.routes.js'

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static('public'))

app.use(ProductosRoutes)
app.use(CategoriasRoutes)


app.listen(2022, function () {
    console.log('El servidor esta ON! http://localhost:2022')
})