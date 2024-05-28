import React from 'react'
import { useCart } from 'react-use-cart'
import StarIcon from '../assets/icons/SolidStarIcon'

function ItemCard(props) {
    const {addItem} = useCart()
    return (
        <div className="products-card">
            <div className="products-image">
                <img src={props.img} className='products-img' alt="" />
            </div>

            <div className="products-items">
                <h1 className='products-name'>{props.title.substring(0, 10)}</h1>
                <span className='products-price'>{props.price}$</span>
                <span className='products-rate'>
                    <StarIcon />
                    <span className='products-rate_title'>
                        {props.rating.rate}
                    </span>
                </span>
                <button className='products-add_btn' onClick={() => addItem(props.item)}>Add to card</button>
            </div>
        </div>
    )
}

export default ItemCard