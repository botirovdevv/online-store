import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarIcon from "../../assets/icons/SolidStarIcon"
import { useCart } from 'react-use-cart'
import Skeleton from "../../components/skeleton/Index"

function Woman() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { addItem } = useCart()
  useEffect(() => {
    setLoading(true)
    axios.get("https://fakestoreapi.com/products/category/women's clothing").then((res) => {
      setProducts(res.data)
      setLoading(false)
    })
  }, [])
  return (
    <>
      {
        loading ? (
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
          <section className="men">
            <div className="container">
              <div className="products-text">
                <div className='products-line'></div>
                <h1 className='products-title'>
                  Woman's Clothings
                </h1>
              </div>
              <div className="men-content">
                <div className="products-cards">
                  {
                    products.map((item, key) => {
                      return (
                        <div className="products-card" key={item.id}>
                          <div className="products-image">
                            <img src={item.image} className='products-img' alt="" />
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

                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>

        )
      }
    </>
  )
}

export default Woman