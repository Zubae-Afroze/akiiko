import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import '../LoginScreen/LoginScreen.css'
import { saveShippingAddress } from '../../actions/actionCart'

import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';

import './ShippingScreen.css';

const ShippingScreen = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartList)
    const { shippingAddress } = cart

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        //Save Shipping address
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/placeorder')
    }

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const [editAddress, setEditAddress] = useState(false)

    const editAddressHandler = () => {
        const dropper = editAddress
        setEditAddress(!dropper)
    }

    return (
        <Container>
            <div className='shipping-wrap'>
            <CheckoutSteps step1 step2 />
                <h1>Shipping Address</h1>
                <div className='shipping-card-wrap'>
                    <Card className='shipping-card'>
                        {userInfo ?
                            <div className='saved-shipping-address'>
                                <Card.Title className='shipping-card-title'>Hello, {userInfo.name}!</Card.Title>
                                {shippingAddress ?
                                    <div>
                                        <div className='shipping-edit'>
                                            <div><strong>Your Current Shipping Address</strong></div>
                                            <div className='shipping-address-main'>{shippingAddress.address}</div>
                                            <div>{shippingAddress.city}</div>
                                            <div>{shippingAddress.postalCode}</div>
                                            <div>{shippingAddress.country}</div>
                                        </div>
                                        {/* <div className='continue-button-wrap'>
                                            <button onClick={submitHandler}>Continue</button>
                                        </div> */}
                                        <div>
                                            <div className='edit-handler-main' onClick={editAddressHandler}><em>Edit the address</em></div>
                                            {editAddress ? <div>
                                                <div className='no-ship-from'>
                                                    <Form onSubmit={submitHandler}>
                                                        <Form.Group controlId='address'>
                                                            <Form.Label>Address</Form.Label>
                                                            <Form.Control
                                                                type='text'
                                                                placeholder='Enter your address'
                                                                required
                                                                onChange={(e) => setAddress(e.target.value)}
                                                            >
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group controlId='city'>
                                                            <Form.Label>City</Form.Label>
                                                            <Form.Control
                                                                type='text'
                                                                placeholder='Enter your city'
                                                                required
                                                                onChange={(e) => setCity(e.target.value)}
                                                            >
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group controlId='postalcode'>
                                                            <Form.Label>Postal Code</Form.Label>
                                                            <Form.Control
                                                                type='text'
                                                                placeholder='Enter your postal code'
                                                                required
                                                                onChange={(e) => setPostalCode(e.target.value)}
                                                            >
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group controlId='country'>
                                                            <Form.Label>Country</Form.Label>
                                                            <Form.Control
                                                                type='text'
                                                                placeholder='Enter your Country'
                                                                required
                                                                value={country}
                                                                onChange={(e) => setCountry(e.target.value)}
                                                            >
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <div className='edit-shipping-button-wrap'>
                                                                <button type='submit' className='edit-shipping-button'>Edit Address</button>
                                                            </div>
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                            </div> : null}
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <div className='no-ship-save'>
                                            Please enter your shipping address below
                                        </div>
                                        <div className='no-ship-from'>
                                            <Form onSubmit={submitHandler}>
                                                <Form.Group controlId='address'>
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Enter your address'
                                                        required
                                                        onChange={(e) => setAddress(e.target.value)}
                                                    >
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='city'>
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Enter your city'
                                                        required
                                                        onChange={(e) => setCity(e.target.value)}
                                                    >
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='postalcode'>
                                                    <Form.Label>Postal Code</Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Enter your postal code'
                                                        required
                                                        onChange={(e) => setPostalCode(e.target.value)}
                                                    >
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='country'>
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Control
                                                        type='text'
                                                        placeholder='Enter your Country'
                                                        required
                                                        value={country}
                                                        onChange={(e) => setCountry(e.target.value)}
                                                    >
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group>
                                                    <div className='no-save-button-wrap'>
                                                        <button type='submit' className='no-save-button'>Add Address</button>
                                                    </div>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                    </>
                                }
                            </div>
                            :
                            <div>Please <Link to='/login'>Login</Link></div>}
                    </Card>
                </div>
            </div>
        </Container>
    )
}

export default ShippingScreen
