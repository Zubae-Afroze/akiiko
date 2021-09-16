import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'

const Text = styled.div`
    background-color: pink;
    color: red;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  height: 50px;
  width: 50px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
    &:hover{
        background-color: yellow;
    }
    &:hover ${Text},
    :active ${Text}
    {
        background-color: cyan;
    }
  `
  /* ${props =>
    props.primary &&
    css`
      background-color: green;
      color: white;
    `}; */


const Pointer = styled.div`
    display: none;
    position: absolute;
    height: 6px;
    width: 6px;
    background-color: #977257;
    top: 3.3px;
    left: 3.8px;
    border-radius: 50%
`

const ProductDetail = styled.div`
    opacity: 0;
    padding-top: 2px;
    font-size: 12px;
    transition: 0.5s;
    text-decoration: none;
    text-align: center;
    cursor: default;

    & p {
        padding: 0 5px;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`


const ViewProductButton = styled.div`
    height: 20px;
  opacity: 0.85;
  color: #977257;
  font-size: 10px;
  overflow: hidden;
  transition: 0.5s;
  transform: scaleY(0);
  transform-origin: bottom;


  &:hover{
    transition-delay: 0s;
    color: #74390f;
    cursor: pointer;
  }
`

const pulseAnimation = keyframes`
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;


const ProductTag = styled.div`
    position: absolute;
    height: 14px;
    width: 14px;
    background-color: white;
    top: ${props => props.laptop[0]};
    left: ${props => props.laptop[1]};
    border-radius: 50%;
    transition: 0.5s;
    animation: ${pulseAnimation} 0.8s infinite alternate;
    z-index: 2;
    overflow: hidden;
    cursor: pointer;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    &:hover,:active,:focus{
        height: 50px;
        width: 120px;
        border-radius: 5px;
        opacity: 0.85;
        animation: none;
    }
    
    &:hover > ${ProductDetail},
    :active > ${ProductDetail}{
        transition-delay: 0.5s;
        opacity: 0.85;
    }

    &:hover > ${Pointer},
    :active > ${Pointer}{
        display: block;
    }

    &:hover > ${ProductDetail} ${ViewProductButton},
    :active > ${ProductDetail} ${ViewProductButton} {
        transition-delay: 1s;
        transform: scaleY(1);
    }

    /* IPAD LandScape 
    @media (max-width: 1024px) {
        background-color: red;
    }
    */

    /* IPAD Portraite */
    @media (max-width: 768px) {
        top: ${props => props.tab[0]};
        left: ${props => props.tab[1]};
    }

    /* MOBILE */
    @media (max-width: 440px) {
        top: ${props => props.mob[0]};
        left: ${props => props.mob[1]};
    }
`








export default function ProductTagComponent(props) {
    
    return (
        <ProductTag laptop={props.laptop} tab={props.tab} mob={props.mob} >
        <Pointer />
            <ProductDetail>
                <p>{props.title}</p>
                <Link
                    to={'/product/5fe18171a384156e680756fe'}
                >
                    <div>&#x20B9; {props.price}</div>
                    <ViewProductButton>View Product &#10095;</ViewProductButton>
                </Link>
            </ProductDetail>
        </ProductTag>
    )
}


function Compon(){
    return (
        <ProductTag >
            <ProductDetail>
                <p>Product Title kisudyerhq asioudyaoiws </p>
                <Link
                    to={'/product/5fe18171a384156e680756fe'}
                >
                    <div>&#x20B9; 99</div>
                    <ViewProductButton>View Product &#10095;</ViewProductButton>
                </Link>
            </ProductDetail>
        </ProductTag>
    )
}
