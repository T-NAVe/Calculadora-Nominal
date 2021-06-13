//I didn't make a .env this time here is an example of the code, rename this file to configFIrebase.js and replace the keys for your own.
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
}

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, db, googleAuthProvider}