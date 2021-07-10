import React from 'react'
import { Col, Row } from 'react-bootstrap';


export default function ProductRowComp() {
    return (
        <Col xs={12}>
            <div style={{
                borderBottomStyle: 'solid',
                borderBottomColor: '#cbc6bf',
                borderBottomWidth: '1.7px',
                paddingTop:'18px',
                paddingBottom:'18px',
            }}>

                <Row>

                    <Col xs={3}>
                        <div style={{
                            height:'55px',
                            width:'64px',
                            backgroundColor: 'white',
                            color: 'white',
                            borderColor: '#707070',
                            borderRadius: '1px'
                        }}/>
                            

                    </Col>
                    <Col xs={3}>
                        <div style={{marginTop:'12px'}}>
                            <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Product Name </h6>
                            <h6 style={{fontSize:'14px', opacity:'50%', marginBottom:'2px'}}> Order ID </h6>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div style={{marginTop:'12px'}}>
                            <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Delivered </h6>
                            <h6 style={{fontSize:'14px', opacity:'50%', marginBottom:'2px'}}> 10th March </h6>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <h6 className='tabs' style={{textAlign:'end' , paddingRight:'13px', marginTop:'18px'}}>
                            Re-order
                        </h6>
                    </Col>

                </Row>

            </div>
        </Col>
    )
}
