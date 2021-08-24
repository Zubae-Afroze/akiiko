import React , { createContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Menubar from '../../components/Menubar/Menubar'
import MobileNav from '../../components/MobileNav/MobileNav'
import CheckOutCompT from './CheckOutFormsComp'
import OrderSummaryCompT from '../../components/Checkout Stable/OrderSummaryComp'
import { getUserDetails } from '../../actions/actionUsers'
import './CheckOutStlye.css';
import './orderSummaryStyle.css'

export const CheckOutFormContext = createContext(null);

export const formEntranceAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

// export const addressFormStateStore = {
//     firstName: '',
//     lastName: '',
//     address: '',
//     phoneNumber: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     isNewAddress: false,
// }


export default function StableCheckOutScreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserDetails('profile'))
        console.log('stable checkout rendered');
    }, [])


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

    // useEffect(() => {
    //     let tempObj = {

    //         firstName: addressFormStateStore.firstName,
    //         lastName: addressFormStateStore.lastName,
    //         address: addressFormStateStore.address,
    //         phoneNumber: addressFormStateStore.phoneNumber,
    //         city: addressFormStateStore.city,
    //         state: addressFormStateStore.state,
    //         zipCode: addressFormStateStore.zipCode,

    //         cardNumber: '',
    //         monthYear: '',
    //         month: '',
    //         year: '',
    //         isSaveMyCardChecked: false,
    //         isNetbankingUpiChecked: false,
    //         isCodChecked: false,
            
    //         isNewAddress: addressFormStateStore.isNewAddress,

    //         stepperlevel: 0,

    //     }
    //     setFormObject()
    // }, [])


    return (
        <>
        <div style={{width:'100vw'}}>

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
        </div>
        </>
    )
}
