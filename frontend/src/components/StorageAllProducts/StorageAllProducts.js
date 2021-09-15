import React, { useEffect, useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../ProductList/ProductList.css'
import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import Footer from '../Footer/Footer'
import AllProductsRowComp from '../AllProductsRowComp/AllProductRowComp'

// import {
//   actionListOrganiser,
//   actionListHome,
// } from '../../actions/actionStorage.js'

import axios from 'axios'
import TopPopUpComp from '../TopPopUp/TopPopUpComp'

const StorageAllProducts = () => {
  // const [organisersAllProduct, setOraniserAllProduct] = useState({});
  // const [homeAllProduct, setHomeAllProduct] = useState({});

  const [organisers, setOrganiser] = useState([])
  const [home, setHome] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  // const dispatch = useDispatch()

  // const organiserList = useSelector(state => state.organiserList)
  // const { organiserLoading, organiserProducts, organiserError } = organiserList

  // const homeList = useSelector(state => state.homeList)
  // const { homeLoading, homeProducts, homeError } = homeList

  useEffect(() => {
    // dispatch(actionListOrganiser())
    // dispatch(actionListHome())

    const fetchOrganisers = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/storage/organisers')
        .then((res) => {
          // setLoading(false)
          setOrganiser(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    const fetchHome = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/storage/home')
        .then((res) => {
          // setLoading(false)
          setHome(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    fetchOrganisers()
    fetchHome()
  }, [])

  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

  return <NewComp />

  function NewComp() {
    return (
      <>
        <TopPopUpComp />
        <Container>
          <div className='product-list-wrapper'>
            <Link to='/' className='product-list-back-button'>
              <img
                src='/images/font_images/back_arrow.svg'
                alt='back_arrow'
              ></img>
              BACK
            </Link>
            {error && <h1>{error}</h1>}
            {organisers[Object.keys(organisers)[0]] && (
              <>
                {organisers[Object.keys(organisers)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {organisers[Object.keys(organisers)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {organisers[Object.keys(organisers)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={organisers} />
              </>
            )}
            {error && <h1>{error}</h1>}{' '}
            {home[Object.keys(home)[0]] && (
              <>
                {home[Object.keys(home)[0]] ? (
                  <>
                    {' '}
                    <h2 className='product-list-label'>
                      {home[Object.keys(home)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {home[Object.keys(home)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={home} />
              </>
            )}
          </div>
        </Container>
        <Footer />
      </>
    )
  }

  function OldComp() {
    return (
      <>
        <Container>
          <div className='product-list-wrapper'>
            <Link to='/' className='product-list-back-button'>
              <img
                src='/images/font_images/back_arrow.svg'
                alt='back_arrow'
              ></img>
              BACK
            </Link>
            {loading && (
              <MyComponent
                sentences={[]}
                wrapperBackgroundColor={'rgba(255,255,255)'}
                color={'#6e4e37'}
                loaderType={'ball-spin-clockwise'}
                customLoader={<SpinnerIcon />}
              />
            )}
            {error && <h1>{error}</h1>}
            {organisers[Object.keys(organisers)[0]] && (
              <>
                {organisers[Object.keys(organisers)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {organisers[Object.keys(organisers)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {organisers[Object.keys(organisers)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {organisers.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <div>
                              <img
                                id={product.productId}
                                src={product.heroImage}
                                alt='home_1'
                              />
                              {product.bestSeller ? (
                                <span className='label-best'>
                                  {product.bestSeller}
                                </span>
                              ) : null}
                              {product.quickView ? (
                                <span
                                  className='label-view'
                                  onMouseEnter={() => {
                                    handleMouseEnter(product)
                                  }}
                                  onMouseOut={() => {
                                    handleMouseOut(product)
                                  }}
                                >
                                  {product.quickView}
                                </span>
                              ) : null}
                            </div>
                            <div className='product-list-card-title'>
                              {product.productName}
                            </div>
                            <div className='product-list-card-text'>
                              View Details - &#x20B9;
                              {product.price ? product.price : product.mrpPrice}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </Row>
                </div>
              </>
            )}
            {loading && (
              <MyComponent
                sentences={[]}
                wrapperBackgroundColor={'rgba(255,255,255)'}
                color={'#6e4e37'}
                loaderType={'ball-spin-clockwise'}
                customLoader={<SpinnerIcon />}
              />
            )}{' '}
            {error && <h1>{error}</h1>}{' '}
            {home[Object.keys(home)[0]] && (
              <>
                {home[Object.keys(home)[0]] ? (
                  <>
                    {' '}
                    <h2 className='product-list-label'>
                      {home[Object.keys(home)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {home[Object.keys(home)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {home.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <div>
                              <img
                                id={product.productId}
                                src={product.heroImage}
                                alt='home_1'
                              />
                              {product.bestSeller ? (
                                <span className='label-best'>
                                  {product.bestSeller}
                                </span>
                              ) : null}
                              {product.quickView ? (
                                <span
                                  className='label-view'
                                  onMouseEnter={() => {
                                    handleMouseEnter(product)
                                  }}
                                  onMouseOut={() => {
                                    handleMouseOut(product)
                                  }}
                                >
                                  {product.quickView}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className='product-list-card-title'>
                            {product.productName}
                          </div>
                          <div className='product-list-card-text'>
                            View Details - &#x20B9;
                            {product.price ? product.price : product.mrpPrice}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </Row>
                </div>
              </>
            )}
          </div>
        </Container>
        <Footer />
      </>
    )
  }
}

export default StorageAllProducts
