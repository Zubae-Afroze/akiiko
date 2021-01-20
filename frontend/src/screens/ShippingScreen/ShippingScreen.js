import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../LoginScreen/LoginScreen.css'
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import { saveShippingAddress } from '../../actions/actionCart'

const ShippingScreen = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartList)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const submitHandler = (e) => {
        e.preventDefault()
        //Save Shipping address
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    return (
        <Container>
            <h1>Shipping</h1>
            <CheckoutSteps step1 step2 />
            <div className='shipping-flex'>
                <div className='shipping-div shipping-col-one'>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Address'
                                value={address}
                                required
                                onChange={(e) => setAddress(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter City'
                                value={city}
                                required
                                onChange={(e) => setCity(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='postalCode'>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Postal Code'
                                value={postalCode}
                                required
                                onChange={(e) => setPostalCode(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='country'>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Country'
                                value={country}
                                required
                                onChange={(e) => setCountry(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <button type='submit' className='shipping-button'>Add Address</button>
                        </Form.Group>
                    </Form>
                </div>
                <div className='shipping-div'>
                    <Card className=''>
                        <Card.Body>
                            {userInfo ?
                                <>
                                    <Card.Title>Hello, {userInfo.name}!</Card.Title>
                                    <div >Your Saved Shipping Address</div>
                                    <div>{shippingAddress.address},{shippingAddress.city},{shippingAddress.postalCode},</div>
                                    <div>{shippingAddress.country}.</div>
                                    <div></div>
                                    <button onClick={submitHandler} className='shipping-button my-1'>Continue</button>

                                </>
                                : <div>No current address details</div>}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

export default ShippingScreen
