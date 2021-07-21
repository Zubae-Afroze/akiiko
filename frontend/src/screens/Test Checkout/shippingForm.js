import React, { useContext, useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { CheckOutFormContext } from './CheckOutIndex'

export default function ShippingFormT() {

    const checkOutFormObj = useContext(CheckOutFormContext);

    const [ changeShippingFormState , setChangeShippingFormState] = useState(checkOutFormObj.formObject)

    console.log('------Shipping Form Rendered-----');
    

    function handelInputeChange(event){

        // if(event.target.type === 'checkbox'){
          
        //   paymentObject.cardNumber = '';
        //   paymentObject.monthYearCVC = '';
          
        //   if(event.target.name === 'isCOD'){
        //     paymentObject.isNetbankingUPI = false;
        //   }
        //   if(event.target.name === 'isNetbankingUPI'){
        //     paymentObject.isCOD = false;
        //   }
    
    
        // }
    
        // if(event.target.type === 'text'){
        //   paymentObject.isNetbankingUPI = false;
        //   paymentObject.isCOD = false;
    
        //   cashOnDeliveryContext.toggleCodState(paymentObject.isCOD,'text');
        // }
    
        // setpaymentObjectState( {[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value} ) 

        let newObj = { ...checkOutFormObj.formObject };

        newObj[event.target.name] = event.target.value;
        

        checkOutFormObj.formObject[event.target.name] = event.target.value;
    
        // if(event.target.type === 'checkbox') cashOnDeliveryContext.toggleCodState(paymentObject.isCOD,'check');
    
        // console.log({[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value} )
        // console.log(checkOutFormObj.formObject.firstName + ' : ' + event.target.value+'----')
        setChangeShippingFormState(newObj);
    }

    return (
        <>
            <Row className='p-0 m-0'>

                <NameField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange}/>
                
                <DummyHeight />

                <AddressField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange}/>

                <PhoneNumberField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange}/>
                
                <DummyHeight />

                <CityComp changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange}/>

                <StateField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange}/>

                <DummyHeightVisibleOnlyOnXtraSmallScreen />

                <PinCodeField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange}/>

            </Row>

            <div>
                
            </div>

            
        </>
    )

    function DummyHeight() {
        return(
            <Col xs={12}>
                <div style={{height: '10px'}}/>
            </Col>
        )
    }


    function DummyHeightVisibleOnlyOnXtraSmallScreen() {
        return(
            <Col xs={12} className='d-block d-sm-none '>
                <div style={{height: '10px'}}/>
            </Col>
        )
    }
    

}

function NameField({changeShippingFormState,handelInputeChange}) {
    return(
        <>
            <Col xs={6} lg={6} className='p-0 m-0'>

                <div className='left-side-field-style'>

                    <Form.Control
                        size='sm'
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={changeShippingFormState.firstName}
                        onChange={handelInputeChange}
                        className='d-block d-sm-none '
                    />

                    <Form.Control
                        size='lg'
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={changeShippingFormState.firstName}
                        onChange={handelInputeChange}
                        className='d-none d-sm-block '
                    />
                    
                </div>
                    

                </Col>

                <Col xs={6} lg={6} className='p-0 m-0'>
                    
                    <div className='right-side-field-style'>

                        <Form.Control
                            size='sm'
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            value={changeShippingFormState.lastName}
                            onChange={handelInputeChange}
                            className='d-block d-sm-none '
                        />
    
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            value={changeShippingFormState.lastName}
                            onChange={handelInputeChange}
                            className='d-none d-sm-block '
                        />

                    </div>

                </Col>
        </>
    )
}


function AddressField({changeShippingFormState,handelInputeChange}) {
    return(
        <Col xs={6} lg={6} className='p-0 m-0'>
            
            <div className='left-side-field-style'>

                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Address'
                    name='address'
                    value={changeShippingFormState.address}
                    onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Address'
                    name='address'
                    value={changeShippingFormState.address}
                    onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />

            </div>

        </Col>
    )
}




function PhoneNumberField({changeShippingFormState,handelInputeChange}) {
    return(
        <Col xs={6} className='p-0 m-0'>
            
            <div className='right-side-field-style'>

                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Phone Number'
                    name='phoneNumber'
                    value={changeShippingFormState.phoneNumber}
                    onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Phone Number'
                    name='phoneNumber'
                    value={changeShippingFormState.phoneNumber}
                    onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />

            </div>

        </Col>
    )
}



function CityComp({changeShippingFormState,handelInputeChange}) {
    return(
        <Col xs={6} sm={4} className='p-0 m-0'>

            <div className='left-side-field-style'>

                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='City'
                    name='city'
                    value={changeShippingFormState.city}
                    onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='City'
                    name='city'
                    value={changeShippingFormState.city}
                    onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />

            </div>

        </Col>
    )
}



function StateField({changeShippingFormState,handelInputeChange}) {
    return(
        <Col xs={6} sm={4} className='p-0 m-0'>

            <div className='state-field-style'>

                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='State'
                    name='state'
                    value={changeShippingFormState.state}
                    onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='State'
                    name='state'
                    value={changeShippingFormState.state}
                    onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />

            </div>

        </Col>
    )
}




function PinCodeField({changeShippingFormState,handelInputeChange}) {
    return(
        <Col xs={12} sm={4} className='p-0 m-0'>
            
            <div className='pin-code-field-style'>

                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Pin Code'
                    name='pinCode'
                    value={changeShippingFormState.pinCode}
                    onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Pin Code'
                    name='pinCode'
                    value={changeShippingFormState.pinCode}
                    onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />

            </div>


        </Col>
    )
}













