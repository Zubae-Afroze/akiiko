import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './style.css'
import '../../screens/Chekout/style.css'
import stepperLevel from './StepperContants'
import { shippingObject } from './FormObject'

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

export default function ShippingForm({ setFormLevel, showToast }) {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible'>
      <h6
        style={{ color: '#4A4A4A', fontWeight: 500, marginBottom: '20px' }}
        className='f-f-m'
      >
        Where this order going ?
      </h6>

      <NewAddressForm setFormLevel={setFormLevel}/>
      
      {/* <ExistingAddressForm setFormLevel={setFormLevel}/> */}

      <ExistingAddressForm setFormLevel={setFormLevel} />
    </motion.div>
  )
}

function ExistingAddressForm({ setFormLevel }) {
  return (
    <Container fluid className='p-0 m-0'>
      <Row>
        <AddressComponent />

        <Col xs={12} md={6}>
          <div
            style={{
              borderStyle: 'solid',
              borderColor: '#cccccc', //#E3DED5
              borderWidth: '1px',
            }}
            className='existing-address-style add-new-address-style p-md-5'
          >
            <div className='d-flex justify-content-center'>
              <div id='child'>
                <h1 className='d-flex justify-content-center'>+</h1>
                <h6>Add Address</h6>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={4} md={8} className='p-0 m-0'></Col>
        <Col xs={4} md={4}>
          <div
            className='d-none d-sm-none d-md-block'
            // style={{ paddingRight: '1rem' }}
          >
            <div className='d-flex justify-content-end'>
              <Button
                style={{
                  backgroundColor: '#6B584C',
                  border: 0,
                  borderRadius: 0,
                  width: '100%',
                  marginLeft: '7px',
                }}
                size='lg'
                variant='primary'
                type='submit'
                className='px-5 me-3 mt-3 mb-3'
                onClick={() => setFormLevel(stepperLevel.PAYMENT)}
              >
                Next
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={4} md={0} className='p-0 m-0'></Col>
      </Row>

      <div className='d-block d-sm-block d-md-none'>
        <div className='d-flex justify-content-center'>
          <Button
            style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
            size='lg'
            variant='primary'
            type='submit'
            className='px-5 m-0 mt-3 mb-3'
            onClick={() => setFormLevel(stepperLevel.PAYMENT)}
          >
            NEXT
          </Button>
        </div>
      </div>
    </Container>
  )
}

function AddressComponent() {
  return (
    <Col xs={12} md={6}>
      <div
        style={{
          borderStyle: 'solid',
          borderColor: '#cccccc', //#E3DED5
          borderWidth: '1px',
        }}
        className='existing-address-style p-md-4'
      >
        <h6>{shippingObject.firstname + ' ' + shippingObject.lastname}</h6>
        <h6>{shippingObject.adress}</h6>
        <h6>{shippingObject.city + ' ' + shippingObject.zipCode}</h6>
        <h6>{shippingObject.state}</h6>
        <div style={{ height: '5px' }} />
        <span style={{ color: '#6B584C' }}>Remove</span>
      </div>
    </Col>
  )
}

/* <div style={{backgroundColor:'green', padding:0, margin:0}}>

<Row classname='p-0 m-0'>

  <Col xs={12} md={5} >
    <div style={{backgroundColor:'yellow',}}>
      <h6>{shippingObject.firstname + ' ' + shippingObject.lastname}</h6>
    </div>
  </Col>

  <Col xs={0} md={2} className='p-0 m-0'>

  </Col>

  <Col xs={12} md={5}>
    <div style={{
        padding: '7px',
        borderStyle: 'solid',
        borderColor: '#cccccc', //#E3DED5
        borderWidth: '1px',
        marginTop: '10px',
        marginBottom: '10px',
        height:'197px',
        // width:'293px'
    }}>
    <div className='p-xs-1 p-xs-5 m-md-5'>
      <div className='p-xs-1 p-xs-5 m-md-5'>
        <div className='m-md-5'>
          <h1>+</h1>
          <h6>Add Address</h6>
        </div>
      </div>
    </div>
    </div>
  </Col>
  <Col xs={4} md={8} className='p-0 m-0'></Col>
  <Col xs={4} md={4}>
    <div
        className='d-none d-sm-none d-md-block'
        // style={{ paddingRight: '1rem' }}
      >
        <div className='d-flex justify-content-end'>
          
          <Button
            style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
            size='lg'
            variant='primary'
            type='submit'
            className='px-5 me-3 mt-3 mb-3'
            onClick={()=>setFormLevel(stepperLevel.PAYMENT)}
          >
            Next
          </Button>
        </div>
      </div>

  </Col>
  <Col xs={4} md={0} className='p-0 m-0'></Col>
</Row>

<div className='d-block d-sm-block d-md-none'>
    <div className='d-flex justify-content-center'>
      <Button
        style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
        size='lg'
        variant='primary'
        type='submit'
        className='px-5 m-0 mt-3 mb-3'
        onClick={()=>setFormLevel(stepperLevel.PAYMENT)}
      >
        NEXT
      </Button>
    </div>
  </div>

</div> */

function NewAddressForm({ setFormLevel }) {
  const [shippingObjState, setShippingObjState] = useState(shippingObject)

  const [errorFields, setErrorFields] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  function handelInputeChange(event) {
    setShippingObjState({ [event.target.name]: event.target.value })
    shippingObject[event.target.name] = event.target.value
  }

  function onShippingFormSubmit(e) {
    e.preventDefault()

    let isValidated = true
    let updatedList = [false, false, false, false, false, false, false]

    if (
      shippingObject.firstname === null ||
      shippingObject.firstname.trim() === ''
    ) {
      updatedList[0] = true
      isValidated = false
    }
    if (
      shippingObject.lastname === null ||
      shippingObject.lastname.trim() === ''
    ) {
      updatedList[1] = true
      isValidated = false
    }
    if (shippingObject.adress === null || shippingObject.adress.trim() === '') {
      updatedList[2] = true
      isValidated = false
    }
    if (
      shippingObject.aptFloorSuit === null ||
      shippingObject.aptFloorSuit.trim() === ''
    ) {
      updatedList[3] = true
      isValidated = false
    }
    if (shippingObject.city === null || shippingObject.city.trim() === '') {
      updatedList[4] = true
      isValidated = false
    }
    if (shippingObject.state === null || shippingObject.state.trim() === '') {
      updatedList[5] = true
      isValidated = false
    }
    if (
      shippingObject.zipCode === null ||
      shippingObject.zipCode.trim() === ''
    ) {
      updatedList[6] = true
      isValidated = false
    }

    if (isValidated) {
      setFormLevel(stepperLevel.PAYMENT)
    } else {
      setErrorFields(updatedList)
    }
    return (
      <Form className='f-f-m'>
          <Row className='m-0 p-0 f-f-l'>
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
                  className={'d-block d-sm-none ' + (errorFields[0] ? 'error-form-style' : '')}
                  name='firstname'
                  value={shippingObjState.firstname}
                  onChange={handelInputeChange}
                />
                <Form.Control
                  size='lg'
                  type='text'
                  placeholder='First Name'
                  className={'d-none d-sm-block ' + (errorFields[0] ? 'error-form-style' : '')}
                  style={{ padding: 25, fontSize: 16 }}
                  name='firstname'
                  value={shippingObject.firstname}
                  onChange={handelInputeChange}
                  // value={shippingObjState.firstname}
                  // onChange={(e) => {
                  //   shippingObjState.firstname = e.target.value
                  //   shippingObject.firstname = e.target.value
                  //   console.log('First Name: '+shippingObject.firstname)
                  // }}
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
                className={'d-block d-sm-none ' + (errorFields[1] ? 'error-form-style' : '')}
                name='lastname'
                value={shippingObject.lastname}
                onChange={handelInputeChange}
              />
              <Form.Control
                size='lg'
                type='text'
                placeholder='Last Name' 
                className={'d-none d-sm-block ' + (errorFields[1] ? 'error-form-style' : '')}
                style={{ padding: 25, fontSize: 16 }}
                name='lastname'
                value={shippingObject.lastname}
                onChange={handelInputeChange}
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
              className={
                'd-block d-sm-none ' +
                (errorFields[2] ? 'error-form-style' : '')
              }
              name='adress'
              value={shippingObject.adress}
              onChange={handelInputeChange}
            />
            <Form.Control
              size='lg'
              type='text'
              placeholder='Address'
              className={
                'd-none d-sm-block ' +
                (errorFields[2] ? 'error-form-style' : '')
              }
              style={{ padding: 25, fontSize: 16 }}
              name='adress'
              value={shippingObject.adress}
              onChange={handelInputeChange}
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
            className={
              'd-block d-sm-none ' + (errorFields[3] ? 'error-form-style' : '')
            }
            name='aptFloorSuit'
            value={shippingObject.aptFloorSuit}
            onChange={handelInputeChange}
          />
          <Form.Control
            size='lg'
            type='text'
            placeholder='Apt / Floor / Suite'
            className={
              'd-none d-sm-block ' + (errorFields[3] ? 'error-form-style' : '')
            }
            style={{ padding: 25, fontSize: 16 }}
            name='aptFloorSuit'
            value={shippingObject.aptFloorSuit}
            onChange={handelInputeChange}
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
              className={
                'd-block d-sm-none ' +
                (errorFields[4] ? 'error-form-style' : '')
              }
              name='city'
              value={shippingObject.city}
              onChange={handelInputeChange}
            />
            <Form.Control
              size='lg'
              type='text'
              placeholder='City'
              className={
                'd-none d-sm-block ' +
                (errorFields[4] ? 'error-form-style' : '')
              }
              style={{ padding: 25, fontSize: 16 }}
              name='city'
              value={shippingObject.city}
              onChange={handelInputeChange}
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
            className={
              'd-block d-sm-none ' + (errorFields[5] ? 'error-form-style' : '')
            }
            name='state'
            value={shippingObject.state}
            onChange={handelInputeChange}
          />
          <Form.Control
            size='lg'
            type='text'
            placeholder='State'
            className={
              'd-none d-sm-block ' + (errorFields[5] ? 'error-form-style' : '')
            }
            style={{ padding: 25, fontSize: 16 }}
            name='state'
            value={shippingObject.state}
            onChange={handelInputeChange}
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
              className={
                'd-block d-sm-none ' +
                (errorFields[6] ? 'error-form-style' : '')
              }
              name='zipCode'
              value={shippingObject.zipCode}
              onChange={handelInputeChange}
            />
            <Form.Control
              size='lg'
              type='text'
              placeholder='Zip Code'
              className={
                'd-none d-sm-block ' +
                (errorFields[6] ? 'error-form-style' : '')
              }
              style={{ padding: 25, fontSize: 16 }}
              name='zipCode'
              value={shippingObject.zipCode}
              onChange={handelInputeChange}
            />
          </div>
        </Col>
        <Col xs={4} md={8} className='p-0 m-0'></Col>
        <Col xs={4} md={4} className='p-0 m-0'>
          <div
            className='d-none d-sm-none d-md-block'
            // style={{ paddingRight: '1rem' }}
          >
            <div className='d-flex justify-content-end'>
              <Button
                style={{
                  backgroundColor: '#6B584C',
                  border: 0,
                  borderRadius: 0,
                  width: '100%',
                  marginLeft: '7px',
                }}
                size='lg'
                variant='primary'
                type='submit'
                className='px-5 me-3 mt-3 mb-3'
                onClick={onShippingFormSubmit}
              >
                Next
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={4} md={0} className='p-0 m-0'></Col>
      </Row>

      {/* <div
                className='d-none d-sm-none d-md-block'
                // style={{ paddingRight: '1rem' }}
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
              </div> */}

      <div className='d-block d-sm-block d-md-none'>
        <div className='d-flex justify-content-center'>
          <Button
            style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
            size='lg'
            variant='primary'
            type='submit'
            className='px-5 m-0 mt-3 mb-3'
            onClick={onShippingFormSubmit}
          >
            NEXT
          </Button>
        </div>
      </div>
    </Form>
  )
}