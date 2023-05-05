// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "GET FROM FIREBASE",
    authDomain: "GET FROM FIREBASE",
    projectId: "GET FROM FIREBASE",
    storageBucket: "GET FROM FIREBASE",
    messagingSenderId: "GET FROM FIREBASE",
    appId: "GET FROM FIREBASE",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();
export { db };
