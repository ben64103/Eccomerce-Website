// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries bv zxc

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmXdh5GKfl8LfQvg6Ds--nJcvMuo1Gna8",
  authDomain: "envato-eccomerce.firebaseapp.com",
  projectId: "envato-eccomerce",
  storageBucket: "envato-eccomerce.appspot.com",
  messagingSenderId: "478693554293",
  appId: "1:478693554293:web:a331a88ad6a3af9576e03c",
  measurementId: "G-3VP53DZ6E4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
