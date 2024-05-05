/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import React from 'react';
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, gettingStoreCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = gettingStoreCart()
        const savedCart = []
        for(const id in storedCart){
            if(products.length > 0){
                const addedProduct = products.find(currentProduct =>currentProduct.id===id)
                addedProduct.quantity = storedCart[id]
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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
            <div className='cart-bg'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;