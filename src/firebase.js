// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1v0z6oAnIoCuc8RmJNiA0chEeUMzEBYI",
  authDomain: "fir-signup-4501f.firebaseapp.com",
  projectId: "fir-signup-4501f",
  storageBucket: "fir-signup-4501f.appspot.com",
  messagingSenderId: "170578296041",
  appId: "1:170578296041:web:5fca6e923846ac2017c478",
  measurementId: "G-4W9CRYCP14"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;