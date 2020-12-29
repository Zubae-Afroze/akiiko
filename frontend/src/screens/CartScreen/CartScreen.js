import React, { useEffect } from 'react';
import './CartScreen.css';

import { Container, Col, Row, Alert} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/actionCart';

const CartScreen = () => {
    
    let { id } = useParams();
    //let { history } = useHistory();
    let location  = useLocation();

    const productId = id;

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cartList = useSelector(state => state.cartList)
    const { cartItems } = cartList

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <>
        <Container>
                <div>
                    <div className='cart-label'>Shopping Cart</div>
                    {cartItems.length === 0 ? <Alert variant={'secondary'}>Your Cart is empty <Link to='/'><u>Go Back</u></Link></Alert> : 
                    <div>
                        {cartItems.map((items, index) => (
                            <Row>
                            <Col md={2} key={index}>
                            <div className='cart-list-image'>
                                <img id={items.productId} src={items.image} alt='home_1'/>
                            </div>
                            </Col>
                            <Col md={10}>
                                <div className='cart-list-det'>
                                    <div className='cart-list-sub'>{items.subGroup}</div>
                                    <div className='cart-list-name'>{items.productName}</div>
                                    <div className='cart-list-price'>&#x20B9;{items.price * items.qty}</div>
                                    <div>
                                        <span onClick={() => items.qty = dispatch(addToCart(items.product, items.qty - 1))}>-</span>
                                        {items.qty}
                                        <span onClick={() => items.qty = dispatch(addToCart(items.product, items.qty + 1))}>+</span>
                                    </div>
                                    <button onClick={() => removeFromCartHandler(items.product)}>Remove</button>
                                </div>
                            </Col>
                            </Row>
                        ))}
                        <div>
                            <h3>Subtotal {cartItems.reduce((acc, items) => acc + Number(items.qty), 0)} Items</h3>
                        </div>
                        <div>
                            &#x20B9;{ cartItems.reduce((acc, items) => acc + items.qty * items.price, 0)}
                        </div>
                    </div>
                    }
                </div>
        </Container>
        </>
    )
}

export default CartScreen
