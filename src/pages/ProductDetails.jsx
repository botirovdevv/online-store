import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import StarIcon from "../assets/icons/SolidStarIcon"
import Radio from '@mui/material/Radio';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedValue, setSelectedValue] = useState('a');
    const [alignment, setAlignment] = React.useState('xs');

    const handleChangee = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error('Error fetching product:', err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="products-details">
            <div className="container">
                <div className="products-details_card">
                    <div className="products-details_image">
                        <img src={product.image} className='products-details_img' alt={product.title} />
                    </div>
                    <div className="products-details_content">
                        <h1 className='products-details_name'>{product.title}</h1>
                        <span className='products-rate'>
                            <StarIcon />
                            <span className='products-rate_title'>
                                {product.rating && product.rating.rate}
                            </span>
                        </span>
                        <p className='products-details_price'>${product.price}</p>
                        <p className='products-details_desc'>{product.description}</p>
                        <hr />
                        <div className="products-details_items">
                            <h1 className='products-details_color'>Colours:</h1>
                            <div>
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChangee}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                    sx={{
                                        color: '#a0bce0',
                                        '&.Mui-checked': {
                                            color: '#a0bce0',

                                        },
                                    }}
                                />
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChangee}
                                    value="b"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'B' }}

                                    sx={{
                                        color: '#db4444',
                                        '&.Mui-checked': {
                                            color: '#db4444',

                                        },
                                    }}
                                />
                            </div>
                        </div>

                        <div className="products-details_items">
                            <h1 className='products-size_title'>Size: </h1>
                            <ToggleButtonGroup
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                sx={{
                                    '& .MuiToggleButton-root': {
                                        color: '#db4444',
                                        borderColor: '#db4444',
                                        '&.Mui-selected': {
                                            backgroundColor: '#db4444',
                                            color: '#ffffff',
                                        },
                                        '&:hover': {
                                            backgroundColor: '#db4444',
                                            color: '#ffffff',
                                        },
                                    },
                                }}
                            >
                                <ToggleButton value="xs" aria-label="left aligned">
                                    XS
                                </ToggleButton>
                                <ToggleButton value="s" aria-label="centered">
                                    S
                                </ToggleButton>
                                <ToggleButton value="m" aria-label="right aligned">
                                    M
                                </ToggleButton>
                                <ToggleButton value="l" aria-label="justified" >
                                    L
                                </ToggleButton>
                                <ToggleButton value="xl" className='products-size_box'>
                                    XL
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <Link className='product-buy_link'>Buy Now</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
