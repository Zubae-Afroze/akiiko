import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, useSelector } from 'react-redux'
import store from './store'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import MyComponent from 'react-fullpage-custom-loader'
import SpinnerIcon from './components/Spinner/SpinnerIcon'

import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCVvHJuSGIGfx3Jkehs6idGg0BnSLzswqs',
  authDomain: 'akiiko-auth.firebaseapp.com',
  projectId: 'akiiko-auth',
  storageBucket: 'akiiko-auth.appspot.com',
  messagingSenderId: '240901391407',
  appId: '1:240901391407:web:06751d5045455c66fcf2da',
  measurementId: 'G-YD934B7ECM',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const profileConfig = {
  userProfile: null,
}

const rrfProps = {
  firebase,
  config: profileConfig,
  dispatch: store.dispatch,
}

function AuthLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth)
  if (!isLoaded(auth))
    return (
      <MyComponent
        sentences={[]}
        wrapperBackgroundColor={'rgba(255,255,255)'}
        color={'#6e4e37'}
        loaderType={'ball-spin-clockwise'}
        customLoader={<SpinnerIcon />}
      />
    )
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthLoaded>
        <App />
      </AuthLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
