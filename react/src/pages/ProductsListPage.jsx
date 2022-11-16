import { useState, useEffect } from 'react'
import * as ProductsServices from '../services/products.services'

function ProductsListPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('esto se ejecuta cuando se modifca el estado de products');
    }, [products]);

    useEffect(() => {
        console.log('esto se ejecuta cuando se modifica cualquier estado');
    });

    useEffect(() => {
        console.log('esto se ejecuta cuando se monta el componente');

        ProductsServices.find()
            .then(data => {
                setProducts(data);// fuerza a que se vuelva a renderizar el componente
                console.log(data)
            })

        return () => {
            console.log('esto se ejecuta cuando se desmonta el componente');
        }
    }, []);


    /*
        let productsElemento = []
    
        for(let i = 0; i < products.length; i++) {
            productsElemento.push(
                <li>
                    <p> Nombre: {products[i].name} - Precio: {products[i].price} </p>
                </li>
            )
        }
    */

    return (
        <div>
            <h1>Products List</h1>
            <ul>
                {products.map((product) => (
                    <li>
                        <p> Nombre: {product.name} - Precio: ${product.price} </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsListPage