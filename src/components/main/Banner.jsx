import React, { useEffect, useState } from 'react'
import { sidebarLinks } from '../../data/sidebarData'
import { Link } from "react-router-dom";

function Banner() {

    return (
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-sidebar">
                        <div className="banner-category">
                            <div className="banner-category_links">
                                {
                                    sidebarLinks.map((item, key) => {
                                        return (
                                            <Link to={item.to} className='banner-category_link'>{item.title}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="banner-video">
                        <iframe width="100%" height="344" src="https://www.youtube.com/embed/xqyUdNxWazA?si=Ku54hQexR_kdZp1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner