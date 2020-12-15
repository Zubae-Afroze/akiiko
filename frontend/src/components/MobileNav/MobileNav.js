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
                            <Link to='/bags/all_products'>BAGS</Link>
                        </li>
                        <li className='mobile-nav-test'>
                            <Link to='/home/all_products'>HOME</Link>
                        </li>
                        <li className='mobile-nav-test'>
                            <Link to='/lifestyle/workout'>LIFESTYLE</Link>
                        </li>
                        <li className='mobile-nav-test'>
                            <Link to='/gift/all_products'>GIFT</Link>
                        </li>
                        <li className='mobile-nav-test'>
                            <Link to='/storage/all_products'>STORAGE</Link>
                        </li>
                        <li className='mobile-nav-test'>
                            <Link to='/accessories/all_products'>ACCESSORIES</Link>
                        </li>
                    </ul>
                </div>
            </Container>      
            </>
        )
    }
}
