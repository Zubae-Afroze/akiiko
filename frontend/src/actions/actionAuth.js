import axios from 'axios'

export const googleAuth = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const provider = new firebase.auth.GoogleAuthProvider()

    dispatch({ type: 'GOOGLE_LOGIN_REQUEST' })
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const name = res.user.displayName
        const email = res.user.email
        const phoneNumber = res.user.phoneNumber
        const photoURL = res.user.photoURL
        const uid = res.user.uid
        const providerId = res.credential.providerId

        const userObject = {
          name,
          email,
          phoneNumber,
          photoURL,
          uid,
          providerId,
        }

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        axios
          .post('/api/profile', userObject, config)
          .then(console.log('Go see the website'))
          .catch((e) => {
            console.log(e)
          })

        // axios({
        //   method: 'post',
        //   url: '/api/profile/',
        //   data: userObject,
        // })
      })
      .then(() => {
        dispatch({ type: 'GOOGLE_LOGIN_SUCCESS' })
      })
      .catch((error) => {
        dispatch({ type: 'GOOGLE_LOGIN_ERROR', error })
      })
  }
}

export const firebaseLogout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch({ type: 'LOGOUT_REQUEST' })
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'LOGOUT_SUCCESS' })
      })
  }
}

export const facebookAuth = (user) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const provider = new firebase.auth.FacebookAuthProvider()

    dispatch({ type: 'FACEBOOK_LOGIN_REQUEST' })
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const name = res.user.displayName
        const email = res.user.email
        const phoneNumber = res.user.phoneNumber
        const photoURL = res.user.photoURL
        const uid = res.user.uid
        const providerId = res.credential.providerId

        const userObject = {
          name,
          email,
          phoneNumber,
          photoURL,
          uid,
          providerId,
        }

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        axios
          .post('/api/profile', userObject, config)
          .then(console.log('Go see the website'))
          .catch((e) => {
            console.log(e)
          })
      })
      .then(() => {
        dispatch({ type: 'GOOGLE_LOGIN_SUCCESS' })
      })
      .catch((error) => {
        dispatch({ type: 'GOOGLE_LOGIN_ERROR', error })
      })
  }
}

export const registerWithEmail = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()

    dispatch({ type: 'EMAIL_REGISTER_REQUEST' })
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        const name = user.name
        const email = res.user.email
        const phoneNumber = user.phoneNumber
        const uid = res.user.uid
        const photoURL = ''

        const userObject = {
          name,
          email,
          phoneNumber,
          photoURL,
          uid,
        }

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        axios
          .post('/api/profile', userObject, config)
          .then(console.log('Go see the website'))
          .catch((e) => {
            console.log(e)
          })
      })
      .then(() => {
        dispatch({ type: 'EMAIL_REGISTER_SUCCESS' })
      })
      .catch((error) => {
        dispatch({ type: 'EMAIL_REGISTER_ERROR', error })
      })
  }
}

export const emailAuth = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    dispatch({ type: 'EMAIL_AUTH_REQUEST' })
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: 'EMAIL_AUTH_SUCCESS' })
      })
      .catch((error) => {
        dispatch({ type: 'EMAIL_AUTH_ERROR', error })
        console.log('Email Auth Error: '+ error);
      })
  }
}
