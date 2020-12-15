import React, { Component } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import './FooterLinks.css'


export default class FooterLinks extends Component 
      {
        render()
        {
         
            return (
                <Container>
                    <Row>
                        <div className='footer-link-wrap py-4' id='natural'>
                            <Col lg={4}>
                                <div className='footer-link-image' >
                                <img src={'/images/font_images/nature.svg'} alt='natural'/>
                                NATURAL
                                </div>
                            </Col>
                            <Col lg={8} className='footer-link-text ' >
                            <div className='footer-link-text '>
                                We create with fibres that already exist in or are derived from nature. 
                                This is reflected in our brand’s warm colour palette and our designs, we work with minimal processing and are inspired by hues that exist in an un-dyed state. 
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className='footer-link-wrap footer-link-wrap-two py-4' id='organic'>
                            <Col lg={8} className='footer-link-text'>
                            <div className='footer-link-text'>
                                We use plant based fibres like cotton canvas to create products that are good for the environment. These fabrics are derived from nature without the use of any chemical or artificial components. 
                            </div>
                            </Col>
                            <Col lg={4}     > 
                                <div className='footer-link-image'>
                                <img src={'/images/font_images/organic.svg'} alt='oraganic'/>
                                ORGANIC
                                </div>
                            </Col>
                        </div> 
                    </Row> 

                    <Row>
                        <div className='footer-link-wrap py-4'  id='sustainable'>
                            <Col lg={4}>
                                <div className='footer-link-image'>
                                <img src={'/images/font_images/sustainable.svg'} alt='sustainable'/>
                                SUSTAINABLE
                                </div>
                            </Col>
                            <Col lg={8} className='footer-link-text'>
                                <div className='footer-link-text'>
                                It is vital to consume in a manner which preserves for the future generations. Our hemp collection was designed with this aim in mind. Hemp is the most sustainable fabric in the world, making our hemp creations both beautiful and ethical.
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className='footer-link-wrap footer-link-wrap-two py-4' id='no_plastic'>
                            <Col lg={8} className='footer-link-text'>
                            <div className='footer-link-text' id={'no_plastic'}>
                            Plastic is a material that cannot biodegrade. We stay true to our 
                                green living mindset by avoiding the use of plastic in all our products 
                                and packaging.
                            </div>
                            </Col>
                            <Col lg={4}> 
                                <div className='footer-link-image'>
                                <img src={'/images/font_images/no_plastic.svg'} alt='sustainable'/>
                                NO PLASTIC
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className='footer-link-wrap py-4' id='eco'>
                            <Col lg={4}>
                                <div className='footer-link-image'>
                                <img src={'/images/font_images/eco.svg'} alt='eco'/>
                                ECO FRIENDLY
                                </div>
                            </Col>
                            <Col lg={8} className='footer-link-text'>
                                <div className='footer-link-text'>
                                Our biggest inspirations is nature and we are committed to ensuring 
                                    that we give back by creating eco-friendly products that are not 
                                    harmful to the environment.  Our eco-conscious mindset has enabled us to embed multi-utility and reusability in our designs. 
                                </div>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div className='footer-link-wrap footer-link-wrap-two py-4' id="no_animal">
                            <Col lg={8} className='footer-link-text'> 
                            <div className='footer-link-text'>
                            We avoid the use of any animal derived components in our products and as a brand. We stay committed to ensuring that all our items are completely vegan and cruelty free. 
                            </div>
                            </Col>
                            <Col lg={4}> 
                                <div className='footer-link-image'>
                                <img src={'/images/font_images/no_animal.svg'} alt='no-animal'/>
                                NO ANIMAL SKIN
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            )
        }

      }

