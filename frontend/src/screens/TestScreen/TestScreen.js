import React, { useState } from 'react'
import HomeScreenBags from '../HomeScreenBags/HomeScreenBags'
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome'
import HomeScreenStorage from '../HomeScreenStorage/HomeScreenStorage'
import Footer from '../../components/Footer/Footer'
import './TestScreen.css'
import { Container } from 'react-bootstrap'
import { storage } from '../..'

const TestScreen = () => {
  const [imageRef, setImageRef] = useState(null)

  storage
    .ref('/carousel_images/carousel_1.jpg')
    .getDownloadURL()
    .then((url) => {
      console.log(url)
      setImageRef(url)
      return url
    })

  return (
    <>
      <div className='test__banner-image'>
        <img src={imageRef} alt='image_ref' />
      </div>
      <Container>
        <HomeScreenBags />
        <HomeScreenHome />
        <HomeScreenStorage />
      </Container>
      <Footer />
    </>
  )
}

export default TestScreen
