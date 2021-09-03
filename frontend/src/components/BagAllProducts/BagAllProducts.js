import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../ProductList/ProductList.css'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import ProductItemComp from '../Shimmers/ProductItemComp'
import axios from 'axios'
import Footer from '../Footer/Footer'
import './allProductsStyleGLOBAL.css'
import TopPopUpComp from '../TopPopUp/TopPopUpComp'

const BagAllProducts = () => {
  // const [allProductList, setAllProductList] = useState({});
  // const [womenAllProducts, setWomenAllProducts] = useState({});
  // const [toteAllProducts, setToteAllProducts] = useState({});
  // const [officeAllProducts, setOfficeAllProducts] = useState({});
  // const [travelAllProducts, setTravelAllProducts] = useState({});

  // const dispatch = useDispatch()

  //   const womenList = useSelector((state) => state.womenList)
  //   const { womenLoading, womenProducts, womenError } = womenList

  //   const toteList = useSelector((state) => state.toteList)
  //   const { toteLoading, toteProducts, toteError } = toteList

  //   const officeList = useSelector((state) => state.officeList)
  //   const { officeLoading, officeProducts, officeError } = officeList

  //   const travelList = useSelector((state) => state.travelList)
  //   const { travelLoading, travelProducts, travelError } = travelList

  const [women, setWomen] = useState([])
  const [tote, setTote] = useState([])
  const [office, setOffice] = useState([])
  const [travel, setTravel] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    const fetchWomen = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/bags/women')
        .then((res) => {
          // setLoading(false)
          setWomen(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    const fetchTote = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/bags/tote')
        .then((res) => {
          // setLoading(false)
          setTote(res.data)
          // setError([])
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }

    const fetchOffice = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/bags/office')
        .then((res) => {
          // setLoading(false)
          setOffice(res.data)
          // setError([])
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }

    const fetchTravel = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/bags/travel')
        .then((res) => {
          // setLoading(false)
          setTravel(res.data)
          // setError([])
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }

    fetchWomen()
    fetchTote()
    fetchOffice()
    fetchTravel()
  }, [])

  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

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
          {error && <h2>{error}</h2>}
          {women && (
            <>
              {women[Object.keys(women)[0]] ? (
                <>
                  <h2 className='product-list-label'>
                    {women[Object.keys(women)[0]].subGroup}
                  </h2>
                  <div className='product-list-text'>
                    {women[Object.keys(women)[0]].groupDescription}
                  </div>
                </>
              ) : null}
              
              <ProductsRowComp products={women}/>
              
            </>
          )}
          
          {error && <h1>{error}</h1>}{' '}
          {tote && (
            <>
              {tote[Object.keys(tote)[0]] ? (
                <>
                  <h2 className='product-list-label'>
                    {tote[Object.keys(tote)[0]].subGroup}
                  </h2>
                  <div className='product-list-text'>
                    {tote[Object.keys(tote)[0]].groupDescription}
                  </div>
                </>
              ) : null}

              <ProductsRowComp products={tote}/>
            </>
          )}

          {error && <h2>{error}</h2>}
          {office && (
            <>
              {office[Object.keys(office)[0]] ? (
                <>
                  <h2 className='product-list-label'>
                    {office[Object.keys(office)[0]].subGroup}
                  </h2>
                  <div className='product-list-text'>
                    {office[Object.keys(office)[0]].groupDescription}
                  </div>
                </>
              ) : null}
              <ProductsRowComp products={office}/>
            </>
          )}
          
          {error && <h1>{error}</h1>}{' '}
          {travel && (
            <>
              {travel[Object.keys(travel)[0]] ? (
                <>
                  <h2 className='product-list-label'>
                    {travel[Object.keys(travel)[0]].subGroup}
                  </h2>
                  <div className='product-list-text'>
                    {travel[Object.keys(travel)[0]].groupDescription}
                  </div>
                </>
              ) : null}
              <ProductsRowComp products={travel}/>
            </>
          )}
        </div>
        <div style={{height:'50px'}} />
      </Container>
      <Footer />
    </>
  )


  function ProductsRowComp({products}){
    return(
      <div className='all-products-products-comp-wrapper'>
        {
          products.map((product) => (
            <ProductItemComp product={product} isSimilarProducts={false} />
          ))
        }
      </div>
    );
  }



  function OldComp(){
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
            {error && <h2>{error}</h2>}
            {women && (
              <>
                {women[Object.keys(women)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {women[Object.keys(women)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {women[Object.keys(women)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {women.map((product) => (
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
            {error && <h1>{error}</h1>}{' '}
            {tote && (
              <>
                {tote[Object.keys(tote)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {tote[Object.keys(tote)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {tote[Object.keys(tote)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {tote.map((product) => (
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
            {error && <h2>{error}</h2>}
            {office && (
              <>
                {office[Object.keys(office)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {office[Object.keys(office)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {office[Object.keys(office)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {office.map((product) => (
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
            {travel && (
              <>
                {travel[Object.keys(travel)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {travel[Object.keys(travel)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {travel[Object.keys(travel)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {travel.map((product) => (
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

export default BagAllProducts
