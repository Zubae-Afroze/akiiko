import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../../screens/Chekout/style.css'

const containerVariants = {
  initial: {
    opacity: 0,
  },
  anime: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}
export default function PaymentForm({ setFormLevel }) {
  return (
    <motion.div variants={containerVariants} initial='initial' animate='anime'>
      <h6
        style={{ color: '#4A4A4A', fontWeight: 500, marginBottom: '20px' }}
        className='f-f-m'
      >
        Whats your payment Information ?
      </h6>
      <Form className='f-f-m'>
        <Row className='m-0 p-0'>
          <Col
            xs={6}
            sm={6}
            md={6}
            // className='m-0 mb-1 pe-1'
            className='p-0 m-0'
          >
            <div style={{ marginRight: 7 }}>
              <Form.Group className='mb-1' controlId='formBasicCheckbox'>
                <Form.Control size='md' type='text' placeholder='Card Number' />
                <Form.Check
                  style={{ color: '#787878', fontSize: '14px' }}
                  type='checkbox'
                  label='Check me out'
                />
              </Form.Group>
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            // className='m-0 mb-1 pe-1'
            className='p-0 m-0'
          >
            <Form.Control size='md' type='text' placeholder='MM/ YY/ CVC' />
          </Col>

          <Col xs={5} md={5} className='p-0 mt-1 ms-0 me-0 mb-2'>
            <hr />
          </Col>
          <Col
            xs={1}
            md={1}
            className='p-0 mt-1 ms-0 me-0 mb-2 d-flex justify-content-center'
          >
            <h6>OR</h6>
          </Col>
          <Col xs={6} md={6} className='p-0 mt-1 ms-0 me-0 mb-2'>
            <hr />
          </Col>

          <Col sm={12} md={12} className='m-0 mb-1 p-0 pe-1'>
            <Form.Control
              size='md'
              type='text'
              placeholder='NET BANKING / UPI'
            />
          </Col>
          <Col sm={12} md={12} className='m-0 mb-1 p-0 pe-1'>
            <div
              style={{
                padding: '7px',
                borderStyle: 'solid',
                borderColor: '#E3DED5',
                borderWidth: '2px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              <Form.Check
                style={{ color: '#4A4A4A', fontSize: '16px' }}
                type='checkbox'
                label='COD'
              />
            </div>
          </Col>
        </Row>

        <div className='d-none d-sm-none d-md-block'>
          <div className='d-flex justify-content-end '>
            <Button
              style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
              size='lg'
              variant='primary'
              type='submit'
              className='px-5 me-3 mt-3 mb-3'
              onClick={() => setFormLevel(2)}
            >
              Next
            </Button>
          </div>
        </div>

        <div className='d-block d-sm-block d-md-none'>
          <div className='d-flex justify-content-center '>
            <Button
              style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
              size='lg'
              variant='primary'
              type='submit'
              className='px-5 me-3 mt-3 mb-3'
              onClick={() => setFormLevel(2)}
            >
              NEXT
            </Button>
          </div>
        </div>
      </Form>
    </motion.div>
  )
}
