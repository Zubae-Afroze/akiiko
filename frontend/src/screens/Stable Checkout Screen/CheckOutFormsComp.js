import React , {useContext} from 'react'
import Stepper from 'react-stepper-horizontal'
import ShippingFormT from '../../components/Checkout Stable/ShippingForm';
import { CheckOutFormContext } from './CheckOutIndex'
import PaymentFormT from '../../components/Checkout Stable/PaymentForm'
import ReviewFormT from '../../components/Checkout Stable/ReviewForm'
import { useHistory } from 'react-router-dom'

function CloseIcon({history,checkOutFormObj}){

    // if(checkOutFormObj.formObject.isNewAddress && checkOutFormObj.formObject.stepperlevel===0){
    //     return(
    //         <span onClick={()=>{
    //             checkOutFormObj.setFormObject({...checkOutFormObj.formObject,isNewAddress:false})
    //         }}
    //         >

    //             <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='18'
    //                 height='18'
    //                 fill='currentColor'
    //                 class='bi bi-x'
    //                 viewBox='0 0 16 16'
    //             >
    //                 <path
    //                 fillRule='evenodd'
    //                 d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
    //                 />
    //             </svg>

    //         </span>
    //     )
    // }else{

        return(
            <span onClick={()=>{
                history.push('/')
            }}>
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

    //}
}

export default function CheckOutCompT() {

    const checkOutFormObj = useContext(CheckOutFormContext);

    const history = useHistory()


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
                <CloseIcon history={history}/>
                <span><h4 style={{marginTop:'10px' ,display:'inline' ,maxWidth:'150px'}}>Checkout</h4></span>
            </div>
            <hr/>

            <div 
                className='forms-wraper-height f-f-l'
                // style={{minHeight:'300px'}}
                >
                
                {
                    checkOutFormObj.formObject.stepperlevel === 0 ?
                        <ShippingFormT/>
                    :   checkOutFormObj.formObject.stepperlevel === 1 ?
                        <PaymentFormT />
                    :   <ReviewFormT />

                }

            </div>
            
        </>
    )

}
