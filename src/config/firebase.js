// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8US8IECEVU0XW1n3qa4ZDG_8epyHGkpw",
  authDomain: "netflix-gpt-56a8d.firebaseapp.com",
  projectId: "netflix-gpt-56a8d",
  storageBucket: "netflix-gpt-56a8d.appspot.com",
  messagingSenderId: "304183263712",
  appId: "1:304183263712:web:cea32951d7432758776b85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
