import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import productData from '../../../Data/ProductData/ProductDt';

// Product.propTypes = {
//     product: PropTypes.object.isRequired,
// };

function Product(props) {

        return (
            <>
           { productData.map((product, index) => (
            <div key = {product.name}>
                <div className='product'>
                    <div className='iamge'>
                    <img src = {product.img} alt={product.name} />
                    </div>
                    <div className='name'><Link to={`/products/${product.id}`}>{product.name}</Link></div>
                    <div className = "price">{product.price}</div>
                </div>
                
            </div>
           ))}
            </>
            
        );

}

export default Product;