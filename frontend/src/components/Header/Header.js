import React, { Component } from 'react';
import { Container, Navbar, Nav, Collapse} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Menubar  from '../Menubar/Menubar';
import './Header.css';
import MobileNav from '../MobileNav/MobileNav';

export default class Header extends Component {
    state = {
        dropSideDiv: false
    }

    toggleSidebarDiv = () => {
        const side = this.state.dropSideDiv;
        this.setState({dropSideDiv: !side});
    }

    render() {
        return (
        <>
            <Container>
            <div className='padding-class'></div>
            <Navbar fixed="top">
                <span className='hamburger-wrapper' onClick={this.toggleSidebarDiv}>
                    <img src='/images/font_images/hamburger.svg' alt='ham_img' className='hamburger-menu'></img>
                    {
                        this.state.dropSideDiv ? <Collapse in={true}><Sidebar /></Collapse> : null
                    }
                </span>
                <Navbar.Brand><Link to='/'>akiiko</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav className='title-bar-icon'><img src={'/images/font_images/search.svg'} alt='search_icon' /></Nav>
                    <Nav className='title-bar-icon'><img src={'/images/font_images/user.svg'} alt='user_icon' /></Nav>
                    <Nav className='title-bar-icon'><img src={'/images/font_images/cart.svg'} alt='cart_icon' /></Nav>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <Menubar />
                <MobileNav />
            </Container>  
        </>
        )
    }
}

