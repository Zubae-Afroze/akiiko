import React, { useEffect } from 'react'
// import { Row, Col } from 'react-bootstrap'
// import chinkyGirl from './assets/animeGirl.png'
import './postOrderScreenStyle.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import ReactPixel from 'react-facebook-pixel'
import star from './assets/startUnFilled.svg'

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
        {/* <div className='order-success-msg-wraper f-f-l'>
          <div className='order-success-msg-container'>
            <div>Thank you for choosing akiiko.</div>
            <div>You will be receiving an email from us shortly.</div>
          </div>
          <div>
            <Link to='/newprofile'>
              <h6 className='continue-shooping-message'>View order status</h6>
            </Link>
          </div>
        </div> */}

        <div className='feedback-form-pop-up-wrapper'>
          <div className="feedback-form-msg-container">
            <div>Thank you for choosing akiiko.</div>
            <div>You will be receiving an email from us shortly.</div>
          </div>

          <div className="feedback-form-ratting-container">
            <div>We'd like to hear your experience about our site</div>
            <div className="reactions-container">
                <div style={{backgroundColor: "rgb(163, 129, 103)", height: "50px", width: "50px", borderRadius: "50%", color: "rgb(255, 255, 255)"}}/>
            </div>

            <div className="rating-stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>


          <div>
            <textarea id="story" placeholder="You feedback" name="message" class="feedBackArea"></textarea>
          </div>

          <div className="form-submit-buttons-container">
            <button>submmit</button>
            <button>skip</button>
          </div>

          <input type="checkbox" id="toggle" style={{position: "absolute", bottom: "2px", zIndex: 2}} />
          {/* <button style={{position: "absolute", bottom: "2px",left: "5px", zIndex: 3}} onClick={()=>{
            const elem = document.querySelector(".feedback-form-pop-up-wrapper");
            elem.style.animation = "feedbackFormOuttro 0.5s 0s";
          }} > scale out </button> */}
          
          <div className="feedback-thanks-wrapper" />

        </div>
      </div>
    </>
  )
}
