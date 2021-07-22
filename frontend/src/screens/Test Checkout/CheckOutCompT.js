import React , {useContext} from 'react'
import Stepper from 'react-stepper-horizontal'
import ShippingFormT from './shippingForm';
import {Row, Col, Button} from 'react-bootstrap'
import { CheckOutFormContext } from './CheckOutIndex'
import PaymentFormT from './PaymentForm'
import ReviewFormT from './reviewForm'

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

    const checkOutFormObj = useContext(CheckOutFormContext);


    return (
        <>
            <div className='pt-3 pb-4 mt-3 mb-4'>
                <Stepper
                    steps={[
                    { 
                        title: 'Shipping',
                        onClick: () => { 
                            checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel:0})
                        }
                    },
                    { 
                        title: 'Payment',
                        onClick: () => { 
                            checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel:1})
                            // checkOutFormObj.obj.setStepperlevel(1)
                        }
                    },
                    { 
                        title: 'Review',
                    },
                    ]}
                    activeStep={checkOutFormObj.formObject.stepperlevel}
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

            <div style={{
                // backgroundColor:'#e6e6e6', 
                minHeight:'300px'}}>
                
                {
                    checkOutFormObj.formObject.stepperlevel === 0 ?
                        <ShippingFormT/>
                    :   checkOutFormObj.formObject.stepperlevel === 1 ?
                        <PaymentFormT />
                    :   <ReviewFormT />

                }

            </div>
            {/* <div className='d-none d-sm-none d-md-block'>
                <Row className='p-0 m-0'>
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0' />
                    <Col xs={12} sm={4} className='p-0 m-0'>
                        <Button
                            style={{ backgroundColor: '#977257', border: 0, borderRadius: 0, width:'100%', marginLeft:'7px' }}
                            size='lg'
                            variant='primary'
                            type='submit'
                            className='p-2 m-0'
                            onClick={onPaymentFormSubmit}
                        >
                            Next
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className='d-block d-sm-block d-md-none f-f-m'>
                <div className='d-flex justify-content-center '>
                    <Button
                        style={{ backgroundColor: '#977257', border: 0, borderRadius: 0 }}
                        size='md'
                        variant='primary'
                        type='submit'
                        className='px-5 me-3 mt-3 mb-3'
                        onClick={onPaymentFormSubmit}
                    >
                        NEXT
                    </Button>
                </div>
            </div> */}
        </>
    )

    function onPaymentFormSubmit(e){
        e.preventDefault();
        console.log('On Submit: ');
        console.log(checkOutFormObj.formObject)

        if(checkOutFormObj.formObject.stepperlevel < 2){

            checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel: checkOutFormObj.formObject.stepperlevel + 1})

        }else{
            checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel: 0})
        }

        // checkOutFormObj.setStepperlevel(1)
    }
}
