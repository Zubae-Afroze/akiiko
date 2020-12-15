import React, { Component } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import { HashLink as Link } from "react-router-hash-link";
import './Footer.css';

export default class Footer extends Component {
    render() {
        //  const goTo = () => {
        //      window.scrollTo( { top: 1000});
        //  }
        return (
            <>
            <div className='footer-brand-wrapper'> 
                <Container className='footer-brand-container'>
                    <Row className='footer-brand'>
                        <Col sm={5} className='footer-brand-section-one'>
                            <div className='footer-brand-logo'>
                                akiiko
                            </div>
                            <div className='footer-brand-text'>
                            Akiiko is an eco-friendly brand. We design a wide range of natural fabric utility products for everyday use. We value the power of functionality and design to find joy in simplicity. 
                            </div>
                            <div className='footer-brand-button'>
                               <Link to={'/AboutUs'} ><button className='footer-button' >
                                    Read more
                                </button></Link>
                            </div>
                        </Col>
                        <Col sm={7} className='font-wrapper footer-brand-section-two' >  {/* class name is given to adjust the width of the container*/}
                        <Row className='footer-image-row'>
                            <Col className='footer-image-col-1 col-sm-4 footer-icons'  sm><Link smooth={true} to={'/FooterLinks#natural'}><div><img src={'/images/font_images/nature.svg'} alt='natural'/></div></Link>NATURAL</Col>
                            <Col className='footer-image-col-4 col-sm-4 footer-icons' sm><Link smooth={true} to={'/FooterLinks/#organic'}><div><img src={'/images/font_images/organic.svg'} alt='natural'/></div></Link>ORGANIC</Col>
                            <Col className='footer-image-col-3 col-sm-4 footer-icons' sm><div><Link smooth={true} to={'/FooterLinks/#sustainable'}><img src={'/images/font_images/sustainable.svg'} alt='natural'/></Link></div>SUSTAINABLE</Col>
                        </Row >
                        <Row className='footer-image-row'>
                            <Col className='footer-image-col-4 col-sm-4 footer-icons' sm><div><Link smooth={true} to={'/FooterLinks/#eco'}><img src={'/images/font_images/eco.svg'} alt='natural'/></Link></div>ECO FRIENDLY</Col>
                            <Col className='footer-image-col-5 col-sm-4 footer-icons' sm><div><Link smooth={true} to={'/FooterLinks/#no_animal'}><img src={'/images/font_images/no_animal.svg'} alt='natural'/></Link></div>NO ANIMAL SKIN</Col>
                            <Col className='footer-image-col-6 col-sm-4 footer-icons' sm><div><Link smooth={true} to={'/FooterLinks/#no_plastic'}><img src={'/images/font_images/no_plastic.svg'} alt='natural'/></Link></div>NO PLASTIC</Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
                </div>
                <div className='footer-main-wrapper'>
                <Container>
                    <Row className='footer-main'>
                        <Col sm={5}>
                            <div className='footer-main-label'>Available At</div>
                            <div className='footer-main-text'>
                                <p>
                                <div className='footer-bind'><strong>PRECISO FASHION</strong><br/>
                                <span className='footer-sub-sub'>Corporate Office</span></div>
                                3A, LVR centre, <br/> 
                                7 Seshadri Road, Alwarpet, <br/>
                                Chennai 600018 <br/> 
                                India.
                                </p>
                            </div>
                        </Col>
                        <Col sm={7} className='enquire col-sm-6'> {/* enuire form class*/}
                        <div className='footer-main-label-2'>Enquire At</div>
                            <Form inline>
                                <input type="text" placeholder="Your email Id" className='footer-main-form'/>
                                <button className='footer-main-button'>Send</button>
                            </Form>
                        </Col>
                        <div className='footer-social-icons-wrapper'>
                        <ul className='footer-social-icons'>
                            <li><a href='https://www.instagram.com/akiiko_india/' target='_blank' rel="noreferrer"><i className="lni lni-instagram-filled"></i></a></li> 
                            <li><a href='https://www.facebook.com/akiikoindia/' target='_blank' rel="noreferrer"><i className="lni lni-facebook-filled"></i></a></li>
                            <li><a href='https://www.linkedin.com/company/akiiko-india/' target='_blank' rel='noreferrer'><i className="lni lni-linkedin-original"></i></a></li>
                            <li><a href='https://in.pinterest.com/akiiko_india/' target='_blank' rel='noreferrer'><i className="lni lni-pinterest"></i></a></li>
                            <li><a href='https://twitter.com/AkiikoIndia' target='_blank' rel='noreferrer'><i className="lni lni-twitter-original"></i></a></li>
                            {/* <li><a href='/'><i className="lni lni-youtube"></i></a></li> */}
                        </ul>
                    </div> 
                    </Row>
                    <div className='very-end-blyat'>
                        <ul className='very-end-blyat-list'>
                            <li><Link to={'/AboutUs'} >ABOUT US</Link></li>
                            <li><Link to={'/Careers'} >CAREERS</Link></li>
                            <li>HELP</li>
                            <li>FAQs</li>
                            <li>TERMS</li>
                        </ul>
                    </div>
                </Container>
            </div>
            </>
        )
    }
}
