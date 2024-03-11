// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3yY7faCCwJQB1rIbvaaC5H6FqDJ2GNxw",
  authDomain: "hellabooking-3abe3.firebaseapp.com",
  projectId: "hellabooking-3abe3",
  storageBucket: "hellabooking-3abe3.appspot.com",
  messagingSenderId: "226297739088",
  appId: "1:226297739088:web:4b52c613c765901bec1e55",
  measurementId: "G-8G5V3C1996"   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
