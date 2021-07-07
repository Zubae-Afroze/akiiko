import React from 'react'
import { Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../../screens/Chekout/style.css'

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

export default function ReviewForm({ setFormLevel }) {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible'>
      <h6
        style={{ color: '#4A4A4A', fontWeight: 500, marginBottom: '20px' }}
        className='f-f-m'
      >
        Shipping ?
      </h6>
      <section
        style={{
          marginTop: '5px',
          color: '#4A4A4A',
        }}
        className='f-f-m'
      >
        <div>Suhail Kumar</div>
        <div>5c Rams rageshwara Apartment</div>

        <div className='d-flex justify-content-between'>
          <h6>Chennai - 00095 INDIA mobile - 9783882173</h6>
          <h6>Edit</h6>
        </div>
      </section>
      <hr />

      <section className='f-f-m'>
        <h5>Payment</h5>
        <div className='d-flex justify-content-between'>
          <div
            style={{
              padding: '15px',
              borderStyle: 'solid',
              borderColor: '#E3DED5',
              borderWidth: '2px',
              marginTop: '10px',
              marginBottom: '10px',
              width: '60%',
            }}
          >
            <h6> . . . . 98825 </h6>
          </div>
          <h6
            style={{
              padding: '15px',
              marginTop: '15px',
              marginBottom: '10px',
            }}
          >
            Edit
          </h6>
        </div>
      </section>
      <hr />
      <div className='d-none d-sm-none d-md-block'>
        <div className='d-flex justify-content-end '>
          <Button
            style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
            size='lg'
            variant='primary'
            type='submit'
            className='px-5 me-3 mt-3 mb-3'
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            PAY
          </Button>
        </div>
      </div>

      <div className='d-block d-sm-block d-md-none'>
        <div className='d-flex justify-content-center '>
          <Button
            style={{ backgroundColor: '#6B584C', border: 0, borderRadius: 0 }}
            size='lg'
            variant='primary'
            type='submit'
            className='px-5 me-3 mt-3 mb-3'
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            PAY
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
