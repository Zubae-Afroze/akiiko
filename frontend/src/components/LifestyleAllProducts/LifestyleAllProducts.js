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
    actionListHobby,
    actionListStationery
} from '../../actions/actionLifestyle'

//import axios from 'axios';

const LifestyleAllProducts = () => {

    const dispatch = useDispatch()

    const hygieneList = useSelector(state => state.hygieneList)
    const { hygieneLoading, hygieneProducts, hygieneError } = hygieneList

    const hobbyList = useSelector(state => state.hobbyList)
    const { hobbyLoading, hobbyProducts, hobbyError } = hobbyList

    const workoutList = useSelector(state => state.workoutList)
    const { workoutLoading, workoutProducts, workoutError } = workoutList

    const stationeryList = useSelector(state => state.stationeryList)
    const { stationeryLoading, stationeryProducts, stationeryError } = stationeryList





    useEffect(() => {
        dispatch(actionListHygiene())
        dispatch(actionListWorkout())
        dispatch(actionListHobby())
        dispatch(actionListStationery())
    }, [dispatch])


    return (
        <React.Fragment>
            <Container>
                <div className='product-list-wrapper'>


                    {hobbyLoading ?
                        <MyComponent
                            sentences={[]}
                            wrapperBackgroundColor={'rgba(255,255,255)'}
                            color={'#6e4e37'}
                            loaderType={'ball-spin-clockwise'}
                            customLoader={<SpinnerIcon />}
                        /> : hobbyError ? <h1>{hobbyError}</h1> : hobbyProducts[Object.keys(hobbyProducts)[0]] ?
                            <>
                                <div className='product-list-label'>{hobbyProducts[Object.keys(hobbyProducts)[0]].subGroup}</div>
                                <div className='product-list-text'>{hobbyProducts[Object.keys(hobbyProducts)[0]].groupDescription}</div>
                                <div>
                                    <Row className='product-list-card-wrapper'>
                                        {hobbyProducts.map(product => (
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

                    {stationeryLoading ?
                        <MyComponent
                            sentences={[]}
                            wrapperBackgroundColor={'rgba(255,255,255)'}
                            color={'#6e4e37'}
                            loaderType={'ball-spin-clockwise'}
                            customLoader={<SpinnerIcon />}
                        /> : stationeryError ? <h1>{stationeryError}</h1> : stationeryProducts[Object.keys(stationeryProducts)[0]] ?
                            <>
                                <div className='product-list-label'>{stationeryProducts[Object.keys(stationeryProducts)[0]].subGroup}</div>
                                <div className='product-list-text'>{stationeryProducts[Object.keys(stationeryProducts)[0]].groupDescription}</div>
                                <div>
                                    <Row className='product-list-card-wrapper'>
                                        {stationeryProducts.map(product => (
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
