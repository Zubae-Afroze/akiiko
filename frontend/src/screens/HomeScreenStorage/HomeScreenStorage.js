import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//import { actionListHomeStorage } from '../../actions/actionHomeStorage'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'

import axios from 'axios'

//import HomeScreenStorageProducts from '../../assets/products/HomeScreenStorageProducts';
import './HomeScreenStorage.css'

const HomeScreenWorkout = () => {
  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

  //const [HomeScreenStorageProducts, setHomeScreenStorageProducts] = useState([]);

  const [storage, setStorage] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  //const dispatch = useDispatch()

  //const homeScreenStorage = useSelector((state) => state.homeScreenStorage)

  //const { loading, error, products } = homeScreenStorage

  useEffect(() => {
    //dispatch(actionListHomeStorage())
    setLoading(true)

    axios
      .get('/api/home_screen_storage_products')
      .then((res) => {
        setLoading(false)
        setStorage(res.data)
        setError('')
      })
      .catch((err) => {
        setLoading(false)
        setError(err.message)
      })
  }, [])

  //const HomeScreenStorageProducts = []

  return (
    <div className='home-screen-component'>
      <Row className='home-wrapper workout-cont'>
        <Col sm={3} className='home-button-placement'>
          <Link to='/allproducts/productlist/storage'>
            <button className='home-button home-workout-button'>
              SHOP ALL
            </button>
          </Link>
        </Col>
        <Col sm={9} className='home-wrapper'>
          <h2 className='home-title'>STORAGE</h2>
          <div className='home-text'>
            A thoughtful range of organisers and storage bags to compliment and
            increase the functionality of your home. Simplistic and warm, the
            colour tones and minimal design elevate the mood of your personal
            spaces and allow for easy declaring.{' '}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={5} className='hero-image-workout'>
          <div className='workout-hero-image'>
            <img
              src={'/images/home_screen_images/HomeScreenStorageHero.jpg'}
              alt='home_hero_img'
            />
          </div>
        </Col>
        {loading && (
          <MyComponent
            sentences={[]}
            wrapperBackgroundColor={'rgba(255,255,255)'}
            color={'#6e4e37'}
            loaderType={'ball-spin-clockwise'}
            customLoader={<SpinnerIcon />}
          />
        )}
        {error && <h3>{error}</h3>}{' '}
        {storage && (
          <Col sm={7} className='workout-container'>
            <Row className='workout-card-wrapper'>
              {storage.map((product) => (
                <Col className='home-card-items ' key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <div>
                      <div className='women-img-wrap'>
                        <img
                          id={product.productId}
                          className='home-card-image'
                          src={product.heroImage}
                          alt='home_1'
                        />
                        {product.bestSeller ? (
                          <span className='label-best label-best-workout'>
                            {product.bestSeller}
                          </span>
                        ) : null}
                        {product.quickView ? (
                          <span
                            className='label-view label-view-workout'
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
                      <div className='home-card-title'>
                        {product.productName}
                      </div>
                      <div className='home-card-text'>
                        View Details - &#x20B9;
                        {product.price ? product.price : product.mrpPrice}
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        )}
      </Row>
      <div className='hero-button mobile-view-button'>
        <Link to='/storage/all_products'>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}
export default HomeScreenWorkout
