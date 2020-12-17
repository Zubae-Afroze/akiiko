import React from 'react'
import { Container, div, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

const StorageAllProducts = (props) => {
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
        <div className='product-list-label'>{props.organisersProductListLabel}</div>
        <div className='product-list-text'>{props.organisersProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.organisersProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <Link to={`/api/product/${product.productId}`}><div className='product-list-image'>
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
        <div className='product-list-label'>{props.homeProductListLabel}</div>
        <div className='product-list-text'>{props.homeProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.homeProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <Link to={`/api/product/${product.productId}`}><div className='product-list-image'>
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
        </div>
    </Container>
    )
}

export default StorageAllProducts
