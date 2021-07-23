import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../ProductList/ProductList.css'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import axios from 'axios'
import Footer from '../Footer/Footer'

//import axios from 'axios';

const GiftAllProducts = () => {
  //const dispatch = useDispatch()

  // const giftBoxList = useSelector(state => state.giftBoxList)
  // const { giftBoxLoading, giftBoxProducts, giftBoxError } = giftBoxList

  // const giftBagList = useSelector(state => state.giftBagList)
  // const { giftBagLoading, giftBagProducts, giftBagError } = giftBagList

  // const accessoriesList = useSelector(state => state.accessoriesList)
  // const { accessoriesLoading, accessoriesProducts, accessoriesError } = accessoriesList

  const [box, setBox] = useState([])
  const [bag, setBag] = useState([])
  const [accessories, setAccessories] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    // dispatch(actionListGiftBox())
    // dispatch(actionListGiftBag())
    // dispatch(actionListAccessories())

    const fetchBox = () => {
      setLoading(true)
      axios
        .get('/api/productlist/gift/giftbox')
        .then((res) => {
          setLoading(false)
          setBox(res.data)
          setError([])
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }

    const fetchBag = () => {
      setLoading(true)
      axios
        .get('/api/productlist/gift/giftbag')
        .then((res) => {
          setLoading(false)
          setBag(res.data)
          setError([])
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }

    const fetchAccessories = () => {
      setLoading(true)
      axios
        .get('/api/productlist/gift/accessories')
        .then((res) => {
          setLoading(false)
          setAccessories(res.data)
          setError([])
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }

    fetchBox()
    fetchBag()
    fetchAccessories()
  }, [])

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
          {error && <h1>{error}</h1>}{' '}
          {box[Object.keys(box)[0]] && (
            <>
              {box[Object.keys(box)[0]] ? (
                <>
                  <div className='product-list-label'>
                    {box[Object.keys(box)[0]].subGroup}
                  </div>
                  <div className='product-list-text'>
                    {box[Object.keys(box)[0]].groupDescription}
                  </div>
                </>
              ) : null}
              <div>
                <Row className='product-list-card-wrapper'>
                  {box.map((product) => (
                    <div
                      className='product-list-card-wrapper'
                      key={product.productId}
                    >
                      <Link to={`/product/${product._id}`}>
                        <div className='product-list-image'>
                          <div>
                            <img src={product.heroImage} alt='home_1' />
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
          {bag[Object.keys(bag)[0]] && (
            <>
              {bag[Object.keys(bag)[0]] ? (
                <>
                  <div className='product-list-label'>
                    {bag[Object.keys(bag)[0]].subGroup}
                  </div>
                  <div className='product-list-text'>
                    {bag[Object.keys(bag)[0]].groupDescription}
                  </div>
                </>
              ) : null}
              <div>
                <Row className='product-list-card-wrapper'>
                  {bag.map((product) => (
                    <div
                      className='product-list-card-wrapper'
                      key={product.productId}
                    >
                      <Link to={`/product/${product._id}`}>
                        <div className='product-list-image'>
                          <img src={product.heroImage} alt='home_1' />
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
          {accessories[Object.keys(accessories)[0]] && (
            <>
              <div className='product-list-label'>
                {accessories[Object.keys(accessories)[0]].subGroup}
              </div>
              <div className='product-list-text'>
                {accessories[Object.keys(accessories)[0]].groupDescription}
              </div>
              <div>
                <Row className='product-list-card-wrapper'>
                  {accessories.map((product) => (
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
                            <span className='pl-label-view'>
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

export default GiftAllProducts
