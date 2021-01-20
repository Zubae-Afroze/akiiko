import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../../actions/actionUsers';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import Message from '../../components/Message/Message';


const ProfileScreen = () => {

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    //const location = useLocation();
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passMessage, setPassMessage] = useState(null);

    //const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, user, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        //dispatch(Login(email, password))
        if (password !== confirmPassword) {
            setPassMessage('Password do not match, please enter again')
        } else {
            //dispatch update profile
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>User Profile</h1>
                    {passMessage && <Message variant='danger'>{passMessage}</Message>}
                    {error && <Message variant='dark'>{error}</Message>}
                    {success && <Message variant='success'>Profile Updated</Message>}
                    {loading && <MyComponent
                        sentences={[]}
                        wrapperBackgroundColor={'rgba(255,255,255)'}
                        color={'#6e4e37'}
                        loaderType={'ball-spin-clockwise'}
                        customLoader={<SpinnerIcon />}
                    />}
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                        </Form.Group>

                        <button type='submit'>Update</button>
                    </Form>
                    {/* <Row className='py-3'>
                            <Col>
                                Already have an account ? {' '}
                                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Please Login</Link>
                            </Col>
                        </Row> */}
                </Col>
                <Col>
                    <h2>My Orders</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileScreen