// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu-2WJy0xLNVF_BYbppH5f415kpK1xvZc",
  authDomain: "villanelle-closet-ecommerce.firebaseapp.com",
  projectId: "villanelle-closet-ecommerce",
  storageBucket: "villanelle-closet-ecommerce.appspot.com",
  messagingSenderId: "621148751636",
  appId: "1:621148751636:web:34eeafa20e30a316296401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app) 

export default db;
