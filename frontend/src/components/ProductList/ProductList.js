import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ProductList.css';

import axios from 'axios';


const ProductList = () => {

    const { group, subGroup} = useParams();

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchProductLists = async () => {
            const res = await axios.get(`/api/productlist/${group}/${subGroup}`)
            setProductList(res.data);
        }

        fetchProductLists();
    }, [group, subGroup])

    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src=product.hoverImage
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src=product.images[0];
    }

    return (
        <>
        {productList[Object.keys(productList)[0]] ? 
        <Container>
            <div className='product-list-wrapper'>
            <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
            <div className='product-list-label'>{productList[Object.keys(productList)[0]].subGroup}</div>
            <div className='product-list-text'>{productList[Object.keys(productList)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {productList.map(product => (
                        <Link className='product-list-card-wrapper' to={`/product/${product.productId}`} key={product.productId}>
                        <div>
                            <div className='product-list-image'>
                                <img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                            </div>
                            <div className='product-list-card-title'>{product.productName}</div>
                        <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div>
                        </div>
                        </Link>
                    ))}
                </Row>
            </div>            
            </div>
        </Container>
        :null }
        </>
    )
}

export default ProductList
