// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN6FUY5JGLGajoqBNecy5iV5khy7w97bI",
  authDomain: "blogxton.firebaseapp.com",
  projectId: "blogxton",
  storageBucket: "blogxton.appspot.com",
  messagingSenderId: "293325381290",
  appId: "1:293325381290:web:ec74882b6b45db99397ad3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
