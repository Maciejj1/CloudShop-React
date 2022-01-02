import React from 'react';
import { Grid } from '@material-ui/core';


import Product from './Product/Product';

const products = [
    {id: 1, name: 'Geekvape Aegis Boost', description: 'Better for a cloud', price: '$20' , image:'https://e-liq.pl/5334-large_default/geekvape-aegis-pod-b100-21700-devil-red.jpg' },
    {id: 2, name: 'Voopoo Argus', description: 'Better for a cloud and juicy', price: '$25', image: 'https://e-liq.pl/5100-large_default/voopoo-pod-argus-pro-80w-3000-mah-litchi-leather-blue.jpg'},
    {id: 3, name: 'Smok G-Priv', description: 'For Men ', price: '$35' , image: 'https://e-liq.pl/1666-thickbox_default/smok-g-priv-230w-box-mod-silver.jpg'},
    {id: 4, name: 'Eleaf I-just 3', description: 'For kids ', price: '$15' , image: 'https://e-golon.nazwa.pl/presta/4335-large_default/eleaf-ijust-3-starter-kit-gtl-pod-tank-3000mah-45ml.jpg'}
    
];


const Products = () => {
    return ( 
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) =>(
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
                </Grid>
        ))}
      </Grid>

    </main>
    )
}
export default Products;