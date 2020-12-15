import React from 'react'
import { Row, Col } from 'react-bootstrap';
import HomeScreenWomenProducts from '../../assets/products/HomeScreenWomenProducts';
import { Link } from 'react-router-dom';
import './HomeScreenWomen.css';

const HomeScreenWomen = () => {
    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src=product.hoverImage
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src=product.images[0];
    }

    return (
        <div> {/**container class changed as div*/}
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
                {HomeScreenWomenProducts.map(product => (
                   <div className='women-shop-bag-container-root' key={product.productId}>{/* class name added here*/} 
                    <Link to={`/product/${product.productId}`}>
                    <Col lg={2.6} className='women-shop-bag-container'> {/*class name added */}
                    <div>
                    <div className='women-card-image'>
                        <div className='women-img-wrap'>
                        <img id={product.productId} src={product.heroImage} alt='women_1'/>
                        {product.bestSeller !== undefined ? <span className='label-best'>{product.bestSeller}</span> : null}
                        {product.quickView !== undefined ? <span className='label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                        </div>
                        <div className='women-card-title'>{product.productName}</div>
                        <div className='women-card-text'>View Details - &#x20B9;{product.price !== undefined ? product.price : product.mrpPrice}</div>
                    </div>
                    </div>
                    </Col>
                    </Link>
                    </div>

                    ))} 
            </Row>
            {/* <Row className='women-wrapper'>
                <Col sm={9}>
                    <div className='women-title'>WOMEN</div>
                    <div className='women-title-sub'>SHOPPING BAGS</div>
                    <div className='women-text'>A delightful range of sustainable bags that are designed 
                        to perfection. Minimal, yet classic silhouettes to 
                        compliment just about every look, 
                        multipurpose & eye-catching.</div>
                </Col>
                <Col sm={3} className='women-button-placement'>
                    <button className='women-button'>SHOP ALL</button>
                </Col>
            </Row>
            <Row className='women-card-wrapper'>
                {HomeScreenWomenProducts.map(product => (
                    <Col key={product.productId}><a href='/'>
                    <div className='women-card-image'>
                        <img src={product.heroImage} alt='women_1'/>
                        <div className='women-card-title'>{product.productName}</div>
                        <div className='women-card-text'>View Details - &#x20B9;{product.price}</div>
                    </div>
                    </a>
                    </Col>
                ))}
            </Row> */} <div className='hero-button mobile-view-button'>{/*button added*/}
                        <Link to='/bags/all_products'><button>
                            Shop Now
                        </button></Link>
                        </div>
        </div>
    )
}

export default HomeScreenWomen
