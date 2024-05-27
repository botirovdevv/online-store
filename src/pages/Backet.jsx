import React from 'react';

function Backet({ cartItems, removeFromCart, clearAll }) {
    return (
        <div className="backet">
            <h1 className='backet-title'>Basket</h1>
            <div className='backet-cards'>
                {cartItems.map((item) => (
                    <div className="products-card" key={item.id}>
                        <div className="products-image">
                            <img src={item.image} className='products-img' alt="" />
                        </div>
                        <h2 className='products-desc'>{item.category}</h2>
                        <h2 className='products-price'>{item.price}$</h2>
                        <h1>{item.quantity} ta mahsulot</h1>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={clearAll}>Clear all</button>
        </div>
    );
}

export default Backet;
