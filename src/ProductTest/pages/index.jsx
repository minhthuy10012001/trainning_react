import React from 'react';
import PropTypes from 'prop-types';
import Product from '../ProductComponent/Product';

function ProductList(props) {
    return (
        <div>
            List Product
            <Product/>
        </div>
    );
}

export default ProductList;