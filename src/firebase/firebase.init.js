// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6lZzId36dKTivRKpawwUiT8ldCcYm8rE",
    authDomain: "timple-firebase-auth-70900.firebaseapp.com",
    projectId: "timple-firebase-auth-70900",
    storageBucket: "timple-firebase-auth-70900.appspot.com",
    messagingSenderId: "620523748245",
    appId: "1:620523748245:web:cbf5e5500b3aef27f0149c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;