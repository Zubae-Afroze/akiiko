import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCVvHJuSGIGfx3Jkehs6idGg0BnSLzswqs',
  authDomain: 'akiiko-auth.firebaseapp.com',
  projectId: 'akiiko-auth',
  storageBucket: 'akiiko-auth.appspot.com',
  messagingSenderId: '240901391407',
  appId: '1:240901391407:web:06751d5045455c66fcf2da',
  measurementId: 'G-YD934B7ECM',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebaseConfig
