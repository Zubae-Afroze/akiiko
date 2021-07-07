import React from 'react'
import { Col } from 'react-bootstrap'

const containerStyle = {
  width: '143px',
  height: '210px',
  backgroundColor: 'white',
  padding: 0,
  margin: 4,
}

export default function ItemCard() {
  return (
    <Col xs={6} className='p-0 mb-2 d-flex justify-content-center'>
      <div style={containerStyle}>
        <div
          style={{ height: '70%', width: '100%', backgroundColor: '#6B584C' }}
        ></div>
        <div
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: 'white',
            paddingLeft: 5,
          }}
        >
          <h6 style={{ fontSize: '13px' }}>Product name</h6>
        </div>

        <div
          style={{
            height: '10%',
            width: '100%',
            backgroundColor: '#f0ede9',
            paddingLeft: 5,
          }}
        >
          <h6 style={{ fontSize: '13px' }}>Price - 199 </h6>
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
          <button
            style={{
              backgroundColor: '#E3DED5',
              border: 'none',
              color: '#6B584C',
              cursor: 'pointer',
            }}
          >
            <h6 style={{ fontSize: '20px', fontWeight: 'bold' }}> - </h6>
          </button>
          <h6 className='ps-2 pe-2 pt-1'>199</h6>
          <button
            style={{
              backgroundColor: '#E3DED5',
              border: 'none',
              color: '#6B584C',
              cursor: 'pointer',
            }}
          >
            <h6 style={{ fontSize: '20px', fontWeight: 'bold' }}> + </h6>
          </button>
        </div>
      </div>
    </Col>
  )
}
