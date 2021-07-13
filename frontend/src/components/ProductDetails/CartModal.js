import React from 'react'

import { Modal, ModalBody} from 'react-bootstrap'
import { Link  } from 'react-router-dom'

import { addToCart } from '../../actions/actionCart'

import './ProductDetails.css'

export default function CartModal(props,{cartItems,removeFromCartHandler,dispatch,setModalShow,checkoutHandler}) {
    return (
      <Modal {...props} animation={false}>
        <ModalBody>
          <div className='head-cart-header'>
            Shopping Cart
            <img src='/images/font_images/cart.svg' alt='cart-icon' />
            <span>
              {cartItems.reduce((acc, items) => acc + Number(items.qty), 0)}
            </span>
          </div>
          <>
            {cartItems.length === 0 ? (
              <div className='head-cart-empty'>Your Cart is empty</div>
            ) : (
              <>
                <div className='head-cart-scroll'>
                  {cartItems.map((items, index) => (
                    <div className='head-cart-wrap' key={index}>
                      <div className='head-cart-img'>
                        <img src={items.image} alt='cart_1' />
                      </div>
                      <div className='head-cart-details'>
                        <div className='head-cart-subg'>{items.subGroup}</div>
                        <div className='head-cart-prodn'>
                          {items.productName}
                          <img
                            src='/images/font_images/times.svg'
                            alt='trash_icon'
                            onClick={() => removeFromCartHandler(items.product)}
                          />
                        </div>
                        <div className='head-cart-root'>
                          <div className='head-cart-qty'>
                            <span
                              className='head-cart-dum'
                              onClick={() =>
                                (items.qty =
                                  items.qty > 1
                                    ? dispatch(
                                        addToCart(items.product, items.qty - 1)
                                      )
                                    : 1)
                              }
                            >
                              -
                            </span>
                            {items.qty}
                            <span
                              className='head-cart-div'
                              onClick={() =>
                                (items.qty = dispatch(
                                  addToCart(items.product, items.qty + 1)
                                ))
                              }
                            >
                              +
                            </span>
                          </div>
                          <div className='head-cart-price'>
                            &#x20B9;{items.price * items.qty}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='head-cart-bottom-wrap'>
                  <div className='head-cart-showmore'>
                    <Link to='/cart'>
                      <button onClick={() => setModalShow(false)}>
                        Go To Cart Page
                      </button>
                    </Link>
                  </div>
                  <div className='head-cart-sub-price-wrap'>
                    <div className='head-cart-sub-price-label'>
                      Subtotal Price
                    </div>
                    <div className='head-cart-sub-price'>
                      &#x20B9;
                      {cartItems.reduce(
                        (acc, items) => acc + items.qty * items.price,
                        0
                      )}
                    </div>
                  </div>
                  <div className='head-cart-purchase-button-wrap'>
                    <button onClick={checkoutHandler}>
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        </ModalBody>
      </Modal>
    )
  }