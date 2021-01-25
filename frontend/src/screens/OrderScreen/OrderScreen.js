import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Container, Image } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Message from '../../components/Message/Message';

import { createOrder } from '../../actions/actionOrder';

const OrderScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartList)

    //Calculate Prices
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + (item.qty * item.price), 0)

    cart.taxPrice = Number((0.12 * cart.itemsPrice).toFixed(0))

    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.taxPrice)

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if (success) {
            history.push(`/orders/${order._id}`)
        }
        // eslint-disable-next-line
    }, [history, success])

    const placeOrderHandler = () => {
        console.log(cart.cartItems)

        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
    }

    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p><strong>Address:</strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}
                                {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method:</strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {

                                cart.cartItems.length === 0 ? <Message>Your cart is empty</Message>

                                    : (

                                        <ListGroup variant='flush'>
                                            {
                                                cart.cartItems.map((item, index) => (
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
                                <Col>&#x20B9;{cart.itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Tax</Col>
                                <Col>&#x20B9;{cart.taxPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Total Price</Col>
                                <Col>&#x20B9;{cart.totalPrice}</Col>
                            </Row>
                            {error && <Message>{error}</Message>}
                            <button type='button' disabled={cart.cartItems === 0} onClick={placeOrderHandler}>Place Order</button>
                        </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderScreen
