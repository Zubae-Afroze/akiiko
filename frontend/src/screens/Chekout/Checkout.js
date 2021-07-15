import React  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CheckOutComp from '../../components/CheckOut/CheckOutComp'
import OrderSummaryComp from '../../components/CheckOut/OrderSummaryComp'
import Menubar from '../../components/Menubar/Menubar'
import MobileNav from '../../components/MobileNav/MobileNav'
import { paymentObject } from '../../components/CheckOut/FormObject'

export const CashOnDeliveryContext = React.createContext();

export default function CheckOut() {

  const [cashOnDeliveryState, setCashOnDeliveryState ] = React.useState(paymentObject.isCOD);

  function toggelCODstate(codState,type){
    if(type==='text') {
      setCashOnDeliveryState(false);
    }else{
      setCashOnDeliveryState(codState);
    }
    // console.log('-------------------');
  }

  return (
    <>
    <Menubar />
    <MobileNav />
    <Container fluid className='p-0 m-0 d-flex justify-content-center' style={{width:'100%' }}>
    <div style={{ padding: 0, margin: 0, fontFamily: 'rutanLight' }}>
      <Container style={{ margin: 0, padding: 0 }}>
        <Container fluid className='p-0 m-0 d-flex justify-content-center'>

          <CashOnDeliveryContext.Provider value={{value:cashOnDeliveryState, toggleCodState: toggelCODstate }}>

            <Row style={{ width: '100%', margin: 0, padding: 0 }}>
              <Col
                sm={12}
                md={12}
                lg={8}
                style={{ margin: 0, padding: 0,}} //684
                className='align-items-center checkOutComp-wraper'
              >
                <div className='p-md-5'>
                  <CheckOutComp />
                </div>
              </Col>

              <Col sm={12} md={12} lg={4} style={{ margin: 0, padding: 0 }}>
                <OrderSummaryComp />
              </Col>
            </Row>

          </CashOnDeliveryContext.Provider>

        </Container>
      </Container>
    </div>
    </Container>
    </>
  )
}
