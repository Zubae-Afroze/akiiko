import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Container, Form} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Message from '../../components/Message/Message';

import { createOrder } from '../../actions/actionOrder';

import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'

import './OrderScreen.css'

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

    const [paymentMethod, setPaymentMethod] = useState('online')

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
            paymentMethod: paymentMethod,
            itemsPrice: cart.itemsPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
    }   

    return (
        <Container>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <div className="shipping-address-and-payment-wrap">
                    <Col>
                        <div className='ship-head ship-head-alt'>Your Shipping Address</div>
                        <div className='ship-card-wrap'>
                            <Card className='ship-card'>
                                <div className='add-wrap'>
                                    <div>{cart.shippingAddress.address}</div>
                                    <div>{cart.shippingAddress.city}</div>
                                    <div>{cart.shippingAddress.postalCode}</div>
                                    <div>{cart.shippingAddress.country}</div>
                                </div>
                                <div className='add-edit'><Link to='/shipping'><em>Edit address</em></Link></div>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className='pay-head'>Please select your mode of payment</div>
                        <Form>
                            <div className='pay-card-wrap'>
                                <Card className='pay-card'>
                                    <Form.Group className='online-pay-card'>
                                        <Form.Check
                                            type='radio'
                                            label='Credit / Debit Card'
                                            id='razorpay'
                                            name='paymentmethod'
                                            value='online'
                                            checked
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        >   
                                        </Form.Check>
                                    </Form.Group>
                                    <Form.Group className='online-pay-cod'>
                                        <Form.Check
                                            type='radio'
                                            label='Cash on delivery'
                                            id='cod'
                                            name='paymentmethod'
                                            value='cod'
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        >   
                                        </Form.Check>
                                    </Form.Group>
                                </Card>
                            </div>
                        </Form>
                    </Col>
                </div>
            </Row>
            <Row>
                <div className="review-order-summary-wrap">
                    <Col>
                        <div className='items-head'>
                            <div>Review Your Items</div>
                            <div className='items-card-wrap'>
                                <Card className='items-card'>
                                    {
                                        cart.cartItems.length === 0 ? <Message>Your cart is empty</Message> :
                                        (
                                            cart.cartItems.map((item, index) => (
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
                                                    <div className='add-edit'><em>In case of changes, please edit items in your cart</em></div>
                                                </div>
                                            ))
                                        )
                                    }
                                </Card>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='order-head'>
                            <div>Order Summary</div>
                        </div>
                        <div>
                            <Card>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Amount</Col>
                                        <Col>&#x20B9;{cart.itemsPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>iGST of 12%</Col>
                                        <Col>&#x20B9;{cart.taxPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Total</Col>
                                        <Col>&#x20B9;{cart.totalPrice}</Col>
                                    </Row>
                                </ListGroup.Item>
                                {error && <Message>{error}</Message>}
                            </Card>
                        </div>
                    </Col>
                </div>
            </Row>
            <div className='place-order-button-wrap'>
                <button type='button' disabled={cart.cartItems === 0} onClick={placeOrderHandler}>Place Order</button>
            </div>
        </Container>
    )
}

export default OrderScreen
