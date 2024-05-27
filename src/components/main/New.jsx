import React from 'react'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'

function New() {
    return (
        <section className="new">
            <div className="container">
                <div className="products-text">
                    <div className='products-line'></div>
                    <h1 className='products-title'>
                        Featured
                    </h1>
                </div>
                <h1 className='new-title'>New Arrival</h1>
                <div className="new-content">
                    <div>
                        <img src={img1} className='new-img' alt="" />
                    </div>
                    <div className="new-images">
                        <img src={img2} className='new-img' alt="" />

                        <div className='new-products'>
                            <img src={img3} className='new-img' alt="" />
                            <img src={img4} className='new-img' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default New