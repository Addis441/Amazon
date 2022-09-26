// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOYqojQH0iWUFjXFN_d3oILzqf8_GQ19g",
  authDomain: "project-eff29.firebaseapp.com",
  projectId: "project-eff29",
  storageBucket: "project-eff29.appspot.com",
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  messagingSenderId: "840954146325",
  appId: "1:840954146325:web:0ee09d48286df150df281c",
  measurementId: "G-S0WC0FNKM2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const auth = getAuth(app);

// The latest update for auth with db
const auth = firebase.auth();
export const db = app.firestore();

export default auth;