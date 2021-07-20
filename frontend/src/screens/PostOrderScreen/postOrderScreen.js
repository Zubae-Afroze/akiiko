import React from 'react'
import { Row, Col } from 'react-bootstrap'
import chinkyGirl from './assets/animeGirl.png'
import './postOrderScreenStyle.css'
import { Link } from 'react-router-dom'

export default function PostOrderScreen() {
  return (
    <div className='successBGimage'>
      <div className='main-content-deskTop'>
        <Row className='p-0 m-0'>
          <Col xs={12} md={4} className='p-0 m-0'>
            <div className='chinky-girl-wraper'>
              <div className='chinky-girl'>
                <img
                  src={chinkyGirl}
                  alt='Girl in a jacket'
                  width='100%'
                  height='100%'
                />
              </div>
            </div>
          </Col>

          <Col xs={12} className='d-block d-sm-none'>
            <div style={{ height: '10px' }} />
          </Col>

          <Col xs={12} md={8}>
            <>
              <div style={{ height: '85%' }} className='message-wraper'>
                <div className='message-wraper'>
                  <div>
                    <h6 className='normal-message'>
                      Thank you for choosing akiiko products & choosing an
                    </h6>
                    <h6 className='bold-message'> eco-conscious mindset.</h6>
                  </div>
                </div>
              </div>

              <Link to='/'>
                <h6 className='continue-shooping-message'>
                  {' '}
                  Continue Shoping{' '}
                </h6>
              </Link>
              <div style={{ height: '10px' }} />
            </>
          </Col>
        </Row>
      </div>
    </div>
  )
}
