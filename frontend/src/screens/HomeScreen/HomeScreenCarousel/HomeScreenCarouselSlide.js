import React from 'react'
import { Carousel } from 'react-bootstrap'
import './HomeScreenCarouselSlideStyle.css'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

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

let fontSize = 2.5;

const ProductIntroTitle = styled.div`
   position: absolute;
   z-index: 2;
   height: 30vw;
   width: 20vw;
   /* background-color: pink; */
   /* border: 1px solid red; */
   bottom: 8%;
   left: 10vw;
   display: flex;
   justify-content: center;
   align-items: center;

`

const ProductArrivalTag = styled.div`
    background-color: #eee7e1;
    padding: 0.1rem;
    padding-inline: 0.8rem;
    font-size: 1.2rem;
    border-radius: 0.8rem;
    width: fit-content;
    margin-bottom: 2rem;
`

const ProductBigTitle = styled.h1`
    color: #6b594c;
  font-family: 'caudex';
  line-height: ${fontSize}rem;
  font-size: ${fontSize+1}rem; 
  /* 3.5 */
  margin-block: 0;
  margin-bottom: 1rem;
    /* display: inline; */
`

const ProductSmallTitle = styled.h2`
    color: #6b594c;
  font-family: 'caudex';
  line-height: ${fontSize-0.5}rem;
  /* 2rem */
    /* display: inline; */
`
const ProductDescription = styled.p`
    color: #6b594c;
  font-family: 'caudex';
  font-size: ${fontSize-1.3}rem;
  /* 1.2rem */
  line-height: ${fontSize-1}rem;
  margin-bottom: 2rem;
  /* 1.5rem */
`

const CarouselProductShopBtn = styled.button`
    color: #f9f4ee;
    background-color: #6a584c;
    font-family: 'caudex';
    font-size: ${fontSize-1.3}rem;
    /* 1.3 rem */
    border-radius: 8px;
    border: none;
    padding: 0.4rem;
`

export default function HomeScreenCarouselSlide(props) {
    return (

            <div className='Home-screen-carousel-slide-wrapper'>
                <CarouselProductImage urls={props.urls}>

                    {/* <ProductIntroTitle>
                        <div>

                            <ProductArrivalTag>
                                NEW IN
                            </ProductArrivalTag>

                            <ProductBigTitle>The&nbsp;</ProductBigTitle>
                            <ProductBigTitle>Bindle&nbsp;</ProductBigTitle>
                            <ProductBigTitle>Bag</ProductBigTitle>

                            <ProductDescription>
                                The Japanese style <br/>
                                Linen Bag you have <br/>
                                to try !
                            </ProductDescription>

                            <CarouselProductShopBtn>
                                SHOP NOW
                            </CarouselProductShopBtn>

                        </div>
                    </ProductIntroTitle> */}

                </CarouselProductImage>
            </div>
    )
}
