/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;