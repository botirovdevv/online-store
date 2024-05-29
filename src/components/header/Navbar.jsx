import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Search from "../../assets/icons/Search";
import HeartIcon from "../../assets/icons/HeartIcon";
import BacketIcon from "../../assets/icons/BacketIcon";

function Navbar() {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => {
                setProducts(json);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    useEffect(() => {
        if (input) {
            const results = products.filter((product) =>
                product.title.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [input, products]);

    const handleChange = (value) => {
        setInput(value);

    };

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
                        <form className='nav-form' onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder='What are you looking for?'
                                value={input}
                                onChange={(e) => handleChange(e.target.value)}
                                className='nav-input'
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                            />
                            <div className={isFocus ? "nav-search_results show" : "nav-search_results"}>
                                {filteredProducts.length > 0 && (
                                    <div className="search-result">
                                        {filteredProducts.map((product) => (
                                            <div key={product.id} className="nav-search_result">
                                                <img src={product.image} alt={product.title} width="50" />
                                                <span className='products-name'>{product.title.substring(0, 10)}...</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link to="/search" className='nav-search_btn' >
                                <Search />
                            </Link>
                        </form>
                        <div className="nav-items_links">
                            <Link className='nav-search_link' to="/search">
                                <Search />
                            </Link>
                            <Link>
                                <HeartIcon />
                            </Link>
                            <Link to="/backet">
                                <BacketIcon />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
