// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlHbuvs7sPs3Ipaq79bt6VxEswrZ5_FHU",
  authDomain: "scouting-d7fed.firebaseapp.com",
  projectId: "scouting-d7fed",
  storageBucket: "scouting-d7fed.appspot.com",
  messagingSenderId: "1067372801750",
  appId: "1:1067372801750:web:0e6b938d4188cba804a377",
  measurementId: "G-6XTHW03S8D"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Everything Up is Firebase Stuff

