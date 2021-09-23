import React from 'react'
import '../Terms/Terms.css'
import { Container } from 'react-bootstrap'

const returnPolicy = () => {
  return (
    <>
      <Container>
        <div className='terms-wrap'>
          <div className='terms-title-head'>REFUND POLICY</div>

          <div className='terms-title'>Returns</div>
          <div className='terms-description'>
            Our policy lasts 30 days. If 30 days have gone by since your
            purchase, unfortunately we can’t offer you a refund or exchange. To
            be eligible for a return, your item must be unused and in the same
            condition that you received it. It must also be in the original
            packaging. To complete your return, we require a receipt or proof of
            purchase.
          </div>

          <div className='terms-title'>Refunds (if applicable)</div>
          <div className='terms-description'>
            Once your return is received and inspected, we will send you an
            email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund. If
            you are approved, then your refund will be processed, and a credit
            will automatically be applied to your credit card or original method
            of payment, within a certain amount of days.
          </div>

          <div className='terms-title'>
            Late or missing refunds (if applicable)
          </div>
          <div className='terms-description'>
            If you haven’t received a refund yet, first check your bank account
            again. Then contact your credit card company, it may take some time
            before your refund is officially posted. Next contact your bank.
            There is often some processing time before a refund is posted. If
            you’ve done all of this and you still have not received your refund
            yet, please contact us at 
            <a href='mailto:orders@precisofashion.com'>
              orders@precisofashion.com
            </a>
            <br />
          </div>

          <div className='terms-title'>Sale items (if applicable)</div>
          <div className='terms-description'>
            Only regular priced items may be refunded, unfortunately sale items
            cannot be refunded.
          </div>

          <div className='terms-title'>Exchanges (if applicable)</div>
          <div className='terms-description'>
            We only replace items if they are defective or damaged.  If you need
            to exchange it for the same item, send us an email at 
            <a href='mailto:orders@precisofashion.com'>
              orders@precisofashion.com
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}
export default returnPolicy
