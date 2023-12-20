// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5MRju3TqqkGTOdOmmqoldhDqBTOmJ9fE",
  authDomain: "cinemai-62913.firebaseapp.com",
  projectId: "cinemai-62913",
  storageBucket: "cinemai-62913.appspot.com",
  messagingSenderId: "513566071723",
  appId: "1:513566071723:web:d63adf4d729d3e2f5190ee",
  measurementId: "G-KX705E255H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
