import React from 'react'
// import { Row, Col } from 'react-bootstrap'
// import chinkyGirl from './assets/animeGirl.png'
import './postOrderScreenStyle.css'
import { Link } from 'react-router-dom'

export default function PostOrderScreen() {
  return (
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
  )
}
