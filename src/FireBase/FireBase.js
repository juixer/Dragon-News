// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoS-s-n8d_OnH6IfIu7eSjizeF_8u8qKE",
  authDomain: "dragon-news-9fc89.firebaseapp.com",
  projectId: "dragon-news-9fc89",
  storageBucket: "dragon-news-9fc89.appspot.com",
  messagingSenderId: "329573235065",
  appId: "1:329573235065:web:cc5b2cdde089f223f217a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;