// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPL3o1e89TrF_luQDO7YdeZx1HSr7k9Nc",
  authDomain: "react-spas-8446e.firebaseapp.com",
  databaseURL: "https://react-spas-8446e.firebaseio.com",
  projectId: "react-spas-8446e",
  storageBucket: "react-spas-8446e.appspot.com",
  messagingSenderId: "43737789288",
  appId: "1:43737789288:web:163094e420cd675fe21cdd",
  measurementId: "G-Y2CTJPTWDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);