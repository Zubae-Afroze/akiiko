import React from 'react';
import { div, Row, Col } from 'react-bootstrap';
import HomeScreenWorkoutProducts from '../../assets/products/HomeScreenWorkoutProducts';
import { Link } from 'react-router-dom';
import './HomeScreenWorkout.css';

const HomeScreenWorkout = () => {

    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src=product.hoverImage
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src=product.images[0];
    }

    return (
        <div className='home-screen-component'>{/**container class changed as div*/}
            <Row className='home-wrapper workout-cont'> {/* workout cls name changes as home*/}
                <Col sm={3} className='home-button-placement'> {/* workout cls name changes as home*/}
                    <Link to='/storage/all_products'><button className='home-button home-workout-button'>SHOP ALL</button></Link> {/* workout cls name changes as home*/}
                </Col>
                <Col sm={9} className='home-wrapper'>{/* workout cls name changes as home*/}
                    <div className='home-title'>STORAGE</div>{/* workout cls name changes as home*/}
                    <div className='home-text'>A thoughtful range of organisers and storage bags to compliment and increase the functionality of your home. 
                    Simplistic and warm, the colour tones and minimal design elevate the mood of your personal spaces and allow for easy declaring. </div>
                </Col>
            </Row>
            <Row>
                <Col sm={5}  className='hero-image-workout'>               {/* changes                      added class name*/}

                    <div className='workout-hero-image'>
                        <img src={'/images/home_screen_workout_products/HomeScreenWorkoutHero.jpg'} alt='home_hero_img'/>
                    </div>
                </Col>
                <Col sm={7} className='workout-container'>
                    <Row className='workout-card-wrapper'> {/* changes                      added class name*/}
                        {HomeScreenWorkoutProducts.map(product => (
                            <Col className='home-card-items ' key={product.productId}>
                                <Link to={`/product/${product.productId}`}><div>
                                    <div className='women-img-wrap'>
                                    <img id={product.productId} className='home-card-image' src={product.heroImage} alt='home_1'/>
                                    {product.bestSeller !== undefined ? <span className='label-best label-best-workout'>{product.bestSeller}</span> : null}
                                    {product.quickView !== undefined ? <span className='label-view label-view-workout' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                                    </div>
                                    <div className='home-card-title'>{product.productName}</div>
                                <div className='home-card-text'>View Details - &#x20B9;{product.price !== undefined ? product.price : product.mrpPrice}</div>
                                </div></Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
             {/* <Row className='workout-wrapper'>
                <Col sm={3} className='workout-button-placement'>
                    <button className='workout-button'>SHOP ALL</button>
                </Col>
                <Col sm={9} className='workout-wrapper'>
                    <div className='workout-title'>WORKOUT</div>
                    <div className='workout-text'>Health is wealth, every choice made for your well-being is reflected in your choice of accessories. 
                    Choose from our range of breathable, 100% organic & trendy gym and yoga bags. 
                    Enjoy the compliments as you inhale positivity & exhale your stress.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <div className='workout-hero-image'>
                        <img src={'/images/home_screen_workout_products/HomeScreenWorkoutHero.png'} alt='home_hero_img'/>
                    </div>
                </Col>
                <Col sm={7}>
                    <Row className='workout-card-wrapper'>
                        {HomeScreenWorkoutProducts.map(product => (
                            <Col className='home-card-items' key={product._id}>
                                <div>
                                    <img className='home-card-image' src={product.image} alt='home_1'/>
                                    <div className='home-card-title'>{product.name}</div>
                                <div className='home-card-text'>View Details - &#x20B9;{product.price}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row> */} <div className='hero-button mobile-view-button'>{/*button added*/}
                        <Link to='/storage/all_products'><button>
                            Shop Now
                        </button></Link>
                        </div>
        </div>
    )
}
export default HomeScreenWorkout
