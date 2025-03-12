// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// auth
import{getAuth} from "firebase/auth";
import  "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxmRXLrHcXPYANgDE4ACiauQDV1uhDeWw",
  authDomain: "clone-2025-dc79f.firebaseapp.com",
  projectId: "clone-2025-dc79f",
  storageBucket: "clone-2025-dc79f.firebasestorage.app",
  messagingSenderId: "530812165137",
  appId: "1:530812165137:web:3384ee474de6a17d4fa5b0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

// npm install -g firebase-tools