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
    ReactPixel.trackCustom('track', 'Purchase', {
      currency: 'INR',
      value: finalOrder.totalPrice,
    })
  }, [finalOrder])

  return (
    <>
      <Helmet>
        <title>akiiko - Order Success</title>
        <script>
          {`gtag('event', 'conversion', {
            'send_to': 'AW-322846655/C6vzCMCjzPQCEL__-JkB',
            'transaction_id': ${finalOrder._id}
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
