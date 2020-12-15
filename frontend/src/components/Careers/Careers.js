import React, { Component } from 'react'

import {Container} from 'react-bootstrap';
import './Careers.css';


export default class Careers extends Component 
      {
        render()
        {
            return (
                <Container>
                    <div className='careers-wrap my-5'> 
                        <h1 className='Careers-title py-2'>Careers </h1>
                        <div className='Careers-description py-1'> Join Our Team  </div>
                        <div className='Careers-description py-1'>We are always looking for curious and devoted individuals to join our community.  </div>
                        <div className='Careers-description-last py-1'> Tell us your area of interest and share your CV with us at <span className='career-highlight'>info@precisofashion.com.</span></div>
                    </div>
                </Container>
           )
        }

      }
