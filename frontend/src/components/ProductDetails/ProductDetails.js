import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Row, Col, Dropdown, Carousel } from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'

import { actionListProductDetails } from '../../actions/actionProductList'
import { addToCart } from '../../actions/actionCart'

import ReactImageMagnify from 'react-image-magnify'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'

import CartModal from './CartModal'
import Footer from '../Footer/Footer'

import ProductItemComp from '../Shimmers/ProductItemComp'

import TopPopUpComp , {showTopPopUp} from '../TopPopUp/TopPopUpComp'

//import { ToastContainer, toast } from 'react-toastify'

import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams()

  const history = useHistory()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionListProductDetails(id))
  }, [dispatch, id])

  const productDetails = useSelector((state) => state.productDetails)

  const { loading, error, product } = productDetails

  const [bigImageSrc, setImageSrc] = useState(product.heroImage)

  useEffect(() => {
    setImageSrc(product.heroImage)
  }, [product.heroImage])

  let [itemQuantity, setItemQuantity] = useState(1)

  const addToCartHandler = () => {
    // history.push(`/cart/${id}?qty=${itemQuantity}`)
    dispatch(addToCart(id, itemQuantity))

    showTopPopUp('Item Added to cart')
    // toast('Item Added to cart', {
    //   position: 'top-center',
    //   autoClose: 2000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // })
    // setModalShow(true)
  }

  //const cartList = useSelector((state) => state.cartList)

  //const { cartItems } = cartList

  const [modalShow, setModalShow] = useState(false)

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  // function CartModal(props) {
  //   return (
  //     <Modal {...props} animation={false}>
  //       <ModalBody>
  //         <div className='head-cart-header'>
  //           Shopping Cart
  //           <img src='/images/font_images/cart.svg' alt='cart-icon' />
  //           <span>
  //             {cartItems.reduce((acc, items) => acc + Number(items.qty), 0)}
  //           </span>
  //         </div>
  //         <>
  //           {cartItems.length === 0 ? (
  //             <div className='head-cart-empty'>Your Cart is empty</div>
  //           ) : (
  //             <>
  //               <div className='head-cart-scroll'>
  //                 {cartItems.map((items, index) => (
  //                   <div className='head-cart-wrap' key={index}>
  //                     <div className='head-cart-img'>
  //                       <img src={items.image} alt='cart_1' />
  //                     </div>
  //                     <div className='head-cart-details'>
  //                       <div className='head-cart-subg'>{items.subGroup}</div>
  //                       <div className='head-cart-prodn'>
  //                         {items.productName}
  //                         <img
  //                           src='/images/font_images/times.svg'
  //                           alt='trash_icon'
  //                           onClick={() => removeFromCartHandler(items.product)}
  //                         />
  //                       </div>
  //                       <div className='head-cart-root'>
  //                         <div className='head-cart-qty'>
  //                           <span
  //                             className='head-cart-dum'
  //                             onClick={() =>
  //                               (items.qty =
  //                                 items.qty > 1
  //                                   ? dispatch(
  //                                       addToCart(items.product, items.qty - 1)
  //                                     )
  //                                   : 1)
  //                             }
  //                           >
  //                             -
  //                           </span>
  //                           {items.qty}
  //                           <span
  //                             className='head-cart-div'
  //                             onClick={() =>
  //                               (items.qty = dispatch(
  //                                 addToCart(items.product, items.qty + 1)
  //                               ))
  //                             }
  //                           >
  //                             +
  //                           </span>
  //                         </div>
  //                         <div className='head-cart-price'>
  //                           &#x20B9;{items.price * items.qty}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //               <div className='head-cart-bottom-wrap'>
  //                 <div className='head-cart-showmore'>
  //                   <Link to='/cart'>
  //                     <button onClick={() => setModalShow(false)}>
  //                       Go To Cart Page
  //                     </button>
  //                   </Link>
  //                 </div>
  //                 <div className='head-cart-sub-price-wrap'>
  //                   <div className='head-cart-sub-price-label'>
  //                     Subtotal Price
  //                   </div>
  //                   <div className='head-cart-sub-price'>
  //                     &#x20B9;
  //                     {cartItems.reduce(
  //                       (acc, items) => acc + items.qty * items.price,
  //                       0
  //                     )}
  //                   </div>
  //                 </div>
  //                 <div className='head-cart-purchase-button-wrap'>
  //                   <button onClick={checkoutHandler}>
  //                     PROCEED TO CHECKOUT
  //                   </button>
  //                 </div>
  //               </div>
  //             </>
  //           )}
  //         </>
  //       </ModalBody>
  //     </Modal>
  //   )
  // }

  return (
    <>
      <TopPopUpComp />
      {loading ? (
        <MyComponent
          sentences={[]}
          wrapperBackgroundColor={'rgba(255,255,255)'}
          color={'#6e4e37'}
          loaderType={'ball-spin-clockwise'}
          customLoader={<SpinnerIcon />}
        />
      ) : error ? (
        <h2>{error}</h2>
      ) : product.productId ? (
        <Container>
          <div className='product-details-wrapper'>
            <Col sm={12} className='carousel-wrapper product-details-carousel'>
              <Carousel controls={false}>
                {product.images.map((prod, index) => (
                  <Carousel.Item interval={null} key={index}>
                    <img
                      className='d-block w-100 maginfier-shimmer'
                      src={prod}
                      alt='First slide'
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Row>
              <Col xs={1} className='alt-img-list'>
                <ul>
                  {product.images.map((prod, index) => (
                    <li key={index}>
                      <img
                      className='maginfier-shimmer'
                        onClick={() => setImageSrc(prod)}
                        src={prod}
                        alt='alt_image'
                      />
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={5} className='alt-img-hero-container'>
                <div className='alt-img-hero'>
                  <ReactImageMagnify
                  enlargedImageContainerClassName='maginfier-shimmer'
                  enlargedImageClassName='maginfier-shimmer'
                    {...{
                      smallImage: {
                        alt: 'big_img',
                        src: bigImageSrc,
                        width: 522,
                        height: 522,
                      },
                      largeImage: {
                        src: bigImageSrc,
                        width: 1600,
                        height: 1600,
                      },
                      className: 'test-magnify',
                      enlargedImageContainerClassName: 'mag-img-cont',
                      enlargedImageClassName: 'mag-img',
                      imageClassName: 'img-hero-wrap',
                      lensStyle: {
                        background: 'hsla(0, 0%, 100%, .3)',
                        border: '1px solid #ccc',
                      },
                      shouldUsePositiveSpaceLens: true,
                    }}
                  />
                </div>
              </Col>
              <Col lg={6} className='product-det'>
                <div className='products-details-head'>{product.group}</div>
                <div className='products-details-label'>
                  {' '}
                  {product.productName}
                  {product.price ? (
                    <div className='products-details-price'>
                      <span className='strike-price'>
                        &#x20B9; {product.mrpPrice}
                      </span>{' '}
                      <span className='nstrike-price'>
                        &#x20B9;{product.price}
                      </span>
                    </div>
                  ) : (
                    <div className='products-details-price'>
                      &#x20B9; {product.mrpPrice}
                    </div>
                  )}
                </div>
                <Row className='cart-det'>
                  <Col className='material-det'>
                    <Dropdown>
                      <Dropdown.Toggle
                        className='product-details-button'
                        variant='default'
                        id='dropdown-basic'
                      >
                        <div className='material-div'>MATERIAL:</div>{' '}
                        <div className='material-dum'>
                          {product.material}{' '}
                          <i className='lni lni-chevron-down'></i>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>{product.material}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col className='material-det'>
                    <Dropdown>
                      <Dropdown.Toggle
                        className='product-details-button'
                        variant='default'
                        id='dropdown-basic'
                      >
                        <div className='thickness-div'>THICKNESS:</div>{' '}
                        <div className='thickness-dum'>
                          {product.thickness}{' '}
                          <i className='lni lni-chevron-down'></i>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>{product.thickness}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>

                <Row className='cart-det'>
                  <Col className='product-details-color'>
                    <Dropdown>
                      <Dropdown.Toggle
                        className='product-details-button'
                        variant='default'
                        id='dropdown-basic'
                      >
                        <div className='color-div'>Color:</div>
                        <div className='color-pick'>
                          <i className='lni lni-chevron-down testing'></i>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          Natural<div className='color-pick'></div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col className='product-details-quantity'>
                    <div className='details-quantity'>
                      <div className='quantity-div'>Quantity:</div>
                      <div className='quantity-dum'>
                        <span
                          className='quantity-decrease'
                          onClick={() =>
                            setItemQuantity(
                              itemQuantity <= 1
                                ? (itemQuantity = 1)
                                : itemQuantity - 1
                            )
                          }
                        >
                          -
                        </span>
                        {itemQuantity}
                        <span
                          className='quantity-increase'
                          onClick={() => setItemQuantity(itemQuantity + 1)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <button
                  disabled={product.isOutOfStock ? true : false}
                  className='product-purchase-button'
                  onClick={addToCartHandler}
                >
                  {product.isOutOfStock ? 'OUT OF STOCK' : 'ADD TO CART'}
                  {/* ADD TO CART */}
                </button>

                <div className='product-details-second-wrapper'>
                  <div className='product-description-label '>
                    PRODUCT DESCRIPTION
                  </div>
                  <div className='product-description-text'>
                    {product.description}
                  </div>

                  <div>
                    <div className='product-details-label '>Details</div>
                    <ul className='product-details-text'>
                      <li className='product-details-texts'>
                        <span className='target-bold'>Item Code: </span>{' '}
                        {product.productId}
                      </li>

                      {product.content ? (
                        <li className='product-details-texts'>
                          <span className='target-bold'>Content: </span>{' '}
                          {product.content}
                        </li>
                      ) : null}
                      <li className='product-details-texts'>
                        <span className='target-bold'>Size:</span>{' '}
                        {product.measurement}
                      </li>
                      <li className='product-details-texts'>
                        <span className='target-bold'>Material:</span>{' '}
                        {product.material}
                      </li>
                      {/* <li>Care Instruction: {product.washingCare}</li> */}
                    </ul>
                  </div>

                  <div>
                    <div className='product-details-label '>
                      Care Instruction
                    </div>
                    <div className='product-details-text'>
                      {product.washingCare}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <CartModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              setModalShow={setModalShow}
              checkoutHandler={checkoutHandler}
            />

            {/* <CartModal show={modalShow} onHide={() => setModalShow(false)} /> */}

            {/* {product.addOn ? 
                        <Row className=''> 
                            <Col sm={3}>
                                <div className='addon-img-container'>
                                <img style={{border: "1px solid #36353541"}} src={product.addOn.heroImage} alt='summa' />
                                </div>
                            </Col>
                            <Col sm={5}>
                                <div className='addon-container'>
                                    
                                    <div >Add On</div>
                                    <ul className='product-details-text addon-text'>You can also purchase this card holder with {product.productName}
                                    <li className='product-details-texts addon-text'><span className='target-bold'>Product Name:</span> {product.addOn.productName}</li>
                                    <li className='product-details-texts addon-text' ><span className='target-bold'>Description:</span> {product.addOn.description}</li>
                                    {/* <li>Care Instruction: {product.washingCare}</li>
                                    <li className='product-details-texts addon-text'><span className='target-bold'>{product.productName}</span> &#x20B9;{product.price} +<span className='target-bold'> {product.addOn.productName} </span>&#x20B9;{product.addOn.mrpPrice} = &#x20B9;{parseInt(product.price) + parseInt(product.addOn.mrpPrice)}</li>
                                    </ul>
                                

                                </div>
                            </Col>
                            <Col sm={3}>
                            <button className='product-purchase-button'>PURCHASE</button>

                            </Col>
                        </Row>
                        : null} */}


            {/* <div className='similar-products-head'>You may also like</div>
            <div style={{height: '20px'}} />
            <SimilarProducts />
            <div style={{height: '30px'}} /> */}


            <OldComp />
          </div>
          {product.reviews.length !== 0 ? (
            <div>
              <div className='review-head'>Customer Reviews</div>
              <div className='review-flex'>
                {product.reviews.map((res, index) => (
                  <div className='review-wrap'>
                    <div className='review-content'>
                      <i class='fa fa-quote-left' aria-hidden='true'></i>
                      <div className='review-main'>{res.review}</div>
                      <div className='review-user'>- {res.userName}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      ) : null}
      <Footer />
    </>
  )

  function SimilarProducts(){
    if(product.similarProducts){
      return (<div className='similar-products-comp-wrapper'>
        {
          product.similarProducts.map((product) => (
            <ProductItemComp product={product} isSimilarProducts={true}/>
          ))
        }
      </div>)
    }else{
      return null;
    }
  }


  function OldComp(){
    if(product.similarProducts){
      return(
        <div>
          <div className='similar-products-head'>You may also like</div>
          <Row className='similar-products-wrapper'>
            {/* Similar Products */}
            {product.similarProducts.map((prod) => (
              <div
                key={prod.productId}
                className='similar-products-container'
              >
                <Link
                  to={`/product/${prod.id}`}
                  onClick={() => setImageSrc(prod.heroImage)}
                >
                  <Col lg={2.4}>
                    <div>
                      <div className='similar-products-image'>
                        <img
                          src={prod.heroImage}
                          alt={prod.productId}
                        ></img>
                        {prod.bestSeller ? (
                          <span className='label-best'>
                            {prod.bestSeller}
                          </span>
                        ) : null}
                        {prod.quickView ? (
                          <span className='label-view'>
                            {prod.quickView}
                          </span>
                        ) : null}
                      </div>
                      <div className='similar-products-title'>
                        {prod.productName}
                      </div>
                      <div className='similar-products-text'>
                        {' '}
                        View Details - &#x20B9;
                        {prod.price ? prod.price : prod.mrpPrice}
                      </div>
                    </div>
                  </Col>
                </Link>
              </div>
            ))}
          </Row>{' '}
        </div>
      );
    }else{
      return null;
    }
  }
}

export default ProductDetails
