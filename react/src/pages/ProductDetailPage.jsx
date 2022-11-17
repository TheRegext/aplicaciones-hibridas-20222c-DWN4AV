import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import * as ProductsServices from '../services/products.services'
import {useNavigate}  from 'react-router-dom'


function ProductDetailPage(){
    const navigate = useNavigate()
    const {id} = useParams();
    const [product, setProduct] = useState(null);


    // NO FUNCIONARIA
    useEffect(() => {
        console.log('MONTO');
    }, [])

    // SI FUNCIONARIA
    useEffect(() => {
        ProductsServices.findById(id)
            .then(data => { 
                if(data){
                    setProduct(data);
                }
                else{
                    navigate('/404')
                }
            })
            .catch(err => {
                navigate('/404')
            })
    }, [id])
    


    return (<div>
        <h1>Product Detail Page</h1>
        {(product) ? <p>Nombre: {product.name} - Precio: ${product.price}</p>:"Cargando..."}

    </div>)
}

export default ProductDetailPage