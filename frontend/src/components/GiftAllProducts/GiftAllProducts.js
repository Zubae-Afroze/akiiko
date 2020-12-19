import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import axios from 'axios';

const GiftAllProducts = () => {

    const [giftBox, setGiftBox] = useState({});
    const [giftBag, setGiftBag] = useState({});
    const [accessories, setAccessories] = useState({});

    useEffect(() => {
        const fetchAllProductList =  async () => {
            const resGiftbox = await axios.get(`/api/productlist/gift/giftbox`)
            setGiftBox(resGiftbox.data);

            const resGiftBag = await axios.get(`/api/productlist/gift/giftbag`)
            setGiftBag(resGiftBag.data);

            const resAccessories = await axios.get(`/api/productlist/gift/accessories`)
            setAccessories(resAccessories.data);
        }

        fetchAllProductList();
    }, [])

    
    return (
    <Container>
        <div className='product-list-wrapper'>
            {giftBox[Object.keys(giftBox)[0]] ? 
            <>
            <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
            <div className='product-list-label'>{giftBox[Object.keys(giftBox)[0].subGroup]}</div>
            <div className='product-list-text'>{giftBox[Object.keys(giftBox)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {giftBox.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
                                <div>
                                <img src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='label-view'>{product.quickView}</span> : null}
                                </div>
                                <div className='product-list-card-title'>{product.productName}</div>
                                <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div>
                            </div></Link>
                        </div>
                    ))}
                </Row>
            </div>
            </>
            : null }

            {giftBag[Object.keys(giftBag)[0]] ? 
            <>
            <div className='product-list-label'>{giftBag[Object.keys(giftBag)[0]].subGroup}</div>
            <div className='product-list-text'>{giftBag[Object.keys(giftBag)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {giftBag.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
                                <img src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='label-view'>{product.quickView}</span> : null}
                            </div>
                            <div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div></Link>
                        </div>
                    ))}
                </Row>
            </div>
            </>
            : null }
            
            {accessories[Object.keys(giftBag)[0]] ? 
            <>
            <div className='product-list-label'>{accessories[Object.keys(accessories)[0]].subGroup}</div>
            <div className='product-list-text'>{accessories[Object.keys(accessories)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {accessories.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
                                <img src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='pl-label-view'>{product.quickView}</span> : null}
                            </div>
                            <div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div></Link>
                        </div>
                    ))}
                </Row>
            </div>
            </>
            : null }
        </div>
    </Container>
    )
}

export default GiftAllProducts
