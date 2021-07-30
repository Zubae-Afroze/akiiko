import React, {useContext,useState} from 'react'
import { Row,Col, Button, Spinner } from 'react-bootstrap'
import { CheckOutFormContext, formEntranceAnimation } from '../../screens/Stable Checkout Screen/CheckOutIndex'
import Astric from '../../components/CheckOut/asterisk.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createOrder } from '../../actions/actionOrder'
import { addNewShippingAddress } from '../../actions/actionProfile'
import { motion } from 'framer-motion'
import '../../screens/Stable Checkout Screen/CheckOutStlye.css'


export default function ReviewFormT() {

    const cartList = useSelector((state) => state.cartList)

    // const orderPlacedDetail = useSelector((state) => state.orderCreate.order)
    
    const profileDetails = useSelector((state) => state.profile.userProfile)


    const dispatch = useDispatch()

    let history = useHistory()

    const checkOutFormObj = useContext(CheckOutFormContext);



    const onPaymentFormSubmit = (e) => {
        e.preventDefault()
        const itemPriceTemp = cartList.cartItems.reduce(
          (acc, items) => acc + items.qty * items.price,
          0
        )
        const additionlaPriceTemp = itemPriceTemp > 500 ? 0 : 50
        // const shippingPriceTemp = checkOutFormObj.formObject.isCodChecked ? 50 : 0
        const shippingPriceTemp = additionlaPriceTemp === 50 ? 0 : checkOutFormObj.formObject.isCodChecked ? 50 : 0
        
    
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
          totalPrice: itemPriceTemp + additionlaPriceTemp + shippingPriceTemp,
          isPaid: false,
          isDelivered: false,
          orderItems: orderItemsList,
          user: profileDetails._id,
          shippingAddress: {
            firstName: checkOutFormObj.formObject.firstName,
            lastName: checkOutFormObj.formObject.lastName,
            email: profileDetails.email,
            address: checkOutFormObj.formObject.address,
            phoneNumber: checkOutFormObj.formObject.phoneNumber,
            city: checkOutFormObj.formObject.city,
            state: checkOutFormObj.formObject.state,
            postalCode: checkOutFormObj.formObject.zipCode,
          },
          paymentMethod: checkOutFormObj.formObject.isCodChecked ? 'cod' : 'online',
          deliveryStatus: 'placed',
          shipRocketLink: '',
        }
    
        console.log(finalOrderPlacemnetJson)

        // let cardDetails = {
        //     number : checkOutFormObj.formObject.cardNumber ,
        //     expiryMonth: checkOutFormObj.formObject.month ,
        //     expiryYear: checkOutFormObj.formObject.year ,
        // }
    
    
        // dispatch(createOrder(finalOrderPlacemnetJson,profileDetails.email,history))
    
        // if(checkOutFormObj.formObject.isNewAddress){
    
        //   dispatch(addNewShippingAddress({
        //     firstname : checkOutFormObj.formObject.firstName,
        //     lastname : checkOutFormObj.formObject.lastName,
        //     address : checkOutFormObj.formObject.address,
        //     mobile : checkOutFormObj.formObject.phoneNumber,
        //     city : checkOutFormObj.formObject.city,
        //     state : checkOutFormObj.formObject.state,
        //     zipCode : checkOutFormObj.formObject.zipCode,
        //   }))
    
        // }
    
    }


    return (
        <>
            <motion.div variants={formEntranceAnimation} initial='hidden' animate='visible'>

            <div className='forms-height'>

                <Row className='p-0 m-0'>
                    
                    <Col xs={12} className='p-0 m-0'>
                        <h6>Shipping</h6>
                    </Col>

                    <AddressComp />

                    <Col xs={12} className='p-0 m-0'>
                        <hr/>
                    </Col>

                    <Col xs={12} className='p-0 m-0'>
                        <h6>Payment</h6>
                    </Col>
                    
                    <PaymentTypeComp />

                </Row>

            </div>


            <PaymentButton onPaymentFormSubmit={onPaymentFormSubmit} checkOutFormObj={checkOutFormObj} />
            {/* <div className='d-none d-sm-none d-md-block'>
                <Row className='p-0 m-0'>
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0'>
                        <Button
                            style={{ backgroundColor: '#977257', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                            size='lg'
                            variant='primary'
                            type='submit'
                            className='p-2 m-0 Button-on-click'
                            onClick={onPaymentFormSubmit}
                            disabled
                        >
                            {
                                checkOutFormObj.formObject.isCodChecked ?
                                'Confirm'
                                : 'PAY'
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className='d-block d-sm-block d-md-none f-f-m'>
                <div className='d-flex justify-content-center '>
                    <Button
                        style={{ backgroundColor: '#977257', border: 0, borderRadius: 0 }}
                        size='md'
                        variant='primary'
                        type='submit'
                        className='px-5 me-3 mt-3 mb-3 Button-on-click'
                        
                        onClick={onPaymentFormSubmit}
                    >
                        {
                            checkOutFormObj.formObject.isCodChecked ?
                            'Confirm'
                            : 'PAY'
                        }
                    </Button>
                </div>
            </div> */}

            </motion.div>

        </>

        
    )


    function AddressComp(){
    console.log('Is New Address :' + checkOutFormObj.formObject.isNewAddress)

        return(
            <>
                <Col xs={10} className='p-0 m-0'>
                    <div>
                        <h6>{checkOutFormObj.formObject.firstName + ' ' + checkOutFormObj.formObject.lastName}</h6>
                        <h6>{checkOutFormObj.formObject.address}</h6>
                        <h6>{checkOutFormObj.formObject.city + '-' +checkOutFormObj.formObject.zipCode}</h6>
                        <h6 className='p-0 m-0'>Mobile - {checkOutFormObj.formObject.phoneNumber}</h6>
                    </div>
                </Col>

                <Col xs={2} className='p-0 m-0'>
                    <h6 className='p-0 m-0'
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }}
                        onClick={() =>  checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel:0}) }
                    >
                        Edit
                    </h6>
                </Col>
            </>
        )
    }


    function PaymentTypeComp(){
        return(
            <>
                <Col xs={11} className='p-0 m-0'>
                    <div className='payment-method-type-box'>

                    {
                        checkOutFormObj.formObject.isCodChecked
                        ? <h6> Cash On Delivery </h6>
                        : checkOutFormObj.formObject.isNetbankingUpiChecked
                        ? <h6>Net Banking UPI</h6>
                        : <EncryptedCardNumber />
                    }
                    </div>
                </Col>
 
                <Col xs={1} className='p-0 m-0'>
                    <h6 className='p-0 m-0'
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }}
                        onClick={() =>  checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel:1}) }
                    >
                        Edit
                    </h6>
                </Col>
            </>
        );
    }

    function EncryptedCardNumber(){
        let lastFourNumbers  = checkOutFormObj.formObject.cardNumber.substring(12, 17);
        return(
          <div>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <div style={{width:'5px', display:'inline-block'}}/>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <div style={{width:'5px', display:'inline-block'}}/>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <img src={Astric} alt='Astric'/>
            <div style={{width:'5px', display:'inline-block'}}/>
            <h6 style={{display:'inline-block'}}>{lastFourNumbers}</h6>
          </div>
        );
      }

}


function PaymentButton({onPaymentFormSubmit,checkOutFormObj}){


    const [ payButtonClicked , setpayButtonClicked ] = useState(false);

    return(
        <>
            <div className='d-none d-sm-none d-md-block'>
                <Row className='p-0 m-0'>
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0'>
                        <Button
                            style={{ backgroundColor: '#977257', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                            size='lg'
                            variant='primary'
                            type='submit'
                            className='p-2 m-0 Button-on-click'
                            disabled={payButtonClicked}
                            onClick={(e)=>{
                                if(!payButtonClicked){
                                    onPaymentFormSubmit(e)
                                    // console.log('Pay Button Clicked')
                                }
                                setpayButtonClicked(true)
                                setTimeout(function() {
                                    setpayButtonClicked(false)
                                }, 5000);
                            }}
                        >
                            {/* {
                                checkOutFormObj.formObject.isCodChecked ?
                                'Confirm'
                                : 'PAY'
                            } */}

                            <PayButtonClild />
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className='d-block d-sm-block d-md-none f-f-m'>
                <div className='d-flex justify-content-center '>
                    <Button
                        style={{ backgroundColor: '#977257', border: 0, borderRadius: 0 }}
                        size='md'
                        variant='primary'
                        type='submit'
                        className='px-5 me-3 mt-3 mb-3 Button-on-click'
                        disabled={payButtonClicked}
                        onClick={(e)=>{
                                if(!payButtonClicked){
                                    onPaymentFormSubmit(e)
                                    // console.log('Pay Button Clicked')
                                }
                                setpayButtonClicked(true)
                                setTimeout(function() {
                                    setpayButtonClicked(false)
                                }, 5000);
                            }}
                        >
                            {/* {
                                checkOutFormObj.formObject.isCodChecked ?
                                'Confirm'
                                : 'PAY'
                            } */}

                            <PayButtonClild />
                    </Button>
                </div>
            </div>
        </>
    )


    function PayButtonClild(){
        if(payButtonClicked){
            return <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        }else{
            
            if(checkOutFormObj.formObject.isCodChecked){
                return 'Confirm'
            }else{
                return 'PAY'
            }

        }
    }
}
