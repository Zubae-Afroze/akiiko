import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MobileNav.css';



export default class MobileNav extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className='mobile-nav-cont'>
                        <ul className='mobile-nav-wrapper'>
                            <li className='mobile-nav-test'>
                                <Link to='/allproducts/productlist/bags'>BAGS</Link>
                            </li>
                            <li className='mobile-nav-test'>
                                <Link to='/allproducts/productlist/home'>HOME</Link>
                            </li>
                            <li className='mobile-nav-test'>
                                <Link to='/allproducts/productlist/lifestyle'>LIFESTYLE</Link>
                            </li>
                            <li className='mobile-nav-test'>
                                <Link to='/allproducts/productlist/gift'>GIFT</Link>
                            </li>
                            <li className='mobile-nav-test'>
                                <Link to='/allproducts/productlist/storage'>STORAGE</Link>
                            </li>
                            <li className='mobile-nav-test'>
                                <Link to='/allproducts/productlist/accessories'>ACCESSORIES</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </>
        )
    }
}
