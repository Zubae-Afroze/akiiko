import React from 'react'
import { Container } from 'react-bootstrap'
import JournalComp from '../../components/Journal/Journal'

const AllJournal = () => {
  return (
    <>
      <Container>
        <div style={{ marginTop: '90px' }}>
          <JournalComp />
        </div>
      </Container>
    </>
  )
}

export default AllJournal
