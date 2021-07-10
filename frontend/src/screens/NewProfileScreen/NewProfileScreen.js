import React from 'react'
import { Container, Row, Col,} from 'react-bootstrap';
import ShippingComp from '../../components/ProfileComponent/ShippingComp';
import YourOrdresComp from '../../components/ProfileComponent/YourOrdersComp';
import { AnimatePresence } from 'framer-motion'
import './style.css'
import '../Chekout/style.css'



export default function NewProfileScreen() {

  const [isYourOrdersComp, setIsYourOrdersComp] = React.useState(false)
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
                                    <li>
                                        Suhil Kumar
                                    </li>
                                    <br/>
                                    <hr/>
                                    <li 
                                        className='tabs'
                                        onClick={()=>{setIsYourOrdersComp(false)}}
                                    >
                                        Shipping
                                    </li>
                                    <hr/>
                                    <li 
                                        className='tabs'
                                        onClick={()=>{setIsYourOrdersComp(true)}}
                                    >
                                        Your Orders
                                    </li>
                                    <hr/>
                                    <li className='tabs'>Log Out</li>
                                    <hr/>
                                </ul>
                            </div>
                        </Col>

                        {/* <Col xs={0} md={1} className='p-0 m-0'></Col> */}
                        
                        <Col xs={12} md={8} className='p-0'>
                            <AnimatePresence>
                                { 
                                    isYourOrdersComp ? 
                                        <YourOrdresComp/>
                                    :   <ShippingComp/>
                                }
                            </AnimatePresence>  
                        </Col>

                    </Row>
                </Container>
            </Container>
        </div>
    )
}
