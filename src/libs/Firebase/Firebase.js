// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6MPl7Tx8YaVwQuF5oJEO7F34kkJ60jwU",
  authDomain: "habot-cbb5f.firebaseapp.com",
  projectId: "habot-cbb5f",
  storageBucket: "habot-cbb5f.firebasestorage.app",
  messagingSenderId: "441842438532",
  appId: "1:441842438532:web:74ab75462182230dc3cdd1",
  measurementId: "G-LJV5YHSEFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);