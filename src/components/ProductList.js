import React,  { useState } from 'react';
// import Product from './Product';
import Title from './Title';

import storeProducts from '../data.json';

function ProductList(){
    const [products, setProducts] = useState([storeProducts]);
    console.log(products);

    return(
        
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name='our' title='products' />

                    <div className="row" />
                </div>
            </div>
        </React.Fragment>
            //<Product />
    );
}

export default ProductList;