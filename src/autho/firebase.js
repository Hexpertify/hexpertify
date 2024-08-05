// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtfmJ1-d3RA9rcdGjYrZT-4xlthO0Z5YM",
  authDomain: "consultantapp-1b838.firebaseapp.com",
  databaseURL: "https://consultantapp-1b838-default-rtdb.firebaseio.com",
  projectId: "consultantapp-1b838",
  storageBucket: "consultantapp-1b838.appspot.com",
  messagingSenderId: "238366414583",
  appId: "1:238366414583:web:377cdf2e354bdb624325f2",
  measurementId: "G-JMM3WD6ZSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app2 = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app2);
