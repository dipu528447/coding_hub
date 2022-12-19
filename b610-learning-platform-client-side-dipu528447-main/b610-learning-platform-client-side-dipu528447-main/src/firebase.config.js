// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsYydQ3un99DJWFGCoyquHMee79PQLzkY",
  authDomain: "coding-hub-efb6a.firebaseapp.com",
  projectId: "coding-hub-efb6a",
  storageBucket: "coding-hub-efb6a.appspot.com",
  messagingSenderId: "882418902578",
  appId: "1:882418902578:web:0ffa1e12c19eda53ef3e2b"
};
console.log(process.env.REACT_APP_apiKey)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;