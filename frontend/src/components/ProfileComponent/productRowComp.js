import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { storage } from '../../index'

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

export default function ProductRowComp({ orderDetails, index }) {
  const [showOrderDetails, setShowOrderDetails] = React.useState(false)

  return (
    <Col xs={12}>
      <div
        style={{
          borderTop: '1.7px solid #cbc6bf',
          // borderBottomStyle: 'solid',
          // borderBottomColor: '#cbc6bf',
          // borderBottomWidth: '1.7px',
          paddingTop: '12px',
          paddingBottom: '15px',
          cursor: 'pointer',
        }}
        onClick={() => setShowOrderDetails((prev) => !prev)}
      >
        <Row>
          <Col xs={2} md={1} className='d-none d-sm-none d-md-block'>
            <div
              style={{
                // height:'55px',
                // width:'64px',
                marginTop: '8px',
                // backgroundColor: 'white',
                color: 'black',
                borderColor: '#707070',
                borderRadius: '1px',
              }}
              className='d-flex justify-content-center'
            >
              {index + 1}
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div style={{ marginTop: '8px' }}>
              {/* <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Product Name </h6> */}
              <h6 style={{ fontSize: '14px', marginBottom: '2px' }}>
                {' '}
                Order ID{' '}
              </h6>
              <h6
                style={{
                  fontSize: '14px',
                  opacity: '50%',
                  marginBottom: '2px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {' '}
                {orderDetails._id}{' '}
              </h6>
            </div>
          </Col>
          <Col xs={3} md={2} className='p-0 m-0'>
            {/* <div style={{marginTop:'8px'}}>
                            <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Placed </h6>
                            <h6 style={{fontSize:'14px', opacity:'50%', marginBottom:'2px'}}> { returnFormatedDate() } </h6>
                        </div> */}

            <TrackOrder orderDetails={orderDetails} />
          </Col>
          <Col xs={3} md={3} className='p-0 m-0'>
            {/* <h6 className='tabs' style={{fontSize:'14px',textAlign:'end' , paddingRight:'13px', marginTop:'18px'}}> */}
            {CodReorderDeliveredButton()}
            {/* </h6> */}
          </Col>

          <Col xs={12}>
            <div style={{ height: '5px' }} />
          </Col>
          <Col xs={2} md={1} className='d-none d-sm-none d-md-block'></Col>

          <Col
            xs={6}
            md={6}
            className='f-f-l tabs'
            style={{ fontSize: '12px', textDecoration: 'underline' }}
          >
            View Details
          </Col>
        </Row>
      </div>

      {showOrderDetails ? <OdrerDetailsListComponent /> : null}
    </Col>
  )

  function TrackOrder({ orderDetails }) {
    if (
      orderDetails.deliveryStatus === null ||
      orderDetails.deliveryStatus === undefined
    ) {
      return (
        <div style={{ marginTop: '8px' }}>
          <h6 style={{ fontSize: '14px', marginBottom: '2px' }}> Placed </h6>
          <h6 style={{ fontSize: '14px', opacity: '50%', marginBottom: '2px' }}>
            {' '}
            {returnFormatedDate(orderDetails.createdAt)}{' '}
          </h6>
        </div>
      )
    } else {
      if (orderDetails.deliveryStatus === 'placed') {
        return (
          <div style={{ marginTop: '8px' }}>
            <h6 style={{ fontSize: '14px', marginBottom: '2px' }}> Placed </h6>
            <h6
              style={{ fontSize: '14px', opacity: '50%', marginBottom: '2px' }}
            >
              {' '}
              {returnFormatedDate(orderDetails.createdAt)}{' '}
            </h6>
          </div>
        )
      } else if (orderDetails.deliveryStatus === 'dispatched') {
        return (
          <div style={{ marginTop: '8px' }}>
            <h6 style={{ fontSize: '14px', marginBottom: '2px' }}>
              {' '}
              Dispatched{' '}
            </h6>
            {orderDetails.shipRocketLink === null ||
            orderDetails.shipRocketLink === undefined ? (
              <h6
                style={{
                  fontSize: '14px',
                  opacity: '50%',
                  marginBottom: '2px',
                }}
              >
                {' '}
                {returnFormatedDate(orderDetails.updatedAt)}{' '}
              </h6>
            ) : (
              <a
                href={orderDetails.shipRocketLink}
                rel='noreferrer'
                target='_blank'
                className='f-f-l tabs'
                style={{ fontSize: '12px', textDecoration: 'underline' }}
              >
                Track Order
              </a>
            )}
          </div>
        )
      } else {
        return (
          <div style={{ marginTop: '8px' }}>
            <h6 style={{ fontSize: '14px', marginBottom: '2px' }}>
              {' '}
              Delivered{' '}
            </h6>
            <h6
              style={{ fontSize: '14px', opacity: '50%', marginBottom: '2px' }}
            >
              {' '}
              {returnFormatedDate(orderDetails.updatedAt)}{' '}
            </h6>
          </div>
        )
      }
    }
  }

  function returnFormatedDate(stringdate) {
    let date = new Date(
      stringdate.substring(0, 4),
      stringdate.substring(5, 7) === 0 ? 0 : stringdate.substring(5, 7) - 1,
      stringdate.substring(8, 10)
    )
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

    return `${day} ${month} ${year}`
  }

  function CodReorderDeliveredButton() {
    if (
      (orderDetails.shippingPrice !== '' ||
        orderDetails.shippingPrice === null) &&
      !orderDetails.isPaid &&
      !orderDetails.isDelivered
    ) {
      return (
        <h6
          style={{
            fontSize: '14px',
            textAlign: 'end',
            paddingRight: '13px',
            marginTop: '18px',
          }}
        >
          COD
        </h6>
      )
    }
    if (orderDetails.isPaid && !orderDetails.isDelivered) {
      return (
        <h6
          style={{
            fontSize: '14px',
            textAlign: 'end',
            paddingRight: '13px',
            marginTop: '18px',
          }}
        >
          Paid
        </h6>
      )
    }
    if (orderDetails.isDelivered) {
      return (
        <h6
          className='tabs'
          style={{
            fontSize: '14px',
            textAlign: 'end',
            paddingRight: '13px',
            marginTop: '18px',
          }}
        >
          Re-order
        </h6>
      )
    }
  }

  function OdrerDetailsListComponent() {
    return (
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <Row>
          {orderDetails.orderItems.map((object, index) => {
            return (
              <Col xs={12} lg={6}>
                <OrderListCompnent itemDetail={object} />
              </Col>
            )
          })}

          {/* <Col xs={12} lg={6}>
                    <OrderListCompnent/>
                </Col>
    
                <Col xs={12} lg={6}>
                    <OrderListCompnent/>
                </Col> */}
        </Row>

        <div style={{ height: '20px' }} />
      </motion.div>
    )
  }

  function OrderListCompnent({ itemDetail }) {
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
      const getProperImageFromStorage = async () => {
        let rawImagePath = ''

        if (
          itemDetail.imagePath === undefined ||
          itemDetail.imagePath === null
          ) {
            rawImagePath = itemDetail.image
            console.log('image: '+ rawImagePath)
          } else {
            rawImagePath = itemDetail.imagePath
            console.log('imagePath'+ rawImagePath)
          }
          
        if (rawImagePath.search('p_images') !== -1) {
          rawImagePath = rawImagePath.replace('images/p_images', 'images_web')
          rawImagePath = await storage.ref(rawImagePath).getDownloadURL()
        } else if (rawImagePath.search('firebasestorage') !== -1) {
          rawImagePath = itemDetail.image
        } else if (rawImagePath.search('display_images') !== -1) {
          rawImagePath = await storage.ref(rawImagePath).getDownloadURL()
        }
        setImageURL(rawImagePath)
      }

      getProperImageFromStorage()

      return () => {}
    }, [itemDetail.image, itemDetail.imagePath, setImageURL])

    return (
      <div
        style={{
          border: '1px solid #cbc6bf',
          marginTop: '10px',
          marginBottom: '10px',
          fontSize: '14px',
        }}
      >
        <Row>
          <Col xs={3} lg={4} className='p-0 m-0'>
            <div
              style={{
                height: '70px',
                width: '70px',
                margin: '10px',
                marginLeft: '25px',
                backgroundColor: 'white',
                color: 'black',
                borderColor: '#707070',
                borderRadius: '1px',
              }}
              className='d-flex justify-content-center'
            >
              {/* <div
                                style={{ height: '65%', width: '100%', backgroundColor: '#6B584C' }}
                                > */}
              <img
                src={imageURL}
                alt={itemDetail.productName}
                width='100%'
                height='100%'
              />
              {/* </div> */}
            </div>
          </Col>
          <Col xs={7} lg={8}>
            <div
              className='f-f'
              style={{
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '5px',
              }}
            >
              <div style={{ marginTop: '12px' }}>
                <h6 className='f-f'>{itemDetail.productName}</h6>
                <span className='f-f' style={{ opacity: '60%' }}>
                  Quantity:
                </span>
                <span className='f-f'> {itemDetail.qty} </span>
                <span className='f-f' style={{ opacity: '60%' }}>
                  {' '}
                  |{' '}
                </span>
                <span className='f-f' style={{ opacity: '60%' }}>
                  Price:
                </span>
                <span> {itemDetail.price} </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export function ProductRowHeaderComp() {
  return (
    <Col xs={12} className='f-f-m'>
      <div
        style={{
          borderBottomStyle: 'solid',
          borderBottomColor: '#cbc6bf',
          borderBottomWidth: '1.7px',
          paddingTop: '18px',
          paddingBottom: '18px',
        }}
      >
        <Row>
          <Col xs={2} md={1} className='d-none d-sm-none d-md-block'>
            <div
              style={{
                // height:'55px',
                // width:'64px',
                marginTop: '12px',
                // backgroundColor: 'white',
                color: 'black',
                borderColor: '#707070',
                borderRadius: '1px',
                fontSize: '14px',
              }}
              className='d-flex justify-content-center'
            >
              NO
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div style={{ marginTop: '12px' }}>
              {/* <h6 style={{fontSize:'14px', marginBottom:'2px'}}> Product Name </h6> */}
              <h6 style={{ fontSize: '14px', marginBottom: '2px' }}>
                {' '}
                Order Details{' '}
              </h6>
            </div>
          </Col>
          <Col xs={3} md={2} className='p-0 m-0'>
            <div style={{ marginTop: '12px' }}>
              <h6 style={{ fontSize: '14px', marginBottom: '2px' }}> Track </h6>
            </div>
          </Col>
          <Col xs={2} md={3} className='p-0 m-0'>
            <h6
              className='tabs'
              style={{
                fontSize: '14px',
                textAlign: 'end',
                paddingRight: '13px',
                marginTop: '18px',
              }}
            >
              {' '}
            </h6>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
