import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col,  } from 'react-bootstrap';
import { motion } from 'framer-motion'
import ProductRowComp, {ProductRowHeaderComp} from './productRowComp';
import '../../screens/Chekout/style.css'
import '../../screens/NewProfileScreen/style.css'

const containerVariants = {
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


export default function YourOrdresComp() {

    const ordersList = useSelector((state) => state.orderListByProfile.orders)
    
    return (
        <>
            {
                ordersList &&

                <motion.div variants={containerVariants} initial='hidden' animate='visible'>
                <Container className='pe-lg-5 ps-lg-0 m-0 d-flex justify-content-center'>  
                    <ProductsComp />
                </Container>
                
                </motion.div>

            }
        </>

    )


    function ProductsComp(){

    
        if(ordersList.length === 0){
            return(
                <Col xs={12}>
                    <div style={{
                    paddingTop:'12px',
                    paddingBottom:'18px',
                    cursor:'pointer',
    
                }}>
                    <div style={{width:'100%'}} className='d-flex justify-content-center'>
                        <h6>No Orders</h6>  
                    </div>
                </div>
                </Col>
            )
        }else{
            return(
                
                <Row>
                    <Col xs={12} className='d-block d-sm-none '>
                        <div style={{height:'30px'}}></div>
                    </Col>
                    <Col xs={12}>
                        <h6 className='f-f-m'>Your Orders</h6>
                        <div style={{paddingBottom:'2px'}}></div>
                    </Col>

                    <Col xs={12}>
                        <hr style={{marginBottom:'0'}}/>
                    </Col>

                    <ProductRowHeaderComp/>

                    {
                        ordersList.reverse().map((object, index) => {
                        return (
                            <ProductRowComp orderDetails={object} index={index}/>
                        )})
                    }


                </Row>
                
            )
        }
    }
}


