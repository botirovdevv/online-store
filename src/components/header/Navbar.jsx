import React from 'react'
import { Link } from "react-router-dom";
import Search from "../../assets/icons/Search"
import HeartIcon from "../../assets/icons/HeartIcon"
import BacketIcon from "../../assets/icons/BacketIcon"

function Navbar() {
    return (
        <nav className='nav'>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <Link to="/">
                            <h1 className='nav-logo_title'>Exclusive</h1>
                        </Link>
                    </div>

                    <ul className='nav-links'>
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/">About</Link>
                        <Link className='nav-link' to="/">Contact</Link>
                        <Link className='nav-link' to="/">Sign up</Link>
                    </ul>

                    <div className="nav-items">
                        <form className='nav-form'>
                            <input type="text" placeholder='What are you looking for?' className='nav-input' />
                            <button className='nav-search_btn'>
                                <Search />
                            </button>
                        </form>
                        <div className="nav-items_links">
                            <Link className='nav-search_link' to="/search">
                                <Search/>
                            </Link>
                            <Link>
                                <HeartIcon />
                            </Link>
                            <Link>
                                <BacketIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar