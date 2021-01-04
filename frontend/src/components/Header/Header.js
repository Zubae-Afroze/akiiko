import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Navbar, Nav, Modal, ModalBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar  from '../Menubar/Menubar';
import './Header.css';
import MobileNav from '../MobileNav/MobileNav';

import { addToCart, removeFromCart } from '../../actions/actionCart';

const Header = () => {
        const dispatch = useDispatch();

        const removeFromCartHandler = (id) => {
             dispatch(removeFromCart(id))
        }

        // const [ cartGrow, setCartGrow] = useState(false);

        const cartList = useSelector(state => state.cartList)

        const { cartItems } = cartList

        const [modalShow, setModalShow] = useState(false);

        function CartModal(props) {
            return (
                <Modal
                    {...props}
                    animation={false}>
                
                <ModalBody>
                        <div className='head-cart-header'>Shopping Cart<img src='/images/font_images/cart.svg' alt='cart-icon'/><span>{cartItems.reduce((acc, items) => acc + Number(items.qty), 0)}</span></div>
                        <>
                        { cartItems.length === 0 ? <div className='head-cart-empty'>Your Cart is empty</div> :
                        <>
                        <div className='head-cart-scroll'>
                        {cartItems.map((items , index) => (
                                <div className='head-cart-wrap' key={index}>
                                    <div className='head-cart-img'>
                                        <img src={items.image} alt='cart_1'/>
                                    </div>
                                    <div className='head-cart-details'>
                                        <div className='head-cart-subg'>{items.subGroup}</div>
                                        <div className='head-cart-prodn'>{items.productName}
                                            <img src='/images/font_images/times.svg' alt='trash_icon' onClick={() => removeFromCartHandler(items.product)} />
                                        </div>
                                        <div className='head-cart-root'>
                                            <div className='head-cart-qty'>
                                                <span className='head-cart-dum' onClick={() => items.qty = items.qty > 1 ? dispatch(addToCart(items.product, items.qty - 1)) : 1}>-</span>
                                                {items.qty}
                                                <span className='head-cart-div' onClick={() => items.qty = dispatch(addToCart(items.product, items.qty + 1))}>+</span>
                                            </div>
                                            <div className='head-cart-price'>&#x20B9;{items.price * items.qty}</div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                    <div className='head-cart-bottom-wrap'>
                        <div className='head-cart-showmore'>
                        <Link to='/cart'><button onClick={() => setModalShow(false)}>Go To Cart Page</button></Link>
                        </div>
                        <div className='head-cart-sub-price-wrap'>
                            <div className='head-cart-sub-price-label'>
                                Subtotal Price
                            </div>
                            <div className='head-cart-sub-price'>
                                &#x20B9;{ cartItems.reduce((acc, items) => acc + items.qty * items.price, 0)}
                            </div>
                        </div>
                        <div className='head-cart-purchase-button-wrap'>
                            <button >PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                    </>
                    }
                    </>
                </ModalBody>
                </Modal>
            )
        } 

        return (
        <>
            <Container>
            <div className='padding-class'></div>
            <Navbar fixed="top">
                <Navbar.Brand><Link to='/'>akiiko</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto title-icon-wrap">
                    <Nav className='title-bar-icon title-search'><img src={'/images/font_images/search.svg'} alt='search_icon' /></Nav>
                    <Nav className='title-bar-icon'><img src={'/images/font_images/user.svg'} alt='user_icon' /></Nav>
                    <Nav className='title-bar-icon'><><img src={'/images/font_images/cart.svg'} alt='cart_icon' onClick={() => setModalShow(true)}/></></Nav>
                    </Nav>
                </Navbar.Collapse>
                <CartModal 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                </Navbar>
                <Menubar />
                <MobileNav />
            </Container>  
        </>
        )
}

export default Header


