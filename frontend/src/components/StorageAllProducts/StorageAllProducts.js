import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import {
    actionListOrganiser,
    actionListHome
} from '../../actions/actionStorage.js'

//import axios from 'axios';

const StorageAllProducts = () => {

    // const [organisersAllProduct, setOraniserAllProduct] = useState({});
    // const [homeAllProduct, setHomeAllProduct] = useState({});

    const dispatch = useDispatch()

    const organiserList = useSelector(state => state.organiserList)
    const { organiserLoading, organiserProducts, organiserError } = organiserList

    const homeList = useSelector(state => state.homeList)
    const { homeLoading, homeProducts, homeError } = homeList

    useEffect(() => {
        dispatch(actionListOrganiser())
        dispatch(actionListHome())
    }, [dispatch])

    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src=product.hoverImage
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src=product.images[0];
    }

    return (
    <Container>
        <div className='product-list-wrapper'>
        <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
            {organiserLoading ? <h1>Loading...</h1> : organiserError ? <h1>{organiserError}</h1> : organiserProducts[Object.keys(organiserProducts)[0]] ? 
            <>
            <div className='product-list-label'>{organiserProducts[Object.keys(organiserProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{organiserProducts[Object.keys(organiserProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {organiserProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                <div><img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                                </div>
                                <div className='product-list-card-title'>{product.productName}</div>
                                <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div>
                            </div></Link>
                        </div>
                    ))}
                </Row>
            </div>
            </> : null }

            { homeLoading ? <h1>Loading...</h1> : homeError ? <h1>{homeError}</h1> : homeProducts[Object.keys(homeProducts)[0]] ? 
            <>
            <div className='product-list-label'>{homeProducts[Object.keys(homeProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{homeProducts[Object.keys(homeProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {homeProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                <div><img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                                </div>
                            </div>
                            <div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div></Link>
                        </div>
                    ))}
                </Row>
            </div>
            </> : null }

        </div>
    </Container>
    )
}

export default StorageAllProducts
