import React, { useContext, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { CheckOutFormContext } from './CheckOutIndex'

export default function ShippingFormT() {

    console.log('------Shipping Form Rendered-----');

    const checkOutFormObj = useContext(CheckOutFormContext);

    const [ changeShippingFormState , setChangeShippingFormState] = useState(checkOutFormObj.formObject)

    const profileDetails = useSelector((state) => state.profile.userProfile)


    const [ errorFields, setErrorFields ] = useState([false,false,false,false,false,false,false]);

    

    function handelInputeChange(event){

        let newObj = { ...checkOutFormObj.formObject };

        newObj[event.target.name] = event.target.value;

        checkOutFormObj.formObject[event.target.name] = event.target.value;

        setChangeShippingFormState(newObj);
    }

    function onSubmitShippingForm(e){
        e.preventDefault();

        let isValidated = true;
        let updatedList = [false,false,false,false,false,false,false];

        if(checkOutFormObj.formObject.firstName === null || checkOutFormObj.formObject.firstName.trim() === ''){
            updatedList[0] = true;
            isValidated = false;
        }

        if(checkOutFormObj.formObject.lastName === null || checkOutFormObj.formObject.lastName.trim() === ''){
            updatedList[1] = true;
            isValidated = false;
        }
        if(checkOutFormObj.formObject.address === null || checkOutFormObj.formObject.address.trim() === ''){
            updatedList[2] = true;
            isValidated = false;
        }
        if(checkOutFormObj.formObject.phoneNumber === null || checkOutFormObj.formObject.phoneNumber.trim() === ''){
            updatedList[3] = true;
            isValidated = false;
        }
        if(checkOutFormObj.formObject.city === null || checkOutFormObj.formObject.city.trim() === ''){
            updatedList[4] = true;
            isValidated = false;
        }
        if(checkOutFormObj.formObject.state === null || checkOutFormObj.formObject.state.trim() === ''){
            updatedList[5] = true;
            isValidated = false;
        }
        if(checkOutFormObj.formObject.zipCode === null || checkOutFormObj.formObject.zipCode.trim() === ''){
            updatedList[6] = true;
            isValidated = false;
        }

        if(isValidated){
            checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel: 1})
        }else{
            setErrorFields(updatedList)
        }

    }


    return (
        <>  
            <div style={{minHeight:'340px'}}>

                {/* <EnterNewAddressComp changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields}/> */}

                <ExistingAddressComp checkOutFormObj={checkOutFormObj}/>

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
                            onClick={onSubmitShippingForm}
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
                        onClick={onSubmitShippingForm}
                    >
                        NEXT
                    </Button>
                </div>
            </div>

            
        </>
    )
    
}


function ExistingAddressComp({checkOutFormObj}){
    return(
        <>
            <Row className='p-0 m-0'>

                <Col xs={12} md={6} className='p-0 m-0'>
                    <div className='existing-address-component existing-address-hardNum-style' onClick={()=>OnClickexistingAddress(checkOutFormObj)}>
                        <h6>Sam Surya</h6>
                        <h6>Test Address Address</h6>
                        <h6>Chennai - 600123</h6>
                        <h6>Mobile - 0123456789</h6>
                    </div>
                </Col>

                <Col xs={12} md={6} className='p-0 m-0'>
                    <div className='existing-address-component existing-address-oddNum-style' onClick={()=>OnClickexistingAddress(checkOutFormObj)}>
                        <h6>Sam Surya</h6>
                        <h6>Test Address Address</h6>
                        <h6>Chennai - 600123</h6>
                        <h6>Mobile - 0123456789</h6>
                    </div>
                </Col>

            </Row>
        </>
    );
}

function OnClickexistingAddress(checkOutFormObj){
    checkOutFormObj.formObject.firstName = 'Sam';
    checkOutFormObj.formObject.lastName = 'Surya';
    checkOutFormObj.formObject.address = 'Test Address existing';
    checkOutFormObj.formObject.phoneNumber = '0123456789';
    checkOutFormObj.formObject.city = 'Chennai';
    checkOutFormObj.formObject.state = 'Tamil nadu';
    checkOutFormObj.formObject.zipCode = '600123';
    checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel: 1})
}


function EnterNewAddressComp({changeShippingFormState,handelInputeChange,errorFields}){
    return(
        <>
            <Row className='p-0 m-0'>

            <Col xs={12} className='p-0 m-0'>
                <h6>Where this order joing ?</h6>
            </Col>

            <NameField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

            <DummyHeight />

            <AddressField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

            <PhoneNumberField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

            <DummyHeight />

            <CityComp changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

            <StateField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

            <DummyHeightVisibleOnlyOnXtraSmallScreen />

            <ZipCodeField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

            </Row>
        </>
    );

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

function NameField({changeShippingFormState,handelInputeChange,errorFields}) {
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
                        className={'d-block d-sm-none '+ (errorFields[0] ? 'error-form-style' : '')}
                    />

                    <Form.Control
                        size='lg'
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={changeShippingFormState.firstName}
                        onChange={handelInputeChange}
                        className={'d-none d-sm-block '+ (errorFields[0] ? 'error-form-style' : '')}
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
                            className={'d-block d-sm-none '+ (errorFields[1] ? 'error-form-style' : '')}
                        />
    
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            value={changeShippingFormState.lastName}
                            onChange={handelInputeChange}
                            className={'d-none d-sm-block '+ (errorFields[1] ? 'error-form-style' : '')}
                        />

                    </div>

                </Col>
        </>
    )
}


function AddressField({changeShippingFormState,handelInputeChange,errorFields}) {
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
                    className={'d-block d-sm-none '+ (errorFields[2] ? 'error-form-style' : '')}
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Address'
                    name='address'
                    value={changeShippingFormState.address}
                    onChange={handelInputeChange}
                    className={'d-none d-sm-block '+ (errorFields[2] ? 'error-form-style' : '')}
                />

            </div>

        </Col>
    )
}




function PhoneNumberField({changeShippingFormState,handelInputeChange,errorFields}) {
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
                    className={'d-block d-sm-none '+ (errorFields[3] ? 'error-form-style' : '')}
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Phone Number'
                    name='phoneNumber'
                    value={changeShippingFormState.phoneNumber}
                    onChange={handelInputeChange}
                    className={'d-none d-sm-block '+ (errorFields[3] ? 'error-form-style' : '')}
                />

            </div>

        </Col>
    )
}



function CityComp({changeShippingFormState,handelInputeChange,errorFields}) {
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
                    className={'d-block d-sm-none '+ (errorFields[4] ? 'error-form-style' : '')}
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='City'
                    name='city'
                    value={changeShippingFormState.city}
                    onChange={handelInputeChange}
                    className={'d-none d-sm-block '+ (errorFields[4] ? 'error-form-style' : '')}
                />

            </div>

        </Col>
    )
}



function StateField({changeShippingFormState,handelInputeChange,errorFields}) {
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
                    className={'d-block d-sm-none '+ (errorFields[5] ? 'error-form-style' : '')}
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='State'
                    name='state'
                    value={changeShippingFormState.state}
                    onChange={handelInputeChange}
                    className={'d-none d-sm-block '+ (errorFields[5] ? 'error-form-style' : '')}
                />

            </div>

        </Col>
    )
}




function ZipCodeField({changeShippingFormState,handelInputeChange,errorFields}) {
    return(
        <Col xs={12} sm={4} className='p-0 m-0'>
            
            <div className='pin-code-field-style'>

                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Zip Code'
                    name='zipCode'
                    value={changeShippingFormState.zipCode}
                    onChange={handelInputeChange}
                    className={'d-block d-sm-none '+ (errorFields[6] ? 'error-form-style' : '')}
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Zip Code'
                    name='zipCode'
                    value={changeShippingFormState.zipCode}
                    onChange={handelInputeChange}
                    className={'d-none d-sm-block '+ (errorFields[6] ? 'error-form-style' : '')}
                />

            </div>


        </Col>
    )
}













