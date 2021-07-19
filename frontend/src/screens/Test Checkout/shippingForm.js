import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'

export default function ShippingFormT() {
    return (
        <>
            <Row className='p-0 m-0'>

                <NameField />

                <AddressField />

                <PhoneNumberField />

            </Row>
        </>
    )
}


function NameField() {
    return(
        <>
            <Col xs={12} lg={6} className='p-0 m-0'>
                    
                    <Form.Control
                        size='md'
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

                <Col xs={12} lg={6} className='p-0 m-0'>
                    
                    <Form.Control
                        size='md'
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
        <Col xs={12} lg={6} className='p-0 m-0'>
                    
            <Form.Control
                size='md'
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
        <Col xs={12} lg={6} className='p-0 m-0'>
                    
            <Form.Control
                size='md'
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
