import React from 'react'
import { Container, Row, Col,  } from 'react-bootstrap';
import { motion } from 'framer-motion'
import ProductRowComp from './productRowComp';
import '../../screens/Chekout/style.css'
import '../../screens/NewProfileScreen/style.css'

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


export default function YourOrdresComp() {

    
    return (
        <motion.div variants={containerVariants} initial='hidden' animate='visible'>
        <Container className='pe-lg-5 ps-lg-0 m-0 d-flex justify-content-center'>  
            <Row>

                <Col xs={12}>
                    <h6 className='f-f-m'>Your Orders</h6>
                    <div style={{paddingBottom:'2px'}}></div>
                </Col>

                <Col xs={12}>
                    <hr style={{marginBottom:'0'}}/>
                </Col>
                
                <ProductRowComp/>

                <ProductRowComp/>

                {/* <Col xs={3}>
                    <h6>Email</h6>
                </Col>
                <Col xs={5}>
                    <h6>sanjiv@gaiml.com</h6>
                </Col>
                <Col xs={4}>
                    <h6 className='tabs f-f-m' style={{textAlign:'end', paddingRight:'13px'}}>Edit</h6>
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
                                >
                                    Edit
                                </h6>
                            </Col>
                        </Row>
                    </Container>
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
                                <h6>Kumar Suhail</h6>
                                <h6>7c, Villaims KnockL </h6>
                            </Col>
                            <Col xs={4}>
                                <h6 className='tabs f-f-m' 
                                    style={{textAlign:'end', paddingTop: '18px'}}
                                    // onClick={() => setModalShow(true)}
                                >
                                    Edit
                                </h6>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={12}>
                    <div style={{height:'40px'}}></div>
                </Col>

                <Col xs={12}>
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
