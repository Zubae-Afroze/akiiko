import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import './carouselItemStyle.css'

const BGImage = styled.div`
    position: relative;
    background-image: url('${props => props.urls[1]}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 85vh;

    /* TAB */
    @media (max-width: 768px) {
        background-image: url(${props => props.urls[2]});
    }

    /* MOBILE */
    @media (max-width: 440px) {
        background-image: url(${props => props.urls[3]});
    }
  `

export default function CarouselItem(props) {
    return (
        <BGImage urls={props.urls}>
            {
                props.children
            }
            <div className='entrance-title'>
                {/* <div> */}
                    <div className='carousel-big-text'> The Bindle Bag </div>
                    <div style={{height: '15px'}} />
                    <div className='carousel-sub-text'>Available in 3 Shades of Natural Line</div>

                    <button className='shop-all-carousel-btn'>
                        SHOP ALL
                    </button>
                    {/* <div className='carousel-big-text'>The</div>
                    <div className='carousel-big-text'>Bindle</div>
                    <div className='carousel-big-text'>Bag</div>
                    <div className='carousel-sub-text'>Available in 3</div>
                    <div className='carousel-sub-text'>Shades of</div>
                    <div className='carousel-sub-text'>Natural Line</div> */}
                {/* </div> */}
            </div>
        </BGImage>
    )
}
