import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../ProductList/ProductList.css'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import axios from 'axios'
import Footer from '../Footer/Footer'
import AllProductsRowComp from '../AllProductsRowComp/AllProductRowComp'
import TopPopUpComp from '../TopPopUp/TopPopUpComp'
import SEO from '../SEO/SEO'

const LifestyleAllProducts = () => {
  // const dispatch = useDispatch()

  // const hygieneList = useSelector(state => state.hygieneList)
  // const { hygieneLoading, hygieneProducts, hygieneError } = hygieneList

  // const hobbyList = useSelector(state => state.hobbyList)
  // const { hobbyLoading, hobbyProducts, hobbyError } = hobbyList

  // const workoutList = useSelector(state => state.workoutList)
  // const { workoutLoading, workoutProducts, workoutError } = workoutList

  // const stationeryList = useSelector(state => state.stationeryList)
  // const { stationeryLoading, stationeryProducts, stationeryError } = stationeryList

  const [hygiene, setHygiene] = useState([])
  const [workout, setWorkout] = useState([])
  const [hobby, setHobby] = useState([])
  const [stationery, setStationery] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    // dispatch(actionListHygiene())
    // dispatch(actionListWorkout())
    // dispatch(actionListHobby())
    // dispatch(actionListStationery())

    const fetchHygiene = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/lifestyle/hygiene')
        .then((res) => {
          // setLoading(false)
          setHygiene(res.data)
          setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    const fetchWorkout = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/lifestyle/workout')
        .then((res) => {
          // setLoading(false)
          setWorkout(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    const fetchHobby = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/lifestyle/hobby')
        .then((res) => {
          // setLoading(false)
          setHobby(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }

    const fetchStationery = () => {
      // setLoading(true)
      axios
        .get('/api/productlist/lifestyle/stationery')
        .then((res) => {
          // setLoading(false)
          setStationery(res.data)
          // setError([])
        })
        .catch((err) => {
          // setLoading(false)
          setError(err.message)
        })
    }
    fetchHygiene()
    fetchWorkout()
    fetchHobby()
    fetchStationery()
  }, [])

  return <NewComp />

  function NewComp() {
    return (
      <React.Fragment>
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
            {error && <h1>{error}</h1>}{' '}
            {hobby[Object.keys(hobby)[0]] && (
              <>
                <SEO 
                  title={'Buy lifestyle stationery sets online | Order lifestyle towels and masks online | Sustainable yoga bags for sale | Akiiko'} 
                  fallbackTitle={'akiiko - Products Lifestyle'}
                  desc={['Buy 100% premium quality lifestyle stationery sets online. Shop online for Sustainable, natural fabric cotton canvas premium quality, multipurpose cotton canvas lifestyle towels and masks from Akiiko. Purchase Eco friendly, Multipurpose and Eye catching yoga bags for everyday use from Akiiko.']} 
                  keywords={['lifestyle stationery sets','lifestyle towels and masks','yoga bags','Eco-friendly lifestyle stationery sets','Handcrafted lifestyle stationery sets']}
                />
                {hobby[Object.keys(hobby)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {hobby[Object.keys(hobby)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {hobby[Object.keys(hobby)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={hobby} />
              </>
            )}
            {error && <h1>{error}</h1>}
            {stationery[Object.keys(stationery)[0]] && (
              <>
                {stationery[Object.keys(stationery)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {stationery[Object.keys(stationery)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {stationery[Object.keys(stationery)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={stationery} />
              </>
            )}
            {error && <h1>{error}</h1>}
            {hygiene[Object.keys(hygiene)[0]] && (
              <>
                {hygiene[Object.keys(hygiene)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {hygiene[Object.keys(hygiene)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {hygiene[Object.keys(hygiene)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <AllProductsRowComp products={hygiene} />
              </>
            )}
            {error && <h1>{error}</h1>}
            {workout[Object.keys(workout)[0]] && (
              <>
                {workout[Object.keys(workout)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {workout[Object.keys(workout)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {workout[Object.keys(workout)[0]].groupDescription}
                    </div>{' '}
                  </>
                ) : null}
                <AllProductsRowComp products={workout} />
              </>
            )}
          </div>
        </Container>
        <div style={{ height: '50px' }} />
        <Footer />
      </React.Fragment>
    )
  }

  function OldComp() {
    return (
      <React.Fragment>
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
            {error && <h1>{error}</h1>}{' '}
            {hobby[Object.keys(hobby)[0]] && (
              <>
                {hobby[Object.keys(hobby)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {hobby[Object.keys(hobby)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {hobby[Object.keys(hobby)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {hobby.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <div>
                              <img
                                src={product.heroImage}
                                alt={product.productName}
                              />
                              {product.bestSeller ? (
                                <span className='label-best'>
                                  {product.bestSeller}
                                </span>
                              ) : null}
                              {product.quickView ? (
                                <span className='label-view'>
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
            {stationery[Object.keys(stationery)[0]] && (
              <>
                {stationery[Object.keys(stationery)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {stationery[Object.keys(stationery)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {stationery[Object.keys(stationery)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {stationery.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <div>
                              <img
                                src={product.heroImage}
                                alt={product.productName}
                              />
                              {product.bestSeller ? (
                                <span className='label-best'>
                                  {product.bestSeller}
                                </span>
                              ) : null}
                              {product.quickView ? (
                                <span className='label-view'>
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
            {hygiene[Object.keys(hygiene)[0]] && (
              <>
                {hygiene[Object.keys(hygiene)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {hygiene[Object.keys(hygiene)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {hygiene[Object.keys(hygiene)[0]].groupDescription}
                    </div>
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {hygiene.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <div>
                              <img
                                src={product.heroImage}
                                alt={product.productName}
                              />
                              {product.bestSeller ? (
                                <span className='label-best'>
                                  {product.bestSeller}
                                </span>
                              ) : null}
                              {product.quickView ? (
                                <span className='label-view'>
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
            {workout[Object.keys(workout)[0]] && (
              <>
                {workout[Object.keys(workout)[0]] ? (
                  <>
                    <h2 className='product-list-label'>
                      {workout[Object.keys(workout)[0]].subGroup}
                    </h2>
                    <div className='product-list-text'>
                      {workout[Object.keys(workout)[0]].groupDescription}
                    </div>{' '}
                  </>
                ) : null}
                <div>
                  <Row className='product-list-card-wrapper'>
                    {workout.map((product) => (
                      <div
                        className='product-list-card-wrapper'
                        key={product.productId}
                      >
                        <Link to={`/product/${product._id}`}>
                          <div className='product-list-image'>
                            <img
                              src={product.heroImage}
                              alt={product.productName}
                            />
                            {product.bestSeller ? (
                              <span className='label-best'>
                                {product.bestSeller}
                              </span>
                            ) : null}
                            {product.quickView ? (
                              <span className='label-view'>
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
      </React.Fragment>
    )
  }
}

export default LifestyleAllProducts
