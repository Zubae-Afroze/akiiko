import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Container, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Message from '../../components/Message/Message';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import { getOrderDetails } from '../../actions/actionOrder';

const OrderSummaryScreen = () => {
    const dispatch = useDispatch();

    const { orderId } = useParams();

    const orderDetails = useSelector(state => state.orderDetails)
    const { orderItems, loading, error } = orderDetails

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
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
                            {error && <Message>{error}</Message>}
                        </Card>
                    </Col>
                </Row>
            </Container>
}

export default OrderSummaryScreen