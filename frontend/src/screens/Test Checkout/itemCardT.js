import React from 'react'
import { Col } from 'react-bootstrap'
import './style.css'

const containerStyle = {
  width: '143px',
  height: '210px',
  backgroundColor: 'white',
  padding: 0,
  margin: 4,
}

export default function ItemCardT({item,dispatch}) {
  return (
    <Col xs={6} className='p-0 mb-2'>
      <div style={containerStyle}>
        <div
          style={{ height: '65%', width: '100%', backgroundColor: '#6B584C' }}
        >
          <img src={item.image} alt="Girl in a jacket" width="143px" height="100%"/> 
        </div>
        <div
          style={{
            height: '12.5%',
            width: '100%',
            backgroundColor: 'white',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 8
          }}
        >
          <h6 style={{ fontSize: '10px',whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis', textTransform: 'uppercase'  }}>
            {item.productName}
          </h6>
        </div>

        <div
          style={{
            height: '12.5%',
            width: '100%',
            backgroundColor: '#f0ede9',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 8
          }}
        >
          <h6 style={{ fontSize: '10px', textTransform: 'uppercase' }}>Price - {item.price} </h6>
        </div>

        <div
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#E3DED5',
            paddingTop: 5,
          }}
          className='d-flex justify-content-center'
        >
          <h6 className='ps-2 pe-2 pt-1'>{item.qty}</h6>
        </div>
      </div>
    </Col>
  )
}
