import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductList.css';


const ProductList = (props) => {
    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src=product.hoverImage
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src=product.images[0];
    }

    return (
        <Container>
            <div className='product-list-wrapper'> {/* container changed as div*/}
            <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
            <div className='product-list-label'>{props.productListLabel}</div>
            <div className='product-list-text'>{props.productListText}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {props.productDetails.map(product => (
                        <Link className='product-list-card-wrapper' to={`/product/${product.productId}`} key={product.productId}>
                        <div>
                            <div className='product-list-image'>
                                <img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller !== undefined ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                                {product.quickView !== undefined ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                            </div>
                            <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'>View Details - &#x20B9;{product.price !== undefined ? product.price : product.mrpPrice}</div>
                        </div>
                        </Link>
                    ))}
                </Row>
            </div>            
            </div>
        </Container>
    )
}

export default ProductList
