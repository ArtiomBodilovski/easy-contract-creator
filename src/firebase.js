// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcnKNRWXYFhsO-d57DxdhUd9Tly5eC6FU",
    authDomain: "easy-contract-creator.firebaseapp.com",
    projectId: "easy-contract-creator",
    storageBucket: "easy-contract-creator.appspot.com",
    messagingSenderId: "1072370997558",
    appId: "1:1072370997558:web:69d4200cc6a33a76a27b97",
    measurementId: "G-ZDCL6ENX9M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db}