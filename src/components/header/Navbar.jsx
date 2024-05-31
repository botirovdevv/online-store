import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Search from "../../assets/icons/Search";
import HeartIcon from "../../assets/icons/HeartIcon";
import BacketIcon from "../../assets/icons/BacketIcon";
import CloseIcon from "../../assets/icons/CloseIcon"
import { useCart } from 'react-use-cart';

function Navbar() {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isFocus, setIsFocus] = useState(false)
    const [show, setShow] = useState(false)

    const {
        totalUniqueItems,
    } = useCart();

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
    const showInput = () => {
        setShow(true)
    }

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
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/">Contact</Link>
                        <Link className='nav-link' to="/">Sign up</Link>
                    </ul>

                    <div className="nav-items">
                        <form className={show ? 'nav-form show' : "nav-form"} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder='What are you looking for?'
                                value={input}
                                onChange={(e) => handleChange(e.target.value)}
                                className='nav-input'
                                onFocus={() => setIsFocus(true)}
                            />
                            <div className={isFocus ? "nav-search_results show" : "nav-search_results"}>
                                {filteredProducts.length > 0 && (
                                    <div className="search-result">
                                        {filteredProducts.map((product) => (
                                            <Link to={`/product/${product.id}`} onClick={() => setIsFocus(false)} key={product.id} className="nav-search_result">
                                                <img src={product.image} alt={product.title} width="50" />
                                                <span className='products-name'>{product.title.substring(0, 10)}...</span>
                                            </Link>
                                        ))}
                                    </div>  
                                )}
                            </div>
                            <button className='nav-search_btn' >
                                <Search />
                            </button>
                            <button onClick={() => setShow(false)} className='nav-close_btn' >
                                <CloseIcon />
                            </button>
                        </form>
                        <div className="nav-items_links">
                            <button onClick={showInput} className='nav-search_link'>
                                <Search />
                            </button>
                            <Link>
                                <HeartIcon />
                            </Link>
                            <Link to="/backet" className='nav-backet_link'>
                                <h1 className='nav-backet_number'>{totalUniqueItems}</h1>
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
