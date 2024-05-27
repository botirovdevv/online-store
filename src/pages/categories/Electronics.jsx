import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarIcon from "../../assets/icons/SolidStarIcon"

function Electronics() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get("https://fakestoreapi.com/products/category/electronics").then((res) => {
            setProducts(res.data)
            setLoading(false)
        })
    }, [])
    return (
        <section className="men">
            <div className="container">
                <div className="products-text">
                    <div className='products-line'></div>
                    <h1 className='products-title'>
                        Electronics
                    </h1>
                </div>
                <div className="men-content">
                    <div className="products-cards">
                        {
                            products.map((item, key) => {
                                return (
                                    <div className="products-card">
                                        <div className="products-image">
                                            <img src={item.image} className='products-img' alt="" />
                                        </div>

                                        <div className="products-items">
                                            <h1 className='products-name'>{item.title.substring(0, 11)}</h1>
                                            <span className='products-price'>{item.price}$</span>
                                            <span className='products-rate'>
                                                <StarIcon />
                                                <span className='products-rate_title'>
                                                    {item.rating.rate}
                                                </span>
                                            </span>
                                            <button className='products-add_btn'>Add to card</button>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Electronics