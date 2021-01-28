import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Message from '../../components/Message/Message';

// import axios from 'axios';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import { getOrderDetails } from '../../actions/actionOrder';
import { resetCartItems } from '../../actions/actionCart'
import axios from 'axios';
// import { ORDER_PAY_RESET } from '../../constants/orderConstants';



const OrderSummaryScreen = () => {
    const dispatch = useDispatch();

    const { orderId } = useParams();

    // const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { orderItems, loading, error } = orderDetails

    const user = useSelector(state => state.userLogin)
    const { userInfo } = user

    const payHandler = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data: dataRazor } = await axios.get(`/api/orders/${orderItems._id}/pay`, config)

        var options = {
            "key": dataRazor.razor_key,
            "amount": dataRazor.amount,
            "currency": dataRazor.currency,
            "name": orderItems.user.name,
            "description": "Test Transaction",
            "order_id": dataRazor.id,
            "handler": async function (response) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
                console.log(response)
                try {
                    const res = await axios.post(`/api/orders/${orderItems._id}/ordercomplete`, {
                        payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        signature: response.razorpay_signature
                    }, config)
                    console.log(res);

                    //We can use res.body orderItems to overwitre the order details to store
                    dispatch(getOrderDetails(orderItems._id))
                } catch (error) {
                    console.log(error);
                }
            },
            "prefill": {
                "name": orderItems.user.name,
                "email": orderItems.user.email,
                "contact": orderItems.user.phoneNumber || null
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#6e4e37"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
        dispatch(resetCartItems())

        //addScript();
    }, [dispatch, orderId])

    return ( 
    loading ? <MyComponent
         sentences={[]}
         wrapperBackgroundColor={'rgba(255,255,255)'}
         color={'#6e4e37'}
         loaderType={'ball-spin-clockwise'}
         customLoader={<SpinnerIcon />}
        /> : error ? 
        <Message>{error}</Message> :
        <Container>
            <Row>
                <div className='shipping-and-order-wrap'>
                    <Col>
                        <div className='ship-head'>Your Shipping Address</div>
                        <div className='ship-card-wrap'>
                            <Card className='ship-card'>
                                <div className='add-wrap'>
                                    <div>Name: {orderItems.user.name}</div>
                                    <div>Email: {orderItems.user.email}</div>
                                    <div>Address: {orderItems.shippingAddress.address}</div>
                                    <div>City: {orderItems.shippingAddress.city}</div>
                                    <div>Postal Code:{orderItems.shippingAddress.postalCode}</div>
                                </div>
                                {orderItems.isDelivered ? <Message>Delivered On: {orderItems.deliveredAt}</Message> : <Message>Not Delivered</Message>}
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className='pay-head'>
                            <div>Order Summary</div>
                        </div>
                        <div>
                            <Card>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Amount</Col>
                                        <Col>&#x20B9;{orderItems.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>iGST of 12%</Col>
                                        <Col>&#x20B9;{orderItems.taxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Total</Col>
                                        <Col>&#x20B9;{orderItems.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                            <Row>
                                                {orderItems.paymentMethod === 'online' ? <><Col>Payment Method:</Col><Col>Online</Col></>
                                                :
                                                <><Col>Payment Method:</Col><Col>Cash on Delivery</Col></>
                                                }
                                            </Row>
                                </ListGroup.Item>
                                {error && <Message>{error}</Message>}
                            </Card>
                        </div>
                    </Col>
                </div>
            </Row>
            <Row>
                <div className="products-and-payment-wrap">
                    <Col>
                    <div className='items-head'>
                            <div>Your Products  </div>
                            <div className='items-card-wrap'>
                                <Card className='items-card'>
                                    {
                                        orderItems.orderItems.length === 0 ? <Message>Your cart is empty</Message> :
                                        (
                                            orderItems.orderItems.map((item, index) => (
                                                <div key={index}>
                                                    <Row className='items-row'>
                                                        <Col lg={2}>
                                                            <img src={item.image} alt={item.image} style={{hegiht: "50px", width: "50px"}}/>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <Link to={`/product/${item.product}`}>{item.productName}</Link>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <strong>Quantity:</strong> {item.qty}
                                                        </Col>
                                                        <Col lg={3}>
                                                            <strong>Price:</strong> &#x20B9;{item.qty * item.price}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            ))
                                        )
                                    }
                                </Card>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    { orderItems.paymentMethod === 'cod' ?
                    null :
                    orderItems.isPaid ?
                    <Message>PaidOn {orderItems.paidAt}</Message> :
                    <> 
                    <div className='order-head'>
                        <div>Complete Payment Plese</div>
                    </div>
                    <div>
                        <Card>
                            <div className='place-order-button-wrap'>
                                <button id="rzp-button1" onClick={payHandler}>Pay Online</button>
                            </div>
                        </Card>
                    </div>
                    </>
                    }
                    </Col>
                </div>
            </Row>
        </Container>
    )
}

export default OrderSummaryScreen