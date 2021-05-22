import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBVRyF3T-ZkjOvXe0TRDDtabwM7JPUabMk",
    authDomain: "calculadora-nominal.firebaseapp.com",
    projectId: "calculadora-nominal",
    storageBucket: "calculadora-nominal.appspot.com",
    messagingSenderId: "631364955719",
    appId: "1:631364955719:web:a8d8d9b9e7b026bc820b62"
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, db, googleAuthProvider}