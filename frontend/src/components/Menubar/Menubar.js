import React, { Component } from 'react';
import { Container, Nav, Collapse, Row, Col} from 'react-bootstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './Menubar.css';

export default class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropWomenDiv: false,
            dropMenDiv: false,
            dropHomeDiv: false,
            dropOfficeDiv: false,
            dropOrganisersDiv: false,
            dropTravelDiv: false,
            dropGiftDiv: false,
            dropWorkoutDiv: false,
            dropShoppingDiv: false,
            prevScrollPos: window.pageYOffset,
            navFixed: false
        }
    }

    handleScroll = () => {
        const  prevScrollPos  = this.state.prevScrollPos;

        const currentScrollPos = window.pageYOffset;
        const navFixed = prevScrollPos < currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            navFixed
        })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // hideNavbar = (scrollPos) => {
    //     if (scrollPos >= 70){
    //         this.navBar.current.classList.add('hide-nav-bar');
    //     } else {
    //         this.navBar.current.classList.remove('hide-nav-bar');
    //     }
    // }

    toggleHomeDropDiv = () => {
        const dropper = this.state.dropHomeDiv;
        this.setState({dropWomenDiv : false});
        this.setState({dropMenDiv : false});
        this.setState({dropOfficeDiv : false});
        this.setState({dropOrganisersDiv : false});
        this.setState({dropTravelDiv : false});
        this.setState({dropGiftDiv : false});
        this.setState({dropWorkoutDiv : false});
        this.setState({dropShoppingDiv : false});
        this.setState({dropHomeDiv: !dropper})
    }

    toggleOfficeDropDiv = () => {
        const dropper = this.state.dropOfficeDiv;
        this.setState({dropWomenDiv : false});
        this.setState({dropMenDiv : false});
        this.setState({dropHomeDiv : false});
        this.setState({dropOrganisersDiv : false});
        this.setState({dropTravelDiv : false});
        this.setState({dropGiftDiv : false});
        this.setState({dropWorkoutDiv : false});
        this.setState({dropShoppingDiv : false});
        this.setState({dropOfficeDiv: !dropper})
    }

    toggleOrganisersDropDiv = () => {
        const dropper = this.state.dropOrganisersDiv;
        this.setState({dropWomenDiv : false});
        this.setState({dropMenDiv : false});
        this.setState({dropOfficeDiv : false});
        this.setState({dropHomeDiv : false});
        this.setState({dropTravelDiv : false});
        this.setState({dropGiftDiv : false});
        this.setState({dropWorkoutDiv : false});
        this.setState({dropShoppingDiv : false});
        this.setState({dropOrganisersDiv: !dropper})
    }

    toggleTravelDropDiv  = () => {
        const dropper = this.state.dropTravelDiv;
        this.setState({dropWomenDiv : false});
        this.setState({dropMenDiv : false});
        this.setState({dropOfficeDiv : false});
        this.setState({dropOrganisersDiv : false});
        this.setState({dropHomeDiv : false});
        this.setState({dropGiftDiv : false});
        this.setState({dropWorkoutDiv : false});
        this.setState({dropShoppingDiv : false});
        this.setState({dropTravelDiv: !dropper})
    }

    toggleMenDropDiv = () => {
        const dropper = this.state.dropMenDiv;
        this.setState({dropWomenDiv : false});
        this.setState({dropHomeDiv : false});
        this.setState({dropOfficeDiv : false});
        this.setState({dropOrganisationDiv : false});
        this.setState({dropTravelDiv : false});
        this.setState({dropGiftDiv : false});
        this.setState({dropWorkoutDiv : false});
        this.setState({dropShoppingDiv : false});
        this.setState({dropMenDiv: !dropper})
    }

    toggleWomenDropDiv = () => {
        const dropper = this.state.dropWomenDiv;
        this.setState({dropHomeDiv : false});
        this.setState({dropMenDiv : false});
        this.setState({dropOfficeDiv : false});
        this.setState({dropOrganisationDiv : false});
        this.setState({dropTravelDiv : false});
        this.setState({dropGiftDiv : false});
        this.setState({dropWorkoutDiv : false});
        this.setState({dropShoppingDiv : false});
        this.setState({dropWomenDiv: !dropper})
    }

    toggleGiftDropDiv = () => {
        const dropper = this.state.dropGiftDiv;
        this.setState({dropWomenDiv : false});
        this.setState({dropMenDiv : false});
        this.setState({dropOfficeDiv : false});
        this.setState({dropOrganisationDiv : false});
        this.setState({dropTravelDiv : false});
        this.setState({dropHomeDiv : false});
        this.setState({dropWorkoutDiv : false});
        this.setState({dropShoppingDiv : false});
        this.setState({dropGiftDiv: !dropper})
    }

    toggleWorkoutDiv = () => {
        const dropper = this.state.dropWorkoutDiv;
        this.setState({dropWomenDiv : false});
        this.setState({dropMenDiv : false});
        this.setState({dropOfficeDiv : false});
        this.setState({dropOrganisersDiv : false});
        this.setState({dropTravelDiv : false});
        this.setState({dropGiftDiv : false});
        this.setState({dropHomeDiv : false});
        this.setState({dropShoppingDiv : false});
        this.setState({dropWorkoutDiv: !dropper})
    }

    toggleShoppingDiv = () => {
        const dropper = this.state.dropShoppingDiv;
        this.setState({dropWomenDiv : false});
        this.setState({dropMenDiv : false});
        this.setState({dropOfficeDiv : false});
        this.setState({dropOrganisationDiv : false});
        this.setState({dropTravelDiv : false});
        this.setState({dropGiftDiv : false});
        this.setState({dropWorkoutDiv : false});
        this.setState({dropHomeDiv : false});
        this.setState({dropShoppingDiv: !dropper})
    }

    // componentDidMount() {
    //     window.addEventListener('scrollY', this.hideNavbar())
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scrollY', this.hideNavbar())
    // }

    render() {
        return (
            <>
            <Container className='navbar-wrapper'>
                {/*<div className= 'navbar-wrapper sticky-navbar'>*/}
                <div className={classnames("navabar-wrapper", {'sticky-navbar': !this.state.navFixed})}>
                <Nav fill as="ul" className='navbar-ul'>
                    <Nav.Item as="li" className='nav-test'>
                        <Nav className='navbar-li'><div onMouseEnter={this.toggleWomenDropDiv} onClick={this.toggleWomenDropDiv}>BAGS</div></Nav>
                        {
                            this.state.dropWomenDiv ? 
                            <Collapse in={true}>
                                <Row className='navbar-dropdown' onMouseLeave={this.toggleWomenDropDiv}>
                                    <Col className='navbar-drop-list' sm={6}>
                                        <ul onClick={this.toggleWomenDropDiv}>
                                            <li>
                                                <Link to='/bags/women'><img src='/images/nav_drop/home_drop/women.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>WOMEN</div></Link></li>
                                            <li>
                                                <Link to='/bags/tote'><img src='/images/nav_drop/home_drop/tote.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>TOTE</div></Link></li>
                                            <li>
                                                <Link to='/bags/office'><img src='/images/nav_drop/home_drop/office.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>OFFICE</div></Link></li>
                                            <li>
                                                <Link to='/bags/travel'><img src='/images/nav_drop/home_drop/travel.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>TRAVEL</div></Link></li>
                                        </ul>
                                        <Link to='/bags/all_products' className='navbar-drop-link' onClick={this.toggleHomeDropDiv}>VIEW ALL PRODUCTS</Link>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero' onClick={this.toggleWomenDropDiv}><img src='/images/nav_drop/home_drop/bagsDropHeo.jpg' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    {/* <Nav.Item as="li">
                        <Nav className='navbar-li'><Link to='/beach'>Beach</Link></Nav>
                    </Nav.Item> */}
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><div onMouseEnter={this.toggleMenDropDiv} onClick={this.toggleMenDropDiv}>Home</div></Nav>
                        {
                            this.state.dropMenDiv ? 
                            <Collapse in={true} onMouseLeave={this.toggleMenDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul onClick={this.toggleMenDropDiv}>
                                            <li>
                                                <Link to='/home/tableware'><img src='/images/nav_drop/office_drop/bread_basket.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>TABLEWARE</div></Link></li>
                                            <li>
                                                <Link to='/home/kitchen'><img src='/images/nav_drop/office_drop/bread_bag.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>KITCHEN</div></Link></li>
                                            <li>
                                                <Link to='/home/laundry'><img src='/images/nav_drop/office_drop/folder_bag.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>LAUNDRY</div></Link></li>
                                            <li>
                                                <Link to='/home/garden'><img src='/images/nav_drop/office_drop/accessories.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GARDEN</div></Link></li>
                                        </ul>
                                        <Link to='/home/all_products' className='navbar-drop-link' onClick={this.toggleMenDropDiv}>VIEW ALL PRODUCTS</Link>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/office_drop/officeDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><div onMouseEnter={this.toggleWorkoutDiv} onClick={this.toggleWorkoutDiv}>Lifestyle</div></Nav>
                        {
                            this.state.dropWorkoutDiv ? 
                            <Collapse in={true} onMouseLeave={this.toggleWorkoutDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            {/* <li>
                                                <img src='/images/nav_drop/organisation_drop/wall_hanging.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>HEALTH & HYGIENE</div></li> */}
                                            <li>
                                                <Link to='/lifestyle/workout' onClick={this.toggleWorkoutDiv}><img src='/images/nav_drop/lifestyle_drop/lifestyle.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>WORKOUT</div></Link></li>
                                            {/* <li>
                                                <img src='/images/nav_drop/organisation_drop/baskets.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>HOBBY</div></li>
                                            <li>
                                                <img src='/images/nav_drop/organisation_drop/baskets.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>    </div></li> */}
                                        </ul>
                                        <Link to='/lifestyle/workout' className='navbar-drop-link' onClick={this.toggleWorkoutDiv}>VIEW ALL PRODUCTS</Link>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero' onClick={this.toggleWomenDropDiv}><img src='/images/nav_drop/lifestyle_drop/lifestyle_hero.jpg' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><div onMouseEnter={this.toggleOrganisersDropDiv} onClick={this.toggleOrganisersDropDiv}>Gift</div></Nav>
                        {
                            this.state.dropOrganisersDiv ? 
                            <Collapse in={true} onMouseLeave={this.toggleOrganisersDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul onClick={this.toggleOrganisersDropDiv}>
                                            <li>
                                                <Link to='/gift/giftbox'><img src='/images/nav_drop/organisation_drop/giftbag.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GIFT BOX</div></Link></li>
                                            <li>
                                                <Link to='/gift/giftbag'><img src='/images/nav_drop/organisation_drop/pouch.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GIFT BAG</div></Link></li>
                                            {/* <li>
                                                <img src='/images/nav_drop/organisation_drop/baskets.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>FLORAL</div></li> */}
                                            <li>
                                                <Link to='/gift/accessories'><img src='/images/nav_drop/organisation_drop/accessories.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ACCESSORIES</div></Link></li>
                                        </ul>
                                        <Link to='/gift/all_products' className='navbar-drop-link' onClick={this.toggleOrganisersDropDiv}>VIEW ALL PRODUCTS</Link>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero' onClick={this.toggleWomenDropDiv}><img src='/images/nav_drop/organisation_drop/organisationDropHero.jpg' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><div onMouseEnter={this.toggleTravelDropDiv} onClick={this.toggleTravelDropDiv}>Storage</div></Nav>
                        {
                            this.state.dropTravelDiv ? 
                            <Collapse in={true} onMouseLeave={this.toggleTravelDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul onClick={this.toggleTravelDropDiv}>
                                            {/* <li>
                                                <img src='/images/nav_drop/travel_drop/duffel_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>WORK</div></li> */}
                                            <li>
                                                <Link to='/storage/organisers'><img src='/images/nav_drop/travel_drop/cabin_bag.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ORGANISERS</div></Link></li>
                                            <li>
                                                <Link to='/storage/home'><img src='/images/nav_drop/travel_drop/backpack.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>HOME</div></Link></li>
                                        </ul>
                                        <Link to='/storage/all_products' className='navbar-drop-link' onClick={this.toggleTravelDropDiv}>VIEW ALL PRODUCTS</Link>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/travel_drop/travelDropHero.jpg' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li" className='nav-test'>
                        <Nav className='navbar-li' onMouseEnter={this.toggleShoppingDiv} onClick={this.toggleShoppingDiv}>Accessories</Nav>
                        {
                            this.state.dropShoppingDiv ? 
                            <Collapse in={true} onMouseLeave={this.toggleShoppingDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul onClick={this.toggleShoppingDiv}>
                                            <li>
                                                <Link to='/accessories/onthego'><img src='/images/nav_drop/men_drop/onthegodrop.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ON THE GO</div></Link></li>
                                            {/* <li>
                                                <img src='/images/nav_drop/men_drop/coat_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GADGET</div></li> */}
                                            <li>
                                                <Link to='/accessories/wallet'><img src='/images/nav_drop/men_drop/wallet.jpg' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>WALLET</div></Link></li>
                                        </ul>
                                        <Link to='/accessories/all_products' className='navbar-drop-link' onClick={this.toggleShoppingDiv}>VIEW ALL PRODUCTS</Link>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero' onClick={this.toggleWomenDropDiv}><img src='/images/nav_drop/men_drop/accessoriesDrop.jpg' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    {/* <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleHomeDropDiv} onClick={this.toggleHomeDropDiv}>Home</a></Nav>
                        {
                            this.state.dropHomeDiv ? 
                            <Collapse in={this.toggleHomeDropDiv} onMouseLeave={this.toggleHomeDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/wallet.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>KITCHEN</div></li>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/coat_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>TABLEWARE</div></li>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/shoe_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>LAUNDRY</div></li>
                                            <li>
                                                <img src='/images/nav_drop/men_drop/bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>STORAGE</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL PRODUCTS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/men_drop/menDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleOfficeDropDiv} onClick={this.toggleOfficeDropDiv}>Office</a></Nav>
                        {
                            this.state.dropOfficeDiv ? 
                            <Collapse in={this.toggleOfficeDropDiv} onMouseLeave={this.toggleOfficeDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/hand_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>LAPTOP BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/wallet.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>MESSENGER</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/shoe_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>STORAGE</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/coat_cover.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>FOLDER</div></li>
                                            <li>
                                                <img src='/images/nav_drop/women_drop/accessories.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>ACCESSORIES</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL PRODUCTS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/women_drop/womenDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'><a href='/' onMouseEnter={this.toggleGiftDropDiv} onClick={this.toggleGiftDropDiv}>Gifting</a></Nav>
                        {
                            this.state.dropGiftDiv ? 
                            <Collapse in={this.toggleGiftDropDiv} onMouseLeave={this.toggleGiftDropDiv}>
                                <Row className='navbar-dropdown'>
                                    <Col className='navbar-drop-list' sm={8}>
                                        <ul>
                                            <li>
                                                <img src='/images/nav_drop/gift_drop/gift_box.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GIFT BOX</div></li>
                                            <li>
                                                <img src='/images/nav_drop/gift_drop/gift_bag.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GIFT BAG</div></li>
                                            <li>
                                                <img src='/images/nav_drop/gift_drop/gift_wrapper.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>GIFT WRAP</div></li>
                                            <li>
                                                <img src='/images/nav_drop/gift_drop/gift_wrapper.png' alt='laundry_img'/>
                                                <div className='navbar-drop-list-label'>POUCHES</div></li>
                                        </ul>
                                        <a href='/' className='navbar-drop-link'>VIEW ALL PRODUCTS</a>
                                    </Col>
                                    <Col sm={4} className='navbar-drop-hero'><img src='/images/nav_drop/gift_drop/giftDropHero.png' alt='home_drop_hero'/></Col>
                                </Row>
                            </Collapse> : null
                        }
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav className='navbar-li'>Garden</Nav>
                    </Nav.Item> */}
                </Nav>
                </div>          
            </Container>  
            </>
        )
    }
}
