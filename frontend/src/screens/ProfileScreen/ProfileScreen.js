import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../../actions/actionUsers';

import { LinkContainer } from 'react-router-bootstrap';

import { listMyOrders } from '../../actions/actionOrder';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import Message from '../../components/Message/Message';
import './ProfileScreen.css'


const ProfileScreen = () => {

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    //const location = useLocation();
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
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
                dispatch(listMyOrders())
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
            dispatch(updateUserProfile({ id: user._id, name, email, phoneNumber, password }))
        }
    }

    return (
        <Container>
            <div >
                <Row className='user-profile-page'>
                    <Col>
                        <div className='user-profile-container'>
                            <h2 className='user-profile-page-title'>User Profile</h2>
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

                                <Form.Group controlId='phoneNumber'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='confirmPassword'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                                </Form.Group>

                                <button type='submit' className='update-button'>Update</button>
                            </Form>
                            {/* <Row className='py-3'>
                                    <Col>
                                        Already have an account ? {' '}
                                        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Please Login</Link>
                                    </Col>
                                </Row> */}
                        </div>
                    </Col>
                    <Col>
                        <div className='user-orders-container'>
                            <h2 className='user-profile-page-title'>My Orders</h2>
                            {loadingOrders ? <MyComponent
                                sentences={[]}
                                wrapperBackgroundColor={'rgba(255,255,255)'}
                                color={'#6e4e37'}
                                loaderType={'ball-spin-clockwise'}
                                customLoader={<SpinnerIcon />}
                            /> : errorOrders ? <Message>{errorOrders}</Message> :

                                    <Table striped bodered hover responsive className='table-sm order-details-table'>
                                        <thead >
                                            <tr>
                                                <th className='order-detail-table-title'>ID</th>
                                                <th className='order-detail-table-title'>DATE</th>
                                                <th className='order-detail-table-title'>TOTAL</th>
                                                <th className='order-detail-table-title'>PAID</th>
                                                <th className='order-detail-table-title'>DELIVERED</th>
                                                <th>    </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(order => (
                                                <tr key={order._id}>
                                                    <td className='order-table-row-data '>{order._id}</td>
                                                    <td className='order-table-row-data'>{order.createdAt.substring(0, 10)}</td>
                                                    <td className='order-table-row-data'>&#8377;{order.totalPrice}</td>
                                                    <td className='order-table-row-data'>{order.isPaid ? order.paidAt.substring(0, 10) : <i className='fas fa-times' style={{ color: "red" }}></i>}</td>
                                                    <td className='order-table-row-data'>{order.isDelivered ? order.deliveredAt.substring(0, 10) : <i className='fas fa-times' style={{ color: "red" }}></i>}</td>
                                                    <td className='order-table-row-data'><LinkContainer to={`/orders/${order._id}`}>
                                                        <button className='order-det-button'>Details</button>
                                                    </LinkContainer></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default ProfileScreen