import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Menubar from '../../components/Menubar/Menubar'
import MobileNav from '../../components/MobileNav/MobileNav'
import CheckOutCompT from './CheckOutCompT'
import './CheckOutStyleIndex.css'

export default function TestCheckOutScreen() {
    return (
        <>
        <Menubar />
        <MobileNav />
            <div className='checkOut-container-wraper'>
                
                <div id='child'>

                            <Row className='p-0 m-0'>

                                <Col xs={12} lg={8} className='p-1 px-md-4'>
                                    <div>
                                        
                                        <CheckOutCompT />
                                        
                                    </div>
                                </Col>

                                <Col xs={12} lg={4} className='p-1 px-md-4'>
                                    <div style={{ backgroundColor:'green'}}>
                                        <h6>Second Column</h6>
                                    </div>
                                </Col>

                            </Row>

                </div>

            </div>
        </>
    )
}
