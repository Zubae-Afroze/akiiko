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
                <div className='cart-wrapper'>
                    <div className='cart-label'>Shopping Cart</div>
                    <div className='cart-sub-total'>
                        <img src='/images/font_images/cart.svg' alt='cart_icon'/> <span> {cartItems.reduce((acc, items) => acc + Number(items.qty), 0)} Items </span>
                    </div>
                    {cartItems.length === 0 ? <Alert className='empty-cart' variant={'secondary'}>Your Cart is empty <Link to='/'><u>Go Back</u></Link></Alert> : 
                    <div> 
                        {cartItems.map((items, index) => (
                            <Row key={index}>
                            <Col md={2}>
                            <div className='cart-list-image'>
                                <img id={items.productId} src={items.image} alt='home_1'/>
                            </div>
                            </Col>
                            <Col md={10}>
                                <div className='cart-list-det'>
                                    <div className='cart-list-sub'>{items.subGroup}</div>
                                    <div className='cart-list-name'>{items.productName}</div>
                                    <div className='cart-list-price'>&#x20B9;{items.price * items.qty}</div>
                                    <div className='cart-quantity-dum'>
                                        <span className='cart-quantity-decrease' onClick={() => items.qty = items.qty > 1 ? dispatch(addToCart(items.product, items.qty - 1)) : 1}>-</span>
                                        {items.qty}
                                        <span className='cart-quantity-increase' onClick={() => items.qty = dispatch(addToCart(items.product, items.qty + 1))}>+</span>
                                    </div>
                                    <div className='cart-trash-icon'>
                                    <img src='/images/font_images/trash_icon.svg' alt='trash_icon' onClick={() => removeFromCartHandler(items.product)} />
                                    </div>
                                </div>
                            </Col>
                            </Row>
                        ))}
                        <div className='cart-total-pricing'>
                            <div className='cart-total'>
                                Total Price
                            </div>
                            <div className='cart-sub-pricing'>
                                &#x20B9;{ cartItems.reduce((acc, items) => acc + items.qty * items.price, 0)}
                            </div>
                        </div>
                        <div>
                            <button className='cart-purchase-button'>PROCEED TO CHECKOUT</button>
                        </div>
                        <Alert className='continue-shopping' variant={'secondary'}><Link to='/'>Continue Shopping</Link></Alert>
                    </div>
                    }
                </div>
        </Container>
        </>
    )
}

//onClick={() => removeFromCartHandler(items.product)}

export default CartScreen
