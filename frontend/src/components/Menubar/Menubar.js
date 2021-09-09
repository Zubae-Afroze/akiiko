import React, { Component } from 'react'
import { Container, Nav, Collapse, Row, Col } from 'react-bootstrap'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import './Menubar.css'

export default class Menubar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropBagsDiv: false,
      dropHomeDiv: false,
      dropLifestlyeDiv: false,
      dropGiftDiv: false,
      dropStorageDiv: false,
      dropAccessoriesDiv: false,
      prevScrollPos: window.pageYOffset,
      navFixed: false,
    }
  }

  handleScroll = () => {
    const prevScrollPos = this.state.prevScrollPos

    const currentScrollPos = window.pageYOffset
    const navFixed = prevScrollPos < currentScrollPos

    this.setState({
      prevScrollPos: currentScrollPos,
      navFixed,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // hideNavbar = (scrollPos) => {
  //     if (scrollPos >= 70){
  //         this.navBar.current.classList.add('hide-nav-bar');
  //     } else {
  //         this.navBar.current.classList.remove('hide-nav-bar');
  //     }
  // }

  toggleBagsDiv = () => {
    const dropper = this.state.dropBagsDiv
    this.setState({ dropHomeDiv: false })
    this.setState({ dropLifestlyeDiv: false })
    this.setState({ dropGiftDiv: false })
    this.setState({ dropStorageDiv: false })
    this.setState({ dropAccessoriesDiv: false })
    this.setState({ dropBagsDiv: !dropper })
  }

  toggleHomeDiv = () => {
    const dropper = this.state.dropHomeDiv
    this.setState({ dropBagsDiv: false })
    this.setState({ dropLifestlyeDiv: false })
    this.setState({ dropGiftDiv: false })
    this.setState({ dropStorageDiv: false })
    this.setState({ dropAccessoriesDiv: false })
    this.setState({ dropHomeDiv: !dropper })
  }

  toggleLifestlyeDiv = () => {
    const dropper = this.state.dropLifestlyeDiv
    this.setState({ dropBagsDiv: false })
    this.setState({ dropHomeDiv: false })
    this.setState({ dropGiftDiv: false })
    this.setState({ dropStorageDive: false })
    this.setState({ dropAccessoriesDiv: false })
    this.setState({ dropLifestlyeDiv: !dropper })
  }

  toggledropGiftDiv = () => {
    const dropper = this.state.dropGiftDiv
    this.setState({ dropBagsDiv: false })
    this.setState({ dropHomeDiv: false })
    this.setState({ dropLifestlyeDiv: false })
    this.setState({ dropStorageDiv: false })
    this.setState({ dropAccessoriesDiv: false })
    this.setState({ dropGiftDiv: !dropper })
  }

  toggleStorageDiv = () => {
    const dropper = this.state.dropStorageDiv
    this.setState({ dropBagsDiv: false })
    this.setState({ dropHomeDiv: false })
    this.setState({ dropLifestlyeDiv: false })
    this.setState({ dropGiftDiv: false })
    this.setState({ dropAccessoriesDiv: false })
    this.setState({ dropStorageDiv: !dropper })
  }

  toggleAccessoriesDiv = () => {
    const dropper = this.state.dropAccessoriesDiv
    this.setState({ dropBagsDiv: false })
    this.setState({ dropHomeDiv: false })
    this.setState({ dropLifestlyeDiv: false })
    this.setState({ dropGiftDiv: false })
    this.setState({ dropStorageDiv: false })
    this.setState({ dropAccessoriesDiv: !dropper })
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
          <div
            className={classnames('navabar-wrapper', {
              'sticky-navbar': !this.state.navFixed,
            })}
          >
            <Nav fill as='ul' className='navbar-ul'>
              <Nav.Item as='li' className='nav-test'>
                <Nav className='navbar-li'>
                  <div
                    onMouseEnter={this.toggleBagsDiv}
                    onClick={this.toggleBagsDiv}
                  >
                    BAGS
                  </div>
                </Nav>
                {this.state.dropBagsDiv ? (
                  <Collapse in={true}>
                    <Row
                      className='navbar-dropdown'
                      onMouseLeave={this.toggleBagsDiv}
                    >
                      <Col className='navbar-drop-list' sm={6}>
                        <ul onClick={this.toggleBagsDiv}>
                          <li>
                            <Link to='/productlist/bags/women'>
                              <img
                                src='/images/nav_drop/bags/women.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                WOMEN
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to='/productlist/bags/tote'>
                              <img
                                src='/images/nav_drop/bags/tote.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>TOTE</div>
                            </Link>
                          </li>
                          <li>
                            <Link to='/productlist/bags/office'>
                              <img
                                src='/images/nav_drop/bags/office.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                OFFICE
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to='/productlist/bags/travel'>
                              <img
                                src='/images/nav_drop/bags/travel.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                TRAVEL
                              </div>
                            </Link>
                          </li>
                        </ul>
                        <Link
                          to='/allproducts/productlist/bags'
                          className='navbar-drop-link'
                          onClick={this.toggleBagsDiv}
                        >
                          VIEW ALL PRODUCTS
                        </Link>
                      </Col>
                      <Col
                        sm={4}
                        className='navbar-drop-hero'
                        onClick={this.toggleBagsDiv}
                      >
                        <img
                          src='/images/nav_drop/bags/bagsDropHero.jpg'
                          alt='bagsDropHeroImg'
                        />
                      </Col>
                    </Row>
                  </Collapse>
                ) : null}
              </Nav.Item>
              {/* 
                <Nav.Item as="li">
                        <Nav className='navbar-li'><Link to='/beach'>Beach</Link></Nav>
                </Nav.Item> 
              */}
              <Nav.Item as='li'>
                <Nav className='navbar-li'>
                  <div
                    onMouseEnter={this.toggleHomeDiv}
                    onClick={this.toggleHomeDiv}
                  >
                    Home
                  </div>
                </Nav>
                {this.state.dropHomeDiv ? (
                  <Collapse in={true} onMouseLeave={this.toggleHomeDiv}>
                    <Row className='navbar-dropdown'>
                      <Col className='navbar-drop-list' sm={8}>
                        <ul onClick={this.toggleHomeDiv}>
                          <li>
                            <Link to='/productlist/home/dining'>
                              <img
                                src='/images/nav_drop/home/tableware.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                DINING
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to='/productlist/home/kitchen'>
                              <img
                                src='/images/nav_drop/home/kitchen.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                KITCHEN
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to='/productlist/home/laundry'>
                              <img
                                src='/images/nav_drop/home/laundry.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                LAUNDRY
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to='/productlist/home/garden'>
                              <img
                                src='/images/nav_drop/home/garden.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                GARDEN
                              </div>
                            </Link>
                          </li>
                        </ul>
                        <Link
                          to='/allproducts/productlist/home'
                          className='navbar-drop-link'
                          onClick={this.toggleHomeDiv}
                        >
                          VIEW ALL PRODUCTS
                        </Link>
                      </Col>
                      <Col sm={4} className='navbar-drop-hero'>
                        <img
                          src='/images/nav_drop/home/homeDropHero.png'
                          alt='homeDropHeroImg'
                        />
                      </Col>
                    </Row>
                  </Collapse>
                ) : null}
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav className='navbar-li'>
                  <div
                    onMouseEnter={this.toggleLifestlyeDiv}
                    onClick={this.toggleLifestlyeDiv}
                  >
                    Lifestyle
                  </div>
                </Nav>
                {this.state.dropLifestlyeDiv ? (
                  <Collapse in={true} onMouseLeave={this.toggleLifestlyeDiv}>
                    <Row className='navbar-dropdown'>
                      <Col className='navbar-drop-list' sm={8}>
                        <ul>
                          <li>
                            <Link
                              to='/productlist/lifestyle/hygiene'
                              onClick={this.toggleLifestlyeDiv}
                            >
                              <img
                                src='/images/nav_drop/lifestyle/hygiene.jpg'
                                alt='laundry_img'
                              />
                              <div className='navbar-drop-list-label'>
                                HEALTH & HYGIENE
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to='/productlist/lifestyle/workout'
                              onClick={this.toggleLifestlyeDiv}
                            >
                              <img
                                src='/images/nav_drop/lifestyle/lifestyle.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                WORKOUT
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to='/productlist/lifestyle/hobby'
                              onClick={this.toggleLifestlyeDiv}
                            >
                              <img
                                src='/images/nav_drop/lifestyle/hobby.jpg'
                                alt='laundry_img'
                              />
                              <div className='navbar-drop-list-label'>
                                HOBBY
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to='/productlist/lifestyle/stationery'
                              onClick={this.toggleLifestlyeDiv}
                            >
                              <img
                                src='/images/nav_drop/lifestyle/stationery.jpg'
                                alt='laundry_img'
                              />
                              <div className='navbar-drop-list-label'>
                                STATIONERY
                              </div>
                            </Link>
                          </li>
                        </ul>
                        <Link
                          to='/allproducts/productlist/lifestyle'
                          className='navbar-drop-link'
                          onClick={this.toggleLifestlyeDiv}
                        >
                          VIEW ALL PRODUCTS
                        </Link>
                      </Col>
                      <Col
                        sm={4}
                        className='navbar-drop-hero'
                        onClick={this.toggleLifestlyeDiv}
                      >
                        <img
                          src='/images/nav_drop/lifestyle/lifestyleDropHero.jpg'
                          alt='lifestyleDropHeroImg'
                        />
                      </Col>
                    </Row>
                  </Collapse>
                ) : null}
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav className='navbar-li'>
                  <div
                    onMouseEnter={this.toggledropGiftDiv}
                    onClick={this.toggledropGiftDiv}
                  >
                    Gift
                  </div>
                </Nav>
                {this.state.dropGiftDiv ? (
                  <Collapse in={true} onMouseLeave={this.toggledropGiftDiv}>
                    <Row className='navbar-dropdown'>
                      <Col className='navbar-drop-list' sm={8}>
                        <ul onClick={this.toggledropGiftDiv}>
                          <li>
                            <Link to='/productlist/gift/giftbox'>
                              <img
                                src='/images/nav_drop/gift/giftbox.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                GIFT BOX
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to='/productlist/gift/giftbag'>
                              <img
                                src='/images/nav_drop/gift/giftbag.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                GIFT BAG
                              </div>
                            </Link>
                          </li>
                          {/* <li>
                            <img src='/images/nav_drop/gift/baskets.png' alt='laundry_img'/>
                            <div className='navbar-drop-list-label'>FLORAL</div></li> 
                          */}
                          <li>
                            <Link to='/productlist/gift/accessories'>
                              <img
                                src='/images/nav_drop/gift/accessories.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                ACCESSORIES
                              </div>
                            </Link>
                          </li>
                        </ul>
                        <Link
                          to='/allproducts/productlist/gift'
                          className='navbar-drop-link'
                          onClick={this.toggledropGiftDiv}
                        >
                          VIEW ALL PRODUCTS
                        </Link>
                      </Col>
                      <Col
                        sm={4}
                        className='navbar-drop-hero'
                        onClick={this.toggledropGiftDiv}
                      >
                        <img
                          src='/images/nav_drop/gift/giftDropHero.jpg'
                          alt='giftDropHeroImg'
                        />
                      </Col>
                    </Row>
                  </Collapse>
                ) : null}
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav className='navbar-li'>
                  <div
                    onMouseEnter={this.toggleStorageDiv}
                    onClick={this.toggleStorageDiv}
                  >
                    Storage
                  </div>
                </Nav>
                {this.state.dropStorageDiv ? (
                  <Collapse in={true} onMouseLeave={this.toggleStorageDiv}>
                    <Row className='navbar-dropdown'>
                      <Col className='navbar-drop-list' sm={8}>
                        <ul onClick={this.toggleStorageDiv}>
                          {/* <li>
                            <img src='/images/nav_drop/storage/duffel_bag.png' alt='laundry_img'/>
                            <div className='navbar-drop-list-label'>WORK</div></li> 
                          */}
                          <li>
                            <Link to='/productlist/storage/organisers'>
                              <img
                                src='/images/nav_drop/storage/organisers.jpg'
                                alt='laundry_img'
                              />
                              <div className='navbar-drop-list-label'>
                                ORGANISERS
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to='/productlist/storage/home'>
                              <img
                                src='/images/nav_drop/storage/home.jpg'
                                alt='laundry_img'
                              />
                              <div className='navbar-drop-list-label'>HOME</div>
                            </Link>
                          </li>
                        </ul>
                        <Link
                          to='/allproducts/productlist/storage'
                          className='navbar-drop-link'
                          onClick={this.toggleStorageDiv}
                        >
                          VIEW ALL PRODUCTS
                        </Link>
                      </Col>
                      <Col sm={4} className='navbar-drop-hero'>
                        <img
                          src='/images/nav_drop/storage/storageDropHero.jpg'
                          alt='storageDropHeroImg'
                        />
                      </Col>
                    </Row>
                  </Collapse>
                ) : null}
              </Nav.Item>
              <Nav.Item as='li' className='nav-test'>
                <Nav
                  className='navbar-li'
                  onMouseEnter={this.toggleAccessoriesDiv}
                  onClick={this.toggleAccessoriesDiv}
                >
                  Accessories
                </Nav>
                {this.state.dropAccessoriesDiv ? (
                  <Collapse in={true} onMouseLeave={this.toggleAccessoriesDiv}>
                    <Row className='navbar-dropdown'>
                      <Col className='navbar-drop-list' sm={8}>
                        <ul onClick={this.toggleAccessoriesDiv}>
                          <li>
                            <Link to='/productlist/accessories/onthego'>
                              <img
                                src='/images/nav_drop/accessories/onthego.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                ON THE GO
                              </div>
                            </Link>
                          </li>
                          {/* <li>
                              <img src='/images/nav_drop/accessories/coat_cover.png' alt='laundry_img'/>
                              <div className='navbar-drop-list-label'>GADGET</div></li> 
                          */}
                          <li>
                            <Link to='/productlist/accessories/wallet'>
                              <img
                                src='/images/nav_drop/accessories/wallet.jpg'
                                alt='_img'
                              />
                              <div className='navbar-drop-list-label'>
                                WALLET
                              </div>
                            </Link>
                          </li>
                        </ul>
                        <Link
                          to='/allproducts/productlist/accessories'
                          className='navbar-drop-link'
                          onClick={this.toggleAccessoriesDiv}
                        >
                          VIEW ALL PRODUCTS
                        </Link>
                      </Col>
                      <Col
                        sm={4}
                        className='navbar-drop-hero'
                        onClick={this.toggleAccessoriesDiv}
                      >
                        <img
                          src='/images/nav_drop/accessories/accessoriesDropHero.jpg'
                          alt='accessoriesDropHeroImg'
                        />
                      </Col>
                    </Row>
                  </Collapse>
                ) : null}
              </Nav.Item>
            </Nav>
          </div>
        </Container>
      </>
    )
  }
}
