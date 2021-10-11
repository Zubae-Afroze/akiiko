import React, { Component , useRef } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link'
import JournalComp from '../Journal/Journal'
import './Footer.css'
import './footerNewStyle.css'
import axios from 'axios'

export default class Footer extends Component {
  render() {
    //  const goTo = () => {
    //      window.scrollTo( { top: 1000});
    //  }
    return (
      <>
        <FooterTop />
        <JournalComp />
        <FooterBottom />
      </>
    )
  }
}

export function FooterBottom() {
  const SocialIconsCMP = () => {
    return (
      <div className='footer-bottom-icons-wrapper'>
        <div>
          <a
            href='https://www.instagram.com/akiiko_india/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='lni lni-instagram-filled'></i>
          </a>

          <a
            href='https://www.facebook.com/akiikoindia/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='lni lni-facebook-filled'></i>
          </a>

          <a
            href='https://www.linkedin.com/company/akiiko-india/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='lni lni-linkedin-original'></i>
          </a>

          <a
            href='https://in.pinterest.com/akiiko_india/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='lni lni-pinterest'></i>
          </a>

          <a
            href='https://twitter.com/AkiikoIndia'
            target='_blank'
            rel='noreferrer'
          >
            <i className='lni lni-twitter-original'></i>
          </a>
        </div>
      </div>
    )
  }

  const NewsLetterSuscribeCMP = () => {
    return <div className='footer-news-letter-comp-wrapper'></div>
  }

  const ContentSubTitle = ({ title, link }) => {
    return (
      <div className='footer-bottom-main-contents-subtitle'>
        {link === '' ? <>{title}</> : <Link to={link}>{title}</Link>}
      </div>
    )
  }

  const ContentTitle = ({ title, link }) => {
    return (
      <div className='footer-bottom-main-contents-title'>
        {link === '' ? <>{title}</> : <Link to={link}>{title}</Link>}
      </div>
    )
  }

  const ContentSubSubTitle = ({ title }) => {
    return (
      <div className='footer-bottom-main-contents-sub-sub-title'>{title}</div>
    )
  }

  const BlogsAndOthersCMP = () => {
    return (
      <div className='footer-bottom-main-content-comp'>
        <ContentTitle title={'CLICK BLOG'} link={'dummy'} />

        <ContentTitle title={'ABOUT US'} link={'dummy'} />

        <ContentTitle title={'CLICK BLOG'} link={'dummy'} />
      </div>
    )
  }

  const ShopCMP = () => {
    return (
      <div className='footer-bottom-main-content-comp'>
        <ContentTitle title={'SHOP'} link={''} />

        <ContentSubTitle title={'Bags'} link={'/bags'} />

        <ContentSubTitle title={'Home'} link={'/home'} />

        <ContentSubTitle title={'Lifestyle'} link={'/lifestyle'} />

        <ContentSubTitle title={'Gift'} link={'/gift'} />

        <ContentSubTitle title={'Storage'} link={'/storage'} />

        <ContentSubTitle title={'Accessories'} link={'/accessories'} />
      </div>
    )
  }

  const SupportCMP = () => {
    return (
      <div className='footer-bottom-main-content-comp'>
        <ContentTitle title={'SUPPORT'} link={''} />

        {/* <ContentSubTitle title={'Refund Policy'} link={'/Refund'} /> */}

        <ContentSubTitle title={'Shipping Policy'} link={'/ShippingPolicy'} />

        <ContentSubTitle title={'Privacy Policy'} link={'./PrivacyStatement'} />

        <ContentSubTitle
          title={'Terms & Condition'}
          link={'./TermsofService'}
        />
      </div>
    )
  }
  const GernalsCMP = () => {
    return (
      <div className='footer-bottom-main-content-comp'>
        <ContentTitle title={'Home'} link={'/'} />

        {/* <ContentTitle title={'Journal'} link={''} /> */}

        <ContentTitle title={'Our Story'} link={'/AboutUs'} />

        <ContentTitle title={'Contact Us'} link={'/contactus'} />

        {/* <ContentTitle title={'FAQs'} link={''} /> */}
      </div>
    )
  }

  const ContactCMP = () => {
    return (
      <div className='footer-bottom-main-content-comp'>
        <ContentTitle title={'CONTACT'} link={'/contactus'} />

        <ContentSubTitle title={'+9192719278'} link={''} />

        <ContentSubTitle title={'@gmail.com'} link={''} />

        <ContentSubSubTitle title={'For corprate orders:'} />

        <ContentSubTitle title={'corprate@'} link={''} />

        <ContentSubTitle title={'97286716'} link={''} />

        <ContentSubSubTitle title={'International Bulk enquiry:'} />

        <ContentSubTitle title={'interewt@kahsgd'} link={''} />
      </div>
    )
  }

  const SuscribeNewLetterCMP = () => {

    const nameRef = useRef('')
    const emailRef = useRef('')


    const onSubscribe = async () => {
      if(emailRef.current.trim() !== '' && nameRef.current.trim() !== ''){
        console.log('SUBSCRIBED')

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        const data = {
          name: nameRef.current,
          email: emailRef.current
        }
  
        const { result } = await axios.post(
          `/api/newsletter/usersubscribe`,
          data,
          config
        )

        if(!result){
          console.log(result)
        }
      }
    }

    return (
      <div className='footer-bottom-main-content-comp'>
        <ContentTitle title={'BE THE FIRST TO KNOW'} link={''} />

        <input
          placeholder='Enter your name'
          type='text'
          name='name'
          className='footer-bottom-suscribe-news-letter-input'
          onChange={(e) => {
            nameRef.current = e.target.value
          }}
        />

        {/* <p>Please enter your name</p> */}

        <input
          placeholder='Enter your email address'
          type='text'
          name='email'
          className='footer-bottom-suscribe-news-letter-input'
          onChange={(e) => {
            emailRef.current = e.target.value
          }}
        />

        {/* <p>Please enter your email</p> */}

        <button onClick={onSubscribe}>SUBSCRIBE</button>

        <SocialIconsCMP />
      </div>
    )
  }

  const FotterBottomMainConentCMP = () => {
    return (
      // <div>
      <div className='footer-bottom-main-content-wrapper'>
        <GernalsCMP />

        <SupportCMP />

        <ShopCMP />

        {/* <ContactCMP /> */}

        <SuscribeNewLetterCMP />
      </div>
      // </div>
    )
  }

  return (
    <>
      <div className='footer-bottom-wrapper'>
        {/* <SocialIconsCMP /> */}

        <FotterBottomMainConentCMP />
      </div>
    </>
  )
}

function FooterTop() {
  return (
    <>
      <div className='footer-brand-wrapper'>
        <Container className='footer-brand-container'>
          <Row className='footer-brand'>
            <Col sm={5} className='footer-brand-section-one'>
              <div className='footer-brand-logo'>akiiko</div>
              <div className='footer-brand-text'>
                Akiiko is an eco-friendly brand. We design a wide range of
                natural fabric utility products for everyday use. We value the
                power of functionality and design to find joy in simplicity.
              </div>
              <div className='footer-brand-button'>
                <Link to={'/AboutUs'}>
                  <button className='footer-button'>Read more</button>
                </Link>
              </div>
            </Col>
            <Col sm={7} className='font-wrapper footer-brand-section-two'>
              <Row className='footer-image-row'>
                <Col className='footer-image-col-1 col-sm-4 footer-icons' sm>
                  <Link smooth={false} to={'/FooterLinks#natural'}>
                    <div>
                      <img
                        src={'/images/font_images/nature.svg'}
                        alt='natural'
                      />
                    </div>
                  </Link>
                  NATURAL
                </Col>
                <Col className='footer-image-col-4 col-sm-4 footer-icons' sm>
                  <Link smooth={false} to={'/FooterLinks/#organic'}>
                    <div>
                      <img
                        src={'/images/font_images/organic.svg'}
                        alt='natural'
                      />
                    </div>
                  </Link>
                  ORGANIC
                </Col>
                <Col className='footer-image-col-3 col-sm-4 footer-icons' sm>
                  <div>
                    <Link smooth={false} to={'/FooterLinks/#sustainable'}>
                      <img
                        src={'/images/font_images/sustainable.svg'}
                        alt='natural'
                      />
                    </Link>
                  </div>
                  SUSTAINABLE
                </Col>
              </Row>
              <Row className='footer-image-row'>
                <Col className='footer-image-col-4 col-sm-4 footer-icons' sm>
                  <div>
                    <Link smooth={false} to={'/FooterLinks/#eco'}>
                      <img src={'/images/font_images/eco.svg'} alt='natural' />
                    </Link>
                  </div>
                  ECO FRIENDLY
                </Col>
                <Col className='footer-image-col-5 col-sm-4 footer-icons' sm>
                  <div>
                    <Link smooth={false} to={'/FooterLinks/#no_animal'}>
                      <img
                        src={'/images/font_images/no_animal.svg'}
                        alt='natural'
                      />
                    </Link>
                  </div>
                  NO ANIMAL SKIN
                </Col>
                <Col className='footer-image-col-6 col-sm-4 footer-icons' sm>
                  <div>
                    <Link smooth={false} to={'/FooterLinks/#no_plastic'}>
                      <img
                        src={'/images/font_images/no_plastic.svg'}
                        alt='natural'
                      />
                    </Link>
                  </div>
                  NO PLASTIC
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

// function FooterBottomOld() {
//   return (
//     <>
//       <div className='footer-main-wrapper'>
//         <Container>
//           <Row className='footer-main'>
//             <Col sm={5}>
//               <div className='footer-main-label'>Available At</div>
//               <div className='footer-main-text'>
//                 <div className='footer-bind'>
//                   <strong>PRECISO FASHION</strong>
//                   <br />
//                   <span className='footer-sub-sub'>Corporate Office</span>
//                 </div>
//                 9.2.2, Cenotoph 2nd Lane, <br />
//                 Austin Nagar, Teynampet, <br />
//                 Chennai 600018 <br />
//                 India.
//               </div>
//             </Col>
//             <Col sm={7} className='enquire col-sm-6'>
//               <div className='footer-main-label-2'>Enquire At</div>
//               <Form inline>
//                 <input
//                   type='text'
//                   placeholder='Your email ID'
//                   className='footer-main-form'
//                 />
//                 <button className='footer-main-button'>Send</button>
//               </Form>
//             </Col>
//             <div className='footer-social-icons-wrapper'>
//               <ul className='footer-social-icons'>
//                 <li>
//                   <a
//                     href='https://www.instagram.com/akiiko_india/'
//                     target='_blank'
//                     rel='noreferrer'
//                   >
//                     <i className='lni lni-instagram-filled'></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='https://www.facebook.com/akiikoindia/'
//                     target='_blank'
//                     rel='noreferrer'
//                   >
//                     <i className='lni lni-facebook-filled'></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='https://www.linkedin.com/company/akiiko-india/'
//                     target='_blank'
//                     rel='noreferrer'
//                   >
//                     <i className='lni lni-linkedin-original'></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='https://in.pinterest.com/akiiko_india/'
//                     target='_blank'
//                     rel='noreferrer'
//                   >
//                     <i className='lni lni-pinterest'></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='https://twitter.com/AkiikoIndia'
//                     target='_blank'
//                     rel='noreferrer'
//                   >
//                     <i className='lni lni-twitter-original'></i>
//                   </a>
//                 </li>
//                 {/* <li><a href='/'><i className="lni lni-youtube"></i></a></li> */}
//               </ul>
//             </div>
//           </Row>
//           <div className='very-end-blyat'>
//             <ul className='very-end-blyat-list'>
//               <li>
//                 <Link to={'/AboutUs'}>ABOUT US</Link>
//               </li>
//               <li>
//                 <Link to={'/Careers'}>CAREERS</Link>
//               </li>
//               <li>
//                 <Link to={'/Refund'}>REFUND POLICY</Link>
//               </li>
//               <li>
//                 <Link to={'/ShippingPolicy'}>SHIPPING POLICY</Link>
//               </li>
//               <li>
//                 <Link to={'./TermsofService'}>TERMS OF SERVICE</Link>
//               </li>
//               <li>
//                 <Link to={'./PrivacyStatement'}>PRIVACY STATEMENT</Link>
//               </li>
//             </ul>
//             {/* <div
//                 className='d-flex justify-content-end align-items-end'
//                 style={{ marginTop: '20px' }}
//               >
//                 All rights reserved &copy; Akiiko 2020
//               </div> */}
//           </div>
//         </Container>
//       </div>
//     </>
//   )
// }
