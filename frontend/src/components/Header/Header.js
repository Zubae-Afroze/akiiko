import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar  from '../Menubar/Menubar';
import './Header.css';
import MobileNav from '../MobileNav/MobileNav';

const Header = () => {
        //const { id } = useParams();

        return (
        <>
            <Container>
            <div className='padding-class'></div>
            <Navbar fixed="top">
                <Navbar.Brand><Link to='/'>akiiko</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav className='title-bar-icon title-search'><img src={'/images/font_images/search.svg'} alt='search_icon' /></Nav>
                    <Nav className='title-bar-icon'><img src={'/images/font_images/user.svg'} alt='user_icon' /></Nav>
                    <Nav className='title-bar-icon'><Link to={`/cart/`}><img src={'/images/font_images/cart.svg'} alt='cart_icon' /></Link></Nav>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <Menubar />
                <MobileNav />
            </Container>  
        </>
        )
}

export default Header


