import React from 'react'
import { Container, Form, Row, Col, Table } from 'react-bootstrap';
import '../../screens/Chekout/style.css'

export default function ProfileComp() {
    return (

        <Container className='p-0 m-0 d-flex justify-content-center'>
            <Row>

                <Col xs={12}>
                    <h6>Shipping</h6>
                </Col>
                
                <Col xs={3}>
                    <h6>Mobile</h6>
                </Col>
                <Col xs={5}>
                    <h6>+9123456789</h6>
                </Col>
                <Col xs={4}>
                    <h6 style={{textAlign:'end'}}>Edit</h6>
                </Col>
                <Col xs={12}>
                    <hr/>   
                </Col>

                <Col xs={3}>
                    <h6>Email</h6>
                </Col>
                <Col xs={5}>
                    <h6>sanjiv@gaiml.com</h6>
                </Col>
                <Col xs={4}>
                    <h6 style={{textAlign:'end'}}>Edit</h6>
                </Col>
                <Col xs={12}>
                    <hr/>   
                </Col>
                <Col xs={12}>
                    <br/>  
                    <br/>
                </Col>

                <Col xs={12}>
                    <h6>Shipping Address</h6>   
                </Col>
                <Col xs={12}>
                    <div
                        style={{
                            padding: '10px',
                            paddingBottom: '5px',
                            borderStyle: 'solid',
                            borderColor: '#c5bbb1',
                            borderWidth: '2px',
                            marginTop: '10px',
                            marginBottom: '10px',
                            width: '100%',   
                        }}
                    >
                        <h6>Suhail Kumar</h6>
                        <h6>5c, Rams Villanvfsb </h6>
                    </div>
                </Col>

                <Col xs={12}>
                    <div
                        style={{
                            padding: '10px',
                            paddingBottom: '5px',
                            borderStyle: 'solid',
                            borderColor: '#c5bbb1',
                            borderWidth: '2px',
                            marginBottom: '10px',
                            width: '100%',   
                        }}
                    >
                        <h6>Kumar Suhail</h6>
                        <h6>7c, Villaims KnockL </h6>
                    </div>
                </Col>

            </Row>
        </Container>

    )
}
