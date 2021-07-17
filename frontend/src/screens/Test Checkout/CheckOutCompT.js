import React from 'react'
import Stepper from 'react-stepper-horizontal'
import ShippingFormT from './shippingForm';

function CloseIcon(){
    return(
        <span>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='23'
                height='23'
                fill='currentColor'
                class='bi bi-x'
                viewBox='0 0 16 16'
            >
            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>
        </span>
    );
}

export default function CheckOutCompT() {
    return (
        <>
            <div className='pt-3 pb-4 mt-3 mb-4'>
                <Stepper
                    steps={[
                    { 
                        title: 'Shipping',
                        // onClick: () => { 
                        //     setFormLevel(stepperLevel.SHIPPING)
                        // }
                    },
                    { 
                        title: 'Payment',
                    },
                    { 
                        title: 'Review',
                    },
                    ]}
                    activeStep={1}
                    size={12}
                    circleFontSize={0}
                    activeColor='#6B584C'
                    completeColor='#A4957A'
                    circleFontColor='#6B584C'
                    titleFontSize='14px'
                />
            </div>
            
            <div style={{display:'flex',alignItems:'center',}}>
                <CloseIcon />
                <span><h4 style={{marginTop:'10px' ,display:'inline' ,maxWidth:'150px'}}>Checkout</h4></span>
            </div>
            <hr/>

            <div style={{backgroundColor:'red', minHeight:'400px'}}>
                
                <ShippingFormT/>

            </div>
        </>
    )
}
