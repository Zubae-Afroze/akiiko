import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import { 
    actionListWomen, 
    actionListTote, 
    actionListOffice, 
    actionListTravel  } from '../../actions/actionBags'

// import axios from 'axios';

const BagAllProducts = () => {

    //const [allProductList, setAllProductList] = useState({});

    // const [womenAllProducts, setWomenAllProducts] = useState({});
    // const [toteAllProducts, setToteAllProducts] = useState({});
    // const [officeAllProducts, setOfficeAllProducts] = useState({});
    // const [travelAllProducts, setTravelAllProducts] = useState({});

    const dispatch = useDispatch()

    const womenList = useSelector(state => state.womenList)
    const { womenLoading, womenProducts, womenError } = womenList

    const toteList = useSelector(state => state.toteList)
    const { toteLoading, toteProducts, toteError } = toteList

    const officeList = useSelector(state => state.officeList)
    const { officeLoading, officeProducts, officeError } = officeList

    const travelList = useSelector(state => state.travelList)
    const { travelLoading, travelProducts, travelError } = travelList

    useEffect(() => {
        dispatch(actionListWomen())
        dispatch(actionListTote())
        dispatch(actionListOffice())
        dispatch(actionListTravel())
    }, [dispatch])

    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src=product.hoverImage
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src=product.images[0];
    }

    return (
    <>
    <Container>
        <div className='product-list-wrapper'>
            <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>

            { womenLoading ? <h1>Loading...</h1> : womenError ? <h2>{womenError}</h2> : womenProducts[Object.keys(womenProducts)[0]] ? 
            <>
            <div className='product-list-label'>{womenProducts[Object.keys(womenProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{womenProducts[Object.keys(womenProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {womenProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                <div><img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
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
            
            { toteLoading ? <h1>Loading...</h1> : toteError ? <h1>{toteError}</h1> : toteProducts[Object.keys(toteProducts)[0]] ? 
            <>
            <div className='product-list-label'>{toteProducts[Object.keys(toteProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{toteProducts[Object.keys(toteProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {toteProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                <div><img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='pl-label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}</div>
                            </div>
                            <div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div></Link>
                        </div>
                    ))}
                </Row>
            </div>
            </>
            : null }

            { officeLoading ? <h1>Loading...</h1> : officeError ? <h2>{officeError}</h2> : officeProducts[Object.keys(officeProducts)[0]] ? 
            <>
            <div className='product-list-label'>{officeProducts[Object.keys(officeProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{officeProducts[Object.keys(officeProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {officeProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                <img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
                            </div>
                            <div className='product-list-card-title'>{product.productName}</div>
                            <div className='product-list-card-text'>View Details - &#x20B9;{product.price ? product.price : product.mrpPrice}</div></Link>
                        </div>
                    ))}
                </Row>
            </div>
            </> : null }
            
            { travelLoading ? <h1>Loading...</h1> : travelError ? <h1>{travelError}</h1> : travelProducts[Object.keys(travelProducts)[0]] ? 
            <>
            <div className='product-list-label'>{travelProducts[Object.keys(travelProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{travelProducts[Object.keys(travelProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {travelProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                <img id={product.productId} src={product.heroImage} alt='home_1'/>
                                {product.bestSeller ? <span className='label-best'>{product.bestSeller}</span> : null}
                                {product.quickView ? <span className='label-view' onMouseEnter={() => {handleMouseEnter(product)}} onMouseOut={() => {handleMouseOut(product)}}>{product.quickView}</span> : null}
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
    </>
    )
}

export default BagAllProducts
