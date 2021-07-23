import React , {useState, useContext} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './style.css'
import '../../screens/Chekout/style.css'
import stepperLevel from './StepperContants'
import { paymentObject } from './FormObject'
import { CashOnDeliveryContext } from '../../screens/Chekout/Checkout'


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

  const [ , setpaymentObjectState ] = useState(paymentObject); //paymentObjectState
  const [ errorFields, setErrorFields ] = useState([false,false]); 

  const cashOnDeliveryContext = useContext(CashOnDeliveryContext);


  function handelInputeChange(event){

    if(event.target.type === 'checkbox'){
      // paymentObjectState.cardNumber = '';
      // paymentObjectState.monthYearCVC = '';
      paymentObject.cardNumber = '';
      paymentObject.monthYearCVC = '';
      
      if(event.target.name === 'isCOD'){
        paymentObject.isNetbankingUPI = false;
      }
      if(event.target.name === 'isNetbankingUPI'){
        paymentObject.isCOD = false;
      }


    }

    if(event.target.type === 'text'){
      paymentObject.isNetbankingUPI = false;
      paymentObject.isCOD = false;

      cashOnDeliveryContext.toggleCodState(paymentObject.isCOD,'text');
    }

    setpaymentObjectState( {[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value} ) 
    
    paymentObject[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    if(event.target.type === 'checkbox') cashOnDeliveryContext.toggleCodState(paymentObject.isCOD,'check');

    // console.log({[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value} )
    // console.log(paymentObject)
  }


  function onPaymentFormSubmit(e){
    e.preventDefault()
    let isValidated = true;
    let updatedList = [false,false];

    if(!paymentObject.isCOD){
      
      if(
          (paymentObject.cardNumber === null || paymentObject.cardNumber.trim() === '' || paymentObject.cardNumber.length !== 16) 
          && 
          (!paymentObject.isNetbankingUPI)
      ){
        updatedList[0] = true;
        isValidated = false;
      }
      if(
        (paymentObject.monthYearCVC === null || paymentObject.monthYearCVC.trim() === '')
        &&
        (!paymentObject.isNetbankingUPI)
        // (paymentObject.netbankingUPI === null || paymentObject.netbankingUPI.trim() === '')

      ){
        updatedList[1] = true;
        isValidated = false;
      }
    
      if(isValidated){
        console.log('Validated'+ stepperLevel.REVIEW)
        setFormLevel(stepperLevel.REVIEW)
      }else{
        setErrorFields(updatedList)
      } 

    }else{
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
      <Form className='f-f-l'>
        <Row className='m-0 p-0'>
          
          <CardNumberComp paymentObject={paymentObject} handelInputeChange={handelInputeChange} errorFields={errorFields}/>

          <MounthYearCvcComp paymentObject={paymentObject} handelInputeChange={handelInputeChange} errorFields={errorFields}/>

          <Col xs={12} className='p-0 m-0'>
            <div style={hrStyle.row}>
              <div style={hrStyle.block}><hr/></div>
              <div style={hrStyle.blockCenter}><h6 style={{margin:0, marginTop:6}}>OR</h6></div>
              <div style={hrStyle.block}><hr/></div>
            </div>
          </Col>

          <NetbankingUpiComp paymentObject={paymentObject} handelInputeChange={handelInputeChange} />

          <CodComp paymentObject={paymentObject} handelInputeChange={handelInputeChange} errorFields={errorFields}/>
          
          <Col xs={4} md={8} className='p-0 m-0'></Col>

          <LargeScreenButtonComp onPaymentFormSubmit={onPaymentFormSubmit} />

          <Col xs={4} md={0} className='p-0 m-0'></Col>

        </Row>

        <SmallScreenButtonComp onPaymentFormSubmit={onPaymentFormSubmit} />

      </Form>
    </motion.div>
  )
}


function CardNumberComp({paymentObject,handelInputeChange,errorFields}){
  return(
    <Col
      xs={6}
      sm={6}
      md={6}
      // className='m-0 mb-1 pe-1'
      className='p-0 m-0'
    >
      <div style={{ marginRight: 7 }}>
        <Form.Group className='mb-1' controlId='formBasicCheckbox'>
          <Form.Control size='md' type='text' placeholder='Card Number' 
            // disabled
            style={{ padding: 15, fontSize: 16 }}
            name='cardNumber'
            value={paymentObject.cardNumber}
            onChange={handelInputeChange}
            className={'d-block d-sm-none ' + (errorFields[0] ? 'error-form-style' : '')}
          />
          <Form.Control size='lg' type='text' placeholder='Card Number' 
            // disabled
            style={{ padding: 25, fontSize: 16 }}
            name='cardNumber'
            value={paymentObject.cardNumber}
            onChange={handelInputeChange}
            className={'d-none d-sm-block ' + (errorFields[0] ? 'error-form-style' : '')}
          />
          {/* <Form.Check
            style={{ color: '#787878', fontSize: '14px'}}
            disabled
            type='checkbox'
            label='Check me out'
            name='isCheckMeOut'
            onChange={handelInputeChange}
            checked={paymentObject.isCheckMeOut}
          /> */}
        </Form.Group>
      </div>

    </Col>
  );
}


function MounthYearCvcComp({paymentObject,handelInputeChange,errorFields}){
  return(
    <Col
      xs={6}
      sm={6}
      md={6}
      // className='m-0 mb-1 pe-1'
      className='p-0 m-0'
    >
      <Form.Control 
        // disabled
        size='md' 
        type='text' 
        placeholder='MM/YYYY' 
        style={{ padding: 15, fontSize: 16 }} 
        name='monthYearCVC'
        value={paymentObject.monthYearCVC}
        onChange={handelInputeChange}
        className={'d-block d-sm-none ' + (errorFields[1] ? 'error-form-style' : '')}
      />
      <Form.Control 
        // disabled
        size='lg' 
        type='text' 
        placeholder='MM/YYYY' 
        style={{ padding: 25, fontSize: 16 }} 
        name='monthYearCVC'
        value={paymentObject.monthYearCVC}
        onChange={handelInputeChange}
        className={'d-none d-sm-block ' + (errorFields[1] ? 'error-form-style' : '')}
      />
    </Col>
  );
}


// function NetbankingUpiComp({paymentObject,handelInputeChange,errorFields}){
//   return(
//     <Col sm={12} md={12} className='m-0 mb-1 p-0 pe-1'>
//       <Form.Control
//         size='md'
//         type='text'
//         placeholder='NET BANKING / UPI'
//         style={{ padding: 15, fontSize: 16 }}
//         name='netbankingUPI'
//         value={paymentObject.netbankingUPI}
//         onChange={handelInputeChange}
//         className={'d-block d-sm-none ' + (errorFields[0] ? 'error-form-style' : '')}
//       />
//       <Form.Control
//         size='lg'
//         type='text'
//         placeholder='NET BANKING / UPI'
//         style={{ padding: 25, fontSize: 16 }}
//         name='netbankingUPI'
//         value={paymentObject.netbankingUPI}
//         onChange={handelInputeChange}
//         className={'d-none d-sm-block ' + (errorFields[0] ? 'error-form-style' : '')}
//       />
//     </Col>
//   );
// }

function NetbankingUpiComp({paymentObject,handelInputeChange}){
  return(
    <Col sm={12} md={12} className='m-0 mb-1 p-0 pe-1'>
      <div
        style={{
          padding: '7px',
        }}
        className={'d-block d-sm-none ' + (paymentObject.isNetbankingUPI ? 'check-box-checked' : 'check-box-unchecked')}
      >
        <Form.Check
          // disabled
          style={{ color: '#4A4A4A', fontSize: '16px' }}
          type='checkbox'
          label='Net Banking UPI'
          name='isNetbankingUPI'
          onChange={handelInputeChange}
          checked={paymentObject.isNetbankingUPI}
        />
      </div>
      <div
        className={'d-none d-sm-block ' + (paymentObject.isNetbankingUPI ? 'check-box-checked' : 'check-box-unchecked')}
      >
        <Form.Check
          // disabled
          style={{ color: '#4A4A4A', fontSize: '16px' }}
          type='checkbox'
          label='Net Banking UPI'
          name='isNetbankingUPI'
          onChange={handelInputeChange}
          checked={paymentObject.isNetbankingUPI}
        />
      </div>
    </Col>
  );
}


function CodComp({paymentObject,handelInputeChange,errorFields}){
  return(
    <Col sm={12} md={12} className='m-0 mb-1 p-0 pe-1'>
      <div style={{height:'60px'}} className='d-block d-sm-none'>
        <div
          style={{
            padding: '7px',
          }}
          className={'d-block d-sm-none ' + (paymentObject.isCOD ? 'check-box-checked' : 'check-box-unchecked')}
        >
          <Form.Check
            style={{ color: '#4A4A4A', fontSize: '16px' }}
            type='checkbox'
            label='COD'
            name='isCOD'
            onChange={handelInputeChange}
            checked={paymentObject.isCOD}
          />
        </div>
          {
            paymentObject.isCOD 
            ? <h6 className='f-f'
                style={{fontSize:'12px'}}
            
            >Additional charges will apply on COD </h6>
            : null
          }
      </div>

      <div style={{height:'45px', borderColor:'red', borderWidth:'2px', marginBottom:'25px'}} className='d-none d-sm-block'>
      
        <div
          // style={{
          //   padding: '14px',
          //   paddingLeft: '18px',
          //   borderStyle: 'solid',
          //   borderColor: '#cccccc', //#E3DED5
          //   borderWidth: '1px',
          //   marginTop: '10px',
          //   marginBottom: '10px',
          // }}
          className={'d-none d-sm-block ' + (paymentObject.isCOD ? 'check-box-checked' : 'check-box-unchecked')}
        >
          <Form.Check
            style={{ color: '#4A4A4A', fontSize: '16px' }}
            type='checkbox'
            label='COD'
            name='isCOD'
            onChange={handelInputeChange}
            checked={paymentObject.isCOD}
          />
        </div>
        {
          paymentObject.isCOD 
          ? <h6 className='f-f'
              style={{fontSize:'12px'}}
          
          >Additional charges will apply on COD </h6>
          : null
        }

      </div>
    </Col>
  );
}

function LargeScreenButtonComp({onPaymentFormSubmit}){
  return(
    <Col xs={4} md={4} className='p-0 m-0 f-f-m'>
      <div
          className='d-none d-sm-none d-md-block'
        >
          <div className='d-flex justify-content-end'>
            
            <Button
              style={{ backgroundColor: '#977257', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
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
  );
}


function SmallScreenButtonComp({onPaymentFormSubmit}){
  return(
    <div className='d-block d-sm-block d-md-none f-f-m'>
      <div className='d-flex justify-content-center '>
        <Button
          style={{ backgroundColor: '#977257', border: 0, borderRadius: 0 }}
          size='md'
          variant='primary'
          type='submit'
          className='px-5 me-3 mt-3 mb-3'
          onClick={onPaymentFormSubmit}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}
