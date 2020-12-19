import React, {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ProductList/ProductList.css';

import axios from 'axios';

const BagAllProducts = () => {

    //const [allProductList, setAllProductList] = useState({});

    const [womenAllProducts, setWomenAllProducts] = useState({});
    const [toteAllProducts, setToteAllProducts] = useState({});
    const [officeAllProducts, setOfficeAllProducts] = useState({});
    const [travelAllProducts, setTravelAllProducts] = useState({});

    useEffect(() => {
        const fetchAllProductList = async () => {
            const resWomen = await axios.get(`/api/productlist/bags/women`)
            setWomenAllProducts(resWomen.data);

            const resTote = await axios.get(`/api/productlist/bags/tote`)
            setToteAllProducts(resTote.data)

            const resOffice = await axios.get(`/api/productlist/bags/office`)
            setOfficeAllProducts(resOffice.data)

            const resTravel = await axios.get(`/api/productlist/bags/travel`)
            setTravelAllProducts(resTravel.data)
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
    <>
    <Container>
        <div className='product-list-wrapper'>
            <Link to='/' className='product-list-back-button'><img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>BACK</Link>

            {womenAllProducts[Object.keys(womenAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{womenAllProducts[Object.keys(womenAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{womenAllProducts[Object.keys(womenAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {womenAllProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
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
            
            {toteAllProducts[Object.keys(toteAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{toteAllProducts[Object.keys(toteAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{toteAllProducts[Object.keys(toteAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {toteAllProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
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

            {officeAllProducts[Object.keys(officeAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{officeAllProducts[Object.keys(officeAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{officeAllProducts[Object.keys(officeAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {officeAllProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
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
            
            {travelAllProducts[Object.keys(travelAllProducts)[0]] ? 
            <>
            <div className='product-list-label'>{travelAllProducts[Object.keys(travelAllProducts)[0]].subGroup}</div>
            <div className='product-list-text'>{travelAllProducts[Object.keys(travelAllProducts)[0]].groupDescription}</div>
            <div>
                <Row className='product-list-card-wrapper'>
                    {travelAllProducts.map(product => (
                        <div className='product-list-card-wrapper' key={product.productId}>
                            <Link to={`/product/${product.productId}`}><div className='product-list-image'>
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
