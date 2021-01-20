import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Card, Container, Image } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import Message from '../../components/Message/Message';

import MyComponent from 'react-fullpage-custom-loader';
import SpinnerIcon from '../../components/Spinner/SpinnerIcon';

import { getOrderDetails } from '../../actions/actionOrder';

const OrderSummaryScreen = () => {
    const dispatch = useDispatch();

    const { orderId } = useParams();

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, loading, error } = orderDetails

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, [])

    return loading ? <h1>Loading</h1> : error ? <h1>Error</h1> : <><h1>order: {order._id}</h1></>
}

export default OrderSummaryScreen
