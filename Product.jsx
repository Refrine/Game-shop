import React from 'react';

const productStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
};


const Product = ({id,name,price,img}) => {
    return (
        <div style={productStyle}>
            <img src={img} alt={`Product ${id}`}/>
            <p>ID: {id}</p>
            <p>Price: {price}</p>
            <img src="./img/GTAV_Official_Cover_Art.jpg" alt=""/>
        </div>
    );
};

export default Product;