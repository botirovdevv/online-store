import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

function NotFound() {
    return (
        <section className="not-found">
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <div className="container">
                <div className="not-found_box">
                    <h1 className='not-found_title'>404 Not Found</h1>
                    <p className="not-found_subtitle">Your visited page not found. You may go home page.</p>
                    <Link to="/" className="not-found_link">Back to home page</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound