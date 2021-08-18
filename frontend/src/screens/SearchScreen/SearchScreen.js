import React, { useState, useEffect, createRef } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'

import '../HomeScreen/HomeScreen.css'
import './searchScreenStyles.css'

export default function SearchScreen() {
  const searchInput = createRef()

  const [searchValue, setSearchvalue] = useState('')

  useEffect(() => {
    searchInput.current.focus()
  }, [searchInput])

  const [open, setOpen] = useState(false)
  const [categoryDrop, setCategoryDrop] = useState(false)
  const [materialDrop, setMaterialDrop] = useState(false)
  const [productPrice, setProductPrice] = useState(false)

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [searchedProducts, setSearchedProducts] = useState([])

  const filterOpenHandler = () => {
    const opn = open
    setOpen(!opn)
  }

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

  function bagsFilter(checked) {
    if (checked) {
      const result = products.filter((product) => product.group === 'bags')
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function homeFilter(checked) {
    if (checked) {
      const result = products.filter((product) => product.group === 'home')
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function lifestyleFilter(checked) {
    if (checked) {
      const result = products.filter((product) => product.group === 'lifestyle')
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function giftFilter(checked) {
    if (checked) {
      const result = products.filter((product) => product.group === 'gift')
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function storageFilter(checked) {
    if (checked) {
      const result = products.filter((product) => product.group === 'storage')
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function accessoriesFilter(checked) {
    if (checked) {
      const result = products.filter(
        (product) => product.group === 'accessories'
      )
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function cottonCanvasFilter(checked) {
    if (checked) {
      const result = products.filter(
        (product) => product.material === 'Cotton Canvas'
      )
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function wovenCottonFilter(checked) {
    if (checked) {
      const result = products.filter(
        (product) => product.material === 'Cotton Canvas'
      )
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function hempFilter(checked) {
    if (checked) {
      const result = products.filter((product) => product.material === 'Hemp')
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function price500Filter(checked) {
    if (checked) {
      const result = products.filter((product) => product.mrpPrice < 500)
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function price1000Filter(checked) {
    if (checked) {
      const result = products.filter((product) => product.mrpPrice < 1000)
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function price1500Filter(checked) {
    if (checked) {
      const result = products.filter(
        (product) => product.mrpPrice < 1500 && product.mrpPrice > 1000
      )
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  function price2000Filter(checked) {
    if (checked) {
      const result = products.filter(
        (product) => product.mrpPrice < 2000 && product.mrpPrice > 1500
      )
      setSearchedProducts(result)
    } else {
      setSearchedProducts(products)
    }
  }

  return (
    <>
      <span className='search-screen__filter-open' onClick={filterOpenHandler}>
        <i className='lni lni-chevron-right'></i>
      </span>
      <Sidebar
        children='test'
        sidebar={
          <div className='p-3' style={{ fontFamily: 'rutanLight' }}>
            <div
              className='d-flex justify-content-between align-items-center'
              style={{ borderBottom: 'solid 1px #000' }}
            >
              <p style={{ textTransform: 'uppercase' }}>Filter</p>
              <p style={{ fontSize: '14px', cursor: 'pointer' }}>
                <u>Clear All</u>
              </p>
            </div>
            <div style={{ borderBottom: 'solid 1px #000' }}>
              <div
                className='d-flex justify-content-between align-items-center py-3'
                style={{ cursor: 'pointer' }}
                onClick={() => setCategoryDrop(!categoryDrop)}
              >
                <div style={{ textTransform: 'uppercase' }}>Categories</div>
                <div>
                  <i
                    style={{ transition: 'all ease-out .3s' }}
                    className={
                      categoryDrop
                        ? 'lni lni-chevron-down fa-rotate-180'
                        : 'lni lni-chevron-down'
                    }
                  ></i>
                </div>
              </div>
              <div
                className={
                  categoryDrop
                    ? 'search-screen__form-check-visible'
                    : 'search-screen__form-check'
                }
              >
                <Form.Group className='mb-3'>
                  <Form.Check
                    type='checkbox'
                    label='Bags'
                    onChange={(e) => bagsFilter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Home'
                    onChange={(e) => homeFilter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Lifestyle'
                    onChange={(e) => lifestyleFilter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Gift'
                    onChange={(e) => giftFilter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Storage'
                    onChange={(e) => storageFilter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Accessories'
                    onChange={(e) => accessoriesFilter(e.target.checked)}
                  />
                </Form.Group>
              </div>
            </div>
            <div style={{ borderBottom: 'solid 1px #000' }}>
              <div
                className='d-flex justify-content-between align-items-center py-3'
                style={{ cursor: 'pointer' }}
                onClick={() => setMaterialDrop(!materialDrop)}
              >
                <div style={{ textTransform: 'uppercase' }}>Material</div>
                <div>
                  <i
                    style={{ transition: 'all ease-out .3s' }}
                    className={
                      materialDrop
                        ? 'lni lni-chevron-down fa-rotate-180'
                        : 'lni lni-chevron-down'
                    }
                  ></i>
                </div>
              </div>
              <div
                className={
                  materialDrop
                    ? 'search-screen__form-check-visible'
                    : 'search-screen__form-check'
                }
              >
                <Form.Group className='mb-3'>
                  <Form.Check
                    type='checkbox'
                    label='Cotton Canvas'
                    onChange={(e) => cottonCanvasFilter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Woven Cotton'
                    onChange={(e) => wovenCottonFilter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Hemp'
                    onChange={(e) => hempFilter(e.target.checked)}
                  />
                </Form.Group>
              </div>
            </div>
            <div style={{ borderBottom: 'solid 1px #000' }}>
              <div
                className='d-flex justify-content-between align-items-center py-3'
                style={{ cursor: 'pointer' }}
                onClick={() => setProductPrice(!productPrice)}
              >
                <div style={{ textTransform: 'uppercase' }}>Price</div>
                <div>
                  <i
                    style={{ transition: 'all ease-out .3s' }}
                    className={
                      productPrice
                        ? 'lni lni-chevron-down fa-rotate-180'
                        : 'lni lni-chevron-down'
                    }
                  ></i>
                </div>
              </div>
              <div
                className={
                  productPrice
                    ? 'search-screen__form-check-visible'
                    : 'search-screen__form-check'
                }
              >
                <Form.Group className='mb-3'>
                  <Form.Check
                    type='checkbox'
                    label='Below &#8377;500'
                    onChange={(e) => price500Filter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='&#8377;501 - &#8377;1000'
                    onChange={(e) => price1000Filter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='&#8377;1001 - &#8377;1500'
                    onChange={(e) => price1500Filter(e.target.checked)}
                  />
                  <Form.Check
                    type='checkbox'
                    label='&#8377;1501 - &#8377;2000'
                    onChange={(e) => price2000Filter(e.target.checked)}
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        }
        open={open}
        onSetOpen={filterOpenHandler}
        styles={{
          sidebar: {
            background: 'white',
            width: '300px',
            zIndex: '1070',
            position: 'fixed',
            top: '162px',
            height: '70vh',
          },
        }}
      />
      <SearchBar
        searchInput={searchInput}
        searchValue={searchValue}
        setSearchvalue={setSearchvalue}
        onSearch={onSearch}
        setSearchedProducts={setSearchedProducts}
        products={products}
        open={open}
      />
      <div style={{ height: 'auto', width: '100vw' }}>
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
  open,
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
                className='bi bi-search'
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
              autoFocus={false}
              disabled={open}
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
                className='bi bi-x-lg'
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
              return <SearchedProductThree product={product} key={index} />
            if (searchedProducts.length === 2)
              return <SearchedProductTwo product={product} key={index} />
            return <SearchedProduct product={product} key={index} />
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
