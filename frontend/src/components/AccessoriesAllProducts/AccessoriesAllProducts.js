import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import axios from 'axios';

const AccessoriesAllProducts = (props) => {

    const [onthgoAllProducts, setOnTheGoProducts] = useState({})
    const [walletAllProducts, setWalletAllProdcuts] = useState({})

    useEffect(() => {
        const fetchAllProductList = async () => {
            const resOnTheGo = await axios.get(`/api/productlist/accessories/onthego`)
            setOnTheGoProducts(resOnTheGo.data);

            const resWallet = await axios.get(`/api/productlist/accessories/wallet`)
            setWalletAllProdcuts(resWallet.data);
        }

        fetchAllProductList();
    })

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
            {onthgoAllProducts[Object.keys(onthgoAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{onthgoAllProducts[Object.keys(onthgoAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{onthgoAllProducts[Object.keys(onthgoAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {onthgoAllProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
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
            </> : null }

            {walletAllProducts[Object.keys(walletAllProducts)[0]] ?
            <>
            <div className='product-list-label'>{walletAllProducts[Object.keys(walletAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{walletAllProducts[Object.keys(walletAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {walletAllProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
                                <img id={product._id} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
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

export default AccessoriesAllProducts
