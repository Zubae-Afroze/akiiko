import { Container, Row, Col } from 'react-bootstrap'
import CheckOutComp from '../../components/CheckOut/CheckOutComp'
import OrderSummaryComp from '../../components/CheckOut/OrderSummaryComp'
import Menubar from '../../components/Menubar/Menubar'
import MobileNav from '../../components/MobileNav/MobileNav'

function CheckOut() {
  return (
    <>
    <Menubar />
    <MobileNav />
    <Container fluid className='p-0 m-0 d-flex justify-content-center' style={{width:'100%'}}>
    <div style={{ padding: 0, margin: 0, fontFamily: 'rutanLight' }}>
      <Container style={{ margin: 0, padding: 0 }}>
        <Container fluid className='p-0 m-0 d-flex justify-content-center'>
          <Row style={{ width: '100%', margin: 0, padding: 0 }}>
            <Col
              sm={12}
              md={12}
              lg={8}
              style={{ margin: 0, padding: 0 }}
              className='align-items-center'
            >
              <div className='p-md-5'>
                <CheckOutComp />
              </div>
            </Col>

            <Col sm={12} md={12} lg={4} style={{ margin: 0, padding: 0 }}>
              <OrderSummaryComp />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
    </Container>
    </>
  )
}

export default CheckOut
