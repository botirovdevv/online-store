import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Backet from '../../pages/Backet';

function Products() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products?limit=8').then((res) => {
            setProducts(res.data);
            setLoading(false);
        }).catch((error) => {
            console.error('Error fetching the products:', error);
            setLoading(false);
        });
    }, []);

    const addToCart = (productId) => {
        const productToAdd = products.find((product) => product.id === productId)

        if (productToAdd) {
            setCartItems((prevItems) => {
                const itemInCart = prevItems.find(item => item.id === productId);
                if (itemInCart) {
                    return prevItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item);
                } else {
                    return [...prevItems, { ...productToAdd, quantity: 1 }];
                }
            });
        }
    }

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            }).filter(item => item.quantity > 0);
            return updatedItems;
        });
    }

    const clearAll = () => {
        setCartItems([]);
    }

    return (
        <>
            {
                loading ? <h1>Loading</h1> :
                <section className="products">
                    <div className="container">
                        <div className="products-text">
                            <div className='products-line'></div>
                            <h1 className='products-title'>Today's</h1>
                        </div>
                        <div className="products-content">
                            <div className="products-cards">
                                {products.map((item) => (
                                    <div className="products-card" key={item.id}>
                                        <div className="products-image">
                                            <img src={item.image} className='products-img' alt="" />
                                        </div>

                                        <div className="products-items">
                                            <h1 className='products-name'>{item.title.substring(0, 10)}</h1>
                                            <span className='products-price'>{item.price}$</span>
                                            <button className='products-add_btn' onClick={() => addToCart(item.id)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            }
            <Backet cartItems={cartItems} removeFromCart={removeFromCart} clearAll={clearAll} />
        </>
    );
}

export default Products;
