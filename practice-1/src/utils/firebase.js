// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyYF88cvRIBVTv95yiZaCQFZaz2_-5sBc",
  authDomain: "test-baea1.firebaseapp.com",
  projectId: "test-baea1",
  storageBucket: "test-baea1.firebasestorage.app",
  messagingSenderId: "113714352807",
  appId: "1:113714352807:web:37028e1c435f691a780182",
  measurementId: "G-Q7G1ZPD9XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);