import React from 'react'
import HomeScreenBags from '../HomeScreenBags/HomeScreenBags'
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome'
import HomeScreenStorage from '../HomeScreenStorage/HomeScreenStorage'
import Footer from '../../components/Footer/Footer'
import './TestScreen.css'
import { Container } from 'react-bootstrap'

const TestScreen = () => {
  return (
    <>
      <div className='test__banner-image'>
        <img src='/images/carousel_images/new_banner.jpg' alt='banner_image' />
      </div>
      <Container>
        <HomeScreenBags />
        <HomeScreenHome />
        <HomeScreenStorage />
        <Footer />
      </Container>
    </>
  )
}

export default TestScreen
