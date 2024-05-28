import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Backet from '../../pages/Backet';
import ItemCard from '../../providers/ItemCard';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import StarIcon from "../../assets/icons/SolidStarIcon";
import Skeleton from '../../components/skeleton/Index';

function Products() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const { addItem } = useCart();

    useEffect(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products?limit=8')
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <section className="products">
                    <div className="container">
                        <div className="products-cards">
                            {Array.from(new Array(8)).map((_, index) => (
                                <Skeleton key={index} />
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
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
                                            <img src={item.image} referrerPolicy="no-referrer" className='products-img' alt="" />
                                        </div>
                                        <div className="products-items">
                                            <h1 className='products-name'>{item.title.substring(0, 10)}</h1>
                                            <h2 className='products-price'>{item.price}$</h2>
                                            <span className='products-rate'>
                                                <StarIcon />
                                                <span className='products-rate_title'>
                                                    {item.rating && item.rating.rate}
                                                </span>
                                            </span>
                                            <button
                                                className='products-add_btn'
                                                onClick={() => addItem(item)}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/products" className='products-link'>View All Products</Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Products;
