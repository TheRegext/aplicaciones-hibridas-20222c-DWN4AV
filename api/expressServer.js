import express from 'express'
import cors from 'cors'
import ProductosRoutes from './routers/productos.routes.js'
import CategoriasRoutes from './routers/categorias.routes.js'
import ProductosApiRoutes from './api/routers/productos.api.routes.js'
import CategoriasApiRoutes from './api/routers/categorias.api.routes.js'
import ProdfavApiRoutes from './api/routers/prodfav.api.routes.js'

const app = express()

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // Para poder leer el body de las peticiones (middleware)

app.use('/', express.static('public'))

app.use(ProductosRoutes)
app.use(CategoriasRoutes)
app.use('/api/products', ProductosApiRoutes)
app.use(CategoriasApiRoutes)
app.use(ProdfavApiRoutes)


app.listen(2022, function () {
    console.log('El servidor esta ON! http://localhost:2022')
})