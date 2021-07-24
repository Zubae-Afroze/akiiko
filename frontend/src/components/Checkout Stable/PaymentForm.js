import React, { useContext, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { CheckOutFormContext } from '../../screens/Stable Checkout Screen/CheckOutIndex'
import '../../screens/Stable Checkout Screen/CheckOutStlye.css'


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

    const [ errorFields, setErrorFields ] = useState([false,false,false,false,false]);

    console.log('------Payment Form Rendered-----');
    

    function handelInputeChange(event){

        if(event.target.type === 'checkbox'){
          
            checkOutFormObj.formObject.cardNumber = '';
            checkOutFormObj.formObject.month = '';
            checkOutFormObj.formObject.year = '';
            
            if(event.target.name === 'isCodChecked'){
                checkOutFormObj.formObject.isNetbankingUpiChecked = false;
                checkOutFormObj.formObject.isCodChecked = event.target.checked;

                let checkBoxesObj = { ...checkOutFormObj.formObject };
                checkOutFormObj.setFormObject(checkBoxesObj)
            }
            if(event.target.name === 'isNetbankingUpiChecked'){
                checkOutFormObj.formObject.isNetbankingUpiChecked = event.target.checked;
                checkOutFormObj.formObject.isCodChecked = false;

                let checkBoxesObj = { ...checkOutFormObj.formObject };
                checkOutFormObj.setFormObject(checkBoxesObj)
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
        
        let isValidated = true;
        let updatedList = [false,false,false,false,false];

        if(!checkOutFormObj.formObject.isNetbankingUpiChecked && !checkOutFormObj.formObject.isCodChecked){

            if(checkOutFormObj.formObject.cardNumber === null || checkOutFormObj.formObject.cardNumber.trim() === '' || checkOutFormObj.formObject.cardNumber.length !== 16){
                updatedList[0] = true;
                isValidated = false;
            }
            if(checkOutFormObj.formObject.month === null || checkOutFormObj.formObject.month.trim() === ''){
                updatedList[1] = true;
                isValidated = false;
            }
            if(checkOutFormObj.formObject.year === null || checkOutFormObj.formObject.year.trim() === ''){
                updatedList[2] = true;
                isValidated = false;
            }

        }
            


        if(isValidated){
            checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel: 2})
        }else{
            setErrorFields(updatedList)
        }


    }

    return (
        <>

                <div className='forms-height' 
                        // style={{minHeight:'340px'}}
                    >

                <Row className='p-0 m-0'>

                    <CardNumberField changePaymentFormState={changePaymentFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

                    <MonthField changePaymentFormState={changePaymentFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

                    <YearField changePaymentFormState={changePaymentFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

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
                            size='lg'
                            variant='primary'
                            type='submit'
                            className='p-2 m-0 Button-on-click'
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
                        size='md'
                        variant='primary'
                        type='submit'
                        className='px-5 me-3 mt-3 mb-3 Button-on-click'
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


function CardNumberField({changePaymentFormState,handelInputeChange,errorFields}) {
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
                        className={'d-block d-sm-none '+ (errorFields[0] ? 'error-form-style' : '')}
                    />

                    <Form.Control
                        size='lg'
                        type='text'
                        placeholder='Card Number'
                        name='cardNumber'
                        value={changePaymentFormState.cardNumber}
                        onChange={handelInputeChange}
                        className={'d-none d-sm-block '+ (errorFields[0] ? 'error-form-style' : '')}
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


function MonthField({changePaymentFormState,handelInputeChange,errorFields}){
    return(
        <Col xs={3} lg={3} className='p-0 m-0'>
                

            <Form.Control
                size='sm'
                type='text'
                placeholder='Month'
                name='month'
                value={changePaymentFormState.month}
                onChange={handelInputeChange}
                className={'d-block d-sm-none '+ (errorFields[1] ? 'error-form-style' : '')}
            />

            <Form.Control
                size='lg'
                type='text'
                placeholder='Month'
                name='month'
                value={changePaymentFormState.month}
                onChange={handelInputeChange}
                className={'d-none d-sm-block '+ (errorFields[1] ? 'error-form-style' : '')}
            />


        </Col>
    );
}

function YearField({changePaymentFormState,handelInputeChange,errorFields}){
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
                    className={'d-block d-sm-none '+ (errorFields[2] ? 'error-form-style' : '')}
                />

                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Year'
                    name='year'
                    value={changePaymentFormState.year}
                    onChange={handelInputeChange}
                    className={'d-none d-sm-block '+ (errorFields[2] ? 'error-form-style' : '')}
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
          className={'d-block d-sm-none ' + (changePaymentFormState.isNetbankingUpiChecked ? 'check-box-checked' : 'check-box-unchecked')}
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
          className={'d-none d-sm-block ' + (changePaymentFormState.isNetbankingUpiChecked ? 'check-box-checked' : 'check-box-unchecked')}
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
          className={'d-block d-sm-none '+ (changePaymentFormState.isCodChecked ? 'check-box-checked' : 'check-box-unchecked')}
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
          className={'d-none d-sm-block '+ (changePaymentFormState.isCodChecked ? 'check-box-checked' : 'check-box-unchecked')}
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
          {
            changePaymentFormState.isCodChecked
            ? <h6 className='f-f'
                style={{fontSize:'12px'}}
            
            >Additional charges will apply on COD </h6>
            : null
          }
      </Col>
    );
}



