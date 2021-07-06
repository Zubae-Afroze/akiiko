import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ItemCard from './ItemCard'
import './style.css'
import '../../screens/Chekout/style.css'

export default function OrderSummaryComp() {
  return (
    <Container
      fluid
      style={{ backgroundColor: '#E3DED5', height: '100%', maxWidth: '100%' }}
      className='f-f-m p-xs-1 p-md-5 m-0 order-summary-xxsm'
    >
      {/* className='f-f-m pt-5 pb-xs-5 ps-xs-1 pe-xs-1 ps-sm-1 pe-sm-1 pt-sm-5 ps-lg-5 pe-lg-5 pt-lg-5' */}

      {/* className="pt-xs-5 pb-xs-5 ps-xs-1 pe-xs-1 ps-sm-1 pe-sm-1 pt-sm-5 ps-lg-5 pe-lg-5 pt-lg-5 " */}

      <h5>Order Summary - 2 items</h5>
      <hr />
      <Container fluid className='p-0 m-0 d-flex justify-content-center'>
        <Row className='f-f-l p-0 m-0'>
          <ItemCard />
          <ItemCard />
        </Row>
      </Container>

      <div className='m-3'>
        <hr />
        <div className='d-flex justify-content-between'>
          <h6>Subtotal</h6>
          <h6>--</h6>
        </div>
        <div className='d-flex justify-content-between'>
          <h6>Tax</h6>
          <h6>--</h6>
        </div>
        <div className='d-flex justify-content-between'>
          <h6>Shipping</h6>
          <h6>--</h6>
        </div>
        <hr />

        <div className='d-flex justify-content-between'>
          <h6>Total</h6>
          <h6>--</h6>
        </div>

        <div className='d-flex justify-content-center'>
          <button type='button' className='btn btn-outline-secondary'>
            Continue Shopping
          </button>
        </div>
      </div>
    </Container>
  )
}
