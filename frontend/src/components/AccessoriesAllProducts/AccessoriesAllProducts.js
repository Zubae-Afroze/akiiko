import React, { useEffect, useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../ProductList/ProductList.css'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'

//import { actionListOnTheGo, actionListWallet } from '../../actions/actionAccessories'
import axios from 'axios'

//import axios from 'axios';

const AccessoriesAllProducts = () => {
  //const [onthgoAllProducts, setOnTheGoProducts] = useState({})
  //const [walletAllProducts, setWalletAllProdcuts] = useState({})

  //const dispatch = useDispatch()

  //const onTheGoList = useSelector(state => state.onTheGoList)
  //const { onTheGoLoading, onTheGoProducts, onTheGoError } = onTheGoList

  //const walletList = useSelector(state => state.walletList)
  //const { walletLoading, walletProducts, walletError } = walletList

  const [go, setGo] = useState([])
  const [wallet, setWallet] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    //dispatch(actionListOnTheGo())
    //dispatch(actionListWallet())

    const fetchGo = () => {
      setLoading(true)
      axios
        .get('/api/productlist/accessories/onthego')
        .then((res) => {
          setLoading(false)
          setGo(res.data)
          setError([])
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }

    const fetchWallet = () => {
      setLoading(true)
      axios
        .get('/api/productList/accessories/wallet')
        .then((res) => {
          setLoading(false)
          setWallet(res.data)
          setError([])
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message)
        })
    }

    fetchGo()
    fetchWallet()
  }, [])

  console.log(go)

  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

  return (
    <Container>
      <div className='product-list-wrapper'>
        <Link to='/' className='product-list-back-button'>
          <img src='/images/font_images/back_arrow.svg' alt='back_arrow'></img>
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
        {error && <h2>{error}</h2>}
        {go && (
          <>
            {go[Object.keys(go)[0]] ? (
              <>
                <div className='product-list-label'>
                  {go[Object.keys(go)[0]].subGroup}
                </div>
                <div className='product-list-text'>
                  {go[Object.keys(go)[0]].groupDescription}
                </div>
              </>
            ) : null}
            <div>
              <Row className='product-list-card-wrapper'>
                {go.map((product) => (
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
        {wallet && <h2>{error}</h2>}{' '}
        {wallet[Object.keys(wallet)[0]] && (
          <>
            {wallet[Object.keys(wallet)[0]] ? (
              <>
                <div className='product-list-label'>
                  {wallet[Object.keys(wallet)[0]].subGroup}
                </div>
                <div className='product-list-text'>
                  {wallet[Object.keys(wallet)[0]].groupDescription}
                </div>
              </>
            ) : null}
            <div>
              <Row className='product-list-card-wrapper'>
                {wallet.map((product) => (
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
      </div>
    </Container>
  )
}

export default AccessoriesAllProducts
