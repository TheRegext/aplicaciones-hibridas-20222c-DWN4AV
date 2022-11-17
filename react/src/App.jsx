import Counter from './components/Counter'
import Border from './components/Border'

import ProductsListPage from './pages/ProductsListPage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <h1>Mi web!</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/products/new">Nuevo Producto</Link>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsListPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
       </BrowserRouter>
    )
}




export default App;