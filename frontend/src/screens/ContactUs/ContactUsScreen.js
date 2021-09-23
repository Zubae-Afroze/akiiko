import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import './contactUsStyleScreen.css'

export default function ContactUsScreen() {
  return (
    <div className='contactus-wrapper'>
      <h2>Reach out to us</h2>

      <div className='contactus-infoCard-wrapper'>
        <InfoCardComp />

        <ContactUsFormComp />
      </div>
    </div>
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
  return (
    <div className='info-form-wrapper'>
      <div className='info-form-address-wrapper'>
        <strong>PRECISO FASHION</strong>
        <br />
        <span>Corporate Office</span>
        9.2.2, Cenotoph 2nd Lane, <br />
        Austin Nagar, Teynampet, <br />
        Chennai 600018 <br />
        India.
      </div>
    </div>
  )
}
