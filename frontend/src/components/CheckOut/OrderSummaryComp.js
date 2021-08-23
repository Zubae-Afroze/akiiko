import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import ItemCard from './ItemCard'
import './style.css'
import '../../screens/Chekout/style.css'
import { useSelector, useDispatch } from 'react-redux'
import { CashOnDeliveryContext } from '../../screens/Chekout/Checkout'
import { Link } from 'react-router-dom'

export default function OrderSummaryComp() {
  const cartList = useSelector((state) => state.cartList)

  const cashOnDeliveryContext = useContext(CashOnDeliveryContext)

  const dispatch = useDispatch()

  console.log('COD Order: ' + cashOnDeliveryContext.value)

  return (
    <Container
      fluid
      style={{ backgroundColor: '#E3DED5', height: '100%', maxWidth: '100%' }}
      className='f-f-m p-md-5 m-0 order-summary-xxsm'
    >
      {/* className='f-f-m pt-5 pb-xs-5 ps-xs-1 pe-xs-1 ps-sm-1 pe-sm-1 pt-sm-5 ps-lg-5 pe-lg-5 pt-lg-5' */}

      {/* className="pt-xs-5 pb-xs-5 ps-xs-1 pe-xs-1 ps-sm-1 pe-sm-1 pt-sm-5 ps-lg-5 pe-lg-5 pt-lg-5 " */}

      <h5>Order Summary</h5>
      <hr />
      <Container fluid className='p-0 m-0'>
        {' '}
        {/* d-flex justify-content-center */}
        {cartList && (
          <Row className='f-f-l p-0 m-0'>
            {cartList.cartItems.map((item, index) => {
              return <ItemCard item={item} dispatch={dispatch} />
            })}
          </Row>
        )}
      </Container>

      <div>
        <hr />
        <div className='f-f d-flex justify-content-between'>
          <h6>Subtotal</h6>
          <h6>
            {cartList.cartItems.reduce(
              (acc, items) => acc + items.qty * items.price,
              0
            )}
          </h6>
        </div>
        <div className='f-f d-flex justify-content-between'>
          <h6>Additional Pay</h6>
          {cartList.cartItems.reduce(
            (acc, items) => acc + items.qty * items.price,
            0
          ) > 500 ? (
            <h6>--</h6>
          ) : (
            <h6>50</h6>
          )}
          {/* <h6>--</h6> */}
        </div>
        <div className='f-f d-flex justify-content-between'>
          <h6>Shipping</h6>
          {cashOnDeliveryContext.value ? <h6>50</h6> : <h6>--</h6>}
        </div>
        <hr />

        <div className='d-flex justify-content-between'>
          <h6>Total</h6>
          <h6>
            {cartList.cartItems.reduce(
              (acc, items) => acc + items.qty * items.price,
              0
            ) +
              (cashOnDeliveryContext.value ? 50 : 0) +
              (cartList.cartItems.reduce(
                (acc, items) => acc + items.qty * items.price,
                0
              ) > 500
                ? 0
                : 50)}
          </h6>
        </div>
        <div style={{ height: '65px' }} />
        <div className='d-flex justify-content-center continue-shopping-style'>
          <Link to='/'>
            <button type='button'>
              {' '}
              {/*btn btn-outline-secondary*/}
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
