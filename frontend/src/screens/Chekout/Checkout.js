import React , {useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CheckOutComp from '../../components/CheckOut/CheckOutComp'
import OrderSummaryComp from '../../components/CheckOut/OrderSummaryComp'
import Menubar from '../../components/Menubar/Menubar'
import MobileNav from '../../components/MobileNav/MobileNav'
import { paymentObject,shippingObject,isAddNewAddressSelected } from '../../components/CheckOut/FormObject'
import { getUserProfileByUID } from '../../actions/actionProfile';
import { Redirect } from 'react-router-dom'
import './style.css'

export const CashOnDeliveryContext = React.createContext();

export default function CheckOut() {

  

  const [cashOnDeliveryState, setCashOnDeliveryState ] = useState(paymentObject.isCOD);

  const dispatch = useDispatch()

  const uid = useSelector((state) => state.firebase.auth.uid)

  // const order = useSelector((state) => state.orderCreate)

  useEffect(() => {
    isAddNewAddressSelected.value = false;
    dispatch(getUserProfileByUID(uid));
    console.log(uid);
    shippingObject.firstname = '';
    shippingObject.lastname = '';
    shippingObject.adress = '';
    shippingObject.mobile = '';
    shippingObject.city = '';
    shippingObject.state = '';
    shippingObject.zipCode = '';

    paymentObject.cardNumber= '';
    paymentObject.isCheckMeOut= false;
    paymentObject.monthYearCVC= '';
    paymentObject.isNetbankingUPI= false;
    paymentObject.isCOD= false;

    console.log('---------- Use Effect called -------');

  }, [dispatch,uid])

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
    { false ? <Redirect to='/'/> : //order.order
    <>
    <Menubar />
    <MobileNav />
    <Container fluid className='p-0 m-0 d-flex justify-content-center remove-margin' style={{width:'100%' }}>
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

              <Col sm={12} md={12} lg={4} style={{ margin: 0, padding: 0 }} className='small-size'>
                <OrderSummaryComp />
              </Col>
            </Row>

          </CashOnDeliveryContext.Provider>

        </Container>
      </Container>
    </div>
    </Container>
    </>
    }
    </>
  )
}
