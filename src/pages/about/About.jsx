import React from 'react'
import Img from "../../assets/images/about-bg.png"

function About() {
  return (
    <div className='about'>
        <div className="container">
            <div className="about-content">
                <div className="about-text">
                    <h1 className='about-title'>Our Story</h1>
                    <p className="about-subtitle">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                </div>
                <div className="about-bg">
                    <img src={Img} className='about-img' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About