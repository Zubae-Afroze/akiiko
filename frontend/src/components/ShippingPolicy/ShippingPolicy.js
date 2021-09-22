import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../Terms/Terms.css'

const ShippingPolicy = () => {
  return (
    <>
      <Container>
        <div className='terms-wrap'>
          <div className='terms-title-head'>
            <h3>SHIPPING POLICY</h3>
          </div>
          <div className='terms-title'>
            How long would it take for me to get my order?
          </div>
          <div div className='terms-description'>
            We require a time of 5-10 working days for the delivery of any
            particular order from the date of order placement. Working days are
            generally considered from Monday to Saturday with the exception of
            public or national holidays.
          </div>
          <div className='terms-title'>How do I pay for my order?</div>
          <div className='terms-description'>
            We offer an option to pay via several credit/debit card payment
            methods along with UPI and Netbanking from major banks in the
            country.
          </div>
          <div className='terms-title'>
            How much is shipping going to cost me?
          </div>
          <div className='terms-description'>
            We offer free shipping on all orders worth above &#8377; 500.
            Alternatively, there is an additional &#8377; 50 charge for all
            orders worth below &#8377; 500.
          </div>
          <div className='terms-title'>
            Do you offer an option for COD payment?
          </div>
          <div className='terms-description'>
            Yes, we offer a COD option at an additional charge of &#8377; 50.
          </div>
          <div className='terms-title'>How can I track my order?</div>
          <div className='terms-description'>
            You can track the status of your order under the “Your Orders” tab
            available in the Profile section present on the top right of your
            screen. Alternatively, we share a link on the order confirmation
            email that you will receive from us post purchase which will
            redirect you to the specific tab in your account.
          </div>
          <div className='terms-title'>Is my address/pincode serviceable?</div>
          <div className='terms-description'>
            You can write an email to us at{' '}
            <a href='mailto: orders@precisofashion.com'>
              orders@precisofashion.com
            </a>{' '}
            to enquire regarding the serviceability of your address. In case of
            issues relating to the non-serviceability of an address or pincode
            post purchase, we would refund the amount to the customer as per the
            terms stated on our Cancellation & Refunds policy.
          </div>
          <div className='terms-title'>How will I receive my order?</div>
          <div className='terms-description'>
            We have our very own shipping partners that undertake our deliveries
            for us. They do their part in providing regular updates regarding
            the status of your order
          </div>
          <div className='terms-title'>Returns & Exchange Policy</div>
          <div className='terms-description'>
            <Link to='/'>Akiiko</Link> or{' '}
            <a
              href='http://www.precisofashion.com'
              target='_blank'
              rel='noreferrer'
            >
              Preciso Fashion
            </a>{' '}
            does not entertain returns after the order is successfully placed
            and payment is made by the buyer. Buyers are requested to place the
            order only if they agree with these terms. No returns will be
            entertained if a customer wants to return the product for the reason
            that he/she doesn't like it after delivery of the product or feels
            the product doesn't match his or her expectations.
          </div>
          <div className='terms-description'>
            <Link to='/'>Akiiko</Link> or{' '}
            <a
              href='http://www.precisofashion.com'
              target='_blank'
              rel='noreferrer'
            >
              Preciso Fashion
            </a>{' '}
            will accept exchange of the sold products through the website
            www.akiiko.com, subject to the terms and conditions mentioned below
          </div>
          <div className='terms-description'>
            <ul style={{ marginLeft: '20px' }}>
              <li>
                Exchange requests will be entertained only in case the
                product(s) received by the buyer are in damaged or unsuitable
                conditions. Only such cases will be considered for exchange
                thereafter.
              </li>
              <li>
                Buyer has to inform <Link to='/'>Akiiko</Link> or{' '}
                <a
                  href='http://www.precisofashion.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  Preciso Fashion
                </a>{' '}
                of his/her intention to exchange the unacceptable products
                within 48 hrs of receipt of the goods at his/her shipping
                address.
              </li>
            </ul>
          </div>
          <div className='terms-description'>
            The buyer is required to send an email at{' '}
            <a href='mailto: orders@precisofashion.com'>
              orders@precisofashion.com
            </a>{' '}
            in case they wish to place a request for an exchange or have any
            other grievances.
          </div>
          <div className='terms-description'>
            Upon verification of the status of the product,{' '}
            <Link to='/'>Akiiko</Link> or{' '}
            <a
              href='http://www.precisofashion.com'
              target='_blank'
              rel='noreferrer'
            >
              Preciso Fashion
            </a>{' '}
            shall reserve the right to term the status of the product as
            “unacceptable” or “acceptable” in order to avoid any disputes and
            further action shall be taken accordingly.
          </div>
          <div className='terms-description'>
            In case of acceptance of any exchange requests, the company shall
            book a return shipment for the respective case. All replacements
            will be made after the returned shipment of product is received and
            assessed by <Link to='/'>Akiiko</Link> or{' '}
            <a
              href='http://www.precisofashion.com'
              target='_blank'
              rel='noreferrer'
            >
              Preciso Fashion
            </a>{' '}
            . The shipping charges for returning the damaged cases will be borne
            by the company.
          </div>
          <div className='terms-title'>Cancellation & Refund Policy</div>
          <div className='terms-description'>
            The company does not provide the option to cancel the order and
            demand refund once the order is successfully placed and processed by
            the payment gateway. Refund requests will only be considered in the
            following cases:
          </div>
          <div className='terms-description'>
            <ul style={{ marginLeft: '20px' }}>
              <li>
                If the shipping location is not serviced by our partner courier
                companies.
              </li>
              <li>
                In case of non-compliance of delivery terms and conditions put
                forth by the company.
              </li>
            </ul>
          </div>
          <div className='terms-description'>
            In case of acceptance of a refund request, the amount will be
            refunded within 7-10 business days from the date of written
            confirmation to the customer.
          </div>
          <div className='terms-description'>
            No refund requests will be entertained for damaged products. Damaged
            products will be exchanged as per our Returns & Exchanges policy.
          </div>
          <div className='terms-title'>
            No refunds will be given in the following cases:
          </div>
          <div className='terms-description'>
            Incorrect or insufficient address mentioned by the customer.
          </div>
          <div className='terms-description'>
            Non-availability of recipient at the mentioned address and/or
            premises.
          </div>
          <div className='terms-description'>Refusal to accept products.</div>
          <div className='terms-description'>
            In case of failure to deliver any particular order due to the
            aforementioned reasons, the company will attempt to deliver any
            particular order a second time. In case of failure of delivery a
            second time, the order shall be considered as cancelled
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShippingPolicy
