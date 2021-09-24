import React from 'react'
import ProductCardComponent from '.';
import './styles/productcomponentTestScreenStyle.css'


export default function ProductcomponentTestScreen() {
    return (
        <div style={{height: '100vh',width:'100vw'}}>
            
            <div className='product-component-test-screen-flex'>
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
            </div>

            {/* <div className='product-component-test-screen-flex2'>
                <ProductCardComponent />
                <ProductCardComponent />
                <ProductCardComponent />
            </div> */}


        </div>
    )
}
