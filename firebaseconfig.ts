// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDysw2TKLBpKcz0NQsgubfiyhm-2Uq7y0U",
  authDomain: "chat-app-55f65.firebaseapp.com",
  projectId: "chat-app-55f65",
  storageBucket: "chat-app-55f65.appspot.com",
  messagingSenderId: "674050264617",
  appId: "1:674050264617:web:86fdce6944e4a14e93d638",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export { auth, db };
