import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import productData from '../../../Data/ProductData/ProductDt';

function ProductDetail(props) {
    const {id} = useParams();
    console.log(id);
    let dt = [];
   dt = productData.find((product) => String(product.id) === id)||{}
   console.log(dt);
    return (  
        <>
           {
            dt !==null ?(
                <div >
                <div className='iamge'>
                <img src = {dt.img} alt={dt.name} />
                </div>
                <div className='name'>{dt.name}</div>
                <div className = "price">{dt.price}</div>
                <div className = "price">{dt.des}</div>
            </div>
            ):(
                <h1>test</h1>
            )
          
          }
            </>          
    );
}

export default ProductDetail;