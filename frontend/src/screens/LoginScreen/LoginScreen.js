import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from '../../components/Spinner/SpinnerIcon'

import Message from '../../components/Message/Message'

import { googleAuth, facebookAuth, emailAuth } from '../../actions/actionAuth'
import { ToastContainer, toast } from 'react-toastify'

import './LoginScreen.css'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.firebase.auth)

  const auth = useSelector((state) => state.auth)

  const { loading, error, userInfo } = userLogin

  const location = useLocation()
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorFields, setErrorFields] = useState([false, false])

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userLogin.uid) {
      toast('Logged in successfully', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      history.push(redirect)
    }

    if (
      auth !== null &&
      auth.authError !== null &&
      auth.authError.length !== 0
    ) {
      let fireBasePasswordError =
        'The password is invalid or the user does not have a password.'
      let fireBaseUserDosentExistError =
        'There is no user record corresponding to this identifier. The user may have been deleted.'

      if (auth.authError === fireBasePasswordError) {
        toast('Invalid Password', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }

      if (auth.authError === fireBaseUserDosentExistError) {
        toast('User does not exist', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  }, [history, userInfo, redirect, userLogin.uid, auth])

  function validateEmailCharecters(value) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  }

  const submitHandler = (e) => {
    e.preventDefault()

    let isValidated = true
    let updatedList = [false, false]

    if (email === null || email.trim() === '') {
      updatedList[0] = true
      isValidated = false
    } else {
      updatedList[0] = !validateEmailCharecters(email)
      isValidated = validateEmailCharecters(email)
    }
    if (password === null || password.trim() === '') {
      updatedList[1] = true
      isValidated = false
    }

    if (isValidated) {
      const creds = { email, password }
      dispatch(emailAuth(creds))
      console.log('Signed In')
    } else {
      console.log('Fill The Form')
      setErrorFields(updatedList)
    }
  }

  const googleHandler = () => {
    dispatch(googleAuth())
  }

  const facebookHandler = () => {
    dispatch(facebookAuth())
  }

  return (
    <React.Fragment>
      <div className='login-wrap'>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {loading && (
          <MyComponent
            sentences={[]}
            wrapperBackgroundColor={'rgba(255,255,255)'}
            color={'#6e4e37'}
            loaderType={'ball-spin-clockwise'}
            customLoader={<SpinnerIcon />}
          />
        )}
        {/* <Card className='card-wrap'>
                    <Card.Body>
                        <h1>Sign In</h1>
                        {error && <Message>{error}</Message>}
                        <Form onSubmit={submitHandler}>
                            <Form.Group className='login-group' controlId='email'>
                                <Form.Label className='fm-label'>Email Address</Form.Label>
                                <Form.Control className='fc-label' type='email' placeholder={'Enter email'} value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control><i className="far fa-envelope icon-email"></i>
                            </Form.Group>

                            <Form.Group className='login-group' controlId='password'>
                                <Form.Label className='fm-label'>Password</Form.Label>
                                <Form.Control className='fc-label' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control><i class="fas fa-lock icon-email"></i>
                            </Form.Group>

                            <div className='sign-wrap'><button className='sign-button' type='submit'>Sign In</button></div>
                        </Form>
                        <Row className='card-text-wrap'>
                            <Col>
                                <span className='card-text'>Dont have an account? {''}</span>
                                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}><span style={{ textDecoration: 'underline', textTransform: 'uppercase' }}>Please Register</span></Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card> */}

        <div className='sign-in-web'>
          <div className='sign-in-title'>
            <Link to={'/'}>
              <img
                src='./images/home_screen_images/closes.svg'
                alt='close-img'
                className='close-icons'
              />
            </Link>
            Sign In
          </div>
          {error && <Message>{error}</Message>}
          <Form onSubmit={submitHandler}>
            <div className='sign-in-row-one' controlid='email'>
              <div className='google-sign' onClick={googleHandler}>
                <img
                  src='./images/home_screen_images/google.svg'
                  alt='google-svg'
                  className='google'
                />
                Continue with Google
              </div>
              <input
                type='text'
                placeholder='Email Address'
                className={
                  'email-ad ' + (errorFields[0] ? 'error-field-style' : '')
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Link
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                <div className='user-reg'>
                  <img
                    src='./images/home_screen_images/user-round.svg'
                    alt='user-svg'
                    className='user-round'
                  />
                  Create an account
                </div>
              </Link>
            </div>

            <div className='sign-in-row-two' controlid='password'>
              <div className='facebook-sign' onClick={facebookHandler}>
                <img
                  src='./images/home_screen_images/facebook.svg'
                  alt='facebook-svg'
                  className='facebook'
                />
                Continue with Facebook
              </div>
              <input
                type='password'
                placeholder='Password'
                className={
                  'password-box ' + (errorFields[1] ? 'error-field-style' : '')
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='sign-in-row-three'>
              <div className='sign-btn-grp'>
                <button className='sign-in-button' type='submit'>
                  Sign In
                </button>
                <span className='checkbox-and-forgot-psw'>
                  <span>
                    <input type='checkbox' className='check-box' />
                    Remember me
                  </span>
                  <Link to={'/forgotpassword'}>
                    <span>Forgot your password?</span>
                  </Link>
                </span>
              </div>
            </div>
          </Form>
        </div>

        <div className='sign-in-tab'>
          <div className='sign-in-title'>
            <Link to={'/'}>
              <img
                src='./images/home_screen_images/closes.svg'
                alt='close-img'
                className='close-icons'
              />
            </Link>
            Sign In
          </div>
          {error && <Message>{error}</Message>}
          <Form onSubmit={submitHandler}>
            <div className='sign-in-row-one' controlid='email'>
              <div className='google-sign' onClick={googleHandler}>
                <img
                  src='./images/home_screen_images/google.svg'
                  alt='google-svg'
                  className='google'
                />
                Continue with Google
              </div>
              <input
                type='text'
                placeholder='Email Address'
                className={
                  'email-ad ' + (errorFields[0] ? 'error-field-style' : '')
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='sign-in-row-two' controlid='password'>
              <div className='facebook-sign' onClick={facebookHandler}>
                <img
                  src='./images/home_screen_images/facebook.svg'
                  alt='facebook-svg'
                  className='facebook'
                />
                Continue with Facebook
              </div>
              <input
                type='password'
                placeholder='Password'
                className={
                  'password-box ' + (errorFields[1] ? 'error-field-style' : '')
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='sign-in-row-three1'>
              <Link
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                <div className='user-reg'>
                  <img
                    src='./images/home_screen_images/user-round.svg'
                    alt='user-svg'
                    className='user-round'
                  />
                  Create an account
                </div>
              </Link>
              <div className='sign-btn-grp'>
                <button className='sign-in-button' type='submit'>
                  Sign In
                </button>
                <span className='checkbox-and-forgot-psw'>
                  <span>
                    <input type='checkbox' className='check-box' />
                    Remember me
                  </span>

                  <Link to={'/forgotpassword'}>
                    <span>Forgot your password?</span>
                  </Link>
                </span>
              </div>
            </div>
          </Form>
        </div>

        <div className='sign-in-mobile'>
          <div className='sign-in-mob-grp'>
            <div className='sign-in-title'>
              <Link to={'/'}>
                <img
                  src='./images/home_screen_images/closes.svg'
                  alt='close-img'
                  className='close-icons'
                />
              </Link>
              Sign In
            </div>
            {error && <Message>{error}</Message>}
            <Form onSubmit={submitHandler}>
              <div className='google-sign' onClick={googleHandler}>
                <img
                  src='./images/home_screen_images/google.svg'
                  alt='google-svg'
                  className='google'
                />
                Continue with Google
              </div>
              <div className='facebook-sign' onClick={facebookHandler}>
                <img
                  src='./images/home_screen_images/facebook.svg'
                  alt='facebook-svg'
                  className='facebook'
                />
                Continue with Facebook
              </div>
              <input
                type='text'
                placeholder='Email Address'
                className={
                  'email-ad ' + (errorFields[0] ? 'error-field-style' : '')
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                className={
                  'password-box ' + (errorFields[1] ? 'error-field-style' : '')
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='sign-btn-grp'>
                <button className='sign-in-button' type='submit'>
                  Sign In
                </button>
                <span className='checkbox-and-forgot-psw'>
                  <span>
                    <input type='checkbox' className='check-box' />
                    Remember me
                  </span>
                  <Link to={'/forgotpassword'}>
                    <span>Forgot your password?</span>
                  </Link>
                </span>
              </div>
              <Link
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                <div className='user-reg'>
                  <img
                    src='./images/home_screen_images/user-round.svg'
                    alt='user-svg'
                    className='user-round'
                  />
                  Create an account
                </div>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginScreen
