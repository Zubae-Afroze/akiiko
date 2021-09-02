import React from 'react'
import ProductItemComp from './ProductItemComp'
import './ProductItemCompStyle.css'

export default function ProductTestScreen() {
    return (
        <div style={{height: '100%', width:'100%'}}>

            <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', height: '100%', width:'100%'}}>
            <FlexCards />
            <FlexCards />
            <FlexCards />
            <FlexCards />
            <FlexCards />
            <FlexCards />
            <FlexCards />
            <FlexCards />
                 {/* <ProductItemComp />
                <ProductItemComp />
                <ProductItemComp />
                <ProductItemComp />
                <ProductItemComp />
                <ProductItemComp />
                <ProductItemComp />
                <ProductItemComp />  */}
            </div>
        </div>
    )
}

function FlexCards(){
    return(
        <div style={{
            height:'322px',
            width: '230px',
            margin: '10px',
            // backgroundColor:'greenyellow',
        }}>
    <ProductItemComp />
        </div>
    );
}
