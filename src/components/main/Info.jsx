import React from 'react'
import ServiceIcon from "../../assets/icons/ServiceIcon"
import Icon1 from "../../assets/icons/Icon1"
import Icon2 from "../../assets/icons/Icon2"
import Icon3 from "../../assets/icons/Icon3"

function Info() {
  return (
    <section className='info'>
      <div className="container">
        <div className="info-content">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icons">
                <div className="info-icon">
                  <ServiceIcon />
                </div>
                <span className='info-deliver_icon'>
                  <Icon1/>
                </span>

              </div>
              <h1 className='info-title'>FREE AND FAST DELIVERY</h1>
              <p className="info-subtitle">Free delivery for all orders over $140</p>
            </div>

            <div className="info-card">
              <div className="info-icons">
                <div className="info-icon">
                  <ServiceIcon />
                </div>
                <span className='info-deliver_icon'>
                  <Icon2/>

                </span>

              </div>
              <h1 className='info-title'>24/7 CUSTOMER SERVICE</h1>
              <p className="info-subtitle">Friendly 24/7 customer support</p>
            </div>

            <div className="info-card">
              <div className="info-icons">
                <div className="info-icon">
                  <ServiceIcon />
                </div>
                <span className='info-deliver_icon'>
                  <Icon3/>
                </span>

              </div>
              <h1 className='info-title'>MONEY BACK GUARANTEE</h1>
              <p className="info-subtitle">We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info