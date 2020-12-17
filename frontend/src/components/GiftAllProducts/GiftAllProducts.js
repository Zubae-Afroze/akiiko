import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

const GiftAllProducts = (props) => {
    return (
    <Container>
        <div className='product-list-wrapper'>
        <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
        <div className='product-list-label'>{props.giftboxProductListLabel}</div>
        <div className='product-list-text'>{props.giftboxProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.giftboxProductDetails.map(product => (
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
        <div className='product-list-label'>{props.giftbagProductListLabel}</div>
        <div className='product-list-text'>{props.giftbagProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.giftbagProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <Link to={`/api/product/${product.productId}`}><div className='product-list-image'>
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
        <div className='product-list-label'>{props.accessoriesProductListLabel}</div>
        <div className='product-list-text'>{props.accessoriesProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.accessoriesProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <Link to={`/api/product/${product.productId}`}><div className='product-list-image'>
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
        </div>
    </Container>
    )
}

export default GiftAllProducts
