import ProductsListPage from './pages/ProductsListPage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import * as authService from './services/auth.services';

function PrivateRoute({ isAuthenticated, element, ...props }) {
    return isAuthenticated ? element : <Navigate to={'/login'} />;
}


function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('token');

        if(token){
            setIsAuthenticated(true);
        }
    }, [])


    useEffect(() => {
        if(isAuthenticated) {
            navigate('/');
        }
        else{
            navigate('/login');
        }
    }, [isAuthenticated]);

    function onLogin(user, token) {
        localStorage.setItem('token', token);

        setUser(user);
        setIsAuthenticated(true);
    }

    
    return (
        <>
            <h1>Mi web!</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/products/new">Nuevo Producto</Link>
            </nav>

            <Routes>
                <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
                <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<HomePage />} />} />
                <Route path="/products/new" element={ <h1>404</h1> } />
                <Route path="/products" element={ <PrivateRoute isAuthenticated={isAuthenticated} element={<ProductsListPage />} />} />
                <Route path="/products/:id" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<ProductDetailPage />} />}  />

                <Route path="*" element={<h1>404</h1>} />
            </Routes>
       </>
    )
}




export default App;