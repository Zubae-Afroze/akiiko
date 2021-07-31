import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'

export default function ForgotPasswordScreen() {
  const [isEmailAddressFilled, setIsEmailIdFilled] = React.useState(true)
  const [ispayButtonClicked, setIspayButtonClicked] = React.useState(false)
  const [isLinkSent, setIsLinkSent] = React.useState(false)
  let [enteredEmail] = React.useState('')

  const history = useHistory()

  function handelInputeChange(event) {
    enteredEmail = event.target.value
  }

  function validateEmailCharecters(value) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }

  const submitHandler = (e) => {
    e.preventDefault()

    let isEmailAddressFilledTemp = true

    if (enteredEmail === null || enteredEmail.trim() === '') {
      isEmailAddressFilledTemp = false
    } else {
      isEmailAddressFilledTemp = validateEmailCharecters(enteredEmail)
    }

    setIsEmailIdFilled(isEmailAddressFilledTemp)

    if (isEmailAddressFilledTemp) {
      firebase.auth().sendPasswordResetEmail(enteredEmail)

      setIspayButtonClicked(true)

      setTimeout(function () {
        setIsLinkSent(true)
        setIspayButtonClicked(false)

        setTimeout(function () {
          history.replace('/login')
        }, 500)
      }, 1000)
    }

    console.log('Recovery Email: ' + enteredEmail)
  }

  return (
    <div className='forgot-password-screen-warp'>
      <div
        style={{ maxWidth: '350px', display: 'flex', justifyContent: 'center' }}
      >
        <div style={{ maxWidth: '320px' }}>
          <h6 className='f-f-l'>
            A verfication <strong>LINK</strong> will be sent to your registered
            email address
          </h6>

          <input
            type='text'
            placeholder='Email Address'
            className={
              'email-ad ' + (isEmailAddressFilled ? '' : 'error-field-style')
            }
            // value={email}
            onChange={handelInputeChange}
            style={{ marginLeft: 0, marginBottom: '8px' }}
          />

          <button
            className='send-verfication-link-btn'
            type='submit'
            style={{ display: 'block' }}
            onClick={(e) => {
              if (!ispayButtonClicked) {
                submitHandler(e)
              }
            }}
          >
            <PayButtonClild />
          </button>
        </div>
      </div>
    </div>
  )

  function PayButtonClild() {
    if (ispayButtonClicked) {
      return (
        <Spinner
          as='span'
          animation='border'
          size='sm'
          role='status'
          aria-hidden='true'
        />
      )
    } else {
      if (isLinkSent) {
        return 'Link Sent'
      } else {
        return 'Send Link'
      }
    }
  }
}
