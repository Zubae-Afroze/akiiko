import React,{useContext} from 'react'
import ItemCardT from './itemCardT'
import { CheckOutFormContext } from './CheckOutIndex'
import { Row } from 'react-bootstrap'

export default function OrderSummaryCompT() {

    const checkOutFormObj = useContext(CheckOutFormContext);

    return (
        <>  
            <div style={{ width:'100%'}}>
                <h6>Order Summary</h6>
                <hr/>
            <CartItemsComp />
            <hr/>
            <PriceDetailsComp />
            </div>
        </>
    )


    function CartItemsComp(){
        let item={
            productName : 'Briyanii',
            price: 599,
            qty: 2,
        }
        return(
            <div>
                <Row className='m-0 p-0'>
                    <ItemCardT item={item}/>    
                    <ItemCardT item={item}/>       
                    {/* <ItemCardT item={item}/>     */}
                </Row>
            </div>
        );
    }


    function PriceDetailsComp(){
        console.log('COD: '+checkOutFormObj.formObject.isCodChecked )
        return(
            <div>
                <div className='f-f d-flex justify-content-between'>
                <h6>Subtotal</h6>
                <h6>399</h6>
                </div>
                <div className='f-f d-flex justify-content-between'>
                <h6>Additional Pay</h6>

                <h6>50</h6>

                </div>
                <div className='f-f d-flex justify-content-between'>
                <h6>Shipping</h6>
                
                {
                    checkOutFormObj.formObject.isCodChecked 
                    ? <h6>50</h6>
                    : <h6>--</h6>
                }
                
                
                </div>
                <hr />

                <div className='d-flex justify-content-between'>
                <h6>Total</h6>

                <h6>--</h6>
                
                </div>
                <div style={{height:'65px'}} />
                <div className='d-flex justify-content-center'>
                    <button type='button' className='continue-shopping-style'> {/*btn btn-outline-secondary*/}
                    Continue Shopping
                    </button>
                </div>
                <div style={{height:'65px'}} />
            </div>
        );
    }

}
