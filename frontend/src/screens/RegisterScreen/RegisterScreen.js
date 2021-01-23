import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/actionUsers';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import Message from '../../components/Message/Message';

import './RegisterScreen.css'


const RegisterScreen = () => {

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const location = useLocation();
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passMessage, setPassMessage] = useState(null);

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        //dispatch(Login(email, password))
        if (password !== confirmPassword) {
            setPassMessage('Password do not match, please enter again')
        } else {
            dispatch(register(name, email, password, phoneNumber))
        }
    }

    return (
        <div className='login-wrap'>
            {loading && <MyComponent
                sentences={[]}
                wrapperBackgroundColor={'rgba(255,255,255)'}
                color={'#6e4e37'}
                loaderType={'ball-spin-clockwise'}
                customLoader={<SpinnerIcon />}
            />}
            <Card className='register-card'>
                <Card.Body>
                    {passMessage && <Message variant='danger'>{passMessage}</Message>}
                    <h1>Sign Up</h1>
                    {error && <Message>{error}</Message>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group className='login-group' controlId='name'>
                            <Form.Label className='fm-label'>Name</Form.Label>
                            <Form.Control className='fc-label' type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control><i class="far fa-user icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlId='email'>
                            <Form.Label className='fm-label'>Email</Form.Label>
                            <Form.Control className='fc-label' type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control><i className="far fa-envelope icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlId='phone'>
                            <Form.Label className='fm-label'>Phone</Form.Label>
                            <Form.Control className='fc-label' type='text' placeholder='Enter your Phone No.' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></Form.Control><i class="fas fa-phone icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlId='password'>
                            <Form.Label className='fm-label'>Password</Form.Label>
                            <Form.Control className='fc-label' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control><i class="fas fa-lock icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlId='confirmPassword'>
                            <Form.Label className='fm-label'>Confirm Password</Form.Label>
                            <Form.Control className='fc-label' type='password' placeholder='Re-Enter password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control><i class="fas fa-lock icon-email"></i>
                        </Form.Group>

                        <div className='sign-wrap'><button className='sign-button' type='submit'>Register</button></div>
                    </Form>
                    <Row className='card-text-wrap'>
                        <Col>
                            <span className='card-text'>Already have an account? {''}</span>
                            <Link to={redirect ? `/login?redirect=${redirect}` : '/register'}><span style={{ textDecoration: 'underline', textTransform: 'uppercase' }}>Login Here</span></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RegisterScreen