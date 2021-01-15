import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeScreenHome.css';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import { actionListHomeHome } from '../../actions/actionHomeHome';

//import HomeScreenHomeProducts from '../../assets/products/HomeScreenHomeProducts';

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
        document.getElementById(product.productId).src = product.hoverImage

        // if (product.productId === document.getElementById(product.productId)) {
        //     console.log('same')
        //     document.getElementById(product.productId).attr('src', product.hoverImage)
        // }
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src = product.images[0];
    }

    //const [HomeScreenHomeProducts, setHomeScreenHomeProducts] = useState([]);

    const dispatch = useDispatch()

    const homeScreenHome = useSelector(state => state.homeScreenHome);

    const { loading, error, products } = homeScreenHome

    useEffect(() => {
        dispatch(actionListHomeHome())
    }, [dispatch])

    //const HomeScreenHomeProducts = []

    return (
        <div className='home-screen-component'>
            <Row className='home-wrapper workout-cont'>
                <Col sm={3} className='home-button-placement'>
                    <Link to='/allproducts/productlist/home'><button className='home-button'>SHOP ALL</button></Link>
                </Col>
                <Col sm={9} className='home-wrapper'>
                    <div className='home-title'>HOME</div>
                    <div className='home-text'>A simple yet inviting collection of
                    natural fabric kitchen accessories that will blend harmoniously
                    with every home’s mood & feel. Multi-purpose & vegan lunch bags,
                    aprons & more</div>
                </Col>
            </Row>
            <Row>
                <Col sm={5} className='hero-image-workout'>
                    <div className='workout-hero-image'>
                        <img src={`/images/home_screen_images/HomeScreenHomeHero.jpg`} alt='home_hero_img' />
                    </div>
                </Col>
                {loading ? <MyComponent
                    sentences={[]}
                    wrapperBackgroundColor={'rgba(255,255,255)'}
                    color={'#6e4e37'}
                    loaderType={'ball-spin-clockwise'}
                    customLoader={<SpinnerIcon />}
                /> : error ? <h3>{error}</h3> :
                        <Col sm={7} className='workout-container'>
                            <Row className='workout-card-wrapper'>
                                {products.map(product => (
                                    <Col className='home-card-items' key={product._id}>
                                        <Link to={`/product/${product._id}`}><div>
                                            <div className='home-img-wrap'>
                                                <img id={product.productId} className='home-card-image' src={product.images[0]} alt='home_1' />
                                                {product.bestSeller ? <span className='label-best label-best-workout'>{product.bestSeller}</span> : null}
                                                {product.quickView ? <span className='label-view label-view-workout' onMouseEnter={() => { handleMouseEnter(product) }} onMouseOut={() => { handleMouseOut(product) }}>{product.quickView}</span> : null}
                                            </div>
                                            <div className='home-card-title'>{product.productName}</div>
                                            <div className='home-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div>
                                        </div></Link>
                                    </Col>
                                ))}
                            </Row>
                        </Col>}
            </Row>
            <div className='hero-button mobile-view-button'>
                <Link to='/home/all_products'><button>
                    Shop Now
                    </button></Link>
            </div>
        </div>
    )
}

export default HomeScreenHome
