import React , { createContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Menubar from '../../components/Menubar/Menubar'
import MobileNav from '../../components/MobileNav/MobileNav'
import CheckOutCompT from './CheckOutFormsComp'
import OrderSummaryCompT from '../../components/Checkout Stable/OrderSummaryComp'
import './CheckOutStlye.css';
import './orderSummaryStyle.css'

export const CheckOutFormContext = createContext(null);


export default function StableCheckOutScreen() {

    const [ formObject, setFormObject] = useState(
        {

            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            city: '',
            state: '',
            zipCode: '',

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
