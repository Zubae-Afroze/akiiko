import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import './contactUsStyleScreen.css'
import Footer from '../../components/Footer/Footer'

export default function ContactUsScreen() {
  return (
    <>
      <div className='contactus-wrapper'>
        {/* <h2>Reach out to us</h2> */}

        {/* <h2>Get in Touch</h2> */}

        <div className='contactus-infoCard-wrapper'>
          <h1>Get in</h1>

          <ContactUsFormComp />

          <InfoCardComp />
        </div>
      </div>
      <Footer />
    </>
  )
}

const InputField = ({ title, formdata }) => {
  return (
    <>
      <div className='input-form-field-wrapper'>
        <p>{title}</p>

        <input
          type='text'
          name={`${title}`}
          onChange={(e) => {
            formdata.current[e.target.name] = e.target.value
          }}
        />
      </div>
    </>
  )
}

function ContactUsFormComp() {
  const formdata = useRef({
    Name: '',
    Email: '',
    Mobile: '',
    Message: '',
  })

  const [buttonText, setbuttontext] = useState('SUBMIT')

  const onFormSubmit = () => {
    const tempObj = {
      Name: '',
      Email: '',
      Mobile: '',
      Message: '',
    }

    setbuttontext('Loading....')

    const result = JSON.stringify(tempObj) === JSON.stringify(formdata.current)

    // console.log(formdata.current)

    if (result) {
      //not Allowed
      setbuttontext('Please Fill')
    } else {
      //snd mail
      //     setTimeout(() => {
      //     setbuttontext('Submitted')
      // }, 2000);
      let eParams = {
        name: formdata.current.Name,
        email: formdata.current.Email,
        mobile: formdata.current.Mobile,
        message: formdata.current.Message,
        reply_to: formdata.current.Email,
      }

      const sendEmail = (eParams) => {
        emailjs
          .send(
            'service_fm0oqld',
            'template_h3zx1hx',
            eParams,
            'user_bSVvr9c86Qj9bUFzhyGc4'
          )
          .then(function (response) {
            console.log('SUCCESS!', response.status, response.text)
            setbuttontext('Sent')
          })
          .catch(function (error) {
            console.log('FAILED!', error)
            setbuttontext('SUBMIT')
          })
      }
      sendEmail(eParams)
    }
  }

  return (
    <div className='contactus-form-wrapper'>
      <InputField title={'Name'} formdata={formdata} />

      <InputField title={'Email'} formdata={formdata} />

      <InputField title={'Mobile'} formdata={formdata} />

      <InputField title={'Message'} formdata={formdata} />

      <button onClick={onFormSubmit}>{buttonText}</button>
    </div>
  )
}

function InfoCardComp() {
  const PhoneSVg = () => {
    return (
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          fill='currentColor'
          className='bi bi-telephone-fill'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
          />
        </svg>
        <span>&nbsp;&nbsp;9858590505</span>
        <br />
      </>
    )
  }

  const MailSVG = () => {
    return (
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          fill='currentColor'
          class='bi bi-envelope-fill'
          viewBox='0 0 16 16'
        >
          <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
        </svg>
        <span> &nbsp;&nbsp;orders@precisofashion.com </span> <br />
      </>
    )
  }

  return (
    <div className='info-form-wrapper'>
      <div className='info-form-address-wrapper'>
        <strong>Preciso Fashion</strong>
        {/* <div style={{ height: '5px' }} /> */}
        <h6>Corporate Office</h6>
        <div style={{ height: '10px' }} />
        <PhoneSVg />
        <div style={{ height: '5px' }} />
        <MailSVG />
        <div style={{ height: '10px' }} />
        <p>
          9.2.2, Cenotoph 2nd Lane, <br />
          Austin Nagar, Teynampet, <br />
          Chennai - 600018, Tamil Nadu <br />
          {/* <i className="lni lni-phone" /> */}
          India.
        </p>
      </div>
    </div>
  )
}
