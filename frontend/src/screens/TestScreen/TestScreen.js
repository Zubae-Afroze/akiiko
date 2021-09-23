import React, { useState } from 'react'
import HomeScreenBags from '../HomeScreenBags/HomeScreenBags'
import HomeScreenHome from '../HomeScreenHome/HomeScreenHome'
import HomeScreenStorage from '../HomeScreenStorage/HomeScreenStorage'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './TestScreen.css'
import { Container } from 'react-bootstrap'
import ProductTagComponent from '../../components/ProductTagComp/ProductTagComp'
import CarouselItem from '../../components/CarouselItemComp/CarouselItem'

import desktopImg from './assets/product_desktop_BG.jpg';
import laptopImg from './assets/product_laptop_BG.jpg';
import ipadImg from './assets/product_ipad_BG.jpg';
import mobileImg from './assets/product_mobile_BG.jpg';
import productImg from './assets/productImg.png';


// import desktopImg from './Linen bag desktop.jpg';
// import laptopImg from './Linen bag laptop.jpg';
// import ipadImg from './Linen bag ipad.jpg';
// import mobileImgt from './Linen bag mobile.jpg';

// import desktopImg from './Desktop.jpg';
// import tabImg from './Ipad.jpg';
// import mob from './Mobile.jpg';
import {  Carousel } from 'react-bootstrap'

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
  const intervalVal = 6000

  return (
    <>
    <CarouselItem 
      urls={[desktopImg,laptopImg,ipadImg,mobileImg]} 
      productImages={[productImg]} 
      productImageWidth={['25vw','40vw','70vw','80vw']} 
      productImageHeight={['25vw','40vw','70vw','80vw']} 
    >
        <ProductTagComponent 
          desktop={['28%','50.5%']} 
          laptop={['28%','50.5%']} 
          tab={['28%','50.5%']} tabLS={['28%','50.5%']}
          mob={['28%','50.5%']} 
          title={'Bag 1'} price={'100'} 
        />
        <ProductTagComponent 
          desktop={['60%','35%']} 
          laptop={['60%','35%']} 
          tab={['60%','35%']} tabLS={['60%','35%']}
          mob={['60%','35%']} 
          title={'Bag 2'} price={'100'} 
        />
        <ProductTagComponent 
          desktop={['50%','76%']} 
          laptop={['50%','76%']} 
          tab={['50%','76%']} tabLS={['50%','76%']}
          mob={['50%','76%']} 
          title={'Bag 3'} price={'100'} 
        />
        {/* <ProductTagComponent 
          desktop={['28%','61%']} 
          laptop={['30%','61%']} 
          tab={['25%','53%']} tabLS={['30%','61%']}
          mob={['20%','43%']} 
          title={'Bag 2'} price={'100'} 
        />
        <ProductTagComponent 
          desktop={['26%','76%']} 
          laptop={['32%','76%']} 
          tab={['32%','76%']} tabLS={['32%','76%']}
          mob={['30%','70%']} 
          title={'Bag 3'} price={'100'} 
        /> */}
        {/* <ProductTagComponent desktop={['16%','40%']} laptop={['24.5%','40%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
        <ProductTagComponent desktop={['30%','45%']} laptop={['34%','46%']} tab={['13%','72%']} mob={['12%','80%']} title={'Bag 1'} price={'1099'} />
        <ProductTagComponent desktop={['28%','61%']} laptop={['30%','61%']} tab={['13%','72%']} mob={['12%','80%']} title={'Bag 2'} price={'2999'} />
        <ProductTagComponent desktop={['26%','76%']} laptop={['32%','76%']} tab={['13%','72%']} mob={['12%','80%']} title={'Bag 3'} price={'1599'} /> */}
      </CarouselItem>
    {/* <Carousel pause={'hover'} controls={false}>

      <Carousel.Item interval={intervalVal}>
        <CarouselItem urls={[desktopImg,laptopImg,ipadImg,mobileImg]}>
          <ProductTagComponent laptop={['15%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem>
      </Carousel.Item>

      <Carousel.Item interval={intervalVal}>
      <CarouselItem urls={[desktopImg,laptopImg,ipadImg,mobileImg]}>
          <ProductTagComponent laptop={['15%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem>
        <Carousel.Caption className='carousel-slide-2'></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={intervalVal}>
        <CarouselItem urls={[desktopImg,laptopImg,ipadImg,mobileImg]}>
          <ProductTagComponent laptop={['18%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem>
        <Carousel.Caption className='carousel-slide-3'></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={intervalVal}>
        <CarouselItem urls={[desktopImg,laptopImg,ipadImg,mobileImg]}>
          <ProductTagComponent laptop={['18%','40%']} tab={['15%','40%']} mob={['12%','40%']} title={'Product 1'} price={'100'} />
          <ProductTagComponent laptop={['30%','52%']} tab={['23%','45%']} mob={['18%','50%']} title={'Product 2'} price={'1200'} />
          <ProductTagComponent laptop={['13%','80%']} tab={['13%','72%']} mob={['12%','80%']} title={'Product 3'} price={'999'} />
        </CarouselItem>
      </Carousel.Item>
    </Carousel> */}
    <Footer />

    </>
  )
}

function TestComp() {
  return (
    <>
      <div className='test__banner-image'>
        {/* <img src={'/images/carousel_images/new_banner.jpg'} alt='image_ref' /> */}
        {/* <ProductTagComp /> */}
        <ProductTagComponent
          laptop={['18%', '40%']}
          tab={['15%', '40%']}
          mob={['12%', '40%']}
          title={'Product 1'}
          price={'100'}
        />
        <ProductTagComponent
          laptop={['30%', '52%']}
          tab={['23%', '45%']}
          mob={['18%', '50%']}
          title={'Product 2'}
          price={'1200'}
        />
        <ProductTagComponent
          laptop={['13%', '80%']}
          tab={['13%', '72%']}
          mob={['12%', '80%']}
          title={'Product 3'}
          price={'999'}
        />
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

function ProductTagComp() {
  return (
    <>
      {/* <div className='hover_box' /> */}
      <div className='product_tag'>
        <div className='product_detail'>
          <p>Product Title kisudyerhq asioudyaoiws </p>
          <Link to={'/product/5fe18171a384156e680756fe'}>
            <div>&#x20B9; 99</div>
            <div className='view-product-tag-btn'>View Product &#10095;</div>
          </Link>
        </div>
      </div>
      {/* <div className='product_tag_detail_box'>
      price - 99
    </div> */}
    </>
  )
}

export default TestScreen
