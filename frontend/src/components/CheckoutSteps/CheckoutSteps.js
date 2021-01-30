import React from 'react'
import { useSelector } from 'react-redux'
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import './CheckoutSteps.css';

const CheckoutSteps = ({ step1, step2, step3 }) => {

    const userLogin =  useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item className='ck-steps-item'>
                {step1 ?
                    (userInfo ? 
                    <Nav.Link>
                        Logged In
                    </Nav.Link> :
                    <LinkContainer to='/login'>
                        <Nav.Link>Sign In</Nav.Link>
                    </LinkContainer>)
                    : <Nav.Link disabled>Sing In</Nav.Link>
                }
            </Nav.Item>
            <Nav.Item className='ck-steps-item'>
                {step2 ?
                    (<LinkContainer to='/shipping'>
                        <Nav.Link>Shipping Details</Nav.Link>
                    </LinkContainer>)
                    : <Nav.Link disabled>Shipping</Nav.Link>
                }
            </Nav.Item>
            <Nav.Item className='ck-steps-item'>
                {step3 ?
                    (<LinkContainer to='/placeorder'>
                        <Nav.Link>Order Review</Nav.Link>
                    </LinkContainer>)
                    : <Nav.Link disabled>Order Review</Nav.Link>
                }
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
