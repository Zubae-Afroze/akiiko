import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import HomeScreenHomeProducts from '../../assets/products/HomeScreenHomeProducts';
import { Link } from 'react-router-dom';
import './HomeScreenHome.css';

const HomeScreenHome = () => {

    // let [imageCounter, setImageCounter] = useState(0);

    // let interval;

    // let counter = 0;

    //let HomeScreenProducts = HomeScreenHomeProducts;
    
    // const handleMouseEnter = (product) => {
    //     setImageCounter(1);
    //     interval = setInterval(() => {
    //         product.defaultImageSrc = product.images[counter % product.images.length];
    //         console.log(HomeScreenHomeProducts)
    //         counter++
    //     }, 1000)
    // }

    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src=product.hoverImage

        // if (product.productId === document.getElementById(product.productId)) {
        //     console.log('same')
        //     document.getElementById(product.productId).attr('src', product.hoverImage)
        // }
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src=product.images[0];
    }

    useEffect(() => {

    })

    return (
        <div className='home-screen-component'>{/*container changed into div*/}
               <Row className='home-wrapper workout-cont'> {/*CLASS NAME*/}
                <Col sm={3} className='home-button-placement'>
                    <Link to='/home/all_products'><button className='home-button'>SHOP ALL</button></Link>
                </Col>
                <Col sm={9} className='home-wrapper'>  {/* CLASS NAME */}
                    <div className='home-title'>HOME</div>
                    <div className='home-text'>A simple yet inviting collection of 
                    natural fabric kitchen accessories that will blend harmoniously 
                    with every home’s mood & feel. Multi-purpose & vegan lunch bags, 
                    aprons & more</div>
                </Col>
            </Row>
            <Row>
                <Col sm={5} className='hero-image-workout' > {/*class was added here*/}
                    <div className='workout-hero-image '>
                        <img src={'/images/home_screen_home_products/HomeScreenHomeHero.jpg'} alt='home_hero_img'/>
                    </div>
                </Col>
                <Col sm={7} className='workout-container'> {/*new class name changed*/}
                    <Row className='workout-card-wrapper'> {/*class name changed - homecard name changed to workout*/}
                        {HomeScreenHomeProducts.map(product => (
                            <Col className='home-card-items' key={product.productId}>
                                <Link to={`/product/${product.productId}`}><div>
                                    <div className='home-img-wrap'>
                                    <img id={product.productId} className='home-card-image' src={product.images[0]} alt='home_1'/>
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
             {/* <Row className='home-wrapper'>
                <Col sm={3} className='home-button-placement'>
                    <button className='home-button'>SHOP ALL</button>
                </Col>
                <Col sm={9} className='home-wrapper'>
                    <div className='home-title'>HOME</div>
                    <div className='home-text'>A simple yet inviting collection of 
                    natural fabric kitchen accessories that will blend harmoniously 
                    with every home’s mood & feel. Multi-purpose & vegan lunch bags, 
                    aprons & more.</div>
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <div className='home-hero-image'>
                        <img src={'/images/home_screen_home_products/HomeScreenHomeHero.png'} alt='home_hero_img'/>
                    </div>
                </Col>
                <Col sm={7} className='home-card-head'>
                    <Row className='home-card-wrapper'>
                        {HomeScreenHomeProducts.map(product => (
                            <Col className='home-card-items' key={product.productId}>
                                <div>
                                    <img className='home-card-image' src={product.heroImage} alt='home_1'/>
                                    <div className='home-card-title'>{product.productName}</div>
                                    <div className='home-card-text'>View Details - &#x20B9;{product.price}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row> */} <div className='hero-button mobile-view-button'>{/*button added*/}
                        <Link to='/home/all_products'><button>
                            Shop Now
                        </button></Link>
                        </div>
        </div>
    )
}

export default HomeScreenHome
