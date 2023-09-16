import { FirebaseApp } from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqSqYIlgYq3JmYdWE9SR9VP9f3Ii6_s5A",
  authDomain: "chat-app-8ded9.firebaseapp.com",
  projectId: "chat-app-8ded9",
  storageBucket: "chat-app-8ded9.appspot.com",
  messagingSenderId: "1066889318216",
  appId: "1:1066889318216:web:69657b4ab4a2370611ed7d",
  measurementId: "G-T21300D2DR"
};

const app = initializeApp(firebaseConfig);
