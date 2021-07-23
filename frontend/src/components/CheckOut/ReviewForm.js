import React, { useContext, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import {
  shippingObject,
  paymentObject,
  isAddNewAddressSelected,
} from './FormObject'
import '../../screens/Chekout/style.css'
import stepperLevel from './StepperContants'
import { useSelector, useDispatch } from 'react-redux'
import { CashOnDeliveryContext } from '../../screens/Chekout/Checkout'
import { createOrder, resetOrder } from '../../actions/actionOrder'
import { useHistory } from 'react-router-dom'
import { resetCartItems } from '../../actions/actionCart'
import Astric from './asterisk.svg'
import { addNewShippingAddress } from '../../actions/actionProfile'

// import { Link, useParams } from 'react-router-dom';
// import Message from '../../components/Message/Message';

// // import axios from 'axios';

// import MyComponent from 'react-fullpage-custom-loader';
// import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import { getOrderDetails } from '../../actions/actionOrder'
import axios from 'axios'

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

export default function ReviewForm({ setFormLevel }) {
  const cartList = useSelector((state) => state.cartList)

  const orderPlacedDetail = useSelector((state) => state.orderCreate.order)

  const profileDetails = useSelector((state) => state.profile.userProfile)

  const cashOnDeliveryContext = useContext(CashOnDeliveryContext)

  const dispatch = useDispatch()

  let history = useHistory()

  console.log('COD Order In Payment: ' + cashOnDeliveryContext.value)

  const payButtonFunction = (e) => {
    e.preventDefault()
    const itemPriceTemp = cartList.cartItems.reduce(
      (acc, items) => acc + items.qty * items.price,
      0
    )
    const additionlaPriceTemp = itemPriceTemp > 500 ? 0 : 50
    const shippingPriceTemp = cashOnDeliveryContext.value ? 50 : 0

    const orderItemsList = cartList.cartItems.map((item, index) => {
      return {
        product: item.product,
        productName: item.productName,
        image: item.image,
        price: item.price,
        qty: item.qty,
      }
    })

    const finalOrderPlacemnetJson = {
      itemsPrice: itemPriceTemp,
      taxPrice: additionlaPriceTemp, //aditional Price
      shippingPrice: shippingPriceTemp,
      totalPrice: itemPriceTemp,
      //+ additionlaPriceTemp + shippingPriceTemp,
      isPaid: false,
      isDelivered: false,
      orderItems: orderItemsList,
      user: profileDetails._id,
      shippingAddress: {
        firstName: shippingObject.firstname,
        lastName: shippingObject.lastname,
        address: shippingObject.adress,
        phoneNumber: shippingObject.mobile,
        city: shippingObject.city,
        state: shippingObject.state,
        postalCode: shippingObject.zipCode,
      },
      paymentMethod: cashOnDeliveryContext.value ? 'cod' : 'online',
    }

    console.log(finalOrderPlacemnetJson)

    // dispatch(createOrder(finalOrderPlacemnetJson)).then(()=>{

    //   // history.replace('/ordersuccess')
    //   // dispatch(resetCartItems())

    // }).then(()=>{

    //   // dispatch(resetOrder())

    // }).catch((e)=>{
    //   console.log(e)
    // })

    dispatch(
      createOrder(finalOrderPlacemnetJson, profileDetails.email, history)
    )

    if (isAddNewAddressSelected.value) {
      dispatch(
        addNewShippingAddress({
          firstname: shippingObject.firstname,
          lastname: shippingObject.lastname,
          address: shippingObject.adress,
          mobile: shippingObject.mobile,
          city: shippingObject.city,
          state: shippingObject.state,
          zipCode: shippingObject.zipCode,
        })
      )
    }

    // .then(() => {
    //   if(finalOrderPlacemnetJson.paymentMethod === 'cod'){
    //     history.replace('/ordersuccess')
    //   }else{
    //     payHandler(finalOrderPlacemnetJson)
    //       .then((res)=>{
    //         console.log('Payment: '+res)
    //     })
    //     .catch((e) => {
    //         console.log('Error: '+ e)
    //     })

    //   }

    // })

    // await dispatch(createOrder(finalOrderPlacemnetJson))

    // if(finalOrderPlacemnetJson.paymentMethod === 'cod') {
    //   history.replace('/ordersuccess')
    // } else {
    //   await payHandler(finalOrderPlacemnetJson)
    // }

    // dispatch(createOrder(finalOrderPlacemnetJson)).then(()=>{

    //   history.replace('/ordersuccess')
    //   dispatch(resetCartItems())

    // }).then(()=>{

    //   dispatch(resetOrder())

    // }).catch((e)=>{
    //   console.log(e)
    // })

    console.log('order created ' + orderPlacedDetail)
  }

  // const orderDetails = useSelector(state => state.orderDetails)
  // const { orderItems, loading, error } = orderDetails

  // const user = useSelector(state => state.userLogin)
  // const { userInfo } = user

  // const payHandler = async () => {
  //     const config = {
  //         headers: {
  //             'Content-Type': 'application/json',
  //             // Authorization: `Bearer ${userInfo.token}`
  //         }
  //     }

  //     const { data: dataRazor } = await axios.get(`/api/orders/${orderItems._id}/pay`, config)

  //     var options = {
  //         "key": dataRazor.razor_key,
  //         "amount": dataRazor.amount,
  //         "currency": dataRazor.currency,
  //         "name": orderItems.user.name,
  //         "description": "",
  //         "order_id": dataRazor.id,
  //         "handler": async function (response) {
  //             // alert(response.razorpay_payment_id);
  //             // alert(response.razorpay_order_id);
  //             // alert(response.razorpay_signature);
  //             console.log(response)
  //             try {
  //                 const res = await axios.post(`/api/orders/${orderItems._id}/ordercomplete`, {
  //                     payment_id: response.razorpay_payment_id,
  //                     razorpay_order_id: response.razorpay_order_id,
  //                     signature: response.razorpay_signature
  //                 }, config)
  //                 console.log(res);

  //                 //We can use res.body orderItems to overwitre the order details to store
  //                 dispatch(getOrderDetails(orderItems._id))
  //             } catch (error) {
  //                 console.log(error);
  //             }
  //         },
  //         "prefill": {
  //             "name": orderItems.user.name,
  //             "email": orderItems.user.email,
  //             "contact": userInfo.phoneNumber
  //         },
  //         "notes": {
  //             "address": "Razorpay Corporate Office"
  //         },
  //         "theme": {
  //             "color": "#6e4e37"
  //         }
  //     };
  //     var rzp1 = new window.Razorpay(options);
  //     rzp1.open();
  // }

  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible'>
      <h6
        style={{ color: '#4A4A4A', fontWeight: 500, marginBottom: '20px' }}
        className='f-f-m'
      >
        Shipping
      </h6>
      <Container fluid className='p-0 m-0' style={{ minHeight: '240px' }}>
        <Row className='p-0 m-0'>
          <NameComp />

          <AddressComp />

          <CityStateComp />

          {/* <Col xs={0} md={6}></Col> */}

          <EditShippingDetailsButtonComp setFormLevel={setFormLevel} />

          <Col xs={12} className='p-0 m-0'>
            <hr />
          </Col>

          <Col xs={12} className='p-0 m-0 f-f-m'>
            <h6>Payment</h6>
          </Col>

          <PaymentDetailComp />

          <EditCardDetailsButtonComp setFormLevel={setFormLevel} />

          <hr />

          <Col xs={4} md={8} className='p-0 m-0'></Col>

          <Col xs={4} md={0} className='p-0 m-0'></Col>
        </Row>
      </Container>

      {/* <Route render={({ history}) => (
        <button
          type='button'
          onClick={() => { history.push('/new-location') }}
        >
          Click Me!
        </button>
      )} /> */}

      <LargeScreenPAYbuttonComp payButtonFunction={payButtonFunction} />

      <SmallScreenPAYbuttonComp payButtonFunction={payButtonFunction} />
    </motion.div>
  )
}
// <Route render={({ history}) => (
//   <button
//     type='button'
//     onClick={() => { history.push('/new-location') }}
//   >
//     Click Me!
//   </button>
// )} />

function NameComp() {
  return (
    <Col xs={12} className='p-0 m-0'>
      <Container
        fluid
        style={{
          marginTop: '5px',
          color: '#4A4A4A',
          width: '100%',
        }}
        className='p-0 m-0 f-f'
      >
        <div style={{ display: 'inlineBlock' }}>
          {shippingObject.firstname + ' ' + shippingObject.lastname}
        </div>
      </Container>
    </Col>
  )
}

function AddressComp() {
  console.log('Address: ' + shippingObject.adress)
  return (
    <Col xs={12} className='p-0 m-0'>
      <Container
        fluid
        style={{
          marginTop: '5px',
          color: '#4A4A4A',
          width: '100%',
        }}
        className='p-0 m-0 f-f'
      >
        <div style={{ display: 'inlineBlock' }}>{shippingObject.adress}</div>
        <div style={{ display: 'inlineBlock' }}>{shippingObject.mobile}</div>
      </Container>
    </Col>
  )
}

function CityStateComp() {
  return (
    <Col xs={11} className='p-0 m-0'>
      <Container
        fluid
        style={{
          marginTop: '5px',
          color: '#4A4A4A',
          width: '100%',
        }}
        className='p-0 m-0 f-f'
      >
        <div style={{ display: 'inlineBlock' }}>
          {shippingObject.city +
            ' - ' +
            shippingObject.zipCode +
            ' ' +
            shippingObject.state}
        </div>
      </Container>
    </Col>
  )
}

function EditShippingDetailsButtonComp({ setFormLevel }) {
  return (
    <Col xs={1} className='p-0 m-0'>
      <Container
        fluid
        style={{
          marginTop: '5px',
          color: '#4A4A4A',
          width: '100%',
          height: '100%',
        }}
        className='p-0 m-0 f-f-m'
        //
      >
        <h6
          className='p-0 m-0'
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onClick={() => setFormLevel(stepperLevel.SHIPPING)}
        >
          Edit
        </h6>
      </Container>
    </Col>
  )
}

function PaymentDetailComp() {
  return (
    <Col xs={11} className='f-f p-0 m-0'>
      <div
        // style={{
        //   padding: '12px',
        //   paddingTop: '20px',
        //   paddingLeft: '20px',
        //   borderStyle: 'solid',
        //   borderColor: '#ced4da',
        //   borderWidth: '1px',
        //   marginTop: '10px',
        //   marginBottom: '10px',
        //   width: '60%',
        // }}
        className='payment-detail-component'
      >
        {paymentObject.isCOD ? (
          <h6> Cash On Delivery </h6>
        ) : paymentObject.isNetbankingUPI ? (
          <h6>Net Banking UPI</h6>
        ) : (
          <EncryptedCardNumber />
        )}
      </div>
    </Col>
  )
}

function EncryptedCardNumber() {
  let lastFourNumbers = paymentObject.cardNumber.substring(12, 17)
  return (
    <div>
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <div style={{ width: '5px', display: 'inline-block' }} />
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <div style={{ width: '5px', display: 'inline-block' }} />
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <img src={Astric} alt='Astric' />
      <div style={{ width: '5px', display: 'inline-block' }} />
      <h6 style={{ display: 'inline-block' }}>{lastFourNumbers}</h6>
    </div>
  )
}

// paymentObject.isCOD
//         ? <h6> Cash On Delivery </h6>
//         : paymentObject.isNetbankingUPI
//         ? <h6>Net Banking UPI</h6>
//         : <h6> .... .... 9876 </h6>

function EditCardDetailsButtonComp({ setFormLevel }) {
  return (
    <Col xs={1} className='p-0 m-0'>
      <Container
        fluid
        style={{
          marginTop: '5px',
          color: '#4A4A4A',
          width: '100%',
          height: '100%',
        }}
        className='p-0 m-0 f-f-m'
      >
        <h6
          className='p-0 m-0'
          style={{
            position: 'absolute',
            bottom: '10px',
            right: 0,
          }}
          onClick={() => setFormLevel(stepperLevel.PAYMENT)}
        >
          {' '}
          Edit
        </h6>
      </Container>
    </Col>
  )
}

function LargeScreenPAYbuttonComp({ payButtonFunction }) {
  return (
    <div>
      <Row className='p-0 m-0'>
        <Col xs={8} className='p-0 m-0' />

        <Col xs={4} md={4} className='p-0 m-0'>
          <div
            className='d-none d-sm-none d-md-block'
            // style={{ paddingRight: '1rem' }}
          >
            <div className='d-flex justify-content-end'>
              <Button
                style={{
                  backgroundColor: '#977257',
                  border: 0,
                  borderRadius: 0,
                  width: '100%',
                  marginLeft: '7px',
                }}
                size='lg'
                variant='primary'
                type='submit'
                className='px-5 me-3 mt-3 mb-3'
                onClick={(e) => {
                  console.log(
                    'isAddressSelected: ' + isAddNewAddressSelected.value
                  )
                  e.preventDefault()
                  payButtonFunction(e)
                }}
              >
                PAY
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

function SmallScreenPAYbuttonComp({ payButtonFunction }) {
  return (
    <div className='d-block d-sm-block d-md-none'>
      <div className='d-flex justify-content-center '>
        <Button
          style={{ backgroundColor: '#977257', border: 0, borderRadius: 0 }}
          size='md'
          variant='primary'
          type='submit'
          className='px-5 me-3 mt-3 mb-3'
          onClick={(e) => {
            console.log('isAddressSelected: ' + isAddNewAddressSelected.value)
            e.preventDefault()
            payButtonFunction(e)
          }}
        >
          PAY
        </Button>
      </div>
    </div>
  )
}

/* <Row className='p-0 m-0'>
          <Col xs={12} className='p-0 m-0'>
            <Container fluid
              style={{
                marginTop: '5px',
                color: '#4A4A4A',
                width: '100%'
              }}
              className='p-0 m-0 f-f-m'
            >
              <div style={{display:'inlineBlock' }}>{shippingObject.firstname + ' ' + shippingObject.lastname}</div>
              <div style={{display:'inlineBlock' }}>{shippingObject.aptFloorSuit + ' ' + shippingObject.adress}</div>

              <div className='d-flex justify-content-between' style={divWidth}>
                <h6 style={{display:'inlineBlock' }}>{shippingObject.city + ' - ' + shippingObject.zipCode + ' ' + shippingObject.state}</h6>
                <h6>Edit</h6>
              </div>
            </Container>
          </Col>

          <Col xs={12} className='p-0 m-0'>
            <hr />  
          </Col>
          
          <Col xs={12} className='p-0 m-0'>
            <section className='f-f-m'>
              <h5>Payment</h5>
              <div className='d-flex justify-content-between' style={divWidth}>
                <div
                  style={{
                    padding: '15px',
                    borderStyle: 'solid',
                    borderColor: '#E3DED5',
                    borderWidth: '2px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    width: '60%',
                  }}
                >
                  <h6> . . . . 98825 </h6>
                </div>
                <h6
                  style={{
                    padding: '15px',
                    paddingRight:0,
                    marginTop: '15px',
                    marginBottom: '10px',
                  }}
                >
                  Edit
                </h6>
              </div>
            </section>
          </Col>
          <hr />
          <Col xs={4} md={8} className='p-0 m-0'></Col>
          <Col xs={4} md={4} className='p-0 m-0'>
            <div
                className='d-none d-sm-none d-md-block'
                // style={{ paddingRight: '1rem' }}
              >
                <div className='d-flex justify-content-end'>
                  
                  <Button
                    style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                    size='lg'
                    variant='primary'
                    type='submit'
                    className='px-5 me-3 mt-3 mb-3'
                    onClick={() => setFormLevel(2)}
                  >
                    Next
                  </Button>
                </div>
              </div>

          </Col>
          <Col xs={4} md={0} className='p-0 m-0'></Col>
        </Row> */
