import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import axios from 'axios';

const StorageAllProducts = () => {

    const [organisersAllProduct, setOraniserAllProduct] = useState({});
    const [homeAllProduct, setHomeAllProduct] = useState({});

    useEffect(() => {
        const fetchAllProductList = async () => {
            const resOrganisers = await axios.get(`/api/productlist/storage/organisers`)
            setOraniserAllProduct(resOrganisers.data);
            
            const resHome = await axios.get(`/api/productlist/storage/home`)
            setHomeAllProduct(resHome.data);
        }

        fetchAllProductList()
    }, [])

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
            {organisersAllProduct[Object.keys(organisersAllProduct)[0]] ? 
            <>
            <div className='product-list-label'>{organisersAllProduct[Object.keys(organisersAllProduct)[0]].subGroup}</div>
            <div className='product-list-text'>{organisersAllProduct[Object.keys(organisersAllProduct)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {organisersAllProduct.map(product => (
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

            {homeAllProduct[Object.keys(homeAllProduct)[0]] ? 
            <>
            <div className='product-list-label'>{homeAllProduct[Object.keys(homeAllProduct)[0]].subGroup}</div>
            <div className='product-list-text'>{homeAllProduct[Object.keys(homeAllProduct)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {homeAllProduct.map(product => (
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
