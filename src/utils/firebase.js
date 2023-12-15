// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkF51UjSUiBdo98XsBZnPMGyai-IyidDs",
  authDomain: "cinemai-b437d.firebaseapp.com",
  projectId: "cinemai-b437d",
  storageBucket: "cinemai-b437d.appspot.com",
  messagingSenderId: "110958409903",
  appId: "1:110958409903:web:654472282c15924971bc5a",
  measurementId: "G-4RQZZRV2WW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
