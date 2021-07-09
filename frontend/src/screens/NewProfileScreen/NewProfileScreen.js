import React from 'react'
import { Container, Form, Row, Col, Table } from 'react-bootstrap';
import ProfileComp from '../../components/ProfileComponent/ProfileComp';
import './style.css'
import '../Chekout/style.css'


export default function NewProfileScreen() {
    return (
        <div style={{backgroundColor:'#e2dcd5'}}>
            <Container className='ps-md-5 pe-md-5 d-flex justify-content-center'>

                <Container className='f-f m-xs-1 m-md-5 pt-xs-2 p-md-5'>
                    <Row>

                        <Col xs={12} md={4}>
                            <div className='px-lg-5 profile-tabs'>
                                <ul style={{listStyle:'none'}}>
                                    <div className='d-block d-sm-block d-md-none'> <br/> </div>
                                    <li className='f-f-m'>Wlcome Back</li>
                                    <li className='tabs'>Suhil Kumar</li>
                                    <br/>
                                    <hr/>
                                    <li className='tabs'>Shipping</li>
                                    <hr/>
                                    <li className='tabs'>Your Orders</li>
                                    <hr/>
                                    <li className='tabs'>Log Out</li>
                                    <hr/>
                                </ul>
                            </div>
                        </Col>

                        {/* <Col xs={0} md={1} className='p-0 m-0'></Col> */}
                        
                        <Col xs={12} md={8} className='p-0'>
                            <ProfileComp/>
                        </Col>


                    </Row>
                </Container>
            </Container>
        </div>
    )
}
