import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Container, Form , Row, Col, Button  } from 'react-bootstrap';
import { motion } from 'framer-motion'
import { addNewShippingAddress,editShippingAddress } from '../../actions/actionProfile';
import './profileComponent.css';


// const updateAddressObject = {
//     firstname : '',
//     lastname : '',
//     address : '',
//     mobile : '',
//     city : '',
//     state : '',
//     zipCode : '',
// }

const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

export default function AddressComp({isAddNewAddress=false, shippingAddress, index, isProfile=false}) {

    console.log('AddressComp Rendered');

    const [ editAddressFieldON, setEditAddressFieldON ] = useState(false);

    const [ updateAddressObject, setUpdateAddressObject ] = useState({
        firstname : '',
        lastname : '',
        address : '',
        mobile : '',
        city : '',
        state : '',
        zipCode : '',
    });

    const [ errorFields, setErrorFields ] = useState([false,false,false,false,false,false,false]);

    const dispatch = useDispatch();

    function handelInputeChange(event){
        setUpdateAddressObject( prevState => ({...prevState, [event.target.name]: event.target.value}) )
        // updateAddressObject[event.target.name] = event.target.value;
    }

    function onSumbitForm(e){
        e.preventDefault()

        let isValidated = true;
        let updatedList = [false,false,false,false,false,false,false];

        if(updateAddressObject.firstname === null || updateAddressObject.firstname.trim() === ''){
            updatedList[0] = true;
            isValidated = false;
        }
        if(updateAddressObject.lastname === null || updateAddressObject.lastname.trim() === ''){
            updatedList[1] = true;
            isValidated = false;
        }
        if(updateAddressObject.address === null || updateAddressObject.address.trim() === ''){
            updatedList[2] = true;
            isValidated = false;
        }
        if(updateAddressObject.mobile === null || updateAddressObject.mobile.trim() === ''){
            updatedList[3] = true;
            isValidated = false;
        }
        if(updateAddressObject.city === null || updateAddressObject.city.trim() === ''){
            updatedList[4] = true;
            isValidated = false;
        }
        if(updateAddressObject.state === null || updateAddressObject.state.trim() === ''){
            updatedList[5] = true;
            isValidated = false;
        }
        if(updateAddressObject.zipCode === null || updateAddressObject.zipCode.trim() === ''){
            updatedList[6] = true;
            isValidated = false;
        }

        if(isValidated){
            setEditAddressFieldON(false)
            
            if(isAddNewAddress){
                console.log('new Address Added')
                dispatch(addNewShippingAddress(updateAddressObject))
            }else{
                console.log('Existing Address Updated')
                dispatch(editShippingAddress(index,updateAddressObject))
            }
        }else{
            setErrorFields(updatedList)
        }
    }


    return (
        <Col xs={12}>
            <Container
                style={{
                    padding: '10px',
                    paddingBottom: isAddNewAddress ? '10px' : '5px',
                    borderStyle: 'solid',
                    borderColor: '#cbc6bf',
                    borderWidth: '1.8px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    width: '100%',   
                }}
            >   
                {
                    isAddNewAddress 

                    ?   <Row>
                            <Col xs={8}>
                                <div style={{height:'12px'}}/>
                                {
                                    isProfile ?
                                    <h6>Add Default Shipping Address</h6>
                                    :
                                    <h6>Add New Shipping Address</h6>
                                }
                            </Col>
                            <Col xs={4} className='d-none d-sm-none d-md-block'>
                                <h6 className='tabs f-f-m' 
                                    style={{textAlign:'end', marginTop: '13px'}}
                                    onClick={()=> setEditAddressFieldON(!editAddressFieldON)}
                                >
                                    Add
                                </h6>
                            </Col>
                            <Col xs={4} className='d-block d-sm-block d-md-none'>
                                <h6 className='tabs f-f-m' 
                                    style={{textAlign:'end', marginTop: '17px'}}
                                    onClick={()=> setEditAddressFieldON(!editAddressFieldON)}
                                >
                                    Add
                                </h6>
                            </Col>
                        </Row>

                       
                    :   <Row>
                            <Col xs={8}>
                                <h6>{shippingAddress.firstname+ ' ' + shippingAddress.lastname}</h6>
                                <h6>{shippingAddress.address}</h6>
                                <h6>{shippingAddress.mobile}</h6>
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
                }
            </Container>

            {
                editAddressFieldON ?
                
                <motion.div variants={containerVariants} initial='hidden' animate='visible'>

                <div>
                <Form className='f-f'>
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
                            className={'edit-form-style d-block d-sm-none ' + (errorFields[0] ? 'error-form-style' : '')}
                            name='firstname'
                            value={updateAddressObject.firstname}
                            onChange={handelInputeChange}
                        />
                        <Form.Control  //For Large Screens
                            size='lg'
                            type='text'
                            placeholder='First Name'
                            className={'d-none d-sm-block edit-form-style ' + (errorFields[0] ? 'error-form-style' : '')}
                            style={{ padding: 25, fontSize: 16 }}
                            name='firstname'
                            value={updateAddressObject.firstname}
                            onChange={handelInputeChange}
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
                            className={'d-block d-sm-none edit-form-style ' + (errorFields[1] ? 'error-form-style' : '')}
                            name='lastname'
                            value={updateAddressObject.lastname}
                            onChange={handelInputeChange}
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Last Name'
                            className={'d-none d-sm-block edit-form-style ' + (errorFields[1] ? 'error-form-style' : '')}
                            style={{ padding: 25, fontSize: 16 }}
                            name='lastname'
                            value={updateAddressObject.lastname}
                            onChange={handelInputeChange}
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
                        <Form.Control
                            size='md'
                            type='text'
                            placeholder='Address'
                            className={'d-block d-sm-none edit-form-style ' + (errorFields[2] ? 'error-form-style' : '')}
                            name='address'
                            value={updateAddressObject.address}
                            onChange={handelInputeChange}
                        
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Address'
                            className={'d-none d-sm-block edit-form-style ' + (errorFields[2] ? 'error-form-style' : '')}
                            style={{ padding: 25, fontSize: 16 }}
                            name='address'
                            value={updateAddressObject.address}
                            onChange={handelInputeChange}
                        />
                        </div>
                    </Col>
                    <Col
                        xs={6}
                        sm={6}
                        md={6}
                        className='p-0 mb-2'
                    >
                        <Form.Control
                            size='md'
                            type='text'
                            placeholder='Mobile Number'
                            className={'d-block d-sm-none edit-form-style ' + (errorFields[3] ? 'error-form-style' : '')}
                            name='mobile'
                            value={updateAddressObject.mobile}
                            onChange={handelInputeChange}
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Mobile Number'
                            className={'d-none d-sm-block edit-form-style ' + (errorFields[3] ? 'error-form-style' : '')}
                            style={{ padding: 25, fontSize: 16 }}
                            name='mobile'
                            value={updateAddressObject.mobile}
                            onChange={handelInputeChange}
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
                            className={'d-block d-sm-none edit-form-style ' + (errorFields[4] ? 'error-form-style' : '')}
                            name='city'
                            value={updateAddressObject.city}
                            onChange={handelInputeChange}
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='City'
                            className={'d-none d-sm-block edit-form-style ' + (errorFields[4] ? 'error-form-style' : '')}
                            style={{ padding: 25, fontSize: 16 }}
                            name='city'
                            value={updateAddressObject.city}
                            onChange={handelInputeChange}
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
                            className={'d-block d-sm-none edit-form-style ' + (errorFields[5] ? 'error-form-style' : '')}
                            name='state'
                            value={updateAddressObject.state}
                            onChange={handelInputeChange}
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='State'
                            className={'d-none d-sm-block edit-form-style ' + (errorFields[5] ? 'error-form-style' : '')}
                            style={{ padding: 25, fontSize: 16 }}
                            name='state'
                            value={updateAddressObject.state}
                            onChange={handelInputeChange}
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
                            className={'d-block d-sm-none edit-form-style ' + (errorFields[6] ? 'error-form-style' : '')}
                            name='zipCode'
                            value={updateAddressObject.zipCode}
                            onChange={handelInputeChange}
                        />
                        <Form.Control
                            size='lg'
                            type='text'
                            placeholder='Zip Code'
                            className={'d-none d-sm-block edit-form-style ' + (errorFields[6] ? 'error-form-style' : '')}
                            style={{ padding: 25, fontSize: 16 }}
                            name='zipCode'
                            value={updateAddressObject.zipCode}
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
                            
                            <Button  // For large Screen
                                style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                                size='md'
                                variant='primary'
                                type='submit'
                                className='px-5 me-3 mt-1 mb-3'
                                onClick={onSumbitForm}
                            >   
                                {
                                    isAddNewAddress
                                    ?   'Add'
                                    :   'UPDATE'
                                }
                                {/* UPDATE */}
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
                        size='md'
                        variant='primary'
                        type='submit'
                        className='px-5 m-0 mt-3 mb-3'
                        onClick={onSumbitForm}
                        >
                            {
                                isAddNewAddress
                                ?   'Add'
                                :   'UPDATE'
                            }
                        {/* UPDATE */}
                        </Button>
                    </div>
                    </div>
                </Form>
                </div>
                </motion.div>

                : null
            }

        </Col>
    )
}
