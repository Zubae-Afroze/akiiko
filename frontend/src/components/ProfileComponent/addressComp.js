import React ,{useState} from 'react'
import { Container, Form , Row, Col, Button  } from 'react-bootstrap';
import './profileComponent.css';


export default function AddressComp() {

    const [editAddressFieldON, setEditAddressFieldON] = useState(false);


    return (
        <Col xs={12}>
            <Container
                style={{
                    padding: '10px',
                    paddingBottom: '5px',
                    borderStyle: 'solid',
                    borderColor: '#cbc6bf',
                    borderWidth: '1.8px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    width: '100%',   
                }}
            >
                <Row>
                    <Col xs={8}>
                        <h6>Suhail Kumar</h6>
                        <h6>5c, Rams Villanvfsb </h6>
                    </Col>
                    <Col xs={4}>
                        <h6 className='tabs f-f-m' 
                            style={{textAlign:'end', paddingTop: '18px'}}
                            onClick={()=> setEditAddressFieldON(!editAddressFieldON)}
                        >
                            Edit
                        </h6>
                    </Col>
                </Row>
            </Container>

            {
                editAddressFieldON ?

                <div>
                <Form className='f-f-m'>
                    <Row className='m-0 p-0'>
                    <Col
                        xs={6}
                        sm={6}
                        md={6}
                        className='p-0 mb-2'
                        // className='m-0 mb-2 pe-1'
                        // style={{ marginRight: '1px' }}
                    >
                        <div style={{ marginRight: 7 }}>
                        <Form.Control  //For Small Screens
                            size='md'
                            type='text'
                            placeholder='First Name'
                            className='edit-form-style d-block d-sm-none'
                            name='firstname'
                            // value={shippingObjState.firstname}
                            // onChange={handelInputeChange}
                        />
                        <Form.Control  //For Large Screens
                            size='lg'
                            type='text'
                            placeholder='First Name'
                            className='d-none d-sm-block edit-form-style'
                            style={{ padding: 25, fontSize: 16 }}
                            name='firstname'
                            // value={shippingObject.firstname}
                            // onChange={handelInputeChange}
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
                        className='d-block d-sm-none edit-form-style'
                        name='lastname'
                        
                        />
                        <Form.Control
                        size='lg'
                        type='text'
                        placeholder='Last Name'
                        className='d-none d-sm-block edit-form-style'
                        style={{ padding: 25, fontSize: 16 }}
                        name='lastname'
                        
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
                            className='d-block d-sm-none edit-form-style'
                            name='adress'
                        
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Address'
                            className='d-none d-sm-block edit-form-style'
                            style={{ padding: 25, fontSize: 16 }}
                            name='adress'
                            
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
                        className='d-block d-sm-none edit-form-style'
                        name='aptFloorSuit'
                        
                        />
                        <Form.Control
                        size='lg'
                        type='text'
                        placeholder='Apt / Floor / Suite'
                        className='d-none d-sm-block edit-form-style'
                        style={{ padding: 25, fontSize: 16 }}
                        name='aptFloorSuit'
                        
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
                            className='d-block d-sm-none edit-form-style'
                            name='city'
                            
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='City'
                            className='d-none d-sm-block edit-form-style'
                            style={{ padding: 25, fontSize: 16 }}
                            name='city'
                        
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
                        className='d-block d-sm-none edit-form-style'
                        name='state'
                        
                        />
                        <Form.Control
                        size='lg'
                        type='text'
                        placeholder='State'
                        className='d-none d-sm-block edit-form-style'
                        style={{ padding: 25, fontSize: 16 }}
                        name='state'
                        
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
                            className='d-block d-sm-none edit-form-style'
                            name='zipCode'
                            
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Zip Code'
                            className='d-none d-sm-block edit-form-style'
                            style={{ padding: 25, fontSize: 16 }}
                            name='zipCode'
                            
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
                            
                            <Button  // For large Screen
                                style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                                size='lg'
                                variant='primary'
                                type='submit'
                                className='px-5 me-3 mt-1 mb-3'
                                // onClick={onShippingFormSubmit}
                            >
                                Save
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
                        // onClick={onShippingFormSubmit}
                        >
                        SAVE
                        </Button>
                    </div>
                    </div>
                </Form>
                </div>
                : null
            }

        </Col>
    )
}
