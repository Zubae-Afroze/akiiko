import React from 'react'
import { Container, Form, Row, Col, Table } from 'react-bootstrap';
import ProfileComp from '../../components/ProfileComponent/ProfileComp';
import './style.css'
import '../Chekout/style.css'


export default function NewProfileScreen() {
    return (
        <div style={{backgroundColor:'#dbd0c5'}}>
            <Container className='ps-md-5 pe-md-5 d-flex justify-content-center'>

                <Container className='f-f m-xs-1 m-md-5 pt-xs-2 p-md-5'>
                    <Row>

                        <Col xs={12} md={4}>
                            <div className='profile-tabs'>
                                <ul style={{listStyle:'none'}}>
                                    <li>Wlcome Back</li>
                                    <li>Suhil Kumar</li>
                                    <hr/>
                                    <li className='tabs'>Shipping</li>
                                    <hr/>
                                    <li className='tabs'>Your Orders</li>
                                    <hr/>
                                    <li className='tabs'>Log Out</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={0} md={1}>
                            <h6>S</h6>
                        </Col>
                        
                        <Col xs={12} md={7}>
                            <ProfileComp/>
                        </Col>


                    </Row>
                </Container>
            </Container>
        </div>
    )
}
