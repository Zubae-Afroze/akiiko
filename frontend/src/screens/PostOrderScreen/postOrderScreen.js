import React, { useEffect } from 'react'
// import { Row, Col } from 'react-bootstrap'
// import chinkyGirl from './assets/animeGirl.png'
import './postOrderScreenStyle.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import ReactPixel from 'react-facebook-pixel'

export default function PostOrderScreen() {
  const order = useSelector((state) => state.orderCreate.order)

  let finalOrder = {}

  if (order) {
    finalOrder = order
  } else {
    finalOrder.totalPrice = null
  }

  useEffect(() => {
    ReactPixel.track('track', 'Purchase', {
      currency: 'INR',
      value: finalOrder.totalPrice,
    })
  }, [finalOrder])

  return (
    <>
      <Helmet>
        <title>Order Success</title>
        <script>
          {`gtag('event', 'conversion', {
            'send_to': 'AW-322846655/rwSuCMaIge4CEL__-JkB',
            'value': 1.0,
            'currency': 'INR',
            'transaction_id': ''
        });`}
        </script>
        <script>
          {`gtag('event', 'conversion', {
              'send_to': 'AW-322846655/qjvTCM2r7O8CEL__-JkB',
              'value': 1.0,
              'currency': 'INR',
              'transaction_id': ''
          });`}
        </script>
        <script>
          {`gtag('event', 'conversion', {
            'send_to': 'AW-322846655/BxltCMvCqvECEL__-JkB',
            'value': 1.0,
            'currency': 'INR',
            'transaction_id': ''
          });`}
        </script>
      </Helmet>
      <div className='successBGimage'>
        <div className='order-success-msg-wraper f-f-l'>
          <div className='order-success-msg-container'>
            <div>Thank you for choosing akiiko.</div>
            <div>You will be receiving an email from us shortly.</div>
          </div>
          <div>
            <Link to='/newprofile'>
              <h6 className='continue-shooping-message'>View order status</h6>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
