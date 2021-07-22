import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import AddressComp from './addressComp'
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

export default function ShippingComp({ setProfileScreenDisplayComp }) {
  const profileDetails = useSelector((state) => state.profile.userProfile)

  return (
    <>
      {profileDetails && (
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <Container className='pe-lg-5 ps-lg-0 m-0 d-flex justify-content-center'>
            <Row>
              <Col xs={12} className='d-block d-sm-none '>
                <div style={{ height: '30px' }}></div>
              </Col>
              <Col xs={12}>
                <h6 className='f-f-m'>Shipping</h6>
                <div style={{ paddingBottom: '30px' }}></div>
              </Col>

              <Col xs={12} className='d-block d-sm-block d-md-none f-f-l'>
                <h6>Mobile</h6>
              </Col>
              <Col xs={3} className='d-none d-sm-none d-md-block f-f-m'>
                <h6>Mobile</h6>
              </Col>
              <Col xs={8} md={5}>
                {profileDetails.phoneNumber === null ? (
                  <h6>Add Phone Number</h6>
                ) : (
                  <h6>{profileDetails.phoneNumber}</h6>
                )}
              </Col>
              <Col xs={4}>
                <h6
                  className='tabs f-f-m'
                  style={{ textAlign: 'end', paddingRight: '13px' }}
                  onClick={() => setProfileScreenDisplayComp(PROFILE_COMP)}
                >
                  {profileDetails.phoneNumber === null ? 'Add' : 'Edit'}
                </h6>
              </Col>
              <Col xs={12}>
                <hr style={{ marginTop: '3px', marginBottom: '25px' }} />
              </Col>

              <Col xs={12} className='d-block d-sm-block d-md-none f-f-l'>
                <h6>Email</h6>
              </Col>
              <Col xs={3} className='d-none d-sm-none d-md-block f-f-m'>
                <h6>Email</h6>
              </Col>
              <Col xs={8} md={5}>
                <h6>{profileDetails.email}</h6>
              </Col>
              <Col xs={4}>
                <h6
                  className='tabs f-f-m'
                  style={{ textAlign: 'end', paddingRight: '13px' }}
                  onClick={() => setProfileScreenDisplayComp(PROFILE_COMP)}
                >
                  Edit
                </h6>
              </Col>
              <Col xs={12}>
                <hr style={{ marginTop: '3px' }} />
              </Col>
              <Col xs={12}>
                <div style={{ height: '55px' }}></div>
              </Col>

              <Col xs={12}>
                <h6 className='f-f-m'>Shipping Address</h6>
              </Col>

              <ShippingAddressesComp profileDetails={profileDetails} />

              {profileDetails.shippingAddress.length > 0 ? (
                <AddressComp isAddNewAddress={true} />
              ) : null}
              {/* <AddressComp/>
                        <AddressComp isAddNewAddress={true}/> */}

              <Col xs={12}>
                <div style={{ height: '40px' }}></div>
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
      )}
    </>
  )
}

function ShippingAddressesComp({ profileDetails }) {
  return (
    <>
      {profileDetails.shippingAddress.length === 0 ? (
        <AddressComp isAddNewAddress={true} />
      ) : (
        profileDetails.shippingAddress.map((object, index) => {
          return (
            <AddressComp shippingAddress={object} index={index} key={index} />
          )
        })
      )}
    </>
  )
}
