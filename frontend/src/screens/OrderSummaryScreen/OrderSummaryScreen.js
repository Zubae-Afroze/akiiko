import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Container, Image } from 'react-bootstrap';
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
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
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
                            {!orderItems.isPaid ? <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <button id="rzp-button1" onClick={payHandler}>Pay</button>
                                    </Col>
                                </Row>
                            </ListGroup.Item> : null}
                        </Card>
                    </Col>
                </Row>
            </Container>
}

export default OrderSummaryScreen