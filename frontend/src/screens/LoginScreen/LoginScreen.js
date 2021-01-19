import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/actionUsers';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import Message from '../../components/Message/Message';

import './LoginScreen.css'


const LoginScreen = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin

    const location = useLocation();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
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
            <Card className='card-wrap'>
                <Card.Body>
                    <h1>Sign In</h1>
                    {error && <Message>{error}</Message>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group className='login-group' controlId='email'>
                            <Form.Label className='fm-label'>Email Address</Form.Label>
                            <Form.Control className='fc-label' type='email' placeholder={'Enter email'} value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control><i className="far fa-envelope icon-email"></i>
                        </Form.Group>

                        <Form.Group className='login-group' controlId='password'>
                            <Form.Label className='fm-label'>Password</Form.Label>
                            <Form.Control className='fc-label' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control><i class="fas fa-lock icon-email"></i>
                        </Form.Group>

                        <div className='sign-wrap'><button className='sign-button' type='submit'>Sign In</button></div>
                    </Form>
                    <Row className='card-text-wrap'>
                        <Col>
                            <span className='card-text'>Dont have an account? {''}</span>
                            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}><span style={{ textDecoration: 'underline', textTransform: 'uppercase' }}>Please Register</span></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LoginScreen