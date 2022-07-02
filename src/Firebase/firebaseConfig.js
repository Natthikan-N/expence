// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATQToz5rLlLxTcYovLiFodIUdhJ_0yLTs",
  authDomain: "expense-44f3c.firebaseapp.com",
  projectId: "expense-44f3c",
  storageBucket: "expense-44f3c.appspot.com",
  messagingSenderId: "326481364211",
  appId: "1:326481364211:web:5c72a40c9e08c34d332386",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const AppDB = getFirestore(app);

export { AppDB };
