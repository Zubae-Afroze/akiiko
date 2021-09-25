import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './MobileNav.css'

export default class MobileNav extends Component {
  render() {
    return (
      <>
        <Container>
          <div className='mobile-nav-cont f-f-l'>
            <ul className='mobile-nav-wrapper'>
              <li className='mobile-nav-test'>
                <Link to='/bags'>BAGS</Link>
              </li>
              <li className='mobile-nav-test'>
                <Link to='/home'>HOME</Link>
              </li>
              <li className='mobile-nav-test'>
                <Link to='/lifestyle'>LIFESTYLE</Link>
              </li>
              <li className='mobile-nav-test'>
                <Link to='/gift'>GIFT</Link>
              </li>
              <li className='mobile-nav-test'>
                <Link to='/storage'>STORAGE</Link>
              </li>
              <li className='mobile-nav-test'>
                <Link to='/accessories'>ACCESSORIES</Link>
              </li>
              <li>
                <Link to='/essentials/general'>ESSENTIALS</Link>
              </li>
            </ul>
          </div>
        </Container>
      </>
    )
  }
}
