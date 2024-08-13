// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern--blog--mnnk.firebaseapp.com",
  projectId: "mern--blog--mnnk",
  storageBucket: "mern--blog--mnnk.appspot.com",
  messagingSenderId: "199771618240",
  appId: "1:199771618240:web:10df50b9d6fbcc6a682625"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

