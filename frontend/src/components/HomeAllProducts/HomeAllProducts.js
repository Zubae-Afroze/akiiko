import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import axios from 'axios';

const HomeAllProducts = () => {

    const [tablewareAllProducts, setTableWareAllProducts] = useState({});
    const [kitchenAllProducts, setKitchenAllProdcuts] = useState({});
    const [laundryAllProducts, setLaundryAllProducts] = useState({});
    const [gardenAllProducts, setGardenAllProducts] = useState({});

    useEffect(() => {
        const fetchAllProductList = async () => {
            const resTableware = await axios.get(`/api/productlist/home/tableware`)
            setTableWareAllProducts(resTableware.data)

            const resKitchen = await axios.get(`/api/productlist/home/kitchen`)
            setKitchenAllProdcuts(resKitchen.data)

            const resLaundry = await axios.get(`/api/productlist/home/laundry`)
            setLaundryAllProducts(resLaundry.data)

            const resGarden = await axios.get(`/api/productlist/home/garden`)
            setGardenAllProducts(resGarden.data) 
        }

        fetchAllProductList();
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
            
            {tablewareAllProducts[Object.keys(tablewareAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{tablewareAllProducts[Object.keys(tablewareAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{tablewareAllProducts[Object.keys(tablewareAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {tablewareAllProducts.map(product => (
                        <Link to={`/product/${product.productId}`} key={product.productId}>
                        <div className='product-list-card-wrapper'>
                            <div className='product-list-image'>
                                <div>
                                <img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                                </div>
                                <div className='product-list-card-title'>{product.productName}</div>
                                <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </Row>
            </div>
            </> : null }
            
            {kitchenAllProducts[Object.keys(kitchenAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{kitchenAllProducts[Object.keys(kitchenAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{kitchenAllProducts[Object.keys(kitchenAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {kitchenAllProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
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
            </> : null }

            {laundryAllProducts[Object.keys(laundryAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{laundryAllProducts[Object.keys(laundryAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{laundryAllProducts[Object.keys(laundryAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {laundryAllProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
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
            </> : null }
            
            {gardenAllProducts[Object.keys(gardenAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{gardenAllProducts[Object.keys(gardenAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{gardenAllProducts[Object.keys(gardenAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {gardenAllProducts.map(product => (
                        <Link to={`/product/${product.productId}`} key={product.productId}>
                        <div className='product-list-card-wrapper'>
                            <div className='product-list-image'>
                                <img src={product.heroImage} alt='home_1'/>
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
            </> : null }

        </div>
    </Container>
    )
}

export default HomeAllProducts
