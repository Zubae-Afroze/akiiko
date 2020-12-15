import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

const HomeAllProducts = (props) => {

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
        <div className='product-list-label'>{props.tablewareProductListLabel}</div>
        <div className='product-list-text'>{props.tablewareProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.tablewareProductDetails.map(product => (
                    <Link to={`/product/${product.productId}`}>
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <div>
                            <img id={product.productId} src={product.lifestyleImage} alt='home_1'/>
                            {product.bestSeller !== undefined ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                            {product.quickView !== undefined ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                            </div>
                            <div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'>View Details - &#x20B9;{product.price !== undefined ? product.price : product.mrpPrice}</div>
                        </div>
                    </div>
                    </Link>
                ))}
            </Row>
        </div>
        <div className='product-list-label'>{props.kitchenProductListLabel}</div>
        <div className='product-list-text'>{props.kitchenProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.kitchenProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <Link to={`/product/${product.productId}`}><div className='product-list-image'>
                            <img id={product.productId} src={product.lifestyleImage} alt='home_1'/>
                            {product.bestSeller !== undefined ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                            {product.quickView !== undefined ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'>View Details - &#x20B9;{product.price !== undefined ? product.price : product.mrpPrice}</div></Link>
                    </div>
                ))}
            </Row>
        </div>
        <div className='product-list-label'>{props.laundryProductListLabel}</div>
        <div className='product-list-text'>{props.laundryProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.laundryProductDetails.map(product => (
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <Link to={`/product/${product.productId}`}><div className='product-list-image'>
                            <img id={product.productId} src={product.lifestyleImage} alt='home_1'/>
                            {product.bestSeller !== undefined ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                            {product.quickView !== undefined ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                        </div>
                        <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'>View Details - &#x20B9;{product.price !== undefined ? product.price : product.mrpPrice}</div></Link>
                    </div>
                ))}
            </Row>
        </div>
        <div className='product-list-label'>{props.gardenProductListLabel}</div>
        <div className='product-list-text'>{props.gardenProductListText}</div>
        <div>
            <Row className='product-list-card-wrapper'>
                {props.gardenProductDetails.map(product => (
                    <Link to={`/product/${product.productId}`}>
                    <div className='product-list-card-wrapper' key={product.productId}>
                        <div className='product-list-image'>
                            <img src={product.lifestyleImage} alt='home_1'/>
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
        {/* <Container>
                <div className='product-list-label'>{props.similarProductListLabel}</div>
                <div className='product-list-text'>{props.similarProductListText}</div>
                <Container>
                <Row className='product-list-card-wrapper'>
                    {props.similarProductDetails.map(product => (
                        <div className='product-list-card-wrapper' key={product._id}>
                            <div className='product-list-image'>
                                <img src={product.image} alt='home_1'/>
                            </div>
                            <div className='product-list-card-title'>{product.name}</div>
                        </div>
                    ))}
                </Row>
                </Container>
        </Container> */}
        </div>
    </Container>
    )
}

export default HomeAllProducts
