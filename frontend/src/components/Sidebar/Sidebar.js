import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevSideScrollPos: window.pageYOffset,
            sideNavFixed: false 
         } 
    }

    handleSideScroll = () => {
        const prevSideScrollPos = this.state.prevSideScrollPos;

        const currentSideScrollPos = window.pageYOffset;
        const sideNavFixed = prevSideScrollPos < currentSideScrollPos;

        this.setState({
            prevSideScrollPos: currentSideScrollPos,
            sideNavFixed
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleSideScroll);
    }

    render() {
        return (
            <>
                <Container className='sidebar-wrapper'>
                    <div className='sidebar-main'>
                    {/* <div className={classnames('sidebar-main', {'sticky-sidebar' : !this.state.sideNavFixed})}> */}
                        <ul>
                            <li>
                                <Link to='/bags/all_products'>Bags</Link></li>
                            <li>
                                <Link to='/home/all_products'>Home</Link></li>
                            <li>
                                <Link to='/lifestyle/workout'>Lifestyle</Link></li>
                            <li>
                                <Link to='/gift/all_products'>Gift</Link></li>
                            <li>
                                <Link to='/storage/all_products'>Storage</Link></li>
                            <li>
                                <Link to='/accessories/all_products'>Accessories</Link></li>
                        </ul>
                    </div>
                </Container>       
            </>
        )
    }
}
