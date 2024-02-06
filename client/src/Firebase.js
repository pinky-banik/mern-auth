// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNkoSK_gdTiP0e2puK7eEhk2HF0FRW6_I",
  authDomain: "mern-auth-bd.firebaseapp.com",
  projectId: "mern-auth-bd",
  storageBucket: "mern-auth-bd.appspot.com",
  messagingSenderId: "491352029321",
  appId: "1:491352029321:web:a9856e525dbc9026ceee58",
  measurementId: "G-Z9SV17XZZG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);