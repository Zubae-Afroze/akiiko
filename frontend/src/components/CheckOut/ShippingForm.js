import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './style.css'
import '../../screens/Chekout/style.css'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

export default function ShippingForm({ setFormLevel }) {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible'>
      <h6
        style={{ color: '#4A4A4A', fontWeight: 500, marginBottom: '20px' }}
        className='f-f-m'
      >
        Where this order going ?
      </h6>
      <Form className='f-f-m'>
        <Row className='m-0 p-0'>
          <Col
            xs={6}
            sm={6}
            md={6}
            className='p-0 mb-2'
            // className='m-0 mb-2 pe-1'
            // style={{ marginRight: '1px' }}
          >
            <div style={{ marginRight: 7 }}>
              <Form.Control
                size='md'
                type='text'
                placeholder='First Name'
                className='d-block d-sm-none'
              />
              <Form.Control
                size='lg'
                type='text'
                placeholder='First Name'
                className='d-none d-sm-block'
                style={{ padding: 25, fontSize: 16 }}
              />
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            className='p-0 mb-2'
            // className='m-0 mb-2 pe-1'
            // style={{ marginLeft: 1 }}
          >
            {/* <Form.Control size='md' type='text' placeholder='Last Name' /> */}
            <Form.Control
              size='md'
              type='text'
              placeholder='Last Name'
              className='d-block d-sm-none'
            />
            <Form.Control
              size='lg'
              type='text'
              placeholder='Last Name'
              className='d-none d-sm-block'
              style={{ padding: 25, fontSize: 16 }}
            />
          </Col>

          <Col
            xs={6}
            sm={6}
            md={6}
            className='p-0 mb-2'
            // className='m-0 mb-2 pe-1'
            // style={{ marginRight: 1 }}
          >
            <div style={{ marginRight: 7 }}>
              {/* <Form.Control size='md' type='text' placeholder='Address' /> */}
              <Form.Control
                size='md'
                type='text'
                placeholder='Address'
                className='d-block d-sm-none'
              />
              <Form.Control
                size='lg'
                type='text'
                placeholder='Address'
                className='d-none d-sm-block'
                style={{ padding: 25, fontSize: 16 }}
              />
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            className='p-0 mb-2'
            // className='m-0 mb-2 pe-1'
            // style={{ marginLeft: 1 }}
          >
            {/* <Form.Control size='md' type='text' placeholder='Apt / Floor / Suite'/> */}
            <Form.Control
              size='md'
              type='text'
              placeholder='Apt / Floor / Suite'
              className='d-block d-sm-none'
            />
            <Form.Control
              size='lg'
              type='text'
              placeholder='Apt / Floor / Suite'
              className='d-none d-sm-block'
              style={{ padding: 25, fontSize: 16 }}
            />
          </Col>

          <Col
            xs={6}
            sm={6}
            md={4}
            className='p-0 mb-2'
            // className='m-0 mb-1 ps-0 pe-1'
          >
            <div style={{ marginRight: 7 }}>
              {/* <Form.Control size='md' type='text' placeholder='City' /> */}
              <Form.Control
                size='md'
                type='text'
                placeholder='City'
                className='d-block d-sm-none'
              />
              <Form.Control
                size='lg'
                type='text'
                placeholder='City'
                className='d-none d-sm-block'
                style={{ padding: 25, fontSize: 16 }}
              />
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className='p-0 mb-2'
            // className='m-0 mb-1 ps-0 pe-1'
          >
            {/* <Form.Control size='md' type='text' placeholder='State' /> */}
            <Form.Control
              size='md'
              type='text'
              placeholder='State'
              className='d-block d-sm-none'
            />
            <Form.Control
              size='lg'
              type='text'
              placeholder='State'
              className='d-none d-sm-block'
              style={{ padding: 25, fontSize: 16 }}
            />
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className='p-0 mb-2'
            //   className='m-0 mb-1 ps-1'
          >
            <div className='zip-code'>
              {/* <Form.Control size='md' type='text' placeholder='Zip Code' /> */}
              <Form.Control
                size='md'
                type='text'
                placeholder='Zip Code'
                className='d-block d-sm-none'
              />
              <Form.Control
                size='lg'
                type='text'
                placeholder='Zip Code'
                className='d-none d-sm-block'
                style={{ padding: 25, fontSize: 16 }}
              />
            </div>
          </Col>
        </Row>

        <div
          className='d-none d-sm-none d-md-block'
          style={{ paddingRight: '1rem' }}
        >
          <div className='d-flex justify-content-end'>
            <Button
              style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
              size='lg'
              variant='primary'
              type='submit'
              className='px-5 me-3 mt-3 mb-3'
              onClick={() => setFormLevel(1)}
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
              className='px-5 m-0 mt-3 mb-3'
              onClick={() => setFormLevel(1)}
            >
              NEXT
            </Button>
          </div>
        </div>
      </Form>
    </motion.div>
  )
}

/* <select
              className='form-select'
              aria-label='Default select example'
              style={{ width: '100%', padding: 10, paddingLeft: 10 }}
            >
              <option selected>Zip Code</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select> */
