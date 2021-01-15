import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../actions/actionUsers';


const LoginScreen = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin

    const location = useLocation();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = location.search ? location.search.split('=')(1) : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(Login(email, password))
    }

    return (
        <Container>
            <h1>Sign In</h1>
            { error ? <h2>error...</h2> : loading ? <h1>Loading...</h1> :
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>

                    <button type='submit'>Sign In</button>
                </Form>}
            <Row className='py-3'>
                <Col>
                    NewCustomer? {' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginScreen