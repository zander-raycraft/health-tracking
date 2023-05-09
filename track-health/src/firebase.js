// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdUWUALeXknN_qeyeCkSAz0SN972-wRjU",
    authDomain: "mystarhealt.firebaseapp.com",
    projectId: "mystarhealt",
    storageBucket: "mystarhealt.appspot.com",
    messagingSenderId: "674990342115",
    appId: "1:674990342115:web:154b9b98b88aa311802ad6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;