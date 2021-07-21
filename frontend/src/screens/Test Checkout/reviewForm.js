import React, {useContext} from 'react'
import { Row,Col } from 'react-bootstrap'
import { CheckOutFormContext } from './CheckOutIndex'
import './CheckOutStyleIndex.css'


export default function ReviewFormT() {

    const checkOutFormObj = useContext(CheckOutFormContext);

    return (
        <Row className='p-0 m-0'>
            
            <Col xs={12} className='p-0 m-0'>
                <h6>Shipping</h6>
            </Col>

            <AddressComp />

            <Col xs={12} className='p-0 m-0'>
                <hr/>
            </Col>

            <Col xs={12} className='p-0 m-0'>
                <h6>Payment</h6>
            </Col>
            
            <PaymentTypeComp />

        </Row>
    )

    function AddressComp(){
        return(
            <>
                <Col xs={10} className='p-0 m-0'>
                    <div>
                        <h6>{checkOutFormObj.formObject.firstName + ' ' + checkOutFormObj.formObject.lastName}</h6>
                        <h6>{checkOutFormObj.formObject.address}</h6>
                        <h6>{checkOutFormObj.formObject.city + '-' +checkOutFormObj.formObject.pinCode}</h6>
                        <h6 className='p-0 m-0'>Mobile - {checkOutFormObj.formObject.phoneNumber}</h6>
                    </div>
                </Col>

                <Col xs={2} className='p-0 m-0'>
                    <h6 className='p-0 m-0'
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }}
                        onClick={() =>  checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel:0}) }
                    >
                        Edit
                    </h6>
                </Col>
            </>
        )
    }


    function PaymentTypeComp(){
        return(
            <>
                <Col xs={11} className='p-0 m-0'>
                    <div className='payment-method-type-box'
                        // style={{
                        //     padding: '12px',
                        //     paddingTop: '20px',
                        //     paddingLeft: '20px',
                        //     borderStyle: 'solid',
                        //     borderColor: '#ced4da',
                        //     borderWidth: '1px',
                        //     marginTop: '10px',
                        //     marginBottom: '10px',
                        //     width: '60%',
                        // }}
                    >

                    {
                        checkOutFormObj.formObject.isCodChecked
                        ? <h6> Cash On Delivery </h6>
                        : checkOutFormObj.formObject.isNetbankingUpiChecked
                        ? <h6>Net Banking UPI</h6>
                        : <h6> .... .... 9876 </h6>
                    }
                    </div>
                </Col>

                <Col xs={1} className='p-0 m-0'>
                    <h6 className='p-0 m-0'
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }}
                        onClick={() =>  checkOutFormObj.setFormObject({...checkOutFormObj.formObject,stepperlevel:0}) }
                    >
                        Edit
                    </h6>
                </Col>
            </>
        );
    }
}
