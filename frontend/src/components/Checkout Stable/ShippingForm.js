import React, { useContext, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
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
      margin: 0,
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
            {
                profileDetails &&

                <>

                    <div className='forms-height' 
                        // style={{minHeight:'340px'}}
                    >

                        <ReturnAddressForm 
                            profileDetails={profileDetails}
                            checkOutFormObj={checkOutFormObj}
                            changeShippingFormState={changeShippingFormState} 
                            handelInputeChange={handelInputeChange} 
                            errorFields={errorFields}
                            onSubmitShippingForm={onSubmitShippingForm}
                        />

                    </div>

                </>
            }

            
        </>
    )
    
}


function ReturnAddressForm({profileDetails,checkOutFormObj,changeShippingFormState,handelInputeChange,errorFields,onSubmitShippingForm}){
  
    if(profileDetails.shippingAddress.length === 0){
        checkOutFormObj.formObject.isNewAddress = true;
      return  <EnterNewAddressComp 
                changeShippingFormState={changeShippingFormState} 
                handelInputeChange={handelInputeChange} 
                errorFields={errorFields} 
                onSubmitShippingForm={onSubmitShippingForm}
            />

    }
    if(profileDetails.shippingAddress.length > 0 && !checkOutFormObj.formObject.isNewAddress){
      checkOutFormObj.formObject.isNewAddress = false;
      return  <ExistingAddressComp checkOutFormObj={checkOutFormObj} profileDetails={profileDetails} />
    }
    if(checkOutFormObj.formObject.isNewAddress){
      return  <EnterNewAddressComp 
                changeShippingFormState={changeShippingFormState} 
                handelInputeChange={handelInputeChange} 
                errorFields={errorFields} 
                onSubmitShippingForm={onSubmitShippingForm}
            />

    }

}


function ExistingAddressComp({checkOutFormObj,profileDetails}){
    return(
        <>
            <div className='forms-height'>

                <Row className='p-0 m-0'>

                {
                    profileDetails.shippingAddress.map((object, index) => {
                        return (
                            <Col xs={12} md={6} className='p-0 m-0'>
                                <div className={'existing-address-component existing-address-'+(index % 2 === 0 ? 'even':'odd')+'Num-style'}

                                    onClick={()=>{
                                        checkOutFormObj.formObject.firstName = object.firstname;
                                        checkOutFormObj.formObject.lastName = object.lastname;
                                        checkOutFormObj.formObject.address = object.address;
                                        checkOutFormObj.formObject.phoneNumber = object.mobile;
                                        checkOutFormObj.formObject.city = object.city;
                                        checkOutFormObj.formObject.state = object.state;
                                        checkOutFormObj.formObject.zipCode = object.zipCode;
                                        checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel: 1})
                                    }}
                                >
                                    <div style={{padding:'10px'}}>
                                        <h6>{object.firstname + ' ' + object.lastname}</h6>
                                        <h6>{object.address}</h6>
                                        <h6>Mobile - {object.mobile}</h6>
                                        <h6>{object.state}</h6>
                                        <h6>{object.city + ' ' + object.zipCode}</h6>
                                    </div>
                                    
                                    <div className='f-f'>
                                        <button className='continue-with-this-address-btn' style={{display: 'inline'}}>
                                            Continue with this Address
                                        </button>
                                        <span style={{display: 'inline', color: '#977257'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                            </svg>
                                        </span>

                                    </div>

                                </div>
                            </Col>
                        );
                    })
                }

                </Row>

            </div>


            <div className='d-none d-sm-none d-md-block'>
                <Row className='p-0 m-0'>
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0'>
                        <Button
                            // style={{ backgroundColor: '#977257', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                            size='lg'
                            variant='primary'
                            type='submit'
                            className='p-2 m-0 Button-on-click' 
                            onClick={()=>{checkOutFormObj.setFormObject({...checkOutFormObj.formObject,isNewAddress: true})}}
                        >   
                            Add New Address

                        </Button>
                    </Col>
                </Row>
            </div>
            <div className='d-block d-sm-block d-md-none pt-3 f-f-l'>

                    <div style={hrStyle.row}>
                        <div style={hrStyle.block}><hr style={{borderColor:'#d6d6d6'}}/></div>
                        <div style={hrStyle.blockCenter}><h6 style={{margin:0, marginTop:8,color:'gray'}}>OR</h6></div>
                        <div style={hrStyle.block}><hr style={{borderColor:'#d6d6d6'}}/></div>
                    </div>

                <div className='d-flex justify-content-center '>
                    <Button
                        // style={{ backgroundColor: '#977257', border: 0, borderRadius: 0 }}
                        size='md'
                        variant='primary'
                        type='submit'
                        className='px-3 me-3 mt-3 mb-3 Button-on-click'
                        onClick={()=>{checkOutFormObj.setFormObject({...checkOutFormObj.formObject,isNewAddress: true})}}
                    >
                        Add New Address
                    </Button>
                </div>
            </div>

            
        </>
    );
}



function EnterNewAddressComp({changeShippingFormState,handelInputeChange,errorFields,onSubmitShippingForm}){
    return(
        <>
            <div className='forms-height'>

                <Row className='p-0 m-0'>

                <Col xs={12} className='p-0 m-0'>
                    <h6>Where this order going ?</h6>
                </Col>

                <NameField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

                <DummyHeight />

                <AddressField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

                <PhoneNumberField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

                <DummyHeightVisibleOnlyOnlargScreen />

                {/* <DummyHeightVisibleOnlyOnXtraSmallScreen /> */}

                <CityComp changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

                <StateField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

                {/* <DummyHeightVisibleOnlyOnXtraSmallScreen /> */}

                <ZipCodeField changeShippingFormState={changeShippingFormState} handelInputeChange={handelInputeChange} errorFields={errorFields} />

                </Row>
            </div>


            <div className='d-none d-sm-none d-md-block'>
                <Row className='p-0 m-0'>
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0'>
                        <Button
                            // style={{ backgroundColor: '#977257', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                            size='lg'
                            variant='primary'
                            type='submit'
                            className='p-2 m-0 Button-on-click'
                            onClick={onSubmitShippingForm}
                        >   
                            Next
                            
                        </Button>
                    </Col>
                </Row>
            </div>

            <div className='d-block d-sm-block d-md-none f-f-m'>
                <div className='d-flex justify-content-center'>
                    <Button
                        // style={{ backgroundColor: '#977257', border: 0, borderRadius: 0 }}
                        size='md'
                        variant='primary'
                        type='submit'
                        className='px-5 me-3 mt-3 mb-3 Button-on-click'
                        onClick={onSubmitShippingForm}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );


    function DummyHeight() {
        return(
            <Col xs={12}>
                <div style={{height: '10px'}}/>
            </Col>
        )
    }


    function DummyHeightVisibleOnlyOnlargScreen() {
        return(
            <Col xs={12} className='d-none d-sm-none d-lg-block'>
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
        <Col xs={12} lg={6} className='p-0 m-0'>
            
            <div className='address-field-style'>

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
            
            <div className='phone-number-field-style'>

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
        <Col xs={6} lg={4} className='p-0 m-0'>

            <div className='city-field-style'>

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
        <Col xs={6} lg={4} className='p-0 m-0'>

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
        <Col xs={6} lg={4} className='p-0 m-0'>
            
            <div className='pin-code-field-style test-pin-code'>

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













