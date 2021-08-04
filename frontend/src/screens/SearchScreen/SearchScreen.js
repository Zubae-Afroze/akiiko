import React, { useState, useEffect, createRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../HomeScreen/HomeScreen.css'
import './searchScreenStyles.css'

export default function SearchScreen() {
  const searchInput = createRef()

  const [searchValue, setSearchvalue] = useState('')

  useEffect(() => {
    searchInput.current.focus()
  }, [searchInput])

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [searchedProducts, setSearchedProducts] = useState([])

  useEffect(() => {
    //dispatch(actionListHomeBags())
    setLoading(true)
    axios
      .get('/api/product')
      .then((res) => {
        setLoading(false)
        setProducts(res.data)
        setError('')
        setSearchedProducts(res.data)
      })
      .catch((err) => {
        setLoading(false)
        setError(err.message)
      })
  }, [])

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        searchValue={searchValue}
        setSearchvalue={setSearchvalue}
        onSearch={onSearch}
        setSearchedProducts={setSearchedProducts}
        products={products}
      />
      <div style={{ height: '100vh', width: '100vw' }}>
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
        {searchedProducts && (
          <SearchResult
            searchedProducts={searchedProducts}
            setSearchedProducts={setSearchedProducts}
          />
        )}
      </div>
    </>
  )

  function onSearch(val) {
    setSearchvalue(val.target.value)

    let result = products.filter((product) =>
      product.productName.toLowerCase().includes(val.target.value.toLowerCase())
    )

    setSearchedProducts(result)
  }
}

function SearchBar({
  searchInput,
  searchValue,
  setSearchvalue,
  onSearch,
  setSearchedProducts,
  products,
}) {
  return (
    <div className='search-fixed'>
      <div className='row height d-flex justify-content-center align-items-center'>
        <div className='col-md-6'>
          <div className='form'>
            <span className='right-pan'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </span>
            <input
              ref={searchInput}
              type='text'
              className='form-control form-input f-f'
              placeholder='Search anything...'
              value={searchValue}
              onChange={onSearch}
            />
            <span
              className='left-pan'
              onClick={() => {
                setSearchvalue('')
                setSearchedProducts(products)
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-x-lg'
                viewBox='0 0 16 16'
              >
                <path d='M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z' />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchResult({ searchedProducts }) {
  return (
    <div className='search-result-wraper'>
      <div className='search-result-body'>
        <Row>
          {searchedProducts.map((product, index) => {
            if (searchedProducts.length === 3)
              return <SearchedProductThree product={product} />
            if (searchedProducts.length === 2)
              return <SearchedProductTwo product={product} />
            return <SearchedProduct product={product} />
          })}
        </Row>
      </div>
    </div>
  )
}

// function SearchedProduct({product}){
//     return(
//         <Col xs={6} md={3} style={{marginBottom:'20px'}}>
//             <div
//                 classname='search-product-wraper'

//             >
//                 <img src={product.images[0]} alt="Girl in a jacket" width="100%" height="90%"/>
//                 </div>
//                 <div
//                 style={{
//                     height: '20px',
//                     width: '100%',
//                     backgroundColor: 'white',
//                     paddingLeft: 5,
//                     paddingRight: 5,
//                     paddingTop: 8
//                 }}
//                 >
//                 <h6 className='product-title' >
//                     {product.productName}
//                 </h6>
//             </div>
//         </Col>
//     )
// }

function SearchedProduct({ product }) {
  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

  return (
    <Col xs={6} md={3} style={{ marginBottom: '20px' }}>
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
          <div className='home-card-title'>{product.productName}</div>
          <div className='home-card-text'>
            View Details - &#x20B9;
            {product.price ? product.price : product.mrpPrice}
          </div>
        </div>
      </Link>
    </Col>
  )
}

function SearchedProductThree({ product }) {
  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

  return (
    <Col xs={6} md={4} style={{ marginBottom: '20px' }}>
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
          <div className='home-card-title'>{product.productName}</div>
          <div className='home-card-text'>
            View Details - &#x20B9;
            {product.price ? product.price : product.mrpPrice}
          </div>
        </div>
      </Link>
    </Col>
  )
}

function SearchedProductTwo({ product }) {
  const handleMouseEnter = (product) => {
    document.getElementById(product.productId).src = product.hoverImage
  }

  const handleMouseOut = (product) => {
    document.getElementById(product.productId).src = product.images[0]
  }

  return (
    <Col xs={6} style={{ marginBottom: '20px' }}>
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
          <div className='home-card-title'>{product.productName}</div>
          <div className='home-card-text'>
            View Details - &#x20B9;
            {product.price ? product.price : product.mrpPrice}
          </div>
        </div>
      </Link>
    </Col>
  )
}
