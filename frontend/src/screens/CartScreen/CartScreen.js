import React, { useEffect } from 'react'
import './CartScreen.css'
import { Card } from 'react-bootstrap'

import { Container, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useHistory, useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../actions/actionCart'

const CartScreen = () => {
  const { id } = useParams()
  const history = useHistory()
  const location = useLocation()

  const productId = id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cartList = useSelector((state) => state.cartList)
  const { cartItems } = cartList

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      <Container>
        <>
          <div className='cart-wrapper'>
            <div className='cart-label'>Shopping Cart</div>
            <div className='cart-sub-total'>
              <img src='/images/font_images/cart.svg' alt='cart_icon' />{' '}
              <span>
                {' '}
                {cartItems.reduce(
                  (acc, items) => acc + Number(items.qty),
                  0
                )}{' '}
                Items{' '}
              </span>
            </div>
            {cartItems.length === 0 ? (
              <Alert className='empty-cart' variant={'secondary'}>
                Your Cart is empty{' '}
                <Link to='/'>
                  <u>Go Back</u>
                </Link>
              </Alert>
            ) : (
              <div>
                {cartItems.map((items, index) => (
                  <Card key={index} className='shopping-cart-checkout'>
                    <div style={{ width: '20%' }}>
                      <div className='cart-list-image'>
                        <img
                          id={items.productId}
                          src={items.image}
                          alt='home_1'
                          className=''
                        />
                      </div>
                    </div>
                    <div
                      className='cart-list-det pl-3'
                      style={{ width: '70%' }}
                    >
                      <div className='cart-list-sub'>{items.subGroup}</div>
                      <div className='cart-list-name'>{items.productName}</div>

                      <div className='cart-price-quantity-flex'>
                        <div className='cart-quantity-dum'>
                          <span
                            className='cart-quantity-decrease'
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
                            className='cart-quantity-increase'
                            onClick={() =>
                              (items.qty = dispatch(
                                addToCart(items.product, items.qty + 1)
                              ))
                            }
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='cart-trash-icon'>
                      <img
                        src='/images/font_images/times.svg'
                        alt='trash_icon'
                        onClick={() => removeFromCartHandler(items.product)}
                      />
                      <div className='cart-list-price'>
                        &#x20B9;{items.price * items.qty}
                      </div>
                    </div>
                  </Card>
                ))}
                <div className='cart-total-pricing'>
                  <div className='cart-total'>Total Price</div>
                  <div className='cart-sub-pricing'>
                    &#x20B9;
                    {cartItems.reduce(
                      (acc, items) => acc + items.qty * items.price,
                      0
                    )}
                  </div>
                </div>
                <div className='cart-purchase-button-div'>
                  <button
                    className='cart-purchase-button'
                    onClick={checkoutHandler}
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
                <Alert className='continue-shopping' variant={'secondary'}>
                  <Link to='/'>Continue Shopping</Link>
                </Alert>
              </div>
            )}
          </div>
        </>
      </Container>
    </>
  )
}

//onClick={() => removeFromCartHandler(items.product)}

export default CartScreen
