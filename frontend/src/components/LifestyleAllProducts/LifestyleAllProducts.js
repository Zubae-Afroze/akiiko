import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import {
    actionListHygiene,
    actionListWorkout,
    actionListStationary
} from '../../actions/actionLifestyle'

//import axios from 'axios';

const LifestyleAllProducts = () => {

    const dispatch = useDispatch()

    const hygieneList = useSelector(state => state.hygieneList)
    const { hygieneLoading, hygieneProducts, hygieneError } = hygieneList

    const workoutList = useSelector(state => state.workoutList)
    const { workoutLoading, workoutProducts, workoutError } = workoutList

    const stationaryList = useSelector(state => state.stationaryList)
    const { stationaryLoading, stationaryProducts, stationaryError } = stationaryList

    useEffect(() => {
        dispatch(actionListHygiene())
        dispatch(actionListWorkout())
        dispatch(actionListStationary())
    }, [dispatch])


    return (
        <React.Fragment>
            <Container>
                <div className='product-list-wrapper'>

                    {stationaryLoading ?
                        <MyComponent
                            sentences={[]}
                            wrapperBackgroundColor={'rgba(255,255,255)'}
                            color={'#6e4e37'}
                            loaderType={'ball-spin-clockwise'}
                            customLoader={<SpinnerIcon />}
                        /> : stationaryError ? <h1>{stationaryError}</h1> : stationaryProducts[Object.keys(stationaryProducts)[0]] ?
                            <>
                                <div className='product-list-label'>{stationaryProducts[Object.keys(stationaryProducts)[0]].subGroup}</div>
                                <div className='product-list-text'>{stationaryProducts[Object.keys(stationaryProducts)[0]].groupDescription}</div>
                                <div>
                                    <Row className='product-list-card-wrapper'>
                                        {stationaryProducts.map(product => (
                                            <div className='product-list-card-wrapper' key={product.productId}>
                                                <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                                    <div>
                                                        <img src={product.heroImage} alt='home_1' />
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
                            : null}

                    {hygieneLoading ?
                        <MyComponent
                            sentences={[]}
                            wrapperBackgroundColor={'rgba(255,255,255)'}
                            color={'#6e4e37'}
                            loaderType={'ball-spin-clockwise'}
                            customLoader={<SpinnerIcon />}
                        /> : hygieneError ? <h1>{hygieneError}</h1> : hygieneProducts[Object.keys(hygieneProducts)[0]] ?
                            <>
                                <div className='product-list-label'>{hygieneProducts[Object.keys(hygieneProducts)[0]].subGroup}</div>
                                <div className='product-list-text'>{hygieneProducts[Object.keys(hygieneProducts)[0]].groupDescription}</div>
                                <div>
                                    <Row className='product-list-card-wrapper'>
                                        {hygieneProducts.map(product => (
                                            <div className='product-list-card-wrapper' key={product.productId}>
                                                <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                                    <div>
                                                        <img src={product.heroImage} alt='home_1' />
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
                            : null}

                    {workoutLoading ? <MyComponent
                        sentences={[]}
                        wrapperBackgroundColor={'rgba(255,255,255)'}
                        color={'#6e4e37'}
                        loaderType={'ball-spin-clockwise'}
                        customLoader={<SpinnerIcon />}
                    /> : workoutError ? <h1>{workoutError}</h1> : workoutProducts[Object.keys(workoutProducts)[0]] ?
                        <>
                            <div className='product-list-label'>{workoutProducts[Object.keys(workoutProducts)[0]].subGroup}</div>
                            <div className='product-list-text'>{workoutProducts[Object.keys(workoutProducts)[0]].groupDescription}</div>
                            <div>
                                <Row className='product-list-card-wrapper'>
                                    {workoutProducts.map(product => (
                                        <div className='product-list-card-wrapper' key={product.productId}>
                                            <Link to={`/product/${product._id}`}><div className='product-list-image'>
                                                <img src={product.heroImage} alt='home_1' />
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
                        : null}

                </div>
            </Container>
        </React.Fragment>
    )
}

export default LifestyleAllProducts
