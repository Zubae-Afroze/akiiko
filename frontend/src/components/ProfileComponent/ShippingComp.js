import React , {useState} from 'react'
import { Container, Row, Col,  } from 'react-bootstrap';
import { motion } from 'framer-motion'
import AddressComp from './addressComp';
import '../../screens/Chekout/style.css'
import '../../screens/NewProfileScreen/style.css'
import { PROFILE_COMP } from '../../screens/NewProfileScreen/NewProfileScreen' 

const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }


export default function ShippingComp({setProfileScreenDisplayComp}) {

    const [editMobileFieldON, setEditMobileFieldON] = useState(false);


    
    return (
        <motion.div variants={containerVariants} initial='hidden' animate='visible'>
        <Container className='pe-lg-5 ps-lg-0 m-0 d-flex justify-content-center'>  
            <Row>

                <Col xs={12} className='d-block d-sm-none '>
                    <div style={{height:'30px'}}></div>
                </Col>
                <Col xs={12}>
                    <h6 className='f-f-m'>Shipping</h6>
                    <div style={{paddingBottom:'30px'}}></div>
                </Col>
                
                <Col xs={3}>
                    <h6>Mobile</h6>
                </Col>
                <Col xs={5}>
                    {
                        editMobileFieldON 
                        ?   <input type="text" size="12" className='edit-field-style' autofocus></input>
                        :   <h6>+9123456789</h6>
                    }
                </Col>
                <Col xs={4}>
                    <h6 className='tabs f-f-m' style={{textAlign:'end' , paddingRight:'13px'}} onClick={()=> setProfileScreenDisplayComp(PROFILE_COMP)}>
                        {
                            editMobileFieldON 
                            ?   'Update'
                            :   'Edit'
                        }
                    </h6>
                </Col>
                <Col xs={12}>
                    <hr style={{marginTop:'3px', marginBottom:'25px'}}/>   
                </Col>

                <Col xs={3}>
                    <h6>Email</h6>
                </Col>
                <Col xs={5}>
                    <h6>sanjiv@gaiml.com</h6>
                </Col>
                <Col xs={4}>
                <h6 className='tabs f-f-m' style={{textAlign:'end' , paddingRight:'13px'}} onClick={()=> setProfileScreenDisplayComp(PROFILE_COMP)}>Edit</h6>
                </Col>
                <Col xs={12}>
                    <hr style={{marginTop:'3px'}}/>   
                </Col>
                <Col xs={12}>
                    <div style={{height:'55px'}}></div>
                </Col>

                <Col xs={12}>
                    <h6 className='f-f-m'>Shipping Address</h6>   
                </Col>

                
                
                <AddressComp/>
                <AddressComp isAddNewAddress={true}/>

                <Col xs={12}>
                    <div style={{height:'40px'}}></div>
                </Col>

                {/* <Col xs={12}>
                    <h6 className='f-f-m'>Your Saved Card</h6>   
                </Col>
                <Col xs={12}>
                    <Container
                        style={{
                            padding: '10px',
                            paddingBottom: '5px',
                            borderStyle: 'solid',
                            borderColor: '#cbc6bf',
                            borderWidth: '1.8px',
                            marginBottom: '10px',
                            width: '100%',   
                        }}
                    >
                        <Row>
                            <Col xs={8}>
                                <h6 style={{ paddingTop: '5px'}}>**** **** 6789</h6>
                            </Col>
                            <Col xs={4}>
                                <h6 className='tabs f-f-m' style={{textAlign:'end', paddingTop: '5px'}}>REMOVE</h6>
                            </Col>
                        </Row>
                    </Container>
                </Col> */}

            </Row>
        </Container>
        
        </motion.div>

    )
}
