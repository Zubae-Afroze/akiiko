import React ,{useState, useRef} from 'react'
import { Container, Row, Col,  } from 'react-bootstrap';
import { motion } from 'framer-motion'
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


export default function ProfileComp() {

    const [editMobileFieldON, setEditMobileFieldON] = useState(false);
    const [editNameFieldON, setEditNameFieldON] = useState(false);

    return (
        <motion.div variants={containerVariants} initial='hidden' animate='visible'>
        <Container className='pe-lg-5 ps-lg-0 m-0 d-flex justify-content-center'>  
            <Row>

                <Col xs={12} className='d-block d-sm-none '>
                    <div style={{height:'30px'}}></div>
                </Col>
                <Col xs={12}>
                    <h6 className='f-f-m'>Profile</h6>
                    <div style={{paddingBottom:'30px'}}></div>
                </Col>


                <Col md={3}>
                    <h6 className='d-none d-sm-none d-md-block'>Name</h6>
                </Col>
                <Col xs={8} md={5}>
                    {
                        editNameFieldON 
                        ?   <>
                                <div className='d-flex justify-content-center d-block d-sm-block d-md-none'>
                                    <span> <input type="text" size="8" className='input-filed-edit-style' autofocus placeholder=' First Name'></input> </span>
                                    <span> </span>
                                    <span> <input type="text" size="8" className='input-filed-edit-style' autofocus placeholder=' Last Name'></input> </span>
                                    
                                </div>

                                <div className='d-none d-sm-none d-md-block'>
                                    <div className='d-flex justify-content-center'>
                                        <span> <input type="text" size="10" className='input-filed-edit-style' autofocus placeholder=' First Name'></input> </span>
                                        <span> </span>
                                        <span> <input type="text" size="10" className='input-filed-edit-style' autofocus placeholder=' Last Name'></input> </span>
                                    </div>
                                </div>

                            </>
                        :   <><span>Sam</span> <span> </span><sapn>Surya</sapn></>
                    }
                </Col>
                <Col xs={4}>
                    <h6 className='tabs f-f-m' style={{textAlign:'end' , paddingRight:'13px'}} onClick={()=> setEditNameFieldON(!editNameFieldON)}>
                        {
                            editNameFieldON 
                            ?   'Update'
                            :   'Edit'
                        }
                    </h6>
                </Col>
                <Col xs={12}>
                    <hr style={{marginTop:'3px', marginBottom:'25px'}}/>   
                </Col>

                
                <Col xs={3}>
                    <h6>Mobile</h6>
                </Col>
                <Col xs={5}>
                    {
                        editMobileFieldON 
                        ?   <input type="text" size="12" className='input-filed-edit-style' autofocus placeholder=' Mobile Number'></input>
                        :   <h6>+9123456789</h6>
                    }
                </Col>
                <Col xs={4}>
                    <h6 className='tabs f-f-m' style={{textAlign:'end' , paddingRight:'13px'}} onClick={()=> setEditMobileFieldON(!editMobileFieldON)}>
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
                <h6 className='tabs f-f-m' style={{textAlign:'end' , paddingRight:'13px'}}>Edit</h6>
                </Col>
                <Col xs={12}>
                    <hr style={{marginTop:'3px'}}/>   
                </Col>
                <Col xs={12}>
                    <div style={{height:'55px'}}></div>
                </Col>


            </Row>
        </Container>
        
        </motion.div>
    )
}
