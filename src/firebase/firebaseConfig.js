import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm2CUbcxYWKH64iKagYPzpjNT7mlFmlUo",
  authDomain: "fir-demo-97cc7.firebaseapp.com",
  projectId: "fir-demo-97cc7",
  storageBucket: "fir-demo-97cc7.firebasestorage.app",
  messagingSenderId: "826179774200",
  appId: "1:826179774200:web:8a9b6afc09465d3a897d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore();