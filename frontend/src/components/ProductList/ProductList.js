import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ProductList.css';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import Message from '../Message/Message';

import { actionListProductList } from '../../actions/actionProductList'

//import axios from 'axios';


const ProductList = () => {

    const { group, subGroup } = useParams();

    // const [productList, setProductList] = useState([]);

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList);

    const { loading, error, products } = productList

    useEffect(() => {
        // const fetchProductLists = async () => {
        //     const res = await axios.get(`/api/productlist/${group}/${subGroup}`)
        //     setProductList(res.data);
        // }

        dispatch(actionListProductList(group, subGroup))

        // fetchProductLists();
    }, [dispatch, group, subGroup])

    const handleMouseEnter = (product) => {
        document.getElementById(product.productId).src = product.hoverImage
    }

    const handleMouseOut = (product) => {
        document.getElementById(product.productId).src = product.images[0];
    }

    return (
        <>
            {loading ? <MyComponent
                sentences={[]}
                wrapperBackgroundColor={'rgba(255,255,255)'}
                color={'#6e4e37'}
                loaderType={'ball-spin-clockwise'}
                customLoader={<SpinnerIcon />}
            /> : error ? <Message variant='dark'>{error}</Message> : products ?
                <Container>
                    <div className='product-list-wrapper'>
                        <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>
                        <div className='product-list-label'>{products[Object.keys(products)[0]].subGroup}</div>
                        <div className='product-list-text'>{products[Object.keys(products)[0]].groupDescription}</div>
                        <div>
                            <Row className='product-list-card-wrapper'>
                                {products.map(product => (
                                    <Link className='product-list-card-wrapper' to={`/product/${product._id}`} key={product.productId}>
                                        <div>
                                            <div className='product-list-image'>
                                                <img id={product.productId} src={product.heroImage} alt='home_1' />
                                                {product.bestSeller ? <span className='pl-label-best'>{product.bestSeller}</span> : null}
                                                {product.quickView ? <span className='pl-label-view' onMouseEnter={() => { handleMouseEnter(product) }} onMouseOut={() => { handleMouseOut(product) }}>{product.quickView}</span> : null}
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
                : null}
        </>
    )
}

export default ProductList
