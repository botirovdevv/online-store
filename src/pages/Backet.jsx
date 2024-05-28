import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import Delete from "../assets/icons/TrashIcon";

function Backet() {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const [value, setValue] = useState('');
    const [discountedTotal, setDiscountedTotal] = useState(cartTotal);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            setDiscountedTotal(cartTotal - 20);
        } else {
            setDiscountedTotal(cartTotal);
        }
    }, [cartTotal, active]);

    const applyDiscount = () => {
        if (value.toLowerCase() === 'mustafo') {
            setActive(true);
        } else {
            setActive(false);
        }
        setValue('');
    };

    if (isEmpty) return(
        <div className="container">
            <div className="backet-warning">
                <h1 className='backet-warning_title'>Your cart is empty!</h1>
            </div>
        </div>
    )
    return (
        <div className="backet">
            <div className="container">
                <div className="backet-content">
                    <div className='backet-cards'>
                        {items.map((item) => (
                            <div className="backet-card" key={item.id}>
                                <div className="backet-image">
                                    <img src={item.image} className='backet-img' alt="" />
                                    <h2 className='backet-name'>{item.title.substring(0, 10)}</h2>
                                </div>
                                <div>
                                    <h2 className='backet-price'>{item.price}$</h2>
                                </div>
                                <div className='backet-quantities'>
                                    <p className='backet-quantity'>{item.quantity}</p>
                                    <div className='backet-buttons'>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='backet-button'>
                                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.75732 2.36666L1.45732 5.66666L0.514648 4.72399L4.75732 0.481323L8.99998 4.72399L8.05732 5.66666L4.75732 2.36666Z" fill="black" />
                                            </svg>
                                        </button>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='backet-button'>
                                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.24268 3.63334L7.54268 0.333344L8.48535 1.27601L4.24268 5.51868L1.71661e-05 1.27601L0.942683 0.333344L4.24268 3.63334Z" fill="black" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <button onClick={() => removeItem(item.id)} className='backet-delete_btn'>
                                    <Delete />
                                    <span className='backet-delete_title'>
                                        Delete
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="backet-extra">
                        <div className="backet-form">
                            <input
                                type="text"
                                className='backet-form_input'
                                onChange={(e) => setValue(e.target.value)}
                                value={value}
                                placeholder='Coupon Code'
                            />
                            <button className='backet-form_btn' onClick={applyDiscount}>Apply Coupon</button>
                        </div>
                        <div className="backet-total_card">
                            <h1 className="backet-total_title">Backet Total</h1>
                            <div className='backet-total_numbers'>
                                <div className="backet-total_number">
                                    <h2 className='backet-price'>Total Price:</h2>
                                    <h2 className='backet-price'>${discountedTotal.toFixed(2)}</h2>
                                </div>
                                <hr />
                                <div className='backet-total_number'>
                                    <h2 className='backet-price'>Shipping: </h2>
                                    <h2 className='backet-price'>Free</h2>
                                </div>
                                <hr />
                                <div className='backet-total_number'>
                                    <h2 className='backet-price'>Coupon: </h2>
                                    <h2 className='backet-price'>{active ? "Have" : "Have not"}</h2>
                                </div>
                                <button className="backet-total_btn">Procees to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backet;
