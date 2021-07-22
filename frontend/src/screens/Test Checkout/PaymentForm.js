import React, { useContext, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { CheckOutFormContext } from './CheckOutIndex'

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


export default function PaymentFormT() {

    const checkOutFormObj = useContext(CheckOutFormContext);

    const [ changePaymentFormState , setChangePaymentFormState] = useState(checkOutFormObj.formObject)

    console.log('------Payment Form Rendered-----');
    

    function handelInputeChange(event){

        if(event.target.type === 'checkbox'){
          
            checkOutFormObj.formObject.cardNumber = '';
            checkOutFormObj.formObject.month = '';
            checkOutFormObj.formObject.year = '';
            
            if(event.target.name === 'isCodChecked'){
                checkOutFormObj.formObject.isNetbankingUpiChecked = false;
                checkOutFormObj.formObject.isCodChecked = true;
            }
            if(event.target.name === 'isNetbankingUpiChecked'){
                checkOutFormObj.formObject.isCodChecked = false;
                checkOutFormObj.formObject.isNetbankingUpiChecked = true;
            }
      
        }
      

        if(event.target.type === 'text'){

            if(checkOutFormObj.formObject.isNetbankingUpiChecked || checkOutFormObj.formObject.isCodChecked){

                checkOutFormObj.formObject.isNetbankingUpiChecked = false;
                checkOutFormObj.formObject.isCodChecked = false;

                let checkBoxesObj = { ...checkOutFormObj.formObject };
                checkBoxesObj.isNetbankingUpiChecked = false;
                checkBoxesObj.isCodChecked = false;
                checkOutFormObj.setFormObject(checkBoxesObj)
            }

        }


        let newObj = { ...checkOutFormObj.formObject };

        newObj[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        

        checkOutFormObj.formObject[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    
        // console.log(checkOutFormObj.formObject.firstName + ' : ' + event.target.value+'----')
        setChangePaymentFormState(newObj);
    }


    function onSubmitPaymentForm(e){
        e.preventDefault();
        checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel: 2})
    }

    return (
        <>

            <div style={{minHeight:'260px'}}>

                <Row className='p-0 m-0'>

                    <CardNumberField changePaymentFormState={changePaymentFormState} handelInputeChange={handelInputeChange}/>

                    <MonthField changePaymentFormState={changePaymentFormState} handelInputeChange={handelInputeChange}/>

                    <YearField changePaymentFormState={changePaymentFormState} handelInputeChange={handelInputeChange}/>

                    <DummyHeight />

                    <Col xs={12} className='p-0 m-0'>
                        <div style={hrStyle.row}>
                        <div style={hrStyle.block}><hr/></div>
                        <div style={hrStyle.blockCenter}><h6 style={{margin:0, marginTop:6}}>OR</h6></div>
                        <div style={hrStyle.block}><hr/></div>
                        </div>
                    </Col>
                    
                    <DummyHeight small={true}/>

                    <NetBankingField changePaymentFormState={changePaymentFormState} handelInputeChange={handelInputeChange}/>

                    <DummyHeight small={true}/>

                    <CodField changePaymentFormState={changePaymentFormState} handelInputeChange={handelInputeChange}/>

                </Row>
                
            </div>

            <div className='d-none d-sm-none d-md-block'>
                <Row className='p-0 m-0'>
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0'>
                        <Button
                            style={{ backgroundColor: '#977257', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                            size='lg'
                            variant='primary'
                            type='submit'
                            className='p-2 m-0'
                            onClick={onSubmitPaymentForm}
                        >
                            Next
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className='d-block d-sm-block d-md-none f-f-m'>
                <div className='d-flex justify-content-center '>
                    <Button
                        style={{ backgroundColor: '#977257', border: 0, borderRadius: 0 }}
                        size='md'
                        variant='primary'
                        type='submit'
                        className='px-5 me-3 mt-3 mb-3'
                        onClick={onSubmitPaymentForm}
                    >
                        NEXT
                    </Button>
                </div>
            </div>

            
        </>
    )

    function DummyHeight({small}) {
        return(
            <Col xs={12}>
                <div style={{height: small ? '0' : '10px'}}/>
            </Col>
        )
    }
}


function CardNumberField({changePaymentFormState,handelInputeChange}) {
    return(
        <>
            <Col xs={6} lg={6} className='p-0 m-0'>

                <div className='left-side-field-style'>

                    <Form.Control
                        size='sm'
                        type='text'
                        placeholder='Card Number'
                        name='cardNumber'
                        value={changePaymentFormState.cardNumber}
                        onChange={handelInputeChange}
                        className='d-block d-sm-none '
                    />

                    <Form.Control
                        size='lg'
                        type='text'
                        placeholder='Card Number'
                        name='cardNumber'
                        value={changePaymentFormState.cardNumber}
                        onChange={handelInputeChange}
                        className='d-none d-sm-block '
                    />

                    {/* <Form.Check
                        style={{ color: '#787878', fontSize: '14px'}}
                        disabled
                        type='checkbox'
                        label='Save Card'
                        name='isCheckMeOut'
                        // onChange={handelInputeChange}
                        // checked={paymentObject.isCheckMeOut}
                    /> */}
                    
                </div>
                    
            </Col>
            
        </>
    )
}


function MonthField({changePaymentFormState,handelInputeChange}){
    return(
        <Col xs={3} lg={3} className='p-0 m-0'>
                

            <Form.Control
                size='sm'
                type='text'
                placeholder='Month'
                name='month'
                value={changePaymentFormState.month}
                onChange={handelInputeChange}
                className='d-block d-sm-none '
            />

            <Form.Control
                size='lg'
                type='text'
                placeholder='Month'
                name='month'
                value={changePaymentFormState.month}
                onChange={handelInputeChange}
                className='d-none d-sm-block '
            />


        </Col>
    );
}

function YearField({changePaymentFormState,handelInputeChange}){
    return(
        <Col xs={3} lg={3} className='p-0 m-0'>
                
            <div className='right-side-field-style'>

                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Year'
                    name='year'
                    value={changePaymentFormState.year}
                    onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />

                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Year'
                    name='year'
                    value={changePaymentFormState.year}
                    onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />

            </div>

        </Col>
    );
}

function NetBankingField({changePaymentFormState,handelInputeChange}){
    return(
      <Col sm={12} md={12} className='m-0 p-0'>
        <div
          style={{
            padding: '7px',
          }}
          className='d-block d-sm-none check-box-unchecked'
        //   className={'d-block d-sm-none ' + (paymentObject.isNetbankingUPI ? 'check-box-checked' : 'check-box-unchecked')}
        >
          <Form.Check
            style={{ color: '#4A4A4A', fontSize: '16px' }}
            type='checkbox'
            label='Net Banking UPI'
            name='isNetbankingUpiChecked'
            onChange={handelInputeChange}
            checked={changePaymentFormState.isNetbankingUpiChecked}
          />
        </div>
        <div
        //   className={'d-none d-sm-block ' + (paymentObject.isNetbankingUPI ? 'check-box-checked' : 'check-box-unchecked')}
          className='d-none d-sm-block check-box-unchecked'
        >
          <Form.Check
            style={{ color: '#4A4A4A', fontSize: '16px' }}
            type='checkbox'
            label='Net Banking UPI'
            name='isNetbankingUpiChecked'
            onChange={handelInputeChange}
            checked={changePaymentFormState.isNetbankingUpiChecked}
          />
        </div>
      </Col>
    );
}

function CodField({changePaymentFormState,handelInputeChange}){
    return(
      <Col sm={12} md={12} className='m-0 p-0'>
        <div
          style={{
            padding: '7px',
          }}
          className='d-block d-sm-none check-box-unchecked'
        //   className={'d-block d-sm-none ' + (paymentObject.isNetbankingUPI ? 'check-box-checked' : 'check-box-unchecked')}
        >
          <Form.Check
            style={{ color: '#4A4A4A', fontSize: '16px' }}
            type='checkbox'
            label='COD'
            name='isCodChecked'
            onChange={handelInputeChange}
            checked={changePaymentFormState.isCodChecked}
          />
        </div>
        <div
        //   className={'d-none d-sm-block ' + (paymentObject.isNetbankingUPI ? 'check-box-checked' : 'check-box-unchecked')}
          className='d-none d-sm-block check-box-unchecked'
        >
          <Form.Check
            style={{ color: '#4A4A4A', fontSize: '16px' }}
            type='checkbox'
            label='COD'
            name='isCodChecked'
            onChange={handelInputeChange}
            checked={changePaymentFormState.isCodChecked}
          />
        </div>
      </Col>
    );
}



