import React, { useState } from 'react'
import HomeScreenBags from '../HomeScreenBags/HomeScreenBags'
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome'
import HomeScreenStorage from '../HomeScreenStorage/HomeScreenStorage'
import Footer from '../../components/Footer/Footer'
import './TestScreen.css'
import { Container } from 'react-bootstrap'
// import { storage } from '../..'

const TestScreen = () => {
  // const [imageRef, setImageRef] = useState(null)

  // storage
  //   .ref('/carousel_images/carousel_1.jpg')
  //   .getDownloadURL()
  //   .then((url) => {
  //     console.log(url)
  //     setImageRef(url)
  //     return url
  //   })

  return (
    <>
      <div className='test__banner-image'>
        <img src={'/images/carousel_images/new_banner.jpg'} alt='image_ref' />
        <ProductTagComp />
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


function ProductTagComp(){
  return(
    <>
    {/* <div className='hover_box' /> */}
    <div className='product_tag'>
      <div className='product_detail'>
        <div>Product Title</div>
        <div>price - 99</div>
        <div className='view-product-tag-btn'>View Product &#10095;</div>
      </div>
    </div>
    {/* <div className='product_tag_detail_box'>
      price - 99
    </div> */}
    </>
  );
}

export default TestScreen
