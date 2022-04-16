// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXpLQ-fAgHHJVHhF5uuS0f0aE4-IldbZw",
  authDomain: "gym-trainer-a4e7b.firebaseapp.com",
  projectId: "gym-trainer-a4e7b",
  storageBucket: "gym-trainer-a4e7b.appspot.com",
  messagingSenderId: "981037834173",
  appId: "1:981037834173:web:420db2e84a0a7aaa20bcd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;