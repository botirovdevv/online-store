import React, { useState } from 'react'
import { inputsData } from '../../data/inputsData'
import { useCart } from 'react-use-cart';
import { Radio } from '@mui/material';
import Img1 from '../../assets/images/bank1.png'
import Img2 from '../../assets/images/bank2.png'
import Img3 from '../../assets/images/bank3.png'

function CheckProduct() {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChangee = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <section className="check">
            <div className="container">
                <h1 className='check-title'>Billing Details</h1>
                <div className="check-content">
                    <form className="check-form">
                        {
                            inputsData.map((item, key) => (
                                <div className="check-input_items">
                                    <label className='check-label'>{item.label}</label>
                                    <input type="text" className="check-input" />
                                </div>
                            ))
                        }
                    </form>
                    <div className="check-products">
                        <div className="check-cards">
                            {items.map((item) => (
                                <div className="check-card" key={item.id}>
                                    <div className="backet-image">
                                        <img src={item.image} className='backet-img' alt="" />
                                        <h2 className='backet-name'>{item.title.substring(0, 10)}</h2>
                                    </div>
                                    <div>
                                        <h2 className='backet-price'>{item.price}$</h2>
                                    </div>
                                </div>
                            ))}

                            <div className='check-numbers'>
                                <div className="backet-total_number">
                                    <h2 className='backet-price'>Total Price:</h2>
                                    <h2 className='backet-price'>${cartTotal}</h2>
                                </div>
                                <hr />
                                <div className='backet-total_number'>
                                    <h2 className='backet-price'>Shipping: </h2>
                                    <h2 className='backet-price'>Free</h2>
                                </div>
                                <hr />
                            </div>

                            <div className="check-radio_group">
                                <div className="check-radio">
                                    <div className="check-bank">
                                        <Radio
                                            checked={selectedValue === 'a'}
                                            onChange={handleChangee}
                                            value="a"
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': 'A' }}
                                            sx={{
                                                color: '#000',
                                                '&.Mui-checked': {
                                                    color: '#000',

                                                },
                                            }}
                                        />
                                        <h1 className='check-bank_title'>Bank</h1>
                                    </div>
                                    <div className="check-banks">
                                        <img src={Img1} className='check-banks_img' alt="" />
                                        <img src={Img2} className='check-banks_img' alt="" />
                                        <img src={Img3} className='check-banks_img' alt="" />
                                    </div>
                                </div>
                                <div className="check-bank">
                                    <Radio
                                        checked={selectedValue === 'b'}
                                        onChange={handleChangee}
                                        value="b"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'B' }}

                                        sx={{
                                            color: '#000',
                                            '&.Mui-checked': {
                                                color: '#000',

                                            },
                                        }}
                                    />

                                    <h1 className="check-bank_title">Cash on delivery</h1>
                                </div>

                                <button className="check-order_btn">Place Order</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckProduct