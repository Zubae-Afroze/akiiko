import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import {
    actionListGiftBox,
    actionListGiftBag,
    actionListAccessories
} from '../../actions/actionGift'

//import axios from 'axios';

const GiftAllProducts = () => {

    // const [giftBox, setGiftBox] = useState({});
    // const [giftBag, setGiftBag] = useState({});
    // const [accessories, setAccessories] = useState({});

    const dispatch = useDispatch()

    const giftBoxList = useSelector(state => state.giftBoxList)
    const { giftBoxLoading, giftBoxProducts, giftBoxError} = giftBoxList

    const giftBagList = useSelector(state => state.giftBagList)
    const { giftBagLoading, giftBagProducts, giftBagError } = giftBagList

    const accessoriesList =  useSelector(state => state.accessoriesList)
    const { accessoriesLoading, accessoriesProducts, accessoriesError} = accessoriesList

    useEffect(() => {
        dispatch(actionListGiftBox())
        dispatch(actionListGiftBag())
        dispatch(actionListAccessories())
    }, [dispatch])

    
    return (
    <Container>
        <div className='product-list-wrapper'>
            {giftBoxLoading ? <h1>Loading...</h1> : giftBoxError ? <h1>{giftBoxError}</h1> :  giftBoxProducts[Object.keys(giftBoxProducts)[0]] ? 
            <>
            <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
            <div className='product-list-label'>{giftBoxProducts[Object.keys(giftBoxProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{giftBoxProducts[Object.keys(giftBoxProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {giftBoxProducts.map(product => (
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
            </>
            : null }

            {giftBagLoading ? <h1>Loading...</h1> : giftBagError ? <h1>{giftBagError}</h1> :  giftBagProducts[Object.keys(giftBagProducts)[0]] ? 
            <>
            <div className='product-list-label'>{giftBagProducts[Object.keys(giftBagProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{giftBagProducts[Object.keys(giftBagProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {giftBagProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
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
            
            {accessoriesLoading ? <h1>Loading...</h1> : accessoriesError ? <h1>{accessoriesError}</h1> : accessoriesProducts[Object.keys(accessoriesProducts)[0]] ? 
            <>
            <div className='product-list-label'>{accessoriesProducts[Object.keys(accessoriesProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{accessoriesProducts[Object.keys(accessoriesProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {accessoriesProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
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
