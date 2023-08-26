// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWlbTrjWs6X7hkwVwVQNkx4snLmBxDJWo",
  authDomain: "netflix-gpt-9a82a.firebaseapp.com",
  projectId: "netflix-gpt-9a82a",
  storageBucket: "netflix-gpt-9a82a.appspot.com",
  messagingSenderId: "699936278570",
  appId: "1:699936278570:web:06a8ad9b4a0886d94b9b53",
  measurementId: "G-F278T6KB90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
