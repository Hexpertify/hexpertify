// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD7K5-pBQIodKJfO0tsUbvQvjPw7K7YeU",
  authDomain: "consultantapp-1154a.firebaseapp.com",
  databaseURL: "https://consultantapp-1154a-default-rtdb.firebaseio.com",
  projectId: "consultantapp-1154a",
  storageBucket: "consultantapp-1154a.appspot.com",
  messagingSenderId: "225633595064",
  appId: "1:225633595064:web:197f1a9d1c4f0c775e0e4d",
  measurementId: "G-W4YBF1KB9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app2 = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app2);
