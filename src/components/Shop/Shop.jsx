/* eslint-disable no-unused-vars */
// import React from 'react';
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                   products.map(product =>
                        <Product
                            key={product.id}
                            product={product}  
                            handleAddToCart={handleAddToCart}
                        ></Product>
                    )
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
               <div className='cart-info'>
                <p>Selected Items: {cart.length}</p>
               </div>
            </div>
        </div>
    );
};

export default Shop;