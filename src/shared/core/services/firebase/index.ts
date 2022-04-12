// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebaseConfig from "./fireBaseConfig";
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_apiKey,
//   authDomain: process.env.FIREBASE_authDomain,
//   projectId: process.env.FIREBASE_projectId,
//   messagingSenderId: process.env.FIREBASE_messagingSenderId,
//   appId: process.env.FIREBASE_appId,
// };

// Initialize Firebase
export default initializeApp(firebaseConfig);
