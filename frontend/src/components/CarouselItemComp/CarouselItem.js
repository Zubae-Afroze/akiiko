import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import './carouselItemStyle.css'

const BGImage = styled.div`
    position: relative;
    background-image: url('${props => props.urls[0]}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 85vh;

    /* LAPTOP */
    @media (max-width: 1280px) {
        background-image: url('${props => props.urls[1]}');
    }

    /* TAB */
    @media (max-width: 769px) {
        background-image: url('${props => props.urls[2]}');
    }

    /* MOBILE */
    @media (max-width: 440px) {
        background-image: url('${props => props.urls[3]}');
    }
  `


const ProductImage = styled.div`
    position: absolute;
    background-image: url('${props => props.productImages[0]}');
    background-repeat: no-repeat;
    background-size: cover;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    /* z-index: 5; */
    width: ${props => props.productImageWidth[0]};
    height: ${props => props.productImageHeight[0]};

    
    /* LAPTOP */
    @media (max-width: 1280px) {
        width: ${props => props.productImageWidth[1]};
        height: ${props => props.productImageHeight[1]};
    }

    /* TAB */
    @media (max-width: 769px) {
        width: ${props => props.productImageWidth[2]};
        height: ${props => props.productImageHeight[2]};
    }

    /* MOBILE */
    @media (max-width: 440px) {
        width: ${props => props.productImageWidth[3]};
        height: ${props => props.productImageHeight[3]};
    }
  `

export default function CarouselItem(props) {
    return (
        <BGImage urls={props.urls}>
            <ProductImage productImages={props.productImages} productImageWidth={props.productImageWidth} productImageHeight={props.productImageHeight} >
                {
                    props.children
                }
            </ProductImage>
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
