import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import {
    actionListTableware,
    actionListKitchen,
    actionListLaundry,
    actionListGarden } from '../../actions/actionHome'

//import axios from 'axios';

const HomeAllProducts = () => {

    // const [tablewareAllProducts, setTableWareAllProducts] = useState({});
    // const [kitchenAllProducts, setKitchenAllProdcuts] = useState({});
    // const [laundryAllProducts, setLaundryAllProducts] = useState({});
    // const [gardenAllProducts, setGardenAllProducts] = useState({});

    const dispatch = useDispatch()

    const tablewareList = useSelector(state => state.tablewareList)
    const { tablewareLoading, tablewareProducts, tablewareError } = tablewareList

    const kitchenList = useSelector(state => state.kitchenList)
    const { kitchenLoading, kitchenProducts, kitchenError } = kitchenList

    const laundryList = useSelector(state => state.laundryList)
    const { laundryLoading, laundryProducts, laundryError } = laundryList

    const gardenList = useSelector(state => state.gardenList)
    const { gardenLoading, gardenProducts, gardenError } = gardenList

    useEffect(() => {
        dispatch(actionListTableware())
        dispatch(actionListKitchen())
        dispatch(actionListLaundry())
        dispatch(actionListGarden())
    }, [dispatch])


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
            
            {tablewareLoading ? <h1>Loading...</h1> : tablewareError ? <h1>{tablewareError}</h1> : tablewareProducts[Object.keys(tablewareProducts)[0]] ? 
            <>
            <div className='product-list-label'>{tablewareProducts[Object.keys(tablewareProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{tablewareProducts[Object.keys(tablewareProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {tablewareProducts.map(product => (
                        <Link to={`/product/${product._id}`} key={product.productId}>
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
            
            {kitchenLoading ? <h1>Loading...</h1> : kitchenError ? <h1>{kitchenError}</h1> : kitchenProducts[Object.keys(kitchenProducts)[0]] ? 
            <>
            <div className='product-list-label'>{kitchenProducts[Object.keys(kitchenProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{kitchenProducts[Object.keys(kitchenProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {kitchenProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
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

            {laundryLoading ? <h1>Loading...</h1> : laundryError ? <h1>{laundryError}</h1> : laundryProducts[Object.keys(laundryProducts)[0]] ? 
            <>
            <div className='product-list-label'>{laundryProducts[Object.keys(laundryProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{laundryProducts[Object.keys(laundryProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {laundryProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
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
            
            {gardenLoading ? <h1>Loading...</h1> : gardenError ? <h1>{gardenError}</h1> : gardenProducts[Object.keys(gardenProducts)[0]] ? 
            <>
            <div className='product-list-label'>{gardenProducts[Object.keys(gardenProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{gardenProducts[Object.keys(gardenProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {gardenProducts.map(product => (
                        <Link to={`/product/${product._id}`} key={product.productId}>
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
