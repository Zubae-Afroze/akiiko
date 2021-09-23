import React from 'react'
import './HomeScreenCarouselSlideStyle.css'
import styled, { keyframes } from 'styled-components'

const CarouselProductImage = styled.div`
   position: relative;
   z-index: 1;
   height: 100%;
   width: 100%;
   background-image: url('${props => props.urls[0]}');
    background-repeat: no-repeat;
    background-size: cover;


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


const ProductIntroTitle = styled.div`
   position: absolute;
   z-index: 2;
   height: 30vw;
   width: 30vw;
   background-color: pink;
   bottom: 5%;
   left: 2%;

`

export default function HomeScreenCarouselSlide(props) {
    return (
        <div className='Home-screen-carousel-slide-wrapper'>
            <CarouselProductImage urls={props.urls}>

                <ProductIntroTitle>

                </ProductIntroTitle>

            </CarouselProductImage>
            
        </div>
    )
}
