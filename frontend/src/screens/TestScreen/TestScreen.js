import React, { useState } from 'react'
import HomeScreenBags from '../HomeScreenBags/HomeScreenBags'
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome'
import HomeScreenStorage from '../HomeScreenStorage/HomeScreenStorage'
import { Link } from 'react-router-dom'
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
        <p>Product Title kisudyerhq asioudyaoiws </p>
        <Link
          to={'/product/5fe18171a384156e680756fe'}
        >
        <div>&#x20B9; 99</div>
        <div className='view-product-tag-btn'>View Product &#10095;</div>
        </Link>
      </div>
    </div>
    {/* <div className='product_tag_detail_box'>
      price - 99
    </div> */}
    </>
  );
}

export default TestScreen
