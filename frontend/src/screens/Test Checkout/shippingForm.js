import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'

export default function ShippingFormT() {
    return (
        <>
            <Row className='p-0 m-0'>

                <NameField />
                
                <DummyHeight />

                <AddressField />

                <PhoneNumberField />
                
                <DummyHeight />

                <CityComp />

                <StateField />

                <DummyHeightVisibleOnlyOnXtraSmallScreen />

                <PinCodeField />

                <Col xs={12} sm={4} className='p-0 m-0' />
                <Col xs={12} sm={4} className='p-0 m-0' />
                <Col xs={12} sm={4} className='p-0 m-0'>
                    <div style={{height:'50px', backgroundColor:'yellow'}}>
                        <h5>Button</h5>   
                    </div>
                </Col>

            </Row>

            <div>
                
            </div>

            
        </>
    )

    function DummyHeight() {
        return(
            <Col xs={12}>
                <div style={{height: '5px'}}/>
            </Col>
        )
    }


    function DummyHeightVisibleOnlyOnXtraSmallScreen() {
        return(
            <Col xs={12} className='d-block d-sm-none '>
                <div style={{height: '5px'}}/>
            </Col>
        )
    }

    function NameField() {
        console.log('Name Field Re-Build')
        return(
            <>
                <Col xs={6} lg={6} className='p-0 m-0'>
                        
                        <Form.Control
                            size='sm'
                            type='text'
                            placeholder='First Name'
                            name='firstname'
                            // value={shippingObject.firstname}
                            // onChange={handelInputeChange}
                            className='d-block d-sm-none '
                        />
    
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='First Name'
                            name='firstname'
                            // value={shippingObject.firstname}
                            // onChange={handelInputeChange}
                            className='d-none d-sm-block '
                        />
    
                    </Col>
    
                    <Col xs={6} lg={6} className='p-0 m-0'>
                        
                        <Form.Control
                            size='sm'
                            type='text'
                            placeholder='Last Name'
                            name='firstname'
                            // value={shippingObject.firstname}
                            // onChange={handelInputeChange}
                            className='d-block d-sm-none '
                        />
    
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Last Name'
                            name='firstname'
                            // value={shippingObject.firstname}
                            // onChange={handelInputeChange}
                            className='d-none d-sm-block '
                        />
    
                    </Col>
            </>
        )
    }




    function AddressField() {
        return(
            <Col xs={6} lg={6} className='p-0 m-0'>
                        
                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Address'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Address'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />
    
            </Col>
        )
    }




    function PhoneNumberField() {
        return(
            <Col xs={6} className='p-0 m-0'>
                        
                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Phone Number'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Phone Number'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />
    
            </Col>
        )
    }



    function CityComp() {
        return(
            <Col xs={6} sm={4} className='p-0 m-0'>
                        
                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='City'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='City'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />
    
            </Col>
        )
    }
    
    
    
    function StateField() {
        return(
            <Col xs={6} sm={4} className='p-0 m-0'>
                        
                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='State'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='State'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />
    
            </Col>
        )
    }
    
    

    
    function PinCodeField() {
        return(
            <Col xs={12} sm={4} className='p-0 m-0'>
                        
                <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Pin Code'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-block d-sm-none '
                />
    
                <Form.Control
                    size='lg'
                    type='text'
                    placeholder='Pin Code'
                    name='firstname'
                    // value={shippingObject.firstname}
                    // onChange={handelInputeChange}
                    className='d-none d-sm-block '
                />
    
            </Col>
        )
    }

}













