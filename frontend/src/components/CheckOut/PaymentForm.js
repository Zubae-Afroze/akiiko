import React , {useState} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../../screens/Chekout/style.css'
import stepperLevel from './StepperContants'
import { paymentObject } from './FormObject'


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

const hrStyle = {
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 0,
    margine: 0,
  },
  block: {
    textAlign: 'center',
    width: '100%',
    padding: 0,
    margine: 0,
  },

  blockCenter: {
    textAlign: 'center',
    width: '25%',
    padding: 0,
    margine: 0,
  }
}
export default function PaymentForm({ setFormLevel,showToast }) {

  const [ paymentObjectState, setpaymentObjectState ] = useState(paymentObject);

  function handelInputeChange(event){
    setpaymentObjectState( {[event.target.name]: event.target.value} ) 
    
    paymentObject[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  }


  function onPaymentFormSubmit(e){
    e.preventDefault()
    let isValidated = true;
    if(
        (paymentObject.cardNumber === null || paymentObject.cardNumber.trim() === '') 
        && 
        (paymentObject.netbankingUPI === null || paymentObject.netbankingUPI.trim() === '')
    ){
      showToast('Plaese Enter Your Card Number');
      isValidated = false;
    }
    if(
      (paymentObject.monthYearCVC === null || paymentObject.monthYearCVC.trim() === '')
      &&
      (paymentObject.netbankingUPI === null || paymentObject.netbankingUPI.trim() === '')
    ){
      showToast('Plaese Enter the MM/ YY/ CVC');
      isValidated = false;
    }
  
    if(isValidated){
      console.log('Validated'+ stepperLevel.REVIEW)
      setFormLevel(stepperLevel.REVIEW)
    } 
  }


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
                <Form.Control size='lg' type='text' placeholder='Card Number' 
                  style={{ padding: 25, fontSize: 16 }}
                  name='cardNumber'
                  value={paymentObjectState.cardNumber}
                  onChange={handelInputeChange}
                />
                <Form.Check
                  style={{ color: '#787878', fontSize: '14px' }}
                  type='checkbox'
                  label='Check me out'
                  name='isCheckMeOut'
                  onChange={handelInputeChange}
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
            <Form.Control 
              size='lg' 
              type='text' 
              placeholder='MM/ YY/ CVC' 
              style={{ padding: 25, fontSize: 16 }} 
              name='monthYearCVC'
              value={paymentObjectState.monthYearCVC}
              onChange={handelInputeChange}
            />
          </Col>

          {/* <Col xs={5} md={5} className='p-0 mt-1 ms-0 me-0 mb-2'>
            <hr />
          </Col>
          <Col
            xs={1}
            md={1}
            className='pt-2 mt-1 ms-0 me-0 mb-2 d-flex justify-content-center'
          >
            <h6>OR</h6>
          </Col>
          <Col xs={6} md={5} className='p-0 mt-1 ms-0 me-0 mb-2'>
            <hr />
          </Col> */}

          <Col xs={12} className='p-0 m-0'>
            <div style={hrStyle.row}>
              <div style={hrStyle.block}><hr/></div>
              <div style={hrStyle.blockCenter}><h6 style={{margin:0, marginTop:6}}>OR</h6></div>
              <div style={hrStyle.block}><hr/></div>
            </div>
          </Col>

          <Col sm={12} md={12} className='m-0 mb-1 p-0 pe-1'>
            <Form.Control
              size='lg'
              type='text'
              placeholder='NET BANKING / UPI'
              style={{ padding: 25, fontSize: 16 }}
              name='netbankingUPI'
              value={paymentObjectState.netbankingUPI}
              onChange={handelInputeChange}
            />
          </Col>
          <Col sm={12} md={12} className='m-0 mb-1 p-0 pe-1'>
            <div
              style={{
                padding: '14px',
                paddingLeft: '18px',
                borderStyle: 'solid',
                borderColor: '#cccccc', //#E3DED5
                borderWidth: '1px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              <Form.Check
                style={{ color: '#4A4A4A', fontSize: '16px' }}
                type='checkbox'
                label='COD'
                name='isCOD'
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
                    style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                    size='lg'
                    variant='primary'
                    type='submit'
                    className='px-5 me-3 mt-3 mb-3'
                    onClick={onPaymentFormSubmit}
                  >
                    Next
                  </Button>
                </div>
              </div>

          </Col>
          <Col xs={4} md={0} className='p-0 m-0'></Col>
        </Row>

        {/* <div className='d-none d-sm-none d-md-block'>
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
        </div> */}

        <div className='d-block d-sm-block d-md-none'>
          <div className='d-flex justify-content-center '>
            <Button
              style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
              size='lg'
              variant='primary'
              type='submit'
              className='px-5 me-3 mt-3 mb-3'
              onClick={onPaymentFormSubmit}
            >
              NEXT
            </Button>
          </div>
        </div>
      </Form>
    </motion.div>
  )
}
