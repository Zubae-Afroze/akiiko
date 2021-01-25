import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../LoginScreen/LoginScreen.css'

import { savePaymentMethod } from '../../actions/actionCart'

const PaymentScreen = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartList)
    const { shippingAddress } = cart

    if (!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('')

    // const [address, setAddress] = useState(shippingAddress.address);
    // const [city, setCity] = useState(shippingAddress.city);
    // const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    // const [country, setCountry] = useState(shippingAddress.country);

    const submitHandler = (e) => {
        e.preventDefault()
        //Save Shipping address
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    // const userLogin = useSelector(state => state.userLogin);
    // const { userInfo } = userLogin;

    return (
        <Container>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type='radio'
                        label='Credit Card / Debit Card'
                        id='PayPal'
                        name='paymentMethod'
                        value='online'
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type='radio'
                        label='Cash on delivery'
                        id='PayPal'
                        name='paymentMethod'
                        value='COD'
                        onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                </Form.Group>
                <button type='submit'>Continue</button>
            </Form>
        </Container>
    )
}

export default PaymentScreen
