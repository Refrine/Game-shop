import React from 'react';
import Product from './Product';

const productListStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
};
const ProductList = ({ products }) => {
    return (
        <div style={productListStyle}>
            {products.map(product => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;