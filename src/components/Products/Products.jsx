import React,{useContext} from 'react';
import { Grid } from '@material-ui/core';
import { ProductsContext } from '../ProductsContext/ProductsContext';
import './Products.scss'
import { IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import {Card , CardContent } from '@material-ui/core'



const Products = () => {
    const { products } = useContext(ProductsContext);
    return ( 
        <>
        
        {products.length !== 0 && <h2>Wybrane dla ciebie</h2>}

        <div className='products-container'>
            {products.length === 0 && <div>slow internet...no products to display</div>}
            {products.map(product => (
               
                <div className='product-card' key={product.ProductID}> 

                <div className='product-name'>
                        {product.ProductName}
                    </div>
                    
                    <div className='product-img'>
                        <img src={product.ProductImg} alt="not found" />
                    </div>

                    <div className='product-price'>
                         {product.ProductPrice}$
                </div>
                <div className='product-description'>
                    {product.ProductDescription}
                    </div>

                   <Link to='' className='buy'>KUP TERAZ</Link>

                   <Link to='' className='cart'>Dodaj do Koszyka</Link>
                </div>

            ))}

        </div>

    </>
    )
}
export default Products;