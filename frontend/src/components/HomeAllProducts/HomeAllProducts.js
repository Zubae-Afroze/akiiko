import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../ProductList/ProductList.css'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import Footer from '../Footer/Footer'
import AllProductsRowComp from '../AllProductsRowComp/AllProductRowComp'

// import {
//   actionListTableware,
//   actionListKitchen,
//   actionListLaundry,
//   actionListGarden,
// } from '../../actions/actionHome'

import axios from 'axios'
import TopPopUpComp from '../TopPopUp/TopPopUpComp'

const HomeAllProducts = () => {
  // const [tablewareAllProducts, setTableWareAllProducts] = useState({});
  // const [kitchenAllProducts, setKitchenAllProdcuts] = useState({});
  // const [laundryAllProducts, setLaundryAllProducts] = useState({});
  // const [gardenAllProducts, setGardenAllProducts] = useState({});

  //const dispatch = useDispatch()

  //const tablewareList = useSelector((state) => state.tablewareList)
  //const { tablewareLoading, tablewareProducts, tablewareError } = tablewareList

  //const kitchenList = useSelector((state) => state.kitchenList)
  //const { kitchenLoading, kitchenProducts, kitchenError } = kitchenList

  //const laundryList = useSelector((state) => state.laundryList)
  //const { laundryLoading, laundryProducts, laundryError } = laundryList

  //const gardenList = useSelector((state) => state.gardenList)
  //const { gardenLoading, gardenProducts, gardenError } = gardenList

  const [tableware, setTableware] = useState([])
  const [kitchen, setKitchen] = useState([])
  const [laundry, setLaundry] = useState([])
  const [garden, setGarden] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    // dispatch(actionListTableware())
    // dispatch(actionListKitchen())
    // dispatch(actionListLaundry())
    // dispatch(actionListGarden())

    const fetchTableware = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/home/dining')
        .then((res) => {
          // setLoading(false)
          setTableware(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    const fetchKitchen = () => {
      // setLoading(true)

      axios
        .get('/api/productlist/home/kitchen')
        .then((res) => {
          // setLoading(false)
          setKitchen(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    const fetchLaundry = () => {
      // setLoading(true)

      axios
        .get('/api/productlist/home/laundry')
        .then((res) => {
          // setLoading(false)
          setLaundry(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    const fetchGarden = () => {
      // setLoading(true)

      axios
        .get('/api/productlist/home/garden')
        .then((res) => {
          // setLoading(false)
          setGarden(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    fetchTableware()
    fetchKitchen()
    fetchLaundry()
    fetchGarden()
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
            {tableware[Object.keys(tableware)[0]] && (
              <>
                {tableware[Object.keys(tableware)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {tableware[Object.keys(tableware)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {tableware[Object.keys(tableware)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={tableware} />
              </>
            )}

            {error && <h1>{error}</h1>}
            {kitchen[Object.keys(kitchen)[0]] && (
              <>
                {kitchen[Object.keys(kitchen)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {kitchen[Object.keys(kitchen)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {kitchen[Object.keys(kitchen)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={kitchen} />
              </>
            )}

            {error && <h1>{error}</h1>}
            {laundry[Object.keys(laundry)[0]] && (
              <>
                {laundry[Object.keys(laundry)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {laundry[Object.keys(laundry)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {laundry[Object.keys(laundry)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={laundry} />
              </>
            )}

            {error && <h1>{error}</h1>}
            {garden[Object.keys(garden)[0]] && (
              <>
                {garden[Object.keys(garden)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {garden[Object.keys(garden)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {garden[Object.keys(garden)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={garden} />
              </>
            )}
          </div>
        </Container>
        <div style={{ height: '50px' }} />
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
            )}{' '}
            {error && <h1>{error}</h1>}
            {tableware[Object.keys(tableware)[0]] && (
              <>
                {tableware[Object.keys(tableware)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {tableware[Object.keys(tableware)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {tableware[Object.keys(tableware)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {tableware.map((product) => (
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
                                <span className='pl-label-best'>
                                  {product.bestSeller}
                                </span>
                              ) : null}
                              {product.quickView ? (
                                <span
                                  className='pl-label-view'
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
            {error && <h1>{error}</h1>}
            {kitchen[Object.keys(kitchen)[0]] && (
              <>
                {kitchen[Object.keys(kitchen)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {kitchen[Object.keys(kitchen)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {kitchen[Object.keys(kitchen)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {kitchen.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <img
                              id={product.productId}
                              src={product.heroImage}
                              alt='home_1'
                            />
                            {product.bestSeller ? (
                              <span className='pl-label-best'>
                                {product.bestSeller}
                              </span>
                            ) : null}
                            {product.quickView ? (
                              <span
                                className='pl-label-view'
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
            {error && <h1>{error}</h1>}
            {laundry[Object.keys(laundry)[0]] && (
              <>
                {laundry[Object.keys(laundry)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {laundry[Object.keys(laundry)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {laundry[Object.keys(laundry)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {laundry.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <img
                              id={product.productId}
                              src={product.heroImage}
                              alt='home_1'
                            />
                            {product.bestSeller ? (
                              <span className='pl-label-best'>
                                {product.bestSeller}
                              </span>
                            ) : null}
                            {product.quickView ? (
                              <span
                                className='pl-label-view'
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
            {error && <h1>{error}</h1>}
            {garden[Object.keys(garden)[0]] && (
              <>
                {garden[Object.keys(garden)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {garden[Object.keys(garden)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {garden[Object.keys(garden)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {garden.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <img src={product.heroImage} alt='home_1' />
                            {product.bestSeller ? (
                              <span className='pl-label-best'>
                                {product.bestSeller}
                              </span>
                            ) : null}
                            {product.quickView ? (
                              <span
                                className='pl-label-view'
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

export default HomeAllProducts
