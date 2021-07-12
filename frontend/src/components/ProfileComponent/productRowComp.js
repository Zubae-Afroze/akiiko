import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion'


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
  

export default function ProductRowComp() {
    const [showOrderDetails,setShowOrderDetails] = React.useState(false);
    return (
        <Col xs={12}>
            <div style={{
                borderTop: '1.7px solid #cbc6bf',
                // borderBottomStyle: 'solid',
                // borderBottomColor: '#cbc6bf',
                // borderBottomWidth: '1.7px',
                paddingTop:'12px',
                paddingBottom:'18px',
                cursor:'pointer'
            }}
                onClick={()=>setShowOrderDetails(prev => !prev)}
            >

                <Row>

                    <Col xs={2} md={1} className='d-none d-sm-none d-md-block'>
                        <div style={{
                            // height:'55px',
                            // width:'64px',
                            marginTop:'8px',
                            // backgroundColor: 'white',
                            color: 'black',
                            borderColor: '#707070',
                            borderRadius: '1px'
                        }} className='d-flex justify-content-center'
                        >1</div>
                            

                    </Col>
                    <Col xs={6} md={6}>
                        <div style={{marginTop:'8px'}}>
                            {/* <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Product Name </h6> */}
                            <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Order ID </h6>
                            <h6 style={{
                                fontSize:'14px', opacity:'50%', marginBottom:'2px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}> 60152fe43400c90004f1900a </h6>
                        </div>
                    </Col>
                    <Col xs={3} md={2} className='p-0 m-0'>
                        <div style={{marginTop:'8px'}}>
                            <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Delivered </h6>
                            <h6 style={{fontSize:'14px', opacity:'50%', marginBottom:'2px'}}> 10th March </h6>
                        </div>
                    </Col>
                    <Col xs={3} md={3} className='p-0 m-0'>
                        <h6 className='tabs' style={{fontSize:'14px',textAlign:'end' , paddingRight:'13px', marginTop:'18px'}}>
                            Re-order
                        </h6>
                    </Col>

                </Row>

            </div>

            {
                showOrderDetails 
                ? <OdrerDetails/>
                : null
            }

        </Col>
    )
}

function OdrerDetails(){
    return (
        <motion.div variants={containerVariants} initial='hidden' animate='visible'>
        <div style={{border:'1px solid #cbc6bf', marginTop:'10px', marginBottom:'10px', fontSize:'14px'}}>
                <Row>
                    <Col xs={4} className='p-0 m-0'>
                        <div style={{
                            // height:'55px',
                            // width:'64px',
                            margin: '10px',
                            marginLeft: '25px',
                            backgroundColor: 'white',
                            color: 'black',
                            borderColor: '#707070',
                            borderRadius: '1px',
                        }} className='d-flex justify-content-center'
                        >1</div>
                    </Col>
                    <Col xs={8}>
                        <div className='f-f' style={{marginTop: '10px'}}>
                            <h6 className='f-f'>Product Title</h6>
                            <span className='f-f' style={{opacity:'60%'}}>Quantity:</span> 
                            <span className='f-f'> 3</span> 
                            <span className='f-f' style={{opacity:'60%'}}> | </span> 
                            <span className='f-f' style={{opacity:'60%'}}>Price:</span>
                            <span> 199</span>
                        </div>
                    </Col>
                </Row>
            </div>

            <div style={{border:'1px solid #cbc6bf', marginTop:'10px', marginBottom:'10px', fontSize:'14px'}}>
                <Row>
                    <Col xs={4}>
                        <div style={{
                            // height:'55px',
                            // width:'64px',
                            marginTop: '10px',
                            backgroundColor: 'white',
                            color: 'black',
                            borderColor: '#707070',
                            borderRadius: '1px'
                        }} className='d-flex justify-content-center'
                        >1</div>
                    </Col>
                    <Col xs={8}>
                        <div className='f-f' style={{marginTop: '10px'}}>
                            <h6 className='f-f'>Product Title</h6>
                            <span className='f-f' style={{opacity:'60%'}}>Quantity:</span> 
                            <span className='f-f'> 3</span> 
                            <span className='f-f' style={{opacity:'60%'}}> | </span> 
                            <span className='f-f' style={{opacity:'60%'}}>Price:</span>
                            <span> 199</span>
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={{height:'20px'}}/>
        </motion.div>
    );
}


export function ProductRowHeaderComp() {
    return (
        <Col xs={12} className='f-f-m'>
            <div style={{
                borderBottomStyle: 'solid',
                borderBottomColor: '#cbc6bf',
                borderBottomWidth: '1.7px',
                paddingTop:'18px',
                paddingBottom:'18px',
            }}>

                <Row>

                    <Col xs={2} md={1} className='d-none d-sm-none d-md-block'>
                        <div style={{
                            // height:'55px',
                            // width:'64px',
                            marginTop:'12px',
                            // backgroundColor: 'white',
                            color: 'black',
                            borderColor: '#707070',
                            borderRadius: '1px',
                            fontSize:'14px'
                        }} className='d-flex justify-content-center'
                        >NO</div>
                            

                    </Col>
                    <Col xs={6} md={6}>
                        <div style={{marginTop:'12px'}}>
                            {/* <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Product Name </h6> */}
                            <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Order Details </h6>
                            
                        </div>
                    </Col>
                    <Col xs={3} md={2} className='p-0 m-0'>
                        <div style={{marginTop:'12px'}}>
                            <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Track </h6>
                        </div>
                    </Col>
                    <Col xs={2} md={3} className='p-0 m-0'>
                        <h6 className='tabs' style={{fontSize:'14px',textAlign:'end' , paddingRight:'13px', marginTop:'18px'}}>
                            
                        </h6>
                    </Col>

                </Row>

            </div>
            
        </Col>
    )
}
