import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Container, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Message from '../../components/Message/Message';

import axios from 'axios';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import { Razorpay } from 'razorpay'

import { getOrderDetails, payOrder } from '../../actions/actionOrder';
import { ORDER_PAY_RESET } from '../../constants/orderConstants';

import hmac_sha256 from 'crypto-js/hmac-sha512';



const OrderSummaryScreen = () => {
    const dispatch = useDispatch();

    const { orderId } = useParams();

    // const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { orderItems, loading, error } = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const addScript = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        document.body.appendChild(script)
    }

    const testHandler = async () => {
        const { data: dataRzr } = await axios.get(`/api/orders/${orderItems._id}/razorpay`)
        console.log(dataRzr)

        var options = {
            "key": dataRzr.razor_key, // Enter the Key ID generated from the Dashboard
            "amount": dataRzr.amount_due, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": dataRzr.currency,
            "name": dataRzr.name,
            "description": "Test Transaction",
            "order_id": dataRzr.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);

                const genSign = hmac_sha256(dataRzr.id + "|" + response.razorpay_payment_id, dataRzr.razor_secret)

                if (genSign == response.razorpay_signature) {
                    console.log('payment sucessfull')
                } else {
                    console.log('payment unsucessfull')
                }
            },

            //pay_GSMg3WUJDav2cZ - paymentID
            //order_GSMfqcY5cXODrR - order_id
            //fc2a3be517771e99f1bcacdab1a5df166eee86a9e1c115ddd859d9d90b7895b8 signature
            "prefill": {
                "name": orderItems.user.name,
                "email": orderItems.user.email,
                "contact": "9791210691"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const rzp1 = new window.Razorpay(options);
        // document.getElementById('rzp-button1').onclick = function (e) {
        //     rzp1.open();
        //     e.preventDefault();
        // }

        rzp1.open();
    }

    useEffect(() => {
        dispatch(getOrderDetails(orderId))

        addScript();
    }, [dispatch, orderId])


    // useEffect(() => {
    //     const addPayPalScript = async () => {
    //         const { data: dataKey } = await axios.get('/api/config/razorpay');
    //         const script = document.createElement('script');
    //         script.type = 'text/javascript';
    //         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    //         script.async = true;
    //         script.onload = () => {
    //             setSdkReady(true)
    //         }
    //         document.body.appendChild(script)
    //     }

    //     if (!orderItems._id || successPay) {
    //         dispatch({ type: ORDER_PAY_RESET })
    //         dispatch(getOrderDetails(orderId))
    //     } else if (!orderItems.isPaid) {
    //         if (!window.paypal) {
    //             addPayPalScript()
    //         } else {
    //             setSdkReady(true)
    //         }
    //     }

    // }, [dispatch, orderId, successPay, orderItems])

    // const successPaymentHandler = (paymentResult) => {
    //     console.log(paymentResult)
    //     dispatch(payOrder(orderId, paymentResult))
    // }

    return loading ? <MyComponent
        sentences={[]}
        wrapperBackgroundColor={'rgba(255,255,255)'}
        color={'#6e4e37'}
        loaderType={'ball-spin-clockwise'}
        customLoader={<SpinnerIcon />}
    /> : error ?
            <Message>{error}</Message> :
            <Container>
                <Message>Order:{orderItems._id}</Message>
                <Row>
                    <Col>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <strong>Name: </strong>{orderItems.user.name}<br />
                                <strong>Email: </strong><a href={`mailto:${orderItems.user.email}`}>{orderItems.user.email}</a>
                                <p><strong>Address:</strong>
                                    {orderItems.shippingAddress.address}, {orderItems.shippingAddress.city}
                                    {orderItems.shippingAddress.postalCode}, {orderItems.shippingAddress.country}
                                </p>
                                {orderItems.isDelivered ? <Message>DeliveredOn {orderItems.deliveredAt}</Message> : <Message>Not Delivered</Message>}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method:</strong>
                                    {orderItems.paymentMethod}
                                </p>
                                {orderItems.isPaid ? <Message>PaidOn {orderItems.paidAt}</Message> : <Message>Not Paid</Message>}
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {
                                    orderItems.orderItems.length === 0 ? <Message>Your Order is empty</Message>
                                        : (
                                            <ListGroup variant='flush'>
                                                {
                                                    orderItems.orderItems.map((item, index) => (
                                                        <ListGroup.Item key={index}>
                                                            <Row>
                                                                <Col>
                                                                    <Image src={item.image} alt={item.image} fluid rounded style={{ height: "50px", width: "50px" }} />
                                                                </Col>
                                                                <Col>
                                                                    <Link to={`/product/${item.product}`}>{item.productName}</Link>
                                                                </Col>
                                                                <Col>
                                                                    {item.qty} x &#x20B9;{item.price} = &#x20B9;{item.qty * item.price}
                                                                </Col>
                                                            </Row>
                                                        </ListGroup.Item>
                                                    ))
                                                }
                                            </ListGroup>
                                        )
                                }
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Card>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items Price</Col>
                                    <Col>&#x20B9;{orderItems.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>&#x20B9;{orderItems.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total Price</Col>
                                    <Col>&#x20B9;{orderItems.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <button id="rzp-button1" onClick={testHandler}>Pay</button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </Card>
                    </Col>
                </Row>
            </Container>
}

export default OrderSummaryScreen