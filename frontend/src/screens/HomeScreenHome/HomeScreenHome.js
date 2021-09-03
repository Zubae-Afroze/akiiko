import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomeScreenHome.css'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import ProductItemComp from '../../components/Shimmers/ProductItemComp'

import axios from 'axios'
import './NewHomeScreenHomeStyle.css'

//import { actionListHomeHome } from '../../actions/actionHomeHome'

//import HomeScreenHomeProducts from '../../assets/products/HomeScreenHomeProducts';

const HomeScreenHome = () => {
  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

  //const [HomeScreenHomeProducts, setHomeScreenHomeProducts] = useState([]);

  //const dispatch = useDispatch()

  //const homeScreenHome = useSelector((state) => state.homeScreenHome)

  //const { loading, error, products } = homeScreenHome

  const [home, setHome] = useState([])
  const [loading, setLoading] = useState(false)
  const [mainImageLoaded, setMainImageLoaded] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    axios
      .get('/api/home_screen_home_products')
      .then((res) => {
        setLoading(false)
        setHome(res.data)
        setError('')
      })
      .catch((err) => {
        setLoading(false)
        setError(err.message)
      })
  }, [])

  //const HomeScreenHomeProducts = []

  return (
    <>
      <NewComp />

    </>
  )


  function NewComp(){
    return(
      <>
      <div className='home-title-comp'>
        HOME
      </div>
      <div className='home-header-comp'>
        <button className='home-header-shop-btn'>
          SHOP ALL
        </button>
        <span>
        A simple yet inviting collection of natural fabric kitchen accessories that will blend harmoniously with every home’s mood & feel. Multi-purpose & vegan lunch bags, aprons & more
        </span>
      </div>

      <div style={{height: '20px'}}/>
      
        <div className='home-bags-comp-main-content-wrapper'>

          {/* <div className='home-products-main-img-shimmer'> */}
            <img className='home-flex-img-wrapper'
              src={`/images/home_screen_images/HomeScreenHomeHero.jpg`}
              alt='home_hero_img'
              onLoad={()=>{
                setMainImageLoaded(true)
              }}
            />
          {/* </div> */}

          <div className='home-bags-comp'>

          {
            home && (
              home.map((product,index) => (
                <ProductItemComp product={product} key={index}/>
              ))
            )
          }
          </div>
        </div>
        
        <div className='home-footer-shop-btn'>
          <button>
            SHOP ALL
          </button>
        </div>

      </>
    );
  }



  function OldComp(){
    return(
      <div className='home-screen-component'>
      <Row className='home-wrapper workout-cont'>
        <Col sm={3} className='home-button-placement'>
          <Link to='/allproducts/productlist/home'>
            <button className='home-button'>SHOP ALL</button>
          </Link>
        </Col>
        <Col sm={9} className='home-wrapper'>
          <h2 className='home-title'>HOME</h2>
          <div className='home-text'>
            A simple yet inviting collection of natural fabric kitchen
            accessories that will blend harmoniously with every home’s mood &
            feel. Multi-purpose & vegan lunch bags, aprons & more
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={5} className='hero-image-workout'>
          <div className='workout-hero-image'>
            <img
              src={`/images/home_screen_images/HomeScreenHomeHero.jpg`}
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
        {error && <h3>{error}</h3>}
        {home && (
          <Col sm={7} className='workout-container'>
            <Row className='workout-card-wrapper'>
              {home.map((product) => (
                <Col className='home-card-items' key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <div>
                      <div className='home-img-wrap'>
                        <img
                          id={product.productId}
                          className='home-card-image'
                          src={product.images[0]}
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
        <Link to='/home/all_products'>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
    );
  }
}

export default HomeScreenHome
