import React , { createContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Menubar from '../../components/Menubar/Menubar'
import MobileNav from '../../components/MobileNav/MobileNav'
import CheckOutCompT from './CheckOutCompT'
import OrderSummaryCompT from './orderSummaryComp'
import './CheckOutStyleIndex.css';
import './orderSummaryStyle.css'

export const CheckOutFormContext = createContext(null);

// const CheckOutFormObj = {
//     shippingForm: {
//         firtsName: '',
//         lastname: '',
//         address: '',
//         phoneNumber: '',
//         city: '',
//         state: '',
//         pinCode: '',
//     },

//     paymentForm: {
//         cardNumber: '',
//         monthYear: '',
//         isSaveMyCardChecked: false,
//         isNetbankingUpiChecked: false,
//         isCodChecked: isCodCheckedState,
//         setCodeState: function(){
//             setIsCodCheckedState(prevState=> !prevState)
//         }
//     },

//     addressDetails: {
//         isNewAddress: false,
//     },

//     stepperlevel: stepperlevel,
//     setStepperlevel: function(level){
//         setStepperlevel(level)
//     }
// }

export default function TestCheckOutScreen() {

    const [isCodCheckedState, setIsCodCheckedState] = useState(false);

    const [stepperlevel, setStepperlevel] = useState(0);

    const [ formObject, setFormObject] = useState(
        {

            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            city: '',
            state: '',
            pinCode: '',

            cardNumber: '',
            monthYear: '',
            month: '',
            year: '',
            isSaveMyCardChecked: false,
            isNetbankingUpiChecked: false,
            isCodChecked: false,
            
            isNewAddress: false,

            stepperlevel: 0,

        }
    )

    const providerValue = { formObject , setFormObject }

    console.log('-------- Test Checkout complete Re-Render -------' + formObject.firstName)

    return (
        <>
        <Menubar />
        <MobileNav />
            <div className='checkOut-container-wraper f-f'>
                
                <div id='child'>

                        <CheckOutFormContext.Provider value={providerValue}>

                            <Row className='p-0 m-0'>

                                <Col xs={12} lg={7} className='p-1 px-md-4'>
                                    <div>
                                        
                                        <CheckOutCompT />
                                        
                                    </div>
                                </Col>

                                <Col xs={12} lg={5} className='p-1 px-md-4'>
                                    <div className='orderSummary-container-wraper'>
                                        <OrderSummaryCompT />
                                    </div>
                                </Col>

                            </Row>

                        </CheckOutFormContext.Provider>

                </div>

            </div>
        </>
    )
}
