import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'

import ProductItemComp from '../../components/Shimmers/ProductItemComp'

//Action
//import { actionListHomeBags } from '../../actions/actionHomeBags'

import axios from 'axios'

//import HomeScreenBagsProducts from '../../assets/products/HomeScreenBagsProducts';
import './HomeScreenBags.css'
import './NewHomeScreenBagsStyle.css'

const HomeScreenBags = () => {
  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

  //const [HomeScreenBagsProducts, setHomeScreenBagsProducts] = useState([]);

  //const dispatch = useDispatch()

  //const homeScreenBags = useSelector((state) => state.homeScreenBags)

  //const { loading, error, products } = homeScreenBags

  const [bags, setBags] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const history = useHistory()

  useEffect(() => {
    //dispatch(actionListHomeBags())
    setLoading(true)
    axios
      .get('/api/home_screen_bags_products')
      .then((res) => {
        setBags(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('HAS ERROR' + err)
        // setLoading(false)
        // setError(err.message)
      })
  }, [])

  //const HomeScreenBagsProducts = []

  return <NewComp />

  function NewComp() {
    return (
      <>
        <div className='bags-title-comp'>BAGS</div>
        <div className='bags-header-comp'>
          <span>
            A delightful range of sustainable bags that are designed to
            perfection. Minimal, yet classic silhouettes to compliment just
            about every look, multipurpose & eye-catching.
          </span>
          <button
            onClick={() => {
              history.push('/allproducts/productlist/bags')
            }}
            className='bags-header-shop-btn'
          >
            SHOP ALL
          </button>
        </div>
        <div style={{ height: '20px' }} />
        {bags && (
          <div className='bags-comp-wrapper'>
            {bags.map((product, index) => (
              <ProductItemComp product={product} key={index} />
            ))}
          </div>
        )}

        <div className='bags-footer-shop-btn'>
          <button
            onClick={() => {
              history.push('/allproducts/productlist/bags')
            }}
          >
            SHOP ALL
          </button>
        </div>
      </>
    )
  }

  function OldComp() {
    return (
      <div>
        <Row className='women-wrapper'>
          <Col sm={9} className='women-wrap'>
            <h2 className='home-title women-title'>BAGS </h2>
            <div className='women-text'>
              A delightful range of sustainable bags that are designed to
              perfection. Minimal, yet classic silhouettes to compliment just
              about every look, multipurpose & eye-catching.
            </div>
          </Col>
          <Col sm={3} className='women-button-placement'>
            <Link to='/allproducts/productlist/bags'>
              <button className='women-button'>SHOP ALL</button>
            </Link>
          </Col>
        </Row>
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
        {bags && (
          <Row className='women-card-wrapper '>
            {bags.map((product) => (
              <div
                className='women-shop-bag-container-root'
                key={product.productId}
              >
                <Link to={`/product/${product._id}`}>
                  <Col lg={2.6} className='women-shop-bag-container'>
                    {/* <ProductItemComp /> */}
                    <div>
                      <div className='women-card-image'>
                        <div className='women-img-wrap'>
                          <img
                            id={product.productId}
                            src={product.heroImage}
                            alt={product.productName}
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
                        <div className='women-card-title'>
                          {product.productName}
                        </div>
                        <div className='women-card-text'>
                          View Details - &#x20B9;
                          {product.price ? product.price : product.mrpPrice}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Link>
              </div>
            ))}
          </Row>
        )}
        <div className='hero-button mobile-view-button'>
          <Link to='/allproducts/productlist/bags'>
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomeScreenBags
