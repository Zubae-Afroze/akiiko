import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

const AccessoriesAllProducts = (props) => {

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
        <div className='product-list-label'>{props.onthegoProductListLabel}</div>
        <div className='product-list-text'>{props.onthegoProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.onthegoProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <Link to={`/api/product/${product.productId}`}><div className='product-list-image'>
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
        <div className='product-list-label'>{props.walletProductListLabel}</div>
        <div className='product-list-text'>{props.walletProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.walletProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <Link to={`/api/product/${product.productId}`}><div className='product-list-image'>
                            <img id={product.productId} src={product.heroImage} alt='home_1'/>
                            {product.bestSeller ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                            {product.quickView ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div></Link>
                    </div>
                ))}
            </Row>
        </div>
        </div>
    </Container>
    )
}

export default AccessoriesAllProducts
