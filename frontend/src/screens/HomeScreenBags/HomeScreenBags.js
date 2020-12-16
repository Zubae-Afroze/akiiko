import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';


//import HomeScreenBagsProducts from '../../assets/products/HomeScreenBagsProducts';
import './HomeScreenBags.css';

const HomeScreenBags = () => {
    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src=product.hoverImage
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src=product.images[0];
    }

    const [HomeScreenBagsProducts, setHomeScreenBagsProducts] = useState([]);

    useEffect(() => {
        const fetchHomeScreenBagsProducts = async () => {
            const { data } = await axios.get('/api/home_screen_bags_products')

            setHomeScreenBagsProducts(data)
        }

        fetchHomeScreenBagsProducts();
    }, [])

    return (
        <div> 
                <Row className='women-wrapper'>
                <Col sm={9} className='women-wrap'>
                    <div className='home-title women-title'>BAGS </div>
                    <div className='women-text'>A delightful range of sustainable bags that are designed 
                        to perfection. Minimal, yet classic silhouettes to 
                        compliment just about every look, 
                        multipurpose & eye-catching.</div>
                    
                </Col>
                <Col sm={3} className='women-button-placement'>
                    <Link to='/bags/all_products'><button className='women-button'>SHOP ALL</button></Link>
                </Col>
            </Row>
            <Row className='women-card-wrapper '>
                {HomeScreenBagsProducts.map(product => (
                   <div className='women-shop-bag-container-root' key={product.productId}>
                    <Link to={`/product/${product.productId}`}>
                    <Col lg={2.6} className='women-shop-bag-container'>
                    <div>
                    <div className='women-card-image'>
                        <div className='women-img-wrap'>
                        <img id={product.productId} src={product.heroImage} alt='women_1'/>
                        {product.bestSeller ? <span className='label-best'>{product.bestSeller}</span> : null}
                        {product.quickView ? <span className='label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                        </div>
                        <div className='women-card-title'>{product.productName}</div>
                        <div className='women-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div>
                    </div>
                    </div>
                    </Col>
                    </Link>
                    </div>

                    ))} 
            </Row>
                <div className='hero-button mobile-view-button'>
                        <Link to='/bags/all_products'><button>
                            Shop Now
                        </button></Link>
                </div>
        </div>
    )
}

export default HomeScreenBags
