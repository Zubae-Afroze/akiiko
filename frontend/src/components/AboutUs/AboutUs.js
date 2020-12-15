import React, { Component } from 'react'

import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './AboutUs.css';


export default class AboutUs extends Component 
      {
        render()
        {
            return (
                <Container>
                    <div>
                    <h1 className='about-title py-3'>About Us </h1>

                              <div className='about-description py-2'>  We design a wide range of natural fabric utility products to be used everyday. 
                              We value the power of functionality and hope our bags and home accessories can add simplicity, joy and organisation to your life. 
                              Inspired by japanese design philosophy, we bring to you warm minimalism & positive vibes. </div>
                              <div className='about-description py-2'>
                                Akiiko is an eco-friendly brand by Preciso Fashion, a company founded by Brajesh Gutgutia in 2018. With a background in 
                                designing home decor products, he envisaged a world with a range of products that were beautiful, usable and ethical whilst 
                                remaining true to his precise and clean designs. This is the foundation of our aesthetic and we remain  <span className='about-highlight'><Link to={'/FooterLinks'}>committed to this mindset</Link></span>. You can look forward to cherishing, reusing and 
                                 finding purpose in all your akiiko products.
                              </div>
                    </div>
                </Container>
            )
        }

      }
